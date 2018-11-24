delete process.env.NODE_ENV;
process.env.mocha = true;
const envVarHelpers = require('src/index');

const propExists = function _propExists(prop) {
  test('exists and gets exported', () => {
    expect.assertions(1);
    expect(prop).toBeDefined();
  });
};

const propHasExpectedVal = function _propHasExpectedVal(expectedVal, envVar, msg) {
  test(`is set to ${expectedVal} ${msg ? ` ${msg}` : ''}`, () => {
    expect.assertions(1);
    expect(envVar).toBe(expectedVal);
  });
};

const propIsAliasOf = function _propIsAliasOf(aliasValue, propName, propValue) {
  test(`is alias of ${propName}`, () => {
    expect.assertions(1);
    expect(aliasValue).toBe(propValue);
  });
};

const valsExistAndAreExpectedVal = function _valsExistAndAreExpectedVal(valObjArr, msg, aliasOf, expectedVal = true) {
  valObjArr.forEach((valObj) => {
    describe(`${valObj.name}`, () => {
      propExists(valObj.value);
      propHasExpectedVal(expectedVal, valObj.value, msg || false);

      if (aliasOf) {
        const propName = Object.keys(aliasOf)[0];

        if (propName !== valObj.name) {
          propIsAliasOf(valObj.value, propName, aliasOf[propName]);
        }
      }
    });
  });
};

const valsExistAndAreTrue = function _valsExistAndAreTrue(valObjArr, msg, aliasOf) {
  valsExistAndAreExpectedVal(valObjArr, msg, aliasOf, true);
};

const valsExistAndAreFalse = function _valsExistAndAreFalse(valObjArr, msg, aliasOf) {
  valsExistAndAreExpectedVal(valObjArr, msg, aliasOf, false);
};

// Directly log the environment variables in verbose or silly mode.
const {LOG_LEVEL} = process.env;

if (LOG_LEVEL && (LOG_LEVEL === 'verbose' || LOG_LEVEL === 'silly')) {
  console.log('\n\n******* Environment variables checked/used by library props *******');
  console.log('process.env.LOG_LEVEL:', process.env.LOG_LEVEL);
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
  console.log('process.env.IE_COMPAT:', process.env.IE_COMPAT);
  console.log('process.env.TEST_MODE:', process.env.TEST_MODE);
  console.log('process.env.AVOID_WEB:', process.env.AVOID_WEB);
  console.log('process.env.LOADED_MOCHA_OPTS:', process.env.LOADED_MOCHA_OPTS);
  console.log('process.env.SECURITY_TEST:', process.env.SECURITY_TEST);
  console.log('process.env.TEST_SECURITY:', process.env.TEST_SECURITY);
  console.log('process.env.IS_LOCAL:', process.env.IS_LOCAL);
  console.log('*******************************************************************\n\n');
}

describe('isDevelopment (and aliases) :: ', () => {
  valsExistAndAreTrue(
    [{name: 'isDev', value: envVarHelpers.isDev}, {name: 'isDevelopment', value: envVarHelpers.isDevelopment}],
    null,
    {isDevelopment: envVarHelpers.isDevelopment},
  );
});

describe('isProduction (and aliases) :: ', () => {
  valsExistAndAreFalse(
    [{name: 'isProd', value: envVarHelpers.isProd}, {name: 'isProd', value: envVarHelpers.isProduction}],
    null,
    {isProduction: envVarHelpers.isProduction},
  );
});

describe('isTrace :: ', () => {
  valsExistAndAreFalse([{name: 'isTrace', value: envVarHelpers.isTrace}], '(since LOG_LEVEL value defaults to info)', {
    isTrace: envVarHelpers.isTrace,
  });
});

describe('isSilly :: ', () => {
  valsExistAndAreFalse([{name: 'isSilly', value: envVarHelpers.isSilly}], '(since LOG_LEVEL value defaults to info)', {
    isSilly: envVarHelpers.isSilly,
  });
});

describe('isVerbose :: ', () => {
  valsExistAndAreFalse([{name: 'isVerbose', value: envVarHelpers.isVerbose}], '(since LOG_LEVEL value defaults to info)', {
    isVerbose: envVarHelpers.isVerbose,
  });
});

describe('isDebug :: ', () => {
  valsExistAndAreFalse([{name: 'isDebug', value: envVarHelpers.isDebug}], '(since LOG_LEVEL value defaults to info)', {
    isDebug: envVarHelpers.isDebug,
  });
});

describe('isInfo :: ', () => {
  valsExistAndAreTrue([{name: 'isInfo', value: envVarHelpers.isInfo}], '(since LOG_LEVEL value defaults to info)', {
    isInfo: envVarHelpers.isInfo,
  });
});

describe('isWarn :: ', () => {
  valsExistAndAreTrue([{name: 'isWarn', value: envVarHelpers.isWarn}], '(since LOG_LEVEL value defaults to info)', {
    isWarn: envVarHelpers.isWarn,
  });
});

