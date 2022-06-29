const chai = require("chai")
const chaiAsPromised = require("chai-as-promised")
const chaiChange = require("chai-change")
const td = require("testdouble")
const testdoubleChai = require("testdouble-chai")
// const { faker } = require('@faker-js/faker');

chai.use(testdoubleChai(td))
chai.use(chaiChange)
chai.use(chaiAsPromised) // install last to promisify other plugins

global.expect = chai.expect
global.td = td
// global.faker = faker;

// Load all test helpers
const helpers = require("./helpers")
Object.entries(helpers).forEach(([key, value]) => {
	global[key] = value
})
