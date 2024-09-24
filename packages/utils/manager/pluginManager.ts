import { type ComponentSchema } from "@front-design/core/types/front-design";
import { loadAsyncComponent } from "../common";
import { ref } from "vue";
export interface ActivitybarModel {
  id: string;
  title: string;
  icon: string;
  component: any;
}

export interface RightSidebarModel {
  id: string;
  title: string;
  component: any;
}

export interface ViewsContainersModel {
  activitybars: ActivitybarModel[];
  rightSidebars: RightSidebarModel[];
}

export type Components = Record<string, any>;

export interface EventModel {
  type: string;
  describe: string;
}

export interface ActionModel extends EventModel {
  argsConfigs?: ComponentSchema[];
  args?: any[];
}

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

export type ComponentConfigModelRecords = Record<string, ComponentConfigModel>;

export interface MethodModel {
  describe?: string;
  methodName: string;
  method: (...args) => any;
}

export type PublicMethodsModel = Record<string, MethodModel>;

export interface ComponentGroup {
  list: ComponentSchema[];
  title: string;
}

export type ComponentSchemaGroups = ComponentGroup[];

// 插件管理器类
export class PluginManager {
  // 已初始化基础UI
  initialized = ref(false);

  // 组件对象字典，key 为组件type，value 为组件
  components: Components = {};

  // 组件配置记录字典，key 为组件type，value 为组件配置
  componentConfigs: ComponentConfigModelRecords = {};

  // 组件模式分组，使用 Vue Composition API 的 ref 进行响应式处理
  componentSchemaGroups = ref<ComponentSchemaGroups>([]);

  // 隐藏的组件列表，存储需要隐藏的组件名称
  hiddenComponents: string[] = [];

  // 组件分组名称映射，key 为组件原名称，value 为组件分组映射名称
  componentGroupNameMap: Record<string, string> = {};

  // 组件分组排序列表(设置之后，按该数组下标排序)
  sortedGroups: string[] = ["表单", "布局"];

  // 视图容器模型，包含活动栏和右侧边栏的配置
  viewsContainers: ViewsContainersModel = {
    activitybars: [], // 活动栏配置列表
    rightSidebars: [], // 右侧边栏配置列表
  };

  // 公共方法模型，存储插件的公共方法
  publicMethods: PublicMethodsModel = {
    // 示例方法
    // test: {
    //   describe: "测试函数",
    //   methodName: "test",
    //   method: (e) => {
    //     console.log(e)
    //     alert("测试函数弹出");
    //   },
    // },
  };

  /**
   * 添加组件到插件管理器中
   * @param componentName 组件名称
   * @param component 组件
   */
  component(componentName: string, component: any): void {
    if (typeof component === "function") {
      component = loadAsyncComponent(component);
    }
    // 注册组件
    this.components[componentName] = component;
  }

  /**
   * 注册组件到插件管理器中
   * @param componentConfig 组件配置
   */
  registerComponent(componentConfig: ComponentConfigModel): void {
    // 添加组件
    this.component(
      componentConfig.defaultSchema.type,
      componentConfig.component
    );

    // 输入组件增加动作配置
    if (componentConfig.defaultSchema.input) {
      if (!componentConfig.config.action) {
        componentConfig.config.action = [];
      }

      // 补充组件可用方法
      componentConfig.config.action.unshift(
        ...[
          {
            type: "setValue",
            describe: "设置值",
            argsConfigs: [
              {
                ...componentConfig.defaultSchema,
                label: "设置数据",
                field: "0",
              },
            ],
          },
          {
            type: "getValue",
            describe: "获取值",
          },
        ]
      );
    }

    // 添加组件配置
    this.componentConfigs[componentConfig.defaultSchema.type] = componentConfig;

    this.computedComponentSchemaGroups();
  }

  /**
   * 获取所有插件管理中的所有组件
   * @returns components
   */
  getComponents(): Components {
    return this.components;
  }

  /**
   * 通过type 查询相应的组件
   * @returns components
   */
  getComponent(type: string): any {
    return this.components[type];
  }

  /**
   * 注册或更新活动栏（Activitybar）模型。
   * 如果模型中的组件是一个函数，则异步加载该组件。
   * @param activitybar 要注册或更新的活动栏模型
   */
  registerActivitybar(activitybar: ActivitybarModel): void {
    // 如果组件是一个函数，则异步加载该组件
    if (typeof activitybar.component === "function") {
      activitybar.component = loadAsyncComponent(activitybar.component);
    }

    // 查找活动栏在列表中的索引
    const index = this.viewsContainers.activitybars.findIndex(
      (item) => item.id === activitybar.id
    );

    // 如果找到相同 id 的活动栏，则更新该活动栏模型
    if (index !== -1) {
      this.viewsContainers.activitybars[index] = activitybar;
    } else {
      // 否则将新的活动栏模型添加到活动栏列表中
      this.viewsContainers.activitybars.push(activitybar);
    }
  }

  /**
   * 获取所有activitybars
   * @returns activitybars
   */
  getActivitybars(): ActivitybarModel[] {
    return this.viewsContainers.activitybars;
  }

  /**
   * 注册右侧栏
   */
  registerRightSidebar(rightSidebar: RightSidebarModel): void {
    if (typeof rightSidebar.component === "function") {
      rightSidebar.component = loadAsyncComponent(rightSidebar.component);
    }

    const index = this.viewsContainers.rightSidebars.findIndex(
      (sidebar) => sidebar.id === rightSidebar.id
    );

    if (index !== -1) {
      this.viewsContainers.rightSidebars[index] = rightSidebar;
    } else {
      this.viewsContainers.rightSidebars.push(rightSidebar);
    }
  }

