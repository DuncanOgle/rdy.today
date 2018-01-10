const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const javascript = {
  test: /\.(js)$/,
  exclude: /node_modules|dist/,
  use: [{
    loader: 'babel-loader',
  }],
};

const postcss = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins() {
      return [autoprefixer({ browsers: 'last 3 versions' })];
    },
  },
};

const styles = {
  test: /\.(css)$/,
  exclude: /node_modules|dist/,

  use: ExtractTextPlugin.extract(['css-loader?sourceMap&importLoader=1&modules&localIdentName=[local]__[hash:base64:5]', postcss, 'sass-loader?sourceMap']),
};

const config = {
  entry: {
    App: './src/index.js',
    vendor: './src/vendor.js',
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [javascript, styles],
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
  ],
};

process.noDeprecation = true;

module.exports = config;
