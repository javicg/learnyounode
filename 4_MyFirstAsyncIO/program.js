var fs = require('fs')
var filePath = process.argv[2]

fs.readFile(filePath, function(err, data) {
	if (!err) {
		var lines = data.toString().split('\n').length - 1
		console.log(lines)
	}
})