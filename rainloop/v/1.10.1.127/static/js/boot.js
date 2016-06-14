/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "rainloop/v/0.0.0/static/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 173);
/******/ })
/************************************************************************/
/******/ ({

/***/ 102:
/*!*******************************!*\
  !*** ./dev/Common/Booter.jsx ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __WEBPACK_IMPORTED_MODULE_0_window__ && __WEBPACK_IMPORTED_MODULE_0_window__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_window__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_window__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_window___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_window___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_progressJs__ = __webpack_require__(/*! progressJs */ 49);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_progressJs___default = __WEBPACK_IMPORTED_MODULE_1_progressJs__ && __WEBPACK_IMPORTED_MODULE_1_progressJs__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_progressJs__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_progressJs__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_progressJs___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_progressJs___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop__ = __webpack_require__(/*! Storage/RainLoop */ 77);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop___default = __WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop__ && __WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop___default });






	var rlAppDataStorage = null;

	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah = function () {
		return /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop___default.a ? /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop___default.a.getHash() : null;
	};

	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah_data = function () {
		return rlAppDataStorage;
	};

	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah_set = function () {
		if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop___default.a) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop___default.a.setHash();
		}
	};

	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah_clear = function () {
		if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop___default.a) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_RainLoop___default.a.clearHash();
		}
	};

	function getComputedStyle(id, name) {
		var element = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.getElementById(id);
		return element.currentStyle ? element.currentStyle[name] : /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.getComputedStyle ? /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.getComputedStyle(element, null).getPropertyValue(name) : null;
	}

	function includeStyle(styles) {
		/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.write(unescape('%3Csty' + 'le%3E' + styles + '"%3E%3C/' + 'sty' + 'le%3E'));
	}

	function includeScr(src) {
		/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.write(unescape('%3Csc' + 'ript type="text/jav' + 'ascr' + 'ipt" data-cfasync="false" sr' + 'c="' + src + '"%3E%3C/' + 'scr' + 'ipt%3E'));
	}

	function includeLayout() {
		var css = __webpack_require__(/*! Styles/@Boot.css */ 177),
		    layout = __webpack_require__(/*! Html/Layout.html */ 176),
		    app = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.getElementById('rl-app');

		if (css) {
			includeStyle(css);
		}

		if (app && layout) {
			app.innerHTML = layout.replace(/[\r\n\t]+/g, '');
			return true;
		}

		return false;
	}

	function includeAppScr() {
		var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		var src = './?/';
		src += data.admin ? 'Admin' : '';
		src += 'AppData@';
		src += data.mobile ? 'mobile' : 'no-mobile';
		src += data.mobileDevice ? '-1' : '-0';
		src += '/';

		includeScr(src + (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah ? /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah() || '0' : '0') + '/' + /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Math.random().toString().substr(2) + '/');
	}

	function getRainloopBootData() {
		var result = {};
		var meta = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.getElementById('app-boot-data');

		if (meta && meta.getAttribute) {
			result = JSON.parse(meta.getAttribute('content')) || {};
		}

		return result;
	}

	function showError(additionalError) {
		var oR = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.getElementById('rl-loading'),
		    oL = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.getElementById('rl-loading-error'),
		    oLA = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.getElementById('rl-loading-error-additional');

		if (oR) {
			oR.style.display = 'none';
		}

		if (oL) {
			oL.style.display = 'block';
		}

		if (oLA && additionalError) {
			oLA.style.display = 'block';
			oLA.innerHTML = additionalError;
		}

		if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_progressJs___default.a) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_1_progressJs___default.a.set(100).end();
		}
	}

	function showDescriptionAndLoading(description) {
		var oE = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.getElementById('rl-loading'),
		    oElDesc = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.getElementById('rl-loading-desc');

		if (oElDesc && description) {
			oElDesc.innerHTML = description;
		}

		if (oE && oE.style) {
			oE.style.opacity = 0;
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.setTimeout(function () {
				oE.style.opacity = 1;
			}, 300);
		}
	}

	function runMainBoot(withError, additionalError) {
		if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__APP_BOOT && !withError) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__APP_BOOT(function () {
				showError(additionalError);
			});
		} else {
			showError(additionalError);
		}
	}

	function runApp() {
		var appData = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah_data();

		if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.jassl && /* harmony import */__WEBPACK_IMPORTED_MODULE_1_progressJs___default.a && appData && appData.TemplatesLink && appData.LangLink && appData.StaticLibJsLink && appData.StaticAppJsLink && appData.StaticEditorJsLink) {
			(function () {
				var p = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_progressJs___default.a;

				p.setOptions({ theme: 'rainloop' });
				p.start().set(5);

				var libs = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.jassl(appData.StaticLibJsLink).then(function () {
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.$) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.$('#rl-check').remove();

						if (appData.IncludeBackground) {
							/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.$('#rl-bg').attr('style', 'background-image: none !important;').backstretch(appData.IncludeBackground.replace('{{USER}}', /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah ? /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah() || '0' : '0'), { fade: 100, centeredX: true, centeredY: true }).removeAttr('style');
						}
					}
				}),
				    common = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Promise.all([/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.jassl(appData.TemplatesLink), /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.jassl(appData.LangLink)]);

				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Promise.all([libs, common]).then(function () {
					p.set(30);
					return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.jassl(appData.StaticAppJsLink);
				}).then(function () {
					p.set(50);
					return appData.PluginsLink ? /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.jassl(appData.PluginsLink) : /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Promise.resolve();
				}).then(function () {
					p.set(70);
					runMainBoot(false);
				}).catch(function (e) {
					runMainBoot(true);
					throw e;
				}).then(function () {
					return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.jassl(appData.StaticEditorJsLink);
				}).then(function () {
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.CKEDITOR && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__initEditor) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__initEditor();
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__initEditor = null;
					}
				});
			})();
		} else {
			runMainBoot(true);
		}
	}

	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__initAppData = function (data) {

		rlAppDataStorage = data;

		/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah_set();

		if (rlAppDataStorage.NewThemeLink) {
			(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.getElementById('app-theme-link') || {}).href = rlAppDataStorage.NewThemeLink;
		}

		if (rlAppDataStorage.IncludeCss) {
			includeStyle(rlAppDataStorage.IncludeCss);
		}

		showDescriptionAndLoading(rlAppDataStorage ? rlAppDataStorage.LoadingDescriptionEsc || '' : '');

		runApp();
	};

	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__runBoot = function () {

		if (!/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.navigator || !/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.navigator.cookieEnabled) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.location.replace('./?/NoCookie');
		}

		if ('none' !== getComputedStyle('rl-check', 'display')) {
			var root = document.documentElement;
			root.className += ' no-css';
		}

		if (includeLayout()) {
			includeAppScr(getRainloopBootData());
		}
	};

/***/ },

