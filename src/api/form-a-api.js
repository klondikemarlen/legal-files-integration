import applicationApi from "@/api/application-api"

const formAUrl = "/api/form-a"

export default {
	create(attributes) {
		return applicationApi
			.post(formAUrl, { formA: attributes })
			.then((response) => response.data)
	},
}
