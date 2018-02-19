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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Public events sent from the MediaPlayer. These are listened to interanlly,
 * but can also be publically consummed with `addEventListener` All events are
 * currently emitted from the WebMediaPlayer in the worker. The getters that
 * are updated with each event are listed below. The payloads are currently not
 * publically exposed, but contain the internal state change information.
 */
exports.PlayerEvent = {
    /**
     * Emitted when the MediaPlayer instances has been created
     * Updated functions:
     *     getVersion()
     */
    INITIALIZED: 'initialized',
    /**
     * Rendered quality has changed
     * Updated functions:
     *     getQuality()
     */
    QUALITY_CHANGED: 'qualityChanged',
    /**
     * Duration value has changed
     * Updated functions:
     *     getDuration()
     */
    DURATION_CHANGED: 'durationChanged',
    /**
     * An errant BUFFERING occurred
     */
    REBUFFERING: 'rebuffering',
    /**
     * A fatal error occured
     * @param {string} error.message Human readable error string
     */
    ERROR: 'error'
};

/**
 * Publicly exposed timed-metadata events (listen with `addEventListener()`).
 * Fired based on the current position of the playhead.
 */
exports.MetadataEvent = {
    /**
     * ID3 encountered. A direct json encoding of the id3 is provided
     * They follow this form: [{id: "TRCK", info:[val1, val2, ...]}...]
     * @param {Object[]} id3 - List of ID3 keys and values
     */
    ID3: 'id3',
    /**
     * Caption update
     * @param {Object}{ caption info }
     */
    CAPTION: 'caption',
    /**
     * Stitched ad has started
     * @param Object containing key/values from segment attributes
     */
    SPLICE_OUT: 'spliceOut',
    /**
     * Stitched ad has ended
     */
    SPLICE_IN: 'spliceIn'
};

/**
 * Publicly exposed state change events (listen with `addEventListener()`).
 * One of these is fired whenever `getPlayerState` changes. The getters that
 * are updated with each state change are listed below.
 */
exports.PlayerState = {
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
    ENDED: 'Ended'
};

/**
 * INTERNAL client-worker messages.
 */

/**
 * Sent from the client to perform operations on the worker. They mostly
 * act as RPCs, corresponding to functions defined in WebMediaPlayer.
 * The `MEDIA_*` messages keep the worker in sync with the rendered media state
 * in the client.
 */
exports.WorkerMessage = {
    /**
     * Create a companion WebMediaPlayer instance on the worker
     * @param {Object} config.settings - Configurations for this instance
     * @param {Object} config.localStorage - Initial keys and values
     */
    CREATE: 'create',
    /**
     * Delete the instance
     */
    DELETE: 'delete',
    /**
     * Send current media playback information (sent repeatedly)
     * @param {number} info.currentTime - video playhead
     * @param {number} info.framerate - current framerate (Hz)
     * @param {number} info.decodedFrames - frames decoded for current source
     * @param {number} info.droppedFrames - frames dropped for current source
     */
    MEDIA_INFO: 'mediaInfo',
    /**
     * Timed-metadata has been fired
     * @param {string} metadata - opaque arbitrary data for this event
     */
    MEDIA_METADATA: 'mediaMetadata',
    /**
     * Video element has errored
     * @param {number} code - The video element's error code
     */
    MEDIA_ERROR: 'mediaError',
    /**
     * Load a stream by url
     * @param {string} url - master manifest
     */
    LOAD: 'load',
    /**
     * Start playback when possible
     */
    PLAY: 'play',
    /**
     * Stop playback
     */
    PAUSE: 'pause',
    /**
     * Seek to a time between 0 and the duration
     * @param {number} position - seconds
     */
    SEEK_TO: 'seekTo',
    /**
     * Set looping value
     * @param {bool} loop - Should we loop?
     */
    SET_LOOPING: 'setLooping',
    /**
     * Set the current quality
     * @param {object} quality - element returned from 'getQualities'
     */
    SET_QUALITY: 'setQuality',
    /**
     * Toggle abs
     * @param {bool} enable - use abs?
     */
    SET_AUTO_SWITCH_QUALITY: 'setAutoSwitchQuality',
    /**
     * Set the rate we playback media, wher '1.0' is the
     * default speed. Will distort at extreme values.
     * @param {number} rate - greater than 0
     */
    SET_PLAYBACK_RATE: 'setPlaybackRate'
};

