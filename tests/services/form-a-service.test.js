import FormAService from "@/services/form-a-service"
import db from "@/models"

describe("FormAService", () => {
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

			it("error stores the data in the database", async () => {
				expect(await db.FormA.count()).to.equal(0)

				await FormAService.perform($data)
				expect(await db.FormA.count()).to.equal(1)
			})
		})
	})
})
