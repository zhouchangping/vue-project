import tools from "./tools";
import submitPool from "./submitPool";

function ErrorCollect() {
  // 用于去重错误信息;
  this.errorInfoMap = {};
  this.errorQueue = [];
  this.errorOpStatus = { INIT: 1, OK: 2, FAIL: 3 };
  this.win = window;
  this.TYPE = "error";
  this.baseInfo = {};
  this.eventlist = [];
  this.EVENT_MAX_VALUE = 20;
}
ErrorCollect.prototype = {
  constructor: ErrorCollect,
  /**
   * 错误上报提交处理
   */
  submit() {
    submitPool.start();
  },

  /**
   * md5key:为区分错误
   * 错误数据压到错误数据当中
   */
  submitDataPush(md5key, errorInfo) {
    let hexMd5 = tools.hash(md5key);
    if (!this.errorInfoMap[hexMd5]) {
      errorInfo["userBehavior"] = JSON.stringify(this.eventlist);
      errorInfo["id"] = hexMd5;
      errorInfo = Object.assign(errorInfo, this.baseInfo);
      errorInfo["type"] = this.TYPE;
      // 客户端时间
      errorInfo["clientTime"] = +new Date();
      this.errorInfoMap[hexMd5] = this.errorOpStatus.INIT;

      submitPool.pushDatas(errorInfo);
    }
  },
  /**
   * 用户行为放入队列
   * @param {*} e
   */
  pushList(e) {
    this.eventlist.push(JSON.stringify(e));
    this.eventlist.length > 20 && this.eventlist.shift();
  },
  /**
   * 用户行为记录
   **/
  addUserBehavior() {
    this.win.addEventListener(
      "click",
      event => {
        var r = event.target;
        var outerHTML = r && r.outerHTML;
        outerHTML &&
          outerHTML.length > 200 &&
          (outerHTML = outerHTML.slice(0, 200));
        this.pushList({
          errorType: "click",
          page: {
            url: window.location.href,
            title: document.title
          },
          detail: {
            outerHTML: outerHTML,
            tagName: r && r.tagName,
            className: r && r.className
          },
          time: new Date().getTime()
        });
      },
      true
    );
  },
  /**
   * 收集ajax请求错误
   * @param {*} errorInfo
   */
  collectXHRError(errorInfo) {
    let xhrErrorInfo = Object.assign(errorInfo, {
      errorType: "httpError",
      message: errorInfo["reqUrl"]
    });
    let name =
      errorInfo["reqType"] +
      errorInfo["reqUrl"] +
      errorInfo["type"] +
      errorInfo["reqParams"];

    this.submitDataPush(name, xhrErrorInfo);
  },

  /**
   * 收集promiseError相关错误信息
   */
  collectPromiseError() {
    let notifyJsError = (err, res) => {
      if (err) {
        err.name !== "unhandledrejection";
        var JsError = {
          name: err.name || (res && res.info) || "caught error",
          message: err.message || (res && res.info),
          componentName: res && res.componentName,
          info: res && res.info,
          stacktrace: err.stack,
          fileName: err.fileName,
          lineNumber: err.lineNumber,
          columnNumber: err.columnNumber,
          errorType: "jsError"
        };
        this.submitDataPush(JsError.name, JsError);
      }
    };
    this.win.addEventListener("unhandledrejection", function (e) {
      let reason = e.reason;
      if (Object.prototype.toString.apply(reason) === "[object Error]") {
        reason.name = "unhandledrejection";
        notifyJsError(reason);
      } else {
        notifyJsError({ message: reason, name: "unhandledrejection" });
      }
    });
  },
  /**
   * 收集资源加载错误数据 src 相关
   */
  collectSrcError() {
    this.win.addEventListener &&
      this.win.addEventListener(
        "error",
        event => {
          // kpObj.isUploadResource = true;
          if (true) {
            var target = event.target;
            var outerHTML = target && target.outerHTML;
            if (outerHTML) {
              var resourceError = {
                errorType: "resourceError",
                target: {
                  outerHTML: outerHTML,
                  src: target && target.src,
                  tagName: target && target.tagName,
                  className: target && target.className,
                  type: target && target.type,
                  XPath: tools.getXPath(target),
                  timeStamp: event.timeStamp
                },
                message: target && target.src
              };
              // alert(JSON.stringify(resourceError));
              let md5key = target.tagName;
              this.submitDataPush(md5key, resourceError);
            }
          }
        },
        true
      );
  },
  /**
   * 收集基本错误信息
   */
  collectBaseError() {
    /**
     * 错误信息收集
     */
    this.win.onerror = (errorInfo, url, lineNo, columnNo, error) => {
      let errorObj = {};
      if (!!error && !!error.stack) {
        // 如果浏览器有堆栈信息直接使用
        errorObj["stacktrace"] = error.stack.toString();
      }

      // 尝试通过callee拿堆栈信息
      let stocks = [];
      try {
        let f = arguments.callee.caller,
          c = 3;
        // 这里只拿三层堆栈信息
        while (f && --c > 0) {
          stocks.push(f.toString());
          if (f === f.caller) {
            break; // 如果有环
          }
          f = f.caller;
        }
        errorObj["stacktrace"].msg = stocks.join(",");
      } catch (err) {
        errorObj["stacktrace"].msg = "no stacktrace message";
      }

      let md5key = lineNo + columnNo + errorInfo;
      // 文件合并产生(lineNo--lineNumber columnNo--columnNumber  errorStock-- stacktrace)
      errorObj["errorType"] = "jsError";
      errorObj["lineNumber"] = lineNo;
      errorObj["columnNumber"] =
        columnNo || (win.event && win.event.errorCharacter) || 0;
      errorObj["message"] = errorInfo;
      errorObj["fileName"] = url || (error && error.fileName);
      this.submitDataPush(md5key, errorObj);

      return false;
    };
  },
  /**
   * vue项目错误收集
   */
  notifyError: (obj, error, options) => {
    let u = function (e) {
      if (!e) return null;
      var t = {};
      return {
        name: e.name,
        message: e.message,
        fileName: e.fileName || e.sourceURL,
        lineNumber: e.lineNumber || e.line,
        columnNumber: e.columnNumber || e.column,
        stack: e.stack
      };
    };
    if (error) {
      var r = u(error);
      var JsError = {
        name: r.name || (options && options.info) || "caught error",
        message: r.message || (options && options.info),
        componentName: options && options.componentName,
        info: options && options.info,
        stacktrace: r.stack,
        fileName: r.fileName,
        lineNumber: r.lineNumber,
        columnNumber: r.columnNumber,
        errorType: "jsError"
      };
      obj.submitDataPush(JsError.name, JsError);
    }
  },
  /**
   * 开始错误信息收集
   */
  init(win, baseInfo) {
    let that = this;
    this.win = win || window;
    this.baseInfo = baseInfo;
    this.addUserBehavior(); // 记录用户当前行为
    this.collectPromiseError(); // 收集promise错误
    this.collectSrcError();
    this.collectBaseError();
  }
};
export default new ErrorCollect();
