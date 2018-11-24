import isNil from 'lodash/isNil';

export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';
export const TRACE = 'trace';
export const SILLY = 'silly';
export const DEBUG = 'debug';
export const VERBOSE = 'verbose';
export const INFO = 'info';
export const WARN = 'warn';
export const ERROR = 'error';
export const WTF = 'wtf';

const EMPTY_SPACE = '';
const DEV = 'dev';
const PROD = 'prod';
const QA = 'qa';
const UAT = 'uat';
const TRUE = 'true';
const FALSE = 'false';
const NODE_ENV_PROP = 'NODE_ENV';
const LOG_LEVEL_PROP = 'LOG_LEVEL';
const RELEASE_ENV_PROP = 'RELEASE_ENV';
const TEST_MODE_PROP = 'TEST_MODE';
const IE_COMPAT_PROP = 'IE_COMPAT';
const AVOID_WEB_PROP = 'AVOID_WEB';
const WAS_RUN_THRU_MOCHA_PROP = 'WAS_RUN_THRU_MOCHA';
const LOADED_MOCHA_OPTS_PROP = 'LOADED_MOCHA_OPTS';
const MOCHA_PROP = 'mocha';
const MOCHA_PROP_UC = MOCHA_PROP.toUpperCase();
const TEST_SECURITY_PROP = 'TEST_SECURITY';
const SECURITY_TEST_PROP = 'SECURITY_TEST';
const IS_LOCAL_PROP = 'IS_LOCAL';
const SKIP_BASIC_AUTH_PROP = 'SKIP_BASIC_AUTH';

const ENV_PROPS_LIST = [
  NODE_ENV_PROP,
  LOG_LEVEL_PROP,
  RELEASE_ENV_PROP,
  TEST_MODE_PROP,
  IE_COMPAT_PROP,
  AVOID_WEB_PROP,
  LOADED_MOCHA_OPTS_PROP,
  MOCHA_PROP,
  TEST_SECURITY_PROP,
  SECURITY_TEST_PROP,
  IS_LOCAL_PROP,
  SKIP_BASIC_AUTH_PROP,
];

const envPropsListIteratee = function _envPropsListIteratee(raw, prop) {
  return {...raw, [prop.toUpperCase()]: process.env[prop]};
};

const RAW = ENV_PROPS_LIST.reduce(envPropsListIteratee, {});

export const NodeEnvFull = Object.freeze([DEVELOPMENT, PRODUCTION]);
export const NodeEnvShort = Object.freeze([DEV, PROD]);
export const NodeEnv = Object.freeze([...NodeEnvFull, ...NodeEnvShort]);
export const QAEnv = Object.freeze([QA, UAT]);
export const ReleaseEnv = Object.freeze([...NodeEnv, ...QAEnv]);
export const ReleaseEnvShort = Object.freeze([...NodeEnvShort, ...QAEnv]);
export const LogLevel = Object.freeze([TRACE, SILLY, DEBUG, VERBOSE, INFO, WARN, ERROR, WTF]);

const hasVal = function _hasVal(val) {
  return !isNil(val) && val !== EMPTY_SPACE;
};

const strToBool = function _strToBool(rawVal) {
  const val = rawVal.toLowerCase();

  return val === FALSE || val === FALSE.charAt(0) ? false : val === TRUE || val === TRUE.charAt(0);
};

const toBool = function _toBool(rawVal, def = false) {
  // If value not set, return false, or default if given
  if (!hasVal(rawVal)) {
    return hasVal(def) ? def : false;
  }

  // If val is a string, convert from boolean string (e.g. "true") to boolean
  if (typeof rawVal === 'string') {
    return strToBool(rawVal);
  }

  // If val is boolean, return it as-is
  return rawVal;
};

const stringValue = function _stringValue(prop, def = false) {
  if (prop in RAW) {
    const value = RAW[prop];

    return hasVal(value) ? String(value).toLowerCase() : def;
  }

  return def;
};

