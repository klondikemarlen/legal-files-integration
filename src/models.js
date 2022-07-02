"use strict"

const Sequelize = require("sequelize")

const allConfigs = require("./db/config.js")

// Manually requiring models to avoid dynamic import
// issues when bundling the app.
const formAFactory = require("./models/form-a")
const rentalAndTenancyDisputeSubmissionFactory = require("./models/rental-and-tenancy-dispute-submission")
const rentalAndTenancyDisputeTypeFactory = require("./models/rental-and-tenancy-dispute-type")
const rentalAndTenancyDisputeTypeOptionFactory = require("./models/rental-and-tenancy-dispute-type-option")
const submissionFactory = require("./models/submission")

const env = process.env.NODE_ENV || "development"
const config = allConfigs[env]
const db = {}

let sequelize
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	)
}

;[
	formAFactory,
	rentalAndTenancyDisputeSubmissionFactory,
	rentalAndTenancyDisputeTypeFactory,
	rentalAndTenancyDisputeTypeOptionFactory,
	submissionFactory,
].forEach((modelFactory) => {
	const model = modelFactory(sequelize, Sequelize.DataTypes)
	db[model.name] = model
})

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
