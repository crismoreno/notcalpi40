var path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
require("babel-polyfill");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/app.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "../../server/public/",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:5000/",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        exclude: /(node_modules)/, //excluded node_modules
        test: /\.js$/,
        use: "babel-loader",
			},
			{
        test: /\.css$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
        ],
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
			// },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/img/favicon/favicon-32x32.png",
      filename: "index.html",
      template: "index.html",
      inject: true,
    }),
    // new Dotenv({})
    // new webpack.DefinePlugin({
    // 	'process.env': {
    // 		'APIURL': JSON.stringify(process.env.APIURL)
    // 	}
    // })
	],
	// stats: {
  //   warningsFilter: [/Failed to parse source map/],
  // },
};