/***/ 103:
/*!*******************************************!*\
  !*** ./~/es6-promise-polyfill/promise.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_RESULT__;(function(global){

	//
	// Check for native Promise and it has correct interface
	//

	var NativePromise = global['Promise'];
	var nativePromiseSupported =
	  NativePromise &&
	  // Some of these methods are missing from
	  // Firefox/Chrome experimental implementations
	  'resolve' in NativePromise &&
	  'reject' in NativePromise &&
	  'all' in NativePromise &&
	  'race' in NativePromise &&
	  // Older version of the spec had a resolver object
	  // as the arg rather than a function
	  (function(){
	    var resolve;
	    new NativePromise(function(r){ resolve = r; });
	    return typeof resolve === 'function';
	  })();


	//
	// export if necessary
	//

	if (typeof exports !== 'undefined' && exports)
	{
	  // node.js
	  exports.Promise = nativePromiseSupported ? NativePromise : Promise;
	  exports.Polyfill = Promise;
	}
	else
	{
	  // AMD
	  if (true)
	  {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
	      return nativePromiseSupported ? NativePromise : Promise;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  else
	  {
	    // in browser add to global
	    if (!nativePromiseSupported)
	      global['Promise'] = Promise;
	  }
	}


	//
	// Polyfill
	//

	var PENDING = 'pending';
	var SEALED = 'sealed';
	var FULFILLED = 'fulfilled';
	var REJECTED = 'rejected';
	var NOOP = function(){};

	function isArray(value) {
	  return Object.prototype.toString.call(value) === '[object Array]';
	}

	// async calls
	var asyncSetTimer = typeof setImmediate !== 'undefined' ? setImmediate : setTimeout;
	var asyncQueue = [];
	var asyncTimer;

	function asyncFlush(){
	  // run promise callbacks
	  for (var i = 0; i < asyncQueue.length; i++)
	    asyncQueue[i][0](asyncQueue[i][1]);

	  // reset async asyncQueue
	  asyncQueue = [];
	  asyncTimer = false;
	}

	function asyncCall(callback, arg){
	  asyncQueue.push([callback, arg]);

	  if (!asyncTimer)
	  {
	    asyncTimer = true;
	    asyncSetTimer(asyncFlush, 0);
	  }
	}


	function invokeResolver(resolver, promise) {
	  function resolvePromise(value) {
	    resolve(promise, value);
	  }

	  function rejectPromise(reason) {
	    reject(promise, reason);
	  }

	  try {
	    resolver(resolvePromise, rejectPromise);
	  } catch(e) {
	    rejectPromise(e);
	  }
	}

	function invokeCallback(subscriber){
	  var owner = subscriber.owner;
	  var settled = owner.state_;
	  var value = owner.data_;  
	  var callback = subscriber[settled];
	  var promise = subscriber.then;

	  if (typeof callback === 'function')
	  {
	    settled = FULFILLED;
	    try {
	      value = callback(value);
	    } catch(e) {
	      reject(promise, e);
	    }
	  }

	  if (!handleThenable(promise, value))
	  {
	    if (settled === FULFILLED)
	      resolve(promise, value);

	    if (settled === REJECTED)
	      reject(promise, value);
	  }
	}

	function handleThenable(promise, value) {
	  var resolved;

	  try {
	    if (promise === value)
	      throw new TypeError('A promises callback cannot return that same promise.');

	    if (value && (typeof value === 'function' || typeof value === 'object'))
	    {
	      var then = value.then;  // then should be retrived only once

	      if (typeof then === 'function')
	      {
	        then.call(value, function(val){
	          if (!resolved)
	          {
	            resolved = true;

	            if (value !== val)
	              resolve(promise, val);
	            else
	              fulfill(promise, val);
	          }
	        }, function(reason){
	          if (!resolved)
	          {
	            resolved = true;

	            reject(promise, reason);
	          }
	        });

	        return true;
	      }
	    }
	  } catch (e) {
	    if (!resolved)
	      reject(promise, e);

	    return true;
	  }

	  return false;
	}

	function resolve(promise, value){
	  if (promise === value || !handleThenable(promise, value))
	    fulfill(promise, value);
	}

	function fulfill(promise, value){
	  if (promise.state_ === PENDING)
	  {
	    promise.state_ = SEALED;
	    promise.data_ = value;

	    asyncCall(publishFulfillment, promise);
	  }
	}

	function reject(promise, reason){
	  if (promise.state_ === PENDING)
	  {
	    promise.state_ = SEALED;
	    promise.data_ = reason;

	    asyncCall(publishRejection, promise);
	  }
	}

	function publish(promise) {
	  var callbacks = promise.then_;
	  promise.then_ = undefined;

	  for (var i = 0; i < callbacks.length; i++) {
	    invokeCallback(callbacks[i]);
	  }
	}

	function publishFulfillment(promise){
	  promise.state_ = FULFILLED;
	  publish(promise);
	}

	function publishRejection(promise){
	  promise.state_ = REJECTED;
	  publish(promise);
	}

	/**
	* @class
	*/
	function Promise(resolver){
	  if (typeof resolver !== 'function')
	    throw new TypeError('Promise constructor takes a function argument');

	  if (this instanceof Promise === false)
	    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');

	  this.then_ = [];

	  invokeResolver(resolver, this);
	}

	Promise.prototype = {
	  constructor: Promise,

	  state_: PENDING,
	  then_: null,
	  data_: undefined,

	  then: function(onFulfillment, onRejection){
	    var subscriber = {
	      owner: this,
	      then: new this.constructor(NOOP),
	      fulfilled: onFulfillment,
	      rejected: onRejection
	    };

	    if (this.state_ === FULFILLED || this.state_ === REJECTED)
	    {
	      // already resolved, call callback async
	      asyncCall(invokeCallback, subscriber);
	    }
	    else
	    {
	      // subscribe
	      this.then_.push(subscriber);
	    }

	    return subscriber.then;
	  },

	  'catch': function(onRejection) {
	    return this.then(null, onRejection);
	  }
	};

	Promise.all = function(promises){
	  var Class = this;

	  if (!isArray(promises))
	    throw new TypeError('You must pass an array to Promise.all().');

	  return new Class(function(resolve, reject){
	    var results = [];
	    var remaining = 0;

	    function resolver(index){
	      remaining++;
	      return function(value){
	        results[index] = value;
	        if (!--remaining)
	          resolve(results);
	      };
	    }

	    for (var i = 0, promise; i < promises.length; i++)
	    {
	      promise = promises[i];

	      if (promise && typeof promise.then === 'function')
	        promise.then(resolver(i), reject);
	      else
	        results[i] = promise;
	    }

	    if (!remaining)
	      resolve(results);
	  });
	};

	Promise.race = function(promises){
	  var Class = this;

	  if (!isArray(promises))
	    throw new TypeError('You must pass an array to Promise.race().');

	  return new Class(function(resolve, reject) {
	    for (var i = 0, promise; i < promises.length; i++)
	    {
	      promise = promises[i];

	      if (promise && typeof promise.then === 'function')
	        promise.then(resolve, reject);
	      else
	        resolve(promise);
	    }
	  });
	};

	Promise.resolve = function(value){
	  var Class = this;

	  if (value && typeof value === 'object' && value.constructor === Class)
	    return value;

	  return new Class(function(resolve){
	    resolve(value);
	  });
	};

	Promise.reject = function(reason){
	  var Class = this;

	  return new Class(function(resolve, reject){
	    reject(reason);
	  });
	};

	})(typeof window != 'undefined' ? window : typeof global != 'undefined' ? global : typeof self != 'undefined' ? self : this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/buildin/global.js */ 178), __webpack_require__(/*! ./~/timers-browserify/main.js */ 79).setImmediate))

/***/ },

/***/ 104:
/*!**************************!*\
  !*** ./~/jassl/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/jassl.js */ 174);

/***/ },

/***/ 105:
/*!********************************!*\
  !*** ./vendors/json2/json2.js ***!
  \********************************/
