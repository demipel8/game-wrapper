/**
 * Created by demi on 11/7/15.
 */
var path = require('path');

module.exports = function(config) {
  config.set({
    // ... normal karma configuration
    frameworks: ['mocha', 'chai'],
    files: [
      {pattern: 'demo/assets/*', watched: false, included: false, served: true, nocache: false},
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'spec.bundle.js'
    ],

    preprocessors: {
      'spec.bundle.js': ['webpack']
    },

    reporters: ['mocha',/* 'coverage'*/],

    coverageReporter: {
      type: 'text'
    },

    webpack: {
      module: {
        preloaders: [
          {
            test: /\.js/,
            exclude: [
              path.resolve('src/modules/'),
              path.resolve('node_modules/')
            ],
            loader: 'babel-loader'
          },
          {
            test: /\.js$/,
            include: path.resolve('src/modules/'),
            loader: 'isparta'
          }
        ],
        loaders: [ {
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }, {
          test: /\.json/,
          loader: 'json-loader'
        } ]
      },
      watch: true
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-chai"),
      require("karma-coverage"),
      require("karma-phantomjs-launcher"),
      require("karma-spec-reporter"),
      require("karma-mocha-reporter")
    ],

    browsers: [ 'Chrome','PhantomJS' ],

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }

  });
};
