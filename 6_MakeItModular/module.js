var fs = require('fs')
var path = require('path')

module.exports = function handleFilesWithExtensionOnPath(pathName, extension, callback) {
	fs.readdir(pathName, function(err, list) {
		if (err)
			return callback(err)
		var filesWithExtension = []
		list.forEach(function(file) {
			if (path.extname(file) === "." + extension) {
				filesWithExtension.push(file)
			}
		})
		callback(null, filesWithExtension)
})
}