/***/ function(module, exports) {

	/*
	    json2.js
	    2015-05-03

	    Public Domain.

	    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

	    See http://www.JSON.org/js.html


	    This code should be minified before deployment.
	    See http://javascript.crockford.com/jsmin.html

	    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
	    NOT CONTROL.


	    This file creates a global JSON object containing two methods: stringify
	    and parse. This file is provides the ES5 JSON capability to ES3 systems.
	    If a project might run on IE8 or earlier, then this file should be included.
	    This file does nothing on ES5 systems.

	        JSON.stringify(value, replacer, space)
	            value       any JavaScript value, usually an object or array.

	            replacer    an optional parameter that determines how object
	                        values are stringified for objects. It can be a
	                        function or an array of strings.

	            space       an optional parameter that specifies the indentation
	                        of nested structures. If it is omitted, the text will
	                        be packed without extra whitespace. If it is a number,
	                        it will specify the number of spaces to indent at each
	                        level. If it is a string (such as '\t' or '&nbsp;'),
	                        it contains the characters used to indent at each level.

	            This method produces a JSON text from a JavaScript value.

	            When an object value is found, if the object contains a toJSON
	            method, its toJSON method will be called and the result will be
	            stringified. A toJSON method does not serialize: it returns the
	            value represented by the name/value pair that should be serialized,
	            or undefined if nothing should be serialized. The toJSON method
	            will be passed the key associated with the value, and this will be
	            bound to the value

	            For example, this would serialize Dates as ISO strings.

	                Date.prototype.toJSON = function (key) {
	                    function f(n) {
	                        // Format integers to have at least two digits.
	                        return n < 10 
	                            ? '0' + n 
	                            : n;
	                    }

	                    return this.getUTCFullYear()   + '-' +
	                         f(this.getUTCMonth() + 1) + '-' +
	                         f(this.getUTCDate())      + 'T' +
	                         f(this.getUTCHours())     + ':' +
	                         f(this.getUTCMinutes())   + ':' +
	                         f(this.getUTCSeconds())   + 'Z';
	                };

	            You can provide an optional replacer method. It will be passed the
	            key and value of each member, with this bound to the containing
	            object. The value that is returned from your method will be
	            serialized. If your method returns undefined, then the member will
	            be excluded from the serialization.

	            If the replacer parameter is an array of strings, then it will be
	            used to select the members to be serialized. It filters the results
	            such that only members with keys listed in the replacer array are
	            stringified.

	            Values that do not have JSON representations, such as undefined or
	            functions, will not be serialized. Such values in objects will be
	            dropped; in arrays they will be replaced with null. You can use
	            a replacer function to replace those with JSON values.
	            JSON.stringify(undefined) returns undefined.

	            The optional space parameter produces a stringification of the
	            value that is filled with line breaks and indentation to make it
	            easier to read.

	            If the space parameter is a non-empty string, then that string will
	            be used for indentation. If the space parameter is a number, then
	            the indentation will be that many spaces.

	            Example:

	            text = JSON.stringify(['e', {pluribus: 'unum'}]);
	            // text is '["e",{"pluribus":"unum"}]'


	            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
	            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

	            text = JSON.stringify([new Date()], function (key, value) {
	                return this[key] instanceof Date 
	                    ? 'Date(' + this[key] + ')' 
	                    : value;
	            });
	            // text is '["Date(---current time---)"]'


	        JSON.parse(text, reviver)
	            This method parses a JSON text to produce an object or array.
	            It can throw a SyntaxError exception.

	            The optional reviver parameter is a function that can filter and
	            transform the results. It receives each of the keys and values,
	            and its return value is used instead of the original value.
	            If it returns what it received, then the structure is not modified.
	            If it returns undefined then the member is deleted.

	            Example:

	            // Parse the text. Values that look like ISO date strings will
	            // be converted to Date objects.

	            myData = JSON.parse(text, function (key, value) {
	                var a;
	                if (typeof value === 'string') {
	                    a =
	/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
	                    if (a) {
	                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
	                            +a[5], +a[6]));
	                    }
	                }
	                return value;
	            });

	            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
	                var d;
	                if (typeof value === 'string' &&
	                        value.slice(0, 5) === 'Date(' &&
	                        value.slice(-1) === ')') {
	                    d = new Date(value.slice(5, -1));
	                    if (d) {
	                        return d;
	                    }
	                }
	                return value;
	            });


	    This is a reference implementation. You are free to copy, modify, or
	    redistribute.
	*/

	/*jslint 
	    eval, for, this 
	*/

	/*property
	    JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
	    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
	    lastIndex, length, parse, prototype, push, replace, slice, stringify,
	    test, toJSON, toString, valueOf
	*/


	// Create a JSON object only if one does not already exist. We create the
	// methods in a closure to avoid creating global variables.

	if (typeof JSON !== 'object') {
	    JSON = {};
	}

	(function () {
	    'use strict';
	    
	    var rx_one = /^[\],:{}\s]*$/,
	        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
	        rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

	    function f(n) {
	        // Format integers to have at least two digits.
	        return n < 10 
	            ? '0' + n 
	            : n;
	    }
	    
	    function this_value() {
	        return this.valueOf();
	    }

	    if (typeof Date.prototype.toJSON !== 'function') {

	        Date.prototype.toJSON = function () {

	            return isFinite(this.valueOf())
	                ? this.getUTCFullYear() + '-' +
	                        f(this.getUTCMonth() + 1) + '-' +
	                        f(this.getUTCDate()) + 'T' +
	                        f(this.getUTCHours()) + ':' +
	                        f(this.getUTCMinutes()) + ':' +
	                        f(this.getUTCSeconds()) + 'Z'
	                : null;
	        };

	        Boolean.prototype.toJSON = this_value;
	        Number.prototype.toJSON = this_value;
	        String.prototype.toJSON = this_value;
	    }

	    var gap,
	        indent,
	        meta,
	        rep;


	    function quote(string) {

	// If the string contains no control characters, no quote characters, and no
	// backslash characters, then we can safely slap some quotes around it.
	// Otherwise we must also replace the offending characters with safe escape
	// sequences.

	        rx_escapable.lastIndex = 0;
	        return rx_escapable.test(string) 
	            ? '"' + string.replace(rx_escapable, function (a) {
	                var c = meta[a];
	                return typeof c === 'string'
	                    ? c
	                    : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	            }) + '"' 
	            : '"' + string + '"';
	    }


	    function str(key, holder) {

	// Produce a string from holder[key].

	        var i,          // The loop counter.
	            k,          // The member key.
	            v,          // The member value.
	            length,
	            mind = gap,
	            partial,
	            value = holder[key];

	// If the value has a toJSON method, call it to obtain a replacement value.

	        if (value && typeof value === 'object' &&
	                typeof value.toJSON === 'function') {
	            value = value.toJSON(key);
	        }

	// If we were called with a replacer function, then call the replacer to
	// obtain a replacement value.

	        if (typeof rep === 'function') {
	            value = rep.call(holder, key, value);
	        }

	// What happens next depends on the value's type.

	        switch (typeof value) {
	        case 'string':
	            return quote(value);

	        case 'number':

	// JSON numbers must be finite. Encode non-finite numbers as null.

	            return isFinite(value) 
	                ? String(value) 
	                : 'null';

	        case 'boolean':
	        case 'null':

	// If the value is a boolean or null, convert it to a string. Note:
	// typeof null does not produce 'null'. The case is included here in
	// the remote chance that this gets fixed someday.

	            return String(value);

	// If the type is 'object', we might be dealing with an object or an array or
	// null.

	        case 'object':

	// Due to a specification blunder in ECMAScript, typeof null is 'object',
	// so watch out for that case.

	            if (!value) {
	                return 'null';
	            }

	// Make an array to hold the partial results of stringifying this object value.

	            gap += indent;
	            partial = [];

	// Is the value an array?

	            if (Object.prototype.toString.apply(value) === '[object Array]') {

	// The value is an array. Stringify every element. Use null as a placeholder
	// for non-JSON values.

	                length = value.length;
	                for (i = 0; i < length; i += 1) {
	                    partial[i] = str(i, value) || 'null';
	                }

	// Join all of the elements together, separated with commas, and wrap them in
	// brackets.

	                v = partial.length === 0
	                    ? '[]'
	                    : gap
	                        ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
	                        : '[' + partial.join(',') + ']';
	                gap = mind;
	                return v;
	            }

	// If the replacer is an array, use it to select the members to be stringified.

	            if (rep && typeof rep === 'object') {
	                length = rep.length;
	                for (i = 0; i < length; i += 1) {
	                    if (typeof rep[i] === 'string') {
	                        k = rep[i];
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (
	                                gap 
	                                    ? ': ' 
	                                    : ':'
	                            ) + v);
	                        }
	                    }
	                }
	            } else {

	// Otherwise, iterate through all of the keys in the object.

	                for (k in value) {
	                    if (Object.prototype.hasOwnProperty.call(value, k)) {
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (
	                                gap 
	                                    ? ': ' 
	                                    : ':'
	                            ) + v);
	                        }
	                    }
	                }
	            }

	// Join all of the member texts together, separated with commas,
	// and wrap them in braces.

	            v = partial.length === 0
	                ? '{}'
	                : gap
	                    ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
	                    : '{' + partial.join(',') + '}';
	            gap = mind;
	            return v;
	        }
	    }

	// If the JSON object does not yet have a stringify method, give it one.

	    if (typeof JSON.stringify !== 'function') {
	        meta = {    // table of character substitutions
	            '\b': '\\b',
	            '\t': '\\t',
	            '\n': '\\n',
	            '\f': '\\f',
	            '\r': '\\r',
	            '"': '\\"',
	            '\\': '\\\\'
	        };
	        JSON.stringify = function (value, replacer, space) {

	// The stringify method takes a value and an optional replacer, and an optional
	// space parameter, and returns a JSON text. The replacer can be a function
	// that can replace values, or an array of strings that will select the keys.
	// A default replacer method can be provided. Use of the space parameter can
	// produce text that is more easily readable.

	            var i;
	            gap = '';
	            indent = '';

	// If the space parameter is a number, make an indent string containing that
	// many spaces.

	            if (typeof space === 'number') {
	                for (i = 0; i < space; i += 1) {
	                    indent += ' ';
	                }

	// If the space parameter is a string, it will be used as the indent string.

	            } else if (typeof space === 'string') {
	                indent = space;
	            }

	// If there is a replacer, it must be a function or an array.
	// Otherwise, throw an error.

	            rep = replacer;
	            if (replacer && typeof replacer !== 'function' &&
	                    (typeof replacer !== 'object' ||
	                    typeof replacer.length !== 'number')) {
	                throw new Error('JSON.stringify');
	            }

	// Make a fake root object containing our value under the key of ''.
	// Return the result of stringifying the value.

	            return str('', {'': value});
	        };
	    }


	// If the JSON object does not yet have a parse method, give it one.

	    if (typeof JSON.parse !== 'function') {
	        JSON.parse = function (text, reviver) {

	// The parse method takes a text and an optional reviver function, and returns
	// a JavaScript value if the text is a valid JSON text.

	            var j;

	            function walk(holder, key) {

	// The walk method is used to recursively walk the resulting structure so
	// that modifications can be made.

	                var k, v, value = holder[key];
	                if (value && typeof value === 'object') {
	                    for (k in value) {
	                        if (Object.prototype.hasOwnProperty.call(value, k)) {
	                            v = walk(value, k);
	                            if (v !== undefined) {
	                                value[k] = v;
	                            } else {
	                                delete value[k];
	                            }
	                        }
	                    }
	                }
	                return reviver.call(holder, key, value);
	            }


	// Parsing happens in four stages. In the first stage, we replace certain
	// Unicode characters with escape sequences. JavaScript handles many characters
	// incorrectly, either silently deleting them, or treating them as line endings.

	            text = String(text);
	            rx_dangerous.lastIndex = 0;
	            if (rx_dangerous.test(text)) {
	                text = text.replace(rx_dangerous, function (a) {
	                    return '\\u' +
	                            ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	                });
	            }

	// In the second stage, we run the text against regular expressions that look
	// for non-JSON patterns. We are especially concerned with '()' and 'new'
	// because they can cause invocation, and '=' because it can cause mutation.
	// But just to be safe, we want to reject all unexpected forms.

	// We split the second stage into 4 regexp operations in order to work around
	// crippling inefficiencies in IE's and Safari's regexp engines. First we
	// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
	// replace all simple value tokens with ']' characters. Third, we delete all
	// open brackets that follow a colon or comma or that begin the text. Finally,
	// we look to see that the remaining characters are only whitespace or ']' or
	// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

	            if (
	                rx_one.test(
	                    text
	                        .replace(rx_two, '@')
	                        .replace(rx_three, ']')
	                        .replace(rx_four, '')
	                )
	            ) {

	// In the third stage we use the eval function to compile the text into a
	// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
	// in JavaScript: it can begin a block or an object literal. We wrap the text
	// in parens to eliminate the ambiguity.

	                j = eval('(' + text + ')');

	// In the optional fourth stage, we recursively walk the new structure, passing
	// each name/value pair to a reviver function for possible transformation.

	                return typeof reviver === 'function'
	                    ? walk({'': j}, '')
	                    : j;
	            }

	// If the text is not JSON parseable, then a SyntaxError is thrown.

	            throw new SyntaxError('JSON.parse');
	        };
	    }
	}());


/***/ },

/***/ 106:
/*!***********************************************!*\
  !*** ./vendors/modernizr/modernizr-custom.js ***!
  \***********************************************/
