/*
 * @Author: zhouchangping
 * @Date: 2019-03-24 13:00:24
 * @LastEditTime: 2022-01-18 09:27:38
 * @LastEditors: zhouzhou
 * @Description:
 * @FilePath: /reactVue/Vue-project/src/router/mainPageDemo.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 主页面
const signin = () => import("@/components/mainPage/signin.vue");
const signup = () => import("@/components/mainPage/signup.vue");
const jsMainPage = () => import("@/components/mainPage/jsMainPage.vue");
const htmlMainPage = () => import("@/components/mainPage/htmlMainPage.vue");
const faceMainPage = () => import("@/components/mainPage/faceMainPage.vue");
const nodeMainPage = () => import("@/components/mainPage/nodeMainPage.vue");
const cssMainPage = () => import("@/components/mainPage/cssMainPage.vue");

export default [
  /* 页面模板 */
  {
    path: "/",
    name: "home",
    redirect: "/jsMainPage"
  },
  {
    path: "/signin",
    name: "signin",
    component: signin
  },
  {
    path: "/signup",
    name: "signup",
    component: signup
  },
  {
    path: "/jsMainPage",
    name: "jsMainPage",
    component: jsMainPage
  },
  {
    path: "/cssMainPage",
    name: "cssMainPage",
    component: cssMainPage
  },
  {
    path: "/htmlMainPage",
    name: "htmlMainPage",
    component: htmlMainPage,
    meta: {
      title: "html123"
    }
  },
  {
    path: "/nodeMainPage",
    name: "nodeMainPage",
    component: nodeMainPage
  },
  {
    path: "/faceMainPage",
    name: "faceMainPage",
    component: faceMainPage
  }];
