"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
	class Submission extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			models.Submission.hasOne(models.RentalAndTenancyDisputeSubmission, {
				// I don't think the cascade works.
				// It might need to be set at migration time via
				// queryInterface.addConstraint
				onDelete: "CASCADE",
			})
		}
	}
	Submission.init(
		{
			rawSubmission: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: "submissions",
		}
	)
	return Submission
}
