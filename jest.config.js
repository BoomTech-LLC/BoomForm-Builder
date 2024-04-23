module.exports = {
    moduleNameMapper: {
        "^@/(.*)": "<rootDir>/src/$1" // Map imports starting with "@" to "src" dir
    },
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest" // Use Babel to transform JS/JSX files
    },
    testEnvironment: "node", // Assumes tests run in a Node.js environment (adjust if needed)
}