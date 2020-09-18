// html
// const pubu = () => import('@/components/htmlDemo/pubu.vue')
// const canvas = () => import('@/components/htmlDemo/canvas.vue')
const pubu = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/pubu.vue");
const canvas = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/canvas.vue");
const vueImg = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/vueImgPrivew.vue");
const vantPage = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/vantPage.vue");
const imageLazy = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/htmlDemo/imageLazy.vue");

export default [
/* html */
  {
    path: "/pubu",
    name: "pubu",
    component: pubu,
  },{
    path: "/canvas",
    name: "canvas",
    component: canvas,
  },{
    path: "/vueImg",
    name: "vueImg",
    component: vueImg,
  },{
    path: "/vantPage",
    name: "vantPage",
    component: vantPage,
  },
  {
    path: "/imageLazy",
    name: "imageLazy",
    component: imageLazy,
  }];
