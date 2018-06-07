const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path")
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
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
						minimize: true
					}
				}]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /\.s?[ac]ss$/,
				use: [
				  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
				  'css-loader',
				  'postcss-loader',
				  'sass-loader',
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
			filename: "app.css"
		})
	]
};
