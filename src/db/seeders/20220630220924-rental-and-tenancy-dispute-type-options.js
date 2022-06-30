"use strict"

module.exports = {
	async up(queryInterface, Sequelize) {
		const fields = [
			{ value: "1", text: "Unpaid rent" },
			{ value: "2", text: "Security deposit" },
			{ value: "3", text: "Repairs not complete" },
			{ value: "4", text: "Request for an order of possession" },
			{ value: "5", text: "Breach of tenancy agreement" },
			{ value: "6", text: "Unpaid utilities" },
			{ value: "7", text: "Rental increase not in compliance with RLTA" },
			{ value: "8", text: "Abandoned property" },
		]

		await queryInterface.bulkInsert(
			"rental_and_tenancy_dispute_type_options",
			fields.map((field) => {
				field["created_at"] = new Date()
				field["updated_at"] = new Date()
				return field
			}),
			{
				individualHooks: false,
			}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			"rental_and_tenancy_dispute_type_options",
			null,
			{}
		)
	},
}
