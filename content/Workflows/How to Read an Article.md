---
isNote: true
title: How to Read an Article
date: 2026-05-12
tags:
  - type/workflow
  - course/
  - domain/
draft: false
thumbnail:
comments: true
related-notes:
---
Reading an article while scrolling "passively" and maybe taking a note on paper or whatsapp every now and then was what I always did, but it dawned on me yesterday that the process doesn't have to be like this.   

Taking notes on what I read shouldn't be a secondary consideration, it should be a natural reflex while reading, and taking notes of an article outside it (on paper or on whatsapp or whatever) increases friction greatly.   

> Why not take notes of an article *within* the article? the same way you take notes of a book within a pdf editor?

---
# Before you begin
1. you'll need a markdown editor, install one.
	- I personally use and recommend [Obsidian](https://obsidian.md/)
2. create an `Articles/` folder within it.
	 - this is where an article note (containing a webpage's content) will be added.
3. create a template for an `article` note.   
	![[How to Read an Article-1.mp4]]
> [!code] I personally use this template
> ```md
> ---
> # Comments
> ```
> It basically is a blank note, with a section at the bottom for comments (since comments get added to the bottom).
4. install the [Obsidian Web Clipper](https://obsidian.md/clipper) plugin.

---
# To Read an Article
1. create an article note inside `Articles/`.
	![[How to Read an Article-2.mp4]]
2. within the article's webpage, use the Web Clipper Plugin to capture the webpage.
3. copy the content to your clipboard.
	![[How to Read an Article-3.mp4]]
4. paste it at the top of your article note.
	![[How to Read an Article-4.mp4]]

... you now have the article locally on your PC and can do whatever u want with the information within it =)

---
# To Take Notes
1. install an obsidian plugin that allows you to add comments to highlighted text.
	- I personally use the [Sidebar Highlights](https://github.com/trevware/obsidian-sidebar-highlights) plugin.
2. highlight the text you want take a note on.
	- I use the `Alt+H` hotkey to do it.
3. open the highlights tab.
	 - I use the `Shift+Alt+H` hotkey to do it.
4. locate the highlight you just created (it usually is at the bottom), and add a comment to it.

![[How to Read an Article-5.mp4]]

> [!warning]- If the article has footnotes...
> The Sidebar Highlights (and most plugins) use footnotes to link your highlighted text to its comments; if the article *itself* has footnotes, this will corrupt the linking process.
> 
> You have 2 options,
> - you can either remove all footnotes from the article before reading.
> - or you can manually change the footnote index of the very 1st comment to maybe a `[^100]` instead of `[^1]`

---
# To Save a Reading Checkpoint
Choose a tag to denote what a checkpoint is.
- I personally use a `#left-off` tag.   

...
1. remove any previous checkpoint/s by replacing them with nothing using the `find and replace` tool.
2. add a `#left-off` tag where u stopped.
	- do not place it in a newline or add spaces before and after it (since removing it later won't also remove those ghost spaces)

![[How to Read an Article-6.mp4]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note | Type |
| --------- | ---- | ---- |

<!-- SerializedQuery END -->

---
# Sources
