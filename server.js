/* tslint:disable */
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var childProcess = require("child_process");
var config = require("./webpack.config.dev.js");
var compiler = webpack(config);

const argv = require("minimist")(process.argv.slice(2));

var server = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,
  publicPath: config.output.publicPath,
  contentBase: "app/",
  stats: {
    colors: true,
    chunkModules: false
  }
});

server.listen(8080, "localhost", (serverError) => {
  if (serverError) {
    return console.error(serverError);
  }

  console.log("Listening on http://localhost:8080");
});

