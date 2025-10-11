import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: ['docus'],
  compatibilityDate: '2024-09-30',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    'nuxt-og-image',
    'nuxt-llms'
  ],
  postcss: {
    plugins: {
  'postcss-import': {},
  'autoprefixer': {}
    }
  },
  content: {
    documentDriven: true,
    navigation: {
      fields: ['navigation', 'category', 'tags', 'badge', 'githubPath']
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  css: ['@/assets/css/tailwind.css'],
  future: {
    compatibilityVersion: 4
  },
  experimental: {
    payloadExtraction: true
  },
  googleFonts: {
    families: {
      'Inter Tight': [400, 500, 600, 700],
      Inter: [400, 500, 600, 700],
      'JetBrains Mono': [400, 600]
    },
    display: 'swap',
    download: true,
    preload: true
  },
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: true,
    viewer: false
  },
  runtimeConfig: {
    site: {
      title: 'Zigbook',
      tagline: 'Comprehensive documentation for the Zig Standard Library',
    },
    ai: {
      openaiApiKey: process.env.NUXT_OPENAI_API_KEY
    },
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://zigbook.net',
      docSearchAppId: process.env.NUXT_PUBLIC_DOCSEARCH_APP_ID || '',
      docSearchApiKey: process.env.NUXT_PUBLIC_DOCSEARCH_API_KEY || '',
      docSearchIndexName: process.env.NUXT_PUBLIC_DOCSEARCH_INDEX_NAME || '',
      llm: {
        enabled: process.env.NUXT_PUBLIC_LLM_ENABLED !== 'false',
        defaultModel: process.env.NUXT_PUBLIC_LLM_DEFAULT_MODEL || 'gpt-4o-mini'
      }
    }
  },
  sitemap: {
    inferStaticPagesAsRoutes: true,
    autoLastmod: true,
    xslColumns: ['loc', 'lastmod']
  },
  robots: {
    sitemap: [
      `${process.env.NUXT_PUBLIC_SITE_URL || 'https://zigbook.net'}/sitemap.xml`
    ],
    rules: [{ userAgent: '*', allow: '/' }]
  },
  schemaOrg: {
    canonicalHost: process.env.NUXT_PUBLIC_SITE_URL || 'https://zigbook.net'
  },
  ogImage: {
    defaults: {
      fonts: ['Inter Tight:700']
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  llms: {
    domain: process.env.NUXT_PUBLIC_SITE_URL || 'https://zigbook.net',
    title: 'Zigbook Documentation',
    description:
      'Authoritative references for the Zig standard library.',
    sections: [
      {
        title: 'Getting Started',
        description: 'Install Zigbook locally, learn the docs tooling, and browse the documentation portal.',
        links: [
          {
            title: 'Introduction',
            description: 'Understand the goals of Zigbook and how the documentation is organized.',
            href: '/getting-started/introduction'
          },
          {
            title: 'Installation',
            description: 'Set up the Docus-powered docs experience in your local environment.',
            href: '/getting-started/installation'
          },
          {
            title: 'Project structure',
            description: 'Explore the repository layout and conventions used across the docs.',
            href: '/getting-started/project-structure'
          }
        ]
      },
      {
        title: 'Zig Standard Library Reference',
        description: 'Detailed documentation for the Zig 0.15.1 standard library, organized by domain.',
        links: [
          {
            title: 'Collections',
            description: 'Array lists, hash maps, priority queues, and common data structures.',
            href: '/docs/std/collections'
          },
          {
            title: 'Core Systems',
            description: 'Low-level concurrency, memory utilities, and metaprogramming helpers.',
            href: '/docs/std/systems'
          },
          {
            title: 'Crypto & Hashing',
            description: 'Keccak, SHA, and other cryptographic utilities in the standard library.',
            href: '/docs/std/crypto'
          }
        ]
      },
    ],
    notes: [
      'Documentation is sourced directly from the Zig 0.15.1 standard library Markdown references stored in the repository.',
      'Guides cover practical use cases and patterns for using Zig in real-world applications.',
    ]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'alternate icon', href: '/favicon.ico' }]
    }
  }
})
