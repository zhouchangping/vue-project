function bannerScroll(arr, self, Index) {
  this.current = 0; // 开始的img
  this.x = 375; // 默认初始参数
  this.Index = Index;
  this.init(arr, self);
  this.starTime;
  this.startPox;
  this.endPox;
  this.endTime;
  this.moveTime;
}

bannerScroll.prototype.init = function(arr, self) {
  this.move(arr, self);
  this.scroll(arr, self);
};

bannerScroll.prototype.move = function(arr, self) {
  var This = this;
  This.moveTime = setInterval(function() {
    This.current++;
    This.touchMove(arr, self);
  }, 3000);
};

bannerScroll.prototype.touchMove = function(arr, self) {
  var This = this;
  var arrLength = arr.length;
  if (Number(This.current) >= arrLength) {
    arr[This.current -1].style.transform = "translate(-375px, 0px) translateZ(0px)";
    arr[This.current -This.Index].style.transform = "translate(0px, 0px) translateZ(0px)";
    This.current = 0;
  }
  if (Number(This.current) < This.Index && Number(This.current) > 0) {
    arr[This.current -1].style.transform = "translate(-375px, 0px) translateZ(0px)";
    arr[This.current].style.transform = "translate(0px, 0px) translateZ(0px)";
  }
  if (Number(This.current) <= 0) {
    This.current = 1;
    arr[This.current -1].style.transform = "translate(-375px, 0px) translateZ(0px)";
    arr[This.current].style.transform = "translate(0px, 0px) translateZ(0px)";
  }
};

bannerScroll.prototype.scroll = function(arr, self) {
  var This = this;
  var dom = document.querySelector(".page-banner-box");
  var startTime = ""; // 开始时间
  dom.addEventListener("touchstart", function(e) {
    This.startTime = new Date().getMilliseconds();
    var event = e.targetTouches[0];
    This.startPox = event.pageX;
  });
  dom.addEventListener("touchmove", function(e) {
    var event = e.targetTouches[0];
    This.endPox = event.pageX;
  });
  dom.addEventListener("touchend", function() {
    This.endTime = new Date().getMilliseconds();
    if (This.endPox - This.startPox > 50 && This.endTime - This.startTime > 40) {
      This.current--;
      clearInterval(This.moveTime);
      This.touchMove(arr, self);
      This.move(arr, self);
    }
    if (This.startPox - This.endTime) {
      This.current++;
      clearInterval(This.moveTime);
      This.touchMove(arr, self);
      This.move(arr, self);
    }
  });
};
module.exports = bannerScroll;
