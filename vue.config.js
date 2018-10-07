const Copy = require('copy-webpack-plugin')
const Favicons = require('favicons-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  runtimeCompiler: false,
  transpileDependencies: ['blacktie-buttons-v2/src/components/*.vue'],
  css: {
    sourceMap: false,
    extract: false
  },

  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    plugins: [
      new Copy([
        {
          from: __dirname + '/src/images/',
          to: __dirname + '/dist/images'
        }
      ]),
      new Copy([
        {
          from: __dirname + '/eleventy/content/',
          to: __dirname + '/dist/content'
        }
      ]),
      new Copy([
        {
          from: __dirname + '/guide',
          to: __dirname + '/dist/guide'
        }
      ]),
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: process.env.NODE_ENV === 'production'
      }),
      new Favicons({
        logo: './src/images/blk-logo.png'
      })
    ]
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  },
  productionSourceMap: false
}
