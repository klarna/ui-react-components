'use strict'
var path = require('path')
var devServerPort = 3808
var devServerHostname = '127.0.0.1'

var config = {
  output: {
    filename: 'test.build.js',
    path: 'tests/',
    publicPath: 'http://' + devServerHostname + ':' + devServerPort + '/tests'
  },
  resolve: {
    fallback: [path.join(__dirname, 'node_modules')],
    extensions: ['', '.js', '.jsx', '.es6'],
    root: path.join(__dirname)
  },
  resolveLoader: {
    fallback: [path.join(__dirname, 'node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.(jsx|es6)$/,
        exclude: [
          path.resolve('components/'),
          path.resolve('docs/'),
          path.resolve('example/'),
          path.resolve('lib/'),
          path.resolve('propTypes/'),
          path.resolve('node_modules/')
        ],
        loader: 'babel'
      },
      {
        test: /\.(jsx|es6)$/,
        exclude: [
          path.resolve('tests/'),
          path.resolve('node_modules/')
        ],
        loader: 'babel-istanbul'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules,localIdentName=[local]',
          'sass'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|eot|woff|ttf|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'null'
      }
    ]
  },
  devServer: {
    host: devServerHostname,
    port: devServerPort
  }
}

module.exports = config
