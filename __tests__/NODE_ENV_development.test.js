// Store original process.argv
const oldProcArgs = {...process.argv};

process.env.NODE_ENV = 'development';
const envVarHelpers = require('src/index');

describe('nODE_ENV=development', () => {
  describe('isDev', () => {
    it('is true when NODE_ENV equals development', () => {
      expect.assertions(1);
      expect(envVarHelpers.isDev).toBe(true);
    });
  });

  describe('isProd', () => {
    it('is false when NODE_ENV equals development', () => {
      expect.assertions(1);
      expect(envVarHelpers.isProd).toBe(false);
    });
  });

  describe('prodOrSecurityTest', () => {
    it('is false if NODE_ENV equals development and SECURTY_TEST not set', () => {
      expect.assertions(1);
      expect(envVarHelpers.prodOrSecurityTest).toBe(false);
    });
  });

  describe('isDevNonReleaseEnv', () => {
    it('is true when NODE_ENV=development & RELEASE_ENV is not set', () => {
      expect.assertions(1);
      expect(envVarHelpers.isDevNonReleaseEnv).toBe(true);
    });
  });
});

// Restore original process.argv
process.argv = {...oldProcArgs};
