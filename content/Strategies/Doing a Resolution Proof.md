---
isNote: true
title: Doing a Resolution Proof
date: 2026-04-03
tags:
  - type/strategy
  - topic/
  - course/AI312
  - domain/math
draft: false
thumbnail: "[[Doing a Resolution Proof 2026-04-04 00.58.01.excalidraw.svg]]"
comments: true
related-notes:
---
# What is the problem
You'll be given:
- a bunch of premises.   
- a conclusion.

and asked to prove that the conclusion is implied by the premises.   
# TL;DR
We'll do it by proving that the premises *can't* be true while the conclusion is *false*; adding the negated conclusion to the set of premises leads to a contradiction.

---
We'll work in 2 phases,
1. first convert all the premises into CNF, along with the conclusion (and also negating it).
2. do the resolution proof using these premises + negated conclusion.
# Before you begin
1. ...
# Strategy
### Phase 1 (conversion to CNF)
...
### Phase 2 (the proof)
![[Doing a Resolution Proof 2026-04-04 00.30.48.excalidraw.svg]]    
1. combine pairs of clauses into a new one via resolution until u reach a contradiction.   
> [!warning] Make sure to...
> Make sure to always begin by combining the negated conclusion clause with another one, since this is what *u know* will begin the contradiction.

- add the new clause as a line containing the following:
	1. the index of the clause.
	2. the clauses that formed it, place the clause of a smaller size to the left of the other one.
	3. the resulting clause after resolution.
	![[Doing a Resolution Proof 2026-04-04 00.44.56.excalidraw.svg]]   
- here's what happens when we keep pairing clauses (we eventually reach a contradiction)   
	 ![[Doing a Resolution Proof 2026-04-04 00.58.01.excalidraw.mp4]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->

