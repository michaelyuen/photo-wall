const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const AotPlugin = require('@ngtools/webpack').AotPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
	devtool: 'cheap-module-source-map',
	entry: {
		'app': './src/main.aot.ts'
	},
	output: {
		path: helpers.root('dist'),
		publicPath: '/',
		filename: '[name].[hash].js',
		chunkFilename: '[id].[hash].chunk.js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: ['@ngtools/webpack']
			}
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
			mangle: {
				keep_fnames: true
			}
		}),
		new ExtractTextPlugin('[name].[hash].css'),
		new OptimizeCssAssetsPlugin(),
		new CopyWebpackPlugin([
			{
				from: 'src/app/temp/app.config.json',
				to: 'src/app/temp'
			},
			{
				from: 'src/assets/icons/symbol-defs.svg',
				to: 'assets'
			},
			{
				from: 'src/assets/img/favicon.ico',
				to: 'assets/img'
			},
			{
				from: 'src/assets/img',
				to: 'src/assets/img'
			}
		]),
		new webpack.LoaderOptionsPlugin({
			htmlLoader: {
				minimize: false // workaround for ng2
			}
		}),
		new AotPlugin({
			tsConfigPath: './src/tsconfig.aot.json',
			entryModule: helpers.root('src/app/app.module#AppModule')
		})
	]
});
