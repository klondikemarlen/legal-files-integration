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

	#transformFormSubmission(submission) {
		const { data } = JSON.parse(submission.rawSubmission)

		const formIdentifier = data["form_identifier"]
		const firstName = data["first_name"]
		const lastName = data["last_name"]

		return { formIdentifier, firstName, lastName, submissionId: submission.id }
	}

	#createFormSubmission(modelData) {
		return db.RentalAndTenancyDisputeSubmission.create({ ...modelData })
	}

	#buildResponse() {
		return { success: true }
	}
}
