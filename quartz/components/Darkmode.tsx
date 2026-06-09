// @ts-ignore
import darkmodeScript from "./scripts/darkmode.inline"
import styles from "./styles/darkmode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const Darkmode: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "darkmode")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        class="dayIcon"
        x="0px"
        y="0px"
        viewBox="0 0 20 20"
        style="enable-background:new 0 0 20 20"
        xmlSpace="preserve"
        aria-label={i18n(cfg.locale).components.themeToggle.darkMode}
      >
        <title>{i18n(cfg.locale).components.themeToggle.darkMode}</title>
        <rect x="9" width="2" height="3" fill="black" />
        <rect x="7" y="5" width="6" height="2" fill="black" />
        <rect x="5" y="7" width="2" height="6" fill="black" />
        <rect x="13" y="7" width="2" height="6" fill="black" />
        <rect x="7" y="13" width="6" height="2" fill="black" />
        <rect x="9" y="17" width="2" height="3" fill="black" />
        <path d="M0 9H3V11H0V9Z" fill="black" />
        <rect x="17" y="9" width="3" height="2" fill="black" />
        <rect x="15" y="3" width="2" height="2" fill="black" />
        <rect x="3" y="3" width="2" height="2" fill="black" />
        <rect x="15" y="15" width="2" height="2" fill="black" />
        <rect x="3" y="15" width="2" height="2" fill="black" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        class="nightIcon"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        style="enable-background:new 0 0 24 24"
        xmlSpace="preserve"
        aria-label={i18n(cfg.locale).components.themeToggle.lightMode}
      >
        <title>{i18n(cfg.locale).components.themeToggle.lightMode}</title>
        <path d="M18 22H8v-2h10v2ZM8 20H6v-2h2v2Zm12 0h-2v-2h2v2ZM6 18H4v-2h2v2Zm16 0h-2v-4h-2v-2h2v-2h2v8ZM4 16H2V6h2v10Zm14 0h-6v-2h6v2Zm-6-2h-2v-2h2v2Zm-2-2H8V6h2v6ZM6 6H4V4h2v2Zm8-2h-2v2h-2V4H6V2h8v2Z" />
      </svg>
    </button>
  )
}

Darkmode.beforeDOMLoaded = darkmodeScript
Darkmode.css = styles

export default (() => Darkmode) satisfies QuartzComponentConstructor
