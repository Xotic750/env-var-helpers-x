delete process.env.LOG_LEVEL;
const envVarHelpers = require('src/index');

describe('lOG_LEVEL=verbose', () => {
  describe('isSilly', () => {
    it('exists', () => {
      expect.assertions(1);
      expect(envVarHelpers.isSilly).toBeDefined();
    });
    it('is false at default LOG_LEVEL (if LOG_LEVEL not explicitly set)', () => {
      expect.assertions(1);
      expect(envVarHelpers.isSilly).toBe(false);
    });
  });
  describe('isVerbose', () => {
    it('exists', () => {
      expect.assertions(1);
      expect(envVarHelpers.isVerbose).toBeDefined();
    });
    it('is false at default LOG_LEVEL (if LOG_LEVEL not explicitly set)', () => {
      expect.assertions(1);
      expect(envVarHelpers.isVerbose).toBe(false);
    });
  });
  describe('isDebug', () => {
    it('exists', () => {
      expect.assertions(1);
      expect(envVarHelpers.isDebug).toBeDefined();
    });
    it('is false at default LOG_LEVEL (if LOG_LEVEL not explicitly set)', () => {
      expect.assertions(1);
      expect(envVarHelpers.isDebug).toBe(false);
    });
  });
  describe('isInfo', () => {
    it('exists', () => {
      expect.assertions(1);
      expect(envVarHelpers.isInfo).toBeDefined();
    });
    it('is true at default LOG_LEVEL (if LOG_LEVEL not explicitly set)', () => {
      expect.assertions(1);
      expect(envVarHelpers.isInfo).toBe(true);
    });
  });
  describe('isWarn', () => {
    it('exists', () => {
      expect.assertions(1);
      expect(envVarHelpers.isInfo).toBeDefined();
    });
    it('is true at default LOG_LEVEL (if LOG_LEVEL not explicitly set)', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWarn).toBe(true);
    });
  });
  describe('isError', () => {
    it('exists', () => {
      expect.assertions(1);
      expect(envVarHelpers.isError).toBeDefined();
    });
    it('is true at default LOG_LEVEL (if LOG_LEVEL not explicitly set)', () => {
      expect.assertions(1);
      expect(envVarHelpers.isError).toBe(true);
    });
  });
  describe('isWTF', () => {
    it('exists', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWtf).toBeDefined();
    });
    it('is true at default LOG_LEVEL (if LOG_LEVEL not explicitly set)', () => {
      expect.assertions(1);
      expect(envVarHelpers.isWTF).toBe(true);
    });
  });
});
