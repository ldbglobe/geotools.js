const getDistance = require('./getDistance.js');

var measurePath = function(points, RADIUS=6371) {
	return points.reduce(function(memo, point) {
		var distance = memo.lastPoint === null ? 0 : getDistance(memo.lastPoint, point, RADIUS);
		return { lastPoint: point, distance: distance + memo.distance };
	}, { lastPoint: null, distance: 0 }).distance;
};

module.exports = measurePath;