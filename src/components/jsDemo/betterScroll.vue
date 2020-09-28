<template>
  <scroll class="wrapper"
    :data="data"
    :pulldown="pulldown"
    :listenScroll="true"
    @pullUp="loadAjax"
    @pullDown="loadAjax">
     <ul class="page-better">
      <li v-for="item in data" :key="item.id">{{item}}</li>
    </ul>
    <scrollTop :isShow="false"></scrollTop>
    <div class="loading-wrapper"></div>
  </scroll>
</template>
<script>
import scroll from "../common/scroll.vue";
import scrollTop from "@/components/common/scrollTop.vue";
export default {
  data() {
    return {
      data: [],
      pulldown: true
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      let list = [];
      for (let i = 0; i < 10; i++) {
        let objItem = {
          id: i,
          text: "当 content 的高度不超过父容器的高度，是不能滚动的，而它一旦超过了父容器的高度，我们就可以滚动内容区了，这就是 better-scroll 的滚动原理。"
        };
        list.push(objItem);
      }
      this.data = list.concat(this.data);
    },
    loadAjax() {
      let that = this;
      // let opts = {
      //   length: that.data.length + 1
      // };
      that.$ajax.get("/user/list", {
        params: {
          length: that.data.length + 1,
          name: 1123
        },
        timeout: 1000,
      }).then(res => {
        console.log("mock请求发送");
        console.log(res);
        // let length = this.data.length;
        // let list = [];
        // for (let i = length; i < length + 5; i++) {
        //   let objItem = {
        //     id: i,
        //     text: "当 content 的高度不超过父容器的高度，是不能滚动的，而它一旦超过了父容器的高度，我们就可以滚动内容区了，这就是 better-scroll 的滚动原理。"
        //   };
        //   list.push(objItem);
        // }
        // console.log(list);
        that.data = this.data.concat(res.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  components: {
    "scroll": scroll,
    "scrollTop": scrollTop
  }
};
</script>
<style scoped>
 li {
   height: 100px;
   line-height: 20px;
   font-size: 12px;
   border-bottom: 1px solid red;
 }
</style>
