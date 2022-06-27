import { Router } from "express"

import formAController from "@/controllers/form-a-controller"

const router = Router()

router.get("/", (req, res) => {
	res.send("Legal Files Integration API.")
})
router.route("/form-a").post(formAController.postInjestForm)

export default router
