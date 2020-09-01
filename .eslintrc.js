module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "browser": true,
    "commonjs": true,
  },
  //一旦配置了root，ESlint停止在父级目录中查找配置文件
  root: true,
  //解析器
  //"parser": "babel-eslint",
  "extends": [
    "eslint:recommended", // 推荐规则
    "plugin:vue/essential"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    //启用ES6语法支持(如果支持es6的全局变量{env: {es6: true}}，则默认启用ES6语法支持)
    //此处也可以使用年份命名的版本号：2018
    "ecmaVersion": 2018,
    "sourceType": "module",
    "parser": "babel-eslint", // eslint-plugin-vue中的很多规则都需要vue-eslint-parser检查<template>, vue-eslint-parser和babel-parser二者有冲突。
  },
  "plugins": [
    // "vue",
    // "html" // eslint-plugin-html
  ],
  "rules": {
    "vue/no-parsing-error": [2, { // 非闭合标签
      "x-invalid-end-tag": false
    }],
    "linebreak-style": ["off", "unix"],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": ["error", "unix"],
    "quotes": [
      "error",
      // "single"
      "double"
    ],
    "semi": [
      "error",
      "always",
      // "never"
    ],
    //"no-console": "allow"
  }
};
