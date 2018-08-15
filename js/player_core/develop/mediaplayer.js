var MediaPlayer =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./platforms/web/js/mediaplayer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/detect-browser/index.js":
/*!**********************************************!*\
  !*** ./node_modules/detect-browser/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
  # detect-browser

  This is a package that attempts to detect a browser vendor and version (in
  a semver compatible format) using a navigator useragent in a browser or
  `process.version` in node.

  ## NOTE: Version 2.x release

  Release 2.0 introduces a breaking API change (hence the major release)
  which requires invocation of a `detect` function rather than just inclusion of
  the module.  PR [#46](https://github.com/DamonOehlman/detect-browser/pull/46)
  provides more context as to why this change has been made.

  ## Example Usage

  <<< examples/simple.js

  Or you can use a switch statement:

  <<< examples/switch.js

  ## Adding additional browser support

  The current list of browsers that can be detected by `detect-browser` is
  not exhaustive. If you have a browser that you would like to add support for
  then please submit a pull request with the implementation.

  Creating an acceptable implementation requires two things:

  1. A test demonstrating that the regular expression you have defined identifies
     your new browser correctly.  Examples of this can be found in the 
     `test/logic.js` file.

  2. Write the actual regex to the `lib/detectBrowser.js` file. In most cases adding
     the regex to the list of existing regexes will be suitable (if usage of `detect-brower`
     returns `undefined` for instance), but in some cases you might have to add it before
     an existing regex.  This would be true for a case where you have a browser that
     is a specialised variant of an existing browser but is identified as the
     non-specialised case.

  When writing the regular expression remember that you would write it containing a
  single [capturing group](https://regexone.com/lesson/capturing_groups) which
  captures the version number of the browser.

**/

function detect() {
  var nodeVersion = getNodeVersion();
  if (nodeVersion) {
    return nodeVersion;
  } else if (typeof navigator !== 'undefined') {
    return parseUserAgent(navigator.userAgent);
  }

  return null;
}

function detectOS(userAgentString) {
  var rules = getOperatingSystemRules();
  var detected = rules.filter(function (os) {
    return os.rule && os.rule.test(userAgentString);
  })[0];

  return detected ? detected.name : null;
}

function getNodeVersion() {
  var isNode = typeof navigator === 'undefined' && typeof process !== 'undefined';
  return isNode ? {
    name: 'node',
    version: process.version.slice(1),
    os: __webpack_require__(/*! os */ "./node_modules/node-libs-browser/mock/empty.js").type().toLowerCase()
  } : null;
}

function parseUserAgent(userAgentString) {
  var browsers = getBrowserRules();
  if (!userAgentString) {
    return null;
  }

  var detected = browsers.map(function(browser) {
    var match = browser.rule.exec(userAgentString);
    var version = match && match[1].split(/[._]/).slice(0,3);

    if (version && version.length < 3) {
      version = version.concat(version.length == 1 ? [0, 0] : [0]);
    }

    return match && {
      name: browser.name,
      version: version.join('.')
    };
  }).filter(Boolean)[0] || null;

  if (detected) {
    detected.os = detectOS(userAgentString);
  }

  return detected;
}

function getBrowserRules() {
  return buildRules([
    [ 'edge', /Edge\/([0-9\._]+)/ ],
    [ 'yandexbrowser', /YaBrowser\/([0-9\._]+)/ ],
    [ 'vivaldi', /Vivaldi\/([0-9\.]+)/ ],
    [ 'kakaotalk', /KAKAOTALK\s([0-9\.]+)/ ],
    [ 'chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ],
    [ 'phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/ ],
    [ 'crios', /CriOS\/([0-9\.]+)(:?\s|$)/ ],
    [ 'firefox', /Firefox\/([0-9\.]+)(?:\s|$)/ ],
    [ 'fxios', /FxiOS\/([0-9\.]+)/ ],
    [ 'opera', /Opera\/([0-9\.]+)(?:\s|$)/ ],
    [ 'opera', /OPR\/([0-9\.]+)(:?\s|$)$/ ],
    [ 'ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/ ],
    [ 'ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ],
    [ 'ie', /MSIE\s(7\.0)/ ],
    [ 'bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/ ],
    [ 'android', /Android\s([0-9\.]+)/ ],
    [ 'ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/ ],
    [ 'safari', /Version\/([0-9\._]+).*Safari/ ]
  ]);
}

function getOperatingSystemRules() {
  return buildRules([
    [ 'iOS', /iP(hone|od|ad)/ ],
    [ 'Android OS', /Android/ ],
    [ 'BlackBerry OS', /BlackBerry|BB10/ ],
    [ 'Windows Mobile', /IEMobile/ ],
    [ 'Amazon OS', /Kindle/ ],
    [ 'Windows 3.11', /Win16/ ],
    [ 'Windows 95', /(Windows 95)|(Win95)|(Windows_95)/ ],
    [ 'Windows 98', /(Windows 98)|(Win98)/ ],
    [ 'Windows 2000', /(Windows NT 5.0)|(Windows 2000)/ ],
    [ 'Windows XP', /(Windows NT 5.1)|(Windows XP)/ ],
    [ 'Windows Server 2003', /(Windows NT 5.2)/ ],
    [ 'Windows Vista', /(Windows NT 6.0)/ ],
    [ 'Windows 7', /(Windows NT 6.1)/ ],
    [ 'Windows 8', /(Windows NT 6.2)/ ],
    [ 'Windows 8.1', /(Windows NT 6.3)/ ],
    [ 'Windows 10', /(Windows NT 10.0)/ ],
    [ 'Windows ME', /Windows ME/ ],
    [ 'Open BSD', /OpenBSD/ ],
    [ 'Sun OS', /SunOS/ ],
    [ 'Linux', /(Linux)|(X11)/ ],
    [ 'Mac OS', /(Mac_PowerPC)|(Macintosh)/ ],
    [ 'QNX', /QNX/ ],
    [ 'BeOS', /BeOS/ ],
    [ 'OS/2', /OS\/2/ ],
    [ 'Search Bot', /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/ ]
  ]);
}

function buildRules(ruleTuples) {
  return ruleTuples.map(function(tuple) {
    return {
      name: tuple[0],
      rule: tuple[1]
    };
  });
}

module.exports = {
  detect: detect,
  detectOS: detectOS,
  getNodeVersion: getNodeVersion,
  parseUserAgent: parseUserAgent
};


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/*!******************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/empty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/promise-polyfill/promise.js":
/*!**************************************************!*\
  !*** ./node_modules/promise-polyfill/promise.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr);

    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./platforms/web/js/browser.js":
/*!*************************************!*\
  !*** ./platforms/web/js/browser.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var browser = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/index.js").detect() || {name:'', version:'', os:''};

// Parse semver from version string.
// NaN if semver value doesn't exist
var split = browser.version.split('.');
browser.major = parseInt(split[0], 10);
browser.minor = parseInt(split[1], 10);
browser.patch = parseInt(split[2], 10);

module.exports = browser;


/***/ }),

/***/ "./platforms/web/js/drm/PlayReady.js":
/*!*******************************************!*\
  !*** ./platforms/web/js/drm/PlayReady.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var getBody = function (xmlDoc) {
    var licenseRequest = null;
    if (xmlDoc.getElementsByTagName('Challenge').length > 0 && xmlDoc.getElementsByTagName('Challenge')[0]) {
        var Challenge = xmlDoc.getElementsByTagName('Challenge')[0].childNodes[0].nodeValue;
        if (Challenge) {
            licenseRequest = atob(Challenge);
        }
    }
    return licenseRequest;
};

var getHeaders = function (xmlDoc) {
    var headers = {};
    var headerNameList = xmlDoc.getElementsByTagName('name');
    var headerValueList = xmlDoc.getElementsByTagName('value');
    for (var i = 0; i < headerNameList.length; i++) {
        headers[headerNameList[i].childNodes[0].nodeValue] = headerValueList[i].childNodes[0].nodeValue;
    }
    return headers;
};

/**
 * PlayReady License Request requires transforming the ArrayBuffer into XML format
 * and adding headers included inside the message created by CDM
 * Based on Window's Docs/Dash implementation: https://docs.microsoft.com/en-us/previous-versions/windows/apps/dn457474(v%3dieb.10)
 * @param {ArrayBuffer} message - https://www.w3.org/TR/2014/WD-encrypted-media-20140828/encrypted-media.html#dom-mediakeymessageevent
 */
var licenseRequestData = function (message) {
    var msg = String.fromCharCode.apply(null, new Uint16Array(message));
    var xmlDoc = new DOMParser().parseFromString(msg, 'application/xml');
    return {
        headers: getHeaders(xmlDoc),
        body: getBody(xmlDoc),
    };
};

module.exports = {
  licenseRequestData: licenseRequestData,
};


/***/ }),

/***/ "./platforms/web/js/drm/constants.js":
/*!*******************************************!*\
  !*** ./platforms/web/js/drm/constants.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Note:
 * There may need to be multiple uuids, I have seen there
 * are two uuids for clearkey, but have only seen this one
 * used on our content.
 */
var KEY_SYSTEMS = {
    CLEAR_KEY: {
        keySystem: 'org.w3.clearkey',
        uuid: '1077efec-c0b2-4d02-ace3-3c1e52e2fb4b',
    },
    FAIRPLAY: {
        keySystem: 'com.apple.fps.2_0',
        certUrl: 'https://fp-keyos.licensekeyserver.com/cert/a17fd33d3843df9b17679ccf50a419b2.der',
        licenseUrl: 'https://fp-keyos.licensekeyserver.com/getkey',
        uuid: '94CE86FB-07FF-4F43-ADB8-93D2FA968CA2',
    },
    PLAYREADY: {
        keySystem: 'com.microsoft.playready',
        licenseUrl: 'https://pr-keyos.licensekeyserver.com/core/rightsmanager.asmx',
        uuid: '9a04f079-9840-4286-ab92-e65be0885f95',
    },
    WIDEVINE: {
        keySystem: 'com.widevine.alpha',
        licenseUrl: 'https://wv-keyos.licensekeyserver.com',
        uuid: 'edef8ba9-79d6-4ace-a3c8-27dcd51d21ed',
    },
};

var KEY_SYSTEMS_BY_STRING = {
    'com.widevine.alpha': KEY_SYSTEMS.WIDEVINE,
    'com.microsoft.playready': KEY_SYSTEMS.PLAYREADY,
    'com.apple.fps.2_0': KEY_SYSTEMS.FAIRPLAY,
    'org.w3.clearkey': KEY_SYSTEMS.CLEAR_KEY,
};

var AUTH_XML_URL = 'https://vizima.twitch.tv/api/authxml/';

var NO_CDM_SUPPORT_ERROR = {
    code: 4,
    message: 'Your browser does not support any DRM Content Decryption Modules',
};

var SESSION_UPDATE_ERROR = {
    code: 4,
    message: 'There was an issue while updating DRM License',
};

var LICENSE_REQUEST_ERROR = {
    code: 4,
    message: 'Error while requesting DRM license',
};

var KEY_SESSION_CREATION_ERROR = {
    code: 4,
    message: 'Error while requesting DRM license',
};

var KEY_SESSION_INTERNAL_ERROR = {
    code: 4,
    message: 'Encryption key not usable because of internal error in CDM',
};

var NO_PSSH_FOUND_ERROR = {
    code: 4,
    message: "Unable to find valid CDM support on media",
};

var ERRORS = {
    NO_CDM_SUPPORT: NO_CDM_SUPPORT_ERROR,
    SESSION_UPDATE: SESSION_UPDATE_ERROR,
    LICENSE_REQUEST: LICENSE_REQUEST_ERROR,
    KEY_SESSION_CREATION: KEY_SESSION_CREATION_ERROR,
    KEY_SESSION_INTERNAL: KEY_SESSION_INTERNAL_ERROR,
    NO_PSSH_FOUND: NO_PSSH_FOUND_ERROR,
};

module.exports = {
    KEY_SYSTEMS: KEY_SYSTEMS,
    KEY_SYSTEMS_BY_STRING: KEY_SYSTEMS_BY_STRING,
    AUTH_XML_URL: AUTH_XML_URL,
    ERRORS: ERRORS,
};


/***/ }),

