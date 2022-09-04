import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxtjs/algolia'],
  algolia: {
    apiKey: 'MY_API_KEY',
    applicationId: 'MY_APPLICATION_ID',
  },
});
