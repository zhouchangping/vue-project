"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
//var proxyConfig = require("./proxyConfig");//引入配置地址文件
const path = require("path");

module.exports = {
  dev: {
    baseUrl: "/api",
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    // proxyTable: proxyConfig.proxy,
    proxyTable: {
      "/": { // ‘/’代替 target
        // target: "http://www.zhouchangping.com:3000",//设置你调用的接口域名和端口号 别忘了加http 代理腾讯云服务器
        // target: "http://localhost:8080",// node测试
        target: "http://49.235.238.235:3000",
        changeOrigin: true,
        pathRewrite: {
          //  可以减少书写api,http://localhost/api/user/add === http://40.00.100.100:3002/user/add
          "^/api": ""//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
      }
    },
    // Various Dev Server settings
    host: "localhost", // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    /**
     * Source Maps
     */
    // https://webpack.js.org/configuration/devtool/#development
    devtool: "cheap-module-eval-source-map", // cheap-module-eval-source-map is faster for development

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    cssSourceMap: true // 改为false 默认情况下不启用它们，因为它们会导致运行时的额外开销，并增加了 bundle 大小 (JS source map 不会)
  },

  build: {
    baseUrl: "http://49.235.238.235:3000",
    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),
    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/vue-zhouzhou/", // 对应nginx html下vue-zhouzhou

    /**
     * Source Maps
     */
    productionSourceMap: false, // 关闭上线surcemap
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report // 执行npm run build --report 相当于在在process.env对象内添加了一个属性。
  }
};
