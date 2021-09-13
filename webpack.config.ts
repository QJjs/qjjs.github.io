import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackDevServer from 'webpack-dev-server'

const config: webpack.Configuration & { devServer?: WebpackDevServer.Configuration } = {
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript"
						]
					}
				}
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|heic)$/i,
				type: "asset/resource"
			}
		]
	},
	resolve: {
		extensions: [ ".tsx", ".ts", ".js" ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		})
	],
	devtool: "inline-source-map",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	devServer: {
		port: 3000,
		static: {
			directory: path.join(__dirname, "build")
		},
		open: false,
		compress: false
	},
	mode: "production",
	performance: {
		hints: false
	}
}

export default config