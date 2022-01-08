import {Configuration, HotModuleReplacementPlugin} from 'webpack';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import ESLintPlugin from 'eslint-webpack-plugin';
// import {CleanWebpackPlugin} from 'clean-webpack-plugin';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config: Configuration = {
	// mode: "development",
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: "[name].[contenthash].js",
		filename: 'index.bundle.js',
		publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|)$/i,
				// use:["file-loader"],
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
			{
				test: /\.(ttf|woff|woff2|truetype)$/,
				use: {
					loader: 'file-loader',
					options: {
						esModule: false,
						name: `fonts/[name].[ext]`,
						publicPath: '../',
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new HotModuleReplacementPlugin(),
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
		new ESLintPlugin({
			extensions: ['js', 'jsx', 'ts', 'tsx'],
		}),
		// new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
	],

	devtool: 'inline-source-map',
	devServer: {
		static: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		port: 4040,
		open: true,
		hot: true,
	},
};

export default config;
