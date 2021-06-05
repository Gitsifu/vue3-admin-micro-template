# vue3-admin-micro-template

## 这是什么

一款开箱即用的 Vue3 微前端项目模版，基于 Vue(3.x) & umijs/qiankun(2.4.2)

## 特点

- 微服务架构，子模块可单独开发与部署
- 

## TODO

- [x] 可初步运行
- [ ] 子项目单独运行可加载菜单栏
- [ ] 集成操作 sessionStorage & localStorage & Cookies 更加简便的方法
- [ ] 提取 Layout 为公共组件，发布成npm包
- [ ] 优化！优化！优化！
- [ ] 更多...

## 指南

### 下载依赖

```shell
npm micro:install
```

### 运行

```shell
npm run mico:start
```

### 访问

[http://localhost:7079](http://localhost:7079)

## 文档

## 支持

如果觉得模版不错，或者已经在使用了，希望你可以去 **Github** 或者 **Gitee(码云)** 帮我点个 ⭐ ，这将对我是极大的鼓励。

[![star](https://img.shields.io/github/stars/gitsifu/vue3-admin-micro-template?style=social)](https://github.com/gitsifu/vue3-admin-micro-template)

[![star](https://gitee.com/sifu/vue3-admin-micro-template/badge/star.svg?theme=dark)](https://gitee.com/sifu/vue3-admin-micro-template)



## 搭建过程中遇到的问题

### 1、导入运行时 + 编译器版本 

使用以下代码时（template）的vue导入需导入运行时 + 编译器版本

使用如下代码渲染

```js
// https://v3.cn.vuejs.org/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E4%BB%85%E8%BF%90%E8%A1%8C%E6%97%B6
import {createApp} from 'vue/dist/vue.esm-browser';

function vueRender({ loading }) {
  return createApp({
    template: `
      <div class="mainapp">
        <!-- 标题栏 -->
        <header class="mainapp-header">
          <h1>Vue3-Micro</h1>
        </header>
        <div class="mainapp-main">
          <!-- 侧边栏 -->
          <ul class="mainapp-sidemenu">
            <li @click="push('/app1')">app1</li>
            <li @click="push('/app2')">app2</li>
          </ul>
          <!-- 子应用  -->
          <div class="subapp-container">
            <h4 v-if="loading" class="subapp-loading">Loading...</h4>
            <div id="main-viewport"></div>
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        loading,
      };
    },
    methods: {
      push(subapp) { window.history.pushState(null, subapp, subapp) }
    }
  }).mount('#app-container');
}
```


### 2、使用vue-loader报错

使用如下代码渲染（*.vue文件）

```js
import {createApp} from 'vue';
import App from './App.vue'
function vueRender({ loading }) {
  return createApp(App,{loading}).mount('#app-container');
}
```

1、报错
```text
Vue 3: TypeError: compiler.parseComponent is not a function
```
中途试错方案：https://stackoverflow.com/questions/64587600/vue-3-typeerror-compiler-parsecomponent-is-not-a-function

2、报错
```text
TypeError: compiler.compile is not a function
```
最终解决方案（Google牛逼）：https://forum.vuejs.org/t/compilation-error-vue-3/114117

---



