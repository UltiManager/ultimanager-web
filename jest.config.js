module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  globals: {
    CONFIG: {
      ULTIMANAGER_API_ROOT: "http://localhost"
    }
  },
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "<rootDir>/src/setupTests.ts"
  ]
};
