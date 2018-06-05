'use strict'

const path = require('path')

module.exports = {
  devtool: 'none',
  mode:'none',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['env']
        }
      }
    ]
  },
  node: false
}
