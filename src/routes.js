import express from "express"

import formAController from "@/controllers/form-a-controller"

const router = express.Router()

// API middlewares
// See https://expressjs.com/en/api.html#req.body
router.use("/api", express.json()) // for parsing application/json
router.use("/api", express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// API form routes
router.route("/api/forms/form-a").post(formAController.postInjestForm)

export default router
