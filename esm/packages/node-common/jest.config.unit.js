// eslint-disable-next-line @typescript-eslint/no-var-requires
// const sharedConfig = require('./jest.config')
import  sharedConfig from './jest.config.js'

export default {
	...sharedConfig,
	testPathIgnorePatterns: [...sharedConfig.testPathIgnorePatterns, '/__tests__/'],
}
