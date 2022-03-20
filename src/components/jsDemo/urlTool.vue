<template>
 <scroll>
    <div class="page-better">
      <div class="page-main">
        <div class="page-search">
          <input
            class="page-input"
            v-model="inputModel"
            @blur="dealSearch"
            @keyup.enter="dealSearch"
          />
        </div>
        <ul class="page-ul" v-for="menuItem in demoData" :key="menuItem.id">
          <my-tree :model="menuItem"></my-tree>
        </ul>

        <van-nav-bar
          title="标题"
          left-arrow
          bind:click-left="onClickLeft"
          bind:click-right="onClickRight"
        />
        <div>123</div>
      </div>
    </div>
    <top-item :text="title"></top-item>
  </scroll>
</template>
<script>
import topItem from "../common/topItem.vue";
import scroll from "../common/scroll.vue";
import myTree from "../common/treeMenu.vue";
import testData from "./js/urls/index.js";
export default {
  data () {
    return {
      title: "书签页",
      avatar: require("../../common/images/avater.jpg"),
      inputModel: "",
      demoData: testData,
      arrP: [],
      resultSearch: [],
    };
  },
  watch: {
    // 修改查询后，清空不重置列表
    inputModel: function (newVal) {
      if (newVal.length == 0) {
        this.demoData = testData;
      }
    },
  },
  methods: {
    dealSearch () {
      let that = this;
      that.inputModel = that.inputModel.replaceAll(" ", ""); // 清空空格
      if (!that.inputModel) {
        return;
      }
      that.demoData = that.arrP.filter(function (ele) {
        // 过滤搜索到的
        return ele["menuName"].search(new RegExp(that.inputModel, "i")) !== -1; // 不区分大小写
      });
    },
    dealArray (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].children && arr[i].children.length > 0) {
          this.dealArray(arr[i].children);
        } else {
          this.arrP.push({ menuName: arr[i].menuName, url: arr[i].url });
        }
      }
    },
  },
  created () { },
  mounted () {
    this.dealArray(this.demoData); // 形成新的一维数组
    console.log(this.arrP.length);
  },
  components: {
    scroll: scroll,
    myTree,
    "top-item": topItem
  },
};
</script>
<style scoped>
.page-search .page-input {
  width: 50%;
  margin-bottom: 20px;
}
</style>
