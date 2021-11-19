const getDistance = require('./func/getDistance.js');
const mesurePath = require('./func/mesurePath.js');

class GeoTools {

	settings = {
		//see constructor
	}

	constructor({...radius}) {
		settings.radius = parseInt(radius)>0 ? parseInt(radius) : 6371;
	}

	getDistance(from, to, RADIUS=6371) { getDistance(from, to, RADIUS) }
	mesurePath(points, RADIUS=6371) { mesurePath(points, RADIUS) }
	getDistance(from, to, RADIUS=6371) { getDistance(from, to, RADIUS) }

}

module.exports = GeoTools;
