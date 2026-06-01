import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import lightboxStyle from "./styles/lightbox.scss"

const Lightbox: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`lightbox ${displayClass ?? ""}`} id="lightbox-modal">
      <div class="lightbox-content">
        <img id="lightbox-image" src="" alt="" />
      </div>
    </div>
  )
}

Lightbox.afterDOMLoaded = `
document.addEventListener("nav", () => {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-image");
  const images = document.querySelectorAll("article.popover-hint img, .svg-theme-wrapper img, img.thumb");

  if (!modal || !modalImg) return;

  images.forEach(img => {
    img.style.cursor = "zoom-in";
    
    img.addEventListener("click", (e) => {
      e.preventDefault(); // Stops the browser from following the link normally
      
      // Look for a parent link to get the original/fresh file URL
      const parentLink = img.closest("a");
      const targetSource = parentLink ? parentLink.href : img.src;

      // Set the fresh source and show modal
      modalImg.src = targetSource;
      modalImg.alt = "";
      modal.classList.add("active");
    });
  });

  // Close the modal and clear the image source when clicking the overlay
  modal.addEventListener("click", () => {
    modal.classList.remove("active");
    setTimeout(() => { modalImg.src = ""; }, 300); // Clear src after fade-out
  });
});
`

Lightbox.css = lightboxStyle

export default (() => Lightbox) satisfies QuartzComponentConstructor