---
title: Edge Linking
date: 2026-04-21
tags:
  - type/concept
  - course/IT443
  - domain/ai
draft: false
thumbnail: "[[Edge Linking 2026-04-21 22.04.55.excalidraw.svg]]"
related-notes:
---
![[Edge Linking 1.webp]]   
You took an image of a someone and want to extract his outline.   

You decide to do it by calculating the image's gradient map and using its *magnitude* component to highlight the edges.   
# The Gradient Map
![[Edge Linking 2.webp]]   
>"What's with ALL that noise, REMOVE it."

You panicked after seeing that much noise and decided to threshold the map with a very **high** threshold.   

# The Thresholded Map
This was the result,   
![[Edge Linking 3.webp]]   
*Most* of the edge points were *removed*, even ones belonging to the outline you're after.  
# But it's okay
>How so?   

Remember the phase feature map you computed alongside the magnitude? this shows the direction the edge is generally moving in   
![[Edge Linking 2026-04-21 21.56.42.excalidraw.svg]]   
You can use it to bring back the outline points that got lost.   
![[Edge Linking 2026-04-21 22.04.55.excalidraw.svg]]   
... now the outline becomes,   
![[Edge Linking 4.webp]]
# How it's done
...

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->




