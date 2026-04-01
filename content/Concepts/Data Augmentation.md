---
isNote: true
title: Data Augmentation
date: 2026-04-01
tags:
  - type/concept
  - topic/
  - course/AI332
  - domain/ai
draft: false
thumbnail: "[[Data Augmentation 2026-04-01 21.35.29.excalidraw.svg]]"
---
## What it is
Say you have a dataset of pet drawings, but the "_cat_" class is severely under-represented. You've got plenty of examples showing what a frog and a dog look like, but only a _single_ example showing what a cat is.   
![[Data Augmentation 2026-03-29 21.25.12.excalidraw.svg]]

> [!question] Is there anything u could do? 

Sure there is: synthesize new examples for cats by milking your knowledge about what a "_cat_" is.

A cat with a head patch is still a cat, a cat with a drawn mouth is still a cat, a cat drawn smaller is still a cat. If u construct these variations, you can add add them all as new cat examples to the dataset.

![[Data Augmentation 2026-04-01 21.35.29.excalidraw.svg]]   
After adding 3 variations of what a cat is and combining some of them we ended up with 5 more training examples, imagine just *how many* more we can synthesize if we continued further.   

However, there are rules that govern what variations are valuable and how they can be combined.

---
## The "Still a Cat" Rule (Label Preservation)
The most critical rule of data augmentation is ensuring **Label-Preserving** Transformations. The variations you apply must _never_ change the fundamental identity (the label) of the example.

> [!warning] An Example
> 
> - **Good:** Flipping a picture of a cat horizontally. It's still a cat.
> - **Bad:** Flipping the number "6" vertically. It becomes a "9" and is no longer a valid representation of the original class.

---
## Common Techniques (Computer Vision)
When dealing with image data, you can combine multiple transformations to artificially expand your dataset:
1. **Geometric Transformations**
    - **Scaling or Cropping**
	    Zooming in or cutting out parts of the image (forces the model to recognize partial features).
    - **Flipping** 
	    Horizontal flips are usually safe; vertical flips depend on the context (e.g., upside-down cats are rare).
    - **Rotation or Translation** 
	    Shifting the object off-center or tilting it.
2. **Color Space Adjustments**
    - Changing brightness, contrast, saturation, or hue. A dark photo of a cat is still a cat.
3. **Noise Injection**
    - Adding random Gaussian noise to pixels. This prevents the model from memorizing exact pixel values and forces it to look for broader patterns.
## Other Usages
Apart from balancing a dataset, it can be used as a:
- **Regularizer**   
	By constantly feeding the model slightly altered images, it helps a model reduce its **Overfitting**. The model is forced to learn the _general features_ of a cat (ears, whiskers) rather than memorizing the exact training images.
- **Generalization Booster**   
	Makes a model less sensitive to real-world camera noise, lighting changes, and object positioning.
---
## Connections
-  [[]]