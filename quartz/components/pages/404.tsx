import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
      <script dangerouslySetInnerHTML={{
        __html: `
        const path = window.location.pathname;
        const lowerPath = path.toLowerCase();
        
        // If the current path has uppercase letters, redirect to the lowercase version
        if (path !== lowerPath) {
          window.location.replace(lowerPath + window.location.hash);
        }
      `}} />
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
