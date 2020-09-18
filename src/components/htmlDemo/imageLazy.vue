<template>
  <div id="pageContainer">
    <div class="pin" v-for="item in imageItems" :key="item.id">
      <img :data-src="item.imgSrc" alt="">
    </div>
    <scrollTop @goTopMove="goTopMove" :isShow="isShow">
    </scrollTop>
  </div>
</template>
<script>
import scrollTop from "@/components/common/scrollTop.vue";
export default {
  data() {
    return {
      isShow: false,
      imageItems: [],
      dataImgArr: [
        { imgSrc: require("../../common/images/flow/P_00.jpg"), src: "" },
        { imgSrc: require("../../common/images/flow/P_01.jpg") , src: ""},
        { imgSrc: require("../../common/images/flow/P_02.jpg") , src: ""},
        { imgSrc: require("../../common/images/flow/P_03.jpg") , src: ""},
        { imgSrc: require("../../common/images/flow/P_04.jpg") , src: ""},
        { imgSrc: require("../../common/images/flow/P_05.jpg") , src: ""},
      ]
    };
  },
  methods: {
    check() {
      let that = this;
      let imgs = that.imgs;
      Array.from(imgs).forEach(function(el){
        if(that.isIn(el)){
          that.loadImg(el);
        }
      });
    },
    isIn(el) {
      var clientHeight = document.body.clientHeight || document.documentElement.clientHeight ||  window.innerHeight;
      var bound = el.getBoundingClientRect();
      return bound.top <= clientHeight;
    },
    loadImg(el) {
      if(!el.src){
        var source = el.dataset.src;
        el.src = source;
      }
    },
    checkScrollSlid: function() {
      var oBoxs = document.querySelectorAll(".pin");
      var lastPinH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 2); //创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      var heightWindow = document.body.clientHeight || document.documentElement.clientHeight;
      return lastPinH < scrollTop + heightWindow ? true : false;
    },
    goTopMove() {
      // 设置滚动行为改为平滑的滚动
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  activated() {
    let that = this;
    // keep-alive 组件激活时调用。
    that.$store.commit("SET_TITLES", "瀑布流图片功能"); // 该方法比较靠谱
  },
  created() {
    this.imageItems = [
      { imgSrc: require("../../common/images/flow/P_00.jpg"), src: "" },
      { imgSrc: require("../../common/images/flow/P_01.jpg") , src: ""},
      { imgSrc: require("../../common/images/flow/P_02.jpg") , src: ""},
      { imgSrc: require("../../common/images/flow/P_03.jpg") , src: ""},
      { imgSrc: require("../../common/images/flow/P_04.jpg") , src: ""},
      { imgSrc: require("../../common/images/flow/P_05.jpg") , src: ""},
      { imgSrc: require("../../common/images/flow/P_06.jpg") , src: ""},
      { imgSrc: require("../../common/images/flow/P_07.jpg") , src: ""},
      { imgSrc: require("../../common/images/flow/P_08.jpg") , src: ""},
      { imgSrc: require("../../common/images/flow/P_09.jpg") , src: ""},
      { imgSrc: require("../../common/images/flow/P_010.jpg"), src: "" },
      { imgSrc: require("../../common/images/flow/P_011.jpg"), src: "" },
      { imgSrc: require("../../common/images/flow/P_012.jpg"), src: "" },
      { imgSrc: require("../../common/images/flow/P_013.jpg"), src: "" },
      { imgSrc: require("../../common/images/flow/P_014.jpg"), src: "" },
      { imgSrc: require("../../common/images/flow/P_015.jpg"), src: "" },
      { imgSrc: require("../../common/images/flow/P_016.jpg"), src: "" },
      { imgSrc: require("../../common/images/flow/P_017.jpg"), src: "" },
      { imgSrc: require("../../common/images/flow/P_018.jpg"), src: "" },
      { imgSrc: require("../../common/images/flow/P_019.jpg"), src: "" }
    ];
  },
  mounted() {
    let that = this;
    that.imgs = document.querySelectorAll("img");
    window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
      if (that.checkScrollSlid()) { // 先加载
        that.imageItems = that.imageItems.concat(that.dataImgArr);
        that.$nextTick(()=> {
          that.imgs = document.querySelectorAll("img");
          that.check();
        });
      }
      that.check(); // 再处理显示
    };
  },
  deactivated() {
    // 该钩子在服务器端渲染期间不被调用。
  },
  components: {
    "scrollTop": scrollTop
  }
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
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 0 0.16rem #ccc;
  border-radius: 0.133333rem;
}

.pin img {
  width: 162px;
  height: 243px;
}
</style>
