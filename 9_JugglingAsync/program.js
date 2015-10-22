var http = require('http')
var bl = require('bl')

var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var numHandled = 0
var dataUrl1 = ""
var dataUrl2 = ""
var dataUrl3 = ""

function printResults() {
	console.log(dataUrl1)
	console.log(dataUrl2)
	console.log(dataUrl3)
}

http.get(url1, function callback(response) {
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err)
		dataUrl1 = data.toString()
		numHandled++
		if (numHandled == 3) {
			printResults()
		}
	}))
})

http.get(url2, function callback(response) {
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err)
		dataUrl2 = data.toString()
		numHandled++
		if (numHandled == 3) {
			printResults()
		}
	}))
})

http.get(url3, function callback(response) {
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err)
		dataUrl3 = data.toString()
		numHandled++
		if (numHandled == 3) {
			printResults()
		}
	}))
})