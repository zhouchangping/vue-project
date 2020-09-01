/* Copyright (c) 2018-2020 Zuoyebang, All rights reserved.
 * @fileoverview 提交数据池管理（待提交数据先存放在数据池）
 * @author songli   | songli@zuoyebang.com
 * @version 1.0 | 2018-10-12 | songli   // 初始版本
 * @version 1.0 | 2019-03-04 | dengxin   // 兼容spa、大数据打点规范
 */
import tools from "./tools";
import commonParams from "./commonParams.js";
import utils from "./utils.js";

function SubmitPool() {
  // 用于去重错误信息;
  this.dataPool = [];
  this.STEP = 2000; // 没有错误数据，间隔提交时间变长
  this.LIMIT = commonParams.getSubmitLimit(); // 每次提交个数
  this.MAX_DOUBLE_STEP = 60000; // 1分钟双倍增长值
  this.MAX_STEP = 600000; // 上报间隔最大10分钟
  this.startStatus = false; // 防止提交重复，或者堵塞。
  this.tools = tools;
}
SubmitPool.prototype = {
  constructor: SubmitPool,
  /**
   * 错误上报提交处理
   */
  start() {
    var that = this;
    if (this.startStatus) {
      return;
    }
    this.startStatus = true;
    let submitTime = 6000;
    let reportSubmit = function () {
      setTimeout(function () {
        let submitDatas = [];
        let stepAdd = function () {
          if (submitTime < that.MAX_STEP) {
            if (submitTime > that.MAX_DOUBLE_STEP) {
              // 超过一分钟间隔时间成倍增长
              submitTime *= 2;
            } else {
              // 1分钟之内进行步长计算  2000
              submitTime += that.STEP;
            }
          }
        };
        if (that.dataPool.length > 0) {
          let limit = that.dataPool.length - that.LIMIT ? that.LIMIT : that.dataPool.length;
          submitDatas = that.dataPool.splice(0, limit);
          let url = utils.objToQuery(submitDatas, tools.REPORT_ADDR);
          that.tools.zybajax(url);
          // ajax提交;
          // console.log('提交数据............');
          // console.log(submitDatas);
          // console.log('____________________');
          // {},
          // function(res) {
          //   // console.log(that.dataPool);
          //   //alert(res);
          //   // console.log(res);
          // },
          // function() {
          //   //alert("失败")
          //   //如果提交失败，则需要放回数据池，并放到队列后边。
          //   that.dataPool = data.dataPool.concat(submitDatas);
          // }
          // )
          // .get();
        } else {
          stepAdd(); // 增加步长操作
        }
        reportSubmit();
      }, submitTime);
    };
    reportSubmit();
  },
  /**
   * 增加数据到相应的数据池中。
   * 如果设置每次提交一条数据，则直接进行提交。
   */
  pushDatas(data) {
    // 兼容大数据打点规范
    let url = utils.objToQuery(data, tools.REPORT_ADDR);

    if (this.LIMIT <= 1) {
      this.tools.zybajax(url);
      // {},
      // res => {
      //   // console.log(res);
      // },
      // e => {
      //   this.dataPool.push(data);
      // }
      // )
      // .get();
    } else {
      if (Object.prototype.toString.call(data) === "[object Array]") {
        this.dataPool = this.dataPool.concat(data);
      } else {
        this.dataPool.push(data);
      }
    }
  }
};
export default new SubmitPool();
