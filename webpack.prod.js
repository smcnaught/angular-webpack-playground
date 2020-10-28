const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack')

const environmentRegex = /environment\.ts/;

module.exports = merge(common, {
  mode: "production",
  devtool: false, 
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      environmentRegex,
      'environment.prod.ts'
    )
  ]
})