// custsom tag page routes
export const globalTagMap: Record<string, string> = {
    "type/concept": "concepts",
    "type/strategy": "strategies",
    "type/workflow": "workflows",
    "domain/cs-theory": "knowledge-domains#computer-science-theory",
    "domain/systems": "knowledge-domains#systems-and-architecture",
    "domain/ai": "knowledge-domains#artificial-intelligence",
    "domain/maths": "knowledge-domains#mathematics",
}

export function getTagRoute(tag: string): string {
    return globalTagMap[tag] ?? `tags/${tag}`
}