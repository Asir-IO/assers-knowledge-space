---
title: Solving a Hough Transform Problem
date: 2026-06-08
tags:
  - type/strategy
  - baby
  - course/IT443
  - domain/ai
draft: true
thumbnail:
comments: true
related-notes:
---
# What is the problem
You'll be given,
- {i} an mxn input binary image,
- the amount of quantization levels for $\theta$ (the angles),
- the range of $\theta$ (it usually is \[$0$, $\pi$\]).
- the amount of quantization levels for $\rho$ (the radial distance),
	- you'll not be given the maximum value for $\rho$ and will need to compute it [[#^a443a7|manually]].
- a threshold value $T$ (to filter out the strongest votes),

and asked to compute the hough transform of the input image.
![[Solving a Hough Transform Problem-1.png]]

---
# Before you begin
1. compute the maximum value for $\rho$, ^a443a7

---
# Strategy
For every edge point (1) in the input image,
1. it'll vote for a bunch of ($\theta$, $\rho$) points, find them.
	1. you find them by going 

---
# Example
...

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC -->

| Thumbnail | Note | Type |
| --------- | ---- | ---- |

<!-- SerializedQuery END -->

---
# Sources
- 