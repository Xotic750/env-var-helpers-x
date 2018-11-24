/*!
{
  "copywrite": "Copyright (c) 2018-present",
  "date": "2018-11-24T01:22:09.632Z",
  "describe": "",
  "description": "Grab quick info from common environment variables (NODE_ENV, LOG_LEVEL, etc.). Convenience methods.",
  "file": "env-var-helpers-x.js",
  "hash": "4eb07dc145dc81d070fa",
  "license": "MIT",
  "version": "1.0.0"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EnvVarHelpers"] = factory();
	else
		root["EnvVarHelpers"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDevNotQaUatProd = exports.isDevNotQaUat = exports.isDevNonReleaseEnv = exports.releaseEnvAbbrev = exports.releaseEnvShort = exports.isReleaseEnvProduction = exports.isReleaseEnvProd = exports.isReleaseEnvDevelopment = exports.isReleaseEnvDev = exports.isQA = exports.isReleaseEnvQA = exports.isUAT = exports.isReleaseEnvUAT = exports.releaseEnvironment = exports.releaseEnv = exports.runByMocha = exports.isMochaEnv = exports.isMocha = exports.isTestMode = exports.doSkipBasicAuth = exports.skipBasicAuth = exports.isSkipBasicAuth = exports.isLocal = exports.avoidWeb = exports.isAvoidWeb = exports.isIeCompat = exports.isIECompat = exports.isWtf = exports.isWTF = exports.isError = exports.isWarn = exports.isInfo = exports.isDebug = exports.isVerbose = exports.isSilly = exports.isTrace = exports.isProdOrSecurityTest = exports.prodOrSecurityTest = exports.isProd = exports.isProduction = exports.isDev = exports.isDevelopment = exports.logLevel = exports.env = exports.nodeEnv = exports.LogLevel = exports.ReleaseEnvShort = exports.ReleaseEnv = exports.QAEnv = exports.NodeEnv = exports.NodeEnvShort = exports.NodeEnvFull = exports.WTF = exports.ERROR = exports.WARN = exports.INFO = exports.VERBOSE = exports.DEBUG = exports.SILLY = exports.TRACE = exports.PRODUCTION = exports.DEVELOPMENT = void 0;

var _isNil = _interopRequireDefault(__webpack_require__(2));

var _Object$freeze;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEVELOPMENT = 'development';
exports.DEVELOPMENT = DEVELOPMENT;
var PRODUCTION = 'production';
exports.PRODUCTION = PRODUCTION;
var TRACE = 'trace';
exports.TRACE = TRACE;
var SILLY = 'silly';
exports.SILLY = SILLY;
var DEBUG = 'debug';
exports.DEBUG = DEBUG;
var VERBOSE = 'verbose';
exports.VERBOSE = VERBOSE;
var INFO = 'info';
exports.INFO = INFO;
var WARN = 'warn';
exports.WARN = WARN;
var ERROR = 'error';
exports.ERROR = ERROR;
var WTF = 'wtf';
exports.WTF = WTF;
var EMPTY_SPACE = '';
var DEV = 'dev';
var PROD = 'prod';
var QA = 'qa';
var UAT = 'uat';
var TRUE = 'true';
var FALSE = 'false';
var NODE_ENV_PROP = 'NODE_ENV';
var LOG_LEVEL_PROP = 'LOG_LEVEL';
var RELEASE_ENV_PROP = 'RELEASE_ENV';
var TEST_MODE_PROP = 'TEST_MODE';
var IE_COMPAT_PROP = 'IE_COMPAT';
var AVOID_WEB_PROP = 'AVOID_WEB';
var WAS_RUN_THRU_MOCHA_PROP = 'WAS_RUN_THRU_MOCHA';
var LOADED_MOCHA_OPTS_PROP = 'LOADED_MOCHA_OPTS';
var MOCHA_PROP = 'mocha';
var MOCHA_PROP_UC = MOCHA_PROP.toUpperCase();
var TEST_SECURITY_PROP = 'TEST_SECURITY';
var SECURITY_TEST_PROP = 'SECURITY_TEST';
var IS_LOCAL_PROP = 'IS_LOCAL';
var SKIP_BASIC_AUTH_PROP = 'SKIP_BASIC_AUTH';
var ENV_PROPS_LIST = [NODE_ENV_PROP, LOG_LEVEL_PROP, RELEASE_ENV_PROP, TEST_MODE_PROP, IE_COMPAT_PROP, AVOID_WEB_PROP, LOADED_MOCHA_OPTS_PROP, MOCHA_PROP, TEST_SECURITY_PROP, SECURITY_TEST_PROP, IS_LOCAL_PROP, SKIP_BASIC_AUTH_PROP];

var envPropsListIteratee = function _envPropsListIteratee(raw, prop) {
  return _objectSpread({}, raw, _defineProperty({}, prop.toUpperCase(), process.env[prop]));
};

var RAW = ENV_PROPS_LIST.reduce(envPropsListIteratee, {});
var NodeEnvFull = Object.freeze([DEVELOPMENT, PRODUCTION]);
exports.NodeEnvFull = NodeEnvFull;
var NodeEnvShort = Object.freeze([DEV, PROD]);
exports.NodeEnvShort = NodeEnvShort;
var NodeEnv = Object.freeze(_toConsumableArray(NodeEnvFull).concat(_toConsumableArray(NodeEnvShort)));
exports.NodeEnv = NodeEnv;
var QAEnv = Object.freeze([QA, UAT]);
exports.QAEnv = QAEnv;
var ReleaseEnv = Object.freeze(_toConsumableArray(NodeEnv).concat(_toConsumableArray(QAEnv)));
exports.ReleaseEnv = ReleaseEnv;
var ReleaseEnvShort = Object.freeze(_toConsumableArray(NodeEnvShort).concat(_toConsumableArray(QAEnv)));
exports.ReleaseEnvShort = ReleaseEnvShort;
var LogLevel = Object.freeze([TRACE, SILLY, DEBUG, VERBOSE, INFO, WARN, ERROR, WTF]);
exports.LogLevel = LogLevel;

var hasVal = function _hasVal(val) {
  return !(0, _isNil.default)(val) && val !== EMPTY_SPACE;
};

var strToBool = function _strToBool(rawVal) {
  var val = rawVal.toLowerCase();
  return val === FALSE || val === FALSE.charAt(0) ? false : val === TRUE || val === TRUE.charAt(0);
};

var toBool = function _toBool(rawVal) {
  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // If value not set, return false, or default if given
  if (!hasVal(rawVal)) {
    return hasVal(def) ? def : false;
  } // If val is a string, convert from boolean string (e.g. "true") to boolean


  if (typeof rawVal === 'string') {
    return strToBool(rawVal);
  } // If val is boolean, return it as-is


  return rawVal;
};

var stringValue = function _stringValue(prop) {
  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (prop in RAW) {
    var value = RAW[prop];
    return hasVal(value) ? String(value).toLowerCase() : def;
  }

  return def;
};

var boolValue = function _boolValue(prop) {
  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (prop in RAW) {
    var value = RAW[prop];
    return hasVal(value) ? toBool(value) : def;
  }

  return def;
};

var NODE_ENV = stringValue(NODE_ENV_PROP, DEVELOPMENT);
/**
 * Node environment (NODE_ENV):
 *     development | production
 * Converts short-form to long-form, contains default value if NODE_ENV not set
 */

