<template>
  <div class="apps container">
    <!-- 水平垂直居中-->
    <!-- <div class="center" id="box"></div> -->

    <!-- 双栏目布局-->
    <!-- <div class="wrapper wrapper-float-bfc" id="wrapper">
      <div class="left">
        左边固定宽度，高度不固定 </br> </br></br></br>高度有可能会很小，也可能很大.
      </div>
      <div class="right">
        这里的内容可能比左侧高，也可能比左侧低。宽度需要自适应。</br>
        基本的样式是，两个div相距20px, 左侧div宽 120px
      </div>
    </div> -->


    <!-- 圣杯-->
    <!-- <div class="header"></div>
    <div class="content">
      <div class="middle">
        <pop-login></pop-login>
      </div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="footer"></div> -->

    <!-- <div class="main">
      <div class="middle"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div> -->

    <!-- 双飞翼 -->
    <!-- <div class="header"></div>
    <div class="content">
      <div class="middle">
        <div class="inner-middle"></div>
      </div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="footer"></div> -->

    <div class="main">
    </div>
    <div class="left"></div>
    <div class="right"></div>


    <!-- flex-->
    <!-- <div class="header"></div>
    <div class="content">
      <div class="left"></div>
      <div class="middle"></div>
      <div class="right"></div>
    </div>
    <div class="footer"></div> -->

    <!-- <div class="container container-float">
        <div class="left"></div>
        <div class="right"></div>
        <div class="main"></div>
    </div> -->

    <!-- <div class="wrap">
      <div class="header">
      </div>
      <div class="main">
        <span style="width: 100px; height; 100px;">1</span>
      </div>
      <div class="footer">
      </div>
    </div> -->


    <!-- float clear-->
    <!-- <div class="float-box">
       <div class="float-left">
        zuo
      </div>
      <div class="float-right">
        you
      </div>
      <div class="float-after"></div>
    </div> -->


    <!--flex布局，把八个元素分两行摆放-->
    <!-- <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
    </div> -->

    <!-- css三角形-->
    <!-- <div class="triangle2">
    </div> -->


    <!-- 多出省略号-->
    <!-- <div class="text-ellipsis">
      2133432422434324dgfdfdgsgdfgdfgdfgdfsggdgdfggdgdgf
    </div>
    <div class="multiline-ellisis">
      2133432422434324dgfdfdgsgdfgdfgdfgdfsggdgdfggdgdgf2133432422434324dgfdfdgsgdfgdfgdfgdfsggdgdfggdgdgf
    </div> -->

    <!-- 1px-->
    <!-- <div class="scale-1px">
    </div> -->


    <!-- 扇形-->
    <!-- <div class="sector">
    </div>
    <div class="sector1">
    </div> -->
    <!-- <div class="pie">
      <li class="slice-1 slice"></li>
      <li class="slice-2 slice"></li>
    </div>
    <div class="semi-box">
      <div class="semi">
      </div>
    </div> -->

    <!-- word-break-->
    <p>1. <code>word-break: normal</code></p>
    <p class="normal narrow">This is a long and
    Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
    グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>

    <p>2. <code>word-break: break-all</code></p>
    <p class="breakAll narrow">This is a long and
    Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
    グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>

    <p>3. <code>word-break: keep-all</code></p>
    <p class="keepAll narrow">This is a long and
    Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
    グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>

    <p>4. <code>word-break: break-word</code></p>
    <p class="breakWord narrow">This is a long and
      Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
    グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>

    <p>They say the fishing is excellent at
      Lake <em class="normal">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
      though I've never been there myself. (<code>normal</code>)</p>
    <p>They say the fishing is excellent at
      Lake <em class="ow-anywhere">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
      though I've never been there myself. (<code>overflow-wrap: anywhere</code>)</p>
    <p>They say the fishing is excellent at
      Lake <em class="ow-break-word">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
      though I've never been there myself. (<code>overflow-wrap: break-word</code>)</p>
    <p>They say the fishing is excellent at
      Lake <em class="word-break">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
      though I've never been there myself. (<code>word-break</code>)</p>
    <p>They say the fishing is excellent at
      Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
      though I've never been there myself. (<code>hyphens</code>, without <code>lang</code> attribute)</p>
    <p lang="en">They say the fishing is excellent at
      Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
      though I've never been there myself. (<code>hyphens</code>, English rules)</p>
    <p class="hyphens" lang="de">They say the fishing is excellent at
      Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
      though I've never been there myself. (<code>hyphens</code>, German rules)</p>
  </div>
