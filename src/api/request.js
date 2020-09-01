import Vue from "vue";
import axios from "axios";
const vueItem = new Vue();
/**
 * request 0.0.1
 * @class Reques
 * @description zhouzhou-request http请求插件,需要引入vuex整合请求为
 * @Author zhouzhou
 * @Date 2019-09-29
 * @Email 895817341@qq.com
 */
const $request = {
  get: function (options) {
    alert(options);
  },
  post: function (url, params, config) {
    const that = this;
    vueItem.$loading.show();
    return vueItem.axios.post(url, params, config).then((res) => {
      that.dealNertWork(res);
      return res;
    }).catch((err)=> {
      alert(err);
    });
  },
  dealNertWork(res) {
    if (res.status === 200 && res.statusText === "OK") {
      vueItem.$loading.hide();
      // vueItem.$toast(res.status);
      return res.data;
    } else {
      return res.data;
    }
  },
  // request(config) {
  //   return axios.[config.method]();
  // }
};

// http request 拦截器
axios.interceptors.request.use(
  function (config) {
    return config;
  },function (error) {
    return Promise.reject(error);
  }
);

// http response 拦截器
axios.interceptors.response.use( // vue response拦截
  (response) => {
    //console.log('响应拦截')
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Vue.prototype.$ajax = axios; // 转化为ajax, this.$ajax

Vue.prototype.$request = $request;

export default $request;
