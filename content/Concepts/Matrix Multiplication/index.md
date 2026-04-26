---
isNote: true
title: Matrix Multiplication
date: 2026-03-13
tags:
  - type/concept
  - topic/
  - course/
  - domain/math
draft: false
comments: true
---
---
> [!quote] Dr. Gilbert Strang
> The wonderful thing about matrix multiplication is you can do it alot of ways, it comes out the same every way, and each way tells you something.

---
## Mental Model
If $A$ is a matrix, what do u think it is?    

A collection of numbers arranged in a grid?    
$$
A = \begin{bmatrix}
\cdot & \cdot \\
\cdot & \cdot \\
\end{bmatrix}
$$
And then multiplying it by another matrix $B$ is some operation that spits out another matrix $C$ that is another grid of numbers?    
$$
A*B \;=\; \begin{bmatrix}
\cdot & \cdot \\
\cdot & \cdot \\
\end{bmatrix} \;=\;
C
$$
And numbers in $C$ are computed by moving through $A$ and $B$ in some defined way that seems arbitrary and can be easily forgotten?

This is a totally valid view to have. However, a little shift in perspective may give u a more intuitive understanding of the multiplication operation and will reveal it as as *not* a single operation, but 4 different types of operations.
### What a Matrix is
Bringing back our matrix $A$, it can be viewed as a collection of either columns or rows.
$$
A = \begin{bmatrix} 
\uparrow & \uparrow \\ 
\vec{a}_0 & \vec{a}_1 \\ 
\downarrow & \downarrow 
\end{bmatrix} \hspace{4cm} 
A = \begin{bmatrix} 
\leftarrow & \vec{a}_0 & \rightarrow 
\\ \leftarrow & \vec{a}_1 & \rightarrow 
\end{bmatrix}
$$
Multiplying it by another matrix $B$ that's either a Rows or Columns matrix results in 4 different types of operations (depending on how each matrix is viewed)

---
## [[Matrix Multiplication as Inner Products]]
$A * B =$ Rows matrix \* Columns matrix $= \begin{bmatrix} \leftarrow & \vec{a}_0 & \rightarrow \\ \leftarrow & \vec{a}_1 & \rightarrow \end{bmatrix} * \begin{bmatrix} \uparrow & \uparrow \\ \vec{b}_0 & \vec{b}_1 \\ \downarrow & \downarrow \end{bmatrix} = C$    

> $C$ contains the inner product of every vector in $A$ with each vector in $B$.

---
## [[Matrix Multiplications as Outer Products]]    

$A * B =$ Columns matrix \* Rows matrix $= \begin{bmatrix} \uparrow & \uparrow \\ \vec{a}_0 & \vec{a}_1 \\ \downarrow & \downarrow \end{bmatrix} * \begin{bmatrix} \leftarrow & \vec{b}_0 & \rightarrow \\ \leftarrow & \vec{b}_1 & \rightarrow \end{bmatrix} = C$    
> $C$ is the sum of the outer product matrix of every vector in $A$ with each vector in $B$.

---
## [[Matrix Multiplication as Column Combinations]]    

 $A * B =$ Columns matrix \* Columns matrix     $= \begin{bmatrix} \uparrow & \uparrow \\ \vec{a}_0 & \vec{a}_1 \\ \downarrow & \downarrow \end{bmatrix} * \begin{bmatrix} \uparrow & \uparrow \\ \vec{b}_0 & \vec{b}_1 \\ \downarrow & \downarrow \end{bmatrix} = \begin{bmatrix} \uparrow & \uparrow \\ A * \vec{b}_0 & A * \vec{b}_1 \\ \downarrow & \downarrow \end{bmatrix} = C = \begin{bmatrix} \uparrow & \uparrow \\ \vec{c}_0 & \vec{c}_1 \\ \downarrow & \downarrow \end{bmatrix}$    
> $A$ multiplies every column vector in $B$.

---
## [[Matrix Multiplication as Row Combinations]]    

 $A * B =$ Rows matrix \* Rows matrix     $= \begin{bmatrix} \leftarrow & \vec{a}_0 & \rightarrow \\ \leftarrow & \vec{a}_1 & \rightarrow \end{bmatrix} * \begin{bmatrix} \leftarrow & \vec{b}_0 & \rightarrow \\ \leftarrow & \vec{b}_1 & \rightarrow \end{bmatrix} = \begin{bmatrix} \leftarrow & \vec{a}_0 * B & \rightarrow \\ \leftarrow & \vec{a}_1 * B & \rightarrow \end{bmatrix} = C = \begin{bmatrix} \leftarrow & \vec{c}_0 & \rightarrow \\ \leftarrow & \vec{c}_1 & \rightarrow \end{bmatrix}$    
> Every row vector in $A$ multiplies $B$.

---
## Connections
-  [[]]

%%add an example%%