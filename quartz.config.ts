import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Asser's Knowledge Space",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "Asir-IO.github.io/Assers-Knowledge-Space",
    ignorePatterns: ["private", "templates", ".obsidian", "z2-Meta", "**/*.excalidraw.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f3f9f4",      // Your Background (Minty White)
          lightgray: "#e5e5e5",  // PRESERVED DEFAULT (Grey background for code/blocks)
          gray: "#a0b2ce",       // Your Secondary (Blue-ish Grey -> Graph lines & borders)
          darkgray: "#0b140d",   // Your Text (Body text)
          dark: "#0b140d",       // Your Text (Headers)
          secondary: "#4d955b",  // Your Primary (Green -> Links & Titles)
          tertiary: "#8789c1",   // Your Accent (Purple -> Hover states)
          highlight: "rgba(103, 176, 117, 0.15)", // Your Primary with transparency
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",      // PRESERVED DEFAULT (Dark Mode Background)
          lightgray: "#393639",  // PRESERVED DEFAULT (Dark Mode block background)
          gray: "#646464",       // PRESERVED DEFAULT (Dark Mode borders)
          darkgray: "#d4d4d4",   // PRESERVED DEFAULT (Dark Mode text)
          dark: "#ebebec",       // PRESERVED DEFAULT (Dark Mode headers)
          secondary: "#67b075",  // Your Primary applied to Dark Mode links
          tertiary: "#8789c1",   // Your Accent applied to Dark Mode hovers
          highlight: "rgba(103, 176, 117, 0.15)", // Your Primary with transparency
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
