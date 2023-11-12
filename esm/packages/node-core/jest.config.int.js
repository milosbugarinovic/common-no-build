import  sharedConfig from './jest.config.js'

export default {
	...sharedConfig,
	testMatch: ['<rootDir>/src/**/__tests__/*.(spec|test).[jt]s?(x)'],
}
