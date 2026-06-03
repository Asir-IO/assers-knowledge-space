---
isNote: true
title: Breadth First Search
date: 2026-03-31
tags:
  - type/concept
  - course/CS321
  - domain/cs-theory
  - course/CS214
  - course/AI313
draft: false
thumbnail: "[[BFS and DFS 2026-03-31 19.11.51.excalidraw.svg]]"
comments: true
related-notes:
---
# Mental Model 
Imagine you have a [[Drawing a Complete Tree|tree]] and you want to visit every node *level-by-level*. Naively, you might try to do the following,   
![[BFS and DFS 2026-03-31 14.58.27.excalidraw.mp4]]   
 You visit every node successfully, but since nodes on the same level (adjacent nodes) usually belong to different subtrees, you end up taking very long, inefficient paths moving back and forth between these subtrees, especially as you reach deeper levels. 

> How could we reduce those long paths? 

What if we saved **A** as a "root" and used it as a starting point whenever we wanted to reach any node?
![[BFS and DFS 2026-03-31 19.01.36.excalidraw.svg]]   
Setting A as a starting point (root) made,
- the path to its children (B and C) the *simplest* it could be.   
	![[BFS and DFS 2026-03-31 19.33.33.excalidraw.svg]]   
- the paths that require transitioning between its left and right subtrees *simpler*.   
	![[BFS and DFS 2026-03-31 19.39.43.excalidraw.svg]]   
This is great, but can we do better?   

> why don't we do the exact same thing with **B** and **C**?   

![[BFS and DFS 2026-03-31 19.43.21.excalidraw.svg]]    
Doing this made,
- the path to their children (D, E) and (F, G) the simplest it could be.
	![[BFS and DFS 2026-03-31 19.50.59.excalidraw.svg]]   
-  the paths that require transitioning between their left and right subtrees *simpler*.  
	![[BFS and DFS 2026-03-31 20.00.09.excalidraw.svg]]

If we save every set of parents on each level as local "roots," we guarantee the simplest access to their children, and thus to the whole tree.    ![[BFS and DFS 2026-03-31 19.11.51.excalidraw.svg]] 
This level-by-level expansion is exactly what Breadth First Search (BFS) is.   

![[BFS and DFS 2026-03-31 19.11.51.excalidraw.mp4]]
%%
![[BFS and DFS 2026-03-30 19.50.24.excalidraw]]
![[BFS and DFS 2026-03-30 20.01.29.excalidraw]]
%%

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->
