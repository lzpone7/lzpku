<template>
	<a-config-provider :locale="locale">
		<router-view />
	</a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'
export default defineComponent({
	setup() {
		return {
			locale: zhCN
		}
	}
})
</script>

<style>
#app {
	height: 100%;
}
</style>
