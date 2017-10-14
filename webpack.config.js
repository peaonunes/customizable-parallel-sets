const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',

  resolve: {
    root: 'src',
    extensions: [ '', '.js', '.jsx' ],
  },

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map',
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: [ 'es2015' ] },
      },
      {
        test: /.scss$/,
        loaders: [ 'style', 'css', 'postcss', 'sass' ],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      d3: 'd3',
    }),
  ],

  externals:[{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  }],

  postcss () {
    return [autoprefixer];
  },
};