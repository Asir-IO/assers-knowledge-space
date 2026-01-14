import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>

        {/* 1. Your Custom Section (Top) */}
        <div style={{ marginBottom: "1rem", lineHeight: "1.5", opacity: 0.8 }}>
          <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>
            Created by Asser © {new Date().getFullYear()}
          </p>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            (You may share content here with anyone, just kindly don't claim it as your own)
          </p>
        </div>
        <p>
          Created with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>

      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
