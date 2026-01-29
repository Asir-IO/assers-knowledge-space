import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div style={{ marginBottom: "1rem", lineHeight: "1.5", opacity: 0.8 }}>
          <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>
            Created by Asser © {new Date().getFullYear()}
          </p>
          <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: "1.2"}}>
            (You may share content here with anyone, just kindly don't claim it as your own)
          </p>
        </div>
        <p>
          Created with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>

      {/* dynamic excalidraw theme toggle */}
        <script dangerouslySetInnerHTML={{ __html: `
          // Flag to prevent multiple observers running at once
          if (!window.hasInitializedThemeSwap) {
            window.hasInitializedThemeSwap = true;

            const swapSvgToTheme = () => {
              const theme = document.documentElement.getAttribute('saved-theme')
              const isDark = theme === 'dark'
              
              // Select all SVGs that end in .svg (and ignore already-processed .dark.svg ones)
              document.querySelectorAll('img[src$=".svg"]').forEach(img => {
                const src = img.getAttribute('src')
                if (!src) return

                // Check if this is already a dark version to avoid double-swapping
                const isAlreadyDark = src.includes('.dark.svg')

                if (isDark) {
                  // === SWITCH TO DARK ===
                  // Only swap if we are currently looking at the light version
                  if (!isAlreadyDark) {
                     img.setAttribute('data-light-src', src) // Save backup
                     // Robust Replace: Insert .dark before the last .svg
                     // "image.excalidraw.svg" -> "image.excalidraw.dark.svg"
                     img.setAttribute('src', src.replace(/\.svg$/, '.dark.svg'))
                  }
                } else {
                  // === SWITCH TO LIGHT ===
                  // Restore from backup if it exists
                  const lightSrc = img.getAttribute('data-light-src')
                  if (lightSrc) {
                     img.setAttribute('src', lightSrc)
                  } else if (isAlreadyDark) {
                     // Fallback: Strip .dark from the filename
                     img.setAttribute('src', src.replace('.dark.svg', '.svg'))
                  }
                }
              })
            }

            // 1. Run on Navigation (SPA support)
            document.addEventListener('nav', swapSvgToTheme)
            
            // 2. Observer for Theme Toggle (Instant switch)
            // We debounce slightly to prevent lag if attributes change rapidly
            let timeout;
            const observer = new MutationObserver(() => {
              clearTimeout(timeout);
              timeout = setTimeout(swapSvgToTheme, 10);
            })
            observer.observe(document.documentElement, { attributes: true, attributeFilter: ['saved-theme'] })
            
            // 3. Initial Run
            swapSvgToTheme()
          }
        `}} />
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
