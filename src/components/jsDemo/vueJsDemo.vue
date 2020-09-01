<template>
  <transition name="fadeMask">
    <div class="pageContainer" ref="pageContainer">
      <div class="page-better">
        <div class="page-main">
          <h1 class="page-titile">{{dataArtical.pageTitle}}</h1>
          <div class="page-user-info">
            <p class="page-p">
              <img v-lazy="avatar" class="page-user-img">
              <span class="page-username">{{dataArtical.userName}}</span>
            </p>
            <p class="page-p">
              <span class="page-user-time">{{dataArtical.pageTime}}</span>
            </p>
          </div>
          <div class="page-artical-msg">
            <p class="page-p-img">
              <img width="100%" height="50%" class="page-vue-img" v-lazy="vueImage" alt="背景图">
            </p>
          </div>
          <div class="page-artical-msg">
            <P>{{dataArtical.pageInfo}}</P>
            <p>
              本小测连接地址：
              <a href="https://juejin.im/book/5a36661851882538e2259c0f/section/5a37bbb35188257d167a4d64#heading-3">点击连接</a>
            </p>
            <p>
              vue官网地址：
              <a href="https://cn.vuejs.org/index.html">点击连接</a>
            </p>
            <p>
              vue慕课网课程官网地址：
              <a href="https://www.imooc.com/u/index/szcourses/list">点击连接</a>
            </p>
            <p>
              vue技术内幕链接地址：
              <a href="http://hcysun.me/vue-design/art/">点击连接</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
//  import { mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      isActive: false,
      vueImage: require("../../common/images/js/vue.jpg"),
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: {
        pageTitle: "Vue.js 运行机制全局概览",
        img: require("../../common/images/avater.jpg"),
        userName: "寻找许仙",
        pageInfo:
          "这一节笔者将为大家介绍一下 Vue.js 内部的整个流程，希望能让大家对全局有一个整体的印象，然后我们再来逐个模块进行讲解。从来没有了解过 Vue.js 实现的同学可能会对一些内容感到疑惑，这是很正常的，这一节的目的主要是为了让大家对整个流程有一个大概的认识，算是一个概览预备的过程，当把整本小册认真读完以后，再来阅读这一节，相信会有收获的。",
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
  created() {
  },
  mounted() {
    let wrapper = this.$refs.pageContainer;
    this.scroll = new BScroll(wrapper, {
      scrollY: true,
      click: true,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|CODE|PRE)$/
      }
    });
  },
  components: {}
};
</script>
<style scoped>
.page-vue-img {
  margin: 0 auto;
  width: 300px;
  height: 200px;
}
</style>>

