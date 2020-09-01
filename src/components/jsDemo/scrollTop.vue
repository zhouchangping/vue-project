<template>
  <div class="page-contain" ref="container">
    <div id="contain1" ref="contain1">contain1</div>
    <div id="contain1" ref="contain2">contain2</div>
    <div id="contain1">contain3</div>
  </div>
</template>
<script>
"use strict";
export default {
  data() {
    return {};
  },
  created() {
    // window.scrollTo || window.pageYOffset
    // container scrollTop: scroll是在容器，而不是inner
    // element.scrollTop (返回数字，单位像素) || window.document.documentElement.scrollTop  || window和document没有scrollTop
    // 兼容性问题：获得整个文档scrollTop，IE是document.documentElement.scrollTop，FF/CH则是document.body.scrollTop.

    // window.scroll()，window.scrollBy()，window.scrollTo()
    // window.scroll(x,y)是让window滚动条滚动到那个x,y坐标。//x是水平坐标，y是垂直坐标。
    // window.scrollBy(-x,-y)是让window滚动条相对滚动到某个坐标，- 10即相对向左/向上滚动10像素。
    // window.scrollTo(x,y)和window.scroll(x,y)一样。
    // Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。

    // window.scrollTo() || element.scrollTop = '' 来移动

  },
  mounted() {
    // const container = this.$refs.container;
    // window.addEventListener("scroll", this.handleScroll, false);

    // 首先通过$refs获取dom元素
    let box = this.$refs.container;
    let box1 = this.$refs.contain1;
    let box2 = this.$refs.contain2;
    // 监听这个dom的scroll事件
    box.addEventListener("scroll", () => {
      console.log(box2.getBoundingClientRect().top);
      // console.log(box.getBoundingClientRect().top);
      // console.log(box.scrollHeight);
    }, false);
  },
  methods: {
    // handleScroll() {
    //   console.log(container.scrollTop);
    // }
  }
};
</script>
<style scoped>

.page-contain {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
  /* top: 60px; */
}

#contain1, #contain2, #contain3 {
  width: 100%;
  height: 100%;
  text-align: center;
  background: #eee;
  border-bottom: 2px solid red;
}
</style>


