/**
 * for in  || object.keys
 * @param { object.keys 一个表示给定对象的所有属性的字符串数组。}
 * @param { for in 一个表示给定对象的所有可枚举属性的字符串数组。}
 */
// function testObject(obj) {
//   for (const k in obj) {
//     return false;
//   }
//   return true;
// }

/**
 * JSON.parse()
    解析JSON字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性, 在返回之前进行某些修改。
  JSON.stringify()
    返回与指定值对应的JSON字符串，可以通过额外的参数, 控制仅包含某些属性, 或者以自定义方法来替换某些key对应的属性值。
 */
// a = {
//   1: Symbol("1")
// }
// JSON.stringify(a)
// JSON.stringify(value) === '{}'

/**
 * array
 */
let array = [,1,,2,,3];
array = array.map((i)=> ++i);
console.log(array);
Array(10).map((i)=>
  console.log(i)
);

/**
 * curl 在get请求中传递body
 * 浏览器不支持get请求发body，http,get请求有body吗
 * graphl一般推荐post，get是url带过来
 * elasticsearch || DSL
 * JS操作是否触发回流，chrome调试工具能否看到什么时候发生回流
 * puppeteer截图，爬虫，性能数据监控 屏幕录制 结合fc | scf（阿里云函数计算）
 * 平台错误码设计，错误码平台，维护托管所有错误码，在线配置前后台错误码映射关系
 * 如何扩展application实例化时，添加自定义逻辑： app.js lifecyle 生命周期源码
 * 云测平台支持跑puppeteer,fc支持。 在平台商安装虚拟摄像头和麦克风 fc不支持
 * react: redux+saga(多端同步，竞争态，用action作为每一步操作的记录) mobx：复杂同步问题难维护；
 * 手表里swift,app+rn  手表操作数据，app同步更新数据。app操作，手表同步更新
 * rn为啥不用hooks,hooks看上去好用，但是rn本身的热重启对hooks支持很差，稍微复杂点就会出现多次渲染的bug，大量使用hooks性能下降很快；android app will freeze 20s on hot-reload
 * hot reload对hooks支持很差，开发环境关闭。开发模式 hooks effect loop容易cpu bound   实时应用：broadcaster和follower
 * 0.61以后rn热重启对class支持完美
 * webhook,特定时间发生时调用回调客户的接口，但是有个问题，我的服务器ip会一直暴露
 *
 * rust deno沙盒
 * flutter 给dart
 * k8s
 * egg-schedule 日志系统
 * docker os.cpus():获取的是容器还是物理机的cpu核数
 * 容器4核4g，物理机cpu32核；docker手动自定worker数   docker隔离性差？ lxcfs
 * vue3 composition api
 * 高人不与世俗人争
 * webrtc的远程控制，troubleshooting工具 licode electorn metroluffy
 * lodash
 * fundbebug sentry有配套的docker镜像，可以内部部署一套，
 * umi webpack esbuild
 * sicp
 * alnode
 * node写出过oom
 * skywalking定位内存
 * egg-script egg-cluster
 * ghostscript airflow
 * 前端工程化-云龙
 * egg-init
 * pupeteeter midway
 * 开启事物和传递事物：a方法开启了事物，然后调用b方法，b方法自动调用这个事物。 typeOrm
 * HOC extends 无副作用
 * bluebird promise
 * 如何获取伪造用户真实ip
 * egg-oss如何获取上传到oss的进度。
 * pakage.lock  任何工具他的作用及优势
 * node-kafka
 * egg-bin egg-script
 * alinode内存监控
 * 函数式开发
 * node grpc 发送keepalive包到serverd端
 * egg上serveless
 * midway-fass
 * clusterport 是agent和work之间通讯用的；egg-script
 * ali-oss
 * 阿里云： sls 阿里云集中式日志系统;logtail
 * 消息协议
 * quic
 * wasm + wasi
 * 配置中心：动态拉去静态文件
 *
 */

