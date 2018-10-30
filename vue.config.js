const Copy = require('copy-webpack-plugin')
const Favicons = require('favicons-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  runtimeCompiler: true,
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
  pages: {
    index: {
      // entry for the page
      entry: './src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    components: {
      entry: './src/components.js',
      template: 'public/components.html',
      filename: 'components.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'components']
    }
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  productionSourceMap: true
}
