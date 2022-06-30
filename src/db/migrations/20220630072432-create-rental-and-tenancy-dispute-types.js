"use strict"
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("rental_and_tenancy_dispute_types", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			rental_and_tenancy_dispute_submission_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "rental_and_tenancy_dispute_submissions",
					key: "id",
				},
			},
			rental_and_tenancy_dispute_type_option_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "rental_and_tenancy_dispute_type_options",
					key: "id",
				},
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
		await queryInterface.dropTable("rental_and_tenancy_dispute_types")
	},
}