</template>
<script type="text/ecmascript-6">
// 圣杯布局是middle+padding，双飞翼采用子元素+margin，最主要的还是负边距的使用
// import popLogin from "@/components/common/popLogin.vue";
export default {
  data () {
    return {
      title: "",
      datas: [],
      footerText: "",
      num: 1,
      allDatas: [],
    };
  },
  components: {
    // "pop-login": popLogin
  },
  created() {
  },
  mounted () {
  },
  methods: {
  }
};
</script>
<style scoped>

/* 圣杯 */
/* .header {
  width: 100%;
  height: 30px;
  background: red;
}

.content {
  padding: 0 100px;
  overflow: hidden;
}

.footer {
  width: 100%;
  height: 30px;
  background: red;
}

.middle {
  position:relative;
  width: 100%;
  float: left;
  height: 200px;
  background: green;
}

.left {
  position:relative;
  width: 100px;
  float: left;
  left: -100px;
  height: 200px;
  margin-left: -100%;
  background: yellow;
}

.right1 {
  position:relative;
  width: 100px;
  float: left;
  height: 200px;
  margin-left: -100px;
  right: -100px;
  background: blue;
}

.right {
  position:relative;
  width: 100px;
  float: right;
  height: 200px;
  margin-left: -100px;
  right: -100px;
  background: blue;
} */

/* .main {
  width: 100%;
  height: 100%;
  float: left;
}
.middle {
  margin: 0 100px;
  height: 100%;
  background: blueviolet;
}
.left {
  width: 100px;
  height: 100%;
  background: red;
  float: left;
  margin-left: -100%;
}
.right {
  width: 100px;
  height: 100%;
  background: black;
  float: left;
  margin-left: -100px;
} */



/* 双飞翼 */
/*
.header {
  width: 100%;
  height: 30px;
  background: red;
}

.content {
  overflow: hidden;
}

.footer {
  width: 100%;
  height: 30px;
  background: red;
}

.middle {
  width: 100%;
  float: left;
}
.inner-middle{
  width:100%;
  height: 80px;
  background: green;
}
.left {
  width: 100px;
  float: left;
  height: 80px;
  margin-left: -100%;
  background: yellow;
}

.right {
  width: 100px;
  float: left;
  height: 80px;
  margin-left: -100px;
  background: pink
} */





/* flex */
/* .header, .footer {
  background: rgba(29, 27, 27, 0.726);
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.content {
  display: flex;
}
.middle {
  text-align: center;
  height: 300px;
  line-height: 300px;
  flex: 1;
  background: rgb(206, 201, 201);
}
.left {
  text-align: center;
  height: 300px;
  line-height: 300px;
  width: 200px;
  background: rgba(95, 179, 235, 0.972);
}
.right {
  text-align: center;
  height: 300px;
  line-height: 300px;
  width: 150px;
  background: rgb(231, 105, 2);
} */

/*flex*/
/* .wrap {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.header,.footer {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: yellow;
}
.main {
  flex: 1;
  background: black;
  overflow: auto;
  text-align: center;
} */



/* 水平垂直居中  https://juejin.cn/post/6844904127567233038#heading-1*/
/* 公共代码 */
/* *{padding: 0;margin: 0;}
.container{
    position: relative;
    width: 100vw;
    height: 100vh;
}
.center{
  width: 100px;
  height: 100px;
  background-color: #666;
} */

/* 方法1：绝对定位与负边距实现（已知高度宽度）*/
/* .container{
  position: relative;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
} */


/* 方法2：绝对定位与margin:auto（未知高度宽度）*/
/* .container{
  position: relative;
}
.center{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
} */

/* 方法3：绝对定位+CSS3(未知元素的高宽)*/
/* .container{
    position: relative;
}
.center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
} */

/* 方法4：flex布局*/
/* .container{
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
} */

/* 方法3：绝对定位+CSS3(未知元素的高宽)*/
/* .container{
    position: relative;
}
.center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
} */

/* 方法7：table 布局 - 了解即可 */
/* .container{
    width: 100vw;
    height: 100vh;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.center{
    display: inline-block;
} */



/*双栏目布局*/
/* .wrapper {
    padding: 15px 20px;
    border: 1px dashed #ff6c60;
}
.left {
    width: 120px;
    border: 5px solid #ddd;
}
.right {
    margin-left: 20px;
    border: 5px solid #ddd;
} */

/* .wrapper-inline-block {
    box-sizing: content-box;
    font-size: 0;
}
.wrapper-inline-block .left,
.wrapper-inline-block .right {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    box-sizing: border-box;
}

.wrapper-inline-block .right {
    width: calc(100% - 140px);
} */


