<template>
  <div class="pageContainer" id="pageContainer">
    <div class="page-better">
      <div id="teml"></div>
    </div>
  </div>
</template>
<script>
//import { mapMutations } from "vuex";
import teml from "../../utils/template.js";
export default {
  data() {
    return {};
  },
  methods: {},
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "template"); // 该方法比较靠谱
  },
  mounted() {
    console.log("tem");
    var users = [
      { name: "Byron", url: "http://localhost:8080" },
      { name: "Casper", url: "http://localhost:8080" },
      { name: "Frank", url: "http://localhost:8080" }
    ];
    document.getElementById("teml").innerHTML = teml(users);
  },
  deactivated() {},
  components: {}
};
</script>
<style scoped>
</style>
