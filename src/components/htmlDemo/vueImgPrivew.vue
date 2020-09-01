<template>
  <div>
    <div class="left">
      <div class="leftImg">
        <img :src="imgSrc">
      </div>
      <viewer :images="images" style="position: absolute; bottom: 20px; left: 0; padding-top: 200px;">
        <img v-for="item in images" :src="item.src" :key="item.index" height="120" @click="fnClick(item)">
    </viewer>
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3272199364,3404297250&fm=26&gp=0.jpg",
      images:[
        {src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3272199364,3404297250&fm=26&gp=0.jpg",index:1},
        {src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3267295166,2381808815&fm=26&gp=0.jpg",index:2},
        {src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3429654663,2972188411&fm=26&gp=0.jpg",index:3},
        {src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597323878,2962972725&fm=26&gp=0.jpg",index:4},
      ]
    };
  },
  methods: {
    fnClick(item) {
      this.imgSrc = item.src;
    }
  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "canvas图形基础"); // 该方法比较靠谱
    this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
  },
  mounted() {
  },
  components: {}
};
</script>
<style scoped>
.left {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 800px;
  height: 700px;
  padding: 10px;
}

.left img {
  display: inline-block;
}

.left .leftImg {
  width:100%;
  height: 600px;
  margin: 0 auto;
  text-align: center;
}

.leftImg img {
  text-align: center;
}


.right {
  display: inline-block;
  vertical-align: top;
  width: 500px;
  height: 500px;
  background: yellow;
}
</style>
