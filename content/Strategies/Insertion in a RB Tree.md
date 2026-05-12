---
isNote: true
title: Insertion in a RB Tree
date: 2026-01-12
tags:
  - type/strategy
  - topic/
  - course/CS321
  - domain/cs-theory
draft: false
thumbnail: "[[Insertion in a RB Tree 2026-01-12 16.51.58.excalidraw.svg]]"
comments: true
related-notes:
-  "[[Deletion in a RB Tree]]"
---
## What is the problem
You'll either:
- be given an existing RB tree and asked to insert a set of nodes into it.
- be given a set of nodes and asked to insert them into an empty RB tree.
## Before you begin
In both cases, going through each given node, u should:
1. place it in its correct position in the current tree, and color it red.
2. mark it as Z, its parent as P, its uncle as U, and its grandparent as G.

	![[Insertion in a RB Tree 2026-01-12 16.51.58.excalidraw.svg]]
3. follow the strategy below.
## The keys
### Symbols Key
![[Insertion in a RB Tree 2026-01-12 17.00.37.excalidraw.svg]]
### Arrows/lines Key
![[Insertion in a RB Tree 2026-01-12 17.10.02.excalidraw.svg]]
## The Strategy

> [!NOTE]
> I let P and U be the right and left children of G respectively while showing the strategy.
> However, this strategy will work just as well if they were reversed.

![[Insertion in a RB Tree 2026-01-12 15.18.35.excalidraw.svg|100%]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail                                                                                                                              | Note                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| ![[Deletion in a RB Tree 2026-01-13 18.37.35.excalidraw.svg\|Deletion in a RB Tree 2026-01-13 18.37.35.excalidraw.svg\|120]] | [[Deletion in a RB Tree]] |

<!-- SerializedQuery END -->

