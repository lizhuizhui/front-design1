<template>
  <div class="epic-tree h-full flex flex-col">
    <!-- 搜素框 start -->
    <div class="search-box px-10px py-6px">
      <Input placeholder="搜索节点" clearable allowClear v-model="keyword" v-model:value="keyword">
      <template #prefix>
        <EIcon name="icon-chaxun" />
      </template>
      </Input>
    </div>
    <!-- 搜素框 end -->
    <div class="epic-tree-main flex-1 overflow-auto h-0">
      <ul>
        <ETreeNodes v-model:schemas="getTreeData" />
      </ul>
      <div v-show="!getTreeData.length" class="text-center pt-42px text-gray-400">没有查询到的数据</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ComponentSchema } from '../../../types/front-design'
import type { PropType } from 'vue'
import { ref, provide, computed, useSlots } from 'vue'
import ETreeNodes from './treeNodes.vue'
import EIcon from '../../icon'
import { pluginManager } from '@front-design/utils'

defineOptions({
  name: 'ETree'
})
const slots = useSlots()
provide('slots', slots)

const Input = pluginManager.getComponent('input')

const keyword = ref("")
const expandedKeys = ref([])
const props = defineProps({
  options: {
    type: Array as PropType<ComponentSchema[]>,
    default: () => []
  },
  hoverKey: {
    type: String,
    default: ''
  },
  selectedKeys: {
    type: Array,
    default: () => []
  },
  draggable: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['update:selectedKeys', 'node-click'])
const selectedKeysComputed = computed({
  get() {
    return props.selectedKeys
  },
  set(value) {
    emit('update:selectedKeys', value)
  }
})


const getTreeData = computed({
  get() {
    return filterTreeByLabel(props.options, keyword.value)
  },
  set(e) {
    console.log(e)
  }
})

/**
 * 通过label 过滤节点
 * @param tree 节点树
 * @param labelToFilter 过滤关键字
 */
function filterTreeByLabel(tree, labelToFilter) {
  const filteredTree: ComponentSchema[] = [];

  tree.forEach((item: ComponentSchema) => {
    if (item.label?.includes(labelToFilter)) {
      filteredTree.push(item);
    } else if (item.children) {
      const filteredChildren = filterTreeByLabel(item.children, labelToFilter);
      if (filteredChildren.length > 0) {
        // Clone the item and replace its children
        const clonedItem = { ...item };
        clonedItem.children = filteredChildren;
        filteredTree.push(clonedItem);
      }
    }
  });

  return filteredTree;
}


function handleSelect(id: string, componentSchema: ComponentSchema) {
  selectedKeysComputed.value = [id]
  emit('node-click', { id, componentSchema })
}

provide('expandedKeys', expandedKeys)
provide('selectedKeys', selectedKeysComputed)
provide('treeProps', props)
provide('handleSelect', handleSelect)
provide('handleSelect', handleSelect)

</script>
