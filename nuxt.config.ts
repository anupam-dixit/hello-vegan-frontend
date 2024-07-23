// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import fs from 'fs'
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      endpoint: process.env.ENDPOINT
    }
  },
  app:{

  },
  routeRules: {
    // Homepage pre-rendered at build time
    '/panel*': {ssr: false},
  },
  modules: ["nuxt-quasar-ui",],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
    }
  }
})