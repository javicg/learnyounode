var http = require('http')

var url = process.argv[2]

http.get(url, function callback(response) {
	var allData = ''
	var responseSize = 0
	
	response.setEncoding('utf-8')
	response.on('data', function (data) {
		responseSize = responseSize + data.length
		allData = allData.concat(data)
	})
	response.on('error', console.error)
	response.on('end', function () {
		console.log(responseSize)
		console.log(allData)
	})
})