import Vue from "vue";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";

import { Button, Cell, CellGroup, Image, Popup, NumberKeyboard, Field, PasswordInput, Picker, Skeleton, Lazyload, Uploader, Toast, Form, NavBar } from "vant";

function vantUse (arrs) {
  if (Object.prototype.toString.call(arrs) === "[object Array]" && arrs.length > 0) {
    arrs.forEach(element => {
      Vue.use(element);
    });
  }
}

const arrs = [
  Button, Cell, CellGroup, Image, Popup, NumberKeyboard, Field, PasswordInput, Picker, Skeleton, Lazyload, Uploader, Toast, Form, NavBar
];
vantUse(arrs);



Vue.use(Viewer);
Viewer.setDefaults({
  "inline": false,
  "button": true, //右上角按钮
  "navbar": true, //底部缩略图
  "title": true, //当前图片标题
  "toolbar": true, //底部工具栏
  "tooltip": true, //显示缩放百分比
  "movable": true, //是否可以移动
  "zoomable": true, //是否可以缩放
  "rotatable": true, //是否可旋转
  "scalable": true, //是否可翻转
  "transition": true, //使用 CSS3 过度
  "fullscreen": false, //播放时是否全屏
  "keyboard": true, //是否支持键盘
  "url": "data-source",
  ready: function (e) {
    console.log(e.type, "组件以初始化");
  },
  show: function (e) {
    console.log(e.type, "图片显示开始");
  },
  shown: function (e) {
    console.log(e.type, "图片显示结束");
  },
  hide: function (e) {
    console.log(e.type, "图片隐藏完成");
  },
  hidden: function (e) {
    console.log(e.type, "图片隐藏结束");
  },
  view: function (e) {
    console.log(e.type, "视图开始");
  },
  viewed: function (e) {
    console.log(e.type, "视图结束");
    // 索引为 1 的图片旋转20度
    if (e.detail.index === 1) {
      this.viewer.rotate(20);
    }
  },
  zoom: function (e) {
    console.log(e.type, "图片缩放开始");
  },
  zoomed: function (e) {
    console.log(e.type, "图片缩放结束");
  }
});


Vue.prototype.$toast = Toast;
let infos = null;
Vue.prototype.$loading = {
  open: config => {
    if (infos) {
      return infos;
    }
    const configs = Object.assign({
      duration: 0,
      mask: false,
    }, config);
    infos = Toast.loading(config);
  },
  close: () => {
    infos && infos.clear();
    infos = null;
  }
};
