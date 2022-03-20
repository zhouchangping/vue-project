// 完整代码 也顺便带大家理顺一下
function Promise(executor) {
  let self = this;
  self.value = undefined;  // 成功的值
  self.reason = undefined;  // 失败的值
  self.status = "pending"; // 目前promise的状态pending
  self.onResolvedCallbacks = []; // 可能new Promise的时候会存在异步操作，把成功和失败的回调保存起来
  self.onRejectedCallbacks = [];
  function resolve(value) { // 把状态更改为成功
    if (self.status === "pending") { // 只有在pending的状态才能转为成功态
      self.value = value;
      self.status = "resolved";
      console.log(self.onResolvedCallbacks); // 4 7 19
      self.onResolvedCallbacks.forEach(fn => {
        console.log("0000");
        fn();
      }); // 把new Promise时异步操作，存在的成功回调保存起来
    }
  }
  function reject(reason) {  // 把状态更改为失败
    if (self.status === "pending") { // 只有在pending的状态才能转为失败态
      self.reason = reason;
      self.status = "rejected";
      self.onRejectedCallbacks.forEach(fn => fn()); // 把new Promise时异步操作，存在的失败回调保存起来
    }
  }
  try {
    // 在new Promise的时候，立即执行的函数，称为执行器
    executor(resolve, reject);
  } catch (e) { // 如果执行executor抛出错误，则会走失败reject
    reject(e);
  }
}

// then调用的时候，都是属于异步，是一个微任务
// 微任务会比宏任务先执行
// onFulfilled为成功的回调，onRejected为失败的回调
Promise.prototype.then = function (onFulfilled, onRejected) {
  console.log(onFulfilled); // 2 13
  // console.log(self.status);
  onFulfilled = typeof onFulfilled === "function"?onFulfilled:val=>val;
  onRejected = typeof onRejected === "function"?onRejected: err=>{throw err;};
  let self = this;
  let promise2;
  // 上面讲了，promise和jquery的区别，promise不能单纯返回自身，
  // 而是每次都是返回一个新的promise，才可以实现链式调用，
  // 因为同一个promise的pending resolve reject只能更改一次
  promise2 = new Promise((resolve, reject) => {
    if (self.status === "resolved") {
      console.log("promise2 resloved"); // 14
      // 为什么要加setTimeout？
      // 首先是promiseA+规范要求的
      // 其次是大家写的代码，有的是同步，有的是异步
      // 所以为了更加统一，就使用为setTimeout变为异步了，保持一致性
      setTimeout(()=>{ // 被调用不是当前的上下文，then方法是异步的
        try { // 上面executor虽然使用try catch捕捉错误
          // 但是在异步中，不一定能够捕捉，所以在这里
          // 用try catch捕捉
          console.log(self.value + "selfvalue"); // 15
          let x = onFulfilled(self.value);
          console.log(x);
          // 在then中，返回值可能是一个promise，所以
          // 需要resolvePromise对返回值进行判断
          resolvePromise(promise2,x,resolve,reject);
          console.log("end");
        } catch (e) {
          reject(e);
        }
      },0);
    }
    if (self.status === "rejected") {
      setTimeout(()=>{
        try {
          let x = onRejected(self.reason);
          resolvePromise(promise2,x,resolve,reject);
        } catch (e) {
          reject(e);
        }
      },0);
    }
    if (self.status == "pending") {
      console.log("promise2 pending"); // 3
      self.onResolvedCallbacks.push(() => {
        setTimeout(()=>{
          try {
            console.log(44445454); // 5
            let x = onFulfilled(self.value); // promise
            console.log(9999); // 8
            resolvePromise(promise2,x,resolve,reject);
          } catch (e) {
            reject(e);
          }
        },0);
      });
      self.onRejectedCallbacks.push(() => {
        setTimeout(()=>{
          try {
            let x = onRejected(self.reason);
            resolvePromise(promise2,x,resolve,reject);
          } catch (e) {
            reject(e);
          }
        },0);
      });
    }
  });
  return promise2;
};

// 这个函数为核心，所有的promise都遵循这个规范
// 主要是处理then中返回的值x和promise2的关系
function resolvePromise(promise2,x,resolve,reject){
  console.log(x); // 9 17
  // 当promise2和then返回的值x为同一个对象时，变成了自己等自己，会陷入死循环
  if(promise2 === x){
    return reject(new TypeError("Chaining cycle"));
  }
  let called;
  // x可能是一个promise也可能是一个普通值
  if(x!==null && (typeof x=== "object" || typeof x === "function")){
    console.log(typeof x); // 10
    try{
      let then = x.then;
      console.log(then); // 11
      if(typeof then === "function"){
        console.log(5555); // 12
        then.call(x,y=>{
          console.log(y + "12377777"); // 16
          if(called) return;
          called = true;
          resolvePromise(promise2,y,resolve,reject);
          console.log(8888888888);
        },err=>{
          if(called) return;
          called = true;
          reject(err);
        });
      }else{
        console.log(x);
        resolve(x);
      }
    }catch(e){
      if(called) return;
      called = true;
      reject(e);
    }
  }else{
    console.log(x+ "123888"); // 18
    resolve(x);
  }
}

Promise.defer = Promise.deferred = function(){
  let dfd = {};
  dfd.promise = new Promise((resolve,reject)=>{
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};
export default  Promise;


// 先执行executor-执行then,返回新的promise,在数组中追加异步处理； 等reslove处理，->调用数组。执行追加的异步处理，根据结果，判断是否继续执行异步结果，
// 递归resolvePromise，根据追加异步函数的返回值确定执行resolvePromise还是resolve()
