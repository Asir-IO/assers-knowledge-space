import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { Element } from "hast"
import fs from "fs"
import path from "path"
export const CdnLinks: QuartzTransformerPlugin = () => {
  const assetMap: Record<string, string> = {}
  const contentDir = path.join(process.cwd(), "content")

  // Creates a clean matching key by ignoring casing, spaces, and hyphens completely
  const toLookupKey = (s: string) => {
    return s
      .toLowerCase()
      .replace(/\\/g, "/")
      .replace(/[\s-_]/g, "") // Removes spaces, hyphens, and underscores for matching only
  }

  // Index the true case-sensitive filenames from your local vault once at startup
  if (fs.existsSync(contentDir)) {
    const readFiles = (dir: string) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true })
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
          readFiles(fullPath)
        } else {
          const relativePath = path.relative(contentDir, fullPath).replace(/\\/g, "/")
          assetMap[toLookupKey(relativePath)] = relativePath
        }
      }
    }
    readFiles(contentDir)
  }

  return {
    name: "CdnLinks",
    htmlPlugins(ctx) {
      const r2Base = ctx.cfg.configuration.r2Bucket.replace(/\/$/, "")

      return [
        () => (tree) => {
          visit(tree, "element", (node: Element) => {
            let srcLikeProp =
              (node.tagName === "img" ||
                node.tagName === "source" ||
                node.tagName === "video" ||
                node.tagName === "audio") &&
              node.properties?.src
                ? "src"
                : node.tagName === "object" && node.properties?.data
                  ? "data"
                  : undefined

            if (!srcLikeProp) return

            const rawUrl = String(node.properties[srcLikeProp])

            // 1. Resolve to the CDN URL
            if (!rawUrl.startsWith("http") && !rawUrl.startsWith("data:")) {
              const cleanSrc = decodeURI(rawUrl).replace(/^[\.\/]+/, "")
              const lookupSrc = cleanSrc

              // Find the exact original vault file path using our loose lookup key
              const lookupKey = toLookupKey(lookupSrc)
              const realPath = assetMap[lookupKey] || cleanSrc

              // Construct the final R2 URL
              node.properties[srcLikeProp] = encodeURI(`${r2Base}/${realPath}`)
            }

            // 2. Morph the tag from <img> to <object> for SVGs
            const finalUrl = String(node.properties[srcLikeProp])

            if (node.tagName === "img" && finalUrl.split("?")[0].toLowerCase().endsWith(".svg")) {
              let isThumbnail = false
              if (node.properties.width) {
                // Parse the width safely (handles "120", "120px", etc.)
                const widthVal = parseInt(String(node.properties.width).replace(/\D/g, ""), 10)
                if (!isNaN(widthVal) && widthVal <= 120) {
                  isThumbnail = true
                }
              }
              if (!isThumbnail) {
                node.tagName = "object"
                node.properties.data = node.properties[srcLikeProp] // Move url to 'data'
                delete node.properties.src // Clean up 'src'
                node.properties.type = "image/svg+xml"

                // Preserve Obsidian alt-text as aria-label
                if (node.properties.alt) {
                  node.properties["aria-label"] = node.properties.alt
                  delete node.properties.alt
                }

                // Apply the custom styles you originally had in ofm.ts
                const existingStyle = node.properties.style ? `${node.properties.style} ` : ""
                node.properties.style = existingStyle + "max-width: 100%;"
              }
            }
          })
        },
      ]
    },
  }
}
