var fs = require('fs')
var path = require('path')

module.exports = function handleFilesWithExtensionOnPath(pathName, extension, callback) {
	fs.readdir(pathName, function(err, list) {
		if (err)
			return callback(err)
		var filesWithExtension = list.filter(function(file) {
			return path.extname(file) === "." + extension
		})
		callback(null, filesWithExtension)
})
}