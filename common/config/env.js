// prod-生产 dev-开发 local-本地
const env = "local"

const prod = {
	baseUrl: 'http://localhost:9001/chatgpt/v1', // 生产环境'
}
const dev = {
	baseUrl: 'http://localhost:7001/chatgpt/v1', // 开发环境'
}
const local = {
	baseUrl: 'http://localhost:8001/chatgpt/v1', // 本地环境'
}

const config = {
	dev,
	prod,
	local,
}

export default config[env]
