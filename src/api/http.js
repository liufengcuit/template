import axios from 'axios'

const host = ''

/*设置axios默认请求时间*/
axios.defaults.timeout = 30000
axios.defaults.baseURL = process.env.NODE_ENV == "development" ? '/api' : host;
export default {
	/*带参数的get请求*/
	get(url, params = {}) {
		return new Promise((resolve, reject) => {
			axios.get(host + url, {params: params})
			.then(response => {
				resolve(response.data)
			})
			.catch(error => {
				reject(error)
			})
		})
	},
	/*不带参数的get请求*/
	getQuick(url) {
		return new Promise((resolve, reject) => {
			axios.get(host + url)
			.then(response => {
				resolve(response.data)
			})
			.catch(error => {
				reject(error)
			})
		})
	},
	/*普通json类型的post请求*/
	post(url, params = {}) {
		return new Promise((resolve, reject) => {
			axios.post(host + url, params)
			.then(response => {
				resolve(response.data)
			})
			.catch(error => {
				reject(error)
			})
		})
	},
	/*表单类型的post请求*/
	postBody(url, params = {}) {
		return new Promise((resolve, reject) => {
			axios.post(
					host + url,
					params,
					{
						headers: {
							"Content-Type": "application/x-www-form-urlencoded"
						}
					}
			)
			.then(response => {
				resolve(response.data)
			})
			.catch(error => {
				reject(error)
			})
		})
	}
}