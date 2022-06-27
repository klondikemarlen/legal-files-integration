import ApplicationService from "@/services/application-service"

export default class FormAService extends ApplicationService {
	#formData

	constructor(formData) {
		super(formData)
		this.formData = formData
	}

	perform() {
		return `transformed the form data: ${JSON.stringify(this.formData)}`
	}
}
