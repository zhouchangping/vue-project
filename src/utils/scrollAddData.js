/*
 *parms: innerDom 触摸元素， outerDom 外部元素
 * touches: 当前屏幕上所有触摸点的列表; targetTouches: 当前对象上所有触摸点的列表 changedTouches: 涉及当前(引发)事件的触摸点的列表
 */
var addData = function(innerDom, outerDom, self) {
  var scroll = document.querySelector(innerDom);
  var outerScroller = document.querySelector(outerDom);
  self.touchStart = 0; // 起始位置
  self.touchDis = 0; // 差值
  outerScroller.addEventListener("touchstart", function(event) {
    var touch = event.targetTouches[0];
    // 把元素放在手指所在的位置
    self.touchStart = touch.pageY;
  }, false);
  outerScroller.addEventListener("touchmove", function(event) {
    var touch = event.targetTouches[0];
    if (touch.pageY - self.touchStart > 0) {
      scroll.style.top = scroll.offsetTop + touch.pageY - self.touchStart + "px";
    }
    self.isLoading = true;
    self.touchStart = touch.pageY;
    touchDis = touch.pageY - self.touchStart;
  }, false);
  outerScroller.addEventListener("touchend", function(event) {
    self.touchStart = 0;
    var top = scroll.offsetTop;
    if (top > 70) { // 大于70 执行加载数据
      refresh(scroll, self);
    }
    if (top > 20){ // 大于20 会执行效果
      var time = setInterval(function(){
        scroll.style.top = scroll.offsetTop - 2 + "px";
        if(scroll.offsetTop <= 20) {
          self.isLoading = false;
          clearInterval(time);
        } else if(scroll.offsetTop == 100 || scroll.offsetTop == 101) { // 简化的暂停效果
          clearInterval(time);
          setTimeout(function () {
            var timeTow = setInterval(function () {
              scroll.style.top = scroll.offsetTop - 1 + "px";
              if(scroll.offsetTop <= 20) {
                self.isLoading = false;
                clearInterval(timeTow);
              }
            },1);
          },2000);
        }
      },1);
    }
  }, false);


  function refresh(scroll, self){
    // 这里是后台数据
    self.$nextTick(()=>{
      self.articals.push({});
    });
  }
};
module.exports = addData;
