<template>
  <!-- <div id="appVue" v-watermask="options" 水印> -->
  <div id="appVue" class="appVue">
    <!--vue-ssr-outlet-->
    <top-nav v-bind:articalItems="articalItems" :text="text" v-on:activeText="activeText"></top-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <water-mask v-bind:inputText="inputText">
    </water-mask>
    <!--  <scroll-top v-show="isGoShow" @goToTop="mainSetGo" @goToTopMove="mainSetGoMove"></scroll-top> -->
    <footer-page v-bind:articalItems="articalItems">
    </footer-page>
    <res-info v-on:child-event="showMessageFromChild" v-show="isChildShow"></res-info>
  </div>
</template>

<script>
// import scrollTop from './components/common/scrollTop.vue';
import topNav from "./components/common/topNav.vue";
import footer from "./components/common/footer.vue";
import resInfo from "./components/common/resInfo.vue";
// import $request from "./api/request.js";
import waterMask from "./components/common/waterMask.vue"; // 水印

import axioss from "axios";
let options = {
  text: {
    userName: "周昌平1",
    logo: "周昌平1",
    userNumber: "zhouchangping"
  },
  opacity: 0.05
};
export default {
  // 然后使用import引入，则不需要完整版的vue.esm.js，因为使用vue-loader时 *.vue文件会自动预编译template文件成js。
  data() {
    return {
      text: "1111",
      user: {
        lastName: "Zhang",
        firstName: "yue"
      },
      isChildShow: this.$store.state.isChildShow, // 获取store中info, // total
      isGoShow: false, // 回到顶部,
      // age: 8,
      articalItems: [
        { title: "javascript", url: "/jsMainPage", id: 1 },
        { title: "html", url: "/htmlMainPage", id: 2 },
        { title: "css", url: "/cssMainPage", id: 3 },
        { title: "面试集合", url: "/faceMainPage", id: 4 },
        { title: "node", url: "/nodeMainPage", id: 5 }
      ],
      inputText: "周昌平 2019-05-06",
      options
    };
  },
  created() {
    // console.log(this.fileds);
    this.text = "222";
    // let that = this;
    //在页面加载时读取sessionStorage里的状态信息,保存
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener(
      "beforeunload",
      () => {
        sessionStorage.setItem("store", JSON.stringify(this.$store.state));
      },
      false
    );

    // $request.post("/api").then((res)=> { //
    //   console.log(res);
    // }).catch((err) => {
    //   alert(err);
    // });

    // this.$ajax.post("/api/user").then(res => {
    //   console.log("mock请求发送");
    //   console.log(res);
    //   // 将一个JSON 字符串转换为对象。
    //   // that.articalItems = JSON.parse(res.request.responseText); // https://www.html.cn/archives/8735; JSON.stringify()
    // }).catch(function (error) {
    //   console.log(error);
    // });
    // axioss.defaults.withCredentials = true; // 表示跨域请求时是否需要使用凭证  开通需要服务器做配合，开通后才能存cookies到application
    // axioss.request({
    //   // `url` 是用于请求的服务器 URL
    //   url: "/",
    //   baseURL: "http://localhost:3000/",
    //   // headers: {"token": "XMLHttpRequest"},
    //   // `method` 是创建请求时使用的方法
    //   method: "get", // 复杂请求会出发option请求
    //   // withCredentials: true, // default
    // }).then(function(response) {
    //   // console.log(response.data);
    //   console.log(response.status);
    //   console.log(document.cookie); // 后端设置为httpOnly false可以打印，否则无法打印
    //   // console.log(response.statusText);
    //   // console.log(response.headers);
    //   // console.log(response.config);
    // });
    console.log("app vue created");
  },
  mounted() {
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
    console.log("app vue mounted");
  },
  activited() {
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
    showMessageFromChild: function(data) {
      if (!data) {
        this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
      }
    },
    mainSetGo(info) {
      this.isGoShow = info;
    },
    mainSetGoMove() {},
    activeText() {
      console.log(2313);
      this.text = 1231;
    }
  },
  components: {
    "top-nav": topNav,
    // 'scroll-top': scrollTop,
    "footer-page": footer,
    "res-info": resInfo,
    waterMask
  }
};
</script>
<style scoped>
</style>

