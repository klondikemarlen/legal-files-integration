"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class RentalAndTenancyDisputeTypeOption extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.rentalAndTenancyDisputeType, {
				onDelete: "cascade",
			})
			this.belongsToMany(
				models.rentalAndTenancyDisputeSubmission,
				{
					through: models.rentalAndTenancyDisputeType,
				},
				{ onDelete: "set null" }
			)
		}
	}
	RentalAndTenancyDisputeTypeOption.init(
		{
			value: DataTypes.INTEGER,
			text: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "rentalAndTenancyDisputeTypeOption",
			tableName: "rental_and_tenancy_dispute_type_options",
		}
	)
	return RentalAndTenancyDisputeTypeOption
}
