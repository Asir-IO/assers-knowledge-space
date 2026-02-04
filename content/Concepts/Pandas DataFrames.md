---
title: Pandas DataFrames
date: 2026-02-03
tags:
  - type/concept
  - topic/
draft: false
---
## Mental Model
![[Pandas DataFrames 2026-02-03 15.56.44.excalidraw.svg]]

A DataFrame consists of two distinct parts: the *index* column and the *data* columns. <br>
The *index* column is what identifies each row and defaults to the initial integer indicies (shown above on the very left). <br>
The data columns, well, contain the actual data.

---
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
selector = 'type'
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
selector = 'ID_20230655'
```
![[Pandas DataFrames 2026-02-04 01.23.43.excalidraw.svg]]

2. use that selector
	- used on the `.loc` operator.
``` python
row = df.loc['ID_20230655'] 
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
row = df.loc[1] 
```
#### Case C
(*lookup based on some "criteria")
1. determine the selector
	- select by a boolean mask.
``` python
# an example
selector = df['population'] > 1_000_000
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

## The keys
> [!abstract] Symbols Key
> ...

> [!abstract] Arrows/Lines Key
> ...

> [!abstract] Notation Key
> ...
## Formal Definition
...


---
## Connections
- **Related to:** [[...]]