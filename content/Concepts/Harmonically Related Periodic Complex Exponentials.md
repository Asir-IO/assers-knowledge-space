---
title: Harmonically Related Periodic Complex Exponentials
date: 2026-01-16
tags:
  - type/concept
  - topic/
  - course/IT341
draft: false
---
Or actually, Harmonically related Periodic Signal building *blocks*.
Why?
## Intuition
Well, they usually are nothing more than that, they are signals, but not really.
Most of the time when we study them, we only view them as building blocks for actual signals that we're interested in; The same way the x and y components in a vector are vectors but not really. you usually don't view them as actual vectors when their only usage to u is building other vectors, for example:
$$
\underbrace{\begin{bmatrix} x \\ y \end{bmatrix}}_{\text{actual vector}}
=
\underbrace{\begin{bmatrix} x \\ 0 \end{bmatrix}}_{\text{some block}}
+
\underbrace{\begin{bmatrix} 0 \\ y \end{bmatrix}}_{\text{another block}}
$$
Periodic Complex exponentials, when you only use them as building blocks for (say) a cosine signal, they get the same treatment (sad):
$$\underbrace{2 \cdot \cos(\omega t)}_{\text{actual signal}} = \underbrace{e^{j\omega t}}_{\text{some block}} + \underbrace{e^{-j\omega t}}_{\text{another block}}
$$
>[!info] Recall: What a Periodic Complex Exponential signal is
>$$
>\text{Algebraic form: }x(t) = C\cdot e^{jwt} \\
>$$
>![[Harmonically Related Periodic Complex Exponentials 2026-01-18 17.44.54.excalidraw.svg|100%]]
>Visual form: a rotating vector

In Signal Analysis, smart ppl noticed that if you combine random signal blocks, the result is usually a meaningless, chaotic wave that never repeats itself.
But they noticed that some building blocks *work together perfectly*. When you stack _these_ specific blocks together, the result is a clean signal that also repeats over and over (is periodic).

They investigated what these "compatible" blocks had in common (cuz clean is good) and noticed a pattern: their frequencies ($\omega$) weren't random; they were all integer multiples of a single "base" frequency ($\omega_0$). In other words, they were *harmonically related.*

Now that they had a way to identify blocks that play nice together, they grouped them into families based on that shared $\omega_0$. In an $\omega_0$-family, the $k$-th member (harmonic) has a frequency of $\omega = k \cdot \omega_0$ and takes the form:$$
\phi_{k}(t) = e^{jk\omega_0t}, \;\;\;\;k=0, \pm1, \pm2, ...
$$
Also, its *fundamental period* is $k$ times smaller than their shared period ($T_0$).
$$
T_{ok} = \frac{T_0}{|k|}
$$
This diagram shows how a family of Periodic Complex exponentials with some ($w_0$) looks like.
![[Harmonically Related Periodic Complex Exponentials 2026-01-16 23.52.27.excalidraw.svg|100%]]


...

## Visual
...

## Formal Definition
...


---
## Connections
- **Related to:** [[...]]