import RentalAndTenancyDisputeSubmissionProcessor from "@/processors/rental-and-tenancy-dispute-submission-processor"

describe("RentalAndTenancyDisputeSubmissionProcessor", () => {
	describe("#perform", () => {
		context("when passed some data", () => {
			def(
				"data",
				() =>
					loadTestData("rental-and-tenacy-submissions/submission-1.json")[
						"data"
					]
			)

			it("transforms the data", () => {
				expect(
					RentalAndTenancyDisputeSubmissionProcessor.perform($data)
				).to.deep.include({
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
					disputeTypeOptionValues: [1, 5, 8],
				})
			})
		})
	})
})
