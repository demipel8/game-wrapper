var path = require('path');
var pkg = require('./package.json');

module.exports = {
    entry: {
        app: ['./src/app.js']
    },
    output: {
        path: require('path').resolve('build'),
        publicPath: '/',
        filename: 'gw.js'
    },
    node: {
      fs: 'empty'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
          {
            test: /\.json$/,
            include: path.join(__dirname, 'node_modules', 'pixi.js'),
            loader: 'json'
          }
        ]
    },
    plugins: []
};
