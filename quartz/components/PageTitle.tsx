import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  const titleParts = title.split(" ")
  const firstWord = titleParts[0]
  const restOfTitle = titleParts.slice(1).join(" ")

  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <div class="title-stack">
          <span class="title-first">{firstWord}</span>
          <span class="title-rest">{restOfTitle}</span>
        </div>
      </a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  font-family: var(--titleFont);
}

.page-title a {
  text-decoration: none;
}

.title-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.1;
  margin-right: 1rem;
}

.title-first {
  font-weight: 700;
  font-size: 2.75rem;
}

.title-rest {
color: var(--darkgray);
font-size: 1.25rem;
  opacity: 0.8;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor