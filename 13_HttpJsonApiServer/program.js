var http = require('http')
var url = require('url')
var dateAPI = require('./dateAPI')

var server = http.createServer(function (req, res) {
	var path = url.parse(req.url, true)
	if ('GET' == req.method && '/api/parsetime' == path.pathname) {
		dateAPI.asParsedTime(path.query.iso, function(errorMessage) {
			handleError(errorMessage, res)
		}, function (json) {
			handleResponse(json, res)
		})
	} else if ('GET' == req.method && '/api/unixtime' == path.pathname) {
		dateAPI.asUnixTime(path.query.iso, function(errorMessage) {
			handleError(errorMessage, res)
		}, function (json) {
			handleResponse(json, res)
		})
	} else {
		handleError('Unsupported API: ' + req.method + ' ' + req.url, res)
	}
})

server.listen(Number(process.argv[2]))

function handleError(errorMessage, res) {
	res.writeHead(400, {'Content-Type': 'application/json'})
	res.end(JSON.stringify({error: errorMessage}))
}

function handleResponse(json, res) {
	res.writeHead(200, {'Content-Type': 'application/json'})
	res.end(JSON.stringify(json))
}