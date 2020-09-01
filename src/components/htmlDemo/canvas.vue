<template>
  <transition name="fadeMask">
    <div class="pageContainer" ref="pageContainer">
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
            <h2>canvas绘制形状</h2>
            <p>矩形：fillRect(x, y, width, height)， strokeRect(x, y, width, height)， clearRect(x, y, width, height)</p>
            <p>矩形：beginPath()， closePath()， stroke(), fill(), lineTo(x, y), moveTo(), arc(x, y, radius, startAngle,
              endAngle, anticlockwise), quadraticCurveTo(cp1x, cp1y, x, y)(二次贝塞尔曲线）rect(x, y, width, height)，
              bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)</p>
            <p>
              <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API">canvas教程链接</a>
            </p>
          </div>
          <div class="page-artical-msg">
            <canvas id="canvas" width="500" height="500"></canvas>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
//import { mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      isActive: false,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: {
        pageTitle: "canvas图形基础",
        img: require("../../common/images/avater.jpg"),
        userName: "寻找许仙",
        pageInfo: "canvas图形基础",
        pageTime: "2019-03-24"
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
    this.$store.commit("SET_TITLES", "canvas图形基础"); // 该方法比较靠谱
    this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
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

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.lineTo(120, 120);
    ctx.closePath(); // draws last line of the triangle
    ctx.stroke();
    ctx.clearRect(10, 10, 100, 100);
  },
  components: {}
};
</script>
<style scoped>
</style>
