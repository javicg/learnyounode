var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function (socket) {
	var format = '%F %H:%M'
	var now = strftime(format, new Date())
	socket.end(now + '\n')
})
server.listen(Number(process.argv[2]))