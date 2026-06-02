---
isNote: true
title: Meta-Heuristic Search
date: 2026-05-03
tags:
  - type/concept
  - topic/
  - course/AI313
  - domain/ai
draft: false
thumbnail:
related-notes:
---
In standard heuristic search, you need to find the *optimal path* from a starting state to a goal one; Because the path itself matters, it naturally,
- defines the *cost* of every path.
- stores the *current optimal path* and *candidate* optimal paths as it moves

%% ![[Meta-Heuristic Search 2026-05-03 20.22.39.excalidraw]] %%   
However, if the *optimal path* is irrelevant and you only care about finding the *optimal state*, working with paths at all becomes unnecessary work.   

...this is what <u>Meta-heuristic</u> search does.
# What Meta-Heuristic Search is
It's a search methodology that moves towards the optimal state by relying solely on the heuristic value of the current node it's in.   
%% ![[Meta-Heuristic Search 2026-05-03 20.30.16.excalidraw]] %%

---
## Examples of Meta-Heuristic Search
I'll compare them using a very simple, linear search space (where each state has exactly one parent and one child). This space consists of 100 states labeled **00** to **99**, though I've only plotted some "key" states to reduce clutter.   

![[Meta-Heuristic Search 2026-06-01 14.36.25.excalidraw.svg|h-150px]]

> [!desc] 
> (00 here is the identifier for the first state, it isn't a numerical number)

Furthermore, I'll use an even more condensed representation for the states, as a number line (to save space)

![[Meta-Heuristic Search 2026-06-01 16.36.00.excalidraw.svg]]   
Each State has a heuristic value... and this is the heuristic value of each state:   
![[Meta-Heuristic Search 2026-06-01 14.58.31.excalidraw.svg]]   
### Hill Climbing/Greedy Local Search <span style="float: right;">(Local Search)</span>
At each step, it evaluates its neighbors and blindly moves to the best-valued neighbor. It'll keep moving up along the heuristic value curve until reaching the nearest peak and will <u>NOT</u> move again, even if there's a higher top a few states ahead.   
![[Meta-Heuristic Search 2026-06-01 14.56.58.excalidraw.svg]]

... In order for it to reach this maximum peak, it needs to take this very terrible path (according to them); Only then will it be able to charge into the peak.   
![[Meta-Heuristic Search 2026-06-03 00.06.00.excalidraw.svg]]   
However, it can never get itself to take this path, this is when <u>Simulated Annealing</u> comes in handy.
### Simulated Annealing <span style="float: right;">(Local Search)</span>
It also only moves to the best-valued neighbor, but <u>not always</u>.   

When it starts moving (t=0), it's more likely to wander off to a worse neighbor (deliberately make a bad choice).

This makes it possible for it to take that terrible path to eventually reach the maximum peak.

> [!two-column]
>
> > [!left|3]
> > 
> > This is a code snippet that shows how it works.
>
> > [!right|7]
> > 
> > > [!with-desc]
> >>
> >>![sim_ann-1.png (2567×1017)](https://inst.eecs.berkeley.edu/~cs188/textbook/assets/images/sim_ann-1.png)
> >>> [!desc]
> > >>
> > >>(Cite: [1.5 Local Search | Introduction to Artificial Intelligence](https://inst.eecs.berkeley.edu/~cs188/textbook/search/local.html))
### Local Beam Search <span style="float: right;">(Population-Based Search)</span>

It's Hill Climbing but with multiple current solutions (not a single one.)

Basically, instead of making a single solution navigate the state space and move to the best one, k solutions are released simultaneously and they all generate their neighbors, the top k of which are kept, and this process keeps repeating.

It has a *stochastic version* that allows for choosing suboptimal neighbors, also to open/increase the chances to reach global maximums
### Genetic Algorithms <span style="float: right;">(Population-Based Search)</span>
You also keep k solutions (the population), but the way this population changes is different.   

The new population is formed by ranking solutions in the current population by their the fitness and doing the following k times: choosing 2 parents from this ranked list to crossover (combine) to create a solution.   

This process should add k solutions to the new population; There's also a chance that a solution gets mutated (this allows for having a more diverse population).
![gen2-1.png (1233×567)](https://inst.eecs.berkeley.edu/~cs188/textbook/assets/images/gen2-1.png)

---

> [!with-desc]
> ![[Meta-Heuristic Search-1.png]]
> 
> > [!desc]
> > 
> > (Abualigah, L., Diabat, A. Advances in Sine Cosine Algorithm: A comprehensive survey.
> > Artif Intell Rev 54, 2567–2608 (2021). https://doi.org/10.1007/s10462-020-09909-3)

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->

---
# Sources
- [1.5 Local Search | Introduction to Artificial Intelligence](https://inst.eecs.berkeley.edu/~cs188/textbook/search/local.html)
- [Metaheuristic - Wikipedia](https://en.wikipedia.org/wiki/Metaheuristic)