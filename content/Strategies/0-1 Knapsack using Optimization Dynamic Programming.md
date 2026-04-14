---
isNote: true
title: 0-1 Knapsack using Optimization Dynamic Programming
date: 2026-01-13
tags:
  - type/strategy
  - topic/
  - course/CS321
  - domain/cs-theory
draft: true
comments: true
---
## What is the problem
You'll be given a list of itms with their corresponding weight and profit, and a weight-capacity value.
You should pick itms that:
- together give the largest overall profit.
- their cumulative weight doesn't exceed the weight-capacity.

Subproblems in row i are ones in which adding itm i was considered.
They can be divided into 3 types:
- **white type:** adding the itm isn't even considered (since it's heavier than the current weight-cap)
- **blue type:**
	- **(-) type:** the itm shouldn't be added, since the best cumulative profit of the current cap is better.
	- **(+) type:** the itm should be added, since (its profit) + (the best cum. profit of the remaining cap) beat the current cap's best cum. profit.

![[0-1 Knapsack using Optimization Dynamic Programming 2026-01-13 15.06.03.excalidraw]]
## Before you begin
1. Build a regular DP table (make sure u place the items vertically and every cap horizontally)![[0-1 Knapsack using Optimization Dynamic Programming 2026-01-13 18.24.21.excalidraw]]
## The keys
#### Symbols Key
...
#### Arrows/lines Key
...
## The Strategy
...

---
## Connections
-  [[]]