/***/ function(module, exports) {

	/*!
	 * modernizr v3.3.1
	 * Build http://modernizr.com/download?-backgroundsize-boxshadow-cssanimations-csstransitions-rgba-textshadow-setclasses-dontmin
	 *
	 * Copyright (c)
	 *  Faruk Ates
	 *  Paul Irish
	 *  Alex Sexton
	 *  Ryan Seddon
	 *  Patrick Kettner
	 *  Stu Cox
	 *  Richard Herrera

	 * MIT License
	 */

	/*
	 * Modernizr tests which native CSS3 and HTML5 features are available in the
	 * current UA and makes the results available to you in two ways: as properties on
	 * a global `Modernizr` object, and as classes on the `<html>` element. This
	 * information allows you to progressively enhance your pages with a granular level
	 * of control over the experience.
	*/

	;(function(window, document, undefined){
	  var classes = [];


	  var tests = [];


	  /**
	   *
	   * ModernizrProto is the constructor for Modernizr
	   *
	   * @class
	   * @access public
	   */

	  var ModernizrProto = {
	    // The current version, dummy
	    _version: '3.3.1',

	    // Any settings that don't work as separate modules
	    // can go in here as configuration.
	    _config: {
	      'classPrefix': '',
	      'enableClasses': true,
	      'enableJSClass': true,
	      'usePrefixes': true
	    },

	    // Queue of tests
	    _q: [],

	    // Stub these for people who are listening
	    on: function(test, cb) {
	      // I don't really think people should do this, but we can
	      // safe guard it a bit.
	      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
	      // This is in case people listen to synchronous tests. I would leave it out,
	      // but the code to *disallow* sync tests in the real version of this
	      // function is actually larger than this.
	      var self = this;
	      setTimeout(function() {
	        cb(self[test]);
	      }, 0);
	    },

	    addTest: function(name, fn, options) {
	      tests.push({name: name, fn: fn, options: options});
	    },

	    addAsyncTest: function(fn) {
	      tests.push({name: null, fn: fn});
	    }
	  };



	  // Fake some of Object.create so we can force non test results to be non "own" properties.
	  var Modernizr = function() {};
	  Modernizr.prototype = ModernizrProto;

	  // Leak modernizr globally when you `require` it rather than force it here.
	  // Overwrite name so constructor name is nicer :D
	  Modernizr = new Modernizr();



	  /**
	   * is returns a boolean if the typeof an obj is exactly type.
	   *
	   * @access private
	   * @function is
	   * @param {*} obj - A thing we want to check the type of
	   * @param {string} type - A string to compare the typeof against
	   * @returns {boolean}
	   */

	  function is(obj, type) {
	    return typeof obj === type;
	  }
	  ;

	  /**
	   * Run through all tests and detect their support in the current UA.
	   *
	   * @access private
	   */

	  function testRunner() {
	    var featureNames;
	    var feature;
	    var aliasIdx;
	    var result;
	    var nameIdx;
	    var featureName;
	    var featureNameSplit;

	    for (var featureIdx in tests) {
	      if (tests.hasOwnProperty(featureIdx)) {
	        featureNames = [];
	        feature = tests[featureIdx];
	        // run the test, throw the return value into the Modernizr,
	        // then based on that boolean, define an appropriate className
	        // and push it into an array of classes we'll join later.
	        //
	        // If there is no name, it's an 'async' test that is run,
	        // but not directly added to the object. That should
	        // be done with a post-run addTest call.
	        if (feature.name) {
	          featureNames.push(feature.name.toLowerCase());

	          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
	            // Add all the aliases into the names list
	            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
	              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
	            }
	          }
	        }

	        // Run the test, or use the raw value if it's not a function
	        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


	        // Set each of the names on the Modernizr object
	        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
	          featureName = featureNames[nameIdx];
	          // Support dot properties as sub tests. We don't do checking to make sure
	          // that the implied parent tests have been added. You must call them in
	          // order (either in the test, or make the parent test a dependency).
	          //
	          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
	          // hashtag famous last words
	          featureNameSplit = featureName.split('.');

	          if (featureNameSplit.length === 1) {
	            Modernizr[featureNameSplit[0]] = result;
	          } else {
	            // cast to a Boolean, if not one already
	            /* jshint -W053 */
	            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
	              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
	            }

	            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
	          }

	          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
	        }
	      }
	    }
	  }
	  ;

	  /**
	   * docElement is a convenience wrapper to grab the root element of the document
	   *
	   * @access private
	   * @returns {HTMLElement|SVGElement} The root element of the document
	   */

	  var docElement = document.documentElement;


	  /**
	   * A convenience helper to check if the document we are running in is an SVG document
	   *
	   * @access private
	   * @returns {boolean}
	   */

	  var isSVG = docElement.nodeName.toLowerCase() === 'svg';


	  /**
	   * setClasses takes an array of class names and adds them to the root element
	   *
	   * @access private
	   * @function setClasses
	   * @param {string[]} classes - Array of class names
	   */

	  // Pass in an and array of class names, e.g.:
	  //  ['no-webp', 'borderradius', ...]
	  function setClasses(classes) {
	    var className = docElement.className;
	    var classPrefix = Modernizr._config.classPrefix || '';

	    if (isSVG) {
	      className = className.baseVal;
	    }

	    // Change `no-js` to `js` (independently of the `enableClasses` option)
	    // Handle classPrefix on this too
	    if (Modernizr._config.enableJSClass) {
	      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
	      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
	    }

	    if (Modernizr._config.enableClasses) {
	      // Add the new classes
	      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
	      isSVG ? docElement.className.baseVal = className : docElement.className = className;
	    }

	  }

	  ;

	  /**
	   * createElement is a convenience wrapper around document.createElement. Since we
	   * use createElement all over the place, this allows for (slightly) smaller code
	   * as well as abstracting away issues with creating elements in contexts other than
	   * HTML documents (e.g. SVG documents).
	   *
	   * @access private
	   * @function createElement
	   * @returns {HTMLElement|SVGElement} An HTML or SVG element
	   */

	  function createElement() {
	    if (typeof document.createElement !== 'function') {
	      // This is the case in IE7, where the type of createElement is "object".
	      // For this reason, we cannot call apply() as Object is not a Function.
	      return document.createElement(arguments[0]);
	    } else if (isSVG) {
	      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
	    } else {
	      return document.createElement.apply(document, arguments);
	    }
	  }

	  ;
	/*!
	{
	  "name": "CSS rgba",
	  "caniuse": "css3-colors",
	  "property": "rgba",
	  "tags": ["css"],
	  "notes": [{
	    "name": "CSSTricks Tutorial",
	    "href": "https://css-tricks.com/rgba-browser-support/"
	  }]
	}
	!*/

	  Modernizr.addTest('rgba', function() {
	    var style = createElement('a').style;
	    style.cssText = 'background-color:rgba(150,255,150,.5)';

	    return ('' + style.backgroundColor).indexOf('rgba') > -1;
	  });



	  /**
	   * contains checks to see if a string contains another string
	   *
	   * @access private
	   * @function contains
	   * @param {string} str - The string we want to check for substrings
	   * @param {string} substr - The substring we want to search the first string for
	   * @returns {boolean}
	   */

	  function contains(str, substr) {
	    return !!~('' + str).indexOf(substr);
	  }

	  ;

	  /**
	   * cssToDOM takes a kebab-case string and converts it to camelCase
	   * e.g. box-sizing -> boxSizing
	   *
	   * @access private
	   * @function cssToDOM
	   * @param {string} name - String name of kebab-case prop we want to convert
	   * @returns {string} The camelCase version of the supplied name
	   */

	  function cssToDOM(name) {
	    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
	      return m1 + m2.toUpperCase();
	    }).replace(/^-/, '');
	  }
	  ;

	  /**
	   * If the browsers follow the spec, then they would expose vendor-specific style as:
	   *   elem.style.WebkitBorderRadius
	   * instead of something like the following, which would be technically incorrect:
	   *   elem.style.webkitBorderRadius

	   * Webkit ghosts their properties in lowercase but Opera & Moz do not.
	   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
	   *   erik.eae.net/archives/2008/03/10/21.48.10/

	   * More here: github.com/Modernizr/Modernizr/issues/issue/21
	   *
	   * @access private
	   * @returns {string} The string representing the vendor-specific style properties
	   */

	  var omPrefixes = 'Moz O ms Webkit';


	  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
	  ModernizrProto._cssomPrefixes = cssomPrefixes;


	  /**
	   * List of JavaScript DOM values used for tests
	   *
	   * @memberof Modernizr
	   * @name Modernizr._domPrefixes
	   * @optionName Modernizr._domPrefixes
	   * @optionProp domPrefixes
	   * @access public
	   * @example
	   *
	   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
	   * than kebab-case properties, all properties are their Capitalized variant
	   *
	   * ```js
	   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
	   * ```
	   */

	  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);
	  ModernizrProto._domPrefixes = domPrefixes;


	  /**
	   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
	   *
	   * @access private
	   * @function fnBind
	   * @param {function} fn - a function you want to change `this` reference to
	   * @param {object} that - the `this` you want to call the function with
	   * @returns {function} The wrapped version of the supplied function
	   */

	  function fnBind(fn, that) {
	    return function() {
	      return fn.apply(that, arguments);
	    };
	  }

	  ;

	  /**
	   * testDOMProps is a generic DOM property test; if a browser supports
	   *   a certain property, it won't return undefined for it.
	   *
	   * @access private
	   * @function testDOMProps
	   * @param {array.<string>} props - An array of properties to test for
	   * @param {object} obj - An object or Element you want to use to test the parameters again
	   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
	   */
	  function testDOMProps(props, obj, elem) {
	    var item;

	    for (var i in props) {
	      if (props[i] in obj) {

	        // return the property name as a string
	        if (elem === false) {
	          return props[i];
	        }

	        item = obj[props[i]];

	        // let's bind a function
	        if (is(item, 'function')) {
	          // bind to obj unless overriden
	          return fnBind(item, elem || obj);
	        }

	        // return the unbound function or obj or value
	        return item;
	      }
	    }
	    return false;
	  }

	  ;

	  /**
	   * Create our "modernizr" element that we do most feature tests on.
	   *
	   * @access private
	   */

	  var modElem = {
	    elem: createElement('modernizr')
	  };

	  // Clean up this element
	  Modernizr._q.push(function() {
	    delete modElem.elem;
	  });



	  var mStyle = {
	    style: modElem.elem.style
	  };

	  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
	  // the front of the queue.
	  Modernizr._q.unshift(function() {
	    delete mStyle.style;
	  });



	  /**
	   * domToCSS takes a camelCase string and converts it to kebab-case
	   * e.g. boxSizing -> box-sizing
	   *
	   * @access private
	   * @function domToCSS
	   * @param {string} name - String name of camelCase prop we want to convert
	   * @returns {string} The kebab-case version of the supplied name
	   */

	  function domToCSS(name) {
	    return name.replace(/([A-Z])/g, function(str, m1) {
	      return '-' + m1.toLowerCase();
	    }).replace(/^ms-/, '-ms-');
	  }
	  ;

	  /**
	   * getBody returns the body of a document, or an element that can stand in for
	   * the body if a real body does not exist
	   *
	   * @access private
	   * @function getBody
	   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
	   * artificially created element that stands in for the body
	   */

	  function getBody() {
	    // After page load injecting a fake body doesn't work so check if body exists
	    var body = document.body;

	    if (!body) {
	      // Can't use the real body create a fake one.
	      body = createElement(isSVG ? 'svg' : 'body');
	      body.fake = true;
	    }

	    return body;
	  }

	  ;

	  /**
	   * injectElementWithStyles injects an element with style element and some CSS rules
	   *
	   * @access private
	   * @function injectElementWithStyles
	   * @param {string} rule - String representing a css rule
	   * @param {function} callback - A function that is used to test the injected element
	   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
	   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
	   * @returns {boolean}
	   */

	  function injectElementWithStyles(rule, callback, nodes, testnames) {
	    var mod = 'modernizr';
	    var style;
	    var ret;
	    var node;
	    var docOverflow;
	    var div = createElement('div');
	    var body = getBody();

	    if (parseInt(nodes, 10)) {
	      // In order not to give false positives we create a node for each test
	      // This also allows the method to scale for unspecified uses
	      while (nodes--) {
	        node = createElement('div');
	        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
	        div.appendChild(node);
	      }
	    }

	    style = createElement('style');
	    style.type = 'text/css';
	    style.id = 's' + mod;

	    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
	    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
	    (!body.fake ? div : body).appendChild(style);
	    body.appendChild(div);

	    if (style.styleSheet) {
	      style.styleSheet.cssText = rule;
	    } else {
	      style.appendChild(document.createTextNode(rule));
	    }
	    div.id = mod;

	    if (body.fake) {
	      //avoid crashing IE8, if background image is used
	      body.style.background = '';
	      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
	      body.style.overflow = 'hidden';
	      docOverflow = docElement.style.overflow;
	      docElement.style.overflow = 'hidden';
	      docElement.appendChild(body);
	    }

	    ret = callback(div, rule);
	    // If this is done after page load we don't want to remove the body so check if body exists
	    if (body.fake) {
	      body.parentNode.removeChild(body);
	      docElement.style.overflow = docOverflow;
	      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
	      docElement.offsetHeight;
	    } else {
	      div.parentNode.removeChild(div);
	    }

	    return !!ret;

	  }

	  ;

	  /**
	   * nativeTestProps allows for us to use native feature detection functionality if available.
	   * some prefixed form, or false, in the case of an unsupported rule
	   *
	   * @access private
	   * @function nativeTestProps
	   * @param {array} props - An array of property names
	   * @param {string} value - A string representing the value we want to check via @supports
	   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
	   */

	  // Accepts a list of property names and a single value
	  // Returns `undefined` if native detection not available
	  function nativeTestProps(props, value) {
	    var i = props.length;
	    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
	    if ('CSS' in window && 'supports' in window.CSS) {
	      // Try every prefixed variant of the property
	      while (i--) {
	        if (window.CSS.supports(domToCSS(props[i]), value)) {
	          return true;
	        }
	      }
	      return false;
	    }
	    // Otherwise fall back to at-rule (for Opera 12.x)
	    else if ('CSSSupportsRule' in window) {
	      // Build a condition string for every prefixed variant
	      var conditionText = [];
	      while (i--) {
	        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
	      }
	      conditionText = conditionText.join(' or ');
	      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {
	        return getComputedStyle(node, null).position == 'absolute';
	      });
	    }
	    return undefined;
	  }
	  ;

	  // testProps is a generic CSS / DOM property test.

	  // In testing support for a given CSS property, it's legit to test:
	  //    `elem.style[styleName] !== undefined`
	  // If the property is supported it will return an empty string,
	  // if unsupported it will return undefined.

	  // We'll take advantage of this quick test and skip setting a style
	  // on our modernizr element, but instead just testing undefined vs
	  // empty string.

	  // Property names can be provided in either camelCase or kebab-case.

	  function testProps(props, prefixed, value, skipValueTest) {
	    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

	    // Try native detect first
	    if (!is(value, 'undefined')) {
	      var result = nativeTestProps(props, value);
	      if (!is(result, 'undefined')) {
	        return result;
	      }
	    }

	    // Otherwise do it properly
	    var afterInit, i, propsLength, prop, before;

	    // If we don't have a style element, that means we're running async or after
	    // the core tests, so we'll need to create our own elements to use

	    // inside of an SVG element, in certain browsers, the `style` element is only
	    // defined for valid tags. Therefore, if `modernizr` does not have one, we
	    // fall back to a less used element and hope for the best.
	    var elems = ['modernizr', 'tspan'];
	    while (!mStyle.style) {
	      afterInit = true;
	      mStyle.modElem = createElement(elems.shift());
	      mStyle.style = mStyle.modElem.style;
	    }

	    // Delete the objects if we created them.
	    function cleanElems() {
	      if (afterInit) {
	        delete mStyle.style;
	        delete mStyle.modElem;
	      }
	    }

	    propsLength = props.length;
	    for (i = 0; i < propsLength; i++) {
	      prop = props[i];
	      before = mStyle.style[prop];

	      if (contains(prop, '-')) {
	        prop = cssToDOM(prop);
	      }

	      if (mStyle.style[prop] !== undefined) {

	        // If value to test has been passed in, do a set-and-check test.
	        // 0 (integer) is a valid property value, so check that `value` isn't
	        // undefined, rather than just checking it's truthy.
	        if (!skipValueTest && !is(value, 'undefined')) {

	          // Needs a try catch block because of old IE. This is slow, but will
	          // be avoided in most cases because `skipValueTest` will be used.
	          try {
	            mStyle.style[prop] = value;
	          } catch (e) {}

	          // If the property value has changed, we assume the value used is
	          // supported. If `value` is empty string, it'll fail here (because
	          // it hasn't changed), which matches how browsers have implemented
	          // CSS.supports()
	          if (mStyle.style[prop] != before) {
	            cleanElems();
	            return prefixed == 'pfx' ? prop : true;
	          }
	        }
	        // Otherwise just return true, or the property name if this is a
	        // `prefixed()` call
	        else {
	          cleanElems();
	          return prefixed == 'pfx' ? prop : true;
	        }
	      }
	    }
	    cleanElems();
	    return false;
	  }

	  ;

	  /**
	   * testProp() investigates whether a given style property is recognized
	   * Property names can be provided in either camelCase or kebab-case.
	   *
	   * @memberof Modernizr
	   * @name Modernizr.testProp
	   * @access public
	   * @optionName Modernizr.testProp()
	   * @optionProp testProp
	   * @function testProp
	   * @param {string} prop - Name of the CSS property to check
	   * @param {string} [value] - Name of the CSS value to check
	   * @param {boolean} [useValue] - Whether or not to check the value if @supports isn't supported
	   * @returns {boolean}
	   * @example
	   *
	   * Just like [testAllProps](#modernizr-testallprops), only it does not check any vendor prefixed
	   * version of the string.
	   *
	   * Note that the property name must be provided in camelCase (e.g. boxSizing not box-sizing)
	   *
	   * ```js
	   * Modernizr.testProp('pointerEvents')  // true
	   * ```
	   *
	   * You can also provide a value as an optional second argument to check if a
	   * specific value is supported
	   *
	   * ```js
	   * Modernizr.testProp('pointerEvents', 'none') // true
	   * Modernizr.testProp('pointerEvents', 'penguin') // false
	   * ```
	   */

	  var testProp = ModernizrProto.testProp = function(prop, value, useValue) {
	    return testProps([prop], undefined, value, useValue);
	  };

	/*!
	{
	  "name": "CSS textshadow",
	  "property": "textshadow",
	  "caniuse": "css-textshadow",
	  "tags": ["css"],
	  "knownBugs": ["FF3.0 will false positive on this test"]
	}
	!*/

	  Modernizr.addTest('textshadow', testProp('textShadow', '1px 1px'));


	  /**
	   * testPropsAll tests a list of DOM properties we want to check against.
	   * We specify literally ALL possible (known and/or likely) properties on
	   * the element including the non-vendor prefixed one, for forward-
	   * compatibility.
	   *
	   * @access private
	   * @function testPropsAll
	   * @param {string} prop - A string of the property to test for
	   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
	   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
	   * @param {string} [value] - A string of a css value
	   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
	   */
	  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {

	    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
	    props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

	    // did they call .prefixed('boxSizing') or are we just testing a prop?
	    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
	      return testProps(props, prefixed, value, skipValueTest);

	      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
	    } else {
	      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
	      return testDOMProps(props, prefixed, elem);
	    }
	  }

	  // Modernizr.testAllProps() investigates whether a given style property,
	  // or any of its vendor-prefixed variants, is recognized
	  //
	  // Note that the property names must be provided in the camelCase variant.
	  // Modernizr.testAllProps('boxSizing')
	  ModernizrProto.testAllProps = testPropsAll;



	  /**
	   * testAllProps determines whether a given CSS property is supported in the browser
	   *
	   * @memberof Modernizr
	   * @name Modernizr.testAllProps
	   * @optionName Modernizr.testAllProps()
	   * @optionProp testAllProps
	   * @access public
	   * @function testAllProps
	   * @param {string} prop - String naming the property to test (either camelCase or kebab-case)
	   * @param {string} [value] - String of the value to test
	   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
	   * @example
	   *
	   * testAllProps determines whether a given CSS property, in some prefixed form,
	   * is supported by the browser.
	   *
	   * ```js
	   * testAllProps('boxSizing')  // true
	   * ```
	   *
	   * It can optionally be given a CSS value in string form to test if a property
	   * value is valid
	   *
	   * ```js
	   * testAllProps('display', 'block') // true
	   * testAllProps('display', 'penguin') // false
	   * ```
	   *
	   * A boolean can be passed as a third parameter to skip the value check when
	   * native detection (@supports) isn't available.
	   *
	   * ```js
	   * testAllProps('shapeOutside', 'content-box', true);
	   * ```
	   */

	  function testAllProps(prop, value, skipValueTest) {
	    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
	  }
	  ModernizrProto.testAllProps = testAllProps;

	/*!
	{
	  "name": "CSS Animations",
	  "property": "cssanimations",
	  "caniuse": "css-animation",
	  "polyfills": ["transformie", "csssandpaper"],
	  "tags": ["css"],
	  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
	  "notes": [{
	    "name" : "Article: 'Dispelling the Android CSS animation myths'",
	    "href": "https://goo.gl/OGw5Gm"
	  }]
	}
	!*/
	/* DOC
	Detects whether or not elements can be animated using CSS
	*/

	  Modernizr.addTest('cssanimations', testAllProps('animationName', 'a', true));

	/*!
	{
	  "name": "Background Size",
	  "property": "backgroundsize",
	  "tags": ["css"],
	  "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
	  "notes": [{
	    "name": "Related Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/396"
	  }]
	}
	!*/

	  Modernizr.addTest('backgroundsize', testAllProps('backgroundSize', '100%', true));

	/*!
	{
	  "name": "CSS Transitions",
	  "property": "csstransitions",
	  "caniuse": "css-transitions",
	  "tags": ["css"]
	}
	!*/

	  Modernizr.addTest('csstransitions', testAllProps('transition', 'all', true));

	/*!
	{
	  "name": "Box Shadow",
	  "property": "boxshadow",
	  "caniuse": "css-boxshadow",
	  "tags": ["css"],
	  "knownBugs": [
	    "WebOS false positives on this test.",
	    "The Kindle Silk browser false positives"
	  ]
	}
	!*/

	  Modernizr.addTest('boxshadow', testAllProps('boxShadow', '1px 1px', true));


	  // Run each test
	  testRunner();

	  // Remove the "no-js" class if it exists
	  setClasses(classes);

	  delete ModernizrProto.addTest;
	  delete ModernizrProto.addAsyncTest;

	  // Run the things that are supposed to run after the tests
	  for (var i = 0; i < Modernizr._q.length; i++) {
	    Modernizr._q[i]();
	  }

	  // Leak Modernizr namespace
	  window.Modernizr = Modernizr;


	;

	})(window, document);

