// import tools from './tools';
import commonParams from "./commonParams.js";
// import submitPool from './submitPool';

function PageLoadInfo() {
  // 载入数据信息
  this.loadInfo = {};
  this.TYPE = "page";
  this.fetchStart = 0;
}
PageLoadInfo.prototype = {
  constructor: PageLoadInfo,
  /**
   * 初始化数据
   */
  init(win_, initData_) {
    this.loadInfo = initData_;
  },
  toFixed2(v) {
    return Math.round(v * 100) / 100;
  },

  /**
   * 获取页面加载信息
   */
  getLoadPageInfo() {
    try {
      /**
       * 获取浏览器时间轴信息
      */
      const performance =
        window.performance ||
        window.webkitPerformance ||
        window.msPerformance ||
        window.mozPerformance;

      // const times = performance.getEntriesByType("navigation")[0];
      // this.loadInfo["timeJson"] = JSON.stringify(times);

      var timing = performance.timing;
      // var navigation = performance && performance.navigation;

      this.fetchStart = timing.fetchStart;
      // const blankTime = performance.getEntriesByType("paint")[0].startTime;
      let start = 0;
      // let timeAndRouter = commonParams.getSpaTimeAndRouter();

      if (undefined !== timing.navigationStart) {
        start = timing.navigationStart;
      }

      // test sdk timing
      this.loadInfo["timingData"] = JSON.stringify(timing);

      // dns解析时间
      this.loadInfo["dnsTime"] =
      this.toFixed2(timing.domainLookupEnd - timing.domainLookupStart);
      // tcp连接时间
      this.loadInfo["tcpTime"] =
      this.toFixed2(timing.connectEnd - timing.connectStart);
      // DOM解析耗时
      this.loadInfo["domCompleteTime"] = this.toFixed2(timing.domInteractive - timing.responseEnd);

      // 首包时间
      this.loadInfo["firstByte"] = this.toFixed2(timing.responseStart - timing.domainLookupStart);
      // 资源加载耗时
      this.loadInfo["resourceTime"] =
      this.toFixed2(timing.loadEventStart - timing.domContentLoadedEventEnd);

      // 白屏时间(空页面时间) 从请求开始到浏览器开始解析第一批 HTML 文档字节的时间差
      this.loadInfo["blankTime"] = this.toFixed2(timing.responseEnd - start);
      // 首屏时间
      this.loadInfo["fristTime"] = this.toFixed2(timing.domInteractive - timing.fetchStart);

      // 最终时间
      this.loadInfo["endTime"] = this.toFixed2(timing.loadEventStart - timing.fetchStart);
      this.loadInfo["type"] = this.TYPE;

      if (commonParams.getCustomFirstTime()) {
        this.loadInfo["endTime"] = commonParams.getCustomFirstTime() - this.fetchStart;
      }
      // 单页路由之间跳转
      // if(timeAndRouter) {
      //   this.loadInfo["endTime"] = timeAndRouter;
      // }
    } catch (err) {
      console.log(err);
    }
  },
  // visibilityChangeEvent(obj) {

  // },
  /**
   * 提交首屏时间，首屏时间只在页面加载完成之事提交，具只提交一次。所以独立提交。
   */
  submit() {

  }
};

/**
 * 客户端页面加载信息收集
 */
export default new PageLoadInfo();
