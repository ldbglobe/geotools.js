const { proximityTest } = require('../src/func');

const points = [
	[0,10],
	[0,45],
	[0,90]
]

const tests = [
	{ name: 'case1', result: proximityTest([0,0],points,10) == 0 },
	{ name: 'case2', result: proximityTest([0,0],points,1200) == 1 },
	{ name: 'case3', result: proximityTest([0,0],points,6000) == 2 },
	{ name: 'case4', result: proximityTest([0,0],points,11000) == 3 },
]

module.exports = tests;
