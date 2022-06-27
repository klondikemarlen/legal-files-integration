import express from "express"

import routes from "@/routes"

const app = express()

// API middlewares
// See https://expressjs.com/en/api.html#req.body
app.use("/api", express.json()) // for parsing application/json
app.use("/api", express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use("/api", routes)

app.get("/", (req, res) => {
	res.send(
		'Legal Files Integration as seen on <a href="https://github.com/klondikemarlen/legal-files-integration">klondikemarlen/legal-files-integration</a>'
	)
})

export default app
