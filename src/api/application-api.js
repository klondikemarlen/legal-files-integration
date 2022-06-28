import axios from "axios"

const client = axios.create({
	baseURL: process.env.LEGAL_FILES_API_BASE_URL,
})

export default client
