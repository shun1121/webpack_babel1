const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ESlintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/app.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/, /\.js$/, /\.jsx$/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript"
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    // new ESlintPlugin({
    //   extensions: ["ts", "tsx", "js"],
    // })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  }
}