/***/ "./platforms/web/js/drm/utils.js":
/*!***************************************!*\
  !*** ./platforms/web/js/drm/utils.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Constants = __webpack_require__(/*! ./constants */ "./platforms/web/js/drm/constants.js");

var KEY_SYSTEMS = Constants.KEY_SYSTEMS;

// some utils from https://github.com/videojs/videojs-contrib-eme/
// should probably revise these if our needs differ
var arrayBuffersEqual = function(arrayBuffer1, arrayBuffer2) {
    arrayBuffer1 = arrayBufferFrom(arrayBuffer1);
    arrayBuffer2 = arrayBufferFrom(arrayBuffer2);

    if (arrayBuffer1 === arrayBuffer2) {
        return true;
    }

    if (arrayBuffer1.byteLength !== arrayBuffer2.byteLength) {
        return false;
    }

    var dataView1 = new DataView(arrayBuffer1);
    var dataView2 = new DataView(arrayBuffer2);

    for (var i = 0; i < dataView1.byteLength; i++) {
        if (dataView1.getUint8(i) !== dataView2.getUint8(i)) {
            return false;
        }
    }
    return true;
};

var arrayBufferFrom = function (bufferOrTypedArray) {
    if (bufferOrTypedArray instanceof Uint8Array ||
        bufferOrTypedArray instanceof Uint16Array) {
        return bufferOrTypedArray.buffer;
    }
    return bufferOrTypedArray;
};

/**
 * Takes in array of PSSH data and returns KEY_SYSTEM objects
 * that are supported.
 *
 * @param {Array} psshArrayBuffer
 */
var parsePSSHSupportFromInitData = function(initData) {
    var uuids = parseAllPSSHData(initData);
    return mapPSSHSystemIds(uuids);
};

var mapPSSHSystemIds = function(uuids){
    var supportedKeySystems = [];
    uuids.forEach(function(uuid) {
        Object.keys(KEY_SYSTEMS).forEach(function(key) {
            var ks = KEY_SYSTEMS[key];
            if (ks.uuid === uuid) {
                supportedKeySystems.push(ks);
            }
        });
    });
    return supportedKeySystems;
};

/**
 * This is currently unused, but it allows you to pass in `encrypted`
 * event.initData and it will return PSSH data by key system uuid
 * This is from the Dash.js implementation to dynamically read
 * media's CDM support
 *
 * @param {ArrayBuffer} data - event.initData
 */
var parseAllPSSHData = function(data) {
    if (data === null)
        return [];

    var dv = new DataView(data.buffer || data); // data.buffer first for Uint8Array support
    var done = false;
    var uuids = [];

    // TODO: Need to check every data read for end of buffer
    var byteCursor = 0;
    while (!done) {

        var size,
            nextBox,
            version,
            systemID,
            psshDataSize;
        var boxStart = byteCursor;

        if (byteCursor >= dv.buffer.byteLength)
            break;

        /* Box size */
        size = dv.getUint32(byteCursor);
        nextBox = byteCursor + size;
        byteCursor += 4;

        /* Verify PSSH */
        if (dv.getUint32(byteCursor) !== boxTypeToInt('pssh')) {
            byteCursor = nextBox;
            continue;
        }
        byteCursor += 4;

        /* Version must be 0 or 1 */
        version = dv.getUint8(byteCursor);
        if (version !== 0 && version !== 1) {
            byteCursor = nextBox;
            continue;
        }
        byteCursor++;

        byteCursor += 3; /* skip flags */

        // 16-byte UUID/SystemID
        systemID = '';
        var i;
        for (i = 0; i < 4; i++) {
            systemID += byteToHex(dv.getUint8(byteCursor + i));
        }
        byteCursor += 4;
        systemID += '-';
        for (i = 0; i < 2; i++) {
            systemID += byteToHex(dv.getUint8(byteCursor + i));
        }
        byteCursor += 2;
        systemID += '-';
        for (i = 0; i < 2; i++) {
            systemID += byteToHex(dv.getUint8(byteCursor + i));
        }
        byteCursor += 2;
        systemID += '-';
        for (i = 0; i < 2; i++) {
            systemID += byteToHex(dv.getUint8(byteCursor + i));
        }
        byteCursor += 2;
        systemID += '-';
        for (i = 0; i < 6; i++) {
            systemID += byteToHex(dv.getUint8(byteCursor + i));
        }
        byteCursor += 6;

        systemID = systemID.toLowerCase();

        /* PSSH Data Size */
        psshDataSize = dv.getUint32(byteCursor);
        byteCursor += 4;

        /* PSSH Data */
        uuids.push(systemID);
        byteCursor = nextBox;
    }

    return uuids;
};

var httpRequest = function (url, options) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(options.method, url, true);

        for (var h in options.headers) {
            if (options.headers.hasOwnProperty(h)) {
                xhr.setRequestHeader(h, options.headers[h]);
            }
        }
        xhr.responseType = options.responseType;

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200){
                    resolve(xhr.response);
                } else {
                    var simpleErrorResponse = 'Request Error: Status ' + xhr.status;
                    console.warn(simpleErrorResponse)
                    reject(simpleErrorResponse);
                }
            }
        }
        xhr.send(options.body);
    });
};

/**
 *
 * initData is an ascii encoded json object as follows
 * {
 *     "sinf":[...base64sinfbody...]
 * }
 */
function contentIdFromInitData(initData) {
    var parsedInit = JSON.parse(String.fromCharCode.apply(null, initData));
    var sinf = decodeBase64(parsedInit.sinf[0]);
    var schi = searchForBox(sinf, 'schi');
    var tenc = searchForBox(schi, 'tenc');
    return arrayToHex(tenc.subarray(8, 24));
}

function searchForBox(buffer, boxType) {
    var view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    var boxTypeValue = boxTypeToInt(boxType);
    var offset = 0;

    while (offset < buffer.byteLength) {
        var size = view.getUint32(offset);
        var type = view.getUint32(offset + 4);
        if (type === boxTypeValue) {
            return buffer.subarray(offset + 8, offset + size);
        }
        offset += size;
    }

    return new Uint8Array();
}

function boxTypeToInt(name) {
    return (
        (name.charCodeAt(0) << 24) +
        (name.charCodeAt(1) << 16) +
        (name.charCodeAt(2) << 8) +
        name.charCodeAt(3)
    )
}

function arrayToHex(buffer) {
    var hex = '';
    for (var i = 0; i < buffer.length; i++) {
        hex += byteToHex(buffer[i]);
    }
    return hex;
}

function byteToHex(byte) {
    var hex = byte.toString(16);
    return (hex.length === 1 ? '0' + hex : hex);
}

function decodeBase64(input) {
    var raw = atob(input);
    var rawLength = raw.length;
    var array = new Uint8Array(rawLength);
    for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}

function encodeBase64(input) {
    return btoa(String.fromCharCode.apply(null, input));
}

function getParamsFromUrl(url) {
    var params = {};
        var query = url.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return params;
}

/**
 * Ensuring that uncaught errors are sent in the correct format.
 * Most issues should be a constant error found in ERRORS, but
 * in case we have an issue we weren't expecting, we should handle
 * the error in the same format.
 */
var checkErrorFormat = function (err) {
    return {
        code: err.code || 4,
        message: err.message || '',
    }
};

module.exports = {
    arrayBuffersEqual: arrayBuffersEqual,
    httpRequest: httpRequest,
    parsePSSHSupportFromInitData: parsePSSHSupportFromInitData,
    contentIdFromInitData: contentIdFromInitData,
    decodeBase64: decodeBase64,
    encodeBase64: encodeBase64,
    checkErrorFormat: checkErrorFormat,
    getParamsFromUrl: getParamsFromUrl
};


/***/ }),

/***/ "./platforms/web/js/drmmanager.js":
/*!****************************************!*\
  !*** ./platforms/web/js/drmmanager.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Constants = __webpack_require__(/*! ./drm/constants */ "./platforms/web/js/drm/constants.js");
var Utils = __webpack_require__(/*! ./drm/utils */ "./platforms/web/js/drm/utils.js");
var PlayReady = __webpack_require__(/*! ./drm/PlayReady */ "./platforms/web/js/drm/PlayReady.js");

//setup constants/utils
var KEY_SYSTEMS = Constants.KEY_SYSTEMS;
var KEY_SYSTEMS_BY_STRING = Constants.KEY_SYSTEMS_BY_STRING;
var AUTH_XML_URL = Constants.AUTH_XML_URL;
var arrayBuffersEqual = Utils.arrayBuffersEqual;
var httpRequest = Utils.httpRequest;
var parsePSSHSupportFromInitData = Utils.parsePSSHSupportFromInitData;
var contentIdFromInitData =  Utils.contentIdFromInitData;
var decodeBase64 =  Utils.decodeBase64;
var encodeBase64 =  Utils.encodeBase64;
var checkErrorFormat = Utils.checkErrorFormat;
var getParamsFromUrl = Utils.getParamsFromUrl;

var ERRORS = Constants.ERRORS;

/* TODO Robustness levels for Chrome best practices
    Spec notes that:
        robustness of type DOMString, defaulting to ""
        The robustness level associated with the content type.
        The empty string indicates that any ability to decrypt
        and decode the content type is acceptable.

    If we get requirements, we can set it to one of the settings below:
    https://storage.googleapis.com/wvdocs/Chrome_EME_Changes_and_Best_Practices.pdf
    Definition           EME Level     Widevine Device Security Level
    SW_SECURE_CRYPTO     1             3
    SW_SECURE_DECODE     2             3
    HW_SECURE_CRYPTO     3             2
    HW_SECURE_DECODE     4             1
    HW_SECURE_ALL        5             1
*/

// this is only used for W3C spec following EME feature check
var supportedConfig = [{
    initDataTypes: ['cenc'],
    audioCapabilities: [{
        contentType: 'audio/mp4;codecs="mp4a.40.2"'
    }],
    videoCapabilities: [{
        // comment out robustness for testing clearkey
        robustness: 'SW_SECURE_CRYPTO',
        contentType: 'video/mp4;codecs="avc1.42E01E"'
    }],
}];

/**
 * DRMManager sets up and handles media that contains DRM encryption
 * @param {Object} config
 * @param {HTMLElement} config.video - video element
 * @param {function(MediaError)} config.onerror - video error with error code
 */
var DRMManager = function (config) {
    this._video = config.video;
    this._cdmSupport = null;
    this._selectedCDM = null;
    this._mediaKeys = undefined; // we will reserve null
    this._handleError = config.onerror;
    this._currentSrc = null;
    this._isProtected = false;
    this._pendingSessions = [];
    this._sessions = [];
    this._authUrl = ''; // Based on the channel name

    this._video.addEventListener('encrypted', this._handleEncrypted.bind(this), false);
    this._video.addEventListener('webkitneedkey', this._handleSafariEncrypted.bind(this), false);
};

DRMManager.prototype.configure = function (path) {
    var parsed = new URL(path);
    var parts = parsed.pathname.split('/');
    var filename = parts[parts.length - 1];
    var channelName = filename.split('.')[0]; //remove extension

    var params = getParamsFromUrl(path);
    var token = params['token'];
    var sig = params['sig'];
    this._authUrl = AUTH_XML_URL + channelName + '?token=' + encodeURIComponent(token) + '&sig=' + sig;
};

DRMManager.prototype.reset = function () {
    this._isProtected = false;
    this._sessions = [];
}

DRMManager.prototype.isProtected = function () {
    return this._isProtected;
};

/**
 * Checks to see if system is already handling
 * a session that matches initData
 * @param {ArrayBuffer} initData
 */
DRMManager.prototype._hasSession = function (initData) {
    for (var i = 0; i < this._sessions.length; i++) {
        var session = this._sessions[i];
        if (!session.initData) continue;
        if (arrayBuffersEqual(session.initData, initData)) {
            return true;
        }
    }
    return false;
};

/**
 * Builds a promise catch chain to feature detect a keysystem that works.
 * This will get refactored once we have real systems working and we know
 * which format is requested/returned
 */
