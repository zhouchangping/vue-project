// "use strict";

// const path = require("path");
// const merge = require("webpack-merge");
// const baseWebpackConfig = require("./webpack.base.conf");
// const nodeExternals = require("webpack-node-externals");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

// module.exports = merge(baseWebpackConfig, {
//   target: "node",
//   devtool: false,
//   entry: {
//     app: resolve("../src/entry-skeleton.js")
//   },
//   output: Object.assign({}, baseWebpackConfig.output, {
//     libraryTarget: "commonjs2"
//   }),
//   externals: nodeExternals({
//     whitelist: /\.css$/
//   }),
//   plugins: []
// });

"use strict";
const path = require("path");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const nodeExternals = require("webpack-node-externals");
const utils = require("./utils");
const config = require("../config");
const isProduction = process.env.NODE_ENV === "production";
const sourceMapEnabled = isProduction ?
  config.build.productionSourceMap :
  config.dev.cssSourceMap;

function resolve(dir) {
  return path.join(__dirname, dir);
}

let skeletonWebpackConfig = merge(baseWebpackConfig, {
  target: "node",
  devtool: false,
  entry: {
    app: resolve("../src/entry-skeleton.js")
  },
  output: Object.assign({}, baseWebpackConfig.output, {
    libraryTarget: "commonjs2"
  }),
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: []
});
console.log(skeletonWebpackConfig.module.rules[0]);
// important: enable extract-text-webpack-plugin
skeletonWebpackConfig.module.rules[0].options.loaders = utils.cssLoaders({
  sourceMap: sourceMapEnabled,
  extract: true
}),

// console.log( utils.cssLoaders({
//   sourceMap: sourceMapEnabled,
//   extract: true
// }));
module.exports = skeletonWebpackConfig;


// console.log(skeletonWebpackConfig.module.rules[0]);
// {
//   test: /\.vue$/,
//   loader: 'vue-loader',
//   options: {
//     loaders: {
//       css: [Array],
//       postcss: [Array],
//       less: [Array],
//       sass: [Array],
//       scss: [Array],
//       stylus: [Array],
//       styl: [Array]
//     },
//     cssSourceMap: false,
//     cacheBusting: true,
//     transformToRequire: {
//       video: [Array],
//       source: 'src',
//       img: 'src',
//       image: 'xlink:href'
//     }
//   }
// }
