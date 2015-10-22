var http = require('http')
var bl = require('bl')
var results = []
var numHandled = 0

// Main program
for (var i=0; i < 3; i++) {
	httpGetIndex(i)
}

// Aux functions
function httpGetIndex(index) {
	http.get(process.argv[2 + index], function callback(response) {
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err)
		results[index] = data.toString()
		numHandled++
		if (numHandled == 3) {
			printResults()
		}
	}))
})
}

function printResults() {
	for (var i=0; i < 3; i++) {
		console.log(results[i])
	}
}