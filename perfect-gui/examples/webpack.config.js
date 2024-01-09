/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
	mode: 'development',
	entry: {
		main: './src/index.js', 
		fullpage: './src/fullpage.js',
	},
	output: {
		path: path.resolve(__dirname, '../public'),
		filename: './[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(jpe?g|gif|svg|png|mp3|mp4|woff|woff2|eot|ttf|otf|obj|json)$/,
				type: 'asset/resource'
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
				]
			},
		]
    },
    devServer: {
		port: 8000
    },
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			minify: false,
			filename: './index.html',
			template: './src/index.html',
			chunks: ['main']
		}),
		new HtmlWebpackPlugin({
			hash: true,
			minify: false,
			filename: './fullpage.html',
			template: './src/fullpage.html',
			chunks: ['fullpage']
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
	
};

module.exports = config;