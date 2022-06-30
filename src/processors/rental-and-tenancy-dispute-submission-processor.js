import ApplicationProcessor from "@/processors/application-processor"

export const PROCESSORS = Object.freeze({
	form_identifier: {
		key: "formIdentifier",
		transformer: (v) => v,
	},
	email: {
		key: "email",
		transformer: (v) => v,
	},
	first_name: {
		key: "firstName",
		transformer: (v) => v,
	},
	last_name: {
		key: "lastName",
		transformer: (v) => v,
	},
	phone: {
		key: "phone",
		transformer: (v) => v,
	},
	date_of_birth: {
		key: "dateOfBirth",
		transformer: (v) => v.split("T")[0],
	},
	i_am_a: {
		key: "applicantType",
		transformer: (v) => v,
	},
	//// this column is unneeded
	// date: {
	// 	key: "createdAt",
	// 	transformer: () => DateTime.now(), // generated on record creation.
	// },
	// check_dispute: {
	// 	transformer: (v) => v, // reference to join table as multiple values possible
	// },
	details_of_dispute: {
		key: "detailsOfDispute",
		transformer: (v) => v,
	},
	check1: {
		key: "hasAcceptedPolicy",
		transformer: (v) => (v === "1" ? true : false),
	},
})

export default class RentalAndTenancyDisputeSubmissionProcessor extends ApplicationProcessor {
	getProcessors() {
		return Object.entries(PROCESSORS)
	}
}
