import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { resolveRelative, FullSlug, slugifyFilePath } from "../util/path"

import ContentMeta from "./ContentMeta"
import TagList from "./TagList"

export default (() => {
  const Meta = ContentMeta()
  const Tags = TagList()

  const NoteHeader: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData, displayClass } = props
    const title = fileData.frontmatter?.title

    if (!title) {
      return null
    }

    const rawThumbnail = fileData.frontmatter?.thumbnail as string | undefined
    const cleanName = rawThumbnail ? rawThumbnail.replace(/[\[\]]/g, '').split('|')[0].trim() : null
    const thumbnailSlug = cleanName ? slugifyFilePath(cleanName as any) : "lab-temp-thumb.excalidraw.svg"

    return (
      <header class={classNames(displayClass, "note-header")}>
        {/* Left Column: Thumbnail */}
        <div class="note-thumbnail-container">
          <img 
            src={resolveRelative(fileData.slug!, `z1-assets/${thumbnailSlug}` as FullSlug)}
            alt={title} 
            class="note-thumbnail" 
          />
        </div>

        {/* Right Column: Text Block (Native styling preserved) */}
        <div class="note-header-info">
          <h1 class="article-title">{title}</h1>
          <Meta {...props} />
          <Tags {...props} />
        </div>
      </header>
    )
  }

  NoteHeader.css = `
  /* 
   1. WRAPPER: Takes over the native top/bottom margins so the 
      inner box height perfectly matches the text height. 
  */
  .note-header {
    position: relative;
    padding-left: calc(180px + 1.5rem); /* Make room for the absolute image */
    margin-top: 2rem;    /* Inherited from native .article-title */
    margin-bottom: 1rem; /* Inherited from native .tags */
  }

  /* 
   2. THUMBNAIL: Absolutely positioned so it NEVER affects the height.
      It stretches exactly from the top of the title to the bottom of the tags. 
  */
  .note-thumbnail-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0; 
    width: 180px; 
  }

  .note-thumbnail {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: 8px; 
  }

  /* 
   3. INNER TEXT BLOCK: Standard block layout.
  */
  .note-header-info {
    display: block; 
  }

  /* 
   4. MARGIN STRIPPING: Remove the outer margins from the native elements 
      since we moved them to the parent wrapper. 
  */
  .note-header-info .article-title {
    margin-top: 0 !important; 
  }

  .note-header-info .tags {
    margin-bottom: 0 !important;
  }

  /* 
   5. MOBILE FALLBACK: Stack them normally on small screens.
  */
  @media all and (max-width: 600px) {
    .note-header {
      padding-left: 0;
      display: flex;
      flex-direction: column;
    }
    .note-thumbnail-container {
      position: relative;
      width: 100%;
      height: 150px; 
      margin-bottom: 1rem;
    }
  }
  ` + (Meta.css ?? "") + (Tags.css ?? "")

  return NoteHeader
}) satisfies QuartzComponentConstructor