/*
 * @Author: zhouchangping
 * @Date: 2019-03-24 12:59:22
 * @LastEditTime: 2022-01-18 09:29:08
 * @LastEditors: zhouzhou
 * @Description:
 * @FilePath: /reactVue/Vue-project/src/router/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import Vue from "vue";
import Router from "vue-router";

import mainPageDemo from "./mainPageDemo.js"; // 先引入先执行里面文件
import commonDemo from "./commonDemo.js";
import faceDemo from "./faceDemo.js";
import jsDemo from "./jsDemo.js";
import nodeDemo from "./nodeDemo.js";
import cssDemo from "./cssDemo.js";
import htmlDemo from "./htmlDemo.js";


// console.log("router");
Vue.use(Router);
// console.log("router1");
//合并两个路由
let routes = new Set([...commonDemo, ...faceDemo, ...jsDemo,  ...nodeDemo, ...cssDemo, ...htmlDemo, ...mainPageDemo]);

let router = new Router({
  routes: routes
});

router.beforeEach((to, from, next) => { // 路由守卫
  // to 将要访问的路径
  // from 代表从哪个路径跳转过来
  // next 是一个函数，表示放行
  // next() 放行  next('/login')跳转到登录页面
  // console.log(to);
  // console.log(from);
  // let token = window.localStorage.getItem("token");
  // let token_exp = window.localStorage.getItem("token_exp");
  // if (!token) {
  //   if (to.path !== "/signin" && to.path !== "/signup") {
  //     return next("/signin"); // 如果访问的不是登录页,没有token，直接去signin
  //   } else {
  //     return next(); // 如果访问的是登录页,并且没有token，直接通过
  //   }
  // } else {
  //   if (((new Date().getTime() - token_exp) / 86400000) > 1) {
  //     window.localStorage.removeItem("token_exp", "");
  //     window.localStorage.removeItem("token", "");
  //     return next("/signin"); // 超过时间了，直接去signin
  //   }
  //   if (to.path == "/signin") {
  //     return next("/jsMainPage"); // 如果访问的是登录页,有token，直接去jsMainPage
  //   }
  //   if (to.path == "/signup") { // 如果访问的是注册页,有token，清空token
  //     window.localStorage.removeItem("token", "");
  //   }
  // }
  // 如果存在token直接放行
  next();
});


export default router;
