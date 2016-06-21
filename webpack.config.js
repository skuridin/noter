'use strict'

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const src = path.join(__dirname, 'src')

module.exports = {
  context: src,
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-[hash:8].js'
  },
  plugins: [
    new ExtractTextPlugin('bundle-[contentHash:8].css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: src, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css') }
    ]
  }
}
