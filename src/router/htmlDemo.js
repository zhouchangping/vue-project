// html
// const pubu = () => import('@/components/htmlDemo/pubu.vue')
// const canvas = () => import('@/components/htmlDemo/canvas.vue')
const pubu = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/pubu.vue");
const canvas = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/canvas.vue");
const vueImg = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/vueImgPrivew.vue");
const vantPage = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/vantPage.vue");
const imageLazy = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/imageLazy.vue");
const html5 = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/html5.vue");
const testCus = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/testCus.vue");

const leftRight = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/leftRight.vue");

export default [
  /* html */
  {
    path: "/pubu",
    name: "pubu",
    component: pubu,
  }, {
    path: "/canvas",
    name: "canvas",
    component: canvas,
  }, {
    path: "/vueImg",
    name: "vueImg",
    component: vueImg,
  }, {
    path: "/vantPage",
    name: "vantPage",
    component: vantPage,
  },
  {
    path: "/imageLazy",
    name: "imageLazy",
    component: imageLazy,
  },
  {
    path: "/html5",
    name: "html5",
    component: html5,
  },
  {
    path: "/testCus",
    name: "testCus",
    component: testCus,
  },
  {
    path: "/leftRight",
    name: "leftRight",
    component: leftRight,
  }];
