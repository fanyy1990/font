const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const extractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "example/src/index.html"),
  filename: "./index.html",
});

const base = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "cheap-module-source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".js", ".jsx", ".json"],
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: extractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
            {
              loader: "less-loader",
            },
          ],
          fallback: "style-loader",
        }),
        // use: [
        //   "style-loader",
        //   {
        //     loader: "css-loader",
        //     options: {
        //       modules: true,
        //       localIdentName: "[name]__[local]--[hash:base64:5]",
        //     },
        //   },
        //   "less-loader",
        // ],
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   type: "asset",
      //   generator: {
      //     filename: "static/img/[name].[hash:7].[ext]",
      //   },
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 10 * 1024,
      //     },
      //   },
      // },
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   type: "asset",
      //   generator: {
      //     filename: "static/fonts/[name].[hash:7].[ext]",
      //   },
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 10 * 1024,
      //     },
      //   },
      // },
    ],
  },
  optimization: {
    minimize: true, // 开启代码压缩
  },
  externals: {},
};

let tempConfig = {};

if (process.env.NODE_ENV === "production") {
  tempConfig = {
    ...base,
    entry: path.join(__dirname, "src/index.js"),
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      library: "pds_component",
      libraryTarget: "umd",
    },
    devtool: "none",
    externals: {
      react: "react",
      "react-dom": "react-dom",
    },
    plugins: [
      new CleanWebpackPlugin(), // 编译之前清空 /dist
      new extractTextPlugin("css/index.css"),
    ],
  };
} else {
  tempConfig = {
    ...base,
    entry: path.join(__dirname, "example/src/index.js"),
    output: {
      path: path.join(__dirname, "example/dist"),
      filename: "bundle.js",
      library: "pds_component",
      libraryTarget: "umd",
    },
    plugins: [htmlWebpackPlugin, new extractTextPlugin("css/index.css")],
    devServer: {
      port: 8008,
    },
  };
}

module.exports = tempConfig;
