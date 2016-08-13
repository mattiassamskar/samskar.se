module.exports = {
  entry: "./src/app.js",
  output: {
    path: "./src",
    filename: "index.js"
  },
  devServer: {
    proxy: {
      "/albums": {
        target: "http://www.samskar.se",
        changeOrigin: true
      },
      "/albums/*": {
        target: "http://www.samskar.se",
        changeOrigin: true
      }
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
