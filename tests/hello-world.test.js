describe("Array", () => {
	subject("array", () => [1, 2, 3])

	describe("#indexOf()", () => {
		it("should return -1 when the value is not present", () => {
			expect($array.indexOf(4)).to.eq(-1)
		})
	})
})
