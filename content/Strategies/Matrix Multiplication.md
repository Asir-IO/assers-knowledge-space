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
Given 2 matrices A, and B
%%
> [!example] Example
> $$
> A = \begin{bmatrix}
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
*Multiply* them: Compute $A * B$. 
## Before you begin
1. view $A$ as a bunch of row vectors.

$$
A = \begin{bmatrix}
\leftarrow & \vec{a}_0 & \rightarrow \\
\leftarrow & \vec{a}_1 & \rightarrow\\
\end{bmatrix}
$$

2. view $B$ as a bunch of column vectors.

$$
B = \begin{bmatrix}
\uparrow & \uparrow \\
\vec{b}_0 & \vec{b}_1 \\
\downarrow & \downarrow
\end{bmatrix}
$$


---
## Strategy
![[Matrix Multiplication 2026-02-24 01.14.37.excalidraw.svg]]

---
## Connections
- **Related to:** [[...]]
