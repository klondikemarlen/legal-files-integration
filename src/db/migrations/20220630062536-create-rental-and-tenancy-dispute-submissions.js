"use strict"
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("rental_and_tenancy_dispute_submissions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			submission_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "submissions",
					key: "id",
				},
			},
			form_identifier: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			first_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			last_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
			},
			phone: {
				type: Sequelize.STRING,
			},
			date_of_birth: {
				type: Sequelize.DATEONLY,
			},
			application_type: {
				type: Sequelize.STRING,
			},
			details_of_dispute: {
				type: Sequelize.TEXT,
			},
			has_accepted_policy: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("rental_and_tenancy_dispute_submissions")
	},
}
