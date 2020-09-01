<template>
  <div class="page-aircraftWar">
    <canvas id="aircraftWar">current stock price: $3.15 +0.15</canvas>
  </div>
</template>
<script>
import Main from "../../common/js/aircraftWar/main";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  // beforeRouteLeave(to, from, next) {
  //   // 离开组件触发
  //   console.log(this.canvas.width);
  //   // this.canvas = null;
  //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //   next();
  // },
  mounted() {
    this.canvas = document.getElementById("aircraftWar");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.mainWar = new Main();
  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "飞机大战"); // 该方法比较靠谱
  },
  deactivated() { // keep-alive状态下，离开组件页面时触发    keep-alive 组件停用时调用
    window.cancelAnimationFrame(window.aniId); // 取消循环requestAnimationFrame，防止速度加快
    this.$destroy(); // 注销组件实例，重新渲染
  },
  components: {}
};
</script>
<style scoped>
.page-aircraftWar {
  position: relative;
  top: 1.6rem;
  width: 100%;
  height: 100%;
}
</style>
