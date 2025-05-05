const { defineConfig } = require("cypress");
const { FacebookSocialLogin } = require("cypress-social-logins").plugins;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        FacebookSocialLogin,
      });
    },
  },
});

