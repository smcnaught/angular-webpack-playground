const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'app': "src/main.ts",
    'polyfills': './src/polyfills.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "./dist/",
    filename: "[name].bundle.[contenthash].js"
  },
  // mode: "development",
  // devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [],
  module:{
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: {
            // https://github.com/DanielRuf/html-minifier-terser#options-quick-reference
            caseSensitive: true
          }
        }
      },
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      }
    ],
  }
}