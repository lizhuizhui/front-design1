<template>
  <Modal v-model="visible" title="查看数据" class="w-900px" width="900px" @close="handleClose" @ok="handleExportData"
    okText="导出数据">
    <div class="min-w-750px rounded bg-white h-full">
      <MonacoEditor ref="monacoEditorRef" class="editor h-full" :config="MonacoEditorConfig" language="json" />
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import { pluginManager } from '@front-design/utils'
import { ref, inject, nextTick } from 'vue'
import { PageSchema } from '../../../../../types/front-design'

const Modal = pluginManager.getComponent('modal')
const MonacoEditor = pluginManager.getComponent('monacoEditor')
const MonacoEditorConfig = {
  theme: 'vs-light',
  selectOnLineNumbers: true,
  minimap: {
    enabled: false
  },
  readOnly: true
}
const monacoEditorRef = ref<any>(null)
const visible = ref(false)
const pageSchema = inject('pageSchema') as PageSchema
function handleClose() {
  visible.value = false
}

// 打开预览页面
function handleOpen() {
  visible.value = true
  if (monacoEditorRef.value) {
    monacoEditorRef.value.setValue(JSON.stringify(pageSchema, null, 2))
  } else {
    // 编辑器组件未加载,延时重新调用函数
    setTimeout(() => {
      handleOpen()
    }, 300)
  }
}


/**
 * 导出数据
 */
function handleExportData(fileName = `epic-data.json`) {
  let content = "data:text/json;charset=utf-8,";
  content += JSON.stringify(pageSchema, null, 2);
  var encodedUri = encodeURI(content);
  var actions = document.createElement("a");
  actions.setAttribute("href", encodedUri);
  actions.setAttribute("download", fileName);
  actions.click();
}

defineExpose({
  handleOpen
})
</script>
