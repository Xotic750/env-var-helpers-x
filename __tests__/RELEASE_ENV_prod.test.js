process.env.RELEASE_ENV = 'prod';
const envVarHelpers = require('src/index');

describe('rELEASE_ENV=production', () => {
  describe('isQA', () => {
    it('is false when RELEASE_ENV=prod', () => {
      expect.assertions(1);
      expect(envVarHelpers.isQA).toBe(false);
    });
  });
  describe('isUAT', () => {
    it('is false when RELEASE_ENV=prod', () => {
      expect.assertions(1);
      expect(envVarHelpers.isUAT).toBe(false);
    });
  });
  describe('isReleaseEnvDev', () => {
    it('is false when RELEASE_ENV=prod', () => {
      expect.assertions(1);
      expect(envVarHelpers.isReleaseEnvDev).toBe(false);
    });
  });
  describe('isReleaseEnvProd', () => {
    it('is true when RELEASE_ENV=prod', () => {
      expect.assertions(1);
      expect(envVarHelpers.isReleaseEnvProd).toBe(true);
    });
  });
  describe('releaseEnvShort', () => {
    it("is 'prod' when RELEASE_ENV=prod", () => {
      expect.assertions(1);
      expect(envVarHelpers.releaseEnvShort).toBe('prod');
    });
  });
  describe('releaseEnv', () => {
    it("is 'production' when RELEASE_ENV=prod", () => {
      expect.assertions(1);
      expect(envVarHelpers.releaseEnv).toBe('prod');
    });
  });
  describe('isDevNonReleaseEnv', () => {
    it('is always false when RELEASE_ENV=prod', () => {
      expect.assertions(1);
      expect(envVarHelpers.isDevNonReleaseEnv).toBe(false);
    });
  });
});
