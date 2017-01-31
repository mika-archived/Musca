/* tslint:disable */
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    bundle: [
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      path.join(__dirname, "src", "index.tsx")
    ]
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "app"),
    publicPath: "/assets/"
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: [
          "react-hot-loader/webpack",
          "ts"
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
};

