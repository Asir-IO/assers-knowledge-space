---
title: Insertion in a RB Tree
date: 2026-01-12
tags:
  - type/strategy
  - topic/
  - course/CS321
draft: false
---
## What is the problem
You'll either:
- be given an existing RB tree and asked to insert a set of nodes into it.
- be given a set of nodes and asked to insert them into an empty RB tree.
## Before you begin
In both cases, going through each given node, u should:
1. place it in its correct position in the current tree, and color it red.
2. mark it as Z, its parent as P, its uncle as U, and its grandparent as G.![[Insertion in a RB Tree 2026-01-12 16.51.58.excalidraw.svg]]
3. follow the strategy below.
## The keys
### Symbols Key
![[Insertion in a RB Tree 2026-01-12 17.00.37.excalidraw.svg]]
### Arrows/lines Key
![[Insertion in a RB Tree 2026-01-12 17.10.02.excalidraw.svg]]
## The Strategy

> [!NOTE]
> I let P and U be the right and left children of G respectively while showing the startegy.
> However, this strategy will work just as well if they were reversed.

![[Insertion in a RB Tree 2026-01-12 15.18.35.excalidraw.svg|100%]]

---
## Connections
- **Related to:** [[...]]
