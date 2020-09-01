<template>
  <div class="pageContainer" v-show="isShowContainer">
    <div class="page-main" v-for="item in dataArtical" v-on:click="goToDetail(item.url)" :key="item.id">
      <h1 class="page-titile">{{item.pageTitle}}</h1>
      <div class="page-user-info">
        <p class="page-p">
          <img :src="avatar" class="page-user-img">
          <span class="page-username">{{item.userName}}</span>
        </p>
        <p class="page-p">
          <span class="page-user-time">{{item.pageTime}}</span>
        </p>
      </div>
      <div class="page-artical-msg">
        <P>{{item.pageInfo}}</P>
      </div>
    </div>
    <refresh-fs v-bind:isLoading="isLoading"></refresh-fs>
  </div>
</template>
<script>
//import { mapMutations } from "vuex";
import refresh from "../common/refresh.vue";
export default {
  data() {
    return {
      isLoading: true,
      isShowContainer: false,
      isActive: false,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: [
        {
          pageTitle: "Vue.js 运行机制全局概览",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "这一节笔者将为大家介绍一下 Vue.js 内部的整个流程，希望能让大家对全局有一个整体的印象，然后我们再来逐个模块进行讲解。从来没有了解过 Vue.js 实现的同学可能会对一些内容感到疑惑，这是很正常的，这一节的目的主要是为了让大家对整个流程有一个大概的认识，算是一个概览预备的过程，当把整本小册认真读完以后，再来阅读这一节，相信会有收获的。",
          pageTime: "2019-01-24",
          url: "mainPageDetail"
        },
        {
          pageTitle: "docker",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "docker链接地址：https://yeasy.gitbooks.io/docker_practice/introduction/what.html",
          pageTime: "2019-03-26",
          url: "cssModules"
        }
      ]
    };
  },
  methods: {
    mainTransition() {
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    },
    goToDetail(val) {
      this.$router.push({ name: val });
    }
  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "node集合"); // 该方法比较靠谱
    this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
  },
  mounted() {
    var self = this;
    self.isLoading = false;
    self.isShowContainer = true;
  },
  components: {
    "refresh-fs": refresh
  }
};
</script>
<style scoped>
</style>
