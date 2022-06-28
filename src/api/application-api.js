import axios from "axios"

console.log(
	"process.env.LEGAL_FILES_API_BASE_URL",
	process.env.LEGAL_FILES_API_BASE_URL
)
const client = axios.create({
	baseURL: process.env.LEGAL_FILES_API_BASE_URL,
})

export default client
