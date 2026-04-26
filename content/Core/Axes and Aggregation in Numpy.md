---
isNote: false
title: Axes and Aggregation in Numpy
date: 2026-04-21
tags:
  - topic/
  - course/
  - type/
  - domain/ai
draft: false
thumbnail: "[[Axis and Aggregation 2026-04-21 19.08.20.excalidraw.svg]]"
---
An array with 2 axes can be visualized in the following way,   
![[Axis and Aggregation 2026-04-21 19.00.37.excalidraw.svg]]
Or in this way,

![[Axis and Aggregation 2026-04-21 19.15.41.excalidraw.svg]]   
*(this way also works for any number of axes)*

---
# Aggregation
## Over Axis 0
Before aggregating,
- each axis 1 index had a column of values spread across axis 0.

After aggregating,
- for every axis 1 index, its column was squished into a single value.
- that single value is a function of the individual column elements.
![[Axis and Aggregation 2026-04-21 19.08.20.excalidraw.svg]]   
## Over Axis 1
Before aggregating,
- each axis 0 index had a row of values spread across axis 1.

After aggregating,
- for every axis 0 index, its row was squished into a single value.
- that single value is a function of the individual row elements.

![[Axis and Aggregation 2026-04-21 19.11.42.excalidraw.svg]]   

---
# Connections
-  [[]]