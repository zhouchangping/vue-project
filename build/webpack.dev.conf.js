"use strict";
const utils = require("./utils");
const webpack = require("webpack");
const config = require("../config");
const merge = require("webpack-merge");

const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const SkeletonWebpackPlugin = require("vue-skeleton-webpack-plugin");

const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const portfinder = require("portfinder");
const HappyPack = require("happypack"); // 用多进程，处理loader
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // 分析
const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ // 配置[ { test: /\.css$/, use: [ 'vue-style-loader', [Object], [Object] ] },{ test: /\.postcss$/,use: [ 'vue-style-loader', [Object], [Object] ] },{ test: /\.less$/,use: [ 'vue-style-loader', [Object], [Object], [Object] ] }, { test: /\.sass$/,use: [ 'vue-style-loader', [Object], [Object], [Object] ] }, { test: /\.scss$/,use: [ 'vue-style-loader', [Object], [Object], [Object] ] },{ test: /\.stylus$/,use: [ 'vue-style-loader', [Object], [Object], [Object] ] },{ test: /\.styl$/,use: [ 'vue-style-loader', [Object], [Object], [Object] ] } ]
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true // import引入到js里面的css文件，@import引入不生效，style里面可以。
    })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: "warning",
    historyApiFallback: {
      rewrites: [{
        from: /.*/,
        to: path.posix.join(config.dev.assetsPublicPath, "index.html")
      }, ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ?
      {
        warnings: false,
        errors: true
      } :
      false,
    publicPath: config.dev.assetsPublicPath,
    // publicPath: '/build/',
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "server",
    //   analyzerHost: "127.0.0.1",
    //   analyzerPort: 8889,
    //   reportFilename: "report.html",
    //   defaultSizes: "parsed",
    //   openAnalyzer: true,
    //   generateStatsFile: false,
    //   statsFilename: "stats.json",
    //   statsOptions: null,
    //   logLevel: "info"
    // }),
    new HappyPack({
      id: "babel",
      loaders: ["babel-loader?cacheDirectory"]
    }),
    new webpack.DefinePlugin({
      "process.env": require("../config/dev.env") // 定义全局变量，这里是NODE_ENV
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      // filename: 'index.html',
      filename: "index.html",
      // index: path.resolve(__dirname, '../dist/index.html'),
      template: "index.html",
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, "../static"),
      to: config.dev.assetsSubDirectory,
      ignore: [".*"]
    }]),
    new VueLoaderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new SkeletonWebpackPlugin({
    //   webpackConfig: require("./webpack.skeleton.conf"),
    //   quiet: true
    // }),
    // inject skeleton content(DOM & CSS) into HTML 骨架屏
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
  ]
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port;
      // add port to devServer config
      devWebpackConfig.devServer.port = port;
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors ?
          utils.createNotifierCallback() :
          undefined
      }));
      resolve(devWebpackConfig);
    }
  });
});
