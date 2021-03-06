const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const BrowserSync = require('browser-sync-webpack-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Copy = require('copy-webpack-plugin')
const Favicons = require('favicons-webpack-plugin')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 7700
const PROXY = `http://${HOST}:${PORT}`

console.log('webpack running')

const config = (env, argv) => ({
  entry: {
    app: __dirname + '/src/app.js',
    router: __dirname + '/src/router.js'
  },
  optimization: {
    runtimeChunk: false
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    host: HOST,
    port: PORT,
    contentBase: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riot-tag-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          argv.mode === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new BrowserSync(
      // BrowserSync options
      {
        host: HOST,
        port: PORT,
        proxy: PROXY
      }
    ),
    new VueLoaderPlugin(),
    new ErrorOverlayPlugin(),
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
})

module.exports = config
