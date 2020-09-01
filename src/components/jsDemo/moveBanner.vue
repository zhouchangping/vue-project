<template>
  <div id="pageContainer">
    <div id="canvas"></div>
  </div>
</template>
<script>
//import { mapMutations } from "vuex";
import Slider from "../../utils/slider.js";
export default {
  data() {
    return {
      list: [
        {
          height: 950,
          width: 800,
          img: require("../../common/images/bannerMove/1.jpg")
        },
        {
          height: 1187,
          width: 900,
          img: require("../../common/images/bannerMove/2.jpg")
        },
        {
          height: 766,
          width: 980,
          img: require("../../common/images/bannerMove/3.jpg")
        },
        {
          height: 754,
          width: 980,
          img: require("../../common/images/bannerMove/4.jpg")
        },
        {
          height: 1187,
          width: 900,
          img: require("../../common/images/bannerMove/5.jpg")
        },
        {
          height: 766,
          width: 980,
          img: require("../../common/images/bannerMove/6.jpg")
        },
        {
          height: 754,
          width: 980,
          img: require("../../common/images/bannerMove/7.jpg")
        }
      ]
    };
  },
  methods: {},
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "图片滑动"); // 该方法比较靠谱
  },
  mounted() {
    // this.$ajax.interceptors.response.use((res)=>{
    //     console.log(res.data);
    //     return res.data; // 在这里统一拦截结果 把结果处理成res.data
    // });
    // this.$ajax.get('/api/list');
    var self = this;
    new Slider({
      dom: document.getElementById("canvas"),
      list: self.list
    });
  },
  deactivated() {},
  components: {}
};
</script>
<style scoped>
#pageContainer {
  position: relative;
  top: 1.6rem;
}
/* 隐藏画布外的内容 */
#canvas {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
/* 使得图片居中 webkit-box */
#canvas ul li {
  position: absolute;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}
</style>
