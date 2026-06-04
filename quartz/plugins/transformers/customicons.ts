import { QuartzTransformerPlugin } from "../types"
import path from "path"
import fs from "fs"

export const CustomIcons: QuartzTransformerPlugin = () => {
  return {
    name: "CustomIcons",
    textTransform(_ctx, src) {
      let text = src.toString()
      // 1. Custom Symbols: :g-symbol-name:
      text = text.replace(/(?<!\\):g-([a-z0-9_]+):/g, (match, iconName) => {
        return `<span class="material-symbols-outlined custom-symbol">${iconName}</span>`
      })
      // 2. Font Awesome Solids: :fa-icon-name:
      text = text.replace(/(?<!\\):fa-([a-z0-9\-]+):/g, (match, iconName) => {
        return `<i class="fa-solid fa-${iconName} custom-fa-symbol"></i>`
      })
      // 3. Font Awesome Brands: :fab-icon-name:
      text = text.replace(/(?<!\\):fab-([a-z0-9\-]+):/g, (match, iconName) => {
        return `<i class="fa-brands fa-${iconName} custom-fa-symbol"></i>`
      })
      // 4. Pixel Art Icons: :pi-icon-name:
      text = text.replace(/(?<!\\):pi-([a-z0-9\-]+):/g, (match, iconName) => {
        try {
          const iconPath = path.resolve(`node_modules/pixelarticons/svg/${iconName}.svg`)
          let svgContent = fs.readFileSync(iconPath, "utf8")
          svgContent = svgContent.replace(
            "<svg",
            `<svg class="custom-pi-symbol" width="18" height="auto"`,
          )
          svgContent = svgContent.replace(/fill="[^"]*"/g, "")

          return svgContent
        } catch (e) {
          console.warn(`Could not find pixelarticon: ${iconName}`)
          return `Could not find pixelarticon: ${iconName}`
        }
      })

      text = text.replace(/\\:(g|fa|fab|pi)-/g, ":$1-")
      return text
    },
  }
}
