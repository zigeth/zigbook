export default defineAppConfig({
  ui: {
    primary: 'emerald',
    gray: 'slate',
    fonts: {
      sans: 'Inter, "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    }
  },
  docus: {
    title: 'Zigbook',
    description:
      'Authoritative documentation for the Zig programming language Standard Library.',
    image: {
      src: '/og/zigbook-default.svg',
      alt: 'Zigbook documentation preview',
      width: 1200,
      height: 630
    },
    socials: {
      github: 'zigeth/zigbook',
    },
    header: {
      logo: {
        light: '/logo/light.svg',
        dark: '/logo/dark.svg'
      },
      showLinkIcon: true,
      fluid: true,
      actions: [
        {
          label: 'Open GitHub',
          icon: 'i-simple-icons-github',
          to: 'https://github.com/zigeth/zigbook',
          target: '_blank'
        }
      ]
    },
    footer: {
      credits: {
        icon: 'i-lucide-sparkles',
        text: 'Made with ❤️ by zigeth.'
      },
      textLinks: [
        {
          text: 'Contribute',
          to: '/contributing'
        },
        {
          text: 'Privacy',
          to: '/legal/privacy-policy'
        }
      ]
    },
    aside: {
      collapse: 'deep',
      level: 1,
      open: true
    },
    main: {
      fluid: true,
      padded: true
    },
    toc: {
      float: true,
      depth: 3
    },
    seo: {
      siteName: 'Zigbook',
      pageTitleTemplate: '%s · Zigbook Documentation'
    }
  }
})
