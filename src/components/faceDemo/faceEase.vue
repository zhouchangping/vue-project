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
                <h2>1. css实现一个扇形,三角形</h2>
                <div class="li-shangxing"></div>
                <div class="li-shangjiaoxing"></div>
              </li>
              <li>
                <h2>2. flex布局的属性</h2>
                <p>
                  容器属性： justify-content(水平轴) align-items(交叉轴) align-content(多轴) flex-direction(主轴方向) flex-wrap(换行)
                  flex-flow(综合flex-direction，flex-wrap)
                </p>
                <p>
                  子元素属性：row(循序) flex-grow(放大) flex-shrink(缩小) flex-basis flex(综合q前三) align-self(自己)
                </p>
              </li>
              <li>
                <h2>3. 状态码</h2>
                <p>
                  100(请求接受到，继续) 200(请求成功) 301(永久重定向) 302(临时重定向) 304(本地缓存) 400(客户端请求的语法错误) 401(请求要求用户的身份认证) 403(服务器禁止访问)
                  404(找不到地址) 500(服务器错误) 502(网关) 503(由于超载或系统维护) 505(服务器不支持请求的HTTP协议的版本，无法完成处理)
                </p>
              </li>
              <li>
                <h2>4. vue生命周期</h2>
                <p>
                  beforeCreate created beforeMount mounted beforUpdate updated activated(keep-alive 组件激活时调用。)
                  deactivated(keep-alive 组件停用时调用。) beforeDestory destoryed errorCaptured
                </p>
              </li>
              <li>
                <h2>5. css3 html5新属性</h2>
                <p>
                  css3: 边框(border-radius , border-image, box-shadow) 圆角(border-top-left-radius...)
                  背景(background-iamge/size/origin/clip) 渐变(background: linear-gradient/radial-gradient) 字体
                  2d(transform: translate rotate scale skew matrix) 3d() 过度(transition:) 多栏布局(column-count) 用户界面(resize
                  box-sizing outline-offset) 图片(filter)
                </p>
                <p>
                  html5: 定位用户的位置(navigator.geolocation) 新元素(video audio source canvas aside article) 拖拽 svg input web存储
                  websql 应用缓存 webworker sse websocket
                </p>
                <p class="page-animation">
                </p>
              </li>
              <li style="width: 100%; overflow-x: scroll;">
                <h2>6. es6实现工厂模式</h2>
                <pre>
                  //User类
                  class User {
                    //构造器
                    constructor(opt) {
                      this.name = opt.name;
                      this.viewPage = opt.viewPage;
                    }

                    //静态方法
                    static getInstance(role) {
                      switch (role) {
                        case 'superAdmin':
                          return new User({ name: '超级管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据', '权限管理'] });
                          break;
                        case 'admin':
                          return new User({ name: '管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据'] });
                          break;
                        case 'user':
                          return new User({ name: '普通用户', viewPage: ['首页', '通讯录', '发现页'] });
                          break;
                        default:
                          throw new Error('参数错误, 可选参数:superAdmin、admin、user')
                      }
                    }
                  }
                  //调用
                  let superAdmin = User.getInstance('superAdmin');
                  let admin = User.getInstance('admin');
                  let normalUser = User.getInstance('user');
                </pre>
              </li>
              <li>
                <h2>7. 自适应窗口</h2>
                <p style="width: 100px; margin: 0 auto; background: #000; color:#fff; text-align: center; height: auto;">1321334234343232342342</p>
              </li>
              <li>
                <h2>8. 浅拷贝和深拷贝</h2>
                <pre><code>
                   // 浅拷贝
                  function shallowCopy(obj) {
                    if (typeof obj !== 'object') {return;} // 只拷贝对象
                    let newObj = obj instanceof Array ? [] : {};
                    for (let i in obj) {
                    // 遍历obj，并且判断是obj的属性才拷贝
                      if (obj.hasOwnProperty(i)) {
                        newObj[i] = obj[i];
                      }
                    }
                    return newObj;
                  }

                  // 深拷贝
                  function deepCopy(obj) {
                    let newObj;
                    if (typeof obj !== 'object') {return};
                    for (let i in obj) {
                      if (obj.hasOwnProperty(i)) {
                        newObj[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
                      }
                    }
                    return newObj;
                  }
                </code></pre>
              </li>
              <li>
                <h2>10. vue数组监听</h2>
                <p>Vue.js是基于Object.defineProperty对对象实现“响应式化”，而对于数组，Vue.js提供的方法是重写push、pop、shift、unshift、splice、sort、reverse这七个数组方法。需要用数组下标修改数组并实现响应式数据变化，Vue.js提供了$set()及$remove()方法。Vue.set(vm.items,
                  indexOfItem, newValue)</p>
              </li>
              <li>
                <h2>11. 清除浮动</h2>
                <p>.clearfix, clear:both,overflow:hidden</p>
                <div style="border: 1px solid red">
                  <div style="background: #000; width: 40px; height: 40px; float:left;margin-right: 2px"></div>
                  <div style="background: #000; width: 40px; height: 40px; float:left;margin-right: 2px"></div>
                  <div style="background: #000; width: 40px; height: 40px; float:left;"></div>
                  <div class="clearfix"></div>
                </div>
                <pre>
  .clearfix:after {
    visibility: hidden;
    display:block;
    content: '';
    clear: both;
    font-size: 0;
    height: 0;
  }
                </pre>
              </li>
              <li>
                <h2>12. 其中数据类型</h2>
                <p>null undefined object string boolean number Symbol objec包含数组和函数，null转为数字类型值为0,而undefined转为数字类型为
                  NaN(Not a Number)</p>
              </li>
              <li>
                <h2>13. 模拟bind</h2>
                <p>参考掘金冴羽：<a href="https://juejin.im/user/58e4b9b261ff4b006b3227f4/posts">模拟bind</a></p>
                <pre><code>
    Function.prototype.bindFunc = function (ctx) {
      let self = this;
      let args = Array.prototype.slice.call(arguments, 1)
      return function () {
        let bindArgs = Array.prototype.slice.call(arguments);
        self.apply(ctx, args.concat(bingArgs));
      }
    }
               </code> </pre>
              </li>
              <li>
                <h2>14. compose函数</h2>
                <p>五种实现compose方法<a href="https://segmentfault.com/a/1190000011447164">https://segmentfault.com/a/1190000011447164</a></p>
                <pre><code>
  利用 compose 将两个函数组合成一个函数，让代码从右向左运行，而不是由内而外运行，可读性大大提升。这便是函数组合。
  function compose() {
    let args = arguments;
    let start = arg.length -1;
    return function () {
      let i = start;
     var result = args[start].apply(this, arguments);
      while(i--) {
        result = args[i].call(this, result);
      }
      return result;
    }
  }
  var func = compose(a, b, c, d);
  func(1, 2)
                </code></pre>
              </li>
              <li>
                <h2>15. 柯里化函数</h2>
                <p>链接地址：<a href="https://juejin.im/post/58a5879e1b69e6006d1e8748">https://juejin.im/post/58a5879e1b69e6006d1e8748</a></p>
                <pre><code>
  柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。  参数复用。本质上是降低通用性，提高适用性。，等到等于fn函数参数个数
  function Curry(fn, ...args) {
   if (args.length >= fn.length) {
        fn(...args);
   }
   return function (...args2) {
    return Curry(fn, ...args, ...args2);
  }
}
                </code></pre>
              </li>
              <li>
                <h2>16. 偏函数</h2>
                <pre><code>
  偏函数，固定函数的某一个或几个参数，返回一个新的函数来接收剩下的变量参数。
function func (fn, ...args) {
  return function (...args2) {
    return fn.call(null, ...args, ...args2);
  }
}
                </code></pre>
              </li>
              <li>
                <h2>17. compose和面向切面</h2>
                <pre><code>
  需要对函数绑定两个行为 before 和 after，before执行函数多元部分（启动），after执行函数单元部分
  Function.prototype.before=function(beforefn){
      var __self=this;
      //保存原函数的引用
      return function(){
      //返回包含了原函数和新函数的"代理"函数
          beforefn.apply(this,arguments);
      //执行新函数,且保证this不被劫持,新函数接受的参数
      //也会被原封不动地传入原函数,新函数在原函数之前执行
          return __self.apply(this,arguments);
      //执行原函数并返回原函数的执行结果
      //并且保证this不被劫持
      }
  }
  Function.prototype.after=function(afterfn){
      var __self=this;
      return function(){
          var ret=__self.apply(this,arguments);
          afterfn.apply(this,arguments);
          return ret;
      }
  }

  <!-- <button id="button" tag="login">点击打开登录浮层</button> -->
  Function.prototype.after = function(afterfn) {
      var __self = this;
      return function() {
          var ret = __self.apply(this, arguments);
          afterfn.apply(this, arguments);
          return ret;
      }
  }
  var showLogin=function(){
    console.log("打开登录浮层");
  }
  var log=function(){
    console.log("上传标签为:"+this.getAttribute('tag'));
  }
  showLogin=showLogin.after(log);
  document.getElementById('button').onclick=showLogin;
                </code></pre>
              </li>
              <li>
                <h2>18. 垂直水平居中</h2>
                <p>
                  <a href="https://segmentfault.com/a/1190000006108996">垂直水平居中</a>
                </p>
              </li>
              <li>
                <h2>浏览器渲染原理</h2>
                <p><a href="http://taobaofed.org/blog/2016/04/25/performance-composite/">
                    http://taobaofed.org/blog/2016/04/25/performance-composite/</a>无线性能优化：Composite</p>
                <p><a href="https://segmentfault.com/a/1190000014520786">https://segmentfault.com/a/1190000014520786</a>
                  浏览器渲染流程&Composite（渲染层合并）简单总结</p>
                <p><a href="https://zhuanlan.zhihu.com/p/47407398">https://zhuanlan.zhihu.com/p/47407398</a> 浏览器基本工作原理</p>
              </li>
              <li>
                <h2>跨域的几种方式</h2>
                <p>参考地址：<a href="https://segmentfault.com/a/1190000011145364">https://segmentfault.com/a/1190000011145364</a></p>
                <p>
                  1、 通过jsonp跨域
                  2、 document.domain + iframe跨域
                  3、 location.hash + iframe
                  4、 window.name + iframe跨域
                  5、 postMessage跨域
                  6、 跨域资源共享（CORS）
                  7、 nginx代理跨域
                  8、 nodejs中间件代理跨域
                  9、 WebSocket协议跨域
                </p>
              </li>
              <li>
                <h2>性能监控平台</h2>
                <p>
                  平台：OneAPM，http://www.mmtrix.com
                  文章：7天打造性能监控系统
                </p>
                <p>7天打造性能监控系统: <a href="http://fex.baidu.com/blog/2014/05/build-performance-monitor-in-7-days/">http://fex.baidu.com/blog/2014/05/build-performance-monitor-in-7-days/</a></p>
                <p>2018性能优化清单: <a href="https://juejin.im/post/5a966bd16fb9a0635172a50a">https://juejin.im/post/5a966bd16fb9a0635172a50a</a></p>
                <p>三十分钟webpack性能优化: <a href="https://juejin.im/post/5b652b036fb9a04fa01d616b">https://juejin.im/post/5b652b036fb9a04fa01d616b</a></p>
                <p>简单介绍一下Progressive Web App(PWA): <a href="https://juejin.im/post/5a6c86e451882573505174e7">https://juejin.im/post/5a6c86e451882573505174e7</a></p>
                <p>workbox3: <a href="http://taobaofed.org/blog/2018/08/08/workbox3/">http://taobaofed.org/blog/2018/08/08/workbox3/</a></p>
              </li>
              <li>
                <h2>关于this</h2>
                <p>箭头参考地址：<a href="https://juejin.im/post/5aa1eb056fb9a028b77a66fd">https://juejin.im/post/5aa1eb056fb9a028b77a66fd</a></p>
              </li>
              <li>
                <h2>es6地址</h2>
                <p>es6参考地址：<a href="https://juejin.im/post/5aa1eb056fb9a028b77a66fd">https://juejin.im/post/5aa1eb056fb9a028b77a66fd</a></p>
              </li>
              <li>
                <h2>bfc ifc gfc ffc</h2>
                <p>掘金参考地址：<a href="https://juejin.im/entry/5938daf7a0bb9f006b2295db">https://juejin.im/entry/5938daf7a0bb9f006b2295db</a></p>
              </li>
              <li>
                <h2>几种布局方式 flex </h2>
                <p>
                  <img width="100%" height="50%" class="lazyload inited loaded" :src="layout">
                </p>
                <p>
                  掘金参考地址：<a href="https://juejin.im/post/599970f4518825243a78b9d5">https://juejin.im/post/599970f4518825243a78b9d5</a>
                </p>
              </li>
              <li>
                <h2>双飞翼和圣杯布局 flex </h2>
                <p>掘金参考地址：<a href="https://juejin.im/post/5a9813d6f265da237506506f">https://juejin.im/post/5a9813d6f265da237506506f</a></p>
              </li>
              <li>
                <h2>js原生</h2>
                <p>掘金参考地址：<a href="http://www.runoob.com/jsref/dom-obj-document.html">http://www.runoob.com/jsref/dom-obj-document.html</a></p>
              </li>
              <li>
                <h2>ao vo go</h2>
                <p>执行环境定义了变量或者函数有权访问的其他数据，决定了它们各自的行为。每个执行环境都有一个与之关联的变量对象（vo)，环境中定义的所有变量和函数都保存在这个对象里。</p>
                <p>全局执行环境:window对象；全局变量和函数都是window对象的属性和方法创建的。某个执行环境中的代码执行完毕后，该环境被销毁，保存在其中的函数和变量也被销毁。</p>
                <p>每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。而在函数执行后，栈将其推出，把控制权交个之前的执行环境。</p>
                <p>代码在一个环境中执行时，会创建变量对象的一个作用域链（保证对执行环境有权访问的所有变量和函数的有序访问）</p>
                <p>作用域链的前端，总是当前执行的代码所在环境的变量对象，如果这个环境是函数，则将其活动对象（ao)当做变量对象</p>
                <p>变量对象(缩写为VO)是一个与执行上下文相关的特殊对象，它存储着在上下文中声明的以下内容：变量 (var, 变量声明); 函数声明 (FunctionDeclaration, 缩写为FD) 函数的形参</p>
                <p>参考地址：<a href="https://www.cnblogs.com/TomXu/archive/2012/01/16/2309728.html">https://www.cnblogs.com/TomXu/archive/2012/01/16/2309728.html</a></p>
              </li>
              <li>
                <h2>ts</h2>
                <p>vue ts参考地址：<a href="https://juejin.im/post/5c08fea6e51d456c4c49f25f">https://juejin.im/post/5c08fea6e51d456c4c49f25f</a></p>
                <p>ts参考地址：<a href="https://ts.xcatliu.com/basics/type-of-function.html">https://ts.xcatliu.com/basics/type-of-function.html</a></p>
              </li>
              <li>
                <h2>你应该知道的requestIdleCallback</h2>
                <p>你应该知道的requestIdleCallback参考地址：<a href="https://juejin.im/post/5ad71f39f265da239f07e862">https://juejin.im/post/5ad71f39f265da239f07e862</a></p>
              </li>
              <li>
                <h2>正则快速查询表</h2>
                <p>正则快速查询表参考地址：<a href="https://www.jb51.net/shouce/jquery/regexp.html">https://www.jb51.net/shouce/jquery/regexp.html</a></p>
                <p>正则参考地址：<a href="http://javascript.ruanyifeng.com/stdlib/regexp.html">http://javascript.ruanyifeng.com/stdlib/regexp.html</a></p>
              </li>
              <li>
                <h2>浏览器多个标签页之间的通信</h2>
                <p>浏览器多个标签页之间的通信:<a href="https://juejin.im/post/5b0d0a3cf265da092767917f">https://juejin.im/post/5b0d0a3cf265da092767917f</a></p>
              </li>
              <li>
                <h2>匿名函数</h2>
                <p>正则快速查询表参考地址：<a href=" https://github.com/xitu/gold-miner/blob/master/TODO/disassembling-javascripts-iife-syntax.md">
                    https://github.com/xitu/gold-miner/blob/master/TODO/disassembling-javascripts-iife-syntax.mdl</a></p>
                <p>
                  <pre>
                    <code>
(function(){
    var a = b = 3;
    console.log(a) // 3
  })();
  console.log(a) //  undefined
  console.log(b) // 3
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

var a = 1; b =2; var foo = function () {
console.log(24) // 24
console.log(a); // 1
}
(function () {
  console.log(b); // 2
}());
                    </code>
                  </pre>
                </p>
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
      scroll: null,
      isActive: false,
      layout: require("../../common/images/js/layout.jpg"),
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: {
        pageTitle: "2018阿里面试题汇总",
        img: require("../../common/images/avater.jpg"),
        userName: "寻找许仙",
        pageTime: "2019-03-24"
      }
    };
  },
  methods: {
    mainTransition() {
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    },
    fnTest() {

    }
  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "面试经验"); // 该方法比较靠谱
    this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
    this.scroll.refresh();
  },
  mounted() {
    // let wrapper = document.querySelector('.pageContainer');
    let wrapper = this.$refs.pageContainer;
    this.scroll = new BScroll(wrapper, {
      scrollY: true,
      click: true,
      stopPropagation: true,
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



