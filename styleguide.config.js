const path = require('path')
module.exports = {
  components: 'packages/**/src/components/*.vue',
  styleguideDir: './guide/',
  usageMode: 'expand',
  exampleMode: 'expand',
  title: 'BlackTie Components',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  serverPort: 6069,
  highlightTheme: 'oceanic-next',
  editorConfig: {
    type: 'object',
    process: (value, config) => {
      const defaults = {
        theme: 'twilight',
        mode: 'jsx',
        lineWrapping: true,
        smartIndent: false,
        matchBrackets: true,
        viewportMargin: Infinity,
        lineNumbers: true
      }
      return Object.assign(
        {},
        defaults,
        config.highlightTheme && {
          theme: config.highlightTheme
        },
        value
      )
    }
  },
  theme: {
    maxWidth: '80%',
    sidebarWidth: 350,
    color: {
      link: '#79838A',
      linkHover: 'rgb(70, 69, 171)',
      sidebarBackground: '#FFFFFF',
      border: '#D2D3D7',
      errorBackground: '#e22d44',
      name: '#2B3338'
    }
  },
  require: [path.resolve('./src/javascripts/polyfill.min.js')],
  styles: {
    Logo: {
      logo: {
        color: '#2B3338',
        fontSize: 20
      }
    }
  }
}
