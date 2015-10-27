var exports = module.exports = {}
exports.asParsedTime = function(isoFormat, errCallback, jsonCallback) {
	var date = newDate(isoFormat, errCallback)
	jsonCallback({
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	})
}

exports.asUnixTime = function(isoFormat, errCallback, jsonCallback) {
	var date = newDate(isoFormat, errCallback)
	jsonCallback({
		unixtime: date.getTime()
	})
}

function newDate(iso, errorCallback) {
	if (!iso) {
		errorCallback('Undefined query parameter: iso')
	}
	var date = new Date(iso)
	if (!date || isNaN(date.getTime())) {
		errorCallback('Unrecognised date format: ' + iso)
	}
	return date;
}