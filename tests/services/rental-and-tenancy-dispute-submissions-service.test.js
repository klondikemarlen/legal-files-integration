import RentalAndTenancyDisputeSubmissionsService from "@/services/rental-and-tenancy-dispute-submissions-service"
import db from "@/models"

describe("RentalAndTenancyDisputeSubmissionsService", () => {
	describe("#perform", () => {
		context("when passed some form data", () => {
			def("data", () =>
				loadTestData("rental-and-tenacy-submissions/submission-1.json")
			)

			def("disputeTypeOptionFields", () => [
				{ value: "1", text: "Unpaid rent" },
				{ value: "2", text: "Security deposit" },
				{ value: "3", text: "Repairs not complete" },
				{ value: "4", text: "Request for an order of possession" },
				{ value: "5", text: "Breach of tenancy agreement" },
				{ value: "6", text: "Unpaid utilities" },
				{ value: "7", text: "Rental increase not in compliance with RLTA" },
				{ value: "8", text: "Abandoned property" },
			])

			it("stores the raw submission", async () => {
				expect(await db.submission.count()).to.equal(0)

				await RentalAndTenancyDisputeSubmissionsService.perform($data)
				expect(await db.submission.count()).to.equal(1)
			})

			it("creates a RentalAndTenancyDisputeSubmission", async () => {
				expect(await db.rentalAndTenancyDisputeSubmission.count()).to.equal(0)

				await RentalAndTenancyDisputeSubmissionsService.perform($data)
				expect(await db.rentalAndTenancyDisputeSubmission.count()).to.equal(1)
			})

			it("creates an RentalAndTenancyDisputeSubmission with all the basic properties", async () => {
				return RentalAndTenancyDisputeSubmissionsService.perform($data).then(
					() => {
						return db.rentalAndTenancyDisputeSubmission
							.findAll({
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
							})
							.then((result) => {
								return expect(result).not.to.be.empty
							})
					}
				)
			})

			it("adds three RentalAndTenancyDisputeType records", async () => {
				await db.rentalAndTenancyDisputeTypeOption.bulkCreate(
					$disputeTypeOptionFields,
					{ validate: true }
				)

				expect(await db.rentalAndTenancyDisputeType.count()).to.equal(0)

				await RentalAndTenancyDisputeSubmissionsService.perform($data)
				expect(await db.rentalAndTenancyDisputeType.count()).to.equal(3)
			})
		})
	})
})
