const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/factr.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
    }]
  },
  devtool: 'source-map'
};