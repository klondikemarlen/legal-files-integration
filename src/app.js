import express from "express"

import routes from "@/routes"

const app = express()

app.use("/", routes)
app.get("/", (req, res) => {
	res.send(
		'Legal Files Integration as seen on <a href="https://github.com/klondikemarlen/legal-files-integration">klondikemarlen/legal-files-integration</a>'
	)
})

export default app
