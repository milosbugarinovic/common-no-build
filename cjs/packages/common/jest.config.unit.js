// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require('./jest.config')

module.exports = {
	...sharedConfig,
	testPathIgnorePatterns: [...sharedConfig.testPathIgnorePatterns, '/__tests__/'],
}
