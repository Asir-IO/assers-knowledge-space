---
title: Neural Networks as a Squiggle Fitter
date: 2026-02-26
tags:
  - type/concept
  - course/
  - domain/ai
draft: false
thumbnail: "[[Neural Networks as a Squiggle Fitter 2026-02-26 14.43.34.excalidraw.svg]]"
comments: true
related-notes:
  - "[[Neural Networks]]"
  - "[[Neural Networks as an Input Refinery]]"
---
## Mental Model
A NN can be thought of as an object that, <mark style="background: #FF5582A6;">builds</mark> squiggles and sequentially combines them into higher-level ones, until finally <mark style="background: #D2B3FFA6;">combining</mark> and *sometimes* squashing the final set of squiggles into surfaces that correctly fit the model's training examples.    
![[Neural Networks as a Squiggle Fitter 2026-02-26 00.11.39.excalidraw.svg]]
> [!info] Symbols Key
> ![[Neural Networks as a Squiggle Fitter 2026-02-26 14.12.08.excalidraw.svg]]

---
## Example
Given the following training examples with 2 input features $x_1$ and $x_2$, and a corresponding output $Z$; such that an example is a <mark style="background: #ADCCFFA6;">blue dot</mark> if its output is 0, and is a <mark style="background: #FF5582A6;">red cross</mark> otherwise.
![[Neural Networks as a Squiggle Fitter 2026-02-26 13.46.56.excalidraw.svg]]    
The following surface seems to fit these training examples well.   
![[Neural Networks as a Squiggle Fitter 2026-02-26 02.43.35.excalidraw.svg]]    
Now, how do we construct an equation that represents that surface? it isn't obvious to us how to do that, but the output layer does it by combining the high-level squiggles that it receives from the final hidden layer.     
![[Neural Networks as a Squiggle Fitter 2026-02-26 14.02.05.excalidraw.svg]]
![[Neural Networks as a Squiggle Fitter 2026-02-26 14.43.34.excalidraw.svg]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail                                                                                                                                                          | Note                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| ![[Neural Networks in Machine Learning 2026-02-24 13.05.35.excalidraw.svg\|Neural Networks in Machine Learning 2026-02-24 13.05.35.excalidraw.svg\|120]] | [[Neural Networks as an Input Refinery]] |

<!-- SerializedQuery END -->
