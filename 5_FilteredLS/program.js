var fs = require('fs')
var path = require('path')

var pathName = process.argv[2]
var extension = process.argv[3]

fs.readdir(pathName, function(err, list) {
	list.forEach(function(file) {
		if (path.extname(file) === "." + extension) {
			console.log(file)
		}
	})
})