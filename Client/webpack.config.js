module.exports = {
  entry: "./src/app.js",
  output: {
    path: "./src",
    filename: "index.js"
  },
  devServer: {
    proxy: {
      "/albums": "http://localhost:7820",
      "/albums/*": "http://localhost:7820"
    }
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
