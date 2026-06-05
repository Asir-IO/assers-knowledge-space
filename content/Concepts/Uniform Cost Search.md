---
title: Uniform Cost Search
date: 2026-06-03
tags:
  - type/concept
  - course/AI313
  - domain/ai
draft: false
thumbnail:
comments: true
related-notes:
---
It finds the optimal path between a starting state S and a goal state G by exploring nodes with the least cumulative cost from S, until reaching G and there are no paths from S that are shorter than the current path to G, this is when it knows it successfully found the shortest path between S and G, and terminates.

This will always find the optimal path from S to G, but if there are *alot of paths with similar costs*, it'll have a broad movement while exploring states (similar to BFS) and will explore alot of unnecessary states before reaching the goal state.

**How could this be solved?** find another way to differentiate paths with similar costs.

[[A-Star Search|A*]] solves this by adding a heuristic value to the total cost of a state path...

- (!) UCS is identical to BFS if path costs are *all identical*.

---
# Example
...

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note | Type |
| --------- | ---- | ---- |

<!-- SerializedQuery END -->

---
# Sources

- 