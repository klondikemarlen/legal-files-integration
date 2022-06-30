"use strict"

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameColumn(
			"rental_and_tenancy_dispute_submissions",
			"application_type",
			"applicant_type",
			{
				type: Sequelize.STRING,
			}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.renameColumn(
			"rental_and_tenancy_dispute_submissions",
			"applicant_type",
			"application_type",
			{
				type: Sequelize.STRING,
			}
		)
	},
}
