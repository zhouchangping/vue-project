// 懒加载 公共样式
const topNav = () => import("@/components/common/topNav.vue");
const footer = () => import("@/components/common/footer.vue");
const resInfo = () => import("@/components/common/resInfo.vue");
export default [
  /* 公共模板 */
  {
    path: "/topNav", // 头部通用
    name: "topNav",
    component: topNav
  },
  {
    path: "/footer", // 头部通用
    name: "footer",
    component: footer
  },
  {
    path: "/resInfo", // 头部通用
    name: "resInfo",
    component: resInfo
  }];
