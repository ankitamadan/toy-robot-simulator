module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  roots: ['.'],
  modulePaths: ['.'],
  modulePathIgnorePatterns: ['./dist/'],
};
