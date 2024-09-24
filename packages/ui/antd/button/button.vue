<template>
  <Button v-bind="props.componentSchema?.componentProps">
    <slot>{{ props.componentSchema?.label }}</slot>
  </Button>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import type { ComponentSchema } from '@front-design/core/types/front-design'
import { Button } from 'ant-design-vue'
const props = defineProps({
  componentSchema: {
    type: Object as PropType<ComponentSchema>,
    default: () => ({})
  }
})
</script>
