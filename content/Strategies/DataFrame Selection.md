---
title: DataFrame Selection
date: 2026-02-05
tags:
  - type/strategy
  - topic/
draft: false
---
## What is the problem 
U have a DataFrame and u need to select specific slices, maybe: 
- whole columns
- specific rows by their *index* or order
- or rows that share a common value
## Before you begin
*Recall the structure of a DataFrame*

![[DataFrame Diagram#^diagram]]

*I'll demonstrate on the example below*

![[DataFrame Diagram#Example]]
## The Strategy
### Column Selection
To select column(s), u do the following:
1. determine the selector
2. use that selector
#### Case A (the only one)
(*direct lookup*)
1. determine the selector
	- select by column name (a string).
``` python
# an example
selector = 'Team'
```
![[Pandas DataFrames 2026-02-04 00.42.58.excalidraw.svg]] 

2. use that selector
	- used on the `[]` operator.
``` python
column = df[selector] 
```
> [!info]  Multi-Column Selection
> If u want to select multiple columns, simply change the selector to a list of their identifiers (usually their names).

---
### Rows Selection
To select row(s), u do the following:
1. determine the selector
2. use that selector
#### Case A
(*direct lookup*)
1. determine the selector
	- select by its index label
``` python
# an example
selector = 'P_01'
```
![[Pandas DataFrames 2026-02-04 01.23.43.excalidraw.svg]]

2. use that selector
	- used on the `.loc` operator.
``` python
row = df.loc['P_01'] 
```
#### Case B
(*direct lookup*)
1. determine the selector
	- select by its position
``` python
# an example
selector = 1
```
![[Pandas DataFrames 2026-02-04 01.31.59.excalidraw.svg]]

2. use that selector
	- used on the `.iloc` operator.
``` python
row = df.iloc[1] 
```
#### Case C
(*lookup based on some "criteria")
1. determine the selector
	- select by a boolean mask.
``` python
# an example
selector = df['Team'] == 'Red'
```
![[Pandas DataFrames 2026-02-04 01.33.30.excalidraw.svg]]

2. use that selector
	- used on the `[]` operator.
``` python
rows = df[selector]
```

> [!info]  Multi-Row Selection
> In direct lookup (Case A: `.loc` and Case B: `.iloc`), if u want to select multiple rows, simply change the selector to a list of their identifiers.

---

> [!info] Row then Column selection
> You can also use a row and then column selector, using the `.loc` operator.
> ``` python
> # syntax
> result = df.loc[row_selector, column_selector]
> ```

---
## Connections
- **Related to:** [[DataFrame Diagram]]
