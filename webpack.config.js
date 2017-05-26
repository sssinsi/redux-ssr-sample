var webpack = require('webpack')

module.exports = {
  entry: {
    client: './src/client.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  }
}