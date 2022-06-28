import FormAService from "@/services/form-a-service"

export function postInjestForm(req, res) {
	const formData = req.body

	return FormAService.perform(formData)
		.then((data) => {
			return res.json(data)
		})
		.catch((error) => {
			return res.status(422).json({
				error: error.message,
			})
		})
}

export default {
	postInjestForm,
}
