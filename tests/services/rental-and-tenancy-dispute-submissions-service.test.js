import RentalAndTenancyDisputeSubmissionsService from "@/services/rental-and-tenancy-dispute-submissions-service"
import db from "@/models"

describe("RentalAndTenancyDisputeSubmissionsService", () => {
	describe("#perform", () => {
		context("when passed some form data", () => {
			def("data", () =>
				loadTestData("rental-and-tenacy-submissions/submission-1.json")
			)

			it("stores the raw submission", () => {
				expect(() =>
					RentalAndTenancyDisputeSubmissionsService.perform($data)
				).to.alter(() => db.Submission.count(), {
					by: 1,
				})
			})
		})
	})
})
