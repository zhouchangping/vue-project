// ----- 源码实现部分
function Promise(executor){
  let self = this;
  self.value = undefined;
  self.reason = undefined;
  self.status = "pending";
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];
  function resolve(value){
    // console.log("hahaha");
    if(self.status === "pending"){
      self.value = value;
      self.status = "resolved";
      // console.log(self.onResolvedCallbacks);
      self.onResolvedCallbacks.forEach(fn=>fn());
    }
  }

  function reject(reason){
    if(self.status === "pending"){
      self.reason = reason;
      self.status = "rejected";
      self.onRejectedCallbacks.forEach(fn=>fn());
    }
  }

  try{
    executor(resolve,reject);
  }catch(error){
    reject(error);
  }
}

// 1.声明一个resolvePromise函数
// 这个函数非常核心，所有的promise都遵循这个规范，所有的promise可以通用，
/**
*
* @param {*} promise2 then的返回值，返回新的promise
* @param {*} x then中成功函数或者失败函数的返回值
* @param {*} resolve promise2的resolve
* @param {*} reject promise2的reject
*/
function resolvePromise(promise2,x,resolve,reject){
  // 3.从2中我们可以得出，自己不能等于自己
  // 当promise2和x是同一个对象的时候，则走reject
  if(promise2 === x){
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  // 4.因为then中的返回值可以为promise，当x为对象或者函数，才有可能返回的是promise
  let called;
  if(x !== null && (typeof x === "object" || typeof x === "function")){
    // 8.从第7步，可以看出为什么会存在抛出异常的可能，所以使用try catch处理
    try{
      // 6.因为当x为promise的话，是存在then方法的
      // 但是我们取一个对象上的属性，也有可能出现异常，我们可以看一下第7步
      let then = x.then;

      // 9.我们为什么在这里用call呢？解决了什么问题呢？可以看上面的第10步
      // x可能还是个promise，那么就让这个promise执行
      // 但是还是存在一个恶作剧的情况，就是{then:{}}
      // 此时需要新增一个判断then是否函数
      if(typeof then === "function"){
        then.call(x,(y)=>{ // y是返回promise后的成功结果
          // 一开始我们在这里写的是resolve(y)，但是考虑到一点
          // 这个y，有可能还是一个promise，
          // 也就是说resolve(new Promise(...))
          // 所以涉及到递归，我们把resolve(y)改成以下

          // 12.限制既调resolve，也调reject
          if(called) return;
          called = true;

          resolvePromise(promise2,y,resolve,reject);
          // 这样的话，代码会一直递归，取到最后一层promise

          // 11.这里有一种情况，就是不能既调成功也调失败，只能挑一次，
          // 但是我们前面不是处理过这个情况了吗？
          // 理论上是这样的，但是我们前面也说了，resolvePromise这个函数
          // 是所有promise通用的，也可以是别人写的promise，如果别人
          // 的promise可能既会调resolve也会调reject，那么就会出问题了，所以我们接下来要
          // 做一下限制，这个我们写在第12步

        },(err)=>{ // err是返回promise后的失败结果
          if(called) return;
          called = true;
          reject(err);
        });
      }else{
        resolve(x); // 如果then不是函数的话，那么则是普通对象，直接走resolve成功
      }
    }catch(e){ // 当出现异常则直接走reject失败
      if(called) return;
      called = true;
      reject(e);
    }
  }else{ // 5.x为一个常量，则是走resolve成功
    // console.log('sucess2')
    resolve(x);
  }
}

Promise.prototype.then = function(onFulfilled,onRejected){
  // console.log("then");
  // onFulfilled、onRejected是可选参数
  onFulfilled = typeof onFulfilled === "function"?onFulfilled:val=>val;
  onRejected = typeof onRejected === "function"?onRejected: err=>{throw err;};
  let self = this;
  let promise2 = new Promise((resolve,reject)=>{
    if(self.status === "resolved"){
      // 13.根据promiseA+规范，onFulfilled或onRejected必须
      // 被调用不是当前的上下文，then方法是异步的
      setTimeout(()=>{
        try{
          let x = onFulfilled(self.value);
          resolvePromise(promise2,x,resolve,reject);
        }catch(e){
          reject(e);
        }
      },0);
    }

    if(self.status === "rejected"){
      // 同13
      setTimeout(()=>{
        try{
          let x = onRejected(self.reason);
          resolvePromise(promise2,x,resolve,reject);
        }catch(e){
          reject(e);
        }
      },0);
    }

    if(self.status === "pending"){
      self.onResolvedCallbacks.push(()=>{
        // 同13
        setTimeout(()=>{
          try{
            let x =  onFulfilled(self.value);
            resolvePromise(promise2,x,resolve,reject);
          }catch(e){
            reject(e);
          }
        },0);
      });
      self.onRejectedCallbacks.push(()=>{
        // 同13
        setTimeout(()=>{
          try{
            let x = onRejected(self.reason);
            resolvePromise(promise2,x,resolve,reject);
          }catch(e){
            reject(e);
          }
        },0);
      });
    }
  });
  return promise2;
};

// 14.到目前为止，根据promiseA+规范的代码写得差不多了，我们可以通过测试代码来测试我们是否写得正确，下面我们写一段测试代码

Promise.defer = Promise.deferred = function(){
  let dfd = {};
  dfd.promise = new Promise((resolve,reject)=>{
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

// 14.接下来我们要安装一个插件，npm install promises-aplus-test -g

export default Promise;
