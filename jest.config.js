/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$']
}
