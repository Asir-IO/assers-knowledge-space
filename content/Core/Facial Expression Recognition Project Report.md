---
title: Facial Expression Recognition Project Report
date: 2026-05-08
tags:
  - course/
  - domain/
  - type/
draft: true
thumbnail:
comments: true
related-notes:
---
# Team Members
* Asser Ahmed Roshdy (ID: 20230655)
* ...

---
# Abstract
This report shows an FER pipeline built to classify grayscale images into 7 emotions. Preprocessing was done using CLAHE for flat lighting and a Bilateral Filter for smooth skin. Features were extracted using LBP and HOG, then passed to an SVM classifier. HOG outperformed LBP, achieving a 54.87% test accuracy.
# Problem Definition
The core challenge is differentiating the defining lines of a facial expression from irrelevant factors (like uneven lighting, shadows, and skin texture), and 
# Methodology
1. **Preprocessing**   
	- Normalize image contrast and remove irrelevant texture, without destroying the defining lines of a facial expression.
2. **Feature Extraction**   
	- Generate HOG and LBP features from the clean images.
3. **Classification**   
	- Train an SVM on the extracted features to accurately categorize images into the seven target emotions.
---
# Facial Expression Recognition
## About the Dataset used
The **FER-2013** dataset was used, containing images categorized into 7 emotions:   
(`angry`, `disgust`, `fear`, `happy`, `neutral`, `sad`, and `surprise`)

---
## Image Preprocessing
We identified that an "optimal" image is expected to have the following properties,
1. only include the face
2. have flat, uniform lighting (balanced contrast) (since shadows in an img are irrelevant)
	- CLAHE was done to achieve this.
3. have butter smooth skin (since facial features are irrelevant)
	- smoothing was done to achieve this, specifically Bilateral smoothing.
4. have prominent expression lines (eyebrows, mouth corners, nasolabial folds)
#### How it was done
1. **Contrast Enhancement**
    - applied CLAHE (Contrast Limited Adaptive Histogram Equalization) with a `clipLimit=2.0` and `tileGridSize=(8, 8)` to improve local contrast and ensure flat lighting.
2. **Smoothing**
    - further applied a Bilateral Filter (`d=5`, `sigmaColor=25`, `sigmaSpace=25`)
    - we also attempted using a median and gaussian filter, but the bilateral one was the least destructive to the edges.   
        ![[Facial Expression Recognition Project Report-1.png]]

---
## Feature Extraction
Two distinct algorithms were implemented to *translate* the preprocessed image matrices into numerical *feature vectors*.
#### What was done
1. **Local Binary Patterns (LBP)**
    - extracted texture features using `skimage.feature.local_binary_pattern` configured with 8 points and a radius of 1 (`method='uniform'`).
2. **Histogram of Oriented Gradients (HOG)**
    - extracted shape and edge orientation features using `skimage.feature.hog`.
    - configured the extraction pipeline with 9 orientations, `pixels_per_cell=(8, 8)`, and `cells_per_block=(2, 2)`, followed by `L2-Hys` block normalization.
    - this mapping resulted in a flattened 900-dimensional feature vector for every image.


---
## Classification
A Support Vector Machine (SVM) model was trained on both the LBP and HOG features, since we still weren't sure which features to use.
#### What was done
1. **Trained on LBP features**
	- and the accuracy was absolutely disastrous.
	 validation accuracy = `19.84%`   
	 test accuracy = `19.92%`   
	![[Facial Expression Recognition Project Report-2.png]]   
2. **Trained on HOG features**
	- its accuracy was much better.   
	 validation accuracy = `55.51%`   
	 test accuracy = `54.87%`   
	![[Facial Expression Recognition Project Report-3.png]]   
3. **Visualized the difference**
    - we also visualized the difference in accuracies as a bar chart, to show the scale of it.   
		![[Facial Expression Recognition Project Report-4.png]]

%%Even though the HOG features performed better than the LBP ones, they still did perform bad.%%
