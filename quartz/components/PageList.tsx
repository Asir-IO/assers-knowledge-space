import { FullSlug, isFolderPath, resolveRelative, slugifyFilePath } from "../util/path"
import { getTagRoute } from "./tagMap"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { QuartzComponent, QuartzComponentProps } from "./types"
import { GlobalConfiguration } from "../cfg"

export type SortFn = (f1: QuartzPluginData, f2: QuartzPluginData) => number

export function byDateAndAlphabetical(cfg: GlobalConfiguration): SortFn {
  return (f1, f2) => {
    // Sort by date/alphabetical
    if (f1.dates && f2.dates) {
      // sort descending
      return getDate(cfg, f2)!.getTime() - getDate(cfg, f1)!.getTime()
    } else if (f1.dates && !f2.dates) {
      // prioritize files with dates
      return -1
    } else if (!f1.dates && f2.dates) {
      return 1
    }

    // otherwise, sort lexographically by title
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}

export function byDateAndAlphabeticalFolderFirst(cfg: GlobalConfiguration): SortFn {
  return (f1, f2) => {
    // Sort folders first
    const f1IsFolder = isFolderPath(f1.slug ?? "")
    const f2IsFolder = isFolderPath(f2.slug ?? "")
    if (f1IsFolder && !f2IsFolder) return -1
    if (!f1IsFolder && f2IsFolder) return 1

    // If both are folders or both are files, sort by date/alphabetical
    if (f1.dates && f2.dates) {
      // sort descending
      return getDate(cfg, f2)!.getTime() - getDate(cfg, f1)!.getTime()
    } else if (f1.dates && !f2.dates) {
      // prioritize files with dates
      return -1
    } else if (!f1.dates && f2.dates) {
      return 1
    }

    // otherwise, sort lexographically by title
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}

type Props = {
  limit?: number
  sort?: SortFn
} & QuartzComponentProps

export const PageList: QuartzComponent = ({ cfg, fileData, allFiles, limit, sort }: Props) => {
  const sorter = sort ?? byDateAndAlphabeticalFolderFirst(cfg)
  let list = allFiles.sort(sorter)
  if (limit) {
    list = list.slice(0, limit)
  }

  return (
    <ul class="section-ul">
      {list.map((page) => {
        const title = page.frontmatter?.title
        const tags = page.frontmatter?.tags ?? []

        // add the thumbnail
        const rawThumbnail = page.frontmatter?.thumbnail as string | undefined
        const cleanName = rawThumbnail
          ? rawThumbnail
              .replace(/[\[\]]/g, "")
              .split("|")[0]
              .trim()
          : null

        const thumbnailSlug = cleanName
          ? slugifyFilePath(cleanName as any)
          : "lab-temp-thumb.excalidraw.svg"
        return (
          <li class="section-li">
            <div class="section">
              <p class="meta">
                {page.dates && <Date date={getDate(cfg, page)!} locale={cfg.locale} />}
              </p>
              <img
                src={resolveRelative(fileData.slug!, `z1-assets/${thumbnailSlug}` as FullSlug)}
                alt={title}
                class="note-thumbnail"
              />
              <h3>
                <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                  {title}
                </a>
              </h3>
              <ul class="tags">
                {tags.map((tag) => {
                  return (
                    <li>
                      <a
                        class="internal tag-link"
                        href={resolveRelative(fileData.slug!, getTagRoute(tag) as FullSlug)}
                      >
                        {tag}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

PageList.css = `
.section {
  border-radius: 8px;
  display: flex !important;
  flex-direction: row;
  align-items: center; 
  gap: 1rem; 
  width: 100%;
}

.section > .meta {
  margin: 0;
  flex: 0 0 15%;
}

.section > img,
.section > .svg-theme-wrapper {
  flex-shrink: 0 !important;
  width: 100px !important;
}
.section > .svg-theme-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  display: block;
}

.section > h3 {
  margin: 0;
  flex: 1 1 50%;
  hyphens: auto;
  word-break: break-word;
}

.section > .tags {
  margin: 0;
  flex: 0 0 25%;
}
`
