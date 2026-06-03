---
isNote: true
title: Transposing a Matrix
date: 2026-02-24
tags:
  - type/strategy
  - domain/maths
draft: false
thumbnail: "[[Transposing a Matrix 2026-02-24 16.11.14.excalidraw.svg]]"
comments: true
related-notes:
---
## What is the problem
Given a Matrix
$$
A = 
\begin{bmatrix}
\uparrow & \uparrow & & \uparrow\\
\vec{a}_0 & \vec{a}_1 & \vdots & \vec{a}_n\\
\downarrow & \downarrow & & \downarrow\\
\end{bmatrix}
$$
(by convention, $A$ is always a columns matrix)    
*Find* its transposed rows matrix.
## Strategy
Starting from the farthest/rightmost vector:
1. Rotate it anti-clockwise $\circlearrowleft$    
	![[Transposing a Matrix 2026-02-24 16.11.14.excalidraw.svg]]    
    (Do the same for the next vector, and then the one after it (moving to the *left*), but raise each one a bit after rotation)
2. (...)    
	![[Transposing a Matrix 2026-02-24 16.20.24.excalidraw.svg]]    
3. ($\vec{a}_1$)   
	![[Transposing a Matrix 2026-02-24 16.21.50.excalidraw.svg]]    
4. ($\vec{a}_0$)   
	![[Transposing a Matrix 2026-02-24 16.24.02.excalidraw.svg]]    
5. Finally, Squish them all into a row vector.    
![[Transposing a Matrix 2026-02-24 16.26.41.excalidraw.svg]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->
