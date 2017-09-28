const { jest: jestConfig } = require('tradeshift-scripts/config');
module.exports = Object.assign(jestConfig, {
	setupTestFrameworkScriptFile: './src/setupTests.js',
	coverageThreshold: null
});
