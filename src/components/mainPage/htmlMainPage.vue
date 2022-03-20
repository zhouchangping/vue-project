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
import topNav from "@/components/common/topNav.vue";
import scroll from "../common/scroll.vue";
// import loadings from "@/components/common/loading.vue";
export default {
  data () {
    return {
      title: "html",
      articalItems: [
        { title: "javascript", url: "/jsMainPage", id: 1 },
        { title: "html", url: "/htmlMainPage", id: 2 },
        { title: "css", url: "/cssMainPage", id: 3 },
        { title: "面试集合", url: "/faceMainPage", id: 4 },
        { title: "node", url: "/nodeMainPage", id: 5 },
      ],
      isShowLoading: true,
      // isLoading: true,
      scroll: null,
      // isShowContainer: false,
      isActive: false,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: [
        {
          pageTitle: "瀑布流图片功能",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "该功能主要处理图片的下拉加载，瀑布布局",
          pageTime: "2019-01-25",
          url: "pubu",
          id: 1
        },
        {
          pageTitle: "canvas基础",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "学习canvas",
          pageTime: "2019-05-7",
          url: "canvas",
          id: 2
        },
        {
          pageTitle: "vue图片预览",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "vue图片预览",
          pageTime: "2019-12-13",
          url: "vueImg",
          id: 3
        },
        {
          pageTitle: "vant",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "vant",
          pageTime: "2020-01-12",
          url: "vantPage",
          id: 4
        },
        {
          pageTitle: "imageLazy",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "imageLazy",
          pageTime: "2020-09-17",
          url: "imageLazy",
          id: 5
        },
        {
          pageTitle: "html5新功能",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "html5新功能",
          pageTime: "2020-09-17",
          url: "html5",
          id: 6
        },
        {
          pageTitle: "测试键盘弹出影响布局",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "测试键盘弹出影响布局",
          pageTime: "2021-03-31",
          url: "testCus",
          id: 7
        },
        {
          pageTitle: "圣杯布局",
          img: require("../../common/images/avater.jpg"),
          userName: "寻找许仙",
          pageInfo: "圣杯布局是middle+padding，双飞翼采用子元素+margin，最主要的还是负边距的使用",
          pageTime: "2021-03-31",
          url: "leftRight",
          id: 8
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
    // this.$store.commit("SET_TITLES", "html集合"); // 该方法比较靠谱
    // this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
    this.scroll.refresh();
  },
  mounted () {
  },
  components: {
    "top-nav": topNav,
    scroll,
    // loadings
  }
};
</script>
<style scoped>
</style>
