module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/*.styles.js',
        '!**/*.models.js',
        '!**/index.js',
        '!**/coverage/**',
        '!**/localization/**',
        '!**/*.mocks.js',
    ],
    setupFilesAfterEnv: ['./enzyme.config.js'],
};
