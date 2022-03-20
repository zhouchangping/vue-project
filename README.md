# my-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# vue-project

## commit-message： 如：git commit -m "feat:message"
+ feat：新功能（feature）
+ fix：修补bug
+ docs：文档（documentation）
+ style： 格式（不影响代码运行的变动）
+ refactor：重构（即不是新增功能，也不是修改bug的代码变动）
+ test：增加测试
+ chore：构建过程或辅助工具的变动

## babel-eslint可以对所有有效的babel代码进行lint处理。

## 自动修复
```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
```

## vetur高亮vue文件

## 项目中eslint起作用是由于vscode插件eslint及其配置
## 代码改动后，引起vscode eslint监控到，变红，
+ 没有vscode 的eslint无法监控，不能变红，也无法保存修复，
+ 删除eslint-plugin-vue，无法协助eslint处理vue项目，也无法爆红和保存
+ 注释settings.json中保存，可以变红，但是无法修复

## node 更新： https://segmentfault.com/a/1190000021739166




## webpack插件知识
+ webpack-dev-server是webpack官方提供的一个小型Express服务器。使用它可以为webpack打包生成的资源文件提供web服务。
  + 为静态文件提供服务
  + 自动刷新和热替换(HMR)
+ new webpack.HotModuleReplacementPlugin(), // 开启HMR,局部热替换,和dev-server配置hot: true重复
