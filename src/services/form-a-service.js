import ApplicationService from "@/services/application-service"
import db from "@/models"

export default class FormAService extends ApplicationService {
	#formData

	constructor(formData) {
		super(formData)
		this.formData = formData
	}

	perform() {
		return this.#createFormSubmission().then((formA) => {
			return this.#buildResponse(formA)
		})
	}

	// private methods

	#createFormSubmission() {
		return db.FormA.create({ firstName: this.formData.firstName })
	}

	#buildResponse() {
		return { success: true }
	}
}
