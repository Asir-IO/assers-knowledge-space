---
isNote: false
title: Machine Learning
date: 2026-05-31
tags:
  - type/concept
  - course/
  - domain/
draft: false
thumbnail:
comments: true
related-notes:
---
...

---
# Example
...

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note | Type |
| --------- | ---- | ---- |

<!-- SerializedQuery END -->

---
# Sources
- [Teaching Computers to Learn - YouTube](https://www.youtube.com/playlist?list=PLZErML25eQ-NH9pF6zfcrB06tFT4qFeAJ)