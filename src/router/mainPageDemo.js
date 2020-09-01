// 主页面
const jsMainPage = () => import("@/components/mainPage/jsMainPage.vue");
// const jsMainPage = () => import(/* webpackPrefetch: true */ '@/components/mainPage/jsMainPage.vue');
const htmlMainPage = () => import("@/components/mainPage/htmlMainPage.vue");
const faceMainPage = () => import("@/components/mainPage/faceMainPage.vue");
const nodeMainPage = () => import("@/components/mainPage/nodeMainPage.vue");
const cssMainPage = () => import("@/components/mainPage/cssMainPage.vue");

// console.log("mainpage");
export default [
  /* 页面模板 */
  {
    path: "/",
    name: "home",
    redirect: "/jsMainPage"
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
