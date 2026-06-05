---
title: Drawing a Complete Tree
date: 2026-03-30
tags:
  - type/strategy
  - course/CS214
  - domain/cs-theory
draft: false
thumbnail: "[[Drawing a Complete Tree Quickly 2026-03-30 20.25.27.excalidraw.svg]]"
comments: true
related-notes:
---
## What is the problem
You want to draw a complete `n-ary` tree of `h` levels, but you keep running out of horizontal space for your nodes as you add deeper levels.   

Spoiler alert: you avoid this completely by drawing the tree from the ground up.
## Strategy
1. Draw the deepest level's nodes [[Quickly placing ticks Evenly on a line|evenly spaced]] across your page.    
	There will be exactly $n^{h-1}$ of them.   
	![[Drawing a Complete Tree Quickly 2026-03-30 20.21.01.excalidraw.svg]]
2. Move up one level. Place a parent node centered directly above each group of `n` nodes.   
	(e.g., if `n = 2`, place one parent node to encompass every pair).
	![[Drawing a Complete Tree Quickly 2026-03-30 20.25.27.excalidraw.svg]]   
3. keep doing this going up, until reaching the topmost level, that contains a single node, the root.      
	![[Drawing a Complete Tree Quickly 2026-03-30 20.40.10.excalidraw.mp4]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->
