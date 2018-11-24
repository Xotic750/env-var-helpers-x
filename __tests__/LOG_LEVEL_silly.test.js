process.env.LOG_LEVEL = 'silly';
const envVarHelpers = require('src/index');

describe('lOG_LEVEL=silly', () => {
  describe('isTrace', () => {
    it('is true when process.env.LOG_LEVEL=silly', () => {
      expect.assertions(1);
      expect(envVarHelpers.isTrace).toBe(false);
    });
  });
  describe('isSilly', () => {
    it('is true when process.env.LOG_LEVEL=silly', () => {
      expect.assertions(1);
      expect(envVarHelpers.isSilly).toBe(true);
    });
  });
  describe('isVerbose', () => {
    it('is true when process.env.LOG_LEVEL=silly', () => {
      expect.assertions(1);
      expect(envVarHelpers.isVerbose).toBe(true);
    });
  });
  describe('isDebug', () => {
    it('is true when process.env.LOG_LEVEL=silly', () => {
      expect.assertions(1);
      expect(envVarHelpers.isDebug).toBe(true);
    });
  });
  describe('isInfo', () => {
    it('is true when process.env.LOG_LEVEL=silly', () => {
      expect.assertions(1);
      expect(envVarHelpers.isInfo).toBe(true);
    });
  });
  describe('isError', () => {
    it('is true when process.env.LOG_LEVEL=silly', () => {
      expect.assertions(1);
      expect(envVarHelpers.isError).toBe(true);
    });
  });
  describe('isWtf', () => {
    it('is true when process.env.LOG_LEVEL=silly', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWtf).toBe(true);
    });
  });
});
