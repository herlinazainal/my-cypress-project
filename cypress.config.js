const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },

  projectId: "ovxmta",
  screenshotOnRunFailure: true,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    reportDir: 'cypress/reports',
    reportPageTitle: 'My Portfolio Result',
    embeddedScreenshots: true,
  }
});
