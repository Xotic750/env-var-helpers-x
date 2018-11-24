process.env.LOG_LEVEL = 'verbose';
const envVarHelpers = require('src/index');

describe('lOG_LEVEL=verbose', () => {
  describe('isSilly', () => {
    it('is false when process.env.LOG_LEVEL=verbose', () => {
      expect.assertions(1);
      expect(envVarHelpers.isSilly).toBe(false);
    });
  });
  describe('isVerbose', () => {
    it('is true when process.env.LOG_LEVEL=verbose', () => {
      expect.assertions(1);
      expect(envVarHelpers.isVerbose).toBe(true);
    });
  });
  describe('isInfo', () => {
    it('is true when process.env.LOG_LEVEL=verbose', () => {
      expect.assertions(1);
      expect(envVarHelpers.isInfo).toBe(true);
    });
  });
  describe('isWarn', () => {
    it('is true when process.env.LOG_LEVEL=verbose', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWarn).toBe(true);
    });
  });
  describe('isError', () => {
    it('is true when process.env.LOG_LEVEL=verbose', () => {
      expect.assertions(1);
      expect(envVarHelpers.isError).toBe(true);
    });
  });
  describe('isWTF', () => {
    it('is true when process.env.LOG_LEVEL=verbose', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWtf).toBe(true);
    });
  });
});
