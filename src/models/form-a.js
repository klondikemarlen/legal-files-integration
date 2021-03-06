"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
	class FormA extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	FormA.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "formA",
			tableName: "form_as",
		}
	)
	return FormA
}