/*双 float 方案*/
/* .wrapper-double-float {
    overflow: auto;
    box-sizing: content-box;
}

.wrapper-double-float .left,
.wrapper-double-float .right {
    float: left;
    box-sizing: border-box;
}

.wrapper-double-float .right {
    width: calc(100% - 140px);
} */


/* float+margin-left方案*/
/* .wrapper-float {
    overflow: hidden;
}

.wrapper-float .left {
    float: left;
}

.wrapper-float .right {
    margin-left: 150px;
} */

/* 使用float+BFC方法 利用了左侧浮动，但是右侧盒子通过 overflow: auto；形成了 BFC，因此右侧盒子不会与浮动的元素重叠。*/
/* .wrapper-float-bfc {
    overflow: auto;
}

.wrapper-float-bfc .left {
    float: left;
    margin-right: 20px;
}

.wrapper-float-bfc .right {
    margin-left: 0;
    overflow: auto;
} */

/* flex方案*/
/* .wrapper-flex {
  display: flex;
  align-items: flex-start;
}

.wrapper-flex .left {
    flex: 0 0 auto;
}

.wrapper-flex .right {
    flex: 1 1 auto;
} */



/* *{padding: 0;margin: 0;}
.left{
    width: 100px;
    height: 200px;
    background-color: red;
}
.right{
    width: 200px;
    height: 200px;
    background-color: blue;
}
.main{
    height: 200px;
    background-color: green;
}

.container-float{
    overflow: auto;
}
.container-float .left{
    float: left;
}
.container-float .right{
    float: right;
}
.container-float .main{
    margin-left: 120px;
    margin-right: 220px;
} */



/* float clear*/
/* .float-box {
  border: 2px solid black;
} */
/* .float-left {
  width: 200px;
  height: 200px;
  float: left;
  background: yellow;
}

.float-right {
  width: 200px;
  height: 200px;
  float: right;
  background: red;
} */

/* .float-after::after {
  display: block;
  clear: both;
  content: "";
} */

/* .float-after {
  clear: both;
  height: 0;
  overflow: hidden;
} */


/* flex布局，把八个元素分两行摆放*/
/* .parent {
  width: 100%;
  height: 150px;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
}

.parent .child {
  box-sizing: border-box;
  background-color: white;
  flex: 0 0 25%;
  height: 50px;
  border: 1px solid red;
} */



/* .triangle2 {
  width: 0;
  height: 0;
  border-width: 40px 25px 0 25px;
  border-style: solid;
  border-color: red transparent transparent transparent;
} */


/* 多出来省略号*/
/* .text-ellipsis {
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.multiline-ellisis {
  width: 100px;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
} */



/* 1px */
/* .scale-1px{ position: relative; border:none; }
.scale-1px:after {
  content: '';
  position: absolute; bottom: 0;
  background: #000;
  width: 100%;
  height: 1px;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
} */

/* 扇形*/
/* .sector {
  border-radius: 0 0 0 200px;
  width: 200px;
  height: 200px;
  background: yellowgreen;
}

.sector1 {
  width: 0;
  height: 0;
  border-width: 100px;
  border-style: solid;
  border-color: transparent transparent red;
 border-radius: 100px;
}

.pie {
  position: relative;
  margin: 1em auto;
  padding: 0;
  width: 32em;
  height: 32em;
  border-radius: 100%;
  list-style: none;
  overflow: hidden;
  transform: rotate(0deg)
}
.slice {
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  transform-origin: 0% 100%;
}
.slice-1 {
  transform: rotate(-36deg) skewY(-54deg);
  background: #FF0088;
}
.slice-2 {
  transform: rotate(-72deg) skewY(-54deg);
  background: #FF0088;
} */


/* 半圆*/
/* .semi-circle {
  width: 100px;
  height: 50px;
  background-color: red;
  border-radius: 50px 50px 0 0;
} */

/* .semi-circle-bottom {
  width: 100px;
  height: 50px;
  margin-top: 50px;
  background-color: red;
  border-radius: 0 0 50px 50px;
}

.semi-box {
  position: relative;
  overflow: hidden;
  margin: 1em auto;
  padding: 0;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  list-style: none;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.semi {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  background: yellow;
} */

/* word-break*/
.narrow {
  padding: 10px;
  border: 1px solid;
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keepAll {
  word-break: keep-all;
}

.breakWord {
  word-break: break-word;
}


p {
   width: 13em;
   margin: 2px;
   background: gold;
}

.ow-anywhere {
   overflow-wrap: anywhere;
}

.ow-break-word {
   overflow-wrap: break-word;
}

.word-break {
   word-break: break-all;
}

.hyphens {
   hyphens: auto;
}
</style>