describe('isError :: ', () => {
  valsExistAndAreTrue([{name: 'isError', value: envVarHelpers.isError}], '(since LOG_LEVEL value defaults to info)', {
    isError: envVarHelpers.isError,
  });
});

describe('isWTF (and alias isWtf) :: ', () => {
  valsExistAndAreTrue(
    [{name: 'isWTF', value: envVarHelpers.isWTF}, {name: 'isWtf', value: envVarHelpers.isWtf}],
    '(since LOG_LEVEL value defaults to info)',
    {isWTF: envVarHelpers.isWTF},
  );
});

describe('isIECompat (and alias isIeCompat) :: ', () => {
  valsExistAndAreFalse(
    [{name: 'isIECompat', value: envVarHelpers.isIECompat}, {name: 'isIeCompat', value: envVarHelpers.isIeCompat}],
    null,
    {isIECompat: envVarHelpers.isIECompat},
  );
});

describe('prodOrSecurityTest (and aliases) :: ', () => {
  valsExistAndAreFalse([
    {name: 'prodOrSecurityTest', value: envVarHelpers.prodOrSecurityTest},
    {name: 'isProdOrSecurityTest', value: envVarHelpers.isProdOrSecurityTest},
  ]);
});

describe('isMocha & aliases (runByMocha, isMochaEnv) :: ', () => {
  valsExistAndAreTrue(
    [
      {name: 'isMochaEnv', value: envVarHelpers.isMochaEnv},
      {name: 'runByMocha', value: envVarHelpers.runByMocha},
      {name: 'isMocha', value: envVarHelpers.isMocha},
    ],
    '(since mocha was set to true)',
    {isMocha: envVarHelpers.isMocha},
  );
});

describe('releaseEnv tests :: ', () => {
  it('releaseEnv defaults to development', () => {
    expect.assertions(1);
    expect(envVarHelpers.releaseEnv).toBe('development');
  });
  it("releaseEnv has alias releaseEnvironment, with the same value ('development')", () => {
    expect.assertions(2);
    expect(envVarHelpers.releaseEnvironment).toBe('development');
    expect(envVarHelpers.releaseEnvironment).toBe(envVarHelpers.releaseEnv);
  });
  describe('isUAT (isReleaseEnvUAT) tests :: ', () => {
    valsExistAndAreFalse(
      [{name: 'isReleaseEnvUAT', value: envVarHelpers.isReleaseEnvUAT}, {name: 'isUAT', value: envVarHelpers.isUAT}],
      null,
      {isReleaseEnvUAT: envVarHelpers.isReleaseEnvUAT},
    );
  });
  describe('isQA (isReleaseEnvQA) tests :: ', () => {
    valsExistAndAreFalse(
      [{name: 'isReleaseEnvQA', value: envVarHelpers.isReleaseEnvQA}, {name: 'isQA', value: envVarHelpers.isQA}],
      null,
      {isReleaseEnvQA: envVarHelpers.isReleaseEnvQA},
    );
  });
  describe('releaseEnvShort tests :: ', () => {
    it("releaseEnvShort defaults to 'dev'", () => {
      expect.assertions(1);
      expect(envVarHelpers.releaseEnvShort).toBe('dev');
    });
    it('releaseEnvShort has alias releaseEnvAbbrev', () => {
      expect.assertions(2);
      expect(envVarHelpers.releaseEnvAbbrev).toBe('dev');
      expect(envVarHelpers.releaseEnvAbbrev).toBe(envVarHelpers.releaseEnvShort);
    });
  });
  describe('isDevNonReleaseEnv', () => {
    it("defaults to true (because NODE_ENV defaults to 'dev' & RELEASE_ENV defaults to NODE_ENV)", () => {
      expect.assertions(1);
      expect(envVarHelpers.isDevNonReleaseEnv).toBe(true);
    });
  });
});

describe('isAvoidWeb tests :: ', () => {
  valsExistAndAreFalse(
    [{name: 'isAvoidWeb', value: envVarHelpers.isAvoidWeb}, {name: 'avoidWeb', value: envVarHelpers.avoidWeb}],
    null,
    {isAvoidWeb: envVarHelpers.isAvoidWeb},
  );
});

describe('isLocal test :: ', () => {
  valsExistAndAreFalse([{name: 'isLocal', value: envVarHelpers.isLocal}], null, {isLocal: envVarHelpers.isLocal});
});

describe('nodeEnv', () => {
  propExists(envVarHelpers.nodeEnv);
  propHasExpectedVal('development', envVarHelpers.nodeEnv, '(since NODE_ENV defaults to "dev")');
});

describe('logLevel', () => {
  propExists(envVarHelpers.logLevel);
  propHasExpectedVal('info', envVarHelpers.logLevel, '(since LOG_LEVEL defaults to "info")');
});
