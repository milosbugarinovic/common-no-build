module.exports = {
	clearMocks: true,
	preset: 'ts-jest',
	testEnvironment: "node",
	moduleNameMapper: {
		'^#common$': ['<rootDir>/../common/src/$1/index'],
		'^#common/(.*)$': ['<rootDir>/../common/src/$1','<rootDir>/../common/src/$1/index'],
		'^#node-common$': ['<rootDir>/src/$1/index'],
		'^#node-common/(.*)$': ['<rootDir>/src/$1','<rootDir>/src/$1/index'],
	},
	roots: ['<rootDir>'],


	testMatch: ['<rootDir>/src/**/*.(spec|test).[jt]s?(x)'],
	testPathIgnorePatterns: ['/node_modules/'],
	setupFilesAfterEnv: ['jest-extended/all'],
}
