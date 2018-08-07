const path = require("path")
module.exports = {
  components: "packages/**/src/components/*.vue",
  styleguideDir: "./dist/docs/vue/",
  showUsage: true,
  title: "BlackTie Components",
  navigation: true,
  skipComponentsWithoutExample: true,
  serverPort: 6069,
  theme: {
    maxWidth: "80%",
    sidebarWidth: 350,
    color: {
      link: "#FFF",
      linkHover: "rgb(70, 69, 171)",
      sidebarBackground: "#333333",
      errorBackground: "#e22d44",
      name: "#FFF"
    }
  },
  styles: {
    Logo: {
      logo: {
        color: "#fff",
        fontSize: 20
      }
    }
  }
};
