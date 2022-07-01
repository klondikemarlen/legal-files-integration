"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class RentalAndTenancyDisputeType extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.rentalAndTenancyDisputeSubmission)
			this.belongsTo(models.rentalAndTenancyDisputeTypeOption)
		}
	}
	RentalAndTenancyDisputeType.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "rentalAndTenancyDisputeType",
			tableName: "rental_and_tenancy_dispute_types",
		}
	)
	return RentalAndTenancyDisputeType
}
