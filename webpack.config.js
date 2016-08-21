var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/audio-player.component.js',
  output: {path: './dist/', filename: 'audio-player.component.js'},
  module: {
    loaders: [
      {test: /.(js|jsx)$/,loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015']}},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.html$/, loader: 'html-loader'},
    ]
  },
};
