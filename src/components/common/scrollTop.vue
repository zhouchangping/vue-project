 <template>
  <div class="el-go-back " v-show="isShowTop" @click="smoothScroll">
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
    },
    isShow: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isShowTop: this.isShow // data中isshow和props不能同时使用到v-show
    };
  },
  methods: {
    smoothScroll() {
      let self = this;
      self.$emit("goTopMove", true);
    },
    mainScrollToTop() {
      let self = this;
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 100) {
        self.isShowTop = true;
      } else {
        self.isShowTop = false;
      }
    }
  },
  mounted() {
    let self = this;
    window.addEventListener("scroll", self.mainScrollToTop, true); // 必须在内部main不能定位 如：position: absolute,
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
