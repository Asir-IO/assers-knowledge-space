import { QuartzConfig } from "./quartz/cfg"
import { CustomIcons } from "./quartz/plugins/transformers/customicons"
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
    baseUrl: "asserknowledgespace.vercel.app/", //asir-io.github.io/assers-knowledge-space
    ignorePatterns: ["private", "templates", ".obsidian", "z2-Meta", "**/*.excalidraw.md", "./export"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Patrick Hand",
        body: "Bricolage Grotesque",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fafafa",      
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#0b140d",   // Body text
          dark: "#0b140d",       // Headers
          secondary: "hsl(131, 18%, 48%)",
          tertiary: "hsl(238, 12%, 50%)",   // links and selected text
          highlight: "rgba(103, 176, 117, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1e1e1e",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "hsl(132, 20%, 55%)",
          tertiary: "hsl(238, 20%, 64%)",
          highlight: "rgba(103, 176, 117, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      CustomIcons(),
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