DRMManager.prototype._createKeySystemSupportChain = function () {
    if (this._cdmSupport === null || this._cdmSupport.length === 0){
        return Promise.reject(ERRORS.NO_PSSH_FOUND);
    }
    var promise = Promise.reject();
    this._cdmSupport.forEach(function (cdm) {
        promise = promise.catch(function (e) {
            return navigator.requestMediaKeySystemAccess(cdm.keySystem, supportedConfig);
        });
    });

    promise = promise.catch(function () {
        return Promise.reject(ERRORS.NO_CDM_SUPPORT);
    });

    return promise;
}

/**
 * Handles embeded DRM in initial video file
 * @param {Object} event - EncryptedMediaEvent [https://www.w3.org/TR/encrypted-media/#dom-mediaencryptedevent]
 */
DRMManager.prototype._handleEncrypted = function (event) {
    this._isProtected = true;

    // if we already have this same session setup, ignore this event;
    if (this._hasSession(event.initData)) {
        return;
    }
    this._sessions.push({initData: event.initData});

    if (this._cdmSupport === null) {
        this._cdmSupport = parsePSSHSupportFromInitData(event.initData);
    }

    var keySystemPromise;
    // if mediakeys have not started
    if (typeof this._mediaKeys === 'undefined') {
        // TODO there is a better way to check/manage state instead of using undefined -> null as loading
        // this will make sure things will not fire twice, since there is async that could be happening.
        this._mediaKeys = null;
        this._pendingSessions = [];

        // create a promise chain of keySystem support
        keySystemPromise = this._createKeySystemSupportChain()
            .then(function (keySystemAccess) {
                this._selectedCDM = KEY_SYSTEMS_BY_STRING[keySystemAccess.keySystem]
                return keySystemAccess.createMediaKeys();
            }.bind(this))
            .then(this._setMediaKeys.bind(this))
            .catch(function (err) {
                this._handleError(checkErrorFormat(err));
            }.bind(this));
    }

    this._addSession(event.initDataType, event.initData);
    return keySystemPromise;
};

/**
 * Stores and sets mediaKeys/certificate
 * It will also create sessions for any sessions that are pending to be created
 * @param {Object} createdMediaKeys - MediaKeys [https://www.w3.org/TR/encrypted-media/#dom-mediakeys]
 */
DRMManager.prototype._setMediaKeys = function (createdMediaKeys) {
    this._mediaKeys = createdMediaKeys;
    this._pendingSessions.forEach(function (pending) {
        this._createSessionRequest(pending.initDataType, pending.initData);
    }.bind(this));
    this._pendingSessions = [];
    return this._video.setMediaKeys(this._mediaKeys);
};

/**
 * Creates Sessions if MediaKeys is ready, otherwise it stores data
 * to create session once the MediaKeys is ready.
 * @param {string} initDataType - [https://www.w3.org/TR/encrypted-media/#dom-mediaencryptedevent-initdatatype]
 * @param {ArrayBuffer} initData - [https://www.w3.org/TR/encrypted-media/#dom-mediaencryptedeventinit-initdata]
 */
DRMManager.prototype._addSession = function (initDataType, initData) {
    if (this._mediaKeys) {
        this._createSessionRequest(initDataType, initData)
            .catch(function (err) {
                this._handleError(ERRORS.KEY_SESSION_CREATION);
            }.bind(this));
    } else {
        this._pendingSessions.push({
            initDataType: initDataType,
            initData: initData
        });
    }
};

/**
 * Creates key session, prepares event handling of sessions messages,
 * and then generates a key session request.
 * @param {string} initDataType - [https://www.w3.org/TR/encrypted-media/#dom-mediaencryptedevent-initdatatype]
 * @param {ArrayBuffer} initData - [https://www.w3.org/TR/encrypted-media/#dom-mediaencryptedeventinit-initdata]
 */
DRMManager.prototype._createSessionRequest = function (initDataType, initData) {
    var keySession = this._mediaKeys.createSession();
    keySession.addEventListener('message', this._handleMessage.bind(this), false);
    keySession.addEventListener('keystatuseschange', function (event) {
        this._handleKeyStatusesChange(keySession, event, initData);
    }.bind(this), false);
    return keySession.generateRequest(initDataType, initData);
};

/**
 * Handles the event of a key changing, will be used for expiring and removing
 * key sessions.
 * @param {Object} keySession - MediaKeySession [https://www.w3.org/TR/encrypted-media/#dom-mediakeysession]
 * @param {Object} event - Event
 * @param {ArrayBuffer} initData - ArrayBuffer [https://www.w3.org/TR/encrypted-media/#dom-mediaencryptedevent-initdata]
 */
DRMManager.prototype._handleKeyStatusesChange = function (keySession, event, initData) {
    var expired = false;

    // based on https://www.w3.org/TR/encrypted-media/#example-using-all-events
    keySession.keyStatuses.forEach(function (status, keyId) {
        switch (status) {
            case 'expired':
                // "All other keys in the session must have this status."
                // https://www.w3.org/TR/encrypted-media/#dom-mediakeystatus-expired
                expired = true;
                break;
            case 'internal-error':
                // https://www.w3.org/TR/encrypted-media/#dom-mediakeystatus-internal-error
                this._handleError(ERRORS.KEY_SESSION_INTERNAL);
                break;
        }
    }.bind(this));

    if (expired) {
        keySession.close().then(function () {
            this._removeSession(initData);
        }.bind(this));
    }
}

/**
 * Removes a session that matches initData
 * @param {ArrayBuffer} initData - [https://www.w3.org/TR/encrypted-media/#dom-mediaencryptedevent-initdata]
 */
DRMManager.prototype._removeSession = function (initData) {
    for (var i = 0; i < this._sessions.length; i++) {
        var session = this._sessions[i];
        if (session.initData === initData) {
            this._sessions.splice(i, 1);
            return;
        }
    }
}

/**
 * Handles key session 'message' event and generates/updates
 * license
 * @param {Object} event - [https://www.w3.org/TR/encrypted-media/#dom-mediakeymessageevent]
 */
DRMManager.prototype._handleMessage = function (event) {
    // grabs relevant session
    var keySession = event.target;
    this._generateLicense(event.message).then(function (license) {
        return keySession.update(license).catch(function () {
            return Promise.reject(ERRORS.SESSION_UPDATE);
        });
    })
    .catch(function (error) {
        this._handleError(checkErrorFormat(error));
    }.bind(this));
};

/**
 * Currently a ClearKey license generation
 * @param {Object} message - Message returned from CDM message event
 */
DRMManager.prototype._generateLicense = function (message) {
    if (this._selectedCDM === KEY_SYSTEMS.CLEAR_KEY) {
        // clearkey implementation where KID is key
        var request = JSON.parse(new TextDecoder().decode(message));

        var _keys = request.kids.map(function (keyid) {
            return {kty: 'oct', alg: 'A128KW', kid: keyid, k: keyid};
        });

        var result = new TextEncoder().encode(JSON.stringify({
            keys: _keys
        }));
        return Promise.resolve(result);
    } else {
        return httpRequest(this._authUrl, {
            method: 'GET',
            responseType: 'text',
        }).then(function (authXml) {
            return this._requestLicense(message, authXml);
        }.bind(this)).catch(function () {
            return Promise.reject(ERRORS.LICENSE_REQUEST);
        });
    }
};

DRMManager.prototype._requestLicense = function (message, authXml) {
    var options = {
        method: 'POST',
        responseType: 'arraybuffer',
        body: message,
        headers: {
            'customdata': authXml,
            'Content-Type': 'application/octet-stream',
        },
    }

    // get additional data for specifics CDM license request calls
    if (this._selectedCDM === KEY_SYSTEMS.PLAYREADY) {
        var additionalData = PlayReady.licenseRequestData(message);
        options.body = additionalData.body;
        options.headers = Object.assign(options.headers, additionalData.headers);
    }

    return httpRequest(this._selectedCDM.licenseUrl, options);
}


// SAFARI FAIRPLAY SUPPORT
DRMManager.prototype._handleSafariEncrypted = function (event) {
    this._isProtected = true;
    this._selectedCDM = KEY_SYSTEMS.FAIRPLAY;
    httpRequest(KEY_SYSTEMS.FAIRPLAY.certUrl, {
        method: 'GET',
        responseType: 'arraybuffer',
        headers: {
            'Pragma': 'Cache-Control: no-cache',
            'Cache-Control': 'max-age=0',
        }
    }).then(function (certificate) {
        return this._setupSafariMediaKeys(event, certificate);
    }.bind(this)).catch(function (err) {
        this._handleError(checkErrorFormat(err));
    }.bind(this));
};

/**
 * Safari's 'encrypted' initialization event. This works to
 * start initialization
 */
DRMManager.prototype._setupSafariMediaKeys = function (event, certificate) {
    return new Promise(function (resolve, reject) {
        if (!this._video.webkitKeys){
            this._video.webkitSetMediaKeys(new WebKitMediaKeys(KEY_SYSTEMS.FAIRPLAY.keySystem));
        }

        if (!this._video.webkitKeys){
            reject('Issue setting fairplay media keys');
        }

        // Get the KeyID
        var contentId = contentIdFromInitData(event.initData);

        var keySession = this._video.webkitKeys.createSession('video/mp4', event.initData);

        if (!keySession) {
            return reject('Could not create key session');
        }

        keySession.contentId = contentId;

        keySession.addEventListener('webkitkeymessage', function (event) {
            var session = event.target;
            var message = event.message;

            if ((String.fromCharCode.apply(null, event.message)) === 'certificate') {
                session.update(new Uint8Array(certificate));
            } else {
                // get license, and keySession.update()
                this._getWebkitLicense(message, contentId).then(function (license) {
                    var keyText = license.trim();
                    if (keyText.substr(0, 5) === '<ckc>' && keyText.substr(-6) === '</ckc>') {
                        keyText = keyText.slice(5, -6);
                    }
                    session.update(decodeBase64(keyText));
                }).catch(reject);
            }
        }.bind(this));
        keySession.addEventListener('webkitkeyadded', resolve);
        keySession.addEventListener('webkitkeyerror', reject);
    }.bind(this));
};

/**
 * Get the webkit license
 * @param {Object} keyMessageEvent - Message event from current session
 */
DRMManager.prototype._getWebkitLicense = function (message, contentId) {
    return httpRequest(this._authUrl, {
        method: 'GET',
        responseType: 'text',
    }).then(function (authXml) {
        var licenseUrl = KEY_SYSTEMS.FAIRPLAY.licenseUrl;
        var body = 'spc=' + encodeBase64(message) + '&assetId=' + contentId;
        var options = {
            method: 'POST',
            body: body,
            responseType: 'text',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'customdata': authXml,
            }
        };
        return httpRequest(licenseUrl, options);
    }).catch(function (e) {
        return Promise.reject(ERRORS.LICENSE_REQUEST);
    });
};

module.exports = DRMManager;


/***/ }),

/***/ "./platforms/web/js/error/source.js":
/*!******************************************!*\
  !*** ./platforms/web/js/error/source.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The error source match the source names in result.hpp
 * These are not emitted as their own events, but instead
 * populate the 'source' property in the player.js 'ERROR' event.
 */
module.exports = {
    UNKNOWN: "Unspecified",
    FILE: "File",
    PLAYLIST: "Playlist",
    SEGMENT: "Segment",
    SOURCE: "Source",
    DECODER: "Decode",
    RENDERER: "Render"
};


/***/ }),

/***/ "./platforms/web/js/error/type.js":
/*!****************************************!*\
  !*** ./platforms/web/js/error/type.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The error names match the result names in result.hpp
 * These are not emitted as their own events, but instead
 * populate the 'type' property in the player.js 'ERROR' event.
 */
