---
isNote: true
title: Backpropagation in a Neural Network
date: 2026-01-25
tags:
  - type/concept
  - topic/
  - course/AI321
  - domain/ai
draft: false
---
## Mental Model
Think of a Neural Network as a line of layers, where every neuron in a layer is wired to the ones in the layer before it. Every single one of those wires (connections) has a **weight** attached to it.

These weights are basically the "knobs" that control the final output when u feed the network an input.

When u start, all these weights are *totally random* (the network knows nothing). The *goal* of backpropagation is to tweak/update these weights, in some way, such that they fit your training samples as much as possible.
## The Structure of a Neural Network
![[Neural Network Diagram#The Diagram]]
## Keys
> [!abstract] Notation Key
> -  $y$ $\equiv$ the training output vector
> - $^{(l)}$ $\equiv$ the layer index.
> - $\delta^{(l)}$ $\equiv$ the sigma vector of layer $l$.
>
> $$
> \delta^{(l)} = \begin{bmatrix}
> \delta_{1}^{(l)} \\
> \delta_{2}^{(l)} \\
> \vdots \\
> \delta_{n}^{(l)}
> \end{bmatrix}
> $$
> - $\Delta w$ $\equiv$ The weight-update-matrix accumulator for each layer. (only used in the batch version)
>     - *e.g. $\Delta w^{(0)}$ is the accumulator for layer 0.*

## Visual
### Using Stochastic/Online Gradient Descent
*This of course runs for a few epochs...*
![[Backprobagation 2026-01-25 19.40.03.excalidraw.svg]]
### Using Batch Gradient Descent
*This of course runs for a few epochs...*
![[Backprobagation 2026-01-25 19.44.20.excalidraw.svg]]
## Formal Definition
...


---
## Connections
- **Related to:** [[...]]