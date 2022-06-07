export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gulapa Law',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },

      // <!-- Open Graph / Facebook -->
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Gulapa Law' },
      {
        property: 'og:description',
        content:
          'Gulapa Law has extensive and significant experience in various legal fields. Its practice area includes general corporate, mergers and acquisitions (M&A), projects and infrastructure (such as Public-Private Partnership projects), banking and finance, real estate and construction, technology, media and telecommunications (TMT), antitrust and competition, intellectual property, and dispute resolution.',
      },
      {
        property: 'og:image',
        content: 'https://glaw.netlify.app/gulapalaw-meta.jpg',
      },

      // <!-- Open Graph / Twitter -->
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Gulapa Law' },
      {
        property: 'twitter:description',
        content:
          'Gulapa Law has extensive and significant experience in various legal fields. Its practice area includes general corporate, mergers and acquisitions (M&A), projects and infrastructure (such as Public-Private Partnership projects), banking and finance, real estate and construction, technology, media and telecommunications (TMT), antitrust and competition, intellectual property, and dispute resolution.',
      },
      {
        property: 'twitter:image',
        content: 'https://glaw.netlify.app/gulapalaw-meta.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/exy3hvb.css' },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/ff17b19e18.js',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/twitter.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/icons'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
  ],

  image: {
    presets: {
      lawyers: {
        modifiers: {
          format: 'webp',
          quality: '60',
        },
      },
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Generate Property for Fallback on Netlify: https://nuxtjs.org/deployments/netlify/
  generate: {
    fallback: true,
  },
}
