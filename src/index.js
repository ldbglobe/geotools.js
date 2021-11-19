const getDistance = require('./func/getDistance.js');
const measurePath = require('./func/measurePath.js');
const proximityTest = require('./func/proximityTest.js');

class GeoTools {
	settings = {
		//see constructor
	}

	constructor(settings) {
		this.settings.RADIUS = parseInt(settings?.radius)>0 ? parseInt(settings?.radius) : 6371;
	}
	setRadius(radius) { settings.RADIUS = radius; }


	getDistance(from, to, radius=null) {
		return getDistance(from, to, radius || this.settings.RADIUS)
	}

	measurePath(points) {
		return measurePath(points, this.settings.RADIUS)
	}

	proximityTest(basePoint, points, limit) {
		return proximityTest(basePoint, points, limit, this.settings.RADIUS)
	}
}

module.exports = GeoTools
