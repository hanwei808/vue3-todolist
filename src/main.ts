import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element3 from 'element3'

import './styles/index.scss' // 加载全局样式

createApp(App).use(store).use(router).use(Element3).mount('#app')
