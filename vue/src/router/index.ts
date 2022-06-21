import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/**
 * 系统路由信息
 */
const routes: RouteRecordRaw[] = [
	{
		path: '/login',
		name: 'login',
		alias: '/',
		component: () => import('@/views/login.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
