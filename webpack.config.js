var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: './src/index.js',
	output: {
	  path: path.join(__dirname, 'dist'),
	  filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
	  rules: [
		{
		  test: /\.js$/,
		  loader: 'babel-loader',
		  exclude: /node_modules/,
		  options: {
			presets: ['@babel/preset-env', '@babel/preset-react'],
			plugins: [
			  '@babel/plugin-proposal-class-properties'
			]
		  }
		},
		{
		  test: /\.css$/,
		  use: ['style-loader', 'css-loader'],
		  exclude: /node_modules/
		}
	  ]
	},
	}