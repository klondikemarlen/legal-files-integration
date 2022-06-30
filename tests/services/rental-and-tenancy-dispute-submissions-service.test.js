import RentalAndTenancyDisputeSubmissionsService from "@/services/rental-and-tenancy-dispute-submissions-service"
import db from "@/models"

describe("RentalAndTenancyDisputeSubmissionsService", () => {
	describe("#perform", () => {
		context("when passed some form data", () => {
			def("data", () =>
				loadTestData("rental-and-tenacy-submissions/submission-1.json")
			)

			it("stores the raw submission", async () => {
				expect(await db.Submission.count()).to.equal(0)

				await RentalAndTenancyDisputeSubmissionsService.perform($data)
				expect(await db.Submission.count()).to.equal(1)
			})

			it("creates a RentalAndTenancyDisputeSubmission", async () => {
				expect(await db.RentalAndTenancyDisputeSubmission.count()).to.equal(0)

				await RentalAndTenancyDisputeSubmissionsService.perform($data)
				expect(await db.RentalAndTenancyDisputeSubmission.count()).to.equal(1)
			})
		})
	})
})