/***/ },

/***/ 107:
/*!*********************************************!*\
  !*** ./vendors/progress.js/src/progress.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Progress.js v0.1.0
	 * https://github.com/usablica/progress.js
	 * MIT licensed
	 *
	 * Copyright (C) 2013 usabli.ca - Afshin Mehrabani (@afshinmeh)
	 */

	(function (root, factory) {
	  if (true) {
	    // CommonJS
	    factory(exports);
	  } else if (typeof define === 'function' && define.amd) {
	    // AMD. Register as an anonymous module.
	    define(['exports'], factory);
	  } else {
	    // Browser globals
	    factory(root);
	  }
	} (this, function (exports) {
	  //Default config/variables
	  var VERSION = '0.1.0';

	  /**
	   * ProgressJs main class
	   *
	   * @class ProgressJs
	   */
	  function ProgressJs(obj) {

	    if (typeof obj.length != 'undefined') {
	      this._targetElement = obj; 
	    } else {
	      this._targetElement = [obj];
	    }

	    if (typeof window._progressjsId === 'undefined')
	      window._progressjsId = 1;

	    if (typeof window._progressjsIntervals === 'undefined') 
	      window._progressjsIntervals = {};

	    this._options = {
	      //progress bar theme
	      theme: 'blue',
	      //overlay mode makes an overlay layer in the target element
	      overlayMode: false,
	      //to consider CSS3 transitions in events
	      considerTransition: true
	    };
	  }

	  /**
	   * Start progress for specific element(s)
	   *
	   * @api private
	   * @method _createContainer 
	   */
	  function _startProgress() {

	    //call onBeforeStart callback
	    if (typeof this._onBeforeStartCallback != 'undefined') {
	      this._onBeforeStartCallback.call(this);
	    }

	    //create the container for progress bar
	    _createContainer.call(this);

	    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
	      _setProgress.call(this, this._targetElement[i]);
	    }
	  }

	  /**
	   * Set progress bar for specific element
	   *
	   * @api private
	   * @method _setProgress
	   * @param {Object} targetElement
	   */
	  function _setProgress(targetElement) {
	    
	    //if the target element already as `data-progressjs`, ignore the init
	    if (targetElement.hasAttribute("data-progressjs"))
	      return;

	    //get target element position
	    var targetElementOffset = _getOffset.call(this, targetElement);

	    targetElement.setAttribute("data-progressjs", window._progressjsId);
	    
	    var progressElementContainer = document.createElement('div');
	    progressElementContainer.className = 'progressjs-progress progressjs-theme-' + this._options.theme;


	    //set the position percent elements, it depends on targetElement tag
	    if (targetElement.tagName.toLowerCase() === 'body') {
	      progressElementContainer.style.position = 'fixed';
	    } else {
	      progressElementContainer.style.position = 'absolute';
	    }

	    progressElementContainer.setAttribute("data-progressjs", window._progressjsId);
	    var progressElement = document.createElement("div");
	    progressElement.className = "progressjs-inner";

	    //create an element for current percent of progress bar
	    var progressPercentElement = document.createElement('div');
	    progressPercentElement.className = "progressjs-percent";
	    progressPercentElement.innerHTML = "1%";

	    progressElement.appendChild(progressPercentElement);
	    
	    if (this._options.overlayMode && targetElement.tagName.toLowerCase() === 'body') {
	      //if we have `body` for target element and also overlay mode is enable, we should use a different
	      //position for progress bar container element
	      progressElementContainer.style.left   = 0;
	      progressElementContainer.style.right  = 0;
	      progressElementContainer.style.top    = 0;
	      progressElementContainer.style.bottom = 0;
	    } else {
	      //set progress bar container size and offset
	      progressElementContainer.style.left  = targetElementOffset.left + 'px';
	      progressElementContainer.style.top   = targetElementOffset.top + 'px';
	      //if targetElement is body set to percent so it scales with browser resize
	      if (targetElement.nodeName == 'BODY') {
	        progressElementContainer.style.width = '100%';
	      } else {
	        progressElementContainer.style.width = targetElementOffset.width + 'px';
	      }

	      if (this._options.overlayMode) {
	        progressElementContainer.style.height = targetElementOffset.height + 'px';
	      }
	    }

	    progressElementContainer.appendChild(progressElement);

	    //append the element to container
	    var container = document.querySelector('.progressjs-container');
	    container.appendChild(progressElementContainer);

	    _setPercentFor(targetElement, 1);

	    //and increase the progressId
	    ++window._progressjsId;
	  }

	  /**
	   * Set percent for all elements
	   *
	   * @api private
	   * @method _setPercent
	   * @param {Number} percent
	   */
	  function _setPercent(percent) {
	    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
	      _setPercentFor.call(this, this._targetElement[i], percent);
	    }
	  }

	  /**
	   * Set percent for specific element
	   *
	   * @api private
	   * @method _setPercentFor
	   * @param {Object} targetElement
	   * @param {Number} percent
	   */
	  function _setPercentFor(targetElement, percent) {
	    var self = this;
	    
	    //prevent overflow!
	    if (percent >= 100)
	      percent = 100;

	    if (targetElement.hasAttribute("data-progressjs")) {
	      //setTimeout for better CSS3 animation applying in some cases
	      setTimeout(function() {

	        //call the onprogress callback
	        if (typeof self._onProgressCallback != 'undefined') {
	          self._onProgressCallback.call(self, targetElement, percent);
	        }

	        var percentElement = _getPercentElement(targetElement);
	        percentElement.style.width = parseInt(percent) + '%';

	        var percentElement  = percentElement.querySelector(".progressjs-percent");
	        var existingPercent = parseInt(percentElement.innerHTML.replace('%', ''));

	        //start increase/decrease the percent element with animation
	        (function(percentElement, existingPercent, currentPercent) {

	          var increasement = true;
	          if (existingPercent > currentPercent) {
	            increasement = false;
	          }
	          
	          var intervalIn = 10;
	          function changePercentTimer(percentElement, existingPercent, currentPercent) {
	            //calculate the distance between two percents
	            var distance = Math.abs(existingPercent - currentPercent);
	            if (distance < 3) {
	              intervalIn = 30;
	            } else if (distance < 20) {
	              intervalIn = 20;
	            } else {
	              intervanIn = 1;
	            }

	            if ((existingPercent - currentPercent) != 0) {
	              //set the percent
	              percentElement.innerHTML = (increasement ? (++existingPercent) : (--existingPercent)) + '%';
	              setTimeout(function() { changePercentTimer(percentElement, existingPercent, currentPercent); }, intervalIn);
	            }
	          }
	          
	          changePercentTimer(percentElement, existingPercent, currentPercent);
	          
	        })(percentElement, existingPercent, parseInt(percent));
	        
	      }, 50);
	    }
	  }

	  /**
	   * Get the progress bar element 
	   *
	   * @api private
	   * @method _getPercentElement
	   * @param {Object} targetElement
	   */
	  function _getPercentElement(targetElement) {
	    var progressjsId = parseInt(targetElement.getAttribute('data-progressjs'));
	    return document.querySelector('.progressjs-container > .progressjs-progress[data-progressjs="' + progressjsId + '"] > .progressjs-inner');  
	  }

	  /**
	   * Auto increase the progress bar every X milliseconds
	   *
	   * @api private
	   * @method _autoIncrease
	   * @param {Number} size
	   * @param {Number} millisecond
	   */
	  function _autoIncrease(size, millisecond) {
	    var self = this;

	    var target = this._targetElement[0];
	    if(!target) return;
	    var progressjsId = parseInt(target.getAttribute('data-progressjs'));
	    
	    if (typeof window._progressjsIntervals[progressjsId] != 'undefined') {
	      clearInterval(window._progressjsIntervals[progressjsId]);
	    }
	    window._progressjsIntervals[progressjsId] = setInterval(function() {
	      _increasePercent.call(self, size);
	    }, millisecond);
	  }

	  /**
	   * Increase the size of progress bar
	   *
	   * @api private
	   * @method _increasePercent
	   * @param {Number} size
	   */
	  function _increasePercent(size) {
	    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
	      var currentElement = this._targetElement[i];
	      if (currentElement.hasAttribute('data-progressjs')) {
	        var percentElement  = _getPercentElement(currentElement);
	        var existingPercent = parseInt(percentElement.style.width.replace('%', ''));
	        if (existingPercent) {
	          _setPercentFor.call(this, currentElement, existingPercent + (size || 1));
	        }
	      }
	    }
	  }

	  /**
	   * Close and remove progress bar 
	   *
	   * @api private
	   * @method _end
	   */
	  function _end() {

	    //call onBeforeEnd callback
	    if (typeof this._onBeforeEndCallback != 'undefined') {
	      if (this._options.considerTransition === true) {
	        //we can safety assume that all layers would be the same, so `this._targetElement[0]` is the same as `this._targetElement[1]`
	        _getPercentElement(this._targetElement[0]).addEventListener(whichTransitionEvent(), this._onBeforeEndCallback, false);
	      } else {
	        this._onBeforeEndCallback.call(this);
	      }
	    }

	    var target = this._targetElement[0];
	    if(!target) return;
	    var progressjsId = parseInt(target.getAttribute('data-progressjs'));
	    
	    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
	      var currentElement = this._targetElement[i];
	      var percentElement = _getPercentElement(currentElement);

	      if (!percentElement)
	        return;

	      var existingPercent = parseInt(percentElement.style.width.replace('%', ''));
	      
	      var timeoutSec = 1;
	      if (existingPercent < 100) {
	        _setPercentFor.call(this, currentElement, 100);
	        timeoutSec = 500;
	      }

	      //I believe I should handle this situation with eventListener and `transitionend` event but I'm not sure
	      //about compatibility with IEs. Should be fixed in further versions.
	      (function(percentElement, currentElement) {
	        setTimeout(function() {
	          percentElement.parentNode.className += " progressjs-end";

	          setTimeout(function() {
	            //remove the percent element from page
	            percentElement.parentNode.parentNode.removeChild(percentElement.parentNode);
	            //and remove the attribute
	            currentElement.removeAttribute("data-progressjs");
	          }, 1000);
	        }, timeoutSec);
	      })(percentElement, currentElement);
	    }

	    //clean the setInterval for autoIncrease function
	    if (window._progressjsIntervals[progressjsId]) {
	      //`delete` keyword has some problems in IE
	      try {
	        clearInterval(window._progressjsIntervals[progressjsId]);
	        window._progressjsIntervals[progressjsId] = null;
	        delete window._progressjsIntervals[progressjsId];
	      } catch(ex) { }
	    }
	  }

	  /**
	   * Remove progress bar without finishing
	   *
	   * @api private
	   * @method _kill
	   */
	  function _kill() {
	    var target = this._targetElement[0];
	    if(!target) return;
	    var progressjsId = parseInt(target.getAttribute('data-progressjs'));

	    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
	      var currentElement = this._targetElement[i];
	      var percentElement = _getPercentElement(currentElement);

	      if (!percentElement)
	        return;

	      //I believe I should handle this situation with eventListener and `transitionend` event but I'm not sure
	      //about compatibility with IEs. Should be fixed in further versions.
	      (function(percentElement, currentElement) {
	        percentElement.parentNode.className += " progressjs-end";

	        setTimeout(function() {
	          //remove the percent element from page
	          percentElement.parentNode.parentNode.removeChild(percentElement.parentNode);
	          //and remove the attribute
	          currentElement.removeAttribute("data-progressjs");
	        }, 1000);
	      })(percentElement, currentElement);
	    }

	    //clean the setInterval for autoIncrease function
	    if (window._progressjsIntervals[progressjsId]) {
	      //`delete` keyword has some problems in IE
	      try {
	        clearInterval(window._progressjsIntervals[progressjsId]);
	        window._progressjsIntervals[progressjsId] = null;
	        delete window._progressjsIntervals[progressjsId];
	      } catch(ex) { }
	    }
	  }

	  /**
	   * Create the progress bar container
	   *
	   * @api private
	   * @method _createContainer
	   */
	  function _createContainer() {
	    //first check if we have an container already, we don't need to create it again
	    if (!document.querySelector(".progressjs-container")) {
	      var containerElement = document.createElement("div");
	      containerElement.className = "progressjs-container";
	      document.body.appendChild(containerElement);
	    }
	  }

	  /**
	   * Get an element position on the page
	   * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
	   *
	   * @api private
	   * @method _getOffset
	   * @param {Object} element
	   * @returns Element's position info
	   */
	  function _getOffset(element) {
	    var elementPosition = {};

	    if (element.tagName.toLowerCase() === 'body') {
	      //set width
	      elementPosition.width = element.clientWidth;
	      //set height
	      elementPosition.height = element.clientHeight;
	    } else {
	      //set width
	      elementPosition.width = element.offsetWidth;
	      //set height
	      elementPosition.height = element.offsetHeight;
	    }

	    //calculate element top and left
	    var _x = 0;
	    var _y = 0;
	    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
	      _x += element.offsetLeft;
	      _y += element.offsetTop;
	      element = element.offsetParent;
	    }
	    //set top
	    elementPosition.top = _y;
	    //set left
	    elementPosition.left = _x;

	    return elementPosition;
	  }

	  /**
	   * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
	   * via: http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
	   *
	   * @param obj1
	   * @param obj2
	   * @returns obj3 a new object based on obj1 and obj2
	   */
	  function _mergeOptions(obj1, obj2) {
	    var obj3 = {};
	    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
	    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
	    return obj3;
	  }

	  var progressJs = function (targetElm) {
	    if (typeof (targetElm) === 'object') {
	      //Ok, create a new instance
	      return new ProgressJs(targetElm);

	    } else if (typeof (targetElm) === 'string') {
	      //select the target element with query selector
	      var targetElement = document.querySelectorAll(targetElm);
	       
	      if (targetElement) {
	        return new ProgressJs(targetElement);
	      } else {
	        throw new Error('There is no element with given selector.');
	      }
	    } else {
	      return new ProgressJs(document.body);
	    }
	  };

	  /**
	   * Get correct transition callback
	   * Thanks @webinista: http://stackoverflow.com/a/9090128/375966
	   *
	   * @returns transition name
	   */
	  function whichTransitionEvent() {
	    var t;
	    var el = document.createElement('fakeelement');
	    var transitions = {
	      'transition': 'transitionend',
	      'OTransition': 'oTransitionEnd',
	      'MozTransition': 'transitionend',
	      'WebkitTransition': 'webkitTransitionEnd'
	    }

	    for (t in transitions) {
	      if (el.style[t] !== undefined) {
	        return transitions[t];
	      }
	    }
	  }

	  /**
	   * Current ProgressJs version
	   *
	   * @property version
	   * @type String
	   */
	  progressJs.version = VERSION;

	  //Prototype
	  progressJs.fn = ProgressJs.prototype = {
	    clone: function () {
	      return new ProgressJs(this);
	    },
	    setOption: function(option, value) {
	      this._options[option] = value;
	      return this;
	    },
	    setOptions: function(options) {
	      this._options = _mergeOptions(this._options, options);
	      return this;
	    },
	    start: function() {
	      _startProgress.call(this);
	      return this;
	    },
	    set: function(percent) {
	      _setPercent.call(this, percent);
	      return this;
	    },
	    increase: function(size) {
	      _increasePercent.call(this, size);
	      return this;
	    },
	    autoIncrease: function(size, millisecond) {
	      _autoIncrease.call(this, size, millisecond);
	      return this;
	    },
	    end: function() {
	      _end.call(this);
	      return this;
	    },
	    kill: function() {
	      _kill.call(this);
	      return this;
	    },
	    onbeforeend: function(providedCallback) {
	      if (typeof (providedCallback) === 'function') {
	        this._onBeforeEndCallback = providedCallback;
	      } else {
	        throw new Error('Provided callback for onbeforeend was not a function');
	      }
	      return this;
	    },
	    onbeforestart: function(providedCallback) {
	      if (typeof (providedCallback) === 'function') {
	        this._onBeforeStartCallback = providedCallback;
	      } else {
	        throw new Error('Provided callback for onbeforestart was not a function');
	      }
	      return this;
	    },
	    onprogress: function(providedCallback) {
	      if (typeof (providedCallback) === 'function') {
	        this._onProgressCallback = providedCallback;
	      } else {
	        throw new Error('Provided callback for onprogress was not a function');
	      }
	      return this;
	    }
	  };

	  exports.progressJs = progressJs;
	  return progressJs;
	}));


