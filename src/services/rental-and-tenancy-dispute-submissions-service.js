import ApplicationService from "@/services/application-service"
import db from "@/models"
import RentalAndTenancyDisputeSubmissionProcessor from "@/processors/rental-and-tenancy-dispute-submission-processor"

export default class RentalAndTenancyDisputeSubmissionsService extends ApplicationService {
	perform() {
		return Promise.resolve(this.rawSubmission)
			.then(this.#saveRawSubmission)
			.then(this.#parseRawSubmission)
			.then((modelData) => {
				return this.#createFormSubmission(modelData).then((submission) =>
					this.#createDisputeTypes(submission, modelData)
				)
			})
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

	async #createDisputeTypes(submission, modelData) {
		const { disputeTypeOptionValues } = modelData
		const disputeTypes = await db.RentalAndTenancyDisputeTypeOption.findAll({
			where: {
				value: {
					[db.Sequelize.Op.in]: disputeTypeOptionValues,
				},
			},
			attributes: ["id"],
		})
		// Not sure I understand why these are need to be uppercased.
		// Possibly something around the defaults of tedious (MS SQL driver)?
		// Might be worth making all names uppercase for sanity.
		const fields = disputeTypes.map((disputeType) => ({
			RentalAndTenancyDisputeSubmissionId: submission.id,
			RentalAndTenancyDisputeTypeOptionId: disputeType.id,
		}))
		return db.RentalAndTenancyDisputeType.bulkCreate(fields, { validate: true })
	}

	#buildResponse() {
		return { success: true }
	}
}
