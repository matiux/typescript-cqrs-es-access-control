module.exports = {
    moduleFileExtensions: ["js", "json", "ts"],
    moduleDirectories: ["node_modules", 'src'],
    moduleNameMapper: require("jest-module-name-mapper")(),
    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    rootDir: ".",
    testRegex: ".spec.ts$",
    coverageDirectory: "./coverage",
    testEnvironment: "node"
}