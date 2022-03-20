<template>
  <!-- <div id="appVue" v-watermask="options" 水印> -->
  <div id="appVue" class="app Vue">
    {{inputText}}
    <!-- {{text}} -->
    <!--vue-ssr-outlet-->
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <water-mask v-bind:inputText="inputText"> </water-mask> -->
    <!-- <scroll-top v-show="isGoShow" @goToTop="mainSetGo" @goToTopMove="mainSetGoMove"></scroll-top> -->
    <!-- <footer-page v-bind:articalItems="articalItems">
    </footer-page> -->
    <!-- <res-info v-on:child-event="showMessageFromChild" v-show="isChildShow"></res-info>-->
  </div>
</template>

<script>
// import scrollTop from './components/common/scrollTop.vue';
// import footer from "./components/common/footer.vue";
// import resInfo from "./components/common/resInfo.vue";
// import waterMask from "./components/common/waterMask.vue"; // 水印

// let options = {
//   text: {
//     userName: "周昌平1",
//     logo: "周昌平1",
//     userNumber: "zhouchangping",
//   },
//   opacity: 0.05,
// };
export default {
  // 然后使用import引入，则不需要完整版的vue.esm.js，因为使用vue-loader时 *.vue文件会自动预编译template文件成js。
  data () {
    return {
      // text: "1111",
      // user: {
      //   lastName: "Zhang",
      //   firstName: "yue",
      // },
      // // isChildShow: this.$store.state.isChildShow, // 获取store中info, // total
      // isGoShow: false, // 回到顶部,
      inputText: "周昌平 2019-05-06",
      // options,
    };
  },
  created () {
    // this.text = "222";
    //在页面加载时读取sessionStorage里的状态信息,保存
    // if (sessionStorage.getItem("store")) {
    //   this.$store.replaceState(
    //     Object.assign(
    //       {},
    //       this.$store.state,
    //       JSON.parse(sessionStorage.getItem("store"))
    //     )
    //   );
    // }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    // window.addEventListener(
    //   "beforeunload",
    //   () => {
    //     sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    //   },
    //   false
    // );

    console.log("app vue created");
  },
  mounted () {
    //throw new Error(123);
    //this.$throw(2351);
    //let that = this
    // setTimeout(() => {
    //   that.inputText = 'zhouzhouchangping'
    // }, 4000)
    // console.log($(".appVue").width());
    // const that = this;
    // setTimeout(()=> {
    //   console.log("setTimeout");
    //   this.text = "20000";
    // }, 2000);
    // this.text = 3333333;


    // 正则测试
    // const htmlStr = "<div class='ss'>123<img src='https://123aa'/></div>";
    // let result = htmlStr.replace(/<\s*script[^>]*[\s\S]*?<\s*\/script\s*>/gi).replace(/<\s*(\w+)(\s[^>]+?)?>/g, function (_, a) {
    //   const tags = a.toLowerCase();
    //   if (tags === "img") {
    //     const src = _.match(/src=(['"])(.*?)\1/);
    //     console.log(_)
    //     if (src) {
    //       return `<img src="${src[2]}" alt="" referrerpolicy="no-referrer">`;
    //     }
    //   }
    //   return `<${tags}>`;
    // });
    // console.log(result);

    console.log("app vue mounted");
  },
  activited () {
    console.log("activited vue");
  },
  computed: {
    // 扩展，获取标题
    // ...mapGetters([ // 相当于
    //   'isChildShow'
    // ])
  },
  methods: {
    /**
     * 关闭黑色弹出框
     */
    // showMessageFromChild: function (data) {
    //   if (!data) {
    //     this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
    //   }
    // },
    // mainSetGo (info) {
    //   this.isGoShow = info;
    // },
    // mainSetGoMove () { },
  },
  components: {
    // "scroll-top": scrollTop,
    // "footer-page": footer,
    // "res-info": resInfo,
    // waterMask,
  },
};
</script>
<style scoped>
</style>

