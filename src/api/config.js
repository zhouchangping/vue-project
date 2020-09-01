export const commonParams = {
  g_tk: 5381,
  inCharset: "utf-8",
  outCharset: "utf-8",
  notice: 0,
  format: "jsonp"
};

export const options = {
  param: "jsonpCallback"
};

export const ERR_OK = 0;



const sum1 = (num) => {
  let res = 0;
  if (typeof num !== "number") {return 0;}
  const fn = (fn, num) => {
    if (typeof num !== "number") {return res;}
    return fn.bind(this, res + num);
  };
  return fn.bind(this, 0 + num);
};
sum1(1)(2)();


function sum2(num) {
  return function (y) {
    if (typeof y !== "undefined") {
      num  = num + y;
      return arguments.callee;
    } else {
      return num;
    }
  };
}
sum2(1)(2)(3)();




function curry(fn, args) {
  var length = fn.length;
  var argss = args || [];
  return function(){
    var newArgs = argss.concat(Array.prototype.slice.call(arguments));
    if(newArgs.length < length){
      return curry.call(this,fn,newArgs);
    }else{
      return fn.apply(this,newArgs);
    }
  };
}
function multiFn(a, b, c) {
  return a * b * c;
}
var multi = curry(multiFn);
multi(1)(2)(3);

function multi1() {
  var args = Array.prototype.slice.call(arguments);
  var fn = function() {
    var newArgs = args.concat(Array.prototype.slice.call(arguments));
    return multi1.apply(this, newArgs);
  };
  fn.toString = function() {
    return args.reduce(function(a, b) {
      return a * b;
    });
  };
  return fn;
}
multi1(1)(2)(3);


