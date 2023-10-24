module.exports = {
	collectCoverage: false,
	collectCoverageFrom: ['src/**/*.ts', '!src/index.ts', '!src/**/*.{contract,d}.ts'],
	coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/', '/__mocks__/', '/__snapshots__/'],
	maxConcurrency: 1,

	moduleFileExtensions: ['js', 'ts'],
	setupFilesAfterEnv: ['jest-extended/all'],
	transform: {},
	preset: 'ts-jest/presets/default-esm',
	moduleNameMapper: {
		'^#common$': '<rootDir>/src/index.ts',
		'^#common\\/(.*)': '<rootDir>/src/$1.ts',
	},
	roots: ['<rootDir>/src'],
	extensionsToTreatAsEsm: ['.ts'],
	testPathIgnorePatterns: ['/node_modules/'],
	// setupFiles: ['<rootDir>/index-test-setup.ts'],
}