/**
 * Sent from the worker to perform operations on the main thread.
 * Since access to web apis is limited in a worker, we must proxy
 * all media rendering and local storage operations to the main thread.
 * These are all internal and should no be exposed publicly. All messages
 * have at most a single argument.
 */
exports.ClientMessage = {
    /**
     * Save an item to localStorage. Key's are internally
     * prefixed with 'cvp.' to avoid namespace collisions.
     * @param {string} item.key - unique identifier
     * @param {string} item.value - must be serialzized to string
     */
    SAVE_ITEM: 'saveItem',
    /**
     * Append an mp4 audio buffer to MSE
     * @param {ArrayBuffer} buffer
     */
    ENQUEUE_AUDIO: 'enqueueAudio',
    /**
     * Append an mp4 video buffer to MSE
     * @param {ArrayBuffer} buffer
     */
    ENQUEUE_VIDEO: 'enqueueVideo',
    /**
     * Start media playback. Playback wont begin until data in from
     * of the playhead has been added to the MSE sourc buffer
     */
    PLAY: 'play',
    /**
     * Pause playback
     */
    PAUSE: 'pause',
    /**
     * Reset the source buffers for a new stream
     */
    FLUSH: 'flush',
    /**
     * Remove a range from the audio/video SourceBuffers
     * @param {number} range.start - seconds
     * @param {number} range.end - seconds
     */
    REMOVE: 'remove',
    /**
     * Set the playhead to a new position
     * @param {number} playhead - position of new playhead in seconds
     */
    SEEK_TO: 'seekTo',
    /**
     * Set the playback rate
     * @param {number} rate - new playback rate
     */
    SET_PLAYBACK_RATE: 'setPlaybackRate',
    /**
     * Add a timed metadata cue to the text track
     * @param {number} cue.time - time to fire the metadata event
     * @param {string} cue.metadata - opaque metadata payload
     */
    ADD_CUE: 'addCue'
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var Queue = __webpack_require__(7),
    ByteBuffer = __webpack_require__(5)
    Promise = global.Promise ? global.Promise : __webpack_require__(4);

var AUDIO_MIME = 'video/mp4;codecs="mp4a.40.2"',
    VIDEO_MIME = 'video/mp4;codecs="avc1.42001e"';

var MediaSink = module.exports = function MediaSink(videoElement) {
    this._video = videoElement;
    this._metadataTrack = videoElement.addTextTrack('metadata');

    // Initialize MediaSource
    this.flush();
};

MediaSink.prototype.flush = function () {
    this._mediaSource = new MediaSource();
    this._audioBuffer = new ByteBuffer();
    this._videoBuffer = new ByteBuffer();
    this._updateQueue = new Queue();
    this._audioSource = null;
    this._videoSource = null;

    var onSourceOpen = function () {
        this._mediaSource.removeEventListener('sourceopen', onSourceOpen);
        // Can't seek to region less than duration,
        // so use an arbitrarilly large duration.
        this._mediaSource.duration = 1<<30; // ~34 years
        this._audioSource = this._mediaSource.addSourceBuffer(AUDIO_MIME);
        this._audioSource.addEventListener('updateend', this._processUpdates.bind(this));
        this._videoSource = this._mediaSource.addSourceBuffer(VIDEO_MIME);
        this._videoSource.addEventListener('updateend', this._processUpdates.bind(this));
        this._processUpdates();
    }.bind(this);
    this._mediaSource.addEventListener('sourceopen', onSourceOpen);

    this._video.src = URL.createObjectURL(this._mediaSource);
    this._removeAllCues();
};

MediaSink.prototype.enqueueAudio = function (buffer) {
    if (!this._open() || this._audioSource.updating) {
        // Write to buffer if we can't append now
        this._audioBuffer.write(new Uint8Array(buffer));
    } else if (this._audioBuffer.empty() && this._updateQueue.empty()) {
        // Append directly if no pending updates
        this._audioSource.appendBuffer(buffer);
    } else {
        // Write the new buffer and append all pending buffers
        this._audioBuffer.write(new Uint8Array(buffer));
        this._processUpdates();
    }
};

MediaSink.prototype.enqueueVideo = function (buffer) {
    if (!this._open() || this._videoSource.updating) {
        // Write to buffer if we can't append now
        this._videoBuffer.write(new Uint8Array(buffer));
    } else if (this._videoBuffer.empty() && this._updateQueue.empty()) {
        // Append directly if no pending buffers
        this._videoSource.appendBuffer(buffer);
    } else {
        // Write the new buffer and append all pending buffers
        this._videoBuffer.write(new Uint8Array(buffer));
        this._processUpdates();
    }
};

MediaSink.prototype.play = function () {
    Promise.resolve(this._video.play()).catch(noop);
};

MediaSink.prototype.pause = function () {
    this._video.pause();
};

MediaSink.prototype.remove = function (range) {
    this._safeUpdate(function () {
        this._audioSource.remove(range.start, range.end);
        this._videoSource.remove(range.start, range.end);
    }.bind(this));
};

MediaSink.prototype.seekTo = function (playhead) {
    this._video.currentTime = playhead;

    // Remove all buffered media
    this.remove({start:0, end:Infinity});
    this._removeAllCues();
};

MediaSink.prototype.setPlaybackRate = function (rate) {
    this._video.playbackRate = rate;
};

var CueType = global.VTTCue ? global.VTTCue : global.TextTrackCue;
MediaSink.prototype.addCue = function (displayTime, onCue) {
    // Remove a stale cue if one exists. This can
    // happen when the SourceBuffer is auto-evicted.
    var buffered = this._video.buffered,
        firstCue = this._metadataTrack.cues[0];
    if (buffered.length && firstCue && firstCue.startTime < buffered.start(0)) {
        this._metadataTrack.removeCue(firstCue);
    }

    // 'endTime' must be larger than 'startTime' on Edge
    var cue = new CueType(displayTime, displayTime+1, '');
    cue.onenter = onCue;
    this._metadataTrack.addCue(cue);
};

// internal

MediaSink.prototype._removeAllCues = function () {
    // Remove all existing cues. Have to iterate backwards
    // to preserve cue indexing while removing them
    var textTrack = this._metadataTrack,
        cues = textTrack.cues;
    for (var c = cues.length-1; c >= 0; c--) {
        textTrack.removeCue(cues[c]);
    }
}

MediaSink.prototype._safeUpdate = function (fn) {
    this._updateQueue.push(fn);

    // Don't run update's if we're not initialzing
    // We'll flush the waitlist once the SourceBuffer is ready
    if (this._open()) {
        this._processUpdates();
    }
}

// Drain update queue until as much as we can
MediaSink.prototype._processUpdates = function () {
    // Fire as many pending updates as we can
    while (!this._updateQueue.empty() && !this._updating()) {
        this._updateQueue.pop()();
    }

    // Append buffered media if the SourceBuffer is ready
    if (this._updateQueue.empty()) {
        if (!this._audioSource.updating && !this._audioBuffer.empty()) {
            this._audioSource.appendBuffer(this._audioBuffer.read());
        }
        if (!this._videoSource.updating && !this._videoBuffer.empty()) {
            this._videoSource.appendBuffer(this._videoBuffer.read());
        }
    }
}

MediaSink.prototype._open = function () {
    return this._mediaSource.readyState === 'open';
}

MediaSink.prototype._updating = function () {
    return this._audioSource.updating || this._videoSource.updating;
}

function noop() {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

var ByteBuffer = module.exports = function ByteBuffer() {
    this._buffer = new Uint8Array();
    this._size = 0;
};

ByteBuffer.prototype.write = function (buf) {
    this._grow(buf.byteLength);
    this._buffer.set(buf, this._size);
    this._size += buf.byteLength;
};

ByteBuffer.prototype.read = function () {
    var buf = new Uint8Array(this._buffer.buffer, 0, this._size);
    this._size = 0
    return buf;
};

ByteBuffer.prototype.empty = function () {
    return !this._size;
};

ByteBuffer.prototype._grow = function (n) {
    // Only need to grow if there isn't enough room
    if (this._size + n > this._buffer.byteLength) {
        // Grow buffer so that it is 50% larger than needed to hold n more bytes
        var largerBuf = new Uint8Array(Math.floor(1.5*(this._size + n)));
        largerBuf.set(this._buffer);
        this._buffer = largerBuf;
    }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var EventEmiter = __webpack_require__(2),
    MediaSink = __webpack_require__(3)
    WorkerMessage = __webpack_require__(0).WorkerMessage,
    ClientMessage = __webpack_require__(0).ClientMessage;

// Export events and states to public consumers
var PlayerEvent = exports.PlayerEvent = __webpack_require__(0).PlayerEvent;
var PlayerState = exports.PlayerState = __webpack_require__(0).PlayerState;
var MetadataEvent = exports.MetadataEvent = __webpack_require__(0).MetadataEvent;

var LOCAL_STORAGE_PREFIX = 'cvp.';

/** MediaPlayer constructor. This is the main export of PlayerCore
 *  @param Object settings used to configure this instance
 */
var MediaPlayer = exports.MediaPlayer = function MediaPlayer(settings, worker) {
    this._worker = worker;
    this._id = MediaPlayer._nextID++;
    this._video = document.createElement('video');
    this._videoListeners = [];
    this._mediaSink = new MediaSink(this._video);
    this._emitter = new EventEmiter();
    this._onMessage = onMessage.bind(this);

    // This represents cached state from the worker. State objects
    // like this one are sent from the worker on when the player
    // state changes. This represents cached state from the worker.
    this._state = {
        playerState: PlayerState.Idle,
        quality: {name:'',group:'',bitrate:0,width:0,height:0},
        qualities: [],
        duration: Infinity,
        looping: false,
        autoSwitchQuality: true,
        extraInfo: {},
        version: 'unknown'
    };

    // Statistics for this stream calculated in the client
    this._stats = {
        fps: 0,
        serverTimeDelta: 0, //ms delta between server time and client time
        latencyBroadcaster: 0, // ms of end-to-end latency
        latencyTranscoder: 0 // ms of latency from gotranscoder to the player
    };

    // Setup mediaplayer-worker connections
    this._attachMessageHandlers();

    // Create a companion instance instance in the worker.
    this._postMessage(WorkerMessage.CREATE, {
        settings: settings,
        localStorage: getLocalStorage(LOCAL_STORAGE_PREFIX)
    });

    // Synchronize initial state with default values in client. This
    // is just to guarantee that we're synchronized with the worker
    this.setAutoSwitchQuality(this._state.autoSwitchQuality);
    this.setLooping(this._state.looping);
}

// Give each instance a unique incrementing ID
MediaPlayer._nextID = 0;

// Public interface

MediaPlayer.isSupported = function () {
    return global.MediaSource && global.Worker;
};

MediaPlayer.prototype.delete = function () {
    this._postMessage(WorkerMessage.DELETE);
    this._worker.removeEventListener('message', this._onMessage);
    this._videoListeners.forEach(function (listener) {
        this._video.removeEventListener(listener.type, listener.fn);
    }.bind(this));
}

MediaPlayer.prototype.getHTMLVideoElement = function () {
    return this._video;
}

MediaPlayer.prototype.load = function (url) {
    this._postMessage(WorkerMessage.LOAD, url);
}

MediaPlayer.prototype.play = function () {
    this._postMessage(WorkerMessage.PLAY);
}

MediaPlayer.prototype.pause = function () {
    this._postMessage(WorkerMessage.PAUSE);
}

MediaPlayer.prototype.seekTo = function (time) {
    this._postMessage(WorkerMessage.SEEK_TO, time);
}

MediaPlayer.prototype.getDuration = function () {
    return this._state.duration;
}

MediaPlayer.prototype.getPosition = function () {
    return this._video.currentTime;
}

MediaPlayer.prototype.getBufferDuration = function () {
    return getBufferDuration(this._video);
}

MediaPlayer.prototype.getPlayerState = function () {
    return this._state.playerState;
}

MediaPlayer.prototype.getVideoWidth = function () {
    return this._video.videoWidth;
}

MediaPlayer.prototype.getVideoHeight = function () {
    return this._video.videoHeight;
}

MediaPlayer.prototype.getVideoFrameRate = function () {
    return this._stats.fps;
}

MediaPlayer.prototype.getVersion = function () {
    return this._state.version;
}

MediaPlayer.prototype.isLooping = function () {
    return this._state.looping;
}

MediaPlayer.prototype.setLooping = function (loop) {
    this._postMessage(WorkerMessage.SET_LOOPING, loop);
    this._state.looping = loop;
}

MediaPlayer.prototype.isMuted = function () {
    return this._video.muted;
}

MediaPlayer.prototype.setMuted = function (mute) {
    this._video.muted = mute;
}

MediaPlayer.prototype.setVolume = function (volume) {
    this._video.volume = volume;
}

MediaPlayer.prototype.getVolume = function (volume) {
    return this._video.volume;
}

MediaPlayer.prototype.getQuality = function () {
    return this._state.quality;
}

MediaPlayer.prototype.setQuality = function (quality) {
    this._postMessage(WorkerMessage.SET_QUALITY, quality);
    this._state.autoSwitchQuality = false;
}

MediaPlayer.prototype.getQualities = function () {
    return this._state.qualities;
}

MediaPlayer.prototype.getAutoSwitchQuality = function () {
    return this._state.autoSwitchQuality;
}

MediaPlayer.prototype.setAutoSwitchQuality = function (enable) {
    this._postMessage(WorkerMessage.SET_AUTO_SWITCH_QUALITY, enable);
    this._state.autoSwitchQuality = enable;
}

MediaPlayer.prototype.getPlaybackRate = function () {
    return this._video.playbackRate;
}

MediaPlayer.prototype.setPlaybackRate = function (rate) {
    this._postMessage(WorkerMessage.SET_PLAYBACK_RATE, rate);
}

// Extra Functions

MediaPlayer.prototype.addEventListener = function (name, fn) {
    this._emitter.on(name, fn);
};

MediaPlayer.prototype.removeEventListener = function (name, fn) {
    this._emitter.removeListener(name, fn);
};

MediaPlayer.prototype.getDroppedFrames = function () {
    return getDroppedFrames(this._video);
}

MediaPlayer.prototype.getDecodedFrames = function () {
    return getDecodedFrames(this._video);
}

MediaPlayer.prototype.getDisplayWidth = function () {
    return this._video.clientWidth;
}

MediaPlayer.prototype.getDisplayHeight = function () {
    return this._video.clientHeight;
}

MediaPlayer.prototype.getManifestInfo = function () {
    return this._state.extraInfo;
}

MediaPlayer.prototype.getBroadcasterLatency = function () {
    return this._stats.latencyBroadcaster;
}

MediaPlayer.prototype.getTranscoderLatency = function () {
    return this._stats.latencyTranscoder;
}

// private helpers

MediaPlayer.prototype._postMessage = function (type, arg) {
    this._worker.postMessage({
        id: this._id,
        type: type,
        arg: arg
    });
}

MediaPlayer.prototype._attachMessageHandlers = function () {
    // Setup mediaplayer-worker connections
    this._worker.addEventListener('message', this._onMessage);

    // Attach video event handlers
    var addVideoListener = function (type, fn) {
        this._video.addEventListener(type, fn);
        this._videoListeners.push({type: type, fn: fn});
    }.bind(this);
    addVideoListener('timeupdate', this._createOnVideoTimeUpdate());
    addVideoListener('progress', this._sendMediaInfo.bind(this));
    addVideoListener('error', this._onVideoError.bind(this));

    // Attach internal event handlers
    var em = this._emitter,
        sink = this._mediaSink,
        updateState = function (state) {
            Object.assign(this._state, state);
        }.bind(this);
    em.on(PlayerEvent.INITIALIZED, updateState);
    em.on(PlayerEvent.QUALITY_CHANGED, updateState);
    em.on(PlayerEvent.DURATION_CHANGED, updateState);
    em.on(MetadataEvent.ID3, this._onID3.bind(this));
    em.on(PlayerState.IDLE, updateState);
    em.on(PlayerState.BUFFERING, updateState);
    em.on(PlayerState.PLAYING, updateState);
    em.on(PlayerState.ENDED, updateState);
    em.on(PlayerState.READY, function (state) {
        updateState(state);
        var serverTime = 1000 * Number(state.extraInfo['SERVER-TIME']);
        this._stats.serverTimeDelta = serverTime - global.performance.now();
    }.bind(this));
    em.on(ClientMessage.SAVE_ITEM, function (item) {
        global.localStorage.setItem(LOCAL_STORAGE_PREFIX + item.key, item.value);
    }.bind(this));
    em.on(ClientMessage.ENQUEUE_AUDIO, sink.enqueueAudio.bind(sink));
    em.on(ClientMessage.ENQUEUE_VIDEO, sink.enqueueVideo.bind(sink));
    em.on(ClientMessage.PLAY, sink.play.bind(sink));
    em.on(ClientMessage.PAUSE, sink.pause.bind(sink));
    em.on(ClientMessage.FLUSH, sink.flush.bind(sink));
    em.on(ClientMessage.REMOVE, sink.remove.bind(sink));
    em.on(ClientMessage.SEEK_TO, sink.seekTo.bind(sink));
    em.on(ClientMessage.SET_PLAYBACK_RATE, sink.setPlaybackRate.bind(sink));
    em.on(ClientMessage.ADD_CUE, function (cue) {
        sink.addCue(cue.time, function () {
            this._postMessage(WorkerMessage.MEDIA_METADATA, cue.metadata);
        }.bind(this));
    }.bind(this));
};

MediaPlayer.prototype._sendMediaInfo = function () {
    this._postMessage(WorkerMessage.MEDIA_INFO, {
        currentTime: this._video.currentTime,
        bufferDuration: getBufferDuration(this._video),
        framerate: this._stats.fps,
        decodedFrames: getDecodedFrames(this._video),
        droppedFrames: getDroppedFrames(this._video)
    });
}

// listeners

// Handle state updates and RPCs from worker
function onMessage(evt) {
    var msg = evt.data;

    // Ignore messages to other instances
    if (msg.id === this._id) {
        this._emitter.emit(msg.type, msg.arg);
    }
};

MediaPlayer.prototype._createOnVideoTimeUpdate = function () {
    var prevTime = global.performance.now(),
        prevDecoded = getDecodedFrames(this._video);

    return function () {
        var now = global.performance.now(),
            decoded = getDecodedFrames(this._video);
        this._stats.fps = 1000 * ((decoded - prevDecoded) / (now - prevTime));
        prevTime = now;
        prevDecoded = decoded;

        // send after updating fps
        this._sendMediaInfo();
    }.bind(this);
}

MediaPlayer.prototype._onVideoError = function () {
    this._postMessage(WorkerMessage.MEDIA_ERROR, this._video.error.code);
};

MediaPlayer.prototype._onID3 = function (id3Array) {
    var serverTimeNow = global.performance.now() + this._stats.serverTimeDelta;
    id3Array.forEach(function (id3) {
        // Don't want to throw exception in event handler if malformed date
        try {
            if (id3.id === 'TDEN') {
                this._stats.latencyBroadcaster = serverTimeNow - isoToUnix(id3.info[0]);
            } else if (id3.id === 'TDTG') {
                this._stats.latencyTranscoder = serverTimeNow - isoToUnix(id3.info[0]);
            }
        } catch (e) {}
    }.bind(this));
};

// utilities

function getLocalStorage(prefix) {
    var storage = Object.create(null);
    for (var i = 0; i < global.localStorage.length; i++) {
        var key = global.localStorage.key(i);
        if (key.substr(0, prefix.length) === prefix) {
            storage[key] = global.localStorage.getItem(key).substr(prefix.length);
        }
    }
    return storage;
}

var STALLED_THRESHOLD = 0.1;

function getBufferDuration(video) {
    var buffered = video.buffered,
        playhead = video.currentTime;

    // Find end of buffer enclosing current playhead
    for (var i = 0; i < buffered.length; i++) {
        var end = buffered.end(i);
        if (playhead < end - STALLED_THRESHOLD) {
            return (playhead < buffered.start(i)) ? 0 : end - playhead;
        }
    }

    return 0;
};

function getDroppedFrames(video) {
    if (typeof video.webkitDroppedFrameCount === 'number') {
        return video.webkitDroppedFrameCount;
    } else if (typeof video.getVideoPlaybackQuality === 'function') {
        var info = video.getVideoPlaybackQuality();
        return info ? info.droppedVideoFrames : -1;
    } else {
        return -1;
    }
}

function getDecodedFrames(video) {
    if (typeof video.webkitDecodedFrameCount === 'number') {
        return video.webkitDecodedFrameCount;
    } else if (typeof video.mozDecodedFrames === 'number') {
        return video.mozDecodedFrames;
    } else {
        return -1;
    }
}

var isoRe = /(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)(\.\d+)?/i;
function isoToUnix(utcStr) {
    var groups = isoRe.exec(utcStr),
        year = groups[1],
        month = groups[2],
        day = groups[3],
        hour = groups[4],
        minute = groups[5],
        second = groups[6],
        milli =  groups[7] === undefined ? '0' : groups[7];
    return Date.UTC(year, month - 1, day, hour, minute, second, milli * 1000);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 7 */
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

Queue.prototype.empty = function () {
    // head can be greater if we've "poped" too many
    return this._head >= this._tail;
};


/***/ })
/******/ ]);