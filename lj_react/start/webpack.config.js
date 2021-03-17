const DotEnv = require('dotenv-webpack');

module.exports = {
	entry: [
		'./src/index.js'
	],
	plugins: [
		new DotEnv()
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		port: 3000,
		historyApiFallback: true
	}
}