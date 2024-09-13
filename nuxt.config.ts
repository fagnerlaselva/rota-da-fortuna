// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
    'nuxt-og-image',
    'nuxt-link-checker'
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', 'sitemap.xml'],
    },
  },
  site: {
    url: 'https://www.rotadafortuna.com.br/',
  },
  sitemap: {
    sources: ['/api/sitemap'],
  },
})