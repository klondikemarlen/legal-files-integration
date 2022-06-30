import RentalAndTenancySubmissionsService from "@/services/rental-and-tenancy-submissions-service"
import db from "@/models"

describe("RentalAndTenancySubmissionsService", () => {
	describe("#perform", () => {
		context("when passed some form data", () => {
			def("data", () =>
				loadTestData("rental-and-tenacy-submissions/submission-1.json")
			)

			it("stores the raw submission", () => {
				expect(() =>
					RentalAndTenancySubmissionsService.perform($data)
				).to.alter(() => db.Submissions.count(), {
					by: 1,
				})
			})
		})
	})
})
