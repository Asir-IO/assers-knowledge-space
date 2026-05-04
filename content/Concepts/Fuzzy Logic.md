---
isNote: true
title: Fuzzy Logic
date: 2026-05-01
tags:
  - type/concept
  - topic/
  - course/AI312
  - domain/ai
draft: true
thumbnail:
---
Do we speak in numbers?   
We don't.   
Can we accurately map knowledge to numbers?   
Well..., what would u prefer to be asked,
- rate this movie on a scale of 1 to 10
- or, rate this movie as "Good", "Average", or "Bad"
# Mental Model
![[Fuzzy Logic 2026-05-01 15.59.18.excalidraw]]   

![[Fuzzy Logic 2026-05-01 19.51.37.excalidraw]]   

![[Fuzzy Logic 2026-05-01 20.08.03.excalidraw]]   
Normally, training a fuzzy system requires the neural network to optimize 3 parameters ($a, b, c$) for every single triangle, and 4 parameters ($a, b, c, d$) for every trapezoid; this is alot of variables.   

However we can drastically reduce the number of variables by assuming the following,
- **Shape Restriction**   
	- We exclusively use Left and Right Shoulders for the extreme edges, and standard Triangles for everything in the middle.   
	![[Fuzzy Logic 2026-05-02 00.11.19.excalidraw]]   
- **Perfect Overlap**   
	- Every membership function perfectly hands off to its neighbor   
		(the peak of one triangle is the exact starting point of the next).   
	![[Fuzzy Logic 2026-05-02 00.14.02.excalidraw]]
- **Evenly-spaced peaks**   
	- Peaks are evenly spaced.   
	![[Fuzzy Logic 2026-05-02 00.18.20.excalidraw]]   
This way, the only variable that determines the entire shape is its "peak-wise" distance   
![[Fuzzy Logic 2026-05-02 00.38.32.excalidraw]]
%%include an applet here that shows how the shape stretches and shrinks as the distance changes%%
%%explain how this simplification usually is good enough%%
... every <mark style="background: #D2B3FFA6;">fuzzy</mark> variable has its own "peak-wise distance", denoted as $b^{(i)}$ for the $i$-th variable.   
![[Fuzzy Logic 2026-05-02 01.11.39.excalidraw]]

The Neural Network's job is to search for its optimal value, within a window that *u specify*   
$$b^{(i)}_L \le b^{(i)} \le b^{(i)}_U$$


---
# Example
...

---
# Connections
-  [[]]