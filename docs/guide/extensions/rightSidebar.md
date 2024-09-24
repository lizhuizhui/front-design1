# 右侧边栏扩展

:::tip 右侧边栏扩展
`pluginManager` 提供了 registerRightSidebar 方法扩展右侧边栏功能模块
:::

参考 demo 仓库： [https://gitee.com/kcz66/k-designer-demo](https://gitee.com/kcz66/k-designer-demo)

## 右侧边栏扩展

在 src 目录下新建 designer-extensions 文件目录，下面是一个简单扩展示例

### 新建 designer-extensions/sidebar/index.vue

```vue
<template>
  <div>我是一个扩展模块</div>
</template>
```

### 新建 designer-extensions/index.ts(扩展函数)

```ts
import { pluginManager } from 'front-design';

// 安装扩展
export function setupDesignerExtensions(): void {
  // 添加右侧模块
  pluginManager.registerRightSidebar({
    id: 'test_view',
    title: '扩展',
    component: async () => await import('./sidebar/index.vue'),
  });
}
```

### main.ts 添加执行扩展函数

```ts
import { setupDesignerExtensions } from './designer-extensions';

// 执行扩展函数
setupDesignerExtensions();
```

## 如何修改覆盖原来的模块

在扩展组件时，需要传入的配置 id 是唯一的，如果 id 一样则后注册组件会替换原来的组件，所以我们可以通过设置 id 来覆盖原来右侧边栏模块

| 模块名 | id             |
| ------ | -------------- |
| 属性   | attribute_view |
| 样式   | style_view     |
| 事件   | event_view     |
