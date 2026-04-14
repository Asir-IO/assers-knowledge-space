---
isNote: true
title: Matrix Multiplication as Row Combinations
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

Given that A is a Rows matrix and B is a Rows matrix,    

$$
A \;\; = \;\; \begin{bmatrix} 
\leftarrow & \vec{a}_0 & \rightarrow \\ 
\leftarrow & \vec{a}_1 & \rightarrow 
\end{bmatrix} 
\hspace{4cm} 
B \;\; = \;\; \begin{bmatrix} 
\leftarrow & \vec{b}_0 & \rightarrow \\ 
\leftarrow & \vec{b}_1 & \rightarrow 
\end{bmatrix} 
$$
---

$$
A * B \;\; = \;\; \begin{bmatrix} \leftarrow & \vec{a}_0 & \rightarrow \\ \leftarrow & \vec{a}_1 & \rightarrow \end{bmatrix} * \begin{bmatrix} \leftarrow & \vec{b}_0 & \rightarrow \\ \leftarrow & \vec{b}_1 & \rightarrow \end{bmatrix} \;\; = \;\; \begin{bmatrix} \leftarrow & \vec{a}_0 * B & \rightarrow \\ \leftarrow & \vec{a}_1 * B & \rightarrow \end{bmatrix}
$$
Every row vector in $A$ multiplies $B$.

---
## How every Row Vector multiplies B
$$
\begin{aligned}
\begin{bmatrix} \leftarrow & \vec{a}_0 * B & \rightarrow \end{bmatrix} 
&\;\; = \;\; \begin{bmatrix} (\vec{a}_{0})_0 & (\vec{a}_{0})_1 \end{bmatrix} \; * \; \begin{bmatrix} \leftarrow & \vec{b}_0 & \rightarrow \\ \leftarrow & \vec{b}_1 & \rightarrow \end{bmatrix} \\
&\;\; = \;\; (\vec{a}_{0})_0 * \begin{bmatrix} \leftarrow & \vec{b}_0 & \rightarrow \end{bmatrix} \;\; + \;\; (\vec{a}_{0})_1 * \begin{bmatrix} \leftarrow & \vec{b}_1 & \rightarrow \end{bmatrix}
\end{aligned}
$$

$$
\begin{aligned}
\begin{bmatrix} \leftarrow & \vec{a}_1 * B & \rightarrow \end{bmatrix} 
&\;\; = \;\; \begin{bmatrix} (\vec{a}_{1})_0 & (\vec{a}_{1})_1 \end{bmatrix} \; * \; \begin{bmatrix} \leftarrow & \vec{b}_0 & \rightarrow \\ \leftarrow & \vec{b}_1 & \rightarrow \end{bmatrix} \\
&\;\; = \;\; (\vec{a}_{1})_0 * \begin{bmatrix} \leftarrow & \vec{b}_0 & \rightarrow \end{bmatrix} \;\; + \;\; (\vec{a}_{1})_1 * \begin{bmatrix} \leftarrow & \vec{b}_1 & \rightarrow \end{bmatrix}
\end{aligned}
$$

---

## Connections
* [[]]