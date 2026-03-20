---
isNote: true
title: Bayesian Networks
date: 2026-03-18
tags:
  - type/concept
  - topic/
  - course/
  - domain/
draft: true
---
## Mental Model
We have a network of events, we've run experiments and noted the probability of each event occurring.

you realize some events don't just occur by themselves, u know, it might be helpful to define any dependencies for each event.
tick... tock, at any time (based on the prior probability of the root events) the network could get activated, and then its flow would be dictated by the CPT through the arrows.
![[Convolution Sum in LTI systems 2026-03-19 00.31.56.excalidraw]]
In a bayesian network, only *some* dependencies actually matter. 
A Bayesian Network is used to model direct cause and effect between them.
* **Complete Conditional Graph:** Derived purely from the chain rule of probability. It has way too many redundant connections (everything connected to everything).
* **Actual Conditional Graph:** Fits the specific problem's cause-effect relationships, stripping away the redundant connections.

![[Bayesian Networks 2026-03-19 23.16.48.excalidraw]]

![[Bayesian Networks 2026-03-20 01.12.04.excalidraw]]

>[!question] *What if* we modelled the relationship

Compute:
- Joint Probability
	- the p(.) that some observations occur *together*.
- Predictive Inference
	- the p(.) of a child observation occurring, *given* that a parent one has occurred.
- Diagnostic Inference
	- the p(.) of a parent observation being the one that had *caused* a child one.

it goes up and down... the computations is going up and down... this movement should be captured in the equations... it mustn't be lost.

![[Complete vs Actual Graph 2026-03-19.excalidraw.svg|100%]]
*(Excalidraw Idea: Recreate the messy complete graph vs. the clean actual graph for the Alarm scenario)*

>[!note] Uncertainty and Unknowns
> Even with direct causes, there is still uncertainty. If $C$ causes $Ch$, there are usually *other* variables currently unknown to us that can also affect $Ch$. This is why we use probabilities instead of absolute logic.
> *(e.g., If $C$, then $P(Ch|C) = 0.7$. If $\neg C$, then $P(Ch|\neg C) = 0.05$)*.

---
## D-Separation & Conditional Independence
Variables can be conditionally independent. Knowing the state of one variable automatically updates our beliefs about another, depending on what we have *observed*. 

*(Self-correction rule: Don't forget to add a circle around a node to indicate that it was observed!)*

### 1. The Sibling Analogy (Common Cause)
Imagine a parent node $C$ that causes two child nodes, $Ch$ and $T$.
* **If $C$ is unobserved**, but your sibling $T$ is observed, you have another way to update your beliefs about $Ch$. You just *trust your sibling*! (They are dependent).
* **If $C$ is observed**, then $Ch$ and $T$ become independent. You do *not* need the sibling anymore because you have the direct source.

![[Sibling Dependency 2026-03-19.excalidraw.svg|100%]]
*(Excalidraw Idea: Draw the D-separation graph with C unobserved showing the dependency link between Ch and T)*

### 2. Series Dependency
Imagine a chain: $A \rightarrow B \rightarrow C$.
* **If $B$ is unobserved:** The knowledge of $A$ will help you figure out $C$.
* **If $B$ is observed:** The knowledge of $A$ becomes completely redundant. 

Deciding which nodes to gain knowledge from for a node that you're currently evaluating is exactly what makes this model so powerful. It's all about which observation is more valuable.

---
## Notation Bomb
Because of these independent relationships, we can simplify our math. 

Instead of a massive joint probability calculation, the global semantics formula lets us break it down into a Conditional Probability Table.

$$P(W, C, T, Ch) = P(W)P(C)P(T|C)P(Ch|C)$$

For the Burglary/Alarm network, the actual cause-effect math drops all the redundant conditions:
$$P(j \cap m \cap a \cap \neg b \cap \neg e) = P(j|a) P(m|a) P(a|\neg b, \neg e) P(\neg b) P(\neg e)$$

---
## Connections
- [[Directed Acyclic Graphs (DAG)]]
- [[Conditional Probability]]
- [[Markov Chains]]