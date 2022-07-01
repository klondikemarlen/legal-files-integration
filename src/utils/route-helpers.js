export function listOfRoutes(router) {
	const data = []
	router.stack.forEach((element) => {
		const route = element.route
		if (route?.path) {
			const methods = Object.keys(route.methods).sort().join(",")
			data.push(`${route.path} - ${methods}`)
		}
	})
	return data
}
