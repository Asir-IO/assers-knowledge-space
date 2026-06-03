---
isNote: true
title: Backpropagation in a Neural Network
date: 2026-01-25
tags:
  - type/concept
  - course/AI321
  - domain/ai
draft: false
thumbnail: "[[Backprobagation 2026-01-25 19.40.03.excalidraw.svg]]"
comments: true
related-notes:
---
# Mental Model
Think of a Neural Network as a line of layers, where every neuron in a layer is wired to the ones in the layer before it. Every single one of those wires (connections) has a **weight** attached to it.

These weights are basically the "knobs" that control the final output when u feed the network an input.

When u start, all these weights are *totally random* (the network knows nothing). The *goal* of backpropagation is to tweak/update these weights, in some way, such that they fit your training samples as much as possible.
# The Structure of a Neural Network
![[Neural Networks#The Diagram]]

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

# Using Stochastic/Online Gradient Descent
*This of course is done for every training sample, and runs for a few epochs...*
![[Backprobagation 2026-01-25 19.40.03.excalidraw.svg]]
# Using Batch Gradient Descent
*This of course runs for a few epochs...*
![[Backprobagation 2026-01-25 19.44.20.excalidraw.svg]]   
$\Delta w$ contains the weight update matrix of every layer.   
*(e.g, this is $\Delta w^{(2)}$, or the weight update matrix of layer 2).*   
![[Backpropagation in a Neural Network 2026-04-09 21.40.47.excalidraw.svg]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->
