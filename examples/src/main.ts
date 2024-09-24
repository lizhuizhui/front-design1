import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//  使用Elemnt UI
// import 'element-plus/dist/index.css'
// import { setupElementPlus } from '@front-design/ui'
// setupElementPlus()

// 使用Antd UI v4版本
// import './style/reset.css';
import 'ant-design-vue/dist/reset.css';

// import { setupAntd } from '@epic-designer/ui'
import { setupAntd } from '@front-design/ui'
setupAntd()

// 使用Antd UI v3 版本
// import "ant-design-vue/dist/antd.css";
// import { setupAntd } from '@front-design/ui'
// setupAntd()


// 使用NaiveUi UI
// import { setupNaiveUi } from '@front-design/ui'
// setupNaiveUi()

createApp(App).mount("#app");
