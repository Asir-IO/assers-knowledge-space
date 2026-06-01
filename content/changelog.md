---
isNote: false
title: Changelog
---
I place here features and tools that I added to the codebase/obsidian/excalidraw to help me create more efficiently.   

I did this to remind myself *how* to use them.

---
# Custom Icons
Now I can insert fa or google icons quickly.
- inserting a solid fa icon
	- e.g., `\:fa-key:` => :fa-key:
- inserting a brand fa icon
	- e.g., `\:fab-discord:` => :fab-discord:
- inserting a google icon
	- e.g., `\:g-waves:` => :g-waves:

To type the syntax without it being converted, I can escape it with a `\`.   
	e.g., `\\:g-waves:` => `\:g-waves:`
### Related Files
- `quartz\styles\custom.scss`
- `quartz\plugins\transformers\customicons.ts`
- `quartz.config.ts`
### Could be added later
The ability to specify the size of an icon, instead of having it hardcoded.   
- e.g., `\:g-waves|20:` => renders as a size 20.
- **Technicalities**   
	20 of what exactly? (what is the unit)
---
# Timeline Rendering
Now I can use this obsidian [timeline callout syntax](https://forum.obsidian.md/t/css-snippet-timeline-as-callout/93652) on the website.
### Example
(*renders as*)
>[!timeline] The Tree
>## /////
>### /////
>...
>## /////
>### /////
>...

(*syntax*)
```
>[!timeline] The Tree
>## /////
>### /////
>...
>## /////
>### /////
>...
```
### Related Files
- `quartz\styles\custom.scss`
- `quartz\plugins\transformers\toc.ts` (to not render as headers in the TOC)
---
# SVG Switch based on Theme
Now light (`img.svg`) and dark (`img.dark.svg`) versions of a drawing can switch based on the current theme.
### How it Works
It initially renders both versions on top of one another, but only keeps one of them visible based on the correct theme.

The switching basically fades between the two.
### Related Files
- `quartz\styles\custom.scss`
- `quartz\components\Footer.tsx`
---
# Tab title does NOT need to match a Note's title
A note can have a tab title that's different from its title, simply by populating its `tabTitle` property.

---
# Multiple Ordered List Styles
An ordered list doesn't have to be indexed by decimal numbers only anymore; I made the [obsidian list style](https://github.com/erykwalder/obsidian-list-style) plugin work here.
### Example
(renders as)
1. {i} ...
2. ...
3. ...

(syntax)
```
1. {i} ...
2. ...
3. ...
```
### Related Files
- `quartz\styles\custom.scss`
- `quartz\plugins\transformers\liststyle.ts`

---
# 2-column blocks
I can now very quickly insert a 2-column block using *templater*, and as a callout.   
Also I can set the width portion of each column (left or right) by adding it as an alt to their respective callout.
### Example
(renders as)
> [!two-column]
> > [!left|7]
> > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis libero leo. Nunc lobortis enim vel metus auctor dictum. Fusce convallis mi non nunc tristique pulvinar.
> 
> > [!right|3]
> > > [!with-desc]
> > > 
> > > ![[lab-temp-thumb.excalidraw.svg|150]]
> > >
> > > > [!desc]
> > > > (a diagram)

(syntax)

```
> [!two-column]
> > [!left|7]
> > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis libero leo. Nunc lobortis enim vel metus auctor dictum. Fusce convallis mi non nunc tristique pulvinar.
> 
> > [!right|3]
> > > [!with-desc]
> > > 
> > > ![[lab-temp-thumb.excalidraw.svg|150]]
> > >
> > > > [!desc]
> > > > (an image)
```

... the left column has 7 portions, the right one has 3.   

> [!desc]
> (the default ones are 6 and 4, respectively)

---
# Adding Description text to a Block
I can now add a *description text* to any block (another text, an image, etc...).
### Example
(renders as)
> [!with-desc]
> ![[lab-temp-thumb.excalidraw.svg|150]]
> 
> > [!desc-scroll] 
> > (some very lo---------------------------------------------------ng  description...)

(syntax)
```
> [!with-desc]
> ![[lab-temp-thumb.excalidraw.svg|150]]
> 
> > [!desc-scroll]
> > (some very lo---------------------------------------------------ng  description...)
```

---
# Sizing Images by Height
I can now embed an image by defining its height rather than its width. If the resulting width exceeds the page boundaries, the image will automatically become horizontally scrollable.

This is done by adding an alt (to the embed) formatted as `h-[size]`.
## Why it is Useful
By default, embedded images are constrained by the page's width. The image's height adjusts automatically to maintain the aspect ratio.

While this works for most images, <u>extremely wide images</u> shrink their height so much that their content becomes unreadable:

> [!with-desc]
> 
> ![[Meta-Heuristic Search 2026-06-01 14.36.25.excalidraw.svg]]
> > [!desc]
> > 
> > (an example of a wide image)

**The Solution?** Set the height instead of the width and make it as big as u want.   

Now I have no control over the width,   
**What if it exceeds the page width?** Make overflowing width scrollable.

![[Meta-Heuristic Search 2026-06-01 14.36.25.excalidraw.svg|h-150px]]

> [!desc] 
> (this image has a larger height and the overflowing width is scrollable)
## Example
(renders as)
![[Meta-Heuristic Search 2026-06-01 14.36.25.excalidraw.svg|h-150px]]

(syntax)
```
![[Meta-Heuristic Search 2026-06-01 14.36.25.excalidraw.svg|h-150px]]
```
