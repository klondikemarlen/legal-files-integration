const databaseOptions = {
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	dialect: "mssql",
	migrationStorage: "sequelize",
	migrationStorageTableName: "sequelize_migrations",
	seederStorage: "sequelize",
	seederStorageTableName: "sequelize_seeders",
}

const modelOptions = {
	underscored: true,
	timestamps: true,
}

module.exports = {
	development: {
		...databaseOptions,
		define: modelOptions,
	},
	test: {
		...databaseOptions,
		logging: false, // Disables logging
		define: modelOptions,
	},
	production: {
		...databaseOptions,
		define: modelOptions,
	},
}
