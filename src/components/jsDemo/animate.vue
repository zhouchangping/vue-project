<template>
  <div class="page-contain">
    <div id="block">click me</div>
    <div id="div">move</div>
  </div>
</template>
<script>
"use strict";
import animate from "@/utils/animate.js";
export default {
  data () {
    return {};
  },
  methods: {},
  created () { },
  mounted () {
    const block = document.getElementById("block");
    // var a1 = new animate.Animator(1000, function(p) {
    // var tx = 100 * p;
    //   block.style.transform = "translateX(" + tx + "px)";
    // });
    // var a2 = new animate.Animator(1000, function(p) {
    //   var ty = 100 * p;
    //   block.style.transform = "translate(100px," + ty + "px)";
    // });
    // var a3 = new animate.Animator(1000, function(p) {
    //   var tx = 100 * p;
    //   block.style.transform = "translate(" + (100 - tx) + "px," + "100px";
    // });
    // var a4 = new animate.Animator(1000, function(p) {
    //   var ty = 100 * p;
    //   block.style.transform = "translate("+"0px," + (100-ty) + "px";
    // });
    // block.addEventListener("click", function() {
    //   a1.start(function() {
    //     a2.start(function () {
    //       a3.start(function () {
    //         a4.start();
    //       });
    //     });
    //   });
    // });

    // var a1 = new animate.Animator(1414, function(p) {
    //   var ty = 200 * p * p;
    //   block.style.transform = "translateY(" + ty + "px)";
    // });
    // var a2 = new animate.Animator(1414, function(p) {
    //   var ty = 200 - 200 * p * (2 - p);
    //   block.style.transform = "translateY(" + ty + "px)";
    // });

    // block.addEventListener("click", function() {
    //   var AnimationQueue = new animate.AnimationQueue();
    //   AnimationQueue.append(a1, a2, function b() { AnimationQueue.append(a1, a2, b); });
    //   AnimationQueue.flush();
    // });

    // block.addEventListener("click", function() {
    //   var AnimationQueue = new animate.AnimationQueue();
    //     function foo() {  //  阻尼函数
    //       a2.duration *= 0.7;
    //       if (a2.duration <= 0.0001) {
    //           AnimationQueue.animators.length = 0;
    //       }
    //   }
    //   AnimationQueue.append(a1, foo, a2, function b() {
    //     a1.duration *= 0.75;
    //     AnimationQueue.append(a1, foo, a2, b);
    //   });
    //   AnimationQueue.flush();
    // });

    const domer = document.getElementById("div");
    block.addEventListener(
      "click",
      function () {
        var animates = new animate.Animates(domer);
        animates.start("left", 100, 1000, "strongEaseOut");
      },
      false
    );
  },
  components: {}
};
</script>
<style scoped>
#block {
  position: absolute;
  top: 2rem;
  left: 1rem;
  background: #32af50;
  width: 100px;
  height: 100px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  border-radius: 50px;
  line-height: 100px;
}

#div {
  position: absolute;
  top: 5rem;
  left: 1rem;
  background: #32af50;
  width: 100px;
  height: 100px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  border-radius: 50px;
  line-height: 100px;
}
</style>
