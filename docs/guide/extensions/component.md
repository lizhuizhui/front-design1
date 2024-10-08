# 组件扩展

:::tip 组件扩展
`pluginManager` 提供了 registerComponent 方法添加组件
:::

参考 demo 仓库： [https://gitee.com/kcz66/k-designer-demo](https://gitee.com/kcz66/k-designer-demo)

## 普通组件扩展

在 src 目录下新建 designer-extensions 文件目录，下面是一个简单扩展示例

## 新建 designer-extensions/test/index.vue（组件）

```vue
<template>
  <div>我是扩展的组件</div>
</template>
```

## 新建 designer-extensions/test/index.ts(组件配置文件)

[ComponentConfigModel 配置字段类型](#componentconfigmodel-类型及字段注释)

```ts
import { type ComponentConfigModel } from 'front-design';

export default {
  component: async () => await import('./cmp.vue'),
  defaultSchema: {
    label: '测试扩展组件',
    type: 'test',
    componentProps: {},
  },
  groupName: '自定义组件',
  config: {
    attribute: [
      {
        label: '属性1',
        type: 'input',
        field: 'name',
      },
    ],
  },
} as ComponentConfigModel;
```

## 新建 designer-extensions/index.ts(扩展函数)

```ts
import { pluginManager } from 'front-design';
import Test from './Test';

// 安装扩展
export function setupDesignerExtensions(): void {
  // 注册组件
  pluginManager.registerComponent(Test);
}
```

## main.ts 添加执行扩展函数

```ts
import { setupDesignerExtensions } from './designer-extensions';

// 执行扩展函数
setupDesignerExtensions();
```

## ComponentConfigModel 类型及字段注释

```
export interface ComponentConfigModel {
  // 组件
  component: any;
  // 分组名称（组件分组），不设置分组时仅注册，但不会显示在组件列表中，可选
  groupName?: string;
  // 默认组件结构数据
  defaultSchema: ComponentSchema;
  // 配置
  config: {
    // 属性编辑列表
    attribute?: ComponentSchema[];
    // 样式编辑组件列表
    style?: ComponentSchema[];
    // 可触发事件
    event?: EventModel[];
    // 可执行函数
    action?: ActionModel[];
  };
  // 输入表单组件v-model绑定变量名称 默认 modelValue
  bindModel?: string;
}
```
