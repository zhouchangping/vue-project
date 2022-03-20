let fs = require("fs");
let data = require("../urlData.js");
let urlTop = __dirname + "/urls/"; // 当前页面的url
if (fs.existsSync(urlTop)) {
  deleteall(urlTop);
  fs.mkdir(urlTop,function(error){
    if(error){
      console.log(error);
      return false;
    }
    console.log("创建目录成功");
  });
} else {
  fs.mkdir(urlTop,function(error){
    if(error){
      console.log(error);
      return false;
    }
    console.log("创建目录成功");
  });
}

/**
 * @description 删除目录下文件
 * @param {*} path
 */
function deleteall(path) {
  var files = [];
  if(fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function(file) {
      var curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()) { // recurse
        deleteall(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}


let nameArray = [];
let dataTxt = __dirname + "/urls/"+ "dataTxt.js";
data.forEach(element => {
  console.log("__dirname : " + __dirname);
  nameArray.push(element.menuName + "");
  let url = __dirname + "/urls/"+element.menuName + ".js";
  if (!fs.existsSync(url)) {
    let elementObj = `let newObj = ${JSON.stringify(element, null, 2)};
export default newObj;
    `;

    fs.writeFile(url, elementObj, (err) => {
      if (err) throw err;
      console.log("It's saved!");
    });
  } else {
    fs.de;
  }
});
let objValue = `${JSON.stringify(nameArray, null, 2)};`;
fs.writeFile(dataTxt, objValue, (err) => {
  if (err) throw err;
  console.log("It's Array");
});

