<template>
  <scroll>
    <div class="page-better">
      <div class="pageGif">
        <ul id="ulArr">
          <li>
            <img v-bind:_src="imageItems._src" v-bind:src="imageItems.src">
          </li>
          <li>
            <img v-bind:_src="imageItems._src" v-bind:src="imageItems.src">
          </li>
          <li>
            <img v-bind:_src="imageItems._src" v-bind:src="imageItems.src">
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="containerArticle">
          <h1 style="text-align: center;">flex布局</h1>
          <div class="container_li">
            <h2 class="container_title">容器的属性</h2>
            <ul class="container_ul">
              <li>flex-direction ,主轴方向 flex-direction: row | row-reverse | column | column-reverse;</li>
              <li>flex-wrap, nowrap | wrap | wrap-reverse;</li>
              <li>flex-flow是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</li>
              <li>justify-content,属性定义了项目在主轴上的对齐方式。 flex-start | flex-end | center | space-between | space-around;</li>
              <li>align-items,属性定义项目在交叉轴上如何对齐。 align-items: flex-start | flex-end | center | baseline | stretch;</li>
              <li>align-content,属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。 flex-start | flex-end | center | space-between |
                space-around | stretch;</li>
            </ul>
          </div>
          <div class="container_li">
            <h2 class="container_title">6个属性设置在项目上</h2>
            <ul class="container_ul">
              <li>order,属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</li>
              <li>flex-shrink属性,属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小, </li>
              <li>flex-grow,属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大</li>
              <li>flex-basis,属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。</li>
              <li>flex 属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</li>
              <li>align-self
                属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</li>
            </ul>
          </div>
        </div>
        <div class="containerArticle">
          <div class="container_li">
            <h2 class="container_title">相关文章</h2>
            <ul class="container_ul">
              <li>
                <a href="https://blog.csdn.net/qq_16664643/article/details/52267562">使用Flexible实现手淘H5页面的终端适配rem自适应布局-移动端自适应必备</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <top-item :text="title"></top-item>
  </scroll>
</template>
<script>
import scroll from "../common/scroll.vue";
import topItem from "../common/topItem.vue";
export default {
  data() {
    return {
      title: "flex布局",
      imageItems: {
        _src: require("../../common/images/cssDemo/bg.gif"),
        src: require("../../common/images/cssDemo/bgThree.gif")
      }
    };
  },
  methods: {
    showImage: function() {
      var that = this;
      var oUl = document.getElementById("ulArr");
      var aImg = oUl.getElementsByTagName("img");
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      for (var i = 0; i < aImg.length; i++) {
        if (
          !aImg[i].isLoad &&
          that.getTop(aImg[i]) <
            scrollTop + document.documentElement.clientHeight
        ) {
          aImg[i].src = aImg[i].getAttribute("_src");
          aImg[i].isLoad = true;
        }
      }
    },
    getTop: function(obj) {
      var iTop = 0;
      while (obj) {
        iTop += obj.offsetTop;
        obj = obj.offsetParent;
      }
      return iTop;
    }
  },
  created() {},
  mounted() {

  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "几种常用的布局方式"); // 该方法比较靠谱
  },
  components: {
    scroll,
    topItem
  }
};
</script>
<style scoped>
/*容器的属性*/
/*
flex-direction // 主轴方向 flex-direction: row | row-reverse | column | column-reverse;
flex-wrap // nowrap | wrap | wrap-reverse;
flex-flow // 是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
justify-content // 属性定义了项目在主轴上的对齐方式。  flex-start | flex-end | center | space-between | space-around;
align-items   // 属性定义项目在交叉轴上如何对齐。 align-items: flex-start | flex-end | center | baseline | stretch;
align-content // 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。 flex-start | flex-end | center | space-between | space-around | stretch;
*/

/*以下6个属性设置在项目上。*/
/*
order // 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
flex-grow // 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
flex-shrink // 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
flex-basis // 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
flex 属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
*/
/* .pageContainer {
  position: absolute;
  top: 1.6rem;
  width: 100%;
  padding: 20px 0;
} */

.page-container #ulArr {
  display: flex;
  justify-content: center;
  /*  align-items: center;*/
  margin: 0 auto;
  padding: 0;
}

li {
  flex: 1;
  box-sizing: border-box;
  height: 100px;
  border-radius: 100%;
  list-style: none;
}

img {
  height: 100px;
  display: block;
}

.container {
  box-sizing: border-box;
  padding: 10px 20px 100px 20px;
}

.container_ul {
  padding: 0px 20px;
}

.container_ul li {
  height: auto;
  margin-top: 10px;
  list-style: square;
}
</style>
