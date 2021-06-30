import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: false,
  testEnvironment: "node",
  preset: "ts-jest",
  testMatch: ["<rootDir>/tests/**/*.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/tests/helpers",
    "<rootDir>/tests/artifacts",
    "<rootDir>/tests/.*integration.*",
  ],
  rootDir: "./",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tests/tsconfig.json",
    },
  },
  collectCoverage: false,
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!<rootDir>/src/**/*.d.ts"],
  modulePathIgnorePatterns: [
    "<rootDir>/experiments",
    "<rootDir>/lib",
    "<rootDir>/package",
    "<rootDir>/tests/artifacts",
  ],
  testTimeout: 10000,
};

export default config;
