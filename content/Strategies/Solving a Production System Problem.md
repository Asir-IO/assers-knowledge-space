---
isNote: true
title: Solving a Production System Problem
date: 2026-04-03
tags:
  - type/strategy
  - topic/
  - course/AI312
  - domain/math
draft: false
thumbnail: "[[Solving a Production System Problem 2026-04-03 19.51.37.excalidraw.svg]]"
comments: true
related-notes:
---
## What is the problem
You'll be given:
- a bunch of facts   
	*(e.g, A, B, and C)*
- a set of implication rules   
	*(e.g., R1: if A and B and C, then D)*
- a goal   
	*(e.g., I)*   

and asked to prove the goal *I*.   

Below is an example,   
![[Pasted image 20260403185809.png]]
## Before you begin
1. write down every rule, but using logic symbols, and underline the target.   
	![[Solving a Production System Problem 2026-04-03 18.59.29.excalidraw.svg]]   
2. Add the facts below them.   
	![[Solving a Production System Problem 2026-04-03 19.04.30.excalidraw.svg]]
---
# Strategy
### Using Forward Chaining
1. choose a rule that its entire L.H.S is present within your facts.   
	![[Solving a Production System Problem 2026-04-03 19.07.29.excalidraw.svg]]   
2. applying it should add the R.H.S (D) to the facts list, indicate that by writing the newly added fact, followed by the relation that formed it (R1(A, B, C)).   
	![[Solving a Production System Problem 2026-04-03 19.31.39.excalidraw.svg]]    
3. keep doing steps 1 and 2 with the facts list that keeps growing, until u add the conclusion as a fact, or reach a dead end.   
	![[Solving a Production System Problem 2026-04-03 19.39.58.excalidraw.mp4]]   

You may also represent this process in the following visual form,   
![[Solving a Production System Problem 2026-04-03 19.51.37.excalidraw.svg]]
### Using Backward Chaining
Observe the L.H.S (F, G, H) of the rule that produces the goal (I), they must all be added to the facts list.   
1. Write down the event that u currently need to be added to the facts list (I), and add the relation that produces it to the very right of the page.   
	Indicate that it can not be added unless all its L.H.S events are there first.   
	(I use a "?" to do this).   
	![[Solving a Production System Problem 2026-04-03 20.06.00.excalidraw.svg]]
2. start by the first L.H.S event (F) and do step 1 for it.   
	![[Solving a Production System Problem 2026-04-03 20.13.19.excalidraw.svg]]   
	F needs D and E to be in the list...   
	![[Solving a Production System Problem 2026-04-03 20.21.22.excalidraw.svg]]   
	D needs A, B, and C in the list; they're all there already.          
	![[Solving a Production System Problem 2026-04-03 20.24.21.excalidraw.svg]]   
	D then is marked as satisfied and we move on to the next L.H.S of its parent (F), (E).     
	![[Solving a Production System Problem 2026-04-03 20.27.37.excalidraw.svg]]   
	E needs A. A is in the list, E is marked as satisfied.   
	![[Solving a Production System Problem 2026-04-03 20.30.21.excalidraw.svg]]   
	Since D and E were both added to the list, F can now be marked as satisfied.
3. we continue in this fashion, until every L.H.S in the relationship of our goal (I) gets added to the list.   
	![[Solving a Production System Problem 2026-04-03 20.32.03.excalidraw.mp4]]   

The visual form of this process is the exact horizontal mirror image of the forward one.   
![[Solving a Production System Problem 2026-04-03 20.55.21.excalidraw.svg]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->
