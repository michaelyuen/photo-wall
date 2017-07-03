const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const environmentConfig = require('./environment.config')[process.env.NODE_ENV];

module.exports = {
	resolve: {
		extensions: ['.ts', '.js', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				// Global styles - exclude src/app
				test: /\.scss$/,
				exclude: helpers.root('src', 'app'),
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
			},
			{
				// Application styles - include src/app
				test: /\.scss$/,
				include: helpers.root('src', 'app'),
				loader: 'raw-loader!sass-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[hash].[ext]'
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app']
		}),

		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),

		new webpack.DefinePlugin(helpers.stringifyProperties(environmentConfig))
	],
	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
};
