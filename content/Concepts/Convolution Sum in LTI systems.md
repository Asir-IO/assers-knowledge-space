---
title: Convolution Sum in LTI systems
date: 2026-01-24
tags:
  - type/concept
  - course/IT341
  - domain/systems
draft: false
thumbnail: "[[Convolution Sum 2026-01-24 23.41.52.excalidraw.svg]]"
comments: true
related-notes:
---
## Mental Model
You've got a linear system (that given an input signal, spits out an output one), but u don't have an explicit formula to compute the output from the input, the system is like a black box to u.
How do u then get an explicit input/output formula?

The output is the only thing that can help u observe how the system works.
For every point in time ($k$), feed a unit impulse into the system and see how it *reacts* to it.
![[Convolution Sum 2026-01-25 00.59.45.excalidraw.svg|100%]]
>[!note] Note
> The reaction at time $k$ is a signal that shows what output the *unit* impulse triggered across the *whole* time-domain.
> 
> It's known as the system's *unit* impulse response at time $k$, and is denoted by $h_k[n]$.
> 
This info. is useful because an actual arbitrary input signal will also be a collection of unit impulses scaled by the input at each time ($k$).

For a general linear system, you'll need to do this for every single point in time ($k$), to rightfully claim that you know how the system reacts across its whole lifespan. 
However, if the system is also time-invariant, you'll only need to do this ONCE, since all the impulse responses are basically identical.

> [!two-column]
>
> > [!left]
> > Once u acquire the impulse response knowledge, u can compute the system's output to any arbitrary input signal. 
>
> > [!right]
> > 
> > ![[Convolution Sum 2026-01-25 01.46.35.excalidraw.svg|200]]

To get the overall system output of an input signal $x[n]$,
![[Convolution Sum 2026-01-24 23.17.40.excalidraw.svg|100%]]
### How it works
1. Iterate through every sample of the input $x$ at time $k$.
	1. grab the system's unit impulse response at that time $h_k[n]$.
		(The reaction signal triggered by the input impulse at time $k$) = $x[k]\cdot h_k[n]$
	2. Add this reaction to the overall output $y[n]$.

![[Convolution Sum 2026-01-24 23.41.52.excalidraw.svg|100%]]

Here's a GIF illustrating how this works as an input signal gets processed.
(Note: In this example, I used the same exponential decay response for every time $k$, implying an LTI system).

![[convolution.gif|100%]]
## Formal Definition
- *(the System is linear)*

	$y[n] = \sum_{k=-\infty}^{+\infty} x[k] \cdot h_k[n]$
	- *(the System is also time-invariant)*

		$h_k[n] = h[n-k]$
## TL;DR
An LTI system's total output is its reaction to _each_ individual input sample, added together.

This output is obtained by computing the convolution sum between its impulse response and input signal.

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->
