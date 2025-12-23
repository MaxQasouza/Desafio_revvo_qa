const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://sandbox.moodledemo.net',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    retries : 3,
    env: {
      allure: true,
      allureReuseAfterSpec: true,
    },
  },
})


