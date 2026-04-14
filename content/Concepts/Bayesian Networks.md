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
thumbnail: "[[Bayesian Networks 2026-03-20 23.18.34.excalidraw.svg]]"
comments: true
---
# Mental Model
We have a bunch of events (say, **B**urglary, **A**larm, and **J**ohn Calling), we've run experiments and noted the probability of each event occurring.    
This is great, we now have a way to tell how likely, say, the Alarm is to ring on any random day. 

However, wouldn't it be much more *informative* to compute the probability of the **A**larm ringing given the current observation of, say, **J**ohn's phone call? wouldn't the calculated probability 
> "The **A**larm is _this_ likely to ring _now that **J**ohn just called_" 

be way more *tailored* to our current reality than a generic 
>"The **A**larm is generally this likely to ring"?

Yup, it *would*.    

This tailored probability makes an assumption then that the probability of the Alarm ringing is affected by John calling, and that's why we should *start thinking* of the events as not isolated entities, but as ones that can affect the probability of one another.

We do this by building a network of how events/nodes affect one another, and in a *cause-and-effect* way.   

We start with an assumption that all nodes affect each other, and *remove the connection* between ones that hardly do.   

This is a *Bayesian Network*.

> [!warning] *What if* we don't take the time to remove connections?
> We'll end up with redundant connections, the network will be usable, but it'll do redundant computations.

---
# Building the Network
The network is composed of three things: the *nodes* (the events), the *connections* between them (the arrows), and *how strong* each connection is (the CPTs).
## The Nodes
The Nodes in this example are,
- **B**urglary happens
- **E**arthquake occurs
- **A**larm rings
- **J**ohn calls
- **M**ary calls   

This is the network with every node added.
![[Convolution Sum in LTI systems 2026-03-19 00.31.56.excalidraw.svg]]    
The nodes in this example all have 2 possible observations, they can either occur or not occur.    
They're all binary.
> [!WARNING] NOTATION ALERT
> For a given binary node (e.g., A), I write its +ve observation (occured) as its lowercase version (e.g., a), and just add a "$\neg$" to its -ve observation (e.g., $\neg$a)

# Define Connections
We ran experiments and figured the following connections for each node,
- **B**
	- causes: **A**
- **E**
	- causes: **A**
- **A**
	- causes: **J**, **M**
- **J**
	- causes: nothing (yet)
- **M**
	- causes: nothing (yet)

This is the network with every connection added.
![[Bayesian Networks 2026-03-20 20.54.47.excalidraw.svg]]    
# Measure Connections

> "how much is <mark style="background: #CACFD9A6;">each observation</mark> in node A caused by its parent observations?"   

This is what the CPT of node A tell us.

> [!EXAMPLE] 
> The CPT of A contains the probability of its observations (a, ¬a) given all the possible combinations of its parents' observations.    
> ![[Bayesian Networks 2026-03-20 22.10.15.excalidraw.svg]]
> 

> [!NOTE] To make the diagram more compact
> I only include entries for the +ve observation of a node (e.g.., a), and this is okay since each node has only 2 possible observations (e.g., a or ¬a); its -ve observation is its complement:    
> $p(\neg a) = 1 - p(a)$

To fill out each CPT table, we use methods like Maximum Likelihood Estimation.   

This is the network with every CPT added.
![[Bayesian Networks 2026-03-20 22.14.47.excalidraw.svg]]    

---
# Using the Network
Now that the network is built, how is it used?

Remember that we mainly want it to, given a set of *observations* of some nodes, to compute the probability of the *rest* of the nodes.

This is called *inference*.   

***Predictive*** inference occurs when we predict the probability of a child observation occurring, *given* that a parent one has occurred.   
***Diagnostic*** inference occurs when we evaluate the probability of a parent observation being the one that had *caused* a child one.   
![[Bayesian Networks 2026-03-24 22.49.27.excalidraw.svg]]
Predictive inference is done before diagnostic one.   

Inferring a node usually requires inferring its parent/children nodes first, this is done until reaching nodes that were inferred.   

