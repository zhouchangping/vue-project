<template>
  <div id="pageContainer">
    <div class="pin" v-for="item in imageItems" :key="item.id">
      <div class="box">
        <img :src="item.imgSrc" alt="图片加载中">
      </div>
    </div>
  </div>
</template>
<script>
//import { mapMutations } from "vuex";
export default {
  data() {
    return {
      imageItems: [
        { imgSrc: require("../../common/images/flow/P_00.jpg") },
        { imgSrc: require("../../common/images/flow/P_01.jpg") },
        { imgSrc: require("../../common/images/flow/P_02.jpg") },
        { imgSrc: require("../../common/images/flow/P_03.jpg") },
        { imgSrc: require("../../common/images/flow/P_04.jpg") },
        { imgSrc: require("../../common/images/flow/P_05.jpg") },
        { imgSrc: require("../../common/images/flow/P_06.jpg") },
        { imgSrc: require("../../common/images/flow/P_07.jpg") },
        { imgSrc: require("../../common/images/flow/P_08.jpg") },
        { imgSrc: require("../../common/images/flow/P_09.jpg") },
        { imgSrc: require("../../common/images/flow/P_010.jpg") },
        { imgSrc: require("../../common/images/flow/P_011.jpg") },
        { imgSrc: require("../../common/images/flow/P_012.jpg") },
        { imgSrc: require("../../common/images/flow/P_013.jpg") },
        { imgSrc: require("../../common/images/flow/P_014.jpg") },
        { imgSrc: require("../../common/images/flow/P_015.jpg") },
        { imgSrc: require("../../common/images/flow/P_016.jpg") },
        { imgSrc: require("../../common/images/flow/P_017.jpg") },
        { imgSrc: require("../../common/images/flow/P_018.jpg") },
        { imgSrc: require("../../common/images/flow/P_019.jpg") }
      ],
      dataImgArr: [
        { imgSrc: require("../../common/images/flow/P_00.jpg") },
        { imgSrc: require("../../common/images/flow/P_01.jpg") },
        { imgSrc: require("../../common/images/flow/P_02.jpg") },
        { imgSrc: require("../../common/images/flow/P_03.jpg") },
        { imgSrc: require("../../common/images/flow/P_04.jpg") },
        { imgSrc: require("../../common/images/flow/P_05.jpg") }
      ],
      hArr: []
    };
  },
  methods: {
    waterFall: function() {
      this.hArr = [];
      this.oBoxW = document.querySelectorAll(".pin")[0].offsetWidth;
      this.parentEle = document.getElementById("pageContainer");
      this.oBoxs = document.querySelectorAll(".pin");
      this.cols = Math.floor(document.documentElement.clientWidth / this.oBoxW);
      this.parentEle.style.cssText =
        "width:" + this.oBoxW * this.cols + "px; margin:0 auto;";
      for (var i = 0; i < this.oBoxs.length; i++) {
        if (i < this.cols) {
          this.hArr.push(this.oBoxs[i].offsetHeight);
        } else {
          this.minH = Math.min.apply(null, this.hArr);
          this.index = this.getMinhIndex(this.hArr, this.minH);
          this.oBoxs[i].style.position = "absolute";
          this.oBoxs[i].style.top = this.minH + "px";
          this.oBoxs[i].style.left = this.oBoxs[this.index].offsetLeft + "px";
          this.hArr[this.index] += this.oBoxs[i].offsetHeight;
        }
      }
    },
    getMinhIndex: function(arr, val) {
      for (var i in arr) {
        if (arr[i] === val) {
          return i;
        }
      }
    },
    checkScrollSlid: function() {
      //var oParent = document.getElementById("main");
      var oBoxs = document.querySelectorAll(".pin");
      var lastPinH =
        oBoxs[oBoxs.length - 1].offsetTop +
        Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 2); //创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      var heightWindow =
        document.body.clientHeight || document.documentElement.clientHeight;
      return lastPinH < scrollTop + heightWindow ? true : false;
    }
  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "瀑布流图片功能"); // 该方法比较靠谱
  },
  mounted() {
    var that = this;
    setTimeout(function() {
      that.waterFall();
    }, 1000);
    window.addEventListener(
      "scroll",
      function() {
        if (that.checkScrollSlid()) {
          that.imageItems = that.imageItems.concat(that.dataImgArr);
          that.waterFall();
        }
      },
      true
    );
  },
  deactivated() {
    // 该钩子在服务器端渲染期间不被调用。
    window.removeEventListener("scroll");
    // var that = this;
    // that.waterFall();
  },
  components: {}
};
</script>
<style scoped>
/* 需要设置position:relative;才能使用window.addEventListener('scroll', function() {}, true) */
#pageContainer {
  position: relative;
  width: 100%;
  top: 1.6rem;
}

.pin {
  padding: 0.4rem 0 0 0.4rem;
  float: left;
}

.box {
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 0 0.16rem #ccc;
  border-radius: 0.133333rem;
}

.box img {
  width: 4.32rem;
  height: auto;
}
</style>
