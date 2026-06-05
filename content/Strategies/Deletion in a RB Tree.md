---
title: Deletion in a RB Tree
date: 2026-01-13
tags:
  - type/strategy
  - course/CS321
  - domain/cs-theory
draft: false
thumbnail: "[[Deletion in a RB Tree 2026-01-13 18.37.35.excalidraw.svg]]"
comments: true
related-notes:
  - "[[Insertion in a RB Tree]]"
---
## What is the problem
You'll be given a RB Tree and asked to delete a set of (to-be-deleted) nodes from it.
## Before you begin
Going through each to-be-deleted node, u should:
1. perform the regular BST node deletion (but DON'T get rid of the node yet) => this will make the *to-be-deleted* node a leaf node.
2. If it's red, u may delete it **(you're done)**. 
	
	Otherwise, mark it as Z and turn it into a DB node, mark its parent as P, its sibling as S, its sibling's near child as NC, and its sibling's far child as FC.
	
	![[Deletion in a RB Tree 2026-01-13 18.37.35.excalidraw.svg]]
3. follow the strategy below.
## The keys
### Symbols Key
![[Deletion in a RB Tree 2026-01-13 20.30.16.excalidraw.svg]]
### Arrows/lines Key
![[Insertion in a RB Tree 2026-01-12 17.10.02.excalidraw.svg]]
## The Strategy
> [!NOTE]
> I let Z be the left child of P while showing the strategy.
> However, this strategy will work just as well it was reversed.

![[Deletion in a RB Tree 2026-01-13 18.43.06.excalidraw.svg|100%]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail                                                                                                                                | Note                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| ![[Insertion in a RB Tree 2026-01-12 16.51.58.excalidraw.svg\|Insertion in a RB Tree 2026-01-12 16.51.58.excalidraw.svg\|120]] | [[Insertion in a RB Tree]] |

<!-- SerializedQuery END -->

