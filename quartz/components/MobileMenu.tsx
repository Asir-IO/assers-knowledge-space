import { QuartzComponent, QuartzComponentProps } from "./types"
import { concatenateResources } from "../util/resources"
import { classNames } from "../util/lang"

// 1. Import your new stylesheet here
import style from "./styles/mobileMenu.scss"

export default ((ExplorerComponent: QuartzComponent, TocComponent: QuartzComponent) => {
  const MobileMenu: QuartzComponent = (props: QuartzComponentProps) => {
    return (
      <div class={classNames(props.displayClass, "mobile-menu-wrapper")}>
        <button 
          class="mobile-menu-btn" 
          id="mobile-menu-toggle" 
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        
        <div class="mobile-menu-content" id="mobile-menu-dropdown">
          <div class="menu-half">
            <ExplorerComponent {...props} />
          </div>
          <hr class="mobile-menu-divider" />
          <div class="menu-half">
            <TocComponent {...props} />
          </div>
        </div>
      </div>
    )
  }

  // 2. Assign the imported style here
  MobileMenu.css = concatenateResources(
    style, 
    ExplorerComponent.css,
    TocComponent.css
  )

  const customScript = `
    document.addEventListener("nav", () => {
      const toggleBtn = document.getElementById('mobile-menu-toggle');
      const dropdown = document.getElementById('mobile-menu-dropdown');
      
      if (toggleBtn && dropdown) {
        const toggleMenu = (e) => {
          e.stopPropagation();
          dropdown.classList.toggle('open');
          document.body.classList.toggle('lock-scroll', dropdown.classList.contains('open'));
        };

        const closeMenu = (e) => {
          if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
            document.body.classList.remove('lock-scroll');
          }
        };

        toggleBtn.addEventListener('click', toggleMenu);
        document.addEventListener('click', closeMenu);

        window.addCleanup(() => {
          toggleBtn.removeEventListener('click', toggleMenu);
          document.removeEventListener('click', closeMenu);
          document.body.classList.remove('lock-scroll');
        });
      }
    });
  `;

  MobileMenu.afterDOMLoaded = concatenateResources(
    customScript,
    ExplorerComponent.afterDOMLoaded,
    TocComponent.afterDOMLoaded
  )

  return MobileMenu
}) satisfies (explorer: QuartzComponent, toc: QuartzComponent) => QuartzComponent