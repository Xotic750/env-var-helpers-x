process.env.RELEASE_ENV = 'qa';
const envVarHelpers = require('src/index');

describe('rELEASE_ENV=qa', () => {
  describe('isQA', () => {
    it('is true when RELEASE_ENV=qa', () => {
      expect.assertions(1);
      expect(envVarHelpers.isQA).toBe(true);
    });
  });
  describe('isUAT', () => {
    it('is false when RELEASE_ENV=qa', () => {
      expect.assertions(1);
      expect(envVarHelpers.isUAT).toBe(false);
    });
  });
  describe('isReleaseEnvDev', () => {
    it('is false when RELEASE_ENV=qa', () => {
      expect.assertions(1);
      expect(envVarHelpers.isReleaseEnvDev).toBe(false);
    });
  });
  describe('isReleaseEnvProd', () => {
    it('is false when RELEASE_ENV=qa', () => {
      expect.assertions(1);
      expect(envVarHelpers.isReleaseEnvProd).toBe(false);
    });
  });
  describe('releaseEnvShort', () => {
    it("is 'qa' when RELEASE_ENV=qa", () => {
      expect.assertions(1);
      expect(envVarHelpers.releaseEnvShort).toBe('qa');
    });
  });
  describe('releaseEnv', () => {
    it("is 'qa' when RELEASE_ENV=qa", () => {
      expect.assertions(1);
      expect(envVarHelpers.releaseEnv).toBe('qa');
    });
  });
  describe('isDevNonReleaseEnv', () => {
    it('is always false when RELEASE_ENV=qa', () => {
      expect.assertions(1);
      expect(envVarHelpers.isDevNonReleaseEnv).toBe(false);
    });
  });
});
