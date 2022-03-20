<template>
  <transition name="fadeMask">
    <div class="pageContainer" ref="pageContainer">
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
            <h2>Promise的一些特性</h2>
            <P>
              1. promise是有兼容性问题的，node环境下默认支持，还可以下载相应插件来解决兼容性问题<br />
              2. promise是有三种状态的，等待态pending / 成功态resolved / 失败态rejected<br />
              3. 如何去判断调用resolve还是reject呢？promise的状态是可以转换的，可以从pending -> resolved 或 pending -><br/>
              rejected，但是resolved不能转换为rejected/pending，rejected不能转换为resolved/pending，简而言之即状态只会更改一次<br/>
            </P>
            <p>
              <pre>
                                <code>
let promise = new Promise(function(resolve,reject){
    console.log('1')
    resolve() // 更改pending状态为resolved
})
promise.then(()=>{
    console.log('success1')
},()=>{
    console.log('error1')
})
console.log('2')
此时输出顺序为'1' -> '2' -> 'success1'
                                </code>
                            </pre>
            </p>
            <p>
              <pre>
                                <code>
let promise = new Promise(function(resolve,reject){
console.log('1')
setTimeout(()=>{ // 异步行为
    resolve() // 更改状态为成功
},1000)
})
promise.then(()=>{
    console.log("success1")
})
promise.then(()=>{
    console.log('success2')
})
console.log("2")
此时输出顺序为'1' -> '2' -> 'success1' -> 'success2'
                                </code>
                            </pre>
            </p>
            <p>
4. executor默认在new的时候会自动执行<br />
              5. 每个promise的实例都有then方法<br />
              6. then方法中，有两个参数，分别是成功的回调函数和失败的回调函数<br />
              7. then方法是异步的，属于微任务，从上面的例子可以看出，先执行完同步代码，再执行异步代码<br />
              8. 同一个promise的实例可以then多次,成功时会调用所有的成功方法，失败时会调用所有的失败方法<br />
              new Promise中可以支持异步行为(setTimeout)<br />
            </p>
            <p>
              9. Promise的核心在于链式调用，promise解决了回调地狱<br />
              10. 并发异步io操作，同一时间内把这个结果拿到，即比如有两个异步io操作，当这2个获取完毕后，才执行相应的代码，比如前面所说的after函数，发布订阅、Promise.all等。
            </P>
            <p>
              11.如果一个promise执行完后，返回的还是一个promise，会把这个promise的执行结果会传递给下一次then中<br />
              12.如果在then中返回的不是一个promise，而是一个普通值，会将这个普通值作为下次then的成功的结果<br />
              13.如果当前then中失败了，会走下一个then的失败回调<br />
              14.如果在then中不返回值，虽然没有显式返回，但是默认是返回undefined，是属于普通值，依然会把这个普通值传到下一个then的成功回调中<br />
              15.catch是错误没有处理的情况下才会执行<br />
              16. then中可以不写东西<br />
              17. 一个promise的实例可以then多次<br />
              18.
              如果此时resolve或者reject是处于setTimeout(()=>{resolve()},3000)中，即处于异步中，当我们new一个Promise时，不会马上执行异步代码，而是直接执行了promise.then这个函数，而此时因为self.status的状态依然是处于pending，所以不会执行resolve或者reject，当同步代码执行完毕后，执行异步代码时，更改了状态为resolved或者rejected时，此时then方法已经执行完毕了，不会再次执行then的方法<br />
              19.回调地狱<br />
              20.并发异步io操作，同一时间内把这个结果拿到，即比如有两个异步io操作，当这2个获取完毕后，才执行相应的代码，比如前面所说的after函数，发布订阅、Promise.all等。<br />
              21.如果一个promise执行完后，返回的还是一个promise，会把这个promise的执行结果会传递给下一次then中<br />
              22.如果在then中返回的不是一个promise，而是一个普通值，会将这个普通值作为下次then的成功的结果<br />
            </p>
            <p>
              <pre>
                                <code>
function Promise(executor) {
    let that = this;
    that.status ='padding'; //  1.在内部维护一个status状态
    that.value = value; // 成功值
    that.reason = reason; // 失败值
    that.onResolvedCallBacks = []; // 可能new Promise中会有异步的操作，此时我们把异步操作时，执行的then函数的成功回调，统一保存在该数组中
    that.onRejectdCallBacks = [];
    function resolve (value) {
        if (that.status === 'padding') { // 3.此时新增一个状态判断，当状态为pending的时候才能执行
            that.value = value;
            that.status = 'resolved'; // 2.当调用了resolve时，更改状态为resolved
            that.onResolveCallBacks.forEach(fn=>fn());
        }
    })
    function reject (reason) {
        if (that.status === 'padding') {
            that.value = value;
            that.status = 'rejected';
            that.onRejectCallBacks.forEach(fn=>fn());
        }
    }
    // 5.当我们在执行executor时，内部抛出错误的时候，可以利用try catch来处理这个问题
    try {
        executor(resolve, reject);
    } catch {
        reject(error) // 以上resolve、reject暂时忽略掉，我们考虑一个情况，当promise抛出错误时，怎么去处理呢？
    }
}

