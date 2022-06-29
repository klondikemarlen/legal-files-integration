import path from "path"

import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import nodeResolve from "@rollup/plugin-node-resolve"
import nodeGlobals from "rollup-plugin-node-globals"

export default {
	input: "./server.js",
	output: {
		file: "./dist/server-bundle.js",
		format: "cjs",
	},
	external: ["fs", "path", "sequelize"],
	plugins: [
		babel({
			include: ["**/*.js"],
			exclude: "node_modules/**",
			configFile: path.resolve(__dirname, "babel.config.json"),
			babelHelpers: "bundled",
		}),
		nodeResolve({
			moduleDirectories: ["node_modules"],
			preferBuiltins: true,
		}),
		json(),
		commonjs({
			ignoreDynamicRequires: true,
		}),
		nodeGlobals(),
	],
}
