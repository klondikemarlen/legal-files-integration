const td = require("testdouble")

import db from "@/models"

// Sloooow, but avoids foreign key constraint issues.
function truncateAllTables() {
	return Promise.all(
		Object.values(db.sequelize.models).map((model) => {
			return model
				.findAll()
				.then((instances) => {
					return Promise.all(instances.map((instance) => instance.destroy()))
				})
				.catch((error) => console.error(error))
		})
	)
}

// reset testdouble mocks after each test.
exports.mochaHooks = {
	beforeEach() {
		return truncateAllTables()
	},
	afterEach(done) {
		td.reset()
		done()
	},
}
