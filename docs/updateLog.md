## 0.9.4（2024-03-23）

### ✨ Feat

- [pageManager 对象添加 find 方法](https://github.com/Kchengz/front-design/commit/c7355ad981c644e8fa51e628ceec35fcb3065be5)
- [EBuilder 新增 disabled 属性，禁用所有输入项](https://github.com/Kchengz/front-design/commit/f57204f66243d0bfa80f84002570df9e7cf9c8a8)
- [builder 组件新增 getFormInstance 方法函数](https://github.com/Kchengz/front-design/commit/b54e679d7311d335169f60fa93a6d7a375124616)

### ✨ refactor

- antd v3 v4 版本兼容合并

### 🐛 Bug Fixes

- [修复 setAttr 方法设置组件属性时会直接修改 componentSchema 问题](https://github.com/Kchengz/front-design/commit/b94a30e802e8730a6dc238cad0a52e0e0c3bb0eb)
- [修复同时两个 designer 时，第二个设计器选择异常问题](https://github.com/Kchengz/front-design/commit/127e107beebaaa8c65fe44d5cf95e192700bce9b)
- [修复缩放计算出现 Infinity 问题](https://github.com/Kchengz/front-design/commit/f3d2954a9e1e669b35d44cfb692e1f7ac8e00181)
- [Antd(input)没有显示最大字符数](https://github.com/Kchengz/front-design/commit/88d63bbaecd371ab67884c64f7b6f6eaf30e3039)

## 0.9.3（2024-03-14）

### 🐛 Bug Fixes

- [修复使用 EpicDesigner 时，提示缺少不必要的依赖问题](https://github.com/Kchengz/front-design/commit/c17c5c58bdb3e61d2a0a7b8d021b27a1399dd956)
- [修复 ui 组件初始化未完成就渲染页面的异常问题](https://github.com/Kchengz/front-design/commit/f4e711ef82809ab60fc6e1a7dc6f31f976dbcb52)

## 0.9.1（2024-03-13）

本次更新重做了组件分组、ui 设置及内部变量名称修改

pluginManager 管理器移除~~setComponentGroup~~、~~addComponentGroup~~方法，
新增`setComponentGroupNameMap`、`clearComponentGroupNameMap`、`setSortedGroups`、`clearSortedGroups`、`hideComponent`、`showComponent`等方法

### ✨ Feat

- [新增 element plus 组件国际化支持](https://github.com/Kchengz/front-design/commit/b34a4ba6697e796f7dcd74b414d029eb406a2da5)
- [新增 antdv 国际化方案](https://github.com/Kchengz/front-design/commit/e6350ed0531cad040cb885fe10628515653c7325)
- [事件编辑折叠面板自动展开已配置动作的面板](https://github.com/Kchengz/front-design/commit/17fe46a4cbf14a8bc06e2eebcb19b18ec0334481) [#7](https://github.com/Kchengz/front-design/issues/7)
- [新增分组排序设置函数 setSortedGroups](https://github.com/Kchengz/front-design/commit/25d67af7c3f4d8631bf50093bf037216dc0ac495)

### ✨ refactor

- [组件配置添加 groupName 属性](https://github.com/Kchengz/front-design/commit/0e2abe80e22903d69e5268e41e1eab24129269e1)
- [重构组件分组管理，组件注册配置可设置分组](https://github.com/Kchengz/front-design/commit/2e6a5e4f2496edc9f45d1d4b2a43a94e700abe85)
- [将 record 字段重命名为 componentSchema](https://github.com/Kchengz/front-design/commit/b9def1bee0374f1a56cc360d4697633c5feac8fb)
- [将 NodeItem 类型重命名为 ComponentSchema 并添加类型注释](https://github.com/Kchengz/front-design/commit/af1f5bbcfb783f75d0beb9d5a1ed4e7701fc2c63)
- [调整表单组件 name 至 componentProps 属性内](https://github.com/Kchengz/front-design/commit/6b18519df7832a7a7798e5e9dacefff13fb80e27)

### 🐛 Bug Fixes

- [修复 AntdV3 安装无效问题](https://github.com/Kchengz/front-design/commit/0af6a102cb3413a32e65a729a4bcf22124d9b42f)
- [修复 element-plus 组件无法正常渲染问题](https://github.com/Kchengz/front-design/commit/4b3238b140dbc67c162a85e9996839d3921315c2)

## 0.8.15（2024-01-11）

### ✨ Feat

- [新增数据查看面板](https://github.com/Kchengz/front-design/commit/18c0199ceaf4016b2dc70580ed28f84c03bef5ff)

### 🐛 Bug Fixes

- [修复画布宽高设置为 px 以外的单位不会生效的问题](https://github.com/Kchengz/front-design/commit/79d502c37b83247713bb203dc7f7706e12adb1f0)
- [修复校验不通过是外部的 Promise 保持 pedding 的 bug](https://github.com/Kchengz/front-design/commit/00160a3d7ea00f7b9415c3cdff789fdced06b443)
- [修复编译后 types 类型文件不存在问题](https://github.com/Kchengz/front-design/commit/4a996ae396a39761fda6970e79cdd7fb4d6487c6)

## 0.8.13（2023-11-21）

### ✨ Feat

- [新增隐藏头部属性](https://github.com/Kchengz/front-design/commit/de558e9b0693508cec3d9bb9634a176053b12708)
- [新增 header 插槽](https://github.com/Kchengz/front-design/commit/8c9295ec5aa6f73b13898b9b7e005deac6ef8953)

### 🐛 Bug Fixes

- [修复上传图片图标不显示问题](https://github.com/Kchengz/front-design/commit/08f16cfff58adc4a09aa8489d1a48e91af0138b9)
- [修复用户扩展 icon 无法正常显示问题](https://github.com/Kchengz/front-design/commit/f3288745b694318cd0d6cfb0dbabbb1aa00e41ca)
- [修复组件 ts 类型缺失问题](https://github.com/Kchengz/front-design/commit/b91bd0e13c5e5ba3fa3c11ff7992a85ac0ca7727)

## 0.8.12（2023-11-16）

### ✨ Feat

- [新增 find 方法用于查找组件示例，替换 getComponent](https://github.com/Kchengz/front-design/commit/8463a8a4e9fda261a7f42717db0a4b2da993c153)
- [导入新增简单 k-form 数据处理，可导入 k-form 数据](https://github.com/Kchengz/front-design/commit/1729ea0188d33cdb38243364b86c0fc533cd2d9d)

### 🐛 Bug Fixes

- [大纲树挤占动作选区](https://github.com/Kchengz/front-design/commit/243766ee2abdcc3a8264bc3932901b4c88ad5723)

## 0.8.10（2023-11-09）

### ✨ Feat

- 新增 antdv4 版本
- 新增 header-right-prefix 插槽

### 🐛 Bug Fixes

- 修复动作删除 icon 图标异常问题

## 0.8.9（2023-11-08）

### ✨ Feat

- 新增禁止拖拽属性 childImmovable、immovable
- node 新增内部 schema 数据状态，新增属性修改，属性获取方法
- 新增清空设计器数据操作
- 新增画布宽高配置
- 新增不同设备画布选型
- 新增动作组件可配置设置值
- 动作编辑新增参数缓存功能

### 🐛 Bug Fixes

- 修复先赋值表单初始化 node 组件导致数据被重置问题
- 修复表单赋值提示表单不存在问题
- 修复 mounted 生命周期无法 set/get 表单数据问题
- 修复属性编辑组件在切换组件时无法显示数据异常问题
- 修复大纲树拖拽操作异常问题
  ......

## 0.8.8（2023-10-08）

### ✨ Feat

- 表单组件新增动作
- 大纲目录树可以拖拽节点

### 🐛 Bug Fixes

- 修复大纲树可拖拽至页面根节点之外的 bug

## 0.8.7（2023-09-16）

### ✨ Feat

- 新增 getFormFields 获取表单字段
- 新增 disabledZoom 属性，可禁用画布缩放功能
- 新增 e-icon 组件
- antd/radio 组件新增属性配置
- eTree 组件新增查询过滤

### 🐛 Bug Fixes

- 修复复杂布局组件 id 重复问题

- 修复非根节点使用指令警告问题

## 0.8.5（2023-08-10）

### ✨ Feat

- 输入组件添加 getValue 动作

- 输入组件添加 setValue 动作

- 补充输入类型组件事件及动作

## 0.8.4（2023-08-03）

### 🐛 Bug Fixes

- 修复 modal 组件抛出警告问题

- 修复非根节点使用指令警告问题

## 0.8.3（2023-08-03）

### ✨ Feat

- 添加 antdUI/slider 组件
- antdUI 日期选择器增加时间选择配置

### ✨ refactor

- 更新图标

### 🐛 Bug Fixes

- 修复拖拽组件生成 id 相同且数据没有深拷贝问题

- 修复拖拽 elementPlus/number 组件警告问题

## 0.0.82（2023-07-25）

### (破坏性更新) Breaking changes

- 组件名称修改为 front-design，项目架构使用 monorepo（单仓库多项目）形式

### ✨ Feat

- header 新增插槽
- monacoEditor 添加 json 编辑功能
- 动作配置区域添加自定义函数编辑区域
- 补充组件属性配置
- 新增工具栏组件，添加缩放控制组件

......

### ✨ refactor

- 重构项目架构
- 重构动作配置功能，新增拖拽动作功能

......

### 🐛 Bug Fixes

- 修复切换组件时动作无法配置问题
- 修复切换动作主体时，动作绑定异常问题
- 修改 k-input-size 重复渲染元素问题
- 修复组件缺少兼容样式问题

......

## 0.0.42（2023-05-10）

- 将注册组件函数 useElementPlus、useAntd、useNaiveUi 改为 setupElementPlus、setupAntd、setupNaiveUi
  - 影响：之前已经使用组件的用户，需要按照文档修改注册组件方式及引入路径

### 🐛 Bug Fixes

- 修复 naive ui 布局组件无法使用问题
- 修复 naiveUI NColorPicker 无法显示问题
- 修复编辑组件无效问题

### ✨ refactor

- 允许重复注册组件，后注册的组件将覆盖已注册组件
- 重构 ENode 组件,组件配置 input 属性读取默认配置，新增 noFormItem 属性用于移除输入组件外层的 formItem

## 0.0.41（2023-05-09）

- 将 nodeItem 的属性 isInput 更改为 input
  - 影响：之前已经生成并保存 JSON Schema 的用户，无法直接正常回显，需要手动将 JSON Schema 中 isInput 改为 input（下个版本会考虑重构向下兼容，如果觉得目前升级更新麻烦可以选择忽略该版本）
  - 原因：组件 input 属性设置为 true 可以很直观表达该组件类型为输入类型组件
- 更新 UI 注册文件目录结构
  - 影响：之前已经使用组件的用户，需要按照文档修改注册组件方式及引入路径
  - 原因：之前的 UI 组件注册结构混乱，调整之后更合理

### ✨ Feat

- 新增 NaiveUI

## 0.0.36（2023-05-08）

### ✨ Feat

- designer 组件新增 setData 方法
- designer 组件新增 getData 方法
- designer 组件新增 reset 方法

### 🐛 Bug Fixes

- 修复 deepCompareAndModify 更改数组时导致数据修改不完全问题

## 0.0.35（2023-04-29）

### 🐛 Bug Fixes

- 修复撤销重做失效 bug
- 编译 ts 类型无法自动推断类型
- 修复 element plus 编译后异步组件无法加载问题
- 修复组件属性赋值 null 报错问题
- 修复组件属性编辑异常问题

...
