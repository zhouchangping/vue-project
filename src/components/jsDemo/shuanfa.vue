<template>
  <transition name="fadeMask">
    <div class="pageContainer" ref="pageContainer">
      <div class="page-better">
        <div class="page-main">
          <h1 class="page-titile">{{dataArtical.pageTitle}}</h1>
          <div class="page-user-info">
            <p class="page-p">
              <img :src="avatar" class="page-user-img">
              <span class="page-username">{{dataArtical.userName}}</span>
            </p>
            <p class="page-p">
              <span class="page-user-time">{{dataArtical.pageTime}}</span>
            </p>
          </div>
          <div class="page-artical-msg">
            <ul class="page-artical-ul">
              <li>
                <h2>复杂度</h2>
                <img :src="img" width="100%">
              </li>
              <li>
                <h2>1. 冒泡算法</h2>
                <pre><code class="hljs undefined copyable">function bubbleSort(arr) {
      var len = arr.length;
      for (var i = 0; i &lt; len; i++) {
          for (var j = 0; j &lt; len - 1 - i; j++) {
              if (arr[j] &gt; arr[j+1]) {        //相邻元素两两对比
                  var temp = arr[j+1];        //元素交换
                  arr[j+1] = arr[j];
                  arr[j] = temp;
              }
          }
      }
      return arr;
  }
  var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
  console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]<span
    class="copy-code-btn"
  >复制代码</span></code></pre>
              </li>
              <li>
                <h2>2. 选择算法</h2>
                <pre><code class="hljs undefined copyable">function selectionSort(arr) {
      var len = arr.length;
      var minIndex, temp;
      console.time('选择排序耗时');
      for (var i = 0; i &lt; len - 1; i++) {
          minIndex = i;
          for (var j = i + 1; j &lt; len; j++) {
              if (arr[j] &lt; arr[minIndex]) {     //寻找最小的数
                  minIndex = j;                 //将最小数的索引保存
              }
          }
          temp = arr[i];
          arr[i] = arr[minIndex];
          arr[minIndex] = temp;
      }
      console.timeEnd('选择排序耗时');
      return arr;
  }
  var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
  console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]<span
    class="copy-code-btn"
  >复制代码</span></code></pre>
              </li>
              <li>
                <h2>2. 插入算法</h2>
                <pre><code class="hljs undefined copyable">function insertionSort(array) {
      if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
          console.time('插入排序耗时：');
          for (var i = 1; i &lt; array.length; i++) {
              var key = array[i];
              var j = i - 1;
              while (j &gt;= 0 &amp;&amp; array[j] &gt; key) {
                  array[j + 1] = array[j];
                  j--;
              }
              array[j + 1] = key;
          }
          console.timeEnd('插入排序耗时：');
          return array;
      } else {
          return 'array is not an Array!';
      }
  }<span
    class="copy-code-btn"
  >复制代码</span></code></pre>
              </li>
              <li>
                <h2>2. 希尔算法</h2>
                <pre><code class="hljs undefined copyable">function shellSort(arr) {
      var len = arr.length,
          temp,
          gap = 1;
      console.time('希尔排序耗时:');
      while(gap &lt; len/5) {          //动态定义间隔序列
          gap =gap*5+1;
      }
      for (gap; gap &gt; 0; gap = Math.floor(gap/5)) {
          for (var i = gap; i &lt; len; i++) {
              temp = arr[i];
              for (var j = i-gap; j &gt;= 0 &amp;&amp; arr[j] &gt; temp; j-=gap) {
                  arr[j+gap] = arr[j];
              }
              arr[j+gap] = temp;
          }
      }
      console.timeEnd('希尔排序耗时:');
      return arr;
  }
  var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
  console.log(shellSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]<span
    class="copy-code-btn"
  >复制代码</span></code></pre>
              </li>
              <li>
                <h2>原文链接</h2>
                <a href="https://juejin.im/post/57dcd394a22b9d00610c5ec8">https://juejin.im/post/57dcd394a22b9d00610c5ec8</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
//import { mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      isActive: false,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: {
        pageTitle: "十大排序算法",
        img: require("../../common/images/avater.jpg"),
        userName: "寻找许仙",
        pageTime: "2019-02-13"
      },
      img: require("../../common/images/js/sort.jpg")
    };
  },
  methods: {
    mainTransition() {
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    }
  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "排序算法"); // 该方法比较靠谱
    this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
  },
  mounted() {
    let that = this;
    let wrapper = document.querySelector(".pageContainer");
    that.scroll = new BScroll(wrapper, {
      scrollY: true,
      click: true,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|CODE|PRE)$/
      }
    });
  },
  components: {}
};
</script>
<style scoped>
</style>



