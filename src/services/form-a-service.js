import ApplicationService from "@/services/application-service"

import formAApi from "@/api/form-a-api"

export default class FormAService extends ApplicationService {
	#formData

	constructor(formData) {
		super(formData)
		this.formData = formData
	}

	perform() {
		return formAApi.create(this.formData).then((data) => {
			return `Sent transformed form data: ${JSON.stringify(
				this.formData
			)}, response was ${JSON.stringify(data)}`
		})
	}
}
