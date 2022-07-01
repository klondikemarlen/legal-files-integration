import RentalAndTenancyDisputeSubmissionsService from "@/services/rental-and-tenancy-dispute-submissions-service"

export function postInjestForm(req, res) {
	const formData = req.body

	return RentalAndTenancyDisputeSubmissionsService.perform(formData)
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
