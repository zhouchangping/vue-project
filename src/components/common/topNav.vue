<template>
  <header class="page-top">
    <div class="page-top-min">
      <div class="page-top-btn" v-bind:class="[isActive ? 'btn-rotate-true' : '']"
        v-on:click.stop.prevent="mainTransition($event)">
        <div>
          <span class="el-btn-bar"></span>
          <span class="el-btn-bar"></span>
        </div>
      </div>
      <div class="page-icon" @click="goToMain">
        <i class="iconfont icon-zhuyedianji-copy"></i>
      </div>
      <div class="page-top-title">{{title}}</div>
      <transition name="fadeMask">
        <div class="page-main-mask" v-show="isMaskShow" @click.stop.prevent="closeMask"></div>
      </transition>
      <transition name="fade">
        <div class="page-main-ul" v-show="isUl" v-if="Items.length">
          <ul calss="page-top-ul">
            <li v-for="item in Items" @click.stop.prevent="closeMask" :key="item.id" class="page-top-li">
              <router-link :to="{path: item.url}" class="page-a">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="page-top-big">
      <div class="page-main-ul" v-if="Items.length">
        <ul class="page-top-ul">
          <li v-for="item in Items" @click.stop.prevent="closeMask" :key="item.id" class="page-top-li">
            <router-link :to="{path: item.url}" class="page-a">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
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
    },
  },
  data() {
    return {
      // texts: this.text,
      isActive: false,
      isUl: false, // 栏目下拉
      isMaskShow: false,
      title: this.text,
      Items: this.articalItems, // 异步传递过来后不会再次赋值给items;
    };
  },
  methods: {
    mainTransition() {
      document.body.style.overflow = "hidden";
      // document.body.style.position = "fixed";//果然是因为加了fixed，就会自动回滚到顶部
      this.isMaskShow = !this.isMaskShow;
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    },
    closeMask(e) {
      e.stopPropagation();
      document.body.style.overflow = "auto";
      document.body.style.position = "static";

      this.isMaskShow = !this.isMaskShow;
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    },
    pageUrl(item, index) {
      var indexNum = index + 1;
      this.$router.push({
        path: "/mainPage" + indexNum,
        query: { plan: "private" },
      });
    },
    goToMain() {
      this.$router.push({ path: "/jsMainPage" });
    },
  },
  computed: {
    // 扩展，获取标题
    // ...mapGetters([
    //   // 相当于
    //   "title",
    // ]),
  },
  watch: {
    // 获取父组件异步props
    articalItems(nv) {
      this.Items = nv;
      //console.log(this.articalItems);
    },
    text(val) {
      console.log(val);
      this.title = val;
    }
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
  },
};
</script>
<style scoped lang="scss">
@import "@/common/css/base.scss"; // sass

:root {
  --mainColor: red;
  --fontSize: 14px; // 定义变量
}

.page-top {

}

.page-top-min {
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
  display: none;
  z-index: 10000;
  box-shadow: 0 0.053333rem 0.106667rem rgba(0, 0, 0, 0.1);
}

.page-top-ul {
  display: flex;
  max-height: 8rem;
  // overflow: scroll;
  font-size: var(--fontSize);
  padding: 0 10px 0 10px;
}

.page-top-li {
  position: relative;
  flex: 1;
  padding: 0px 10px;
  display: inline-block;
}

.page-top-btn {
  position: absolute;
  z-index: 2;
  left: 0.266667rem;
  height: 1.6rem;
  display: none;
}

.page-icon {
  position: absolute;
  font-size: 0.64rem;
  width: 1.066667rem;
  right: 0.533333rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  display: none;
}

.page-a {
  display: inline-block;
  color: #000;
  text-decoration: none;
  display: block;
  width: 100%;
  line-height: 1.6rem;
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

.page-top-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  display: none;
}

.page-main-ul {
  width: 100vw;
  background: #fff;
  color: #333;
  text-align: left;
  box-shadow: 0 0.053333rem 0.106667rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
}



.page-top-big {
  position: relative;
  left: 0;
  right: 0;
  width: 100vw;
  background: #fff;
  color: #333;
  text-align: left;
  display: block;
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

.page-main-mask {
  position: fixed;
  top: 1.6rem;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  background: #000;
  opacity: 0.7;
}

@media (max-width: 719px) {
  .page-top-btn {
    display: block;
  }
  .page-icon {
    display: block;
  }
  .page-top-title {
    display: block;
  }
  .page-top-min {
    display: block;
  }
  .page-main-ul {
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

  .page-top-big {
    display: none;
  }

  .page-top-li {
    font-size: 14px;
    display: block;
    padding: 0px 10px;
  }

  .page-a {
    line-height: 1.6rem;
  }

  .page-top-li:after {
    // @extend .one-px;
    @include one-px(0px);
  }
}
</style>
