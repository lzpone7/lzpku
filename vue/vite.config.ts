import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import * as path from 'path'
// import viteEslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	//, viteEslint()
	plugins: [vue(), viteCompression()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'~@': path.resolve(__dirname, './src')
		}
	},
	server: {
		host: '0.0.0.0',
		port: 3000,
		cors: true,
		proxy: {
			'/api': {
				target: 'http://localhost:8809',
				changeOrigin: true,
				ws: true,
				rewrite: path => path.replace(/^\/api/, '/api')
			}
		}
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
	optimizeDeps: {
		exclude: ['@dc/vue-web-base'],
		include: ['@ant-design/icons-vue', 'axios', 'wangeditor']
	}
})
