const td = require("testdouble")

// reset testdouble mocks after each test.
exports.mochaHooks = {
	afterEach(done) {
		td.reset()
		done()
	},
}
