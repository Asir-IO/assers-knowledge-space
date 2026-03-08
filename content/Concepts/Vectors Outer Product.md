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
I like to think of their outer product ($a \otimes b$) as $a$ storing scaled copies of itself by each element in $b$ inside a matrix.
$$
\begin{bmatrix} \uparrow \\ a \\ \downarrow \end{bmatrix} \otimes \begin{bmatrix} b_1 & b_2 & \dots & b_n \end{bmatrix} = \begin{bmatrix} \uparrow & \uparrow & & \uparrow \\ b_1 * a & b_2 * a & \dots & b_n * a \\ \downarrow & \downarrow & & \downarrow \end{bmatrix}
$$


---
## Connections
- [[]]