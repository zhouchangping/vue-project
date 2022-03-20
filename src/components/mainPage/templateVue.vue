<template>
  <scroll>
    <div class="page-better" ref="page-better"></div>
    <top-item :text="title"></top-item>
  </scroll>
</template>
<script>
import scroll from "../common/scroll.vue";
import topItem from "../common/topItem.vue";
export default {
  data () {
    return {
    };
  },
  components: {
    scroll: scroll,
    "top-item": topItem
  }
};
</script>
<style scoped>
</style>
