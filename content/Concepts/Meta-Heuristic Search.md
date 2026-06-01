---
isNote: true
title: Meta-Heuristic Search
date: 2026-05-03
tags:
  - type/concept
  - topic/
  - course/AI313
  - domain/ai
draft: true
thumbnail:
related-notes:
---
### What Meta-Heuristic Search is
In standard heuristic search, you need to find the *optimal path* from a starting state to a goal one; Because the path itself matters, it naturally,
- defines the *cost* of every path.
- stores the *current optimal path* and *candidate* optimal paths as it moves

![[Meta-Heuristic Search 2026-05-03 20.22.39.excalidraw]]   
However, if the *optimal path* is irrelevant and you only care about finding the *optimal state*, working with paths at all becomes unnecessary work.   

This is what meta-heuristic search tries to do.   
It moves towards the optimal state by relying solely on the heuristic value of the current node it's in.   
![[Meta-Heuristic Search 2026-05-03 20.30.16.excalidraw]]

---
### Examples of Meta-Heuristic Search

- **Hill-Climbing Search:** Often referred to as "greedy local search". At each step, it evaluates its neighbors and blindly replaces the current node with the best-valued neighbor, grabbing a good state without thinking ahead about future consequences.
    
- **Simulated Annealing:** Inspired by the process of heating and cooling metals, this algorithm combines hill-climbing with a random walk to yield efficiency while preventing getting stuck. It generates a random neighbor; if it's better, it moves there. If it's worse, it still might accept the move based on a probability $e^{\Delta E/T}$, where $T$ is a "temperature" that decreases over time. High temperature early on encourages exploration (accepting bad moves), and low temperature later encourages exploitation.
    
- **Local Beam Search:** To counteract extreme memory limitations without getting stuck as easily, this algorithm keeps track of $k$ states instead of just one. It generates all successors for all $k$ states, selects the $k$ absolute best successors from that entire pool, and repeats the process.
    
- **Genetic Algorithms (GAs):** An evolutionary variant of stochastic beam search that utilizes populations of candidate solutions. Instead of just modifying a single state, it generates new states by combining two parent states (Crossover) selected via a Fitness Function (survival of the fittest). It also introduces random changes (Mutation) to maintain diversity in the population.

> [!with-desc]
> ![[Meta-Heuristic Search-1.png]]
> > [!desc]
> > (Abualigah, L., Diabat, A. Advances in Sine Cosine Algorithm: A comprehensive survey. 
> > Artif Intell Rev 54, 2567–2608 (2021). https://doi.org/10.1007/s10462-020-09909-3)

---
# Example
...

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->
