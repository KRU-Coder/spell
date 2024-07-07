export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '^.+\\.svg$': 'jest-transformer-svg',
    },

    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
