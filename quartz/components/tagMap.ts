// custsom tag page routes
export const globalTagMap: Record<string, string> = {
    "type/concept": "diagrams",
    "type/strategy": "strategies",
    "type/workflow": "workflows",
}

export function getTagRoute(tag: string): string {
    return globalTagMap[tag] ?? `tags/${tag}`
}