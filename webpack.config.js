const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")
const BrowserSync = require("browser-sync-webpack-plugin")
const OptimizeCss = require('optimize-css-assets-webpack-plugin')

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 7700;
const PROXY = `http://${HOST}:${PORT}`

const config = (env, argv) => ({

	entry: {
		app: __dirname + "/src/app.js",
		components: __dirname + "/src/components/index.js",
		pages: __dirname + "/src/components/pages.js"
	},
	optimization: {
		runtimeChunk: true
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js",
		chunkFilename: "[name].js"
	},
	devServer: {
		host: HOST,
		port: PORT,
		contentBase: __dirname + '/dist',
	  },
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {}
			},
			{
				test: /\.tag$/,
				exclude: /node_modules/,
				loader: "riot-tag-loader"
			},
			{
				test: /\.html$/,
				use: [{
					loader: "html-loader",
					options: {
						minimize: false
					}
				}]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /\.s?[ac]ss$/,
				use: [ argv.mode === 'production'  ? MiniCssExtractPlugin.loader : 'style-loader',
				  'css-loader',
				  'postcss-loader',
				  'sass-loader'
				],
			  }
		]
	},

	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
		new BrowserSync(
			// BrowserSync options
			{
			  host: HOST,
			  port: PORT,
			  proxy: PROXY,
			}
		  ),

	],

});

// if(argv.mode === 'production') {
// 	config.plugins.push(

// 		new OptimizeCSSAssetsPlugin({
// 			cssProcessor: require("cssnano"),
// 			canPrint: false,
// 			cssProcessorOptions: { discardComments: { removeAll: true } },
// 		  }),

// 	)
// }


module.exports = config ;
