const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		'app': './src/main.jit.ts'
	},
	output: {
		path: helpers.root('dist'),
		publicPath: 'http://localhost:1111/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: [
					{
						loader: 'awesome-typescript-loader',
						options: { configFileName: helpers.root('src', 'tsconfig.jit.json') }
					},
					'angular2-template-loader'
					,'angular-router-loader'
				]
			}
		]
	},
	plugins: [
		// Workaround for angular/angular#11580
		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)@angular/,
			helpers.root('./src'), // location of your src
			{} // a map of your routes
		),
		new ExtractTextPlugin('[name].css')
	]
});
