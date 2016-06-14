/* RainLoop Webmail (c) RainLoop Team | Licensed under AGPL v3 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 171);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************!*\
  !*** ./dev/Common/Utils.jsx ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __WEBPACK_IMPORTED_MODULE_0_window__ && __WEBPACK_IMPORTED_MODULE_0_window__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_window__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_window__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_window___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_window___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! $ */ 13);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __WEBPACK_IMPORTED_MODULE_1____ && __WEBPACK_IMPORTED_MODULE_1____.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1____['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1____; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_____default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_____default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! _ */ 2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __WEBPACK_IMPORTED_MODULE_2____ && __WEBPACK_IMPORTED_MODULE_2____.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2____['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2____; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_____default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_____default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko___default = __WEBPACK_IMPORTED_MODULE_3_ko__ && __WEBPACK_IMPORTED_MODULE_3_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
	/* harmony export */ exports["silentTryCatch"] = silentTryCatch;/* harmony export */ exports["isNormal"] = isNormal;/* harmony export */ exports["isPosNumeric"] = isPosNumeric;/* harmony export */ exports["pInt"] = pInt;/* harmony export */ exports["pString"] = pString;/* harmony export */ exports["pBool"] = pBool;/* harmony export */ exports["isNonEmptyArray"] = isNonEmptyArray;/* harmony export */ exports["encodeURIComponent"] = encodeURIComponent;/* harmony export */ exports["decodeURIComponent"] = decodeURIComponent;/* harmony export */ exports["simpleQueryParser"] = simpleQueryParser;/* harmony export */ exports["fakeMd5"] = fakeMd5;/* harmony export */ exports["encodeHtml"] = encodeHtml;/* harmony export */ exports["splitPlainText"] = splitPlainText;/* harmony export */ exports["hos"] = hos;/* harmony export */ exports["inFocus"] = inFocus;/* harmony export */ exports["removeInFocus"] = removeInFocus;/* harmony export */ exports["removeSelection"] = removeSelection;/* harmony export */ exports["replySubjectAdd"] = replySubjectAdd;/* harmony export */ exports["roundNumber"] = roundNumber;/* harmony export */ exports["friendlySize"] = friendlySize;/* harmony export */ exports["log"] = log;/* harmony export */ exports["delegateRun"] = delegateRun;/* harmony export */ exports["kill_CtrlA_CtrlS"] = kill_CtrlA_CtrlS;/* harmony export */ exports["createCommand"] = createCommand;/* harmony export */ exports["quoteName"] = quoteName;/* harmony export */ exports["microtime"] = microtime;/* harmony export */ exports["timestamp"] = timestamp;/* harmony export */ exports["convertLangName"] = convertLangName;/* harmony export */ exports["draggablePlace"] = draggablePlace;/* harmony export */ exports["defautOptionsAfterRender"] = defautOptionsAfterRender;/* harmony export */ exports["windowPopupKnockout"] = windowPopupKnockout;/* harmony export */ exports["settingsSaveHelperFunction"] = settingsSaveHelperFunction;/* harmony export */ exports["settingsSaveHelperSimpleFunction"] = settingsSaveHelperSimpleFunction;/* harmony export */ exports["settingsSaveHelperSubscribeFunction"] = settingsSaveHelperSubscribeFunction;/* harmony export */ exports["findEmailAndLinks"] = findEmailAndLinks;/* harmony export */ exports["htmlToPlain"] = htmlToPlain;/* harmony export */ exports["plainToHtml"] = plainToHtml;/* harmony export */ exports["resizeAndCrop"] = resizeAndCrop;/* harmony export */ exports["folderListOptionsBuilder"] = folderListOptionsBuilder;/* harmony export */ exports["computedPagenatorHelper"] = computedPagenatorHelper;/* harmony export */ exports["selectElement"] = selectElement;/* harmony export */ exports["triggerAutocompleteInputChange"] = triggerAutocompleteInputChange;/* harmony export */ exports["setHeadViewport"] = setHeadViewport;/* harmony export */ exports["getFileExtension"] = getFileExtension;/* harmony export */ exports["getConfigurationFromScriptTag"] = getConfigurationFromScriptTag;/* harmony export */ exports["mimeContentType"] = mimeContentType;/* harmony export */ exports["disposeOne"] = disposeOne;/* harmony export */ exports["disposeObject"] = disposeObject;/* harmony export */ exports["delegateRunOnDestroy"] = delegateRunOnDestroy;/* harmony export */ exports["appendStyles"] = appendStyles;/* harmony export */ exports["changeTheme"] = changeTheme;/* harmony export */ exports["mailToHelper"] = mailToHelper;/* harmony export */ exports["windowResizeCallback"] = windowResizeCallback;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };








	var JSEncrypt = __webpack_require__(/*! JSEncrypt */ 81);
	var Autolinker = __webpack_require__(/*! Autolinker */ 80);
	var Mime = __webpack_require__(/*! Common/Mime */ 67);

	var trim = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.trim;
	var inArray = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.inArray;
	var isArray = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.isArray;
	var isObject = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.isObject;
	var isFunc = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.isFunction;
	var isUnd = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.isUndefined;
	var isNull = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.isNull;
	var noop = function noop() {};


	/* harmony export */ Object.defineProperty(exports, "isArray", {configurable: false, enumerable: true, get: function() { return isArray; }});
	/* harmony export */ Object.defineProperty(exports, "isObject", {configurable: false, enumerable: true, get: function() { return isObject; }});
	/* harmony export */ Object.defineProperty(exports, "isFunc", {configurable: false, enumerable: true, get: function() { return isFunc; }});
	/* harmony export */ Object.defineProperty(exports, "isNull", {configurable: false, enumerable: true, get: function() { return isNull; }});
	/* harmony export */ Object.defineProperty(exports, "noop", {configurable: false, enumerable: true, get: function() { return noop; }});
	/* harmony export */ Object.defineProperty(exports, "emptyFunction", {configurable: false, enumerable: true, get: function() { return noop; }});
	/* harmony export */ Object.defineProperty(exports, "trim", {configurable: false, enumerable: true, get: function() { return trim; }});
	/* harmony export */ Object.defineProperty(exports, "inArray", {configurable: false, enumerable: true, get: function() { return inArray; }});
	/* harmony export */ Object.defineProperty(exports, "isUnd", {configurable: false, enumerable: true, get: function() { return isUnd; }});

	/**
	 * @param {Function} callback
	 */
	function silentTryCatch(callback) {
		try {
			callback();
		} catch (e) {
			// eslint-disable-line no-empty
		}
	}

	/**
	 * @param {*} value
	 * @return {boolean}
	 */
	function isNormal(value) {
		return !isUnd(value) && !isNull(value);
	}

	/**
	 * @param {(string|number)} value
	 * @param {boolean=} includeZero = true
	 * @return {boolean}
	 */
	function isPosNumeric(value) {
		var includeZero = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		return !isNormal(value) ? false : includeZero ? /^[0-9]*$/.test(value.toString()) : /^[1-9]+[0-9]*$/.test(value.toString());
	}

	/**
	 * @param {*} value
	 * @param {number=} defaultValur = 0
	 * @return {number}
	 */
	function pInt(value) {
		var defaultValur = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		var result = isNormal(value) && '' !== value ? /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.parseInt(value, 10) : defaultValur;
		return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.isNaN(result) ? defaultValur : result;
	}

	/**
	 * @param {*} value
	 * @return {string}
	 */
	function pString(value) {
		return isNormal(value) ? '' + value : '';
	}

	/**
	 * @param {*} value
	 * @return {boolean}
	 */
	function pBool(value) {
		return !!value;
	}

	/**
	 * @param {*} values
	 * @return {boolean}
	 */
	function isNonEmptyArray(values) {
		return isArray(values) && 0 < values.length;
	}

	/**
	 * @param {string} component
	 * @return {string}
	 */
	function encodeURIComponent(component) {
		return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.encodeURIComponent(component);
	}

	/**
	 * @param {string} component
	 * @return {string}
	 */
	function decodeURIComponent(component) {
		return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.decodeURIComponent(component);
	}

	/**
	 * @param {string} queryString
	 * @return {Object}
	 */
	function simpleQueryParser(queryString) {
		var params = {},
		    queries = [],
		    temp = [],
		    index = 0,
		    len = 0;

		queries = queryString.split('&');
		for (index = 0, len = queries.length; index < len; index++) {
			temp = queries[index].split('=');
			params[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
		}

		return params;
	}

	/**
	 * @param {number=} len = 32
	 * @return {string}
	 */
	function fakeMd5() {
		var len = arguments.length <= 0 || arguments[0] === undefined ? 32 : arguments[0];

		var line = '0123456789abcdefghijklmnopqrstuvwxyz',
		    lineLen = line.length;

		len = pInt(len);

		var result = '';
		while (result.length < len) {
			result += line.substr(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Math.round(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Math.random() * lineLen), 1);
		}

		return result;
	}

	var encryptObject = null;

	/**
	 * @param {constructor} JSEncryptClass
	 * @param {string} publicKey
	 * @return {JSEncrypt|boolean}
	 */
	var rsaObject = function rsaObject(JSEncryptClass, publicKey) {

		if (JSEncryptClass && publicKey && (null === encryptObject || encryptObject && encryptObject.__publicKey !== publicKey) && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.crypto && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.crypto.getRandomValues) {
			encryptObject = new JSEncryptClass();
			encryptObject.setPublicKey(publicKey);
			encryptObject.__publicKey = publicKey;
		} else {
			encryptObject = false;
		}

		return encryptObject;
	};

	/**
	 * @param {string} value
	 * @param {string} publicKey
	 * @return {string}
	 */
	var rsaEncode = function rsaEncode(value, publicKey) {

		if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.crypto && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.crypto.getRandomValues && publicKey) {
			var resultValue = false,
			    encrypt = rsaObject(JSEncrypt, publicKey);

			if (encrypt) {
				resultValue = encrypt.encrypt(fakeMd5() + ':' + value + ':' + fakeMd5());
				if (false !== resultValue && isNormal(resultValue)) {
					return 'rsa:xxx:' + resultValue;
				}
			}
		}

		return value;
	};

	rsaEncode.supported = !!(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.crypto && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.crypto.getRandomValues && false && JSEncrypt);


	/* harmony export */ Object.defineProperty(exports, "rsaEncode", {configurable: false, enumerable: true, get: function() { return rsaEncode; }});

	/**
	 * @param {string} text
	 * @return {string}
	 */
	function encodeHtml(text) {
		return isNormal(text) ? /* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.escape(text.toString()) : '';
	}

	/**
	 * @param {string} text
	 * @param {number=} iLen = 100
	 * @return {string}
	 */
	function splitPlainText(text) {
		var len = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

		var prefix = '',
		    subText = '',
		    result = text,
		    spacePos = 0,
		    newLinePos = 0;

		while (result.length > len) {
			subText = result.substring(0, len);
			spacePos = subText.lastIndexOf(' ');
			newLinePos = subText.lastIndexOf('\n');

			if (-1 !== newLinePos) {
				spacePos = newLinePos;
			}

			if (-1 === spacePos) {
				spacePos = len;
			}

			prefix += subText.substring(0, spacePos) + '\n';
			result = result.substring(spacePos + 1);
		}

		return prefix + result;
	}

	var timeOutAction = function () {
		var timeOuts = {};
		return function (action, fFunction, timeOut) {
			timeOuts[action] = isUnd(timeOuts[action]) ? 0 : timeOuts[action];
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.clearTimeout(timeOuts[action]);
			timeOuts[action] = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.setTimeout(fFunction, timeOut);
		};
	}();

	var timeOutActionSecond = function () {
		var timeOuts = {};
		return function (action, fFunction, timeOut) {
			if (!timeOuts[action]) {
				timeOuts[action] = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.setTimeout(function () {
					fFunction();
					timeOuts[action] = 0;
				}, timeOut);
			}
		};
	}();


	/* harmony export */ Object.defineProperty(exports, "timeOutActionSecond", {configurable: false, enumerable: true, get: function() { return timeOutActionSecond; }});
	/* harmony export */ Object.defineProperty(exports, "timeOutAction", {configurable: false, enumerable: true, get: function() { return timeOutAction; }});

	/**
	 * @param {(Object|null|undefined)} item
	 * @param {string} prop
	 * @return {boolean}
	 */
	function hos(item, prop) {
		return item && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Object && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Object.hasOwnProperty ? /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Object.hasOwnProperty.call(item, prop) : false;
	}

	/**
	 * @return {boolean}
	 */
	function inFocus() {
		if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.activeElement) {
			if (isUnd(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.activeElement.__inFocusCache)) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.activeElement.__inFocusCache = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.activeElement).is('input,textarea,iframe,.cke_editable');
			}

			return !!/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.activeElement.__inFocusCache;
		}

		return false;
	}

	function removeInFocus(force) {
		if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.activeElement && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.activeElement.blur) {
			try {
				var activeEl = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.activeElement);
				if (activeEl && activeEl.is('input,textarea')) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.activeElement.blur();
				} else if (force) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.activeElement.blur();
				}
			} catch (e) {
				// eslint-disable-line no-empty
			}
		}
	}

	function removeSelection() {
		try {
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.getSelection) {
				var sel = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.getSelection();
				if (sel && sel.removeAllRanges) {
					sel.removeAllRanges();
				}
			} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.selection && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.selection.empty) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.selection.empty();
			}
		} catch (e) {
			// eslint-disable-line no-empty
		}
	}

	/**
	 * @param {string} prefix
	 * @param {string} subject
	 * @return {string}
	 */
	function replySubjectAdd(prefix, subject) {
		prefix = trim(prefix.toUpperCase());
		subject = trim(subject.replace(/[\s]+/g, ' '));

		var drop = false,
		    parts = [],
		    re = 'RE' === prefix,
		    fwd = 'FWD' === prefix,
		    prefixIsRe = !fwd;

		if ('' !== subject) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.each(subject.split(':'), function (part) {
				var trimmedPart = trim(part);
				if (!drop && (/^(RE|FWD)$/i.test(trimmedPart) || /^(RE|FWD)[\[\(][\d]+[\]\)]$/i.test(trimmedPart))) {
					if (!re) {
						re = !!/^RE/i.test(trimmedPart);
					}

					if (!fwd) {
						fwd = !!/^FWD/i.test(trimmedPart);
					}
				} else {
					parts.push(part);
					drop = true;
				}
			});
		}

		if (prefixIsRe) {
			re = false;
		} else {
			fwd = false;
		}

		return trim((prefixIsRe ? 'Re: ' : 'Fwd: ') + (re ? 'Re: ' : '') + (fwd ? 'Fwd: ' : '') + trim(parts.join(':')));
	}

	/**
	 * @param {number} num
	 * @param {number} dec
	 * @return {number}
	 */
	function roundNumber(num, dec) {
		return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Math.round(num * /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Math.pow(10, dec)) / /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Math.pow(10, dec);
	}

	/**
	 * @param {(number|string)} sizeInBytes
	 * @return {string}
	 */
	function friendlySize(sizeInBytes) {
		sizeInBytes = pInt(sizeInBytes);

		if (sizeInBytes >= 1073741824) {
			return roundNumber(sizeInBytes / 1073741824, 1) + 'GB';
		} else if (sizeInBytes >= 1048576) {
			return roundNumber(sizeInBytes / 1048576, 1) + 'MB';
		} else if (sizeInBytes >= 1024) {
			return roundNumber(sizeInBytes / 1024, 0) + 'KB';
		}

		return sizeInBytes + 'B';
	}

	/**
	 * @param {string} desc
	 */
	function log(desc) {
		if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.console && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.console.log) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.console.log(desc);
		}
	}

	/**
	 * @param {?} object
	 * @param {string} methodName
	 * @param {Array=} params
	 * @param {number=} delay = 0
	 */
	function delegateRun(object, methodName, params) {
		var delay = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

		if (object && object[methodName]) {
			delay = pInt(delay);
			if (0 >= delay) {
				object[methodName].apply(object, isArray(params) ? params : []);
			} else {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.delay(function () {
					object[methodName].apply(object, isArray(params) ? params : []);
				}, delay);
			}
		}
	}

	/**
	 * @param {?} event
	 */
	function kill_CtrlA_CtrlS(event) {
		event = event || /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.event;
		if (event && event.ctrlKey && !event.shiftKey && !event.altKey) {
			var key = event.keyCode || event.which;
			if (key === /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["EventKeyCode"].S) {
				event.preventDefault();
				return;
			} else if (key === /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["EventKeyCode"].A) {
				var sender = event.target || event.srcElement;
				if (sender && ('true' === '' + sender.contentEditable || sender.tagName && sender.tagName.match(/INPUT|TEXTAREA/i))) {
					return;
				}

				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.getSelection) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.getSelection().removeAllRanges();
				} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.selection && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.selection.clear) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.selection.clear();
				}

				event.preventDefault();
			}
		}
	}

	/**
	 * @param {(Object|null|undefined)} context
	 * @param {Function} fExecute
	 * @param {(Function|boolean|null)=} fCanExecute = true
	 * @return {Function}
	 */
	function createCommand(context, fExecute) {
		var fCanExecute = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];


		var fResult = null,
		    fNonEmpty = function fNonEmpty() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			if (fResult && fResult.canExecute && fResult.canExecute()) {
				fExecute.apply(context, args);
			}
			return false;
		};

		fResult = fExecute ? fNonEmpty : noop;
		fResult.enabled = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(true);

		if (isFunc(fCanExecute)) {
			fResult.canExecute = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_ko___default.a.computed(function () {
				return fResult.enabled() && fCanExecute.call(context);
			});
		} else {
			fResult.canExecute = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_ko___default.a.computed(function () {
				return fResult.enabled() && !!fCanExecute;
			});
		}

		return fResult;
	}

	/**
	 * @param {string} theme
	 * @return {string}
	 */
	var convertThemeName = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.memoize(function (theme) {

		if ('@custom' === theme.substr(-7)) {
			theme = trim(theme.substring(0, theme.length - 7));
		}

		return trim(theme.replace(/[^a-zA-Z0-9]+/g, ' ').replace(/([A-Z])/g, ' $1').replace(/[\s]+/g, ' '));
	});
	/* harmony export */ Object.defineProperty(exports, "convertThemeName", {configurable: false, enumerable: true, get: function() { return convertThemeName; }});

	/**
	 * @param {string} name
	 * @return {string}
	 */
	function quoteName(name) {
		return name.replace(/["]/g, '\\"');
	}

	/**
	 * @return {number}
	 */
	function microtime() {
		return new /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Date().getTime();
	}

	/**
	 * @return {number}
	 */
	function timestamp() {
		return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Math.round(microtime() / 1000);
	}

	/**
	 *
	 * @param {string} language
	 * @param {boolean=} isEng = false
	 * @return {string}
	 */
	function convertLangName(language) {
		var isEng = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

		return __webpack_require__(/*! Common/Translator */ 5).i18n('LANGS_NAMES' + (true === isEng ? '_EN' : '') + '/LANG_' + language.toUpperCase().replace(/[^a-zA-Z0-9]+/g, '_'), null, language);
	}

	function draggablePlace() {
		return /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('<div class="draggablePlace">' + '<span class="text"></span>&nbsp;' + '<i class="icon-copy icon-white visible-on-ctrl"></i>' + '<i class="icon-mail icon-white hidden-on-ctrl"></i></div>').appendTo('#rl-hidden');
	}

	function defautOptionsAfterRender(domOption, item) {
		if (item && !isUnd(item.disabled) && domOption) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()(domOption).toggleClass('disabled', item.disabled).prop('disabled', item.disabled);
		}
	}

	/**
	 * @param {Object} viewModel
	 * @param {string} templateID
	 * @param {string} title
	 * @param {Function=} fCallback = null
	 */
	function windowPopupKnockout(viewModel, templateID, title) {
		var fCallback = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

		var win = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.open(''),
		    func = '__OpenerApplyBindingsUid' + fakeMd5() + '__',
		    template = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('#' + templateID);

		/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a[func] = function () {

			if (win && win.document.body && template && template[0]) {
				var body = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()(win.document.body);

				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('#rl-content', body).html(template.html());
				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('html', win.document).addClass('external ' + /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('html').attr('class'));

				__webpack_require__(/*! Common/Translator */ 5).i18nToNodes(body);

				if (viewModel && /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('#rl-content', body)[0]) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_3_ko___default.a.applyBindings(viewModel, /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('#rl-content', body)[0]);
				}

				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a[func] = null;

				if (fCallback) {
					fCallback(win);
				}
			}
		};

		win.document.open();
		win.document.write('<html><head>' + '<meta charset="utf-8" />' + '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />' + '<meta name="viewport" content="user-scalable=no" />' + '<meta name="apple-mobile-web-app-capable" content="yes" />' + '<meta name="robots" content="noindex, nofollow, noodp" />' + '<title>' + encodeHtml(title) + '</title>' + '</head><body><div id="rl-content"></div></body></html>');
		win.document.close();

		var script = win.document.createElement('script');
		script.type = 'text/javascript';
		script.innerHTML = 'if(window&&window.opener&&window.opener[\'' + func + ']\'){window.opener[\'' + func + '\']();window.opener[\'' + func + '\']=null}';

		win.document.getElementsByTagName('head')[0].appendChild(script);
	}

	/**
	 * @param {Function} fCallback
	 * @param {?} koTrigger
	 * @param {?} context = null
	 * @param {number=} timer = 1000
	 * @return {Function}
	 */
	function settingsSaveHelperFunction(fCallback, koTrigger) {
		var context = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
		var timer = arguments.length <= 3 || arguments[3] === undefined ? 1000 : arguments[3];

		timer = pInt(timer);
		return function (type, data, cached, requestAction, requestParameters) {
			koTrigger.call(context, data && data.Result ? /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].TrueResult : /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].FalseResult);
			if (fCallback) {
				fCallback.call(context, type, data, cached, requestAction, requestParameters);
			}
			/* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.delay(function () {
				koTrigger.call(context, /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].Idle);
			}, timer);
		};
	}

	function settingsSaveHelperSimpleFunction(koTrigger, context) {
		return settingsSaveHelperFunction(null, koTrigger, context, 1000);
	}

	function settingsSaveHelperSubscribeFunction(remote, settingName, type, fTriggerFunction) {
		return function (value) {

			if (remote) {
				switch (type) {
					default:
						value = pString(value);
						break;
					case 'bool':
					case 'boolean':
						value = value ? '1' : '0';
						break;
					case 'int':
					case 'integer':
					case 'number':
						value = pInt(value);
						break;
					case 'trim':
						value = trim(value);
						break;
				}

				var data = {};
				data[settingName] = value;

				if (remote.saveAdminConfig) {
					remote.saveAdminConfig(fTriggerFunction || null, data);
				} else if (remote.saveSettings) {
					remote.saveSettings(fTriggerFunction || null, data);
				}
			}
		};
	}

	/**
	 * @param {string} html
	 * @return {string}
	 */
	function findEmailAndLinks(html) {
		//	return html;
		return Autolinker.link(html, {
			newWindow: true,
			stripPrefix: false,
			urls: true,
			email: true,
			twitter: false,
			replaceFn: function replaceFn(autolinker, match) {
				return !(autolinker && match && 'url' === match.getType() && match.matchedText && 0 !== match.matchedText.indexOf('http'));
			}
		});
	}

	/**
	 * @param {string} html
	 * @return {string}
	 */
	function htmlToPlain(html) {
		var iPos = 0,
		    iP1 = 0,
		    iP2 = 0,
		    iP3 = 0,
		    iLimit = 0,
		    text = '',
		    convertBlockquote = function convertBlockquote(blockquoteText) {
			blockquoteText = '> ' + trim(blockquoteText).replace(/\n/gm, '\n> ');
			return blockquoteText.replace(/(^|\n)([> ]+)/gm, function () {
				for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					args[_key2] = arguments[_key2];
				}

				return args && 2 < args.length ? args[1] + trim(args[2].replace(/[\s]/g, '')) + ' ' : '';
			});
		},
		    convertDivs = function convertDivs() {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			if (args && 1 < args.length) {
				var divText = trim(args[1]);
				if (0 < divText.length) {
					divText = divText.replace(/<div[^>]*>([\s\S\r\n]*)<\/div>/gmi, convertDivs);
					divText = '\n' + trim(divText) + '\n';
				}

				return divText;
			}

			return '';
		},
		    convertPre = function convertPre() {
			for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				args[_key4] = arguments[_key4];
			}

			return args && 1 < args.length ? args[1].toString().replace(/[\n]/gm, '<br />').replace(/[\r]/gm, '') : '';
		},
		    fixAttibuteValue = function fixAttibuteValue() {
			for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				args[_key5] = arguments[_key5];
			}

			return args && 1 < args.length ? '' + args[1] + /* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.escape(args[2]) : '';
		},
		    convertLinks = function convertLinks() {
			for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
				args[_key6] = arguments[_key6];
			}

			return args && 1 < args.length ? trim(args[1]) : '';
		};

		text = html.replace(/\u0002([\s\S]*)\u0002/gm, '‌$1‌').replace(/<p[^>]*><\/p>/gi, '').replace(/<pre[^>]*>([\s\S\r\n\t]*)<\/pre>/gmi, convertPre).replace(/[\s]+/gm, ' ').replace(/((?:href|data)\s?=\s?)("[^"]+?"|'[^']+?')/gmi, fixAttibuteValue).replace(/<br[^>]*>/gmi, '\n').replace(/<\/h[\d]>/gi, '\n').replace(/<\/p>/gi, '\n\n').replace(/<ul[^>]*>/gmi, '\n').replace(/<\/ul>/gi, '\n').replace(/<li[^>]*>/gmi, ' * ').replace(/<\/li>/gi, '\n').replace(/<\/td>/gi, '\n').replace(/<\/tr>/gi, '\n').replace(/<hr[^>]*>/gmi, '\n_______________________________\n\n').replace(/<div[^>]*>([\s\S\r\n]*)<\/div>/gmi, convertDivs).replace(/<blockquote[^>]*>/gmi, '\n__bq__start__\n').replace(/<\/blockquote>/gmi, '\n__bq__end__\n').replace(/<a [^>]*>([\s\S\r\n]*?)<\/a>/gmi, convertLinks).replace(/<\/div>/gi, '\n').replace(/&nbsp;/gi, ' ').replace(/&quot;/gi, '"').replace(/<[^>]*>/gm, '');

		text = /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["$div"].html(text).text();

		text = text.replace(/\n[ \t]+/gm, '\n').replace(/[\n]{3,}/gm, '\n\n').replace(/&gt;/gi, '>').replace(/&lt;/gi, '<').replace(/&amp;/gi, '&');

		text = splitPlainText(trim(text));

		iPos = 0;
		iLimit = 800;

		while (0 < iLimit) {
			iLimit--;
			iP1 = text.indexOf('__bq__start__', iPos);
			if (-1 < iP1) {
				iP2 = text.indexOf('__bq__start__', iP1 + 5);
				iP3 = text.indexOf('__bq__end__', iP1 + 5);

				if ((-1 === iP2 || iP3 < iP2) && iP1 < iP3) {
					text = text.substring(0, iP1) + convertBlockquote(text.substring(iP1 + 13, iP3)) + text.substring(iP3 + 11);

					iPos = 0;
				} else if (-1 < iP2 && iP2 < iP3) {
					iPos = iP2 - 1;
				} else {
					iPos = 0;
				}
			} else {
				break;
			}
		}

		text = text.replace(/__bq__start__/gm, '').replace(/__bq__end__/gm, '');

		return text;
	}

	/**
	 * @param {string} plain
	 * @param {boolean} findEmailAndLinksInText = false
	 * @return {string}
	 */
	function plainToHtml(plain) {
		var findEmailAndLinksInText = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

		plain = plain.toString().replace(/\r/g, '');

		var bIn = false,
		    bDo = true,
		    bStart = true,
		    aNextText = [],
		    sLine = '',
		    iIndex = 0,
		    aText = plain.split('\n');

		do {
			bDo = false;
			aNextText = [];
			for (iIndex = 0; iIndex < aText.length; iIndex++) {
				sLine = aText[iIndex];
				bStart = '>' === sLine.substr(0, 1);
				if (bStart && !bIn) {
					bDo = true;
					bIn = true;
					aNextText.push('~~~blockquote~~~');
					aNextText.push(sLine.substr(1));
				} else if (!bStart && bIn) {
					if ('' !== sLine) {
						bIn = false;
						aNextText.push('~~~/blockquote~~~');
						aNextText.push(sLine);
					} else {
						aNextText.push(sLine);
					}
				} else if (bStart && bIn) {
					aNextText.push(sLine.substr(1));
				} else {
					aNextText.push(sLine);
				}
			}

			if (bIn) {
				bIn = false;
				aNextText.push('~~~/blockquote~~~');
			}

			aText = aNextText;
		} while (bDo);

		plain = aText.join('\n');

		plain = plain
		//			.replace(/~~~\/blockquote~~~\n~~~blockquote~~~/g, '\n')
		.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/~~~blockquote~~~[\s]*/g, '<blockquote>').replace(/[\s]*~~~\/blockquote~~~/g, '</blockquote>').replace(/\u200C([\s\S]*)\u200C/g, '\u0002$1\u0002').replace(/\n/g, '<br />');

		return findEmailAndLinksInText ? findEmailAndLinks(plain) : plain;
	}

	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloop_Utils_htmlToPlain = htmlToPlain;
	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloop_Utils_plainToHtml = plainToHtml;

	/**
	 * @param {string} url
	 * @param {number} value
	 * @param {Function} fCallback
	 */
	function resizeAndCrop(url, value, fCallback) {
		var img = new /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Image();
		img.onload = function () {

			var diff = [0, 0],
			    canvas = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.createElement('canvas'),
			    ctx = canvas.getContext('2d');

			canvas.width = value;
			canvas.height = value;

			if (this.width > this.height) {
				diff = [this.width - this.height, 0];
			} else {
				diff = [0, this.height - this.width];
			}

			ctx.fillStyle = '#fff';
			ctx.fillRect(0, 0, value, value);
			ctx.drawImage(this, diff[0] / 2, diff[1] / 2, this.width - diff[0], this.height - diff[1], 0, 0, value, value);

			fCallback(canvas.toDataURL('image/jpeg'));
		};

		img.src = url;
	}

	/**
	 * @param {Array} aSystem
	 * @param {Array} aList
	 * @param {Array=} aDisabled
	 * @param {Array=} aHeaderLines
	 * @param {?number=} iUnDeep
	 * @param {Function=} fDisableCallback
	 * @param {Function=} fVisibleCallback
	 * @param {Function=} fRenameCallback
	 * @param {boolean=} bSystem
	 * @param {boolean=} bBuildUnvisible
	 * @return {Array}
	 */
	function folderListOptionsBuilder(aSystem, aList, aDisabled, aHeaderLines, iUnDeep, fDisableCallback, fVisibleCallback, fRenameCallback, bSystem, bBuildUnvisible) {
		var
		/**
	  * @type {?FolderModel}
	  */
		oItem = null,
		    bSep = false,
		    iIndex = 0,
		    iLen = 0,
		    sDeepPrefix = '   ',
		    aResult = [];

		bBuildUnvisible = isUnd(bBuildUnvisible) ? false : !!bBuildUnvisible;
		bSystem = !isNormal(bSystem) ? 0 < aSystem.length : bSystem;
		iUnDeep = !isNormal(iUnDeep) ? 0 : iUnDeep;
		fDisableCallback = isNormal(fDisableCallback) ? fDisableCallback : null;
		fVisibleCallback = isNormal(fVisibleCallback) ? fVisibleCallback : null;
		fRenameCallback = isNormal(fRenameCallback) ? fRenameCallback : null;

		if (!isArray(aDisabled)) {
			aDisabled = [];
		}

		if (!isArray(aHeaderLines)) {
			aHeaderLines = [];
		}

		for (iIndex = 0, iLen = aHeaderLines.length; iIndex < iLen; iIndex++) {
			aResult.push({
				id: aHeaderLines[iIndex][0],
				name: aHeaderLines[iIndex][1],
				system: false,
				seporator: false,
				disabled: false
			});
		}

		bSep = true;
		for (iIndex = 0, iLen = aSystem.length; iIndex < iLen; iIndex++) {
			oItem = aSystem[iIndex];
			if (fVisibleCallback ? fVisibleCallback.call(null, oItem) : true) {
				if (bSep && 0 < aResult.length) {
					aResult.push({
						id: '---',
						name: '---',
						system: false,
						seporator: true,
						disabled: true
					});
				}

				bSep = false;
				aResult.push({
					id: oItem.fullNameRaw,
					name: fRenameCallback ? fRenameCallback.call(null, oItem) : oItem.name(),
					system: true,
					seporator: false,
					disabled: !oItem.selectable || -1 < inArray(oItem.fullNameRaw, aDisabled) || (fDisableCallback ? fDisableCallback.call(null, oItem) : false)
				});
			}
		}

		bSep = true;
		for (iIndex = 0, iLen = aList.length; iIndex < iLen; iIndex++) {
			oItem = aList[iIndex];
			//			if (oItem.subScribed() || !oItem.existen || bBuildUnvisible)
			if ((oItem.subScribed() || !oItem.existen || bBuildUnvisible) && (oItem.selectable || oItem.hasSubScribedSubfolders())) {
				if (fVisibleCallback ? fVisibleCallback.call(null, oItem) : true) {
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["FolderType"].User === oItem.type() || !bSystem || oItem.hasSubScribedSubfolders()) {
						if (bSep && 0 < aResult.length) {
							aResult.push({
								id: '---',
								name: '---',
								system: false,
								seporator: true,
								disabled: true
							});
						}

						bSep = false;
						aResult.push({
							id: oItem.fullNameRaw,
							name: new /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Array(oItem.deep + 1 - iUnDeep).join(sDeepPrefix) + (fRenameCallback ? fRenameCallback.call(null, oItem) : oItem.name()),
							system: false,
							seporator: false,
							disabled: !oItem.selectable || -1 < inArray(oItem.fullNameRaw, aDisabled) || (fDisableCallback ? fDisableCallback.call(null, oItem) : false)
						});
					}
				}
			}

			if (oItem.subScribed() && 0 < oItem.subFolders().length) {
				aResult = aResult.concat(folderListOptionsBuilder([], oItem.subFolders(), aDisabled, [], iUnDeep, fDisableCallback, fVisibleCallback, fRenameCallback, bSystem, bBuildUnvisible));
			}
		}

		return aResult;
	}

	function computedPagenatorHelper(koCurrentPage, koPageCount) {
		return function () {

			var iPrev = 0,
			    iNext = 0,
			    iLimit = 2,
			    result = [],
			    iCurrentPage = koCurrentPage(),
			    iPageCount = koPageCount(),


			/**
	   * @param {number} index
	   * @param {boolean=} push = true
	   * @param {string=} customName = ''
	   */
			fAdd = function fAdd(index) {
				var push = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
				var customName = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];


				var data = {
					current: index === iCurrentPage,
					name: isUnd(customName) || '' === customName ? index.toString() : customName.toString(),
					custom: isUnd(customName) || '' === customName ? false : true,
					title: isUnd(customName) || '' === customName ? '' : index.toString(),
					value: index.toString()
				};

				if (push) {
					result.push(data);
				} else {
					result.unshift(data);
				}
			};

			if (1 < iPageCount || 0 < iPageCount && iPageCount < iCurrentPage)
				//		if (0 < iPageCount && 0 < iCurrentPage)
				{
					if (iPageCount < iCurrentPage) {
						fAdd(iPageCount);
						iPrev = iPageCount;
						iNext = iPageCount;
					} else {
						if (3 >= iCurrentPage || iPageCount - 2 <= iCurrentPage) {
							iLimit += 2;
						}

						fAdd(iCurrentPage);
						iPrev = iCurrentPage;
						iNext = iCurrentPage;
					}

					while (0 < iLimit) {

						iPrev -= 1;
						iNext += 1;

						if (0 < iPrev) {
							fAdd(iPrev, false);
							iLimit--;
						}

						if (iPageCount >= iNext) {
							fAdd(iNext, true);
							iLimit--;
						} else if (0 >= iPrev) {
							break;
						}
					}

					if (3 === iPrev) {
						fAdd(2, false);
					} else if (3 < iPrev) {
						fAdd(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Math.round((iPrev - 1) / 2), false, '...');
					}

					if (iPageCount - 2 === iNext) {
						fAdd(iPageCount - 1, true);
					} else if (iPageCount - 2 > iNext) {
						fAdd(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.Math.round((iPageCount + iNext) / 2), true, '...');
					}

					// first and last
					if (1 < iPrev) {
						fAdd(1, false);
					}

					if (iPageCount > iNext) {
						fAdd(iPageCount, true);
					}
				}

			return result;
		};
	}

	function selectElement(element) {
		var sel = void 0,
		    range = void 0;
		if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.getSelection) {
			sel = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.getSelection();
			sel.removeAllRanges();
			range = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.createRange();
			range.selectNodeContents(element);
			sel.addRange(range);
		} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.selection) {
			range = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.body.createTextRange();
			range.moveToElementText(element);
			range.select();
		}
	}

	var detectDropdownVisibility = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.debounce(function () {
		/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["dropdownVisibility"].bind()(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.find(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["data"].aBootstrapDropdowns, function (item) {
			return item.hasClass('open');
		}));
	}, 50);
	/* harmony export */ Object.defineProperty(exports, "detectDropdownVisibility", {configurable: false, enumerable: true, get: function() { return detectDropdownVisibility; }});

	/**
	 * @param {boolean=} delay = false
	 */
	function triggerAutocompleteInputChange() {
		var delay = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];


		var fFunc = function fFunc() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('.checkAutocomplete').trigger('change');
		};

		if (delay) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.delay(fFunc, 100);
		} else {
			fFunc();
		}
	}

	/**
	 * @param {Object} params
	 */
	function setHeadViewport(params) {
		var content = [];
		/* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.each(params, function (key, value) {
			content.push('' + key + '=' + value);
		});

		/* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('#app-head-viewport').attr('content', content.join(', '));
	}

	/**
	 * @param {string} fileName
	 * @return {string}
	 */
	function getFileExtension(fileName) {
		fileName = trim(fileName).toLowerCase();

		var result = fileName.split('.').pop();
		return result === fileName ? '' : result;
	}

	var configurationScriptTagCache = {};

	/**
	 * @param {string} configuration
	 * @return {object}
	 */
	function getConfigurationFromScriptTag(configuration) {
		var result = {};

		if (!configurationScriptTagCache[configuration]) {
			configurationScriptTagCache[configuration] = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('script[type="application/json"][data-configuration="' + configuration + '"]');
		}

		try {
			result = JSON.parse(configurationScriptTagCache[configuration].text());
		} catch (e) {/* eslint-disable-line no-empty */}

		return result;
	}

	/**
	 * @param {string} fileName
	 * @return {string}
	 */
	function mimeContentType(fileName) {
		var ext = '',
		    result = 'application/octet-stream';

		fileName = trim(fileName).toLowerCase();

		if ('winmail.dat' === fileName) {
			return 'application/ms-tnef';
		}

		ext = getFileExtension(fileName);
		if (ext && 0 < ext.length && !isUnd(Mime[ext])) {
			result = Mime[ext];
		}

		return result;
	}

	/**
	 * @param {mixed} mPropOrValue
	 * @param {mixed} value
	 */
	function disposeOne(propOrValue, value) {
		var disposable = value || propOrValue;
		if (disposable && typeof disposable.dispose === 'function') {
			disposable.dispose();
		}
	}

	/**
	 * @param {Object} object
	 */
	function disposeObject(object) {
		if (object) {
			if (isArray(object.disposables)) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.each(object.disposables, disposeOne);
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_3_ko___default.a.utils.objectForEach(object, disposeOne);
		}
	}

	/**
	 * @param {Object|Array} objectOrObjects
	 */
	function delegateRunOnDestroy(objectOrObjects) {
		if (objectOrObjects) {
			if (isArray(objectOrObjects)) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.each(objectOrObjects, function (item) {
					delegateRunOnDestroy(item);
				});
			} else if (objectOrObjects && objectOrObjects.onDestroy) {
				objectOrObjects.onDestroy();
			}
		}
	}

	function appendStyles($styleTag, css) {
		if ($styleTag && $styleTag[0]) {
			if ($styleTag[0].styleSheet && !isUnd($styleTag[0].styleSheet.cssText)) {
				$styleTag[0].styleSheet.cssText = css;
			} else {
				$styleTag.text(css);
			}

			return true;
		}

		return false;
	}

	var __themeTimer = 0,
	    __themeAjax = null;

	function changeTheme(value, themeTrigger) {
		var themeLink = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('#app-theme-link'),
		    themeStyle = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('#app-theme-style'),
		    url = themeLink.attr('href');

		if (!url) {
			url = themeStyle.attr('data-href');
		}

		if (url) {
			url = url.toString().replace(/\/-\/[^\/]+\/\-\//, '/-/' + value + '/-/');
			url = url.toString().replace(/\/Css\/[^\/]+\/User\//, '/Css/0/User/');
			url = url.toString().replace(/\/Hash\/[^\/]+\//, '/Hash/-/');

			if ('Json/' !== url.substring(url.length - 5, url.length)) {
				url += 'Json/';
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.clearTimeout(__themeTimer);
			themeTrigger(/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].Animate);

			if (__themeAjax && __themeAjax.abort) {
				__themeAjax.abort();
			}

			__themeAjax = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.ajax({
				url: url,
				dataType: 'json'
			}).done(function (data) {

				if (data && isArray(data) && 2 === data.length) {
					if (themeLink && themeLink[0] && (!themeStyle || !themeStyle[0])) {
						themeStyle = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind()('<style id="app-theme-style"></style>');
						themeLink.after(themeStyle);
						themeLink.remove();
					}

					if (themeStyle && themeStyle[0]) {
						if (appendStyles(themeStyle, data[1])) {
							themeStyle.attr('data-href', url).attr('data-theme', data[0]);
						}
					}

					themeTrigger(/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].TrueResult);
				}
			}).always(function () {

				__themeTimer = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.setTimeout(function () {
					themeTrigger(/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].Idle);
				}, 1000);

				__themeAjax = null;
			});
		}
	}

	var substr = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.String.substr;
	if ('ab'.substr(-1) !== 'b') {
		substr = function substr(str, start, length) {
			start = start < 0 ? str.length + start : start;
			return str.substr(start, length);
		};
	}


	/* harmony export */ Object.defineProperty(exports, "substr", {configurable: false, enumerable: true, get: function() { return substr; }});

	/**
	 * @param {string} mailToUrl
	 * @param {Function} PopupComposeVoreModel
	 * @return {boolean}
	 */
	function mailToHelper(mailToUrl, PopupComposeVoreModel) {
		if (mailToUrl && 'mailto:' === mailToUrl.toString().substr(0, 7).toLowerCase()) {
			var _ret = function () {
				if (!PopupComposeVoreModel) {
					return {
						v: true
					};
				}

				mailToUrl = mailToUrl.toString().substr(7);

				var to = [],
				    cc = null,
				    bcc = null,
				    params = {},
				    EmailModel = __webpack_require__(/*! Model/Email */ 29),
				    email = mailToUrl.replace(/\?.+$/, ''),
				    queryString = mailToUrl.replace(/^[^\?]*\?/, ''),
				    fParseEmailLine = function fParseEmailLine(line) {
					return line ? /* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.compact(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.map(decodeURIComponent(line).split(/[,]/), function (item) {
						var emailObj = new EmailModel();
						emailObj.mailsoParse(item);
						return '' !== emailObj.email ? emailObj : null;
					})) : null;
				};

				to = fParseEmailLine(email);

				params = simpleQueryParser(queryString);

				if (!isUnd(params.cc)) {
					cc = fParseEmailLine(decodeURIComponent(params.cc));
				}

				if (!isUnd(params.bcc)) {
					bcc = fParseEmailLine(decodeURIComponent(params.bcc));
				}

				__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(PopupComposeVoreModel, [/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["ComposeType"].Empty, null, to, cc, bcc, isUnd(params.subject) ? null : pString(decodeURIComponent(params.subject)), isUnd(params.body) ? null : plainToHtml(pString(decodeURIComponent(params.body)))]);

				return {
					v: true
				};
			}();

			if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		}

		return false;
	}

	var windowResize = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.debounce(function (timeout) {
		if (isUnd(timeout) || isNull(timeout)) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["$win"].resize();
		} else {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.setTimeout(function () {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["$win"].resize();
			}, timeout);
		}
	}, 50);
	/* harmony export */ Object.defineProperty(exports, "windowResize", {configurable: false, enumerable: true, get: function() { return windowResize; }});

	function windowResizeCallback() {
		windowResize();
	}

/***/ },
/* 1 */
/*!****************************!*\
  !*** ./dev/External/ko.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function (ko) {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),
			JSON = __webpack_require__(/*! JSON */ 39),
			Opentip = __webpack_require__(/*! Opentip */ 55),

			fDisposalTooltipHelper = function (oElement) {
				ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
					if (oElement && oElement.__opentip)
					{
						oElement.__opentip.deactivate();
					}
				});
			}
		;

		ko.bindingHandlers.updateWidth = {
			'init': function (oElement, fValueAccessor) {
				var
					$w = $(window),
					$oEl = $(oElement),
					fValue = fValueAccessor(),
					fInit = function(){
						fValue($oEl.width());
						window.setTimeout(function(){
							fValue($oEl.width());
						}, 500);
					}
				;

				$w.on('resize', fInit);
				fInit();

				ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
					$w.off('resize', fInit);
				});
			}
		};

		ko.bindingHandlers.editor = {
			'init': function (oElement, fValueAccessor) {

				var
					oEditor  = null,
					fValue = fValueAccessor(),

					fUpdateEditorValue = function () {
						if (fValue && fValue.__editor)
						{
							fValue.__editor.setHtmlOrPlain(fValue());
						}
					},

					fUpdateKoValue = function () {
						if (fValue && fValue.__editor)
						{
							fValue(fValue.__editor.getDataWithHtmlMark());
						}
					},

					fOnReady = function () {
						fValue.__editor = oEditor;
						fUpdateEditorValue();
					},

					HtmlEditor = __webpack_require__(/*! Common/HtmlEditor */ 44)
				;

				if (ko.isObservable(fValue) && HtmlEditor)
				{
					oEditor = new HtmlEditor(oElement, fUpdateKoValue, fOnReady, fUpdateKoValue);

					fValue.__fetchEditorValue = fUpdateKoValue;

					fValue.subscribe(fUpdateEditorValue);

	//				ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
	//				});
				}
			}
		};

		ko.bindingHandlers.json = {
			'init': function (oElement, fValueAccessor) {
				$(oElement).text(JSON.stringify(ko.unwrap(fValueAccessor())));
			},
			'update': function (oElement, fValueAccessor) {
				$(oElement).text(JSON.stringify(ko.unwrap(fValueAccessor())));
			}
		};

		ko.bindingHandlers.scrollerShadows = {
			'init': function (oElement) {

				var
					iLimit = 8,
					$oEl = $(oElement),
					$win = $(window),
					oCont = $oEl.find('[data-scroller-shadows-content]')[0] || null,
					fFunc = _.throttle(function () {
						$oEl
							.toggleClass('scroller-shadow-top', iLimit < oCont.scrollTop)
							.toggleClass('scroller-shadow-bottom', oCont.scrollTop + iLimit < oCont.scrollHeight - oCont.clientHeight)
						;
					}, 100)
				;

				if (oCont)
				{
					$(oCont).on('scroll resize', fFunc);
					$win.on('resize', fFunc);

					ko.utils.domNodeDisposal.addDisposeCallback(oCont, function () {
						$(oCont).off();
						$win.off('resize', fFunc);
					});
				}
			}
		};

		ko.bindingHandlers.tooltip = {
			'init': function (oElement, fValueAccessor) {

				var
					bi18n = true,
					sValue = '',
					Translator = null,
					$oEl = $(oElement),
					fValue = fValueAccessor(),
					bMobile = 'on' === ($oEl.data('tooltip-mobile') || 'off'),
					Globals = __webpack_require__(/*! Common/Globals */ 7)
				;

				if (!Globals.bMobileDevice || bMobile)
				{
					bi18n = 'on' === ($oEl.data('tooltip-i18n') || 'on');
					sValue = !ko.isObservable(fValue) && _.isFunction(fValue) ? fValue() : ko.unwrap(fValue);

					oElement.__opentip = new Opentip(oElement, {
						'style': 'rainloopTip',
						'element': oElement,
						'tipJoint': $oEl.data('tooltip-join') || 'bottom'
					});

					Globals.dropdownVisibility.subscribe(function (bV) {
						if (bV) {
							oElement.__opentip.hide();
						}
					});

					if ('' === sValue)
					{
						oElement.__opentip.hide();
						oElement.__opentip.deactivate();
						oElement.__opentip.setContent('');
					}
					else
					{
						oElement.__opentip.activate();
					}

					if (bi18n)
					{
						Translator = __webpack_require__(/*! Common/Translator */ 5);

						oElement.__opentip.setContent(Translator.i18n(sValue));

						Translator.trigger.subscribe(function () {
							oElement.__opentip.setContent(Translator.i18n(sValue));
						});

						Globals.dropdownVisibility.subscribe(function () {
							if (oElement && oElement.__opentip)
							{
								oElement.__opentip.setContent(__webpack_require__(/*! Common/Translator */ 5).i18n(sValue));
							}
						});
					}
					else
					{
						oElement.__opentip.setContent(sValue);
					}
				}
			},
			'update': function (oElement, fValueAccessor) {

				var
					bi18n = true,
					sValue = '',
					$oEl = $(oElement),
					fValue = fValueAccessor(),
					bMobile = 'on' === ($oEl.data('tooltip-mobile') || 'off'),
					Globals = __webpack_require__(/*! Common/Globals */ 7)
				;

				if ((!Globals.bMobileDevice || bMobile) && oElement.__opentip)
				{
					bi18n = 'on' === ($oEl.data('tooltip-i18n') || 'on');
					sValue = !ko.isObservable(fValue) && _.isFunction(fValue) ? fValue() : ko.unwrap(fValue);

					if (sValue)
					{
						oElement.__opentip.setContent(
							bi18n ? __webpack_require__(/*! Common/Translator */ 5).i18n(sValue) : sValue);
						oElement.__opentip.activate();
					}
					else
					{
						oElement.__opentip.hide();
						oElement.__opentip.deactivate();
						oElement.__opentip.setContent('');
					}
				}
			}
		};

		ko.bindingHandlers.tooltipErrorTip = {
			'init': function (oElement) {

				var $oEl = $(oElement);

				oElement.__opentip = new Opentip(oElement, {
					'style': 'rainloopErrorTip',
					'hideOn': 'mouseout click',
					'element': oElement,
					'tipJoint': $oEl.data('tooltip-join') || 'top'
				});

				oElement.__opentip.deactivate();

				$(window.document).on('click', function () {
					if (oElement && oElement.__opentip)
					{
						oElement.__opentip.hide();
					}
				});

				fDisposalTooltipHelper(oElement);
			},
			'update': function (oElement, fValueAccessor) {

				var
					$oEl = $(oElement),
					fValue = fValueAccessor(),
					sValue = !ko.isObservable(fValue) && _.isFunction(fValue) ? fValue() : ko.unwrap(fValue),
					oOpenTips = oElement.__opentip
				;

				if (oOpenTips)
				{
					if ('' === sValue)
					{
						oOpenTips.hide();
						oOpenTips.deactivate();
						oOpenTips.setContent('');
					}
					else
					{
						_.delay(function () {
							if ($oEl.is(':visible'))
							{
								oOpenTips.setContent(sValue);
								oOpenTips.activate();
								oOpenTips.show();
							}
							else
							{
								oOpenTips.hide();
								oOpenTips.deactivate();
								oOpenTips.setContent('');
							}
						}, 100);
					}
				}
			}
		};

		ko.bindingHandlers.registrateBootstrapDropdown = {
			'init': function (oElement) {
				var Globals = __webpack_require__(/*! Common/Globals */ 7);
				if (Globals && Globals.data.aBootstrapDropdowns)
				{
					Globals.data.aBootstrapDropdowns.push($(oElement));

					$(oElement).click(function () {
						__webpack_require__(/*! Common/Utils */ 0).detectDropdownVisibility();
					});

	//				ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
	//				});
				}
			}
		};

		ko.bindingHandlers.openDropdownTrigger = {
			'update': function (oElement, fValueAccessor) {
				if (ko.unwrap(fValueAccessor()))
				{
					var $oEl = $(oElement);
					if (!$oEl.hasClass('open'))
					{
						$oEl.find('.dropdown-toggle').dropdown('toggle');
					}

					$oEl.find('.dropdown-toggle').focus();

					__webpack_require__(/*! Common/Utils */ 0).detectDropdownVisibility();
					fValueAccessor()(false);
				}
			}
		};

		ko.bindingHandlers.dropdownCloser = {
			'init': function (oElement) {
				$(oElement).closest('.dropdown').on('click', '.e-item', function () {
					$(oElement).dropdown('toggle');
				});
			}
		};

		ko.bindingHandlers.popover = {
			'init': function (oElement, fValueAccessor) {
				$(oElement).popover(ko.unwrap(fValueAccessor()));

				ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
					$(oElement).popover('destroy');
				});
			}
		};

		ko.bindingHandlers.csstext = {
			'init': function (oElement, fValueAccessor) {
				if (oElement && oElement.styleSheet && undefined !== oElement.styleSheet.cssText)
				{
					oElement.styleSheet.cssText = ko.unwrap(fValueAccessor());
				}
				else
				{
					$(oElement).text(ko.unwrap(fValueAccessor()));
				}
			},
			'update': function (oElement, fValueAccessor) {
				if (oElement && oElement.styleSheet && undefined !== oElement.styleSheet.cssText)
				{
					oElement.styleSheet.cssText = ko.unwrap(fValueAccessor());
				}
				else
				{
					$(oElement).text(ko.unwrap(fValueAccessor()));
				}
			}
		};

		ko.bindingHandlers.resizecrop = {
			'init': function (oElement) {
				$(oElement).addClass('resizecrop').resizecrop({
					'width': '100',
					'height': '100',
					'wrapperCSS': {
						'border-radius': '10px'
					}
				});
			},
			'update': function (oElement, fValueAccessor) {
				fValueAccessor()();
				$(oElement).resizecrop({
					'width': '100',
					'height': '100'
				});
			}
		};

		ko.bindingHandlers.onEnter = {
			'init': function (oElement, fValueAccessor, fAllBindingsAccessor, oViewModel) {
				$(oElement).on('keypress.koOnEnter', function (oEvent) {
					if (oEvent && 13 === window.parseInt(oEvent.keyCode, 10))
					{
						$(oElement).trigger('change');
						fValueAccessor().call(oViewModel);
					}
				});

				ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
					$(oElement).off('keypress.koOnEnter');
				});
			}
		};

		ko.bindingHandlers.onSpace = {
			'init': function (oElement, fValueAccessor, fAllBindingsAccessor, oViewModel) {
				$(oElement).on('keyup.koOnSpace', function (oEvent) {
					if (oEvent && 32 === window.parseInt(oEvent.keyCode, 10))
					{
						fValueAccessor().call(oViewModel, oEvent);
					}
				});

				ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
					$(oElement).off('keyup.koOnSpace');
				});
			}
		};

		ko.bindingHandlers.onTab = {
			'init': function (oElement, fValueAccessor, fAllBindingsAccessor, oViewModel) {
				$(oElement).on('keydown.koOnTab', function (oEvent) {
					if (oEvent && 9 === window.parseInt(oEvent.keyCode, 10))
					{
						return fValueAccessor().call(oViewModel, !!oEvent.shiftKey);
					}
				});

				ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
					$(oElement).off('keydown.koOnTab');
				});
			}
		};

		ko.bindingHandlers.onEsc = {
			'init': function (oElement, fValueAccessor, fAllBindingsAccessor, oViewModel) {
				$(oElement).on('keypress.koOnEsc', function (oEvent) {
					if (oEvent && 27 === window.parseInt(oEvent.keyCode, 10))
					{
						$(oElement).trigger('change');
						fValueAccessor().call(oViewModel);
					}
				});

				ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
					$(oElement).off('keypress.koOnEsc');
				});
			}
		};

		ko.bindingHandlers.clickOnTrue = {
			'update': function (oElement, fValueAccessor) {
				if (ko.unwrap(fValueAccessor()))
				{
					$(oElement).click();
				}
			}
		};

		ko.bindingHandlers.modal = {
			'init': function (oElement, fValueAccessor) {

				var
					Globals = __webpack_require__(/*! Common/Globals */ 7),
					Utils = __webpack_require__(/*! Common/Utils */ 0)
				;

				$(oElement).toggleClass('fade', !Globals.bMobileDevice).modal({
					'keyboard': false,
					'show': ko.unwrap(fValueAccessor())
				})
				.on('shown.koModal', Utils.windowResizeCallback)
				.find('.close').on('click.koModal', function () {
					fValueAccessor()(false);
				});

				ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
					$(oElement)
						.off('shown.koModal')
						.find('.close')
						.off('click.koModal')
					;
				});
			},
			'update': function (oElement, fValueAccessor) {

				var Globals = __webpack_require__(/*! Common/Globals */ 7);

				$(oElement).modal(!!ko.unwrap(fValueAccessor()) ? 'show' : 'hide');

				if (Globals.$html.hasClass('rl-anim'))
				{
					Globals.$html.addClass('rl-modal-animation');
					_.delay(function () {
						Globals.$html.removeClass('rl-modal-animation');
					}, 400);
				}

			}
		};

		ko.bindingHandlers.moment = {
			'init': function (oElement, fValueAccessor) {
				__webpack_require__(/*! Common/Momentor */ 25).momentToNode(
					$(oElement).addClass('moment').data('moment-time', ko.unwrap(fValueAccessor()))
				);
			},
			'update': function (oElement, fValueAccessor) {
				__webpack_require__(/*! Common/Momentor */ 25).momentToNode(
					$(oElement).data('moment-time', ko.unwrap(fValueAccessor()))
				);
			}
		};

		ko.bindingHandlers.i18nInit = {
			'init': function (oElement) {
				__webpack_require__(/*! Common/Translator */ 5).i18nToNodes(oElement);
			}
		};

		ko.bindingHandlers.translatorInit = {
			'init': function (oElement) {
				__webpack_require__(/*! Common/Translator */ 5).i18nToNodes(oElement);
			}
		};

		ko.bindingHandlers.i18nUpdate = {
			'update': function (oElement, fValueAccessor) {
				ko.unwrap(fValueAccessor());
				__webpack_require__(/*! Common/Translator */ 5).i18nToNodes(oElement);
			}
		};

		ko.bindingHandlers.link = {
			'update': function (oElement, fValueAccessor) {
				$(oElement).attr('href', ko.unwrap(fValueAccessor()));
			}
		};

		ko.bindingHandlers.title = {
			'update': function (oElement, fValueAccessor) {
				$(oElement).attr('title', ko.unwrap(fValueAccessor()));
			}
		};

		ko.bindingHandlers.textF = {
			'init': function (oElement, fValueAccessor) {
				$(oElement).text(ko.unwrap(fValueAccessor()));
			}
		};

		ko.bindingHandlers.initDom = {
			'init': function (oElement, fValueAccessor) {
				fValueAccessor()(oElement);
			}
		};

		ko.bindingHandlers.initFixedTrigger = {
			'init': function (oElement, fValueAccessor) {
				var
					aValues = ko.unwrap(fValueAccessor()),
					$oContainer = null,
					$oElement = $(oElement),
					oOffset = null,

					iTop = aValues[1] || 0
				;

				$oContainer = $(aValues[0] || null);
				$oContainer = $oContainer[0] ? $oContainer : null;

				if ($oContainer)
				{
					$(window).resize(function () {
						oOffset = $oContainer.offset();
						if (oOffset && oOffset.top)
						{
							$oElement.css('top', oOffset.top + iTop);
						}
					});
				}
			}
		};

		ko.bindingHandlers.initResizeTrigger = {
			'init': function (oElement, fValueAccessor) {
				var aValues = ko.unwrap(fValueAccessor());
				$(oElement).css({
					'height': aValues[1],
					'min-height': aValues[1]
				});
			},
			'update': function (oElement, fValueAccessor) {

				var
					Utils = __webpack_require__(/*! Common/Utils */ 0),
					Globals = __webpack_require__(/*! Common/Globals */ 7),
					aValues = ko.unwrap(fValueAccessor()),
					iValue = Utils.pInt(aValues[1]),
					iSize = 0,
					iOffset = $(oElement).offset().top
				;

				if (0 < iOffset)
				{
					iOffset += Utils.pInt(aValues[2]);
					iSize = Globals.$win.height() - iOffset;

					if (iValue < iSize)
					{
						iValue = iSize;
					}

					$(oElement).css({
						'height': iValue,
						'min-height': iValue
					});
				}
			}
		};

		ko.bindingHandlers.appendDom = {
			'update': function (oElement, fValueAccessor) {
				$(oElement).hide().empty().append(ko.unwrap(fValueAccessor())).show();
			}
		};

		ko.bindingHandlers.draggable = {
			'init': function (oElement, fValueAccessor, fAllBindingsAccessor) {

				var
					Globals = __webpack_require__(/*! Common/Globals */ 7),
					Utils = __webpack_require__(/*! Common/Utils */ 0)
				;

				if (!Globals.bMobileDevice)
				{
					var
						iTriggerZone = 100,
						iScrollSpeed = 3,
						fAllValueFunc = fAllBindingsAccessor(),
						sDroppableSelector = fAllValueFunc && fAllValueFunc['droppableSelector'] ? fAllValueFunc['droppableSelector'] : '',
						oConf = {
							'distance': 20,
							'handle': '.dragHandle',
							'cursorAt': {'top': 22, 'left': 3},
							'refreshPositions': true,
							'scroll': true
						}
					;

					if (sDroppableSelector)
					{
						oConf['drag'] = function (oEvent) {

							$(sDroppableSelector).each(function () {
								var
									moveUp = null,
									moveDown = null,
									$this = $(this),
									oOffset = $this.offset(),
									bottomPos = oOffset.top + $this.height()
								;

								window.clearInterval($this.data('timerScroll'));
								$this.data('timerScroll', false);

								if (oEvent.pageX >= oOffset.left && oEvent.pageX <= oOffset.left + $this.width())
								{
									if (oEvent.pageY >= bottomPos - iTriggerZone && oEvent.pageY <= bottomPos)
									{
										moveUp = function() {
											$this.scrollTop($this.scrollTop() + iScrollSpeed);
											Utils.windowResize();
										};

										$this.data('timerScroll', window.setInterval(moveUp, 10));
										moveUp();
									}

									if (oEvent.pageY >= oOffset.top && oEvent.pageY <= oOffset.top + iTriggerZone)
									{
										moveDown = function() {
											$this.scrollTop($this.scrollTop() - iScrollSpeed);
											Utils.windowResize();
										};

										$this.data('timerScroll', window.setInterval(moveDown, 10));
										moveDown();
									}
								}
							});
						};

						oConf['stop'] =	function() {
							$(sDroppableSelector).each(function () {
								window.clearInterval($(this).data('timerScroll'));
								$(this).data('timerScroll', false);
							});
						};
					}

					oConf['helper'] = function (oEvent) {
						return fValueAccessor()(oEvent && oEvent.target ? ko.dataFor(oEvent.target) : null);
					};

					$(oElement).draggable(oConf).on('mousedown.koDraggable', function () {
						Utils.removeInFocus();
					});

					ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
						$(oElement)
							.off('mousedown.koDraggable')
							.draggable('destroy')
						;
					});
				}
			}
		};

		ko.bindingHandlers.droppable = {
			'init': function (oElement, fValueAccessor, fAllBindingsAccessor) {
				var Globals = __webpack_require__(/*! Common/Globals */ 7);
				if (!Globals.bMobileDevice)
				{
					var
						fValueFunc = fValueAccessor(),
						fAllValueFunc = fAllBindingsAccessor(),
						fOverCallback = fAllValueFunc && fAllValueFunc['droppableOver'] ? fAllValueFunc['droppableOver'] : null,
						fOutCallback = fAllValueFunc && fAllValueFunc['droppableOut'] ? fAllValueFunc['droppableOut'] : null,
						oConf = {
							'tolerance': 'pointer',
							'hoverClass': 'droppableHover'
						}
					;

					if (fValueFunc)
					{
						oConf['drop'] = function (oEvent, oUi) {
							fValueFunc(oEvent, oUi);
						};

						if (fOverCallback)
						{
							oConf['over'] = function (oEvent, oUi) {
								fOverCallback(oEvent, oUi);
							};
						}

						if (fOutCallback)
						{
							oConf['out'] = function (oEvent, oUi) {
								fOutCallback(oEvent, oUi);
							};
						}

						$(oElement).droppable(oConf);

						ko.utils.domNodeDisposal.addDisposeCallback(oElement, function () {
							$(oElement).droppable('destroy');
						});
					}
				}
			}
		};

		ko.bindingHandlers.nano = {
			'init': function (oElement) {

				var
					Globals = __webpack_require__(/*! Common/Globals */ 7),
					Settings = __webpack_require__(/*! Storage/Settings */ 8)
				;

				if (!Globals.bDisableNanoScroll && !Settings.appSettingsGet('useNativeScrollbars'))
				{
					$(oElement)
						.addClass('nano')
						.nanoScroller({
							'iOSNativeScrolling': false,
							'preventPageScrolling': true
						})
					;
				}
			}
		};

		ko.bindingHandlers.saveTrigger = {
			'init': function (oElement) {

				var $oEl = $(oElement);

				$oEl.data('save-trigger-type', $oEl.is('input[type=text],input[type=email],input[type=password],select,textarea') ? 'input' : 'custom');

				if ('custom' === $oEl.data('save-trigger-type'))
				{
					$oEl.append(
						'&nbsp;&nbsp;<i class="icon-spinner animated"></i><i class="icon-remove error"></i><i class="icon-ok success"></i>'
					).addClass('settings-saved-trigger');
				}
				else
				{
					$oEl.addClass('settings-saved-trigger-input');
				}
			},
			'update': function (oElement, fValueAccessor) {
				var
					mValue = ko.unwrap(fValueAccessor()),
					$oEl = $(oElement)
				;

				if ('custom' === $oEl.data('save-trigger-type'))
				{
					switch (mValue.toString())
					{
						case '1':
							$oEl
								.find('.animated,.error').hide().removeClass('visible')
								.end()
								.find('.success').show().addClass('visible')
							;
							break;
						case '0':
							$oEl
								.find('.animated,.success').hide().removeClass('visible')
								.end()
								.find('.error').show().addClass('visible')
							;
							break;
						case '-2':
							$oEl
								.find('.error,.success').hide().removeClass('visible')
								.end()
								.find('.animated').show().addClass('visible')
							;
							break;
						default:
							$oEl
								.find('.animated').hide()
								.end()
								.find('.error,.success').removeClass('visible')
							;
							break;
					}
				}
				else
				{
					switch (mValue.toString())
					{
						case '1':
							$oEl.addClass('success').removeClass('error');
							break;
						case '0':
							$oEl.addClass('error').removeClass('success');
							break;
						case '-2':
		//					$oEl;
							break;
						default:
							$oEl.removeClass('error success');
							break;
					}
				}
			}
		};

		ko.bindingHandlers.emailsTags = {
			'init': function(oElement, fValueAccessor, fAllBindingsAccessor) {

				var
					Utils = __webpack_require__(/*! Common/Utils */ 0),
					EmailModel = __webpack_require__(/*! Model/Email */ 29),

					$oEl = $(oElement),
					fValue = fValueAccessor(),
					fAllBindings = fAllBindingsAccessor(),
					fAutoCompleteSource = fAllBindings['autoCompleteSource'] || null,
					fFocusCallback = function (bValue) {
						if (fValue && fValue.focused)
						{
							fValue.focused(!!bValue);
						}
					}
				;

				$oEl.inputosaurus({
					'parseOnBlur': true,
					'allowDragAndDrop': true,
					'focusCallback': fFocusCallback,
					'inputDelimiters': [',', ';', "\n"],
					'autoCompleteSource': fAutoCompleteSource,
	//				'elementHook': function (oEl, oItem) {
	//					if (oEl && oItem)
	//					{
	//						oEl.addClass('pgp');
	//						window.console.log(arguments);
	//					}
	//				},
					'parseHook': function (aInput) {

						return _.map(aInput, function (sInputValue) {

							var
								sValue = Utils.trim(sInputValue),
								oEmail = null
							;

							if ('' !== sValue)
							{
								oEmail = new EmailModel();
								oEmail.mailsoParse(sValue);
								return [oEmail.toLine(false), oEmail];
							}

							return [sValue, null];

						});

	//					var aResult = [];
	//
	//					_.each(aInput, function (sInputValue) {
	//
	//						var
	//							aM = null,
	//							aValues = [],
	//							sValue = Utils.trim(sInputValue),
	//							oEmail = null
	//						;
	//
	//						if ('' !== sValue)
	//						{
	//							aM = sValue.match(/[@]/g);
	//							if (aM && 0 < aM.length)
	//							{
	//								sValue = sValue.replace(/[\r\n]+/g, '; ').replace(/[\s]+/g, ' ');
	//								aValues = EmailModel.splitHelper(sValue, ';');
	//
	//								_.each(aValues, function (sV) {
	//
	//									oEmail = new EmailModel();
	//									oEmail.mailsoParse(sV);
	//
	//									if (oEmail.email)
	//									{
	//										aResult.push([oEmail.toLine(false), oEmail]);
	//									}
	//									else
	//									{
	//										aResult.push(['', null]);
	//									}
	//								});
	//							}
	//							else
	//							{
	//								aResult.push([sInputValue, null]);
	//							}
	//						}
	//						else
	//						{
	//							aResult.push([sInputValue, null]);
	//						}
	//					});
	//
	//					return aResult;
					},
					'change': _.bind(function (oEvent) {
						$oEl.data('EmailsTagsValue', oEvent.target.value);
						fValue(oEvent.target.value);
					}, this)
				});

				if (fValue && fValue.focused && fValue.focused.subscribe)
				{
					fValue.focused.subscribe(function (bValue) {
						$oEl.inputosaurus(!!bValue ? 'focus' : 'blur');
					});
				}
			},
			'update': function (oElement, fValueAccessor) {

				var
					$oEl = $(oElement),
					fValue = fValueAccessor(),
					sValue = ko.unwrap(fValue)
				;

				if ($oEl.data('EmailsTagsValue') !== sValue)
				{
					$oEl.val(sValue);
					$oEl.data('EmailsTagsValue', sValue);
					$oEl.inputosaurus('refresh');
				}
			}
		};

		ko.bindingHandlers.command = {
			'init': function (oElement, fValueAccessor, fAllBindingsAccessor, oViewModel) {
				var
					jqElement = $(oElement),
					oCommand = fValueAccessor()
				;

				if (!oCommand || !oCommand.enabled || !oCommand.canExecute)
				{
					throw new Error('You are not using command function');
				}

				jqElement.addClass('command');
				ko.bindingHandlers[jqElement.is('form') ? 'submit' : 'click']
					.init.apply(oViewModel, Array.prototype.slice.call(arguments));
			},

			'update': function (oElement, fValueAccessor) {

				var
					bResult = true,
					jqElement = $(oElement),
					oCommand = fValueAccessor()
				;

				bResult = oCommand.enabled();
				jqElement.toggleClass('command-not-enabled', !bResult);

				if (bResult)
				{
					bResult = oCommand.canExecute();
					jqElement.toggleClass('command-can-not-be-execute', !bResult);
				}

				jqElement.toggleClass('command-disabled disable disabled', !bResult).toggleClass('no-disabled', !!bResult);

				if (jqElement.is('input') || jqElement.is('button'))
				{
					jqElement.prop('disabled', !bResult);
				}
			}
		};

		// extenders

		ko.extenders.trimmer = function (oTarget)
		{
			var
				Utils = __webpack_require__(/*! Common/Utils */ 0),
				oResult = ko.computed({
					'read': oTarget,
					'write': function (sNewValue) {
						oTarget(Utils.trim(sNewValue.toString()));
					},
					'owner': this
				})
			;

			oResult(oTarget());
			return oResult;
		};

		ko.extenders.posInterer = function (oTarget, iDefault)
		{
			var
				Utils = __webpack_require__(/*! Common/Utils */ 0),
				oResult = ko.computed({
					'read': oTarget,
					'write': function (sNewValue) {
						var iNew = Utils.pInt(sNewValue.toString(), iDefault);
						if (0 >= iNew)
						{
							iNew = iDefault;
						}

						if (iNew === oTarget() && '' + iNew !== '' + sNewValue)
						{
							oTarget(iNew + 1);
						}

						oTarget(iNew);
					}
				})
			;

			oResult(oTarget());
			return oResult;
		};

		ko.extenders.limitedList = function (oTarget, mList)
		{
			var
				Utils = __webpack_require__(/*! Common/Utils */ 0),
				oResult = ko.computed({
					'read': oTarget,
					'write': function (sNewValue) {

						var
							sCurrentValue = ko.unwrap(oTarget),
							aList = ko.unwrap(mList)
						;

						if (Utils.isNonEmptyArray(aList))
						{
							if (-1 < Utils.inArray(sNewValue, aList))
							{
								oTarget(sNewValue);
							}
							else if (-1 < Utils.inArray(sCurrentValue, aList))
							{
								oTarget(sCurrentValue + ' ');
								oTarget(sCurrentValue);
							}
							else
							{
								oTarget(aList[0] + ' ');
								oTarget(aList[0]);
							}
						}
						else
						{
							oTarget('');
						}
					}
				}).extend({'notify': 'always'})
			;

			oResult(oTarget());

			if (!oResult.valueHasMutated)
			{
				oResult.valueHasMutated = function () {
					oTarget.valueHasMutated();
				};
			}

			return oResult;
		};

		ko.extenders.reversible = function (oTarget)
		{
			var mValue = oTarget();

			oTarget.commit = function ()
			{
				mValue = oTarget();
			};

			oTarget.reverse = function ()
			{
				oTarget(mValue);
			};

			oTarget.commitedValue = function ()
			{
				return mValue;
			};

			return oTarget;
		};

		ko.extenders.toggleSubscribe = function (oTarget, oOptions)
		{
			oTarget.subscribe(oOptions[1], oOptions[0], 'beforeChange');
			oTarget.subscribe(oOptions[2], oOptions[0]);

			return oTarget;
		};

		ko.extenders.toggleSubscribeProperty = function (oTarget, oOptions)
		{
			var sProp = oOptions[1];

			if (sProp)
			{
				oTarget.subscribe(function (oPrev) {
					if (oPrev && oPrev[sProp])
					{
						oPrev[sProp](false);
					}
				}, oOptions[0], 'beforeChange');

				oTarget.subscribe(function (oNext) {
					if (oNext && oNext[sProp])
					{
						oNext[sProp](true);
					}
				}, oOptions[0]);
			}

			return oTarget;
		};

		ko.extenders.falseTimeout = function (oTarget, iOption)
		{
			oTarget.iFalseTimeoutTimeout = 0;
			oTarget.subscribe(function (bValue) {
				if (bValue)
				{
					window.clearTimeout(oTarget.iFalseTimeoutTimeout);
					oTarget.iFalseTimeoutTimeout = window.setTimeout(function () {
						oTarget(false);
						oTarget.iFalseTimeoutTimeout = 0;
					}, __webpack_require__(/*! Common/Utils */ 0).pInt(iOption));
				}
			});

			return oTarget;
		};

		ko.extenders.specialThrottle = function (oTarget, iOption)
		{
			oTarget.iSpecialThrottleTimeoutValue = __webpack_require__(/*! Common/Utils */ 0).pInt(iOption);
			if (0 < oTarget.iSpecialThrottleTimeoutValue)
			{
				oTarget.iSpecialThrottleTimeout = 0;
				oTarget.valueForRead = ko.observable(!!oTarget()).extend({'throttle': 10});

				return ko.computed({
					'read': oTarget.valueForRead,
					'write': function (bValue) {

						if (bValue)
						{
							oTarget.valueForRead(bValue);
						}
						else
						{
							if (oTarget.valueForRead())
							{
								window.clearTimeout(oTarget.iSpecialThrottleTimeout);
								oTarget.iSpecialThrottleTimeout = window.setTimeout(function () {
									oTarget.valueForRead(false);
									oTarget.iSpecialThrottleTimeout = 0;
								}, oTarget.iSpecialThrottleTimeoutValue);
							}
							else
							{
								oTarget.valueForRead(bValue);
							}
						}
					}
				});
			}

			return oTarget;
		};

		// functions

		ko.observable.fn.validateNone = function ()
		{
			this.hasError = ko.observable(false);
			return this;
		};

		ko.observable.fn.validateEmail = function ()
		{
			var Utils = __webpack_require__(/*! Common/Utils */ 0);

			this.hasError = ko.observable(false);

			this.subscribe(function (sValue) {
				sValue = Utils.trim(sValue);
				this.hasError('' !== sValue && !(/^[^@\s]+@[^@\s]+$/.test(sValue)));
			}, this);

			this.valueHasMutated();
			return this;
		};

		ko.observable.fn.validateSimpleEmail = function ()
		{
			var Utils = __webpack_require__(/*! Common/Utils */ 0);

			this.hasError = ko.observable(false);

			this.subscribe(function (sValue) {
				sValue = Utils.trim(sValue);
				this.hasError('' !== sValue && !(/^.+@.+$/.test(sValue)));
			}, this);

			this.valueHasMutated();
			return this;
		};

		ko.observable.fn.deleteAccessHelper = function ()
		{
			this.extend({'falseTimeout': 3000}).extend({'toggleSubscribe': [null,
				function (oPrev) {
					if (oPrev && oPrev.deleteAccess)
					{
						oPrev.deleteAccess(false);
					}
				}, function (oNext) {
					if (oNext && oNext.deleteAccess)
					{
						oNext.deleteAccess(true);
					}
				}
			]});

			return this;
		};

		ko.observable.fn.validateFunc = function (fFunc)
		{
			var Utils = __webpack_require__(/*! Common/Utils */ 0);

			this.hasFuncError = ko.observable(false);

			if (Utils.isFunc(fFunc))
			{
				this.subscribe(function (sValue) {
					this.hasFuncError(!fFunc(sValue));
				}, this);

				this.valueHasMutated();
			}

			return this;
		};

		module.exports = ko;

	}(ko));


/***/ },
/* 2 */
/*!***************************!*\
  !*** external "window._" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = window._;

/***/ },
/* 3 */
/*!******************************!*\
  !*** ./dev/Common/Enums.jsx ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* eslint quote-props: 0 */

	/**
	 * @enum {string}
	 */
	var FileType = {
		'Unknown': 'unknown',
		'Text': 'text',
		'Html': 'html',
		'Code': 'code',
		'Eml': 'eml',
		'WordText': 'word-text',
		'Pdf': 'pdf',
		'Image': 'image',
		'Audio': 'audio',
		'Video': 'video',
		'Sheet': 'sheet',
		'Presentation': 'presentation',
		'Certificate': 'certificate',
		'CertificateBin': 'certificate-bin',
		'Archive': 'archive'
	};
	/* harmony export */ Object.defineProperty(exports, "FileType", {configurable: false, enumerable: true, get: function() { return FileType; }});

	/**
	 * @enum {string}
	 */
	var StorageResultType = {
		'Success': 'success',
		'Abort': 'abort',
		'Error': 'error',
		'Unload': 'unload'
	};
	/* harmony export */ Object.defineProperty(exports, "StorageResultType", {configurable: false, enumerable: true, get: function() { return StorageResultType; }});

	/**
	 * @enum {string}
	 */
	var Focused = {
		'None': 'none',
		'MessageList': 'message-list',
		'MessageView': 'message-view',
		'FolderList': 'folder-list'
	};
	/* harmony export */ Object.defineProperty(exports, "Focused", {configurable: false, enumerable: true, get: function() { return Focused; }});

	/**
	 * @enum {number}
	 */
	var State = {
		'Empty': 10,
		'Login': 20,
		'Auth': 30
	};
	/* harmony export */ Object.defineProperty(exports, "State", {configurable: false, enumerable: true, get: function() { return State; }});

	/**
	 * @enum {number}
	 */
	var StateType = {
		'Webmail': 0,
		'Admin': 1
	};
	/* harmony export */ Object.defineProperty(exports, "StateType", {configurable: false, enumerable: true, get: function() { return StateType; }});

	/**
	 * @enum {string}
	 */
	var Capa = {
		'TwoFactor': 'TWO_FACTOR',
		'TwoFactorForce': 'TWO_FACTOR_FORCE',
		'OpenPGP': 'OPEN_PGP',
		'Prefetch': 'PREFETCH',
		'Gravatar': 'GRAVATAR',
		'Folders': 'FOLDERS',
		'Composer': 'COMPOSER',
		'Contacts': 'CONTACTS',
		'Reload': 'RELOAD',
		'Search': 'SEARCH',
		'SearchAdv': 'SEARCH_ADV',
		'MessageActions': 'MESSAGE_ACTIONS',
		'MessageListActions': 'MESSAGELIST_ACTIONS',
		'AttachmentsActions': 'ATTACHMENTS_ACTIONS',
		'DangerousActions': 'DANGEROUS_ACTIONS',
		'Settings': 'SETTINGS',
		'Help': 'HELP',
		'Themes': 'THEMES',
		'UserBackground': 'USER_BACKGROUND',
		'Sieve': 'SIEVE',
		'Filters': 'FILTERS',
		'AttachmentThumbnails': 'ATTACHMENT_THUMBNAILS',
		'Templates': 'TEMPLATES',
		'AutoLogout': 'AUTOLOGOUT',
		'AdditionalAccounts': 'ADDITIONAL_ACCOUNTS',
		'Identities': 'IDENTITIES'
	};
	/* harmony export */ Object.defineProperty(exports, "Capa", {configurable: false, enumerable: true, get: function() { return Capa; }});

	/**
	 * @enum {string}
	 */
	var KeyState = {
		'All': 'all',
		'None': 'none',
		'ContactList': 'contact-list',
		'MessageList': 'message-list',
		'FolderList': 'folder-list',
		'MessageView': 'message-view',
		'Compose': 'compose',
		'Settings': 'settings',
		'Menu': 'menu',
		'PopupComposeOpenPGP': 'compose-open-pgp',
		'PopupMessageOpenPGP': 'message-open-pgp',
		'PopupViewOpenPGP': 'view-open-pgp',
		'PopupKeyboardShortcutsHelp': 'popup-keyboard-shortcuts-help',
		'PopupAsk': 'popup-ask'
	};
	/* harmony export */ Object.defineProperty(exports, "KeyState", {configurable: false, enumerable: true, get: function() { return KeyState; }});

	/**
	 * @enum {number}
	 */
	var FolderType = {
		'Inbox': 10,
		'SentItems': 11,
		'Draft': 12,
		'Trash': 13,
		'Spam': 14,
		'Archive': 15,
		'NotSpam': 80,
		'User': 99
	};
	/* harmony export */ Object.defineProperty(exports, "FolderType", {configurable: false, enumerable: true, get: function() { return FolderType; }});

	/**
	 * @enum {number}
	 */
	var ServerFolderType = {
		'USER': 0,
		'INBOX': 1,
		'SENT': 2,
		'DRAFTS': 3,
		'JUNK': 4,
		'TRASH': 5,
		'IMPORTANT': 10,
		'FLAGGED': 11,
		'ALL': 12
	};
	/* harmony export */ Object.defineProperty(exports, "ServerFolderType", {configurable: false, enumerable: true, get: function() { return ServerFolderType; }});

	/**
	 * @enum {string}
	 */
	var LoginSignMeTypeAsString = {
		'DefaultOff': 'defaultoff',
		'DefaultOn': 'defaulton',
		'Unused': 'unused'
	};
	/* harmony export */ Object.defineProperty(exports, "LoginSignMeTypeAsString", {configurable: false, enumerable: true, get: function() { return LoginSignMeTypeAsString; }});

	/**
	 * @enum {number}
	 */
	var LoginSignMeType = {
		'DefaultOff': 0,
		'DefaultOn': 1,
		'Unused': 2
	};
	/* harmony export */ Object.defineProperty(exports, "LoginSignMeType", {configurable: false, enumerable: true, get: function() { return LoginSignMeType; }});

	/**
	 * @enum {string}
	 */
	var ComposeType = {
		'Empty': 'empty',
		'Reply': 'reply',
		'ReplyAll': 'replyall',
		'Forward': 'forward',
		'ForwardAsAttachment': 'forward-as-attachment',
		'Draft': 'draft',
		'EditAsNew': 'editasnew'
	};
	/* harmony export */ Object.defineProperty(exports, "ComposeType", {configurable: false, enumerable: true, get: function() { return ComposeType; }});

	/**
	 * @enum {number}
	 */
	var UploadErrorCode = {
		'Normal': 0,
		'FileIsTooBig': 1,
		'FilePartiallyUploaded': 2,
		'FileNoUploaded': 3,
		'MissingTempFolder': 4,
		'FileOnSaveingError': 5,
		'FileType': 98,
		'Unknown': 99
	};
	/* harmony export */ Object.defineProperty(exports, "UploadErrorCode", {configurable: false, enumerable: true, get: function() { return UploadErrorCode; }});

	/**
	 * @enum {number}
	 */
	var SetSystemFoldersNotification = {
		'None': 0,
		'Sent': 1,
		'Draft': 2,
		'Spam': 3,
		'Trash': 4,
		'Archive': 5
	};
	/* harmony export */ Object.defineProperty(exports, "SetSystemFoldersNotification", {configurable: false, enumerable: true, get: function() { return SetSystemFoldersNotification; }});

	/**
	 * @enum {number}
	 */
	var ClientSideKeyName = {
		'FoldersLashHash': 0,
		'MessagesInboxLastHash': 1,
		'MailBoxListSize': 2,
		'ExpandedFolders': 3,
		'FolderListSize': 4,
		'MessageListSize': 5,
		'LastReplyAction': 6,
		'LastSignMe': 7,
		'ComposeLastIdentityID': 8
	};
	/* harmony export */ Object.defineProperty(exports, "ClientSideKeyName", {configurable: false, enumerable: true, get: function() { return ClientSideKeyName; }});

	/**
	 * @enum {number}
	 */
	var EventKeyCode = {
		'Backspace': 8,
		'Tab': 9,
		'Enter': 13,
		'Esc': 27,
		'PageUp': 33,
		'PageDown': 34,
		'Left': 37,
		'Right': 39,
		'Up': 38,
		'Down': 40,
		'End': 35,
		'Home': 36,
		'Space': 32,
		'Insert': 45,
		'Delete': 46,
		'A': 65,
		'S': 83
	};
	/* harmony export */ Object.defineProperty(exports, "EventKeyCode", {configurable: false, enumerable: true, get: function() { return EventKeyCode; }});

	/**
	 * @enum {number}
	 */
	var MessageSetAction = {
		'SetSeen': 0,
		'UnsetSeen': 1,
		'SetFlag': 2,
		'UnsetFlag': 3
	};
	/* harmony export */ Object.defineProperty(exports, "MessageSetAction", {configurable: false, enumerable: true, get: function() { return MessageSetAction; }});

	/**
	 * @enum {number}
	 */
	var MessageSelectAction = {
		'All': 0,
		'None': 1,
		'Invert': 2,
		'Unseen': 3,
		'Seen': 4,
		'Flagged': 5,
		'Unflagged': 6
	};
	/* harmony export */ Object.defineProperty(exports, "MessageSelectAction", {configurable: false, enumerable: true, get: function() { return MessageSelectAction; }});

	/**
	 * @enum {number}
	 */
	var DesktopNotification = {
		'Allowed': 0,
		'NotAllowed': 1,
		'Denied': 2,
		'NotSupported': 9
	};
	/* harmony export */ Object.defineProperty(exports, "DesktopNotification", {configurable: false, enumerable: true, get: function() { return DesktopNotification; }});

	/**
	 * @enum {number}
	 */
	var MessagePriority = {
		'Low': 5,
		'Normal': 3,
		'High': 1
	};
	/* harmony export */ Object.defineProperty(exports, "MessagePriority", {configurable: false, enumerable: true, get: function() { return MessagePriority; }});

	/**
	 * @enum {string}
	 */
	var EditorDefaultType = {
		'Html': 'Html',
		'Plain': 'Plain',
		'HtmlForced': 'HtmlForced',
		'PlainForced': 'PlainForced'
	};
	/* harmony export */ Object.defineProperty(exports, "EditorDefaultType", {configurable: false, enumerable: true, get: function() { return EditorDefaultType; }});

	/**
	 * @enum {number}
	 */
	var ServerSecure = {
		'None': 0,
		'SSL': 1,
		'TLS': 2
	};
	/* harmony export */ Object.defineProperty(exports, "ServerSecure", {configurable: false, enumerable: true, get: function() { return ServerSecure; }});

	/**
	 * @enum {number}
	 */
	var SearchDateType = {
		'All': -1,
		'Days3': 3,
		'Days7': 7,
		'Month': 30
	};
	/* harmony export */ Object.defineProperty(exports, "SearchDateType", {configurable: false, enumerable: true, get: function() { return SearchDateType; }});

	/**
	 * @enum {number}
	 */
	var SaveSettingsStep = {
		'Animate': -2,
		'Idle': -1,
		'TrueResult': 1,
		'FalseResult': 0
	};
	/* harmony export */ Object.defineProperty(exports, "SaveSettingsStep", {configurable: false, enumerable: true, get: function() { return SaveSettingsStep; }});

	/**
	 * @enum {number}
	 */
	var Layout = {
		'NoPreview': 0,
		'SidePreview': 1,
		'BottomPreview': 2,
		'Mobile': 3
	};
	/* harmony export */ Object.defineProperty(exports, "Layout", {configurable: false, enumerable: true, get: function() { return Layout; }});

	/**
	 * @enum {string}
	 */
	var FilterConditionField = {
		'From': 'From',
		'Recipient': 'Recipient',
		'Subject': 'Subject',
		'Header': 'Header',
		'Size': 'Size'
	};
	/* harmony export */ Object.defineProperty(exports, "FilterConditionField", {configurable: false, enumerable: true, get: function() { return FilterConditionField; }});

	/**
	 * @enum {string}
	 */
	var FilterConditionType = {
		'Contains': 'Contains',
		'NotContains': 'NotContains',
		'EqualTo': 'EqualTo',
		'NotEqualTo': 'NotEqualTo',
		'Regex': 'Regex',
		'Over': 'Over',
		'Under': 'Under'
	};
	/* harmony export */ Object.defineProperty(exports, "FilterConditionType", {configurable: false, enumerable: true, get: function() { return FilterConditionType; }});

	/**
	 * @enum {string}
	 */
	var FiltersAction = {
		'None': 'None',
		'MoveTo': 'MoveTo',
		'Discard': 'Discard',
		'Vacation': 'Vacation',
		'Reject': 'Reject',
		'Forward': 'Forward'
	};
	/* harmony export */ Object.defineProperty(exports, "FiltersAction", {configurable: false, enumerable: true, get: function() { return FiltersAction; }});

	/**
	 * @enum {string}
	 */
	var FilterRulesType = {
		'All': 'All',
		'Any': 'Any'
	};
	/* harmony export */ Object.defineProperty(exports, "FilterRulesType", {configurable: false, enumerable: true, get: function() { return FilterRulesType; }});

	/**
	 * @enum {number}
	 */
	var SignedVerifyStatus = {
		'UnknownPublicKeys': -4,
		'UnknownPrivateKey': -3,
		'Unverified': -2,
		'Error': -1,
		'None': 0,
		'Success': 1
	};
	/* harmony export */ Object.defineProperty(exports, "SignedVerifyStatus", {configurable: false, enumerable: true, get: function() { return SignedVerifyStatus; }});

	/**
	 * @enum {number}
	 */
	var ContactPropertyType = {

		'Unknown': 0,

		'FullName': 10,

		'FirstName': 15,
		'LastName': 16,
		'MiddleName': 16,
		'Nick': 18,

		'NamePrefix': 20,
		'NameSuffix': 21,

		'Email': 30,
		'Phone': 31,
		'Web': 32,

		'Birthday': 40,

		'Facebook': 90,
		'Skype': 91,
		'GitHub': 92,

		'Note': 110,

		'Custom': 250
	};
	/* harmony export */ Object.defineProperty(exports, "ContactPropertyType", {configurable: false, enumerable: true, get: function() { return ContactPropertyType; }});

	/**
	 * @enum {number}
	 */
	var Notification = {
		'InvalidToken': 101,
		'AuthError': 102,
		'AccessError': 103,
		'ConnectionError': 104,
		'CaptchaError': 105,
		'SocialFacebookLoginAccessDisable': 106,
		'SocialTwitterLoginAccessDisable': 107,
		'SocialGoogleLoginAccessDisable': 108,
		'DomainNotAllowed': 109,
		'AccountNotAllowed': 110,

		'AccountTwoFactorAuthRequired': 120,
		'AccountTwoFactorAuthError': 121,

		'CouldNotSaveNewPassword': 130,
		'CurrentPasswordIncorrect': 131,
		'NewPasswordShort': 132,
		'NewPasswordWeak': 133,
		'NewPasswordForbidden': 134,

		'ContactsSyncError': 140,

		'CantGetMessageList': 201,
		'CantGetMessage': 202,
		'CantDeleteMessage': 203,
		'CantMoveMessage': 204,
		'CantCopyMessage': 205,

		'CantSaveMessage': 301,
		'CantSendMessage': 302,
		'InvalidRecipients': 303,

		'CantSaveFilters': 351,
		'CantGetFilters': 352,
		'FiltersAreNotCorrect': 355,

		'CantCreateFolder': 400,
		'CantRenameFolder': 401,
		'CantDeleteFolder': 402,
		'CantSubscribeFolder': 403,
		'CantUnsubscribeFolder': 404,
		'CantDeleteNonEmptyFolder': 405,

		'CantSaveSettings': 501,
		'CantSavePluginSettings': 502,

		'DomainAlreadyExists': 601,

		'CantInstallPackage': 701,
		'CantDeletePackage': 702,
		'InvalidPluginPackage': 703,
		'UnsupportedPluginPackage': 704,

		'LicensingServerIsUnavailable': 710,
		'LicensingExpired': 711,
		'LicensingBanned': 712,

		'DemoSendMessageError': 750,
		'DemoAccountError': 751,

		'AccountAlreadyExists': 801,
		'AccountDoesNotExist': 802,

		'MailServerError': 901,
		'ClientViewError': 902,
		'InvalidInputArgument': 903,

		'AjaxFalse': 950,
		'AjaxAbort': 951,
		'AjaxParse': 952,
		'AjaxTimeout': 953,

		'UnknownNotification': 999,
		'UnknownError': 999
	};
	/* harmony export */ Object.defineProperty(exports, "Notification", {configurable: false, enumerable: true, get: function() { return Notification; }});

/***/ },
/* 4 */
/*!****************************!*\
  !*** ./dev/Knoin/Knoin.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),
			ko = __webpack_require__(/*! ko */ 1),
			hasher = __webpack_require__(/*! hasher */ 83),
			crossroads = __webpack_require__(/*! crossroads */ 48),

			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Plugins = __webpack_require__(/*! Common/Plugins */ 22),
			Utils = __webpack_require__(/*! Common/Utils */ 0)
		;

		/**
		 * @constructor
		 */
		function Knoin()
		{
			this.oScreens = {};
			this.sDefaultScreenName = '';
			this.oCurrentScreen = null;
		}

		Knoin.prototype.oScreens = {};
		Knoin.prototype.sDefaultScreenName = '';
		Knoin.prototype.oCurrentScreen = null;

		Knoin.prototype.hideLoading = function ()
		{
			$('#rl-content').addClass('rl-content-show');
			$('#rl-loading').hide().remove();
		};

		/**
		 * @param {Object} thisObject
		 */
		Knoin.prototype.constructorEnd = function (thisObject)
		{
			if (Utils.isFunc(thisObject['__constructor_end']))
			{
				thisObject['__constructor_end'].call(thisObject);
			}
		};

		/**
		 * @param {string|Array} mName
		 * @param {Function} ViewModelClass
		 */
		Knoin.prototype.extendAsViewModel = function (mName, ViewModelClass)
		{
			if (ViewModelClass)
			{
				if (Utils.isArray(mName))
				{
					ViewModelClass.__names = mName;
				}
				else
				{
					ViewModelClass.__names = [mName];
				}

				ViewModelClass.__name = ViewModelClass.__names[0];
			}
		};

		/**
		 * @param {Function} SettingsViewModelClass
		 * @param {string} sLabelName
		 * @param {string} sTemplate
		 * @param {string} sRoute
		 * @param {boolean=} bDefault
		 */
		Knoin.prototype.addSettingsViewModel = function (SettingsViewModelClass, sTemplate, sLabelName, sRoute, bDefault)
		{
			SettingsViewModelClass.__rlSettingsData = {
				'Label':  sLabelName,
				'Template':  sTemplate,
				'Route':  sRoute,
				'IsDefault':  !!bDefault
			};

			Globals.aViewModels['settings'].push(SettingsViewModelClass);
		};

		/**
		 * @param {Function} SettingsViewModelClass
		 */
		Knoin.prototype.removeSettingsViewModel = function (SettingsViewModelClass)
		{
			Globals.aViewModels['settings-removed'].push(SettingsViewModelClass);
		};

		/**
		 * @param {Function} SettingsViewModelClass
		 */
		Knoin.prototype.disableSettingsViewModel = function (SettingsViewModelClass)
		{
			Globals.aViewModels['settings-disabled'].push(SettingsViewModelClass);
		};

		Knoin.prototype.routeOff = function ()
		{
			hasher.changed.active = false;
		};

		Knoin.prototype.routeOn = function ()
		{
			hasher.changed.active = true;
		};

		/**
		 * @param {string} sScreenName
		 * @return {?Object}
		 */
		Knoin.prototype.screen = function (sScreenName)
		{
			return ('' !== sScreenName && !Utils.isUnd(this.oScreens[sScreenName])) ? this.oScreens[sScreenName] : null;
		};

		/**
		 * @param {Function} ViewModelClass
		 * @param {Object=} oScreen
		 */
		Knoin.prototype.buildViewModel = function (ViewModelClass, oScreen)
		{
			if (ViewModelClass && !ViewModelClass.__builded)
			{
				var
					kn = this,
					oViewModel = new ViewModelClass(oScreen),
					sPosition = oViewModel.viewModelPosition(),
					oViewModelPlace = $('#rl-content #rl-' + sPosition.toLowerCase()),
					oViewModelDom = null
				;

				ViewModelClass.__builded = true;
				ViewModelClass.__vm = oViewModel;

				oViewModel.onShowTrigger = ko.observable(false);
				oViewModel.onHideTrigger = ko.observable(false);

				oViewModel.viewModelName = ViewModelClass.__name;
				oViewModel.viewModelNames = ViewModelClass.__names;

				if (oViewModelPlace && 1 === oViewModelPlace.length)
				{
					oViewModelDom = $('<div></div>').addClass('rl-view-model').addClass('RL-' + oViewModel.viewModelTemplate()).hide();
					oViewModelDom.appendTo(oViewModelPlace);

					oViewModel.viewModelDom = oViewModelDom;
					ViewModelClass.__dom = oViewModelDom;

					if ('Popups' === sPosition)
					{
						oViewModel.cancelCommand = oViewModel.closeCommand = Utils.createCommand(oViewModel, function () {
							kn.hideScreenPopup(ViewModelClass);
						});

						oViewModel.modalVisibility.subscribe(function (bValue) {

							var self = this;
							if (bValue)
							{
								this.viewModelDom.show();
								this.storeAndSetKeyScope();

								Globals.popupVisibilityNames.push(this.viewModelName);
								oViewModel.viewModelDom.css('z-index', 3000 + Globals.popupVisibilityNames().length + 10);

								if (this.onShowTrigger)
								{
									this.onShowTrigger(!this.onShowTrigger());
								}

								Utils.delegateRun(this, 'onShowWithDelay', [], 500);
							}
							else
							{
								Utils.delegateRun(this, 'onHide');
								Utils.delegateRun(this, 'onHideWithDelay', [], 500);

								if (this.onHideTrigger)
								{
									this.onHideTrigger(!this.onHideTrigger());
								}

								this.restoreKeyScope();

								_.each(this.viewModelNames, function (sName) {
									Plugins.runHook('view-model-on-hide', [sName, self]);
								});

								Globals.popupVisibilityNames.remove(this.viewModelName);
								oViewModel.viewModelDom.css('z-index', 2000);

								_.delay(function () {
									self.viewModelDom.hide();
								}, 300);
							}

						}, oViewModel);
					}

					_.each(ViewModelClass.__names, function (sName) {
						Plugins.runHook('view-model-pre-build', [sName, oViewModel, oViewModelDom]);
					});

					ko.applyBindingAccessorsToNode(oViewModelDom[0], {
						'translatorInit': true,
						'template': function () { return {'name': oViewModel.viewModelTemplate()};}
					}, oViewModel);

					Utils.delegateRun(oViewModel, 'onBuild', [oViewModelDom]);
					if (oViewModel && 'Popups' === sPosition)
					{
						oViewModel.registerPopupKeyDown();
					}

					_.each(ViewModelClass.__names, function (sName) {
						Plugins.runHook('view-model-post-build', [sName, oViewModel, oViewModelDom]);
					});
				}
				else
				{
					Utils.log('Cannot find view model position: ' + sPosition);
				}
			}

			return ViewModelClass ? ViewModelClass.__vm : null;
		};

		/**
		 * @param {Function} ViewModelClassToHide
		 */
		Knoin.prototype.hideScreenPopup = function (ViewModelClassToHide)
		{
			if (ViewModelClassToHide && ViewModelClassToHide.__vm && ViewModelClassToHide.__dom)
			{
				ViewModelClassToHide.__vm.modalVisibility(false);
			}
		};

		/**
		 * @param {Function} ViewModelClassToShow
		 * @param {Array=} aParameters
		 */
		Knoin.prototype.showScreenPopup = function (ViewModelClassToShow, aParameters)
		{
			if (ViewModelClassToShow)
			{
				this.buildViewModel(ViewModelClassToShow);

				if (ViewModelClassToShow.__vm && ViewModelClassToShow.__dom)
				{
					Utils.delegateRun(ViewModelClassToShow.__vm, 'onBeforeShow', aParameters || []);

					ViewModelClassToShow.__vm.modalVisibility(true);

					Utils.delegateRun(ViewModelClassToShow.__vm, 'onShow', aParameters || []);

					_.each(ViewModelClassToShow.__names, function (sName) {
						Plugins.runHook('view-model-on-show', [sName, ViewModelClassToShow.__vm, aParameters || []]);
					});
				}
			}
		};

		/**
		 * @param {Function} ViewModelClassToShow
		 * @return {boolean}
		 */
		Knoin.prototype.isPopupVisible = function (ViewModelClassToShow)
		{
			return ViewModelClassToShow && ViewModelClassToShow.__vm ? ViewModelClassToShow.__vm.modalVisibility() : false;
		};

		/**
		 * @param {string} sScreenName
		 * @param {string} sSubPart
		 */
		Knoin.prototype.screenOnRoute = function (sScreenName, sSubPart)
		{
			var
				self = this,
				oScreen = null,
				bSameScreen= false,
				oCross = null
			;

			if ('' === Utils.pString(sScreenName))
			{
				sScreenName = this.sDefaultScreenName;
			}

			if ('' !== sScreenName)
			{
				oScreen = this.screen(sScreenName);
				if (!oScreen)
				{
					oScreen = this.screen(this.sDefaultScreenName);
					if (oScreen)
					{
						sSubPart = sScreenName + '/' + sSubPart;
						sScreenName = this.sDefaultScreenName;
					}
				}

				if (oScreen && oScreen.__started)
				{
					bSameScreen = this.oCurrentScreen && oScreen === this.oCurrentScreen;

					if (!oScreen.__builded)
					{
						oScreen.__builded = true;

						if (Utils.isNonEmptyArray(oScreen.viewModels()))
						{
							_.each(oScreen.viewModels(), function (ViewModelClass) {
								this.buildViewModel(ViewModelClass, oScreen);
							}, this);
						}

						Utils.delegateRun(oScreen, 'onBuild');
					}

					_.defer(function () {

						// hide screen
						if (self.oCurrentScreen && !bSameScreen)
						{
							Utils.delegateRun(self.oCurrentScreen, 'onHide');
							Utils.delegateRun(self.oCurrentScreen, 'onHideWithDelay', [], 500);

							if (self.oCurrentScreen.onHideTrigger)
							{
								self.oCurrentScreen.onHideTrigger(!self.oCurrentScreen.onHideTrigger());
							}

							if (Utils.isNonEmptyArray(self.oCurrentScreen.viewModels()))
							{
								_.each(self.oCurrentScreen.viewModels(), function (ViewModelClass) {

									if (ViewModelClass.__vm && ViewModelClass.__dom &&
										'Popups' !== ViewModelClass.__vm.viewModelPosition())
									{
										ViewModelClass.__dom.hide();
										ViewModelClass.__vm.viewModelVisibility(false);

										Utils.delegateRun(ViewModelClass.__vm, 'onHide');
										Utils.delegateRun(ViewModelClass.__vm, 'onHideWithDelay', [], 500);

										if (ViewModelClass.__vm.onHideTrigger)
										{
											ViewModelClass.__vm.onHideTrigger(!ViewModelClass.__vm.onHideTrigger());
										}
									}

								});
							}
						}
						// --

						self.oCurrentScreen = oScreen;

						// show screen
						if (self.oCurrentScreen && !bSameScreen)
						{
							Utils.delegateRun(self.oCurrentScreen, 'onShow');
							if (self.oCurrentScreen.onShowTrigger)
							{
								self.oCurrentScreen.onShowTrigger(!self.oCurrentScreen.onShowTrigger());
							}

							Plugins.runHook('screen-on-show', [self.oCurrentScreen.screenName(), self.oCurrentScreen]);

							if (Utils.isNonEmptyArray(self.oCurrentScreen.viewModels()))
							{
								_.each(self.oCurrentScreen.viewModels(), function (ViewModelClass) {

									if (ViewModelClass.__vm && ViewModelClass.__dom &&
										'Popups' !== ViewModelClass.__vm.viewModelPosition())
									{
										Utils.delegateRun(ViewModelClass.__vm, 'onBeforeShow');

										ViewModelClass.__dom.show();
										ViewModelClass.__vm.viewModelVisibility(true);

										Utils.delegateRun(ViewModelClass.__vm, 'onShow');
										if (ViewModelClass.__vm.onShowTrigger)
										{
											ViewModelClass.__vm.onShowTrigger(!ViewModelClass.__vm.onShowTrigger());
										}

										Utils.delegateRun(ViewModelClass.__vm, 'onShowWithDelay', [], 200);

										_.each(ViewModelClass.__names, function (sName) {
											Plugins.runHook('view-model-on-show', [sName, ViewModelClass.__vm]);
										});
									}

								}, self);
							}
						}
						// --

						oCross = oScreen.__cross ? oScreen.__cross() : null;
						if (oCross)
						{
							oCross.parse(sSubPart);
						}
					});
				}
			}
		};

		/**
		 * @param {Array} aScreensClasses
		 */
		Knoin.prototype.startScreens = function (aScreensClasses)
		{
	//		$('#rl-content').css({
	//			'visibility': 'hidden'
	//		});

			_.each(aScreensClasses, function (CScreen) {

					if (CScreen)
					{
						var
							oScreen = new CScreen(),
							sScreenName = oScreen ? oScreen.screenName() : ''
						;

						if (oScreen && '' !== sScreenName)
						{
							if ('' === this.sDefaultScreenName)
							{
								this.sDefaultScreenName = sScreenName;
							}

							this.oScreens[sScreenName] = oScreen;
						}
					}

				}, this);


			_.each(this.oScreens, function (oScreen) {
				if (oScreen && !oScreen.__started && oScreen.__start)
				{
					oScreen.__started = true;
					oScreen.__start();

					Plugins.runHook('screen-pre-start', [oScreen.screenName(), oScreen]);
					Utils.delegateRun(oScreen, 'onStart');
					Plugins.runHook('screen-post-start', [oScreen.screenName(), oScreen]);
				}
			}, this);

			var oCross = crossroads.create();
			oCross.addRoute(/^([a-zA-Z0-9\-]*)\/?(.*)$/, _.bind(this.screenOnRoute, this));

			hasher.initialized.add(oCross.parse, oCross);
			hasher.changed.add(oCross.parse, oCross);
			hasher.init();

	//		$('#rl-content').css({
	//			'visibility': 'visible'
	//		});

			_.delay(function () {
				Globals.$html.removeClass('rl-started-trigger').addClass('rl-started');
			}, 100);

			_.delay(function () {
				Globals.$html.addClass('rl-started-delay');
			}, 200);
		};

		/**
		 * @param {string} sHash
		 * @param {boolean=} bSilence = false
		 * @param {boolean=} bReplace = false
		 */
		Knoin.prototype.setHash = function (sHash, bSilence, bReplace)
		{
			sHash = '#' === sHash.substr(0, 1) ? sHash.substr(1) : sHash;
			sHash = '/' === sHash.substr(0, 1) ? sHash.substr(1) : sHash;

			bReplace = Utils.isUnd(bReplace) ? false : !!bReplace;

			if (Utils.isUnd(bSilence) ? false : !!bSilence)
			{
				hasher.changed.active = false;
				hasher[bReplace ? 'replaceHash' : 'setHash'](sHash);
				hasher.changed.active = true;
			}
			else
			{
				hasher.changed.active = true;
				hasher[bReplace ? 'replaceHash' : 'setHash'](sHash);
				hasher.setHash(sHash);
			}
		};

		module.exports = new Knoin();

	}());

/***/ },
/* 5 */
/*!***********************************!*\
  !*** ./dev/Common/Translator.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __WEBPACK_IMPORTED_MODULE_1_ko__ && __WEBPACK_IMPORTED_MODULE_1_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







	var Translator = function () {
		function Translator() {
			_classCallCheck(this, Translator);

			this.data = {};
			this.notificationI18N = {};

			this.data = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].rainloopI18N || {};
			this.trigger = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
			this.i18n = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].bind(this.i18n, this);
			this.init();
		}

		/**
	  * @param {string} key
	  * @param {Object=} valueList
	  * @param {string=} defaulValue
	  * @return {string}
	  */


		Translator.prototype.i18n = function i18n(key, valueList, defaulValue) {

			var valueName = '',
			    result = this.data[key];

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].isUndefined(result)) {
				result = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].isUndefined(defaulValue) ? key : defaulValue;
			}

			if (!/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].isUndefined(valueList) && !/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].isNull(valueList)) {
				for (valueName in valueList) {
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].has(valueList, valueName)) {
						result = result.replace('%' + valueName + '%', valueList[valueName]);
					}
				}
			}

			return result;
		};

		/**
	  * @param {Object} element
	  */


		Translator.prototype.i18nToNode = function i18nToNode(element) {

			var $el = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(element),
			    key = $el.data('i18n');

			if (key) {
				if ('[' === key.substr(0, 1)) {
					switch (key.substr(0, 6)) {
						case '[html]':
							$el.html(this.i18n(key.substr(6)));
							break;
						case '[place':
							$el.attr('placeholder', this.i18n(key.substr(13)));
							break;
						case '[title':
							$el.attr('title', this.i18n(key.substr(7)));
							break;
					}
				} else {
					$el.text(this.i18n(key));
				}
			}
		};

		/**
	  * @param {Object} elements
	  * @param {boolean=} animate = false
	  */


		Translator.prototype.i18nToNodes = function i18nToNodes(elements) {
			var _this = this;

			var animate = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].defer(function () {

				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('[data-i18n]', elements).each(function (index, item) {
					_this.i18nToNode(item);
				});

				if (animate && /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["bAnimationSupported"]) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('.i18n-animation[data-i18n]', elements).letterfx({
						fx: 'fall fade',
						backwards: false,
						timing: 50,
						fx_duration: '50ms',
						letter_end: 'restore',
						element_end: 'restore'
					});
				}
			});
		};

		Translator.prototype.reloadData = function reloadData() {
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].rainloopI18N) {
				this.data = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].rainloopI18N || {};

				this.i18nToNodes(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].document, true);

				__webpack_require__(/*! Common/Momentor */ 25).reload();
				this.trigger(!this.trigger());
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].rainloopI18N = null;
		};

		Translator.prototype.initNotificationLanguage = function initNotificationLanguage() {
			var _this2 = this;

			var map = [[/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].InvalidToken, 'NOTIFICATIONS/INVALID_TOKEN'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].InvalidToken, 'NOTIFICATIONS/INVALID_TOKEN'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].AuthError, 'NOTIFICATIONS/AUTH_ERROR'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].AccessError, 'NOTIFICATIONS/ACCESS_ERROR'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].ConnectionError, 'NOTIFICATIONS/CONNECTION_ERROR'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CaptchaError, 'NOTIFICATIONS/CAPTCHA_ERROR'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].SocialFacebookLoginAccessDisable, 'NOTIFICATIONS/SOCIAL_FACEBOOK_LOGIN_ACCESS_DISABLE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].SocialTwitterLoginAccessDisable, 'NOTIFICATIONS/SOCIAL_TWITTER_LOGIN_ACCESS_DISABLE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].SocialGoogleLoginAccessDisable, 'NOTIFICATIONS/SOCIAL_GOOGLE_LOGIN_ACCESS_DISABLE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].DomainNotAllowed, 'NOTIFICATIONS/DOMAIN_NOT_ALLOWED'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].AccountNotAllowed, 'NOTIFICATIONS/ACCOUNT_NOT_ALLOWED'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].AccountTwoFactorAuthRequired, 'NOTIFICATIONS/ACCOUNT_TWO_FACTOR_AUTH_REQUIRED'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].AccountTwoFactorAuthError, 'NOTIFICATIONS/ACCOUNT_TWO_FACTOR_AUTH_ERROR'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CouldNotSaveNewPassword, 'NOTIFICATIONS/COULD_NOT_SAVE_NEW_PASSWORD'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CurrentPasswordIncorrect, 'NOTIFICATIONS/CURRENT_PASSWORD_INCORRECT'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].NewPasswordShort, 'NOTIFICATIONS/NEW_PASSWORD_SHORT'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].NewPasswordWeak, 'NOTIFICATIONS/NEW_PASSWORD_WEAK'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].NewPasswordForbidden, 'NOTIFICATIONS/NEW_PASSWORD_FORBIDDENT'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].ContactsSyncError, 'NOTIFICATIONS/CONTACTS_SYNC_ERROR'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantGetMessageList, 'NOTIFICATIONS/CANT_GET_MESSAGE_LIST'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantGetMessage, 'NOTIFICATIONS/CANT_GET_MESSAGE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantDeleteMessage, 'NOTIFICATIONS/CANT_DELETE_MESSAGE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantMoveMessage, 'NOTIFICATIONS/CANT_MOVE_MESSAGE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantCopyMessage, 'NOTIFICATIONS/CANT_MOVE_MESSAGE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantSaveMessage, 'NOTIFICATIONS/CANT_SAVE_MESSAGE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantSendMessage, 'NOTIFICATIONS/CANT_SEND_MESSAGE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].InvalidRecipients, 'NOTIFICATIONS/INVALID_RECIPIENTS'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantSaveFilters, 'NOTIFICATIONS/CANT_SAVE_FILTERS'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantGetFilters, 'NOTIFICATIONS/CANT_GET_FILTERS'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].FiltersAreNotCorrect, 'NOTIFICATIONS/FILTERS_ARE_NOT_CORRECT'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantCreateFolder, 'NOTIFICATIONS/CANT_CREATE_FOLDER'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantRenameFolder, 'NOTIFICATIONS/CANT_RENAME_FOLDER'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantDeleteFolder, 'NOTIFICATIONS/CANT_DELETE_FOLDER'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantDeleteNonEmptyFolder, 'NOTIFICATIONS/CANT_DELETE_NON_EMPTY_FOLDER'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantSubscribeFolder, 'NOTIFICATIONS/CANT_SUBSCRIBE_FOLDER'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantUnsubscribeFolder, 'NOTIFICATIONS/CANT_UNSUBSCRIBE_FOLDER'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantSaveSettings, 'NOTIFICATIONS/CANT_SAVE_SETTINGS'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantSavePluginSettings, 'NOTIFICATIONS/CANT_SAVE_PLUGIN_SETTINGS'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].DomainAlreadyExists, 'NOTIFICATIONS/DOMAIN_ALREADY_EXISTS'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantInstallPackage, 'NOTIFICATIONS/CANT_INSTALL_PACKAGE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].CantDeletePackage, 'NOTIFICATIONS/CANT_DELETE_PACKAGE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].InvalidPluginPackage, 'NOTIFICATIONS/INVALID_PLUGIN_PACKAGE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].UnsupportedPluginPackage, 'NOTIFICATIONS/UNSUPPORTED_PLUGIN_PACKAGE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].LicensingServerIsUnavailable, 'NOTIFICATIONS/LICENSING_SERVER_IS_UNAVAILABLE'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].LicensingExpired, 'NOTIFICATIONS/LICENSING_EXPIRED'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].LicensingBanned, 'NOTIFICATIONS/LICENSING_BANNED'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].DemoSendMessageError, 'NOTIFICATIONS/DEMO_SEND_MESSAGE_ERROR'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].DemoAccountError, 'NOTIFICATIONS/DEMO_ACCOUNT_ERROR'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].AccountAlreadyExists, 'NOTIFICATIONS/ACCOUNT_ALREADY_EXISTS'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].AccountDoesNotExist, 'NOTIFICATIONS/ACCOUNT_DOES_NOT_EXIST'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].MailServerError, 'NOTIFICATIONS/MAIL_SERVER_ERROR'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].InvalidInputArgument, 'NOTIFICATIONS/INVALID_INPUT_ARGUMENT'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].UnknownNotification, 'NOTIFICATIONS/UNKNOWN_ERROR'], [/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].UnknownError, 'NOTIFICATIONS/UNKNOWN_ERROR']];

			this.notificationI18N = this.notificationI18N || {};

			map.forEach(function (item) {
				_this2.notificationI18N[item[0]] = _this2.i18n(item[1]);
			});
		};

		/**
	  * @param {Function} callback
	  * @param {Object} scope
	  * @param {Function=} langCallback
	  */


		Translator.prototype.initOnStartOrLangChange = function initOnStartOrLangChange(callback, scope) {
			var langCallback = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

			if (callback) {
				callback.call(scope);
			}

			if (langCallback) {
				this.trigger.subscribe(function () {
					if (callback) {
						callback.call(scope);
					}

					langCallback.call(scope);
				});
			} else if (callback) {
				this.trigger.subscribe(callback, scope);
			}
		};

		/**
	  * @param {number} code
	  * @param {*=} message = ''
	  * @param {*=} defCode = null
	  * @return {string}
	  */


		Translator.prototype.getNotification = function getNotification(code) {
			var message = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
			var defCode = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

			code = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].parseInt(code, 10) || 0;
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].ClientViewError === code && message) {
				return message;
			}

			defCode = defCode ? /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].parseInt(defCode, 10) || 0 : 0;
			return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].isUndefined(this.notificationI18N[code]) ? defCode && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].isUndefined(this.notificationI18N[defCode]) ? this.notificationI18N[defCode] : '' : this.notificationI18N[code];
		};

		/**
	  * @param {object} response
	  * @param {number} defCode = Notification.UnknownNotification
	  * @return {string}
	  */


		Translator.prototype.getNotificationFromResponse = function getNotificationFromResponse(response) {
			var defCode = arguments.length <= 1 || arguments[1] === undefined ? /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Notification"].UnknownNotification : arguments[1];

			return response && response.ErrorCode ? this.getNotification(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"].bind()(response.ErrorCode), response.ErrorMessage || '') : this.getNotification(defCode);
		};

		/**
	  * @param {*} code
	  * @return {string}
	  */


		Translator.prototype.getUploadErrorDescByCode = function getUploadErrorDescByCode(code) {
			var result = '';
			switch (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].parseInt(code, 10) || 0) {
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["UploadErrorCode"].FileIsTooBig:
					result = this.i18n('UPLOAD/ERROR_FILE_IS_TOO_BIG');
					break;
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["UploadErrorCode"].FilePartiallyUploaded:
					result = this.i18n('UPLOAD/ERROR_FILE_PARTIALLY_UPLOADED');
					break;
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["UploadErrorCode"].FileNoUploaded:
					result = this.i18n('UPLOAD/ERROR_NO_FILE_UPLOADED');
					break;
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["UploadErrorCode"].MissingTempFolder:
					result = this.i18n('UPLOAD/ERROR_MISSING_TEMP_FOLDER');
					break;
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["UploadErrorCode"].FileOnSaveingError:
					result = this.i18n('UPLOAD/ERROR_ON_SAVING_FILE');
					break;
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["UploadErrorCode"].FileType:
					result = this.i18n('UPLOAD/ERROR_FILE_TYPE');
					break;
				default:
					result = this.i18n('UPLOAD/ERROR_UNKNOWN');
					break;
			}

			return result;
		};

		/**
	  * @param {boolean} admin
	  * @param {string} language
	  * @param {Function=} done
	  * @param {Function=} fail
	  */


		Translator.prototype.reload = function reload(admin, language, done, fail) {

			var self = this,
			    start = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["microtime"].bind()();

			/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["$html"].addClass('rl-changing-language');

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].ajax({
				url: __webpack_require__(/*! Common/Links */ 12).langLink(language, admin),
				dataType: 'script',
				cache: true
			}).fail(fail || /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["noop"]).done(function () {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {

					self.reloadData();

					(done || /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["noop"])();

					var isRtl = -1 < /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["inArray"].bind()(language, ['ar', 'ar_sa', 'he', 'he_he', 'ur', 'ur_ir']);

					/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["$html"].removeClass('rl-changing-language').removeClass('rl-rtl rl-ltr').addClass(isRtl ? 'rl-rtl' : 'rl-ltr')
					//						.attr('dir', isRtl ? 'rtl' : 'ltr')
					;
				}, 500 < /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["microtime"].bind()() - start ? 1 : 500);
			});
		};

		Translator.prototype.init = function init() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["$html"].addClass('rl-' + (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["$html"].attr('dir') || 'ltr'));
		};

		return Translator;
	}();

	module.exports = new Translator();

/***/ },
/* 6 */,
/* 7 */
/*!********************************!*\
  !*** ./dev/Common/Globals.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __WEBPACK_IMPORTED_MODULE_1_ko__ && __WEBPACK_IMPORTED_MODULE_1_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);

	/* global RL_COMMUNITY */




	var $win = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"]);
	$win.__sizes = [0, 0];


	/* harmony export */ Object.defineProperty(exports, "$win", {configurable: false, enumerable: true, get: function() { return $win; }});

	var $doc = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].document);
	/* harmony export */ Object.defineProperty(exports, "$doc", {configurable: false, enumerable: true, get: function() { return $doc; }});

	var $html = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('html');
	/* harmony export */ Object.defineProperty(exports, "$html", {configurable: false, enumerable: true, get: function() { return $html; }});

	var $body = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('body');
	/* harmony export */ Object.defineProperty(exports, "$body", {configurable: false, enumerable: true, get: function() { return $body; }});

	var $div = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('<div></div>');
	/* harmony export */ Object.defineProperty(exports, "$div", {configurable: false, enumerable: true, get: function() { return $div; }});

	var startMicrotime = new /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].Date().getTime();
	/* harmony export */ Object.defineProperty(exports, "startMicrotime", {configurable: false, enumerable: true, get: function() { return startMicrotime; }});

	/**
	 * @type {boolean}
	 */
	var community = true;
	/* harmony export */ Object.defineProperty(exports, "community", {configurable: false, enumerable: true, get: function() { return community; }});

	/**
	 * @type {?}
	 */
	var dropdownVisibility = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false).extend({ rateLimit: 0 });
	/* harmony export */ Object.defineProperty(exports, "dropdownVisibility", {configurable: false, enumerable: true, get: function() { return dropdownVisibility; }});

	/**
	 * @type {boolean}
	 */
	var useKeyboardShortcuts = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(true);
	/* harmony export */ Object.defineProperty(exports, "useKeyboardShortcuts", {configurable: false, enumerable: true, get: function() { return useKeyboardShortcuts; }});

	/**
	 * @type {string}
	 */
	var sUserAgent = 'navigator' in /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"] && 'userAgent' in /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].navigator && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].navigator.userAgent.toLowerCase() || '';
	/* harmony export */ Object.defineProperty(exports, "sUserAgent", {configurable: false, enumerable: true, get: function() { return sUserAgent; }});

	/**
	 * @type {boolean}
	 */
	var bIE = sUserAgent.indexOf('msie') > -1;
	/* harmony export */ Object.defineProperty(exports, "bIE", {configurable: false, enumerable: true, get: function() { return bIE; }});

	/**
	 * @type {boolean}
	 */
	var bChrome = sUserAgent.indexOf('chrome') > -1;
	/* harmony export */ Object.defineProperty(exports, "bChrome", {configurable: false, enumerable: true, get: function() { return bChrome; }});

	/**
	 * @type {boolean}
	 */
	var bSafari = !bChrome && sUserAgent.indexOf('safari') > -1;
	/* harmony export */ Object.defineProperty(exports, "bSafari", {configurable: false, enumerable: true, get: function() { return bSafari; }});

	/**
	 * @type {boolean}
	 */
	var bMobileDevice = /android/i.test(sUserAgent) || /iphone/i.test(sUserAgent) || /ipod/i.test(sUserAgent) || /ipad/i.test(sUserAgent) || /blackberry/i.test(sUserAgent);
	/* harmony export */ Object.defineProperty(exports, "bMobileDevice", {configurable: false, enumerable: true, get: function() { return bMobileDevice; }});

	/**
	 * @type {boolean}
	 */
	var bDisableNanoScroll = bMobileDevice;
	/* harmony export */ Object.defineProperty(exports, "bDisableNanoScroll", {configurable: false, enumerable: true, get: function() { return bDisableNanoScroll; }});

	/**
	 * @type {boolean}
	 */
	var bAnimationSupported = !bMobileDevice && $html.hasClass('csstransitions') && $html.hasClass('cssanimations');
	/* harmony export */ Object.defineProperty(exports, "bAnimationSupported", {configurable: false, enumerable: true, get: function() { return bAnimationSupported; }});

	/**
	 * @type {boolean}
	 */
	var bXMLHttpRequestSupported = !!/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].XMLHttpRequest;
	/* harmony export */ Object.defineProperty(exports, "bXMLHttpRequestSupported", {configurable: false, enumerable: true, get: function() { return bXMLHttpRequestSupported; }});

	/**
	 * @type {Object}
	 */
	var oHtmlEditorDefaultConfig = {
		title: false,
		stylesSet: false,
		customConfig: '',
		contentsCss: '',
		toolbarGroups: [{ name: 'spec' }, { name: 'styles' }, { name: 'basicstyles', groups: ['basicstyles', 'cleanup', 'bidi'] }, { name: 'colors' }, bMobileDevice ? {} : { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] }, { name: 'links' }, { name: 'insert' }, { name: 'document', groups: ['mode', 'document', 'doctools'] }, { name: 'others' }],

		removePlugins: 'liststyle',
		removeButtons: 'Format,Undo,Redo,Cut,Copy,Paste,Anchor,Strike,Subscript,Superscript,Image,SelectAll,Source',
		removeDialogTabs: 'link:advanced;link:target;image:advanced;images:advanced',

		extraPlugins: 'plain,signature',

		allowedContent: true,
		extraAllowedContent: true,

		fillEmptyBlocks: false,
		ignoreEmptyParagraph: true,
		disableNativeSpellChecker: false,

		font_defaultLabel: 'Arial',
		fontSize_defaultLabel: '13',
		fontSize_sizes: '10/10px;12/12px;13/13px;14/14px;16/16px;18/18px;20/20px;24/24px;28/28px;36/36px;48/48px'
	};
	/* harmony export */ Object.defineProperty(exports, "oHtmlEditorDefaultConfig", {configurable: false, enumerable: true, get: function() { return oHtmlEditorDefaultConfig; }});

	/**
	 * @type {Object}
	 */
	var oHtmlEditorLangsMap = {
		bg_bg: 'bg',
		de_de: 'de',
		el_gr: 'el',
		es_es: 'es',
		fr_fr: 'fr',
		hu_hu: 'hu',
		is_is: 'is',
		it_it: 'it',
		ja_jp: 'ja',
		ko_kr: 'ko',
		lt_lt: 'lt',
		lv_lv: 'lv',
		nl_nl: 'nl',
		bg_no: 'no',
		pl_pl: 'pl',
		pt_pt: 'pt',
		pt_br: 'pt-br',
		ro_ro: 'ro',
		ru_ru: 'ru',
		sk_sk: 'sk',
		sl_si: 'sl',
		sv_se: 'sv',
		tr_tr: 'tr',
		uk_ua: 'ru',
		zh_tw: 'zh',
		zh_cn: 'zh-cn'
	};
	/* harmony export */ Object.defineProperty(exports, "oHtmlEditorLangsMap", {configurable: false, enumerable: true, get: function() { return oHtmlEditorLangsMap; }});

	/**
	 * @type {boolean}
	 */
	var bAllowPdfPreview = !bMobileDevice;

	if (bAllowPdfPreview && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].navigator && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].navigator.mimeTypes) {
		bAllowPdfPreview = !!/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].find(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].navigator.mimeTypes, function (oType) {
			return oType && 'application/pdf' === oType.type;
		});

		if (!bAllowPdfPreview) {
			bAllowPdfPreview = typeof /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].navigator.mimeTypes['application/pdf'] !== 'undefined';
		}
	}


	/* harmony export */ Object.defineProperty(exports, "bAllowPdfPreview", {configurable: false, enumerable: true, get: function() { return bAllowPdfPreview; }});

	var aViewModels = {
		settings: [],
		'settings-removed': [],
		'settings-disabled': []
	};
	/* harmony export */ Object.defineProperty(exports, "aViewModels", {configurable: false, enumerable: true, get: function() { return aViewModels; }});

	var leftPanelDisabled = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
	/* harmony export */ Object.defineProperty(exports, "leftPanelDisabled", {configurable: false, enumerable: true, get: function() { return leftPanelDisabled; }});
	var leftPanelType = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');
	/* harmony export */ Object.defineProperty(exports, "leftPanelType", {configurable: false, enumerable: true, get: function() { return leftPanelType; }});
	var leftPanelWidth = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(0);
	/* harmony export */ Object.defineProperty(exports, "leftPanelWidth", {configurable: false, enumerable: true, get: function() { return leftPanelWidth; }});

	// popups
	var popupVisibilityNames = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observableArray([]);
	/* harmony export */ Object.defineProperty(exports, "popupVisibilityNames", {configurable: false, enumerable: true, get: function() { return popupVisibilityNames; }});

	var popupVisibility = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.computed(function () {
		return 0 < popupVisibilityNames().length;
	});
	/* harmony export */ Object.defineProperty(exports, "popupVisibility", {configurable: false, enumerable: true, get: function() { return popupVisibility; }});

	popupVisibility.subscribe(function (bValue) {
		$html.toggleClass('rl-modal', bValue);
	});

	// keys
	var keyScopeReal = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["KeyState"].All);
	/* harmony export */ Object.defineProperty(exports, "keyScopeReal", {configurable: false, enumerable: true, get: function() { return keyScopeReal; }});
	var keyScopeFake = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["KeyState"].All);
	/* harmony export */ Object.defineProperty(exports, "keyScopeFake", {configurable: false, enumerable: true, get: function() { return keyScopeFake; }});

	var keyScope = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.computed({
		owner: this,
		read: function read() {
			return keyScopeFake();
		},
		write: function write(sValue) {

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["KeyState"].Menu !== sValue) {
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["KeyState"].Compose === sValue) {
					// disableKeyFilter
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["d"].filter = function () {
						return useKeyboardShortcuts();
					};
				} else {
					// restoreKeyFilter
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["d"].filter = function (event) {

						if (useKeyboardShortcuts()) {
							var oElement = event.target || event.srcElement,
							    sTagName = oElement ? oElement.tagName : '';

							sTagName = sTagName.toUpperCase();
							return !(sTagName === 'INPUT' || sTagName === 'SELECT' || sTagName === 'TEXTAREA' || oElement && sTagName === 'DIV' && ('editorHtmlArea' === oElement.className || 'true' === '' + oElement.contentEditable));
						}

						return false;
					};
				}

				keyScopeFake(sValue);
				if (dropdownVisibility()) {
					sValue = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["KeyState"].Menu;
				}
			}

			keyScopeReal(sValue);
		}
	});
	/* harmony export */ Object.defineProperty(exports, "keyScope", {configurable: false, enumerable: true, get: function() { return keyScope; }});

	keyScopeReal.subscribe(function (sValue) {
		//	window.console.log('keyScope=' + sValue); // DEBUG
		/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["d"].setScope(sValue);
	});

	dropdownVisibility.subscribe(function (bValue) {
		if (bValue) {
			keyScope(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["KeyState"].Menu);
		} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["KeyState"].Menu === /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["d"].getScope()) {
			keyScope(keyScopeFake());
		}
	});

	/**
	 * @type {*}
	 */
	var data = {
		__APP__: null,
		iAjaxErrorCount: 0,
		iTokenErrorCount: 0,
		aBootstrapDropdowns: [],
		iMessageBodyCacheCount: 0,
		bUnload: false
	};
	/* harmony export */ Object.defineProperty(exports, "data", {configurable: false, enumerable: true, get: function() { return data; }});

/***/ },
/* 8 */
/*!**********************************!*\
  !*** ./dev/Storage/Settings.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




	var SettingsStorage = function () {
		function SettingsStorage() {
			_classCallCheck(this, SettingsStorage);

			this.settings = {};
			this.appSettings = {};

			this.settings = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].__rlah_data() || {};
			this.settings = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isNormal"].bind()(this.settings) ? this.settings : {};

			this.appSettings = this.settings.System || null;
			this.appSettings = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isNormal"].bind()(this.appSettings) ? this.appSettings : {};
		}

		/**
	  * @param {string} name
	  * @return {*}
	  */


		SettingsStorage.prototype.settingsGet = function settingsGet(name) {
			return /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(this.settings[name]) ? null : this.settings[name];
		};

		/**
	  * @param {string} name
	  * @param {*} value
	  */


		SettingsStorage.prototype.settingsSet = function settingsSet(name, value) {
			this.settings[name] = value;
		};

		/**
	  * @param {string} name
	  * @return {*}
	  */


		SettingsStorage.prototype.appSettingsGet = function appSettingsGet(name) {
			return /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(this.appSettings[name]) ? null : this.appSettings[name];
		};

		/**
	  * @param {string} name
	  * @return {boolean}
	  */


		SettingsStorage.prototype.capa = function capa(name) {
			var values = this.settingsGet('Capa');
			return /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isArray"].bind()(values) && /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isNormal"].bind()(name) && -1 < /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["inArray"].bind()(name, values);
		};

		return SettingsStorage;
	}();

	module.exports = new SettingsStorage();

/***/ },
/* 9 */
/*!***********************************!*\
  !*** ./dev/Knoin/AbstractView.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Globals = __webpack_require__(/*! Common/Globals */ 7)
		;

		/**
		 * @constructor
		 * @param {string=} sPosition = ''
		 * @param {string=} sTemplate = ''
		 */
		function AbstractView(sPosition, sTemplate)
		{
			this.bDisabeCloseOnEsc = false;
			this.sPosition = Utils.pString(sPosition);
			this.sTemplate = Utils.pString(sTemplate);

			this.sDefaultKeyScope = Enums.KeyState.None;
			this.sCurrentKeyScope = this.sDefaultKeyScope;

			this.viewModelVisibility = ko.observable(false);
			this.modalVisibility = ko.observable(false).extend({'rateLimit': 0});

			this.viewModelName = '';
			this.viewModelNames = [];
			this.viewModelDom = null;
		}

		/**
		 * @type {boolean}
		 */
		AbstractView.prototype.bDisabeCloseOnEsc = false;

		/**
		 * @type {string}
		 */
		AbstractView.prototype.sPosition = '';

		/**
		 * @type {string}
		 */
		AbstractView.prototype.sTemplate = '';

		/**
		 * @type {string}
		 */
		AbstractView.prototype.sDefaultKeyScope = Enums.KeyState.None;

		/**
		 * @type {string}
		 */
		AbstractView.prototype.sCurrentKeyScope = Enums.KeyState.None;

		/**
		 * @type {string}
		 */
		AbstractView.prototype.viewModelName = '';

		/**
		 * @type {Array}
		 */
		AbstractView.prototype.viewModelNames = [];

		/**
		 * @type {?}
		 */
		AbstractView.prototype.viewModelDom = null;

		/**
		 * @return {string}
		 */
		AbstractView.prototype.viewModelTemplate = function ()
		{
			return this.sTemplate;
		};

		/**
		 * @return {string}
		 */
		AbstractView.prototype.viewModelPosition = function ()
		{
			return this.sPosition;
		};

		AbstractView.prototype.cancelCommand = function () {};
		AbstractView.prototype.closeCommand = function () {};

		AbstractView.prototype.storeAndSetKeyScope = function ()
		{
			this.sCurrentKeyScope = Globals.keyScope();
			Globals.keyScope(this.sDefaultKeyScope);
		};

		AbstractView.prototype.restoreKeyScope = function ()
		{
			Globals.keyScope(this.sCurrentKeyScope);
		};

		AbstractView.prototype.registerPopupKeyDown = function ()
		{
			var self = this;

			Globals.$win.on('keydown', function (oEvent) {
				if (oEvent && self.modalVisibility && self.modalVisibility())
				{
					if (!this.bDisabeCloseOnEsc && Enums.EventKeyCode.Esc === oEvent.keyCode)
					{
						Utils.delegateRun(self, 'cancelCommand');
						return false;
					}
					else if (Enums.EventKeyCode.Backspace === oEvent.keyCode && !Utils.inFocus())
					{
						return false;
					}
				}

				return true;
			});
		};

		module.exports = AbstractView;

	}());

/***/ },
/* 10 */
/*!************************!*\
  !*** ./dev/common.jsx ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __WEBPACK_IMPORTED_MODULE_0_window__ && __WEBPACK_IMPORTED_MODULE_0_window__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_window__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_window__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_window___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_window___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! $ */ 13);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __WEBPACK_IMPORTED_MODULE_1____ && __WEBPACK_IMPORTED_MODULE_1____.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1____['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1____; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_____default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_____default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_JSON__ = __webpack_require__(/*! JSON */ 39);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_JSON___default = __WEBPACK_IMPORTED_MODULE_2_JSON__ && __WEBPACK_IMPORTED_MODULE_2_JSON__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_JSON__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_JSON__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_JSON___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_JSON___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! _ */ 2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __WEBPACK_IMPORTED_MODULE_3____ && __WEBPACK_IMPORTED_MODULE_3____.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3____['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3____; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3_____default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3_____default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Promise__ = __webpack_require__(/*! Promise */ 47);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Promise___default = __WEBPACK_IMPORTED_MODULE_4_Promise__ && __WEBPACK_IMPORTED_MODULE_4_Promise__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_4_Promise__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_4_Promise__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4_Promise___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_4_Promise___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(/*! moment */ 84);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __WEBPACK_IMPORTED_MODULE_5_moment__ && __WEBPACK_IMPORTED_MODULE_5_moment__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_5_moment__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_5_moment__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_5_moment___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_5_moment___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_key__ = __webpack_require__(/*! key */ 18);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_key___default = __WEBPACK_IMPORTED_MODULE_6_key__ && __WEBPACK_IMPORTED_MODULE_6_key__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_6_key__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_6_key__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_6_key___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_6_key___default });









	/* harmony reexport */ Object.defineProperty(exports, "d", {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_6_key___default.a; }});
	/* harmony reexport */ Object.defineProperty(exports, "b", {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_0_window___default.a; }});
	/* harmony reexport */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_1_____default.a; }});
	/* harmony reexport */ Object.defineProperty(exports, "f", {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_2_JSON___default.a; }});
	/* harmony reexport */ Object.defineProperty(exports, "c", {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_3_____default.a; }});
	/* unused harmony reexport Promise */
	/* harmony reexport */ Object.defineProperty(exports, "e", {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_5_moment___default.a; }});


/***/ },
/* 11 */
/*!*************************!*\
  !*** external "window" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = window;

/***/ },
/* 12 */
/*!******************************!*\
  !*** ./dev/Common/Links.jsx ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default = __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__ && __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default });
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





	var Links = function () {
		function Links() {
			_classCallCheck(this, Links);

			this.sHashPrefix = '#/';
			this.sServerPrefix = './?';

			this.sVersion = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.appSettingsGet('version');
			this.sWebPrefix = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.appSettingsGet('webPath') || '';
			this.sVersionPrefix = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.appSettingsGet('webVersionPath') || 'rainloop/v/' + this.sVersion + '/';
			this.bAminHostUse = !!/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.appSettingsGet('adminHostUse');
			this.sAdminPath = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.appSettingsGet('adminPath') || 'admin';

			this.sAuthSuffix = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.settingsGet('AuthAccountHash') || '0';

			this.sStaticPrefix = this.sVersionPrefix + 'static/';
		}

		Links.prototype.populateAuthSuffix = function populateAuthSuffix() {
			this.sAuthSuffix = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.settingsGet('AuthAccountHash') || '0';
		};

		/**
	  * @return {string}
	  */


		Links.prototype.subQueryPrefix = function subQueryPrefix() {
			return '&q[]=';
		};

		/**
	  * @param {string=} startupUrl
	  * @return {string}
	  */


		Links.prototype.root = function root() {
			var startupUrl = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

			return this.sHashPrefix + /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["pString"].bind()(startupUrl);
		};

		/**
	  * @return {string}
	  */


		Links.prototype.rootAdmin = function rootAdmin() {
			return this.bAminHostUse ? './' : this.sServerPrefix + this.sAdminPath;
		};

		/**
	  * @return {string}
	  */


		Links.prototype.rootUser = function rootUser() {
			var mobile = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

			return mobile ? './?/Mobile/' : './';
		};

		/**
	  * @param {string} type
	  * @param {string} download
	  * @param {string=} customSpecSuffix
	  * @return {string}
	  */


		Links.prototype.attachmentRaw = function attachmentRaw(type, download, customSpecSuffix) {
			customSpecSuffix = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(customSpecSuffix) ? this.sAuthSuffix : customSpecSuffix;
			return this.sServerPrefix + '/Raw/' + this.subQueryPrefix() + '/' + customSpecSuffix + '/' + type + '/' + this.subQueryPrefix() + '/' + download;
		};

		/**
	  * @param {string} download
	  * @param {string=} customSpecSuffix
	  * @return {string}
	  */


		Links.prototype.attachmentDownload = function attachmentDownload(download, customSpecSuffix) {
			return this.attachmentRaw('Download', download, customSpecSuffix);
		};

		/**
	  * @param {string} download
	  * @param {string=} customSpecSuffix
	  * @return {string}
	  */


		Links.prototype.attachmentPreview = function attachmentPreview(download, customSpecSuffix) {
			return this.attachmentRaw('View', download, customSpecSuffix);
		};

		/**
	  * @param {string} download
	  * @param {string=} customSpecSuffix
	  * @return {string}
	  */


		Links.prototype.attachmentThumbnailPreview = function attachmentThumbnailPreview(download, customSpecSuffix) {
			return this.attachmentRaw('ViewThumbnail', download, customSpecSuffix);
		};

		/**
	  * @param {string} download
	  * @param {string=} customSpecSuffix
	  * @return {string}
	  */


		Links.prototype.attachmentPreviewAsPlain = function attachmentPreviewAsPlain(download, customSpecSuffix) {
			return this.attachmentRaw('ViewAsPlain', download, customSpecSuffix);
		};

		/**
	  * @param {string} download
	  * @param {string=} customSpecSuffix
	  * @return {string}
	  */


		Links.prototype.attachmentFramed = function attachmentFramed(download, customSpecSuffix) {
			return this.attachmentRaw('FramedView', download, customSpecSuffix);
		};

		/**
	  * @return {string}
	  */


		Links.prototype.upload = function upload() {
			return this.sServerPrefix + '/Upload/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/';
		};

		/**
	  * @return {string}
	  */


		Links.prototype.uploadContacts = function uploadContacts() {
			return this.sServerPrefix + '/UploadContacts/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/';
		};

		/**
	  * @return {string}
	  */


		Links.prototype.uploadBackground = function uploadBackground() {
			return this.sServerPrefix + '/UploadBackground/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/';
		};

		/**
	  * @return {string}
	  */


		Links.prototype.append = function append() {
			return this.sServerPrefix + '/Append/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/';
		};

		/**
	  * @param {string} email
	  * @return {string}
	  */


		Links.prototype.change = function change(email) {
			return this.sServerPrefix + '/Change/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/' + /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeURIComponent"].bind()(email) + '/';
		};

		/**
	  * @param {string} add
	  * @return {string}
	  */


		Links.prototype.ajax = function ajax(add) {
			return this.sServerPrefix + '/Ajax/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/' + add;
		};

		/**
	  * @param {string} requestHash
	  * @return {string}
	  */


		Links.prototype.messageViewLink = function messageViewLink(requestHash) {
			return this.sServerPrefix + '/Raw/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/ViewAsPlain/' + this.subQueryPrefix() + '/' + requestHash;
		};

		/**
	  * @param {string} requestHash
	  * @return {string}
	  */


		Links.prototype.messageDownloadLink = function messageDownloadLink(requestHash) {
			return this.sServerPrefix + '/Raw/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/Download/' + this.subQueryPrefix() + '/' + requestHash;
		};

		/**
	  * @param {string} email
	  * @return {string}
	  */


		Links.prototype.avatarLink = function avatarLink(email) {
			return this.sServerPrefix + '/Raw/0/Avatar/' + /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeURIComponent"].bind()(email) + '/';
		};

		/**
	  * @param {string} hash
	  * @return {string}
	  */


		Links.prototype.publicLink = function publicLink(hash) {
			return this.sServerPrefix + '/Raw/0/Public/' + hash + '/';
		};

		/**
	  * @param {string} hash
	  * @return {string}
	  */


		Links.prototype.userBackground = function userBackground(hash) {
			return this.sServerPrefix + '/Raw/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/UserBackground/' + this.subQueryPrefix() + '/' + hash;
		};

		/**
	  * @param {string} inboxFolderName = 'INBOX'
	  * @return {string}
	  */


		Links.prototype.inbox = function inbox() {
			var inboxFolderName = arguments.length <= 0 || arguments[0] === undefined ? 'INBOX' : arguments[0];

			return this.sHashPrefix + 'mailbox/' + inboxFolderName;
		};

		/**
	  * @param {string=} screenName
	  * @return {string}
	  */


		Links.prototype.settings = function settings() {
			var screenName = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

			return this.sHashPrefix + 'settings' + (screenName ? '/' + screenName : '');
		};

		/**
	  * @return {string}
	  */


		Links.prototype.about = function about() {
			return this.sHashPrefix + 'about';
		};

		/**
	  * @param {string} screenName
	  * @return {string}
	  */


		Links.prototype.admin = function admin(screenName) {
			var result = this.sHashPrefix;
			switch (screenName) {
				case 'AdminDomains':
					result += 'domains';
					break;
				case 'AdminSecurity':
					result += 'security';
					break;
				case 'AdminLicensing':
					result += 'licensing';
					break;
			}

			return result;
		};

		/**
	  * @param {string} folder
	  * @param {number=} page = 1
	  * @param {string=} search = ''
	  * @param {string=} threadUid = ''
	  * @return {string}
	  */


		Links.prototype.mailBox = function mailBox(folder) {
			var page = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
			var search = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
			var threadUid = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];


			page = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isNormal"].bind()(page) ? /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["pInt"].bind()(page) : 1;
			search = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["pString"].bind()(search);

			var result = this.sHashPrefix + 'mailbox/';

			if ('' !== folder) {
				var resultThreadUid = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["pInt"].bind()(threadUid);
				result += /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].encodeURI(folder) + (0 < resultThreadUid ? '~' + resultThreadUid : '');
			}

			if (1 < page) {
				result = result.replace(/[\/]+$/, '');
				result += '/p' + page;
			}

			if ('' !== search) {
				result = result.replace(/[\/]+$/, '');
				result += '/' + /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].encodeURI(search);
			}

			return result;
		};

		/**
	  * @return {string}
	  */


		Links.prototype.phpInfo = function phpInfo() {
			return this.sServerPrefix + 'Info';
		};

		/**
	  * @param {string} lang
	  * @param {boolean} admin
	  * @return {string}
	  */


		Links.prototype.langLink = function langLink(lang, admin) {
			return this.sServerPrefix + '/Lang/0/' + (admin ? 'Admin' : 'App') + '/' + /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].encodeURI(lang) + '/' + this.sVersion + '/';
		};

		/**
	  * @return {string}
	  */


		Links.prototype.exportContactsVcf = function exportContactsVcf() {
			return this.sServerPrefix + '/Raw/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/ContactsVcf/';
		};

		/**
	  * @return {string}
	  */


		Links.prototype.exportContactsCsv = function exportContactsCsv() {
			return this.sServerPrefix + '/Raw/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/ContactsCsv/';
		};

		/**
	  * @return {string}
	  */


		Links.prototype.emptyContactPic = function emptyContactPic() {
			return this.sStaticPrefix + 'css/images/empty-contact.png';
		};

		/**
	  * @param {string} fileName
	  * @return {string}
	  */


		Links.prototype.sound = function sound(fileName) {
			return this.sStaticPrefix + 'sounds/' + fileName;
		};

		/**
	  * @param {string} theme
	  * @return {string}
	  */


		Links.prototype.themePreviewLink = function themePreviewLink(theme) {
			var prefix = this.sVersionPrefix;
			if ('@custom' === theme.substr(-7)) {
				theme = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"].bind()(theme.substring(0, theme.length - 7));
				prefix = this.sWebPrefix;
			}

			return prefix + 'themes/' + /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].encodeURI(theme) + '/images/preview.png';
		};

		/**
	  * @return {string}
	  */


		Links.prototype.notificationMailIcon = function notificationMailIcon() {
			return this.sStaticPrefix + 'css/images/icom-message-notification.png';
		};

		/**
	  * @return {string}
	  */


		Links.prototype.openPgpJs = function openPgpJs() {
			return this.sStaticPrefix + 'js/min/openpgp.min.js';
		};

		/**
	  * @return {string}
	  */


		Links.prototype.openPgpWorkerJs = function openPgpWorkerJs() {
			return this.sStaticPrefix + 'js/min/openpgp.worker.min.js';
		};

		/**
	  * @return {string}
	  */


		Links.prototype.openPgpWorkerPath = function openPgpWorkerPath() {
			return this.sStaticPrefix + 'js/min/';
		};

		/**
	  * @param {boolean} xauth = false
	  * @return {string}
	  */


		Links.prototype.socialGoogle = function socialGoogle() {
			var xauth = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

			return this.sServerPrefix + 'SocialGoogle' + ('' !== this.sAuthSuffix ? '/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/' : '') + (xauth ? '&xauth=1' : '');
		};

		/**
	  * @return {string}
	  */


		Links.prototype.socialTwitter = function socialTwitter() {
			return this.sServerPrefix + 'SocialTwitter' + ('' !== this.sAuthSuffix ? '/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/' : '');
		};

		/**
	  * @return {string}
	  */


		Links.prototype.socialFacebook = function socialFacebook() {
			return this.sServerPrefix + 'SocialFacebook' + ('' !== this.sAuthSuffix ? '/' + this.subQueryPrefix() + '/' + this.sAuthSuffix + '/' : '');
		};

		return Links;
	}();

	module.exports = new Links();

/***/ },
/* 13 */
/*!********************************!*\
  !*** external "window.jQuery" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = window.jQuery;

/***/ },
/* 14 */,
/* 15 */
/*!************************************!*\
  !*** ./dev/Component/Abstract.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko___default = __WEBPACK_IMPORTED_MODULE_2_ko__ && __WEBPACK_IMPORTED_MODULE_2_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_ko___default });
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





	var AbstractComponent = function () {
		function AbstractComponent() {
			_classCallCheck(this, AbstractComponent);

			this.disposable = [];
		}

		AbstractComponent.prototype.dispose = function dispose() {
			this.disposable.forEach(function (funcToDispose) {
				if (funcToDispose && funcToDispose.dispose) {
					funcToDispose.dispose();
				}
			});
		};

		return AbstractComponent;
	}();

	/**
	 * @param {*} ClassObject
	 * @param {string} templateID = ''
	 * @return {Object}
	 */


	var componentExportHelper = function componentExportHelper(ClassObject) {
		var templateID = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

		return {
			template: templateID ? { element: templateID } : '<b></b>',
			viewModel: {
				createViewModel: function createViewModel(params, componentInfo) {

					params = params || {};
					params.element = null;

					if (componentInfo && componentInfo.element) {
						params.component = componentInfo;
						params.element = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(componentInfo.element);

						__webpack_require__(/*! Common/Translator */ 5).i18nToNodes(params.element);

						if (!/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(params.inline) && /* harmony import */__WEBPACK_IMPORTED_MODULE_2_ko___default.a.unwrap(params.inline)) {
							params.element.css('display', 'inline-block');
						}
					}

					return new ClassObject(params);
				}
			}
		};
	};


	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return AbstractComponent; }});
	/* harmony export */ Object.defineProperty(exports, "b", {configurable: false, enumerable: true, get: function() { return componentExportHelper; }});

/***/ },
/* 16 */
/*!*******************************!*\
  !*** ./dev/Common/Consts.jsx ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* eslint max-len: 0 */

	var MESSAGES_PER_PAGE = 20;
	/* harmony export */ Object.defineProperty(exports, "MESSAGES_PER_PAGE", {configurable: false, enumerable: true, get: function() { return MESSAGES_PER_PAGE; }});

	var MESSAGES_PER_PAGE_VALUES = [10, 20, 30, 50, 100];
	/* harmony export */ Object.defineProperty(exports, "MESSAGES_PER_PAGE_VALUES", {configurable: false, enumerable: true, get: function() { return MESSAGES_PER_PAGE_VALUES; }});

	var CONTACTS_PER_PAGE = 50;
	/* harmony export */ Object.defineProperty(exports, "CONTACTS_PER_PAGE", {configurable: false, enumerable: true, get: function() { return CONTACTS_PER_PAGE; }});

	var DEFAULT_AJAX_TIMEOUT = 30000;
	/* harmony export */ Object.defineProperty(exports, "DEFAULT_AJAX_TIMEOUT", {configurable: false, enumerable: true, get: function() { return DEFAULT_AJAX_TIMEOUT; }});

	var SEARCH_AJAX_TIMEOUT = 300000;
	/* harmony export */ Object.defineProperty(exports, "SEARCH_AJAX_TIMEOUT", {configurable: false, enumerable: true, get: function() { return SEARCH_AJAX_TIMEOUT; }});

	var SEND_MESSAGE_AJAX_TIMEOUT = 300000;
	/* harmony export */ Object.defineProperty(exports, "SEND_MESSAGE_AJAX_TIMEOUT", {configurable: false, enumerable: true, get: function() { return SEND_MESSAGE_AJAX_TIMEOUT; }});

	var SAVE_MESSAGE_AJAX_TIMEOUT = 200000;
	/* harmony export */ Object.defineProperty(exports, "SAVE_MESSAGE_AJAX_TIMEOUT", {configurable: false, enumerable: true, get: function() { return SAVE_MESSAGE_AJAX_TIMEOUT; }});

	var CONTACTS_SYNC_AJAX_TIMEOUT = 200000;
	/* harmony export */ Object.defineProperty(exports, "CONTACTS_SYNC_AJAX_TIMEOUT", {configurable: false, enumerable: true, get: function() { return CONTACTS_SYNC_AJAX_TIMEOUT; }});

	var UNUSED_OPTION_VALUE = '__UNUSE__';
	/* harmony export */ Object.defineProperty(exports, "UNUSED_OPTION_VALUE", {configurable: false, enumerable: true, get: function() { return UNUSED_OPTION_VALUE; }});

	var CLIENT_SIDE_STORAGE_INDEX_NAME = 'rlcsc';
	/* harmony export */ Object.defineProperty(exports, "CLIENT_SIDE_STORAGE_INDEX_NAME", {configurable: false, enumerable: true, get: function() { return CLIENT_SIDE_STORAGE_INDEX_NAME; }});

	var IMAP_DEFAULT_PORT = 143;
	/* harmony export */ Object.defineProperty(exports, "IMAP_DEFAULT_PORT", {configurable: false, enumerable: true, get: function() { return IMAP_DEFAULT_PORT; }});

	var IMAP_DEFAULT_SECURE_PORT = 993;
	/* harmony export */ Object.defineProperty(exports, "IMAP_DEFAULT_SECURE_PORT", {configurable: false, enumerable: true, get: function() { return IMAP_DEFAULT_SECURE_PORT; }});

	var SMTP_DEFAULT_PORT = 25;
	/* harmony export */ Object.defineProperty(exports, "SMTP_DEFAULT_PORT", {configurable: false, enumerable: true, get: function() { return SMTP_DEFAULT_PORT; }});

	var SMTP_DEFAULT_SECURE_PORT = 465;
	/* harmony export */ Object.defineProperty(exports, "SMTP_DEFAULT_SECURE_PORT", {configurable: false, enumerable: true, get: function() { return SMTP_DEFAULT_SECURE_PORT; }});

	var SIEVE_DEFAULT_PORT = 4190;
	/* harmony export */ Object.defineProperty(exports, "SIEVE_DEFAULT_PORT", {configurable: false, enumerable: true, get: function() { return SIEVE_DEFAULT_PORT; }});

	var MESSAGE_BODY_CACHE_LIMIT = 15;
	/* harmony export */ Object.defineProperty(exports, "MESSAGE_BODY_CACHE_LIMIT", {configurable: false, enumerable: true, get: function() { return MESSAGE_BODY_CACHE_LIMIT; }});

	var AJAX_ERROR_LIMIT = 7;
	/* harmony export */ Object.defineProperty(exports, "AJAX_ERROR_LIMIT", {configurable: false, enumerable: true, get: function() { return AJAX_ERROR_LIMIT; }});

	var TOKEN_ERROR_LIMIT = 10;
	/* harmony export */ Object.defineProperty(exports, "TOKEN_ERROR_LIMIT", {configurable: false, enumerable: true, get: function() { return TOKEN_ERROR_LIMIT; }});

	var RAINLOOP_TRIAL_KEY = 'RAINLOOP-TRIAL-KEY';
	/* harmony export */ Object.defineProperty(exports, "RAINLOOP_TRIAL_KEY", {configurable: false, enumerable: true, get: function() { return RAINLOOP_TRIAL_KEY; }});

	var DATA_IMAGE_USER_DOT_PIC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAHHklEQVRoQ7VZW08bVxCeXRuwIbTGXIwNtBBaqjwgVUiR8lDlbza9qe1DpVZ9aNQ/0KpPeaJK07SpcuEeCEmUAObm21bfrL9lONjexSYrWfbunj37zXdmvpkz9oIgCKTD0Wg0xPd94TDP83Q0zvWa50vzklSrdanVanqf4/D84GBGr+F+Op3S8fqoJxLOdnZgTvsO/nYhenHA+UC7CWF1uXwkb9++ldPTUwVerVbVqFQqpR8YPjQ0JCMjI5LNDijoRgP3PQVu5+5Eor2XGLg7IV4GkIdHJ/LmzRs5ODiIwNbrdR0O0GCcq4Xz4eFhmZyclP7+tDQaIik/BG5XKQn4SwG3zJTLZXn9+rUclI8UHD5YVoDDN8bSzXhONwL48fFxGR4eilzFZT1uFRIB5yT8BqCdnR3Z3d0VP9Un6XRawYJpggVrZBv38ME4XKtUKnLt2jUplUoy1PR/l3U7T6sVSAQcgMAkj8PDQ9ne3pajoyMRL7zeKsYZWHgWYDGmv78/mmdwcFA+mJlSgziHDWrERrsjEXDXegTi1tZW+DLxI2bxIrqFNYTXyDyCFweMAHCwb8e4RnTNuOsqe3t7sra21pTD0Kct666E8XlcZyzw9/RUUXK5nK5oUinUQI6TQ3cynO/v78vq6qrKXCNwlTiJJpyNGc3nZHp6uqV2dwrQWOCtZBDAV1ZWwsQk7f0wiQn5kffbAu/0/KWBYzIC1+XukfGx0RGZmppKlC2tIV0Bh4aDcZW7HhkfH8urLLZL7T2pihvlkMNnz56FiadHxicL41IsFpN41bkxsYxbRdFo9jwB8KdPn14J8KnSpBQKhQs63nPmbCVRcBUAR2Lq1VVmpksyMTFxAXjcEsQybiegESionjx5osCZOeNe1O4+EhCAX7bQSgQcxRHTMgAgcz5+/Dis/hL4uHU3/B4YGNASGHIKxuEql0k+l05AeIAF1vPnz5VxFFmdDlaJrMtZITJeSsXCOTlMunKxjLtMYOKNjQ158eJFuAuKkUOb5sEwgff19SkJUBVkThZUbnXZrtCKBQ6gbnWIkjZpyne3ejAWoGnA7Icz6irvBLgbOMicCM6TkxPx/LAkbXfgWcsazuE2kFRsKD5Z+CiqDumKncpZvieWcS6dDVD8xiYCNflpJdwcdwJOf9airLmVQ7DPzMxIYWLsXGXoVqLt5k0M3K3JUVPDZdbWNzsCp48TPFdvdnZWUz32nDha7bJ63kgAJPzSdRks9/Kf9xMJAQ1gq2NpaUmy2Yz4zar4nQC3xb99AQwCcGzLAAwuhG8YiWvcOKts+r4GOe5nMhm5efOm9lUA3E3vSZJRrKvE0fnPv//Jy5cvo5cTHIPQbSjhOoqq69evS19f6lxDKK4+sVhigZPtKJqbrQeqxd5+WR4+fKgqgT0k2XX3nhiPgETWXFhYkFzuPZ2yVq1GTSOXpE47/VjgNnD4m4GG7/LhsTx69EiwD4Vr2MwIIxgbAH18fKx1yfz8vEogNvGtWnCuhLZa9UTAreVWFsHy/b/+Vrbdl7E5REMQD2jDoUbByty+/ZnU64GkU2HzyJLhktU1cLv8nARgkYS2d3ajAgwG8qU2oLmDZ92CMaOjo7K4uCiZgbDWaRWgnZhPxLhrMUCvr69riwKZk1LHF7XqrWAO9hJxH6ozNzcnCx/PqztZg9mf6SQMscCtm2C5ke4BGMlHWTUp36036AJajDVrFMzBrhhWslQsSrFYiOqVpMriNYIgqFRq2j3FAb/zffT6zuxFXxsNzs3NTXn16lW4gYiW96w1FyedF+83xG/2FNGCRpU4NjamMsn+OZ9xE5RXqdaDdPpib6RWCzuwKF9RxqI2AVNQBwQYJoK0wdBejnqtEikP3pfP51XjUTESl12FqJEKxsEorARYDD44ONTeID7YpsEnrRvQfWAI2e8WfDaTUSIwJ0iBCmFOtOUAHvVMPp/TPwvYFVYFIuP8l+DBgwdaa2Miqwa0GgYwfeMltovbDfh6c1vIgMYcliSsKv4IWFr6VDHxvldvBAH+1sA+cnl5WYOPmmr9ir+1l9I0Cgz0yjhXjfJJ0JROnmezWbl165ayr/5fqwcBNr7IfhjMqKcvESSM4eRcCasQ3bDNObmKPLdGUGpZsN24cUNLBm9zazu4d++e6qpNBFaTuUS26U5dpuR1CxyA7J9ddrMRqlz4pwLLYawymPd++/2PADt2ugcGwq9gCCdhQ96C6xWwa6j1ceuq+I0EhW0i8MAIVJfeL3d/DVD8EKi12P6/2S2jV/EccVB54O/ejz/9HGCpoBBMta5rXMXLu53D1XAwjhXwvvv+h4BAXVe4bOu3O3ChxF08LiZFG3fel199G9CH3fLyqv24NcB44MRhpdK788U3CpyKwsCw590xmfSpzsBt0Fqc3ud3vtZigxWcVZCklVpSiN0w3q5E/h9TGMIUuA3+EQAAAABJRU5ErkJggg==';
	/* harmony export */ Object.defineProperty(exports, "DATA_IMAGE_USER_DOT_PIC", {configurable: false, enumerable: true, get: function() { return DATA_IMAGE_USER_DOT_PIC; }});

	var DATA_IMAGE_TRANSP_PIC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=';
	/* harmony export */ Object.defineProperty(exports, "DATA_IMAGE_TRANSP_PIC", {configurable: false, enumerable: true, get: function() { return DATA_IMAGE_TRANSP_PIC; }});

/***/ },
/* 17 */,
/* 18 */
/*!*****************************!*\
  !*** external "window.key" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = window.key;

/***/ },
/* 19 */
/*!**********************************!*\
  !*** ./dev/Remote/Admin/Ajax.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			AbstractAjaxRemote = __webpack_require__(/*! Remote/AbstractAjax */ 56)
		;

		/**
		 * @constructor
		 * @extends AbstractAjaxRemote
		 */
		function RemoteAdminStorage()
		{
			AbstractAjaxRemote.call(this);

			this.oRequests = {};
		}

		_.extend(RemoteAdminStorage.prototype, AbstractAjaxRemote.prototype);

		/**
		 * @param {?Function} fCallback
		 * @param {string} sLogin
		 * @param {string} sPassword
		 */
		RemoteAdminStorage.prototype.adminLogin = function (fCallback, sLogin, sPassword)
		{
			this.defaultRequest(fCallback, 'AdminLogin', {
				'Login': sLogin,
				'Password': sPassword
			});
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteAdminStorage.prototype.adminLogout = function (fCallback)
		{
			this.defaultRequest(fCallback, 'AdminLogout');
		};

		/**
		 * @param {?Function} fCallback
		 * @param {?} oData
		 */
		RemoteAdminStorage.prototype.saveAdminConfig = function (fCallback, oData)
		{
			this.defaultRequest(fCallback, 'AdminSettingsUpdate', oData);
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteAdminStorage.prototype.domainList = function (fCallback)
		{
			this.defaultRequest(fCallback, 'AdminDomainList');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteAdminStorage.prototype.pluginList = function (fCallback)
		{
			this.defaultRequest(fCallback, 'AdminPluginList');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteAdminStorage.prototype.packagesList = function (fCallback)
		{
			this.defaultRequest(fCallback, 'AdminPackagesList');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteAdminStorage.prototype.coreData = function (fCallback)
		{
			this.defaultRequest(fCallback, 'AdminCoreData');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteAdminStorage.prototype.updateCoreData = function (fCallback)
		{
			this.defaultRequest(fCallback, 'AdminUpdateCoreData', {}, 90000);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {Object} oPackage
		 */
		RemoteAdminStorage.prototype.packageInstall = function (fCallback, oPackage)
		{
			this.defaultRequest(fCallback, 'AdminPackageInstall', {
				'Id': oPackage.id,
				'Type': oPackage.type,
				'File': oPackage.file
			}, 60000);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {Object} oPackage
		 */
		RemoteAdminStorage.prototype.packageDelete = function (fCallback, oPackage)
		{
			this.defaultRequest(fCallback, 'AdminPackageDelete', {
				'Id': oPackage.id
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sName
		 */
		RemoteAdminStorage.prototype.domain = function (fCallback, sName)
		{
			this.defaultRequest(fCallback, 'AdminDomainLoad', {
				'Name': sName
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sName
		 */
		RemoteAdminStorage.prototype.plugin = function (fCallback, sName)
		{
			this.defaultRequest(fCallback, 'AdminPluginLoad', {
				'Name': sName
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sName
		 */
		RemoteAdminStorage.prototype.domainDelete = function (fCallback, sName)
		{
			this.defaultRequest(fCallback, 'AdminDomainDelete', {
				'Name': sName
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sName
		 * @param {boolean} bDisabled
		 */
		RemoteAdminStorage.prototype.domainDisable = function (fCallback, sName, bDisabled)
		{
			return this.defaultRequest(fCallback, 'AdminDomainDisable', {
				'Name': sName,
				'Disabled': !!bDisabled ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {Object} oConfig
		 */
		RemoteAdminStorage.prototype.pluginSettingsUpdate = function (fCallback, oConfig)
		{
			return this.defaultRequest(fCallback, 'AdminPluginSettingsUpdate', oConfig);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {boolean} bForce
		 */
		RemoteAdminStorage.prototype.licensing = function (fCallback, bForce)
		{
			return this.defaultRequest(fCallback, 'AdminLicensing', {
				'Force' : bForce ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sDomain
		 * @param {string} sKey
		 */
		RemoteAdminStorage.prototype.licensingActivate = function (fCallback, sDomain, sKey)
		{
			return this.defaultRequest(fCallback, 'AdminLicensingActivate', {
				'Domain' : sDomain,
				'Key' : sKey
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sName
		 * @param {boolean} bDisabled
		 */
		RemoteAdminStorage.prototype.pluginDisable = function (fCallback, sName, bDisabled)
		{
			return this.defaultRequest(fCallback, 'AdminPluginDisable', {
				'Name': sName,
				'Disabled': !!bDisabled ? '1' : '0'
			});
		};

		RemoteAdminStorage.prototype.createOrUpdateDomain = function (fCallback,
			bCreate, sName,
			sIncHost, iIncPort, sIncSecure, bIncShortLogin,
			bUseSieve, sSieveAllowRaw, sSieveHost, iSievePort, sSieveSecure,
			sOutHost, iOutPort, sOutSecure, bOutShortLogin, bOutAuth, bOutPhpMail,
			sWhiteList)
		{
			this.defaultRequest(fCallback, 'AdminDomainSave', {
				'Create': bCreate ? '1' : '0',
				'Name': sName,

				'IncHost': sIncHost,
				'IncPort': iIncPort,
				'IncSecure': sIncSecure,
				'IncShortLogin': bIncShortLogin ? '1' : '0',

				'UseSieve': bUseSieve ? '1' : '0',
				'SieveAllowRaw': sSieveAllowRaw ? '1' : '0',
				'SieveHost': sSieveHost,
				'SievePort': iSievePort,
				'SieveSecure': sSieveSecure,

				'OutHost': sOutHost,
				'OutPort': iOutPort,
				'OutSecure': sOutSecure,
				'OutShortLogin': bOutShortLogin ? '1' : '0',
				'OutAuth': bOutAuth ? '1' : '0',
				'OutUsePhpMail': bOutPhpMail ? '1' : '0',

				'WhiteList': sWhiteList
			});
		};

		RemoteAdminStorage.prototype.testConnectionForDomain = function (fCallback, sName,
			sIncHost, iIncPort, sIncSecure,
			bUseSieve, sSieveHost, iSievePort, sSieveSecure,
			sOutHost, iOutPort, sOutSecure, bOutAuth, bOutPhpMail)
		{
			this.defaultRequest(fCallback, 'AdminDomainTest', {
				'Name': sName,
				'IncHost': sIncHost,
				'IncPort': iIncPort,
				'IncSecure': sIncSecure,
				'UseSieve': bUseSieve ? '1' : '0',
				'SieveHost': sSieveHost,
				'SievePort': iSievePort,
				'SieveSecure': sSieveSecure,
				'OutHost': sOutHost,
				'OutPort': iOutPort,
				'OutSecure': sOutSecure,
				'OutAuth': bOutAuth ? '1' : '0',
				'OutUsePhpMail': bOutPhpMail ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {?} oData
		 */
		RemoteAdminStorage.prototype.testContacts = function (fCallback, oData)
		{
			this.defaultRequest(fCallback, 'AdminContactsTest', oData);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {?} oData
		 */
		RemoteAdminStorage.prototype.saveNewAdminPassword = function (fCallback, oData)
		{
			this.defaultRequest(fCallback, 'AdminPasswordUpdate', oData);
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteAdminStorage.prototype.adminPing = function (fCallback)
		{
			this.defaultRequest(fCallback, 'AdminPing');
		};

		module.exports = new RemoteAdminStorage();

	}());

/***/ },
/* 20 */
/*!***************************!*\
  !*** ./dev/App/Admin.jsx ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __WEBPACK_IMPORTED_MODULE_1_ko__ && __WEBPACK_IMPORTED_MODULE_1_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_progressJs__ = __webpack_require__(/*! progressJs */ 49);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_progressJs___default = __WEBPACK_IMPORTED_MODULE_2_progressJs__ && __WEBPACK_IMPORTED_MODULE_2_progressJs__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_progressJs__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_progressJs__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_progressJs___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_progressJs___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Links__ = __webpack_require__(/*! Common/Links */ 12);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Links___default = __WEBPACK_IMPORTED_MODULE_3_Common_Links__ && __WEBPACK_IMPORTED_MODULE_3_Common_Links__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_Common_Links__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_Common_Links__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3_Common_Links___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3_Common_Links___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 5);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Translator___default = __WEBPACK_IMPORTED_MODULE_4_Common_Translator__ && __WEBPACK_IMPORTED_MODULE_4_Common_Translator__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_4_Common_Translator__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_4_Common_Translator__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4_Common_Translator___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_4_Common_Translator___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default = __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__ && __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App__ = __webpack_require__(/*! Stores/Admin/App */ 34);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App___default = __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App__ && __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain__ = __webpack_require__(/*! Stores/Admin/Domain */ 58);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain___default = __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain__ && __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Stores_Admin_Plugin__ = __webpack_require__(/*! Stores/Admin/Plugin */ 60);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Stores_Admin_Plugin___default = __WEBPACK_IMPORTED_MODULE_10_Stores_Admin_Plugin__ && __WEBPACK_IMPORTED_MODULE_10_Stores_Admin_Plugin__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_10_Stores_Admin_Plugin__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_10_Stores_Admin_Plugin__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_10_Stores_Admin_Plugin___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_10_Stores_Admin_Plugin___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License__ = __webpack_require__(/*! Stores/Admin/License */ 146);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default = __WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License__ && __WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package__ = __webpack_require__(/*! Stores/Admin/Package */ 59);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package___default = __WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package__ && __WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core__ = __webpack_require__(/*! Stores/Admin/Core */ 89);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default = __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core__ && __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 19);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax___default = __WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax__ && __WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 4);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin___default = __WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin__ && __WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_App_Abstract__ = __webpack_require__(/*! App/Abstract */ 65);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
























	var AdminApp = function (_AbstractApp) {
		_inherits(AdminApp, _AbstractApp);

		function AdminApp() {
			_classCallCheck(this, AdminApp);

			return _possibleConstructorReturn(this, _AbstractApp.call(this, /* harmony import */__WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax___default.a));
		}

		AdminApp.prototype.remote = function remote() {
			return /* harmony import */__WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax___default.a;
		};

		AdminApp.prototype.reloadDomainList = function reloadDomainList() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain___default.a.domains.loading(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax___default.a.domainList(function (result, data) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain___default.a.domains.loading(false);
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain___default.a.domains(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].map(data.Result, function (enabled, name) {
						return {
							name: name,
							disabled: /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(!enabled),
							deleteAccess: /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false)
						};
					}));
				}
			});
		};

		AdminApp.prototype.reloadPluginList = function reloadPluginList() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_10_Stores_Admin_Plugin___default.a.plugins.loading(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax___default.a.pluginList(function (result, data) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_10_Stores_Admin_Plugin___default.a.plugins.loading(false);
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_10_Stores_Admin_Plugin___default.a.plugins(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].map(data.Result, function (item) {
						return {
							name: item.Name,
							disabled: /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(!item.Enabled),
							configured: /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(!!item.Configured)
						};
					}));
				}
			});
		};

		AdminApp.prototype.reloadPackagesList = function reloadPackagesList() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package___default.a.packages.loading(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package___default.a.packagesReal(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax___default.a.packagesList(function (result, data) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package___default.a.packages.loading(false);
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
					(function () {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package___default.a.packagesReal(!!data.Result.Real);
						/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package___default.a.packagesMainUpdatable(!!data.Result.MainUpdatable);

						var list = [],
						    loading = {};

						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package___default.a.packages(), function (item) {
							if (item && item.loading()) {
								loading[item.file] = item;
							}
						});

						if (/* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["isArray"].bind()(data.Result.List)) {
							list = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].compact(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].map(data.Result.List, function (item) {
								if (item) {
									item.loading = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(!/* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["isUnd"].bind()(loading[item.file]));
									return 'core' === item.type && !item.canBeInstalled ? null : item;
								}
								return null;
							}));
						}

						/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package___default.a.packages(list);
					})();
				} else {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Stores_Admin_Package___default.a.packagesReal(false);
				}
			});
		};

		AdminApp.prototype.updateCoreData = function updateCoreData() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreUpdating(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax___default.a.updateCoreData(function (result, data) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreUpdating(false);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreVersion('');
				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreRemoteVersion('');
				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreRemoteRelease('');
				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreVersionCompare(-2);
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreReal(true);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.reload();
				} else {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreReal(false);
				}
			});
		};

		AdminApp.prototype.reloadCoreData = function reloadCoreData() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreChecking(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreReal(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax___default.a.coreData(function (result, data) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreChecking(false);
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreReal(!!data.Result.Real);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreChannel(data.Result.Channel || 'stable');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreType(data.Result.Type || 'stable');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreUpdatable(!!data.Result.Updatable);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreAccess(!!data.Result.Access);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreWarning(!!data.Result.Warning);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreVersion(data.Result.Version || '');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreRemoteVersion(data.Result.RemoteVersion || '');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreRemoteRelease(data.Result.RemoteRelease || '');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreVersionCompare(/* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["pInt"].bind()(data.Result.VersionCompare));
				} else {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreReal(false);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreChannel('stable');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreType('stable');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreWarning(false);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreVersion('');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreRemoteVersion('');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreRemoteRelease('');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Core___default.a.coreVersionCompare(-2);
				}
			});
		};

		/**
	  * @param {boolean=} force = false
	  */


		AdminApp.prototype.reloadLicensing = function reloadLicensing() {
			var force = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

			/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licensingProcess(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licenseError('');
			/* harmony import */__WEBPACK_IMPORTED_MODULE_14_Remote_Admin_Ajax___default.a.licensing(function (result, data) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licensingProcess(false);
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success === result && data && data.Result && /* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["isNormal"].bind()(data.Result.Expired)) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licenseValid(true);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licenseExpired(/* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["pInt"].bind()(data.Result.Expired));
					/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licenseError('');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licensing(true);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App___default.a.prem(true);
				} else {
					if (data && data.ErrorCode && -1 < /* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["inArray"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["pInt"].bind()(data.ErrorCode), [/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].LicensingServerIsUnavailable, /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].LicensingExpired])) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licenseError(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Translator___default.a.getNotification(/* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["pInt"].bind()(data.ErrorCode)));
						/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licensing(true);
					} else {
						if (/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Abort === result) {
							/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licenseError(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Translator___default.a.getNotification(/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].LicensingServerIsUnavailable));
							/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licensing(true);
						} else {
							/* harmony import */__WEBPACK_IMPORTED_MODULE_11_Stores_Admin_License___default.a.licensing(false);
						}
					}
				}
			}, force);
		};

		AdminApp.prototype.bootend = function bootend() {
			var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_progressJs___default.a) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_2_progressJs___default.a.end();
			}

			if (callback) {
				callback();
			}
		};

		AdminApp.prototype.bootstart = function bootstart() {

			_AbstractApp.prototype.bootstart.call(this);

			__webpack_require__(/*! Stores/Admin/App */ 34).populate();
			__webpack_require__(/*! Stores/Admin/Capa */ 51).populate();

			/* harmony import */__WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin___default.a.hideLoading();

			if (!/* harmony import */__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default.a.appSettingsGet('allowAdminPanel')) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin___default.a.routeOff();
				/* harmony import */__WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin___default.a.setHash(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Links___default.a.root(), true);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin___default.a.routeOff();

				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].defer(function () {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.href = '/';
				});
			} else {
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default.a.settingsGet('Auth')) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin___default.a.startScreens([__webpack_require__(/*! Screen/Admin/Settings */ 121)]);
				} else {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_15_Knoin_Knoin___default.a.startScreens([__webpack_require__(/*! Screen/Admin/Login */ 120)]);
				}
			}

			this.bootend();
		};

		return AdminApp;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_16_App_Abstract__["a"]);

	var App = new AdminApp();
	/* harmony default export */ exports["default"] = App;

/***/ },
/* 21 */,
/* 22 */
/*!********************************!*\
  !*** ./dev/Common/Plugins.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default = __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__ && __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default });
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






	var Plugins = function () {
		function Plugins() {
			_classCallCheck(this, Plugins);

			this.oSimpleHooks = {};
			this.aUserViewModelsHooks = [];
			this.aAdminViewModelsHooks = [];
		}

		/**
	  * @param {string} name
	  * @param {Function} callback
	  */


		Plugins.prototype.addHook = function addHook(name, callback) {
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isFunc"].bind()(callback)) {
				if (!/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isArray"].bind()(this.oSimpleHooks[name])) {
					this.oSimpleHooks[name] = [];
				}

				this.oSimpleHooks[name].push(callback);
			}
		};

		/**
	  * @param {string} name
	  * @param {Array=} args
	  */


		Plugins.prototype.runHook = function runHook(name) {
			var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isArray"].bind()(this.oSimpleHooks[name])) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(this.oSimpleHooks[name], function (callback) {
					callback.apply(null, args);
				});
			}
		};

		/**
	  * @param {string} name
	  * @return {?}
	  */


		Plugins.prototype.mainSettingsGet = function mainSettingsGet(name) {
			return /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default.a.settingsGet(name);
		};

		/**
	  * @param {Function} callback
	  * @param {string} action
	  * @param {Object=} parameters
	  * @param {?number=} timeout
	  */


		Plugins.prototype.remoteRequest = function remoteRequest(callback, action, parameters, timeout) {
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["data"].__APP__) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["data"].__APP__.remote().defaultRequest(callback, 'Plugin' + action, parameters, timeout);
			}
		};

		/**
	  * @param {Function} SettingsViewModelClass
	  * @param {string} labelName
	  * @param {string} template
	  * @param {string} route
	  */


		Plugins.prototype.addSettingsViewModel = function addSettingsViewModel(SettingsViewModelClass, template, labelName, route) {
			this.aUserViewModelsHooks.push([SettingsViewModelClass, template, labelName, route]);
		};

		/**
	  * @param {Function} SettingsViewModelClass
	  * @param {string} labelName
	  * @param {string} template
	  * @param {string} route
	  */


		Plugins.prototype.addSettingsViewModelForAdmin = function addSettingsViewModelForAdmin(SettingsViewModelClass, template, labelName, route) {
			this.aAdminViewModelsHooks.push([SettingsViewModelClass, template, labelName, route]);
		};

		/**
	  * @param {boolean} admin
	  */


		Plugins.prototype.runSettingsViewModelHooks = function runSettingsViewModelHooks(admin) {
			var Knoin = __webpack_require__(/*! Knoin/Knoin */ 4);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(admin ? this.aAdminViewModelsHooks : this.aUserViewModelsHooks, function (view) {
				Knoin.addSettingsViewModel(view[0], view[1], view[2], view[3]);
			});
		};

		/**
	  * @param {string} pluginSection
	  * @param {string} name
	  * @return {?}
	  */


		Plugins.prototype.settingsGet = function settingsGet(pluginSection, name) {
			var plugins = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default.a.settingsGet('Plugins');
			plugins = plugins && !/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(plugins[pluginSection]) ? plugins[pluginSection] : null;
			return plugins ? /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(plugins[name]) ? null : plugins[name] : null;
		};

		return Plugins;
	}();

	module.exports = new Plugins();

/***/ },
/* 23 */,
/* 24 */
/*!*******************************!*\
  !*** ./dev/Common/Events.jsx ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Plugins__ = __webpack_require__(/*! Common/Plugins */ 22);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Plugins___default = __WEBPACK_IMPORTED_MODULE_2_Common_Plugins__ && __WEBPACK_IMPORTED_MODULE_2_Common_Plugins__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_Common_Plugins__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_Common_Plugins__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_Common_Plugins___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_Common_Plugins___default });
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





	var Events = function () {
		function Events() {
			_classCallCheck(this, Events);

			this.subs = {};
		}

		/**
	  * @param {string|Object} name
	  * @param {Function} func
	  * @param {Object=} context
	  * @return {Events}
	  */


		Events.prototype.sub = function sub(name, func, context) {
			var _this = this;

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isObject"].bind()(name)) {
				context = func || null;
				func = null;

				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(name, function (subFunc, subName) {
					_this.sub(subName, subFunc, context);
				}, this);
			} else {
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(this.subs[name])) {
					this.subs[name] = [];
				}

				this.subs[name].push([func, context]);
			}

			return this;
		};

		/**
	  * @param {string} name
	  * @param {Array=} args
	  * @return {Events}
	  */


		Events.prototype.pub = function pub(name, args) {

			/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Plugins___default.a.runHook('rl-pub', [name, args]);

			if (!/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(this.subs[name])) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(this.subs[name], function (items) {
					if (items[0]) {
						items[0].apply(items[1] || null, args || []);
					}
				});
			}

			return this;
		};

		return Events;
	}();

	module.exports = new Events();

/***/ },
/* 25 */
/*!*********************************!*\
  !*** ./dev/Common/Momentor.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 5);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Translator___default = __WEBPACK_IMPORTED_MODULE_1_Common_Translator__ && __WEBPACK_IMPORTED_MODULE_1_Common_Translator__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_Common_Translator__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_Common_Translator__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_Common_Translator___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_Common_Translator___default });
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




	var Momentor = function () {
		function Momentor() {
			var _this = this;

			_classCallCheck(this, Momentor);

			this._moment = null;
			this._momentNow = 0;

			this.updateMomentNow = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].debounce(function () {
				_this._moment = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["e"].bind()();
			}, 500, true);

			this.updateMomentNowUnix = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].debounce(function () {
				_this._momentNow = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["e"].bind()().unix();
			}, 500, true);

			this.format = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].bind(this.format, this);
		}

		Momentor.prototype.momentNow = function momentNow() {
			this.updateMomentNow();
			return this._moment || /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["e"].bind()();
		};

		Momentor.prototype.momentNowUnix = function momentNowUnix() {
			this.updateMomentNowUnix();
			return this._momentNow || 0;
		};

		/**
	  * @param {number} date
	  * @return {string}
	  */


		Momentor.prototype.searchSubtractFormatDateHelper = function searchSubtractFormatDateHelper(date) {
			return this.momentNow().clone().subtract('days', date).format('YYYY.MM.DD');
		};

		/**
	  * @param {Object} m
	  * @return {string}
	  */


		Momentor.prototype.formatCustomShortDate = function formatCustomShortDate(m) {

			var now = this.momentNow();
			if (m && now) {
				switch (true) {
					case 4 >= now.diff(m, 'hours'):
						return m.fromNow();
					case now.format('L') === m.format('L'):
						return /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Translator___default.a.i18n('MESSAGE_LIST/TODAY_AT', {
							TIME: m.format('LT')
						});
					case now.clone().subtract('days', 1).format('L') === m.format('L'):
						return /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Translator___default.a.i18n('MESSAGE_LIST/YESTERDAY_AT', {
							TIME: m.format('LT')
						});
					case now.year() === m.year():
						return m.format('D MMM.');
				}
			}

			return m ? m.format('LL') : '';
		};

		/**
	  * @param {number} timeStampInUTC
	  * @param {string} format
	  * @return {string}
	  */


		Momentor.prototype.format = function format(timeStampInUTC, _format) {

			var m = null,
			    result = '';

			var now = this.momentNowUnix();

			timeStampInUTC = 0 < timeStampInUTC ? timeStampInUTC : 0 === timeStampInUTC ? now : 0;
			timeStampInUTC = now < timeStampInUTC ? now : timeStampInUTC;

			m = 0 < timeStampInUTC ? /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["e"].unix(timeStampInUTC) : null;

			if (m && 1970 === m.year()) {
				m = null;
			}

			if (m) {
				switch (_format) {
					case 'FROMNOW':
						result = m.fromNow();
						break;
					case 'SHORT':
						result = this.formatCustomShortDate(m);
						break;
					case 'FULL':
						result = m.format('LLL');
						break;
					default:
						result = m.format(_format);
						break;
				}
			}

			return result;
		};

		/**
	  * @param {Object} element
	  */


		Momentor.prototype.momentToNode = function momentToNode(element) {

			var key = '',
			    time = 0,
			    $el = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(element);

			time = $el.data('moment-time');
			if (time) {
				key = $el.data('moment-format');
				if (key) {
					$el.text(this.format(time, key));
				}

				key = $el.data('moment-format-title');
				if (key) {
					$el.attr('title', this.format(time, key));
				}
			}
		};

		/**
	  * @param {Object} elements
	  */


		Momentor.prototype.momentToNodes = function momentToNodes(elements) {
			var _this2 = this;

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].defer(function () {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('.moment', elements).each(function (index, item) {
					_this2.momentToNode(item);
				});
			});
		};

		Momentor.prototype.reload = function reload() {
			this.momentToNodes(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].document);
		};

		return Momentor;
	}();

	module.exports = new Momentor();

/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/*!****************************!*\
  !*** ./dev/Model/Email.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			Utils = __webpack_require__(/*! Common/Utils */ 0)
		;

		/**
		 * @param {string=} sEmail
		 * @param {string=} sName
		 * @param {string=} sDkimStatus
		 * @param {string=} sDkimValue
		 *
		 * @constructor
		 */
		function EmailModel(sEmail, sName, sDkimStatus, sDkimValue)
		{
			this.email = sEmail || '';
			this.name = sName || '';
			this.dkimStatus = sDkimStatus || 'none';
			this.dkimValue = sDkimValue || '';

			this.clearDuplicateName();
		}

		/**
		 * @static
		 * @param {AjaxJsonEmail} oJsonEmail
		 * @return {?EmailModel}
		 */
		EmailModel.newInstanceFromJson = function (oJsonEmail)
		{
			var oEmailModel = new EmailModel();
			return oEmailModel.initByJson(oJsonEmail) ? oEmailModel : null;
		};

		/**
		 * @static
		 * @param {string} sLine
		 * @param {string=} sDelimiter = ';'
		 * @return {Array}
		 */
		EmailModel.splitHelper = function (sLine, sDelimiter)
		{
			sDelimiter = sDelimiter || ';';

			sLine = sLine.replace(/[\r\n]+/g, '; ').replace(/[\s]+/g, ' ');

			var
				iIndex = 0,
				iLen = sLine.length,
				bAt = false,
				sChar = '',
				sResult = ''
			;

			for (; iIndex < iLen; iIndex++)
			{
				sChar = sLine.charAt(iIndex);
				switch (sChar)
				{
					case '@':
						bAt = true;
						break;
					case ' ':
						if (bAt)
						{
							bAt = false;
							sResult += sDelimiter;
						}
						break;
				}

				sResult += sChar;
			}

			return sResult.split(sDelimiter);
		};

		/**
		 * @type {string}
		 */
		EmailModel.prototype.name = '';

		/**
		 * @type {string}
		 */
		EmailModel.prototype.email = '';

		/**
		 * @type {string}
		 */
		EmailModel.prototype.dkimStatus = 'none';

		/**
		 * @type {string}
		 */
		EmailModel.prototype.dkimValue = '';

		EmailModel.prototype.clear = function ()
		{
			this.email = '';
			this.name = '';

			this.dkimStatus = 'none';
			this.dkimValue = '';
		};

		/**
		 * @return {boolean}
		 */
		EmailModel.prototype.validate = function ()
		{
			return '' !== this.name || '' !== this.email;
		};

		/**
		 * @param {boolean} bWithoutName = false
		 * @return {string}
		 */
		EmailModel.prototype.hash = function (bWithoutName)
		{
			return '#' + (bWithoutName ? '' : this.name) + '#' + this.email + '#';
		};

		EmailModel.prototype.clearDuplicateName = function ()
		{
			if (this.name === this.email)
			{
				this.name = '';
			}
		};

		/**
		 * @param {string} sQuery
		 * @return {boolean}
		 */
		EmailModel.prototype.search = function (sQuery)
		{
			return -1 < (this.name + ' ' + this.email).toLowerCase().indexOf(sQuery.toLowerCase());
		};

		/**
		 * @param {string} sString
		 */
		EmailModel.prototype.parse = function (sString)
		{
			this.clear();

			sString = Utils.trim(sString);

			var
				mRegex = /(?:"([^"]+)")? ?[<]?(.*?@[^>,]+)>?,? ?/g,
				mMatch = mRegex.exec(sString)
			;

			if (mMatch)
			{
				this.name = mMatch[1] || '';
				this.email = mMatch[2] || '';

				this.clearDuplicateName();
			}
			else if ((/^[^@]+@[^@]+$/).test(sString))
			{
				this.name = '';
				this.email = sString;
			}
		};

		/**
		 * @param {AjaxJsonEmail} oJsonEmail
		 * @return {boolean}
		 */
		EmailModel.prototype.initByJson = function (oJsonEmail)
		{
			var bResult = false;
			if (oJsonEmail && 'Object/Email' === oJsonEmail['@Object'])
			{
				this.name = Utils.trim(oJsonEmail.Name);
				this.email = Utils.trim(oJsonEmail.Email);
				this.dkimStatus = Utils.trim(oJsonEmail.DkimStatus || '');
				this.dkimValue = Utils.trim(oJsonEmail.DkimValue || '');

				bResult = '' !== this.email;
				this.clearDuplicateName();
			}

			return bResult;
		};

		/**
		 * @param {boolean} bFriendlyView
		 * @param {boolean=} bWrapWithLink = false
		 * @param {boolean=} bEncodeHtml = false
		 * @return {string}
		 */
		EmailModel.prototype.toLine = function (bFriendlyView, bWrapWithLink, bEncodeHtml)
		{
			var sResult = '';
			if ('' !== this.email)
			{
				bWrapWithLink = Utils.isUnd(bWrapWithLink) ? false : !!bWrapWithLink;
				bEncodeHtml = Utils.isUnd(bEncodeHtml) ? false : !!bEncodeHtml;

				if (bFriendlyView && '' !== this.name)
				{
					sResult = bWrapWithLink ? '<a href="mailto:' + Utils.encodeHtml('"' + this.name + '" <' + this.email + '>') +
						'" target="_blank" tabindex="-1">' + Utils.encodeHtml(this.name) + '</a>' :
							(bEncodeHtml ? Utils.encodeHtml(this.name) : this.name);
				}
				else
				{
					sResult = this.email;
					if ('' !== this.name)
					{
						if (bWrapWithLink)
						{
							sResult = Utils.encodeHtml('"' + this.name + '" <') +
								'<a href="mailto:' + Utils.encodeHtml('"' + this.name + '" <' + this.email + '>') + '" target="_blank" tabindex="-1">' + Utils.encodeHtml(sResult) + '</a>' + Utils.encodeHtml('>');
						}
						else
						{
							sResult = '"' + this.name + '" <' + sResult + '>';
							if (bEncodeHtml)
							{
								sResult = Utils.encodeHtml(sResult);
							}
						}
					}
					else if (bWrapWithLink)
					{
						sResult = '<a href="mailto:' + Utils.encodeHtml(this.email) + '" target="_blank" tabindex="-1">' + Utils.encodeHtml(this.email) + '</a>';
					}
				}
			}

			return sResult;
		};

		/**
		 * @param {string} $sEmailAddress
		 * @return {boolean}
		 */
		EmailModel.prototype.mailsoParse = function ($sEmailAddress)
		{
			$sEmailAddress = Utils.trim($sEmailAddress);
			if ('' === $sEmailAddress)
			{
				return false;
			}

			var
				substr = function (str, start, len) {
					str += '';
					var	end = str.length;

					if (start < 0) {
						start += end;
					}

					end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);

					return start >= str.length || start < 0 || start > end ? false : str.slice(start, end);
				},

				substr_replace = function (str, replace, start, length) {
					if (start < 0) {
						start = start + str.length;
					}
					length = length !== undefined ? length : str.length;
					if (length < 0) {
						length = length + str.length - start;
					}
					return str.slice(0, start) + replace.substr(0, length) + replace.slice(length) + str.slice(start + length);
				},

				$sName = '',
				$sEmail = '',
				$sComment = '',

				$bInName = false,
				$bInAddress = false,
				$bInComment = false,

				$aRegs = null,

				$iStartIndex = 0,
				$iEndIndex = 0,
				$iCurrentIndex = 0
			;

			while ($iCurrentIndex < $sEmailAddress.length)
			{
				switch ($sEmailAddress.substr($iCurrentIndex, 1))
				{
					case '"':
						if ((!$bInName) && (!$bInAddress) && (!$bInComment))
						{
							$bInName = true;
							$iStartIndex = $iCurrentIndex;
						}
						else if ((!$bInAddress) && (!$bInComment))
						{
							$iEndIndex = $iCurrentIndex;
							$sName = substr($sEmailAddress, $iStartIndex + 1, $iEndIndex - $iStartIndex - 1);
							$sEmailAddress = substr_replace($sEmailAddress, '', $iStartIndex, $iEndIndex - $iStartIndex + 1);
							$iEndIndex = 0;
							$iCurrentIndex = 0;
							$iStartIndex = 0;
							$bInName = false;
						}
						break;
					case '<':
						if ((!$bInName) && (!$bInAddress) && (!$bInComment))
						{
							if ($iCurrentIndex > 0 && $sName.length === 0)
							{
								$sName = substr($sEmailAddress, 0, $iCurrentIndex);
							}

							$bInAddress = true;
							$iStartIndex = $iCurrentIndex;
						}
						break;
					case '>':
						if ($bInAddress)
						{
							$iEndIndex = $iCurrentIndex;
							$sEmail = substr($sEmailAddress, $iStartIndex + 1, $iEndIndex - $iStartIndex - 1);
							$sEmailAddress = substr_replace($sEmailAddress, '', $iStartIndex, $iEndIndex - $iStartIndex + 1);
							$iEndIndex = 0;
							$iCurrentIndex = 0;
							$iStartIndex = 0;
							$bInAddress = false;
						}
						break;
					case '(':
						if ((!$bInName) && (!$bInAddress) && (!$bInComment))
						{
							$bInComment = true;
							$iStartIndex = $iCurrentIndex;
						}
						break;
					case ')':
						if ($bInComment)
						{
							$iEndIndex = $iCurrentIndex;
							$sComment = substr($sEmailAddress, $iStartIndex + 1, $iEndIndex - $iStartIndex - 1);
							$sEmailAddress = substr_replace($sEmailAddress, '', $iStartIndex, $iEndIndex - $iStartIndex + 1);
							$iEndIndex = 0;
							$iCurrentIndex = 0;
							$iStartIndex = 0;
							$bInComment = false;
						}
						break;
					case '\\':
						$iCurrentIndex++;
						break;
				}

				$iCurrentIndex++;
			}

			if ($sEmail.length === 0)
			{
				$aRegs = $sEmailAddress.match(/[^@\s]+@\S+/i);
				if ($aRegs && $aRegs[0])
				{
					$sEmail = $aRegs[0];
				}
				else
				{
					$sName = $sEmailAddress;
				}
			}

			if ($sEmail.length > 0 && $sName.length === 0 && $sComment.length === 0)
			{
				$sName = $sEmailAddress.replace($sEmail, '');
			}

			$sEmail = Utils.trim($sEmail).replace(/^[<]+/, '').replace(/[>]+$/, '');
			$sName = Utils.trim($sName).replace(/^["']+/, '').replace(/["']+$/, '');
			$sComment = Utils.trim($sComment).replace(/^[(]+/, '').replace(/[)]+$/, '');

			// Remove backslash
			$sName = $sName.replace(/\\\\(.)/g, '$1');
			$sComment = $sComment.replace(/\\\\(.)/g, '$1');

			this.name = $sName;
			this.email = $sEmail;

			this.clearDuplicateName();
			return true;
		};

		module.exports = EmailModel;

	}());

/***/ },
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/*!******************************!*\
  !*** ./dev/Stores/Social.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1)
		;

		/**
		 * @constructor
		 */
		function SocialStore()
		{
			this.google = {};
			this.twitter = {};
			this.facebook = {};
			this.dropbox = {};

			// Google
			this.google.enabled = ko.observable(false);

			this.google.clientID = ko.observable('');
			this.google.clientSecret = ko.observable('');
			this.google.apiKey = ko.observable('');

			this.google.loading = ko.observable(false);
			this.google.userName = ko.observable('');

			this.google.loggined = ko.computed(function () {
				return '' !== this.google.userName();
			}, this);

			this.google.capa = {};
			this.google.capa.auth = ko.observable(false);
			this.google.capa.authFast = ko.observable(false);
			this.google.capa.drive = ko.observable(false);
			this.google.capa.preview = ko.observable(false);

			this.google.require = {};
			this.google.require.clientSettings = ko.computed(function () {
				return this.google.enabled() && (this.google.capa.auth() || this.google.capa.drive());
			}, this);

			this.google.require.apiKeySettings = ko.computed(function () {
				return this.google.enabled() && this.google.capa.drive();
			}, this);

			// Facebook
			this.facebook.enabled = ko.observable(false);
			this.facebook.appID = ko.observable('');
			this.facebook.appSecret = ko.observable('');
			this.facebook.loading = ko.observable(false);
			this.facebook.userName = ko.observable('');
			this.facebook.supported = ko.observable(false);

			this.facebook.loggined = ko.computed(function () {
				return '' !== this.facebook.userName();
			}, this);

			// Twitter
			this.twitter.enabled = ko.observable(false);
			this.twitter.consumerKey = ko.observable('');
			this.twitter.consumerSecret = ko.observable('');
			this.twitter.loading = ko.observable(false);
			this.twitter.userName = ko.observable('');

			this.twitter.loggined = ko.computed(function () {
				return '' !== this.twitter.userName();
			}, this);

			// Dropbox
			this.dropbox.enabled = ko.observable(false);
			this.dropbox.apiKey = ko.observable('');
		}

		SocialStore.prototype.google = {};
		SocialStore.prototype.twitter = {};
		SocialStore.prototype.facebook = {};
		SocialStore.prototype.dropbox = {};

		SocialStore.prototype.populate = function ()
		{
			var Settings = __webpack_require__(/*! Storage/Settings */ 8);

			this.google.enabled(!!Settings.settingsGet('AllowGoogleSocial'));
			this.google.clientID(Settings.settingsGet('GoogleClientID'));
			this.google.clientSecret(Settings.settingsGet('GoogleClientSecret'));
			this.google.apiKey(Settings.settingsGet('GoogleApiKey'));

			this.google.capa.auth(!!Settings.settingsGet('AllowGoogleSocialAuth'));
			this.google.capa.authFast(!!Settings.settingsGet('AllowGoogleSocialAuthFast'));
			this.google.capa.drive(!!Settings.settingsGet('AllowGoogleSocialDrive'));
			this.google.capa.preview(!!Settings.settingsGet('AllowGoogleSocialPreview'));

			this.facebook.enabled(!!Settings.settingsGet('AllowFacebookSocial'));
			this.facebook.appID(Settings.settingsGet('FacebookAppID'));
			this.facebook.appSecret(Settings.settingsGet('FacebookAppSecret'));
			this.facebook.supported(!!Settings.settingsGet('SupportedFacebookSocial'));

			this.twitter.enabled = ko.observable(!!Settings.settingsGet('AllowTwitterSocial'));
			this.twitter.consumerKey = ko.observable(Settings.settingsGet('TwitterConsumerKey'));
			this.twitter.consumerSecret = ko.observable(Settings.settingsGet('TwitterConsumerSecret'));

			this.dropbox.enabled(!!Settings.settingsGet('AllowDropboxSocial'));
			this.dropbox.apiKey(Settings.settingsGet('DropboxApiKey'));
		};

		module.exports = new SocialStore();

	}());


/***/ },
/* 34 */
/*!**********************************!*\
  !*** ./dev/Stores/Admin/App.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ko___default = __WEBPACK_IMPORTED_MODULE_0_ko__ && __WEBPACK_IMPORTED_MODULE_0_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Storage_Settings___default = __WEBPACK_IMPORTED_MODULE_1_Storage_Settings__ && __WEBPACK_IMPORTED_MODULE_1_Storage_Settings__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_Storage_Settings__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_Storage_Settings__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_Storage_Settings___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_Storage_Settings___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Stores_AbstractApp__ = __webpack_require__(/*! Stores/AbstractApp */ 78);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






	var AppAdminStore = function (_AbstractAppStore) {
			_inherits(AppAdminStore, _AbstractAppStore);

			function AppAdminStore() {
					_classCallCheck(this, AppAdminStore);

					var _this = _possibleConstructorReturn(this, _AbstractAppStore.call(this));

					_this.determineUserLanguage = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(false);
					_this.determineUserDomain = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(false);

					_this.weakPassword = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(false);
					_this.useLocalProxyForExternalImages = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(false);
					return _this;
			}

			AppAdminStore.prototype.populate = function populate() {

					_AbstractAppStore.prototype.populate.call(this);

					this.determineUserLanguage(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Storage_Settings___default.a.settingsGet('DetermineUserLanguage'));
					this.determineUserDomain(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Storage_Settings___default.a.settingsGet('DetermineUserDomain'));

					this.weakPassword(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Storage_Settings___default.a.settingsGet('WeakPassword'));
					this.useLocalProxyForExternalImages(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Storage_Settings___default.a.settingsGet('UseLocalProxyForExternalImages'));
			};

			return AppAdminStore;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Stores_AbstractApp__["a"]);

	module.exports = new AppAdminStore();

/***/ },
/* 35 */
/*!*****************************************!*\
  !*** ./dev/Component/AbstractInput.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ko___default = __WEBPACK_IMPORTED_MODULE_0_ko__ && __WEBPACK_IMPORTED_MODULE_0_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 15);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






	var AbstractInput = function (_AbstractComponent) {
		_inherits(AbstractInput, _AbstractComponent);

		/**
	  * @param {Object} params
	  */

		function AbstractInput(params) {
			_classCallCheck(this, AbstractInput);

			var _this = _possibleConstructorReturn(this, _AbstractComponent.call(this));

			_this.value = params.value || '';
			_this.size = params.size || 0;
			_this.label = params.label || '';
			_this.preLabel = params.preLabel || '';
			_this.enable = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(params.enable) ? true : params.enable;
			_this.trigger = params.trigger && params.trigger.subscribe ? params.trigger : null;
			_this.placeholder = params.placeholder || '';

			_this.labeled = !/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(params.label);
			_this.preLabeled = !/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(params.preLabel);
			_this.triggered = !/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(params.trigger) && !!_this.trigger;

			_this.classForTrigger = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable('');

			_this.className = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.computed(function () {

				var size = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.unwrap(_this.size),
				    suffixValue = _this.trigger ? ' ' + /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"].bind()('settings-saved-trigger-input ' + _this.classForTrigger()) : '';

				return (size > 0 ? 'span' + size : '') + suffixValue;
			}, _this);

			if (!/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(params.width) && params.element) {
				params.element.find('input,select,textarea').css('width', params.width);
			}

			_this.disposable.push(_this.className);

			if (_this.trigger) {
				_this.setTriggerState(_this.trigger());

				_this.disposable.push(_this.trigger.subscribe(_this.setTriggerState, _this));
			}
			return _this;
		}

		AbstractInput.prototype.setTriggerState = function setTriggerState(value) {
			switch (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["pInt"].bind()(value)) {
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["SaveSettingsStep"].TrueResult:
					this.classForTrigger('success');
					break;
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["SaveSettingsStep"].FalseResult:
					this.classForTrigger('error');
					break;
				default:
					this.classForTrigger('');
					break;
			}
		};

		return AbstractInput;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Component_Abstract__["a"]);


	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return AbstractInput; }});/* unused harmony export default */

/***/ },
/* 36 */
/*!************************************!*\
  !*** ./dev/Component/Checkbox.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 15);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Component_AbstracCheckbox__ = __webpack_require__(/*! Component/AbstracCheckbox */ 45);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




	var CheckboxComponent = function (_AbstracCheckbox) {
	  _inherits(CheckboxComponent, _AbstracCheckbox);

	  function CheckboxComponent() {
	    _classCallCheck(this, CheckboxComponent);

	    return _possibleConstructorReturn(this, _AbstracCheckbox.apply(this, arguments));
	  }

	  return CheckboxComponent;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Component_AbstracCheckbox__["a"]);

	module.exports = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_Component_Abstract__["b"].bind()(CheckboxComponent, 'CheckboxComponent');

/***/ },
/* 37 */
/*!*************************************!*\
  !*** ./dev/Knoin/AbstractScreen.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			crossroads = __webpack_require__(/*! crossroads */ 48),

			Utils = __webpack_require__(/*! Common/Utils */ 0)
		;

		/**
		 * @param {string} sScreenName
		 * @param {?=} aViewModels = []
		 * @constructor
		 */
		function AbstractScreen(sScreenName, aViewModels)
		{
			this.sScreenName = sScreenName;
			this.aViewModels = Utils.isArray(aViewModels) ? aViewModels : [];
		}

		/**
		 * @type {Array}
		 */
		AbstractScreen.prototype.oCross = null;

		/**
		 * @type {string}
		 */
		AbstractScreen.prototype.sScreenName = '';

		/**
		 * @type {Array}
		 */
		AbstractScreen.prototype.aViewModels = [];

		/**
		 * @return {Array}
		 */
		AbstractScreen.prototype.viewModels = function ()
		{
			return this.aViewModels;
		};

		/**
		 * @return {string}
		 */
		AbstractScreen.prototype.screenName = function ()
		{
			return this.sScreenName;
		};

		AbstractScreen.prototype.routes = function ()
		{
			return null;
		};

		/**
		 * @return {?Object}
		 */
		AbstractScreen.prototype.__cross = function ()
		{
			return this.oCross;
		};

		AbstractScreen.prototype.__start = function ()
		{
			var
				aRoutes = this.routes(),
				oRoute = null,
				fMatcher = null
			;

			if (Utils.isNonEmptyArray(aRoutes))
			{
				fMatcher = _.bind(this.onRoute || Utils.emptyFunction, this);
				oRoute = crossroads.create();

				_.each(aRoutes, function (aItem) {
					oRoute.addRoute(aItem[0], fMatcher).rules = aItem[1];
				});

				this.oCross = oRoute;
			}
		};

		module.exports = AbstractScreen;

	}());

/***/ },
/* 38 */
/*!********************************!*\
  !*** ./dev/Stores/Language.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1),

			Utils = __webpack_require__(/*! Common/Utils */ 0),

			Settings = __webpack_require__(/*! Storage/Settings */ 8)
		;

		/**
		 * @constructor
		 */
		function LanguageStore()
		{
			this.languages = ko.observableArray([]);
			this.languagesAdmin = ko.observableArray([]);

			this.language = ko.observable('')
				.extend({'limitedList': this.languages});

			this.languageAdmin = ko.observable('')
				.extend({'limitedList': this.languagesAdmin});

			this.userLanguage = ko.observable('');
			this.userLanguageAdmin = ko.observable('');
		}

		LanguageStore.prototype.populate = function ()
		{
			var
				aLanguages = Settings.appSettingsGet('languages'),
				aLanguagesAdmin = Settings.appSettingsGet('languagesAdmin')
			;

			this.languages(Utils.isArray(aLanguages) ? aLanguages : []);
			this.languagesAdmin(Utils.isArray(aLanguagesAdmin) ? aLanguagesAdmin : []);

			this.language(Settings.settingsGet('Language'));
			this.languageAdmin(Settings.settingsGet('LanguageAdmin'));

			this.userLanguage(Settings.settingsGet('UserLanguage'));
			this.userLanguageAdmin(Settings.settingsGet('UserLanguageAdmin'));
		};

		module.exports = new LanguageStore();

	}());


/***/ },
/* 39 */
/*!******************************!*\
  !*** external "window.JSON" ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = window.JSON;

/***/ },
/* 40 */,
/* 41 */
/*!*****************************!*\
  !*** ./dev/Stores/Theme.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1),

			Utils = __webpack_require__(/*! Common/Utils */ 0),

			Settings = __webpack_require__(/*! Storage/Settings */ 8)
		;

		/**
		 * @constructor
		 */
		function ThemeStore()
		{
			this.themes = ko.observableArray([]);
			this.themeBackgroundName = ko.observable('');
			this.themeBackgroundHash = ko.observable('');

			this.theme = ko.observable('')
				.extend({'limitedList': this.themes});
		}

		ThemeStore.prototype.populate = function ()
		{
			var aThemes = Settings.appSettingsGet('themes');

			this.themes(Utils.isArray(aThemes) ? aThemes : []);
			this.theme(Settings.settingsGet('Theme'));
			this.themeBackgroundName(Settings.settingsGet('UserBackgroundName'));
			this.themeBackgroundHash(Settings.settingsGet('UserBackgroundHash'));
		};

		module.exports = new ThemeStore();

	}());


/***/ },
/* 42 */
/*!*******************************!*\
  !*** ./dev/View/Popup/Ask.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),
			key = __webpack_require__(/*! key */ 18),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function AskPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsAsk');

			this.askDesc = ko.observable('');
			this.yesButton = ko.observable('');
			this.noButton = ko.observable('');

			this.yesFocus = ko.observable(false);
			this.noFocus = ko.observable(false);

			this.fYesAction = null;
			this.fNoAction = null;

			this.bFocusYesOnShow = true;
			this.bDisabeCloseOnEsc = true;
			this.sDefaultKeyScope = Enums.KeyState.PopupAsk;

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/Ask', 'PopupsAskViewModel'], AskPopupView);
		_.extend(AskPopupView.prototype, AbstractView.prototype);

		AskPopupView.prototype.clearPopup = function ()
		{
			this.askDesc('');
			this.yesButton(Translator.i18n('POPUPS_ASK/BUTTON_YES'));
			this.noButton(Translator.i18n('POPUPS_ASK/BUTTON_NO'));

			this.yesFocus(false);
			this.noFocus(false);

			this.fYesAction = null;
			this.fNoAction = null;
		};

		AskPopupView.prototype.yesClick = function ()
		{
			this.cancelCommand();

			if (Utils.isFunc(this.fYesAction))
			{
				this.fYesAction.call(null);
			}
		};

		AskPopupView.prototype.noClick = function ()
		{
			this.cancelCommand();

			if (Utils.isFunc(this.fNoAction))
			{
				this.fNoAction.call(null);
			}
		};

		/**
		 * @param {string} sAskDesc
		 * @param {Function=} fYesFunc
		 * @param {Function=} fNoFunc
		 * @param {string=} sYesButton
		 * @param {string=} sNoButton
		 * @param {boolean=} bFocusYesOnShow
		 */
		AskPopupView.prototype.onShow = function (sAskDesc, fYesFunc, fNoFunc, sYesButton, sNoButton, bFocusYesOnShow)
		{
			this.clearPopup();

			this.fYesAction = fYesFunc || null;
			this.fNoAction = fNoFunc || null;

			this.askDesc(sAskDesc || '');
			if (sYesButton)
			{
				this.yesButton(sYesButton);
			}

			if (sYesButton)
			{
				this.yesButton(sNoButton);
			}

			this.bFocusYesOnShow = Utils.isUnd(bFocusYesOnShow) ? true : !!bFocusYesOnShow;
		};

		AskPopupView.prototype.onShowWithDelay = function ()
		{
			if (this.bFocusYesOnShow)
			{
				this.yesFocus(true);
			}
		};

		AskPopupView.prototype.onBuild = function ()
		{
			key('tab, shift+tab, right, left', Enums.KeyState.PopupAsk, _.bind(function () {
				if (this.yesFocus())
				{
					this.noFocus(true);
				}
				else
				{
					this.yesFocus(true);
				}
				return false;
			}, this));

			key('esc', Enums.KeyState.PopupAsk, _.bind(function () {
				this.noClick();
				return false;
			}, this));
		};

		module.exports = AskPopupView;

	}());

/***/ },
/* 43 */
/*!*************************************!*\
  !*** ./dev/View/Popup/Languages.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Utils = __webpack_require__(/*! Common/Utils */ 0),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function LanguagesPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsLanguages');

			var self = this;

			this.fLang = null;
			this.userLanguage = ko.observable('');

			this.langs = ko.observableArray([]);

			this.languages = ko.computed(function () {
				var sUserLanguage = self.userLanguage();
				return _.map(self.langs(), function (sLanguage) {
					return {
						'key': sLanguage,
						'user': sLanguage === sUserLanguage,
						'selected': ko.observable(false),
						'fullName': Utils.convertLangName(sLanguage)
					};
				});
			});

			this.langs.subscribe(function () {
				this.setLanguageSelection();
			}, this);

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/Languages', 'PopupsLanguagesViewModel'], LanguagesPopupView);
		_.extend(LanguagesPopupView.prototype, AbstractView.prototype);

		LanguagesPopupView.prototype.languageTooltipName = function (sLanguage)
		{
			var sResult = Utils.convertLangName(sLanguage, true);
			return Utils.convertLangName(sLanguage, false) === sResult ? '' : sResult;
		};

		LanguagesPopupView.prototype.setLanguageSelection = function ()
		{
			var sCurrent = this.fLang ? ko.unwrap(this.fLang) : '';
			_.each(this.languages(), function (oItem) {
				oItem['selected'](oItem['key'] === sCurrent);
			});
		};

		LanguagesPopupView.prototype.onBeforeShow = function ()
		{
			this.fLang = null;
			this.userLanguage('');

			this.langs([]);
		};

		LanguagesPopupView.prototype.onShow = function (fLanguage, aLangs, sUserLanguage)
		{
			this.fLang = fLanguage;
			this.userLanguage(sUserLanguage || '');

			this.langs(aLangs);
		};

		LanguagesPopupView.prototype.changeLanguage = function (sLang)
		{
			if (this.fLang)
			{
				this.fLang(sLang);
			}

			this.cancelCommand();
		};

		module.exports = LanguagesPopupView;

	}());

/***/ },
/* 44 */
/*!***********************************!*\
  !*** ./dev/Common/HtmlEditor.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default = __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__ && __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default });
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





	var HtmlEditor = function () {

		/**
	  * @param {Object} element
	  * @param {Function=} onBlur
	  * @param {Function=} onReady
	  * @param {Function=} onModeChange
	  */

		function HtmlEditor(element) {
			var onBlur = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
			var onReady = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
			var onModeChange = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

			_classCallCheck(this, HtmlEditor);

			this.editor = null;
			this.$element = null;
			this.blurTimer = 0;
			this.onBlur = null;
			this.onReady = null;
			this.onModeChange = null;
			this.__inited = null;

			this.onBlur = onBlur;
			this.onReady = onReady;
			this.onModeChange = onModeChange;

			this.$element = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(element);

			this.resize = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].throttle(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].bind(this.resize, this), 100);

			this.__inited = false;

			this.init();
		}

		HtmlEditor.prototype.blurTrigger = function blurTrigger() {
			var _this = this;

			if (this.onBlur) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].clearTimeout(this.blurTimer);
				this.blurTimer = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setTimeout(function () {
					_this.onBlur();
				}, 200);
			}
		};

		HtmlEditor.prototype.focusTrigger = function focusTrigger() {
			if (this.onBlur) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].clearTimeout(this.blurTimer);
			}
		};

		/**
	  * @return {boolean}
	  */


		HtmlEditor.prototype.isHtml = function isHtml() {
			return this.editor ? 'wysiwyg' === this.editor.mode : false;
		};

		/**
	  * @param {string} signature
	  * @param {bool} html
	  * @param {bool} insertBefore
	  */


		HtmlEditor.prototype.setSignature = function setSignature(signature, html, insertBefore) {
			if (this.editor) {
				this.editor.execCommand('insertSignature', {
					isHtml: html,
					insertBefore: insertBefore,
					signature: signature
				});
			}
		};

		/**
	  * @return {boolean}
	  */


		HtmlEditor.prototype.checkDirty = function checkDirty() {
			return this.editor ? this.editor.checkDirty() : false;
		};

		HtmlEditor.prototype.resetDirty = function resetDirty() {
			if (this.editor) {
				this.editor.resetDirty();
			}
		};

		/**
	  * @param {string} text
	  * @return {string}
	  */


		HtmlEditor.prototype.clearSignatureSigns = function clearSignatureSigns(text) {
			return text.replace(/(\u200C|\u0002)/g, '');
		};

		/**
	  * @param {boolean=} wrapIsHtml = false
	  * @param {boolean=} clearSignatureSigns = false
	  * @return {string}
	  */


		HtmlEditor.prototype.getData = function getData() {
			var wrapIsHtml = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
			var clearSignatureSigns = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];


			var result = '';
			if (this.editor) {
				try {
					if ('plain' === this.editor.mode && this.editor.plugins.plain && this.editor.__plain) {
						result = this.editor.__plain.getRawData();
					} else {
						result = wrapIsHtml ? '<div data-html-editor-font-wrapper="true" style="font-family: arial, sans-serif; font-size: 13px;">' + this.editor.getData() + '</div>' : this.editor.getData();
					}
				} catch (e) {/* eslint-disable-line no-empty */}

				if (clearSignatureSigns) {
					result = this.clearSignatureSigns(result);
				}
			}

			return result;
		};

		/**
	  * @param {boolean=} wrapIsHtml = false
	  * @param {boolean=} clearSignatureSigns = false
	  * @return {string}
	  */


		HtmlEditor.prototype.getDataWithHtmlMark = function getDataWithHtmlMark() {
			var wrapIsHtml = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
			var clearSignatureSigns = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

			return (this.isHtml() ? ':HTML:' : '') + this.getData(wrapIsHtml, clearSignatureSigns);
		};

		HtmlEditor.prototype.modeToggle = function modeToggle(plain, resize) {
			if (this.editor) {
				try {
					if (plain) {
						if ('plain' === this.editor.mode) {
							this.editor.setMode('wysiwyg');
						}
					} else {
						if ('wysiwyg' === this.editor.mode) {
							this.editor.setMode('plain');
						}
					}
				} catch (e) {/* eslint-disable-line no-empty */}

				if (resize) {
					this.resize();
				}
			}
		};

		HtmlEditor.prototype.setHtmlOrPlain = function setHtmlOrPlain(text, focus) {
			if (':HTML:' === text.substr(0, 6)) {
				this.setHtml(text.substr(6), focus);
			} else {
				this.setPlain(text, focus);
			}
		};

		HtmlEditor.prototype.setHtml = function setHtml(html, focus) {
			if (this.editor && this.__inited) {
				this.modeToggle(true);

				html = html.replace(/<p[^>]*><\/p>/ig, '');

				try {
					this.editor.setData(html);
				} catch (e) {/* eslint-disable-line no-empty */}

				if (focus) {
					this.focus();
				}
			}
		};

		HtmlEditor.prototype.replaceHtml = function replaceHtml(find, _replaceHtml) {
			if (this.editor && this.__inited && 'wysiwyg' === this.editor.mode) {
				try {
					this.editor.setData(this.editor.getData().replace(find, _replaceHtml));
				} catch (e) {/* eslint-disable-line no-empty */}
			}
		};

		HtmlEditor.prototype.setPlain = function setPlain(plain, focus) {
			if (this.editor && this.__inited) {
				this.modeToggle(false);
				if ('plain' === this.editor.mode && this.editor.plugins.plain && this.editor.__plain) {
					this.editor.__plain.setRawData(plain);
				} else {
					try {
						this.editor.setData(plain);
					} catch (e) {/* eslint-disable-line no-empty */}
				}

				if (focus) {
					this.focus();
				}
			}
		};

		HtmlEditor.prototype.init = function init() {
			var _this2 = this;

			if (this.$element && this.$element[0] && !this.editor) {
				var initFunc = function initFunc() {

					var config = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["oHtmlEditorDefaultConfig"],
					    language = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.settingsGet('Language'),
					    allowSource = !!/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.appSettingsGet('allowHtmlEditorSourceButton'),
					    biti = !!/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.appSettingsGet('allowHtmlEditorBitiButtons');

					if ((allowSource || !biti) && !config.toolbarGroups.__cfgInited) {
						config.toolbarGroups.__cfgInited = true;

						if (allowSource) {
							config.removeButtons = config.removeButtons.replace(',Source', '');
						}

						if (!biti) {
							config.removePlugins += (config.removePlugins ? ',' : '') + 'bidi';
						}
					}

					config.enterMode = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].CKEDITOR.ENTER_BR;
					config.shiftEnterMode = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].CKEDITOR.ENTER_P;

					config.language = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["oHtmlEditorLangsMap"][language] || 'en';
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].CKEDITOR.env) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].CKEDITOR.env.isCompatible = true;
					}

					_this2.editor = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].CKEDITOR.appendTo(_this2.$element[0], config);

					_this2.editor.on('key', function (event) {
						if (event && event.data && 9 /* Tab */ === event.data.keyCode) {
							return false;
						}
					});

					_this2.editor.on('blur', function () {
						_this2.blurTrigger();
					});

					_this2.editor.on('mode', function () {
						_this2.blurTrigger();
						if (_this2.onModeChange) {
							_this2.onModeChange('plain' !== _this2.editor.mode);
						}
					});

					_this2.editor.on('focus', function () {
						_this2.focusTrigger();
					});

					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].FileReader) {
						_this2.editor.on('drop', function (event) {
							if (0 < event.data.dataTransfer.getFilesCount()) {
								var file = event.data.dataTransfer.getFile(0);
								if (file && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].FileReader && event.data.dataTransfer.id && file.type && file.type.match(/^image/i)) {
									var id = event.data.dataTransfer.id,
									    imageId = '[img=' + id + ']',
									    reader = new /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].FileReader();

									reader.onloadend = function () {
										if (reader.result) {
											_this2.replaceHtml(imageId, '<img src="' + reader.result + '" />');
										}
									};

									reader.readAsDataURL(file);

									event.data.dataTransfer.setData('text/html', imageId);
								}
							}
						});
					}

					_this2.editor.on('instanceReady', function () {

						if (_this2.editor.removeMenuItem) {
							_this2.editor.removeMenuItem('cut');
							_this2.editor.removeMenuItem('copy');
							_this2.editor.removeMenuItem('paste');
						}

						_this2.__resizable = true;
						_this2.__inited = true;

						_this2.resize();

						if (_this2.onReady) {
							_this2.onReady();
						}
					});
				};

				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].CKEDITOR) {
					initFunc();
				} else {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].__initEditor = initFunc;
				}
			}
		};

		HtmlEditor.prototype.focus = function focus() {
			if (this.editor) {
				try {
					this.editor.focus();
				} catch (e) {/* eslint-disable-line no-empty */}
			}
		};

		HtmlEditor.prototype.hasFocus = function hasFocus() {
			if (this.editor) {
				try {
					return !!this.editor.focusManager.hasFocus;
				} catch (e) {/* eslint-disable-line no-empty */}
			}

			return false;
		};

		HtmlEditor.prototype.blur = function blur() {
			if (this.editor) {
				try {
					this.editor.focusManager.blur(true);
				} catch (e) {/* eslint-disable-line no-empty */}
			}
		};

		HtmlEditor.prototype.resize = function resize() {
			if (this.editor && this.__resizable) {
				try {
					this.editor.resize(this.$element.width(), this.$element.innerHeight());
				} catch (e) {/* eslint-disable-line no-empty */}
			}
		};

		HtmlEditor.prototype.setReadOnly = function setReadOnly(value) {
			if (this.editor) {
				try {
					this.editor.setReadOnly(!!value);
				} catch (e) {/* eslint-disable-line no-empty */}
			}
		};

		HtmlEditor.prototype.clear = function clear(focus) {
			this.setHtml('', focus);
		};

		return HtmlEditor;
	}();


	/* harmony export */ Object.defineProperty(exports, "HtmlEditor", {configurable: false, enumerable: true, get: function() { return HtmlEditor; }});
	/* harmony export */ Object.defineProperty(exports, "default", {configurable: false, enumerable: true, get: function() { return HtmlEditor; }});
	module.exports = HtmlEditor;

/***/ },
/* 45 */
/*!*******************************************!*\
  !*** ./dev/Component/AbstracCheckbox.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ko___default = __WEBPACK_IMPORTED_MODULE_0_ko__ && __WEBPACK_IMPORTED_MODULE_0_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 15);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





	var AbstracCheckbox = function (_AbstractComponent) {
		_inherits(AbstracCheckbox, _AbstractComponent);

		/**
	  * @param {Object} params = {}
	  */

		function AbstracCheckbox() {
			var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

			_classCallCheck(this, AbstracCheckbox);

			var _this = _possibleConstructorReturn(this, _AbstractComponent.call(this));

			_this.value = params.value;
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(_this.value) || !_this.value.subscribe) {
				_this.value = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(_this.value) ? false : !!_this.value);
			}

			_this.enable = params.enable;
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(_this.enable) || !_this.enable.subscribe) {
				_this.enable = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(_this.enable) ? true : !!_this.enable);
			}

			_this.disable = params.disable;
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(_this.disable) || !_this.disable.subscribe) {
				_this.disable = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(_this.disable) ? false : !!_this.disable);
			}

			_this.label = params.label || '';
			_this.inline = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(params.inline) ? false : params.inline;

			_this.readOnly = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(params.readOnly) ? false : !!params.readOnly;
			_this.inverted = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(params.inverted) ? false : !!params.inverted;

			_this.labeled = !/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(params.label);
			_this.labelAnimated = !!params.labelAnimated;
			return _this;
		}

		AbstracCheckbox.prototype.click = function click() {
			if (!this.readOnly && this.enable() && !this.disable()) {
				this.value(!this.value());
			}
		};

		return AbstracCheckbox;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Component_Abstract__["a"]);


	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return AbstracCheckbox; }});/* unused harmony export default */

/***/ },
/* 46 */,
/* 47 */
/*!*********************************!*\
  !*** external "window.Promise" ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = window.Promise;

/***/ },
/* 48 */
/*!************************************!*\
  !*** external "window.crossroads" ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = window.crossroads;

/***/ },
/* 49 */
/*!************************************!*\
  !*** external "window.progressJs" ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = window.progressJs;

/***/ },
/* 50 */
/*!***************************!*\
  !*** ./dev/bootstrap.jsx ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __WEBPACK_IMPORTED_MODULE_0_window__ && __WEBPACK_IMPORTED_MODULE_0_window__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_window__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_window__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_window___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_window___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __WEBPACK_IMPORTED_MODULE_1____ && __WEBPACK_IMPORTED_MODULE_1____.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1____['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1____; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_____default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_____default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! $ */ 13);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __WEBPACK_IMPORTED_MODULE_2____ && __WEBPACK_IMPORTED_MODULE_2____.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2____['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2____; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_____default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_____default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Plugins__ = __webpack_require__(/*! Common/Plugins */ 22);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default = __WEBPACK_IMPORTED_MODULE_5_Common_Plugins__ && __WEBPACK_IMPORTED_MODULE_5_Common_Plugins__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_5_Common_Plugins__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_5_Common_Plugins__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 5);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Translator___default = __WEBPACK_IMPORTED_MODULE_6_Common_Translator__ && __WEBPACK_IMPORTED_MODULE_6_Common_Translator__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_6_Common_Translator__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_6_Common_Translator__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_6_Common_Translator___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_6_Common_Translator___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Model_Email__ = __webpack_require__(/*! Model/Email */ 29);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Model_Email___default = __WEBPACK_IMPORTED_MODULE_7_Model_Email__ && __WEBPACK_IMPORTED_MODULE_7_Model_Email__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_7_Model_Email__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_7_Model_Email__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_7_Model_Email___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_7_Model_Email___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);











	/* harmony default export */ exports["a"] = function (App) {

		/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["data"].__APP__ = App;

		/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["$win"].on('keydown', /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["kill_CtrlA_CtrlS"]).on('unload', function () {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["data"].bUnload = true;
		});

		/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["$html"].addClass(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["bMobileDevice"] ? 'mobile' : 'no-mobile').on('click.dropdown.data-api', function () {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["detectDropdownVisibility"].bind()();
		});

		var rl = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.rl || {};

		rl.i18n = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind(/* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Translator___default.a.i18n, /* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Translator___default.a);

		rl.addHook = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind(/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a.addHook, /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a);
		rl.settingsGet = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind(/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a.mainSettingsGet, /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a);
		rl.createCommand = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["createCommand"];

		rl.addSettingsViewModel = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind(/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a.addSettingsViewModel, /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a);
		rl.addSettingsViewModelForAdmin = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind(/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a.addSettingsViewModelForAdmin, /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a);

		rl.pluginRemoteRequest = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind(/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a.remoteRequest, /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a);
		rl.pluginSettingsGet = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.bind(/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a.settingsGet, /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Plugins___default.a);

		rl.EmailModel = /* harmony import */__WEBPACK_IMPORTED_MODULE_7_Model_Email___default.a;
		rl.Enums = /* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_8_Common_Enums__;

		/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.rl = rl;

		/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__APP_BOOT = function (fErrorCallback) {

			/* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.bind()(function () {

				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.delay(function () {

					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloopTEMPLATES && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloopTEMPLATES[0]) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_2_____default.a.bind()('#rl-templates').html(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloopTEMPLATES[0]);

						/* harmony import */__WEBPACK_IMPORTED_MODULE_1_____default.a.delay(function () {

							App.bootstart();

							/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["$html"].removeClass('no-js rl-booted-trigger').addClass('rl-booted');
						}, 10);
					} else {
						fErrorCallback();
					}

					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_window___default.a.__APP_BOOT = null;
				}, 10);
			});
		};
	};

/***/ },
/* 51 */
/*!**********************************!*\
  !*** ./dev/Stores/Admin/Capa.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),

			Settings = __webpack_require__(/*! Storage/Settings */ 8)
		;

		/**
		 * @constructor
		 */
		function CapaAdminStore()
		{
			this.additionalAccounts = ko.observable(false);
			this.identities = ko.observable(false);
			this.gravatar = ko.observable(false);
			this.attachmentThumbnails = ko.observable(false);
			this.sieve = ko.observable(false);
			this.filters = ko.observable(false);
			this.themes = ko.observable(true);
			this.userBackground = ko.observable(false);
			this.openPGP = ko.observable(false);
			this.twoFactorAuth = ko.observable(false);
			this.twoFactorAuthForce = ko.observable(false);
			this.templates = ko.observable(false);
		}

		CapaAdminStore.prototype.populate = function()
		{
			this.additionalAccounts(Settings.capa(Enums.Capa.AdditionalAccounts));
			this.identities(Settings.capa(Enums.Capa.Identities));
			this.gravatar(Settings.capa(Enums.Capa.Gravatar));
			this.attachmentThumbnails(Settings.capa(Enums.Capa.AttachmentThumbnails));
			this.sieve(Settings.capa(Enums.Capa.Sieve));
			this.filters(Settings.capa(Enums.Capa.Filters));
			this.themes(Settings.capa(Enums.Capa.Themes));
			this.userBackground(Settings.capa(Enums.Capa.UserBackground));
			this.openPGP(Settings.capa(Enums.Capa.OpenPGP));
			this.twoFactorAuth(Settings.capa(Enums.Capa.TwoFactor));
			this.twoFactorAuthForce(Settings.capa(Enums.Capa.TwoFactorForce));
			this.templates(Settings.capa(Enums.Capa.Templates));
		};

		module.exports = new CapaAdminStore();

	}());


/***/ },
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/*!*********************************!*\
  !*** ./dev/External/Opentip.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			Opentip = window.Opentip
		;

		Opentip.styles.rainloop = {

			'extends': 'standard',

			'fixed': true,
			'target': true,

			'delay': 0.2,
			'hideDelay': 0,

			'hideEffect': 'fade',
			'hideEffectDuration': 0.2,

			'showEffect': 'fade',
			'showEffectDuration': 0.2,

			'showOn': 'mouseover click',
			'removeElementsOnHide': true,

			'background': '#fff',
			'shadow': false,

			'borderColor': '#999',
			'borderRadius': 2,
			'borderWidth': 1
		};

		Opentip.styles.rainloopTip = {
			'extends': 'rainloop',
			'delay': 0.4,
			'group': 'rainloopTips'
		};

		Opentip.styles.rainloopErrorTip = {
			'extends': 'rainloop',
			'className': 'rainloopErrorTip'
		};

		module.exports = Opentip;

	}());


/***/ },
/* 56 */
/*!************************************!*\
  !*** ./dev/Remote/AbstractAjax.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),

			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Plugins = __webpack_require__(/*! Common/Plugins */ 22),
			Links = __webpack_require__(/*! Common/Links */ 12),

			Settings = __webpack_require__(/*! Storage/Settings */ 8)
		;

		/**
		* @constructor
		*/
		function AbstractAjaxRemote()
		{
			this.oRequests = {};
		}

		AbstractAjaxRemote.prototype.oRequests = {};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sRequestAction
		 * @param {string} sType
		 * @param {?AjaxJsonDefaultResponse} oData
		 * @param {boolean} bCached
		 * @param {*=} oRequestParameters
		 */
		AbstractAjaxRemote.prototype.defaultResponse = function (fCallback, sRequestAction, sType, oData, bCached, oRequestParameters)
		{
			var
				fCall = function () {
					if (Enums.StorageResultType.Success !== sType && Globals.data.bUnload)
					{
						sType = Enums.StorageResultType.Unload;
					}

					if (Enums.StorageResultType.Success === sType && oData && !oData.Result)
					{
						if (oData && -1 < Utils.inArray(oData.ErrorCode, [
							Enums.Notification.AuthError, Enums.Notification.AccessError,
							Enums.Notification.ConnectionError, Enums.Notification.DomainNotAllowed, Enums.Notification.AccountNotAllowed,
							Enums.Notification.MailServerError,	Enums.Notification.UnknownNotification, Enums.Notification.UnknownError
						]))
						{
							Globals.data.iAjaxErrorCount++;
						}

						if (oData && Enums.Notification.InvalidToken === oData.ErrorCode)
						{
							Globals.data.iTokenErrorCount++;
						}

						if (Consts.TOKEN_ERROR_LIMIT < Globals.data.iTokenErrorCount)
						{
							if (Globals.data.__APP__ && Globals.data.__APP__.loginAndLogoutReload)
							{
								 Globals.data.__APP__.loginAndLogoutReload(false, true);
							}
						}

						if (oData.ClearAuth || oData.Logout || Consts.AJAX_ERROR_LIMIT < Globals.data.iAjaxErrorCount)
						{
							if (Globals.data.__APP__ && Globals.data.__APP__.clearClientSideToken)
							{
								Globals.data.__APP__.clearClientSideToken();

								if (!oData.ClearAuth &&  Globals.data.__APP__.loginAndLogoutReload)
								{
									 Globals.data.__APP__.loginAndLogoutReload(false, true);
								}
							}
						}
					}
					else if (Enums.StorageResultType.Success === sType && oData && oData.Result)
					{
						Globals.data.iAjaxErrorCount = 0;
						Globals.data.iTokenErrorCount = 0;
					}

					if (fCallback)
					{
						Plugins.runHook('ajax-default-response', [sRequestAction, Enums.StorageResultType.Success === sType ? oData : null, sType, bCached, oRequestParameters]);

						fCallback(
							sType,
							Enums.StorageResultType.Success === sType ? oData : null,
							bCached,
							sRequestAction,
							oRequestParameters
						);
					}
				}
			;

			switch (sType)
			{
				case 'success':
					sType = Enums.StorageResultType.Success;
					break;
				case 'abort':
					sType = Enums.StorageResultType.Abort;
					break;
				default:
					sType = Enums.StorageResultType.Error;
					break;
			}

			if (Enums.StorageResultType.Error === sType)
			{
				_.delay(fCall, 300);
			}
			else
			{
				fCall();
			}
		};

		/**
		 * @param {?Function} fResultCallback
		 * @param {Object} oParameters
		 * @param {?number=} iTimeOut = 20000
		 * @param {string=} sGetAdd = ''
		 * @param {Array=} aAbortActions = []
		 * @return {jQuery.jqXHR}
		 */
		AbstractAjaxRemote.prototype.ajaxRequest = function (fResultCallback, oParameters, iTimeOut, sGetAdd, aAbortActions)
		{
			var
				self = this,
				bPost = '' === sGetAdd,
				oHeaders = {},
				iStart = (new window.Date()).getTime(),
				oDefAjax = null,
				sAction = ''
			;

			oParameters = oParameters || {};
			iTimeOut = Utils.isNormal(iTimeOut) ? iTimeOut : 20000;
			sGetAdd = Utils.isUnd(sGetAdd) ? '' : Utils.pString(sGetAdd);
			aAbortActions = Utils.isArray(aAbortActions) ? aAbortActions : [];

			sAction = oParameters.Action || '';

			if (sAction && 0 < aAbortActions.length)
			{
				_.each(aAbortActions, function (sActionToAbort) {
					if (self.oRequests[sActionToAbort])
					{
						self.oRequests[sActionToAbort].__aborted = true;
						if (self.oRequests[sActionToAbort].abort)
						{
							self.oRequests[sActionToAbort].abort();
						}
						self.oRequests[sActionToAbort] = null;
					}
				});
			}

			if (bPost)
			{
				oParameters['XToken'] = Settings.appSettingsGet('token');
			}

			oDefAjax = $.ajax({
				'type': bPost ? 'POST' : 'GET',
				'url': Links.ajax(sGetAdd),
				'async': true,
				'dataType': 'json',
				'data': bPost ? oParameters : {},
				'headers': oHeaders,
				'timeout': iTimeOut,
				'global': true
			});

			oDefAjax.always(function (oData, sType) {

				var bCached = false;
				if (oData && oData['Time'])
				{
					bCached = Utils.pInt(oData['Time']) > (new window.Date()).getTime() - iStart;
				}

				if (sAction && self.oRequests[sAction])
				{
					if (self.oRequests[sAction].__aborted)
					{
						sType = 'abort';
					}

					self.oRequests[sAction] = null;
				}

				self.defaultResponse(fResultCallback, sAction, sType, oData, bCached, oParameters);
			});

			if (sAction && 0 < aAbortActions.length && -1 < Utils.inArray(sAction, aAbortActions))
			{
				if (this.oRequests[sAction])
				{
					this.oRequests[sAction].__aborted = true;
					if (this.oRequests[sAction].abort)
					{
						this.oRequests[sAction].abort();
					}
					this.oRequests[sAction] = null;
				}

				this.oRequests[sAction] = oDefAjax;
			}

			return oDefAjax;
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sAction
		 * @param {Object=} oParameters
		 * @param {?number=} iTimeout
		 * @param {string=} sGetAdd = ''
		 * @param {Array=} aAbortActions = []
		 */
		AbstractAjaxRemote.prototype.defaultRequest = function (fCallback, sAction, oParameters, iTimeout, sGetAdd, aAbortActions)
		{
			oParameters = oParameters || {};
			oParameters.Action = sAction;

			sGetAdd = Utils.pString(sGetAdd);

			Plugins.runHook('ajax-default-request', [sAction, oParameters, sGetAdd]);

			return this.ajaxRequest(fCallback, oParameters,
				Utils.isUnd(iTimeout) ? Consts.DEFAULT_AJAX_TIMEOUT : Utils.pInt(iTimeout), sGetAdd, aAbortActions);
		};

		/**
		 * @param {?Function} fCallback
		 */
		AbstractAjaxRemote.prototype.noop = function (fCallback)
		{
			this.defaultRequest(fCallback, 'Noop');
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sMessage
		 * @param {string} sFileName
		 * @param {number} iLineNo
		 * @param {string} sLocation
		 * @param {string} sHtmlCapa
		 * @param {number} iTime
		 */
		AbstractAjaxRemote.prototype.jsError = function (fCallback, sMessage, sFileName, iLineNo, sLocation, sHtmlCapa, iTime)
		{
			this.defaultRequest(fCallback, 'JsError', {
				'Message': sMessage,
				'FileName': sFileName,
				'LineNo': iLineNo,
				'Location': sLocation,
				'HtmlCapa': sHtmlCapa,
				'TimeOnPage': iTime
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sType
		 * @param {Array=} mData = null
		 * @param {boolean=} bIsError = false
		 */
		AbstractAjaxRemote.prototype.jsInfo = function (fCallback, sType, mData, bIsError)
		{
			this.defaultRequest(fCallback, 'JsInfo', {
				'Type': sType,
				'Data': mData,
				'IsError': (Utils.isUnd(bIsError) ? false : !!bIsError) ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 */
		AbstractAjaxRemote.prototype.getPublicKey = function (fCallback)
		{
			this.defaultRequest(fCallback, 'GetPublicKey');
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sVersion
		 */
		AbstractAjaxRemote.prototype.jsVersion = function (fCallback, sVersion)
		{
			this.defaultRequest(fCallback, 'Version', {
				'Version': sVersion
			});
		};

		module.exports = AbstractAjaxRemote;

	}());

/***/ },
/* 57 */
/*!****************************************!*\
  !*** ./dev/Screen/AbstractSettings.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),
			ko = __webpack_require__(/*! ko */ 1),

			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Links = __webpack_require__(/*! Common/Links */ 12),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractScreen = __webpack_require__(/*! Knoin/AbstractScreen */ 37)
		;

		/**
		 * @constructor
		 * @param {Array} aViewModels
		 * @extends AbstractScreen
		 */
		function AbstractSettingsScreen(aViewModels)
		{
			AbstractScreen.call(this, 'settings', aViewModels);

			this.menu = ko.observableArray([]);

			this.oCurrentSubScreen = null;
			this.oViewModelPlace = null;

			this.setupSettings();
		}

		_.extend(AbstractSettingsScreen.prototype, AbstractScreen.prototype);

		/**
		 * @param {Function=} fCallback
		 */
		AbstractSettingsScreen.prototype.setupSettings = function (fCallback)
		{
			if (fCallback)
			{
				fCallback();
			}
		};

		AbstractSettingsScreen.prototype.onRoute = function (sSubName)
		{
			var
				self = this,
				oSettingsScreen = null,
				RoutedSettingsViewModel = null,
				oViewModelPlace = null,
				oViewModelDom = null
			;

			RoutedSettingsViewModel = _.find(Globals.aViewModels['settings'], function (SettingsViewModel) {
				return SettingsViewModel && SettingsViewModel.__rlSettingsData &&
					sSubName === SettingsViewModel.__rlSettingsData.Route;
			});

			if (RoutedSettingsViewModel)
			{
				if (_.find(Globals.aViewModels['settings-removed'], function (DisabledSettingsViewModel) {
					return DisabledSettingsViewModel && DisabledSettingsViewModel === RoutedSettingsViewModel;
				}))
				{
					RoutedSettingsViewModel = null;
				}

				if (RoutedSettingsViewModel && _.find(Globals.aViewModels['settings-disabled'], function (DisabledSettingsViewModel) {
					return DisabledSettingsViewModel && DisabledSettingsViewModel === RoutedSettingsViewModel;
				}))
				{
					RoutedSettingsViewModel = null;
				}
			}

			if (RoutedSettingsViewModel)
			{
				if (RoutedSettingsViewModel.__builded && RoutedSettingsViewModel.__vm)
				{
					oSettingsScreen = RoutedSettingsViewModel.__vm;
				}
				else
				{
					oViewModelPlace = this.oViewModelPlace;
					if (oViewModelPlace && 1 === oViewModelPlace.length)
					{
						oSettingsScreen = new RoutedSettingsViewModel();

						oViewModelDom = $('<div></div>').addClass('rl-settings-view-model').hide();
						oViewModelDom.appendTo(oViewModelPlace);

						oSettingsScreen.viewModelDom = oViewModelDom;

						oSettingsScreen.__rlSettingsData = RoutedSettingsViewModel.__rlSettingsData;

						RoutedSettingsViewModel.__dom = oViewModelDom;
						RoutedSettingsViewModel.__builded = true;
						RoutedSettingsViewModel.__vm = oSettingsScreen;

						ko.applyBindingAccessorsToNode(oViewModelDom[0], {
							'translatorInit': true,
							'template': function () { return {'name': RoutedSettingsViewModel.__rlSettingsData.Template}; }
						}, oSettingsScreen);

						Utils.delegateRun(oSettingsScreen, 'onBuild', [oViewModelDom]);
					}
					else
					{
						Utils.log('Cannot find sub settings view model position: SettingsSubScreen');
					}
				}

				if (oSettingsScreen)
				{
					_.defer(function () {
						// hide
						if (self.oCurrentSubScreen)
						{
							Utils.delegateRun(self.oCurrentSubScreen, 'onHide');
							self.oCurrentSubScreen.viewModelDom.hide();
						}
						// --

						self.oCurrentSubScreen = oSettingsScreen;

						// show
						if (self.oCurrentSubScreen)
						{
							Utils.delegateRun(self.oCurrentSubScreen, 'onBeforeShow');
							self.oCurrentSubScreen.viewModelDom.show();
							Utils.delegateRun(self.oCurrentSubScreen, 'onShow');
							Utils.delegateRun(self.oCurrentSubScreen, 'onShowWithDelay', [], 200);

							_.each(self.menu(), function (oItem) {
								oItem.selected(oSettingsScreen && oSettingsScreen.__rlSettingsData && oItem.route === oSettingsScreen.__rlSettingsData.Route);
							});

							$('#rl-content .b-settings .b-content .content').scrollTop(0);
						}
						// --

						Utils.windowResize();
					});
				}
			}
			else
			{
				kn.setHash(Links.settings(), false, true);
			}
		};

		AbstractSettingsScreen.prototype.onHide = function ()
		{
			if (this.oCurrentSubScreen && this.oCurrentSubScreen.viewModelDom)
			{
				Utils.delegateRun(this.oCurrentSubScreen, 'onHide');
				this.oCurrentSubScreen.viewModelDom.hide();
			}
		};

		AbstractSettingsScreen.prototype.onBuild = function ()
		{
			_.each(Globals.aViewModels['settings'], function (SettingsViewModel) {
				if (SettingsViewModel && SettingsViewModel.__rlSettingsData &&
					!_.find(Globals.aViewModels['settings-removed'], function (RemoveSettingsViewModel) {
						return RemoveSettingsViewModel && RemoveSettingsViewModel === SettingsViewModel;
					}))
				{
					this.menu.push({
						'route': SettingsViewModel.__rlSettingsData.Route,
						'label': SettingsViewModel.__rlSettingsData.Label,
						'selected': ko.observable(false),
						'disabled': !!_.find(Globals.aViewModels['settings-disabled'], function (DisabledSettingsViewModel) {
							return DisabledSettingsViewModel && DisabledSettingsViewModel === SettingsViewModel;
						})
					});
				}
			}, this);

			this.oViewModelPlace = $('#rl-content #rl-settings-subscreen');
		};

		AbstractSettingsScreen.prototype.routes = function ()
		{
			var
				DefaultViewModel = _.find(Globals.aViewModels['settings'], function (SettingsViewModel) {
					return SettingsViewModel && SettingsViewModel.__rlSettingsData && SettingsViewModel.__rlSettingsData['IsDefault'];
				}),
				sDefaultRoute = DefaultViewModel ? DefaultViewModel.__rlSettingsData['Route'] : 'general',
				oRules = {
					'subname': /^(.*)$/,
					'normalize_': function (oRequest, oVals) {
						oVals.subname = Utils.isUnd(oVals.subname) ? sDefaultRoute : Utils.pString(oVals.subname);
						return [oVals.subname];
					}
				}
			;

			return [
				['{subname}/', oRules],
				['{subname}', oRules],
				['', oRules]
			];
		};

		module.exports = AbstractSettingsScreen;

	}());

/***/ },
/* 58 */
/*!************************************!*\
  !*** ./dev/Stores/Admin/Domain.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1)
		;

		/**
		 * @constructor
		 */
		function DomainAdminStore()
		{
			this.domains = ko.observableArray([]);
			this.domains.loading = ko.observable(false).extend({'throttle': 100});
		}

		module.exports = new DomainAdminStore();

	}());


/***/ },
/* 59 */
/*!*************************************!*\
  !*** ./dev/Stores/Admin/Package.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1)
		;

		/**
		 * @constructor
		 */
		function PackageAdminStore()
		{
			this.packages = ko.observableArray([]);
			this.packages.loading = ko.observable(false).extend({'throttle': 100});

			this.packagesReal = ko.observable(true);
			this.packagesMainUpdatable = ko.observable(true);
		}

		module.exports = new PackageAdminStore();

	}());


/***/ },
/* 60 */
/*!************************************!*\
  !*** ./dev/Stores/Admin/Plugin.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1)
		;

		/**
		 * @constructor
		 */
		function PluginAdminStore()
		{
			this.plugins = ko.observableArray([]);
			this.plugins.loading = ko.observable(false).extend({'throttle': 100});
			this.plugins.error = ko.observable('');
		}

		module.exports = new PluginAdminStore();

	}());


/***/ },
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/*!******************************!*\
  !*** ./dev/App/Abstract.jsx ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Links__ = __webpack_require__(/*! Common/Links */ 12);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Links___default = __WEBPACK_IMPORTED_MODULE_4_Common_Links__ && __WEBPACK_IMPORTED_MODULE_4_Common_Links__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_4_Common_Links__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_4_Common_Links__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4_Common_Links___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_4_Common_Links___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Events__ = __webpack_require__(/*! Common/Events */ 24);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Events___default = __WEBPACK_IMPORTED_MODULE_5_Common_Events__ && __WEBPACK_IMPORTED_MODULE_5_Common_Events__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_5_Common_Events__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_5_Common_Events__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_5_Common_Events___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_5_Common_Events___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 5);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Translator___default = __WEBPACK_IMPORTED_MODULE_6_Common_Translator__ && __WEBPACK_IMPORTED_MODULE_6_Common_Translator__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_6_Common_Translator__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_6_Common_Translator__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_6_Common_Translator___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_6_Common_Translator___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default = __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__ && __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Knoin_AbstractBoot__ = __webpack_require__(/*! Knoin/AbstractBoot */ 76);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














	var AbstractApp = function (_AbstractBoot) {
		_inherits(AbstractApp, _AbstractBoot);

		/**
	  * @param {RemoteStorage|AdminRemoteStorage} Remote
	  */

		function AbstractApp(Remote) {
			_classCallCheck(this, AbstractApp);

			var _this = _possibleConstructorReturn(this, _AbstractBoot.call(this));

			_this.googlePreviewSupportedCache = null;
			_this.isLocalAutocomplete = true;
			_this.iframe = null;
			_this.lastErrorTime = 0;


			_this.iframe = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('<iframe class="internal-hiddden" />').appendTo('body');

			/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$win"].on('error', function (event) {
				if (event && event.originalEvent && event.originalEvent.message && -1 === /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["inArray"].bind()(event.originalEvent.message, ['Script error.', 'Uncaught Error: Error calling method on NPObject.'])) {
					var time = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["timestamp"].bind()();
					if (_this.lastErrorTime >= time) {
						return;
					}

					_this.lastErrorTime = time;

					Remote.jsError(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["noop"], event.originalEvent.message, event.originalEvent.filename, event.originalEvent.lineno, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.toString ? /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.toString() : '', /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].attr('class'), /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["microtime"].bind()() - /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["startMicrotime"]);
				}
			});

			/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$win"].on('resize', function () {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Events___default.a.pub('window.resize');
			});

			/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Events___default.a.sub('window.resize', /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].throttle(function () {

				var iH = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$win"].height(),
				    iW = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$win"].height();

				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$win"].__sizes[0] !== iH || /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$win"].__sizes[1] !== iW) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$win"].__sizes[0] = iH;
					/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$win"].__sizes[1] = iW;

					/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Events___default.a.pub('window.resize.real');
				}
			}, 50));

			// DEBUG
			//		Events.sub({
			//			'window.resize': function () {
			//				window.console.log('window.resize');
			//			},
			//			'window.resize.real': function () {
			//				window.console.log('window.resize.real');
			//			}
			//		});

			/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$doc"].on('keydown', function (oEvent) {
				if (oEvent && oEvent.ctrlKey) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].addClass('rl-ctrl-key-pressed');
				}
			}).on('keyup', function (oEvent) {
				if (oEvent && !oEvent.ctrlKey) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].removeClass('rl-ctrl-key-pressed');
				}
			});

			/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$doc"].on('mousemove keypress click', /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].debounce(function () {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Events___default.a.pub('rl.auto-logout-refresh');
			}, 5000));

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["d"].bind()('esc, enter', /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["KeyState"].All, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].bind(function () {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["detectDropdownVisibility"].bind()();
			}, _this));
			return _this;
		}

		AbstractApp.prototype.remote = function remote() {
			return null;
		};

		AbstractApp.prototype.data = function data() {
			return null;
		};

		AbstractApp.prototype.getApplicationConfiguration = function getApplicationConfiguration(name, default_) {
			return this.applicationConfiguration[name] || default_;
		};

		/**
	  * @param {string} link
	  * @return {boolean}
	  */


		AbstractApp.prototype.download = function download(link) {

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["sUserAgent"] && (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["sUserAgent"].indexOf('chrome') > -1 || /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["sUserAgent"].indexOf('chrome') > -1)) {
				var oLink = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].document.createElement('a');
				oLink.href = link;

				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].document && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].document.createEvent) {
					var oE = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].document.createEvent.MouseEvents;
					if (oE && oE.initEvent && oLink.dispatchEvent) {
						oE.initEvent('click', true, true);
						oLink.dispatchEvent(oE);
						return true;
					}
				}
			}

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["bMobileDevice"]) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].open(link, '_self');
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].focus();
			} else {
				this.iframe.attr('src', link);
				//		window.document.location.href = link;
			}

			return true;
		};

		/**
	  * @return {boolean}
	  */


		AbstractApp.prototype.googlePreviewSupported = function googlePreviewSupported() {
			if (null === this.googlePreviewSupportedCache) {
				this.googlePreviewSupportedCache = !!/* harmony import */__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default.a.settingsGet('AllowGoogleSocial') && !!/* harmony import */__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default.a.settingsGet('AllowGoogleSocialPreview');
			}

			return this.googlePreviewSupportedCache;
		};

		/**
	  * @param {string} title
	  */


		AbstractApp.prototype.setWindowTitle = function setWindowTitle(title) {
			title = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isNormal"].bind()(title) && 0 < title.length ? '' + title : '';
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default.a.settingsGet('Title')) {
				title += (title ? ' - ' : '') + /* harmony import */__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default.a.settingsGet('Title');
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].document.title = title + ' ...';
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].document.title = title;
		};

		AbstractApp.prototype.redirectToAdminPanel = function redirectToAdminPanel() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.href = /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Links___default.a.rootAdmin();
			}, 100);
		};

		AbstractApp.prototype.clearClientSideToken = function clearClientSideToken() {
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].__rlah_clear) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].__rlah_clear();
			}
		};

		/**
	  * @param {string} token
	  */


		AbstractApp.prototype.setClientSideToken = function setClientSideToken(token) {
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].__rlah_set) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].__rlah_set(token);

				__webpack_require__(/*! Storage/Settings */ 8).settingsSet('AuthAccountHash', token);
				__webpack_require__(/*! Common/Links */ 12).populateAuthSuffix();
			}
		};

		/**
	  * @param {boolean=} admin = false
	  * @param {boolean=} logout = false
	  * @param {boolean=} close = false
	  */


		AbstractApp.prototype.loginAndLogoutReload = function loginAndLogoutReload() {
			var admin = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
			var logout = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
			var close = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];


			var kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			    mobile = /* harmony import */__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default.a.appSettingsGet('mobile'),
			    inIframe = !!/* harmony import */__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default.a.appSettingsGet('inIframe');

			var customLogoutLink = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pString"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default.a.appSettingsGet('customLogoutLink'));

			if (logout) {
				this.clearClientSideToken();
			}

			if (logout && close && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].close) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].close();
			}

			customLogoutLink = customLogoutLink || (admin ? /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Links___default.a.rootAdmin(mobile) : /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Links___default.a.rootUser(mobile));

			if (logout && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.href !== customLogoutLink) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
					if (inIframe && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].parent) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].parent.location.href = customLogoutLink;
					} else {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.href = customLogoutLink;
					}
				}, 100);
			} else {
				kn.routeOff();
				kn.setHash(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Links___default.a.root(), true);
				kn.routeOff();

				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
					if (inIframe && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].parent) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].parent.location.reload();
					} else {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.reload();
					}
				}, 100);
			}
		};

		AbstractApp.prototype.historyBack = function historyBack() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].history.back();
		};

		AbstractApp.prototype.bootstart = function bootstart() {

			// log('Ps' + 'ss, hac' + 'kers! The' + 're\'s not' + 'hing inte' + 'resting :' + ')');

			/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Events___default.a.pub('rl.bootstart');

			var mobile = /* harmony import */__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default.a.appSettingsGet('mobile'),
			    ssm = __webpack_require__(/*! ssm */ 85),
			    ko = __webpack_require__(/*! ko */ 1);

			ko.components.register('SaveTrigger', __webpack_require__(/*! Component/SaveTrigger */ 72));
			ko.components.register('Input', __webpack_require__(/*! Component/Input */ 69));
			ko.components.register('Select', __webpack_require__(/*! Component/Select */ 74));
			ko.components.register('Radio', __webpack_require__(/*! Component/Radio */ 71));
			ko.components.register('TextArea', __webpack_require__(/*! Component/TextArea */ 75));

			ko.components.register('x-script', __webpack_require__(/*! Component/Script */ 73));
			//		ko.components.register('svg-icon', require('Component/SvgIcon'));

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_7_Storage_Settings___default.a.appSettingsGet('materialDesign') && /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["bAnimationSupported"]) {
				ko.components.register('Checkbox', __webpack_require__(/*! Component/MaterialDesign/Checkbox */ 70));
				ko.components.register('CheckboxSimple', __webpack_require__(/*! Component/Checkbox */ 36));
			} else {
				//			ko.components.register('Checkbox', require('Component/Classic/Checkbox'));
				//			ko.components.register('CheckboxSimple', require('Component/Classic/Checkbox'));
				ko.components.register('Checkbox', __webpack_require__(/*! Component/Checkbox */ 36));
				ko.components.register('CheckboxSimple', __webpack_require__(/*! Component/Checkbox */ 36));
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Translator___default.a.initOnStartOrLangChange(/* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Translator___default.a.initNotificationLanguage, /* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Translator___default.a);

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["windowResizeCallback"], 1000);

			/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Events___default.a.sub('ssm.mobile-enter', function () {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["leftPanelDisabled"].bind()(true);
			});

			/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Events___default.a.sub('ssm.mobile-leave', function () {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["leftPanelDisabled"].bind()(false);
			});

			if (!mobile) {
				ssm.addState({
					id: 'mobile',
					maxWidth: 767,
					onEnter: function onEnter() {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].addClass('ssm-state-mobile');
						/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Events___default.a.pub('ssm.mobile-enter');
					},
					onLeave: function onLeave() {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].removeClass('ssm-state-mobile');
						/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Events___default.a.pub('ssm.mobile-leave');
					}
				});

				ssm.addState({
					id: 'tablet',
					minWidth: 768,
					maxWidth: 999,
					onEnter: function onEnter() {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].addClass('ssm-state-tablet');
					},
					onLeave: function onLeave() {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].removeClass('ssm-state-tablet');
					}
				});

				ssm.addState({
					id: 'desktop',
					minWidth: 1000,
					maxWidth: 1400,
					onEnter: function onEnter() {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].addClass('ssm-state-desktop');
					},
					onLeave: function onLeave() {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].removeClass('ssm-state-desktop');
					}
				});

				ssm.addState({
					id: 'desktop-large',
					minWidth: 1400,
					onEnter: function onEnter() {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].addClass('ssm-state-desktop-large');
					},
					onLeave: function onLeave() {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].removeClass('ssm-state-desktop-large');
					}
				});
			} else {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].addClass('ssm-state-mobile').addClass('rl-mobile');
				/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Events___default.a.pub('ssm.mobile-enter');
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["leftPanelDisabled"].subscribe(function (bValue) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].toggleClass('rl-left-panel-disabled', bValue);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].toggleClass('rl-left-panel-enabled', !bValue);
			});

			/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["leftPanelType"].subscribe(function (sValue) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].toggleClass('rl-left-panel-none', 'none' === sValue);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].toggleClass('rl-left-panel-short', 'short' === sValue);
			});

			/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["leftPanelDisabled"].valueHasMutated();

			ssm.ready();

			__webpack_require__(/*! Stores/Language */ 38).populate();
			__webpack_require__(/*! Stores/Theme */ 41).populate();
			__webpack_require__(/*! Stores/Social */ 33).populate();
		};

		return AbstractApp;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_8_Knoin_AbstractBoot__["a"]);


	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return AbstractApp; }});/* unused harmony export default */

/***/ },
/* 66 */,
/* 67 */
/*!*****************************!*\
  !*** ./dev/Common/Mime.jsx ***!
  \*****************************/
/***/ function(module, exports) {

	
	/* eslint key-spacing: 0 */
	/* eslint quote-props: 0 */

	module.exports = {
		'eml': 'message/rfc822',
		'mime': 'message/rfc822',
		'txt': 'text/plain',
		'text': 'text/plain',
		'def': 'text/plain',
		'list': 'text/plain',
		'in': 'text/plain',
		'ini': 'text/plain',
		'log': 'text/plain',
		'sql': 'text/plain',
		'cfg': 'text/plain',
		'conf': 'text/plain',
		'asc': 'text/plain',
		'rtx': 'text/richtext',
		'vcard': 'text/vcard',
		'vcf': 'text/vcard',
		'htm': 'text/html',
		'html': 'text/html',
		'csv': 'text/csv',
		'ics': 'text/calendar',
		'ifb': 'text/calendar',
		'xml': 'text/xml',
		'json': 'application/json',
		'swf': 'application/x-shockwave-flash',
		'hlp': 'application/winhlp',
		'wgt': 'application/widget',
		'chm': 'application/vnd.ms-htmlhelp',
		'p10': 'application/pkcs10',
		'p7c': 'application/pkcs7-mime',
		'p7m': 'application/pkcs7-mime',
		'p7s': 'application/pkcs7-signature',
		'torrent': 'application/x-bittorrent',

		// scripts
		'js': 'application/javascript',
		'pl': 'text/perl',
		'css': 'text/css',
		'asp': 'text/asp',
		'php': 'application/x-httpd-php',
		'php3': 'application/x-httpd-php',
		'php4': 'application/x-httpd-php',
		'php5': 'application/x-httpd-php',
		'phtml': 'application/x-httpd-php',

		// images
		'png': 'image/png',
		'jpg': 'image/jpeg',
		'jpeg': 'image/jpeg',
		'jpe': 'image/jpeg',
		'jfif': 'image/jpeg',
		'gif': 'image/gif',
		'bmp': 'image/bmp',
		'cgm': 'image/cgm',
		'ief': 'image/ief',
		'ico': 'image/x-icon',
		'tif': 'image/tiff',
		'tiff': 'image/tiff',
		'svg': 'image/svg+xml',
		'svgz': 'image/svg+xml',
		'djv': 'image/vnd.djvu',
		'djvu': 'image/vnd.djvu',
		'webp': 'image/webp',

		// archives
		'zip': 'application/zip',
		'7z': 'application/x-7z-compressed',
		'rar': 'application/x-rar-compressed',
		'exe': 'application/x-msdownload',
		'dll': 'application/x-msdownload',
		'scr': 'application/x-msdownload',
		'com': 'application/x-msdownload',
		'bat': 'application/x-msdownload',
		'msi': 'application/x-msdownload',
		'cab': 'application/vnd.ms-cab-compressed',
		'gz': 'application/x-gzip',
		'tgz': 'application/x-gzip',
		'bz': 'application/x-bzip',
		'bz2': 'application/x-bzip2',
		'deb': 'application/x-debian-package',

		// fonts
		'psf': 'application/x-font-linux-psf',
		'otf': 'application/x-font-otf',
		'pcf': 'application/x-font-pcf',
		'snf': 'application/x-font-snf',
		'ttf': 'application/x-font-ttf',
		'ttc': 'application/x-font-ttf',

		// audio
		'mp3': 'audio/mpeg',
		'amr': 'audio/amr',
		'aac': 'audio/x-aac',
		'aif': 'audio/x-aiff',
		'aifc': 'audio/x-aiff',
		'aiff': 'audio/x-aiff',
		'wav': 'audio/x-wav',
		'wma': 'audio/x-ms-wma',
		'wax': 'audio/x-ms-wax',
		'midi': 'audio/midi',
		'mp4a': 'audio/mp4',
		'ogg': 'audio/ogg',
		'weba': 'audio/webm',
		'ra': 'audio/x-pn-realaudio',
		'ram': 'audio/x-pn-realaudio',
		'rmp': 'audio/x-pn-realaudio-plugin',
		'm3u': 'audio/x-mpegurl',

		// video
		'flv': 'video/x-flv',
		'qt': 'video/quicktime',
		'mov': 'video/quicktime',
		'wmv': 'video/windows-media',
		'avi': 'video/x-msvideo',
		'mpg': 'video/mpeg',
		'mpeg': 'video/mpeg',
		'mpe': 'video/mpeg',
		'm1v': 'video/mpeg',
		'm2v': 'video/mpeg',
		'3gp': 'video/3gpp',
		'3g2': 'video/3gpp2',
		'h261': 'video/h261',
		'h263': 'video/h263',
		'h264': 'video/h264',
		'jpgv': 'video/jpgv',
		'mp4': 'video/mp4',
		'mp4v': 'video/mp4',
		'mpg4': 'video/mp4',
		'ogv': 'video/ogg',
		'webm': 'video/webm',
		'm4v': 'video/x-m4v',
		'asf': 'video/x-ms-asf',
		'asx': 'video/x-ms-asf',
		'wm': 'video/x-ms-wm',
		'wmx': 'video/x-ms-wmx',
		'wvx': 'video/x-ms-wvx',
		'movie': 'video/x-sgi-movie',

		// adobe
		'pdf': 'application/pdf',
		'psd': 'image/vnd.adobe.photoshop',
		'ai': 'application/postscript',
		'eps': 'application/postscript',
		'ps': 'application/postscript',

		// ms office
		'doc': 'application/msword',
		'dot': 'application/msword',
		'rtf': 'application/rtf',
		'xls': 'application/vnd.ms-excel',
		'ppt': 'application/vnd.ms-powerpoint',
		'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		'dotx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
		'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',

		// open office
		'odt': 'application/vnd.oasis.opendocument.text',
		'ods': 'application/vnd.oasis.opendocument.spreadsheet'
	};

/***/ },
/* 68 */
/*!****************************************!*\
  !*** ./dev/Component/AbstracRadio.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __WEBPACK_IMPORTED_MODULE_1_ko__ && __WEBPACK_IMPORTED_MODULE_1_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 15);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






	var AbstracRadio = function (_AbstractComponent) {
		_inherits(AbstracRadio, _AbstractComponent);

		/**
	  * @param {Object} params
	  */

		function AbstracRadio(params) {
			_classCallCheck(this, AbstracRadio);

			var _this = _possibleConstructorReturn(this, _AbstractComponent.call(this));

			_this.values = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observableArray([]);

			_this.value = params.value;
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["isUnd"].bind()(_this.value) || !_this.value.subscribe) {
				_this.value = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');
			}

			_this.inline = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["isUnd"].bind()(params.inline) ? false : params.inline;
			_this.readOnly = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["isUnd"].bind()(params.readOnly) ? false : !!params.readOnly;

			if (params.values) {
				_this.values(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].map(params.values, function (label, value) {
					return { label: label, value: value };
				}));
			}

			_this.click = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].bind(_this.click, _this);
			return _this;
		}

		AbstracRadio.prototype.click = function click(value) {
			if (!this.readOnly && value) {
				this.value(value.value);
			}
		};

		return AbstracRadio;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Component_Abstract__["a"]);


	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return AbstracRadio; }});/* unused harmony export default */

/***/ },
/* 69 */
/*!*********************************!*\
  !*** ./dev/Component/Input.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 15);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Component_AbstractInput__ = __webpack_require__(/*! Component/AbstractInput */ 35);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




	var InputComponent = function (_AbstractInput) {
	  _inherits(InputComponent, _AbstractInput);

	  function InputComponent() {
	    _classCallCheck(this, InputComponent);

	    return _possibleConstructorReturn(this, _AbstractInput.apply(this, arguments));
	  }

	  return InputComponent;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Component_AbstractInput__["a"]);

	module.exports = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_Component_Abstract__["b"].bind()(InputComponent, 'InputComponent');

/***/ },
/* 70 */
/*!***************************************************!*\
  !*** ./dev/Component/MaterialDesign/Checkbox.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __WEBPACK_IMPORTED_MODULE_1_ko__ && __WEBPACK_IMPORTED_MODULE_1_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 15);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Component_AbstracCheckbox__ = __webpack_require__(/*! Component/AbstracCheckbox */ 45);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






	var CheckboxMaterialDesignComponent = function (_AbstracCheckbox) {
		_inherits(CheckboxMaterialDesignComponent, _AbstracCheckbox);

		/**
	  * @param {Object} params
	  */

		function CheckboxMaterialDesignComponent(params) {
			_classCallCheck(this, CheckboxMaterialDesignComponent);

			var _this = _possibleConstructorReturn(this, _AbstracCheckbox.call(this, params));

			_this.animationBox = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false).extend({ falseTimeout: 200 });
			_this.animationCheckmark = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false).extend({ falseTimeout: 200 });

			_this.animationBoxSetTrue = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].bind(_this.animationBoxSetTrue, _this);
			_this.animationCheckmarkSetTrue = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].bind(_this.animationCheckmarkSetTrue, _this);

			_this.disposable.push(_this.value.subscribe(function (value) {
				_this.triggerAnimation(value);
			}, _this));
			return _this;
		}

		CheckboxMaterialDesignComponent.prototype.animationBoxSetTrue = function animationBoxSetTrue() {
			this.animationBox(true);
		};

		CheckboxMaterialDesignComponent.prototype.animationCheckmarkSetTrue = function animationCheckmarkSetTrue() {
			this.animationCheckmark(true);
		};

		CheckboxMaterialDesignComponent.prototype.triggerAnimation = function triggerAnimation(box) {
			if (box) {
				this.animationBoxSetTrue();
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(this.animationCheckmarkSetTrue, 200);
			} else {
				this.animationCheckmarkSetTrue();
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(this.animationBoxSetTrue, 200);
			}
		};

		return CheckboxMaterialDesignComponent;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Component_AbstracCheckbox__["a"]);

	module.exports = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Component_Abstract__["b"].bind()(CheckboxMaterialDesignComponent, 'CheckboxMaterialDesignComponent');

/***/ },
/* 71 */
/*!*********************************!*\
  !*** ./dev/Component/Radio.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 15);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Component_AbstracRadio__ = __webpack_require__(/*! Component/AbstracRadio */ 68);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




	var RadioComponent = function (_AbstracRadio) {
	  _inherits(RadioComponent, _AbstracRadio);

	  function RadioComponent() {
	    _classCallCheck(this, RadioComponent);

	    return _possibleConstructorReturn(this, _AbstracRadio.apply(this, arguments));
	  }

	  return RadioComponent;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Component_AbstracRadio__["a"]);

	module.exports = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_Component_Abstract__["b"].bind()(RadioComponent, 'RadioComponent');

/***/ },
/* 72 */
/*!***************************************!*\
  !*** ./dev/Component/SaveTrigger.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 15);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





	var SaveTriggerComponent = function (_AbstractComponent) {
		_inherits(SaveTriggerComponent, _AbstractComponent);

		/**
	  * @param {Object} params
	  */

		function SaveTriggerComponent(params) {
			_classCallCheck(this, SaveTriggerComponent);

			var _this = _possibleConstructorReturn(this, _AbstractComponent.call(this));

			_this.element = params.element || null;
			_this.value = params.value && params.value.subscribe ? params.value : null;

			if (_this.element) {
				if (_this.value) {
					_this.element.css('display', 'inline-block');

					if (params.verticalAlign) {
						_this.element.css('vertical-align', params.verticalAlign);
					}

					_this.setState(_this.value());

					_this.disposable.push(_this.value.subscribe(_this.setState, _this));
				} else {
					_this.element.hide();
				}
			}
			return _this;
		}

		SaveTriggerComponent.prototype.setState = function setState(value) {

			switch (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_Common_Utils__["pInt"].bind()(value)) {
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["SaveSettingsStep"].TrueResult:
					this.element.find('.animated,.error').hide().removeClass('visible').end().find('.success').show().addClass('visible');
					break;
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["SaveSettingsStep"].FalseResult:
					this.element.find('.animated,.success').hide().removeClass('visible').end().find('.error').show().addClass('visible');
					break;
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["SaveSettingsStep"].Animate:
					this.element.find('.error,.success').hide().removeClass('visible').end().find('.animated').show().addClass('visible');
					break;
				default:
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["SaveSettingsStep"].Idle:
					this.element.find('.animated').hide().end().find('.error,.success').removeClass('visible');
					break;
			}
		};

		return SaveTriggerComponent;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Component_Abstract__["a"]);

	module.exports = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Component_Abstract__["b"].bind()(SaveTriggerComponent, 'SaveTriggerComponent');

/***/ },
/* 73 */
/*!**********************************!*\
  !*** ./dev/Component/Script.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 15);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




	var ScriptComponent = function (_AbstractComponent) {
		_inherits(ScriptComponent, _AbstractComponent);

		/**
	  * @param {Object} params
	  */

		function ScriptComponent(params) {
			_classCallCheck(this, ScriptComponent);

			var _this = _possibleConstructorReturn(this, _AbstractComponent.call(this));

			if (params.component && params.component.templateNodes && params.element && params.element[0] && params.element[0].outerHTML) {
				var script = params.element[0].outerHTML;
				script = !script ? '' : script.replace(/<x-script/i, '<script').replace(/<b><\/b><\/x-script>/i, '</script>');

				if (script) {
					params.element.text('');
					params.element.replaceWith(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(script).text(params.component.templateNodes[0] && params.component.templateNodes[0].nodeValue ? params.component.templateNodes[0].nodeValue : ''));
				} else {
					params.element.remove();
				}
			}
			return _this;
		}

		return ScriptComponent;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Component_Abstract__["a"]);

	module.exports = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Component_Abstract__["b"].bind()(ScriptComponent, 'ScriptComponent');

/***/ },
/* 74 */
/*!**********************************!*\
  !*** ./dev/Component/Select.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 5);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Common_Translator___default = __WEBPACK_IMPORTED_MODULE_0_Common_Translator__ && __WEBPACK_IMPORTED_MODULE_0_Common_Translator__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_Common_Translator__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_Common_Translator__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_Common_Translator___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_Common_Translator___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 15);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Component_AbstractInput__ = __webpack_require__(/*! Component/AbstractInput */ 35);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






	var SelectComponent = function (_AbstractInput) {
			_inherits(SelectComponent, _AbstractInput);

			/**
	   * @param {Object} params
	   */

			function SelectComponent(params) {
					_classCallCheck(this, SelectComponent);

					var _this = _possibleConstructorReturn(this, _AbstractInput.call(this, params));

					_this.options = params.options || '';

					_this.optionsText = params.optionsText || null;
					_this.optionsValue = params.optionsValue || null;
					_this.optionsCaption = params.optionsCaption || null;

					if (_this.optionsCaption) {
							_this.optionsCaption = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_Common_Translator___default.a.i18n(_this.optionsCaption);
					}

					_this.defautOptionsAfterRender = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["defautOptionsAfterRender"];
					return _this;
			}

			return SelectComponent;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Component_AbstractInput__["a"]);

	module.exports = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Component_Abstract__["b"].bind()(SelectComponent, 'SelectComponent');

/***/ },
/* 75 */
/*!************************************!*\
  !*** ./dev/Component/TextArea.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 15);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Component_AbstractInput__ = __webpack_require__(/*! Component/AbstractInput */ 35);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





	var TextAreaComponent = function (_AbstractInput) {
		_inherits(TextAreaComponent, _AbstractInput);

		/**
	  * @param {Object} params
	  */

		function TextAreaComponent(params) {
			_classCallCheck(this, TextAreaComponent);

			var _this = _possibleConstructorReturn(this, _AbstractInput.call(this, params));

			_this.rows = params.rows || 5;
			_this.spellcheck = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_Common_Utils__["isUnd"].bind()(params.spellcheck) ? false : !!params.spellcheck;
			return _this;
		}

		return TextAreaComponent;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Component_AbstractInput__["a"]);

	module.exports = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Component_Abstract__["b"].bind()(TextAreaComponent, 'TextAreaComponent');

/***/ },
/* 76 */
/*!************************************!*\
  !*** ./dev/Knoin/AbstractBoot.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AbstractBoot = function () {
		function AbstractBoot() {
			_classCallCheck(this, AbstractBoot);
		}

		AbstractBoot.prototype.bootstart = function bootstart() {
			// eslint-disable-line no-empty
		};

		return AbstractBoot;
	}();


	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return AbstractBoot; }});/* unused harmony export default */

/***/ },
/* 77 */,
/* 78 */
/*!************************************!*\
  !*** ./dev/Stores/AbstractApp.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ko___default = __WEBPACK_IMPORTED_MODULE_0_ko__ && __WEBPACK_IMPORTED_MODULE_0_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default = __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__ && __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default });
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





	var AbstractAppStore = function () {
			function AbstractAppStore() {
					_classCallCheck(this, AbstractAppStore);

					this.allowLanguagesOnSettings = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(true);
					this.allowLanguagesOnLogin = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(true);

					this.interfaceAnimation = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(true);

					this.interfaceAnimation.subscribe(function (bValue) {
							var bAnim = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["bMobileDevice"] || !bValue;
							/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["$html"].toggleClass('rl-anim', !bAnim).toggleClass('no-rl-anim', bAnim);
					});

					this.interfaceAnimation.valueHasMutated();

					this.prem = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(false);
					this.community = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(true);
			}

			AbstractAppStore.prototype.populate = function populate() {
					this.allowLanguagesOnLogin(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.settingsGet('AllowLanguagesOnLogin'));
					this.allowLanguagesOnSettings(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.settingsGet('AllowLanguagesOnSettings'));

					this.interfaceAnimation(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.settingsGet('InterfaceAnimation'));

					this.prem(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.settingsGet('PremType'));
					this.community(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Storage_Settings___default.a.settingsGet('Community'));
			};

			return AbstractAppStore;
	}();


	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return AbstractAppStore; }});/* unused harmony export default */

/***/ },
/* 79 */,
/* 80 */
/*!************************************!*\
  !*** external "window.Autolinker" ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = window.Autolinker;

/***/ },
/* 81 */
/*!***********************************!*\
  !*** external "window.JSEncrypt" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = window.JSEncrypt;

/***/ },
/* 82 */,
/* 83 */
/*!********************************!*\
  !*** external "window.hasher" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = window.hasher;

/***/ },
/* 84 */
/*!********************************!*\
  !*** external "window.moment" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = window.moment;

/***/ },
/* 85 */
/*!*****************************!*\
  !*** external "window.ssm" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = window.ssm;

/***/ },
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/*!**********************************!*\
  !*** ./dev/Stores/Admin/Core.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1)
		;

		/**
		 * @constructor
		 */
		function CoreAdminStore()
		{
			this.coreReal = ko.observable(true);
			this.coreChannel = ko.observable('stable');
			this.coreType = ko.observable('stable');
			this.coreUpdatable = ko.observable(true);
			this.coreAccess = ko.observable(true);
			this.coreWarning = ko.observable(false);
			this.coreChecking = ko.observable(false).extend({'throttle': 100});
			this.coreUpdating = ko.observable(false).extend({'throttle': 100});
			this.coreVersion = ko.observable('');
			this.coreRemoteVersion = ko.observable('');
			this.coreRemoteRelease = ko.observable('');
			this.coreVersionCompare = ko.observable(-2);
		}

		module.exports = new CoreAdminStore();

	}());


/***/ },
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/*!**********************************!*\
  !*** ./dev/View/Popup/Domain.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),

			Translator = __webpack_require__(/*! Common/Translator */ 5),

			CapaAdminStore = __webpack_require__(/*! Stores/Admin/Capa */ 51),

			Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function DomainPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsDomain');

			this.edit = ko.observable(false);
			this.saving = ko.observable(false);
			this.savingError = ko.observable('');
			this.page = ko.observable('main');
			this.sieveSettings = ko.observable(false);

			this.testing = ko.observable(false);
			this.testingDone = ko.observable(false);
			this.testingImapError = ko.observable(false);
			this.testingSieveError = ko.observable(false);
			this.testingSmtpError = ko.observable(false);
			this.testingImapErrorDesc = ko.observable('');
			this.testingSieveErrorDesc = ko.observable('');
			this.testingSmtpErrorDesc = ko.observable('');

			this.testingImapError.subscribe(function (bValue) {
				if (!bValue)
				{
					this.testingImapErrorDesc('');
				}
			}, this);

			this.testingSieveError.subscribe(function (bValue) {
				if (!bValue)
				{
					this.testingSieveErrorDesc('');
				}
			}, this);

			this.testingSmtpError.subscribe(function (bValue) {
				if (!bValue)
				{
					this.testingSmtpErrorDesc('');
				}
			}, this);

			this.imapServerFocus = ko.observable(false);
			this.sieveServerFocus = ko.observable(false);
			this.smtpServerFocus = ko.observable(false);

			this.name = ko.observable('');
			this.name.focused = ko.observable(false);

			this.imapServer = ko.observable('');
			this.imapPort = ko.observable('' + Consts.IMAP_DEFAULT_PORT);
			this.imapSecure = ko.observable(Enums.ServerSecure.None);
			this.imapShortLogin = ko.observable(false);
			this.useSieve = ko.observable(false);
			this.sieveAllowRaw = ko.observable(false);
			this.sieveServer = ko.observable('');
			this.sievePort = ko.observable('' + Consts.SIEVE_DEFAULT_PORT);
			this.sieveSecure = ko.observable(Enums.ServerSecure.None);
			this.smtpServer = ko.observable('');
			this.smtpPort = ko.observable('' + Consts.SMTP_DEFAULT_PORT);
			this.smtpSecure = ko.observable(Enums.ServerSecure.None);
			this.smtpShortLogin = ko.observable(false);
			this.smtpAuth = ko.observable(true);
			this.smtpPhpMail = ko.observable(false);
			this.whiteList = ko.observable('');

			this.enableSmartPorts = ko.observable(false);

			this.allowSieve = ko.computed(function () {
				return CapaAdminStore.filters() && CapaAdminStore.sieve();
			}, this);

			this.headerText = ko.computed(function () {
				var sName = this.name();
				return this.edit() ? Translator.i18n('POPUPS_DOMAIN/TITLE_EDIT_DOMAIN', {'NAME': sName}) :
					('' === sName ? Translator.i18n('POPUPS_DOMAIN/TITLE_ADD_DOMAIN') :
						Translator.i18n('POPUPS_DOMAIN/TITLE_ADD_DOMAIN_WITH_NAME', {'NAME': sName}));
			}, this);

			this.domainDesc = ko.computed(function () {
				var sName = this.name();
				return !this.edit() && sName ? Translator.i18n('POPUPS_DOMAIN/NEW_DOMAIN_DESC', {'NAME': '*@' + sName}) : '';
			}, this);

			this.domainIsComputed = ko.computed(function () {

				var
					bPhpMail = this.smtpPhpMail(),
					bAllowSieve = this.allowSieve(),
					bUseSieve = this.useSieve()
				;

				return '' !== this.name() &&
					'' !== this.imapServer() &&
					'' !== this.imapPort() &&
					(bAllowSieve && bUseSieve ? ('' !== this.sieveServer() && '' !== this.sievePort()) : true) &&
					(('' !== this.smtpServer() && '' !== this.smtpPort()) || bPhpMail);

			}, this);

			this.canBeTested = ko.computed(function () {
				return !this.testing() && this.domainIsComputed();
			}, this);

			this.canBeSaved = ko.computed(function () {
				return !this.saving() && this.domainIsComputed();
			}, this);

			this.createOrAddCommand = Utils.createCommand(this, function () {
				this.saving(true);
				Remote.createOrUpdateDomain(
					_.bind(this.onDomainCreateOrSaveResponse, this),
					!this.edit(),
					this.name(),

					this.imapServer(),
					Utils.pInt(this.imapPort()),
					this.imapSecure(),
					this.imapShortLogin(),

					this.useSieve(),
					this.sieveAllowRaw(),
					this.sieveServer(),
					Utils.pInt(this.sievePort()),
					this.sieveSecure(),

					this.smtpServer(),
					Utils.pInt(this.smtpPort()),
					this.smtpSecure(),
					this.smtpShortLogin(),
					this.smtpAuth(),
					this.smtpPhpMail(),

					this.whiteList()
				);
			}, this.canBeSaved);

			this.testConnectionCommand = Utils.createCommand(this, function () {

				this.page('main');

				this.testingDone(false);
				this.testingImapError(false);
				this.testingSieveError(false);
				this.testingSmtpError(false);
				this.testing(true);

				Remote.testConnectionForDomain(
					_.bind(this.onTestConnectionResponse, this),
					this.name(),

					this.imapServer(),
					Utils.pInt(this.imapPort()),
					this.imapSecure(),

					this.useSieve(),
					this.sieveServer(),
					Utils.pInt(this.sievePort()),
					this.sieveSecure(),

					this.smtpServer(),
					Utils.pInt(this.smtpPort()),
					this.smtpSecure(),
					this.smtpAuth(),
					this.smtpPhpMail()
				);
			}, this.canBeTested);

			this.whiteListCommand = Utils.createCommand(this, function () {
				this.page('white-list');
			});

			this.backCommand = Utils.createCommand(this, function () {
				this.page('main');
			});

			this.sieveCommand = Utils.createCommand(this, function () {
				this.sieveSettings(!this.sieveSettings());
				this.clearTesting();
			});

			this.page.subscribe(function () {
				this.sieveSettings(false);
			}, this);

			// smart form improvements
			this.imapServerFocus.subscribe(function (bValue) {
				if (bValue && '' !== this.name() && '' === this.imapServer())
				{
					this.imapServer(this.name().replace(/[.]?[*][.]?/g, ''));
				}
			}, this);

			this.sieveServerFocus.subscribe(function (bValue) {
				if (bValue && '' !== this.imapServer() && '' === this.sieveServer())
				{
					this.sieveServer(this.imapServer());
				}
			}, this);

			this.smtpServerFocus.subscribe(function (bValue) {
				if (bValue && '' !== this.imapServer() && '' === this.smtpServer())
				{
					this.smtpServer(this.imapServer().replace(/imap/ig, 'smtp'));
				}
			}, this);

			this.imapSecure.subscribe(function (sValue) {
				if (this.enableSmartPorts())
				{
					var iPort = Utils.pInt(this.imapPort());
					sValue = Utils.pString(sValue);
					switch (sValue)
					{
						case '0':
							if (993 === iPort)
							{
								this.imapPort('143');
							}
							break;
						case '1':
							if (143 === iPort)
							{
								this.imapPort('993');
							}
							break;
					}
				}
			}, this);

			this.smtpSecure.subscribe(function (sValue) {
				if (this.enableSmartPorts())
				{
					var iPort = Utils.pInt(this.smtpPort());
					sValue = Utils.pString(sValue);
					switch (sValue)
					{
						case '0':
							if (465 === iPort || 587 === iPort)
							{
								this.smtpPort('25');
							}
							break;
						case '1':
							if (25 === iPort || 587 === iPort)
							{
								this.smtpPort('465');
							}
							break;
						case '2':
							if (25 === iPort || 465 === iPort)
							{
								this.smtpPort('587');
							}
							break;
					}
				}
			}, this);

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/Domain', 'PopupsDomainViewModel'], DomainPopupView);
		_.extend(DomainPopupView.prototype, AbstractView.prototype);

		DomainPopupView.prototype.onTestConnectionResponse = function (sResult, oData)
		{
			this.testing(false);
			if (Enums.StorageResultType.Success === sResult && oData.Result)
			{
				var
					bImap = false,
					bSieve = false
				;

				this.testingDone(true);
				this.testingImapError(true !== oData.Result.Imap);
				this.testingSieveError(true !== oData.Result.Sieve);
				this.testingSmtpError(true !== oData.Result.Smtp);

				if (this.testingImapError() && oData.Result.Imap)
				{
					bImap = true;
					this.testingImapErrorDesc('');
					this.testingImapErrorDesc(oData.Result.Imap);
				}

				if (this.testingSieveError() && oData.Result.Sieve)
				{
					bSieve = true;
					this.testingSieveErrorDesc('');
					this.testingSieveErrorDesc(oData.Result.Sieve);
				}

				if (this.testingSmtpError() && oData.Result.Smtp)
				{
					this.testingSmtpErrorDesc('');
					this.testingSmtpErrorDesc(oData.Result.Smtp);
				}

				if (this.sieveSettings())
				{
					if (!bSieve && bImap)
					{
						this.sieveSettings(false);
					}
				}
				else
				{
					if (bSieve && !bImap)
					{
						this.sieveSettings(true);
					}
				}
			}
			else
			{
				this.testingImapError(true);
				this.testingSieveError(true);
				this.testingSmtpError(true);
				this.sieveSettings(false);
			}
		};

		DomainPopupView.prototype.onDomainCreateOrSaveResponse = function (sResult, oData)
		{
			this.saving(false);
			if (Enums.StorageResultType.Success === sResult && oData)
			{
				if (oData.Result)
				{
					__webpack_require__(/*! App/Admin */ 20).default.reloadDomainList();
					this.closeCommand();
				}
				else if (Enums.Notification.DomainAlreadyExists === oData.ErrorCode)
				{
					this.savingError(Translator.i18n('ERRORS/DOMAIN_ALREADY_EXISTS'));
				}
			}
			else
			{
				this.savingError(Translator.i18n('ERRORS/UNKNOWN_ERROR'));
			}
		};

		DomainPopupView.prototype.clearTesting = function ()
		{
			this.testing(false);
			this.testingDone(false);
			this.testingImapError(false);
			this.testingSieveError(false);
			this.testingSmtpError(false);
		};

		DomainPopupView.prototype.onHide = function ()
		{
			this.page('main');
			this.sieveSettings(false);
		};


		DomainPopupView.prototype.onShow = function (oDomain)
		{
			this.saving(false);

			this.page('main');
			this.sieveSettings(false);

			this.clearTesting();

			this.clearForm();
			if (oDomain)
			{
				this.enableSmartPorts(false);

				this.edit(true);

				this.name(Utils.trim(oDomain.Name));
				this.imapServer(Utils.trim(oDomain.IncHost));
				this.imapPort('' + Utils.pInt(oDomain.IncPort));
				this.imapSecure(Utils.trim(oDomain.IncSecure));
				this.imapShortLogin(!!oDomain.IncShortLogin);
				this.useSieve(!!oDomain.UseSieve);
				this.sieveAllowRaw(!!oDomain.SieveAllowRaw);
				this.sieveServer(Utils.trim(oDomain.SieveHost));
				this.sievePort('' + Utils.pInt(oDomain.SievePort));
				this.sieveSecure(Utils.trim(oDomain.SieveSecure));
				this.smtpServer(Utils.trim(oDomain.OutHost));
				this.smtpPort('' + Utils.pInt(oDomain.OutPort));
				this.smtpSecure(Utils.trim(oDomain.OutSecure));
				this.smtpShortLogin(!!oDomain.OutShortLogin);
				this.smtpAuth(!!oDomain.OutAuth);
				this.smtpPhpMail(!!oDomain.OutUsePhpMail);
				this.whiteList(Utils.trim(oDomain.WhiteList));

				this.enableSmartPorts(true);
			}
		};

		DomainPopupView.prototype.onShowWithDelay = function ()
		{
			if ('' === this.name() && !Globals.bMobile)
			{
				this.name.focused(true);
			}
		};

		DomainPopupView.prototype.clearForm = function ()
		{
			this.edit(false);

			this.page('main');
			this.sieveSettings(false);

			this.enableSmartPorts(false);

			this.savingError('');

			this.name('');
			this.name.focused(false);

			this.imapServer('');
			this.imapPort('' + Consts.IMAP_DEFAULT_PORT);
			this.imapSecure(Enums.ServerSecure.None);
			this.imapShortLogin(false);

			this.useSieve(false);
			this.sieveAllowRaw(false);
			this.sieveServer('');
			this.sievePort('' + Consts.SIEVE_DEFAULT_PORT);
			this.sieveSecure(Enums.ServerSecure.None);

			this.smtpServer('');
			this.smtpPort('' + Consts.SMTP_DEFAULT_PORT);
			this.smtpSecure(Enums.ServerSecure.None);
			this.smtpShortLogin(false);
			this.smtpAuth(true);
			this.smtpPhpMail(false);

			this.whiteList('');
			this.enableSmartPorts(true);
		};

		module.exports = DomainPopupView;

	}());

/***/ },
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/*!***********************************!*\
  !*** ./dev/Screen/Admin/Login.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			AbstractScreen = __webpack_require__(/*! Knoin/AbstractScreen */ 37)
		;

		/**
		 * @constructor
		 * @extends AbstractScreen
		 */
		function LoginAdminScreen()
		{
			AbstractScreen.call(this, 'login', [
				__webpack_require__(/*! View/Admin/Login */ 147)
			]);
		}

		_.extend(LoginAdminScreen.prototype, AbstractScreen.prototype);

		LoginAdminScreen.prototype.onShow = function ()
		{
			__webpack_require__(/*! App/Admin */ 20).default.setWindowTitle('');
		};

		module.exports = LoginAdminScreen;

	}());

/***/ },
/* 121 */
/*!**************************************!*\
  !*** ./dev/Screen/Admin/Settings.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/* global RL_COMMUNITY */

	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),

			Plugins = __webpack_require__(/*! Common/Plugins */ 22),

			AbstractSettings = __webpack_require__(/*! Screen/AbstractSettings */ 57)
		;

		/**
		 * @constructor
		 * @extends AbstractSettings
		 */
		function SettingsAdminScreen()
		{
			AbstractSettings.call(this, [
				__webpack_require__(/*! View/Admin/Settings/Menu */ 148),
				__webpack_require__(/*! View/Admin/Settings/Pane */ 149)
			]);
		}

		_.extend(SettingsAdminScreen.prototype, AbstractSettings.prototype);

		/**
		 * @param {Function=} fCallback
		 */
		SettingsAdminScreen.prototype.setupSettings = function (fCallback)
		{
			kn.addSettingsViewModel(__webpack_require__(/*! Settings/Admin/General */ 129),
				'AdminSettingsGeneral', 'TABS_LABELS/LABEL_GENERAL_NAME', 'general', true);

			kn.addSettingsViewModel(__webpack_require__(/*! Settings/Admin/Login */ 130),
				'AdminSettingsLogin', 'TABS_LABELS/LABEL_LOGIN_NAME', 'login');

			if (true)
			{
				kn.addSettingsViewModel(__webpack_require__(/*! Settings/Admin/Branding */ 126),
					'AdminSettingsBranding', 'TABS_LABELS/LABEL_BRANDING_NAME', 'branding');
			}
			else
			{
				kn.addSettingsViewModel(require('Settings/Admin/Prem/Branding'),
					'AdminSettingsBranding', 'TABS_LABELS/LABEL_BRANDING_NAME', 'branding');
			}

			kn.addSettingsViewModel(__webpack_require__(/*! Settings/Admin/Contacts */ 127),
				'AdminSettingsContacts', 'TABS_LABELS/LABEL_CONTACTS_NAME', 'contacts');

			kn.addSettingsViewModel(__webpack_require__(/*! Settings/Admin/Domains */ 128),
				'AdminSettingsDomains', 'TABS_LABELS/LABEL_DOMAINS_NAME', 'domains');

			kn.addSettingsViewModel(__webpack_require__(/*! Settings/Admin/Security */ 133),
				'AdminSettingsSecurity', 'TABS_LABELS/LABEL_SECURITY_NAME', 'security');

			kn.addSettingsViewModel(__webpack_require__(/*! Settings/Admin/Social */ 134),
				'AdminSettingsSocial', 'TABS_LABELS/LABEL_INTEGRATION_NAME', 'integrations');

			kn.addSettingsViewModel(__webpack_require__(/*! Settings/Admin/Plugins */ 132),
				'AdminSettingsPlugins', 'TABS_LABELS/LABEL_PLUGINS_NAME', 'plugins');

			kn.addSettingsViewModel(__webpack_require__(/*! Settings/Admin/Packages */ 131),
				'AdminSettingsPackages', 'TABS_LABELS/LABEL_PACKAGES_NAME', 'packages');

			if (false)
			{
				kn.addSettingsViewModel(require('Settings/Admin/Prem/Licensing'),
					'AdminSettingsLicensing', 'TABS_LABELS/LABEL_LICENSING_NAME', 'licensing');
			}

			kn.addSettingsViewModel(__webpack_require__(/*! Settings/Admin/About */ 125),
				'AdminSettingsAbout', 'TABS_LABELS/LABEL_ABOUT_NAME', 'about');

			Plugins.runSettingsViewModelHooks(true);

			if (fCallback)
			{
				fCallback();
			}
		};

		SettingsAdminScreen.prototype.onShow = function ()
		{
			__webpack_require__(/*! App/Admin */ 20).default.setWindowTitle('');
		};

		module.exports = SettingsAdminScreen;

	}());

/***/ },
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/*!*************************************!*\
  !*** ./dev/Settings/Admin/About.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/* global RL_COMMUNITY */

	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1),

			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			CoreStore = __webpack_require__(/*! Stores/Admin/Core */ 89),
			AppStore = __webpack_require__(/*! Stores/Admin/App */ 34)
		;

		/**
		 * @constructor
		 */
		function AboutAdminSettings()
		{
			this.version = ko.observable(Settings.appSettingsGet('version'));
			this.access = ko.observable(!!Settings.settingsGet('CoreAccess'));
			this.errorDesc = ko.observable('');

			this.coreReal = CoreStore.coreReal;
			this.coreChannel = CoreStore.coreChannel;
			this.coreType = CoreStore.coreType;
			this.coreUpdatable = CoreStore.coreUpdatable;
			this.coreAccess = CoreStore.coreAccess;
			this.coreChecking = CoreStore.coreChecking;
			this.coreUpdating = CoreStore.coreUpdating;
			this.coreWarning = CoreStore.coreWarning;
			this.coreVersion = CoreStore.coreVersion;
			this.coreRemoteVersion = CoreStore.coreRemoteVersion;
			this.coreRemoteRelease = CoreStore.coreRemoteRelease;
			this.coreVersionCompare = CoreStore.coreVersionCompare;

			this.community = true || AppStore.community();

			this.coreRemoteVersionHtmlDesc = ko.computed(function () {
				Translator.trigger();
				return Translator.i18n('TAB_ABOUT/HTML_NEW_VERSION', {'VERSION': this.coreRemoteVersion()});
			}, this);

			this.statusType = ko.computed(function () {

				var
					sType = '',
					iVersionCompare = this.coreVersionCompare(),
					bChecking = this.coreChecking(),
					bUpdating = this.coreUpdating(),
					bReal = this.coreReal()
				;

				if (bChecking)
				{
					sType = 'checking';
				}
				else if (bUpdating)
				{
					sType = 'updating';
				}
				else if (bReal && 0 === iVersionCompare)
				{
					sType = 'up-to-date';
				}
				else if (bReal && -1 === iVersionCompare)
				{
					sType = 'available';
				}
				else if (!bReal)
				{
					sType = 'error';
					this.errorDesc('Cannot access the repository at the moment.');
				}

				return sType;

			}, this);
		}

		AboutAdminSettings.prototype.onBuild = function ()
		{
			if (this.access() && !this.community)
			{
				__webpack_require__(/*! App/Admin */ 20).default.reloadCoreData();
			}
		};

		AboutAdminSettings.prototype.updateCoreData = function ()
		{
			if (!this.coreUpdating() && !this.community)
			{
				__webpack_require__(/*! App/Admin */ 20).default.updateCoreData();
			}
		};

		module.exports = AboutAdminSettings;

	}());

/***/ },
/* 126 */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Branding.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/* global RL_COMMUNITY */

	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5)
		;

		/**
		 * @constructor
		 */
		function BrandingAdminSettings()
		{
			var
				Enums = __webpack_require__(/*! Common/Enums */ 3),
				Settings = __webpack_require__(/*! Storage/Settings */ 8),
				AppStore = __webpack_require__(/*! Stores/Admin/App */ 34)
			;

			this.capa = AppStore.prem;

			this.title = ko.observable(Settings.settingsGet('Title'));
			this.title.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.loadingDesc = ko.observable(Settings.settingsGet('LoadingDescription'));
			this.loadingDesc.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.faviconUrl = ko.observable(Settings.settingsGet('FaviconUrl'));
			this.faviconUrl.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.loginLogo = ko.observable(Settings.settingsGet('LoginLogo') || '');
			this.loginLogo.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.loginBackground = ko.observable(Settings.settingsGet('LoginBackground') || '');
			this.loginBackground.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.userLogo = ko.observable(Settings.settingsGet('UserLogo') || '');
			this.userLogo.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.userLogoMessage = ko.observable(Settings.settingsGet('UserLogoMessage') || '');
			this.userLogoMessage.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.userIframeMessage = ko.observable(Settings.settingsGet('UserIframeMessage') || '');
			this.userIframeMessage.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.userLogoTitle = ko.observable(Settings.settingsGet('UserLogoTitle') || '');
			this.userLogoTitle.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.loginDescription = ko.observable(Settings.settingsGet('LoginDescription'));
			this.loginDescription.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.loginCss = ko.observable(Settings.settingsGet('LoginCss'));
			this.loginCss.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.userCss = ko.observable(Settings.settingsGet('UserCss'));
			this.userCss.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.welcomePageUrl = ko.observable(Settings.settingsGet('WelcomePageUrl'));
			this.welcomePageUrl.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.welcomePageDisplay = ko.observable(Settings.settingsGet('WelcomePageDisplay'));
			this.welcomePageDisplay.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.welcomePageDisplay.options = ko.computed(function () {
				Translator.trigger();
				return [
					{'optValue': 'none', 'optText': Translator.i18n('TAB_BRANDING/OPTION_WELCOME_PAGE_DISPLAY_NONE')},
					{'optValue': 'once', 'optText': Translator.i18n('TAB_BRANDING/OPTION_WELCOME_PAGE_DISPLAY_ONCE')},
					{'optValue': 'always', 'optText': Translator.i18n('TAB_BRANDING/OPTION_WELCOME_PAGE_DISPLAY_ALWAYS')}
				];
			});

			this.loginPowered = ko.observable(!!Settings.settingsGet('LoginPowered'));

			this.community = true || AppStore.community();
		}

		BrandingAdminSettings.prototype.onBuild = function ()
		{
			var
				self = this,
				Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19)
			;

			_.delay(function () {

				var
					f1 = Utils.settingsSaveHelperSimpleFunction(self.title.trigger, self),
					f2 = Utils.settingsSaveHelperSimpleFunction(self.loadingDesc.trigger, self),
					f3 = Utils.settingsSaveHelperSimpleFunction(self.faviconUrl.trigger, self)
				;

				self.title.subscribe(function (sValue) {
					Remote.saveAdminConfig(f1, {
						'Title': Utils.trim(sValue)
					});
				});

				self.loadingDesc.subscribe(function (sValue) {
					Remote.saveAdminConfig(f2, {
						'LoadingDescription': Utils.trim(sValue)
					});
				});

				self.faviconUrl.subscribe(function (sValue) {
					Remote.saveAdminConfig(f3, {
						'FaviconUrl': Utils.trim(sValue)
					});
				});

			}, 50);
		};

		module.exports = BrandingAdminSettings;

	}());

/***/ },
/* 127 */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Contacts.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),

			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Settings = __webpack_require__(/*! Storage/Settings */ 8)
		;

		/**
		 * @constructor
		 */
		function ContactsAdminSettings()
		{
			var
				Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19)
			;

			this.defautOptionsAfterRender = Utils.defautOptionsAfterRender;
			this.enableContacts = ko.observable(!!Settings.settingsGet('ContactsEnable'));
			this.contactsSharing = ko.observable(!!Settings.settingsGet('ContactsSharing'));
			this.contactsSync = ko.observable(!!Settings.settingsGet('ContactsSync'));

			var
				aTypes = ['sqlite', 'mysql', 'pgsql'],
				aSupportedTypes = [],
				getTypeName = function(sName) {
					switch (sName)
					{
						case 'sqlite':
							sName = 'SQLite';
							break;
						case 'mysql':
							sName = 'MySQL';
							break;
						case 'pgsql':
							sName = 'PostgreSQL';
							break;
					}

					return sName;
				}
			;

			if (!!Settings.settingsGet('SQLiteIsSupported'))
			{
				aSupportedTypes.push('sqlite');
			}
			if (!!Settings.settingsGet('MySqlIsSupported'))
			{
				aSupportedTypes.push('mysql');
			}
			if (!!Settings.settingsGet('PostgreSqlIsSupported'))
			{
				aSupportedTypes.push('pgsql');
			}

			this.contactsSupported = 0 < aSupportedTypes.length;

			this.contactsTypes = ko.observableArray([]);
			this.contactsTypesOptions = this.contactsTypes.map(function (sValue) {
				var bDisabled = -1 === Utils.inArray(sValue, aSupportedTypes);
				return {
					'id': sValue,
					'name': getTypeName(sValue) + (bDisabled ? ' (' + Translator.i18n('HINTS/NOT_SUPPORTED') + ')' : ''),
					'disabled': bDisabled
				};
			});

			this.contactsTypes(aTypes);
			this.contactsType = ko.observable('');

			this.mainContactsType = ko.computed({
				'owner': this,
				'read': this.contactsType,
				'write': function (sValue) {
					if (sValue !== this.contactsType())
					{
						if (-1 < Utils.inArray(sValue, aSupportedTypes))
						{
							this.contactsType(sValue);
						}
						else if (0 < aSupportedTypes.length)
						{
							this.contactsType('');
						}
					}
					else
					{
						this.contactsType.valueHasMutated();
					}
				}
			}).extend({'notify': 'always'});

			this.contactsType.subscribe(function () {
				this.testContactsSuccess(false);
				this.testContactsError(false);
				this.testContactsErrorMessage('');
			}, this);

			this.pdoDsn = ko.observable(Settings.settingsGet('ContactsPdoDsn'));
			this.pdoUser = ko.observable(Settings.settingsGet('ContactsPdoUser'));
			this.pdoPassword = ko.observable(Settings.settingsGet('ContactsPdoPassword'));

			this.pdoDsnTrigger = ko.observable(Enums.SaveSettingsStep.Idle);
			this.pdoUserTrigger = ko.observable(Enums.SaveSettingsStep.Idle);
			this.pdoPasswordTrigger = ko.observable(Enums.SaveSettingsStep.Idle);
			this.contactsTypeTrigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.testing = ko.observable(false);
			this.testContactsSuccess = ko.observable(false);
			this.testContactsError = ko.observable(false);
			this.testContactsErrorMessage = ko.observable('');

			this.testContactsCommand = Utils.createCommand(this, function () {

				this.testContactsSuccess(false);
				this.testContactsError(false);
				this.testContactsErrorMessage('');
				this.testing(true);

				Remote.testContacts(this.onTestContactsResponse, {
					'ContactsPdoType': this.contactsType(),
					'ContactsPdoDsn': this.pdoDsn(),
					'ContactsPdoUser': this.pdoUser(),
					'ContactsPdoPassword': this.pdoPassword()
				});

			}, function () {
				return '' !== this.pdoDsn() && '' !== this.pdoUser();
			});

			this.contactsType(Settings.settingsGet('ContactsPdoType'));

			this.onTestContactsResponse = _.bind(this.onTestContactsResponse, this);
		}

		ContactsAdminSettings.prototype.onTestContactsResponse = function (sResult, oData)
		{
			this.testContactsSuccess(false);
			this.testContactsError(false);
			this.testContactsErrorMessage('');

			if (Enums.StorageResultType.Success === sResult && oData && oData.Result && oData.Result.Result)
			{
				this.testContactsSuccess(true);
			}
			else
			{
				this.testContactsError(true);
				if (oData && oData.Result)
				{
					this.testContactsErrorMessage(oData.Result.Message || '');
				}
				else
				{
					this.testContactsErrorMessage('');
				}
			}

			this.testing(false);
		};

		ContactsAdminSettings.prototype.onShow = function ()
		{
			this.testContactsSuccess(false);
			this.testContactsError(false);
			this.testContactsErrorMessage('');
		};

		ContactsAdminSettings.prototype.onBuild = function ()
		{
			var
				self = this,
				Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19)
			;

			_.delay(function () {

				var
					f1 = Utils.settingsSaveHelperSimpleFunction(self.pdoDsnTrigger, self),
					f3 = Utils.settingsSaveHelperSimpleFunction(self.pdoUserTrigger, self),
					f4 = Utils.settingsSaveHelperSimpleFunction(self.pdoPasswordTrigger, self),
					f5 = Utils.settingsSaveHelperSimpleFunction(self.contactsTypeTrigger, self)
				;

				self.enableContacts.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'ContactsEnable': bValue ? '1' : '0'
					});
				});

				self.contactsSharing.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'ContactsSharing': bValue ? '1' : '0'
					});
				});

				self.contactsSync.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'ContactsSync': bValue ? '1' : '0'
					});
				});

				self.contactsType.subscribe(function (sValue) {
					Remote.saveAdminConfig(f5, {
						'ContactsPdoType': sValue
					});
				});

				self.pdoDsn.subscribe(function (sValue) {
					Remote.saveAdminConfig(f1, {
						'ContactsPdoDsn': Utils.trim(sValue)
					});
				});

				self.pdoUser.subscribe(function (sValue) {
					Remote.saveAdminConfig(f3, {
						'ContactsPdoUser': Utils.trim(sValue)
					});
				});

				self.pdoPassword.subscribe(function (sValue) {
					Remote.saveAdminConfig(f4, {
						'ContactsPdoPassword': Utils.trim(sValue)
					});
				});

				self.contactsType(Settings.settingsGet('ContactsPdoType'));

			}, 50);
		};

		module.exports = ContactsAdminSettings;

	}());

/***/ },
/* 128 */
/*!***************************************!*\
  !*** ./dev/Settings/Admin/Domains.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),

			DomainStore = __webpack_require__(/*! Stores/Admin/Domain */ 58),
			Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19)
		;

		/**
		 * @constructor
		 */
		function DomainsAdminSettings()
		{
			this.domains = DomainStore.domains;

			this.visibility = ko.computed(function () {
				return this.domains.loading() ? 'visible' : 'hidden';
			}, this);

			this.domainForDeletion = ko.observable(null).deleteAccessHelper();

			this.onDomainListChangeRequest = _.bind(this.onDomainListChangeRequest, this);
			this.onDomainLoadRequest = _.bind(this.onDomainLoadRequest, this);
		}

		DomainsAdminSettings.prototype.createDomain = function ()
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Domain */ 93));
		};

		DomainsAdminSettings.prototype.deleteDomain = function (oDomain)
		{
			this.domains.remove(oDomain);
			Remote.domainDelete(this.onDomainListChangeRequest, oDomain.name);
		};

		DomainsAdminSettings.prototype.disableDomain = function (oDomain)
		{
			oDomain.disabled(!oDomain.disabled());
			Remote.domainDisable(this.onDomainListChangeRequest, oDomain.name, oDomain.disabled());
		};

		DomainsAdminSettings.prototype.onBuild = function (oDom)
		{
			var self = this;
			oDom
				.on('click', '.b-admin-domains-list-table .e-item .e-action', function () {
					var oDomainItem = ko.dataFor(this);
					if (oDomainItem)
					{
						Remote.domain(self.onDomainLoadRequest, oDomainItem.name);
					}
				})
			;

			__webpack_require__(/*! App/Admin */ 20).default.reloadDomainList();
		};

		DomainsAdminSettings.prototype.onDomainLoadRequest = function (sResult, oData)
		{
			if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
			{
				__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Domain */ 93), [oData.Result]);
			}
		};

		DomainsAdminSettings.prototype.onDomainListChangeRequest = function ()
		{
			__webpack_require__(/*! App/Admin */ 20).default.reloadDomainList();
		};

		module.exports = DomainsAdminSettings;

	}());

/***/ },
/* 129 */
/*!***************************************!*\
  !*** ./dev/Settings/Admin/General.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Links = __webpack_require__(/*! Common/Links */ 12),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			ThemeStore = __webpack_require__(/*! Stores/Theme */ 41),
			LanguageStore = __webpack_require__(/*! Stores/Language */ 38),
			AppAdminStore = __webpack_require__(/*! Stores/Admin/App */ 34),
			CapaAdminStore = __webpack_require__(/*! Stores/Admin/Capa */ 51),

			Settings = __webpack_require__(/*! Storage/Settings */ 8)
		;

		/**
		 * @constructor
		 */
		function GeneralAdminSettings()
		{
			this.language = LanguageStore.language;
			this.languages = LanguageStore.languages;
			this.languageAdmin = LanguageStore.languageAdmin;
			this.languagesAdmin = LanguageStore.languagesAdmin;

			this.theme = ThemeStore.theme;
			this.themes = ThemeStore.themes;

			this.capaThemes = CapaAdminStore.themes;
			this.capaUserBackground = CapaAdminStore.userBackground;
			this.capaGravatar = CapaAdminStore.gravatar;
			this.capaAdditionalAccounts = CapaAdminStore.additionalAccounts;
			this.capaIdentities = CapaAdminStore.identities;
			this.capaAttachmentThumbnails = CapaAdminStore.attachmentThumbnails;
			this.capaTemplates = CapaAdminStore.templates;

			this.allowLanguagesOnSettings = AppAdminStore.allowLanguagesOnSettings;
			this.weakPassword = AppAdminStore.weakPassword;

			this.mainAttachmentLimit = ko.observable(Utils.pInt(Settings.settingsGet('AttachmentLimit')) / (1024 * 1024)).extend({'posInterer': 25});
			this.uploadData = Settings.settingsGet('PhpUploadSizes');
			this.uploadDataDesc = this.uploadData && (this.uploadData['upload_max_filesize'] || this.uploadData['post_max_size']) ? [
				this.uploadData['upload_max_filesize'] ? 'upload_max_filesize = ' + this.uploadData['upload_max_filesize'] + '; ' : '',
				this.uploadData['post_max_size'] ? 'post_max_size = ' + this.uploadData['post_max_size'] : ''
			].join('') : '';

			this.themesOptions = ko.computed(function () {
				return _.map(this.themes(), function (sTheme) {
					return {
						'optValue': sTheme,
						'optText': Utils.convertThemeName(sTheme)
					};
				});
			}, this);

			this.languageFullName = ko.computed(function () {
				return Utils.convertLangName(this.language());
			}, this);

			this.languageAdminFullName = ko.computed(function () {
				return Utils.convertLangName(this.languageAdmin());
			}, this);

			this.attachmentLimitTrigger = ko.observable(Enums.SaveSettingsStep.Idle);
			this.languageTrigger = ko.observable(Enums.SaveSettingsStep.Idle);
			this.languageAdminTrigger = ko.observable(Enums.SaveSettingsStep.Idle).extend({'throttle': 100});
			this.themeTrigger = ko.observable(Enums.SaveSettingsStep.Idle);
		}

		GeneralAdminSettings.prototype.onBuild = function ()
		{
			var
				self = this,
				Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19)
			;

			_.delay(function () {

				var
					f1 = Utils.settingsSaveHelperSimpleFunction(self.attachmentLimitTrigger, self),
					f2 = Utils.settingsSaveHelperSimpleFunction(self.languageTrigger, self),
					f3 = Utils.settingsSaveHelperSimpleFunction(self.themeTrigger, self),
					fReloadLanguageHelper = function (iSaveSettingsStep) {
						return function() {
							self.languageAdminTrigger(iSaveSettingsStep);
							_.delay(function () {
								self.languageAdminTrigger(Enums.SaveSettingsStep.Idle);
							}, 1000);
						};
					}
				;

				self.mainAttachmentLimit.subscribe(function (sValue) {
					Remote.saveAdminConfig(f1, {
						'AttachmentLimit': Utils.pInt(sValue)
					});
				});

				self.language.subscribe(function (sValue) {
					Remote.saveAdminConfig(f2, {
						'Language': Utils.trim(sValue)
					});
				});

				self.languageAdmin.subscribe(function (sValue) {

					self.languageAdminTrigger(Enums.SaveSettingsStep.Animate);

					Translator.reload(true, sValue,
						fReloadLanguageHelper(Enums.SaveSettingsStep.TrueResult),
						fReloadLanguageHelper(Enums.SaveSettingsStep.FalseResult));

					Remote.saveAdminConfig(null, {
						'LanguageAdmin': Utils.trim(sValue)
					});
				});

				self.theme.subscribe(function (sValue) {

					Utils.changeTheme(sValue, self.themeTrigger);

					Remote.saveAdminConfig(f3, {
						'Theme': Utils.trim(sValue)
					});
				});

				self.capaAdditionalAccounts.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'CapaAdditionalAccounts': bValue ? '1' : '0'
					});
				});

				self.capaIdentities.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'CapaIdentities': bValue ? '1' : '0'
					});
				});

				self.capaTemplates.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'CapaTemplates': bValue ? '1' : '0'
					});
				});

				self.capaGravatar.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'CapaGravatar': bValue ? '1' : '0'
					});
				});

				self.capaAttachmentThumbnails.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'CapaAttachmentThumbnails': bValue ? '1' : '0'
					});
				});

				self.capaThemes.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'CapaThemes': bValue ? '1' : '0'
					});
				});

				self.capaUserBackground.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'CapaUserBackground': bValue ? '1' : '0'
					});
				});

				self.allowLanguagesOnSettings.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'AllowLanguagesOnSettings': bValue ? '1' : '0'
					});
				});

			}, 50);
		};

		GeneralAdminSettings.prototype.selectLanguage = function ()
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Languages */ 43), [
				this.language, this.languages(), LanguageStore.userLanguage()
			]);
		};

		GeneralAdminSettings.prototype.selectLanguageAdmin = function ()
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Languages */ 43), [
				this.languageAdmin, this.languagesAdmin(), LanguageStore.userLanguageAdmin()
			]);
		};

		/**
		 * @return {string}
		 */
		GeneralAdminSettings.prototype.phpInfoLink = function ()
		{
			return Links.phpInfo();
		};

		module.exports = GeneralAdminSettings;

	}());

/***/ },
/* 130 */
/*!*************************************!*\
  !*** ./dev/Settings/Admin/Login.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),

			AppAdminStore = __webpack_require__(/*! Stores/Admin/App */ 34),

			Settings = __webpack_require__(/*! Storage/Settings */ 8)
		;

		/**
		 * @constructor
		 */
		function LoginAdminSettings()
		{
			this.determineUserLanguage = AppAdminStore.determineUserLanguage;
			this.determineUserDomain = AppAdminStore.determineUserDomain;

			this.defaultDomain = ko.observable(Settings.settingsGet('LoginDefaultDomain'));

			this.allowLanguagesOnLogin = AppAdminStore.allowLanguagesOnLogin;
			this.defaultDomainTrigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.dummy = ko.observable(false);
		}

		LoginAdminSettings.prototype.onBuild = function ()
		{
			var
				self = this,
				Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19)
			;

			_.delay(function () {

				var f1 = Utils.settingsSaveHelperSimpleFunction(self.defaultDomainTrigger, self);

				self.determineUserLanguage.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'DetermineUserLanguage': bValue ? '1' : '0'
					});
				});

				self.determineUserDomain.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'DetermineUserDomain': bValue ? '1' : '0'
					});
				});

				self.allowLanguagesOnLogin.subscribe(function (bValue) {
					Remote.saveAdminConfig(null, {
						'AllowLanguagesOnLogin': bValue ? '1' : '0'
					});
				});

				self.defaultDomain.subscribe(function (sValue) {
					Remote.saveAdminConfig(f1, {
						'LoginDefaultDomain': Utils.trim(sValue)
					});
				});

			}, 50);
		};

		module.exports = LoginAdminSettings;

	}());

/***/ },
/* 131 */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Packages.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			PackageStore = __webpack_require__(/*! Stores/Admin/Package */ 59),
			Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19)
		;

		/**
		 * @constructor
		 */
		function PackagesAdminSettings()
		{
			this.packagesError = ko.observable('');

			this.packages = PackageStore.packages;
			this.packagesReal = PackageStore.packagesReal;
			this.packagesMainUpdatable = PackageStore.packagesMainUpdatable;

			this.packagesCurrent = this.packages.filter(function (oItem) {
				return oItem && '' !== oItem['installed'] && !oItem['compare'];
			});

			this.packagesAvailableForUpdate = this.packages.filter(function (oItem) {
				return oItem && '' !== oItem['installed'] && !!oItem['compare'];
			});

			this.packagesAvailableForInstallation = this.packages.filter(function (oItem) {
				return oItem && '' === oItem['installed'];
			});

			this.visibility = ko.computed(function () {
				return PackageStore.packages.loading() ? 'visible' : 'hidden';
			}, this);
		}

		PackagesAdminSettings.prototype.onShow = function ()
		{
			this.packagesError('');
		};

		PackagesAdminSettings.prototype.onBuild = function ()
		{
			__webpack_require__(/*! App/Admin */ 20).default.reloadPackagesList();
		};

		PackagesAdminSettings.prototype.requestHelper = function (oPackage, bInstall)
		{
			var self = this;
			return function (sResult, oData) {

				if (Enums.StorageResultType.Success !== sResult || !oData || !oData.Result)
				{
					if (oData && oData.ErrorCode)
					{
						self.packagesError(Translator.getNotification(oData.ErrorCode));
					}
					else
					{
						self.packagesError(Translator.getNotification(
							bInstall ? Enums.Notification.CantInstallPackage : Enums.Notification.CantDeletePackage));
					}
				}

				_.each(self.packages(), function (oItem) {
					if (oItem && oPackage && oItem['loading']() && oPackage['file'] === oItem['file'])
					{
						oPackage['loading'](false);
						oItem['loading'](false);
					}
				});

				if (Enums.StorageResultType.Success === sResult && oData && oData.Result && oData.Result['Reload'])
				{
					window.location.reload();
				}
				else
				{
					__webpack_require__(/*! App/Admin */ 20).default.reloadPackagesList();
				}
			};
		};

		PackagesAdminSettings.prototype.deletePackage = function (oPackage)
		{
			if (oPackage)
			{
				oPackage['loading'](true);
				Remote.packageDelete(this.requestHelper(oPackage, false), oPackage);
			}
		};

		PackagesAdminSettings.prototype.installPackage = function (oPackage)
		{
			if (oPackage)
			{
				oPackage['loading'](true);
				Remote.packageInstall(this.requestHelper(oPackage, true), oPackage);
			}
		};

		module.exports = PackagesAdminSettings;

	}());

/***/ },
/* 132 */
/*!***************************************!*\
  !*** ./dev/Settings/Admin/Plugins.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/* global RL_COMMUNITY */

	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			AppStore = __webpack_require__(/*! Stores/Admin/App */ 34),
			PluginStore = __webpack_require__(/*! Stores/Admin/Plugin */ 60),

			Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19)
		;

		/**
		 * @constructor
		 */
		function PluginsAdminSettings()
		{
			this.enabledPlugins = ko.observable(!!Settings.settingsGet('EnabledPlugins'));

			this.plugins = PluginStore.plugins;
			this.pluginsError = PluginStore.plugins.error;

			this.community = true || AppStore.community();

			this.visibility = ko.computed(function () {
				return PluginStore.plugins.loading() ? 'visible' : 'hidden';
			}, this);

			this.onPluginLoadRequest = _.bind(this.onPluginLoadRequest, this);
			this.onPluginDisableRequest = _.bind(this.onPluginDisableRequest, this);
		}

		PluginsAdminSettings.prototype.disablePlugin = function (oPlugin)
		{
			oPlugin.disabled(!oPlugin.disabled());
			Remote.pluginDisable(this.onPluginDisableRequest, oPlugin.name, oPlugin.disabled());
		};

		PluginsAdminSettings.prototype.configurePlugin = function (oPlugin)
		{
			Remote.plugin(this.onPluginLoadRequest, oPlugin.name);
		};

		PluginsAdminSettings.prototype.onBuild = function (oDom)
		{
			var self = this;

			oDom
				.on('click', '.e-item .configure-plugin-action', function () {
					var oPlugin = ko.dataFor(this);
					if (oPlugin)
					{
						self.configurePlugin(oPlugin);
					}
				})
				.on('click', '.e-item .disabled-plugin', function () {
					var oPlugin = ko.dataFor(this);
					if (oPlugin)
					{
						self.disablePlugin(oPlugin);
					}
				})
			;

			this.enabledPlugins.subscribe(function (bValue) {
				Remote.saveAdminConfig(Utils.emptyFunction, {
					'EnabledPlugins': bValue ? '1' : '0'
				});
			});
		};

		PluginsAdminSettings.prototype.onShow = function ()
		{
			PluginStore.plugins.error('');
			__webpack_require__(/*! App/Admin */ 20).default.reloadPluginList();
		};

		PluginsAdminSettings.prototype.onPluginLoadRequest = function (sResult, oData)
		{
			if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
			{
				__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Plugin */ 156), [oData.Result]);
			}
		};

		PluginsAdminSettings.prototype.onPluginDisableRequest = function (sResult, oData)
		{
			if (Enums.StorageResultType.Success === sResult && oData)
			{
				if (!oData.Result && oData.ErrorCode)
				{
					if (Enums.Notification.UnsupportedPluginPackage === oData.ErrorCode && oData.ErrorMessage && '' !== oData.ErrorMessage)
					{
						PluginStore.plugins.error(oData.ErrorMessage);
					}
					else
					{
						PluginStore.plugins.error(Translator.getNotification(oData.ErrorCode));
					}
				}
			}

			__webpack_require__(/*! App/Admin */ 20).default.reloadPluginList();
		};

		module.exports = PluginsAdminSettings;

	}());

/***/ },
/* 133 */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Security.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Links = __webpack_require__(/*! Common/Links */ 12),

			AppAdminStore = __webpack_require__(/*! Stores/Admin/App */ 34),
			CapaAdminStore = __webpack_require__(/*! Stores/Admin/Capa */ 51),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19)
		;

		/**
		 * @constructor
		 */
		function SecurityAdminSettings()
		{
			this.useLocalProxyForExternalImages = AppAdminStore.useLocalProxyForExternalImages;

			this.weakPassword = AppAdminStore.weakPassword;

			this.capaOpenPGP = CapaAdminStore.openPGP;

			this.capaTwoFactorAuth = CapaAdminStore.twoFactorAuth;
			this.capaTwoFactorAuthForce = CapaAdminStore.twoFactorAuthForce;

			this.capaTwoFactorAuth.subscribe(function (bValue) {
				if (!bValue)
				{
					this.capaTwoFactorAuthForce(false);
				}
			}, this);

			this.verifySslCertificate = ko.observable(!!Settings.settingsGet('VerifySslCertificate'));
			this.allowSelfSigned = ko.observable(!!Settings.settingsGet('AllowSelfSigned'));

			this.verifySslCertificate.subscribe(function (bValue) {
				if (!bValue)
				{
					this.allowSelfSigned(true);
				}
			}, this);

			this.adminLogin = ko.observable(Settings.settingsGet('AdminLogin'));
			this.adminLoginError = ko.observable(false);
			this.adminPassword = ko.observable('');
			this.adminPasswordNew = ko.observable('');
			this.adminPasswordNew2 = ko.observable('');
			this.adminPasswordNewError = ko.observable(false);

			this.adminPasswordUpdateError = ko.observable(false);
			this.adminPasswordUpdateSuccess = ko.observable(false);

			this.adminPassword.subscribe(function () {
				this.adminPasswordUpdateError(false);
				this.adminPasswordUpdateSuccess(false);
			}, this);

			this.adminLogin.subscribe(function () {
				this.adminLoginError(false);
			}, this);

			this.adminPasswordNew.subscribe(function () {
				this.adminPasswordUpdateError(false);
				this.adminPasswordUpdateSuccess(false);
				this.adminPasswordNewError(false);
			}, this);

			this.adminPasswordNew2.subscribe(function () {
				this.adminPasswordUpdateError(false);
				this.adminPasswordUpdateSuccess(false);
				this.adminPasswordNewError(false);
			}, this);

			this.saveNewAdminPasswordCommand = Utils.createCommand(this, function () {

				if ('' === Utils.trim(this.adminLogin()))
				{
					this.adminLoginError(true);
					return false;
				}

				if (this.adminPasswordNew() !== this.adminPasswordNew2())
				{
					this.adminPasswordNewError(true);
					return false;
				}

				this.adminPasswordUpdateError(false);
				this.adminPasswordUpdateSuccess(false);

				Remote.saveNewAdminPassword(this.onNewAdminPasswordResponse, {
					'Login': this.adminLogin(),
					'Password': this.adminPassword(),
					'NewPassword': this.adminPasswordNew()
				});

			}, function () {
				return '' !== Utils.trim(this.adminLogin()) && '' !== this.adminPassword();
			});

			this.onNewAdminPasswordResponse = _.bind(this.onNewAdminPasswordResponse, this);
		}

		SecurityAdminSettings.prototype.onNewAdminPasswordResponse = function (sResult, oData)
		{
			if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
			{
				this.adminPassword('');
				this.adminPasswordNew('');
				this.adminPasswordNew2('');

				this.adminPasswordUpdateSuccess(true);

				this.weakPassword(!!oData.Result.Weak);
			}
			else
			{
				this.adminPasswordUpdateError(true);
			}
		};

		SecurityAdminSettings.prototype.onBuild = function ()
		{
			this.capaOpenPGP.subscribe(function (bValue) {
				Remote.saveAdminConfig(Utils.emptyFunction, {
					'CapaOpenPGP': bValue ? '1' : '0'
				});
			});

			this.capaTwoFactorAuth.subscribe(function (bValue) {
				Remote.saveAdminConfig(Utils.emptyFunction, {
					'CapaTwoFactorAuth': bValue ? '1' : '0'
				});
			});

			this.capaTwoFactorAuthForce.subscribe(function (bValue) {
				Remote.saveAdminConfig(Utils.emptyFunction, {
					'CapaTwoFactorAuthForce': bValue ? '1' : '0'
				});
			});

			this.useLocalProxyForExternalImages.subscribe(function (bValue) {
				Remote.saveAdminConfig(null, {
					'UseLocalProxyForExternalImages': bValue ? '1' : '0'
				});
			});

			this.verifySslCertificate.subscribe(function (bValue) {
				Remote.saveAdminConfig(null, {
					'VerifySslCertificate': bValue ? '1' : '0'
				});
			});

			this.allowSelfSigned.subscribe(function (bValue) {
				Remote.saveAdminConfig(null, {
					'AllowSelfSigned': bValue ? '1' : '0'
				});
			});
		};

		SecurityAdminSettings.prototype.onHide = function ()
		{
			this.adminPassword('');
			this.adminPasswordNew('');
			this.adminPasswordNew2('');
		};

		/**
		 * @return {string}
		 */
		SecurityAdminSettings.prototype.phpInfoLink = function ()
		{
			return Links.phpInfo();
		};

		module.exports = SecurityAdminSettings;

	}());


/***/ },
/* 134 */
/*!**************************************!*\
  !*** ./dev/Settings/Admin/Social.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0)
		;

		/**
		 * @constructor
		 */
		function SocialAdminSettings()
		{
			var SocialStore = __webpack_require__(/*! Stores/Social */ 33);

			this.googleEnable = SocialStore.google.enabled;
			this.googleEnableAuth = SocialStore.google.capa.auth;
			this.googleEnableAuthFast = SocialStore.google.capa.authFast;
			this.googleEnableDrive = SocialStore.google.capa.drive;
			this.googleEnablePreview = SocialStore.google.capa.preview;

			this.googleEnableRequireClientSettings = SocialStore.google.require.clientSettings;
			this.googleEnableRequireApiKey = SocialStore.google.require.apiKeySettings;

			this.googleClientID = SocialStore.google.clientID;
			this.googleClientSecret = SocialStore.google.clientSecret;
			this.googleApiKey = SocialStore.google.apiKey;

			this.googleTrigger1 = ko.observable(Enums.SaveSettingsStep.Idle);
			this.googleTrigger2 = ko.observable(Enums.SaveSettingsStep.Idle);
			this.googleTrigger3 = ko.observable(Enums.SaveSettingsStep.Idle);

			this.facebookSupported = SocialStore.facebook.supported;
			this.facebookEnable = SocialStore.facebook.enabled;
			this.facebookAppID = SocialStore.facebook.appID;
			this.facebookAppSecret = SocialStore.facebook.appSecret;

			this.facebookTrigger1 = ko.observable(Enums.SaveSettingsStep.Idle);
			this.facebookTrigger2 = ko.observable(Enums.SaveSettingsStep.Idle);

			this.twitterEnable = SocialStore.twitter.enabled;
			this.twitterConsumerKey = SocialStore.twitter.consumerKey;
			this.twitterConsumerSecret = SocialStore.twitter.consumerSecret;

			this.twitterTrigger1 = ko.observable(Enums.SaveSettingsStep.Idle);
			this.twitterTrigger2 = ko.observable(Enums.SaveSettingsStep.Idle);

			this.dropboxEnable = SocialStore.dropbox.enabled;
			this.dropboxApiKey = SocialStore.dropbox.apiKey;

			this.dropboxTrigger1 = ko.observable(Enums.SaveSettingsStep.Idle);
		}

		SocialAdminSettings.prototype.onBuild = function ()
		{
			var
				self = this,
				Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19)
			;

			_.delay(function () {

				var
					f1 = Utils.settingsSaveHelperSimpleFunction(self.facebookTrigger1, self),
					f2 = Utils.settingsSaveHelperSimpleFunction(self.facebookTrigger2, self),
					f3 = Utils.settingsSaveHelperSimpleFunction(self.twitterTrigger1, self),
					f4 = Utils.settingsSaveHelperSimpleFunction(self.twitterTrigger2, self),
					f5 = Utils.settingsSaveHelperSimpleFunction(self.googleTrigger1, self),
					f6 = Utils.settingsSaveHelperSimpleFunction(self.googleTrigger2, self),
					f7 = Utils.settingsSaveHelperSimpleFunction(self.googleTrigger3, self),
					f8 = Utils.settingsSaveHelperSimpleFunction(self.dropboxTrigger1, self)
				;

				self.facebookEnable.subscribe(function (bValue) {
					if (self.facebookSupported())
					{
						Remote.saveAdminConfig(Utils.emptyFunction, {
							'FacebookEnable': bValue ? '1' : '0'
						});
					}
				});

				self.facebookAppID.subscribe(function (sValue) {
					if (self.facebookSupported())
					{
						Remote.saveAdminConfig(f1, {
							'FacebookAppID': Utils.trim(sValue)
						});
					}
				});

				self.facebookAppSecret.subscribe(function (sValue) {
					if (self.facebookSupported())
					{
						Remote.saveAdminConfig(f2, {
							'FacebookAppSecret': Utils.trim(sValue)
						});
					}
				});

				self.twitterEnable.subscribe(function (bValue) {
					Remote.saveAdminConfig(Utils.emptyFunction, {
						'TwitterEnable': bValue ? '1' : '0'
					});
				});

				self.twitterConsumerKey.subscribe(function (sValue) {
					Remote.saveAdminConfig(f3, {
						'TwitterConsumerKey': Utils.trim(sValue)
					});
				});

				self.twitterConsumerSecret.subscribe(function (sValue) {
					Remote.saveAdminConfig(f4, {
						'TwitterConsumerSecret': Utils.trim(sValue)
					});
				});

				self.googleEnable.subscribe(function (bValue) {
					Remote.saveAdminConfig(Utils.emptyFunction, {
						'GoogleEnable': bValue ? '1' : '0'
					});
				});

				self.googleEnableAuth.subscribe(function (bValue) {
					Remote.saveAdminConfig(Utils.emptyFunction, {
						'GoogleEnableAuth': bValue ? '1' : '0'
					});
				});

				self.googleEnableDrive.subscribe(function (bValue) {
					Remote.saveAdminConfig(Utils.emptyFunction, {
						'GoogleEnableDrive': bValue ? '1' : '0'
					});
				});

				self.googleEnablePreview.subscribe(function (bValue) {
					Remote.saveAdminConfig(Utils.emptyFunction, {
						'GoogleEnablePreview': bValue ? '1' : '0'
					});
				});

				self.googleClientID.subscribe(function (sValue) {
					Remote.saveAdminConfig(f5, {
						'GoogleClientID': Utils.trim(sValue)
					});
				});

				self.googleClientSecret.subscribe(function (sValue) {
					Remote.saveAdminConfig(f6, {
						'GoogleClientSecret': Utils.trim(sValue)
					});
				});

				self.googleApiKey.subscribe(function (sValue) {
					Remote.saveAdminConfig(f7, {
						'GoogleApiKey': Utils.trim(sValue)
					});
				});

				self.dropboxEnable.subscribe(function (bValue) {
					Remote.saveAdminConfig(Utils.emptyFunction, {
						'DropboxEnable': bValue ? '1' : '0'
					});
				});

				self.dropboxApiKey.subscribe(function (sValue) {
					Remote.saveAdminConfig(f8, {
						'DropboxApiKey': Utils.trim(sValue)
					});
				});

			}, 50);
		};

		module.exports = SocialAdminSettings;

	}());

/***/ },
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/*!*************************************!*\
  !*** ./dev/Stores/Admin/License.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1)
		;

		/**
		 * @constructor
		 */
		function LicenseAdminStore()
		{
			this.licensing = ko.observable(false);
			this.licensingProcess = ko.observable(false);
			this.licenseValid = ko.observable(false);
			this.licenseExpired = ko.observable(0);
			this.licenseError = ko.observable('');

			this.licenseTrigger = ko.observable(false);
		}

		module.exports = new LicenseAdminStore();

	}());


/***/ },
/* 147 */
/*!*********************************!*\
  !*** ./dev/View/Admin/Login.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function LoginAdminView()
		{
			AbstractView.call(this, 'Center', 'AdminLogin');

			this.logoPowered = !!Settings.settingsGet('LoginPowered');

			this.mobile = !!Settings.appSettingsGet('mobile');
			this.mobileDevice = !!Settings.appSettingsGet('mobileDevice');

			this.login = ko.observable('');
			this.password = ko.observable('');

			this.loginError = ko.observable(false);
			this.passwordError = ko.observable(false);

			this.loginErrorAnimation = ko.observable(false).extend({'falseTimeout': 500});
			this.passwordErrorAnimation = ko.observable(false).extend({'falseTimeout': 500});

			this.loginFocus = ko.observable(false);

			this.formHidden = ko.observable(false);

			this.formError = ko.computed(function () {
				return this.loginErrorAnimation() || this.passwordErrorAnimation();
			}, this);

			this.login.subscribe(function () {
				this.loginError(false);
			}, this);

			this.password.subscribe(function () {
				this.passwordError(false);
			}, this);

			this.loginError.subscribe(function (bV) {
				this.loginErrorAnimation(!!bV);
			}, this);

			this.passwordError.subscribe(function (bV) {
				this.passwordErrorAnimation(!!bV);
			}, this);

			this.submitRequest = ko.observable(false);
			this.submitError = ko.observable('');

			this.submitCommand = Utils.createCommand(this, function () {

				Utils.triggerAutocompleteInputChange();

				this.loginError(false);
				this.passwordError(false);

				this.loginError('' === Utils.trim(this.login()));
				this.passwordError('' === Utils.trim(this.password()));

				if (this.loginError() || this.passwordError())
				{
					return false;
				}

				this.submitRequest(true);

				Remote.adminLogin(_.bind(function (sResult, oData) {

					if (Enums.StorageResultType.Success === sResult && oData && 'AdminLogin' === oData.Action)
					{
						if (oData.Result)
						{
							__webpack_require__(/*! App/Admin */ 20).default.loginAndLogoutReload(true);
						}
						else if (oData.ErrorCode)
						{
							this.submitRequest(false);
							this.submitError(Translator.getNotification(oData.ErrorCode));
						}
					}
					else
					{
						this.submitRequest(false);
						this.submitError(Translator.getNotification(Enums.Notification.UnknownError));
					}

				}, this), this.login(), this.password());

				return true;

			}, function () {
				return !this.submitRequest();
			});

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Admin/Login', 'AdminLoginViewModel'], LoginAdminView);
		_.extend(LoginAdminView.prototype, AbstractView.prototype);

		LoginAdminView.prototype.onShow = function ()
		{
			kn.routeOff();

			_.delay(_.bind(function () {
				this.loginFocus(true);
			}, this), 100);

		};

		LoginAdminView.prototype.onHide = function ()
		{
			this.loginFocus(false);
		};

		LoginAdminView.prototype.onBuild = function ()
		{
			Utils.triggerAutocompleteInputChange(true);
		};

		LoginAdminView.prototype.submitForm = function ()
		{
			this.submitCommand();
		};

		module.exports = LoginAdminView;

	}());

/***/ },
/* 148 */
/*!*****************************************!*\
  !*** ./dev/View/Admin/Settings/Menu.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			Globals = __webpack_require__(/*! Common/Globals */ 7),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @param {?} oScreen
		 *
		 * @constructor
		 * @extends AbstractView
		 */
		function MenuSettingsAdminView(oScreen)
		{
			AbstractView.call(this, 'Left', 'AdminMenu');

			this.leftPanelDisabled = Globals.leftPanelDisabled;

			this.menu = oScreen.menu;

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Admin/Settings/Menu', 'AdminSettingsMenuViewModel'], MenuSettingsAdminView);
		_.extend(MenuSettingsAdminView.prototype, AbstractView.prototype);

		MenuSettingsAdminView.prototype.link = function (sRoute)
		{
			return '#/' + sRoute;
		};

		MenuSettingsAdminView.prototype.onBuild = function (oDom)
		{
			key('up, down', _.throttle(function (event, handler) {

				var
					sH = '',
					iIndex = -1,
					bUp = handler && 'up' === handler.shortcut,
					$items = $('.b-admin-menu .e-item', oDom)
				;

				if (event && $items.length)
				{
					iIndex = $items.index($items.filter('.selected'));
					if (bUp && iIndex > 0)
					{
						iIndex--;
					}
					else if (!bUp && iIndex < $items.length - 1)
					{
						iIndex++;
					}

					sH = $items.eq(iIndex).attr('href');
					if (sH)
					{
						kn.setHash(sH, false, true);
					}
				}

			}, 200));
		};

		module.exports = MenuSettingsAdminView;

	}());


/***/ },
/* 149 */
/*!*****************************************!*\
  !*** ./dev/View/Admin/Settings/Pane.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/* global RL_COMMUNITY */

	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function PaneSettingsAdminView()
		{
			AbstractView.call(this, 'Right', 'AdminPane');

			this.adminDomain = ko.observable(Settings.settingsGet('AdminDomain'));
			this.version = ko.observable(Settings.appSettingsGet('version'));

			this.capa = !!Settings.settingsGet('PremType');
			this.community = true;

			this.adminManLoading = ko.computed(function () {
				return '000' !== [
					__webpack_require__(/*! Stores/Admin/Domain */ 58).domains.loading() ? '1' : '0',
					__webpack_require__(/*! Stores/Admin/Plugin */ 60).plugins.loading() ? '1' : '0',
					__webpack_require__(/*! Stores/Admin/Package */ 59).packages.loading() ? '1' : '0'
				].join('');
			}, this);

			this.adminManLoadingVisibility = ko.computed(function () {
				return this.adminManLoading() ? 'visible' : 'hidden';
			}, this).extend({'rateLimit': 300});

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Admin/Settings/Pane', 'AdminSettingsPaneViewModel'], PaneSettingsAdminView);
		_.extend(PaneSettingsAdminView.prototype, AbstractView.prototype);

		PaneSettingsAdminView.prototype.logoutClick = function ()
		{
			Remote.adminLogout(function () {
				__webpack_require__(/*! App/Admin */ 20).default.loginAndLogoutReload(true, true);
			});
		};

		module.exports = PaneSettingsAdminView;

	}());

/***/ },
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */
/*!**********************************!*\
  !*** ./dev/View/Popup/Plugin.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),
			key = __webpack_require__(/*! key */ 18),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Remote = __webpack_require__(/*! Remote/Admin/Ajax */ 19),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function PluginPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsPlugin');

			var self = this;

			this.onPluginSettingsUpdateResponse = _.bind(this.onPluginSettingsUpdateResponse, this);

			this.saveError = ko.observable('');

			this.name = ko.observable('');
			this.readme = ko.observable('');

			this.configures = ko.observableArray([]);

			this.hasReadme = ko.computed(function () {
				return '' !== this.readme();
			}, this);

			this.hasConfiguration = ko.computed(function () {
				return 0 < this.configures().length;
			}, this);

			this.readmePopoverConf = {
				'placement': 'right',
				'trigger': 'hover',
	//			'trigger': 'click',
				'title': Translator.i18n('POPUPS_PLUGIN/TOOLTIP_ABOUT_TITLE'),
				'container': 'body',
				'html': true,
				'content': function () {
					return '<pre>' + self.readme() + '</pre>';
	//					.replace(/[\r]/g, '').replace(/[\n]/g, '<br />').replace(/[\t]/g, '&nbsp;&nbsp;&nbsp;');
				}
			};

			this.saveCommand = Utils.createCommand(this, function () {

				var oList = {};

				oList['Name'] = this.name();

				_.each(this.configures(), function (oItem) {

					var mValue = oItem.value();
					if (false === mValue || true === mValue)
					{
						mValue = mValue ? '1' : '0';
					}

					oList['_' + oItem['Name']] = mValue;

				}, this);

				this.saveError('');
				Remote.pluginSettingsUpdate(this.onPluginSettingsUpdateResponse, oList);

			}, this.hasConfiguration);

			this.bDisabeCloseOnEsc = true;
			this.sDefaultKeyScope = Enums.KeyState.All;

			this.tryToClosePopup = _.debounce(_.bind(this.tryToClosePopup, this), 200);

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/Plugin', 'PopupsPluginViewModel'], PluginPopupView);
		_.extend(PluginPopupView.prototype, AbstractView.prototype);

		PluginPopupView.prototype.onPluginSettingsUpdateResponse = function (sResult, oData)
		{
			if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
			{
				this.cancelCommand();
			}
			else
			{
				this.saveError('');
				if (oData && oData.ErrorCode)
				{
					this.saveError(Translator.getNotification(oData.ErrorCode));
				}
				else
				{
					this.saveError(Translator.getNotification(Enums.Notification.CantSavePluginSettings));
				}
			}
		};

		PluginPopupView.prototype.onShow = function (oPlugin)
		{
			this.name();
			this.readme();
			this.configures([]);

			if (oPlugin)
			{
				this.name(oPlugin['Name']);
				this.readme(oPlugin['Readme']);

				var aConfig = oPlugin['Config'];
				if (Utils.isNonEmptyArray(aConfig))
				{
					this.configures(_.map(aConfig, function (aItem) {
						return {
							'value': ko.observable(aItem[0]),
							'placeholder': ko.observable(aItem[6]),
							'Name': aItem[1],
							'Type': aItem[2],
							'Label': aItem[3],
							'Default': aItem[4],
							'Desc': aItem[5]
						};
					}));
				}
			}
		};

		PluginPopupView.prototype.tryToClosePopup = function ()
		{
			var
				self = this,
				PopupsAskViewModel = __webpack_require__(/*! View/Popup/Ask */ 42)
			;

			if (!kn.isPopupVisible(PopupsAskViewModel))
			{
				kn.showScreenPopup(PopupsAskViewModel, [Translator.i18n('POPUPS_ASK/DESC_WANT_CLOSE_THIS_WINDOW'), function () {
					if (self.modalVisibility())
					{
						Utils.delegateRun(self, 'cancelCommand');
					}
				}]);
			}
		};

		PluginPopupView.prototype.onBuild = function ()
		{
			key('esc', Enums.KeyState.All, _.bind(function () {
				if (this.modalVisibility())
				{
					this.tryToClosePopup();
				}
				return false;
			}, this));
		};

		module.exports = PluginPopupView;

	}());

/***/ },
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/*!***********************!*\
  !*** ./dev/admin.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap__ = __webpack_require__(/*! bootstrap */ 50);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_App_Admin__ = __webpack_require__(/*! App/Admin */ 20);




	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_bootstrap__["a"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_App_Admin__["default"]);

/***/ }
/******/ ]);