const boolValue = function _boolValue(prop, def = false) {
  if (prop in RAW) {
    const value = RAW[prop];

    return hasVal(value) ? toBool(value) : def;
  }

  return def;
};

const NODE_ENV = stringValue(NODE_ENV_PROP, DEVELOPMENT);

/**
 * Node environment (NODE_ENV):
 *     development | production
 * Converts short-form to long-form, contains default value if NODE_ENV not set
 */
export const nodeEnv = (function _nodeEnv() {
  if (NODE_ENV === DEV) {
    return DEVELOPMENT;
  }

  if (NODE_ENV === PROD) {
    return PRODUCTION;
  }

  return NODE_ENV;
})();

/**
 * Namespace for direct access to environment variables:
 *     NODE_ENV
 *     LOG_LEVEL
 *     IE_COMPAT
 *     TEST_MODE
 *     AVOID_WEB
 *     RELEASE_ENV
 *     IS_LOCAL
 *     SKIP_BASIC_AUTH
 *     WAS_RUN_THRU_MOCHA
 */
export const env = Object.freeze({
  [NODE_ENV_PROP]: nodeEnv,
  [RELEASE_ENV_PROP]: stringValue(RELEASE_ENV_PROP, NODE_ENV),
  [LOG_LEVEL_PROP]: stringValue(LOG_LEVEL_PROP, INFO),
  [TEST_MODE_PROP]: boolValue(TEST_MODE_PROP),
  [IE_COMPAT_PROP]: boolValue(IE_COMPAT_PROP),
  [AVOID_WEB_PROP]: boolValue(AVOID_WEB_PROP),
  [SKIP_BASIC_AUTH_PROP]: boolValue(SKIP_BASIC_AUTH_PROP),
  [IS_LOCAL_PROP]: IS_LOCAL_PROP in RAW && hasVal(RAW[IS_LOCAL_PROP]) ? toBool(RAW[MOCHA_PROP_UC]) : false,
  [WAS_RUN_THRU_MOCHA_PROP]:
    (LOADED_MOCHA_OPTS_PROP in RAW && hasVal(RAW[LOADED_MOCHA_OPTS_PROP])) || (RAW[MOCHA_PROP_UC] && toBool(RAW[MOCHA_PROP_UC])),
});

/**
 * Directly output log level (LOG_LEVEL env var):
 *     trace | silly | debug | verbose | info | warn | error | wtf
 * Resolves default value
 */
export const logLevel = env[LOG_LEVEL_PROP];

/**
 * true if current process was run with NODE_ENV=development or NODE_ENV=dev
 */
export const isDevelopment = nodeEnv === DEVELOPMENT;
export {isDevelopment as isDev};

/**
 * true if current process was run with NODE_ENV=production or NODE_ENV=prod
 */
export const isProduction = nodeEnv === PRODUCTION;
export {isProduction as isProd};

/**
 * true if NODE_ENV=production, TEST_SECURITY=true, or SECURITY_TEST=true
 */
export const prodOrSecurityTest =
  isProduction ||
  (TEST_SECURITY_PROP in RAW && hasVal(RAW[TEST_SECURITY_PROP]) && toBool(RAW[TEST_SECURITY_PROP])) ||
  (SECURITY_TEST_PROP in RAW && hasVal(RAW[SECURITY_TEST_PROP]) && toBool(RAW[SECURITY_TEST_PROP]));

export {prodOrSecurityTest as isProdOrSecurityTest};

/**
 * true if current process was run with LOG_LEVEL=trace
 */
export const isTrace = logLevel === TRACE;

/**
 * true if current process was run with LOG_LEVEL=silly
 */
export const isSilly = isTrace || logLevel === SILLY;

/**
 * true if current process was run with LOG_LEVEL=verbose
 */
export const isVerbose = isSilly || logLevel === VERBOSE;

/**
 * true if current process was run with LOG_LEVEL=debug
 */
export const isDebug = isVerbose || logLevel === DEBUG;

/**
 * true if current process was run with LOG_LEVEL=info
 */
export const isInfo = isDebug || logLevel === INFO;

