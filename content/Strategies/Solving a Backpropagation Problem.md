---
isNote: true
title: Solving a Backpropagation Problem
date: 2026-04-09
tags:
  - type/strategy
  - topic/
  - course/AI321
  - course/AI322
  - domain/ai
draft: false
thumbnail: "[[Solving a Backpropagation Problem 2026-04-10 00.08.13.excalidraw.svg]]"
comments: true
related-notes:
  - "[[Backpropagation in a Neural Network]]"
  - "[[Neural Networks]]"
  - "[[Signals Book Indexes]]"
---
# What is the problem
You'll be given,
- the nodes, connections and weights of a neural network
- the activation function of the hidden layers.   
	*(usually is a relu)*
	![[Solving a Backpropagation Problem 2026-04-09 23.39.30.excalidraw.svg]]
- the activation function of the o/p layer.
	*(usually is a sigmoid/softmax)*
	![[Solving a Backpropagation Problem 2026-04-09 23.43.26.excalidraw.svg]]
- the error function.
	![[Solving a Backpropagation Problem 2026-04-09 23.54.17.excalidraw.svg]]
- the learning rate
	$$
	\eta = 0.1
	$$

... and asked to perform backpropagation on it.   
# Before you begin
1. draw the network, leaving at lease a line's space above every neuron   
	*(to later write in it the net and out of the neuron)*
	![[Solving a Backpropagation Problem 2026-04-09 22.24.22.excalidraw.svg]]
2. add the target value of every output node next to it, and the input value of every input node also next to it.   
	![[Solving a Backpropagation Problem 2026-04-09 22.29.45.excalidraw.svg]]   
3. perform forward propagation to fill the net and out values for every node.   
	![[Solving a Backpropagation Problem 2026-04-09 22.32.44.excalidraw.svg]]
	![[Solving a Backpropagation Problem 2026-04-09 22.32.44.excalidraw.mp4]]
4. compute the derivative formula for the activation function of both the o/p layer and the hidden layers.   
	![[Solving a Backpropagation Problem 2026-04-09 23.32.47.excalidraw.svg]]
5. compute the derivative formula for the error function.
	![[Solving a Backpropagation Problem 2026-04-09 23.58.00.excalidraw.svg]]

The strategy would change if u were to use batch gradient descent vs the stochastic one.
# Strategy
## Using Stochastic Gradient Descent
Starting with the output layer's neurons and moving back, do the following,
1. calculate the neuron's delta ($\delta_{O1}$)   
	![[Solving a Backpropagation Problem 2026-04-09 23.11.44.excalidraw.svg]]   
2. update the weight connecting it to every neuron in the previous layer.   
	![[Solving a Backpropagation Problem 2026-04-10 00.08.13.excalidraw.svg]]   

Do this for every neuron within every layer...   
![[Solving a Backpropagation Problem 2026-04-10 00.22.33.excalidraw.mp4]]
	![[Solving a Backpropagation Problem 2026-04-10 00.22.33.excalidraw.svg]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail                                                                                                                  | Note                                                                                     | Type    |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| ![[Backprobagation 2026-01-25 19.40.03.excalidraw.svg\|Backprobagation 2026-01-25 19.40.03.excalidraw.svg\|120]] | [[Backpropagation in a Neural Network]] | Concept |
| ![[lab-temp-thumb.excalidraw.svg\|120]]                                                                                    | [[Signals Book Indexes]]                                   | N/A     |

<!-- SerializedQuery END -->
