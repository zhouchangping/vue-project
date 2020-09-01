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
            <P>
              1. 使用过的koa2中间件
              koa-swig koa-router koa-static koa-simple-router
            </P>
            <p>
              2. koa-body原理
            </p>
            <P>
              3. 介绍自己写过的中间件
              专门处理htmlplugin的中间件，在插件文件混入到index.html的过程中，处理，获取部分内容
            </p>
            <p>
              4. cluster（https://juejin.im/post/5b178f535188257d5902fdfa）
              cluster借助child_process模块的fork()方法来创建子进程，通过fork方式创建的子进程与父进程之间建立了IPC通道，支持双向通信。子进程数与cpu核数相一致。cluster实现负载均衡
              mater进程分发，
            </p>
            <p>
              5. 在建立ipc之前父子进程如何通信
              Node.js 在启动子进程的时候，主进程先建立 IPC 频道，然后将 IPC 频道的 fd (文件描述符) 通过 process.env
              环境变量（NODE_CHANNEL_FD）的方式传递给子进程，然后子进程通过 fd 连上 IPC 与父进程建立连接。
            </p>
            <p>
              6. 介绍pm2
              内建负载均衡（使用Node cluster 集群模块、子进程，可以参考朴灵的《深入浅出node.js》一书第九章）
              线程守护，keep alive
              0秒停机重载，维护升级的时候不需要停机.
              现在 Linux (stable) & MacOSx (stable) & Windows (stable).多平台支持
              停止不稳定的进程（避免无限循环）
              控制台检测
              提供 HTTP API
              远程控制和实时的接口API ( Nodejs 模块,允许和PM2进程管理器交互 )
              pm2是一个保存在后台的进程，一个守护进程，负责处理您所有正在运行的进程。
              pm2 start app.js
              该应用在pm2的进程列表中注册
              该应用在后台启动
            </p>
            <p>
              7. 如何和MySQL进行通信
              ?...
            </p>
            <p>
              8. React生命周期及自己的理解
              装载组件触发
              componentWillMount 调用setState
              componentWillDidMount 在装载完成（render之后调用）ReactDom.findDOMNode(this);获得组件的DOM节点
              更新组件时触发
              componentWillReceiveProps
              sholuldComponentUpdate
              componentWillUpdate
              componentDidUpdate
              卸载组件时触发
              componentWillUnmount
            </p>
            <p>
              9. 如何配置React-Router
              react-router-reduce
              react-router-dom
              react-router
              npm install react-router-dom --save
            </p>
            <p>
              10. 服务端渲染SSR
              借助node实现服务器直出，做性能监控，配合webpack gulp处理服务器端代码 koa router koa-fetch log4 jsDOC
            </p>
            <p>
              11. hash和history两种模式的区别
              window.history window.document window.location
              location.hash location.href location.port location.hostname location.host location.search
              location.reload() location.replace()
              hash
              hash模式背后的原理是onhashchange事件,可以在window对象上监听这个事件:
              window.onhashchange = function(event){
              console.log(event.oldURL, event.newURL);
              let hash = location.hash.slice(1);
              document.body.style.color = hash;
              }
              因为hash发生变化的url都会被浏览器记录下来，从而你会发现浏览器的前进后退都可以用了，同时点击后退时，页面字体颜色也会发生变化。
              history
              切换历史状态包括back、forward、go
              history.pushState({color:'red'}, 'red', 'red')
              history.back();
              setTimeout(function(){
              history.forward();
              },0)
              window.onpopstate = function(event){
              console.log(event.state)
              if(event.state && event.state.color === 'red'){
              document.body.style.color = 'red';
              }
              }
              <p>
                12. 介绍Redux数据流的流程
                action触发->dispatch-> reducer整合state->输出新的state->引起视图变化
                基于事务处理setState
                存在异步的disptach 处理完合并到reducer中
              </p>
              <p>
                13. Redux如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理
                ?... 鉴于react使用太少
              </p>
              <p>
                14. 多个组件之间如何拆分各自的state，每块小的组件有自己的状态，它们之间还有一些公共的状态需要维护，如何思考这块
              </p>
              <p>
                15. 使用过的Redux中间件
              </p>
              <p>
                16. 如何解决跨域的问题
                https://mp.weixin.qq.com/s/6l4IVdCqH4DF6zckmnDc_w
                .com 顶级域名(一级域名)
                baidu.com 一级域名
                tieba.baidu .com 二级域名
                jsonp Access-Control-Allow-Origin jquery-jsonp
                postmassge: postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一
                websocket(socket.io) 本域名向3000端口发信息
                node中间层代理 服务器之间不存在跨域
                nginx反向代理
                window.name + iframe
                location.hash + iframe
                document.domain + iframe
              </p>
              <p>
                17. 常见Http请求头
                accept accept-charset accepte-encoding connection content-length accepet-language cookies host referer
                user-agent
              </p>
              <p>
                18. 移动端适配1px的问题
                使用伪类after before 缩小0.5倍
                .item {
                position: relative;
                }
                .item:after {
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 0;
                height: 1px;
                background-color: #c8c7cc;
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
                }
              </p>
              <p>
                19. 介绍flex布局
                弹性布局 六个容器属性 六个项目属性
                容器属性： flex-wrap flex-flow justify-content flext-direction align-items align-content
                项目属性: order flex align-self flex-grow flex-shrink flex-basis
              </p>
              <p>
                20. 其他css方式设置垂直居中
                display: flex; justify-content: center; align-items: center;
                display: table-cell; vertical-aglign: center; text-align: center;
                绝对定位和负边距：position: absolute; width: 100px; height: 50px; top: 50%; left: 50%; margin-left: -50px;
                margin-top: 20px; text-align: center;
                transform: translate(-50%, -50%);
                添加一个span元素 display: inline-block;
                display: flex; 和margin： auto;
                display: -webkit-box; -webkit-box-pack: center;-webkit-box-align: center; -webkit-box-orient: vertical;
                text-align: center;
              </p>
              <p>
                21. 居中为什么要使用transform（为什么不使用marginLeft/Top）
                减少回流
              </p>
              <p>
                22. 使用过webpack里面哪些plugin和loader
                loader: css-loader vue-loader style-loader babel-loader cache-loader postcss-lader sass-loader
                sass-loader
                plugin:
                optimize-css-assets-webpack-plugin（优化,压缩css)
                html-webpack-plugin（压缩js,导入各自输出index.html）
                html-minifier(压缩html)
                webpack-merge
                extract-text-webpack-plugin PurifyCSSPlugin // 提取压缩css
                mini-css-extract-plugin 分离css
                CopyWebpackPlugin
                UglifyjsWebpackPlugin
              </p>
              <p>
                23. webpack里面的插件是怎么实现的
                webpack插件其实是一个带apply方法的类，插件挂载到webpackhooks上，等到执行时机，tapable触发发布，执行apply
              </p>
              <p>
                24. dev-server是怎么跑起来
                ?....
              </p>
              <p>
                25. 项目优化
                webpack优化：https://juejin.im/post/5b652b036fb9a04fa01d616b
                resolve字段告诉webpack怎么去搜索文件，所以首先要重视resolve字段的配置：
                externals 配置externals，排除因为已使用
                标签引入而不用打包的代码，
                module.noParse字段告诉Webpack不必解析哪些文件，可以用来排除对非模块化库文件的解析
                使用DllPlugin减少基础模块编译次数
                使用HappyPack开启多进程Loader转换
                使用ParallelUglifyPlugin开启多进程压缩JS文件
                process.env.NODE_ENV
                Scope Hoisting
                我们可以发现模块数组是由一个一个闭包函数组成，闭包函数形成独立的作用域，分别被__webpack_require__调用，保证模块化而不会互相污染作用域。将所有闭包放至一个闭包中，通过减少闭包函数数量从而加快JS的执行速度，且代码体积有所减少
                使用Prepack提前求值
                分割代码以按需加载:
                document.getElementById('btn').addEventListener('click',function(){
                import(/* webpackChunkName:"show" */ './show').then((show)=>{
                show('Webpack');
                })
                })
                多页面应用提取页面间公共代码，以利用缓存 optimization: { splitChunks: {
                使用CDN加速静态资源加载
                使用Tree Shaking剔除JS死代码
                压缩CSS：css-loader?minimize、PurifyCSSPlugin optimize-css-assets-webpack-plugin（优化,压缩css)
                webpack-bundle-analyzer 可视化分析工具，比Webapck Analyse更直观。使用也很简单：
              </p>
              <p>
                26. 抽取公共文件是怎么配置的
                optimization: {
                splitChunks: {
                cacheGroups: {
                commons: {
                chunks: "initial",
                name: "commons", // 通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存到缓存中供后续使用。
                minChunks: 3,
                minSize: 0,
                }
                }
                },
                runtimeChunk: {
                name: "runtime"
                }
                },
                CommonsChunkPlugin：在webpack4中已经废除
              </p>
              <p>
                27. 项目中如何处理安全问题(https://juejin.im/post/5c446eb1e51d45517624f7db)
                <em>xss: </em>XSS (Cross-Site
                Scripting)，跨站脚本攻击跨站脚本攻击是指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的HTML标签或JavaScript进行的一种攻击。
                Content-Security-Policy文档
                转义字符
                js-xss
                httpOnly

                <em>CSRF(Cross Site Request Forgery):</em>即跨站请求伪造，是一种常见的Web攻击，它利用用户已登录的身份，在用户毫不知情的情况下，以用户的名义完成非法操作。
                Cookie 不随着跨域请求发送
                referer token
                验证码

                <em>点击劫持</em>是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。
                X-FRAME-OPTIONS 不允许使用iframe方式展示

                <em>URL跳转漏洞：</em> 借助未验证的URL跳转，将应用程序引导到不安全的第三方区域，从而导致的安全问题。
                http://www.wooyun.org/login.php?jumpto=http://www.evil.com
                <?php
                $url=$_GET['jumpto'];
                header("Location: $url");
                ?>
                referer限制
                有效token

                <em>sql注入</em>
                OS命令注入和SQL注入差不多，只不过SQL注入是针对数据库的，而OS命令注入是针对操作系统的。OS命令注入攻击指通过Web应用，执行非法的操作系统命令达到攻击的目的。只要在能调用Shell函数的地方就有存在被攻击的风险。倘若调用Shell时存在疏漏，就可以执行插入的非法命令。
              </P>

              <p>
                28：
                react setState原理
              </p>
              <p>
                29：
                vue 数组原理
              </p>
              <p>
                30：
                js数组和对象区别
              </p>
              <p>
                30：
                webpack事件流： environment entryoption run compiler compilation make emit
              </p>
              <p>
                31: 浏览器缓存：localforage.js
                application: manifest service worker clear storage
                storage: local storage session storage indexed Db websql cookies
                cache: cache storage application cache
              </p>
              <p>
                31: 浏览器缓存：localforage.js
                application: manifest service worker clear storage
                storage: local storage session storage indexed Db websql cookies
                cache: cache storage application cache
              </p>
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
      scroll: null,
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: {
        pageTitle: "2018阿里面试题汇总",
        img: require("../../common/images/avater.jpg"),
        userName: "寻找许仙",
        pageInfo:
          "现今前端市场大量人口充斥，良莠不齐，市面上面试试题层出不穷。本文主要是针对一些面试题的解答专题",
        pageTime: "2019-02-13"
      }
    };
  },
  methods: {
    mainTransition(e) {
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    }
  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "面试经验"); // 该方法比较靠谱
    this.$store.commit("SET_ISCHILDSHOWS", false); // 该方法比较靠谱
    this.scroll.refresh();
  },
  mounted() {
    let wrapper = this.$refs.pageContainer;
    this.scroll = new BScroll(wrapper, {
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