  /**
   * 获取所有rightSidebars
   * @returns rightSidebars
   */
  getRightSidebars(): RightSidebarModel[] {
    return this.viewsContainers.rightSidebars;
  }

  /**
   * 获取所有插件管理中的所有组件配置
   * @returns componentAttrs
   */
  getComponentConfings(): ComponentConfigModelRecords {
    return this.componentConfigs;
  }

  /**
   * 通过type获取ComponentConfing
   * @returns
   */
  getComponentConfingByType(type: string): ComponentConfigModel {
    const componentConfig = this.componentConfigs[type];
    return componentConfig;
  }

  /**
   * 计算componentSchemaGroups
   */
  computedComponentSchemaGroups() {
    const componentSchemaGroups: ComponentSchemaGroups = [];

    // 遍历组件配置字典的值
    Object.values(this.componentConfigs).forEach((componentConfig) => {
      // 如果组件的默认模式的类型在隐藏组件列表中，则跳过
      if (this.hiddenComponents.includes(componentConfig.defaultSchema.type)) {
        // 跳过当前循环，继续下一个组件
        return;
      }

      // 如果组件配置中有分组名
      if (componentConfig.groupName) {
        // 查找当前分组在列表中的索引

        const groupName =
          this.componentGroupNameMap[componentConfig.groupName] ??
          componentConfig.groupName;

        let groupIndex = componentSchemaGroups.findIndex(
          (item) => item.title === groupName
        );

        // 如果找不到分组，表示该分组还未添加过，需要新建一个分组
        if (groupIndex === -1) {
          // 创建新的分组，并将其添加到分组列表中
          componentSchemaGroups.push({
            title: groupName,
            list: [],
          });
          // 获取新添加的分组的索引
          groupIndex = componentSchemaGroups.length - 1;
        }

        // 查找当前组件在分组的列表中的索引
        let componentIndex = componentSchemaGroups[groupIndex].list.findIndex(
          (item) => item.type === componentConfig.defaultSchema.type
        );

        // 如果找到相同类型的组件，则更新该组件结构数据
        if (componentIndex !== -1) {
          componentSchemaGroups[groupIndex].list[componentIndex] =
            componentConfig.defaultSchema;
        } else {
          // 否则将新的组件结构数据添加到相应的分组中
          componentSchemaGroups[groupIndex].list.push(
            componentConfig.defaultSchema
          );
        }
      }
    });

    // 调整分组排序
    componentSchemaGroups.sort((a: ComponentGroup, b: ComponentGroup) => {
      const indexA = this.sortedGroups.indexOf(a.title);
      const indexB = this.sortedGroups.indexOf(b.title);
      if (indexA === -1) {
        return 1; // a.title 不在 orderArray 中，排在后面
      }
      if (indexB === -1) {
        return -1; // b.title 不在 orderArray 中，排在前面
      }
      return indexA - indexB; // 按照 orderArray 中的顺序排序
    });

    this.componentSchemaGroups.value = componentSchemaGroups;
  }

  /**
   * 按照分组获取componentSchemaGroups 暂时没啥用
   * @returns componentSchemaGroups
   */
  getComponentSchemaGroups() {
    return this.componentSchemaGroups;
  }

  setComponentSchemaGroups(arr) {
    this.componentSchemaGroups.value = arr;
  }

  /**
   * 设置组件分组名称到映射名称的关系
   * @param groupName 组件分组名称
   * @param mapName 映射的名称
   */
  setComponentGroupNameMap(groupName: string, mapName: string) {
    this.componentGroupNameMap[groupName] = mapName;
  }

  /**
   * 清空组件分组名称到映射名称的关系
   */
  clearComponentGroupNameMap() {
    this.componentGroupNameMap = {};
  }

  /**
   * 设置组件分组的排序
   * @param sortedGroups 包含组名和排序字段的对象数组
   */
  setSortedGroups(sortedGroups: string[]) {
    this.sortedGroups = sortedGroups;
    this.computedComponentSchemaGroups();
  }

  /**
   * 清空组件分组的排序
   */
  clearSortedGroups() {
    this.sortedGroups = [];
    this.computedComponentSchemaGroups();
  }

  /**
   * 添加需要隐藏的组件类型
   * @param {*} type
   * @returns
   */
  hideComponent(type: string) {
    this.hiddenComponents.push(type);
    this.computedComponentSchemaGroups();
  }

  /**
   * 移除需要隐藏的组件类型
   * @param {*} type
   * @returns
   */
  showComponent(type: string) {
    this.hiddenComponents = this.hiddenComponents.filter(
      (item) => item !== type
    );
    this.computedComponentSchemaGroups();
  }

  /**
   * 设置需要隐藏的组件类型数组
   * @param {*} type[]
   * @returns
   */
  setHideComponents(types: string[]) {
    this.hiddenComponents = types;
    this.computedComponentSchemaGroups();
  }

  /**
   * 设置initialized的状态。
   *
   * @param value 要设置的布尔值。
   */
  setInitialized(value: boolean): void {
    this.initialized.value = value;
  }

  /**
   * 添加公共方法
   * @param method
   */
  addPublicMethod(method: MethodModel): void {
    this.publicMethods[method.methodName] = method;
  }

  /**
   * 移除公共方法
   * @param methodName
   */
  removePublicMethod(methodName: string): void {
    delete this.publicMethods[methodName];
  }
}

export const pluginManager = new PluginManager();
