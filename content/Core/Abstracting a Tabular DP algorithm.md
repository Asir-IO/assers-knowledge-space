---
isNote: true
title: Abstracting a Tabular DP algorithm
date: 2026-01-26
tags:
  - topic/
  - course/CS321
  - domain/cs-theory
  - type/
draft: false
thumbnail: "[[Abstracting how a tabular DP algorithm operates 2026-01-26 13.23.58.excalidraw.svg]]"
comments: true
---
## The Trigger
The formal definition of how a *tabular* DP algorithm operates is clear enough, but what if there is a visual way to quickly abstract it?

---
### Coin-Collecting
**Formal Definition**
$$
F(i, j) = \max\{F(i-1), F(i, j-1)\} + c_{ij}
$$
**Visual Abstraction** <br>
![[Abstracting how a tabular DP algorithm operates 2026-01-26 13.23.58.excalidraw.svg]]
### Binomial Coefficient
**Formal Definition**
$$
\binom{n}{k} = \left| \begin{array}{ll}
1 &\text{ if } k = 0 \text{ or } n=k \\[2ex]
\binom{n-1}{k}+\binom{n-1}{k-1} &\text{o.w.}
\end{array} \right.
$$
**Visual Abstraction**
![[Abstracting how a tabular DP algorithm operates 2026-01-26 13.35.15.excalidraw.svg]]
### Longest Common Subsequence
**Formal Definition**
$$
\text{len}(i, j)= \left| \begin{array}{ll}
\text{len}(i-1, j-1)+1 &\text{if }a_i = b_j\\[2ex]
\max\{\text{len}(i, j-1), \text{len}(i-1, j)\} &\text{ if } a_i \neq b_j \\[2ex]
0 &\text{ if } i=0 \text{ or } j=0
\end{array} \right.
$$
**Visual Abstraction**
![[Abstracting how a tabular DP algorithm operates 2026-01-26 13.43.25.excalidraw.svg]]
### Coin-Row
**Formal Definition**
$$
F(n)= \left| \begin{array}{ll}
\max\{F(n-1), F(n-2) + c_n\} &\text{ if } n \gt 1 \\[2ex]
0 &\text{ if } n=0 \\[2ex]
c_1 &\text{ if } n=1
\end{array} \right.
$$
**Visual Abstraction**
![[Abstracting how a tabular DP algorithm operates 2026-01-26 14.33.05.excalidraw.svg]]
### 0/1 Knapsack
**Formal Definition**
$$
V[i, j]= \left| \begin{array}{ll}
V[i-1, j] &\text{ if } j-w_i \lt 0 \\[2ex]
\max\{V[i-1, j], V[i-1, j-w_i] + v_i\} &\text{ if } j-w_i \geq 0 \\
\end{array} \right.
$$
**Visual Abstraction**
![[Abstracting how a tabular DP algorithm operates 2026-01-26 13.57.09.excalidraw.svg]]

---
## Connections
-  [[]]