import FormAService from "@/services/form-a-service"

import * as formAApi from "@/api/form-a-api"

describe("FormApiService", () => {
	def("formAApi", () => td.replace(formAApi, "default"))

	context("when called", () => {
		def("data", () => ({
			foo: "bar",
		}))

		def("apiSuccessResponse", () => ({ success: true }))

		beforeEach(() => {
			td.when($formAApi.create($data)).thenResolve($apiSuccessResponse)
		})

		it("propagates the data to the formAApi", () => {
			return FormAService.perform($data).then((data) => {
				expect(data).to.include("success")
			})
		})
	})
})
