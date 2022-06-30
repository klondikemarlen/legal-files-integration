import ApplicationService from "@/services/application-service"
import db from "@/models"

export default class FormAService extends ApplicationService {
	perform() {
		return Promise.resolve(this.rawSubmission)
			.then(this.#createFormSubmission)
			.then(this.#buildResponse)
	}

	// private methods

	#createFormSubmission(modelAttributes) {
		return db.FormA.create({ ...modelAttributes })
	}

	#buildResponse() {
		return { success: true }
	}
}
