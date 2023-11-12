module.exports = {
	clearMocks: true,
	preset: 'ts-jest',
	testEnvironment: "node",
	moduleNameMapper: {
		'^@test/common$': ['<rootDir>/src/$1/index'],
		'^@test/common/(.*)$': ['<rootDir>/src/$1','<rootDir>/src/$1/index'],
	},
	roots: ['<rootDir>'],


	testMatch: ['<rootDir>/src/**/*.(spec|test).[jt]s?(x)'],
	testPathIgnorePatterns: ['/node_modules/'],
	setupFilesAfterEnv: ['jest-extended/all'],
}
