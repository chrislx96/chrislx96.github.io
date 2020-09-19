const path = require("path");
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude : /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
};
