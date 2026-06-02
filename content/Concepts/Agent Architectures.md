---
isNote: true
title: Agent Architectures
date: 2026-06-02
tags:
  - type/concept
  - topic/
  - course/AI313
  - domain/ai
draft: false
thumbnail:
comments: true
related-notes:
---
An agent's ultimate goal is to be rational, and different environments require the agent to have different architectures to achieve this.
# Agent Rationality
An agent is rational if it acts *(iii)* to achieve *(i)* the best _expected_ outcome based on the evidence provided by its percept sequence *(iv)* and whatever built-in knowledge *(ii)* it possesses.   

These were the 4 pillars of rationality;
1. {i} having an objective performance measure,
2. having prior knowledge of its environment/s,
3. knowing the specific actions it can perform,
4. having a record of previous percepts (percept sequence).

---
There are generally 4 tiers of architectures (in increasing complexity).
# <span style="float: right;">(1)</span> Simple Reflex Agents
## Environments they can Operate in
Only very simple and predictable ones.
- fully observable,
- deterministic,
- and episodic.
> [!two-column]
>
> > [!left|6]
> > 
> > ## What it takes to be Rational
It's enough to just map current percepts to immediate actions using condition-action rules.
>
> > [!right|4]
> > 
> > ![[Agent Architectures-1.png]]

---
# <span style="float: right;">(2)</span> Model-Based Reflex Agents
## New Environments they can Operate in
Partially observable environments.
- (e.g., an environment in which their sensors can get obscured)

Which means they needs to track how the world is evolving to constantly have an accurate representation of it.
> [!two-column]
>
> > [!left|6]
> > 
> > ## What it takes to be Rational
>>They must be physically built with a model-based architecture, that is, they must maintain an internal state (a memory of past percepts and actions).
>
> > [!right|4]
> > 
> > ![[Agent Architectures-2.png]]

---
# <span style="float: right;">(3)</span> Goal-Based Agents
Instead of having static condition-action rules that lead to different states, they have an <u>explicit goal state</u> they want to reach and <u>actively</u> navigate their state space to reach it.

They do this navigation by continuously testing (planning ahead) how close taking an action brings them to the goal before taking it.
> [!two-column]
>
> > [!left|6]
> > 
> > ## What it takes to be Rational
> > Having an explicit representation of what a goal is, and how to reach it (using a search tree).  
>
> > [!right|4]
> > 
> > ![[Agent Architectures-3.png]]
## Cons
1. Navigating the state space via planning ahead can be computationally expensive.

---
# <span style="float: right;">(4)</span> Utility-Based Agents
## New Environments they can Operate in
Environments that are,
1. {i} stochastic (non-deterministic)
	- where actions *don't guarantee* outcomes, forcing the agent to calculate the _expected_ success of a decision.
2. and require having multiple (often conflicting) factors/utilities that require making trade-offs.
	- (like navigating a city *quickly* but also *safely*)

> [!two-column]
>
> > [!left|6]
> > 
> > ## What it takes to be Rational
> > Not merely reaching a goal state, but reaching the one that best balances between a set of factors (utilities) that must be respected in a problem.   
> > 
>
> > [!right|4]
> > 
> > ![[Agent Architectures-4.png]]

They do it by evaluating a state based on a utility value that is calculated by weighing the importance of reaching the goal + a bunch of utility factors.

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note | Type |
| --------- | ---- | ---- |

<!-- SerializedQuery END -->

---
# Sources
- [What is a Utility-Based Agent? | IBM](https://www.ibm.com/think/topics/utility-based-agent)
