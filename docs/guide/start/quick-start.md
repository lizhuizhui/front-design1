# 快速上手

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

## monaco-editor 资源加载问题

vite 项目安装使用 vite-plugin-monaco-editor 插件加载 monaco-editor 依赖资源

```bash
npm i -D vite-plugin-monaco-editor
```

在 vite.config.ts 中添加

```typescript
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
  plugins: [
    vue(),
    monacoEditorPlugin({
      languageWorkers: [
        'editorWorkerService',
        'css',
        'html',
        'json',
        'typescript',
      ],
    }),
  ],
});
```
