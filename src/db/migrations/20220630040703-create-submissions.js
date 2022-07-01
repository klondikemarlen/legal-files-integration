"use strict"
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("submissions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			raw_submission: {
				type: Sequelize.TEXT,
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
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("submissions")
	},
}
