import path from "path"

import babel from "@rollup/plugin-babel"

export default {
	input: "./server.js",
	output: {
		file: "./dist/server-bundle.js",
		format: "cjs",
	},
	plugins: [
		babel({
			exclude: "node_modules/**",
			configFile: path.resolve(__dirname, "babel.config.json"),
		}),
	],
}