module.exports = {
    /** Generic error occurred */
    GENERIC: 'Error',

    /** Method or feature not supported */
    NOT_SUPPORTED: 'ErrorNotSupported',

    /** No source present for the operation */
    NO_SOURCE: 'ErrorNoSource',

    /** Data or input is invalid for the operation */
    INVALID_DATA: 'ErrorInvalidData',

    /** Class or object is an invalid state */
    INVALID_STATE: 'ErrorInvalidState',

    /** Method parameter is invalid */
    INVALID_PARAMETER: 'ErrorInvalidParameter',

    /** Method or operation timed out */
    TIMEOUT: 'ErrorTimeout',

    /** Output is invalid for the operation */
    INVALID_OUTPUT: 'ErrorInvalidOutput',

    /** An unexpected internal error has occurred. */
    INTERNAL: 'ErrorInternal',

    /** Unspecified Network error */
    NETWORK: 'ErrorNetwork',

    /** Error indicating a network I/O failure */
    NETWORK_IO: 'ErrorNetworkIO',

    /** Error indicating a network resource is not authorized */
    AUTHORIZATION: 'ErrorAuthorization',

    /** Error indicating a network resource is not available */
    NOT_AVAILABLE: 'ErrorNotAvailable',

    /** Error indicating a network resource is not available */
    EXCEPTION: 'ErrorException',
};


/***/ }),

/***/ "./platforms/web/js/event/metadata.js":
/*!********************************************!*\
  !*** ./platforms/web/js/event/metadata.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Publicly exposed timed-metadata events (listen with `addEventListener()`).
 * Fired based on the current position of the playhead.
 */
module.exports = {
    /**
     * ID3 encountered. A direct json encoding of the id3 is provided
     * They follow this form: [{id: 'TRCK', info:[val1, val2, ...]}...]
     * @param {Object[]} id3 - List of ID3 keys and values
     */
    ID3: 'MetaID3',
    /**
     * Caption update
     * @param {Object}{ caption info }
     */
    CAPTION: 'MetaCaption',
    /**
     * Stitched ad has started
     * @param Object containing key/values from segment attributes
     * @deprecated use TIMED_METADATA
     */
    SPLICE_OUT: 'MetaSpliceOut',
    /**
     * Stitched ad has ended
     * @deprecated use TIMED_METADATA
     */
    SPLICE_IN: 'MetaSpliceIn',
};


/***/ }),

/***/ "./platforms/web/js/event/player.js":
/*!******************************************!*\
  !*** ./platforms/web/js/event/player.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Public events sent from the MediaPlayer. These are listened to interanlly,
 * but can also be publically consummed with `addEventListener` All events are
 * currently emitted from the WebMediaPlayer in the worker. The getters that
 * are updated with each event are listed below. The payloads are currently not
 * publically exposed, but contain the internal state change information.
 */
module.exports = {
    /**
     * Emitted when the MediaPlayer instances has been created
     * Updated functions:
     *     getVersion()
     */
    INITIALIZED: 'PlayerInitialized',
    /**
     * Rendered quality has changed
     * Updated functions:
     *     getQuality()
     */
    QUALITY_CHANGED: 'PlayerQualityChanged',
    /**
     * Auto turned on or off
     * Updated functions:
     *     getAutoSwitchQuality()
     */
    AUTO_SWITCH_QUALITY_CHANGED: 'PlayerAutoSwitchQualityChanged',
    /**
     * Duration value has changed
     * Updated functions:
     *     getDuration()
     *     getStartOffset()
     */
    DURATION_CHANGED: 'PlayerDurationChanged',
    /**
     * Volume changed in range 0-1
     */
    VOLUME_CHANGED: 'PlayerVolumeChanged',
    /**
     * Muted state toggled
     */
    MUTED_CHANGED: 'PlayerMutedChanged',
    /**
     * The playback rate has changed
     */
    PLAYBACK_RATE_CHANGED: 'PlayerPlaybackRateChanged',
    /**
     * An errant BUFFERING occurred
     */
    REBUFFERING: 'PlayerRebuffering',
    /**
     * The browser blocked non-muted playback without a user gesture.
     * Mute and play to start playback or wait for user gesutre.
     */
    AUDIO_BLOCKED: 'PlayerAudioBlocked',
    /**
     * The browser blocked playback without a user gesture.
     * Mute and play to start playback or wait for user gesutre.
     */
    PLAYBACK_BLOCKED: 'PlayerPlaybackBlocked',
    /**
     * A fatal error occured
     * @param {string} error.type - Error type from 'error.js'
     * @param {string} error.message - human readable description
     */
    ERROR: 'PlayerError',
    /**
     * A tracking event as been emited. Should be sent to Spade
     * @param {string} event.name - Name of tracking event
     * @param {object} event.properties - key-value pairs to store
     */
    TRACKING: 'PlayerTracking',
    /**
     * The playback timeupdate event - web only
     * Updated functions:
     *     getPosition()
     */
    TIME_UPDATE: 'PlayerTimeUpdate',
    /**
     * More data has been added to the end of the buffer
     * Updated value:
     *     getPosition() + getBufferDuration()
     *     getBuffered()
     */
    BUFFER_UPDATE: 'PlayerBufferUpdate',
    /**
     * A Seek request was completed
     * @param {number} time The position seek completed ended
     */
    SEEK_COMPLETED: 'PlayerSeekCompleted',
    /**
     * Profiler event with profiler data
     * @param {string} event The profiler event name
     */
    PROFILE: 'PlayerProfile',
    /**
     * Updates the twitch playlist tracking properties
     * @param {Object} playlist properties that have changed
     */
    TWITCH_INFO: 'PlayerTwitchInfo',
    /**
     * Notifies a failed API call inside the worker message handler
     * @param {string} message The message of exception
     */
    WORKER_ERROR: 'PlayerWorkerError',
    /**
     * Generic Timed metadata
     */
    TIMED_METADATA: 'TimedMetadata',
};


/***/ }),

/***/ "./platforms/web/js/event/profile.js":
/*!*******************************************!*\
  !*** ./platforms/web/js/event/profile.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    PLAYER_LOADED_IN_WORKER: 'player_loaded_in_worker',
    HLS_MASTER_PLAYLIST_REQUEST: 'master_manifest_request',
    HLS_MASTER_PLAYLIST_READY: 'master_manifest_ready',
    HLS_MEDIA_PLAYLIST_REQUEST: 'variant_request',
    HLS_MEDIA_PLAYLIST_READY: 'variant_ready'
}


/***/ }),

/***/ "./platforms/web/js/event/state.js":
/*!*****************************************!*\
  !*** ./platforms/web/js/event/state.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Publicly exposed state change events (listen with `addEventListener()`).
 * One of these is fired whenever `getPlayerState` changes. The getters that
 * are updated with each state change are listed below. The string values of
 * each state MUST match the string representation of the 'State' enum in player.hpp.
 */
module.exports = {
    /**
     * Player is idle (paused). This is the initial state
     * Updated functions:
     *     getPlayerState()
     */
    IDLE: 'Idle',
    /**
     * Player is ready for playback, meaning load was successfully called.
     * Updated functions:
     *     getPlayerState()
     *     getQualities()
     *     getManifestInfo()
     */
    READY: 'Ready',
    /**
     * Player is buffering for data from network or file. This happens on
     * load, when seeking, or when the buffer empties ('bad' buffering)
     * Updated functions:
     *     getPlayerState()
     */
    BUFFERING: 'Buffering',
    /**
     * Playback has resumed
     * Updated functions:
     *     getPlayerState()
     */
    PLAYING: 'Playing',
    /**
     * Player has reached the end of the stream.
     * Updated functions:
     *     getPlayerState()
     */
    ENDED: 'Ended',
};


/***/ }),

/***/ "./platforms/web/js/mediaplayer.js":
/*!*****************************************!*\
  !*** ./platforms/web/js/mediaplayer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var EventEmiter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var MediaSink = __webpack_require__(/*! ./mediasink */ "./platforms/web/js/mediasink.js");
var Browser = __webpack_require__(/*! ./browser */ "./platforms/web/js/browser.js");
var WorkerMessage = __webpack_require__(/*! ./message/worker */ "./platforms/web/js/message/worker.js");
var ClientMessage = __webpack_require__(/*! ./message/client */ "./platforms/web/js/message/client.js");
var KEY_SYSTEMS = __webpack_require__(/*! ./drm/constants */ "./platforms/web/js/drm/constants.js").KEY_SYSTEMS;

// Export events and states to public consumers
var PlayerEvent = exports.PlayerEvent = __webpack_require__(/*! ./event/player */ "./platforms/web/js/event/player.js");
var PlayerState = exports.PlayerState = __webpack_require__(/*! ./event/state */ "./platforms/web/js/event/state.js");
var MetadataEvent = exports.MetadataEvent = __webpack_require__(/*! ./event/metadata */ "./platforms/web/js/event/metadata.js");
var ErrorType = exports.ErrorType = __webpack_require__(/*! ./error/type */ "./platforms/web/js/error/type.js");
var ErrorSource = exports.ErrorSource = __webpack_require__(/*! ./error/source */ "./platforms/web/js/error/source.js");
var ProfileEvent = exports.Profile = exports.ProfileEvent = __webpack_require__(/*! ./event/profile */ "./platforms/web/js/event/profile.js");

// Chrome 63 and Opera have an issue (crbug.com/779962) that heavily throttle video in a
// background tab while silent. So, we need to stop playback in that circumstance.
var PAUSE_HIDDEN_SILENT_TAB = (
    (Browser.name === 'chrome' && Browser.major === 63)
    || Browser.name === 'opera'
);

// Prefix all localstorage keys to avoid namespace collisions
var LOCAL_STORAGE_PREFIX = 'cvp.';

/** MediaPlayer constructor. This is the main export of PlayerCore
 *  @param {string} config.settings - Settings ID to load
 *  @param {string} config.logLevel - One of ['debug', 'info', 'warning', 'error']
 *  @param {Worker} worker - The worker instance to use
 */
var MediaPlayer = exports.MediaPlayer = function MediaPlayer(config, worker) {
    this._worker = worker;
    this._id = genUniqueID();
    this._emitter = new EventEmiter();
    this._seekTime = null;
    this._isPaused = true;
    this._isLoaded = false;
    this._isQualitySupported = config.isQualitySupported || defaultIsQualitySupported;
    this._onvisibilitychange = this._onVisibilityChange.bind(this);
    this._onmessage = this._onWorkerMessage.bind(this);
    this._mediaSink = new MediaSink({
        ontimeupdate: this._onSinkTimeUpdate.bind(this),
        onbufferupdate: this._onSinkBufferUpdate.bind(this),
        onidle: this._onSinkIdle.bind(this),
        onstop: this._onSinkStop.bind(this),
        onerror: this._onSinkError.bind(this),
    });

    // This represents cached state from the worker. State objects
    // like this one are sent from the worker on when the player
    // state changes. This represents cached state from the worker.
    this._state = {
        looping: false,
        autoSwitchQuality: true,
    };
    this._stats = {};
    this._resetState();

    // Setup mediaplayer-worker connections
    this._attachHandlers();

    // Create a companion instance instance in the worker.
    this._postMessage(WorkerMessage.CREATE, {
        settings: loadSettings(config.settings),
        logLevel: String(config.logLevel), // must be a string
        localStorage: getLocalStorage(LOCAL_STORAGE_PREFIX),
        clientTrackingInfo: getClientTrackingInfo(),
        mseSupported: isMSESupported(),
        keySystem: getSupportedKeySystem(Browser),
    });

    // Not needed anymore, but still need to emit async for backwards compatibility
    setTimeout(function () {
        this._emitter.emit(PlayerEvent.INITIALIZED);
    }.bind(this), 0);
}

// Public interface

MediaPlayer.createWorker = function (workerUrl, wasmUrl, wasmCache) {
    // Resolve relative urls in worker based on worker url
    var importFunction = `
        var Module = {
            WASM_BINARY_URL: '${wasmUrl}',
            WASM_CACHE_MODE: ${wasmCache}
        }
        importScripts('${workerUrl}');
    `;
    return new Worker(URL.createObjectURL(new Blob([importFunction])));
}

MediaPlayer.prototype.delete = function () {
    this._postMessage(WorkerMessage.DELETE);
    this._worker.removeEventListener('message', this._onmessage);
    document.removeEventListener('visibilitychange', this._onvisibilitychange);
    this._mediaSink.delete();
    this._worker = null;
    this._mediaSink = null;
    this._emitter = null;
}

MediaPlayer.prototype.getHTMLVideoElement = function () {
    return this._mediaSink.videoElement();
}

/**
 * Loads the given stream.
 *
 * @param path of the stream to load (e.g. a url or file)
 * @param mediaType Media type of the content if known, e.g. "video/mp4" or "application/x-mpegURL"
 */
