import express from "express"

import formAController from "@/controllers/form-a-controller"

const router = express.Router()

// API middlewares
// See https://expressjs.com/en/api.html#req.body
router.use("/api", express.json()) // for parsing application/json
router.use("/api", express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Return list of routes.
router.get("/", (req, res) => {
	const data = []
	router.stack.forEach((element) => {
		const route = element.route
		if (route?.path) {
			const methods = Object.keys(route.methods).sort().join(",")
			data.push(`${route.path} - ${methods}`)
		}
	})

	res.send("Legal Files Integration API Routes<br><br>" + data.join("<br>"))
})
// API form routes
router.route("/api/forms/form-a").post(formAController.postInjestForm)

export default router
