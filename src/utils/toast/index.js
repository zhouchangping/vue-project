import "./toast.css";
import Vue from "vue";

let Toast = {};
// 避免重复install，设立flag
Toast.installed = false;
Toast.install = function (Vue) {
  if (Toast.installed) return;
  Vue.prototype.$toast = {};
  Vue.prototype.$toast = (params) => {
    // console.log(params);
    // 如果页面有loading则不继续执行
    if (document.querySelector("#vue-toast-myself")) return;
    // 1、创建构造器，定义loading模板
    let ToastTip = Vue.extend({
      template: `<div id="vue-toast-myself">
     <div class="toast-myself">${params}213132323</div>
     </div>`
    });
    // 2、创建实例，挂载到文档以后的地方
    let tpl = new ToastTip().$mount().$el;
    // 3、把创建的实例添加到body中
    document.body.appendChild(tpl);
    // 阻止遮罩滑动
    document.querySelector("#vue-toast-myself").addEventListener("touchmove", function (e) {
      e.stopPropagation();
      e.preventDefault();
    });
    Toast.installed = true;
    setTimeout(()=>{
      let tpl = document.querySelector("#vue-toast-myself");
      document.body.removeChild(tpl);
    }, 2000);
  };
};

Toast.install(Vue);
