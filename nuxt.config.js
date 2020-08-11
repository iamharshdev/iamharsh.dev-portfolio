export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#000000' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hey, this is Harsh Vardhan Goswami. I am a full-stack web developer and a UI/UX aficionado. I love to design and develop websites/apps for human beings to make their life easier.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.jpg' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css',
      },
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js',
      },
      {
        src: 'https://unpkg.com/saxxtext@1.1.0/saxxtext.js',
      },
      {
        src: 'https://unpkg.com/luxy.js@0.1.0/dist/js/luxy.min.js',
      },
      {
        src: 'https://unpkg.com/wow.js@1.2.2/dist/wow.min.js',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['styles/style.css', 'styles/typo.css', 'styles/saxxtext.min.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-159928242-1',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  pwa: {
    manifest: {
      short_name: 'iamharsh.dev',
      name: 'Harsh Vardhan',
      start_url: '/',
      theme_color: '#000000',
      background_color: '#000000',
      description: 'Harsh Vardhan | Web dev & UI/UX aficionado',
    },
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
