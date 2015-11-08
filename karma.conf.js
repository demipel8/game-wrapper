/**
 * Created by demi on 11/7/15.
 */
module.exports = function(config) {
  config.set({
    // ... normal karma configuration
    frameworks: ['mocha', 'chai'],
    files: [
      // all files ending in "_test"
      'spec/*_test.js',
      'spec/**/*_test.js'
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'spec/*.js': ['webpack'],
      'spec/**/*.js': ['webpack']
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'build/coverage/'
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
      module: {
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
      require("istanbul-instrumenter-loader"),
      require("karma-mocha"),
      require("karma-chai"),
      require("karma-coverage"),
      require("karma-phantomjs-launcher"),
      require("karma-spec-reporter")
    ],

    browser: [ 'PhantomJS' ]

  });
};