<!-- Promise.prototype.then = function (onFulfilled, onRejected) {
    let that = this;
    if (that.status === 'resolved') { // 当我们在then中，执行了成功或者失败的回调函数时，首先要判断目前处于什么状态
        onFulfilled(that.value);
    }
    if (that.status === 'rejected') { // 当我们在then中，执行了成功或者失败的回调函数时，首先要判断目前处于什么状态
        onRejected(that.value);
    }

    if (that.status === 'padding') {
        that.onResolvedCallBacks.push(()=>{ // 一个promise的实例可以then多次
            onFulfilled(that.value); // 把成功的回调函数，存到该数组中，这样写的好处，就是把参数传进去，不需要将来遍历onResolvedCallbacks时，再传参
        });
        that.onRejectedCallBacks.push(()=>{
            onRejected(that.reason);
        });
    }
} -->

// 这个函数为核心，所有的promise都遵循这个规范
// 主要是处理then中返回的值x和promise2的关系
function resolvePromise(promise2,x,resolve,reject){
    // 当promise2和then返回的值x为同一个对象时，变成了自己等自己，会陷入死循环
    if(promise2 === x){
        return reject(new TypeError('Chaining cycle'));
    }
    let called;
    // x可能是一个promise也可能是一个普通值
    if(x!==null && (typeof x=== 'object' || typeof x === 'function')){
        try{
            let then = x.then;
            if(typeof then === 'function'){
                then.call(x,y=>{
                    if(called) return;
                    called = true;
                    resolvePromise(promise2,y,resolve,reject);
                },err=>{
                    if(called) return;
                    called = true;
                    reject(err);
                });
            }else{
                resolve(x);
            }
        }catch(e){
            if(called) return;
            called = true;
            reject(e);
        }
    }else{
        resolve(x);
    }
}

// then调用的时候，都是属于异步，是一个微任务
// 微任务会比宏任务先执行
// onFulfilled为成功的回调，onRejected为失败的回调
Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function'?onFulfilled:val=>val;
    onRejected = typeof onRejected === 'function'?onRejected: err=>{throw err}
    let self = this;
    let promise2;
    // 上面讲了，promise和jquery的区别，promise不能单纯返回自身，
    // 而是每次都是返回一个新的promise，才可以实现链式调用，
    // 因为同一个promise的pending resolve reject只能更改一次
    promise2 = new Promise((resolve, reject) => {
        if (self.status === 'resolved') {
            // 为什么要加setTimeout？
            // 首先是promiseA+规范要求的
            // 其次是大家写的代码，有的是同步，有的是异步
            // 所以为了更加统一，就使用为setTimeout变为异步了，保持一致性
            setTimeout(()=>{
                try { // 上面executor虽然使用try catch捕捉错误
                      // 但是在异步中，不一定能够捕捉，所以在这里
                      // 用try catch捕捉
                    let x = onFulfilled(self.value);
                    // 在then中，返回值可能是一个promise，所以
                    // 需要resolvePromise对返回值进行判断
                    resolvePromise(promise2,x,resolve,reject);
                } catch (e) {
                    reject(e);
                }
            },0)
        }
        if (self.status === 'rejected') {
            setTimeout(()=>{
                try {
                    let x = onRejected(self.reason);
                    resolvePromise(promise2,x,resolve,reject);
                } catch (e) {
                    reject(e);
                }
            },0)
        }
        if (self.status === 'pending') {
            self.onResolvedCallbacks.push(() => {
                setTimeout(()=>{
                    try {
                        let x = onFulfilled(self.value);
                        resolvePromise(promise2,x,resolve,reject);
                    } catch (e) {
                        reject(e);
                    }
                },0)
            });
            self.onRejectedCallbacks.push(() => {
                setTimeout(()=>{
                    try {
                        let x = onRejected(self.reason);
                        resolvePromise(promise2,x,resolve,reject);
                    } catch (e) {
                        reject(e);
                    }
                },0)
            });
        }
    });
    return promise2
}
Promise.defer = Promise.deferred = function(){
    let dfd = {};
    dfd.promise = new Promise((resolve,reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
}
module.exports = Promise;

                                </code>
                            </pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
//import { mapMutations } from "vuex";
import BScroll from "better-scroll";
import Promises from "@/utils/promise.js";
export default {
  data () {
    return {
      isActive: false,
      vueImage: require("../../common/images/js/vue.jpg"),
      avatar: require("../../common/images/avater.jpg"),
      dataArtical: {
        pageTitle: "promise实现源码",
        img: require("../../common/images/avater.jpg"),
        userName: "寻找许仙",
        pageInfo: "",
        pageTime: "2019-03-27"
      }
    };
  },
  methods: {
    mainTransition () {
      this.isActive = !this.isActive;
      this.isUl = !this.isUl;
    }
  },
  activated () {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "Vue.js 运行机制全局概览"); // 该方法比较靠谱
  },
  mounted () {
    let wrapper = this.$refs.pageContainer;
    this.scroll = new BScroll(wrapper, {
      scrollY: true,
      click: true,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|CODE|PRE)$/
      }
    });

    let promise = new Promises(function (resolve, reject) {
      console.log("1"); // 1
      setTimeout(function () {
        resolve(4444); // 更改pending状态为resolved ,
      }, 1000);
      //console.log(3);
    });

    promise.then((data) => {
      console.log(data); // 6
      //console.log("success1");
      // return 1;
      // return function () {
      //   return 123;
      // };
      return new Promises(function (resolve, reject) {
        resolve(2);
      });
    }, (err) => {
      console.log(err);
    });
    //console.log("2"); // 1,3,2,success1
  },
  components: {}
};
</script>
<style scoped>
</style>
