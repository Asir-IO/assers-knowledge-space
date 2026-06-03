---
isNote: true
title: Neuro-Fuzzy Systems
date: 2026-05-02
tags:
  - type/concept
  - course/AI312
  - domain/ai
draft: false
thumbnail: "[[Neuro-Fuzzy Systems 2026-05-05 01.22.44.excalidraw.svg]]"
comments: true
related-notes:
---
# Why use it
A regular neural network is quite capable of learning i/o mappings, but you have no control over the features that it learns per hidden layer.   

This is usually okay, since most of the time, u don't really care what the learnt features are, the network is *allowed* to decide the features, and they usually don't have an explainable meaning.   
![[Neuro-Fuzzy Systems 2026-05-02 23.10.35.excalidraw.svg]]

But sometimes, you care.

Sometimes you need a system that doesn't decide it's features, you do.   

This is what a Neuro-Fuzzy System is, a system that learns i/o mappings, and you *explicitly* decide what features it learns and uses (usually to make them explainable, or more "human" readable).   
![[Neuro-Fuzzy Systems 2026-05-02 23.20.16.excalidraw.svg]]   
You basically create a system that starts with a set of fuzzy features (e.g., <mark style="background: #ADCCFFA6;">Tall</mark>/<mark style="background: #ADCCFFA6;">Short</mark> and <mark style="background: #FF5582A6;">Young</mark>/<mark style="background: #FF5582A6;">Old</mark>), derives other features from them (using logic rules) (e.g., <mark style="background: #BBFABBA6;">Games</mark>/<mark style="background: #BBFABBA6;">Mugs</mark>), and keeps doing this until deriving the output features (e.g., <mark style="background: #D2B3FFA6;">High</mark>/<mark style="background: #D2B3FFA6;">Low</mark>).   

As u may have noticed, we usually don't get fuzzy logic variables as input and instead get a continuous/crisp version of them (e.g., we don't get <mark style="background: #ADCCFFA6;">Tall</mark>/<mark style="background: #ADCCFFA6;">Short</mark>, we get a *crisp* Height variable as input).   
This is why we need to *fuzzify* the crisp input variables first.

It also is usually the case that we expect a crisp value as an output (e.g., we're not interested in how <mark style="background: #D2B3FFA6;">High</mark> or <mark style="background: #D2B3FFA6;">Low</mark> the spending is, we want to know how *much* it is).   
In which case, we *de-fuzzify* the output fuzzy variables into a crisp one.

This diagram shows the entire <mark style="background: #FFB86CA6;">process</mark>.   
![[Neuro-Fuzzy Systems 2026-05-05 01.22.44.excalidraw.svg]]

---
# How to Fuzzify
Take the "Height" crisp variable as an example,   
![[Fuzzy Logic 2026-05-01 19.51.37.excalidraw.svg]]   
We basically assign a triangular/trapezoidal curve to each fuzzy variable.   
(they both get a trapezoid here since they are at the edges).   

We normally need to find the four (a, b, c, d) anchor points that make the most sense, for each shape.

However, we can constraint the shapes a little to reduce the amount of variables to optimize, by assuming the following,
- **Shape Restriction**   
	- We exclusively use Left and Right Shoulders for the extreme edges, and standard Triangles for everything in the middle.   
	![[Fuzzy Logic 2026-05-02 00.11.19.excalidraw.svg]]   
- **Perfect Overlap**   
	- Every membership function perfectly hands off to its neighbor   
		(the peak of one triangle is the exact starting point of the next).   
	![[Fuzzy Logic 2026-05-02 00.14.02.excalidraw.svg]]   
- **Evenly-spaced peaks**   
	- Peaks are evenly spaced.   
	![[Fuzzy Logic 2026-05-02 00.18.20.excalidraw.svg]]   

This way, the only variable that determines the entire shape is its "peak-wise" distance   
![[Fuzzy Logic 2026-05-02 00.38.32.excalidraw.svg]]
%%include an applet here that shows how the shape stretches and shrinks as the distance changes%%
%%explain how this simplification usually is good enough%%
... every crisp *input* variable has its own "peak-wise distance", denoted as $b^{(i)}$ for the $i$-th variable.   
![[Fuzzy Logic 2026-05-02 01.11.39.excalidraw.svg]]   
The System uses a neural network to search for its optimal value, by *interpolating* between values within a window that *u specify*.   
$$
b^{(i)} = n \cdot (b^{(i)}_{max} - b^{(i)}_{min}) + b^{(i)}_{min}
$$   
![[Neuro-Fuzzy Systems 2026-05-05 02.53.40.excalidraw.svg]]

---
# How to combine features
We convert logical connectives into mathematical ones.   
- A AND B *becomes* min(A, B)
- A OR B *becomes* max(A,B)

If a fuzzy variable implies another one (e.g., Tall implies Games), the consequent *takes on* the value of the antecedent (e.g, Games = 0.6 when Tall = 0.6)

---
# How to de-fuzzify
...

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->
