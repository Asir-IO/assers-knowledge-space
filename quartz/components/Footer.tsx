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
        <div style={{ marginBottom: "1rem", lineHeight: "1.5", opacity: 0.8, textAlign: "center" }}>
          <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>
            Created by Asser © {new Date().getFullYear()}
          </p>
          <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: "1.2" }}>
            (You may share content here anywhere, just kindly don't claim it as your own)
          </p>
        </div>
        {/* links row */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "1rem",
            fontSize: "20px",
          }}
        >
          <a
            href="https://discord.com/users/1091021223623925931"
            title="My Discord"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <i class="fa-brands fa-discord"></i>
          </a>
          <a
            href="https://m.me/asser.ahmed.1614/"
            title="My Facebook"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <i class="fa-brands fa-facebook-messenger"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/asser-ahmed-386329320"
            title="My LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Asir-IO"
            title="My GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <span style="transform: translateY(-0.4rem);">...</span>
          <a
            href="/attributions"
            title="Attributions & Credits"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <i class="fa-solid fa-circle-info"></i>
          </a>
        </div>
        <p
          style={{
            lineHeight: "1.5",
            opacity: 0.8,
            margin: "0 0 5px 0",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Created with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>

        {/* --- svg switch based on theme --- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
document.addEventListener("nav", () => {
  // 1. Select both imgs (by src) and objects (by data)
  const excalidrawElements = document.querySelectorAll('img[src$=".excalidraw.svg"], object[data$=".excalidraw.svg"]');

  excalidrawElements.forEach(el => {
    // Skip if already wrapped or marked as failed
    if (el.parentElement?.classList.contains('svg-theme-wrapper') || el.classList.contains('no-dark-variant')) return;

    // 2. Check the tag name to read/write the correct attribute
    const isImg = el.tagName.toLowerCase() === 'img';
    const sourceAttr = isImg ? 'src' : 'data';
    
    // 3. Extract the original URL and generate the dark URL
    const originalUrl = el[sourceAttr];
    const darkUrl = originalUrl.replace('.excalidraw.svg', '.excalidraw.dark.svg');
    
    // Create the dark variant clone
    const darkEl = el.cloneNode(true);
    darkEl[sourceAttr] = darkUrl;
    darkEl.classList.add('dark-mode-svg');
    el.classList.add('has-dark-variant');

    // Create the Grid Wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'svg-theme-wrapper';

    // Insert wrapper and append both elements
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
    wrapper.appendChild(darkEl);

    // 4. Handle 404s cleanly using a hidden Image tester
    const tester = new Image();
    tester.onerror = () => {
      // If dark fails to load, simply remove the broken dark variant.
      // We keep the wrapper and the original light element intact.
      el.classList.remove('has-dark-variant');
      el.classList.add('no-dark-variant');
      darkEl.remove(); 
    };
    tester.src = darkUrl; // Triggers the background network request
  });
});
`,
          }}
        />
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
