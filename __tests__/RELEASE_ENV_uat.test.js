process.env.RELEASE_ENV = 'uat';
const envVarHelpers = require('src/index');

describe('rELEASE_ENV=uat', () => {
  describe('isQA', () => {
    it('is false when RELEASE_ENV=uat', () => {
      expect.assertions(1);
      expect(envVarHelpers.isQA).toBe(false);
    });
  });
  describe('isUAT', () => {
    it('is true when RELEASE_ENV=uat', () => {
      expect.assertions(1);
      expect(envVarHelpers.isUAT).toBe(true);
    });
  });
  describe('isReleaseEnvDev', () => {
    it('is false when RELEASE_ENV=uat', () => {
      expect.assertions(1);
      expect(envVarHelpers.isReleaseEnvDev).toBe(false);
    });
  });
  describe('isReleaseEnvProd', () => {
    it('is false when RELEASE_ENV=uat', () => {
      expect.assertions(1);
      expect(envVarHelpers.isReleaseEnvProd).toBe(false);
    });
  });
  describe('releaseEnvShort', () => {
    it("is 'uat' when RELEASE_ENV=uat", () => {
      expect.assertions(1);
      expect(envVarHelpers.releaseEnvShort).toBe('uat');
    });
  });
  describe('releaseEnv', () => {
    it("is 'uat' when RELEASE_ENV=uat", () => {
      expect.assertions(1);
      expect(envVarHelpers.releaseEnv).toBe('uat');
    });
  });
  describe('isDevNonReleaseEnv', () => {
    it('is always false when RELEASE_ENV=uat', () => {
      expect.assertions(1);
      expect(envVarHelpers.isDevNonReleaseEnv).toBe(false);
    });
  });
});
