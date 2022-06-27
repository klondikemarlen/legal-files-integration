import ApplicationService from "@/services/application-service"

export default class FormAService extends ApplicationService {
	#paramA

	constructor(paramA) {
		super(paramA)
		this.paramA = paramA
	}

	perform() {
		return `transformed the form using paramters: ${this.paramA}`
	}
}
