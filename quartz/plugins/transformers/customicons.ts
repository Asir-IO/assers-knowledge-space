import { QuartzTransformerPlugin } from "../types"

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
        text = text.replace(/\\:(g|fa|fab)-/g, ":$1-")
        return text
        },
    }
}