var nodeEnv = function _nodeEnv() {
  if (NODE_ENV === DEV) {
    return DEVELOPMENT;
  }

  if (NODE_ENV === PROD) {
    return PRODUCTION;
  }

  return NODE_ENV;
}();
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


exports.nodeEnv = nodeEnv;
var env = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, NODE_ENV_PROP, nodeEnv), _defineProperty(_Object$freeze, RELEASE_ENV_PROP, stringValue(RELEASE_ENV_PROP, NODE_ENV)), _defineProperty(_Object$freeze, LOG_LEVEL_PROP, stringValue(LOG_LEVEL_PROP, INFO)), _defineProperty(_Object$freeze, TEST_MODE_PROP, boolValue(TEST_MODE_PROP)), _defineProperty(_Object$freeze, IE_COMPAT_PROP, boolValue(IE_COMPAT_PROP)), _defineProperty(_Object$freeze, AVOID_WEB_PROP, boolValue(AVOID_WEB_PROP)), _defineProperty(_Object$freeze, SKIP_BASIC_AUTH_PROP, boolValue(SKIP_BASIC_AUTH_PROP)), _defineProperty(_Object$freeze, IS_LOCAL_PROP, IS_LOCAL_PROP in RAW && hasVal(RAW[IS_LOCAL_PROP]) ? toBool(RAW[MOCHA_PROP_UC]) : false), _defineProperty(_Object$freeze, WAS_RUN_THRU_MOCHA_PROP, LOADED_MOCHA_OPTS_PROP in RAW && hasVal(RAW[LOADED_MOCHA_OPTS_PROP]) || RAW[MOCHA_PROP_UC] && toBool(RAW[MOCHA_PROP_UC])), _Object$freeze));
/**
 * Directly output log level (LOG_LEVEL env var):
 *     trace | silly | debug | verbose | info | warn | error | wtf
 * Resolves default value
 */

exports.env = env;
var logLevel = env[LOG_LEVEL_PROP];
/**
 * true if current process was run with NODE_ENV=development or NODE_ENV=dev
 */

exports.logLevel = logLevel;
var isDevelopment = nodeEnv === DEVELOPMENT;
exports.isDev = exports.isDevelopment = isDevelopment;

/**
 * true if current process was run with NODE_ENV=production or NODE_ENV=prod
 */
var isProduction = nodeEnv === PRODUCTION;
exports.isProd = exports.isProduction = isProduction;

/**
 * true if NODE_ENV=production, TEST_SECURITY=true, or SECURITY_TEST=true
 */
var prodOrSecurityTest = isProduction || TEST_SECURITY_PROP in RAW && hasVal(RAW[TEST_SECURITY_PROP]) && toBool(RAW[TEST_SECURITY_PROP]) || SECURITY_TEST_PROP in RAW && hasVal(RAW[SECURITY_TEST_PROP]) && toBool(RAW[SECURITY_TEST_PROP]);
exports.isProdOrSecurityTest = exports.prodOrSecurityTest = prodOrSecurityTest;

