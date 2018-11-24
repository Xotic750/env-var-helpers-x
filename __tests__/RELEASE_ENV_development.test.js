process.env.RELEASE_ENV = 'development';
const envVarHelpers = require('src/index');

describe('rELEASE_ENV=development', () => {
  describe('isQA', () => {
    it('is false when RELEASE_ENV=development', () => {
      expect.assertions(1);
      expect(envVarHelpers.isQA).toBe(false);
    });
  });
  describe('isUAT', () => {
    it('is false when RELEASE_ENV=development', () => {
      expect.assertions(1);
      expect(envVarHelpers.isUAT).toBe(false);
    });
  });
  describe('isReleaseEnvDev', () => {
    it('is true when RELEASE_ENV=development', () => {
      expect.assertions(1);
      expect(envVarHelpers.isReleaseEnvDev).toBe(true);
    });
  });
  describe('isReleaseEnvProd', () => {
    it('is false when RELEASE_ENV=development', () => {
      expect.assertions(1);
      expect(envVarHelpers.isReleaseEnvProd).toBe(false);
    });
  });
  describe('releaseEnvShort', () => {
    it("is 'prod' when RELEASE_ENV=development", () => {
      expect.assertions(1);
      expect(envVarHelpers.releaseEnvShort).toBe('dev');
    });
  });
  describe('releaseEnv', () => {
    it("is 'development' when RELEASE_ENV=development", () => {
      expect.assertions(1);
      expect(envVarHelpers.releaseEnv).toBe('development');
    });
  });
});
