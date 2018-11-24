process.env.LOG_LEVEL = 'wtf';
const envVarHelpers = require('src/index');

describe('lOG_LEVEL=wtf', () => {
  describe('isTrace', () => {
    it('is false when process.env.LOG_LEVEL=wtf', () => {
      expect.assertions(1);
      expect(envVarHelpers.isTrace).toBe(false);
    });
  });
  describe('isSilly', () => {
    it('is false when process.env.LOG_LEVEL=wtf', () => {
      expect.assertions(1);
      expect(envVarHelpers.isSilly).toBe(false);
    });
  });
  describe('isVerbose', () => {
    it('is false when process.env.LOG_LEVEL=wtf', () => {
      expect.assertions(1);
      expect(envVarHelpers.isVerbose).toBe(false);
    });
  });
  describe('isDebug', () => {
    it('is false when process.env.LOG_LEVEL=wtf', () => {
      expect.assertions(1);
      expect(envVarHelpers.isDebug).toBe(false);
    });
  });
  describe('isInfo', () => {
    it('is false when process.env.LOG_LEVEL=wtf', () => {
      expect.assertions(1);
      expect(envVarHelpers.isInfo).toBe(false);
    });
  });
  describe('isWarn', () => {
    it('is false when process.env.LOG_LEVEL=wtf', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWarn).toBe(false);
    });
  });
  describe('isError', () => {
    it('is false when process.env.LOG_LEVEL=wtf', () => {
      expect.assertions(1);
      expect(envVarHelpers.isError).toBe(false);
    });
  });
  describe('isWTF', () => {
    it('is true when process.env.LOG_LEVEL=wtf', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWtf).toBe(true);
    });
  });
});
