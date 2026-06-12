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
            if (
              (node.tagName === "img" || node.tagName === "source" || node.tagName === "video" || node.tagName === "audio") &&
              node.properties?.src
            ) {
              const src = String(node.properties.src)
              
              if (!src.startsWith("http") && !src.startsWith("data:")) {
                let cleanSrc = decodeURI(src).replace(/^[\.\/]+/, "")
                
                // Revert Quartz's structural .excalidraw.svg extension change back to .md to find it in our vault index
                let lookupSrc = cleanSrc

                // Find the exact original vault file path using our loose lookup key
                const lookupKey = toLookupKey(lookupSrc)
                let realPath = assetMap[lookupKey] || cleanSrc

                // Construct the final R2 URL, encoding original spaces back to valid HTML (%20)
                node.properties.src = encodeURI(`${r2Base}/${realPath}`)
              }
            }
          })
        },
      ]
    },
  }
}