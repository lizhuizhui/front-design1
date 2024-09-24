import { type ComponentConfigModel } from "@front-design/utils";

export default {
  component: async () => await import("./index.vue"),
  defaultSchema: {
    label: "页面",
    type: "page",
    componentProps: {},
    children: [],
  },
  config: {
    attribute: [
      {
        label: "页面名称",
        type: "input",
        componentProps: {
          placeholder: "请输入",
        },
        field: "name",
      },
    ],
  },
} as ComponentConfigModel;
