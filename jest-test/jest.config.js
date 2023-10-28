module.exports = {
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: "node",
    moduleNameMapper: {
    	'^@mb/jest-test/(.*)$': '<rootDir>/$1.ts',
    },
    roots: ['<rootDir>'],
    testPathIgnorePatterns: ['/node_modules/'],
}
