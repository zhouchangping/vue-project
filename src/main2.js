// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import App from "./App";

import "@/utils/mainInfo.js";

import router from "./router"; // 先执行router等外部文件 -》 main -> main1

import axios from "@/utils/axiosUtil.js"; // ajax

import "./common/font/iconfont.css";

// // import fastclick from 'fastclick'

import "./utils/remHtml.js"; // reset rem全局文件

import store from "./store"; // 仓库

import VueWorker from "vue-worker";
Vue.use(VueWorker);

import VueLazyload from "vue-lazyload"; // 图片懒加载


// // import { count } from "./testEsMoudle/base1.js";
// // setTimeout(() => {
// //   console.log("count is" + count + "in es6");
// // }, 1000);

// // var count = require("./testEsMoudle/base.js");
// // console.log(count);


// // import { m } from "./testEsMoudle/base1.js";
// // console.log(m);
// // catSay();

// // import "../mock/mock.js"; // 模拟数据

// // import "./utils/loading"; // 全局请求loading, 得使用vue的非render-only版本

// // import "./utils/toast"; // 全局请求loading, 得使用vue的非render-only版本

// // import VueLocalForage from "vue-localforage"; // 缓存策略
// // Vue.use(VueLocalForage);

// // import JsEncrypt from "jsencrypt/bin/jsencrypt";
// // import md5 from "js-md5";
// // let base64 = require("js-base64").Base64;
// // Vue.prototype.$jsEncrypt = JsEncrypt;
// // Vue.prototype.$md5 = md5;
// // Vue.prototype.$base64 = base64;
// // let result = base64.encode("dankogai");
// // console.log(result);

// // 注册时可以配置额外的选项
// // Vue.use(Lazyload, {
// //   lazyComponent: true
// // });

// // 或者添加VueLazyload 选项
Vue.use(VueLazyload, {
  preLoad: 4.3,
  error: "../static/img/loding.gif",
  loading: "../static/img/loding.gif",
  attempt: 3
});

// // import watermask from 'vue-watermask' // 水印第三方插件
// // Vue.use(watermask);


// // if ('serviceWorker' in navigator) { // npm run server本地设置workbox
// //   window.addEventListener('load', () => {
// //     navigator.serviceWorker.register('/service-worker.js').then(registration => {
// //       console.log('SW registered: ', registration);
// //     }).catch(registrationError => {
// //       console.log('SW registration failed: ', registrationError);
// //     });
// //   });
// // }

// // import BScroll from 'better-scroll' //  Better-scroll ,https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/installation.html#npm

// // fastclick.attach(document.body)

// // Vue.use(ElementUI) // 使用elment

// // console.log(axios);
// // console.log(3435);
Vue.use(axios); // 使用axios

// Vue.config.productionTip = false;

// // Vue.component("my-component", { // 全局组件
// //   template: "<div>A custom component!</div>"
// // });


// // 注册一个全局自定义指令 `v-focus`
// Vue.directive("focus", {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus();
//     //console.log(vnode)
//   },
//   // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
//   bind: function () {
//     //console.log(bingding)
//   },
//   // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
//   update: function () {
//     //console.log(bingding.value)
//   },
//   // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
//   componentUpdated: function () {
//     //console.log(bingding.value)
//   },
//   // 只调用一次，指令与元素解绑时调用。
//   unbind: function () { }
// });

// router.beforeEach((to, from, next) => { // 路由守卫
//   //console.log('路由守卫')
//   next();
// });

// store.commit("SET_TOKEN", 'zhouzhou'); // 该方法比较靠谱


/* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   router,
//   store,
//   components: {
//     App
//   },
//   template: "<App/>" // 原因是，使用 template属性，需要引入带编译器的完整版的vue.esm.js
// });
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  render: h => h(App)
});

// Vue.config.errorHandler = function (err, vm, info) {
//   // handle error
//   // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
//   // 只在 2.2.0+ 可用
//   console.log(info);
// };


//系统错误捕获
const errorHandler = (error, vm) => {
  // console.error("抛出全局异常");
  // console.error(vm);
  // console.error(error);
};


Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error) => errorHandler(error, this);



