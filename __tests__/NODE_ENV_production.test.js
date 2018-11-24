// Store original process.argv
const oldProcArgs = {...process.argv};

process.env.NODE_ENV = 'production';
const envVarHelpers = require('src/index');

describe('when NODE_ENV=production', () => {
  describe('isDev', () => {
    it('is false when NODE_ENV equals production', () => {
      expect.assertions(1);
      expect(envVarHelpers.isDev).toBe(false);
    });
  });

  describe('isProd', () => {
    it('is true when NODE_ENV equals production', () => {
      expect.assertions(1);
      expect(envVarHelpers.isProd).toBe(true);
    });
  });

  describe('prodOrSecurityTest', () => {
    it('is true if NODE_ENV equals production', () => {
      expect.assertions(1);
      expect(envVarHelpers.prodOrSecurityTest).toBe(true);
    });
  });
});

// Restore original process.argv
process.argv = {...oldProcArgs};
