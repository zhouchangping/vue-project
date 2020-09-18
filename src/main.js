// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import App from "./App";

import router from "./router"; // 先执行router等外部文件 -》 main -> main1

import axios from "axios";

import "./common/font/iconfont.css";

// import fastclick from 'fastclick'

import "./utils/remHtml.js"; // reset rem全局文件

import store from "./store"; // 仓库

import VueLazyload from "vue-lazyload"; // 图片懒加载

import "../mock/mock.js"; // 模拟数据

import "./utils/loading"; // 全局请求loading, 得使用vue的非render-only版本

import "./utils/toast"; // 全局请求loading, 得使用vue的非render-only版本

import VueLocalForage from "vue-localforage"; // 缓存策略
Vue.use(VueLocalForage);

// import JsEncrypt from "jsencrypt/bin/jsencrypt";
// import md5 from "js-md5";
// let base64 = require("js-base64").Base64;
// Vue.prototype.$jsEncrypt = JsEncrypt;
// Vue.prototype.$md5 = md5;
// Vue.prototype.$base64 = base64;
// let result = base64.encode("dankogai");
// console.log(result);

import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer);
Viewer.setDefaults({
  "inline":false,
  "button":true, //右上角按钮
  "navbar": true, //底部缩略图
  "title": true, //当前图片标题
  "toolbar": true, //底部工具栏
  "tooltip": true, //显示缩放百分比
  "movable": true, //是否可以移动
  "zoomable": true, //是否可以缩放
  "rotatable": true, //是否可旋转
  "scalable": true, //是否可翻转
  "transition": true, //使用 CSS3 过度
  "fullscreen": false, //播放时是否全屏
  "keyboard": true, //是否支持键盘
  "url": "data-source",
  ready: function (e) {
    console.log(e.type,"组件以初始化");
  },
  show: function (e) {
    console.log(e.type,"图片显示开始");
  },
  shown: function (e) {
    console.log(e.type,"图片显示结束");
  },
  hide: function (e) {
    console.log(e.type,"图片隐藏完成");
  },
  hidden: function (e) {
    console.log(e.type,"图片隐藏结束");
  },
  view: function (e) {
    console.log(e.type,"视图开始");
  },
  viewed: function (e) {
    console.log(e.type,"视图结束");
    // 索引为 1 的图片旋转20度
    if(e.detail.index === 1){
      this.viewer.rotate(20);
    }
  },
  zoom: function (e) {
    console.log(e.type,"图片缩放开始");
  },
  zoomed: function (e) {
    console.log(e.type,"图片缩放结束");
  }
});

// import Button from "vant/lib/button";
// import "vant/lib/button/style";
import { Button, Cell, CellGroup, Image, Popup, NumberKeyboard, Field, PasswordInput, Picker, Skeleton, Lazyload} from "vant";
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Image);
Vue.use(Popup);
Vue.use(NumberKeyboard);
Vue.use(Field);
Vue.use(PasswordInput);
Vue.use(Picker);
Vue.use(Skeleton);
Vue.use(Lazyload);

// 注册时可以配置额外的选项
// Vue.use(Lazyload, {
//   lazyComponent: true
// });

// 或者添加VueLazyload 选项
Vue.use(VueLazyload, {
  preLoad: 4.3,
  error: "../static/img/loding.gif",
  loading: "../static/img/loding.gif",
  attempt: 3
});

// import watermask from 'vue-watermask' // 水印第三方插件
// Vue.use(watermask);


// if ('serviceWorker' in navigator) { // npm run server本地设置workbox
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js').then(registration => {
//       console.log('SW registered: ', registration);
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
// }

// import BScroll from 'better-scroll' //  Better-scroll ,https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/installation.html#npm

// fastclick.attach(document.body)

// Vue.use(ElementUI) // 使用elment

Vue.prototype.$ajax = axios; // 转化为ajax, this.$ajax

Vue.config.productionTip = false;

// Vue.component("my-component", { // 全局组件
//   template: "<div>A custom component!</div>"
// });


// 注册一个全局自定义指令 `v-focus`
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus();
    //console.log(vnode)
  },
  // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  bind: function () {
    //console.log(bingding)
  },
  // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
  update: function () {
    //console.log(bingding.value)
  },
  // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  componentUpdated: function () {
    //console.log(bingding.value)
  },
  // 只调用一次，指令与元素解绑时调用。
  unbind: function () {}
});

// router.beforeEach((to, from, next) => { // 路由守卫
//   //console.log('路由守卫')
//   next();
// });

// store.commit("SET_TOKEN", 'zhouzhou'); // 该方法比较靠谱


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: {
//     App
//   },
//   template: '<App/>' // 原因是，使用 template属性，需要引入带编译器的完整版的vue.esm.js
// })

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
const errorHandler = (error, vm)=>{
  // console.error("抛出全局异常");
  // console.error(vm);
  // console.error(error);
};

Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error)=> errorHandler(error,this);