/***/ },

/***/ 11:
/*!*************************!*\
  !*** external "window" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = window;

/***/ },

/***/ 173:
/*!**********************!*\
  !*** ./dev/boot.jsx ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __WEBPACK_IMPORTED_MODULE_0_window__ && __WEBPACK_IMPORTED_MODULE_0_window__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_window__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_window__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_window___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_window___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_es6_promise_polyfill_promise_js__ = __webpack_require__(/*! es6-promise-polyfill/promise.js */ 103);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_es6_promise_polyfill_promise_js___default = __WEBPACK_IMPORTED_MODULE_1_es6_promise_polyfill_promise_js__ && __WEBPACK_IMPORTED_MODULE_1_es6_promise_polyfill_promise_js__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_es6_promise_polyfill_promise_js__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_es6_promise_polyfill_promise_js__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_es6_promise_polyfill_promise_js___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_es6_promise_polyfill_promise_js___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jassl__ = __webpack_require__(/*! jassl */ 104);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jassl___default = __WEBPACK_IMPORTED_MODULE_2_jassl__ && __WEBPACK_IMPORTED_MODULE_2_jassl__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_jassl__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_jassl__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_jassl___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_jassl___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendors_progress_js_src_progress_js__ = __webpack_require__(/*! ../vendors/progress.js/src/progress.js */ 107);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendors_progress_js_src_progress_js___default = __WEBPACK_IMPORTED_MODULE_3__vendors_progress_js_src_progress_js__ && __WEBPACK_IMPORTED_MODULE_3__vendors_progress_js_src_progress_js__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3__vendors_progress_js_src_progress_js__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3__vendors_progress_js_src_progress_js__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3__vendors_progress_js_src_progress_js___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3__vendors_progress_js_src_progress_js___default });







	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Promise = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Promise || /* harmony import */__WEBPACK_IMPORTED_MODULE_1_es6_promise_polyfill_promise_js__["Promise"];
	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.progressJs = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.progressJs || /* harmony import */__WEBPACK_IMPORTED_MODULE_3__vendors_progress_js_src_progress_js__["progressJs"].bind()();
	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.jassl = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_jassl__["jassl"];

	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.progressJs.onbeforeend(function () {
		var _$ = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.$;
		if (_$) {
			_$('.progressjs-container').hide();
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.setTimeout(function () {
				_$('.progressjs-container').remove();
			}, 200);
		}
	});

	__webpack_require__(/*! ../vendors/json2/json2.js */ 105);
	__webpack_require__(/*! ../vendors/modernizr/modernizr-custom.js */ 106);

	__webpack_require__(/*! Common/Booter.jsx */ 102);

	if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__runBoot) {
		/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__runBoot();
	}

