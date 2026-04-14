---
isNote: true
title: Matrix Multiplication as Column Combinations
date: 2026-03-13
tags:
  - type/concept
  - topic/
  - course/
  - domain/math
draft: false
comments: true
---
## Mental Model
Given that A is a Columns matrix and B is a Columns matrix,    
$$
A = \begin{bmatrix} 
\uparrow & \uparrow \\ 
\vec{a}_0 & \vec{a}_1 \\ 
\downarrow & \downarrow 
\end{bmatrix} 
\hspace{4cm} 
B = \begin{bmatrix} 
\uparrow & \uparrow \\ 
\vec{b}_0 & \vec{b}_1 \\ 
\downarrow & \downarrow 
\end{bmatrix} 
$$

---
$$
A * B = \begin{bmatrix} \uparrow & \uparrow \\ \vec{a}_0 & \vec{a}_1 \\ \downarrow & \downarrow \end{bmatrix} * \begin{bmatrix} \uparrow & \uparrow \\ \vec{b}_0 & \vec{b}_1 \\ \downarrow & \downarrow \end{bmatrix} = \begin{bmatrix} \uparrow & \uparrow \\ A * \vec{b}_0 & A * \vec{b}_1 \\ \downarrow & \downarrow \end{bmatrix}
$$
$A$ multiplies every column vector in $B$.

---
## How A multiplies every Column Vector
$$
\begin{bmatrix} 
\uparrow \\ 
A * \vec{b}_0 \\ 
\downarrow
\end{bmatrix}
= \begin{bmatrix} 
\uparrow & \uparrow \\ 
\vec{a}_0 & \vec{a}_1 \\ 
\downarrow & \downarrow 
\end{bmatrix} *
\begin{bmatrix} 
(\vec{b}_{0})_0 \\ 
 \\ 
(\vec{b}_{0})_1
\end{bmatrix} =
(\vec{b}_{0})_0 *
\begin{bmatrix} 
\uparrow \\ 
\vec{a}_0 \\ 
\downarrow
\end{bmatrix} +
\;
(\vec{b}_{0})_1 *
\begin{bmatrix} 
\uparrow \\ 
\vec{a}_1 \\ 
\downarrow
\end{bmatrix}
$$

$$
\begin{bmatrix} 
\uparrow \\ 
A * \vec{b}_1 \\ 
\downarrow
\end{bmatrix}
= \begin{bmatrix} 
\uparrow & \uparrow \\ 
\vec{a}_0 & \vec{a}_1 \\ 
\downarrow & \downarrow 
\end{bmatrix} *
\begin{bmatrix} 
(\vec{b}_{1})_0 \\ 
 \\ 
(\vec{b}_{1})_1
\end{bmatrix} =
(\vec{b}_{1})_0 *
\begin{bmatrix} 
\uparrow \\ 
\vec{a}_0 \\ 
\downarrow
\end{bmatrix} +
\;
(\vec{b}_{1})_1 *
\begin{bmatrix} 
\uparrow \\ 
\vec{a}_1 \\ 
\downarrow
\end{bmatrix}
$$

---
## Connections
-  [[]]