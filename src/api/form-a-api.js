import http from "@/api/http-client"

const formAUrl = "/api/form-a"

export default {
	create(attributes) {
		return http
			.post(formAUrl, { formA: attributes })
			.then((response) => response.data)
	},
}
