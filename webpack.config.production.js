'use strict'

const config = require('./webpack.config')
const webpack = require('webpack')
const assign = require('lodash/assign')

module.exports = assign(config, {
  devtool: undefined,
  plugins: config.plugins.concat([
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ])
})
