import ApplicationService from "@/services/application-service"
import db from "@/models"
import RentalAndTenancyDisputeSubmissionProcessor from "@/processors/rental-and-tenancy-dispute-submission-processor"

export default class RentalAndTenancyDisputeSubmissionsService extends ApplicationService {
	perform() {
		return Promise.resolve(this.rawSubmission)
			.then(this.#saveRawSubmission)
			.then(this.#parseRawSubmission)
			.then(this.#createFormSubmission)
			.then(this.#buildResponse)
	}

	// private methods

	#saveRawSubmission(rawSubmission) {
		return db.Submission.create({
			rawSubmission: JSON.stringify(rawSubmission),
		})
	}

	#parseRawSubmission(submission) {
		const { data } = JSON.parse(submission.rawSubmission)

		const parsedData = RentalAndTenancyDisputeSubmissionProcessor.perform(data)

		return {
			...parsedData,
			submissionId: submission.id,
		}
	}

	#createFormSubmission(modelData) {
		return db.RentalAndTenancyDisputeSubmission.create({ ...modelData })
	}

	#buildResponse() {
		return { success: true }
	}
}
