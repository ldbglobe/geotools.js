const getDistance = require('./getDistance.js');

var proximityTest = function(basePoint, points, limit, RADIUS=6371) {
	return points.reduce((memo, point) => {
		if(getDistance(basePoint, point, RADIUS) < limit)
			memo++;
		return memo;
	}, 0);
};

module.exports = proximityTest;