// custsom tag page routes
export const globalTagMap: Record<string, string> = {
    "type/diagram": "diagrams",
    "type/concept": "concepts",
    "type/strategy": "strategies",
}

export function getTagRoute(tag: string): string {
    return globalTagMap[tag] ?? `tags/${tag}`
}