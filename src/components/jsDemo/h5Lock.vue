<template>
  <transition name="fadeMask">
    <div class="pageContainer" ref="pageContainer">
      <div class="page-button" v-on:click="FnshowPwd">{{dataArtical.pageInfo}}</div>
      <pwd v-model="showPwd"></pwd>
    </div>
  </transition>
</template>
<script>
import BScroll from "better-scroll";
import pwd from "@/components/common/pwd.vue";
export default {
  data() {
    return {
      isActive: false,
      vueImage: require("../../common/images/js/vue.jpg"),
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: {
        pageTitle: "h5lock",
        img: require("../../common/images/avater.jpg"),
        userName: "寻找许仙",
        pageInfo: "h5lock",
        pageTime: "2019-11-05"
      },
      showPwd: false,
    };
  },
  created () {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "h5Lock"); // 该方法比较靠谱
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
  methods: {
    FnshowPwd: function () {
      this.showPwd = !this.showPwd;
    }
  },
  components: {
    pwd
  }
};
</script>

<style>
.pageContainer .mask {
  margin-top: 100px;

}
.pageContainer .page-button {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color:aquamarine;
  text-align: center;
  line-height: 100px;
  color: #000;
  margin: 100px auto 100px auto;
}
.masks {
    text-align: center;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
}
.gesturePwd{
    position: fixed;
    z-index: 5000;
    width: 100%;
    height:100%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: #666;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
    background-color: #000;
}
.gestureTitle {
    color: #87888a;
    margin-top: 85px;
    font-size: 20px;
    font-weight:normal;
}
</style>
