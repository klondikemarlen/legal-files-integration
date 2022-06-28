import reqresnext from "reqresnext"

import FormAController from "@/controllers/form-a-controller"
import * as FormAService from "@/services/form-a-service"

describe("FormAController", () => {
	subject("controller", () => FormAController)

	def("FormAServiceMock", () => td.replace(FormAService, "default"))
	def("formData", () => ({ foo: "bar" }))

	describe("#postInjestForm", () => {
		context("when injesting a form", () => {
			context("when dependent service succeeds", () => {
				beforeEach(() => {
					td.when($FormAServiceMock.perform($formData)).thenResolve($formData)
				})

				it("returns a succes code", () => {
					const { req, res } = reqresnext({
						body: $formData,
					})

					return $controller.postInjestForm(req, res).then(() => {
						return expect(res.statusCode).to.eq(200)
					})
				})
			})

			context("when dependent service fails", () => {
				beforeEach(() => {
					td.when($FormAServiceMock.perform($formData)).thenReject(
						"Form A Serivce failure."
					)
				})

				it("returns a fauire code", () => {
					const { req, res } = reqresnext({
						body: $formData,
					})

					return $controller.postInjestForm(req, res).then(() => {
						return expect(res.statusCode).to.eq(422)
					})
				})
			})
		})
	})
})
