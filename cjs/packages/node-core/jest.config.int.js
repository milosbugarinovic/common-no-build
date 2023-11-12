// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require('./jest.config')

module.exports = {
	...sharedConfig,
	testMatch: ['<rootDir>/src/**/__tests__/*.(spec|test).[jt]s?(x)'],
}
