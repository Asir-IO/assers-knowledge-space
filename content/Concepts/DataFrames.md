---
isNote: true
title: DataFrames
date: 2026-02-06
tags:
  - type/concept
  - domain/ai
  - course/
draft: false
thumbnail: "[[Pandas DataFrames 2026-02-03 15.56.44.excalidraw.svg]]"
comments: true
related-notes:
  - "[[DataFrame Selection]]"
---
## The Diagram
![[Pandas DataFrames 2026-02-03 15.56.44.excalidraw.svg]]
^diagram
## What it is
A *DataFrame* is basically a collection of columns (specifically `pd.Series`(s)) 
- I like to picture each column as a *string of beads*.

The columns/strings are aligned side-by-side (the 1st bead of each string are all on the same level and so on...).

Each level of aligned beads/row can be accessed using a unique <mark style="background: #BBFABBA6;">index</mark>.

![[DataFrame Structure 2026-02-06 16.30.24.excalidraw.svg]]

---
## Example
**Its Tabular/Pythonic Form

|     | (index) | Team | Score |
| :-- | :------ | :--- | :---- |
| 0   | P_00    | Red  | 5     |
| 1   | P_01    | Blue | 10    |
| 2   | P_02    | Red  | 15    |

**Its visual form**

![[Pandas DataFrames 2026-02-05 21.01.36.excalidraw.svg|100%]]


> [!info] Where did the column arrows/strings go
> I removed them to reduce the clutter, and u should too when drawing a dataframe.
> 
> However, I like to remind myself that a dataframe is nothing but an indexed set of vertical series/columns/strings.

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail                                                                                                                      | Note                                                       |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| ![[Pandas DataFrames 2026-02-04 00.42.58.excalidraw.svg\|Pandas DataFrames 2026-02-04 00.42.58.excalidraw.svg\|120]] | [[DataFrame Selection]] |

<!-- SerializedQuery END -->
