const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './'),
  },
  resolve: {
    alias: {
      root: path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './src'),
    },
  },
};
