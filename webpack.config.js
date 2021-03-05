const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode : 'development',
	entry : {
		index : './srcs/index.tsx',
	},

	output : {
		filename : '[name].bundle.js',
		path : path.join(__dirname, '/build'),
		publicPath : '/'
		
	},
	resolve : {
		extensions : ['.js','.ts', '.tsx']
	},

	module : {
		rules : [
			{
				test : /\.js/,
				exclude : /node_modules/,
				use : "babel-loader"
			},
			{
				test : /\.tsx?$/,
				exclude : /node_modules/,
				use : [
					{
						loader : 'babel-loader'
					},
					{
						loader : 'ts-loader'
					}
				]
			},
			{
				test : /\.(png|jpg)$/i,
				use : {
					loader : "url-loader",	
				},
			}
		]
	},

	devServer : {
		historyApiFallback : true,
		contentBase : path.join(__dirname, 'dist'),
		port : 3000,
	},

	plugins : [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template : './srcs/index.html'
		})
	]
}