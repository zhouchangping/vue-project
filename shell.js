//局部模式-用于构建目录，并且迁移到指定目录，然后提交代码
var shell = require("shelljs");
//全局模式下，就不需要用shell开头了。
require("shelljs/global");
if (shell.exec("npm run build").code !== 0) {//执行npm run build 命令
  shell.echo("Error: Git commit failed");
  shell.exit(1);
}

//由于我的用另外一个仓库存放dist目录，所以这里要将文件增量复制到目标目录。并切换到对应目录。
shell.cp("-r", "./dist/*", "../vue-zhouzhou");
shell.cd("../vue-zhouzhou");
shell.exec("git add .");
shell.exec("git commit -m 'autocommit'");
shell.exec("git push");


