process.env.LOG_LEVEL = 'trace';
const envVarHelpers = require('src/index');

describe('lOG_LEVEL=trace', () => {
  describe('isTrace', () => {
    it('is true when process.env.LOG_LEVEL=trace', () => {
      expect.assertions(1);
      expect(envVarHelpers.isTrace).toBe(true);
    });
  });
  describe('isSilly', () => {
    it('is true when process.env.LOG_LEVEL=trace', () => {
      expect.assertions(1);
      expect(envVarHelpers.isSilly).toBe(true);
    });
  });
  describe('isVerbose', () => {
    it('is true when process.env.LOG_LEVEL=trace', () => {
      expect.assertions(1);
      expect(envVarHelpers.isVerbose).toBe(true);
    });
  });
  describe('isInfo', () => {
    it('is true when process.env.LOG_LEVEL=trace', () => {
      expect.assertions(1);
      expect(envVarHelpers.isInfo).toBe(true);
    });
  });
  describe('isWarn', () => {
    it('is true when process.env.LOG_LEVEL=trace', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWarn).toBe(true);
    });
  });
  describe('isError', () => {
    it('is true when process.env.LOG_LEVEL=trace', () => {
      expect.assertions(1);
      expect(envVarHelpers.isError).toBe(true);
    });
  });
  describe('isWTF', () => {
    it('is true when process.env.LOG_LEVEL=trace', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWtf).toBe(true);
    });
  });
});
