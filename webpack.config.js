const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const path = require("path");
const webpack = require("webpack");

const DIST_DIR = path.resolve(__dirname, "dist");
const PUBLIC_DIR = path.resolve(__dirname, "public");
const SOURCE_DIR = path.resolve(__dirname, "src");

dotenv.config();

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.resolve(SOURCE_DIR, "index.tsx"),
  output: {
    chunkFilename: devMode
      ? "[name].chunk.js"
      : "[name].[contenthash].chunk.js",
    filename: devMode ? "[name].bundle.js" : "[name].[contenthash].bundle.js",
    path: DIST_DIR,
    publicPath: "/"
  },
  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    host: "0.0.0.0"
  },
  devtool: devMode ? "inline-source-map" : false,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  mode: process.env.NODE_ENV || "development",
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
      template: path.resolve(PUBLIC_DIR, "index.html")
    }),
    new webpack.EnvironmentPlugin(["ULTIMANAGER_API_ROOT"])
  ]
};
