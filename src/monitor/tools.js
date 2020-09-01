/* Copyright (c) 2018-2020 Zuoyebang, All rights reserved.
 * @fileoverview 工具基础类
 * @author songli   | songli@zuoyebang.com
 * @version 1.0 | 2018-10-12 | songli   // 初始版本
 * @version 1.1 | 2019-03-04 | dengxin   // 兼容spa、大数据打点规范
 */

import commonParams from "./commonParams.js";

let exportObj = (function () {
  return {
    /**
     * 上报地址
     */
    REPORT_ADDR: commonParams.getRequestUrl(),

    /**
     * url对像，url+参数
     */
    URLS: window.location.href.split("?"),
    pagekey: window.location.host + window.location.pathname,
    url: window.location.href,
    /**
     * 代理头信息
     */
    AGENT: navigator.userAgent,
    /**
     *获取系统平台(ios/android/other)
     **/
    getSysPlat() {
      let isAndroid =
        this.AGENT.indexOf("Android") > -1 || this.AGENT.indexOf("Adr") > -1; // android终端
      let isiOS = !!this.AGENT.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
      if (isAndroid) {
        return "ANDROID";
      } else if (isiOS) {
        return "IOS";
      }
      return "OTHER";
    },
    /**
     * 获取用户代理信息
     */
    getAent() {
      return this.AGENT;
    },
    /**
     *获取系统版本号
     **/
    getSysVersion() {
      try {
        let OSVision = "1.0";
        let u = this.AGENT;
        let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; // Android
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
        if (isAndroid) {
          OSVision = this.AGENT.split(";")[1].match(/\d+(\.)?(\d+)?/g);
        }
        if (isIOS) {
          OSVision = this.AGENT.split(";")[1].match(/(\d+)_(\d+)_?(\d+)?/)[0];
        }
        return OSVision;
      } catch (err) {
        return "未知";
      }
    },

    /**
     *获取运行平台(微信，qq ,微博，浏览器<uc,......>)
     **/
    getRunPlat() {
      let ua = this.AGENT.toUpperCase(); // 获取判断用的对象
      if (ua.match(/MICROMESSENGER/i)) {
        return "WX";
      }
      if (ua.match(/WEIBO/i)) {
        return "WB";
      }
      if (ua.match(/QQ/i)) {
        return "QQ";
      }
      // 作业帮平台
      if (/homework/i.test(ua) &&
        /(vcname)/i.test(ua) &&
        /(token)/i.test(ua)) {
        return "ZYB-APP";
      }
      // 一课平台
      if (/airclass/i.test(ua)) {
        return "YIKE-APP";
      }
      return "OTHER";
    },

    /**
     *获取url
     **/
    getUrl() {
      return this.pagekey;
    },

    /**
     *获取url自带参数清单
     **/
    getUrlParams() {
      if (this.URLS.length > 1) {
        let params = this.URLS[1].split("&");
        let rtObj = {};
        params.forEach(v => {
          let ps = v.split("=");
          rtObj[ps[0]] = ps[1] || "";
        });
        return rtObj;
      }
      return "";
    },
    /**
     * 获取用户端当前网络信息
     */
    getNetWork() {
      // 火狐不兼容？？
      return navigator && navigator.connection && navigator.connection.effectiveType || "未知";
    },
    /**
     * 获取浏览器信息和版本号
     */
    getBrowserInfo() {
      var Sys = {};
      var ua = this.AGENT.toLowerCase();
      var re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
      var m = ua.match(re);
      try {
        Sys.browser = m[1].replace(/version/, "safari");
        Sys.ver = m[2];
      } catch (err) {
        Sys.browser = "未知";
        Sys.ver = "1.0.0";
      }
      return Sys;
    },
    /**
     * 获取浏览器信息和版本号
     */
    isWeixin() {
      if (this.AGENT.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    },
    /**
     * 获取浏览器信息和版本号
     */
    zybAppTypeVersion() {
      let sty = {};
      let reg = /vcname.*?([\d.]+)/;
      if (/homework/i.test(this.AGENT) &&
        /(vcname)/i.test(this.AGENT) &&
        /(token)/i.test(this.AGENT)
      ) {
        sty.isInZybApp = !0;
        try {
          sty.ver = this.AGENT.match(reg)[1];
        } catch (err) {
          sty.ver = 0;
        }
      } else {
        sty.isInZybApp = !1;
        sty.ver = "";
      }
      return sty;
    },
    yikeAppTypeVersion() {
      let sty = {};
      let reg = /vcname.*?([\d.]+)/;
      if (/airclass/i.test(this.AGENT)) {
        sty.isInYikeApp = !0;
        try {
          sty.ver = this.AGENT.match(reg)[1];
        } catch (err) {
          sty.ver = "未知";
        }
      } else {
        sty.isInYikeApp = !1;
        sty.ver = "";
      }
      return sty;
    },
    /**
     *用于组装系统信息
     **/
    getSysInfo() {
      let that = this;
      let pagekey = this.getUrl();
      // let timeAndRouter = commonParams.getSpaTimeAndRouter();

      // spa自定义路由后缀，和path拼接成pagekey确定页面唯一性
      if (commonParams.getRouterSuffix()) {
        pagekey += "?" + commonParams.getRouterSuffix();
      }

      // spa自定义路由后缀，和path拼接成pagekey确定页面唯一性
      if (commonParams.getSpaPath()) {
        pagekey += "#" + commonParams.getSpaPath();
      }

      // 单页vue-router跳转
      // if (timeAndRouter) {
      //   pagekey += timeAndRouter.routerQuery.indexOf("#") > -1 ? timeAndRouter.routerQuery : '#' + timeAndRouter.routerQuery;
      // }

      let rtObj = {
        sdkVersion: commonParams.getSdkVersion(),
        sysPlat: that.getSysPlat(),
        agent: that.AGENT,
        sysVersion: that.getSysVersion(),
        runPlat: that.getRunPlat(),
        url: that.url,
        pagekey: pagekey,
        urlParams: that.getUrlParams(),
        network: that.getNetWork(),
        /* ---新增--- */
        winW: window.screen.width || window.screen.availWidth,
        winH: window.screen.height || window.screen.availHeight,
        locale: window.navigator.language || window.navigator.userLanguage,
        title: document.title,
        metaData: commonParams.getMetaData(),
        authkey: commonParams.getKey(),
        // 浏览器类型&版本号
        bsName: that.getBrowserInfo().browser,
        bsVersion: that.getBrowserInfo().ver,
        isWeixin: that.isWeixin(),
        isInZybApp: that.zybAppTypeVersion().isInZybApp,
        zybvc: that.zybAppTypeVersion().ver,
        isInYikeApp: that.yikeAppTypeVersion().isInYikeApp,
        yikevc: that.yikeAppTypeVersion().ver
      };

      return rtObj;
    },
    /**
     * 用于返回dom节点路径
     * @param {} e
     */
    getXPath(e) {
      let t = [];
      for (t = []; e && e.nodeType === Node.ELEMENT_NODE; e = e.parentNode) {
        let r,
          n = 0,
          a = !1;
        for (r = e.previousSibling; r; r = r.previousSibling) {
          r.nodeType !== Node.DOCUMENT_TYPE_NODE &&
            r.nodeName === e.nodeName &&
            ++n;
        }
        for (r = e.nextSibling; r && !a; r = r.nextSibling) { r.nodeName === e.nodeName && (a = !0); }
        let i = (e.prefix ? e.prefix + ":" : "") + e.localName;
        let o = n || a ? "[" + (n + 1) + "]" : "";
        t.splice(0, 0, i + o);
      }
      return t.length ? "/" + t.join("/") : null;
    },
    /**
     * ajax数据提交
     **/
    zybajax(url) {
      // let xmlhttp = new XMLHttpRequest();
      // 重置当前打点时间
      url += "&createTime=" + +new Date();
      try {
        new Image().src = url;
      } catch (ex) {
        console.log(ex);
      }
    },
    /**
     * 对指定字符串计算hash值（网上摘抄）,I/O相互对应的。
     */
    hash(input) {
      let I64BIT_TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split(
        ""
      );
      let hash = 5381;
      let i = input.length - 1;

      if (typeof input === "string") {
        for (; i > -1; i--) hash += (hash << 5) + input.charCodeAt(i);
      } else {
        for (; i > -1; i--) hash += (hash << 5) + input[i];
      }
      let value = hash & 0x7fffffff;

      let retValue = "";
      do {
        retValue += I64BIT_TABLE[value & 0x3f];
      } while ((value >>= 6));

      return retValue;
    }
  };
})();

export default exportObj;
