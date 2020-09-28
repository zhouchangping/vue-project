import Mock from "mockjs";


//获取所有的参数（通过对象的形式返回）
// function getQueryStrings(url) {
//   let index = url.indexOf("?");
//   let urlNew = url.slice(index+1);
//   var strs = urlNew.split("&");
//   return strs[0].split("=")[1];
// }

function parseQuery(url, name) {
  var queryObj={};
  var reg=/[?&]([^=&#]+)=([^&#]*)/g;
  var querys=url.match(reg);
  if(querys){
    for(var i in querys){
      var query=querys[i].split("=");
      var key=query[0].substr(1),
        value=query[1];
      queryObj[key]?queryObj[key]=[].concat(queryObj[key],value):queryObj[key]=value;
    }
  }
  return queryObj[name];
}

Mock.mock(RegExp("/user/list" + ".*"), "get", (options) =>{
  // 最佳实践，将请求和参数都打印出来，以便调试
  let length = parseInt(parseQuery(options.url, "length"));
  let list = [];
  for (let i = length; i < length + 5; i++) {
    let objItem = {
      id: i,
      text: "当 content 的高度不超过父容器的高度，是不能滚动的，而它一旦超过了父容器的高度，我们就可以滚动内容区了，这就是 better-scroll 的滚动原理。"
    };
    list.push(objItem);
  }
  return Mock.mock(list);
});


Mock.setup({
  timeout: 800 // 设置延迟响应，模拟向后端请求数据
});
// Mock.mock(`${getBaseURL}/user/login`, "post", user.setUserInfo);
// Mock.mock(RegExp("/user/userInfo" + ".*"), "get", user.getUserInfo);
// export default {
//   Mock
// };

