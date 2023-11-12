export default {
	clearMocks: true,
	preset: 'ts-jest',
	testEnvironment: "node",
	moduleNameMapper: {
		'^#common$': ['<rootDir>/../common/src/$1/index.ts'],
		'^#common/(.*)$': ['<rootDir>/../common/src/$1.ts','<rootDir>/../common/src/$1/index.ts'],
		'^#$': ['<rootDir>/src/$1/index.ts'],
		'^#/(.*)$': ['<rootDir>/src/$1.ts','<rootDir>/src/$1/index.ts'],
	},
	roots: ['<rootDir>'],
	testPathIgnorePatterns: ['/node_modules/', '/__tests__/'],

	testMatch: ['<rootDir>/src/**/*.(spec|test).[jt]s?(x)'],
	moduleFileExtensions: ['js', 'ts'],
	setupFilesAfterEnv: ['jest-extended/all'],
}
