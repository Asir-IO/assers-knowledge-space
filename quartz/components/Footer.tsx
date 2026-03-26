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

      {/* --- DYNAMIC THEME SCRIPT (EXISTENCE CHECKER) --- */}
        <script dangerouslySetInnerHTML={{ __html: `
          if (!window.hasInitializedThemeSwap) {
            window.hasInitializedThemeSwap = true;

            const swapSvgToTheme = () => {
              const theme = document.documentElement.getAttribute('saved-theme')
              const isDark = theme === 'dark'
              
              // Target ONLY .excalidraw.svg files
              // (Selector matches anything ending in .svg, we filter inside)
              document.querySelectorAll('img[src$=".svg"]').forEach(img => {
                const src = img.getAttribute('src')
                if (!src || !src.includes('.excalidraw')) return

                // 1. Establish the "Base" (Light) Source
                // If we are already dark, we need to calculate what the light version was
                let lightSrc = img.getAttribute('data-light-src')
                if (!lightSrc) {
                   // Assume current src is light, unless it's already dark
                   lightSrc = src.includes('.dark.svg') 
                     ? src.replace('.dark.svg', '.svg') 
                     : src
                   img.setAttribute('data-light-src', lightSrc)
                }

                if (isDark) {
                  // === SWITCH TO DARK (IF EXISTS) ===
                  const darkSrc = lightSrc.replace('.excalidraw.svg', '.excalidraw.dark.svg')
                  
                  // Optimization: If already swapped, do nothing
                  if (img.src.includes(darkSrc)) return;

                  // PROBE: Try to load the dark image in memory first
                  const tester = new Image()
                  tester.onload = () => {
                    // Success! The file exists. Perform the swap.
                    img.setAttribute('src', darkSrc)
                  }
                  tester.onerror = () => {
                    // Failed (404). File doesn't exist.
                    // Ensure we stick to (or revert to) the light version
                    img.setAttribute('src', lightSrc)
                  }
                  tester.src = darkSrc
                  
                } else {
                  // === SWITCH TO LIGHT ===
                  // Always safe to revert to light
                  if (img.src !== lightSrc) {
                    img.setAttribute('src', lightSrc)
                  }
                }
              })
            }

            // Listeners
            document.addEventListener('nav', swapSvgToTheme)
            
            // Observer (Debounced)
            let timeout;
            const observer = new MutationObserver(() => {
              clearTimeout(timeout);
              timeout = setTimeout(swapSvgToTheme, 20);
            })
            observer.observe(document.documentElement, { attributes: true, attributeFilter: ['saved-theme'] })
            
            // Initial Run
            swapSvgToTheme()
          }

          <!-- --- AUTOPLAY VIDEO ON SCROLL SCRIPT --- -->
          const observerOptions = {
            root: null,
            threshold: 0.5 // 0.5 means 50% of the video must be visible
          };

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.play();
              } else {
                entry.target.pause();
              }
            });
          }, observerOptions);

          // Target all videos with our special class
          document.querySelectorAll('.autoplay-on-scroll').forEach((video) => {
            observer.observe(video);
          });
        `}} />
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
