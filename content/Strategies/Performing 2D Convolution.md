---
isNote: true
title: Performing 2D Convolution
date: 2026-03-29
tags:
  - type/strategy
  - topic/
  - course/AI322
  - course/IT443
  - domain/ai
draft: false
thumbnail: "[[Performing 2D Convolution 2026-03-29 23.41.19.excalidraw.svg]]"
---
 ## What is the problem
You'll be given an input 2D image and a 2D filter and be asked to show the resulting image after passing the filter over the 2D image (computing the convolution between the two).   
![[Performing 2D Convolution 2026-03-29 22.28.56.excalidraw.svg]]
## Before you begin
1. highlight the center pixel within the filter to anchor your eye.   
	![[Performing 2D Convolution 2026-03-29 22.33.36.excalidraw.svg]]   
2. we'll compute the convolution row by row, i find it helpful to highlight this flow by faintly drawing an arrow over every row.   
	![[Performing 2D Convolution 2026-03-29 22.36.54.excalidraw.svg]]
3. while multiplying an input pixel by a kernel one, internalize the following,
	- if the kernel pixel is 0, just skip the product.
	- if the kernel pixel is 1, just copy the input pixel.
	- if it was -1, just invert the sign of the input pixel.   
	aka, don't perform redundant calculations on the calculator.   
4. you'll compute the convolution for a set amount of center pixels, <mark style="background: #ADCCFFA6;">shade</mark> around them a bit to internalize this.   
	![[Performing 2D Convolution 2026-03-29 23.53.17.excalidraw.svg]]  
## Strategy
1. highlight the center pixel you're currently computing for by a circle (to anchor it with the center of the kernel, also highlighted by a circle).   
	![[Performing 2D Convolution 2026-03-29 23.14.52.excalidraw.svg]]   
2. place your finger right above the row you're currently computing, with its tip stretching to the end of the window, and input its products into the calculator.   
	(this is the 1st row's)
	![[Performing 2D Convolution 2026-03-29 23.18.37.excalidraw.svg]]   
	(this is the 2nd row's)   
	![[Performing 2D Convolution 2026-03-29 23.41.19.excalidraw.svg]]
	(this is the 3rd row's)   
	![[Performing 2D Convolution 2026-03-29 23.43.50.excalidraw.svg]]   
3. when you're done with the final row, evaluate the result on the calculator and place it in the output image.   
	![[Performing 2D Convolution 2026-03-29 23.46.25.excalidraw.svg]]
4. *faintly* cross out the center pixel u just finished, in both the input and output image, and repeat for the rest of the center pixels.
	![[Performing 2D Convolution 2026-03-30 00.11.08.excalidraw.svg]]
## Example
The following animation shows how the rest of the center pixel values are computed.  
![[Performing 2D Convolution 2026-03-30 00.11.08.excalidraw.mp4]]

---
## Connections
-  [[]]
