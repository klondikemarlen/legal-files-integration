import express from "express"

import routes from "@/routes"
import { listOfRoutes } from "@/utils/route-helpers"

const app = express()

app.use("/", routes)
app.get("/", (req, res) => {
	// Return list of routes.

	const routeList = listOfRoutes(routes)
	res.send(
		"Legal Files Integration as seen on " +
			'<a href="https://github.com/klondikemarlen/legal-files-integration">klondikemarlen/legal-files-integration</a>' +
			"<br>" +
			"<br>" +
			"Legal Files Integration API Routes" +
			"<br>" +
			"<br>" +
			routeList.join("<br>")
	)
})

export default app
