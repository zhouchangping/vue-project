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
              掘金连接地址：
              <a href="https://juejin.im/post/5c46e8dde51d4539f51d842c">点击连接</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
//import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isActive: false,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: {
        pageTitle: "2018大厂高级前端面试题汇总",
        img: require("../../common/images/avater.jpg"),
        userName: "寻找许仙",
        pageInfo:
          "现今前端市场大量人口充斥，良莠不齐，市面上面试试题层出不穷。本文主要是针对一些面试题的解答专题",
        pageTime: "2018-09-30"
      }
    };
  },
  methods: {
    mainTransition() {
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    }
  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "面试经验"); // 该方法比较靠谱
    this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
  },
  mounted() {},
  components: {}
};
</script>
<style scoped>
</style>