MediaPlayer.prototype.load = function (path, mediaType) {
    this._postMessage(WorkerMessage.LOAD, {
        path: path,
        mediaType: mediaType || '',
    });
    this._resetState();
}

MediaPlayer.prototype.play = function () {
    this._mediaSink.captureGesture();
    this._isPaused = false;
    this._attemptPlay();
}

MediaPlayer.prototype.pause = function () {
    this._isPaused = true;
    this._postMessage(WorkerMessage.PAUSE);
}

MediaPlayer.prototype.isPaused = function () {
    return this._isPaused;
}

MediaPlayer.prototype.seekTo = function (time) {
    // TODO: Handle seeking to very end correctly
    var MIN_DUR_FROM_END = 0.5;
    if (this.getDuration() > MIN_DUR_FROM_END) {
        time = Math.min(time, this.getDuration() - MIN_DUR_FROM_END);
    }
    time = Math.max(0, time);

    // Store seek time so we can return this position until the seek completes
    this._seekTime = time;
    this._postMessage(WorkerMessage.SEEK_TO, time);
}

MediaPlayer.prototype.isSeeking = function () {
    return this._seekTime !== null;
}

MediaPlayer.prototype.getVideoSrc = function () {
    return this._mediaSink.videoElement().src;
}

MediaPlayer.prototype.getDuration = function () {
    // When playing native mp4s, the duration comes from the video
    // element. We can assume that the video element's duration is
    // valid if our cached duration is 0.
    return this._state.duration || this._mediaSink.videoElement().duration;
}

MediaPlayer.prototype.getStartOffset = function () {
    return this._state.startOffset;
}

MediaPlayer.prototype.getPosition = function () {
    return (this._seekTime === null) ? this._mediaSink.currentTime() : this._seekTime;
}

MediaPlayer.prototype.getBuffered = function () {
    return this._mediaSink.buffered();
}

MediaPlayer.prototype.getBufferDuration = function () {
    return this._mediaSink.bufferDuration();
}

MediaPlayer.prototype.getPlayerState = function () {
    return this._state.playerState;
}

MediaPlayer.prototype.getVideoWidth = function () {
    return this._mediaSink.videoElement().videoWidth;
}

MediaPlayer.prototype.getVideoHeight = function () {
    return this._mediaSink.videoElement().videoHeight;
}

MediaPlayer.prototype.getVideoFrameRate = function () {
    return this._stats.videoFrameRate;
}

MediaPlayer.prototype.getVideoBitRate = function () {
    return this._stats.videoBitRate;
}

MediaPlayer.prototype.getVersion = function () {
    return "2.3.0-b15d644a";
}

MediaPlayer.prototype.isLooping = function () {
    return this._state.looping;
}

MediaPlayer.prototype.setLooping = function (loop) {
    this._postMessage(WorkerMessage.SET_LOOPING, loop);
    this._state.looping = loop;
}

MediaPlayer.prototype.isMuted = function () {
    return this._mediaSink.videoElement().muted;
}

MediaPlayer.prototype.setMuted = function (mute) {
    this._mediaSink.videoElement().muted = mute;
    this._postMessage(WorkerMessage.SET_MUTED, mute);
    this._emitter.emit(PlayerEvent.MUTED_CHANGED);
}

MediaPlayer.prototype.setVolume = function (volume) {
    this._mediaSink.videoElement().volume = volume;
    this._postMessage(WorkerMessage.SET_VOLUME, volume);
    this._emitter.emit(PlayerEvent.VOLUME_CHANGED);
}

MediaPlayer.prototype.getVolume = function () {
    return this._mediaSink.videoElement().volume;
}

MediaPlayer.prototype.getQuality = function () {
    return this._state.quality;
}

MediaPlayer.prototype.setQuality = function (quality) {
    this._postMessage(WorkerMessage.SET_QUALITY, quality);
}

MediaPlayer.prototype.getQualities = function () {
    return this._state.qualities;
}

MediaPlayer.prototype.getAutoSwitchQuality = function () {
    return this._state.autoSwitchQuality;
}

MediaPlayer.prototype.setAutoSwitchQuality = function (enable) {
    this._postMessage(WorkerMessage.SET_AUTO_SWITCH_QUALITY, enable);
}

MediaPlayer.prototype.setAutoMaxVideoSize = function (width, height) {
    this._postMessage(WorkerMessage.SET_AUTO_MAX_VIDEO_SIZE, {width:width, height:height});
}

MediaPlayer.prototype.getPlaybackRate = function () {
    return this._mediaSink.videoElement().playbackRate;
}

MediaPlayer.prototype.setPlaybackRate = function (rate) {
    this._postMessage(WorkerMessage.SET_PLAYBACK_RATE, rate);
}

MediaPlayer.prototype.setAdInsertionEnabled = function (enable) {
    this._postMessage(WorkerMessage.SET_AD_INSERTION_ENABLED, enable);
}

/**
 * Sets a target live latency, during buffering events if the latency would exceed this value
 * the live stream will be re-syncd to the live window to prevent the latency exceeding this
 * value.
 * @param {number} latency max latency before attempting to skip content during live playback
 */
MediaPlayer.prototype.setLiveMaxLatency = function (latency) {
    this._postMessage(WorkerMessage.SET_LIVE_MAX_LATENCY, latency);
}

/**
 * Enables low latency playback for streams which support it. Defaults to true, changing the
 * value during playback will restart the stream.
 *
 * @param {boolean} enable true to enable, false to disable
 */
MediaPlayer.prototype.setLiveLowLatencyEnabled = function (enable) {
    this._postMessage(WorkerMessage.SET_LIVE_LOW_LATENCY_ENABLED, enable);
}

/**
 * Sets the minimum buffer size needed to start playback.
 * @param {number} duration duration of buffer to set in seconds
 */
MediaPlayer.prototype.setMinBuffer = function (duration) {
    this._postMessage(WorkerMessage.SET_MIN_BUFFER, duration);
}

/**
 * Sets the target buffer size to buffer ahead of the playhead.
 * @param {number} duration duration of buffer to set in seconds
 */
MediaPlayer.prototype.setMaxBuffer = function (duration) {
    this._postMessage(WorkerMessage.SET_MIN_BUFFER, duration);
}

MediaPlayer.prototype.setAnalyticsSendEvents = function (enable) {
    this._postMessage(WorkerMessage.SET_ANALYTICS_SEND_EVENTS, enable);
}

// Extra Functions

MediaPlayer.prototype.addEventListener = function (name, fn) {
    this._emitter.on(name, fn);
};

MediaPlayer.prototype.removeEventListener = function (name, fn) {
    this._emitter.removeListener(name, fn);
};

MediaPlayer.prototype.getDroppedFrames = function () {
    return this._mediaSink.droppedFrames();
}

MediaPlayer.prototype.getDecodedFrames = function () {
    return this._mediaSink.decodedFrames();
}

MediaPlayer.prototype.getDisplayWidth = function () {
    return this._mediaSink.videoElement().clientWidth;
}

MediaPlayer.prototype.getDisplayHeight = function () {
    return this._mediaSink.videoElement().clientHeight;
}

MediaPlayer.prototype.getManifestInfo = function () {
    return this._state.twitchInfo;
}

/**
 * @returns {number} broadcast latency in seconds
 */
MediaPlayer.prototype.getLiveLatency = function () {
    return this._stats.broadcasterLatency;
}

/**
 * @deprecated use getLiveLatency
 * @returns {number} broadcast latency in milliseconds
 */
MediaPlayer.prototype.getBroadcasterLatency = function () {
    return this._stats.broadcasterLatency * 1000;
}

/**
 * @deprecated use getLiveLatency
 * @returns {number} transcoder latency in milliseconds
 */
MediaPlayer.prototype.getTranscoderLatency = function () {
    return this._stats.transcoderLatency * 1000;
}

MediaPlayer.prototype.getNetworkProfile = function () {
    return this._stats.networkProfile;
}

/**
 * @returns {boolean} Are we playing DRM content
 */
MediaPlayer.prototype.isProtected = function () {
    return this._mediaSink.isProtected();
};

/**
 * @returns {string} URL to the current playing source
 */
MediaPlayer.prototype.getSourceUrl = function () {
    return this._mediaSink.srcUrl();
};

// private helpers

MediaPlayer.prototype._attemptPlay = function () {
    // Can't start playing if we're in a background tab
    // or we've loaded but haven't received 'READY'
    if (!document.hidden && this._isLoaded) {
        this._postMessage(WorkerMessage.PLAY);
    }
}

MediaPlayer.prototype._postMessage = function (type, arg) {
    this._worker.postMessage({
        id: this._id,
        type: type,
        arg: arg
    });
}

MediaPlayer.prototype._resetState = function () {
    // Initial values for each new session (call to 'load')
    objectAssign(this._state, {
        playerState: PlayerState.Idle,
        quality: {name:'',group:'',codecs:'',bitrate:0,width:0,height:0,framerate:0},
        qualities: [],
        duration: 0,
        startOffset: 0,
        twitchInfo: {},
    });

    // Statistics calculated in the client
    objectAssign(this._stats, {
        videoBitRate: 0,
        videoFrameRate: 0, // fps in Hz
        broadcasterLatency: 0, // seconds of end-to-end latency
        transcoderLatency: 0, // seconds of latency from gotranscoder to the player
        networkProfile: [], // moving window of network stats for segment downloads
    });

    this._emitter.emit(PlayerEvent.DURATION_CHANGED, {
        duration: 0,
    })

    this._seekTime = null;
    this._isLoaded = false;
}

MediaPlayer.prototype._attachHandlers = function () {
    // Attach browser event handlers
    this._worker.addEventListener('message', this._onmessage);
    document.addEventListener('visibilitychange', this._onvisibilitychange);

    // Attach internal event handlers
    var em = this._emitter,
        sink = this._mediaSink,
        updateState = function (state) {
            objectAssign(this._state, state);
        }.bind(this);
    em.on(PlayerEvent.QUALITY_CHANGED, updateState);
    em.on(PlayerEvent.AUTO_SWITCH_QUALITY_CHANGED, updateState);
    em.on(PlayerEvent.DURATION_CHANGED, updateState);
    em.on(PlayerEvent.VOLUME_CHANGED, this._onVolumeChanged.bind(this));
    em.on(PlayerEvent.MUTED_CHANGED, this._onMutedChanged.bind(this));
    em.on(PlayerEvent.SEEK_COMPLETED, this._onSeekCompleted.bind(this));
    em.on(PlayerEvent.ERROR, this._onError.bind(this));
    em.on(PlayerEvent.TWITCH_INFO, this._onTwitchInfo.bind(this));
    em.on(ClientMessage.STATS, function (stats) {
        objectAssign(this._stats, stats);
    }.bind(this));
    em.on(ClientMessage.STATE_CHANGED, this._onStateChanged.bind(this));
    em.on(ClientMessage.SAVE_ITEM, this._saveItem.bind(this));
    em.on(ClientMessage.CONFIGURE, sink.configure.bind(sink));
    em.on(ClientMessage.ENQUEUE, sink.enqueue.bind(sink));
    em.on(ClientMessage.SET_TIMESTAMP_OFFSET, sink.setTimestampOffset.bind(sink));
    em.on(ClientMessage.PLAY, this._startPlayback.bind(this));
    em.on(ClientMessage.PAUSE, sink.pause.bind(sink));
    em.on(ClientMessage.REMOVE, sink.remove.bind(sink));
    em.on(ClientMessage.RESET, sink.reset.bind(sink));
    em.on(ClientMessage.SEEK_TO, sink.seekTo.bind(sink));
    em.on(ClientMessage.SET_PLAYBACK_RATE, sink.setPlaybackRate.bind(sink));
    em.on(ClientMessage.ADD_CUE, this._addCue.bind(this));
    em.on(MetadataEvent.ID3, this._onID3.bind(this));
};

MediaPlayer.prototype._onVolumeChanged = function () {
    if (PAUSE_HIDDEN_SILENT_TAB && document.hidden && this.getVolume() === 0) {
        this._postMessage(WorkerMessage.PAUSE);
    }
};

