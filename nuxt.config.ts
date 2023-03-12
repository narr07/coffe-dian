// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-headlessui',
    '@nuxtjs/fontaine',
  ],
  extends: [
    'nuxt-seo-kit'
  ],
  // content: {
  //   // https://content.nuxtjs.org/api/configuration
  // },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  }

})
