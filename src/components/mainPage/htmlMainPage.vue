<template>
  <div class="pageContainer" ref="pageContainer">
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
    <loadings :isShow="isShowLoading"></loadings>
    <!-- <refresh-fs v-bind:isLoading="isLoading"></refresh-fs> -->
  </div>
</template>
<script>
// import { mapMutations } from "vuex";
// import refresh from "../common/refresh.vue";
import BScroll from "better-scroll";
import loadings from "@/components/common/loading.vue";
export default {
  data() {
    return {
      isShowLoading: true,
      // isLoading: true,
      scroll: null,
      // isShowContainer: false,
      isActive: false,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: [
        {
          pageTitle: "瀑布流图片功能",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "该功能主要处理图片的下拉加载，瀑布布局",
          pageTime: "2019-01-25",
          url: "pubu",
          id: 1
        },
        {
          pageTitle: "canvas基础",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "学习canvas",
          pageTime: "2019-05-7",
          url: "canvas",
          id: 2
        },
        {
          pageTitle: "vue图片预览",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "vue图片预览",
          pageTime: "2019-12-13",
          url: "vueImg",
          id: 3
        },
        {
          pageTitle: "vant",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "vant",
          pageTime: "2020-01-12",
          url: "vantPage",
          id: 4
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
    this.$store.commit("SET_TITLES", "html集合"); // 该方法比较靠谱
    this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
    this.scroll.refresh();
  },
  mounted() {
    var that = this;
    setTimeout(()=> {
      that.isShowLoading = false;
    }, 2000);
    // that.isShowLoading = false;
    // that.isLoading = false;
    // that.isShowContainer = true;
    // let wrapper = document.querySelector('.pageContainer');
    let wrapper = this.$refs.pageContainer;
    that.scroll = new BScroll(wrapper, {
      scrollY: true,
      click: true
    });
  },
  components: {
    // "refresh-fs": refresh,
    loadings
  }
};
</script>
<style scoped>
</style>
