import ApplicationProcessor from "@/processors/application-processor"

describe("ApplicationProcessor", () => {
	describe("#perform", () => {
		context("when passed some data", () => {
			def("data", () => ({ example_field: "hello" }))

			it("transforms the data", () => {
				expect(ApplicationProcessor.perform($data)).to.include({
					exampleField: "hello world",
				})
			})
		})
	})
})
