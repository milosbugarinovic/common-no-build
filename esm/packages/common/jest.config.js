export default {
	clearMocks: true,
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: "node",
	moduleNameMapper: {
		'^#common$': ['<rootDir>/src/$1/index.ts'],
		'^#common/(.*)$': ['<rootDir>/src/$1.ts','<rootDir>/src/$1/index.ts'],
	},
	roots: ['<rootDir>'],
	transform: {},
	testPathIgnorePatterns: ['/node_modules/'],
	extensionsToTreatAsEsm: ['.ts'],

	testMatch: ['<rootDir>/src/**/*.(spec|test).[jt]s?(x)'],
	moduleFileExtensions: ['js', 'ts'],
	setupFilesAfterEnv: ['jest-extended/all'],
}
