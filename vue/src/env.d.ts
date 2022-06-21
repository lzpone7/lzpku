/// <reference types="vite/client" />

declare module '*.vue' {
	import { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}

declare module '*.json' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const value: any
	export default value
}

interface ImportMetaEnv {
	// 登录的接口地址
	readonly VITE_APP_API_LOGIN: string
	// 登录的接口地址
	readonly VITE_APP_API_LOGIN_OUT: string
	// 登录的接口地址
	readonly VITE_APP_API_BASE_URL: string
	// copyright
	readonly VITE_APP_COPYRIGHT: string
	// OSS 前缀地址
	readonly VITE_APP_OSS_URL: string
	// oss 上传地址
	readonly VITE_APP_API_OSS: string
	// oss 水印后缀
	readonly VITE_APP_OSS_SUFFIX: string
	// 短信api
	readonly VITE_APP_API_MESSAGE: string
	// 短信登录api的接口
	readonly VITE_APP_API_CODE_LOGIN: string
	// 短信登录api的接口的手机号码参数
	readonly VITE_APP_API_CODE_LOGIN_PARAMS_MOBILE: string
	// 短信登录api的接口的验证码参数
	readonly VITE_APP_API_CODE_LOGIN_PARAMS_CODE: string
	// 在线预览地址
	readonly VITE_APP_ONLINE_PREVIEW_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
