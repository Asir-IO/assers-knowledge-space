---
isNote: true
title: Block Diagram Feedback Connection
date: 2026-01-22
tags:
  - type/strategy
  - topic/
  - course/IT341
  - domain/systems
draft: false
thumbnail: "[[Feedback Loops 2026-01-22 00.58.26.excalidraw.svg]]"
comments: true
related-notes:
---
## The Strategy
### Drawing it
Given, (as an example)
$$
H(s) = \frac{c+d*1/s+e*1/s^{2}}{1+a*1/s+b*1/s^{2}}
$$
1. Place the integrators ($\frac{1}{s}$) in a row.   
	![[Feedback Loops 2026-01-22 00.41.03.excalidraw.svg|100%]]   
2. Add the Coefficients for each feedback term, and then sum them all back to the *beginning*.   
	![[Feedback Loops 2026-01-22 00.52.01.excalidraw.svg|100%]]   
3. Do the same with the forward path, and sum them to the *output*.   
	![[Feedback Loops 2026-01-22 00.58.26.excalidraw.svg]]   
4. You're done =)
### Decoding it
...

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->


