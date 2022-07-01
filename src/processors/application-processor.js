export const PROCESSORS = Object.freeze({
	example_field: {
		key: "exampleField",
		transformer: (v) => v + " world",
	},
})

//
// Provides a class level (static) perform method for
// all sub-classes that always returns a promise.
export default class ApplicationProcessor {
	#rawData

	constructor(rawData) {
		this.#rawData = rawData
	}

	static perform(...args) {
		const instance = new this(...args)
		return instance.perform()
	}

	perform() {
		const parsedData = {}
		this.getProcessors().forEach(([field, processor]) => {
			const { key, transformer } = processor
			parsedData[key] = transformer(this.#rawData[field])
		})
		return parsedData
	}

	getProcessors() {
		return Object.entries(PROCESSORS)
	}
}
