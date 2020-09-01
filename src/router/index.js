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
  console.log("路由守卫");
  next();
});


export default router;
