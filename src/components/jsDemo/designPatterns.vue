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
              es6重写设计模式：
              <a href="https://cnodejs.org/topic/5565b4a77d4c64752effb5dd">点击链接</a>
            </p>
            <p>
              前端设计模式,参考：
              <a href="https://www.yuque.com/robinson/design-patterns/uqfm2o">点击链接</a>
            </p>
            <p>
              数据结构
              <a href="https://blog.fundebug.com/2018/08/27/code-interview-data-structure/">点击链接</a>
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
        pageTitle: "Vue.js 运行机制全局概览",
        img: require("../../common/images/avater.jpg"),
        userName: "寻找许仙",
        pageInfo: "该文章综合前端设计模式，及其用书写设计模式",
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
    this.$store.commit("SET_TITLES", "Vue.js 运行机制全局概览"); // 该方法比较靠谱
  },
  mounted() {},
  components: {}
};
</script>
<style scoped>
</style>
