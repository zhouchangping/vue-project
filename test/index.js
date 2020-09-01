var add = require("./testcalc.js.js").add;
var expect = require("chai").expect; // Mocha本身不带断言库，所以必须先引入断言库。
describe("加法表达式的测试",function(){ // describe块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。
  it("0 + 0 = 0", function() { // 每个describe块应该包括一个或多个it块。
    expect(add(0, 0)).to.be.equal(0);
  });
  it("0 + 1 = 1", function() { // it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。
    expect(add(0, 1)).to.be.equal(1);
  });
  it("0 - 1 = -1", function() {
    expect(add(0, -1)).to.be.equal(-1);
  });
});
