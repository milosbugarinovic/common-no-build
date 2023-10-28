module.exports = {
	clearMocks: true,
	preset: 'ts-jest',
	testEnvironment: "node",
	moduleNameMapper: {
		'^@test/common/(.*)$': ['<rootDir>/../common/$1.ts','<rootDir>/../common/$1/index.ts'],
		'^@test/node-common/(.*)$': ['<rootDir>/$1.ts','<rootDir>/$1/index.ts'],
	},
	roots: ['<rootDir>'],
	testPathIgnorePatterns: ['/node_modules/'],
}
