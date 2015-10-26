var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
	if (req.method != 'POST')
		return res.end('Please, send a POST request!')
	
	res.writeHead(200, {'content-type': req.headers['content-type']})
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res)
})
server.listen(Number(process.argv[2]))