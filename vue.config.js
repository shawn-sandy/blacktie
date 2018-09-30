const Copy = require('copy-webpack-plugin')
const Favicons = require('favicons-webpack-plugin')
module.exports = {
  runtimeCompiler: true,

  css: {
    sourceMap: true
  },

  lintOnSave: true,
  configureWebpack: {
    plugins: [
      new Copy([
        {
          from: __dirname + '/src/images/',
          to: __dirname + '/dist/images'
        }
      ]),
      new Favicons({
        logo: './src/images/blk-logo.png'
      })
    ]
  }
}
