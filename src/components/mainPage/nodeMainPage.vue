<template>
  <scroll>
    <div class="page-better">
      <div
        class="page-main"
        v-for="item in dataArtical"
        v-on:click="goToDetail(item.url)"
        :key="item.id"
      >
        <h1 class="page-titile">{{ item.pageTitle }}</h1>
        <div class="page-user-info">
          <p class="page-p">
            <img :src="avatar" class="page-user-img" />
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
    </div>
    <top-nav v-bind:articalItems="articalItems" :text="title"></top-nav>
    <!-- <loadings :isShow="isShowLoading"></loadings> -->
  </scroll>
</template>
<script>
import scroll from "../common/scroll.vue";
import topNav from "@/components/common/topNav.vue";
// import loadings from "@/components/common/loading.vue";
export default {
  data () {
    return {
      title: "node",
      articalItems: [
        { title: "javascript", url: "/jsMainPage", id: 1 },
        { title: "html", url: "/htmlMainPage", id: 2 },
        { title: "css", url: "/cssMainPage", id: 3 },
        { title: "面试集合", url: "/faceMainPage", id: 4 },
        { title: "node", url: "/nodeMainPage", id: 5 },
      ],
      // isShowLoading: true,
      isActive: false,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: [
        {
          pageTitle: "WebSocket聊天室",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "WebSocket聊天室",
          pageTime: "2020-12-28",
          url: "ws",
          id: 1,
        },
        {
          pageTitle: "docker",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo:
            "docker链接地址：https://yeasy.gitbooks.io/docker_practice/introduction/what.html",
          pageTime: "2019-03-26",
          url: "cssModules"
        }
      ]
    };
  },
  methods: {
    mainTransition () {
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    },
    goToDetail (val) {
      this.$router.push({ name: val });
    }
  },
  activated () {
    // keep-alive 组件激活时调用。
    // this.$store.commit("SET_TITLES", "node集合"); // 该方法比较靠谱
    // this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
  },
  mounted () {
    // var that = this;
    // setTimeout(()=> {
    //   that.isShowLoading = false;
    // }, 2000);
  },
  components: {
    // "refresh-fs": refresh,
    "scroll": scroll,
    "top-nav": topNav,
    // loadings
  }
};
</script>
<style scoped>
</style>
