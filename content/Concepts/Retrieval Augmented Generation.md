---
title: Retrieval Augmented Generation
date: 2026-04-13
tags:
  - type/concept
  - course/orange-agentic-ai
  - domain/ai
draft: false
thumbnail: "[[Training vs RAG 2026-04-13 21.46.30.excalidraw.svg]]"
comments: true
related-notes:
---
(*this is quite the simplification*)... but a model *generally* relies only on its learnt parameters and their resulting *assumptions* when operating.   
![[Training vs RAG 2026-04-13 21.31.19.excalidraw.svg]]   
# WHAT is RAG
However, **R**etrieval **A**ugmented **G**eneration allows a model to update some of its *outdated* assumptions using external knowledge/sources.   

![[Training vs RAG 2026-04-13 21.46.30.excalidraw.svg]]

---
# WHY do it
I use Gemini to help me create notes like this one faster. It is more than capable, but if I don't *explicitly* tell it how I want them to look, it'll keep generic assumptions.   
## BEFORE using RAG 
![[Training vs RAG 2026-04-13 22.16.13.excalidraw.svg]]   
*My* concept notes are **structured** into headers that make sense to me
- if Gemini thinks concept notes contain basic headers, it'll give me basic headers.

*My* concept notes are more **precise**
- if Gemini thinks concept notes are lengthy, it'll give me a longer note.

*My* concept notes are **targeted** towards future Asser
- if Gemini thinks concept notes are targeted towards recruiters, it'll give me one that is targeted towards recruiters.

*My* concept notes use **formatting** that I've developed over time
- if Gemini thinks concept notes use formatting `X`, it'll give me a concept note that uses formatting `X`.

All of these assumptions will be updated if I simply gave Gemini a sample of what my Concept notes "are".   
## AFTER using RAG
![[Training vs RAG 2026-04-13 22.46.25.excalidraw.svg]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->
