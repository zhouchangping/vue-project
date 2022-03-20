<template>
  <main class="page-container" ref="wrapper">
    <slot></slot>
  </main>
</template>
<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 2
    },
    /**
       * 点击列表是否派发click事件
       */
    click: {
      type: Boolean,
      default: true
    },
    /**
       * 是否开启横向滚动
       */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
       * 是否派发滚动事件
       */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
       * 是否派发列表滚动开始的事件
       */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
       * 当数据更新后，刷新scroll的延时。
       */
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      length: 0
    };
  },
  computed: {
    maxScrollY: function () {
      return this.length * 100;
    }
  },
  mounted () {
    let that = this;
    // console.log(12313);
    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      that._initScroll();
    }, 20);
    // window.onresize = function () {
    //   console.log("refresh");
    //   // console.log(that.scroll);
    //   // that.refresh();
    //   that.$nextTick(() => {
    //     console.log(555);
    //     that.refresh();
    //   });
    // };
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        console.log(123);
        return;
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        // listenScroll : true,
        scrollY: true,
        pullUpLoad: true,
        pullDownRefresh: true,
        resizePolling: 60,
        // pullUpLoad: {
        //   threshold: 0
        // }
      });
      // console.log(this.listenScroll);
      // console.log(this.pulldown);
      // console.log(this.scroll);
      // 是否派发滚动事件
      if (this.listenScroll) {
        console.log("listenScroll");
        let me = this;
        this.scroll.on("scroll", (pos) => {
          me.$emit("scroll", pos);
        });
      }

      // 是否派发滚动到底部事件，用于上拉加载
      // if (this.pullup) {
      //   this.scroll.on("scrollEnd", () => {
      //     // 滚动到底部
      //     if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
      //       this.$emit("scrollToEnd");
      //     }
      //   });
      // }

      // this.scroll.on("pullingDown", () => {
      //   console.log("pullingDown");
      //   this.$emit("pullDown");
      //   this.$nextTick(() => {
      //     this.scroll.refresh(); // DOM 结构发生变化后，重新初始化BScroll
      //   });
      //   this.scroll.finishPullDown(); // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
      // });

      this.scroll.on("pullingUp", () => {
        this.scroll.maxScrollY = this.maxScrollY;
        // console.log(this.maxScrollY);
        this.$emit("pullUp");
        this.$nextTick(() => {
          this.scroll.refresh(); // DOM 结构发生变化后，重新初始化BScroll
        });
        this.scroll.finishPullUp(); // 上拉加载动作完成后调用此方法告诉BScroll完成一次上拉动作
      });


      // 是否派发顶部下拉事件，用于下拉刷新
      // if (this.pulldown) {
      //   console.log("pulldown");
      //   this.scroll.on("touchend", (pos) => {
      //     console.log(pos);
      //     console.log("pulldown");
      //     // 下拉动作
      //     if (pos.y > 50) {
      //       this.$emit("pulldown");
      //     }
      //   });
      // }

      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforeScroll");
        });
      }
    },
    disable () {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable();
    },
    enable () {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable();
    },
    refresh () {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh();
    },
    resize () {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.resize();
    },
    scrollTo () {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement () {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data () {
      this.length = this.data.length;
      console.log(this.length);
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  }
};
</script>

<style scoped lang="less">
</style>


