module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
      "/node_modules/(?!@babel/runtime/helpers/esm/.*)"
    ],
  };