#!/usr/bin/env node
// console.log("hello ", process.argv[2]); // 获取参数

// var name = process.argv[2]; // 进程
// var exec = require("child_process").exec;
// var child = exec("echo hello1 " + name, function(err, stdout, stderr) {
//   if (err) throw err;
//   console.log(stdout);
// });


// shelljs 模块重新包装了 child_process
// var name = process.argv[2];
// var shell = require("shelljs");
// shell.exec("echo hello1 " + name);
// process.exit(1);
//上面代码是 shelljs 的本地模式，即通过 exec 方法执行 shell 命令。此外还有全局模式，允许直接在脚本中写 shell 命令。



require("shelljs/global");

if (!which("git")) {
  echo("Sorry, this script requires git");
  exit(1);
}

mkdir("-p", "out/Release");
cp("-R", "stuff/*", "out/Release");

cd("lib");
ls("*.js").forEach(function(file) {
  sed("-i", "BUILD_VERSION", "v0.1.2", file);
  sed("-i", /.*REMOVE_THIS_LINE.*\n/, "", file);
  sed("-i", /.*REPLACE_LINE_WITH_MACRO.*\n/, cat("macro.js"), file);
});
cd("..");

if (exec("git commit -am \"Auto-commit\"").code !== 0) {
  echo("Error: Git commit failed");
  exit(1);
}
