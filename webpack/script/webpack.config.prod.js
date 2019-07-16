process.env.NODE_ENV = 'production';

const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: process.env.NODE_ENV,
  // plugins: [
  //   new UglifyJsPlugin()
  // ]
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  }
});
