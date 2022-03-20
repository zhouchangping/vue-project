"use strict";
const path = require("path");
// const utils = require("./utils");
const config = require("../config");
// const vueLoaderConfig = require("./vue-loader.conf");
//const HappyPack = require('happypack') // 通过多进程模型，来加速代码构建
function resolve (dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath: process.env.NODE_ENV === "production" ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  externals: { // index.html cdn方式引入
    jquery: "window.$"
  },
  module: {
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      /* config.module.rule('js') */
      {
        // 它会应用到普通的 `.js` 文件
        // 以及 `.vue` 文件中的 `<script>` 块
        test: /\.js$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.join(__dirname, "../src")
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      // /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: "url-loader",
            options: {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "assets/media/[name].[hash:8].[ext]"
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: "url-loader",
            options: {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "assets/fonts/[name].[hash:8].[ext]"
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: "url-loader",
            options: {
              limit: 30720, // 30kb
              esModule: false,
              fallback: {
                loader: "file-loader", // 超过了limit就使用
                options: {
                  name: "assets/images/[name].[hash:8].[ext]"
                }
              }
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".json"], // 减少文件查找
    alias: {
      "@": resolve("src"),
      // "vue$": "vue/dist/vue.esm.js", // 减少编译时代码30kb
      //"Common": resolve("../src/common/"), // 根据当前目录配置，其他地方直接引用 common,代表src下common目录
    }
  }
};
