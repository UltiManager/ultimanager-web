const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const path = require("path");
const webpack = require("webpack");

const DIST_DIR = path.resolve(__dirname, "dist");
const SOURCE_DIR = path.resolve(__dirname, "src");

dotenv.config();

module.exports = {
  entry: path.resolve(SOURCE_DIR, "index.tsx"),
  output: {
    chunkFilename: "[name].bundle.js",
    filename: "[name].bundle.js",
    path: DIST_DIR,
    publicPath: "/"
  },
  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true
  },
  devtool: "eval",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      links: [
        "https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap"
      ]
    }),
    new webpack.EnvironmentPlugin(["ULTIMANAGER_API_ROOT"])
  ]
};
