const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + '/app/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: 'css-loader'
      })
    }]
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: "/",
    host: 'localhost',
    port: 3000,
    clientLogLevel: "none",
    historyApiFallback: true,
    compress: true,
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
}
