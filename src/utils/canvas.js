export default class DraDemo {
  constructor(options) {
    this.initOptions(options);
  }
  initOptions(options) {
    this.el = options.el;
    this.startDeg = options.startDeg || 1.5;
    this.endDeg = options.endDeg || 3.5;
    this.leftOrRight = options.leftOrRight || "left";
    this.sliderWidth = options.sliderWidth || 8;
    this.sliderColor = "#ffffff";
    this.color = ["#CA3EFF", "#003CFF"];
    this.value = 0;
    this.outLineWidth = options.outLineWidth || 15;
    this.width = options.width || options.el.offsetWidth;
    this.height = options.height || options.el.offsetHeigth;
    this.center = this.width / 2;
    this.radius = this.width / 3.12;
    this.isDown = false;
    this.counterclockwise = options.counterclockwise || false;
    this.isMobile = /Android|webOs|iPhone|iPod/i.test(navigator.userAgent);
    this.change = options.change || function change(v) {
      console.log(v);
    };
    this.initCavas(this.el);
    this.initEvent(this.el);
    this.initDraw(this.value);
  }
  initCavas(el) {
    this.canvas = document.createElement("canvas");
    this.canvas.setAttribute("id", "dragCavas");
    this.canvas.setAttribute("width", this.width);
    this.canvas.setAttribute("height", this.height);
    el.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
  }
  initEvent(el) {
    if (this.isMobile) {
      el.addEventListener("touchstart", this.mouseDown.bind(this), false);
      el.addEventListener("touchmove", this.throttle(this.mouseMove.bind(this)), false);
      el.addEventListener("touchend", this.mouseMove.bind(this), false);
    } else {
      el.addEventListener("mousedown", this.mouseDown.bind(this), false);
      el.addEventListener("mousemove", this.throttle(this.mouseDown.bind(this)), false);
      el.addEventListener("mouseup", this.mouseUp.bind(this), false);
    }
  }
  initDraw(value) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    // this.ctx.save(); // ----
    const startDeg = this.counterclockwise ? Math.PI * (2 - this.startDeg) : Math.PI * this.startDeg;
    const themeColor = typeof this.color === "string" ? this.color : this.setLinearGradient();


    // 绘制外圆
    this.ctx.beginPath();
    this.ctx.arc(this.center, this.center, this.radius+ 20, 0, Math.PI*2, true); // 绘制
    this.ctx.strokeStyle = "orange";
    this.ctx.lineWidth = 30;
    this.ctx.lineCap = "round";
    this.ctx.stroke();

    const deg = this.valToDeg(value);
    this.P = this.degToXY(deg);
    this.ctx.beginPath();
    // 绘制可变弧度
    this.ctx.arc(this.center, this.center, this.radius, startDeg, deg, false); // 绘制
    this.ctx.strokeStyle = themeColor;
    this.ctx.lineWidth = this.outLineWidth;
    this.ctx.lineCap = "round";
    this.ctx.stroke();


    // 绘制固定滑块按钮
    this.inP = this.degToXY(this.valToDeg(0));
    this.ctx.moveTo(this.center, this.center);
    this.ctx.beginPath();
    this.ctx.arc(this.inP.x, this.inP.y, this.sliderWidth + 5, 0, Math.PI*2, false);
    this.ctx.fillStyle = "#003cff";
    this.ctx.fill();

    // 白色固定部分
    this.ctx.beginPath();
    this.ctx.arc(this.inP.x, this.inP.y, this.sliderWidth, 0, Math.PI*2, false);
    this.ctx.fillStyle = this.sliderColor;
    this.ctx.fill();


    // this.ctx.moveTo(this.P.x, this.P.y);
    // 滑动圆
    this.ctx.beginPath();
    this.ctx.arc(this.P.x, this.P.y, this.sliderWidth + 10, 0, Math.PI*2, false);
    this.ctx.fillStyle = "red";
    this.ctx.fill();

  }
  setLinearGradient() {
    const grad = this.ctx.createLinearGradient(0, 0, 0, this.width);
    this.color.forEach((e, i)=> {
      if (i === 0) {
        grad.addColorStop(0, e);
      } else {
        grad.addColorStop(1 / this.color.length*(i+1), e);
      }
    });
    return grad;
  }
  mouseMove(ev) {
    if (!this.isDown) {
      return;
    }
    const evpoint = {};
    evpoint.x = this.getX(ev);
    evpoint.y = this.getY(ev);
    console.log(evpoint);
    const point = this.spotchangeXY(evpoint);
    let deg = this.XYToDeg(point.x, point.y);
    deg = this.counterclockwise ? deg : Math.PI * 2 - deg;
    let val = ( deg / Math.PI - this.startDeg) / (this.endDeg - this.startDeg) * 120;
    if (val < 0) val = 120 + val;
    if (val >=120) val = 120;
    if (val <= 0) val = 0;
    if (Math.abs(val - this.value)> 10) return;
    console.log(val+ "-----");
    this.animate = requestAnimationFrame(this.initDraw.bind(this, val));
    if (this.value !== Math.round(val)) {
      this.value = Math.round(val);
      this.change(this.value);
    }
  }
  mouseDown(ev) {
    const range = 10;
    const X = this.getX(ev);
    const Y = this.getY(ev);
    const P = this.P;
    const minX = P.x - this.sliderWidth - range;
    const maxX = P.x + this.sliderWidth + range;
    const minY = P.y - this.sliderWidth - range;
    const maxY = P.y + this.sliderWidth + range;
    if (minX < X && X < maxX && minY < Y && Y < maxY) {
      this.isDown = true;
    } else {
      this.isDown = false;
    }
  }
  mouseUp() {
    const self = this;
    cancelAnimationFrame(self.animate);
    this.isDown = false;
  }
  getX(e) {
    console.log(e);
    if (!this.isMobile) return e.clientX - this.el.getBoundingClientRect().left;
    return e.changedTouches[0].pageX - this.el.getBoundingClientRect().left;
  }
  getY(e) {
    if (!this.isMobile) return e.clientY - this.el.getBoundingClientRect().top;
    return e.changedTouches[0].pageY - this.el.getBoundingClientRect().top;
  }
  // 值对应弧度
  valToDeg(value) {
    const range = this.endDeg - this.startDeg;
    let val = range / 120 * value;
    if (this.counterclockwise && (val !== 0)) {
      val =  2- val;
    } else {
      const startDeg = this.counterclockwise ? (2 - this.startDeg) : this.startDeg;
      return (startDeg + val) * Math.PI;
    }
  }
  // 弧度转对应坐标值
  degToXY(deg) {
    const d = 2 * Math.PI - deg;
    return this.respotchangeXY({
      x: this.radius*Math.cos(d),
      y: this.radius*Math.sin(d)
    });
  }
  // 坐标转化为弧度
  XYToDeg(lx, ly) {
    const adeg = Math.atan(ly/lx);
    let deg;
    if (lx >= 0 && ly >= 0) {
      deg = adeg;
    }
    if (lx <= 0 && ly >= 0) {
      deg = adeg + Math.PI;
    }
    if (lx <= 0 && ly <= 0) {
      deg = adeg + Math.PI;
    }
    if (lx > 0 && ly < 0) {
      deg = adeg + Math.PI *2;
    }
    return deg;
  }
  // canvas坐标转中心坐标
  spotchangeXY(point) {
    const spotchangeX = i => i - this.center;
    const spotchangeY = i => this.center -i;
    return {
      x: spotchangeX(point.x),
      y: spotchangeY(point.y)
    };
  }
  // 中心坐标转canvas坐标
  respotchangeXY(point) {
    const spotchangeX = i => i + this.center;
    const spotchangeY = i => this.center -i;
    return {
      x: spotchangeX(point.x),
      y: spotchangeY(point.y)
    };
  }
  throttle(func) {
    let previous = 0;
    return function () {
      const now = new Date();
      const context = this;
      const args = arguments;
      if (now - previous > 10) {
        func.apply(context, args);
        previous = now;
      }
    };
  }
}
