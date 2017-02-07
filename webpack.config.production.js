/* tslint:disable */
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    bundle: [
      path.join(__dirname, "src", "index.tsx")
    ]
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "app", "assets"),
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".css"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: [
          "ts"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          "style",
          "css"
        ],
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
};

