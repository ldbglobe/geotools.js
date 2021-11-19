const geotools = new (require('../src'))();

const expected_measure = 10008;

const points = [
	[0,0],
	[0,45],
	[0,90]
]

const tests = [
	{ name: 'measure', result: Math.round(geotools.measurePath(points)) == expected_measure },
]

module.exports = tests;