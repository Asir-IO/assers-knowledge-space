---
isNote: true
title: Bias in Machine Learning
date: 2026-02-17
tags:
  - type/concept
  - topic/
  - domain/ai
  - course/
draft: false
thumbnail: "[[Bias in Machine Learning 2026-02-17 21.41.17.excalidraw.svg]]"
comments: true
---
## What is it
Bias isn't a bad thing, it's the assumptions that follow picking a hypothesis space (type) for a machine learning model, it's what minimizes the model's randomness after training.
> [!question] What's a hypothesis space?
> It's the family of models you make your model choose from when training.
> > [!example] An example
> > If u decided your model will be of linear regression, your hypothesis space is the collection of all possible linear regression models only.
> 
> This can *NOT* be changed later in the training process.

*Wrong* bias occurs when u choose a hypothesis space that does *not* capture the true nature of the training data.

You might assume that we should always find the *perfect* hypothesis space for our training data and eliminate wrong bias all together to build a *perfect* model. However *remember* that we don't build a ML model operate on the training data, we build it to operate on new *unseen* data, and we have no guarantee that new data will have an identical trend to the training data.

Since new data will never have the exact same shape or specific quirks as the training data, a model with *no* wrong bias (which fits the training data perfectly) will *overfit* and fail to *generalize*.

That is why the goal is balance: minimizing wrong bias too much (overly <mark style="background: #ADCCFFA6;">low</mark> wrong bias) leads to *overfitting*, while ignoring it (overly <mark style="background: #FF5582A6;">high</mark> wrong bias) leads to *underfitting*.
### Overly low wrong bias
(*overfitting*)
Occurs when u put too much thought into picking a fitting hypothesis space to the training data.
### Overly high wrong bias
(*underfitting*)
Occurs when u hardly put any thought into picking a fitting hypothesis space to training data.

![[Bias in Machine Learning 2026-02-17 21.41.17.excalidraw.svg]]

---
## Connections
-  [[]]