---
isNote: true
title: Vectors Outer Product
date: 2026-03-09
tags:
  - type/concept
  - topic/
  - course/
  - domain/math
draft: false
---
## Mental Model
The *outer product* is a mathematical operation that a column vector performs on a row vector.    

Given that $a$ is the column vector and $b$ is the row vector,    
I like to think of their outer product ($a \otimes b$) as $a$ storing scaled copies of itself by each element in $b$ inside a columns matrix.
$$
\begin{bmatrix} \uparrow \\ a \\ \downarrow \end{bmatrix} \otimes \begin{bmatrix} b_0 & b_1 & \dots & b_n \end{bmatrix} = \begin{bmatrix} \uparrow & \uparrow & & \uparrow \\ b_0 * a & b_1 * a & \dots & b_n * a \\ \downarrow & \downarrow & & \downarrow \end{bmatrix}
$$
Or as $b$ storing scaled copies of itself by each element in $a$ inside a rows matrix.
$$
\begin{bmatrix} a_0 \\ a_1 \\ \vdots \\ a_m \end{bmatrix} \otimes \begin{bmatrix} \leftarrow & b & \rightarrow \end{bmatrix} = \begin{bmatrix} \leftarrow & a_0 * b & \rightarrow \\ \leftarrow & a_1 * b & \rightarrow \\ & \vdots & \\ \leftarrow & a_m * b & \rightarrow \end{bmatrix}
$$
---
## Connections
- [[]]