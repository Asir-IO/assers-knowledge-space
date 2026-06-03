---
isNote: true
title: Autoencoders
date: 2026-05-29
tags:
  - type/concept
  - course/AI322
  - domain/ai
  - domain/maths
draft: false
thumbnail:
comments: true
related-notes:
  - "[[Embedding]]"
---
> [!two-column]
>
> > [!left]
> > We have a number of n-dimensional points; Normally, we identify each one of them using n numbers (e.g., the point (0,1) in R^2 is identified using 2 numbers)
>
> > [!right]
> > 
> > ![[lab-temp-thumb.excalidraw.svg|150]]

But, what if we could give n-dimensional points a lower dimensional (<n) identifier?

>[!warning] This only make sense if...
>This only make sense if the n-dim points are mostly within a finite subset of their n-dim space, which allows them to be mapped onto a lower (<n)-dim space.

We could use a hash map, and it'd be perfectly able to map an n-dim point to a (<n)-dim point, but would it be able to map the (<n)-dim point back to its n-dim version? **Nope**.

An Autoencoder, however, can map back and forth between an n-dim point and a (<n)-dim one.

It in fact can do all of the following stuff that a hash map just can't,
1. {i} ...
2. map an n-dim point, A, to a (<n)-dim that then gets mapped back into another n-dim point, B. 
	- This is useful if u want information in A that's not in B (usually noise) to be **ignored** in the mapping-back.

...

---
# Example
...

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC -->

| Thumbnail | Note | Type |
| --------- | ---- | ---- |

<!-- SerializedQuery END -->

---
# Sources
