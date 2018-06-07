const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path")

module.exports = {
	entry: {
		app: __dirname + "/src/app.js",
		components: __dirname + "/src/components/index.js",
		pages: __dirname + "/src/components/pages.js"
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
				test: /\.scss$/,
				use: [{
						loader: "micro-style-loader",
						options: {
							sourceMaps: true,
							inline: false
						}
					},
					{
						loader: "css-loader",
						options: {}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMaps: true
						}
					}
				]
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
