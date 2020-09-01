import submitPool from "./submitPool";
import regErrorCollect from "./regErrorCollect";
// import commonParams from './commonParams.js';
// import tools from './tools';
const ajaxHook = require("ajax-hook");

function AjaxSlowReq() {
  // 用于去重错误信息;
  this.win = window;
  this.TYPE = "slowRequest";
  this.REQ_TIME = 500; // 2秒数据还没有返回，测认定为慢服务
  this.baseInfo = {};
}
AjaxSlowReq.prototype = {
  constructor: AjaxSlowReq,
  /**
   * 错误上报提交处理
   */
  submit() {
    submitPool.start();
  },
  /**
   * 开始错误信息收集
   */
  init(win, baseInfo) {
    this.baseInfo = baseInfo;
    let that = this;
    this.win = win;
    let obj = {};
    ajaxHook.hookAjax({
      // hook callbacks
      onreadystatechange(xhr) {
        if (xhr.xhr.readyState === 4) {
          let reqObj = xhr.xhr["reqObj"];
          let startTime = reqObj["reqStartTime"];
          let endTime = +new Date();
          let dv = endTime - startTime;
          reqObj["timeLong"] = dv;
          reqObj["status"] = xhr.xhr.status;

          if (parseInt(xhr.xhr.status / 100) === 2) {
            // console.log(xhr);
            // console.log('====dv====', dv);
            // console.log('====that.REQ_TIME====', that.REQ_TIME);
            // console.log(dv >= that.REQ_TIME);
            if (dv >= that.REQ_TIME) {
              // console.log(dv, that.REQ_TIME);
              // 如果2g网络情况下，则不上报。
              if (that.baseInfo.network.toUpperCase() === "2G") {

              } else {
                submitPool.pushDatas(Object.assign(reqObj, that.baseInfo));
              }
            }
          /** 错误请求,直接进行错误回收 */
          } else {
            regErrorCollect.collectXHRError(reqObj);
          }
        }
      },
      // hook function
      open(arg, xhr) {
        // console.log(xhr);
        var urls = arg[1].split("?");
        obj["reqStartTime"] = +new Date();
        obj["reqType"] = arg[0];
        obj["reqUrl"] = urls[0].substr(0, 300);
        obj["type"] = that.TYPE;
        obj["reqParams"] = urls.length > 1 ? urls[1] : "";
        xhr["reqObj"] = obj; // 请求回来时做会用到reqstartTime来确认整个请求时长
      }
    });
  }
};
export default new AjaxSlowReq();
