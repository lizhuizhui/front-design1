<template>
  <draggable v-if="!props.parentSchema?.childImmovable" v-model="modelSchemas" item-key="id" :component-data="{
  }" class="draggable-range" v-bind="{
  animation: 200,
  tag: 'ul',
  group: 'tree-draggable',
  ghostClass: 'moveing',
  draggable: '.draggable-item',
  disabled: !treeProps.draggable || modelSchemas[0]?.type === 'page'

}" @start="handleSelect($event.oldIndex)">
    <template #item="{ element, index }">
      <ETreeNodeItem :class="isDraggable(element)" :key="element.id" :schema="element" />
    </template>
  </draggable>

  <ul v-else>
    <ETreeNodeItem v-for="( element ) in  modelSchemas" :key="element.id" :schema="element" />
  </ul>
</template>
<script lang="ts" setup>
import { computed, inject } from 'vue'
import { ComponentSchema, Designer } from '../../../types/front-design'
import ETreeNodeItem from './treeNodeItem.vue'
import draggable from 'vuedraggable'
defineOptions({
  name: 'ETreeNodes'
})
const designer = inject('designer') as Designer
const treeProps = inject('treeProps') as any

const props = defineProps<{
  schemas: ComponentSchema[],
  parentSchema?: ComponentSchema
}>()
const emit = defineEmits(['update:schemas'])
const modelSchemas = computed({
  get() {
    // 判断props.schemas是否存在值
    return props.schemas
  },
  set(e) {
    emit('update:schemas', e)
  }
})

/**
 * 选中点击节点元素
 * @param index
 */
function handleSelect(index: number) {
  designer.setDisableHover(true)
  designer.setCheckedNode(modelSchemas.value![index])
}

function isDraggable(schemas: ComponentSchema) {
  // 判断当前节点类型是否允许拖拽
  if (schemas.type === 'page' || schemas.immovable) {
    // 禁止拖拽
    return 'unmover-item'
  }

  return 'draggable-item'
}

</script>
