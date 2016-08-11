module.exports = {
  entry: "./src/app.js",
  output: {
    path: "./build",
    filename: "index.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};
