const path = require("path")
module.exports = {
  components: "packages/**/src/components/*.vue",
  styleguideDir: "./dist/guide/",
  usageMode: 'expand',
  title: "BlackTie Components",
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  serverPort: 6069,
  theme: {
    maxWidth: "80%",
    sidebarWidth: 350,
    color: {
      link: "#79838A",
      linkHover: "rgb(70, 69, 171)",
      sidebarBackground: "#FFFFFF",
      border: "#51677A",
      errorBackground: "#e22d44",
      name: "#2B3338"
    }
  },
  require: [
    './src/javascripts/polyfill.min.js'
  ],
  styles: {
    Logo: {
      logo: {
        color: "#2B3338",
        fontSize: 20
      }
    }
  }
};