/***/ },

/***/ 174:
/*!******************************!*\
  !*** ./~/jassl/lib/jassl.js ***!
  \******************************/
/***/ function(module, exports) {

	"use strict";
	
	'use strict';

	var w = typeof window !== 'undefined' ? window : null;

	var jassl = function (src, async) {

		if (!w || !w.document || !w.document.body)
		{
			throw new Error('window object is not available your environment.');
		}

		if (!w.Promise || !w.Promise.all)
		{
			throw new Error('Promises are not available your environment.');
		}

		if (!src)
		{
			throw new Error('src should not be empty.');
		}

		return new w.Promise(function(resolve, reject) {

			var element = w.document.createElement('script');

			element.onload = function() {
				resolve(src);
			};

			element.onerror = function() {
				reject(new Error(src));
			};

			element.async = true === async;
			element.src = src;

			w.document.body.appendChild(element);
		});
	};

	module.exports = jassl;
	module.exports.jassl = jassl;


/***/ },

/***/ 175:
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 176:
/*!******************************!*\
  !*** ./dev/Html/Layout.html ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = "<div id=\"rl-bg\" class=\"thm-body\"></div>\r\n<div id=\"rl-loading\" class=\"thm-loading\" style=\"opacity:0\">\r\n\t<div id=\"rl-loading-desc\"></div>\r\n\t<div class=\"e-spinner\">\r\n\t\t<div class=\"e-bounce bounce1\"></div>\r\n\t\t<div class=\"e-bounce bounce2\"></div>\r\n\t\t<div class=\"e-bounce bounce3\"></div>\r\n\t</div>\r\n</div>\r\n<div id=\"rl-loading-error\" class=\"thm-loading\">\r\n\tAn error occurred. <br /> Please refresh the page and try again.\r\n\t<div id=\"rl-loading-error-additional\"></div>\r\n</div>\r\n<div id=\"rl-content\">\r\n\t<div id=\"rl-popups\"></div>\r\n\t<div id=\"rl-center\">\r\n\t\t<div id=\"rl-top\"></div>\r\n\t\t<div id=\"rl-left\"></div>\r\n\t\t<div id=\"rl-right\"></div>\r\n\t\t<div id=\"rl-bottom\"></div>\r\n\t</div>\r\n</div>\r\n<div id=\"rl-templates\"></div>\r\n<div id=\"rl-hidden\"></div>"

/***/ },

