"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class RentalAndTenancyDisputeSubmission extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.submission)
			this.hasMany(models.rentalAndTenancyDisputeType, {
				onDelete: "cascade",
			})
			this.belongsToMany(
				models.rentalAndTenancyDisputeTypeOption,
				{
					through: models.rentalAndTenancyDisputeType,
				},
				{ onDelete: "set null" }
			)
		}
	}
	RentalAndTenancyDisputeSubmission.init(
		{
			formIdentifier: DataTypes.STRING,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			phone: DataTypes.STRING,
			dateOfBirth: DataTypes.DATEONLY,
			applicantType: DataTypes.STRING,
			detailsOfDispute: DataTypes.TEXT,
			hasAcceptedPolicy: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "rentalAndTenancyDisputeSubmission",
			tableName: "rental_and_tenancy_dispute_submissions",
		}
	)
	return RentalAndTenancyDisputeSubmission
}
