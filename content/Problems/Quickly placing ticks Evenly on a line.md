---
title: Quickly placing ticks Evenly on a line
date: 2026-01-25
tags:
  - type/strategy
  - topic/
draft: false
---
## What is the problem
You need to place $n$ ticks evenly on a line (including the start and end points) but do not have a ruler.
## The Core Insight
The difficulty of manually dividing a line is proportional to the size of the gap you have to "guess." Dividing a line into 2 or 3 parts by eye is easy; dividing it into 7 or 11 is hard.

To minimize error, we use *Prime Factorization*. This ensures the largest "guess" you ever make is equal to the *Largest Prime factor* ($LP$) of the number you are working with.
## Before you begin
1. Draw the line on which you'd place your ticks, 2 of the ticks will be placed at the very start and end. ![[Quickly placing ticks evenly on a line 2026-01-25 15.38.08.excalidraw.svg|100%]]
## The Strategy
To place $n$ ticks, you'll subdivide the line using the prime factors of $n-1$.
Why not $n$?
Since creating $n-1$ divisions is equivalent to placing $n$ ticks
1. Find the prime factors of $n-1$ (also include their exponent) and highlight the largest factor.![[Quickly placing ticks evenly on a line 2026-01-25 16.28.06.excalidraw.svg]]
2. Divide the line recursively from the largest factor to the smallest.
	(a repeated factor simply translates into repeating its divison)
3.  you're done =) (u now have $n$ ticks)

>[!info] In case u haven't noticed
> To place $n$ ticks you aren't forced to work with the prime factors of $n-1$.
> 
> It's totally valid to instead work with the prime factors of $n-1+1$ or $n-1+2$ or $n-1+k$ *(in general)*.
> 
> But don't forget to remove the last $k$ ticks, since working with the prime factors of $n-1+k$ produces $n+k$ ticks, not $n$.
> 
> **Why switch?** Because sometimes $n-1+k$ has a *lower LP* than $n-1$.<br>
>  A smaller LP means the *largest guess u ever have to make* is smaller than what a larger LP would force u to do.
## Example
Placing 7 Ticks ($n=7$)
1. The prime factors of 6 are 2, 3 (largest). <br>
![[Dividing a Line into even parts 2026-01-25 15.16.26.excalidraw.svg]]
2. *(Factor 3)*: divide the total line into *3* equal regions.<br>
![[Quickly placing ticks evenly on a line 2026-01-25 15.51.48.excalidraw.svg]]
3. *(Factor 2)*: Divide each of those regions into *2* equal parts. <br>
![[Quickly placing ticks evenly on a line 2026-01-25 16.44.29.excalidraw.svg]]
4. you're done =) (u now have 7 ticks)
---
## Connections
- **Related to:** [[...]]
