import ApplicationService from "@/services/application-service"

import formAApi from "@/api/form-a-api"

export default class FormAService extends ApplicationService {
	#formData

	constructor(formData) {
		super(formData)
		this.formData = formData
	}

	// data transforms here for easier testing
	transform() {
		return this.formData
	}

	perform() {
		return formAApi.create(this.transform()).then((data) => {
			return `Sent transformed form data: ${JSON.stringify(
				this.formData
			)}, response was ${JSON.stringify(data)}`
		})
	}
}
