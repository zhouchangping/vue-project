<template>
  <scroll>
    <div class="page-better" ref="page-better">
      <div
        class="page-main"
        v-for="item in dataArtical"
        v-on:click="goToDetail(item.url)"
        :key="item.id"
      >
        <h1 class="page-titile">{{ item.pageTitle }}</h1>
        <div class="page-user-info">
          <p class="page-p">
            <img v-lazy="avatar" class="page-user-img" alt="图片缺失" />
            <span class="page-username">{{ item.userName }}</span>
          </p>
          <p class="page-p">
            <span class="page-user-time">{{ item.pageTime }}</span>
          </p>
        </div>
        <div class="page-artical-msg">
          <P>{{ item.pageInfo }}</P>
        </div>
      </div>
      <div class="page-info">
        <span>@2019 周昌平</span
        ><span @click="goToOther" style="color: #999; margin-left: 10px"
          >粤ICP备19083130号 粤ICP备19083130号-1</span
        >
      </div>
    </div>
    <top-nav v-bind:articalItems="articalItems" :text="title"></top-nav>
    <back-top></back-top>
    <!-- <loadings :isShow="isShowLoading"></loadings> -->
  </scroll>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import topNav from "@/components/common/topNav.vue";
import backTop from "@/components/common/scrollTop.vue";
import { mapGetters, mapState } from "vuex";
// import { mapMutations } from "vuex";
import scroll from "../common/scroll.vue";
// import loadings from "@/components/common/loading.vue";
export default {
  data () {
    return {
      title: "蜗牛也有春天",
      articalItems: [
        { title: "javascript", url: "/jsMainPage", id: 1 },
        { title: "html", url: "/htmlMainPage", id: 2 },
        { title: "css", url: "/cssMainPage", id: 3 },
        { title: "面试集合", url: "/faceMainPage", id: 4 },
        { title: "node", url: "/nodeMainPage", id: 5 },
      ],
      // isShowLoading: true,
      // isLoading: true,
      isActive: false,
      timer: false,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: [
        {
          pageTitle: "学习链接",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "书签链接",
          pageTime: "2019-01-24",
          url: "urlTool",
          id: 1,
        },
        {
          pageTitle: "Vue.js 运行机制全局概览",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "这一节笔者将为大家介绍一下 Vue.js 内部的整个流程，希望能让大家对全局有一个整体的印象，然后我们再来逐个模块进行讲解。从来没有了解过 Vue.js 实现的同学可能会对一些内容感到疑惑，这是很正常的，这一节的目的主要是为了让大家对整个流程有一个大概的认识，算是一个概览预备的过程，当把整本小册认真读完以后，再来阅读这一节，相信会有收获的。",
          pageTime: "2019-01-24",
          url: "vueJsDemo",
          id: 2,
        },
        {
          pageTitle: "图片自适应居中滑动",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "该功能主要处理不同大小图片适应屏幕尺寸，居中显示。",
          pageTime: "2019-01-25",
          url: "moveBanner",
          id: 3,
        },
        {
          pageTitle: "十大算法",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "前端中的十大排序算法,参考掘金 https://juejin.im/post/57dcd394a22b9d00610c5ec8",
          pageTime: "2019-03-23",
          url: "shuanFa",
        },
        {
          pageTitle: "设计模式",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "前端设计模式,参考https://www.yuque.com/robinson/design-patterns/uqfm2o",
          pageTime: "2019-03-24",
          url: "designPatterns",
          id: 4,
        },
        {
          pageTitle: "数据结构",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "前端数据结构,前端你应该了解的数据结构与算法https://juejin.im/post/5b331bc7f265da598451fd88",
          pageTime: "2019-10-18",
          url: "algorithm",
          id: 5,
        },
        {
          pageTitle: "手写promise",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "手写promise,参考:https://juejin.im/post/5b6e5cbf51882519ad61b67e",
          pageTime: "2019-03-27",
          url: "promise",
          id: 6,
        },
        {
          pageTitle: "飞机大战",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "微信飞机大战小游戏",
          pageTime: "2019-04-26",
          url: "aircraftWar",
          id: 7,
        },
        {
          pageTitle: "template模版语法实现",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "template模版语法实现",
          pageTime: "2019-04-30",
          url: "template",
          id: 8,
        },
        {
          pageTitle: "web安全揭秘",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "web安全揭秘，几大安全策略",
          pageTime: "2019-05-15",
          url: "webSafety",
          id: 9,
        },
        {
          pageTitle: "h5vue手势密码",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "h5vue手势密码",
          pageTime: "2019-11-05",
          url: "h5Lock",
          id: 10,
        },
        {
          pageTitle: "scrollTop",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "scrollTop",
          pageTime: "2020-06-30",
          url: "scrollTop",
          id: 11,
        },
        {
          pageTitle: "canvas",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "canvas",
          pageTime: "2020-06-30",
          url: "canvas",
          id: 12,
        },
        {
          pageTitle: "betterScroll",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "betterScroll",
          pageTime: "2020-06-30",
          url: "betterScroll",
          id: 13,
        },
        {
          pageTitle: "wxTool",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "wxTool",
          pageTime: "2020-09-22",
          url: "wxTool",
          id: 14,
        },
        {
          pageTitle: "图片上传页面",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "图片上传页面",
          pageTime: "2020-11-24",
          url: "updateImage",
          id: 15,
        },
      ],
    };
  },
  methods: {
    mainTransition () {
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    },
    goToDetail (val) {
      this.$router.push({ name: val });
    },
    // ...mapMutations([
    //   // 参数自动带上@click="set_titiles"
    //   "SET_TITLES" // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    //   // `mapMutations` 也支持载荷：
    //   //"SET_TOKEN" // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    // ]),
    goToOther () {
      window.location.href = "http://www.beian.miit.gov.cn";
    },
  },
  activated () {
    //console.log(this.scroll);
    //console.log("activated +");
    // keep-alive 组件激活时调用。
    // this.$store.commit("SET_TITLES", "蜗牛也有春天"); // 该方法比较靠谱
    // this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
  },
  created () { },
  mounted () {
    // let that = this;
    // that.isLoading = false;
    // setTimeout(()=> {
    //   that.isShowLoading = false;
    // }, 2000);
  },
  computed: {
    ...mapState({
      isChildShow: (state) => state.isChildShow,
    }),
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(["resInfo", "token"]),
  },
  components: {
    "top-nav": topNav,
    scroll: scroll,
    backTop,
    // loadings,
  },
};
</script>
<style scoped>
@import "../../common/css/vueLi.styl";
.page-info {
  margin: 0 auto 20px auto;
  font-size: 12px;
  color: #b1b1b1;
  text-align: center;
}

.page-info a {
  color: #000;
  text-decoration: none;
}
</style>
