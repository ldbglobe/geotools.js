const geotools = new (require('../src'))();

const points = [
	[0,10],
	[0,45],
	[0,90]
]

const tests = [
	{ name: 'case1', result: geotools.proximityTest([0,0],points,10) == 0 },
	{ name: 'case2', result: geotools.proximityTest([0,0],points,1200) == 1 },
	{ name: 'case3', result: geotools.proximityTest([0,0],points,6000) == 2 },
	{ name: 'case4', result: geotools.proximityTest([0,0],points,11000) == 3 },
]

module.exports = tests;
