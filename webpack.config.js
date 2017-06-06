const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: "eval-source-map",
  entry: __dirname + '/app/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/js')
  },

  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // },

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
    publicPath: "/js/",
    host: 'localhost',
    port: 3000,
    clientLogLevel: "none",
    historyApiFallback: true,
    clientLogLevel: "none",
    compress: true,
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
};
