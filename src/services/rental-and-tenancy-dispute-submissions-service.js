import ApplicationService from "@/services/application-service"
import db from "@/models"

export default class RentalAndTenancyDisputeSubmissionsService extends ApplicationService {
	perform() {
		return Promise.resolve(this.rawSubmission)
			.then(this.#saveRawSubmission)
			.then(this.#transformFormSubmission)
			.then(this.#createFormSubmission)
			.then(this.#buildResponse)
	}

	// private methods

	#saveRawSubmission(rawSubmission) {
		return db.Submission.create({
			rawSubmission: JSON.stringify(rawSubmission),
		})
	}

	#transformFormSubmission(rawSubmission) {
		return rawSubmission
	}

	#createFormSubmission(modelData) {
		return db.FormA.create({ ...modelData })
	}

	#buildResponse() {
		return { success: true }
	}
}
