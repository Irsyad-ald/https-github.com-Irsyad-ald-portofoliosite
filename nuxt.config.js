import { personalInfo } from './config/profile'

const siteTitle = `Portofolio ${(personalInfo && personalInfo.fullName) || 'Ahmad Irsyad Ald'}`
const siteDesc = `Portofolio resmi ${(personalInfo && personalInfo.fullName) || 'Ahmad Irsyad Ald'} (berbasis di ${(personalInfo && personalInfo.location) || 'Indonesia'}), Pengembang Web Kreatif. Berfokus pada pembangunan pengalaman digital yang bersih, interaktif, dan performa tinggi.`

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: siteTitle,
    htmlAttrs: {
      lang: 'id'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: siteDesc,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteTitle,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://hsmkrt1996.com/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: siteTitle,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://hsmkrt1996.com/images/ogp.webp',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        hid: 'apple-touch-icon',
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
    ],
    bodyAttrs: {
      oncontextmenu: 'return false'
    },
    script: process.env.GAID ? [
      {
        hid: 'GAsrc',
        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GAID}`
      },
      {
        hid: 'GAcode',
        innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.GAID}');`
      }
    ] : [],
    __dangerouslyDisableSanitizersByTagID: {
      'GAsrc': ['innerHTML'],
      'GAcode': ['innerHTML']
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/viewport.client.js',
    '~/plugins/backface-fixed.client.js',
    '~/plugins/config.client.js',
    '~/plugins/asscroll-and-gsap.client.js',
    '~/plugins/lenis.client.js',
    '~/plugins/constants.js',
    '~/plugins/check-device.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  // Build Modules
  buildModules: [],

  loading: false,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@nuxtjs/axios',
  ],

  styleResources: {
    scss: [
      '~/assets/scss/single.scss'
    ]
  },

  webfontloader: {
    google: {
      families: ['Six+Caps']
    }
  },

  env: {
    gaId: process.env.GAID,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        sassOptions: {
          quietDeps: true,
        },
      },
    },
    babel: {
      compact: true,
    },
    transpile: [
      'lenis',
    ],
    extend(config) {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader']
      })
    },
  },

  generate: {
    routes() {
      return [
        { route: 'works/asovision' },
        { route: 'works/basta' },
        { route: 'works/frontier' },
        { route: 'works/ketakuma' },
        { route: 'works/mtrust' },
        { route: 'works/redandgreen' },
        { route: 'works/yakudoh' },
      ]
    }
  }
}
