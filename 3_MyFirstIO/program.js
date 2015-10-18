var fs = require('fs')
var fileName = process.argv[2]
var buffer = fs.readFileSync(fileName)
var content = buffer.toString()

console.log(content.split('\n').length - 1)