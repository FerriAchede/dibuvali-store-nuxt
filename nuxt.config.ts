// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap' },
      ]
    }
  },

  runtimeConfig: {
    apiSecretKey: '',
    public: {
      baseUrl: '',
      apiBaseUrl: '',
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt'
  ],

  icon: {
    collections: [
      'mingcute',
    ],
  }
})