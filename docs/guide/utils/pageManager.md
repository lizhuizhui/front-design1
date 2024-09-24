# pageManager 页面管理器

:::tip 插件管理器
`pageManager ` 是用于查询当前页面组件实例，并且可以通过页面管理器，跟渲染的组件进行交互

页面管理器是由 builder 组件创建，并在 ready 事件返回该对象

:::

## 通过 builder 组件 ready 事件获取 pageManager

```vue
<template>
  <div>
    <EBuilder ref="kfb" :pageSchema="pageSchema" @ready="handleReady">
    </EBuilder>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { EBuilder, PageManager, PageSchema } from 'front-design';

const pageSchema = ref<PageSchema>({
  schemas: [
    {
      type: 'page',
      id: 'root',
      label: '页面',
      children: [
        {
          label: '表单',
          type: 'form',
          icon: 'epic-icon-daibanshixiang',
          name: 'default',
          componentProps: {
            labelWidth: 100,
            labelCol: {
              span: 5,
            },
            wrapperCol: {
              span: 19,
            },
            hideRequiredMark: false,
            labelPosition: 'right',
            size: 'default',
            requireAsteriskPosition: 'left',
          },
          children: [
            {
              label: '上传文件',
              type: 'upload-file',
              icon: 'epic-icon-upload',
              field: 'upload',
              input: true,
              componentProps: {
                action: 'https://epic.kcz66.com/static/upload-img.json',
                name: 'file',
                showFileList: true,
              },
              id: 'upload-file_by35flst',
            },
          ],
          id: 'form_uknia964',
        },
      ],
      componentProps: {
        style: {
          padding: '16px',
        },
      },
    },
  ],
  script:
    "const { defineExpose, getComponent } = this;\n\nfunction test (){\n    console.log('test')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})",
});

function handleReady(pageManager: PageManager) {
  console.log(pageManager);
}
</script>
```

## Methods

#### getComponentInstance

类型：`(id: string) => ComponentPublicInstance `

说明：用于获取组件实例
