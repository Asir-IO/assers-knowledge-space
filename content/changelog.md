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
### Example
(renders as)
> [!two-column]
> > [!left]
> > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis libero leo. Nunc lobortis enim vel metus auctor dictum. Fusce convallis mi non nunc tristique pulvinar.
> 
> > [!right]
> > > [!with-desc]
> > > 
> > > ![[lab-temp-thumb.excalidraw.svg|150]]
> > >
> > > > [!desc]
> > > > (an image)

(syntax)

```
> [!two-column]
> > [!left]
> > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis libero leo. Nunc lobortis enim vel metus auctor dictum. Fusce convallis mi non nunc tristique pulvinar.
> 
> > [!right]
> > > [!with-desc]
> > > 
> > > ![[lab-temp-thumb.excalidraw.svg|150]]
> > >
> > > > [!desc]
> > > > (an image)
```

---
# Adding Description text to a Block
I can now add a *description text* to any block (another text, an image, etc...).
### Example
(renders as)
> [!with-desc]
> ![[lab-temp-thumb.excalidraw.svg|150]]
> 
> > [!desc]
> > (some very lo---------------------------------------------------ng  description...)

(syntax)
```
> [!with-desc]
> ![[lab-temp-thumb.excalidraw.svg|150]]
> 
> > [!desc]
> > (some very lo---------------------------------------------------ng  description...)
```
