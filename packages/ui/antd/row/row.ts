import { defineComponent, h, renderSlot, type PropType } from "vue";
import { Row } from "ant-design-vue";
import { type ComponentSchema } from "@front-design/core/types/front-design";
export default defineComponent({
  props: {
    componentSchema: {
      type: Object as PropType<ComponentSchema>,
      require: true,
      default: () => ({}),
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const componentSchema = {
        ...props.componentSchema,
        title: props.componentSchema?.label ?? "",
      } as any;
      const children = componentSchema.children;
      delete componentSchema.children;

      return h(Row, componentSchema, {
        default: () =>
          renderSlot(slots, "edit-node", {}, () =>
            children.map((subcomponentSchema: ComponentSchema) =>
              renderSlot(slots, "node", { componentSchema: subcomponentSchema })
            )
          ),
      });
    };
  },
});
