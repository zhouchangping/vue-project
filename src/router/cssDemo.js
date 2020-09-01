// css
const css3D = () => import("@/components/cssDemo/css3D.vue");
const flex = () => import("@/components/cssDemo/flex.vue");

export default [
  /* css */
  {
    path: "/flex",
    name: "flex",
    component: flex
  },
  {
    path: "/css3D",
    name: "css3D",
    component: css3D,
  }];
