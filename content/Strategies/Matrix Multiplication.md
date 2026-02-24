---
isNote: true
title: Matrix Multiplication
date: 2026-02-24
tags:
  - type/strategy
  - topic/
  - domain/math
draft: false
---
## What is the problem
Given 2 matrices $A^T$, and $B$.
%%
> [!example] Example
> $$
> A^T = \begin{bmatrix}
> a_{00} & a_{01} \\
> a_{10} & a_{11} \\
> \end{bmatrix}
> \qquad 
> B = \begin{bmatrix}
> b_{00} & b_{01} \\
> b_{10} & b_{11} \\
> \end{bmatrix}
> $$

%%
*Multiply* them: Compute $A^T * B$. 
## Before you begin
1. view $A^T$ as a bunch of row vectors.    
$$
A^T = \begin{bmatrix}
\leftarrow & \vec{a}_0 & \rightarrow \\
\leftarrow & \vec{a}_1 & \rightarrow\\
\end{bmatrix}
$$
2. highlight each row vector in $A^T$ by a <mark style="background: #CACFD9A6;">line</mark> that also shows its index.    
	![[Matrix Multiplication 2026-02-24 17.12.25.excalidraw.svg]]
3. view $B$ as a bunch of column vectors.    

$$
B = \begin{bmatrix}
\uparrow & \uparrow \\
\vec{b}_0 & \vec{b}_1 \\
\downarrow & \downarrow
\end{bmatrix}
$$
4. highlight each row vector in $B$ by a <mark style="background: #CACFD9A6;">line</mark> that also shows its index.       
	![[Matrix Multiplication 2026-02-24 17.19.00.excalidraw.svg]]

Their <mark style="background: #CACFD9A6;">multiplication</mark> matrix is then constructed by computing the *dot* product at every intersection.    
![[Matrix Multiplication 2026-02-24 01.14.37.excalidraw.svg]]   

---
## Strategy
1. calculate the intersection dot products of the 0th row in $A^T$.    
	![[Matrix Multiplication 2026-02-24 17.39.10.excalidraw.svg]]    
	![[Matrix Multiplication 2026-02-24 17.45.11.excalidraw.svg]]   
2.  calculate the intersection dot products of the 1st row in $A^T$.    
	![[Matrix Multiplication 2026-02-24 17.49.54.excalidraw.svg]]    
	![[Matrix Multiplication 2026-02-24 17.51.40.excalidraw.svg]]

---
## Connections
- **Related to:** [[Transposing a Matrix]]
