<template>
  <div class="epic-outline">
    <ETree :options="pageSchema.schemas" draggable :selected-keys="selectedKeys" :hover-key="designer.state.hoverNode?.id"
      @node-click="handleNodeClick">
      <template #tree-node="{ schema }">
        <div class="text-padding" @mouseenter.stop="designer.setHoverNode(schema)"
          @mouseleave.stop="designer.setHoverNode(null)">
          {{ schema.label ??
            pluginManager.getComponentConfingByType(schema.type)?.defaultSchema.label }}<span class="epic-node-type-text">
            {{ schema.type }}
          </span>
        </div>
      </template>
    </ETree>
  </div>
</template>
<script lang="ts" setup>
import ETree from '../../../../tree'
import { inject, computed } from 'vue'
import { PageSchema, Designer } from '../../../../../types/front-design'
import { pluginManager } from '@front-design/utils'

const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema


// 计算选中节点值
const selectedKeys = computed(() => {
  const id = designer.state.checkedNode?.id
  return id ? [id] : []
})

// 设置选中节点
function handleNodeClick(e: any) {
  designer.setCheckedNode(e.componentSchema)
}

</script>
