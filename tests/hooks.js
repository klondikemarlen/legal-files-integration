const td = require("testdouble")

import db from "@/models"

function destroyAll(model) {
	return model
		.findAll()
		.then((instances) => {
			return Promise.all(instances.map((instance) => instance.destroy()))
		})
		.catch((error) => console.error(error))
}

// Sloooow, but avoids foreign key constraint issues.
async function destroyAllOnAllTables() {
	await destroyAll(db.RentalAndTenancyDisputeType)
	await destroyAll(db.RentalAndTenancyDisputeSubmission)

	return Promise.all(
		Object.values(db.sequelize.models).map((model) => {
			return destroyAll(model)
		})
	)
}

// reset testdouble mocks after each test.
exports.mochaHooks = {
	beforeEach() {
		return destroyAllOnAllTables()
	},
	afterEach(done) {
		td.reset()
		done()
	},
}
