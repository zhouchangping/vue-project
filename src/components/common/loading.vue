 <template>
  <div class="page-loading" v-show="isShowLoading">
    <img width="100px" height="100px" :src="imgSrc" />
  </div>
</template>
<script>
export default {
  name: "loading",
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      imgSrc: require("../../../static/img/loding2.gif")
    };
  },
  methods: {},
  computed: {
    isShowLoading () {
      console.log("loading");
      return this.isShow;
    }
  },
  mounted () {
  }
};
</script>
<style scoped>
.page-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: #fff;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-loading img {
}
</style>
