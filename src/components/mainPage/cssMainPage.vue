<template>
  <scroll>
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
    <top-nav v-bind:articalItems="articalItems" :text="title"></top-nav>
    <!-- <loadings :isShow="isShowLoading"></loadings> -->
  </scroll>
</template>
<script>
import topNav from "@/components/common/topNav.vue";
import scroll from "../common/scroll.vue";
// import loadings from "@/components/common/loading.vue";
export default {
  data() {
    return {
      title: "css",
      articalItems: [
        { title: "javascript", url: "/jsMainPage", id: 1 },
        { title: "html", url: "/htmlMainPage", id: 2 },
        { title: "css", url: "/cssMainPage", id: 3 },
        { title: "面试集合", url: "/faceMainPage", id: 4 },
        { title: "node", url: "/nodeMainPage", id: 5 },
      ],
      isActive: false,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: [
        {
          pageTitle: "CSS3D魔方",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "该功能主要涉及css3d知识，涉及到3d属性：-webkit-transform-style: preserve-3d，设置子节点透视。-webkit-transform-origin: 80px 80px 0，设置旋转中心点，-webkit-transform: rotateX(-90deg) translateZ(80px)， 修改子节点的x, y, z布局，形成立体，webkit-perspective: 300px，添加观察点",
          pageTime: "2019-01-25",
          url: "css3D"
        },
        {
          pageTitle: "几种布局方式",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "这篇文章主要介绍现在的前端，主要运用的几种页面布局方式。",
          pageTime: "2019-01-25",
          url: "flex"
        },
        {
          pageTitle: "css动画",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "这篇文章主要介绍现在的前端，主要运用的css动画。链接地址：https://www.w3cplus.com/animation/animation-exploration-for-taobao-mobile.html",
          pageTime: "2019-03-26",
          url: "cssAnimation"
        },
        {
          pageTitle: "css houdini",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "这篇文章主要介绍现在的前端，主要运用的css houdini实现一片星空。链接地址：https://zhuanlan.zhihu.com/p/20939640  星空：https://juejin.im/post/5adc091b51882567105f5586",
          pageTime: "2019-03-26",
          url: "cssAnimation"
        },
        {
          pageTitle: "css modules",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "css modules链接地址：http://www.ruanyifeng.com/blog/2016/06/css_modules.html 掘金计划：https://github.com/xitu/gold-miner",
          pageTime: "2019-03-26",
          url: "cssModules"
        },
        {
          pageTitle: "bem sass oocss",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "bem链接地址：https://www.leemunroe.com/css-sass-scss-bem-less/",
          pageTime: "2019-03-26",
          url: "bem"
        },
        {
          pageTitle: "css 帧动画",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "bem链接地址：https://www.leemunroe.com/css-sass-scss-bem-less/",
          pageTime: "2020-09-11",
          url: "cssanimation"
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
    this.$store.commit("SET_TITLES", "css集合"); // 该方法比较靠谱
    this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
  },
  mounted() {
  },
  components: {
    "top-nav": topNav,
    "scroll": scroll,
    // loadings
  }
};
</script>
<style scoped>
</style>
