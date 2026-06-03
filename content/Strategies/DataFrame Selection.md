---
isNote: true
title: DataFrame Selection
date: 2026-02-05
tags:
  - type/strategy
  - domain/ai
draft: false
thumbnail: "[[Pandas DataFrames 2026-02-04 00.42.58.excalidraw.svg]]"
comments: true
related-notes:
  - "[[DataFrames]]"
---
## What is the problem 
U have a DataFrame and u need to select specific slices, maybe: 
- whole [[#Column Selection|columns]]
- specific rows by their [[#Case A|index]] or [[#Case B|position]]
- or rows that share some [[#Case C|criteria]].
## Before you begin
*Recall the structure of a DataFrame*

![[DataFrames#The Diagram]]

*I'll demonstrate selection on the example below*

**Its Tabular/Pythonic Form**

|     | (index) | Team | Score |
| :-- | :------ | :--- | :---- |
| 0   | P_00    | Red  | 5     |
| 1   | P_01    | Blue | 10    |
| 2   | P_02    | Red  | 15    |

**Its visual form**

![[Pandas DataFrames 2026-02-05 21.01.36.excalidraw.svg|100%]]

---
## The Strategy
### Column Selection
To select column(s), u do the following:
1. determine the selector
	- select by column label (it doesn't have to be a `string`)
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
### Rows Selection
To select row(s), u do the following:
1. determine the selector
2. use that selector
#### Case A
(*direct lookup*)
1. determine the selector
	- select by its index label (it doesn't have to be a `string`)
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
	- select by its position (the selector is always an `int`)
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
	- select by some column value criteria (the selector usually is a `pandas boolean mask`)
``` python
# an example
selector = df['Team'] == 'Red' # select rows that their 'Team' column value is 'Red'
# it evaluates to this (a pandas bool mask)
"""
P_00   True 
P_01   False
P_02   True
"""
```
![[Pandas DataFrames 2026-02-04 01.33.30.excalidraw.svg]]

2. use that selector
	- used on the `[]` operator.
``` python
rows = df[selector]
```

> [!info]  Multi-Row Selection
> In direct lookup (Case A: `.loc` and Case B: `.iloc`), if u want to select multiple rows, simply change the selector to a list of their identifiers.

> [!info] Row then Column selection
> You can also use a row and then column selector, using the `.loc` operator.
> ``` python
> # syntax
> result = df.loc[row_selector, column_selector]
> ```

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail                                                                                                                      | Note                                   |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| ![[Pandas DataFrames 2026-02-03 15.56.44.excalidraw.svg\|Pandas DataFrames 2026-02-03 15.56.44.excalidraw.svg\|120]] | [[DataFrames]] |

<!-- SerializedQuery END -->


