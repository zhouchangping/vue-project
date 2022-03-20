// js
const animate = () => import("@/components/jsDemo/animate.vue");
const moveBanner = () => import("@/components/jsDemo/moveBanner.vue");
const aircraftWar = () => import("@/components/jsDemo/aircraftWar.vue");
const vueJsDemo = () => import("@/components/jsDemo/vueJsDemo.vue");
const shuanFa = () => import("@/components/jsDemo/shuanfa.vue");
const designPatterns = () => import("@/components/jsDemo/designPatterns.vue");
const algorithm = () => import("@/components/jsDemo/algorithm.vue");
const promise = () => import("@/components/jsDemo/promise.vue");
const template = () => import("@/components/jsDemo/template.vue");
const webSafety = () => import("@/components/jsDemo/webSafety.vue");
const h5Lock = () => import("@/components/jsDemo/h5Lock.vue");
const scrollTop = () => import("@/components/jsDemo/scrollTop.vue");
const jsCanvas = () => import("@/components/jsDemo/canvas.vue");
const betterScroll = () => import("@/components/jsDemo/betterScroll.vue");
const wxTool = () => import("@/components/jsDemo/wxTool.vue");
const urlTool = () => import("@/components/jsDemo/urlTool.vue");
const updateImage = () => import("@/components/jsDemo/updateImage.vue");

export default [
  /* js */
  {
    path: "/animate",
    name: "animate",
    component: animate
  },
  {
    path: "/moveBanner",
    name: "moveBanner",
    component: moveBanner,
  },
  {
    path: "/aircraftWar",
    name: "aircraftWar",
    component: aircraftWar,
  },
  {
    path: "/vueJsDemo",
    name: "vueJsDemo",
    component: vueJsDemo,
  }, {
    path: "/shuanFa",
    name: "shuanFa",
    component: shuanFa,
  }, {
    path: "/promise",
    name: "promise",
    component: promise,
  }, {
    path: "/designPatterns",
    name: "designPatterns",
    component: designPatterns,
  }, {
    path: "/algorithm",
    name: "algorithm",
    component: algorithm,
  }, {
    path: "/template",
    name: "template",
    component: template
  }, {
    path: "/webSafety",
    name: "webSafety",
    component: webSafety
  }, {
    path: "/h5Lock",
    name: "h5Lock",
    component: h5Lock
  }, {
    path: "/scrollTop",
    name: "scrollTop",
    component: scrollTop
  }, {
    path: "/jsCanvas",
    name: "jsCanvas",
    component: jsCanvas
  },
  {
    path: "/betterScroll",
    name: "betterScroll",
    component: betterScroll
  },
  {
    path: "/wxTool",
    name: "wxTool",
    component: wxTool
  },
  {
    path: "/urlTool",
    name: "urlTool",
    component: urlTool
  },
  {
    path: "/updateImage",
    name: "updateImage",
    component: updateImage
  }];