/***/ 177:
/*!******************************!*\
  !*** ./dev/Styles/@Boot.css ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = "\r\n#rl-content{\r\n\tdisplay: none;\r\n}\r\n\r\n.internal-hiddden{\r\n\tdisplay: none !important;\r\n}\r\n\r\nhtml.no-css, html.no-css body {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-family: Arial, Verdana, Geneva, sans-serif;\r\n\tbackground-color: #eee;\r\n}\r\n\r\nhtml.no-css #rl-content, html.no-css #rl-loading{\r\n\tdisplay: none;\r\n}\r\n\r\nhtml.no-css #rl-loading-error {\r\n\tposition: absolute;\r\n\tfont-size: 30px;\r\n\tline-height: 130%;\r\n\ttop: 50%;\r\n\twidth: 100%;\r\n\theight: 65px;\r\n\tmargin: 0;\r\n\tmargin-top: -60px;\r\n\tbackground-color: transparent;\r\n\ttext-align: center;\r\n\tcolor: #333;\r\n}\r\n\r\nhtml.no-css .progressjs-container {\r\n\tdisplay: none;\r\n}\r\n\r\nhtml.no-css .thm-body {\r\n\tcolor: #333;\r\n\tbackground-color: #aaa;\r\n\tbackground-image: none;\r\n}\r\n\r\nhtml.no-css .thm-loading {\r\n\tcolor: #333 !important;\r\n\ttext-shadow: none !important;\r\n\r\n\t.e-spinner .e-bounce {\r\n\t\tdisplay: none !important;\r\n\t}\r\n}\r\n\r\nhtml.no-css .thm-login-desc .desc {\r\n\tcolor: #333 !important;\r\n\ttext-shadow: none !important;\r\n}\r\n"

/***/ },

/***/ 178:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/***/ function(module, exports) {

	var g;

	// This works in non-strict mode
	g = (function() { return this; })();

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


/***/ },

/***/ 49:
/*!************************************!*\
  !*** external "window.progressJs" ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = window.progressJs;

/***/ },

/***/ 77:
/*!**********************************!*\
  !*** ./dev/Storage/RainLoop.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __WEBPACK_IMPORTED_MODULE_0_window__ && __WEBPACK_IMPORTED_MODULE_0_window__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_window__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_window__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_window___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_window___default });
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



	var STORAGE_KEY = '__rlA',
	    TIME_KEY = '__rlT';

	var RainLoopStorage = function () {
		function RainLoopStorage() {
			_classCallCheck(this, RainLoopStorage);

			this.s = null;
			this.t = null;

			this.s = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.sessionStorage || null;
			this.t = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.top || /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a;

			this.init();
		}

		RainLoopStorage.prototype.__get = function __get(key) {

			var result = null;
			if (this.s) {
				result = this.s.getItem(key) || null;
			} else if (this.t && JSON) {
				var data = this.t.name && '{' === this.t.name.toString().substr(0, 1) ? JSON.parse(this.t.name.toString()) : null;
				result = data ? data[key] || null : null;
			}

			return result;
		};

		RainLoopStorage.prototype.__set = function __set(key, value) {
			if (this.s) {
				this.s.setItem(key, value);
			} else if (this.t && JSON) {
				var data = this.t.name && '{' === this.t.name.toString().substr(0, 1) ? JSON.parse(this.t.name.toString()) : null;
				data = data || {};
				data[key] = value;

				this.t.name = JSON.stringify(data);
			}
		};

		RainLoopStorage.prototype.timestamp = function timestamp() {
			return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Math.round(new Date().getTime() / 1000);
		};

		RainLoopStorage.prototype.checkTimestamp = function checkTimestamp() {

			if (this.timestamp() > this.getTimestamp() + 1000 * 60 * 60) // 60m
				{
					this.clearHash();
					return true;
				}

			return false;
		};

		RainLoopStorage.prototype.init = function init() {
			var _this = this;

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.setInterval(function () {
				_this.setTimestamp();
			}, 1000 * 60); // 1m
		};

		RainLoopStorage.prototype.getHash = function getHash() {
			return this.__get(STORAGE_KEY);
		};

		RainLoopStorage.prototype.setHash = function setHash() {

			var key = 'AuthAccountHash',
			    appData = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah_data();

			this.__set(STORAGE_KEY, appData && appData[key] ? appData[key] : '');
			this.setTimestamp();
		};

		RainLoopStorage.prototype.setTimestamp = function setTimestamp() {
			this.__set(TIME_KEY, this.timestamp());
		};

		RainLoopStorage.prototype.getTimestamp = function getTimestamp() {
			var time = this.__get(TIME_KEY, 0);
			return time ? /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.parseInt(time, 10) | 0 : 0;
		};

		RainLoopStorage.prototype.clearHash = function clearHash() {
			this.__set(STORAGE_KEY, '');
			this.setTimestamp();
		};

		return RainLoopStorage;
	}();

	module.exports = new RainLoopStorage();

/***/ },

/***/ 79:
/*!*************************************!*\
  !*** ./~/timers-browserify/main.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(/*! process/browser.js */ 175).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/timers-browserify/main.js */ 79).setImmediate, __webpack_require__(/*! ./~/timers-browserify/main.js */ 79).clearImmediate))

/***/ }

/******/ });