 <template>
  <div class="el-go-back " @click="smoothScroll">
    <i class="iconfont icon-huidaodingbu"></i>
  </div>
</template>
<script>
export default {
  name: "scroll-top",
  props: {
    toBottom: {
      type: Number,
      default: 0
    }
  },
  methods: {
    smoothScroll() {
      let self = this;
      self.$emit("goToTopMove", true);
      // let currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      //  //let currentScrollTop = document.body.scrollTop  ||  document.documentElement.scrollTop;
      //  console.log(currentScrollTop)
      //  if (currentScrollTop > 20) {
      //      document.body.scrollTop = currentScrollTop - (currentScrollTop/5);
      //      // window.scrollTo(0, currentScrollTop - (currentScrollTop/5));
      //      window.requestAnimationFrame(self.smoothScroll);
      //  } else {
      //      document.body.scrollTop = 0
      //      //window.scrollTo(0, 0);
      //  }
    },
    mainScrollToTop() {
      let self = this;
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 100) {
        self.$emit("goToTop", true);
      } else {
        self.$emit("goToTop", false);
      }
    }
  },
  mounted() {
    let self = this;
    // self.$nextTick( () => {
    //   window.addEventListener('scroll', self.mainScrollToTop, true); // 必须在内部main不能定位 position: absolute,
    // })

    // window.addEventListener('scroll', self.mainScrollToTop, true); // 必须在内部main不能定位 position: absolute,
  }
};
</script>
<style scoped>
.el-go-back {
  position: fixed;
  z-index: 1000;
  right: 0.4rem;
  bottom: 0.5rem;
  line-height: 1rem;
  color: #000;
  width: 1rem;
  height: 1rem;
  font-size: 0.32rem;
  line-height: 1rem;
  text-align: center;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 0.133333rem rgba(202, 203, 203, 0.7);
}
</style>
