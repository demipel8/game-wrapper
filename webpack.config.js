var path = require('path');

module.exports = {
    entry: {
        app: ['./src/js/app.js']
    },
    output: {
        path: require('path').resolve('build'),
        publicPath: '/',
        filename: 'bundle.js'
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
