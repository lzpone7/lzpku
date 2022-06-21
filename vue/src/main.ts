import { createApp } from 'vue'
import App from './App.vue'
import vue3SeamlessScroll from 'vue3-seamless-scroll'
// 蚂蚁ui
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 状态管理工具
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
// 添加路由
import router from './router'
createApp(App)
	.use(vue3SeamlessScroll)
	// 蚂蚁ui框架
	.use(Antd)
	// 使用pinia代替vuex缓存
	.use(createPinia().use(piniaPluginPersist))
	// 路由
	.use(router)
	// 挂载
	.mount('#app')
