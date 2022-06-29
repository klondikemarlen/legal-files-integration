const fs = require("fs")

function loadTestData(dataRelativePath, tranformer = (d) => JSON.parse(d)) {
	const data = fs.readFileSync(`${__dirname}/data/${dataRelativePath}`)
	return tranformer(data)
}

module.exports = {
	loadTestData,
}
