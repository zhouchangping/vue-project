Function.prototype.bind = function(context) {
  var self = this;
  return function() {
    return self.apply(context, argument);
  };
};

var obj = {
  name: "zhouzhou"
};

var fuc =  function() {
  alert(this.name);
}.bind(obj);