MediaPlayer.prototype._onMutedChanged = function () {
    if (PAUSE_HIDDEN_SILENT_TAB && document.hidden && this.isMuted()) {
        this._postMessage(WorkerMessage.PAUSE);
    }
};

MediaPlayer.prototype._onSeekCompleted = function () {
    this._seekTime = null;

    // Player-UI expects a 'PLAYING' event after seeking to stop buffer wheel.
    // TODO: update Player-UI to show buffer wheel only in BUFFERING state
    if (this.getPlayerState() === PlayerState.PLAYING) {
        this._emitter.emit(PlayerState.PLAYING);
    }
};

MediaPlayer.prototype._onError = function () {
    this._isPaused = true;
}

MediaPlayer.prototype._onStateChanged = function (state) {
    // Perform state specific updates
    switch (state.playerState) {
        case PlayerState.READY:
            // Only expose supported qualities to consumers
            var qualities = this._filterQualities(state.qualities);
            state.qualities = qualities.supported;
            this._postMessage(WorkerMessage.REMOVE_QUALITIES, qualities.unsupported);

            // We can now send 'PLAY' since we've removed any unplayable qualities
            this._isLoaded = true;

            // Start playback if we've already tried
            if (!this._isPaused) {
                this._attemptPlay();
            }
            break;
        case PlayerState.ENDED:
            this._isPaused = true;
            break;
    }

    // Updated cached state
    objectAssign(this._state, state);

    // Emit state update event. Don't emit 'PLAYING', since
    // we'll emit that once playback actually begins.
    if (state.playerState !== PlayerState.PLAYING) {
        this._emitter.emit(state.playerState);
    }
}

MediaPlayer.prototype._filterQualities = function (qualities) {
    var supported = []
    var unsupported = [];
    qualities.forEach(function (quality) {
        if (this._isQualitySupported(quality)) {
            supported.push(quality);
        } else {
            unsupported.push(quality);
        }
    }, this);

    return {
        supported: supported,
        unsupported: unsupported,
    }
}

MediaPlayer.prototype._saveItem = function (item) {
    // IE11 sometimes errors when accessing localStorage
    try {
        localStorage.setItem(LOCAL_STORAGE_PREFIX + item.key, item.value);
    } catch (e) {}
}

MediaPlayer.prototype._startPlayback = function () {
    this._mediaSink.play().then(function () {
        // Emit PLAYING state change once playback actaully begins.
        // This allows us to detect playback-blocked first
        this._emitter.emit(PlayerState.PLAYING);
    }.bind(this)).catch(noop); // catch to prevent logged warning
}

MediaPlayer.prototype._addCue = function (cue) {
    this._mediaSink.addCue(cue.time, cue.duration, function () {
        this._postMessage(WorkerMessage.SINK_CUE, cue.time);
    }.bind(this));
}

MediaPlayer.prototype._onID3 = function (id3) {
    id3.forEach(function (frame) {
        if (frame.id === 'TXXX' && frame.desc === 'segmentmetadata' && frame.info.length) {
            var info = safeParseJSON(frame.info[0]);
            if (info.hasOwnProperty('stream_offset')) {
                var offset = Number(info['stream_offset'])
                if (!isNaN(offset)) {
                    this._state.startOffset = offset - this.getPosition();
                }
            }
        }
    }.bind(this));
}

// listeners and handlers

MediaPlayer.prototype._onVisibilityChange = function () {
    if (!this._isPaused && !document.hidden) {
        // Start playback if we switched to 'playing' while hidden
        // May send an extraneous PLAY message if already playing
        this._attemptPlay()
    }

    // Chrome 63 bug: crbug.com/779962
    if (
        PAUSE_HIDDEN_SILENT_TAB
        && !this._isPaused
        && document.hidden
        && (this.isMuted() || this.getVolume() === 0)
    ) {
        this._postMessage(WorkerMessage.PAUSE);
    }
};

MediaPlayer.prototype._onSinkTimeUpdate = function () {
    if (this._seekTime === null) {
        this._postMessage(WorkerMessage.SINK_UPDATE, {
            currentTime: this._mediaSink.currentTime(),
            decodedFrames: this._mediaSink.decodedFrames(),
            droppedFrames: this._mediaSink.droppedFrames()
        });
        this._emitter.emit(PlayerEvent.TIME_UPDATE);
    }
}

MediaPlayer.prototype._onSinkBufferUpdate = function () {
    this._emitter.emit(PlayerEvent.BUFFER_UPDATE);
}

MediaPlayer.prototype._onSinkIdle = function () {
    this._postMessage(WorkerMessage.SINK_IDLE);
}

MediaPlayer.prototype._onSinkStop = function () {
    if (document.hidden) {
        // If we're stopped while hidden, internally pause.
        // We'll attempt to resume when we become visible again.
        this._postMessage(WorkerMessage.PAUSE);
    } else if (!this.isMuted()) {
        // "autoplay" can be blocked for video with sound.
        // Retry playback while muted
        this.setMuted(true);
        this._startPlayback();
        this._emitter.emit(PlayerEvent.AUDIO_BLOCKED);
    } else {
        // "autoplay" completely blocked. Nothing we can do other than pause
        this.pause();
        this._emitter.emit(PlayerEvent.PLAYBACK_BLOCKED);
    }
};

MediaPlayer.prototype._onSinkError = function (mediaError) {
    this._postMessage(WorkerMessage.SINK_ERROR, mediaError);
};

MediaPlayer.prototype._onTwitchInfo = function (properties) {
    objectAssign(this._state, properties);
};

// Handle state updates and RPCs from worker
MediaPlayer.prototype._onWorkerMessage = function (evt) {
    var msg = evt.data;

    // Ignore messages to other instances
    if (msg.id === this._id) {
        this._emitter.emit(msg.type, msg.arg);
    }
};

// utilities

function noop() {}

var genUniqueID = (function () {
    var id = 0;
    return function () { return id++; };
}());

function safeParseJSON(jsonStr) {
    try {
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error('Failed JSON parse:', jsonStr);
        return {};
    }
}

/**
 * @returns {boolean} true if MSE (MediaSource Extensions) is supported by the browser, false otherwise.
 */
function isMSESupported() {
    return (typeof MediaSource !== 'undefined')
}

/**
 * @returns {string} UUID of the supported key system, or empty if no supported keysystem.
 */
function getSupportedKeySystem(browser) {
    // Safari
    if (window.WebKitMediaKeys && typeof WebKitMediaKeys.isTypeSupported === 'function') {
        if (WebKitMediaKeys.isTypeSupported(KEY_SYSTEMS.FAIRPLAY.keySystem)) {
            return KEY_SYSTEMS.FAIRPLAY.uuid
        }
    }

    // We can't synchronously check playready or widevine
    if (typeof navigator.requestMediaKeySystemAccess === 'function') {
        switch (browser.name) {
        case 'edge':
        case 'ie':
            return KEY_SYSTEMS.PLAYREADY.uuid;
        default:
            return KEY_SYSTEMS.WIDEVINE.uuid;
        }
    }

    return '';
}

/**
 * @returns {boolean} true if VP9 video is supported by the browser, false otherwise
 */
MediaPlayer.isVP9Supported = function () {
    return isMSESupported() && MediaSource.isTypeSupported("video/mp4;codecs=\"vp09.00.10.08\"");
}

// IE doesn't support 'objectAssign'. We only use it
// with one source, so this simple definition will suffice.
function objectAssign(target, source) {
    for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
            target[prop] = source[prop];
        }
    }
    return target;
}

function defaultIsQualitySupported(quality) {
    // In case of variant manifest urls quality codec strings is empty and we should support those
    return quality.codecs === '' || MediaSource.isTypeSupported('video/mp4;codecs="' + quality.codecs + '"');
};

function getLocalStorage(prefix) {
    var storage = Object.create(null);
    // IE11 sometimes errors when accessing localStorage
    try {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.substr(0, prefix.length) === prefix) {
                storage[key.substr(prefix.length)] = localStorage.getItem(key);
            }
        }
    } catch (e) {
        console.warn('localStorage not available:', e);
    }
    return storage;
}

// This dynamic require statement will bundle all files
// in the 'settings' directory, and make them each available.
// If the setting doesn't exits, we return empty (default) settings
function loadSettings(settings) {
    try {
        return __webpack_require__("./settings sync recursive ^\\.\\/.*\\.json$")("./" + settings + '.json');
    } catch(e) {
        return {};
    }
}

function getClientTrackingInfo() {
    var renderer, vendor;

    try {
        var canvas = document.createElement('canvas');
        var glContext = canvas.getContext('experimental-webgl');
        var debugInfo = glContext.getExtension("WEBGL_debug_renderer_info");
        renderer = glContext.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        vendor = glContext.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    } catch (e) {
        console.error('webgl context not available', e);
    }

    return {
        'gl_renderer': renderer || '',
        'gl_vendor': vendor || '',
    }
}


/***/ }),

/***/ "./platforms/web/js/mediasink.js":
/*!***************************************!*\
  !*** ./platforms/web/js/mediasink.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var DRMManager = __webpack_require__(/*! ./drmmanager */ "./platforms/web/js/drmmanager.js");
var Queue = __webpack_require__(/*! ./queue */ "./platforms/web/js/queue.js");
var Promise = global.Promise || __webpack_require__(/*! promise-polyfill */ "./node_modules/promise-polyfill/promise.js");

// constants
var UNKNOWN = -1;
var NOT_SUPPORTED = 4; // HTMLMediaElement error code

// configurations
var MIN_PLAYABLE_BUFFER = 0.1; // consider buffers smaller than this as empty
var HEARTBEAT_INTERVAL = 2000; // Interval to check for stalled

/**
 * MediaSink implements the "MediaSink" interface in javascript
 * This unfortunatly has to live in the client since it must access
 * the DOM. MediaSink handles all MSE logic.
 * @param {function()} config.ontimeupdate - playhead position has changed
 * @param {function()} config.onbufferupdate - buffered range has changed
 * @param {function()} config.onidle - fired when playback interrupted while playing
 * @param {function()} config.onstop - fired when playback paused by browers
 * @param {function(MediaError)} config.onerror - video error with error code
 */
var MediaSink = module.exports = function MediaSink(config) {
    this._video = document.createElement('video');
    this._metadataTrack = this._video.addTextTrack('metadata');
    this._codecs = Object.create(null);
    this._onerror = config.onerror;
    this._srcUrl = '';
    this._playbackMonitor = new PlaybackMonitor(this._video, config);
    this._drmManager = new DRMManager({
        video: this._video,
        onerror: this._onerror
    });

    this.reset();
};

/**
 * Prepare for video playback
 */
MediaSink.prototype.configure = function (track) {
    if (track.path) {
        this._srcUrl = track.path;
        // Update authxml path
        this._drmManager.configure(track.path);

        // Add a native source directly
        if (track.passthrough) {
            this._video.src = track.path;
            return;
        }
    }

    var video = this._video; // Capture 'video' so we don't need to bind 'this'
    var trackID = track.trackID;
    var codec = track.codec;
    if (codec) {
        this._codecs[trackID] = codec;
    } else {
        codec = this._codecs[trackID];
    }

    // Lazily attach a new MediaSource
    if (!this._mediaSource) {
        // Attach a new MediaSource
        this._mediaSource = new Promise(function (resolve, reject) {
            var mediaSource = new MediaSource();
            mediaSource.addEventListener('sourceopen', function onSourceOpen() {
                mediaSource.removeEventListener('sourceopen', onSourceOpen);
                // This can be fired even if the source has already been removed
                if (mediaSource.readyState === 'open') {
                    mediaSource.duration = 1<<30; // ~34 years
                    resolve(mediaSource);
                } else {
                    reject(new Error('MediaSource not opened'));
                }
            });
            video.src = URL.createObjectURL(mediaSource);
        });
    }

    // Add track if it doesn't exist
    if (!(trackID in this._tracks)) {
        var track = this._mediaSource.then(function (mediaSource) {
            var srcBuf = mediaSource.addSourceBuffer('video/mp4;' + codec);
            return new SafeSourceBuffer(video, srcBuf)
        });

        // Want to leave promise in tracks map rejected
        // to block any future calls to 'enqueue'
        track.catch(function (e) {
            this._onerror({
                code: NOT_SUPPORTED,
                message: e.toString(),
            });
        }.bind(this));

        this._tracks[trackID] = track;
    }
};

