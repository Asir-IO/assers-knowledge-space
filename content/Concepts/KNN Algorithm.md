---
isNote: true
title: KNN Algorithm
date: 2026-02-20
tags:
  - type/concept
  - topic/
  - domain/ai
  - course/
draft: false
thumbnail: "[[KNN Algorithm 2026-02-20 23.57.05.excalidraw.svg]]"
comments: true
---
Or the k-nearest neighbors algorithm.
## Mental Model
Think of the k-nearest neighbors algorithm like settling a new city in a Civ game.  
A newly established city doesn't have an identity right away; instead, it gets pressured culturally by the established cities *closest* to it.

In KNN, the "new city" is an unclassified data point $(x)$.  
To figure out what its identity $(y)$ is, we look at the $k$ nearest neighboring points (the surrounding cities).  
Whichever identity $(y)$ has the most presence among those $k$ neighbors wins the majority vote and officially *claims* the new data point.

![[KNN Algorithm 2026-02-20 23.57.05.excalidraw.svg]]  

![[KNN Algorithm 2026-02-21 01.10.54.excalidraw.svg]] 

![[KNN Algorithm 2026-02-21 00.39.08.excalidraw.svg]]  
> [!abstract] Symbols Key
> - **Flag:** The new data point we are trying to classify. Its final color represents the algorithm's output.
 > - **Colored ticks on x axis:** The existing, labeled training data points (our established cities).

> [!abstract] Arrows/Lines Key
> - **Arrows:** Represent the influence (distance-based or whatever) from a neighboring point.
> - **Crossed tick on an arrow:** indicate that its point is among the $k$ nearest neighbors.
> - **Faded arrow:** indicates that its point isn't among the $k$ nearest neighbors.

You decide how ties are resolved.

---
## Connections
-  [[]]