<template>
  <div class="pageContainer" v-show="isShowContainer">
    <div class="page-better">
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
    </div>
    <refresh-fs v-bind:isLoading="isLoading"></refresh-fs>
  </div>
</template>
<script>
//import { mapMutations } from "vuex";
import refresh from "../common/refresh.vue";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
      isLoading: true,
      isShowContainer: false,
      isActive: false,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: [
        {
          pageTitle: "2018大厂高级前端面试题汇总",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: `深深感受到高级前端面试的套路。以下是自己整理的面试题汇总，不敢藏私，统统贡献出来。
面试的公司分别是：阿里、网易、滴滴、今日头条、有赞、挖财、沪江、饿了么、携程、喜马拉雅、兑吧、微医、寺库、宝宝树、海康威视、蘑菇街、酷家乐、百分点和海风教育。
以下是面试题汇总，前端进阶系列会持续深入更新面试题解，共勉！`,
          pageTime: "2019-01-24",
          url: "face"
        },
        {
          pageTitle: "阿里面试题解答",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "阿里部分面试题目解答",
          pageTime: "2019-02-13",
          url: "ali"
        },
        {
          pageTitle: "前端面试集锦",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "解决前端面试吃闭门羹，集合前端部分专题",
          pageTime: "2019-03-22",
          url: "faceEase"
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
    this.$store.commit("SET_TITLES", "面试题解答"); // 该方法比较靠谱
    this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
    this.scroll.refresh();
  },
  mounted() {
    let that = this;
    let wrapper = document.querySelector(".pageContainer");
    that.scroll = new BScroll(wrapper, {
      scrollY: true,
      click: true
    });
    that.isLoading = false;
    that.isShowContainer = true;
  },
  components: {
    "refresh-fs": refresh
  }
};
</script>
<style scoped>
</style>