/**
 * Enqueue an audio buffer
 * @param {TypedArray} buf - fmp4 audio buffer
 */
MediaSink.prototype.enqueue = function (sample) {
    var track = this._tracks[sample.trackID];
    if (track) {
        track.then(function (srcBuf) {
            srcBuf.appendBuffer(sample.buffer);
        }, noop); // Error already sent when track failed to configure
    }
};

MediaSink.prototype.setTimestampOffset = function (update) {
    var track = this._tracks[update.trackID];
    if (track) {
        track.then(function (srcBuf) {
            srcBuf.setTimestampOffset(update.offset)
        }, noop) // Error already sent when track failed to configure
    }
}

/**
 * In mobile and cellular data environment, the first call to play/pause
 * has to happen as part of the user's intent to play. This function provides
 * a noop to do this, and should be called from within a user gesture so we
 * can programmatically play later.
 */
MediaSink.prototype.captureGesture = function () {
    if (this._video.paused) {
        Promise.resolve(this._video.play()).catch(noop);
        this._video.pause();
    }
};

/**
 * Start/resume playback
 */
MediaSink.prototype.play = function () {
    return this._playbackMonitor.play();
};

/**
 * Stop playback
 */
MediaSink.prototype.pause = function () {
    this._playbackMonitor.pause();
};

/**
 * Clear all media and return to initial state
 * Resets all stats such as droppedFrames, etc.
 */
MediaSink.prototype.reset = function () {
    this._mediaSource = null;
    this._tracks = Object.create(null);
    this._srcUrl = '';
    this._playbackMonitor.pause();
    this._drmManager.reset();

    removeCues(this._metadataTrack, 0, Infinity);

    // Detach MediaSource
    if (this._video.src) {
        var src = this._video.src;
        this._video.removeAttribute('src');
        this._video.load(); //https://github.com/w3c/media-source/issues/53
        URL.revokeObjectURL(src);
    }
};

/**
 * Remove a range of buffered media
 * @param {number} range.start - start of range to remove
 * @param {number} range.end - end of range to remove
 */
MediaSink.prototype.remove = function (range) {
    var start = range.start,
        end = range.end;

    function removeRange(srcBuf) {
        srcBuf.remove(start, end);
    }
    for (var key in this._tracks) {
        this._tracks[key].then(removeRange);
    }

    // Handle metadata track explicitly
    removeCues(this._metadataTrack, start, end);
};

/**
 * Move to playhead to a new position
 * @param {number} playhead - position of new playhead
 */
MediaSink.prototype.seekTo = function (playhead) {
    var buffered = getBufferedRange(this._video);
    if (playhead >= buffered.start && playhead < buffered.end) {
        // If we're seeking within the buffer, wait for pending operations
        function schedulePromise(track) {
            return new Promise(function (resolve) {
                track.schedule(resolve);
            });
        }
        var promises = [];
        for (var key in this._tracks) {
            promises.push(this._tracks[key].then(schedulePromise));
        }
        Promise.all(promises).then(function () {
            this._video.currentTime = playhead
        }.bind(this));
    } else {
        this._video.currentTime = playhead;
    }
};

/**
 * Set the playback rate
 * @param {number} rate - multiplier to the default rate
 */
MediaSink.prototype.setPlaybackRate = function (rate) {
    this._video.playbackRate = rate;
};

/**
 * Add a cue that will be fired when the playhead crosses
 * the specified time. Only fired once.
 * @param {number} time - when to fire the cue
 * @param {number} duration - duration of the cue
 * @param {function} onCue - called when the cue is fired
 */
MediaSink.prototype.addCue = function (time, duration, onCue) {
    // endTime must be larger than startTime on Edge
    if (duration <= 0) {
        duration = 1;
    }
    // `var VTTCue` was in closure scope. However, with videojs hls tech,
    // gloval.VTTCue is temporarily polyfilled on Edge and then restored.
    // So avoiding closure scope. More details - https://jira.twitch.com/browse/CVP-2513
    var VTTCue = global.VTTCue || global.TextTrackCue;
    var cue = new VTTCue(time, time + duration, '');
    cue.onenter = onCue;
    this._metadataTrack.addCue(cue);
};

/**
 * @return {Number} Position of the playhead in the timeline
 */
MediaSink.prototype.currentTime = function () {
    return this._video.currentTime;
};

/**
 * @return {Number} buffered.start - start of current buffer
 * @return {Number} buffered.end - end of current buffer
 */
MediaSink.prototype.buffered = function () {
    return getBufferedRange(this._video);
};

/**
 * @return {Number} Duration of the current buffer
 */
MediaSink.prototype.bufferDuration = function () {
    return getBufferedRange(this._video).end - this._video.currentTime;
};

/**
 * Frames decoded in this stream. Reset in 'reset'
 * @return {number} num decoded frames
 */
MediaSink.prototype.decodedFrames = function () {
    if (typeof this._video.webkitDecodedFrameCount === 'number') {
        return this._video.webkitDecodedFrameCount;
    } else if (typeof this._video.mozDecodedFrames === 'number') {
        return this._video.mozDecodedFrames;
    } else {
        return UNKNOWN;
    }
};

/**
 * Frames dropped in this stream. Reset in 'reset'
 * @return {number} num dropped frames
 */
MediaSink.prototype.droppedFrames = function () {
    if (typeof this._video.webkitDroppedFrameCount === 'number') {
        return this._video.webkitDroppedFrameCount;
    } else if (typeof this._video.getVideoPlaybackQuality === 'function') {
        var info = this._video.getVideoPlaybackQuality();
        return info ? info.droppedVideoFrames : UNKNOWN;
    } else {
        return UNKNOWN;
    }
};

/**
 * Get the HTMLVideoElement we render to. This is a backdoor
 * to place the element in the DOM and access unexported attributes.
 * @return {HTMLVideoElement}
 */
MediaSink.prototype.videoElement = function () {
    return this._video;
};

/**
 * @returns {boolean} Are we playing DRM content
 */
MediaSink.prototype.isProtected = function () {
    return this._drmManager.isProtected();
};

/**
 * @returns {string} URL to current content
 */
MediaSink.prototype.srcUrl = function () {
    return this._srcUrl;
};

/**
 * Cleanup and shutdown. No functions on MediaSink may be called
 * on the instance after this.
 */
MediaSink.prototype.delete = function () {
    this.reset();
    this._playbackMonitor.delete();
    this._audioSource = null;
    this._videoSource = null;
    this._video = null;
    this._metadataTrack = null;
};

// internal

function noop() {}

// Remove all cues from the metadata track in the range
// Iterate backwards to preserve cue index
function removeCues(metaTrack, start, end) {
    var cues = metaTrack.cues;
    for (var c = cues.length-1; c >= 0; c--) {
        var cue = cues[c],
            time = cue.startTime;

        if (time < start) { break }
        if (time < end) {
            metaTrack.removeCue(cue);
        }
    }
}

/**
 * @return {Number} buffered.start - start of current buffer
 * @return {Number} buffered.end - end of current buffer
 */
function getBufferedRange(video) {
    var buffered = video.buffered;
    var playhead = video.currentTime;

    // Find buffered region containing playhead.
    // We only allow one buffered region.
    for (var i = 0; i < buffered.length; i++) {
        var start = buffered.start(i);
        var end = buffered.end(i);

        // keep looping until we find range containing playhead
        if (end <= playhead) {
            continue;
        }

        // No region contains playhead.
        // Consider MIN_PLAYABLE_BUFFER before start as part of this region
        if (start - MIN_PLAYABLE_BUFFER > playhead) {
            break;
        }

        // Include ranges past the end if there's a small gap
        for (var e = i + 1; e < buffered.length; e++) {
            if (buffered.start(e) - end > MIN_PLAYABLE_BUFFER) {
                break;
            }
            end = buffered.end(e);
        }

        // Include ranges before the start if there's a small gap
        for (var s = i - 1; s >= 0; s--) {
            if (start - buffered.end(s) > MIN_PLAYABLE_BUFFER) {
                break;
            }
            start = buffered.start(s);
        }

        return {start: Math.min(start, playhead), end: end};
    }

    return {start: playhead, end: playhead};
};

/**
 * SafeSourceBuffer wraps a SourceBuffer, and schedules
 * 'appendBuffer' and 'remove' operations correctly
 */
function SafeSourceBuffer(video, srcBuf) {
    this._video = video;
    this._srcBuf = srcBuf;
    this._pending = new Queue();
    this._srcBuf.addEventListener('updateend', this._process.bind(this));
}


/**
 * Append a media buffer
 * @param {TypedArray} buf - fmp4 media buffer
 */
SafeSourceBuffer.prototype.appendBuffer = function (buf) {
    this.schedule(function (srcBuf) {
        srcBuf.appendBuffer(buf);
    });
};

/**
 * Append a media buffer
 * @param {TypedArray} buf - fmp4 media buffer
 */
SafeSourceBuffer.prototype.setTimestampOffset = function (offset) {
    this.schedule(function (srcBuf) {
        srcBuf.timestampOffset = offset;
    });
};

/**
 * Remove range of buffered media
 * @param {number} start - start of range to remove
 * @param {number} end - end of range to remove
 */
SafeSourceBuffer.prototype.remove = function (start, end) {
    this.schedule(function (srcBuf) {
        srcBuf.remove(start, end);
    });
};

/**
 * Schedule a callback for when updating is over
 * @param {fn} callback - call after update ends
 */
SafeSourceBuffer.prototype.schedule = function (fn) {
    if (this._pending.empty() && !this._updating()) {
        fn(this._srcBuf);
    } else {
        this._pending.push(fn);
    }
};

/**
 * Try to process as many buffer updates as we can
 */
SafeSourceBuffer.prototype._process = function () {
    while (!this._pending.empty() && !this._updating()) {
        this._pending.pop()(this._srcBuf);
    }
};

SafeSourceBuffer.prototype._updating = function () {
    return (!this._srcBuf || this._srcBuf.updating || this._video.error !== null);
};

/**
 * Monitor playback and fire events accordingly
 */
function PlaybackMonitor(video, config) {
    this._onidle = config.onidle;
    this._onstop = config.onstop;
    this._onerror = config.onerror;
    this._onbufferupdate = config.onbufferupdate;
    this._ontimeupdate = config.ontimeupdate;

    this._video = video;
    this._intervalId = 0;
    this._onDelete = [];
    this._idle = true;
    this._paused = true;
    this._webkitFullScreen = false;
    this._lastPlayhead = 0;
    this._lastBufferEnd = 0;

    var addListener = function (type, handler) {
        this._video.addEventListener(type, handler);
        this._onDelete.push(function () {
            this._video.removeEventListener(type, handler);
        }.bind(this))
    }.bind(this);
    addListener('play', this._onVideoPlay.bind(this));
    addListener('pause', this._onVideoPause.bind(this));
    addListener('timeupdate', this._onVideoTimeUpdate.bind(this));
    addListener('error', this._onVideoError.bind(this));
    addListener('webkitbeginfullscreen', this._onWebkitBeginFullscreen.bind(this));
    addListener('webkitendfullscreen', this._onWebkitEndFullscreen.bind(this));
};

PlaybackMonitor.prototype.delete = function () {
    this._onDelete.forEach(function (fn) { fn() })
    clearInterval(this._intervalId);
    this._video = null;
};

PlaybackMonitor.prototype.play = function () {
    this._paused = false;
    var started = Promise.resolve(this._video.play());
    started.catch(this._checkStopped.bind(this));
    return started;
};

PlaybackMonitor.prototype.pause = function () {
    this._paused = true;
    this._video.pause();
};

PlaybackMonitor.prototype._onVideoPlay = function () {
    this._lastPlayhead = this._video.currentTime;
    clearInterval(this._intervalId);
    this._intervalId = setInterval(this._heartbeat.bind(this), HEARTBEAT_INTERVAL);
};

PlaybackMonitor.prototype._onVideoPause = function () {
    clearInterval(this._intervalId);
    this._checkStopped();
};

