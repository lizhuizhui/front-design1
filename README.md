![](https://epic.kcz66.com/static/logo.png#pic_center)

<h3 align="center" style="background-image:-webkit-linear-gradient(left,#44c0fa,#c26cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">EpicDesigner</h3>

<h4 align="center">一个开箱即用的拖拽式的可视化低代码设计器</h4>

<p align="center">
  <a href="https://github.com/vuejs/core">
    <img src="https://img.shields.io/badge/vue-3.3.4-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/microsoft/TypeScript">
    <img src="https://img.shields.io/badge/typescript-5.1.6-blue" alt="ant-design-vue">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

📦github 仓库：[https://github.com/Kchengz/front-design](https://github.com/Kchengz/front-design)

📦gitee 仓库：[https://gitee.com/kcz66/front-design](https://gitee.com/kcz66/front-design)

📖 文档地址：[https://kcz66.gitee.io/front-design/](https://kcz66.gitee.io/front-design/)

💎 项目预览地址：

- element-plus：[https://epic.kcz66.com/demo/element-plus/](https://epic.kcz66.com/demo/element-plus/)
- antdv3：[https://epic.kcz66.com/demo/antdv3/](https://epic.kcz66.com/demo/antdv3/)
- naive-ui：[https://epic.kcz66.com/demo/naive-ui/](https://epic.kcz66.com/demo/naive-ui/)

## 简介

可以简称`epic设计器`，是一个功能强大、开箱即用的拖拽式低代码设计器。它基于 Vue3 开发，兼容多套 UI 组件库，除了基础的页面设计功能，EpicDesigner 还提供了强大的扩展功能，可以让开发者根据自己的需求自由扩展和定制组件。此外，EpicDesigner 使用 JSON 配置来生成页面，可帮助开发者快速生成页面，提高开发效率。它提供了两个重要组件：`e-designer` 设计器和 `e-builder` 生成器。

## 最新版本

[![](https://img.shields.io/npm/v/front-design.svg?style=flat-square)](https://www.npmjs.com/package/front-design)

[查看更新日志](./docs/updateLog.md)

#### 功能

- [x] 拖拽设计
- [x] 自定义 actionBar
- [x] 布局组件扩展
- [x] 自定义组件扩展
- [x] 事件扩展
- [x] 组件懒加载
- [x] 完善布局
- [x] 组件属性自定义
- [x] 支持不同 UI
- [x] 插件扩展

## 核心组件介绍

#### EDesigner 设计器

`EDesigner ` 是一个可视化设计器组件，用户可以通过拖拽组件的方式快速生成 JSON 配置。它提供了丰富的组件库和配置项，用户可以根据需要选择合适的组件并配置相应的属性、事件和动作。设计器还提供了实时预览功能，用户可以随时查看所设计页面的效果。最终，用户可以将 JSON 配置导出，用于页面的生成和修改。

#### EBuilder 生成器

`EBuilder` 是一个页面构建组件，它可以将设计器生成的 JSON 配置构建成页面，完成组件的渲染、事件绑定和数据回显等操作。

## 安装 front-design

```bash
npm i front-design
```

front-design 目标是支持多 UI 兼容,目前支持以下 UI

- element-plus
- ant-design-vue
- naive-ui

## 选择 UI 组件库

### 选择 element-plus

安装 ui 框架依赖

```bash
npm i element-plus
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入front-design样式
import 'front-design/dist/style.css';

// 引入Element plus样式
import 'element-plus/dist/index.css';

import { setupElementPlus } from 'front-design/dist/ui/elementPlus';
// 注册Element UI
setupElementPlus();
```

### 选择 ant-design-vue v4.x 版本（antd 推荐使用 v4.x 版本）

安装 ui 框架依赖

```bash
npm i ant-design-vue
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入front-design样式
import 'front-design/dist/style.css';

// 引入antd UI 重置样式
import 'ant-design-vue/dist/reset.css';

import { setupAntd } from 'front-design/dist/ui/antd';
// 使用Antd UI
setupAntd();
```

### ant-design-vue v3.x 版本需要改成下面方式

为了减少维护精力，后续开发测试主要以 v4.x 版本，不再对 v3.x 版本进行测试，建议升级 ant-design-vue 到 v4.x 最新版本

```javascript
// 引入front-design样式
import 'front-design/dist/style.css';

// 引入antd UI样式
import 'ant-design-vue/dist/antd.css';

import { setupAntd } from 'front-design/dist/ui/antd';
// 使用Antd UI
setupAntd();
```

### 选择 naive-ui

安装 ui 框架依赖

```bash
npm i -D naive-ui
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入front-design样式
import 'front-design/dist/style.css';

import { setupNaiveUi } from 'front-design/dist/ui/naiveUi';
// 注册Naive Ui
setupNaiveUi();
```

## EDesigner(设计器) 基础用法

```vue
<template>
  <div class="h-full">
    <EDesigner />
  </div>
</template>
<script setup lang="ts">
import { EDesigner } from 'front-design';
</script>
<style>
.h-full {
  height: 100vh;
}
</style>
```

## EBuilder(生成器) 基础用法

```vue
<template>
  <div>
    <EBuilder :pageSchema="pageSchema" />
  </div>
</template>
<script setup>
import { EBuilder } from 'front-design';

const pageSchema = {
  schemas: [
    {
      type: 'page',
      id: 'root',
      children: [
        {
          label: '输入框',
          type: 'input',
          field: 'input',
          icon: 'epic-icon-write',
          input: true,
          componentProps: {
            defaultValue: '',
            placeholder: '请输入',
            size: 'default',
            type: 'text',
          },
          id: 'gbm1xhrrj5s00',
        },
      ],
      componentProps: {
        style: {
          padding: '16px',
        },
      },
    },
  ],
};
</script>
```

## 交流

点击链接加入 qq 群聊

- [【front-design 交流群：747609683】](https://jq.qq.com/?_wv=1027&k=CtrM9ce2)

## 捐赠

如果你觉得 front-design 对你有帮助，欢迎给我捐赠

![](https://epic.kcz66.com/static/donation.png)
