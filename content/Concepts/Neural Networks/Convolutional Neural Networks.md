---
isNote: true
title: Convolutional Neural Networks
date: 2026-03-27
tags:
  - type/concept
  - course/
  - domain/
draft: false
thumbnail:
comments: true
related-notes:
---
# Mental Model
You've got visual data (like an image) that u want a neural network to extract features from, but u don't want to use a standard Artificial Neural Network.   
Why? Because an ANN flattens everything into dense layers, treating the image like a flat list of pixels and assuming every pixel is equally related to every other pixel.   
![[Convolutional Neural Networks 2026-04-02 21.30.57.excalidraw]]


Images *don't* work like that. Pixels close to each other form meaningful structures (like edges), while distant pixels are largely *independent*. How do u then exploit this spatial structure?   
## The Exploitation
Instead of connecting every pixel in the current layer with every pixel in the previous layer, u only connect it to ones within its neighborhood (surrounding it).   
![[Convolutional Neural Networks 2026-04-02 21.14.32.excalidraw]]   
This is what a filter/kernel does.   

A Convolutional layer computes the value of a <mark style="background: #FFF3A3A6;">pixel</mark> in its feature map by looking at the one from the previous layer in its same spot and applying its <mark style="background: #FF5582A6;">filter</mark> to it.   

# Mental Model
A CNN is a tool that, given a raw image, extracts its features and then uses them to make predictions.   
Thus, what it does can be split into 2 phases:
- feature extraction phase
- prediction phase
Its prediction phase is identical to a regular NN, and thus the interesting phase is the feature extraction one.   
---
# Feature Extraction Phase
Given an NxM inp

![[Convolutional Neural Networks 2026-03-27 16.45.52.excalidraw.webm]]Usually, an activation function phase is applied to feature maps of a layer, and sometimes a pooling phase.   
![[Convolutional Neural Networks 2026-04-02 00.24.51.excalidraw]]
![[Convolutional Neural Networks 2026-04-02 00.44.21.excalidraw]]
...
![[Convolutional Neural Networks 2026-04-02 14.30.00.excalidraw]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->

---
# Raw Thoughts
A CNN is a neural network that i decided not to extract the input features with, since i found a better way to do so, a spatial way to do so, kernels.
CNNs use *spatial* kernels to extract features from raw images.
The interesting part about CNNs is how they *extract* features, not in how they classify.

CNNs are explicitly designed to exploit the fact that in visual data, local neighborhoods of pixels are highly correlated, while distant pixels are largely independent. They drop the "fully connected" assumption in ANNs.   
Similar to how bayesian networks drop the assumption that all nodes affect one another and  instead build a hierarchical cause-effect structure.