PlaybackMonitor.prototype._onVideoTimeUpdate = function () {
    this._ontimeupdate();
    var buffered = getBufferedRange(this._video);
    this._checkBufferUpdate(buffered);
    this._updateIdle(buffered);
};

PlaybackMonitor.prototype._onVideoError = function () {
    var error = this._video.error;
    this._onerror({
        code: error.code,
        message: error.message || '',
    });
};

PlaybackMonitor.prototype._onWebkitBeginFullscreen = function () {
    this._webkitFullScreen = true;
};

PlaybackMonitor.prototype._onWebkitEndFullscreen = function () {
    this._webkitFullScreen = false;
}

PlaybackMonitor.prototype._heartbeat = function () {
    if (this._video.paused) {
        // This shouldn't happen, but stop heartbeat
        // if we get into a bad state.
        clearInterval(this._intervalId);
    } else if (this._video.currentTime === this._lastPlayhead) {
        this._fixStall();
    } else {
        this._checkBufferUpdate(getBufferedRange(this._video));
        this._lastPlayhead = this._video.currentTime;
    }
};

PlaybackMonitor.prototype._checkBufferUpdate = function (buffered) {
    if (buffered.end !== this._lastBufferEnd) {
        this._lastBufferEnd = buffered.end;
        this._onbufferupdate();
    }
};

PlaybackMonitor.prototype._updateIdle = function (buffered) {
    if (this._video.paused) {
        this._idle = true;
    } else {
        var idle = (buffered.end - this._video.currentTime < MIN_PLAYABLE_BUFFER);
        if (idle && !this._idle) {
            this._onidle();
        }
        this._idle = idle;
    }
};

PlaybackMonitor.prototype._checkStopped = function (buffered) {
    // Notify mediaplayer if the browser paused on its own. This can happen
    // when the player is muted and hidden. When iOS is in fullscreen, native
    // playback controls are shown. These may pause the video element directly,
    // so don't count pause events while iOS is fullscreen as a 'browser' pause.
    if (this._video.paused && !this._video.error && !this._paused && !this._webkitFullScreen) {
        this._onstop();
    }
};

PlaybackMonitor.prototype._fixStall = function () {
    var bufferDuration = getBufferedRange(this._video).end - this._video.currentTime;
    var inBuffer = (bufferDuration > MIN_PLAYABLE_BUFFER);
    var buffered = this._video.buffered;

    // Seek to the start of the next region if it exists.
    if (buffered.length > 1 || !inBuffer) {
        var playhead = this._video.currentTime;
        for (var i = 0; i < buffered.length; i++) {
            var start = buffered.start(i),
                end = buffered.end(i);

            if (playhead < start && end - start > MIN_PLAYABLE_BUFFER) {
                console.warn('jumping ' + (start - playhead) + 's gap');
                this._video.currentTime = start + MIN_PLAYABLE_BUFFER;
                return;
            }
        }
    }

    // Creep forward to try to get "unstuck"
    if (inBuffer) {
        console.warn('stalled within buffer');
        this._video.currentTime += MIN_PLAYABLE_BUFFER;
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./platforms/web/js/message/client.js":
/*!********************************************!*\
  !*** ./platforms/web/js/message/client.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Sent from the worker to perform operations on the main thread.
 * Since access to web apis is limited in a worker, we must proxy
 * all media rendering and local storage operations to the main thread.
 * These are all internal and should no be exposed publicly. All messages
 * have at most a single argument.
 */
module.exports = {
    /**
     * The player state has changed
     * @param {Object} Player properties that have changes with this state transition
     */
    STATE_CHANGED: 'ClientStateChanged',
    /**
     * Append an mp4 audio buffer to MSE
     * @param {Number} stats.videoFrameRate - fps in Hz
     * @param {Number} stats.broadcasterLatency - latency from broadcaster in ms
     * @param {Number} stats.transcoderLatency - latency from transcoder in ms
     * @param {[NetworkProfile]} stats.networkProfile - list of stats for segment downloads
     */
    STATS: 'ClientStats',
    /**
     * Save an item to localStorage. Key's are internally
     * prefixed with 'cvp.' to avoid namespace collisions.
     * @param {string} item.key - unique identifier
     * @param {string} item.value - must be serialzized to string
     */
    SAVE_ITEM: 'ClientSaveItem',
    /**
     * Add a track to the sink
     * @param {Number} track.trackID - used to identify track in 'enqueue'
     * @param {String} track.mimeType - mimeType for the track
     * @param {String} track.src - use this source directly (passthrough)
     */
    CONFIGURE: 'ClientConfigure',
    /**
     * Append an mp4 buffer to MSE
     * @param {Number} sample.trackID - which track to add the sample to.
     * @param {ArrayBuffer} sample.buffer - track buffer
     */
    ENQUEUE: 'ClientEnqueue',
    /**
     * Set the timestamp offset for a track
     * @param {Number} update.trackID - which track to update timestamp offset.
     * @param {ArrayBuffer} update.offset - offset in seconds
     */
    SET_TIMESTAMP_OFFSET: 'ClientSetTimestampOffset',
    /**
     * Start media playback. Playback wont begin until data in from
     * of the playhead has been added to the MSE sourc buffer
     */
    PLAY: 'ClientPlay',
    /**
     * Pause playback
     */
    PAUSE: 'ClientPause',
    /**
     * Remove a range from the audio/video SourceBuffers
     * @param {number} range.start - seconds
     * @param {number} range.end - seconds
     */
    REMOVE: 'ClientRemove',
    /**
     * Clear media and reset to initial state
     */
    RESET: 'ClientReset',
    /**
     * Set the playhead to a new position
     * @param {number} playhead - position of new playhead in seconds
     */
    SEEK_TO: 'ClientSeekTo',
    /**
     * Set the playback rate
     * @param {number} rate - new playback rate
     */
    SET_PLAYBACK_RATE: 'ClientSetPlaybackRate',
    /**
     * Add a timed metadata cue to the text track
     * @param {number} cue.time - time to fire the metadata event
     * @param {number} cue.duration - duration of the metadata event
     */
    ADD_CUE: 'ClientAddCue',
};


/***/ }),

/***/ "./platforms/web/js/message/worker.js":
/*!********************************************!*\
  !*** ./platforms/web/js/message/worker.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Sent from the client to perform operations on the worker. They mostly
 * act as RPCs, corresponding to functions defined in WebMediaPlayer.
 * The `MEDIA_*` messages keep the worker in sync with the rendered media state
 * in the client.
 */
module.exports = {
    /**
     * Create a companion WebMediaPlayer instance on the worker
     * @param {Object} config.settings - Configurations for this instance
     * @param {Object} config.localStorage - Initial keys and values
     */
    CREATE: 'WorkerCreate',
    /**
     * Delete the instance
     */
    DELETE: 'WorkerDelete',
    /**
     * Send current media playback information (sent repeatedly)
     * @param {number} info.currentTime - video playhead
     * @param {number} info.decodedFrames - frames decoded for current source
     * @param {number} info.droppedFrames - frames dropped for current source
     */
    SINK_UPDATE: 'WorkerSinkUpdate',
    /**
     * Hit end of buffer
     */
    SINK_IDLE: 'WorkerSinkIdle',
    /**
     * Video element has errored
     * @param {number} code - The video element's error code
     */
    SINK_ERROR: 'WorkerSinkError',
    /**
     * Timed-metadata has been fired
     * @param {number} time - seconds into stream to fire
     */
    SINK_CUE: 'WorkerSinkCue',
    /**
     * Load a stream by url
     * @param {string} path - media path
     * @param {string} mediaType - media type of the content if known
     */
    LOAD: 'WorkerLoad',
    /**
     * Start playback when possible
     */
    PLAY: 'WorkerPlay',
    /**
     * Stop playback
     */
    PAUSE: 'WorkerPause',
    /**
     * Seek to a time between 0 and the duration
     * @param {number} position - seconds
     */
    SEEK_TO: 'WorkerSeekTo',
    /**
     * Set looping value
     * @param {bool} loop - Should we loop?
     */
    SET_LOOPING: 'WorkerSetLooping',
    /**
     * Set the current quality
     * @param {object} quality - element returned from 'getQualities'
     */
    SET_QUALITY: 'WorkerSetQuality',
    /**
     * Remove quality from current session (not supported, for example)
     * @param {[Quality]} qualities - array of qualities to remove
     */
    REMOVE_QUALITIES: 'WorkerRemoveQualities',
    /**
     * Toggle abs
     * @param {bool} enable - use abs?
     */
    SET_AUTO_SWITCH_QUALITY: 'WorkerSetAutoSwitchQuality',
    /**
     * Set ABR max video size
     * @param {width} width
     * @param {height} height
     */
    SET_AUTO_MAX_VIDEO_SIZE: 'WorkerSetAutoMaxVideoSize',
    /**
     * Set volume between 0-1
     */
    SET_VOLUME: 'WorkerSetVolume',
    /**
     * Set muted to true/false
     */
    SET_MUTED: 'WorkerSetMuted',
    /**
     * Set the rate we playback media, wher '1.0' is the
     * default speed. Will distort at extreme values.
     * @param {number} rate - greater than 0
     */
    SET_PLAYBACK_RATE: 'WorkerSetPlaybackRate',
    /**
     * Enables or disables server side ad insertion.
     * @param {bool} enable true to enable
     */
    SET_AD_INSERTION_ENABLED: 'WorkerSetAdInsertionEnabled',
    /**
     * Sets a target max latency for live streams
     * @param {number} latency max latency value
     */
    SET_LIVE_MAX_LATENCY: 'WorkerSetLiveMaxLatency',
    /**
     * Sets low latency enabled or disabled for a live stream
     * @param {boolean} enable true to enable
     */
    SET_LIVE_LOW_LATENCY_ENABLED: 'WorkerSetLiveLowLatencyEnabled',
    /**
     * Enable player core analytics
     * @param {boolean} enable The boolean value to enable/disable
     */
    SET_ANALYTICS_SEND_EVENTS: 'WorkerSetAnalyticsSendEvents',
    /**
     * Set min buffer size
     * @param {number} min buffer duration
     */
    SET_MIN_BUFFER: 'WorkerSetMinBuffer',
    /**
     * Set max buffer size
     * @param {number} max buffer duration
     */
    SET_MAX_BUFFER: 'WorkerSetMaxBuffer'
};


/***/ }),

/***/ "./platforms/web/js/queue.js":
/*!***********************************!*\
  !*** ./platforms/web/js/queue.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This queue will only "garbage collect"
// when it becomes empty.
var Queue = module.exports = function Queue() {
    this._buffer = [];
    this._head = 0;
    this._tail = 0;
}

Queue.prototype.push = function (item) {
    if (this._tail === this._buffer.length) {
        this._buffer.push(item);
    } else {
        this._buffer[this._tail] = item;
    }
    this._tail++;
};

Queue.prototype.pop = function () {
    var item = this._buffer[this._head];
    this._buffer[this._head] = null;
    this._head++;

    // If we're empty, we can reset our
    // offsets to the begining
    if (this.empty()) {
        this._head = 0;
        this._tail = 0;
    }

    return item;
};

Queue.prototype.size = function () {
    return this._tail - this._head;
};

Queue.prototype.empty = function () {
    // head can be greater if we've "popped" too many
    return this._head >= this._tail;
};


/***/ }),

/***/ "./settings sync recursive ^\\.\\/.*\\.json$":
/*!**************************************!*\
  !*** ./settings sync ^\.\/.*\.json$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./nospd.json": "./settings/nospd.json",
	"./rebuf1.json": "./settings/rebuf1.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./settings sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./settings/nospd.json":
/*!*****************************!*\
  !*** ./settings/nospd.json ***!
  \*****************************/
/*! exports provided: buffercontrol, default */
/***/ (function(module) {

module.exports = {"buffercontrol":{"liveSpeedUpRate":1}};

/***/ }),

/***/ "./settings/rebuf1.json":
/*!******************************!*\
  !*** ./settings/rebuf1.json ***!
  \******************************/
/*! exports provided: buffercontrol, default */
/***/ (function(module) {

module.exports = {"buffercontrol":{"rebufferPenalty":1}};

/***/ })

/******/ });