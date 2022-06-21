import axios from 'axios'

export function login(username: string, password: string) {
	return axios
		.post('/api/user/login', {
			username,
			password
		})
		.then(({ data }) => {
			if (data.code === 400) {
				return Promise.reject(data.message)
			}
			return Promise.resolve(data)
		})
}
