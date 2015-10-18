var mymodule = require('./module')
var pathName = process.argv[2]
var extension = process.argv[3]

mymodule(pathName, extension, function(err, files){
	if (err) {
		console.log('Something bad happened... (error below)')
		console.log(err)
	} else {
		files.forEach(function(file){
			console.log(file)
		})
	}
})