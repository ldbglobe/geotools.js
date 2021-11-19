const toRad = require('../src/func/toRad.js');

const tests = [
	{ name: 'case1', result: toRad(0) == 0 },
	{ name: 'case2', result: toRad(45) == 0.7853981633974483 },
	{ name: 'case3', result: toRad(90) == 1.5707963267948966 },
	{ name: 'case4', result: toRad(135) == 2.356194490192345 },
	{ name: 'case5', result: toRad(180) == 3.141592653589793 },
	{ name: 'case6', result: toRad(225) == 3.9269908169872414 },
	{ name: 'case7', result: toRad(270) == 4.71238898038469 },
	{ name: 'case8', result: toRad(315) == 5.497787143782138 },
	{ name: 'case9', result: toRad(360) == 6.283185307179586 },
]

module.exports = tests;
