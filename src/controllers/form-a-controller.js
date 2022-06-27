import FormAService from "@/services/form-a-service"

export function create(req, res) {
	return FormAService.perform("paramA")
		.then((data) => {
			return res.json(data)
		})
		.catch((error) => {
			return res.status(422).json({
				messages: [{ variant: "error", text: error.message }],
			})
		})
}

export default {
	create,
}
