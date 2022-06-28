import { Router } from "express"

import formAController from "@/controllers/form-a-controller"

const router = Router()

router.route("/form-a").post(formAController.postInjestForm)

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

export default router
