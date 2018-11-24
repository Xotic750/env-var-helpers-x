// Store original process.argv
const oldProcArgs = {...process.argv};

process.env.SECURITY_TEST = true;
const envVarHelpers = require('src/index');

describe('sECURITY_TEST=true', () => {
  describe('prodOrSecurityTest', () => {
    it('is true if SECURITY_TEST equals true (when NODE_ENV is undefined', () => {
      expect.assertions(1);
      expect(envVarHelpers.prodOrSecurityTest).toBe(true);
    });
  });
});

// Restore original process.argv
process.argv = {...oldProcArgs};
