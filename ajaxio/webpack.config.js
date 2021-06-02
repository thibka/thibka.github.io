/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

let config = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: './bundle.js'
	},
	watch: false,
	module: {
		rules: [
			{
				test: /\.(jpe?g|gif|mp3|mp4|woff|woff2|eot|ttf|otf|obj)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(svg|png)$/i,
				use: [
				  'file-loader',
				  {
					loader: 'image-webpack-loader',
					options: {
					  bypassOnDebug: true,
					},
				  },
				],
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
			},
			{
				type: 'javascript/auto',
				test: /\.json$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},
			{
					test: /\.m?js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
			}
		]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
		watchContentBase: true,
		port: 8000
    },
	plugins: [
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename: './home.html',
			template: './src/home.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: './page2.html',
			template: './src/page2.html',
			inject: false
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new CopyWebpackPlugin([
			{from: 'src/.htaccess'}
		])
	],
	
};

module.exports = config;