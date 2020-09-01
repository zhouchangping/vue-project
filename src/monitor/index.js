/* Copyright (c) 2018-2020 Zuoyebang, All rights reserved.
 * @fileoverview 数据上报主入口文件
 * @author songli   | songli@zuoyebang.com
 * @version 1.0 | 2019-02-12 | songli   // 初始版本
 * @version 1.1 | 2019-03-04 | dengxin   // 兼容spa、兼容大数据打点规范，优化性能监控
 * Report 是报表容器管理类，自执执行方法
 *
 */
import tools from './tools';
import pageLoadInfo from './regPageLoadInfo';
import errorCollect from './regErrorCollect';
import ajaxSlowReq from './regAjaxSlowReq';
import commonParams from './commonParams.js';
import submitPool from './submitPool';
import utils from './utils.js';

function Report(win_) {
  // 注册数据容器
  this.reportObjs = [];
  this.win = win_ || window;
  // 基本信息
  this.baseSysInfo = {};
}
Report.prototype = {
  constructor: Report,
  /**
   * 注册上报处理对像至容器。
   */
  regObj(obj) {
    this.reportObjs.push(obj);
    let baseSysInfo = JSON.parse(JSON.stringify(this.baseSysInfo)); // 解决引用数据问题，一个简单的拷贝;
    obj.init(window, baseSysInfo);
  },
  config(configObj) {
    commonParams.setConfig(configObj);
  },
  /**
   * 激发，触动各注册模块的自收集功能。
   */
  trigger() {
    this.reportObjs.forEach(obj => {
      obj.submit();
    });
  },
  /**
   * 注册报表数据
   */
  register() {
    this.regObj(pageLoadInfo);
    this.regObj(errorCollect);
    this.regObj(ajaxSlowReq);
  },
  init(config_) {
    config_ && this.config(config_);
    // 获取系统基本信息
    this.baseSysInfo = tools.getSysInfo();
    this.register();

    this.win.errorCollect = errorCollect;

    setTimeout(() => {
      this.trigger();
      this.initEvent();
    }, 0);
  },
  // 离开页面进行性能打点
  initEvent() {
    var hidden, visibilityChange;
    if (typeof document.hidden !== 'undefined') {
      hidden = 'hidden';
      visibilityChange = 'visibilitychange';
    } else if (typeof document.mozHidden !== 'undefined') {
      hidden = 'mozHidden';
      visibilityChange = 'mozvisibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
      hidden = 'msHidden';
      visibilityChange = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
      hidden = 'webkitHidden';
      visibilityChange = 'webkitvisibilitychange';
    }
    console.log(hidden);
    // 添加监听器
    document.addEventListener(visibilityChange, function () {
      pageLoadInfo.getLoadPageInfo();
      // 收集数据
      submitPool.pushDatas(pageLoadInfo.loadInfo);
    }, false);
  }
};

let report = new Report();

// 异步接口之后进行调用
function setCustomFirstTime(path) {
  commonParams.setCustomFirstTime(+new Date(), path);
  // 更新公共参数
  report.baseSysInfo = tools.getSysInfo();
  pageLoadInfo.init(window, report.baseSysInfo);
}

// 初始化SDK
function install(config = {}) {
  report.init(config);
  return errorCollect;
}

function vueErrorCollect(Vue) {
  Vue.config.errorHandler = function (err, vm, info) {
    try {
      if (vm) {
        var componentName = utils.formatComponentName(vm);
        var propsData = vm.$options && vm.$options.propsData;
        errorCollect.notifyError(errorCollect, err, {
          componentName: componentName,
          propsData: propsData,
          info: info
        });
      } else {
        errorCollect.notifyError(errorCollect, err);
      }
    } catch (error) {
      errorCollect.notifyError(errorCollect, err);
    }
  };
}

let portObj = {
  install: install,
  setCustomFirstTime: setCustomFirstTime
};

const monitorVue = {
  install: function (Vue, config) {
    report.init(config);
    vueErrorCollect(Vue);
    Vue.prototype.$monitorVue = {
      setCustomFirstTime: setCustomFirstTime
    };
  }
};
export {
  monitorVue
};

export default portObj;
