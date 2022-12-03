<template>
	<div id="userLayout" :class="['user-layout-wrapper']">
		<div class="container">
			<div class="loginbox">
				<div class="top">
					<div class="header">
						<a href="/public">
							<!-- <img src="/src/assets/styles/loginPage/loginPageLogo.jpg" class="logo" alt="logo" style="width: 100px" /> -->
							<br />
						</a>
					</div>
				</div>
				<div class="main">
					<a-form
						id="loginForm"
						ref="loginFormRef"
						class="user-layout-login"
						:model="loginFormModel"
						:rules="loginFormRules"
						:scrollToFirstError="true"
					>
						<a-page-header title="系统登录" />
						<!-- Form校验时，需要给a-form-item添加name属性 -->
						<a-form-item name="username">
							<!-- 双向绑定，必须使用v-model:value -->
							<a-input v-model:value="loginFormModel.username" size="large" placeholder="用户名">
								<template #prefix>
									<UserOutlined style="padding-right: 5px; color: blue" />
								</template>
							</a-input>
						</a-form-item>
						<a-form-item name="password">
							<a-input-password v-model:value="loginFormModel.password" size="large" placeholder="密码">
								<template #prefix>
									<LockOutlined style="padding-right: 5px; color: blue" />
								</template>
							</a-input-password>
						</a-form-item>
						<a-form-item>
							<a-button
								size="large"
								type="primary"
								htmlType="submit"
								class="login-button"
								:disabled="loginFormModel.loginButtonDisabled"
								:loading="loginFormModel.loginButtonLoading"
								@click="submitForm()"
								>{{ loginFormModel.loginButtonName }}</a-button
							>
						</a-form-item>
					</a-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { login } from '../api/login'
import { message } from 'ant-design-vue'
const loginFormRef = ref()
// 定义表单对象
const loginFormModel = reactive({
	username: '',
	password: '',
	loginButtonDisabled: false,
	loginButtonLoading: false,
	loginButtonName: '登录'
})
// 定义表单校验规则
const loginFormRules = reactive({
	username: [{ required: true, message: '请输入用户名！', trigger: 'blur' }],
	password: [{ required: true, message: '请输入密码！', trigger: 'blur' }]
})

// 提交表单方法
const submitForm = async () => {
	loginFormModel.loginButtonDisabled = true
	loginFormModel.loginButtonLoading = true
	loginFormModel.loginButtonName = '登录中...'
	try {
		await loginFormRef.value.validate()
		const res = await login(loginFormModel.username, loginFormModel.password)
		localStorage.setItem('token', res.data.token)
		message.success('登录成功')
	} catch (error) {
		message.error('登录失败')
	} finally {
		loginFormModel.loginButtonDisabled = false
		loginFormModel.loginButtonLoading = false
		loginFormModel.loginButtonName = '登录'
	}
}

console.log(111)
console.log(222)
console.log(223)
</script>

<style lang="scss" scoped>
:deep(.ant-form-horizontal .ant-page-header .ant-page-header-heading) {
	justify-content: center;
}

#userLayout.user-layout-wrapper {
	height: 100%;
	.container {
		width: 100%;
		min-height: 100%;
		background-size: 100%;
		vertical-align: middle;
		display: flex;

		a {
			text-decoration: none;
		}
		.loginbox {
			width: 800px;
			height: 500px;
			margin: auto;
			background: #ffffff;
			box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
			border-radius: 8px;
		}
		.top {
			border-radius: 8px 0 0 8px;
			text-align: center;
			width: 355px;
			height: 500px;
			background: url(@/assets/img_1.png) no-repeat center top;
			float: left;

			.header {
				height: 44px;
				line-height: 44px;

				.logo {
					height: 60px;
					width: 100%;
					vertical-align: top;
					margin-top: 110px;
					margin-bottom: 10px;
					border-style: none;
				}

				.title {
					font-size: 24px;
					color: #ffffff;
					font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
					font-weight: 600;
					position: relative;
					top: 2px;
				}
			}
		}

		.main {
			width: 445px;
			height: 500px;
			margin: 0 auto;
			float: left;
			display: block;
			padding: 0 30px;
			position: relative;
		}
		.user-layout-login {
			.ant-page-header {
				padding: 60px 0 45px 0;
			}
			.getCaptcha {
				display: block;
				width: 100%;
				height: 40px;
			}

			button.login-button {
				padding: 0 15px;
				font-size: 16px;
				height: 40px;
				width: 100%;
				border-radius: 4px;
			}
		}
	}
}
</style>
