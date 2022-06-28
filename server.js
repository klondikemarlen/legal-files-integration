import app from "@/app"

const bootMessageUrl = process.env.BOOT_MESSAGE_URL || "http://localhost:3000"

app.listen(3000, () => {
	console.log(`API listening at ${bootMessageUrl}`)
})
