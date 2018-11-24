process.env.LOG_LEVEL = 'error';
const envVarHelpers = require('src/index');

describe('lOG_LEVEL=error', () => {
  describe('isSilly', () => {
    it('is false when process.env.LOG_LEVEL=error', () => {
      expect.assertions(1);
      expect(envVarHelpers.isSilly).toBe(false);
    });
  });
  describe('isVerbose', () => {
    it('is false when process.env.LOG_LEVEL=error', () => {
      expect.assertions(1);
      expect(envVarHelpers.isVerbose).toBe(false);
    });
  });
  describe('isInfo', () => {
    it('is false when process.env.LOG_LEVEL=error', () => {
      expect.assertions(1);
      expect(envVarHelpers.isInfo).toBe(false);
    });
  });
  describe('isWarn', () => {
    it('is false when process.env.LOG_LEVEL=error', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWarn).toBe(false);
    });
  });
  describe('isError', () => {
    it('is true when process.env.LOG_LEVEL=error', () => {
      expect.assertions(1);
      expect(envVarHelpers.isError).toBe(true);
    });
  });
  describe('isWTF', () => {
    it('is true when process.env.LOG_LEVEL=error', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWtf).toBe(true);
    });
  });
});
