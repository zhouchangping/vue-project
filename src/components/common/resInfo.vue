<template>
  <div class="layer_mask" v-show="isChildShow">
    <div class="layer_box">{{resInfo}}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  watch: {
    isChildShow() {
      var self = this;
      setTimeout(function() {
        self.$emit("child-event", false); // 需要用连接线方式命名
      }, 3000);
    }
  },
  computed: {
    // 扩展，获取标题
    ...mapGetters([
      // 相当于
      "isChildShow",
      "resInfo"
    ])
  },
  mounted() {},
  components: {}
};
</script>
<style scoped>
.layer_mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(0, 0, 0, 0);
}

.layer_mask .layer_box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 3.5rem;
  font-size: 16px;
  line-height: 3.5rem;
  border-radius: 10px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
</style>
