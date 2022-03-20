"use strict";
const path = require("path");
const utils = require("./utils");
const webpack = require("webpack");
const config = require("../config");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // 复制文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 它会将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。因此，你的样式将不再内嵌到 JS bundle 中，而是会放到一个单独的 CSS 文件（即 styles.css）当中。
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩 去除重复css
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // 压缩js uglify-webpack-plugin提供了压缩ES6代码的功能：
//const WorkboxPlugin = require('workbox-webpack-plugin');
//const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin') 将manifest打包如index.htmls
const HappyPack = require("happypack");
const env = require("../config/prod.env");
//const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
process.env.NODE_ENV == "production";

const VueLoaderPlugin = require("vue-loader/lib/plugin");


const firstPlugin = require("../plugins/webpack-firstPlugin");

//const minimist = require("minimist"); // 分析参数
//var args = minimist(process.argv.slice(2));
// console.log(args.param1);
// console.log(args.param2);
//console.log(args); // { _: [ 'test' ], param1: 'param1', param2: 'param1' }

// const SkeletonWebpackPlugin = require("vue-skeleton-webpack-plugin");
// const OmmitCSSPlugin = require("./ommit-css-webpack-plugin");

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ // 引入css-loaders
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath("js/[name].[chunkhash].js"),
    chunkFilename: utils.assetsPath("js/[id].[chunkhash].js")
  },
  plugins: [
    new firstPlugin(),
    new VueLoaderPlugin(),
    new HappyPack({
      id: "babel",
      loaders: ["babel-loader?cacheDirectory"]
    }),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      "process.env": env
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true // //启动并行压缩
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath("css/[name].[contenthash].css"),
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped. 去除重复css,压缩
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap ? {
        safe: true,
        map: {
          inline: false
        }
      } : {
          safe: true
        }
    }),
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(), // 不管再添加任何新的本地依赖，对于每次构建，vendor hash 都应该保持一致
    // enable scope hoisting 启用scope hosting
    new webpack.optimize.ModuleConcatenationPlugin(), // 从版本4开始，CommonsChunkPlugin被删除，转而使用optimization.splitChunks和optimization.runtimeChunk选项。
    // split vendor js into its own file    CommonsChunkPlugin是一个可选的用于建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。
    new webpack.optimize.CommonsChunkPlugin({ // 提取第三方插件 生成vendor
      name: "vendor",
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor,提取用到的node_MOdules
        return ( // 未找到值则为-1
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, "../node_modules")
          ) === 0
        );
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    // new webpack.optimize.CommonsChunkPlugin({ // 提取manifest
    //   name: 'manifests',
    //   minChunks: Infinity // 无穷
    // }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk // 提取共享块到独立部分
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: "haha", //
      async: "vendor-async",
      children: true,
      minChunks: 3 // 公用部分
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime", // 将 webpack 自身的运行时代码放在 runtime 模块,,https://segmentfault.com/q/1010000014954264
      minChunks: Infinity // 无穷,没有应用模块，只有运行逻辑模块
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true, // 删除html注释
        collapseWhitespace: true, // 删除空白
        removeAttributeQuotes: true // 删除注释
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: "dependency",
      // inlineSource: 'runtime~.+\\.js',
    }),
    //new InlineSourcePlugin(), // index.htm内嵌runtime.js

    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, "../static"),
      to: config.build.assetsSubDirectory,
      ignore: [".*"]
    }]),

    // inject skeleton content(DOM & CSS) into HTML
    // new SkeletonWebpackPlugin({
    //   webpackConfig: require("./webpack.skeleton.conf"),
    //   quiet: true,
    //   minimize: true,
    //   router: {
    //     mode: "hash",
    //     routes: [
    //       {
    //         path: "/jsMainPage",
    //         skeletonId: "skeleton1"
    //       },
    //       {
    //         path: "/vueJsDemo",
    //         skeletonId: "skeleton2"
    //       },
    //     ]
    //   }
    // }),
    // new OmmitCSSPlugin(),

    // new ParallelUglifyPlugin({
    //   uglifyJS: {
    //     //...这里放uglifyJS的参数
    //   },
    //   //...其他ParallelUglifyPlugin的参数，设置cacheDir可以开启缓存，加快构建速度
    // })
    // new WorkboxPlugin.GenerateSW({ // pwa
    //   // 这些选项帮助快速启用 ServiceWorkers
    //   // 不允许遗留任何“旧的” ServiceWorkers
    //   clientsClaim: true,
    //   skipWaiting: true
    // }),
    // new InlineManifestWebpackPlugin() // 内嵌manifest到index.html
  ]
});
if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require("compression-webpack-plugin");
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: new RegExp(
        "\\.(" +
        config.build.productionGzipExtensions.join("|") +
        ")$"
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}
// console.log(process.env.npm_config_report)
if (config.build.bundleAnalyzerReport) {
  // console.log(process.env.npm_config_report)
  const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = webpackConfig;
