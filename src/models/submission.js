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
			this.hasOne(models.rentalAndTenancyDisputeSubmission, {
				onDelete: "cascade",
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
			modelName: "submission",
			tableName: "submissions",
		}
	)
	return Submission
}
