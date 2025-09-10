import tailwindcss from "@tailwindcss/vite"
import { definePerson } from "nuxt-schema-org/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
const IS_DEV = import.meta.dev

export default defineNuxtConfig({
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },

  css: ["./app/assets/css/main.css"],

  compatibilityDate: "2025-07-31",

  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        rehypePlugins: {
          "rehype-external-links": {
            target: "_blank",
            rel: "noopener noreferer",
          },
        },
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: "github-light",
            // Theme used if `html.dark`
            dark: "github-dark",
            // Theme used if `html.sepia`
            sepia: "monokai",
          },
        },
        toc: {
          depth: 2,
          searchDepth: 2,
        },
      },
    },
    preview: {
      dev: IS_DEV,
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: "tayyab-tahir.js.org",
        owner: "tayyab-tahir",
        url: "https://github.com/tayyabtahir71/tayyab-tahir.js.org",
      },
    },
  },

  debug: false,

  devtools: { enabled: IS_DEV },

  experimental: {
    typedPages: true,
    buildCache: true,
    headNext: true,
    lazyHydration: true,
    viewTransition: true,
  },

  eslint: {},

  // fonts: {},

  icon: {
    clientBundle: {
      scan: true,
    },
  },

  // image: {},

  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/ui",
    // "@nuxt/image",
    // "@nuxtjs/mdc",
    "@nuxtjs/seo",
    // "nuxt-feedme",
    "@nuxt/content",
    "nuxt-mcp",
    "@nuxt/eslint",
  ],

  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: true,
    },
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },

  routeRules: {
    "/**": {
      static: true,
      prerender: true,
    },
    "/blog/**": {
      static: true,
      prerender: true,
    },
  },

  site: {
    indexable: true,
    url: "https://tayyab-tahir.js.org",
    name: "Tayyab Tahir - Full Stack Engineer",
    description:
      "Senior Software Engineer specializing in modern web technologies. Crafting scalable web applications and browser extensions for startups and founders.",
    defaultLocale: "en",
    enabled: true,
  },

  ssr: true,

  typescript: {
    strict: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  schemaOrg: {
    identity: definePerson({
      // Basic Information, if applicable
      name: "Tayyab Tahir",
      givenName: "Tayyab",
      familyName: "Tahir",
      additionalName: "tayyab-tahir", // middle name or other additional names
      alternateName: "Tayyab Tahir",

      // Profile Information, if applicable
      image: "/tayyab-tahir.png",
      description:
        "Senior Software Engineer specializing in modern web technologies. Crafting scalable web applications and browser extensions for startups and founders.",
      jobTitle:
        "Senior Software Engineer | Full-Stack Developer | DevOps Enthusiast",

      // Contact & Social, if applicable
      email: "tayyabtahir71@gmail.com",
      url: "https://tayyab-tahir.js.org",
      sameAs: [
        "https://twitter.com/tayyabtahir71",
        "https://github.com/tayyabtahir71",
        "https://linkedin.com/in/tayyabtahir-nextay",
      ],

      // Professional Details, if applicable
      worksFor: {
        "@type": "Organization",
        name: "Paragon Square Inc.",
        url: "https://paragonsquare.ai",
      },
    }),
  },
})
