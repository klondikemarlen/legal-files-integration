"use strict"
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"rental_and_tenancy_dispute_type_options",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				value: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				text: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				created_at: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				updated_at: {
					allowNull: false,
					type: Sequelize.DATE,
				},
			}
		)
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("rental_and_tenancy_dispute_type_options")
	},
}
