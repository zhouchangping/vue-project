<template>
  <transition name="fadeMask">
    <div class="pageContainer">
      <div class="page-better">
        <div class="page-main">
          <h1 class="page-titile">{{dataArtical.pageTitle}}</h1>
          <div class="page-user-info">
            <p class="page-p">
              <img :src="avatar" class="page-user-img">
              <span class="page-username">{{dataArtical.userName}}</span>
            </p>
            <p class="page-p">
              <span class="page-user-time">{{dataArtical.pageTime}}</span>
            </p>
          </div>
          <div class="page-artical-msg">
            <P>{{dataArtical.pageInfo}}</P>
            <p>
              数据结构
              <a href="https://blog.fundebug.com/2018/08/27/code-interview-data-structure/">点击链接</a>
              <a href="https://juejin.im/post/5b331bc7f265da598451fd88">点击链接</a>
            </p>
          </div>
          <div class="page-move-box">
             <div class="page-move-one" id="move">
             </div>
             <div class="page-move-tow">
             </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
//import { mapMutations } from "vuex";
import Move from "../../utils/move.js";
export default {
  data() {
    return {
      isActive: false,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: {
        pageTitle: "前端算法",
        img: require("../../common/images/avater.jpg"),
        userName: "寻找许仙",
        pageInfo: "该文章综合前端数据结构和算法",
        pageTime: "2019-10-18"
      },
      moveDiv: document.getElementById("moveDiv")
    };
  },
  methods: {
    mainTransition() {
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    },
  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "Vue.js 运行机制全局概览"); // 该方法比较靠谱
  },
  mounted() {
    new Move({dragEle: ".page-move-one", tarEle: ".page-move-tow",
      onStart: function(e) {
        e.innerHTML = "我被抓到了";
      },
      onMove: function(e) {
        e.innerHTML = "我在移动";
        // console.log('move');
      },
      onMoveIn: function(e) {
        e.style.cssText = "opacity: 1;";
      },
      onEnd: function(e) {
        e.innerHTML = "我已移入目标区域";
        e.style.cssText += "display: none;";
      },
    });
  },
  components: {}
};
</script>
<style scoped>
.page-move-box {
  position: relative;
  width: 100%;
  height: 400px;
  border: 1px solid #000;
  box-sizing: border-box;
}
.page-move-box .page-move-one {
  display: block;
  position: absolute;
  left: 0;
  top: 20px;
  z-index: 999;
  width: 100px;
  height: 100px;
  background: yellow;
}

.page-move-box .page-move-tow {
  position: absolute;
  width: 200px;
  height: 200px;
  right: 0;
  top: 0;
  background: black;
}
</style>
