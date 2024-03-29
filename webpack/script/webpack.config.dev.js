process.env.NODE_ENV = 'development';

const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  devtool: '#source-map'
});