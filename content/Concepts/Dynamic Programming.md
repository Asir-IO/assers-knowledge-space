---
isNote: true
title: Dynamic Programming
date: 2026-01-12
tags:
  - type/concept
  - topic/
  - course/CS321
  - domain/cs-theory
draft: true
---
## Intuition
At each step, a DP algorithm has to choose between either picking an item or not. It chooses to **not make** an immediate local decision. Instead, it spawns parallel timelines to simulate both possibilities: 
- it **whitelists** the item in one reality. 
- and **blacklists** it in another. 
It records both outcomes and eventually decides which decision was the better one and discards the entire timeline of the other.

## Visual
(ex)
![[Dynamic Programming 2026-01-13 00.47.30.excalidraw|100%]]

## Formal Definition
...


---
## Connections
- **Related to:** [[...]]