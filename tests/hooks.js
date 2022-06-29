const td = require("testdouble")

import db from "@/models"

// reset testdouble mocks after each test.
exports.mochaHooks = {
	beforeEach() {
		return db.sequelize.sync({ force: true })
	},
	afterEach(done) {
		td.reset()
		done()
	},
}
