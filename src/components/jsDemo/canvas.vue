<template>
    <scroll>
      <div class="page-better">
        <div class="page-canvas" ref="canvas">
        </div>
      </div>
    </scroll>
</template>
<script>
import scroll from "../common/scroll.vue";
import DraDemo from "@/common/js/canvas.js";
export default {
  data() {
    return {};
  },
  mounted() {
    let canvasDemo = new DraDemo({
      el: this.$refs.canvas,
      width: 200,
      height: 200,
      change: function (v) {
        console.log(v);
      }
    });
  },
  components: {
    "scroll": scroll
  }
};
</script>
<style scoped>
.page-canvas {
  position: absolute;
  top:  100%;
  left: 50%;
  transform: translate(-50%, 0%);
  background: #fff;
  margin: 0 auto;
}

</style>
