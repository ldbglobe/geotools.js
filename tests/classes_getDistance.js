const geotools = new (require('../src'))();

const expected_earth_measure = 10008;
const expected_custom_radius_measure = 157;

const tests = [
	{ name: 'earth_measure', result: Math.round(geotools.getDistance([0,0],[0,90])) == expected_earth_measure },
	{ name: 'custom_radius_measure', result: Math.round(geotools.getDistance([0,0],[0,90],100)) == expected_custom_radius_measure },
	{ name: 'orientation_constistency', result: geotools.getDistance([0,0],[0,90]) == geotools.getDistance([0,0],[90,0]) },
]

module.exports = tests;
