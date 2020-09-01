<template>
  <div class="page-top" id="page-top">
    <div class="page-top-btn" v-bind:class="[isActive ? 'btn-rotate-true' : '']" v-on:click.stop.prevent="mainTransition($event)">
      <div>
        <span class="el-btn-bar"></span>
        <span class="el-btn-bar"></span>
      </div>
    </div>
    <div class="main-icon" @click="goToMain">
      <i class="iconfont icon-zhuyedianji-copy"></i>
    </div>
    <div class="top-title">{{title}}</div>
    <transition name="fadeMask">
      <div class="main-mask" v-show="isMaskShow" @click.stop.prevent="closeMask"></div>
    </transition>
    <transition name="fade">
      <div class="main-ul" v-show="isUl" v-if="Items.length">
        <ul>
          <li v-for="item in Items" @click.stop.prevent="closeMask" :key="item.id" class="page-li">
            <router-link :to="{path: item.url}" class="page-a">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    articalItems: {
      type: Array,
      default: function () {
        return [{ title: "javascript", url: "/jsMainPage", id: 1 }];
      },
      required: true,
    },
    text: {
      type: String,
      default: "hha",
    }
  },
  data() {
    return {
      // texts: this.text,
      isActive: false,
      isUl: false, // 栏目下拉
      isMaskShow: false,
      Items: this.articalItems // 异步传递过来后不会再次赋值给items;
    };
  },
  methods: {
    mainTransition() {
      this.isMaskShow = !this.isMaskShow;
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
      // this.$emit("activeText");
    },
    closeMask(e) {
      e.stopPropagation();
      this.isMaskShow = !this.isMaskShow;
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    },
    pageUrl(item, index) {
      var indexNum = index + 1;
      this.$router.push({
        path: "/mainPage" + indexNum,
        query: { plan: "private" }
      });
    },
    goToMain() {
      this.$router.push({ path: "/jsMainPage" });
    }
  },
  computed: {
    // 扩展，获取标题
    ...mapGetters([
      // 相当于
      "title"
    ]),
    texts() {
      console.log(this.text);
      return this.text;
    }
  },
  watch: {  // 获取父组件异步props
    articalItems(nv){
      this.Items = nv;
      //console.log(this.articalItems);
    },
    // text(val) { // 如果父组件creted设置过， 后面mounted又设置了，也会监听到。
    //   console.log("watch" + this.text);
    //   this.text = val;
    // }
  },
  created() {
    // this.text = 343434; // 避免内部直接修改props ,使用data,computed代替
    // console.log(this.text + "created");
    console.log("top vue created");
  },
  mounted() {
    // this.text = this.text + "23232";
    // console.log(this.text + "mounted");
    console.log("top vue mounted");
  }
};
</script>
<style scoped>
:root {
  --mainColor: red;
  --fontSize: 14px;
  --bodyCommon: {
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: PingFang SC, Helvetica Neue, Helvetica, Hiragino Sans GB,
      Microsoft YaHei, 微软雅黑, Arial, sans-serif;
  }
}

ul {
  max-height: 8rem;
  overflow: scroll;
  font-size: var(--fontSize);
  padding: 0 0.5rem 0.5rem;
}

.page-li {
  position: relative;
}

.page-li:after {
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  height: 0.026667rem;
  width: 100%;
  background-color: #eaeaea;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}

.page-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  box-sizing: border-box;
  height: 1.6rem;
  background-color: #fff;
  text-align: center;
  line-height: 1.6rem;
  z-index: 3;
  box-shadow: 0 0.053333rem 0.106667rem rgba(0, 0, 0, 0.1);
}

.page-top-btn {
  position: absolute;
  z-index: 2;
  left: 0.266667rem;
  height: 1.6rem;
  display: block;
}

.page-a {
  display: inline-block;
  display: block;
  width: 100%;
  line-height: 1.6rem;
  height: 100%;
}

.btn-rotate-true span:first-child {
  transform-origin: 0 0;
  width: 0.746667rem;
  transform: rotate(45deg);
}

.btn-rotate-true span:nth-child(2) {
  transform-origin: 0 0;
  width: 0.746667rem;
  transform: rotate(-45deg);
}

.page-top-btn .el-btn-bar {
  display: block;
  margin-top: 0.133333rem;
  transition: all 0.3s;
  width: 0.586667rem;
  height: 1px;
  background: #ea6f5a;
}

.page-top-btn .el-btn-bar:nth-child(2) {
  margin-top: 0.52rem;
}

.page-top-btn div {
  margin-top: 0.053333rem;
  padding: 0.266667rem;
  background: transparent;
  border: none;
}

.top-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
}

.main-ul {
  position: relative;
  top: 1.6rem;
  bottom: 1.6rem;
  z-index: 2;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100vw;
  background: #fff;
  color: #333;
  text-align: left;
  box-shadow: 0 0.053333rem 0.106667rem rgba(0, 0, 0, 0.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(0);
  opacity: 0;
}

.fadeMask-enter-active,
.fadeMask-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition: opacity 1s;
}

.fadeMask-enter,
.fadeMask-leave-to {
  transform: translateY(0);
  opacity: 0;
}

.main-mask {
  position: fixed;
  top: 1.6rem;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  background: #000;
  opacity: 0.7;
}

.main-icon {
  position: absolute;
  font-size: 0.64rem;
  width: 1.066667rem;
  right: 0.533333rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
}

a {
  text-decoration: none;
  color: #000;
}
</style>
