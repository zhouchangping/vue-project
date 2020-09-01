var tween = { // t已消耗时间， b原始位置，c目标位置，d持续时间
  linear: function (t, b, c, d) {
    return c * t / d + b;
  },
  easeIn: function (t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  strongEaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  strongEaseOut: function (t, b, c, d) {
    return c * (( t = t / d -1) * t * t * t * t + 1) + b;
  },
  sineaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  sineaseOut: function (t, b, c, d) {
    return c * ((t = t / d -1 ) * t * t + 1) + b;
  }
};


/**
 * 动画类
 *
 */
function Animator(duration, progress, easing) {
  this.duration = duration;
  this.progress = progress;
  this.easing = easing || function(p) { return p; };
}
Animator.prototype = {
  start: function(finished) {
    var startTime = Date.now();
    var duration = this.duration,
      self = this;
    requestAnimationFrame(function step() {
      var p = (Date.now() - startTime) / duration;
      var next = true;
      if (p < 1.0) {
        self.progress(self.easing(p), p);
      } else {
        if (typeof finished === "function") {
          next = finished() === false; // 再执行finished
        } else {
          next = finished === false;
        }
        if (!next) {
          self.progress(self.easing(1.0), 1.0);
        } else {
          startTime += duration;
          self.progress(self.easing(p), p);
        }
      }
      if (next) requestAnimationFrame(step);
    });
  }
};

/**
 * 动画队列类
 *
 */
function AnimationQueue(animators) {
  this.animators = animators || [];
}
AnimationQueue.prototype = {
  append: function() {
    var args = [].slice.call(arguments);
    this.animators.push.apply(this.animators, args);
  },
  flush: function() {
    if (this.animators.length) {
      var self = this;
      function play() {
        var animator = self.animators.shift();
        if (animator instanceof Animator) {
          animator.start(function() {
            if (self.animators.length) {
              play();
            }
          });
        } else {
          animator.apply(self); // 用self去执行function b() {},继续追加
          if (self.animators.length) {
            play();
          }
        }
      }
      play();
    }
  }
};

var Animates = function (dom) {
  this.dom = dom;
  this.startTime = 0;
  this.startPos = 0;
  this.endPos = 0;
  this.propertyName = null; // dom节点需要被改变的css属性名
  this.easing = null;
  this.duration = null;
};
Animates.prototype.start = function (propertyName, endPos, duration, easing) {
  this.startTime = +new Date(); // 动画启动时间
  this.startPos = this.dom.getBoundingClientRect()[propertyName]; // 节点初始位置
  this.propertyName = propertyName;
  this.endPos = endPos;
  this.duration = duration;
  this.easing = tween[easing]; // 缓动动画

  var self = this;
  var timeId = setInterval(function () {
    if (self.step() === false) {
      clearInterval(timeId);
    }
  }, 19);
};
Animates.prototype.step = function () {
  var t = +new Date(); // 取得当前时间
  if (t >= this.startTime + this.duration) {
    this.updata(this.endPos);
    return false;
  }
  var pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
  this.updata(pos); // 更新小球的css属性
};
Animates.prototype.updata = function (pos) {
  this.dom.style[this.propertyName] = pos + "px";
};

var Animate = {
  AnimationQueue: AnimationQueue,
  Animator: Animator,
  Animates: Animates,
};

module.exports = Animate;


