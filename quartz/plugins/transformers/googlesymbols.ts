import { QuartzTransformerPlugin } from "../types"

export const GoogleSymbols: QuartzTransformerPlugin = () => {
    return {
        name: "GoogleSymbols",
        textTransform(_ctx, src) {
            // 🟢 CHANGE: "rounded" -> "outlined"
            return src.toString().replace(/:g-([a-z0-9_]+):/g, (match, iconName) => {
                return `<span class="material-symbols-outlined custom-symbol">${iconName}</span>`
            })
        },
    }
}