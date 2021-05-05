import type { Config } from "@jest/types";
import baseConfig from "./jest.config";

const config: Config.InitialOptions = {
  ...baseConfig,
  testMatch: ["<rootDir>/tests/**/*integration.ts"],
  testPathIgnorePatterns: baseConfig.testPathIgnorePatterns?.filter(
    it => it !== "<rootDir>/tests/.*integration.*",
  ),
};

export default config;
