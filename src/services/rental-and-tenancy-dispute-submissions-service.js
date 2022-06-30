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

		const email = data["email"]
		const phone = data["phone"]
		const dateOfBirth = data["date_of_birth"].split("T")[0]
		const applicantType = data["i_am_a"]
		const detailsOfDispute = data["details_of_dispute"]
		const hasAcceptedPolicy = data["check1"] === "1" ? true : false

		return {
			formIdentifier,
			applicantType,
			dateOfBirth,
			detailsOfDispute,
			email,
			firstName,
			hasAcceptedPolicy,
			lastName,
			phone,
			submissionId: submission.id,
		}
	}

	#createFormSubmission(modelData) {
		return db.RentalAndTenancyDisputeSubmission.create({ ...modelData })
	}

	#buildResponse(parsedSubmission) {
		return { data: parsedSubmission.toJSON() }
	}
}
