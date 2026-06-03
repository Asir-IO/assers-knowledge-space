---
isNote: true
title: Matrix Multiplication as Inner Products
date: 2026-02-24
tags:
  - domain/maths
  - type/concept
draft: false
thumbnail: "[[Matrix Multiplication as Dot Products 2026-03-09 01.23.38.excalidraw.svg]]"
comments: true
related-notes:
  - "[[Transposing a Matrix]]"
  - "[[Matrix Multiplications as Outer Products]]"
---
## What is the problem
You have a matrix $A^T$ that u view as a rows matrix, and want to multiply it by a columns matrix $B$.
$$
A^T = \begin{bmatrix}
\leftarrow & \vec{a}_0 & \rightarrow \\
\leftarrow & \vec{a}_1 & \rightarrow\\
\end{bmatrix} \;\;\;
B = \begin{bmatrix}
\uparrow & \uparrow \\
\vec{b}_0 & \vec{b}_1 \\
\downarrow & \downarrow
\end{bmatrix}
$$

You want to Compute $A^T * B$. 
## Before you begin
1. highlight each row vector in $A^T$ by a <mark style="background: #CACFD9A6;">line</mark> that also shows its index.    
	![[Matrix Multiplication 2026-02-24 17.12.25.excalidraw.svg]]
2. highlight each column vector in $B$ by a <mark style="background: #CACFD9A6;">line</mark> that also shows its index.       
	![[Matrix Multiplication 2026-02-24 17.19.00.excalidraw.svg]]

Their <mark style="background: #CACFD9A6;">multiplication</mark> matrix is then constructed by computing the <a href="https://www.geeksforgeeks.org/maths/inner-product-on-vector/" target="_blank">Inner product</a> at every intersection.    
![[Matrix Multiplication as Dot Products 2026-03-09 01.23.38.excalidraw.svg]]   

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail                                                                                                                              | Note                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![[Matrix Multiplication 2026-02-24 01.14.37.excalidraw.svg\|Matrix Multiplication 2026-02-24 01.14.37.excalidraw.svg\|120]] | [[Matrix Multiplications as Outer Products]] |
| ![[Transposing a Matrix 2026-02-24 16.11.14.excalidraw.svg\|Transposing a Matrix 2026-02-24 16.11.14.excalidraw.svg\|120]]   | [[Transposing a Matrix]]                                                             |

<!-- SerializedQuery END -->