/**
 * true if current process was run with LOG_LEVEL=warn
 */
export const isWarn = isInfo || logLevel === WARN;

/**
 * true if current process was run with LOG_LEVEL=error
 */
export const isError = isWarn || logLevel === ERROR;

/**
 * true if current process was run with LOG_LEVEL=wtf
 */
export const isWTF = isError || logLevel === WTF;
export {isWTF as isWtf};

export const isIECompat = env[IE_COMPAT_PROP];
export {isIECompat as isIeCompat};

/**
 * Check for env var requesting total avoidance of web
 * e.g. for avoiding use of CDNs, and using local bundles instead
 */
export const isAvoidWeb = env[AVOID_WEB_PROP];
export {isAvoidWeb as avoidWeb};

/**
 * true if IS_LOCAL=true, indicating process is running in localhost environment
 *
 * Must be set manually (it doesn't automatically detect local environment)
 */
export const isLocal = env[IS_LOCAL_PROP];

/**
 * true if process run with SKIP_BASIC_AUTH=true, indicating that basic auth
 * should be shut off
 *
 * Meant to be used when basic auth is conditionally used by a server, often
 * based on deployment environment
 */
export const isSkipBasicAuth = env[SKIP_BASIC_AUTH_PROP];
export {isSkipBasicAuth as skipBasicAuth};
export {isSkipBasicAuth as doSkipBasicAuth};

/**
 * true if TEST_MODE was set explicitly to true or false (e.g. TEST_MODE=true)
 */
export const isTestMode = env[TEST_MODE_PROP] && toBool(TEST_MODE_PROP);

/**
 * true if current script was run via Mocha
 */
export const isMocha = env[WAS_RUN_THRU_MOCHA_PROP];
export {isMocha as isMochaEnv};
export {isMocha as runByMocha};

/**
 * Output value of RELEASE_ENV=something
 * Should be DEV, QA, UAT, PROD, DEVELOPMENT, or PRODUCTION
 */
export const releaseEnv = env[RELEASE_ENV_PROP];
export {releaseEnv as releaseEnvironment};

/**
 * true if RELEASE_ENV=uat
 */
export const isReleaseEnvUAT = releaseEnv === UAT;
export {isReleaseEnvUAT as isUAT};

/**
 * true if RELEASE_ENV=qa
 */
export const isReleaseEnvQA = releaseEnv === QA;
export {isReleaseEnvQA as isQA};

/**
 * true if RELEASE_ENV=dev
 */
export const isReleaseEnvDev = releaseEnv === DEV || releaseEnv === DEVELOPMENT;
export {isReleaseEnvDev as isReleaseEnvDevelopment};

/**
 * true if RELEASE_ENV=prod
 */
export const isReleaseEnvProd = releaseEnv === PROD || releaseEnv === PRODUCTION;
export {isReleaseEnvProd as isReleaseEnvProduction};

/**
 * 3-4 letter version of release environment name (RELEASE_ENV):
 *     dev | qa | uat | prod
 *
 * Default: DEV
 */
export const releaseEnvShort = (function _releaseEnvShort() {
  if (isReleaseEnvProd) {
    return PROD;
  }

  if (isReleaseEnvUAT) {
    return UAT;
  }

  return isReleaseEnvQA ? QA : DEV;
})();

export {releaseEnvShort as releaseEnvAbbrev};

/**
 * true if in development mode, but not on either QA, UAT, or prod release
 * environment
 *
 * i.e. true if NODE_ENV=dev and RELEASE_ENV isn't qa, uat, or prod
 *
 * Reason: sometimes we want to do things in development and treat QA and/or
 * UAT as a development environment, but explicitly not do an action in a
 * release environment (mainly QA or UAT)
 */
export const isDevNonReleaseEnv = isDevelopment && !isReleaseEnvQA && !isReleaseEnvUAT && !isReleaseEnvProd;
export {isDevNonReleaseEnv as isDevNotQaUat};
export {isDevNonReleaseEnv as isDevNotQaUatProd};
