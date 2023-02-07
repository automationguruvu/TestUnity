const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    QA:'https://demo.guru99.com/insurance/v1/index.php'
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
