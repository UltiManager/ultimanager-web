module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "<rootDir>/src/setupTests.ts"
  ]
};