/**
 * true if current process was run with LOG_LEVEL=trace
 */
var isTrace = logLevel === TRACE;
/**
 * true if current process was run with LOG_LEVEL=silly
 */

exports.isTrace = isTrace;
var isSilly = isTrace || logLevel === SILLY;
/**
 * true if current process was run with LOG_LEVEL=verbose
 */

exports.isSilly = isSilly;
var isVerbose = isSilly || logLevel === VERBOSE;
/**
 * true if current process was run with LOG_LEVEL=debug
 */

exports.isVerbose = isVerbose;
var isDebug = isVerbose || logLevel === DEBUG;
/**
 * true if current process was run with LOG_LEVEL=info
 */

exports.isDebug = isDebug;
var isInfo = isDebug || logLevel === INFO;
/**
 * true if current process was run with LOG_LEVEL=warn
 */

exports.isInfo = isInfo;
var isWarn = isInfo || logLevel === WARN;
/**
 * true if current process was run with LOG_LEVEL=error
 */

exports.isWarn = isWarn;
var isError = isWarn || logLevel === ERROR;
/**
 * true if current process was run with LOG_LEVEL=wtf
 */

exports.isError = isError;
var isWTF = isError || logLevel === WTF;
exports.isWtf = exports.isWTF = isWTF;
var isIECompat = env[IE_COMPAT_PROP];
exports.isIeCompat = exports.isIECompat = isIECompat;

/**
 * Check for env var requesting total avoidance of web
 * e.g. for avoiding use of CDNs, and using local bundles instead
 */
var isAvoidWeb = env[AVOID_WEB_PROP];
exports.avoidWeb = exports.isAvoidWeb = isAvoidWeb;

/**
 * true if IS_LOCAL=true, indicating process is running in localhost environment
 *
 * Must be set manually (it doesn't automatically detect local environment)
 */
var isLocal = env[IS_LOCAL_PROP];
/**
 * true if process run with SKIP_BASIC_AUTH=true, indicating that basic auth
 * should be shut off
 *
 * Meant to be used when basic auth is conditionally used by a server, often
 * based on deployment environment
 */

exports.isLocal = isLocal;
var isSkipBasicAuth = env[SKIP_BASIC_AUTH_PROP];
exports.doSkipBasicAuth = exports.skipBasicAuth = exports.isSkipBasicAuth = isSkipBasicAuth;

/**
 * true if TEST_MODE was set explicitly to true or false (e.g. TEST_MODE=true)
 */
var isTestMode = env[TEST_MODE_PROP] && toBool(TEST_MODE_PROP);
/**
 * true if current script was run via Mocha
 */

exports.isTestMode = isTestMode;
var isMocha = env[WAS_RUN_THRU_MOCHA_PROP];
exports.runByMocha = exports.isMochaEnv = exports.isMocha = isMocha;

/**
 * Output value of RELEASE_ENV=something
 * Should be DEV, QA, UAT, PROD, DEVELOPMENT, or PRODUCTION
 */
var releaseEnv = env[RELEASE_ENV_PROP];
exports.releaseEnvironment = exports.releaseEnv = releaseEnv;

/**
 * true if RELEASE_ENV=uat
 */
var isReleaseEnvUAT = releaseEnv === UAT;
exports.isUAT = exports.isReleaseEnvUAT = isReleaseEnvUAT;

/**
 * true if RELEASE_ENV=qa
 */
var isReleaseEnvQA = releaseEnv === QA;
exports.isQA = exports.isReleaseEnvQA = isReleaseEnvQA;

/**
 * true if RELEASE_ENV=dev
 */
var isReleaseEnvDev = releaseEnv === DEV || releaseEnv === DEVELOPMENT;
exports.isReleaseEnvDevelopment = exports.isReleaseEnvDev = isReleaseEnvDev;

/**
 * true if RELEASE_ENV=prod
 */
var isReleaseEnvProd = releaseEnv === PROD || releaseEnv === PRODUCTION;
exports.isReleaseEnvProduction = exports.isReleaseEnvProd = isReleaseEnvProd;

/**
 * 3-4 letter version of release environment name (RELEASE_ENV):
 *     dev | qa | uat | prod
 *
 * Default: DEV
 */
var releaseEnvShort = function _releaseEnvShort() {
  if (isReleaseEnvProd) {
    return PROD;
  }

  if (isReleaseEnvUAT) {
    return UAT;
  }

  return isReleaseEnvQA ? QA : DEV;
}();

exports.releaseEnvAbbrev = exports.releaseEnvShort = releaseEnvShort;

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
var isDevNonReleaseEnv = isDevelopment && !isReleaseEnvQA && !isReleaseEnvUAT && !isReleaseEnvProd;
exports.isDevNotQaUatProd = exports.isDevNotQaUat = exports.isDevNonReleaseEnv = isDevNonReleaseEnv;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ })
/******/ ]);
});
//# sourceMappingURL=env-var-helpers-x.js.map