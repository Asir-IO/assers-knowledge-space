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
        <div class="thumb-and-meta-container">
          <img 
            src={resolveRelative(fileData.slug!, `z1-assets/${thumbnailSlug}` as FullSlug)}
            alt={title} 
            class="thumb" 
          />
          <div class="meta-container">
            <h1 class="article-title">{title}</h1>
            <Meta {...props} />
          </div>
        </div>
        <div class="tags-container">
          <Tags {...props} />
        </div>
      </header>
    )
  }

  NoteHeader.css = `
  .note-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    margin-top: 2rem;
    margin-bottom: 0;
  }

  .thumb {
    flex-shrink: 0;
    width: 100px;
    min-width: 100px;
    max-width: 100px;
    display: flex;
    margin: 0;
  }

  .meta-container {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    flex-grow: 1;
  }

  .meta-container .article-title {
  flex: initial;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  }

  .article-title .h1{
  flex: initial;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  margin: 0 0 0.5;
  }
  
  .content-meta {
    margin-bottom: 0;
}

  .thumb-and-meta-container {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .tags-container {
    
  }
  ` + (Meta.css ?? "") + (Tags.css ?? "")

  return NoteHeader
}) satisfies QuartzComponentConstructor