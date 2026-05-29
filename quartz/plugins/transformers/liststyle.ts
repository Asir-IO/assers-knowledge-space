import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

export const ObsidianListStyle: QuartzTransformerPlugin = () => {
  return {
    name: "ObsidianListStyle",
    htmlPlugins() {
      return [
        () => {
          return (tree: any) => {
            visit(tree, "element", (node: any) => {
              if (node.tagName === "ol") {
                const firstItem = node.children.find((c: any) => c.type === "element" && c.tagName === "li")
                
                if (firstItem) {
                  let firstTextNode: any = null
                  
                  visit(firstItem, "text", (textNode: any) => {
                    if (!firstTextNode && textNode.value.trim() !== "") {
                      firstTextNode = textNode
                    }
                  })

                  if (firstTextNode) {
                    // Check if the text starts with {A}, {a}, {I}, {i}, or {1}
                    const match = firstTextNode.value.match(/^\s*\{([aAiI1])\}\s*/)
                    
                    if (match) {
                      const listType = match[1]

                      const cssMap: Record<string, string> = {
                        "a": "lower-alpha",
                        "A": "upper-alpha",
                        "i": "lower-roman",
                        "I": "upper-roman",
                        "1": "decimal"
                      }
                      
                      node.properties = node.properties || {}
                      node.properties["data-list"] = cssMap[listType]
                      
                      firstTextNode.value = firstTextNode.value.replace(/^\s*\{[aAiI1]\}\s*/, "")
                    }
                  }
                }
              }
            })
          }
        }
      ]
    }
  }
}