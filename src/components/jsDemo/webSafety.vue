<template>
  <transition name="fadeMask">
    <div class="pageContainer">
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
                <h2>XSS (Cross Site Script)，跨站脚本攻击</h2>
                <blockquote>
                  <p>恶意攻击者往 Web 页面里插入恶意可执行网页脚本代码，当用户浏览该页之时，嵌入其中 Web 里面的脚本代码会被执行，从而可以达到攻击者盗取用户信息或其他侵犯用户安全隐私的目的。</p>
                </blockquote>
                <h3>一：非持久型 XSS（反射型 XSS 漏洞</h3>
                <pre>
                <code>
// Select your language:
document.write(''+ '<option value=1>'+location.href.substring(location.href.indexOf('default=') + 8)+ '</option>');document.write('<option value=2>English</option>');
攻击者可以直接通过 URL: //https://xx.com/xx?default="/sscript>alert(document.cookie)/script>")
                </code>
              </pre>
                <blockquote>
                  <h4>危害:</h4>
                  <p>
                    1. 即时性，不经过服务器存储，直接通过 HTTP 的 GET 和 POST 请求就能完成一次攻击，拿到用户隐私数据。<br />
                    2. 攻击者需要诱骗点击<br />
                    3. 反馈率低，所以较难发现和响应修复<br />
                    4. 盗取用户敏感保密信息<br />
                  </p>
                </blockquote>
                <blockquote>
                  <h4>防止:</h4>
                  <p>
                    1. Web 页面渲染的所有内容或者渲染的数据都必须来自于服务端。<br />
                    2. 尽量不要从 URL，document.referrer，document.forms 等这种 DOM API 中获取数据直接渲染。<br />
                    3. 尽量不要使用 eval, new
                    Function()，document.write()，document.writeln()，window.setInterval()，window.setTimeout()，innerHTML，document.creteElement()
                    等可执行字符串的方法。<br />
                    4 .如果做不到以上几点，也必须对涉及 DOM 渲染的方法传入的字符串参数做 escape 转义。<br />
                    5. 前端渲染的时候对任何的字段都需要做 escape 转义编码。<br />
                    6. escape 转义的目的是将一些构成 HTML 标签的元素转义，比如 （/)(\>，空格 等，转义成 &lt;，&gt;，&nbsp; 等显示转义字符。有很多开源的工具可以协助我们做 escape
                      转义。
                  </p>
                </blockquote>
                <h3>
                  二：持久型 XSS
                </h3>
                <blockquote>
                  <h4>来源:</h4>
                  <p>
                    1. POST 请求提交表单后端没做转义直接入库。<br />
                    2. 后端从数据库中取出数据没做转义直接输出给前端。<br />
                    3. 前端拿到后端数据没做转义直接渲染成 DOM。<br />
                  </p>
                </blockquote>
                <blockquote>
                  <h4>防止:</h4>
                  <p>
                    1. 后端在入库前应该选择不相信任何前端数据，将所有的字段统一进行转义处理。<br />
                    2. 后端在输出给前端数据统一进行转义处理。<br />
                    3. 前端在渲染页面 DOM 的时候应该选择不相信任何后端数据，任何字段都需要做转义处理。<br />
                  </p>
                </blockquote>
              </li>
              <li>
                <h2>CSRF（Cross-Site Request Forgery），中文名称：跨站请求伪造攻击</h2>
                <blockquote>
                  <p>
                    攻击者可以盗用你的登陆信息，以你的身份模拟发送各种请求。
                  </p>
                </blockquote>
                <p class="page-p-img">
                  <img width="100%" height="50%" class="lazyload inited loaded" v-lazy="csrfImage" alt="背景图">
                </p>
                <blockquote>
                  <h4>发生条件：</h4>
                  <p>
                    1. 用户已经登录了站点 A，并在本地记录了 cookie<br />
                    2. 在用户没有登出站点 A 的情况下（也就是 cookie 生效的情况下），访问了恶意攻击者提供的引诱危险站点 B (B 站点要求访问站点A)。<br />
                    3. 站点 A 没有做任何 CSRF 防御<br />
                  </p>
                </blockquote>
              </li>
              <li>
                <h2>
                  SQL 注入
                </h2>
                <blockquote>
                  <p>
                    因为程序没有有效的转义过滤用户的输入，使攻击者成功的向服务器提交恶意的 SQL
                    查询代码，程序在接收后错误的将攻击者的输入作为查询语句的一部分执行，导致原始的查询逻辑被改变，额外的执行了攻击者精心构造的恶意代码。
                  </p>
                </blockquote>
                <pre>
                  <code>
                    前端代码部分：
                    ---<form action="/login" method="POST">
    <p>Username: <input type="text" name="username" /></p>
    <p>Password: <input type="password" name="password" /></p>
    <p><input type="submit" value="登陆" /></p>---
</form>
                    后端数据库部分：
                    let querySQL = `
    SELECT *
    FROM user
    WHERE username='${username}'
    AND psw='${password}'
`;
// 接下来就是执行 sql 语句...
                  </code>
                </pre>
              </li>
              <li>
                <p>
                  web安全策略地址：
                  <a href="https://zoumiaojiang.com/article/common-web-security//">点击连接</a>
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
      isActive: false,
      obj: {},
      csrfImage: require("../../common/images/js/csrf.jpg"),
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: {
        pageTitle: "web安全",
        img: require("../../common/images/avater.jpg"),
        userName: "寻找许仙",
        pageInfo: "web安全应用揭秘",
        pageTime: "2019-05-15"
      }
    };
  },
  methods: {
    mainTransition() {
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    },
    dealArray(arr) {
      let arrs = arr.reduce((result, item)=> {
        this.obj[item.id] ? "":(this.obj[item.id] = true && result.push(item));
        return result;
      },[]);
      return arrs;
    }
  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "web安全应用揭秘"); // 该方法比较靠谱
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
    let arr = [
      {id: 1},
      {id: 1},
      {id: 13},
      {id: 13},
      {id: 3}
    ];
    that.dealArray(arr);
  },
  components: {}
};
</script>
<style scoped>
</style>
