var mymodule = require('./module')
var pathName = process.argv[2]
var extension = process.argv[3]

mymodule(pathName, extension, function(err, files){
	if (err)
		return console.error('There was an error:', err)
	files.forEach(function(file){
		console.log(file)
	})
})