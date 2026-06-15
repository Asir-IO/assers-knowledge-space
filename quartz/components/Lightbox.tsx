import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import lightboxStyle from "./styles/lightbox.scss"

const Lightbox: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`lightbox ${displayClass ?? ""}`} id="lightbox-modal">
      <div class="lightbox-content" id="lightbox-content-container"></div>
    </div>
  )
}

Lightbox.afterDOMLoaded = `
document.addEventListener("nav", () => {
  const modal = document.getElementById("lightbox-modal");
  const modalContent = document.getElementById("lightbox-content-container");
  if (!modal || !modalContent) return;

  const createZoomButton = () => {
    const btn = document.createElement("button");
    btn.className = "zoom-overlay-btn";
    btn.title = "View Fullscreen";
    btn.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="zoomIcon">
<rect x="10" y="6" width="1" height="7"/>
<path d="M7 9H14V10H7V9Z"/>
<rect x="15" y="3" width="2" height="2"/>
<path d="M15 16V18H6V16H15Z"/>
<path d="M15 1V3H6V1H15Z"/>
<rect x="4" y="3" width="2" height="2"/>
<path d="M4 14H2V5H4V14Z"/>
<path d="M19 14H17V5H19V14Z"/>
<rect x="4" y="14" width="2" height="2"/>
<rect x="15" y="14" width="2" height="2"/>
<rect x="17" y="16" width="2" height="2"/>
<rect x="19" y="18" width="2" height="2"/>
<rect x="21" y="20" width="2" height="2"/>
</svg>\`;
    return btn;
  };

  const svgWrappers = document.querySelectorAll(".svg-theme-wrapper");
  svgWrappers.forEach(wrapper => {
    if (wrapper.querySelector('.zoom-overlay-btn')) return; 

    wrapper.querySelectorAll('object, img').forEach(el => el.style.cursor = 'auto');

    const btn = createZoomButton();
    wrapper.appendChild(btn);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const isDark = document.documentElement.getAttribute("saved-theme") === "dark";
      const darkEl = wrapper.querySelector(".dark-mode-svg");
      const lightEl = wrapper.querySelector(":not(.dark-mode-svg)");
      
      const activeEl = (isDark && darkEl) ? darkEl : lightEl;
      if (!activeEl) return;

      const targetSource = activeEl.getAttribute('data') || activeEl.getAttribute('src');
      if (targetSource) openLightbox(targetSource, true);
    });
  });

  const standardImages = document.querySelectorAll("article.popover-hint img, img.thumb");
  standardImages.forEach(img => {
    if (img.id === "lightbox-media") return;
    if (img.closest('.svg-theme-wrapper') || img.closest('.lightbox-media-wrapper')) return;

    img.style.cursor = "auto";

    const wrapper = document.createElement('div');
    wrapper.className = 'lightbox-media-wrapper';
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    const btn = createZoomButton();
    wrapper.appendChild(btn);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const parentLink = img.closest("a");
      const targetSource = parentLink ? parentLink.href : (img.src || img.getAttribute('src'));
      
      const isSvg = targetSource && targetSource.split('?')[0].toLowerCase().endsWith('.svg');
      
      if (targetSource) openLightbox(targetSource, isSvg);
    });
  });

  function openLightbox(source, isObject) {
    modalContent.innerHTML = ""; 
    
    if (isObject) {
      const obj = document.createElement("object");
      obj.data = source;
      obj.type = "image/svg+xml";
      obj.id = "lightbox-media";
      obj.style.cssText = "max-width: 100%; color-scheme: light;";
      modalContent.appendChild(obj);
    } else {
      const img = document.createElement("img");
      img.src = source;
      img.id = "lightbox-media";
      modalContent.appendChild(img);
    }
    
    modal.classList.add("active");
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target === modalContent) {
      modal.classList.remove("active");
      setTimeout(() => { modalContent.innerHTML = ""; }, 300); 
    }
  });
});
`

Lightbox.css = lightboxStyle
export default (() => Lightbox) satisfies QuartzComponentConstructor
