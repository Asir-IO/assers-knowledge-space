---
isNote: true
title: Matrix Multiplications as Outer Products
date: 2026-03-09
tags:
  - topic/
  - course/
  - domain/math
  - type/concept
draft: false
thumbnail: "[[Matrix Multiplication 2026-02-24 01.14.37.excalidraw.svg]]"
comments: true
related-notes:
  - "[[Vectors Outer Product]]"
  - "[[Transposing a Matrix]]"
  - "[[Matrix Multiplication as Inner Products]]"

---
## What is the problem
You have a matrix $A$ that u view as a columns matrix, and want to multiply it by a rows matrix $B^T$.    
$$
A = \begin{bmatrix}
\uparrow & \uparrow \\
\vec{a}_0 & \vec{a}_1 \\
\downarrow & \downarrow
\end{bmatrix}\;\;\;
B^T = \begin{bmatrix}
\leftarrow & \vec{b}_0 & \rightarrow \\
\leftarrow & \vec{b}_1 & \rightarrow\\
\end{bmatrix}
$$

You want to Compute $A * B^T$. 
## Strategy
1. highlight each column vector in $A$ by a <mark style="background: #CACFD9A6;">line</mark> that also shows its index.    
	![[Matrix Multiplications as Outer Products 2026-03-09 00.53.50.excalidraw.svg]]
2. highlight each row vector in $B^T$ by a <mark style="background: #CACFD9A6;">line</mark> that also shows its index.       
	![[Matrix Multiplications as Outer Products 2026-03-09 00.55.32.excalidraw.svg]]

Their <mark style="background: #CACFD9A6;">multiplication</mark> matrix is then constructed by computing the [[Vectors Outer Product|outer product]] at every intersection.    
![[Matrix Multiplication 2026-02-24 01.14.37.excalidraw.svg]]   

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail                                                                                                                                                              | Note                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![[lab-temp-thumb.excalidraw.svg\|120]]                                                                                                                                | [[Vectors Outer Product]]                                                           |
| ![[Matrix Multiplication as Dot Products 2026-03-09 01.23.38.excalidraw.svg\|Matrix Multiplication as Dot Products 2026-03-09 01.23.38.excalidraw.svg\|120]] | [[Matrix Multiplication as Inner Products]] |
| ![[Transposing a Matrix 2026-02-24 16.11.14.excalidraw.svg\|Transposing a Matrix 2026-02-24 16.11.14.excalidraw.svg\|120]]                                   | [[Transposing a Matrix]]                                                           |

<!-- SerializedQuery END -->
