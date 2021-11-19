const tests = [
	'func_toRad',
	'func_getDistance',
	'func_measurePath',
	'func_proximityTest',
	'classes_getDistance',
	'classes_measurePath',
	'classes_proximityTest',
];

tests.forEach((code) => {
	const results = require(`./${code}.js`)
	const error = results.reduce((memo, test) => !test.result ? memo+1 : memo ,0)
	if(error)
	{
		console.log(`- ${code} FAIL`);
		console.log(results);
	}
	else
	{
		console.log(`- ${code} SUCCESS`);
	}
})