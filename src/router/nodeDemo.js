// node
// const pubu = () => import('@/components/htmlDemo/pubu.vue')
const ws = () => import(/* webpackChunkName: "htmlDemo" */ "@/components/nodeDemo/ws.vue");
export default [
  {
    path: "/ws",
    name: "ws",
    component: ws,
  }];