We basically move from the node that we want to infer towards observed nodes.
## How Predictive Inference is done
### One Parent
Assume that R1 is a far ancestor of B and it was observed.   
This is how $P(a|r1)$ is computed.
![[Bayesian Networks 2026-03-24 23.07.32.excalidraw.svg]]   
### Multiple Parents
Assume that R1, R2 is a far ancestor of B, E, and they were observed.   
This is how $P(a|r1, r2)$ is computed.   
![[Bayesian Networks 2026-03-24 23.18.14.excalidraw.svg]]
## How Diagnostic Inference is done
### One child
Assume that L1 is a far descendant of J, and it was observed.   
This is how $P(a|l1)$ is computed.   
![[Bayesian Networks 2026-03-24 23.28.15.excalidraw.svg]]
## Multiple children
Assume that L1, L2 is a far descendant of J, M, and they were observed.   
This is how $P(a|l1, l2)$ is computed.   
![[Bayesian Networks 2026-03-24 23.25.13.excalidraw.svg]]   
In the diagram below, each node outputs its inference given the current set of observations.   

Before any specific observation combination is given, each node should output its inference given no evidence or the "general" probability of its possible observations.    
(e.g., Node A outputs P(a) and P($\neg$a))
![[Bayesian Networks 2026-03-20 22.47.37.excalidraw.svg]]   
However, once an observation combination is given, a node's inference may change.   
It only changes if the observation has an "active" path to it.   

To find what nodes are affected by each observation, we need another diagram that shows us what active paths are there for every observed node.   
## How to create an Active Paths diagram
I like to imagine every observed node as an information source that tries its best to reach as much nodes as possible, but its movement needs to follow the following *rules*,    
*(suppose that A is the observed node whose active paths we're trying to draw)*
- Information can't flow from a parent to another if the child is *not* observed.
	![[Bayesian Networks 2026-03-25 20.34.14.excalidraw.svg]]    ^8b579f
- Information can't flow from a sibling to another if the parent is *observed*.
	![[Bayesian Networks 2026-03-25 20.39.16.excalidraw.svg]] ^c61007
- Information can't cross another observed node.   
	![[Bayesian Networks 2026-03-25 20.54.12.excalidraw.svg]] ^a51978
## Examples
- (*Example #1*)    
	Say the node B was observed, this will be the diagram, showing the active paths of B.    
	<video 
  src="./z1-assets/Bayesian Networks 2026-03-20 23.14.39.excalidraw.webm" 
  playsinline 
  loop 
  muted 
  class="autoplay-on-scroll"
  style="cursor: pointer; max-width: 100%;" 
  onclick="this.paused ? this.play() : this.pause()">
</video>   

	it affects every single node, [[#^8b579f|except its spouse]].    
	![[Bayesian Networks 2026-03-20 23.18.34.excalidraw.svg]]   
    
>[!question] *Where* did the CPTs go?
> I draw the very final diagram this way, since adding the CPTs would add too much visual clutter.

- (*Example #2*)    
	Say node M was observed, this will be its active path.    
	<video 
  src="./z1-assets/Bayesian Networks 2026-03-20 23.29.35.excalidraw.webm" 
  playsinline 
  loop 
  muted 
  class="autoplay-on-scroll"
  style="cursor: pointer; max-width: 100%;" 
  onclick="this.paused ? this.play() : this.pause()">
</video>   

	it affects every single node, nothing blocks its path.   
	![[Bayesian Networks 2026-03-20 23.31.36.excalidraw.svg]]
- (*Example #3*)    
	Say both of them were observed, this will be their active paths.    
	<video 
  src="./z1-assets/Bayesian Networks 2026-03-20 23.36.52.excalidraw.webm" 
  playsinline 
  loop 
  muted 
  class="autoplay-on-scroll"
  style="cursor: pointer; max-width: 100%;" 
  onclick="this.paused ? this.play() : this.pause()">
</video>   

	![[Bayesian Networks 2026-03-20 23.41.35.excalidraw.svg]]
- (*Example #4*)    
	Here's an interesting one, say nodes A and M were observed, this will be their active paths.    
	![[Bayesian Networks 2026-03-20 23.47.36.excalidraw.svg]]    
	![[excalidraw-animate.svg]]
	The information stream of M [[#^a51978|can't cross A]] (to B or E) or [[#^c61007|move to its sibling]]. 
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
---
# After-Thoughts
I've spent hours upon hours, days upon days, working on this. It's exhausting.    

Making a visualization that makes sense and captures what a Bayesian network is and how it operates was extremely challenging, and Asser, I don't like how u pushed through a burnout and spent that much time completing it.

But I still am gald u valued your thoughts that much =)