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

			it("creates an RentalAndTenancyDisputeSubmission with all the basic properties", async () => {
				return RentalAndTenancyDisputeSubmissionsService.perform($data).then(
					() => {
						return db.RentalAndTenancyDisputeSubmission.findAll({
							where: {
								formIdentifier: "YK-dev-000001.00001",
								email: "test@test.com",
								firstName: "John",
								lastName: "McCartney",
								phone: "(123) 456-7890",
								dateOfBirth: "1969-12-31",
								applicantType: "landlord",
								detailsOfDispute:
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
									"Negat esse eam, inquit, propter se expetendam. Primum Theophrasti, " +
									"Strato, physicum se voluit; Id mihi magnum videtur. Itaque mihi " +
									"non satis videmini considerare quod iter sit naturae quaeque " +
									"progressio. Quare hoc videndum est, possitne nobis hoc ratio " +
									"philosophorum dare. Est enim tanti philosophi tamque nobilis " +
									"audacter sua decreta defendere.",
								hasAcceptedPolicy: true,
							},
						}).then((result) => {
							return expect(result).not.to.be.empty
						})
					}
				)
			})

			it("adds three RentalAndTenancyDisputeType records", async () => {
				expect(await db.RentalAndTenancyDisputeType.count()).to.equal(0)

				await RentalAndTenancyDisputeSubmissionsService.perform($data)
				expect(await db.RentalAndTenancyDisputeType.count()).to.equal(3)
			})
		})
	})
})
