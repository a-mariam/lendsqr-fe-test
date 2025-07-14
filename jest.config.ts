const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  // transform: {
  //     "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  // },
  transformIgnorePatterns: [
    "/node_modules/(?!react-quill-new)",
  ],
  moduleNameMapper: {
    "~src/(.*)": "<rootDir>/src/$1",
    // "^react-modal$": "<rootDir>/node_modules/react-modal",
    // "^@/(.*)$": "<rootDir>/src/$1",
    // "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    // "^react-quill-new$": "<rootDir>/__mocks__/react-quill-new.js",
  },

};


// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
