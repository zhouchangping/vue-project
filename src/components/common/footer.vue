<template>
  <footer class="page-footer">
  </footer>
</template>
<script>
export default {
  name: "scroll-top",
  props: {
    articalItems: {
      type: Array,
      default: function() {
        return [{ title: "javascript", url: "/jsMainPage", id: 1 }];
      },
      required: true
    }
  },
  data() {
    return {
      items: this.articalItems
    };
  },
  methods: {},
  watch: {
    // 获取父组件异步props
    articalItems(nv) {
      this.items = nv;
      //console.log(this.articalItems);
    }
  },
  mounted() {
    // console.log(this.items); //
  }
};
</script>
<style scoped>
.page-footer {

}
</style>
