import FormAService from "@/services/form-a-service"
import db from "@/models"

describe("FormApiService", () => {
	describe("#perform", () => {
		context("when passed some form data", () => {
			def("data", () => ({
				firstName: "Marlen",
			}))

			it("success stores the data in the database", () => {
				return FormAService.perform($data).then((data) => {
					expect(data).to.eql({ success: true })
				})
			})

			it("error stores the data in the database", () => {
				expect(() => FormAService.perform($data)).to.alter(
					() => db.FormA.count(),
					{
						by: 1,
					}
				)
			})
		})
	})
})
