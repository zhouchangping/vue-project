var count = 0;
setTimeout(() => {
  console.log("base.count", ++count);
}, 500);
// module.exports.count = count; // module.exports = { count: 0}
// module.exports = count; // module.exports = 0

// exports.count = count; // // module.exports = { count: 0}
// exports.a = 30;
// exports = count; // {}
module.exports.counts = function counts (value) {
  return value;
};
module.exports.x = 5;
