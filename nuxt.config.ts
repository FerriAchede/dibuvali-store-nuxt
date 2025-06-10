// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Dibu Vali Store',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { name: 'description', content: 'Tienda online de arte original' },
      ],
      link: [
        // { rel: 'icon', type: 'image/png', href: '/favicon.png' },
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