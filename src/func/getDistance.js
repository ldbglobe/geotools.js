const toRad = require('./toRad.js');

var getDistance = function(from, to, RADIUS=6371) {
	var fromLat = from[0];
	var fromLon = from[1];
	var toLat = to[0];
	var toLon = to[1];

	var dLat = toRad(toLat - fromLat);
	var dLon = toRad(toLon - fromLon);
	var fromLat = toRad(fromLat);
	var toLat = toRad(toLat);

	var a = Math.pow(Math.sin(dLat / 2), 2) + (Math.pow(Math.sin(dLon / 2), 2) * Math.cos(fromLat) * Math.cos(toLat));
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return RADIUS * c;
};

module.exports = getDistance;