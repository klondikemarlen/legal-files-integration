//
// Provides a class level (static) perform method for
// all sub-classes that always returns a promise.
export default class ApplicationService {
	static perform(...args) {
		const instance = new this(...args)
		return Promise.resolve(instance.perform())
	}
}
