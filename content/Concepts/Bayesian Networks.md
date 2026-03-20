---
isNote: true
title: Bayesian Networks
date: 2026-03-18
tags:
  - type/concept
  - topic/
  - domain/ai
  - course/AI332
draft: false
---
# Mental Model
We have a bunch of events (say, **B**urglary, **A**larm, and **J**ohn Calling), we've run experiments and noted the probability of each event occurring.    
This is great, we now have a way to tell how likely the Alarm is to ring on any random day. 

However, wouldn't it be much more *informative* to compute the probability of the **A**larm ringing given the current observation of a **B**urglary or **J**ohn's phone call? wouldn't the calculated probability 
> "The **A**larm is _this_ likely to ring _now that **J**ohn just called_" 

be way more *tailored* to our current reality than a generic 
>"The **A**larm is generally this likely to ring"?

Yup, it *would*.    

But to be able to calculate those tailored probabilities for any possible configuration in the future, we need a map of how these events influence each other; by connecting these variables with *cause-and-effect* arrows, we build exactly that map.

This structure is a *Bayesian Network*.

> [!warning] *What if* we don't take the time to figure out the connections?
> We'll naturally assume that everything generally influences one another, and this will work, but we'll create too much redundant connections.

---
# Building the Network
The network will be composed of: nodes that are the events, the connections between them, and how strong each connection is.
## The Nodes
The Nodes in this example are,
- **B**urglary happens
- **E**arthquake occurs
- **A**larm rings
- **J**ohn calls
- **M**ary calls

![[Convolution Sum in LTI systems 2026-03-19 00.31.56.excalidraw.svg]]    
The nodes in this example all have 2 observations, they can either occur or not occur.    
They're all binary.
> [!WARNING] NOTATION ALERT
> For a given binary node (ex: A), I write its +ve observation (occured) as its lowercase version (ex: a), and just add a "$\neg$" to its -ve observation (ex: $\neg$a)

# Define Connections
We figured the following connections for each node,
- **B**
	- is caused by: nothing (yet)
	- causes: **A**
- **E**
	- is caused by: nothing (yet)
	- causes: **A**
- **A**
	- is caused by: B, E
	- causes: **J**, **M**
- **J**
	- is caused by: **A**
	- causes: nothing (yet)
- **M**
	- is caused by: **A**
	- causes: nothing (yet)

![[Bayesian Networks 2026-03-20 20.54.47.excalidraw.svg]]    
# Quantify Connections
We represent each connection by a CPT that *quantifies* the connections between a node and its parents.   

> [!EXAMPLE] 
> The CPT of A contains the probability of its observations (a, ¬a) given all the possible combinations of its parents' observations.    
> ![[Bayesian Networks 2026-03-20 22.10.15.excalidraw.svg]]
> 

> [!NOTE] To make the diagram more compact
> I only include entries for the +ve observation of a node (ex: a), and this is okay since each node has only 2 possible observations (ex: a or ¬a); its -ve observation is its complement:    
> $p(\neg a) = 1 - p(a)$

To fill out each CPT table, we use methods like Maximum Likelihood Estimation.
![[Bayesian Networks 2026-03-20 22.14.47.excalidraw.svg]]    

---
# Using the Network
Now that the network is now built, how is it used?

Remember that we want it to, given a specific *observation combination* of some nodes, to compute the probability of the *rest* of the nodes.

Before any specific observation combination is given, each node should output the general probability of its possible observations.    
(ex: Node A outputs P(a) and P($\neg$a))
![[Bayesian Networks 2026-03-20 22.47.37.excalidraw.svg]]
However, once an observation combination is given the following happens,
- for every observed node,
	- find out what nodes it influences, or its "active trails" (this is the standard term)
	- the output of those nodes will change from the general one, to the one given this observation.
## How to find a Node's Active Trails
I like to imagine a water faucet at every node in the network, once a set of nodes are observed, they all open their faucets at the *same time*, whatever paths an observed node's stream reaches, this is its active trail.    
## Examples
- (*Example #1*)    
	Say the node B was observed, this will be its active trail.    
	![[Bayesian Networks 2026-03-20 23.14.39.excalidraw.svg]]    
	it affects every single node.    
	![[Bayesian Networks 2026-03-20 23.18.34.excalidraw.svg]]    
>[!question] *Where* did the CPTs go?
> I draw the very final diagram this way, since adding the CPTs would add too much visual clutter.

- (*Example #2*)    
	Say node M was observed, this will be its active trail.    
	![[Bayesian Networks 2026-03-20 23.29.35.excalidraw.svg]]    
	it also affects every single node.    
	![[Bayesian Networks 2026-03-20 23.31.36.excalidraw.svg]]
- (*Example #3*)    
	Say both of them were observed, this will be their active trails.    
	![[Bayesian Networks 2026-03-20 23.36.52.excalidraw.svg]]    
	they'll affect all the nodes, except one another ofc.    
	![[Bayesian Networks 2026-03-20 23.41.35.excalidraw.svg]]
- (*Example #4*)    
	Here's an interesting one, say nodes A and M were observed, this will be their active trails.    
	![[Bayesian Networks 2026-03-20 23.47.36.excalidraw.svg]]    
	A's faucet completely blocked the path of M's faucet, and thus M has *no* active trail.   
	![[Bayesian Networks 2026-03-20 23.52.37.excalidraw.svg]]


%%
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

%%

---
# Connections
- []