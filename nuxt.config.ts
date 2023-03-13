// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      titleTemplate: '%pageTitle %titleSeparator %siteName'
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://example.com',
      siteName: 'Indonesian Coffee',
      siteDescription: 'Indonesian Coffee is a website to tell about all coffee in Indonesia.',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    }
  },
     modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-headlessui',
    '@twicpics/components/nuxt3',
    // '@nuxtjs/fontaine',
  ],
  extends: [
    'nuxt-seo-kit'
  ],
  // content: {
  //   // https://content.nuxtjs.org/api/configuration
  // },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  twicpics: {
    domain: 'https://permazix.twic.pics',
    anticipation: 0.5,
    step: 50,
  },
  image: {
    twicpics: {
      baseURL: 'https://permazix.twic.pics/'
      // Feel free to use our demo domain to try the following examples.
      // baseUrl: 'https://demo.twic.pics/'
    }
  }

})
