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

async function destroyAllOnAllTables() {
	// Manually specify order if you run into Foregn Key issues.
	// If you set up your relationships properly
	// it should "just work"(tm)
	// await destroyAll(db.rentalAndTenancyDisputeType)
	// await destroyAll(db.rentalAndTenancyDisputeSubmission)

	return Promise.all(
		Object.values(db.sequelize.models).map((model) => {
			return destroyAll(model)
		})
	)
}

// reset testdouble mocks after each test.
exports.mochaHooks = {
	beforeEach() {
		// You'd think this would be very slow, but db.sequelize.sync({ force: true }) is slower
		// db.sequelize.truncate() in theory would be the best,
		// but it has foreign key constraint issues.
		return destroyAllOnAllTables()
	},
	afterEach(done) {
		td.reset()
		done()
	},
}
