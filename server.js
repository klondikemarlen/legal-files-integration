import app from "@/app.js"

const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"

app.listen(port, () => {
	console.log(`API listening at http://${host}:${port}`)
})
