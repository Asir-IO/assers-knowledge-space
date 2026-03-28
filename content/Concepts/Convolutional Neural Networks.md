---
isNote: true
title: Convolutional Neural Networks
date: 2026-03-27
tags:
  - type/concept
  - topic/
  - course/
  - domain/
draft: false
thumbnail:
---
# Mental Model
![[Convolutional Neural Networks 2026-03-27 16.45.52.excalidraw.webm]]

---
# Connections
-  [[]]
# Pure Thoughts
A CNN is a neural network that i decided not to extract the input features with, since i found a better way to do so, a spatial way to do so, kernels.
CNNs use *spatial* kernels to extract features from raw images.
The interesting part about CNNs is how they *extract* features, not in how they classify.

CNNs are explicitly designed to exploit the fact that in visual data, local neighborhoods of pixels are highly correlated, while distant pixels are largely independent. They drop the "fully connected" assumption in ANNs.   
Similar to how bayesian networks drop the assumption that all nodes affect one another and  instead build a hierarchical cause-effect structure.

