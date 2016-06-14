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
/******/ 	return __webpack_require__(__webpack_require__.s = 172);
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
/* 6 */
/*!**************************!*\
  !*** ./dev/App/User.jsx ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_progressJs__ = __webpack_require__(/*! progressJs */ 49);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_progressJs___default = __WEBPACK_IMPORTED_MODULE_1_progressJs__ && __WEBPACK_IMPORTED_MODULE_1_progressJs__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_progressJs__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_progressJs__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_progressJs___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_progressJs___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Tinycon__ = __webpack_require__(/*! Tinycon */ 179);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Tinycon___default = __WEBPACK_IMPORTED_MODULE_2_Tinycon__ && __WEBPACK_IMPORTED_MODULE_2_Tinycon__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_Tinycon__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_Tinycon__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_Tinycon___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_Tinycon___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Consts__ = __webpack_require__(/*! Common/Consts */ 16);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Plugins__ = __webpack_require__(/*! Common/Plugins */ 22);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Plugins___default = __WEBPACK_IMPORTED_MODULE_7_Common_Plugins__ && __WEBPACK_IMPORTED_MODULE_7_Common_Plugins__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_7_Common_Plugins__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_7_Common_Plugins__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_7_Common_Plugins___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_7_Common_Plugins___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Links__ = __webpack_require__(/*! Common/Links */ 12);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Links___default = __WEBPACK_IMPORTED_MODULE_8_Common_Links__ && __WEBPACK_IMPORTED_MODULE_8_Common_Links__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_8_Common_Links__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_8_Common_Links__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_8_Common_Links___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_8_Common_Links___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Common_Events__ = __webpack_require__(/*! Common/Events */ 24);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Common_Events___default = __WEBPACK_IMPORTED_MODULE_9_Common_Events__ && __WEBPACK_IMPORTED_MODULE_9_Common_Events__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_9_Common_Events__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_9_Common_Events__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_9_Common_Events___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_9_Common_Events___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 5);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Common_Translator___default = __WEBPACK_IMPORTED_MODULE_10_Common_Translator__ && __WEBPACK_IMPORTED_MODULE_10_Common_Translator__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_10_Common_Translator__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_10_Common_Translator__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_10_Common_Translator___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_10_Common_Translator___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Common_Momentor__ = __webpack_require__(/*! Common/Momentor */ 25);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Common_Momentor___default = __WEBPACK_IMPORTED_MODULE_11_Common_Momentor__ && __WEBPACK_IMPORTED_MODULE_11_Common_Momentor__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_11_Common_Momentor__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_11_Common_Momentor__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_11_Common_Momentor___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_11_Common_Momentor___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Common_Cache__ = __webpack_require__(/*! Common/Cache */ 17);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Common_Cache___default = __WEBPACK_IMPORTED_MODULE_12_Common_Cache__ && __WEBPACK_IMPORTED_MODULE_12_Common_Cache__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_12_Common_Cache__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_12_Common_Cache__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_12_Common_Cache___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Stores_Social__ = __webpack_require__(/*! Stores/Social */ 33);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Stores_Social___default = __WEBPACK_IMPORTED_MODULE_13_Stores_Social__ && __WEBPACK_IMPORTED_MODULE_13_Stores_Social__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_13_Stores_Social__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_13_Stores_Social__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_13_Stores_Social___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_Stores_User_Settings__ = __webpack_require__(/*! Stores/User/Settings */ 27);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_Stores_User_Settings___default = __WEBPACK_IMPORTED_MODULE_14_Stores_User_Settings__ && __WEBPACK_IMPORTED_MODULE_14_Stores_User_Settings__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_14_Stores_User_Settings__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_14_Stores_User_Settings__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_14_Stores_User_Settings___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_14_Stores_User_Settings___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Stores_User_Account__ = __webpack_require__(/*! Stores/User/Account */ 30);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Stores_User_Account___default = __WEBPACK_IMPORTED_MODULE_15_Stores_User_Account__ && __WEBPACK_IMPORTED_MODULE_15_Stores_User_Account__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_15_Stores_User_Account__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_15_Stores_User_Account__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_15_Stores_User_Account___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_15_Stores_User_Account___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity__ = __webpack_require__(/*! Stores/User/Identity */ 54);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity___default = __WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity__ && __WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_Stores_User_Template__ = __webpack_require__(/*! Stores/User/Template */ 92);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_Stores_User_Template___default = __WEBPACK_IMPORTED_MODULE_17_Stores_User_Template__ && __WEBPACK_IMPORTED_MODULE_17_Stores_User_Template__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_17_Stores_User_Template__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_17_Stores_User_Template__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_17_Stores_User_Template___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_17_Stores_User_Template___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder__ = __webpack_require__(/*! Stores/User/Folder */ 21);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default = __WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder__ && __WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp__ = __webpack_require__(/*! Stores/User/Pgp */ 32);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default = __WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp__ && __WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_Stores_User_Message__ = __webpack_require__(/*! Stores/User/Message */ 31);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default = __WEBPACK_IMPORTED_MODULE_20_Stores_User_Message__ && __WEBPACK_IMPORTED_MODULE_20_Stores_User_Message__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_20_Stores_User_Message__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_20_Stores_User_Message__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_Stores_User_Contact__ = __webpack_require__(/*! Stores/User/Contact */ 52);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_Stores_User_Contact___default = __WEBPACK_IMPORTED_MODULE_21_Stores_User_Contact__ && __WEBPACK_IMPORTED_MODULE_21_Stores_User_Contact__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_21_Stores_User_Contact__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_21_Stores_User_Contact__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_21_Stores_User_Contact___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_21_Stores_User_Contact___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_Storage_Client__ = __webpack_require__(/*! Storage/Client */ 46);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_Storage_Client___default = __WEBPACK_IMPORTED_MODULE_22_Storage_Client__ && __WEBPACK_IMPORTED_MODULE_22_Storage_Client__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_22_Storage_Client__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_22_Storage_Client__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_22_Storage_Client___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_22_Storage_Client___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default = __WEBPACK_IMPORTED_MODULE_23_Storage_Settings__ && __WEBPACK_IMPORTED_MODULE_23_Storage_Settings__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_23_Storage_Settings__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_23_Storage_Settings__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_Storage_RainLoop__ = __webpack_require__(/*! Storage/RainLoop */ 77);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_Storage_RainLoop___default = __WEBPACK_IMPORTED_MODULE_24_Storage_RainLoop__ && __WEBPACK_IMPORTED_MODULE_24_Storage_RainLoop__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_24_Storage_RainLoop__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_24_Storage_RainLoop__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_24_Storage_RainLoop___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_24_Storage_RainLoop___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax__ = __webpack_require__(/*! Remote/User/Ajax */ 14);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default = __WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax__ && __WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_Promises_User_Ajax__ = __webpack_require__(/*! Promises/User/Ajax */ 40);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_Promises_User_Ajax___default = __WEBPACK_IMPORTED_MODULE_26_Promises_User_Ajax__ && __WEBPACK_IMPORTED_MODULE_26_Promises_User_Ajax__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_26_Promises_User_Ajax__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_26_Promises_User_Ajax__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_26_Promises_User_Ajax___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_26_Promises_User_Ajax___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_Model_Email__ = __webpack_require__(/*! Model/Email */ 29);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_Model_Email___default = __WEBPACK_IMPORTED_MODULE_27_Model_Email__ && __WEBPACK_IMPORTED_MODULE_27_Model_Email__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_27_Model_Email__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_27_Model_Email__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_27_Model_Email___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_27_Model_Email___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_Model_Account__ = __webpack_require__(/*! Model/Account */ 108);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_Model_Account___default = __WEBPACK_IMPORTED_MODULE_28_Model_Account__ && __WEBPACK_IMPORTED_MODULE_28_Model_Account__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_28_Model_Account__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_28_Model_Account__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_28_Model_Account___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_28_Model_Account___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_Model_Identity__ = __webpack_require__(/*! Model/Identity */ 114);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_Model_Identity___default = __WEBPACK_IMPORTED_MODULE_29_Model_Identity__ && __WEBPACK_IMPORTED_MODULE_29_Model_Identity__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_29_Model_Identity__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_29_Model_Identity__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_29_Model_Identity___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_29_Model_Identity___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_Model_Template__ = __webpack_require__(/*! Model/Template */ 117);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_Model_Template___default = __WEBPACK_IMPORTED_MODULE_30_Model_Template__ && __WEBPACK_IMPORTED_MODULE_30_Model_Template__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_30_Model_Template__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_30_Model_Template__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_30_Model_Template___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_30_Model_Template___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_Model_OpenPgpKey__ = __webpack_require__(/*! Model/OpenPgpKey */ 116);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_Model_OpenPgpKey___default = __WEBPACK_IMPORTED_MODULE_31_Model_OpenPgpKey__ && __WEBPACK_IMPORTED_MODULE_31_Model_OpenPgpKey__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_31_Model_OpenPgpKey__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_31_Model_OpenPgpKey__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_31_Model_OpenPgpKey___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_31_Model_OpenPgpKey___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 4);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default = __WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin__ && __WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_App_Abstract__ = __webpack_require__(/*! App/Abstract */ 65);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














































	var AppUser = function (_AbstractApp) {
		_inherits(AppUser, _AbstractApp);

		function AppUser() {
			_classCallCheck(this, AppUser);

			var _this = _possibleConstructorReturn(this, _AbstractApp.call(this, /* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a));

			_this.oMoveCache = {};


			_this.quotaDebounce = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].debounce(_this.quota, 1000 * 30);
			_this.moveOrDeleteResponseHelper = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].bind(_this.moveOrDeleteResponseHelper, _this);

			_this.messagesMoveTrigger = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].debounce(_this.messagesMoveTrigger, 500);

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('interval.30s');
			}, 30000);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('interval.1m');
			}, 60000);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('interval.2m');
			}, 60000 * 2);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('interval.3m');
			}, 60000 * 3);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('interval.5m');
			}, 60000 * 5);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('interval.10m');
			}, 60000 * 10);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('interval.15m');
			}, 60000 * 15);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('interval.20m');
			}, 60000 * 15);

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setTimeout(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
					return /* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('interval.2m-after5m');
				}, 60000 * 2);
			}, 60000 * 5);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setTimeout(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
					return /* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('interval.5m-after5m');
				}, 60000 * 5);
			}, 60000 * 5);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setTimeout(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
					return /* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('interval.10m-after5m');
				}, 60000 * 10);
			}, 60000 * 5);

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].wakeUp(function () {
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_24_Storage_RainLoop___default.a.checkTimestamp()) {
					_this.reload();
				}

				/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.jsVersion(function (sResult, oData) {
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success === sResult && oData && !oData.Result) {
						_this.reload();
					}
				}, /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.appSettingsGet('version'));
			}, {}, 60 * 60 * 1000);

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_24_Storage_RainLoop___default.a.checkTimestamp()) {
				_this.reload();
			}

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('UserBackgroundHash')) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('#rl-bg').attr('style', 'background-image: none !important;').backstretch(/* harmony import */__WEBPACK_IMPORTED_MODULE_8_Common_Links___default.a.userBackground(/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('UserBackgroundHash')), {
						fade: /* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["bAnimationSupported"] ? 1000 : 0,
						centeredX: true,
						centeredY: true
					}).removeAttr('style');
				}, 1000);
			}

			_this.socialUsers = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].bind(_this.socialUsers, _this);
			return _this;
		}

		AppUser.prototype.remote = function remote() {
			return /* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a;
		};

		AppUser.prototype.reload = function reload() {
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].parent && !!/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.appSettingsGet('inIframe')) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].parent.location.reload();
			} else {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.reload();
			}
		};

		AppUser.prototype.reloadFlagsCurrentMessageListAndMessageFromCache = function reloadFlagsCurrentMessageListAndMessageFromCache() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageList(), function (message) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.initMessageFlagsFromCache(message);
			});
			/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.initMessageFlagsFromCache(/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.message());
		};

		/**
	  * @param {boolean=} bDropPagePosition = false
	  * @param {boolean=} bDropCurrenFolderCache = false
	  */


		AppUser.prototype.reloadMessageList = function reloadMessageList() {
			var bDropPagePosition = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
			var bDropCurrenFolderCache = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];


			var iOffset = (/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListPage() - 1) * /* harmony import */__WEBPACK_IMPORTED_MODULE_14_Stores_User_Settings___default.a.messagesPerPage();

			if (bDropCurrenFolderCache) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.setFolderHash(/* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.currentFolderFullNameRaw(), '');
			}

			if (bDropPagePosition) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListPage(1);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListPageBeforeThread(1);
				iOffset = 0;

				/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.setHash(/* harmony import */__WEBPACK_IMPORTED_MODULE_8_Common_Links___default.a.mailBox(/* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.currentFolderFullNameHash(), /* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListPage(), /* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListSearch(), /* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListThreadUid()), true, true);
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListLoading(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.messageList(function (sResult, oData, bCached) {

				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success === sResult && oData && oData.Result) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListError('');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListLoading(false);

					/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.setMessageList(oData, bCached);
				} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Unload === sResult) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListError('');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListLoading(false);
				} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Abort !== sResult) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageList([]);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListLoading(false);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListError(oData && oData.ErrorCode ? /* harmony import */__WEBPACK_IMPORTED_MODULE_10_Common_Translator___default.a.getNotification(oData.ErrorCode) : /* harmony import */__WEBPACK_IMPORTED_MODULE_10_Common_Translator___default.a.i18n('NOTIFICATIONS/CANT_GET_MESSAGE_LIST'));
				}
			}, /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.currentFolderFullNameRaw(), iOffset, /* harmony import */__WEBPACK_IMPORTED_MODULE_14_Stores_User_Settings___default.a.messagesPerPage(), /* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListSearch(), /* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListThreadUid());
		};

		AppUser.prototype.recacheInboxMessageList = function recacheInboxMessageList() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.messageList(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["noop"], /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderInboxName(), 0, /* harmony import */__WEBPACK_IMPORTED_MODULE_14_Stores_User_Settings___default.a.messagesPerPage(), '', '', true);
		};

		/**
	  * @param {Function} fResultFunc
	  * @return {boolean}
	  */


		AppUser.prototype.contactsSync = function contactsSync(fResultFunc) {

			var oContacts = /* harmony import */__WEBPACK_IMPORTED_MODULE_21_Stores_User_Contact___default.a.contacts;
			if (oContacts.importing() || oContacts.syncing() || !/* harmony import */__WEBPACK_IMPORTED_MODULE_21_Stores_User_Contact___default.a.enableContactsSync() || !/* harmony import */__WEBPACK_IMPORTED_MODULE_21_Stores_User_Contact___default.a.allowContactsSync()) {
				return false;
			}

			oContacts.syncing(true);

			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.contactsSync(function (sResult, oData) {

				oContacts.syncing(false);

				if (fResultFunc) {
					fResultFunc(sResult, oData);
				}
			});

			return true;
		};

		AppUser.prototype.messagesMoveTrigger = function messagesMoveTrigger() {
			var _this2 = this;

			var sTrashFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.trashFolder(),
			    sSpamFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.spamFolder();

			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(this.oMoveCache, function (oItem) {

				var bSpam = sSpamFolder === oItem.To,
				    bTrash = sTrashFolder === oItem.To,
				    bHam = !bSpam && sSpamFolder === oItem.From && /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderInboxName() === oItem.To;

				/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.messagesMove(_this2.moveOrDeleteResponseHelper, oItem.From, oItem.To, oItem.Uid, bSpam ? 'SPAM' : bHam ? 'HAM' : '', bSpam || bTrash);
			});

			this.oMoveCache = {};
		};

		AppUser.prototype.messagesMoveHelper = function messagesMoveHelper(sFromFolderFullNameRaw, sToFolderFullNameRaw, aUidForMove) {

			var sH = '$$' + sFromFolderFullNameRaw + '$$' + sToFolderFullNameRaw + '$$';
			if (!this.oMoveCache[sH]) {
				this.oMoveCache[sH] = {
					From: sFromFolderFullNameRaw,
					To: sToFolderFullNameRaw,
					Uid: []
				};
			}

			this.oMoveCache[sH].Uid = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].union(this.oMoveCache[sH].Uid, aUidForMove);
			this.messagesMoveTrigger();
		};

		AppUser.prototype.messagesCopyHelper = function messagesCopyHelper(sFromFolderFullNameRaw, sToFolderFullNameRaw, aUidForCopy) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.messagesCopy(this.moveOrDeleteResponseHelper, sFromFolderFullNameRaw, sToFolderFullNameRaw, aUidForCopy);
		};

		AppUser.prototype.messagesDeleteHelper = function messagesDeleteHelper(sFromFolderFullNameRaw, aUidForRemove) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.messagesDelete(this.moveOrDeleteResponseHelper, sFromFolderFullNameRaw, aUidForRemove);
		};

		AppUser.prototype.moveOrDeleteResponseHelper = function moveOrDeleteResponseHelper(sResult, oData) {

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success === sResult && /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.currentFolder()) {
				if (oData && /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isArray"].bind()(oData.Result) && 2 === oData.Result.length) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.setFolderHash(oData.Result[0], oData.Result[1]);
				} else {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.setFolderHash(/* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.currentFolderFullNameRaw(), '');

					if (oData && -1 < /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["inArray"].bind()(oData.ErrorCode, [/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantMoveMessage, /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantCopyMessage])) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].alert(/* harmony import */__WEBPACK_IMPORTED_MODULE_10_Common_Translator___default.a.getNotification(oData.ErrorCode));
					}
				}

				this.reloadMessageList(0 === /* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageList().length);
				this.quotaDebounce();
			}
		};

		/**
	  * @param {string} sFromFolderFullNameRaw
	  * @param {Array} aUidForRemove
	  */


		AppUser.prototype.deleteMessagesFromFolderWithoutCheck = function deleteMessagesFromFolderWithoutCheck(sFromFolderFullNameRaw, aUidForRemove) {
			this.messagesDeleteHelper(sFromFolderFullNameRaw, aUidForRemove);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.removeMessagesFromList(sFromFolderFullNameRaw, aUidForRemove);
		};

		/**
	  * @param {number} iDeleteType
	  * @param {string} sFromFolderFullNameRaw
	  * @param {Array} aUidForRemove
	  * @param {boolean=} bUseFolder = true
	  */


		AppUser.prototype.deleteMessagesFromFolder = function deleteMessagesFromFolder(iDeleteType, sFromFolderFullNameRaw, aUidForRemove, bUseFolder) {
			var _this3 = this;

			var oMoveFolder = null,
			    nSetSystemFoldersNotification = null;

			switch (iDeleteType) {
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["FolderType"].Spam:
					oMoveFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderFromCacheList(/* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.spamFolder());
					nSetSystemFoldersNotification = /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SetSystemFoldersNotification"].Spam;
					break;
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["FolderType"].NotSpam:
					oMoveFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderFromCacheList(/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderInboxName());
					break;
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["FolderType"].Trash:
					oMoveFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderFromCacheList(/* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.trashFolder());
					nSetSystemFoldersNotification = /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SetSystemFoldersNotification"].Trash;
					break;
				case /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["FolderType"].Archive:
					oMoveFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderFromCacheList(/* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.archiveFolder());
					nSetSystemFoldersNotification = /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SetSystemFoldersNotification"].Archive;
					break;
			}

			bUseFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isUnd"].bind()(bUseFolder) ? true : !!bUseFolder;
			if (bUseFolder) {
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["FolderType"].Spam === iDeleteType && /* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Consts__["UNUSED_OPTION_VALUE"] === /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.spamFolder() || /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["FolderType"].Trash === iDeleteType && /* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Consts__["UNUSED_OPTION_VALUE"] === /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.trashFolder() || /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["FolderType"].Archive === iDeleteType && /* harmony import */__WEBPACK_IMPORTED_MODULE_6_Common_Consts__["UNUSED_OPTION_VALUE"] === /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.archiveFolder()) {
					bUseFolder = false;
				}
			}

			if (!oMoveFolder && bUseFolder) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.showScreenPopup(__webpack_require__(/*! View/Popup/FolderSystem */ 53), [nSetSystemFoldersNotification]);
			} else if (!bUseFolder || /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["FolderType"].Trash === iDeleteType && (sFromFolderFullNameRaw === /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.spamFolder() || sFromFolderFullNameRaw === /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.trashFolder())) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.showScreenPopup(__webpack_require__(/*! View/Popup/Ask */ 42), [/* harmony import */__WEBPACK_IMPORTED_MODULE_10_Common_Translator___default.a.i18n('POPUPS_ASK/DESC_WANT_DELETE_MESSAGES'), function () {
					_this3.messagesDeleteHelper(sFromFolderFullNameRaw, aUidForRemove);
					/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.removeMessagesFromList(sFromFolderFullNameRaw, aUidForRemove);
				}]);
			} else if (oMoveFolder) {
				this.messagesMoveHelper(sFromFolderFullNameRaw, oMoveFolder.fullNameRaw, aUidForRemove);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.removeMessagesFromList(sFromFolderFullNameRaw, aUidForRemove, oMoveFolder.fullNameRaw);
			}
		};

		/**
	  * @param {string} sFromFolderFullNameRaw
	  * @param {Array} aUidForMove
	  * @param {string} sToFolderFullNameRaw
	  * @param {boolean=} bCopy = false
	  */


		AppUser.prototype.moveMessagesToFolder = function moveMessagesToFolder(sFromFolderFullNameRaw, aUidForMove, sToFolderFullNameRaw, bCopy) {

			if (sFromFolderFullNameRaw !== sToFolderFullNameRaw && /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isArray"].bind()(aUidForMove) && 0 < aUidForMove.length) {
				var oFromFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderFromCacheList(sFromFolderFullNameRaw),
				    oToFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderFromCacheList(sToFolderFullNameRaw);

				if (oFromFolder && oToFolder) {
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isUnd"].bind()(bCopy) ? false : !!bCopy) {
						this.messagesCopyHelper(oFromFolder.fullNameRaw, oToFolder.fullNameRaw, aUidForMove);
					} else {
						this.messagesMoveHelper(oFromFolder.fullNameRaw, oToFolder.fullNameRaw, aUidForMove);
					}

					/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.removeMessagesFromList(oFromFolder.fullNameRaw, aUidForMove, oToFolder.fullNameRaw, bCopy);
					return true;
				}
			}

			return false;
		};

		/**
	  * @param {Function=} callback = null
	  */


		AppUser.prototype.foldersReload = function foldersReload() {
			var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


			/* harmony import */__WEBPACK_IMPORTED_MODULE_26_Promises_User_Ajax___default.a.foldersReload(/* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.foldersLoading).then(function (value) {
				if (callback) {
					callback(!!value);
				}
			}).catch(function () {
				if (callback) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
						return callback(false);
					}, 1);
				}
			});
		};

		AppUser.prototype.foldersPromisesActionHelper = function foldersPromisesActionHelper(promise, errorDefCode) {

			/* harmony import */__WEBPACK_IMPORTED_MODULE_26_Promises_User_Ajax___default.a.abort('Folders').fastResolve(true).then(function () {
				return promise;
			}).catch(function (errorCode) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.folderList.error(/* harmony import */__WEBPACK_IMPORTED_MODULE_10_Common_Translator___default.a.getNotification(errorCode, '', errorDefCode));
			}).fin(function () {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_26_Promises_User_Ajax___default.a.foldersReloadWithTimeout(/* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.foldersLoading);
			}).done();
		};

		AppUser.prototype.reloadOpenPgpKeys = function reloadOpenPgpKeys() {

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default.a.capaOpenPGP()) {
				var aKeys = [],
				    oEmail = new /* harmony import */__WEBPACK_IMPORTED_MODULE_27_Model_Email___default.a(),
				    oOpenpgpKeyring = /* harmony import */__WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default.a.openpgpKeyring,
				    oOpenpgpKeys = oOpenpgpKeyring ? oOpenpgpKeyring.getAllKeys() : [];

				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(oOpenpgpKeys, function (oItem, iIndex) {
					if (oItem && oItem.primaryKey) {
						var aEmails = [],
						    aUsers = [],
						    oPrimaryUser = oItem.getPrimaryUser(),
						    sUser = oPrimaryUser && oPrimaryUser.user ? oPrimaryUser.user.userId.userid : oItem.users && oItem.users[0] ? oItem.users[0].userId.userid : '';

						if (oItem.users) {
							/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(oItem.users, function (item) {
								if (item.userId) {
									oEmail.clear();
									oEmail.mailsoParse(item.userId.userid);
									if (oEmail.validate()) {
										aEmails.push(oEmail.email);
										aUsers.push(item.userId.userid);
									}
								}
							});
						}

						if (aEmails.length) {
							aKeys.push(new /* harmony import */__WEBPACK_IMPORTED_MODULE_31_Model_OpenPgpKey___default.a(iIndex, oItem.primaryKey.getFingerprint(), oItem.primaryKey.getKeyId().toHex().toLowerCase(), /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].uniq(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].compact(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].map(oItem.getKeyIds(), function (item) {
								return item && item.toHex ? item.toHex() : null;
							}))), aUsers, aEmails, oItem.isPrivate(), oItem.armor(), sUser));
						}
					}
				});

				/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["delegateRunOnDestroy"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default.a.openpgpkeys());
				/* harmony import */__WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default.a.openpgpkeys(aKeys);
			}
		};

		AppUser.prototype.accountsCounts = function accountsCounts() {
			return false;
			//		AccountStore.accounts.loading(true);
			//
			//		Remote.accountsCounts((sResult, oData) => {
			//
			//			AccountStore.accounts.loading(false);
			//
			//			if (StorageResultType.Success === sResult && oData.Result && oData.Result['Counts'])
			//			{
			//				var
			//					sEmail = AccountStore.email(),
			//					aAcounts = AccountStore.accounts()
			//				;
			//
			//				_.each(oData.Result['Counts'], (oItem) => {
			//
			//					var oAccount = _.find(aAcounts, (oAccount) => {
			//						return oAccount && oItem[0] === oAccount.email && sEmail !== oAccount.email;
			//					});
			//
			//					if (oAccount)
			//					{
			//						oAccount.count(pInt(oItem[1]));
			//					}
			//				});
			//			}
			//		});
		};

		AppUser.prototype.accountsAndIdentities = function accountsAndIdentities(bBoot) {
			var _this4 = this;

			/* harmony import */__WEBPACK_IMPORTED_MODULE_15_Stores_User_Account___default.a.accounts.loading(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity___default.a.identities.loading(true);

			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.accountsAndIdentities(function (sResult, oData) {

				/* harmony import */__WEBPACK_IMPORTED_MODULE_15_Stores_User_Account___default.a.accounts.loading(false);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity___default.a.identities.loading(false);

				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success === sResult && oData.Result) {
					var aCounts = {},
					    sParentEmail = /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('ParentEmail'),
					    sAccountEmail = /* harmony import */__WEBPACK_IMPORTED_MODULE_15_Stores_User_Account___default.a.email();

					sParentEmail = '' === sParentEmail ? sAccountEmail : sParentEmail;

					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isArray"].bind()(oData.Result.Accounts)) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(/* harmony import */__WEBPACK_IMPORTED_MODULE_15_Stores_User_Account___default.a.accounts(), function (oAccount) {
							aCounts[oAccount.email] = oAccount.count();
						});

						/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["delegateRunOnDestroy"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_15_Stores_User_Account___default.a.accounts());

						/* harmony import */__WEBPACK_IMPORTED_MODULE_15_Stores_User_Account___default.a.accounts(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].map(oData.Result.Accounts, function (sValue) {
							return new /* harmony import */__WEBPACK_IMPORTED_MODULE_28_Model_Account___default.a(sValue, sValue !== sParentEmail, aCounts[sValue] || 0);
						}));
					}

					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isUnd"].bind()(bBoot) ? false : !!bBoot) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
							return _this4.accountsCounts();
						}, 1000 * 5);
						/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('interval.10m-after5m', function () {
							return _this4.accountsCounts();
						});
					}

					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isArray"].bind()(oData.Result.Identities)) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["delegateRunOnDestroy"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity___default.a.identities());

						/* harmony import */__WEBPACK_IMPORTED_MODULE_16_Stores_User_Identity___default.a.identities(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].map(oData.Result.Identities, function (oIdentityData) {

							var sId = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pString"].bind()(oIdentityData.Id),
							    sEmail = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pString"].bind()(oIdentityData.Email),
							    oIdentity = new /* harmony import */__WEBPACK_IMPORTED_MODULE_29_Model_Identity___default.a(sId, sEmail);

							oIdentity.name(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pString"].bind()(oIdentityData.Name));
							oIdentity.replyTo(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pString"].bind()(oIdentityData.ReplyTo));
							oIdentity.bcc(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pString"].bind()(oIdentityData.Bcc));
							oIdentity.signature(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pString"].bind()(oIdentityData.Signature));
							oIdentity.signatureInsertBefore(!!oIdentityData.SignatureInsertBefore);

							return oIdentity;
						}));
					}
				}
			});
		};

		AppUser.prototype.templates = function templates() {

			/* harmony import */__WEBPACK_IMPORTED_MODULE_17_Stores_User_Template___default.a.templates.loading(true);

			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.templates(function (result, data) {

				/* harmony import */__WEBPACK_IMPORTED_MODULE_17_Stores_User_Template___default.a.templates.loading(false);

				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success === result && data.Result && /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isArray"].bind()(data.Result.Templates)) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["delegateRunOnDestroy"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_17_Stores_User_Template___default.a.templates());

					/* harmony import */__WEBPACK_IMPORTED_MODULE_17_Stores_User_Template___default.a.templates(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].compact(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].map(data.Result.Templates, function (templateData) {
						var template = new /* harmony import */__WEBPACK_IMPORTED_MODULE_30_Model_Template___default.a();
						return template.parse(templateData) ? template : null;
					})));
				}
			});
		};

		AppUser.prototype.quota = function quota() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.quota(function (result, data) {
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success === result && data && data.Result && /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isArray"].bind()(data.Result) && 1 < data.Result.length && /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isPosNumeric"].bind()(data.Result[0], true) && /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isPosNumeric"].bind()(data.Result[1], true)) {
					__webpack_require__(/*! Stores/User/Quota */ 91).populateData(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"].bind()(data.Result[1]), /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"].bind()(data.Result[0]));
				}
			});
		};

		/**
	  * @param {string} folder
	  * @param {Array=} list = []
	  */


		AppUser.prototype.folderInformation = function folderInformation(folder, list) {
			var _this5 = this;

			if ('' !== /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["trim"].bind()(folder)) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.folderInformation(function (result, data) {
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success === result) {
						if (data && data.Result && data.Result.Hash && data.Result.Folder) {
							var uid = '',
							    check = false,
							    unreadCountChange = false;

							var folderFromCache = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderFromCacheList(data.Result.Folder);
							if (folderFromCache) {
								folderFromCache.interval = /* harmony import */__WEBPACK_IMPORTED_MODULE_11_Common_Momentor___default.a.momentNowUnix();

								if (data.Result.Hash) {
									/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.setFolderHash(data.Result.Folder, data.Result.Hash);
								}

								if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isNormal"].bind()(data.Result.MessageCount)) {
									folderFromCache.messageCountAll(data.Result.MessageCount);
								}

								if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isNormal"].bind()(data.Result.MessageUnseenCount)) {
									if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"].bind()(folderFromCache.messageCountUnread()) !== /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"].bind()(data.Result.MessageUnseenCount)) {
										unreadCountChange = true;
									}

									folderFromCache.messageCountUnread(data.Result.MessageUnseenCount);
								}

								if (unreadCountChange) {
									/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.clearMessageFlagsFromCacheByFolder(folderFromCache.fullNameRaw);
								}

								if (data.Result.Flags) {
									for (uid in data.Result.Flags) {
										if (data.Result.Flags.hasOwnProperty(uid)) {
											check = true;
											var flags = data.Result.Flags[uid];
											/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.storeMessageFlagsToCacheByFolderAndUid(folderFromCache.fullNameRaw, uid.toString(), [!flags.IsSeen, !!flags.IsFlagged, !!flags.IsAnswered, !!flags.IsForwarded, !!flags.IsReadReceipt]);
										}
									}

									if (check) {
										_this5.reloadFlagsCurrentMessageListAndMessageFromCache();
									}
								}

								/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.initUidNextAndNewMessages(folderFromCache.fullNameRaw, data.Result.UidNext, data.Result.NewMessages);

								var hash = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderHash(data.Result.Folder);
								if (data.Result.Hash !== hash || '' === hash || unreadCountChange) {
									if (folderFromCache.fullNameRaw === /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.currentFolderFullNameRaw()) {
										_this5.reloadMessageList();
									} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderInboxName() === folderFromCache.fullNameRaw) {
										_this5.recacheInboxMessageList();
									}
								}
							}
						}
					}
				}, folder, list);
			}
		};

		/**
	  * @param {boolean=} boot = false
	  */


		AppUser.prototype.folderInformationMultiply = function folderInformationMultiply() {
			var _this6 = this;

			var boot = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];


			var folders = /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.getNextFolderNames();
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isNonEmptyArray"].bind()(folders)) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.folderInformationMultiply(function (sResult, oData) {
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success === sResult) {
						if (oData && oData.Result && oData.Result.List && /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isNonEmptyArray"].bind()(oData.Result.List)) {
							(function () {
								var utc = /* harmony import */__WEBPACK_IMPORTED_MODULE_11_Common_Momentor___default.a.momentNowUnix();
								/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(oData.Result.List, function (oItem) {

									var sHash = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderHash(oItem.Folder),
									    oFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderFromCacheList(oItem.Folder),
									    bUnreadCountChange = false;

									if (oFolder) {
										oFolder.interval = utc;

										if (oItem.Hash) {
											/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.setFolderHash(oItem.Folder, oItem.Hash);
										}

										if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isNormal"].bind()(oItem.MessageCount)) {
											oFolder.messageCountAll(oItem.MessageCount);
										}

										if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isNormal"].bind()(oItem.MessageUnseenCount)) {
											if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"].bind()(oFolder.messageCountUnread()) !== /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"].bind()(oItem.MessageUnseenCount)) {
												bUnreadCountChange = true;
											}

											oFolder.messageCountUnread(oItem.MessageUnseenCount);
										}

										if (bUnreadCountChange) {
											/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.clearMessageFlagsFromCacheByFolder(oFolder.fullNameRaw);
										}

										if (oItem.Hash !== sHash || '' === sHash) {
											if (oFolder.fullNameRaw === /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.currentFolderFullNameRaw()) {
												_this6.reloadMessageList();
											}
										} else if (bUnreadCountChange) {
											if (oFolder.fullNameRaw === /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.currentFolderFullNameRaw()) {
												var aList = /* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageList();
												if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isNonEmptyArray"].bind()(aList)) {
													_this6.folderInformation(oFolder.fullNameRaw, aList);
												}
											}
										}
									}
								});

								if (boot) {
									/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
										return _this6.folderInformationMultiply(true);
									}, 2000);
								}
							})();
						}
					}
				}, folders);
			}
		};

		/**
	  * @param {string} sFolderFullNameRaw
	  * @param {string|bool} mUid
	  * @param {number} iSetAction
	  * @param {Array=} aMessages = null
	  */


		AppUser.prototype.messageListAction = function messageListAction(sFolderFullNameRaw, mUid, iSetAction, aMessages) {

			var oFolder = null,
			    aRootUids = [],
			    iAlreadyUnread = 0;

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isUnd"].bind()(aMessages)) {
				aMessages = /* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.messageListChecked();
			}

			aRootUids = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].uniq(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].compact(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].map(aMessages, function (oMessage) {
				return oMessage && oMessage.uid ? oMessage.uid : null;
			})));

			if ('' !== sFolderFullNameRaw && 0 < aRootUids.length) {
				switch (iSetAction) {
					case /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["MessageSetAction"].SetSeen:

						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(aRootUids, function (sSubUid) {
							iAlreadyUnread += /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.storeMessageFlagsToCacheBySetAction(sFolderFullNameRaw, sSubUid, iSetAction);
						});

						oFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderFromCacheList(sFolderFullNameRaw);
						if (oFolder) {
							oFolder.messageCountUnread(oFolder.messageCountUnread() - iAlreadyUnread);
						}

						/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.messageSetSeen(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["noop"], sFolderFullNameRaw, aRootUids, true);
						break;

					case /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["MessageSetAction"].UnsetSeen:

						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(aRootUids, function (sSubUid) {
							iAlreadyUnread += /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.storeMessageFlagsToCacheBySetAction(sFolderFullNameRaw, sSubUid, iSetAction);
						});

						oFolder = /* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderFromCacheList(sFolderFullNameRaw);
						if (oFolder) {
							oFolder.messageCountUnread(oFolder.messageCountUnread() - iAlreadyUnread + aRootUids.length);
						}

						/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.messageSetSeen(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["noop"], sFolderFullNameRaw, aRootUids, false);
						break;

					case /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["MessageSetAction"].SetFlag:

						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(aRootUids, function (sSubUid) {
							/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.storeMessageFlagsToCacheBySetAction(sFolderFullNameRaw, sSubUid, iSetAction);
						});

						/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.messageSetFlagged(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["noop"], sFolderFullNameRaw, aRootUids, true);
						break;

					case /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["MessageSetAction"].UnsetFlag:

						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(aRootUids, function (sSubUid) {
							/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.storeMessageFlagsToCacheBySetAction(sFolderFullNameRaw, sSubUid, iSetAction);
						});

						/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.messageSetFlagged(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["noop"], sFolderFullNameRaw, aRootUids, false);
						break;
				}

				this.reloadFlagsCurrentMessageListAndMessageFromCache();
				/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.message.viewTrigger(!/* harmony import */__WEBPACK_IMPORTED_MODULE_20_Stores_User_Message___default.a.message.viewTrigger());
			}
		};

		AppUser.prototype.googleConnect = function googleConnect() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].open(/* harmony import */__WEBPACK_IMPORTED_MODULE_8_Common_Links___default.a.socialGoogle(), 'Google', 'left=200,top=100,width=650,height=600,menubar=no,status=no,resizable=yes,scrollbars=yes');
		};

		AppUser.prototype.twitterConnect = function twitterConnect() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].open(/* harmony import */__WEBPACK_IMPORTED_MODULE_8_Common_Links___default.a.socialTwitter(), 'Twitter', 'left=200,top=100,width=650,height=350,menubar=no,status=no,resizable=yes,scrollbars=yes');
		};

		AppUser.prototype.facebookConnect = function facebookConnect() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].open(/* harmony import */__WEBPACK_IMPORTED_MODULE_8_Common_Links___default.a.socialFacebook(), 'Facebook', 'left=200,top=100,width=650,height=335,menubar=no,status=no,resizable=yes,scrollbars=yes');
		};

		/**
	  * @param {boolean=} fireAllActions = false
	  */


		AppUser.prototype.socialUsers = function socialUsers() {
			var fireAllActions = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

			if (true === fireAllActions) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.google.loading(true);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.facebook.loading(true);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.twitter.loading(true);
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.socialUsers(function (result, data) {

				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.google.userName(data.Result.Google || '');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.facebook.userName(data.Result.Facebook || '');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.twitter.userName(data.Result.Twitter || '');
				} else {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.google.userName('');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.facebook.userName('');
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.twitter.userName('');
				}

				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.google.loading(false);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.facebook.loading(false);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.twitter.loading(false);
			});
		};

		AppUser.prototype.googleDisconnect = function googleDisconnect() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.google.loading(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.googleDisconnect(this.socialUsers);
		};

		AppUser.prototype.facebookDisconnect = function facebookDisconnect() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.facebook.loading(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.facebookDisconnect(this.socialUsers);
		};

		AppUser.prototype.twitterDisconnect = function twitterDisconnect() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.twitter.loading(true);
			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.twitterDisconnect(this.socialUsers);
		};

		/**
	  * @param {string} query
	  * @param {Function} callback
	  */


		AppUser.prototype.getAutocomplete = function getAutocomplete(query, callback) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.suggestions(function (result, data) {
				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success === result && data && /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isArray"].bind()(data.Result)) {
					callback(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].compact(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].map(data.Result, function (item) {
						return item && item[0] ? new /* harmony import */__WEBPACK_IMPORTED_MODULE_27_Model_Email___default.a(item[0], item[1]) : null;
					})));
				} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Abort !== result) {
					callback([]);
				}
			}, query);
		};

		/**
	  * @param {string} sFullNameHash
	  * @param {boolean} bExpanded
	  */


		AppUser.prototype.setExpandedFolder = function setExpandedFolder(sFullNameHash, bExpanded) {
			var aExpandedList = /* harmony import */__WEBPACK_IMPORTED_MODULE_22_Storage_Client___default.a.get(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["ClientSideKeyName"].ExpandedFolders);
			if (!/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isArray"].bind()(aExpandedList)) {
				aExpandedList = [];
			}

			if (bExpanded) {
				aExpandedList.push(sFullNameHash);
				aExpandedList = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].uniq(aExpandedList);
			} else {
				aExpandedList = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].without(aExpandedList, sFullNameHash);
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_22_Storage_Client___default.a.set(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["ClientSideKeyName"].ExpandedFolders, aExpandedList);
		};

		AppUser.prototype.initHorizontalLayoutResizer = function initHorizontalLayoutResizer(sClientSideKeyName) {

			var iMinHeight = 200,
			    iMaxHeight = 500,
			    oTop = null,
			    oBottom = null,
			    fSetHeight = function fSetHeight(height) {
				if (height) {
					if (oTop) {
						oTop.attr('style', 'height:' + height + 'px');
					}

					if (oBottom) {
						oBottom.attr('style', 'top:' + (55 /* top toolbar */ + height) + 'px');
					}
				}
			},
			    fResizeCreateFunction = function fResizeCreateFunction(event) {
				if (event && event.target) {
					var oResizableHandle = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(event.target).find('.ui-resizable-handle');

					oResizableHandle.on('mousedown', function () {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].addClass('rl-resizer');
					}).on('mouseup', function () {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].removeClass('rl-resizer');
					});
				}
			},
			    fResizeStartFunction = function fResizeStartFunction() {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].addClass('rl-resizer');
			},
			    fResizeResizeFunction = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].debounce(function () {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].addClass('rl-resizer');
			}, 500, true),
			    fResizeStopFunction = function fResizeStopFunction(oEvent, oObject) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].removeClass('rl-resizer');
				if (oObject && oObject.size && oObject.size.height) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_22_Storage_Client___default.a.set(sClientSideKeyName, oObject.size.height);

					fSetHeight(oObject.size.height);

					/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["windowResize"].bind()();
				}
			},
			    oOptions = {
				helper: 'ui-resizable-helper-h',
				minHeight: iMinHeight,
				maxHeight: iMaxHeight,
				handles: 's',
				create: fResizeCreateFunction,
				resize: fResizeResizeFunction,
				start: fResizeStartFunction,
				stop: fResizeStopFunction
			},
			    fDisable = function fDisable(bDisable) {
				if (bDisable) {
					if (oTop && oTop.hasClass('ui-resizable')) {
						oTop.resizable('destroy').removeAttr('style');
					}

					if (oBottom) {
						oBottom.removeAttr('style');
					}
				} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].hasClass('rl-bottom-preview-pane')) {
					oTop = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('.b-message-list-wrapper');
					oBottom = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('.b-message-view-wrapper');

					if (!oTop.hasClass('ui-resizable')) {
						oTop.resizable(oOptions);
					}

					var iHeight = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_22_Storage_Client___default.a.get(sClientSideKeyName)) || 300;
					fSetHeight(iHeight > iMinHeight ? iHeight : iMinHeight);
				}
			};

			fDisable(false);

			/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('layout', function (layout) {
				fDisable(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Layout"].BottomPreview !== layout);
			});
		};

		AppUser.prototype.initVerticalLayoutResizer = function initVerticalLayoutResizer(sClientSideKeyName) {

			var iDisabledWidth = 60,
			    iMinWidth = 155,
			    oLeft = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('#rl-left'),
			    oRight = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()('#rl-right'),
			    mLeftWidth = /* harmony import */__WEBPACK_IMPORTED_MODULE_22_Storage_Client___default.a.get(sClientSideKeyName) || null,
			    fSetWidth = function fSetWidth(iWidth) {
				if (iWidth) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["leftPanelWidth"].bind()(iWidth);

					/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].removeClass('rl-resizer');

					oLeft.css({
						width: '' + iWidth + 'px'
					});

					oRight.css({
						left: '' + iWidth + 'px'
					});
				}
			},
			    fDisable = function fDisable(bDisable) {
				if (bDisable) {
					oLeft.resizable('disable');
					fSetWidth(iDisabledWidth);
				} else {
					oLeft.resizable('enable');
					var iWidth = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_22_Storage_Client___default.a.get(sClientSideKeyName)) || iMinWidth;
					fSetWidth(iWidth > iMinWidth ? iWidth : iMinWidth);
				}
			},
			    fResizeCreateFunction = function fResizeCreateFunction(oEvent) {
				if (oEvent && oEvent.target) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(oEvent.target).find('.ui-resizable-handle').on('mousedown', function () {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].addClass('rl-resizer');
					}).on('mouseup', function () {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].removeClass('rl-resizer');
					});
				}
			},
			    fResizeResizeFunction = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].debounce(function () {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].addClass('rl-resizer');
			}, 500, true),
			    fResizeStartFunction = function fResizeStartFunction() {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].addClass('rl-resizer');
			},
			    fResizeStopFunction = function fResizeStopFunction(oEvent, oObject) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].removeClass('rl-resizer');
				if (oObject && oObject.size && oObject.size.width) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_22_Storage_Client___default.a.set(sClientSideKeyName, oObject.size.width);

					/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["leftPanelWidth"].bind()(oObject.size.width);

					oRight.css({
						left: '' + oObject.size.width + 'px'
					});

					oLeft.css({
						position: '',
						top: '',
						left: '',
						height: ''
					});
				}
			};

			if (null !== mLeftWidth) {
				fSetWidth(mLeftWidth > iMinWidth ? mLeftWidth : iMinWidth);
			}

			oLeft.resizable({
				helper: 'ui-resizable-helper-w',
				minWidth: iMinWidth,
				maxWidth: 350,
				handles: 'e',
				create: fResizeCreateFunction,
				resize: fResizeResizeFunction,
				start: fResizeStartFunction,
				stop: fResizeStopFunction
			});

			/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('left-panel.off', function () {
				fDisable(true);
			});

			/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('left-panel.on', function () {
				fDisable(false);
			});
		};

		AppUser.prototype.logout = function logout() {
			var _this7 = this;

			/* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.logout(function () {
				_this7.loginAndLogoutReload(false, true, /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('ParentEmail') && 0 < /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('ParentEmail').length);
			});
		};

		AppUser.prototype.bootstartTwoFactorScreen = function bootstartTwoFactorScreen() {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.showScreenPopup(__webpack_require__(/*! View/Popup/TwoFactorConfiguration */ 98), [true]);
		};

		AppUser.prototype.bootstartWelcomePopup = function bootstartWelcomePopup(url) {
			/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.showScreenPopup(__webpack_require__(/*! View/Popup/WelcomePage */ 159), [url]);
		};

		AppUser.prototype.bootstartLoginScreen = function bootstartLoginScreen() {

			/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].removeClass('rl-user-auth').addClass('rl-user-no-auth');

			var customLoginLink = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pString"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.appSettingsGet('customLoginLink'));
			if (!customLoginLink) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.startScreens([__webpack_require__(/*! Screen/User/Login */ 122)]);

				/* harmony import */__WEBPACK_IMPORTED_MODULE_7_Common_Plugins___default.a.runHook('rl-start-login-screens');
				/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('rl.bootstart-login-screens');
			} else {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.routeOff();
				/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.setHash(/* harmony import */__WEBPACK_IMPORTED_MODULE_8_Common_Links___default.a.root(), true);
				/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.routeOff();

				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].defer(function () {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.href = customLoginLink;
				});
			}
		};

		AppUser.prototype.bootend = function bootend() {
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_progressJs___default.a) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.hideLoading();

				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_progressJs___default.a.set(100).end();
			} else {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.hideLoading();
			}
		};

		AppUser.prototype.bootstart = function bootstart() {
			var _this8 = this;

			_AbstractApp.prototype.bootstart.call(this);

			__webpack_require__(/*! Stores/User/App */ 23).populate();
			__webpack_require__(/*! Stores/User/Settings */ 27).populate();
			__webpack_require__(/*! Stores/User/Notification */ 61).populate();
			__webpack_require__(/*! Stores/User/Account */ 30).populate();
			__webpack_require__(/*! Stores/User/Contact */ 52).populate();

			var sJsHash = /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.appSettingsGet('jsHash'),
			    sStartupUrl = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pString"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('StartupUrl')),
			    iContactsSyncInterval = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('ContactsSyncInterval')),
			    bGoogle = /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('AllowGoogleSocial'),
			    bFacebook = /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('AllowFacebookSocial'),
			    bTwitter = /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('AllowTwitterSocial');

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_1_progressJs___default.a) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_1_progressJs___default.a.set(90);
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["leftPanelDisabled"].subscribe(function (value) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('left-panel.' + (value ? 'off' : 'on'));
			});

			this.setWindowTitle('');
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('Auth')) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$html"].addClass('rl-user-auth');

				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.capa(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Capa"].TwoFactor) && /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.capa(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Capa"].TwoFactorForce) && /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('RequireTwoFactor')) {
					this.bootend();
					this.bootstartTwoFactorScreen();
				} else {
					this.setWindowTitle(/* harmony import */__WEBPACK_IMPORTED_MODULE_10_Common_Translator___default.a.i18n('TITLES/LOADING'));

					// require.ensure([], function() { // require code splitting

					this.foldersReload(function (value) {

						_this8.bootend();

						if (value) {
							if ('' !== sStartupUrl) {
								/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.routeOff();
								/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.setHash(/* harmony import */__WEBPACK_IMPORTED_MODULE_8_Common_Links___default.a.root(sStartupUrl), true);
								/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.routeOn();
							}

							if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].jassl && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].crypto && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].crypto.getRandomValues && /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.capa(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Capa"].OpenPGP)) {
								(function () {
									var openpgpCallback = function openpgpCallback(openpgp) {

										/* harmony import */__WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default.a.openpgp = openpgp;

										if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].Worker) {
											try {
												/* harmony import */__WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default.a.openpgp.initWorker({ path: /* harmony import */__WEBPACK_IMPORTED_MODULE_8_Common_Links___default.a.openPgpWorkerJs() });
											} catch (e) {
												/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["log"].bind()(e);
											}
										}

										/* harmony import */__WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default.a.openpgpKeyring = new openpgp.Keyring();
										/* harmony import */__WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default.a.capaOpenPGP(true);

										/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('openpgp.init');

										_this8.reloadOpenPgpKeys();
									};

									if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].openpgp) {
										openpgpCallback(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].openpgp);
									} else {
										/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].jassl(/* harmony import */__WEBPACK_IMPORTED_MODULE_8_Common_Links___default.a.openPgpJs()).then(function () {
											if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].openpgp) {
												openpgpCallback(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].openpgp);
											}
										});
									}
								})();
							} else {
								/* harmony import */__WEBPACK_IMPORTED_MODULE_19_Stores_User_Pgp___default.a.capaOpenPGP(false);
							}

							/* harmony import */__WEBPACK_IMPORTED_MODULE_32_Knoin_Knoin___default.a.startScreens([__webpack_require__(/*! Screen/User/MailBox */ 123), /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.capa(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Capa"].Settings) ? __webpack_require__(/*! Screen/User/Settings */ 124) : null
							//							false ? require('Screen/User/About') : null
							]);

							if (bGoogle || bFacebook || bTwitter) {
								_this8.socialUsers(true);
							}

							/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('interval.2m', function () {
								return _this8.folderInformation(/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderInboxName());
							});
							/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('interval.3m', function () {
								var sF = /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.currentFolderFullNameRaw();
								if (/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderInboxName() !== sF) {
									_this8.folderInformation(sF);
								}
							});

							/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('interval.2m-after5m', function () {
								return _this8.folderInformationMultiply();
							});
							/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('interval.15m', function () {
								return _this8.quota();
							});
							/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('interval.20m', function () {
								return _this8.foldersReload();
							});

							iContactsSyncInterval = 5 <= iContactsSyncInterval ? iContactsSyncInterval : 20;
							iContactsSyncInterval = 320 >= iContactsSyncInterval ? iContactsSyncInterval : 320;

							/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
								return _this8.contactsSync();
							}, 10000);
							/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
								return _this8.folderInformationMultiply(true);
							}, 2000);

							/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].setInterval(function () {
								return _this8.contactsSync();
							}, iContactsSyncInterval * 60000 + 5000);

							_this8.accountsAndIdentities(true);

							/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
								var sF = /* harmony import */__WEBPACK_IMPORTED_MODULE_18_Stores_User_Folder___default.a.currentFolderFullNameRaw();
								if (/* harmony import */__WEBPACK_IMPORTED_MODULE_12_Common_Cache___default.a.getFolderInboxName() !== sF) {
									_this8.folderInformation(sF);
								}
							}, 1000);

							/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
								return _this8.quota();
							}, 5000);
							/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
								return /* harmony import */__WEBPACK_IMPORTED_MODULE_25_Remote_User_Ajax___default.a.appDelayStart(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["noop"]);
							}, 35000);

							/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('rl.auto-logout', function () {
								return _this8.logout();
							});

							/* harmony import */__WEBPACK_IMPORTED_MODULE_7_Common_Plugins___default.a.runHook('rl-start-user-screens');
							/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('rl.bootstart-user-screens');

							if (/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('WelcomePageUrl')) {
								/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
									return _this8.bootstartWelcomePopup(/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('WelcomePageUrl'));
								}, 1000);
							}

							if (!!/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('AccountSignMe') && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].navigator.registerProtocolHandler && /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.capa(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Capa"].Composer)) {
								/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
									try {
										/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].navigator.registerProtocolHandler('mailto', /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.protocol + '//' + /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.host + /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].location.pathname + '?mailto&to=%s', '' + (/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('Title') || 'RainLoop'));
									} catch (e) {/* eslint-disable-line no-empty */}

									if (/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('MailToEmail')) {
										/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["mailToHelper"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.settingsGet('MailToEmail'), __webpack_require__(/*! View/Popup/Compose */ 28));
									}
								}, 500);
							}

							if (!/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["bMobileDevice"]) {
								/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].defer(function () {
									return _this8.initVerticalLayoutResizer(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["ClientSideKeyName"].FolderListSize);
								});

								if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Tinycon___default.a && /* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.appSettingsGet('faviconStatus') && !/* harmony import */__WEBPACK_IMPORTED_MODULE_23_Storage_Settings___default.a.appSettingsGet('listPermanentFiltered')) {
									/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Tinycon___default.a.setOptions({
										fallback: false
									});

									/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('mailbox.inbox-unread-count', function (iCount) {
										return /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Tinycon___default.a.setBubble(0 < iCount ? 99 < iCount ? 99 : iCount : 0);
									});
								}
							}
						} else {
							_this8.logout();
						}
					});

					// }); // require code splitting
				}
			} else {
					this.bootend();
					this.bootstartLoginScreen();
				}

			if (bGoogle) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"]['rl_' + sJsHash + '_google_service'] = function () {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.google.loading(true);
					_this8.socialUsers();
				};
			}

			if (bFacebook) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"]['rl_' + sJsHash + '_facebook_service'] = function () {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.facebook.loading(true);
					_this8.socialUsers();
				};
			}

			if (bTwitter) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"]['rl_' + sJsHash + '_twitter_service'] = function () {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_13_Stores_Social___default.a.twitter.loading(true);
					_this8.socialUsers();
				};
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.sub('interval.1m', function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_11_Common_Momentor___default.a.reload();
			});

			/* harmony import */__WEBPACK_IMPORTED_MODULE_7_Common_Plugins___default.a.runHook('rl-start-screens');
			/* harmony import */__WEBPACK_IMPORTED_MODULE_9_Common_Events___default.a.pub('rl.bootstart-end');
		};

		return AppUser;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_33_App_Abstract__["a"]);

	/* harmony default export */ exports["default"] = new AppUser();

/***/ },
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
/* 14 */
/*!*********************************!*\
  !*** ./dev/Remote/User/Ajax.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Base64 = __webpack_require__(/*! Common/Base64 */ 168),

			Cache = __webpack_require__(/*! Common/Cache */ 17),
			Links = __webpack_require__(/*! Common/Links */ 12),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			SettingsStore = __webpack_require__(/*! Stores/User/Settings */ 27),

			AbstractAjaxRemote = __webpack_require__(/*! Remote/AbstractAjax */ 56)
		;

		/**
		 * @constructor
		 * @extends AbstractRemoteStorage
		 */
		function RemoteUserAjax()
		{
			AbstractAjaxRemote.call(this);

			this.oRequests = {};
		}

		_.extend(RemoteUserAjax.prototype, AbstractAjaxRemote.prototype);

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.folders = function (fCallback)
		{
			this.defaultRequest(fCallback, 'Folders', {
				'SentFolder': Settings.settingsGet('SentFolder'),
				'DraftFolder': Settings.settingsGet('DraftFolder'),
				'SpamFolder': Settings.settingsGet('SpamFolder'),
				'TrashFolder': Settings.settingsGet('TrashFolder'),
				'ArchiveFolder': Settings.settingsGet('ArchiveFolder')
			}, null, '', ['Folders']);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sEmail
		 * @param {string} sLogin
		 * @param {string} sPassword
		 * @param {boolean} bSignMe
		 * @param {string=} sLanguage
		 * @param {string=} sAdditionalCode
		 * @param {boolean=} bAdditionalCodeSignMe
		 */
		RemoteUserAjax.prototype.login = function (fCallback, sEmail, sLogin, sPassword, bSignMe, sLanguage, sAdditionalCode, bAdditionalCodeSignMe)
		{
			this.defaultRequest(fCallback, 'Login', {
				'Email': sEmail,
				'Login': sLogin,
				'Password': sPassword,
				'Language': sLanguage || '',
				'AdditionalCode': sAdditionalCode || '',
				'AdditionalCodeSignMe': bAdditionalCodeSignMe ? '1' : '0',
				'SignMe': bSignMe ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.getTwoFactor = function (fCallback)
		{
			this.defaultRequest(fCallback, 'GetTwoFactorInfo');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.createTwoFactor = function (fCallback)
		{
			this.defaultRequest(fCallback, 'CreateTwoFactorSecret');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.clearTwoFactor = function (fCallback)
		{
			this.defaultRequest(fCallback, 'ClearTwoFactorInfo');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.showTwoFactorSecret = function (fCallback)
		{
			this.defaultRequest(fCallback, 'ShowTwoFactorSecret');
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sCode
		 */
		RemoteUserAjax.prototype.testTwoFactor = function (fCallback, sCode)
		{
			this.defaultRequest(fCallback, 'TestTwoFactorInfo', {
				'Code': sCode
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {boolean} bEnable
		 */
		RemoteUserAjax.prototype.enableTwoFactor = function (fCallback, bEnable)
		{
			this.defaultRequest(fCallback, 'EnableTwoFactor', {
				'Enable': bEnable ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.clearTwoFactorInfo = function (fCallback)
		{
			this.defaultRequest(fCallback, 'ClearTwoFactorInfo');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.contactsSync = function (fCallback)
		{
			this.defaultRequest(fCallback, 'ContactsSync', null, Consts.CONTACTS_SYNC_AJAX_TIMEOUT);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {boolean} bEnable
		 * @param {string} sUrl
		 * @param {string} sUser
		 * @param {string} sPassword
		 */
		RemoteUserAjax.prototype.saveContactsSyncData = function (fCallback, bEnable, sUrl, sUser, sPassword)
		{
			this.defaultRequest(fCallback, 'SaveContactsSyncData', {
				'Enable': bEnable ? '1' : '0',
				'Url': sUrl,
				'User': sUser,
				'Password': sPassword
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sEmail
		 * @param {string} sPassword
		 * @param {boolean=} bNew
		 */
		RemoteUserAjax.prototype.accountSetup = function (fCallback, sEmail, sPassword, bNew)
		{
			bNew = Utils.isUnd(bNew) ? true : !!bNew;

			this.defaultRequest(fCallback, 'AccountSetup', {
				'Email': sEmail,
				'Password': sPassword,
				'New': bNew ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sEmailToDelete
		 */
		RemoteUserAjax.prototype.accountDelete = function (fCallback, sEmailToDelete)
		{
			this.defaultRequest(fCallback, 'AccountDelete', {
				'EmailToDelete': sEmailToDelete
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {Array} aAccounts
		 * @param {Array} aIdentities
		 */
		RemoteUserAjax.prototype.accountsAndIdentitiesSortOrder = function (fCallback, aAccounts, aIdentities)
		{
			this.defaultRequest(fCallback, 'AccountsAndIdentitiesSortOrder', {
				'Accounts': aAccounts,
				'Identities': aIdentities
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sId
		 * @param {string} sEmail
		 * @param {string} sName
		 * @param {string} sReplyTo
		 * @param {string} sBcc
		 * @param {string} sSignature
		 * @param {boolean} bSignatureInsertBefore
		 */
		RemoteUserAjax.prototype.identityUpdate = function (fCallback, sId, sEmail, sName, sReplyTo, sBcc,
			sSignature, bSignatureInsertBefore)
		{
			this.defaultRequest(fCallback, 'IdentityUpdate', {
				'Id': sId,
				'Email': sEmail,
				'Name': sName,
				'ReplyTo': sReplyTo,
				'Bcc': sBcc,
				'Signature': sSignature,
				'SignatureInsertBefore': bSignatureInsertBefore ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sIdToDelete
		 */
		RemoteUserAjax.prototype.identityDelete = function (fCallback, sIdToDelete)
		{
			this.defaultRequest(fCallback, 'IdentityDelete', {
				'IdToDelete': sIdToDelete
			});
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.accountsAndIdentities = function (fCallback)
		{
			this.defaultRequest(fCallback, 'AccountsAndIdentities');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.accountsCounts = function (fCallback)
		{
			this.defaultRequest(fCallback, 'AccountsCounts');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.filtersSave = function (fCallback,
			aFilters, sRaw, bRawIsActive)
		{
			this.defaultRequest(fCallback, 'FiltersSave', {
				'Raw': sRaw,
				'RawIsActive': bRawIsActive ? '1' : '0',
				'Filters': _.map(aFilters, function (oItem) {
					return oItem.toJson();
				})
			});
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.filtersGet = function (fCallback)
		{
			this.defaultRequest(fCallback, 'Filters', {});
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.templates = function (fCallback)
		{
			this.defaultRequest(fCallback, 'Templates', {});
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.templateGetById = function (fCallback, sID)
		{
			this.defaultRequest(fCallback, 'TemplateGetByID', {
				'ID': sID
			});
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.templateDelete = function (fCallback, sID)
		{
			this.defaultRequest(fCallback, 'TemplateDelete', {
				'IdToDelete': sID
			});
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.templateSetup = function (fCallback, sID, sName, sBody)
		{
			this.defaultRequest(fCallback, 'TemplateSetup', {
				'ID': sID,
				'Name': sName,
				'Body': sBody
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolderFullNameRaw
		 * @param {number=} iOffset = 0
		 * @param {number=} iLimit = 20
		 * @param {string=} sSearch = ''
		 * @param {string=} sThreadUid = ''
		 * @param {boolean=} bSilent = false
		 */
		RemoteUserAjax.prototype.messageList = function (fCallback, sFolderFullNameRaw, iOffset, iLimit, sSearch, sThreadUid, bSilent)
		{
			sFolderFullNameRaw = Utils.pString(sFolderFullNameRaw);

			var
				sFolderHash = Cache.getFolderHash(sFolderFullNameRaw),
				bUseThreads = AppStore.threadsAllowed() && SettingsStore.useThreads(),
				sInboxUidNext = Cache.getFolderInboxName() === sFolderFullNameRaw ? Cache.getFolderUidNext(sFolderFullNameRaw) : ''
			;

			bSilent = Utils.isUnd(bSilent) ? false : !!bSilent;
			iOffset = Utils.isUnd(iOffset) ? 0 : Utils.pInt(iOffset);
			iLimit = Utils.isUnd(iOffset) ? 20 : Utils.pInt(iLimit);
			sSearch = Utils.pString(sSearch);
			sThreadUid = Utils.pString(sThreadUid);

			if ('' !== sFolderHash && ('' === sSearch || -1 === sSearch.indexOf('is:')))
			{
				return this.defaultRequest(fCallback, 'MessageList', {},
					'' === sSearch ? Consts.DEFAULT_AJAX_TIMEOUT : Consts.SEARCH_AJAX_TIMEOUT,
					'MessageList/' + Links.subQueryPrefix() + '/' + Base64.urlsafe_encode([
						sFolderFullNameRaw,
						iOffset,
						iLimit,
						sSearch,
						AppStore.projectHash(),
						sFolderHash,
						sInboxUidNext,
						bUseThreads ? '1' : '0',
						bUseThreads ? sThreadUid : ''
					].join(String.fromCharCode(0))), bSilent ? [] : ['MessageList']);
			}
			else
			{
				return this.defaultRequest(fCallback, 'MessageList', {
					'Folder': sFolderFullNameRaw,
					'Offset': iOffset,
					'Limit': iLimit,
					'Search': sSearch,
					'UidNext': sInboxUidNext,
					'UseThreads': bUseThreads ? '1' : '0',
					'ThreadUid': bUseThreads ? sThreadUid : ''
				}, '' === sSearch ? Consts.DEFAULT_AJAX_TIMEOUT : Consts.SEARCH_AJAX_TIMEOUT,
					'', bSilent ? [] : ['MessageList']);
			}
		};

		/**
		 * @param {?Function} fCallback
		 * @param {Array} aDownloads
		 */
		RemoteUserAjax.prototype.messageUploadAttachments = function (fCallback, aDownloads)
		{
			this.defaultRequest(fCallback, 'MessageUploadAttachments', {
				'Attachments': aDownloads
			}, 999000);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolderFullNameRaw
		 * @param {number} iUid
		 * @return {boolean}
		 */
		RemoteUserAjax.prototype.message = function (fCallback, sFolderFullNameRaw, iUid)
		{
			sFolderFullNameRaw = Utils.pString(sFolderFullNameRaw);
			iUid = Utils.pInt(iUid);

			if (Cache.getFolderFromCacheList(sFolderFullNameRaw) && 0 < iUid)
			{
				this.defaultRequest(fCallback, 'Message', {}, null,
					'Message/' + Links.subQueryPrefix() + '/' + Base64.urlsafe_encode([
						sFolderFullNameRaw,
						iUid,
						AppStore.projectHash(),
						AppStore.threadsAllowed() && SettingsStore.useThreads() ? '1' : '0'
					].join(String.fromCharCode(0))), ['Message']);

				return true;
			}

			return false;
		};

		/**
		 * @param {?Function} fCallback
		 * @param {Array} aExternals
		 */
		RemoteUserAjax.prototype.composeUploadExternals = function (fCallback, aExternals)
		{
			this.defaultRequest(fCallback, 'ComposeUploadExternals', {
				'Externals': aExternals
			}, 999000);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sUrl
		 * @param {string} sAccessToken
		 */
		RemoteUserAjax.prototype.composeUploadDrive = function (fCallback, sUrl, sAccessToken)
		{
			this.defaultRequest(fCallback, 'ComposeUploadDrive', {
				'AccessToken': sAccessToken,
				'Url': sUrl
			}, 999000);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolder
		 * @param {Array=} aList = []
		 */
		RemoteUserAjax.prototype.folderInformation = function (fCallback, sFolder, aList)
		{
			var
				bRequest = true,
				aUids = []
			;

			if (Utils.isArray(aList) && 0 < aList.length)
			{
				bRequest = false;
				_.each(aList, function (oMessageListItem) {
					if (!Cache.getMessageFlagsFromCache(oMessageListItem.folderFullNameRaw, oMessageListItem.uid))
					{
						aUids.push(oMessageListItem.uid);
					}

					if (0 < oMessageListItem.threads().length)
					{
						_.each(oMessageListItem.threads(), function (sUid) {
							if (!Cache.getMessageFlagsFromCache(oMessageListItem.folderFullNameRaw, sUid))
							{
								aUids.push(sUid);
							}
						});
					}
				});

				if (0 < aUids.length)
				{
					bRequest = true;
				}
			}

			if (bRequest)
			{
				this.defaultRequest(fCallback, 'FolderInformation', {
					'Folder': sFolder,
					'FlagsUids': Utils.isArray(aUids) ? aUids.join(',') : '',
					'UidNext': Cache.getFolderInboxName() === sFolder ? Cache.getFolderUidNext(sFolder) : ''
				});
			}
			else if (SettingsStore.useThreads())
			{
				__webpack_require__(/*! App/User */ 6).default.reloadFlagsCurrentMessageListAndMessageFromCache();
			}
		};

		/**
		 * @param {?Function} fCallback
		 * @param {Array} aFolders
		 */
		RemoteUserAjax.prototype.folderInformationMultiply = function (fCallback, aFolders)
		{
			this.defaultRequest(fCallback, 'FolderInformationMultiply', {
				'Folders': aFolders
			});
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.logout = function (fCallback)
		{
			this.defaultRequest(fCallback, 'Logout');
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolderFullNameRaw
		 * @param {Array} aUids
		 * @param {boolean} bSetFlagged
		 */
		RemoteUserAjax.prototype.messageSetFlagged = function (fCallback, sFolderFullNameRaw, aUids, bSetFlagged)
		{
			this.defaultRequest(fCallback, 'MessageSetFlagged', {
				'Folder': sFolderFullNameRaw,
				'Uids': aUids.join(','),
				'SetAction': bSetFlagged ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolderFullNameRaw
		 * @param {Array} aUids
		 * @param {boolean} bSetSeen
		 */
		RemoteUserAjax.prototype.messageSetSeen = function (fCallback, sFolderFullNameRaw, aUids, bSetSeen)
		{
			this.defaultRequest(fCallback, 'MessageSetSeen', {
				'Folder': sFolderFullNameRaw,
				'Uids': aUids.join(','),
				'SetAction': bSetSeen ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolderFullNameRaw
		 * @param {boolean} bSetSeen
		 */
		RemoteUserAjax.prototype.messageSetSeenToAll = function (fCallback, sFolderFullNameRaw, bSetSeen)
		{
			this.defaultRequest(fCallback, 'MessageSetSeenToAll', {
				'Folder': sFolderFullNameRaw,
				'SetAction': bSetSeen ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sIdentityID
		 * @param {string} sMessageFolder
		 * @param {string} sMessageUid
		 * @param {string} sDraftFolder
		 * @param {string} sTo
		 * @param {string} sCc
		 * @param {string} sBcc
		 * @param {string} sSubject
		 * @param {boolean} bTextIsHtml
		 * @param {string} sText
		 * @param {Array} aAttachments
		 * @param {(Array|null)} aDraftInfo
		 * @param {string} sInReplyTo
		 * @param {string} sReferences
		 * @param {boolean} bMarkAsImportant
		 */
		RemoteUserAjax.prototype.saveMessage = function (fCallback, sIdentityID, sMessageFolder, sMessageUid, sDraftFolder,
			sTo, sCc, sBcc, sReplyTo, sSubject, bTextIsHtml, sText, aAttachments, aDraftInfo, sInReplyTo, sReferences, bMarkAsImportant)
		{
			this.defaultRequest(fCallback, 'SaveMessage', {
				'IdentityID': sIdentityID,
				'MessageFolder': sMessageFolder,
				'MessageUid': sMessageUid,
				'DraftFolder': sDraftFolder,
				'To': sTo,
				'Cc': sCc,
				'Bcc': sBcc,
				'ReplyTo': sReplyTo,
				'Subject': sSubject,
				'TextIsHtml': bTextIsHtml ? '1' : '0',
				'Text': sText,
				'DraftInfo': aDraftInfo,
				'InReplyTo': sInReplyTo,
				'References': sReferences,
				'MarkAsImportant': bMarkAsImportant ? '1' : '0',
				'Attachments': aAttachments
			}, Consts.SAVE_MESSAGE_AJAX_TIMEOUT);
		};


		/**
		 * @param {?Function} fCallback
		 * @param {string} sMessageFolder
		 * @param {string} sMessageUid
		 * @param {string} sReadReceipt
		 * @param {string} sSubject
		 * @param {string} sText
		 */
		RemoteUserAjax.prototype.sendReadReceiptMessage = function (fCallback, sMessageFolder, sMessageUid, sReadReceipt, sSubject, sText)
		{
			this.defaultRequest(fCallback, 'SendReadReceiptMessage', {
				'MessageFolder': sMessageFolder,
				'MessageUid': sMessageUid,
				'ReadReceipt': sReadReceipt,
				'Subject': sSubject,
				'Text': sText
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sIdentityID
		 * @param {string} sMessageFolder
		 * @param {string} sMessageUid
		 * @param {string} sSentFolder
		 * @param {string} sTo
		 * @param {string} sCc
		 * @param {string} sBcc
		 * @param {string} sReplyTo
		 * @param {string} sSubject
		 * @param {boolean} bTextIsHtml
		 * @param {string} sText
		 * @param {Array} aAttachments
		 * @param {(Array|null)} aDraftInfo
		 * @param {string} sInReplyTo
		 * @param {string} sReferences
		 * @param {boolean} bRequestDsn
		 * @param {boolean} bRequestReadReceipt
		 * @param {boolean} bMarkAsImportant
		 */
		RemoteUserAjax.prototype.sendMessage = function (fCallback, sIdentityID, sMessageFolder, sMessageUid, sSentFolder,
			sTo, sCc, sBcc, sReplyTo, sSubject, bTextIsHtml, sText, aAttachments, aDraftInfo, sInReplyTo, sReferences,
			bRequestDsn, bRequestReadReceipt, bMarkAsImportant)
		{
			this.defaultRequest(fCallback, 'SendMessage', {
				'IdentityID': sIdentityID,
				'MessageFolder': sMessageFolder,
				'MessageUid': sMessageUid,
				'SentFolder': sSentFolder,
				'To': sTo,
				'Cc': sCc,
				'Bcc': sBcc,
				'ReplyTo': sReplyTo,
				'Subject': sSubject,
				'TextIsHtml': bTextIsHtml ? '1' : '0',
				'Text': sText,
				'DraftInfo': aDraftInfo,
				'InReplyTo': sInReplyTo,
				'References': sReferences,
				'Dsn': bRequestDsn ? '1' : '0',
				'ReadReceiptRequest': bRequestReadReceipt ? '1' : '0',
				'MarkAsImportant': bMarkAsImportant ? '1' : '0',
				'Attachments': aAttachments
			}, Consts.SEND_MESSAGE_AJAX_TIMEOUT);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {Object} oData
		 */
		RemoteUserAjax.prototype.saveSystemFolders = function (fCallback, oData)
		{
			this.defaultRequest(fCallback, 'SystemFoldersUpdate', oData);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {Object} oData
		 */
		RemoteUserAjax.prototype.saveSettings = function (fCallback, oData)
		{
			this.defaultRequest(fCallback, 'SettingsUpdate', oData);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sPrevPassword
		 * @param {string} sNewPassword
		 */
		RemoteUserAjax.prototype.changePassword = function (fCallback, sPrevPassword, sNewPassword)
		{
			this.defaultRequest(fCallback, 'ChangePassword', {
				'PrevPassword': sPrevPassword,
				'NewPassword': sNewPassword
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolderFullNameRaw
		 */
		RemoteUserAjax.prototype.folderClear = function (fCallback, sFolderFullNameRaw)
		{
			this.defaultRequest(fCallback, 'FolderClear', {
				'Folder': sFolderFullNameRaw
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolderFullNameRaw
		 * @param {boolean} bSubscribe
		 */
		RemoteUserAjax.prototype.folderSetSubscribe = function (fCallback, sFolderFullNameRaw, bSubscribe)
		{
			this.defaultRequest(fCallback, 'FolderSubscribe', {
				'Folder': sFolderFullNameRaw,
				'Subscribe': bSubscribe ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolderFullNameRaw
		 * @param {boolean} bCheckable
		 */
		RemoteUserAjax.prototype.folderSetCheckable = function (fCallback, sFolderFullNameRaw, bCheckable)
		{
			this.defaultRequest(fCallback, 'FolderCheckable', {
				'Folder': sFolderFullNameRaw,
				'Checkable': bCheckable ? '1' : '0'
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolder
		 * @param {string} sToFolder
		 * @param {Array} aUids
		 * @param {string=} sLearning
		 * @param {boolean=} bMarkAsRead
		 */
		RemoteUserAjax.prototype.messagesMove = function (fCallback, sFolder, sToFolder, aUids, sLearning, bMarkAsRead)
		{
			this.defaultRequest(fCallback, 'MessageMove', {
				'FromFolder': sFolder,
				'ToFolder': sToFolder,
				'Uids': aUids.join(','),
				'MarkAsRead': bMarkAsRead ? '1' : '0',
				'Learning': sLearning || ''
			}, null, '', ['MessageList']);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolder
		 * @param {string} sToFolder
		 * @param {Array} aUids
		 */
		RemoteUserAjax.prototype.messagesCopy = function (fCallback, sFolder, sToFolder, aUids)
		{
			this.defaultRequest(fCallback, 'MessageCopy', {
				'FromFolder': sFolder,
				'ToFolder': sToFolder,
				'Uids': aUids.join(',')
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sFolder
		 * @param {Array} aUids
		 */
		RemoteUserAjax.prototype.messagesDelete = function (fCallback, sFolder, aUids)
		{
			this.defaultRequest(fCallback, 'MessageDelete', {
				'Folder': sFolder,
				'Uids': aUids.join(',')
			}, null, '', ['MessageList']);
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.appDelayStart = function (fCallback)
		{
			this.defaultRequest(fCallback, 'AppDelayStart');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.quota = function (fCallback)
		{
			this.defaultRequest(fCallback, 'Quota');
		};

		/**
		 * @param {?Function} fCallback
		 * @param {number} iOffset
		 * @param {number} iLimit
		 * @param {string} sSearch
		 */
		RemoteUserAjax.prototype.contacts = function (fCallback, iOffset, iLimit, sSearch)
		{
			this.defaultRequest(fCallback, 'Contacts', {
				'Offset': iOffset,
				'Limit': iLimit,
				'Search': sSearch
			}, null, '', ['Contacts']);
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sRequestUid
		 * @param {string} sUid
		 * @param {Array} aProperties
		 */
		RemoteUserAjax.prototype.contactSave = function (fCallback, sRequestUid, sUid, aProperties)
		{
			this.defaultRequest(fCallback, 'ContactSave', {
				'RequestUid': sRequestUid,
				'Uid': Utils.trim(sUid),
				'Properties': aProperties
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {Array} aUids
		 */
		RemoteUserAjax.prototype.contactsDelete = function (fCallback, aUids)
		{
			this.defaultRequest(fCallback, 'ContactsDelete', {
				'Uids': aUids.join(',')
			});
		};

		/**
		 * @param {?Function} fCallback
		 * @param {string} sQuery
		 * @param {number} iPage
		 */
		RemoteUserAjax.prototype.suggestions = function (fCallback, sQuery, iPage)
		{
			this.defaultRequest(fCallback, 'Suggestions', {
				'Query': sQuery,
				'Page': iPage
			}, null, '', ['Suggestions']);
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.clearUserBackground = function (fCallback)
		{
			this.defaultRequest(fCallback, 'ClearUserBackground');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.facebookUser = function (fCallback)
		{
			this.defaultRequest(fCallback, 'SocialFacebookUserInformation');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.facebookDisconnect = function (fCallback)
		{
			this.defaultRequest(fCallback, 'SocialFacebookDisconnect');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.twitterUser = function (fCallback)
		{
			this.defaultRequest(fCallback, 'SocialTwitterUserInformation');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.twitterDisconnect = function (fCallback)
		{
			this.defaultRequest(fCallback, 'SocialTwitterDisconnect');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.googleUser = function (fCallback)
		{
			this.defaultRequest(fCallback, 'SocialGoogleUserInformation');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.googleDisconnect = function (fCallback)
		{
			this.defaultRequest(fCallback, 'SocialGoogleDisconnect');
		};

		/**
		 * @param {?Function} fCallback
		 */
		RemoteUserAjax.prototype.socialUsers = function (fCallback)
		{
			this.defaultRequest(fCallback, 'SocialUsers');
		};

		module.exports = new RemoteUserAjax();

	}());

/***/ },
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
/* 17 */
/*!******************************!*\
  !*** ./dev/Common/Cache.jsx ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Links__ = __webpack_require__(/*! Common/Links */ 12);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Links___default = __WEBPACK_IMPORTED_MODULE_3_Common_Links__ && __WEBPACK_IMPORTED_MODULE_3_Common_Links__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_Common_Links__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_Common_Links__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3_Common_Links___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3_Common_Links___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Storage_Settings___default = __WEBPACK_IMPORTED_MODULE_4_Storage_Settings__ && __WEBPACK_IMPORTED_MODULE_4_Storage_Settings__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_4_Storage_Settings__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_4_Storage_Settings__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_4_Storage_Settings___default });
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







	var CacheUserStorage = function () {
		function CacheUserStorage() {
			_classCallCheck(this, CacheUserStorage);

			this.oFoldersCache = {};
			this.oFoldersNamesCache = {};
			this.oFolderHashCache = {};
			this.oFolderUidNextCache = {};
			this.oMessageListHashCache = {};
			this.oMessageFlagsCache = {};
			this.oNewMessage = {};
			this.oRequestedMessage = {};
			this.bCapaGravatar = false;
			this.inboxFolderName = '';

			this.bCapaGravatar = /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Storage_Settings___default.a.capa(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["Capa"].Gravatar);
		}

		CacheUserStorage.prototype.clear = function clear() {
			this.oFoldersCache = {};
			this.oFoldersNamesCache = {};
			this.oFolderHashCache = {};
			this.oFolderUidNextCache = {};
			this.oMessageListHashCache = {};
			this.oMessageFlagsCache = {};
		};

		/**
	  * @param {string} email
	  * @param {Function} callback
	  * @return {string}
	  */


		CacheUserStorage.prototype.getUserPic = function getUserPic(email, callback) {
			email = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["trim"].bind()(email);
			callback(this.bCapaGravatar && '' !== email ? /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Links___default.a.avatarLink(email) : '', email);
		};

		/**
	  * @param {string} folderFullNameRaw
	  * @param {string} uid
	  * @return {string}
	  */


		CacheUserStorage.prototype.getMessageKey = function getMessageKey(folderFullNameRaw, uid) {
			return folderFullNameRaw + '#' + uid;
		};

		/**
	  * @param {string} folder
	  * @param {string} uid
	  */


		CacheUserStorage.prototype.addRequestedMessage = function addRequestedMessage(folder, uid) {
			this.oRequestedMessage[this.getMessageKey(folder, uid)] = true;
		};

		/**
	  * @param {string} folder
	  * @param {string} uid
	  * @return {boolean}
	  */


		CacheUserStorage.prototype.hasRequestedMessage = function hasRequestedMessage(folder, uid) {
			return true === this.oRequestedMessage[this.getMessageKey(folder, uid)];
		};

		/**
	  * @param {string} folderFullNameRaw
	  * @param {string} uid
	  */


		CacheUserStorage.prototype.addNewMessageCache = function addNewMessageCache(folderFullNameRaw, uid) {
			this.oNewMessage[this.getMessageKey(folderFullNameRaw, uid)] = true;
		};

		/**
	  * @param {string} folderFullNameRaw
	  * @param {string} uid
	  */


		CacheUserStorage.prototype.hasNewMessageAndRemoveFromCache = function hasNewMessageAndRemoveFromCache(folderFullNameRaw, uid) {
			if (this.oNewMessage[this.getMessageKey(folderFullNameRaw, uid)]) {
				this.oNewMessage[this.getMessageKey(folderFullNameRaw, uid)] = null;
				return true;
			}
			return false;
		};

		CacheUserStorage.prototype.clearNewMessageCache = function clearNewMessageCache() {
			this.oNewMessage = {};
		};

		/**
	  * @return {string}
	  */


		CacheUserStorage.prototype.getFolderInboxName = function getFolderInboxName() {
			return '' === this.inboxFolderName ? 'INBOX' : this.inboxFolderName;
		};

		/**
	  * @param {string} folderHash
	  * @return {string}
	  */


		CacheUserStorage.prototype.getFolderFullNameRaw = function getFolderFullNameRaw(folderHash) {
			return '' !== folderHash && this.oFoldersNamesCache[folderHash] ? this.oFoldersNamesCache[folderHash] : '';
		};

		/**
	  * @param {string} folderHash
	  * @param {string} folderFullNameRaw
	  */


		CacheUserStorage.prototype.setFolderFullNameRaw = function setFolderFullNameRaw(folderHash, folderFullNameRaw) {
			this.oFoldersNamesCache[folderHash] = folderFullNameRaw;
			if ('INBOX' === folderFullNameRaw || '' === this.inboxFolderName) {
				this.inboxFolderName = folderFullNameRaw;
			}
		};

		/**
	  * @param {string} folderFullNameRaw
	  * @return {string}
	  */


		CacheUserStorage.prototype.getFolderHash = function getFolderHash(folderFullNameRaw) {
			return '' !== folderFullNameRaw && this.oFolderHashCache[folderFullNameRaw] ? this.oFolderHashCache[folderFullNameRaw] : '';
		};

		/**
	  * @param {string} folderFullNameRaw
	  * @param {string} folderHash
	  */


		CacheUserStorage.prototype.setFolderHash = function setFolderHash(folderFullNameRaw, folderHash) {
			if ('' !== folderFullNameRaw) {
				this.oFolderHashCache[folderFullNameRaw] = folderHash;
			}
		};

		/**
	  * @param {string} folderFullNameRaw
	  * @return {string}
	  */


		CacheUserStorage.prototype.getFolderUidNext = function getFolderUidNext(folderFullNameRaw) {
			return '' !== folderFullNameRaw && this.oFolderUidNextCache[folderFullNameRaw] ? this.oFolderUidNextCache[folderFullNameRaw] : '';
		};

		/**
	  * @param {string} folderFullNameRaw
	  * @param {string} uidNext
	  */


		CacheUserStorage.prototype.setFolderUidNext = function setFolderUidNext(folderFullNameRaw, uidNext) {
			this.oFolderUidNextCache[folderFullNameRaw] = uidNext;
		};

		/**
	  * @param {string} folderFullNameRaw
	  * @return {?FolderModel}
	  */


		CacheUserStorage.prototype.getFolderFromCacheList = function getFolderFromCacheList(folderFullNameRaw) {
			return '' !== folderFullNameRaw && this.oFoldersCache[folderFullNameRaw] ? this.oFoldersCache[folderFullNameRaw] : null;
		};

		/**
	  * @param {string} folderFullNameRaw
	  * @param {?FolderModel} folder
	  */


		CacheUserStorage.prototype.setFolderToCacheList = function setFolderToCacheList(folderFullNameRaw, folder) {
			this.oFoldersCache[folderFullNameRaw] = folder;
		};

		/**
	  * @param {string} folderFullNameRaw
	  */


		CacheUserStorage.prototype.removeFolderFromCacheList = function removeFolderFromCacheList(folderFullNameRaw) {
			this.setFolderToCacheList(folderFullNameRaw, null);
		};

		/**
	  * @param {string} folderFullName
	  * @param {string} uid
	  * @return {?Array}
	  */


		CacheUserStorage.prototype.getMessageFlagsFromCache = function getMessageFlagsFromCache(folderFullName, uid) {
			return this.oMessageFlagsCache[folderFullName] && this.oMessageFlagsCache[folderFullName][uid] ? this.oMessageFlagsCache[folderFullName][uid] : null;
		};

		/**
	  * @param {string} folderFullName
	  * @param {string} uid
	  * @param {Array} flagsCache
	  */


		CacheUserStorage.prototype.setMessageFlagsToCache = function setMessageFlagsToCache(folderFullName, uid, flagsCache) {
			if (!this.oMessageFlagsCache[folderFullName]) {
				this.oMessageFlagsCache[folderFullName] = {};
			}

			this.oMessageFlagsCache[folderFullName][uid] = flagsCache;
		};

		/**
	  * @param {string} folderFullName
	  */


		CacheUserStorage.prototype.clearMessageFlagsFromCacheByFolder = function clearMessageFlagsFromCacheByFolder(folderFullName) {
			this.oMessageFlagsCache[folderFullName] = {};
		};

		/**
	  * @param {(MessageModel|null)} message
	  */


		CacheUserStorage.prototype.initMessageFlagsFromCache = function initMessageFlagsFromCache(message) {
			var _this = this;

			if (message) {
				(function () {
					var uid = message.uid,
					    flags = _this.getMessageFlagsFromCache(message.folderFullNameRaw, uid);

					if (flags && 0 < flags.length) {
						message.flagged(!!flags[1]);

						if (!message.__simple_message__) {
							message.unseen(!!flags[0]);
							message.answered(!!flags[2]);
							message.forwarded(!!flags[3]);
							message.isReadReceipt(!!flags[4]);
							message.deletedMark(!!flags[5]);
						}
					}

					if (0 < message.threads().length) {
						var unseenSubUid = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].find(message.threads(), function (sSubUid) {
							if (uid !== sSubUid) {
								var subFlags = _this.getMessageFlagsFromCache(message.folderFullNameRaw, sSubUid);
								return subFlags && 0 < subFlags.length && !!subFlags[0];
							}
							return false;
						});

						var flaggedSubUid = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].find(message.threads(), function (sSubUid) {
							if (uid !== sSubUid) {
								var subFlags = _this.getMessageFlagsFromCache(message.folderFullNameRaw, sSubUid);
								return subFlags && 0 < subFlags.length && !!subFlags[1];
							}
							return false;
						});

						message.hasUnseenSubMessage(unseenSubUid && 0 < /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["pInt"].bind()(unseenSubUid));
						message.hasFlaggedSubMessage(flaggedSubUid && 0 < /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["pInt"].bind()(flaggedSubUid));
					}
				})();
			}
		};

		/**
	  * @param {(MessageModel|null)} message
	  */


		CacheUserStorage.prototype.storeMessageFlagsToCache = function storeMessageFlagsToCache(message) {
			if (message) {
				this.setMessageFlagsToCache(message.folderFullNameRaw, message.uid, [message.unseen(), message.flagged(), message.answered(), message.forwarded(), message.isReadReceipt(), message.deletedMark()]);
			}
		};

		/**
	  * @param {string} folder
	  * @param {string} uid
	  * @param {Array} flags
	  */


		CacheUserStorage.prototype.storeMessageFlagsToCacheByFolderAndUid = function storeMessageFlagsToCacheByFolderAndUid(folder, uid, flags) {
			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["isArray"].bind()(flags) && 0 < flags.length) {
				this.setMessageFlagsToCache(folder, uid, flags);
			}
		};

		/**
	  * @param {string} folder
	  * @param {string} uid
	  * @param {number} setAction
	  */


		CacheUserStorage.prototype.storeMessageFlagsToCacheBySetAction = function storeMessageFlagsToCacheBySetAction(folder, uid, setAction) {

			var unread = 0;
			var flags = this.getMessageFlagsFromCache(folder, uid);

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["isArray"].bind()(flags) && 0 < flags.length) {
				if (flags[0]) {
					unread = 1;
				}

				switch (setAction) {
					case /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["MessageSetAction"].SetSeen:
						flags[0] = false;
						break;
					case /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["MessageSetAction"].UnsetSeen:
						flags[0] = true;
						break;
					case /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["MessageSetAction"].SetFlag:
						flags[1] = true;
						break;
					case /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["MessageSetAction"].UnsetFlag:
						flags[1] = false;
						break;
				}

				this.setMessageFlagsToCache(folder, uid, flags);
			}

			return unread;
		};

		return CacheUserStorage;
	}();

	module.exports = new CacheUserStorage();

/***/ },
/* 18 */
/*!*****************************!*\
  !*** external "window.key" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = window.key;

/***/ },
/* 19 */,
/* 20 */,
/* 21 */
/*!***********************************!*\
  !*** ./dev/Stores/User/Folder.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Utils = __webpack_require__(/*! Common/Utils */ 0),

			Cache = __webpack_require__(/*! Common/Cache */ 17)
		;

		/**
		 * @constructor
		 */
		function FolderUserStore()
		{
			this.displaySpecSetting = ko.observable(true);

			this.sentFolder = ko.observable('');
			this.draftFolder = ko.observable('');
			this.spamFolder = ko.observable('');
			this.trashFolder = ko.observable('');
			this.archiveFolder = ko.observable('');

			this.namespace = '';

			this.folderList = ko.observableArray([]);
			this.folderList.optimized = ko.observable(false);
			this.folderList.error = ko.observable('');

			this.foldersLoading = ko.observable(false);
			this.foldersCreating = ko.observable(false);
			this.foldersDeleting = ko.observable(false);
			this.foldersRenaming = ko.observable(false);

			this.foldersInboxUnreadCount = ko.observable(0);

			this.currentFolder = ko.observable(null).extend({'toggleSubscribe': [null,
				function (oPrev) { if (oPrev) { oPrev.selected(false); }},
				function (oNext) { if (oNext) { oNext.selected(true); }}
			]});

			this.computers();
			this.subscribers();
		}

		FolderUserStore.prototype.computers = function ()
		{
			this.draftFolderNotEnabled = ko.computed(function () {
				return '' === this.draftFolder() || Consts.UNUSED_OPTION_VALUE === this.draftFolder();
			}, this);

			this.foldersListWithSingleInboxRootFolder = ko.computed(function () {
				return !_.find(this.folderList(), function (oFolder) {
					return oFolder && !oFolder.isSystemFolder() && oFolder.visible();
				});
			}, this);

			this.currentFolderFullNameRaw = ko.computed(function () {
				return this.currentFolder() ? this.currentFolder().fullNameRaw : '';
			}, this);

			this.currentFolderFullName = ko.computed(function () {
				return this.currentFolder() ? this.currentFolder().fullName : '';
			}, this);

			this.currentFolderFullNameHash = ko.computed(function () {
				return this.currentFolder() ? this.currentFolder().fullNameHash : '';
			}, this);

			this.foldersChanging = ko.computed(function () {
				var
					bLoading = this.foldersLoading(),
					bCreating = this.foldersCreating(),
					bDeleting = this.foldersDeleting(),
					bRenaming = this.foldersRenaming()
				;
				return bLoading || bCreating || bDeleting || bRenaming;
			}, this);

			this.folderListSystemNames = ko.computed(function () {

				var
					aList = [Cache.getFolderInboxName()],
					aFolders = this.folderList(),
					sSentFolder = this.sentFolder(),
					sDraftFolder = this.draftFolder(),
					sSpamFolder = this.spamFolder(),
					sTrashFolder = this.trashFolder(),
					sArchiveFolder = this.archiveFolder()
				;

				if (Utils.isArray(aFolders) && 0 < aFolders.length)
				{
					if ('' !== sSentFolder && Consts.UNUSED_OPTION_VALUE !== sSentFolder)
					{
						aList.push(sSentFolder);
					}
					if ('' !== sDraftFolder && Consts.UNUSED_OPTION_VALUE !== sDraftFolder)
					{
						aList.push(sDraftFolder);
					}
					if ('' !== sSpamFolder && Consts.UNUSED_OPTION_VALUE !== sSpamFolder)
					{
						aList.push(sSpamFolder);
					}
					if ('' !== sTrashFolder && Consts.UNUSED_OPTION_VALUE !== sTrashFolder)
					{
						aList.push(sTrashFolder);
					}
					if ('' !== sArchiveFolder && Consts.UNUSED_OPTION_VALUE !== sArchiveFolder)
					{
						aList.push(sArchiveFolder);
					}
				}

				return aList;

			}, this);

			this.folderListSystem = ko.computed(function () {
				return _.compact(_.map(this.folderListSystemNames(), function (sName) {
					return Cache.getFolderFromCacheList(sName);
				}));
			}, this);

			this.folderMenuForMove = ko.computed(function () {
				return Utils.folderListOptionsBuilder(this.folderListSystem(), this.folderList(), [
					this.currentFolderFullNameRaw()
				], null, null, null, null, function (oItem) {
					return oItem ? oItem.localName() : '';
				});
			}, this);

			this.folderMenuForFilters = ko.computed(function () {
				return Utils.folderListOptionsBuilder(this.folderListSystem(), this.folderList(),
					['INBOX'], [['', '']], null, null, null, function (oItem) {
						return oItem ? oItem.localName() : '';
					}
				);
			}, this);
		};

		FolderUserStore.prototype.subscribers = function ()
		{
			var
				fRemoveSystemFolderType = function (observable) {
					return function () {
						var oFolder = Cache.getFolderFromCacheList(observable());
						if (oFolder)
						{
							oFolder.type(Enums.FolderType.User);
						}
					};
				},
				fSetSystemFolderType = function (iType) {
					return function (sValue) {
						var oFolder = Cache.getFolderFromCacheList(sValue);
						if (oFolder)
						{
							oFolder.type(iType);
						}
					};
				}
			;

			this.sentFolder.subscribe(fRemoveSystemFolderType(this.sentFolder), this, 'beforeChange');
			this.draftFolder.subscribe(fRemoveSystemFolderType(this.draftFolder), this, 'beforeChange');
			this.spamFolder.subscribe(fRemoveSystemFolderType(this.spamFolder), this, 'beforeChange');
			this.trashFolder.subscribe(fRemoveSystemFolderType(this.trashFolder), this, 'beforeChange');
			this.archiveFolder.subscribe(fRemoveSystemFolderType(this.archiveFolder), this, 'beforeChange');

			this.sentFolder.subscribe(fSetSystemFolderType(Enums.FolderType.SentItems), this);
			this.draftFolder.subscribe(fSetSystemFolderType(Enums.FolderType.Draft), this);
			this.spamFolder.subscribe(fSetSystemFolderType(Enums.FolderType.Spam), this);
			this.trashFolder.subscribe(fSetSystemFolderType(Enums.FolderType.Trash), this);
			this.archiveFolder.subscribe(fSetSystemFolderType(Enums.FolderType.Archive), this);
		};

		/**
		 * @return {Array}
		 */
		FolderUserStore.prototype.getNextFolderNames = function ()
		{
			var
				aResult = [],
				iLimit = 5,
				iUtc = __webpack_require__(/*! Common/Momentor */ 25).momentNowUnix(),
				iTimeout = iUtc - 60 * 5,
				aTimeouts = [],
				sInboxFolderName = Cache.getFolderInboxName(),
				fSearchFunction = function (aList) {
					_.each(aList, function (oFolder) {
						if (oFolder && sInboxFolderName !== oFolder.fullNameRaw &&
							oFolder.selectable && oFolder.existen &&
							iTimeout > oFolder.interval &&
							(oFolder.isSystemFolder() || (oFolder.subScribed() && oFolder.checkable()))
						)
						{
							aTimeouts.push([oFolder.interval, oFolder.fullNameRaw]);
						}

						if (oFolder && 0 < oFolder.subFolders().length)
						{
							fSearchFunction(oFolder.subFolders());
						}
					});
				}
			;

			fSearchFunction(this.folderList());

			aTimeouts.sort(function(a, b) {
				if (a[0] < b[0]) {
					return -1;
				} else if (a[0] > b[0]) {
					return 1;
				}

				return 0;
			});

			_.find(aTimeouts, function (aItem) {
				var oFolder = Cache.getFolderFromCacheList(aItem[1]);
				if (oFolder)
				{
					oFolder.interval = iUtc;
					aResult.push(aItem[1]);
				}

				return iLimit <= aResult.length;
			});

			aResult = _.uniq(aResult);

			return aResult;
		};

		module.exports = new FolderUserStore();

	}());


/***/ },
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
/* 23 */
/*!*********************************!*\
  !*** ./dev/Stores/User/App.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ko___default = __WEBPACK_IMPORTED_MODULE_0_ko__ && __WEBPACK_IMPORTED_MODULE_0_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default = __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__ && __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Stores_AbstractApp__ = __webpack_require__(/*! Stores/AbstractApp */ 78);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









	var AppUserStore = function (_AbstractAppStore) {
			_inherits(AppUserStore, _AbstractAppStore);

			function AppUserStore() {
					_classCallCheck(this, AppUserStore);

					var _this = _possibleConstructorReturn(this, _AbstractAppStore.call(this));

					_this.currentAudio = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable('');

					_this.focusedState = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["Focused"].None);

					_this.focusedState.subscribe(function (value) {

							switch (value) {
									default:
											break;
									case /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["Focused"].MessageList:
											/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["keyScope"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["KeyState"].MessageList);
											break;
									case /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["Focused"].MessageView:
											/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["keyScope"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["KeyState"].MessageView);
											break;
									case /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["Focused"].FolderList:
											/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["keyScope"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Enums__["KeyState"].FolderList);
											break;
							}
					}, _this);

					_this.projectHash = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable('');
					_this.threadsAllowed = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(false);

					_this.composeInEdit = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(false);

					_this.contactsAutosave = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(false);
					_this.useLocalProxyForExternalImages = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(false);

					_this.contactsIsAllowed = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observable(false);

					_this.attachmentsActions = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_ko___default.a.observableArray([]);

					_this.devEmail = '';
					_this.devPassword = '';
					return _this;
			}

			AppUserStore.prototype.populate = function populate() {

					_AbstractAppStore.prototype.populate.call(this);

					this.projectHash(/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default.a.settingsGet('ProjectHash'));

					this.contactsAutosave(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default.a.settingsGet('ContactsAutosave'));
					this.useLocalProxyForExternalImages(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default.a.settingsGet('UseLocalProxyForExternalImages'));

					this.contactsIsAllowed(!!/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default.a.settingsGet('ContactsIsAllowed'));

					var attachmentsActions = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default.a.appSettingsGet('attachmentsActions');
					this.attachmentsActions(/* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isNonEmptyArray"].bind()(attachmentsActions) ? attachmentsActions : []);

					this.devEmail = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default.a.settingsGet('DevEmail');
					this.devPassword = /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Storage_Settings___default.a.settingsGet('DevPassword');
			};

			return AppUserStore;
	}(/* harmony import */__WEBPACK_IMPORTED_MODULE_5_Stores_AbstractApp__["a"]);

	module.exports = new AppUserStore();

/***/ },
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
/* 26 */
/*!************************************!*\
  !*** ./dev/Knoin/AbstractModel.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			Utils = __webpack_require__(/*! Common/Utils */ 0)
		;

		/**
		 * @constructor
		 *
		 * @param {string} sModelName
		 */
		function AbstractModel(sModelName)
		{
			this.sModelName = sModelName || '';
			this.disposables = [];
		}

		/**
		 * @param {Array|Object} mInputValue
		 */
		AbstractModel.prototype.regDisposables = function (mInputValue)
		{
			if (Utils.isArray(mInputValue))
			{
				_.each(mInputValue, function (mValue) {
					this.disposables.push(mValue);
				}, this);
			}
			else if (mInputValue)
			{
				this.disposables.push(mInputValue);
			}

		};

		AbstractModel.prototype.onDestroy = function ()
		{
			Utils.disposeObject(this);
		};

		module.exports = AbstractModel;

	}());



/***/ },
/* 27 */
/*!*************************************!*\
  !*** ./dev/Stores/User/Settings.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			ko = __webpack_require__(/*! ko */ 1),

			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Events = __webpack_require__(/*! Common/Events */ 24),

			Settings = __webpack_require__(/*! Storage/Settings */ 8)
		;

		/**
		 * @constructor
		 */
		function SettingsUserStore()
		{
			this.iAutoLogoutTimer = 0;

			this.layout = ko.observable(Enums.Layout.SidePreview)
				.extend({'limitedList': [
					Enums.Layout.SidePreview, Enums.Layout.BottomPreview, Enums.Layout.NoPreview
				]});

			this.editorDefaultType = ko.observable(Enums.EditorDefaultType.Html)
				.extend({'limitedList': [
					Enums.EditorDefaultType.Html, Enums.EditorDefaultType.Plain,
					Enums.EditorDefaultType.HtmlForced, Enums.EditorDefaultType.PlainForced
				]});

			this.messagesPerPage = ko.observable(Consts.MESSAGES_PER_PAGE)
				.extend({'limitedList': Consts.MESSAGES_PER_PAGE_VALUES});

			this.showImages = ko.observable(false);
			this.useCheckboxesInList = ko.observable(true);
			this.useThreads = ko.observable(false);
			this.replySameFolder = ko.observable(false);

			this.autoLogout = ko.observable(30);

			this.computers();
			this.subscribers();
		}

		SettingsUserStore.prototype.computers = function ()
		{
			this.usePreviewPane = ko.computed(function () {
				return Enums.Layout.NoPreview !== this.layout();
			}, this);
		};

		SettingsUserStore.prototype.subscribers = function ()
		{
			this.layout.subscribe(function (nValue) {

				Globals.$html.toggleClass('rl-no-preview-pane', Enums.Layout.NoPreview === nValue);
				Globals.$html.toggleClass('rl-side-preview-pane', Enums.Layout.SidePreview === nValue);
				Globals.$html.toggleClass('rl-bottom-preview-pane', Enums.Layout.BottomPreview === nValue);
				Globals.$html.toggleClass('rl-mobile-layout', Enums.Layout.Mobile === nValue);

				Events.pub('layout', [nValue]);
			});
		};

		SettingsUserStore.prototype.populate = function ()
		{
			this.layout(Utils.pInt(Settings.settingsGet('Layout')));
			this.editorDefaultType(Settings.settingsGet('EditorDefaultType'));

			this.autoLogout(Utils.pInt(Settings.settingsGet('AutoLogout')));
			this.messagesPerPage(Settings.settingsGet('MPP'));

			this.showImages(!!Settings.settingsGet('ShowImages'));
			this.useCheckboxesInList(!!Settings.settingsGet('UseCheckboxesInList'));
			this.useThreads(!!Settings.settingsGet('UseThreads'));
			this.replySameFolder(!!Settings.settingsGet('ReplySameFolder'));

			var self = this;

			Events.sub('rl.auto-logout-refresh', function () {
				window.clearTimeout(self.iAutoLogoutTimer);
				if (0 < self.autoLogout() && !Settings.settingsGet('AccountSignMe'))
				{
					self.iAutoLogoutTimer = window.setTimeout(function () {
						Events.pub('rl.auto-logout');
					}, self.autoLogout() * 1000 * 60);
				}
			});

			Events.pub('rl.auto-logout-refresh');
		};

		module.exports = new SettingsUserStore();

	}());


/***/ },
/* 28 */
/*!***********************************!*\
  !*** ./dev/View/Popup/Compose.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	
	/* global require, module */

	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),
			ko = __webpack_require__(/*! ko */ 1),
			JSON = __webpack_require__(/*! JSON */ 39),
			Jua = __webpack_require__(/*! Jua */ 82),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Events = __webpack_require__(/*! Common/Events */ 24),
			Links = __webpack_require__(/*! Common/Links */ 12),
			HtmlEditor = __webpack_require__(/*! Common/HtmlEditor */ 44),

			Translator = __webpack_require__(/*! Common/Translator */ 5),
			Momentor = __webpack_require__(/*! Common/Momentor */ 25),

			Cache = __webpack_require__(/*! Common/Cache */ 17),

			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			SettingsStore = __webpack_require__(/*! Stores/User/Settings */ 27),
			IdentityStore = __webpack_require__(/*! Stores/User/Identity */ 54),
			AccountStore = __webpack_require__(/*! Stores/User/Account */ 30),
			FolderStore = __webpack_require__(/*! Stores/User/Folder */ 21),
			PgpStore = __webpack_require__(/*! Stores/User/Pgp */ 32),
			MessageStore = __webpack_require__(/*! Stores/User/Message */ 31),
			SocialStore = __webpack_require__(/*! Stores/Social */ 33),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			ComposeAttachmentModel = __webpack_require__(/*! Model/ComposeAttachment */ 109),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function ComposePopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsCompose');

			var
				self = this,
				fEmailOutInHelper = function (self, oIdentity, sName, bIn) {
					if (oIdentity && self && oIdentity[sName]() && (bIn ? true : self[sName]()))
					{
						var
							sIdentityEmail = oIdentity[sName](),
							aList = Utils.trim(self[sName]()).split(/[,]/)
						;

						aList = _.filter(aList, function (sEmail) {
							sEmail = Utils.trim(sEmail);
							return sEmail && Utils.trim(sIdentityEmail) !== sEmail;
						});

						if (bIn)
						{
							aList.push(sIdentityEmail);
						}

						self[sName](aList.join(','));
					}
				}
			;

			this.oLastMessage = null;
			this.oEditor = null;
			this.aDraftInfo = null;
			this.sInReplyTo = '';
			this.bFromDraft = false;
			this.sReferences = '';

			this.sLastFocusedField = 'to';

			this.resizerTrigger = _.bind(this.resizerTrigger, this);

			this.allowContacts = !!AppStore.contactsIsAllowed();
			this.allowFolders = !!Settings.capa(Enums.Capa.Folders);

			this.bSkipNextHide = false;
			this.composeInEdit = AppStore.composeInEdit;
			this.editorDefaultType = SettingsStore.editorDefaultType;

			this.capaOpenPGP = PgpStore.capaOpenPGP;

			this.identitiesDropdownTrigger = ko.observable(false);

			this.to = ko.observable('');
			this.to.focused = ko.observable(false);
			this.cc = ko.observable('');
			this.cc.focused = ko.observable(false);
			this.bcc = ko.observable('');
			this.bcc.focused = ko.observable(false);
			this.replyTo = ko.observable('');
			this.replyTo.focused = ko.observable(false);

			ko.computed(function () {
				switch (true)
				{
					case this.to.focused():
						this.sLastFocusedField = 'to';
						break;
					case this.cc.focused():
						this.sLastFocusedField = 'cc';
						break;
					case this.bcc.focused():
						this.sLastFocusedField = 'bcc';
						break;
				}
			}, this).extend({'notify': 'always'});

			this.subject = ko.observable('');
			this.subject.focused = ko.observable(false);

			this.isHtml = ko.observable(false);

			this.requestDsn = ko.observable(false);
			this.requestReadReceipt = ko.observable(false);
			this.markAsImportant = ko.observable(false);

			this.sendError = ko.observable(false);
			this.sendSuccessButSaveError = ko.observable(false);
			this.savedError = ko.observable(false);

			this.sendButtonSuccess = ko.computed(function () {
				return !this.sendError() && !this.sendSuccessButSaveError();
			}, this);

			this.sendErrorDesc = ko.observable('');
			this.savedErrorDesc = ko.observable('');

			this.sendError.subscribe(function (bValue) {
				if (!bValue)
				{
					this.sendErrorDesc('');
				}
			}, this);

			this.savedError.subscribe(function (bValue) {
				if (!bValue)
				{
					this.savedErrorDesc('');
				}
			}, this);

			this.sendSuccessButSaveError.subscribe(function (bValue) {
				if (!bValue)
				{
					this.savedErrorDesc('');
				}
			}, this);

			this.savedTime = ko.observable(0);
			this.savedTimeText = ko.computed(function () {
				return 0 < this.savedTime() ? Translator.i18n('COMPOSE/SAVED_TIME', {
					'TIME': Momentor.format(this.savedTime() - 1, 'LT')
				}) : '';
			}, this);

			this.emptyToError = ko.observable(false);
			this.emptyToErrorTooltip = ko.computed(function () {
				return this.emptyToError() ? Translator.i18n('COMPOSE/EMPTY_TO_ERROR_DESC') : '';
			}, this);

			this.attachmentsInProcessError = ko.observable(false);
			this.attachmentsInErrorError = ko.observable(false);

			this.attachmentsErrorTooltip = ko.computed(function () {

				var sResult = '';
				switch (true)
				{
					case this.attachmentsInProcessError():
						sResult = Translator.i18n('COMPOSE/ATTACHMENTS_UPLOAD_ERROR_DESC');
						break;
					case this.attachmentsInErrorError():
						sResult = Translator.i18n('COMPOSE/ATTACHMENTS_ERROR_DESC');
						break;
				}

				return sResult;

			}, this);

			this.showCc = ko.observable(false);
			this.showBcc = ko.observable(false);
			this.showReplyTo = ko.observable(false);

			this.cc.subscribe(function (aValue) {
				if (false === self.showCc() && 0 < aValue.length)
				{
					self.showCc(true);
				}
			}, this);

			this.bcc.subscribe(function (aValue) {
				if (false === self.showBcc() && 0 < aValue.length)
				{
					self.showBcc(true);
				}
			}, this);

			this.replyTo.subscribe(function (aValue) {
				if (false === self.showReplyTo() && 0 < aValue.length)
				{
					self.showReplyTo(true);
				}
			}, this);

			this.draftFolder = ko.observable('');
			this.draftUid = ko.observable('');
			this.sending = ko.observable(false);
			this.saving = ko.observable(false);
			this.attachments = ko.observableArray([]);

			this.attachmentsInProcess = this.attachments.filter(function (oItem) {
				return oItem && !oItem.complete();
			});

			this.attachmentsInReady = this.attachments.filter(function (oItem) {
				return oItem && oItem.complete();
			});

			this.attachmentsInError = this.attachments.filter(function (oItem) {
				return oItem && '' !== oItem.error();
			});

			this.attachmentsCount = ko.computed(function () {
				return this.attachments().length;
			}, this);

			this.attachmentsInErrorCount = ko.computed(function () {
				return this.attachmentsInError().length;
			}, this);

			this.attachmentsInProcessCount = ko.computed(function () {
				return this.attachmentsInProcess().length;
			}, this);

			this.isDraftFolderMessage = ko.computed(function () {
				return '' !== this.draftFolder() && '' !== this.draftUid();
			}, this);

			this.attachmentsPlace = ko.observable(false);

			this.attachments.subscribe(this.resizerTrigger);
			this.attachmentsPlace.subscribe(this.resizerTrigger);

			this.attachmentsInErrorCount.subscribe(function (iN) {
				if (0 === iN)
				{
					this.attachmentsInErrorError(false);
				}
			}, this);

			this.composeUploaderButton = ko.observable(null);
			this.composeUploaderDropPlace = ko.observable(null);
			this.dragAndDropEnabled = ko.observable(false);
			this.dragAndDropOver = ko.observable(false).extend({'throttle': 1});
			this.dragAndDropVisible = ko.observable(false).extend({'throttle': 1});
			this.attacheMultipleAllowed = ko.observable(false);
			this.addAttachmentEnabled = ko.observable(false);

			this.composeEditorArea = ko.observable(null);

			this.identities = IdentityStore.identities;
			this.identitiesOptions = ko.computed(function () {
				return _.map(IdentityStore.identities(), function (oItem) {
					return {
						'item': oItem,
						'optValue': oItem.id(),
						'optText': oItem.formattedName()
					};
				});
			}, this);

			this.currentIdentity = ko.observable(
				this.identities()[0] ? this.identities()[0] : null);

			this.currentIdentity.extend({'toggleSubscribe': [this,
				function (oIdentity) {
					fEmailOutInHelper(this, oIdentity, 'bcc');
					fEmailOutInHelper(this, oIdentity, 'replyTo');
				}, function (oIdentity) {
					fEmailOutInHelper(this, oIdentity, 'bcc', true);
					fEmailOutInHelper(this, oIdentity, 'replyTo', true);
				}
			]});

			this.currentIdentityView = ko.computed(function () {
				var oItem = this.currentIdentity();
				return oItem ? oItem.formattedName() : 'unknown';
			}, this);

			this.to.subscribe(function (sValue) {
				if (this.emptyToError() && 0 < sValue.length)
				{
					this.emptyToError(false);
				}
			}, this);

			this.attachmentsInProcess.subscribe(function (aValue) {
				if (this.attachmentsInProcessError() && Utils.isArray(aValue) && 0 === aValue.length)
				{
					this.attachmentsInProcessError(false);
				}
			}, this);

			this.resizer = ko.observable(false).extend({'throttle': 50});

			this.resizer.subscribe(_.bind(function () {
				if (this.oEditor){
					this.oEditor.resize();
				}
			}, this));

			this.canBeSentOrSaved = ko.computed(function () {
				return !this.sending() && !this.saving();
			}, this);

			this.deleteCommand = Utils.createCommand(this, function () {

				__webpack_require__(/*! App/User */ 6).default.deleteMessagesFromFolderWithoutCheck(this.draftFolder(), [this.draftUid()]);
				kn.hideScreenPopup(ComposePopupView);

			}, function () {
				return this.isDraftFolderMessage();
			});

			this.sendMessageResponse = _.bind(this.sendMessageResponse, this);
			this.saveMessageResponse = _.bind(this.saveMessageResponse, this);

			this.sendCommand = Utils.createCommand(this, function () {

				var
					sTo = Utils.trim(this.to()),
					sCc = Utils.trim(this.cc()),
					sBcc = Utils.trim(this.bcc()),
					sSentFolder = FolderStore.sentFolder(),
					aFlagsCache = []
				;

				this.attachmentsInProcessError(false);
				this.attachmentsInErrorError(false);
				this.emptyToError(false);

				if (0 < this.attachmentsInProcess().length)
				{
					this.attachmentsInProcessError(true);
					this.attachmentsPlace(true);
				}
				else if (0 < this.attachmentsInError().length)
				{
					this.attachmentsInErrorError(true);
					this.attachmentsPlace(true);
				}

				if ('' === sTo && '' === sCc && '' === sBcc)
				{
					this.emptyToError(true);
				}

				if (!this.emptyToError() && !this.attachmentsInErrorError() && !this.attachmentsInProcessError())
				{
					if (SettingsStore.replySameFolder())
					{
						if (Utils.isArray(this.aDraftInfo) && 3 === this.aDraftInfo.length && Utils.isNormal(this.aDraftInfo[2]) && 0 < this.aDraftInfo[2].length)
						{
							sSentFolder = this.aDraftInfo[2];
						}
					}

					if (!this.allowFolders)
					{
						sSentFolder = Consts.UNUSED_OPTION_VALUE;
					}

					if ('' === sSentFolder)
					{
						kn.showScreenPopup(__webpack_require__(/*! View/Popup/FolderSystem */ 53), [Enums.SetSystemFoldersNotification.Sent]);
					}
					else
					{
						this.sendError(false);
						this.sending(true);

						if (Utils.isArray(this.aDraftInfo) && 3 === this.aDraftInfo.length)
						{
							aFlagsCache = Cache.getMessageFlagsFromCache(this.aDraftInfo[2], this.aDraftInfo[1]);
							if (aFlagsCache)
							{
								if ('forward' === this.aDraftInfo[0])
								{
									aFlagsCache[3] = true;
								}
								else
								{
									aFlagsCache[2] = true;
								}

								Cache.setMessageFlagsToCache(this.aDraftInfo[2], this.aDraftInfo[1], aFlagsCache);
								__webpack_require__(/*! App/User */ 6).default.reloadFlagsCurrentMessageListAndMessageFromCache();
								Cache.setFolderHash(this.aDraftInfo[2], '');
							}
						}

						sSentFolder = Consts.UNUSED_OPTION_VALUE === sSentFolder ? '' : sSentFolder;

						Cache.setFolderHash(this.draftFolder(), '');
						Cache.setFolderHash(sSentFolder, '');

						Remote.sendMessage(
							this.sendMessageResponse,
							this.currentIdentity() ? this.currentIdentity().id() : '',
							this.draftFolder(),
							this.draftUid(),
							sSentFolder,
							sTo,
							this.cc(),
							this.bcc(),
							this.replyTo(),
							this.subject(),
							this.oEditor ? this.oEditor.isHtml() : false,
							this.oEditor ? this.oEditor.getData(true, true) : '',
							this.prepearAttachmentsForSendOrSave(),
							this.aDraftInfo,
							this.sInReplyTo,
							this.sReferences,
							this.requestDsn(),
							this.requestReadReceipt(),
							this.markAsImportant()
						);
					}
				}

			}, this.canBeSentOrSaved);

			this.saveCommand = Utils.createCommand(this, function () {

				if (!this.allowFolders)
				{
					return false;
				}

				if (FolderStore.draftFolderNotEnabled())
				{
					kn.showScreenPopup(__webpack_require__(/*! View/Popup/FolderSystem */ 53), [Enums.SetSystemFoldersNotification.Draft]);
				}
				else
				{
					this.savedError(false);
					this.saving(true);

					this.autosaveStart();

					Cache.setFolderHash(FolderStore.draftFolder(), '');

					Remote.saveMessage(
						this.saveMessageResponse,
						this.currentIdentity() ? this.currentIdentity().id() : '',
						this.draftFolder(),
						this.draftUid(),
						FolderStore.draftFolder(),
						this.to(),
						this.cc(),
						this.bcc(),
						this.replyTo(),
						this.subject(),
						this.oEditor ? this.oEditor.isHtml() : false,
						this.oEditor ? this.oEditor.getData(true) : '',
						this.prepearAttachmentsForSendOrSave(),
						this.aDraftInfo,
						this.sInReplyTo,
						this.sReferences,
						this.markAsImportant()
					);
				}

			}, this.canBeSentOrSaved);

			this.skipCommand = Utils.createCommand(this, function () {

				this.bSkipNextHide = true;

				if (this.modalVisibility() && !this.saving() && !this.sending() &&
					!FolderStore.draftFolderNotEnabled())
				{
					this.saveCommand();
				}

				this.tryToClosePopup();

			}, this.canBeSentOrSaved);

			this.contactsCommand = Utils.createCommand(this, function () {

				if (this.allowContacts)
				{
					this.skipCommand();

					var self = this;

					_.delay(function () {
						kn.showScreenPopup(__webpack_require__(/*! View/Popup/Contacts */ 63),
							[true, self.sLastFocusedField]);
					}, 200);
				}

			}, function () {
				return this.allowContacts;
			});

			Events.sub('interval.2m', function () {

				if (this.modalVisibility() && !FolderStore.draftFolderNotEnabled() && !this.isEmptyForm(false) &&
					!this.saving() && !this.sending() && !this.savedError())
				{
					this.saveCommand();
				}
			}, this);

			this.showCc.subscribe(this.resizerTrigger);
			this.showBcc.subscribe(this.resizerTrigger);
			this.showReplyTo.subscribe(this.resizerTrigger);

			this.dropboxEnabled = SocialStore.dropbox.enabled;
			this.dropboxApiKey = SocialStore.dropbox.apiKey;

			this.dropboxCommand = Utils.createCommand(this, function () {

				if (window.Dropbox)
				{
					window.Dropbox.choose({
						'success': function(aFiles) {

							if (aFiles && aFiles[0] && aFiles[0]['link'])
							{
								self.addDropboxAttachment(aFiles[0]);
							}
						},
						'linkType': 'direct',
						'multiselect': false
					});
				}

				return true;

			}, function () {
				return this.dropboxEnabled();
			});

			this.driveEnabled = ko.observable(Globals.bXMLHttpRequestSupported &&
				!!Settings.settingsGet('AllowGoogleSocial') && !!Settings.settingsGet('AllowGoogleSocialDrive') &&
				!!Settings.settingsGet('GoogleClientID') && !!Settings.settingsGet('GoogleApiKey'));

			this.driveVisible = ko.observable(false);

			this.driveCommand = Utils.createCommand(this, function () {

				this.driveOpenPopup();
				return true;

			}, function () {
				return this.driveEnabled();
			});

			this.driveCallback = _.bind(this.driveCallback, this);

			this.onMessageUploadAttachments = _.bind(this.onMessageUploadAttachments, this);

			this.bDisabeCloseOnEsc = true;
			this.sDefaultKeyScope = Enums.KeyState.Compose;

			this.tryToClosePopup = _.debounce(_.bind(this.tryToClosePopup, this), 200);

			this.emailsSource = _.bind(this.emailsSource, this);
			this.autosaveFunction = _.bind(this.autosaveFunction, this);

			this.iTimer = 0;

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/Compose', 'PopupsComposeViewModel'], ComposePopupView);
		_.extend(ComposePopupView.prototype, AbstractView.prototype);

		ComposePopupView.prototype.autosaveFunction = function ()
		{
			if (this.modalVisibility() && !FolderStore.draftFolderNotEnabled() && !this.isEmptyForm(false) &&
				!this.saving() && !this.sending() && !this.savedError())
			{
				this.saveCommand();
			}

			this.autosaveStart();
		};

		ComposePopupView.prototype.autosaveStart = function ()
		{
			window.clearTimeout(this.iTimer);
			this.iTimer = window.setTimeout(this.autosaveFunction, 1000 * 60 * 1);
		};

		ComposePopupView.prototype.autosaveStop = function ()
		{
			window.clearTimeout(this.iTimer);
		};

		ComposePopupView.prototype.emailsSource = function (oData, fResponse)
		{
			__webpack_require__(/*! App/User */ 6).default.getAutocomplete(oData.term, function (aData) {
				fResponse(_.map(aData, function (oEmailItem) {
					return oEmailItem.toLine(false);
				}));
			});
		};

		ComposePopupView.prototype.openOpenPgpPopup = function ()
		{
			if (PgpStore.capaOpenPGP() && this.oEditor && !this.oEditor.isHtml())
			{
				var self = this;
				kn.showScreenPopup(__webpack_require__(/*! View/Popup/ComposeOpenPgp */ 152), [
					function (sResult) {
						self.editor(function (oEditor) {
							oEditor.setPlain(sResult);
						});
					},
					this.oEditor.getData(false, true),
					this.currentIdentity(),
					this.to(),
					this.cc(),
					this.bcc()
				]);
			}
		};

		ComposePopupView.prototype.reloadDraftFolder = function ()
		{
			var
				sDraftFolder = FolderStore.draftFolder()
			;

			if ('' !== sDraftFolder && Consts.UNUSED_OPTION_VALUE !== sDraftFolder)
			{
				Cache.setFolderHash(sDraftFolder, '');
				if (FolderStore.currentFolderFullNameRaw() === sDraftFolder)
				{
					__webpack_require__(/*! App/User */ 6).default.reloadMessageList(true);
				}
				else
				{
					__webpack_require__(/*! App/User */ 6).default.folderInformation(sDraftFolder);
				}
			}
		};

		ComposePopupView.prototype.findIdentityByMessage = function (sComposeType, oMessage)
		{
			var
				aIdentities = IdentityStore.identities(),
				iResultIndex = 1000,
				oResultIdentity = null,
				oIdentitiesCache = {},

				fEachHelper = function (oItem) {

					if (oItem && oItem.email && oIdentitiesCache[oItem.email])
					{
						if (!oResultIdentity || iResultIndex > oIdentitiesCache[oItem.email][1])
						{
							oResultIdentity = oIdentitiesCache[oItem.email][0];
							iResultIndex = oIdentitiesCache[oItem.email][1];
						}
					}
				}
			;

			_.each(aIdentities, function (oItem, iIndex) {
				oIdentitiesCache[oItem.email()] = [oItem, iIndex];
			});

			if (oMessage)
			{
				switch (sComposeType)
				{
					case Enums.ComposeType.Empty:
						break;
					case Enums.ComposeType.Reply:
					case Enums.ComposeType.ReplyAll:
					case Enums.ComposeType.Forward:
					case Enums.ComposeType.ForwardAsAttachment:
						_.each(_.union(oMessage.to, oMessage.cc, oMessage.bcc), fEachHelper);
						if (!oResultIdentity) {
							_.each(oMessage.deliveredTo, fEachHelper);
						}
						break;
					case Enums.ComposeType.Draft:
						_.each(_.union(oMessage.from, oMessage.replyTo), fEachHelper);
						break;
				}
			}

			return oResultIdentity || aIdentities[0] || null;
		};

		ComposePopupView.prototype.selectIdentity = function (oIdentity)
		{
			if (oIdentity && oIdentity.item)
			{
				this.currentIdentity(oIdentity.item);
				this.setSignatureFromIdentity(oIdentity.item);
			}
		};

		ComposePopupView.prototype.sendMessageResponse = function (sResult, oData)
		{
			var
				bResult = false,
				sMessage = ''
			;

			this.sending(false);

			if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
			{
				bResult = true;
				if (this.modalVisibility())
				{
					Utils.delegateRun(this, 'closeCommand');
				}
			}

			if (this.modalVisibility() && !bResult)
			{
				if (oData && Enums.Notification.CantSaveMessage === oData.ErrorCode)
				{
					this.sendSuccessButSaveError(true);
					this.savedErrorDesc(Utils.trim(Translator.i18n('COMPOSE/SAVED_ERROR_ON_SEND')));
				}
				else
				{
					sMessage = Translator.getNotification(oData && oData.ErrorCode ? oData.ErrorCode : Enums.Notification.CantSendMessage,
						oData && oData.ErrorMessage ? oData.ErrorMessage : '');

					this.sendError(true);
					this.sendErrorDesc(sMessage || Translator.getNotification(Enums.Notification.CantSendMessage));
				}
			}

			this.reloadDraftFolder();
		};

		ComposePopupView.prototype.saveMessageResponse = function (sResult, oData)
		{
			var
				bResult = false,
				oMessage = null
			;

			this.saving(false);

			if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
			{
				if (oData.Result.NewFolder && oData.Result.NewUid)
				{
					bResult = true;

					if (this.bFromDraft)
					{
						oMessage = MessageStore.message();
						if (oMessage && this.draftFolder() === oMessage.folderFullNameRaw && this.draftUid() === oMessage.uid)
						{
							MessageStore.message(null);
						}
					}

					this.draftFolder(oData.Result.NewFolder);
					this.draftUid(oData.Result.NewUid);

					this.savedTime(window.Math.round((new window.Date()).getTime() / 1000));

					if (this.bFromDraft)
					{
						Cache.setFolderHash(this.draftFolder(), '');
					}
				}
			}

			if (!bResult)
			{
				this.savedError(true);
				this.savedErrorDesc(Translator.getNotification(Enums.Notification.CantSaveMessage));
			}

			this.reloadDraftFolder();
		};

		ComposePopupView.prototype.onHide = function ()
		{
			this.autosaveStop();

			if (!this.bSkipNextHide)
			{
				AppStore.composeInEdit(false);
				this.reset();
			}

			this.bSkipNextHide = false;

			this.to.focused(false);

			kn.routeOn();
		};

		ComposePopupView.prototype.editor = function (fOnInit)
		{
			if (fOnInit)
			{
				var self = this;
				if (!this.oEditor && this.composeEditorArea())
				{
	//_.delay(function () {
					self.oEditor = new HtmlEditor(self.composeEditorArea(), null, function () {
						fOnInit(self.oEditor);
						self.resizerTrigger();
					}, function (bHtml) {
						self.isHtml(!!bHtml);
					});
	//}, 1000);
				}
				else if (this.oEditor)
				{
					fOnInit(this.oEditor);
					this.resizerTrigger();
				}
			}
		};

		ComposePopupView.prototype.converSignature = function (sSignature)
		{
			var
				iLimit = 10,
				oMatch = null,
				aMoments = [],
				oMomentRegx = /{{MOMENT:([^}]+)}}/g,
				sFrom = ''
			;

			sSignature = sSignature.replace(/[\r]/g, '');

			sFrom = this.oLastMessage ? this.emailArrayToStringLineHelper(this.oLastMessage.from, true) : '';
			if ('' !== sFrom)
			{
				sSignature = sSignature.replace(/{{FROM-FULL}}/g, sFrom);

				if (-1 === sFrom.indexOf(' ') && 0 < sFrom.indexOf('@'))
				{
					sFrom = sFrom.replace(/@[\S]+/, '');
				}

				sSignature = sSignature.replace(/{{FROM}}/g, sFrom);
			}

			sSignature = sSignature.replace(/[\s]{1,2}{{FROM}}/g, '{{FROM}}');
			sSignature = sSignature.replace(/[\s]{1,2}{{FROM-FULL}}/g, '{{FROM-FULL}}');

			sSignature = sSignature.replace(/{{FROM}}/g, '');
			sSignature = sSignature.replace(/{{FROM-FULL}}/g, '');

			if (-1 < sSignature.indexOf('{{DATE}}'))
			{
				sSignature = sSignature.replace(/{{DATE}}/g, Momentor.format(0, 'llll'));
			}

			if (-1 < sSignature.indexOf('{{TIME}}'))
			{
				sSignature = sSignature.replace(/{{TIME}}/g, Momentor.format(0, 'LT'));
			}
			if (-1 < sSignature.indexOf('{{MOMENT:'))
			{
				try
				{
					while ((oMatch = oMomentRegx.exec(sSignature)) !== null)
					{
						if (oMatch && oMatch[0] && oMatch[1])
						{
							aMoments.push([oMatch[0], oMatch[1]]);
						}

						iLimit--;
						if (0 === iLimit)
						{
							break;
						}
					}

					if (aMoments && 0 < aMoments.length)
					{
						_.each(aMoments, function (aData) {
							sSignature = sSignature.replace(
								aData[0], Momentor.format(0, aData[1]));
						});
					}

					sSignature = sSignature.replace(/{{MOMENT:[^}]+}}/g, '');
				}
				catch(e) {}
			}

			return sSignature;
		};

		ComposePopupView.prototype.setSignatureFromIdentity = function (oIdentity)
		{
			if (oIdentity)
			{
				var self = this;
				this.editor(function (oEditor) {
					var bHtml = false, sSignature = oIdentity.signature();
					if ('' !== sSignature)
					{
						if (':HTML:' === sSignature.substr(0, 6))
						{
							bHtml = true;
							sSignature = sSignature.substr(6);
						}
					}

					oEditor.setSignature(self.converSignature(sSignature),
						bHtml, !!oIdentity.signatureInsertBefore());
				});
			}
		};

		/**
		 * @param {string=} sType = Enums.ComposeType.Empty
		 * @param {?MessageModel|Array=} oMessageOrArray = null
		 * @param {Array=} aToEmails = null
		 * @param {Array=} aCcEmails = null
		 * @param {Array=} aBccEmails = null
		 * @param {string=} sCustomSubject = null
		 * @param {string=} sCustomPlainText = null
		 */
		ComposePopupView.prototype.onShow = function (sType, oMessageOrArray,
			aToEmails, aCcEmails, aBccEmails, sCustomSubject, sCustomPlainText)
		{
			kn.routeOff();

			this.autosaveStart();

			if (AppStore.composeInEdit())
			{
				sType = sType || Enums.ComposeType.Empty;

				var self = this;

				if (Enums.ComposeType.Empty !== sType)
				{
					kn.showScreenPopup(__webpack_require__(/*! View/Popup/Ask */ 42), [Translator.i18n('COMPOSE/DISCARD_UNSAVED_DATA'), function () {
						self.initOnShow(sType, oMessageOrArray, aToEmails, aCcEmails, aBccEmails, sCustomSubject, sCustomPlainText);
					}, null, null, null, false]);
				}
				else
				{
					this.addEmailsTo(this.to, aToEmails);
					this.addEmailsTo(this.cc, aCcEmails);
					this.addEmailsTo(this.bcc, aBccEmails);

					if (Utils.isNormal(sCustomSubject) && '' !== sCustomSubject &&
						'' === this.subject())
					{
						this.subject(sCustomSubject);
					}
				}
			}
			else
			{
				this.initOnShow(sType, oMessageOrArray, aToEmails, aCcEmails, aBccEmails, sCustomSubject, sCustomPlainText);
			}
		};

		/**
		 * @param {Function} fKoValue
		 * @param {Array} aEmails
		 */
		ComposePopupView.prototype.addEmailsTo = function (fKoValue, aEmails)
		{
			var
				sValue = Utils.trim(fKoValue()),
				aValue = []
			;

			if (Utils.isNonEmptyArray(aEmails))
			{
				aValue = _.uniq(_.compact(_.map(aEmails, function (oItem) {
					return oItem ? oItem.toLine(false) : null;
				})));

				fKoValue(sValue + ('' === sValue ? '' : ', ') + Utils.trim(aValue.join(', ')));
			}
		};

		/**
		 *
		 * @param {Array} aList
		 * @param {boolean} bFriendly
		 * @return {string}
		 */
		ComposePopupView.prototype.emailArrayToStringLineHelper = function (aList, bFriendly)
		{
			var
				iIndex = 0,
				iLen = aList.length,
				aResult = []
			;

			for (; iIndex < iLen; iIndex++)
			{
				aResult.push(aList[iIndex].toLine(!!bFriendly));
			}

			return aResult.join(', ');
		};

		/**
		 * @param {string=} sType = Enums.ComposeType.Empty
		 * @param {?MessageModel|Array=} oMessageOrArray = null
		 * @param {Array=} aToEmails = null
		 * @param {Array=} aCcEmails = null
		 * @param {Array=} aBccEmails = null
		 * @param {string=} sCustomSubject = null
		 * @param {string=} sCustomPlainText = null
		 */
		ComposePopupView.prototype.initOnShow = function (sType, oMessageOrArray,
			aToEmails, aCcEmails, aBccEmails, sCustomSubject, sCustomPlainText)
		{
			AppStore.composeInEdit(true);

			var
				self = this,
				sFrom = '',
				sTo = '',
				sCc = '',
				sDate = '',
				sSubject = '',
				oText = null,
				sText = '',
				sReplyTitle = '',
				aResplyAllParts = [],
				oExcludeEmail = {},
				oIdentity = null,
				mEmail = AccountStore.email(),
				aDownloads = [],
				aDraftInfo = null,
				oMessage = null,
				sComposeType = sType || Enums.ComposeType.Empty
			;

			oMessageOrArray = oMessageOrArray || null;
			if (oMessageOrArray && Utils.isNormal(oMessageOrArray))
			{
				oMessage = Utils.isArray(oMessageOrArray) && 1 === oMessageOrArray.length ? oMessageOrArray[0] :
					(!Utils.isArray(oMessageOrArray) ? oMessageOrArray : null);
			}

			this.oLastMessage = oMessage;

			if (null !== mEmail)
			{
				oExcludeEmail[mEmail] = true;
			}

			this.reset();

			oIdentity = this.findIdentityByMessage(sComposeType, oMessage);
			if (oIdentity)
			{
				oExcludeEmail[oIdentity.email()] = true;
			}

			if (Utils.isNonEmptyArray(aToEmails))
			{
				this.to(this.emailArrayToStringLineHelper(aToEmails));
			}

			if (Utils.isNonEmptyArray(aCcEmails))
			{
				this.cc(this.emailArrayToStringLineHelper(aCcEmails));
			}

			if (Utils.isNonEmptyArray(aBccEmails))
			{
				this.bcc(this.emailArrayToStringLineHelper(aBccEmails));
			}

			if ('' !== sComposeType && oMessage)
			{
				sDate = Momentor.format(oMessage.dateTimeStampInUTC(), 'FULL');
				sSubject = oMessage.subject();
				aDraftInfo = oMessage.aDraftInfo;

				oText = $(oMessage.body).clone();
				if (oText)
				{
					oText.find('blockquote.rl-bq-switcher').removeClass('rl-bq-switcher hidden-bq');
					oText.find('.rlBlockquoteSwitcher').off('.rlBlockquoteSwitcher').remove();
					oText.find('[data-html-editor-font-wrapper]').removeAttr('data-html-editor-font-wrapper');

	//				(function () {
	//
	//					var oTmp = null, iLimit = 0;
	//
	//					while (true)
	//					{
	//						iLimit++;
	//
	//						oTmp = oText.children();
	//						if (10 > iLimit && oTmp.is('div') && 1 === oTmp.length)
	//						{
	//							oTmp.children().unwrap();
	//							continue;
	//						}
	//
	//						break;
	//					}
	//
	//				}());

					sText = oText.html();
				}

				switch (sComposeType)
				{
					case Enums.ComposeType.Empty:
						break;

					case Enums.ComposeType.Reply:
						this.to(this.emailArrayToStringLineHelper(oMessage.replyEmails(oExcludeEmail)));
						this.subject(Utils.replySubjectAdd('Re', sSubject));
						this.prepearMessageAttachments(oMessage, sComposeType);
						this.aDraftInfo = ['reply', oMessage.uid, oMessage.folderFullNameRaw];
						this.sInReplyTo = oMessage.sMessageId;
						this.sReferences = Utils.trim(this.sInReplyTo + ' ' + oMessage.sReferences);
						break;

					case Enums.ComposeType.ReplyAll:
						aResplyAllParts = oMessage.replyAllEmails(oExcludeEmail);
						this.to(this.emailArrayToStringLineHelper(aResplyAllParts[0]));
						this.cc(this.emailArrayToStringLineHelper(aResplyAllParts[1]));
						this.subject(Utils.replySubjectAdd('Re', sSubject));
						this.prepearMessageAttachments(oMessage, sComposeType);
						this.aDraftInfo = ['reply', oMessage.uid, oMessage.folderFullNameRaw];
						this.sInReplyTo = oMessage.sMessageId;
						this.sReferences = Utils.trim(this.sInReplyTo + ' ' + oMessage.references());
						break;

					case Enums.ComposeType.Forward:
						this.subject(Utils.replySubjectAdd('Fwd', sSubject));
						this.prepearMessageAttachments(oMessage, sComposeType);
						this.aDraftInfo = ['forward', oMessage.uid, oMessage.folderFullNameRaw];
						this.sInReplyTo = oMessage.sMessageId;
						this.sReferences = Utils.trim(this.sInReplyTo + ' ' + oMessage.sReferences);
						break;

					case Enums.ComposeType.ForwardAsAttachment:
						this.subject(Utils.replySubjectAdd('Fwd', sSubject));
						this.prepearMessageAttachments(oMessage, sComposeType);
						this.aDraftInfo = ['forward', oMessage.uid, oMessage.folderFullNameRaw];
						this.sInReplyTo = oMessage.sMessageId;
						this.sReferences = Utils.trim(this.sInReplyTo + ' ' + oMessage.sReferences);
						break;

					case Enums.ComposeType.Draft:
						this.to(this.emailArrayToStringLineHelper(oMessage.to));
						this.cc(this.emailArrayToStringLineHelper(oMessage.cc));
						this.bcc(this.emailArrayToStringLineHelper(oMessage.bcc));
						this.replyTo(this.emailArrayToStringLineHelper(oMessage.replyTo));

						this.bFromDraft = true;

						this.draftFolder(oMessage.folderFullNameRaw);
						this.draftUid(oMessage.uid);

						this.subject(sSubject);
						this.prepearMessageAttachments(oMessage, sComposeType);

						this.aDraftInfo = Utils.isNonEmptyArray(aDraftInfo) && 3 === aDraftInfo.length ? aDraftInfo : null;
						this.sInReplyTo = oMessage.sInReplyTo;
						this.sReferences = oMessage.sReferences;
						break;

					case Enums.ComposeType.EditAsNew:
						this.to(this.emailArrayToStringLineHelper(oMessage.to));
						this.cc(this.emailArrayToStringLineHelper(oMessage.cc));
						this.bcc(this.emailArrayToStringLineHelper(oMessage.bcc));
						this.replyTo(this.emailArrayToStringLineHelper(oMessage.replyTo));

						this.subject(sSubject);
						this.prepearMessageAttachments(oMessage, sComposeType);

						this.aDraftInfo = Utils.isNonEmptyArray(aDraftInfo) && 3 === aDraftInfo.length ? aDraftInfo : null;
						this.sInReplyTo = oMessage.sInReplyTo;
						this.sReferences = oMessage.sReferences;
						break;
				}

				switch (sComposeType)
				{
					case Enums.ComposeType.Reply:
					case Enums.ComposeType.ReplyAll:
						sFrom = oMessage.fromToLine(false, true);
						sReplyTitle = Translator.i18n('COMPOSE/REPLY_MESSAGE_TITLE', {
							'DATETIME': sDate,
							'EMAIL': sFrom
						});

						sText = '<br /><br />' + sReplyTitle + ':' +
							'<blockquote>' + Utils.trim(sText) + '</blockquote>';
	//						'<blockquote><p>' + Utils.trim(sText) + '</p></blockquote>';

						break;

					case Enums.ComposeType.Forward:
						sFrom = oMessage.fromToLine(false, true);
						sTo = oMessage.toToLine(false, true);
						sCc = oMessage.ccToLine(false, true);
						sText = '<br /><br />' + Translator.i18n('COMPOSE/FORWARD_MESSAGE_TOP_TITLE') +
								'<br />' + Translator.i18n('COMPOSE/FORWARD_MESSAGE_TOP_FROM') + ': ' + sFrom +
								'<br />' + Translator.i18n('COMPOSE/FORWARD_MESSAGE_TOP_TO') + ': ' + sTo +
								(0 < sCc.length ? '<br />' + Translator.i18n('COMPOSE/FORWARD_MESSAGE_TOP_CC') + ': ' + sCc : '') +
								'<br />' + Translator.i18n('COMPOSE/FORWARD_MESSAGE_TOP_SENT') + ': ' + Utils.encodeHtml(sDate) +
								'<br />' + Translator.i18n('COMPOSE/FORWARD_MESSAGE_TOP_SUBJECT') + ': ' + Utils.encodeHtml(sSubject) +
								'<br /><br />' + Utils.trim(sText) + '<br /><br />';
						break;

					case Enums.ComposeType.ForwardAsAttachment:
						sText = '';
						break;
				}

				this.editor(function (oEditor) {

					oEditor.setHtml(sText, false);

					if (Enums.EditorDefaultType.PlainForced === self.editorDefaultType() ||
						(!oMessage.isHtml() && Enums.EditorDefaultType.HtmlForced !== self.editorDefaultType()))
					{
						oEditor.modeToggle(false);
					}

					if (oIdentity && Enums.ComposeType.Draft !== sComposeType && Enums.ComposeType.EditAsNew !== sComposeType)
					{
						self.setSignatureFromIdentity(oIdentity);
					}

					self.setFocusInPopup();
				});
			}
			else if (Enums.ComposeType.Empty === sComposeType)
			{
				this.subject(Utils.isNormal(sCustomSubject) ? '' + sCustomSubject : '');

				sText = Utils.isNormal(sCustomPlainText) ? '' + sCustomPlainText : '';

				this.editor(function (oEditor) {

					oEditor.setHtml(sText, false);

					if (Enums.EditorDefaultType.Html !== self.editorDefaultType() &&
						Enums.EditorDefaultType.HtmlForced !== self.editorDefaultType())
					{
						oEditor.modeToggle(false);
					}

					if (oIdentity)
					{
						self.setSignatureFromIdentity(oIdentity);
					}

					self.setFocusInPopup();
				});
			}
			else if (Utils.isNonEmptyArray(oMessageOrArray))
			{
				_.each(oMessageOrArray, function (oMessage) {
					self.addMessageAsAttachment(oMessage);
				});

				this.editor(function (oEditor) {

					oEditor.setHtml('', false);

					if (Enums.EditorDefaultType.Html !== self.editorDefaultType() &&
						Enums.EditorDefaultType.HtmlForced !== self.editorDefaultType())
					{
						oEditor.modeToggle(false);
					}

					if (oIdentity && Enums.ComposeType.Draft !== sComposeType && Enums.ComposeType.EditAsNew !== sComposeType)
					{
						self.setSignatureFromIdentity(oIdentity);
					}

					self.setFocusInPopup();
				});
			}
			else
			{
				this.setFocusInPopup();
			}

			aDownloads = this.getAttachmentsDownloadsForUpload();
			if (Utils.isNonEmptyArray(aDownloads))
			{
				Remote.messageUploadAttachments(this.onMessageUploadAttachments, aDownloads);
			}

			if (oIdentity)
			{
				this.currentIdentity(oIdentity);
			}

			this.resizerTrigger();
		};

		ComposePopupView.prototype.onMessageUploadAttachments = function (sResult, oData)
		{
			if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
			{
				var
					oAttachment = null,
					sTempName = ''
				;

				if (!this.viewModelVisibility())
				{
					for (sTempName in oData.Result)
					{
						if (oData.Result.hasOwnProperty(sTempName))
						{
							oAttachment = this.getAttachmentById(oData.Result[sTempName]);
							if (oAttachment)
							{
								oAttachment.tempName(sTempName);
								oAttachment.waiting(false).uploading(false).complete(true);
							}
						}
					}
				}
			}
			else
			{
				this.setMessageAttachmentFailedDownloadText();
			}
		};

		ComposePopupView.prototype.setFocusInPopup = function ()
		{
			if (!Globals.bMobileDevice)
			{
				var self = this;
				_.delay(function () {

					if ('' === self.to())
					{
						self.to.focused(true);
					}
					else if (self.oEditor)
					{
						if (!self.to.focused())
						{
							self.oEditor.focus();
						}
					}

				}, 100);
			}
		};

		ComposePopupView.prototype.onShowWithDelay = function ()
		{
			this.resizerTrigger();
		};

		ComposePopupView.prototype.tryToClosePopup = function ()
		{
			var
				self = this,
				PopupsAskViewModel = __webpack_require__(/*! View/Popup/Ask */ 42)
			;

			if (!kn.isPopupVisible(PopupsAskViewModel) && this.modalVisibility())
			{
				if (this.bSkipNextHide || (this.isEmptyForm() && !this.draftUid()))
				{
					Utils.delegateRun(self, 'closeCommand');
				}
				else
				{
					kn.showScreenPopup(PopupsAskViewModel, [Translator.i18n('POPUPS_ASK/DESC_WANT_CLOSE_THIS_WINDOW'), function () {
						if (self.modalVisibility())
						{
							Utils.delegateRun(self, 'closeCommand');
						}
					}]);
				}
			}
		};

		ComposePopupView.prototype.onBuild = function ()
		{
			this.initUploader();

			var
				self = this,
				oScript = null
			;

			key('ctrl+q, command+q, ctrl+w, command+w', Enums.KeyState.Compose, function () {
				return false;
			});

			key('`', Enums.KeyState.Compose, function () {
				if (self.oEditor && !self.oEditor.hasFocus() && !Utils.inFocus())
				{
					self.identitiesDropdownTrigger(true);
					return false;
				}
			});

			key('ctrl+`', Enums.KeyState.Compose, function () {
				self.identitiesDropdownTrigger(true);
				return false;
			});

			key('esc, ctrl+down, command+down', Enums.KeyState.Compose, function () {
				self.skipCommand();
				return false;
			});

			if (this.allowFolders)
			{
				key('ctrl+s, command+s', Enums.KeyState.Compose, function () {
					self.saveCommand();
					return false;
				});
			}

			if (!!Settings.appSettingsGet('allowCtrlEnterOnCompose'))
			{
				key('ctrl+enter, command+enter', Enums.KeyState.Compose, function () {
					self.sendCommand();
					return false;
				});
			}

			key('shift+esc', Enums.KeyState.Compose, function () {
				if (self.modalVisibility())
				{
					self.tryToClosePopup();
				}
				return false;
			});

			Events.sub('window.resize.real', this.resizerTrigger);
			Events.sub('window.resize.real', _.debounce(this.resizerTrigger, 50));

			if (this.dropboxEnabled() && this.dropboxApiKey() && !window.Dropbox)
			{
				oScript = window.document.createElement('script');
				oScript.type = 'text/javascript';
				oScript.src = 'https://www.dropbox.com/static/api/2/dropins.js';
				$(oScript).attr('id', 'dropboxjs').attr('data-app-key', self.dropboxApiKey());

				window.document.body.appendChild(oScript);
			}

			if (this.driveEnabled())
			{
				$.getScript('https://apis.google.com/js/api.js', function () {
					if (window.gapi)
					{
						self.driveVisible(true);
					}
				});
			}

			window.setInterval(function () {
				if (self.modalVisibility() && self.oEditor)
				{
					self.oEditor.resize();
				}
			}, 5000);
		};

		ComposePopupView.prototype.driveCallback = function (sAccessToken, oData)
		{
			if (oData && window.XMLHttpRequest && window.google &&
				oData[window.google.picker.Response.ACTION] === window.google.picker.Action.PICKED &&
				oData[window.google.picker.Response.DOCUMENTS] && oData[window.google.picker.Response.DOCUMENTS][0] &&
				oData[window.google.picker.Response.DOCUMENTS][0]['id'])
			{
				var
					self = this,
					oRequest = new window.XMLHttpRequest()
				;

				oRequest.open('GET', 'https://www.googleapis.com/drive/v2/files/' + oData[window.google.picker.Response.DOCUMENTS][0]['id']);
				oRequest.setRequestHeader('Authorization', 'Bearer ' + sAccessToken);
				oRequest.addEventListener('load', function() {
					if (oRequest && oRequest.responseText)
					{
						var oItem = JSON.parse(oRequest.responseText), fExport = function (oItem, sMimeType, sExt) {
							if (oItem && oItem['exportLinks'])
							{
								if (oItem['exportLinks'][sMimeType])
								{
									oItem['downloadUrl'] = oItem['exportLinks'][sMimeType];
									oItem['title'] = oItem['title'] + '.' + sExt;
									oItem['mimeType'] = sMimeType;
								}
								else if (oItem['exportLinks']['application/pdf'])
								{
									oItem['downloadUrl'] = oItem['exportLinks']['application/pdf'];
									oItem['title'] = oItem['title'] + '.pdf';
									oItem['mimeType'] = 'application/pdf';
								}
							}
						};

						if (oItem && !oItem['downloadUrl'] && oItem['mimeType'] && oItem['exportLinks'])
						{
							switch (oItem['mimeType'].toString().toLowerCase())
							{
								case 'application/vnd.google-apps.document':
									fExport(oItem, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'docx');
									break;
								case 'application/vnd.google-apps.spreadsheet':
									fExport(oItem, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'xlsx');
									break;
								case 'application/vnd.google-apps.drawing':
									fExport(oItem, 'image/png', 'png');
									break;
								case 'application/vnd.google-apps.presentation':
									fExport(oItem, 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'pptx');
									break;
								default:
									fExport(oItem, 'application/pdf', 'pdf');
									break;
							}
						}

						if (oItem && oItem['downloadUrl'])
						{
							self.addDriveAttachment(oItem, sAccessToken);
						}
					}
				});

				oRequest.send();
			}
		};

		ComposePopupView.prototype.driveCreatePiker = function (oOauthToken)
		{
			if (window.gapi && oOauthToken && oOauthToken.access_token)
			{
				var self = this;

				window.gapi.load('picker', {'callback': function () {

					if (window.google && window.google.picker)
					{
						var drivePicker = new window.google.picker.PickerBuilder()
							// .addView(window.google.picker.ViewId.FOLDERS)
							.addView(window.google.picker.ViewId.DOCS)
							.setAppId(Settings.settingsGet('GoogleClientID'))
							.setOAuthToken(oOauthToken.access_token)
							.setCallback(_.bind(self.driveCallback, self, oOauthToken.access_token))
							.enableFeature(window.google.picker.Feature.NAV_HIDDEN)
							// .setOrigin(window.location.protocol + '//' + window.location.host)
							.build()
						;

						drivePicker.setVisible(true);
					}
				}});
			}
		};

		ComposePopupView.prototype.driveOpenPopup = function ()
		{
			if (window.gapi)
			{
				var self = this;

				window.gapi.load('auth', {'callback': function () {

					var
						oAuthToken = window.gapi.auth.getToken(),
						fResult = function (oAuthResult) {
							if (oAuthResult && !oAuthResult.error)
							{
								var oAuthToken = window.gapi.auth.getToken();
								if (oAuthToken)
								{
									self.driveCreatePiker(oAuthToken);
								}

								return true;
							}

							return false;
						}
					;

					if (!oAuthToken)
					{
						window.gapi.auth.authorize({
							'client_id': Settings.settingsGet('GoogleClientID'),
							'scope': 'https://www.googleapis.com/auth/drive.readonly',
							'immediate': true
						}, function (oAuthResult) {

							if (!fResult(oAuthResult))
							{
								window.gapi.auth.authorize({
									'client_id': Settings.settingsGet('GoogleClientID'),
									'scope': 'https://www.googleapis.com/auth/drive.readonly',
									'immediate': false
								}, fResult);
							}
						});
					}
					else
					{
						self.driveCreatePiker(oAuthToken);
					}
				}});
			}
		};

		/**
		 * @param {string} sId
		 * @return {?Object}
		 */
		ComposePopupView.prototype.getAttachmentById = function (sId)
		{
			var
				aAttachments = this.attachments(),
				iIndex = 0,
				iLen = aAttachments.length
			;

			for (; iIndex < iLen; iIndex++)
			{
				if (aAttachments[iIndex] && sId === aAttachments[iIndex].id)
				{
					return aAttachments[iIndex];
				}
			}

			return null;
		};

		ComposePopupView.prototype.cancelAttachmentHelper = function (sId, oJua) {

			var self = this;
			return function () {

				var oItem = _.find(self.attachments(), function (oItem) {
					return oItem && oItem.id === sId;
				});

				if (oItem)
				{
					self.attachments.remove(oItem);
					Utils.delegateRunOnDestroy(oItem);

					if (oJua)
					{
						oJua.cancel(sId);
					}
				}
			};

		};

		ComposePopupView.prototype.initUploader = function ()
		{
			if (this.composeUploaderButton())
			{
				var
					oUploadCache = {},
					iAttachmentSizeLimit = Utils.pInt(Settings.settingsGet('AttachmentLimit')),
					oJua = new Jua({
						'action': Links.upload(),
						'name': 'uploader',
						'queueSize': 2,
						'multipleSizeLimit': 50,
						'clickElement': this.composeUploaderButton(),
						'dragAndDropElement': this.composeUploaderDropPlace()
					})
				;

				if (oJua)
				{
					oJua
		//				.on('onLimitReached', function (iLimit) {
		//					alert(iLimit);
		//				})
						.on('onDragEnter', _.bind(function () {
							this.dragAndDropOver(true);
						}, this))
						.on('onDragLeave', _.bind(function () {
							this.dragAndDropOver(false);
						}, this))
						.on('onBodyDragEnter', _.bind(function () {
							this.attachmentsPlace(true);
							this.dragAndDropVisible(true);
						}, this))
						.on('onBodyDragLeave', _.bind(function () {
							this.dragAndDropVisible(false);
						}, this))
						.on('onProgress', _.bind(function (sId, iLoaded, iTotal) {
							var oItem = null;
							if (Utils.isUnd(oUploadCache[sId]))
							{
								oItem = this.getAttachmentById(sId);
								if (oItem)
								{
									oUploadCache[sId] = oItem;
								}
							}
							else
							{
								oItem = oUploadCache[sId];
							}

							if (oItem)
							{
								oItem.progress(window.Math.floor(iLoaded / iTotal * 100));
							}

						}, this))
						.on('onSelect', _.bind(function (sId, oData) {

							this.dragAndDropOver(false);

							var
								that = this,
								sFileName = Utils.isUnd(oData.FileName) ? '' : oData.FileName.toString(),
								mSize = Utils.isNormal(oData.Size) ? Utils.pInt(oData.Size) : null,
								oAttachment = new ComposeAttachmentModel(sId, sFileName, mSize)
							;

							oAttachment.cancel = that.cancelAttachmentHelper(sId, oJua);

							this.attachments.push(oAttachment);

							this.attachmentsPlace(true);

							if (0 < mSize && 0 < iAttachmentSizeLimit && iAttachmentSizeLimit < mSize)
							{
								oAttachment
									.waiting(false).uploading(true).complete(true)
									.error(Translator.i18n('UPLOAD/ERROR_FILE_IS_TOO_BIG'));

								return false;
							}

							return true;

						}, this))
						.on('onStart', _.bind(function (sId) {

							var
								oItem = null
							;

							if (Utils.isUnd(oUploadCache[sId]))
							{
								oItem = this.getAttachmentById(sId);
								if (oItem)
								{
									oUploadCache[sId] = oItem;
								}
							}
							else
							{
								oItem = oUploadCache[sId];
							}

							if (oItem)
							{
								oItem.waiting(false).uploading(true).complete(false);
							}

						}, this))
						.on('onComplete', _.bind(function (sId, bResult, oData) {

							var
								sError = '',
								mErrorCode = null,
								oAttachmentJson = null,
								oAttachment = this.getAttachmentById(sId)
							;

							oAttachmentJson = bResult && oData && oData.Result && oData.Result.Attachment ? oData.Result.Attachment : null;
							mErrorCode = oData && oData.Result && oData.Result.ErrorCode ? oData.Result.ErrorCode : null;

							if (null !== mErrorCode)
							{
								sError = Translator.getUploadErrorDescByCode(mErrorCode);
							}
							else if (!oAttachmentJson)
							{
								sError = Translator.i18n('UPLOAD/ERROR_UNKNOWN');
							}

							if (oAttachment)
							{
								if ('' !== sError && 0 < sError.length)
								{
									oAttachment
										.waiting(false)
										.uploading(false)
										.complete(true)
										.error(sError)
									;
								}
								else if (oAttachmentJson)
								{
									oAttachment
										.waiting(false)
										.uploading(false)
										.complete(true)
									;

									oAttachment.initByUploadJson(oAttachmentJson);
								}

								if (Utils.isUnd(oUploadCache[sId]))
								{
									delete (oUploadCache[sId]);
								}
							}

						}, this))
					;

					this
						.addAttachmentEnabled(true)
						.dragAndDropEnabled(oJua.isDragAndDropSupported())
					;
				}
				else
				{
					this
						.addAttachmentEnabled(false)
						.dragAndDropEnabled(false)
					;
				}
			}
		};

		/**
		 * @return {Object}
		 */
		ComposePopupView.prototype.prepearAttachmentsForSendOrSave = function ()
		{
			var oResult = {};
			_.each(this.attachmentsInReady(), function (oItem) {
				if (oItem && '' !== oItem.tempName() && oItem.enabled())
				{
					oResult[oItem.tempName()] = [
						oItem.fileName(),
						oItem.isInline ? '1' : '0',
						oItem.CID,
						oItem.contentLocation
					];
				}
			});

			return oResult;
		};

		/**
		 * @param {MessageModel} oMessage
		 */
		ComposePopupView.prototype.addMessageAsAttachment = function (oMessage)
		{
			if (oMessage)
			{
				var
					oAttachment = null,
					sTemp = oMessage.subject()
				;

				sTemp = '.eml' === sTemp.substr(-4).toLowerCase() ? sTemp : sTemp + '.eml';
				oAttachment = new ComposeAttachmentModel(
					oMessage.requestHash, sTemp, oMessage.size()
				);

				oAttachment.fromMessage = true;
				oAttachment.cancel = this.cancelAttachmentHelper(oMessage.requestHash);
				oAttachment.waiting(false).uploading(true).complete(true);

				this.attachments.push(oAttachment);
			}
		};

		/**
		 * @param {Object} oDropboxFile
		 * @return {boolean}
		 */
		ComposePopupView.prototype.addDropboxAttachment = function (oDropboxFile)
		{
			var
				oAttachment = null,
				iAttachmentSizeLimit = Utils.pInt(Settings.settingsGet('AttachmentLimit')),
				mSize = oDropboxFile['bytes']
			;

			oAttachment = new ComposeAttachmentModel(
				oDropboxFile['link'], oDropboxFile['name'], mSize
			);

			oAttachment.fromMessage = false;
			oAttachment.cancel = this.cancelAttachmentHelper(oDropboxFile['link']);
			oAttachment.waiting(false).uploading(true).complete(false);

			this.attachments.push(oAttachment);

			this.attachmentsPlace(true);

			if (0 < mSize && 0 < iAttachmentSizeLimit && iAttachmentSizeLimit < mSize)
			{
				oAttachment.uploading(false).complete(true);
				oAttachment.error(Translator.i18n('UPLOAD/ERROR_FILE_IS_TOO_BIG'));
				return false;
			}

			Remote.composeUploadExternals(function (sResult, oData) {

				var bResult = false;
				oAttachment.uploading(false).complete(true);

				if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
				{
					if (oData.Result[oAttachment.id])
					{
						bResult = true;
						oAttachment.tempName(oData.Result[oAttachment.id]);
					}
				}

				if (!bResult)
				{
					oAttachment.error(Translator.getUploadErrorDescByCode(Enums.UploadErrorCode.FileNoUploaded));
				}

			}, [oDropboxFile['link']]);

			return true;
		};

		/**
		 * @param {Object} oDriveFile
		 * @param {string} sAccessToken
		 * @return {boolean}
		 */
		ComposePopupView.prototype.addDriveAttachment = function (oDriveFile, sAccessToken)
		{
			var
				iAttachmentSizeLimit = Utils.pInt(Settings.settingsGet('AttachmentLimit')),
				oAttachment = null,
				mSize = oDriveFile['fileSize'] ? Utils.pInt(oDriveFile['fileSize']) : 0
			;

			oAttachment = new ComposeAttachmentModel(
				oDriveFile['downloadUrl'], oDriveFile['title'], mSize
			);

			oAttachment.fromMessage = false;
			oAttachment.cancel = this.cancelAttachmentHelper(oDriveFile['downloadUrl']);
			oAttachment.waiting(false).uploading(true).complete(false);

			this.attachments.push(oAttachment);

			this.attachmentsPlace(true);

			if (0 < mSize && 0 < iAttachmentSizeLimit && iAttachmentSizeLimit < mSize)
			{
				oAttachment.uploading(false).complete(true);
				oAttachment.error(Translator.i18n('UPLOAD/ERROR_FILE_IS_TOO_BIG'));
				return false;
			}

			Remote.composeUploadDrive(function (sResult, oData) {

				var bResult = false;
				oAttachment.uploading(false).complete(true);

				if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
				{
					if (oData.Result[oAttachment.id])
					{
						bResult = true;
						oAttachment.tempName(oData.Result[oAttachment.id][0]);
						oAttachment.size(Utils.pInt(oData.Result[oAttachment.id][1]));
					}
				}

				if (!bResult)
				{
					oAttachment.error(Translator.getUploadErrorDescByCode(Enums.UploadErrorCode.FileNoUploaded));
				}

			}, oDriveFile['downloadUrl'], sAccessToken);

			return true;
		};

		/**
		 * @param {MessageModel} oMessage
		 * @param {string} sType
		 */
		ComposePopupView.prototype.prepearMessageAttachments = function (oMessage, sType)
		{
			if (oMessage)
			{
				var
					aAttachments = Utils.isNonEmptyArray(oMessage.attachments()) ? oMessage.attachments() : [],
					iIndex = 0,
					iLen = aAttachments.length,
					oAttachment = null,
					oItem = null,
					bAdd = false
				;

				if (Enums.ComposeType.ForwardAsAttachment === sType)
				{
					this.addMessageAsAttachment(oMessage);
				}
				else
				{
					for (; iIndex < iLen; iIndex++)
					{
						oItem = aAttachments[iIndex];

						bAdd = false;
						switch (sType) {
						case Enums.ComposeType.Reply:
						case Enums.ComposeType.ReplyAll:
							bAdd = oItem.isLinked;
							break;

						case Enums.ComposeType.Forward:
						case Enums.ComposeType.Draft:
						case Enums.ComposeType.EditAsNew:
							bAdd = true;
							break;
						}

						if (bAdd)
						{
							oAttachment = new ComposeAttachmentModel(
								oItem.download, oItem.fileName, oItem.estimatedSize,
								oItem.isInline, oItem.isLinked, oItem.cid, oItem.contentLocation
							);

							oAttachment.fromMessage = true;
							oAttachment.cancel = this.cancelAttachmentHelper(oItem.download);
							oAttachment.waiting(false).uploading(true).complete(false);

							this.attachments.push(oAttachment);
						}
					}
				}
			}
		};

		ComposePopupView.prototype.removeLinkedAttachments = function ()
		{
			var oItem = _.find(this.attachments(), function (oItem) {
				return oItem && oItem.isLinked;
			});

			if (oItem)
			{
				this.attachments.remove(oItem);
				Utils.delegateRunOnDestroy(oItem);
			}
		};

		ComposePopupView.prototype.setMessageAttachmentFailedDownloadText = function ()
		{
			_.each(this.attachments(), function(oAttachment) {
				if (oAttachment && oAttachment.fromMessage)
				{
					oAttachment
						.waiting(false)
						.uploading(false)
						.complete(true)
						.error(Translator.getUploadErrorDescByCode(Enums.UploadErrorCode.FileNoUploaded))
					;
				}
			}, this);
		};

		/**
		 * @param {boolean=} bIncludeAttachmentInProgress = true
		 * @return {boolean}
		 */
		ComposePopupView.prototype.isEmptyForm = function (bIncludeAttachmentInProgress)
		{
			bIncludeAttachmentInProgress = Utils.isUnd(bIncludeAttachmentInProgress) ? true : !!bIncludeAttachmentInProgress;
			var bWithoutAttach = bIncludeAttachmentInProgress ?
				0 === this.attachments().length : 0 === this.attachmentsInReady().length;

			return 0 === this.to().length &&
				0 === this.cc().length &&
				0 === this.bcc().length &&
				0 === this.replyTo().length &&
				0 === this.subject().length &&
				bWithoutAttach &&
				(!this.oEditor || '' === this.oEditor.getData())
			;
		};

		ComposePopupView.prototype.reset = function ()
		{
			this.to('');
			this.cc('');
			this.bcc('');
			this.replyTo('');
			this.subject('');

			this.requestDsn(false);
			this.requestReadReceipt(false);
			this.markAsImportant(false);

			this.attachmentsPlace(false);

			this.aDraftInfo = null;
			this.sInReplyTo = '';
			this.bFromDraft = false;
			this.sReferences = '';

			this.sendError(false);
			this.sendSuccessButSaveError(false);
			this.savedError(false);
			this.savedTime(0);
			this.emptyToError(false);
			this.attachmentsInProcessError(false);

			this.showCc(false);
			this.showBcc(false);
			this.showReplyTo(false);

			Utils.delegateRunOnDestroy(this.attachments());
			this.attachments([]);

			this.dragAndDropOver(false);
			this.dragAndDropVisible(false);

			this.draftFolder('');
			this.draftUid('');

			this.sending(false);
			this.saving(false);

			if (this.oEditor)
			{
				this.oEditor.clear(false);
			}
		};

		/**
		 * @return {Array}
		 */
		ComposePopupView.prototype.getAttachmentsDownloadsForUpload = function ()
		{
			return _.map(_.filter(this.attachments(), function (oItem) {
				return oItem && '' === oItem.tempName();
			}), function (oItem) {
				return oItem.id;
			});
		};

		ComposePopupView.prototype.resizerTrigger = function ()
		{
			this.resizer(!this.resizer());
		};

		module.exports = ComposePopupView;

	}());


/***/ },
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
/* 30 */
/*!************************************!*\
  !*** ./dev/Stores/User/Account.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Settings = __webpack_require__(/*! Storage/Settings */ 8)
		;

		/**
		 * @constructor
		 */
		function AccountUserStore()
		{
			this.email = ko.observable('');
			this.parentEmail = ko.observable('');
	//		this.incLogin = ko.observable('');
	//		this.outLogin = ko.observable('');

			this.signature = ko.observable('');

			this.accounts = ko.observableArray([]);
			this.accounts.loading = ko.observable(false).extend({'throttle': 100});

			this.computers();
		}

		AccountUserStore.prototype.computers = function ()
		{
			this.accountsEmails = ko.computed(function () {
				return _.compact(_.map(this.accounts(), function (oItem) {
					return oItem ? oItem.email : null;
				}));
			}, this);

			this.accountsUnreadCount = ko.computed(function () {

				var iResult = 0;

	//			_.each(this.accounts(), function (oItem) {
	//				if (oItem)
	//				{
	//					iResult += oItem.count();
	//				}
	//			});

				return iResult;

			}, this);
		};

		AccountUserStore.prototype.populate = function ()
		{
			this.email(Settings.settingsGet('Email'));
			this.parentEmail(Settings.settingsGet('ParentEmail'));
		};

		/**
		 * @return {boolean}
		 */
		AccountUserStore.prototype.isRootAccount = function ()
		{
			return '' === this.parentEmail();
		};

		module.exports = new AccountUserStore();

	}());


/***/ },
/* 31 */
/*!************************************!*\
  !*** ./dev/Stores/User/Message.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),
			window = __webpack_require__(/*! window */ 11),
			$ = __webpack_require__(/*! $ */ 13),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Links = __webpack_require__(/*! Common/Links */ 12),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Cache = __webpack_require__(/*! Common/Cache */ 17),

			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			FolderStore = __webpack_require__(/*! Stores/User/Folder */ 21),
			PgpStore = __webpack_require__(/*! Stores/User/Pgp */ 32),
			SettingsStore = __webpack_require__(/*! Stores/User/Settings */ 27),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			MessageModel = __webpack_require__(/*! Model/Message */ 115),
			MessageHelper = __webpack_require__(/*! Helper/Message */ 101).default
		;

		/**
		 * @constructor
		 */
		function MessageUserStore()
		{
			this.staticMessage = new MessageModel();

			this.messageList = ko.observableArray([]).extend({'rateLimit': 0});

			this.messageListCount = ko.observable(0);
			this.messageListSearch = ko.observable('');
			this.messageListThreadUid = ko.observable('');
			this.messageListPage = ko.observable(1);
			this.messageListPageBeforeThread = ko.observable(1);
			this.messageListError = ko.observable('');

			this.messageListEndFolder = ko.observable('');
			this.messageListEndSearch = ko.observable('');
			this.messageListEndThreadUid = ko.observable('');
			this.messageListEndPage = ko.observable(1);

			this.messageListLoading = ko.observable(false);
			this.messageListIsNotCompleted = ko.observable(false);
			this.messageListCompleteLoadingThrottle = ko.observable(false).extend({'throttle': 200});
			this.messageListCompleteLoadingThrottleForAnimation = ko.observable(false).extend({'specialThrottle': 700});

			this.messageListDisableAutoSelect = ko.observable(false).extend({'falseTimeout': 500});

			this.selectorMessageSelected = ko.observable(null);
			this.selectorMessageFocused = ko.observable(null);

			// message viewer
			this.message = ko.observable(null);

			this.message.viewTrigger = ko.observable(false);

			this.messageError = ko.observable('');

			this.messageCurrentLoading = ko.observable(false);

			this.messageLoading = ko.computed(function () {
				return this.messageCurrentLoading();
			}, this);

			this.messageLoadingThrottle = ko.observable(false).extend({'throttle': 50});

			this.messageFullScreenMode = ko.observable(false);

			this.messagesBodiesDom = ko.observable(null);
			this.messageActiveDom = ko.observable(null);

			this.computers();
			this.subscribers();

			this.onMessageResponse = _.bind(this.onMessageResponse, this);

			this.purgeMessageBodyCacheThrottle = _.throttle(this.purgeMessageBodyCache, 1000 * 30);
		}

		MessageUserStore.prototype.computers = function ()
		{
			var self = this;

			this.messageListEndHash = ko.computed(function () {
				return this.messageListEndFolder() + '|' + this.messageListEndSearch() +
					'|' + this.messageListEndThreadUid() +
					'|' + this.messageListEndPage();
			}, this);

			this.messageListPageCount = ko.computed(function () {
				var iPage = window.Math.ceil(this.messageListCount() /
					SettingsStore.messagesPerPage());
				return 0 >= iPage ? 1 : iPage;
			}, this);

			this.mainMessageListSearch = ko.computed({
				'read': this.messageListSearch,
				'write': function (sValue) {
					kn.setHash(Links.mailBox(
						FolderStore.currentFolderFullNameHash(), 1,
						Utils.trim(sValue.toString()), self.messageListThreadUid()
					));
				},
				'owner': this
			});

			this.messageListCompleteLoading = ko.computed(function () {
				var
					bOne = this.messageListLoading(),
					bTwo = this.messageListIsNotCompleted()
				;
				return bOne || bTwo;
			}, this);

			this.isMessageSelected = ko.computed(function () {
				return null !== this.message();
			}, this);

			this.messageListChecked = ko.computed(function () {
				return _.filter(this.messageList(), function (oItem) {
					return oItem.checked();
				});
			}, this).extend({'rateLimit': 0});

			this.hasCheckedMessages = ko.computed(function () {
				return 0 < this.messageListChecked().length;
			}, this).extend({'rateLimit': 0});

			this.messageListCheckedOrSelected = ko.computed(function () {

				var
					aChecked = this.messageListChecked(),
					oSelectedMessage = this.selectorMessageSelected()
				;

				return _.union(aChecked, oSelectedMessage ? [oSelectedMessage] : []);

			}, this);

			this.messageListCheckedOrSelectedUidsWithSubMails = ko.computed(function () {
				var aList = [];
				_.each(this.messageListCheckedOrSelected(), function (oMessage) {
					if (oMessage)
					{
						aList.push(oMessage.uid);
						if (1 < oMessage.threadsLen())
						{
							aList = _.union(aList, oMessage.threads());
						}
					}
				});
				return aList;
			}, this);
		};

		MessageUserStore.prototype.subscribers = function ()
		{
			this.messageListCompleteLoading.subscribe(function (bValue) {
				bValue = !!bValue;
				this.messageListCompleteLoadingThrottle(bValue);
				this.messageListCompleteLoadingThrottleForAnimation(bValue);
			}, this);

			this.messageList.subscribe(_.debounce(function (aList) {
				_.each(aList, function (oItem) {
					if (oItem && oItem.newForAnimation())
					{
						oItem.newForAnimation(false);
					}
				});
			}, 500));

			this.message.subscribe(function (oMessage) {

				if (oMessage)
				{
					 if (Enums.Layout.NoPreview === SettingsStore.layout())
					{
						AppStore.focusedState(Enums.Focused.MessageView);
					}
				}
				else
				{
					AppStore.focusedState(Enums.Focused.MessageList);

					this.messageFullScreenMode(false);
					this.hideMessageBodies();
				}

			}, this);

			this.messageLoading.subscribe(function (bValue) {
				this.messageLoadingThrottle(bValue);
			}, this);

			this.messagesBodiesDom.subscribe(function (oDom) {
				if (oDom && !(oDom instanceof $))
				{
					this.messagesBodiesDom($(oDom));
				}
			}, this);

			this.messageListEndFolder.subscribe(function (sFolder) {
				var oMessage = this.message();
				if (oMessage && sFolder && sFolder !== oMessage.folderFullNameRaw)
				{
					this.message(null);
				}
			}, this);
		};

		MessageUserStore.prototype.purgeMessageBodyCache = function()
		{
			var
				iCount = 0,
				oMessagesDom = null,
				iEnd = Globals.data.iMessageBodyCacheCount - Consts.MESSAGE_BODY_CACHE_LIMIT
			;

			if (0 < iEnd)
			{
				oMessagesDom = this.messagesBodiesDom();
				if (oMessagesDom)
				{
					oMessagesDom.find('.rl-cache-class').each(function () {
						var oItem = $(this);
						if (iEnd > oItem.data('rl-cache-count'))
						{
							oItem.addClass('rl-cache-purge');
							iCount++;
						}
					});

					if (0 < iCount)
					{
						_.delay(function () {
							oMessagesDom.find('.rl-cache-purge').remove();
						}, 300);
					}
				}
			}
		};

		MessageUserStore.prototype.initUidNextAndNewMessages = function (sFolder, sUidNext, aNewMessages)
		{
			if (Cache.getFolderInboxName() === sFolder && Utils.isNormal(sUidNext) && sUidNext !== '')
			{
				if (Utils.isArray(aNewMessages) && 0 < aNewMessages.length)
				{
					var
						iIndex = 0,
						iLen = aNewMessages.length,
						NotificationStore = __webpack_require__(/*! Stores/User/Notification */ 61)
					;

					_.each(aNewMessages, function (oItem) {
						Cache.addNewMessageCache(sFolder, oItem.Uid);
					});

					NotificationStore.playSoundNotification();

					if (3 < iLen)
					{
						NotificationStore.displayDesktopNotification(
							Links.notificationMailIcon(),
							__webpack_require__(/*! Stores/User/Account */ 30).email(),
							Translator.i18n('MESSAGE_LIST/NEW_MESSAGE_NOTIFICATION', {
								'COUNT': iLen
							}),
							{'Folder': '', 'Uid': ''}
						);
					}
					else
					{
						for (; iIndex < iLen; iIndex++)
						{
							NotificationStore.displayDesktopNotification(
								Links.notificationMailIcon(),
								MessageHelper.emailArrayToString(MessageHelper.emailArrayFromJson(aNewMessages[iIndex].From), false),
								aNewMessages[iIndex].Subject,
								{'Folder': aNewMessages[iIndex].Folder, 'Uid': aNewMessages[iIndex].Uid}
							);
						}
					}
				}

				Cache.setFolderUidNext(sFolder, sUidNext);
			}
		};

		MessageUserStore.prototype.hideMessageBodies = function ()
		{
			var oMessagesDom = this.messagesBodiesDom();
			if (oMessagesDom)
			{
				oMessagesDom.find('.b-text-part').hide();
			}
		};

		/**
		 * @param {string} sFromFolderFullNameRaw
		 * @param {Array} aUidForRemove
		 * @param {string=} sToFolderFullNameRaw = ''
		 * @param {bCopy=} bCopy = false
		 */
		MessageUserStore.prototype.removeMessagesFromList = function (
			sFromFolderFullNameRaw, aUidForRemove, sToFolderFullNameRaw, bCopy)
		{
			sToFolderFullNameRaw = Utils.isNormal(sToFolderFullNameRaw) ? sToFolderFullNameRaw : '';
			bCopy = Utils.isUnd(bCopy) ? false : !!bCopy;

			aUidForRemove = _.map(aUidForRemove, function (mValue) {
				return Utils.pInt(mValue);
			});

			var
				self = this,
				iUnseenCount = 0,
				oMessage = null,
				sTrashFolder = FolderStore.trashFolder(),
				sSpamFolder = FolderStore.spamFolder(),
				aMessageList = this.messageList(),
				oFromFolder = Cache.getFolderFromCacheList(sFromFolderFullNameRaw),
				oToFolder = '' === sToFolderFullNameRaw ? null : Cache.getFolderFromCacheList(sToFolderFullNameRaw || ''),
				sCurrentFolderFullNameRaw = FolderStore.currentFolderFullNameRaw(),
				oCurrentMessage = this.message(),
				aMessages = sCurrentFolderFullNameRaw === sFromFolderFullNameRaw ? _.filter(aMessageList, function (oMessage) {
					return oMessage && -1 < Utils.inArray(Utils.pInt(oMessage.uid), aUidForRemove);
				}) : []
			;

			_.each(aMessages, function (oMessage) {
				if (oMessage && oMessage.unseen())
				{
					iUnseenCount++;
				}
			});

			if (oFromFolder && !bCopy)
			{
				oFromFolder.messageCountAll(0 <= oFromFolder.messageCountAll() - aUidForRemove.length ?
					oFromFolder.messageCountAll() - aUidForRemove.length : 0);

				if (0 < iUnseenCount)
				{
					oFromFolder.messageCountUnread(0 <= oFromFolder.messageCountUnread() - iUnseenCount ?
						oFromFolder.messageCountUnread() - iUnseenCount : 0);
				}
			}

			if (oToFolder)
			{
				if (sTrashFolder === oToFolder.fullNameRaw || sSpamFolder === oToFolder.fullNameRaw)
				{
					iUnseenCount = 0;
				}

				oToFolder.messageCountAll(oToFolder.messageCountAll() + aUidForRemove.length);
				if (0 < iUnseenCount)
				{
					oToFolder.messageCountUnread(oToFolder.messageCountUnread() + iUnseenCount);
				}

				oToFolder.actionBlink(true);
			}

			if (0 < aMessages.length)
			{
				if (bCopy)
				{
					_.each(aMessages, function (oMessage) {
						oMessage.checked(false);
					});
				}
				else
				{
					this.messageListIsNotCompleted(true);

					_.each(aMessages, function (oMessage) {
						if (oCurrentMessage && oCurrentMessage.hash === oMessage.hash)
						{
							oCurrentMessage = null;
							self.message(null);
						}

						oMessage.deleted(true);
					});

					_.delay(function () {
						_.each(aMessages, function (oMessage) {
							self.messageList.remove(oMessage);
						});
					}, 400);
				}
			}

			if ('' !== sFromFolderFullNameRaw)
			{
				Cache.setFolderHash(sFromFolderFullNameRaw, '');
			}

			if ('' !== sToFolderFullNameRaw)
			{
				Cache.setFolderHash(sToFolderFullNameRaw, '');
			}

			if ('' !== this.messageListThreadUid())
			{
				aMessageList = this.messageList();

				if (aMessageList && 0 < aMessageList.length && !!_.find(aMessageList, function (oMessage) {
					return !!(oMessage && oMessage.deleted() && oMessage.uid === self.messageListThreadUid());
				}))
				{
					oMessage = _.find(aMessageList, function (oMessage) {
						return oMessage && !oMessage.deleted();
					});

					if (oMessage && this.messageListThreadUid() !== Utils.pString(oMessage.uid))
					{
						this.messageListThreadUid(Utils.pString(oMessage.uid));

						kn.setHash(Links.mailBox(
							FolderStore.currentFolderFullNameHash(),
							this.messageListPage(),
							this.messageListSearch(),
							this.messageListThreadUid()
						), true, true);
					}
					else if (!oMessage)
					{
						if (1 < this.messageListPage())
						{
							this.messageListPage(this.messageListPage() - 1);

							kn.setHash(Links.mailBox(
								FolderStore.currentFolderFullNameHash(),
								this.messageListPage(),
								this.messageListSearch(),
								this.messageListThreadUid()
							), true, true);
						}
						else
						{
							this.messageListThreadUid('');

							kn.setHash(Links.mailBox(
								FolderStore.currentFolderFullNameHash(),
								this.messageListPageBeforeThread(),
								this.messageListSearch()
							), true, true);
						}
					}
				}
			}
		};

		MessageUserStore.prototype.addBlockquoteSwitcherCallback = function ()
		{
			var $self = $(this);
			if ('' !== Utils.trim(($self.text())))
			{
				$self.addClass('rl-bq-switcher hidden-bq');
				$('<span class="rlBlockquoteSwitcher"><i class="icon-ellipsis" /></span>')
					.insertBefore($self)
					.on('click.rlBlockquoteSwitcher', function () {
						$self.toggleClass('hidden-bq');
						Utils.windowResize();
					})
					.after('<br />')
					.before('<br />')
				;
			}
		};

		/**
		 * @param {Object} oMessageTextBody
		 */
		MessageUserStore.prototype.initBlockquoteSwitcher = function (oMessageTextBody)
		{
			if (oMessageTextBody)
			{
				var $oList = $('blockquote:not(.rl-bq-switcher)', oMessageTextBody).filter(function () {
					return 0 === $(this).parent().closest('blockquote', oMessageTextBody).length;
				});

				if ($oList && 0 < $oList.length)
				{
					$oList.each(this.addBlockquoteSwitcherCallback);
				}
			}
		};

		/**
		 * @param {Object} oMessageTextBody
		 */
		MessageUserStore.prototype.initOpenPgpControls = function (oMessageTextBody, oMessage)
		{
			if (oMessageTextBody && oMessageTextBody.find)
			{
				oMessageTextBody.find('.b-plain-openpgp:not(.inited)').each(function () {
					PgpStore.initMessageBodyControls($(this), oMessage);
				});
			}
		};

		MessageUserStore.prototype.setMessage = function (oData, bCached)
		{
			var
				bNew = false,
				bIsHtml = false,
				bHasExternals = false,
				bHasInternals = false,
				oBody = null,
				oTextBody = null,
				sId = '',
				sPlain = '',
				sResultHtml = '',
				bPgpSigned = false,
				bPgpEncrypted = false,
				oMessagesDom = this.messagesBodiesDom(),
				oSelectedMessage = this.selectorMessageSelected(),
				oMessage = this.message(),
				aThreads = []
			;

			if (oData && oMessage && oData.Result && 'Object/Message' === oData.Result['@Object'] &&
				oMessage.folderFullNameRaw === oData.Result.Folder)
			{
				aThreads = oMessage.threads();
				if (oMessage.uid !== oData.Result.Uid && 1 < aThreads.length &&
					-1 < Utils.inArray(oData.Result.Uid, aThreads))
				{
					oMessage = MessageModel.newInstanceFromJson(oData.Result);
					if (oMessage)
					{
						oMessage.threads(aThreads);
						Cache.initMessageFlagsFromCache(oMessage);

						this.message(this.staticMessage.populateByMessageListItem(oMessage));
						oMessage = this.message();

						bNew = true;
					}
				}

				if (oMessage && oMessage.uid === oData.Result.Uid)
				{
					this.messageError('');

					oMessage.initUpdateByMessageJson(oData.Result);
					Cache.addRequestedMessage(oMessage.folderFullNameRaw, oMessage.uid);

					if (!bCached)
					{
						oMessage.initFlagsByJson(oData.Result);
					}

					oMessagesDom = oMessagesDom && oMessagesDom[0] ? oMessagesDom : null;
					if (oMessagesDom)
					{
						sId = 'rl-mgs-' + oMessage.hash.replace(/[^a-zA-Z0-9]/g, '');
						oTextBody = oMessagesDom.find('#' + sId);

						if (!oTextBody || !oTextBody[0])
						{
							bHasExternals = !!oData.Result.HasExternals;
							bHasInternals = !!oData.Result.HasInternals;

							if (Utils.isNormal(oData.Result.Html) && '' !== oData.Result.Html)
							{
								bIsHtml = true;
								sResultHtml = oData.Result.Html.toString();
							}
							else if (Utils.isNormal(oData.Result.Plain) && '' !== oData.Result.Plain)
							{
								bIsHtml = false;
								sResultHtml = Utils.plainToHtml(oData.Result.Plain.toString(), false);

								if ((oMessage.isPgpSigned() || oMessage.isPgpEncrypted()) && __webpack_require__(/*! Stores/User/Pgp */ 32).capaOpenPGP())
								{
									sPlain = Utils.pString(oData.Result.Plain);

									bPgpEncrypted = /---BEGIN PGP MESSAGE---/.test(sPlain);
									if (!bPgpEncrypted)
									{
										bPgpSigned = /-----BEGIN PGP SIGNED MESSAGE-----/.test(sPlain) &&
											/-----BEGIN PGP SIGNATURE-----/.test(sPlain);
									}

									Globals.$div.empty();
									if (bPgpSigned && oMessage.isPgpSigned())
									{
										sResultHtml =
											Globals.$div.append(
												$('<pre class="b-plain-openpgp signed"></pre>').text(sPlain)
											).html()
										;
									}
									else if (bPgpEncrypted && oMessage.isPgpEncrypted())
									{
										sResultHtml =
											Globals.$div.append(
												$('<pre class="b-plain-openpgp encrypted"></pre>').text(sPlain)
											).html()
										;
									}
									else
									{
										sResultHtml = '<pre>' + sResultHtml + '</pre>';
									}

									sPlain = '';

									Globals.$div.empty();

									oMessage.isPgpSigned(bPgpSigned);
									oMessage.isPgpEncrypted(bPgpEncrypted);
								}
								else
								{
									sResultHtml = '<pre>' + sResultHtml + '</pre>';
								}
							}
							else
							{
								bIsHtml = false;
								sResultHtml = '<pre>' + sResultHtml + '</pre>';
							}

							oBody = $('<div id="' + sId + '" ></div>').hide().addClass('rl-cache-class');
							oBody.data('rl-cache-count', ++Globals.data.iMessageBodyCacheCount);

							oBody
								.html(Utils.findEmailAndLinks(sResultHtml))
								.addClass('b-text-part ' + (bIsHtml ? 'html' : 'plain'))
							;

							oMessage.isHtml(!!bIsHtml);
							oMessage.hasImages(!!bHasExternals);

							oMessage.body = oBody;
							if (oMessage.body)
							{
								oMessagesDom.append(oMessage.body);
							}

							oMessage.storeDataInDom();

							if (bHasInternals)
							{
								oMessage.showInternalImages(true);
							}

							if (oMessage.hasImages() && SettingsStore.showImages())
							{
								oMessage.showExternalImages(true);
							}

							this.purgeMessageBodyCacheThrottle();
						}
						else
						{
							oMessage.body = oTextBody;
							if (oMessage.body)
							{
								oMessage.body.data('rl-cache-count', ++Globals.data.iMessageBodyCacheCount);
								oMessage.fetchDataFromDom();
							}
						}

						this.messageActiveDom(oMessage.body);

						this.hideMessageBodies();

						if (oBody)
						{
							this.initOpenPgpControls(oBody, oMessage);

							this.initBlockquoteSwitcher(oBody);
						}

						oMessage.body.show();
					}

					Cache.initMessageFlagsFromCache(oMessage);
					if (oMessage.unseen() || oMessage.hasUnseenSubMessage())
					{
						__webpack_require__(/*! App/User */ 6).default.messageListAction(oMessage.folderFullNameRaw,
							oMessage.uid, Enums.MessageSetAction.SetSeen, [oMessage]);
					}

					if (bNew)
					{
						oMessage = this.message();

						if (oSelectedMessage && oMessage && (
							oMessage.folderFullNameRaw !== oSelectedMessage.folderFullNameRaw ||
							oMessage.uid !== oSelectedMessage.uid
						))
						{
							this.selectorMessageSelected(null);
							if (1 === this.messageList().length)
							{
								this.selectorMessageFocused(null);
							}
						}
						else if (!oSelectedMessage && oMessage)
						{
							oSelectedMessage = _.find(this.messageList(), function (oSubMessage) {
								return oSubMessage &&
									oSubMessage.folderFullNameRaw === oMessage.folderFullNameRaw &&
									oSubMessage.uid === oMessage.uid;
							});

							if (oSelectedMessage)
							{
								this.selectorMessageSelected(oSelectedMessage);
								this.selectorMessageFocused(oSelectedMessage);
							}
						}

					}

					Utils.windowResize();
				}
			}
		};

		MessageUserStore.prototype.selectMessage = function (oMessage)
		{
			if (oMessage)
			{
				this.message(this.staticMessage.populateByMessageListItem(oMessage));

				this.populateMessageBody(this.message());
			}
			else
			{
				this.message(null);
			}
		};

		MessageUserStore.prototype.selectMessageByFolderAndUid = function (sFolder, sUid)
		{
			if (sFolder && sUid)
			{
				this.message(this.staticMessage.populateByMessageListItem(null));
				this.message().folderFullNameRaw = sFolder;
				this.message().uid = sUid;

				this.populateMessageBody(this.message());
			}
			else
			{
				this.message(null);
			}
		};

		MessageUserStore.prototype.populateMessageBody = function (oMessage)
		{
			if (oMessage)
			{
				if (Remote.message(this.onMessageResponse, oMessage.folderFullNameRaw, oMessage.uid))
				{
					this.messageCurrentLoading(true);
				}
			}
		};

		/**
		 * @param {string} sResult
		 * @param {AjaxJsonDefaultResponse} oData
		 * @param {boolean} bCached
		 */
		MessageUserStore.prototype.onMessageResponse = function (sResult, oData, bCached)
		{
			this.hideMessageBodies();

			this.messageCurrentLoading(false);

			if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
			{
				this.setMessage(oData, bCached);
			}
			else if (Enums.StorageResultType.Unload === sResult)
			{
				this.message(null);
				this.messageError('');
			}
			else if (Enums.StorageResultType.Abort !== sResult)
			{
				this.message(null);
				this.messageError((oData && oData.ErrorCode ?
					Translator.getNotification(oData.ErrorCode) :
					Translator.getNotification(Enums.Notification.UnknownError)));
			}
		};

		/**
		 * @param {Array} aList
		 * @return {string}
		 */
		MessageUserStore.prototype.calculateMessageListHash = function (aList)
		{
			return _.map(aList, function (oMessage) {
				return '' + oMessage.hash + '_' + oMessage.threadsLen() + '_' + oMessage.flagHash();
			}).join('|');
		};

		MessageUserStore.prototype.setMessageList = function (oData, bCached)
		{
			if (oData && oData.Result && 'Collection/MessageCollection' === oData.Result['@Object'] &&
				oData.Result['@Collection'] && Utils.isArray(oData.Result['@Collection']))
			{
				var
					iIndex = 0,
					iLen = 0,
					iCount = 0,
					iOffset = 0,
					aList = [],
					oJsonMessage = null,
					oMessage = null,
					oFolder = null,
					iNewCount = 0,
					iUtc = __webpack_require__(/*! Common/Momentor */ 25).momentNowUnix(),
					bUnreadCountChange = false
				;

				iCount = Utils.pInt(oData.Result.MessageResultCount);
				iOffset = Utils.pInt(oData.Result.Offset);

				oFolder = Cache.getFolderFromCacheList(
					Utils.isNormal(oData.Result.Folder) ? oData.Result.Folder : '');

				if (oFolder && !bCached)
				{
					oFolder.interval = iUtc;

					Cache.setFolderHash(oData.Result.Folder, oData.Result.FolderHash);

					if (Utils.isNormal(oData.Result.MessageCount))
					{
						oFolder.messageCountAll(oData.Result.MessageCount);
					}

					if (Utils.isNormal(oData.Result.MessageUnseenCount))
					{
						if (Utils.pInt(oFolder.messageCountUnread()) !== Utils.pInt(oData.Result.MessageUnseenCount))
						{
							bUnreadCountChange = true;
						}

						oFolder.messageCountUnread(oData.Result.MessageUnseenCount);
					}

					this.initUidNextAndNewMessages(oFolder.fullNameRaw, oData.Result.UidNext, oData.Result.NewMessages);
				}

				if (bUnreadCountChange && oFolder)
				{
					Cache.clearMessageFlagsFromCacheByFolder(oFolder.fullNameRaw);
				}

				for (iIndex = 0, iLen = oData.Result['@Collection'].length; iIndex < iLen; iIndex++)
				{
					oJsonMessage = oData.Result['@Collection'][iIndex];
					if (oJsonMessage && 'Object/Message' === oJsonMessage['@Object'])
					{
						oMessage = MessageModel.newInstanceFromJson(oJsonMessage);
						if (oMessage)
						{
							if (Cache.hasNewMessageAndRemoveFromCache(oMessage.folderFullNameRaw, oMessage.uid) && 5 >= iNewCount)
							{
								iNewCount++;
								oMessage.newForAnimation(true);
							}

							oMessage.deleted(false);

							if (bCached)
							{
								Cache.initMessageFlagsFromCache(oMessage);
							}
							else
							{
								Cache.storeMessageFlagsToCache(oMessage);
							}

							aList.push(oMessage);
						}
					}
				}

				this.messageListCount(iCount);
				this.messageListSearch(Utils.isNormal(oData.Result.Search) ? oData.Result.Search : '');
				this.messageListPage(window.Math.ceil((iOffset / SettingsStore.messagesPerPage()) + 1));
				this.messageListThreadUid(Utils.isNormal(oData.Result.ThreadUid) ? Utils.pString(oData.Result.ThreadUid) : '');

				this.messageListEndFolder(Utils.isNormal(oData.Result.Folder) ? oData.Result.Folder : '');
				this.messageListEndSearch(this.messageListSearch());
				this.messageListEndThreadUid(this.messageListThreadUid());
				this.messageListEndPage(this.messageListPage());

				this.messageListDisableAutoSelect(true);

				this.messageList(aList);
				this.messageListIsNotCompleted(false);

				Cache.clearNewMessageCache();

				if (oFolder && (bCached || bUnreadCountChange || SettingsStore.useThreads()))
				{
					__webpack_require__(/*! App/User */ 6).default.folderInformation(oFolder.fullNameRaw, aList);
				}
			}
			else
			{
				this.messageListCount(0);
				this.messageList([]);
				this.messageListError(Translator.getNotification(
					oData && oData.ErrorCode ? oData.ErrorCode : Enums.Notification.CantGetMessageList
				));
			}
		};

		module.exports = new MessageUserStore();

	}());



/***/ },
/* 32 */
/*!********************************!*\
  !*** ./dev/Stores/User/Pgp.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),
			$ = __webpack_require__(/*! $ */ 13),
			kn = __webpack_require__(/*! Knoin/Knoin */ 4),

			Translator = __webpack_require__(/*! Common/Translator */ 5),
			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			Utils = __webpack_require__(/*! Common/Utils */ 0)
		;

		/**
		 * @constructor
		 */
		function PgpUserStore()
		{
			this.capaOpenPGP = ko.observable(false);

			this.openpgp = null;

			this.openpgpkeys = ko.observableArray([]);
			this.openpgpKeyring = null;

			this.openpgpkeysPublic = this.openpgpkeys.filter(function (oItem) {
				return !!(oItem && !oItem.isPrivate);
			});

			this.openpgpkeysPrivate = this.openpgpkeys.filter(function (oItem) {
				return !!(oItem && oItem.isPrivate);
			});
		}

		/**
		 * @return {boolean}
		 */
		PgpUserStore.prototype.isSupported = function ()
		{
			return !!this.openpgp;
		};

		PgpUserStore.prototype.findKeyByHex = function (aKeys,sHash)
		{
			return _.find(aKeys, function (oItem) {
				return sHash && oItem && (sHash === oItem.id || -1 < oItem.ids.indexOf(sHash));
			});
		};

		PgpUserStore.prototype.findPublicKeyByHex = function (sHash)
		{
			return this.findKeyByHex(this.openpgpkeysPublic(), sHash);
		};

		PgpUserStore.prototype.findPrivateKeyByHex = function (sHash)
		{
			return this.findKeyByHex(this.openpgpkeysPrivate(), sHash);
		};

		PgpUserStore.prototype.findPublicKeysByEmail = function (sEmail)
		{
			return _.compact(_.flatten(_.map(this.openpgpkeysPublic(), function (oItem) {
				var oKey = oItem && -1 < oItem.emails.indexOf(sEmail) ? oItem : null;
				return oKey ? oKey.getNativeKeys() : [null];
			}), true));
		};

		PgpUserStore.prototype.findPublicKeysBySigningKeyIds = function (aSigningKeyIds)
		{
			var self = this;
			return _.compact(_.flatten(_.map(aSigningKeyIds, function (oId) {
				var oKey = oId && oId.toHex ? self.findPublicKeyByHex(oId.toHex()) : null;
				return oKey ? oKey.getNativeKeys() : [null];
			}), true));
		};

		PgpUserStore.prototype.findPrivateKeysByEncryptionKeyIds = function (aEncryptionKeyIds, aRecipients, bReturnWrapKeys)
		{
			var self = this, aResult = [];
			aResult = Utils.isArray(aEncryptionKeyIds) ? _.compact(_.flatten(_.map(aEncryptionKeyIds, function (oId) {
				var oKey = oId && oId.toHex ? self.findPrivateKeyByHex(oId.toHex()) : null;
				return oKey ? (bReturnWrapKeys ? [oKey] : oKey.getNativeKeys()) : [null];
			}), true)) : [];

			if (0 === aResult.length && Utils.isNonEmptyArray(aRecipients))
			{
				aResult = _.uniq(_.compact(_.flatten(_.map(aRecipients, function (sEmail) {
					var aKeys = sEmail ? self.findAllPrivateKeysByEmailNotNative(sEmail) : null;
					return aKeys ? (bReturnWrapKeys ? aKeys : _.flatten(_.map(aKeys, function (oKey) { return oKey.getNativeKeys(); }), true)) : [null];
				}), true)), function (oKey) { return oKey.id; });
			}

			return aResult;
		};

		/**
		 * @param {string} sEmail
		 * @return {?}
		 */
		PgpUserStore.prototype.findPublicKeyByEmailNotNative = function (sEmail)
		{
			return _.find(this.openpgpkeysPublic(), function (oItem) {
				return oItem && -1 < oItem.emails.indexOf(sEmail);
			}) || null;
		};

		/**
		 * @param {string} sEmail
		 * @return {?}
		 */
		PgpUserStore.prototype.findPrivateKeyByEmailNotNative = function (sEmail)
		{
			return _.find(this.openpgpkeysPrivate(), function (oItem) {
				return oItem && -1 < oItem.emails.indexOf(sEmail);
			}) || null;
		};

		/**
		 * @param {string} sEmail
		 * @return {?}
		 */
		PgpUserStore.prototype.findAllPublicKeysByEmailNotNative = function (sEmail)
		{
			return _.filter(this.openpgpkeysPublic(), function (oItem) {
				return oItem && -1 < oItem.emails.indexOf(sEmail);
			}) || null;
		};

		/**
		 * @param {string} sEmail
		 * @return {?}
		 */
		PgpUserStore.prototype.findAllPrivateKeysByEmailNotNative = function (sEmail)
		{
			return _.filter(this.openpgpkeysPrivate(), function (oItem) {
				return oItem && -1 < oItem.emails.indexOf(sEmail);
			}) || null;
		};

		/**
		 * @param {string} sEmail
		 * @param {string=} sPassword
		 * @return {?}
		 */
		PgpUserStore.prototype.findPrivateKeyByEmail = function (sEmail, sPassword)
		{
			var
				oPrivateKeys = [],
				oPrivateKey = null,
				oKey = _.find(this.openpgpkeysPrivate(), function (oItem) {
					return oItem && -1 < oItem.emails.indexOf(sEmail);
				})
			;

			if (oKey)
			{
				oPrivateKeys = oKey.getNativeKeys();
				oPrivateKey = oPrivateKeys[0] || null;

				try
				{
					if (oPrivateKey)
					{
						oPrivateKey.decrypt(Utils.pString(sPassword));
					}
				}
				catch (e)
				{
					oPrivateKey = null;
				}
			}

			return oPrivateKey;
		};

		/**
		 * @param {string=} sPassword
		 * @return {?}
		 */
		PgpUserStore.prototype.findSelfPrivateKey = function (sPassword)
		{
			return this.findPrivateKeyByEmail(__webpack_require__(/*! Stores/User/Account */ 30).email(), sPassword);
		};

		PgpUserStore.prototype.decryptMessage = function (oMessage, aRecipients, fCallback)
		{
			var self = this, aPrivateKeys = [];
			if (oMessage && oMessage.getEncryptionKeyIds)
			{
				aPrivateKeys = this.findPrivateKeysByEncryptionKeyIds(oMessage.getEncryptionKeyIds(), aRecipients, true);
				if (aPrivateKeys && 0 < aPrivateKeys.length)
				{
					kn.showScreenPopup(__webpack_require__(/*! View/Popup/MessageOpenPgp */ 154), [function (oDecryptedKey) {

						if (oDecryptedKey)
						{
							oMessage.decrypt(oDecryptedKey).then(function(oDecryptedMessage){
								var oPrivateKey = null;
								if (oDecryptedMessage)
								{
									oPrivateKey = self.findPrivateKeyByHex(oDecryptedKey.primaryKey.keyid.toHex());
									if (oPrivateKey)
									{
										self.verifyMessage(oDecryptedMessage, function (oValidKey, aSigningKeyIds) {
											fCallback(oPrivateKey, oDecryptedMessage, oValidKey || null, aSigningKeyIds || null);
										});
									}
									else
									{
										fCallback(oPrivateKey, oDecryptedMessage);
									}
								}
								else
								{
									fCallback(oPrivateKey, oDecryptedMessage);
								}

							}, function() {
								fCallback(null, null);
							});
						}
						else
						{
							fCallback(null, null);
						}

					}, aPrivateKeys]);

					return false;
				}
			}

			fCallback(null, null);

			return false;
		};

		PgpUserStore.prototype.findKeyExternal = function (sEmail, fCallback)
		{
			if (this.openpgp.HKP && Settings.appSettingsGet('openpgpPublicKeyServer'))
			{
				var oHkp = new this.openpgp.HKP(Settings.appSettingsGet('openpgpPublicKeyServer').replace(/\/$/, ''));
				oHkp.lookup({query: sEmail}).then(function(sKey) {
					fCallback(sKey);
				}, function() {
					fCallback(null);
				});
			}
			else
			{
				fCallback(null);
			}
		};

		PgpUserStore.prototype.verifyMessage = function (oMessage, fCallback)
		{
			var oValid = null, aResult = [], aPublicKeys = [], aSigningKeyIds = [];
			if (oMessage && oMessage.getSigningKeyIds)
			{
				aSigningKeyIds = oMessage.getSigningKeyIds();
				if (aSigningKeyIds && 0 < aSigningKeyIds.length)
				{
	//				this.findKeyExternal('support@rainloop.net', function(key) {
	//					console.log(key);
	//				});

					aPublicKeys = this.findPublicKeysBySigningKeyIds(aSigningKeyIds);
					if (aPublicKeys && 0 < aPublicKeys.length)
					{
						try
						{
							aResult = oMessage.verify(aPublicKeys);
							oValid = _.find(_.isArray(aResult) ? aResult : [], function (oItem) {
								return oItem && oItem.valid && oItem.keyid;
							});

							if (oValid && oValid.keyid && oValid.keyid && oValid.keyid.toHex)
							{
								fCallback(this.findPublicKeyByHex(oValid.keyid.toHex()));
								return true;
							}
						}
						catch (e)
						{
							Utils.log(e);
						}
					}

					fCallback(null, aSigningKeyIds);
					return false;
				}
			}

			fCallback(null);
			return false;
		};

		/**
		 * @param {*} mDom
		 */
		PgpUserStore.prototype.controlsHelper = function (mDom, oVerControl, bSuccess, sTitle, sText)
		{
			if (bSuccess)
			{
				mDom.removeClass('error').addClass('success').attr('title', sTitle);
				oVerControl.removeClass('error').addClass('success').attr('title', sTitle);
			}
			else
			{
				mDom.removeClass('success').addClass('error').attr('title', sTitle);
				oVerControl.removeClass('success').addClass('error').attr('title', sTitle);
			}

			if (!Utils.isUnd(sText))
			{
				mDom.text(Utils.trim(sText.replace(/(\u200C|\u0002)/g, '')));
			}
		};

		/**
		 * @static
		 */
		PgpUserStore.domControlEncryptedClickHelper = function (self, mDom, sArmoredMessage, aRecipients)
		{
			return function () {

				var oMessage = null, $this = $(this);
				if ($this.hasClass('success'))
				{
					return false;
				}

				try
				{
					oMessage = self.openpgp.message.readArmored(sArmoredMessage);
				}
				catch (e)
				{
					Utils.log(e);
				}

				if (oMessage && oMessage.getText && oMessage.verify && oMessage.decrypt)
				{
					self.decryptMessage(oMessage, aRecipients, function (oValidPrivateKey, oDecryptedMessage, oValidPublicKey, aSigningKeyIds) {

						if (oDecryptedMessage)
						{
							if (oValidPublicKey)
							{
								self.controlsHelper(mDom, $this, true, Translator.i18n('PGP_NOTIFICATIONS/GOOD_SIGNATURE', {
									'USER': oValidPublicKey.user + ' (' + oValidPublicKey.id + ')'
								}), oDecryptedMessage.getText());
							}
							else if (oValidPrivateKey)
							{
								var
									aKeyIds = Utils.isNonEmptyArray(aSigningKeyIds) ? aSigningKeyIds : null,
									sAdditional = aKeyIds ? _.compact(_.map(aKeyIds, function (oItem) {
										return oItem && oItem.toHex ? oItem.toHex() : null;
									})).join(', ') : ''
								;

								self.controlsHelper(mDom, $this, false,
									Translator.i18n('PGP_NOTIFICATIONS/UNVERIFIRED_SIGNATURE') +
										(sAdditional ? ' (' + sAdditional + ')' : ''),
										oDecryptedMessage.getText());
							}
							else
							{
								self.controlsHelper(mDom, $this, false,
									Translator.i18n('PGP_NOTIFICATIONS/DECRYPTION_ERROR'));
							}
						}
						else
						{
							self.controlsHelper(mDom, $this, false,
								Translator.i18n('PGP_NOTIFICATIONS/DECRYPTION_ERROR'));
						}
					});

					return false;
				}

				self.controlsHelper(mDom, $this, false, Translator.i18n('PGP_NOTIFICATIONS/DECRYPTION_ERROR'));
				return false;
			};
		};

		/**
		 * @static
		 */
		PgpUserStore.domControlSignedClickHelper = function (self, mDom, sArmoredMessage)
		{
			return function () {

				var oMessage = null, $this = $(this);
				if ($this.hasClass('success') || $this.hasClass('error'))
				{
					return false;
				}

				try
				{
					oMessage = self.openpgp.cleartext.readArmored(sArmoredMessage);
				}
				catch (e)
				{
					Utils.log(e);
				}

				if (oMessage && oMessage.getText && oMessage.verify)
				{
					self.verifyMessage(oMessage, function (oValidKey, aSigningKeyIds) {
						if (oValidKey)
						{
							self.controlsHelper(mDom, $this, true, Translator.i18n('PGP_NOTIFICATIONS/GOOD_SIGNATURE', {
								'USER': oValidKey.user + ' (' + oValidKey.id + ')'
							}), oMessage.getText());
						}
						else
						{
							var
								aKeyIds = Utils.isNonEmptyArray(aSigningKeyIds) ? aSigningKeyIds : null,
								sAdditional = aKeyIds ? _.compact(_.map(aKeyIds, function (oItem) {
									return oItem && oItem.toHex ? oItem.toHex() : null;
								})).join(', ') : ''
							;

							self.controlsHelper(mDom, $this, false,
								Translator.i18n('PGP_NOTIFICATIONS/UNVERIFIRED_SIGNATURE') +
									(sAdditional ? ' (' + sAdditional + ')' : ''));
						}
					});

					return false;
				}

				self.controlsHelper(mDom, $this, false, Translator.i18n('PGP_NOTIFICATIONS/DECRYPTION_ERROR'));
				return false;
			};
		};

		/**
		 * @param {*} mDom
		 * @param {MessageModel} oRainLoopMessage
		 */
		PgpUserStore.prototype.initMessageBodyControls = function (mDom, oRainLoopMessage)
		{
			if (mDom && !mDom.hasClass('inited'))
			{
				mDom.addClass('inited');

				var
					bEncrypted = mDom.hasClass('encrypted'),
					bSigned = mDom.hasClass('signed'),
					oVerControl = null,
					aRecipients = oRainLoopMessage ? oRainLoopMessage.getEmails(['from', 'to', 'cc']) : [],
					sData = ''
				;

				if (bEncrypted || bSigned)
				{
					sData = mDom.text();
					mDom.data('openpgp-original', sData);

					if (bEncrypted)
					{
						oVerControl = $('<div class="b-openpgp-control"><i class="icon-lock"></i></div>')
							.attr('title', Translator.i18n('MESSAGE/PGP_ENCRYPTED_MESSAGE_DESC'))
							.on('click', PgpUserStore.domControlEncryptedClickHelper(this, mDom, sData, aRecipients))
						;
					}
					else if (bSigned)
					{
						oVerControl = $('<div class="b-openpgp-control"><i class="icon-lock"></i></div>')
							.attr('title', Translator.i18n('MESSAGE/PGP_SIGNED_MESSAGE_DESC'))
							.on('click', PgpUserStore.domControlSignedClickHelper(this, mDom, sData))
						;
					}

					if (oVerControl)
					{
						mDom.before(oVerControl).before('<div></div>');
					}
				}
			}
		};

		module.exports = new PgpUserStore();

	}());



/***/ },
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
/* 34 */,
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
/* 40 */
/*!***********************************!*\
  !*** ./dev/Promises/User/Ajax.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),

	//		Enums = require('Common/Enums'),
	//		Utils = require('Common/Utils'),
	//		Base64 = require('Common/Base64'),
	//		Cache = require('Common/Cache'),
	//		Links = require('Common/Links'),
	//
	//		AppStore = require('Stores/User/App'),
	//		SettingsStore = require('Stores/User/Settings'),

			PromisesPopulator = __webpack_require__(/*! Promises/User/Populator */ 119),
			AbstractAjaxPromises = __webpack_require__(/*! Promises/AbstractAjax */ 118)
		;

		/**
		 * @constructor
		 * @extends AbstractAjaxPromises
		 */
		function UserAjaxUserPromises()
		{
			AbstractAjaxPromises.call(this);
		}

		_.extend(UserAjaxUserPromises.prototype, AbstractAjaxPromises.prototype);

		UserAjaxUserPromises.prototype.foldersReload = function (fTrigger)
		{
			return this.abort('Folders')
				.postRequest('Folders', fTrigger).then(function (oData) {
					PromisesPopulator.foldersList(oData.Result);
					PromisesPopulator.foldersAdditionalParameters(oData.Result);
					return true;
				});
		};

		UserAjaxUserPromises.prototype._folders_timeout_ = 0;
		UserAjaxUserPromises.prototype.foldersReloadWithTimeout = function (fTrigger)
		{
			this.setTrigger(fTrigger, true);

			var self = this;
			window.clearTimeout(this._folders_timeout_);
			this._folders_timeout_ = window.setTimeout(function () {
				self.foldersReload(fTrigger);
			}, 500);
		};

		UserAjaxUserPromises.prototype.folderDelete = function (sFolderFullNameRaw, fTrigger)
		{
			return this.postRequest('FolderDelete', fTrigger, {
				'Folder': sFolderFullNameRaw
			});
		};

		UserAjaxUserPromises.prototype.folderCreate = function (sNewFolderName, sParentName, fTrigger)
		{
			return this.postRequest('FolderCreate', fTrigger, {
				'Folder': sNewFolderName,
				'Parent': sParentName
			});
		};

		UserAjaxUserPromises.prototype.folderRename = function (sPrevFolderFullNameRaw, sNewFolderName, fTrigger)
		{
			return this.postRequest('FolderRename', fTrigger, {
				'Folder': sPrevFolderFullNameRaw,
				'NewFolderName': sNewFolderName
			});
		};

		UserAjaxUserPromises.prototype.attachmentsActions = function (sAction, aHashes, fTrigger)
		{
			return this.postRequest('AttachmentsActions', fTrigger, {
				'Do': sAction,
				'Hashes': aHashes
			});
		};

		UserAjaxUserPromises.prototype.welcomeClose = function ()
		{
			return this.postRequest('WelcomeClose');
		};

		module.exports = new UserAjaxUserPromises();

	}());

/***/ },
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
/* 46 */
/*!********************************!*\
  !*** ./dev/Storage/Client.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_ClientStorageDriver_Cookie__ = __webpack_require__(/*! Common/ClientStorageDriver/Cookie */ 169);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_ClientStorageDriver_LocalStorage__ = __webpack_require__(/*! Common/ClientStorageDriver/LocalStorage */ 170);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





	var ClientStorage = function () {
		function ClientStorage() {
			_classCallCheck(this, ClientStorage);

			var SupportedStorageDriver = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].find([/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_ClientStorageDriver_LocalStorage__["a"], /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_ClientStorageDriver_Cookie__["a"]], function (StorageDriver) {
				return StorageDriver && StorageDriver.supported();
			});
			this.driver = SupportedStorageDriver ? new SupportedStorageDriver() : null;
		}

		/**
	  * @param {number} key
	  * @param {*} data
	  * @return {boolean}
	  */


		ClientStorage.prototype.set = function set(key, data) {
			return this.driver ? this.driver.set('p' + key, data) : false;
		};

		/**
	  * @param {number} key
	  * @return {*}
	  */


		ClientStorage.prototype.get = function get(key) {
			return this.driver ? this.driver.get('p' + key) : null;
		};

		return ClientStorage;
	}();

	module.exports = new ClientStorage();

/***/ },
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
/* 51 */,
/* 52 */
/*!************************************!*\
  !*** ./dev/Stores/User/Contact.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1),

			Settings = __webpack_require__(/*! Storage/Settings */ 8)
		;

		/**
		 * @constructor
		 */
		function ContactUserStore()
		{
			this.contacts = ko.observableArray([]);
			this.contacts.loading = ko.observable(false).extend({'throttle': 200});
			this.contacts.importing = ko.observable(false).extend({'throttle': 200});
			this.contacts.syncing = ko.observable(false).extend({'throttle': 200});
			this.contacts.exportingVcf = ko.observable(false).extend({'throttle': 200});
			this.contacts.exportingCsv = ko.observable(false).extend({'throttle': 200});

			this.allowContactsSync = ko.observable(false);
			this.enableContactsSync = ko.observable(false);
			this.contactsSyncUrl = ko.observable('');
			this.contactsSyncUser = ko.observable('');
			this.contactsSyncPass = ko.observable('');
		}

		ContactUserStore.prototype.populate = function ()
		{
			this.allowContactsSync(!!Settings.settingsGet('ContactsSyncIsAllowed'));
			this.enableContactsSync(!!Settings.settingsGet('EnableContactsSync'));

			this.contactsSyncUrl(Settings.settingsGet('ContactsSyncUrl'));
			this.contactsSyncUser(Settings.settingsGet('ContactsSyncUser'));
			this.contactsSyncPass(Settings.settingsGet('ContactsSyncPassword'));
		};

		module.exports = new ContactUserStore();

	}());

/***/ },
/* 53 */
/*!****************************************!*\
  !*** ./dev/View/Popup/FolderSystem.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			FolderStore = __webpack_require__(/*! Stores/User/Folder */ 21),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function FolderSystemPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsFolderSystem');

			Translator.initOnStartOrLangChange(function () {
				this.sChooseOnText = Translator.i18n('POPUPS_SYSTEM_FOLDERS/SELECT_CHOOSE_ONE');
				this.sUnuseText = Translator.i18n('POPUPS_SYSTEM_FOLDERS/SELECT_UNUSE_NAME');
			}, this);

			this.notification = ko.observable('');

			this.folderSelectList = ko.computed(function () {
				return Utils.folderListOptionsBuilder([], FolderStore.folderList(), FolderStore.folderListSystemNames(), [
					['', this.sChooseOnText],
					[Consts.UNUSED_OPTION_VALUE, this.sUnuseText]
				], null, null, null, null, null, true);
			}, this);

			var
				fSaveSystemFolders = null,
				fCallback = null
			;

			this.sentFolder = FolderStore.sentFolder;
			this.draftFolder = FolderStore.draftFolder;
			this.spamFolder = FolderStore.spamFolder;
			this.trashFolder = FolderStore.trashFolder;
			this.archiveFolder = FolderStore.archiveFolder;

			fSaveSystemFolders = _.debounce(function () {

				Settings.settingsSet('SentFolder', FolderStore.sentFolder());
				Settings.settingsSet('DraftFolder', FolderStore.draftFolder());
				Settings.settingsSet('SpamFolder', FolderStore.spamFolder());
				Settings.settingsSet('TrashFolder', FolderStore.trashFolder());
				Settings.settingsSet('ArchiveFolder', FolderStore.archiveFolder());

				Remote.saveSystemFolders(Utils.emptyFunction, {
					'SentFolder': FolderStore.sentFolder(),
					'DraftFolder': FolderStore.draftFolder(),
					'SpamFolder': FolderStore.spamFolder(),
					'TrashFolder': FolderStore.trashFolder(),
					'ArchiveFolder': FolderStore.archiveFolder(),
					'NullFolder': 'NullFolder'
				});

			}, 1000);

			fCallback = function () {

				Settings.settingsSet('SentFolder', FolderStore.sentFolder());
				Settings.settingsSet('DraftFolder', FolderStore.draftFolder());
				Settings.settingsSet('SpamFolder', FolderStore.spamFolder());
				Settings.settingsSet('TrashFolder', FolderStore.trashFolder());
				Settings.settingsSet('ArchiveFolder', FolderStore.archiveFolder());

				fSaveSystemFolders();
			};

			FolderStore.sentFolder.subscribe(fCallback);
			FolderStore.draftFolder.subscribe(fCallback);
			FolderStore.spamFolder.subscribe(fCallback);
			FolderStore.trashFolder.subscribe(fCallback);
			FolderStore.archiveFolder.subscribe(fCallback);

			this.defautOptionsAfterRender = Utils.defautOptionsAfterRender;

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/FolderSystem', 'PopupsFolderSystemViewModel'], FolderSystemPopupView);
		_.extend(FolderSystemPopupView.prototype, AbstractView.prototype);

		FolderSystemPopupView.prototype.sChooseOnText = '';
		FolderSystemPopupView.prototype.sUnuseText = '';

		/**
		 * @param {number=} iNotificationType = Enums.SetSystemFoldersNotification.None
		 */
		FolderSystemPopupView.prototype.onShow = function (iNotificationType)
		{
			var sNotification = '';

			iNotificationType = Utils.isUnd(iNotificationType) ? Enums.SetSystemFoldersNotification.None : iNotificationType;

			switch (iNotificationType)
			{
				case Enums.SetSystemFoldersNotification.Sent:
					sNotification = Translator.i18n('POPUPS_SYSTEM_FOLDERS/NOTIFICATION_SENT');
					break;
				case Enums.SetSystemFoldersNotification.Draft:
					sNotification = Translator.i18n('POPUPS_SYSTEM_FOLDERS/NOTIFICATION_DRAFTS');
					break;
				case Enums.SetSystemFoldersNotification.Spam:
					sNotification = Translator.i18n('POPUPS_SYSTEM_FOLDERS/NOTIFICATION_SPAM');
					break;
				case Enums.SetSystemFoldersNotification.Trash:
					sNotification = Translator.i18n('POPUPS_SYSTEM_FOLDERS/NOTIFICATION_TRASH');
					break;
				case Enums.SetSystemFoldersNotification.Archive:
					sNotification = Translator.i18n('POPUPS_SYSTEM_FOLDERS/NOTIFICATION_ARCHIVE');
					break;
			}

			this.notification(sNotification);
		};

		module.exports = FolderSystemPopupView;

	}());

/***/ },
/* 54 */
/*!**************************************!*\
  !*** ./dev/Stores/User/Identity.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __WEBPACK_IMPORTED_MODULE_1_ko__ && __WEBPACK_IMPORTED_MODULE_1_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_ko___default });
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




	var IdentityUserStore = function IdentityUserStore() {
		var _this = this;

		_classCallCheck(this, IdentityUserStore);

		this.identities = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observableArray([]);
		this.identities.loading = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false).extend({ throttle: 100 });

		this.identitiesIDS = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.computed(function () {
			return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].compact(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].map(_this.identities(), function (item) {
				return item ? item.id : null;
			}));
		}, this);
	};

	module.exports = new IdentityUserStore();

/***/ },
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
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/*!*****************************************!*\
  !*** ./dev/Stores/User/Notification.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Events = __webpack_require__(/*! Common/Events */ 24),
			Audio = __webpack_require__(/*! Common/Audio */ 66),

			Settings = __webpack_require__(/*! Storage/Settings */ 8)
		;

		/**
		 * @constructor
		 */
		function NotificationUserStore()
		{
			var self = this;

			this.enableSoundNotification = ko.observable(false);
			this.soundNotificationIsSupported = ko.observable(false);

			this.allowDesktopNotification = ko.observable(false);

			this.desktopNotificationPermissions = ko.computed(function () {

				this.allowDesktopNotification();

				var
					NotificationClass = this.notificationClass(),
					iResult = Enums.DesktopNotification.NotSupported
				;

				if (NotificationClass && NotificationClass.permission)
				{
					switch (NotificationClass.permission.toLowerCase())
					{
						case 'granted':
							iResult = Enums.DesktopNotification.Allowed;
							break;
						case 'denied':
							iResult = Enums.DesktopNotification.Denied;
							break;
						case 'default':
							iResult = Enums.DesktopNotification.NotAllowed;
							break;
					}
				}
				else if (window.webkitNotifications && window.webkitNotifications.checkPermission)
				{
					iResult = window.webkitNotifications.checkPermission();
				}

				return iResult;

			}, this).extend({'notify': 'always'});

			this.enableDesktopNotification = ko.computed({
				'owner': this,
				'read': function () {
					return this.allowDesktopNotification() &&
						Enums.DesktopNotification.Allowed === this.desktopNotificationPermissions();
				},
				'write': function (bValue) {
					if (bValue)
					{
						var
							NotificationClass = this.notificationClass(),
							iPermission = this.desktopNotificationPermissions()
						;

						if (NotificationClass && Enums.DesktopNotification.Allowed === iPermission)
						{
							this.allowDesktopNotification(true);
						}
						else if (NotificationClass && Enums.DesktopNotification.NotAllowed === iPermission)
						{
							NotificationClass.requestPermission(function () {
								self.allowDesktopNotification.valueHasMutated();
								if (Enums.DesktopNotification.Allowed === self.desktopNotificationPermissions())
								{
									if (self.allowDesktopNotification())
									{
										self.allowDesktopNotification.valueHasMutated();
									}
									else
									{
										self.allowDesktopNotification(true);
									}
								}
								else
								{
									if (self.allowDesktopNotification())
									{
										self.allowDesktopNotification(false);
									}
									else
									{
										self.allowDesktopNotification.valueHasMutated();
									}
								}
							});
						}
						else
						{
							this.allowDesktopNotification(false);
						}
					}
					else
					{
						this.allowDesktopNotification(false);
					}
				}
			}).extend({'notify': 'always'});

			if (!this.enableDesktopNotification.valueHasMutated)
			{
				this.enableDesktopNotification.valueHasMutated = function () {
					self.allowDesktopNotification.valueHasMutated();
				};
			}

			this.computers();

			this.initNotificationPlayer();
		}

		NotificationUserStore.prototype.computers = function ()
		{
			this.isDesktopNotificationSupported = ko.computed(function () {
				return Enums.DesktopNotification.NotSupported !== this.desktopNotificationPermissions();
			}, this);

			this.isDesktopNotificationDenied = ko.computed(function () {
				return Enums.DesktopNotification.NotSupported === this.desktopNotificationPermissions() ||
					Enums.DesktopNotification.Denied === this.desktopNotificationPermissions();
			}, this);
		};

		NotificationUserStore.prototype.initNotificationPlayer = function ()
		{
			if (Audio && Audio.supportedNotification)
			{
				this.soundNotificationIsSupported(true);
			}
			else
			{
				this.enableSoundNotification(false);
				this.soundNotificationIsSupported(false);
			}
		};

		NotificationUserStore.prototype.playSoundNotification = function (bSkipSetting)
		{
			if (Audio && Audio.supportedNotification && (bSkipSetting ? true : this.enableSoundNotification()))
			{
				Audio.playNotification();
			}
		};

		NotificationUserStore.prototype.displayDesktopNotification = function (sImageSrc, sTitle, sText, oMessageData)
		{
			if (this.enableDesktopNotification())
			{
				var
					NotificationClass = this.notificationClass(),
					oNotification = NotificationClass ? new NotificationClass(sTitle, {
						'body': sText,
						'icon': sImageSrc
					}) : null
				;

				if (oNotification)
				{
					if (oNotification.show)
					{
						oNotification.show();
					}

					if (oMessageData)
					{
						oNotification.onclick = function () {

							window.focus();

							if (oMessageData.Folder && oMessageData.Uid)
							{
								Events.pub('mailbox.message.show', [oMessageData.Folder, oMessageData.Uid]);
							}
						};
					}

					window.setTimeout((function (oLocalNotifications) {
						return function () {
							if (oLocalNotifications.cancel)
							{
								oLocalNotifications.cancel();
							}
							else if (oLocalNotifications.close)
							{
								oLocalNotifications.close();
							}
						};
					}(oNotification)), 7000);
				}
			}
		};

		NotificationUserStore.prototype.populate = function ()
		{
			this.enableSoundNotification(!!Settings.settingsGet('SoundNotification'));
			this.enableDesktopNotification(!!Settings.settingsGet('DesktopNotifications'));
		};

		/**
		 * @return {*|null}
		 */
		NotificationUserStore.prototype.notificationClass = function ()
		{
			return window.Notification && window.Notification.requestPermission ? window.Notification : null;
		};

		module.exports = new NotificationUserStore();

	}());


/***/ },
/* 62 */
/*!***********************************!*\
  !*** ./dev/View/Popup/Account.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function AccountPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsAccount');

			this.isNew = ko.observable(true);

			this.email = ko.observable('');
			this.password = ko.observable('');

			this.emailError = ko.observable(false);
			this.passwordError = ko.observable(false);

			this.email.subscribe(function () {
				this.emailError(false);
			}, this);

			this.password.subscribe(function () {
				this.passwordError(false);
			}, this);

			this.submitRequest = ko.observable(false);
			this.submitError = ko.observable('');
			this.submitErrorAdditional = ko.observable('');

			this.emailFocus = ko.observable(false);

			this.addAccountCommand = Utils.createCommand(this, function () {

				this.emailError('' === Utils.trim(this.email()));
				this.passwordError('' === Utils.trim(this.password()));

				if (this.emailError() || this.passwordError())
				{
					return false;
				}

				this.submitRequest(true);

				Remote.accountSetup(_.bind(function (sResult, oData) {

					this.submitRequest(false);
					if (Enums.StorageResultType.Success === sResult && oData)
					{
						if (oData.Result)
						{
							__webpack_require__(/*! App/User */ 6).default.accountsAndIdentities();
							this.cancelCommand();
						}
						else
						{
							this.submitError(oData.ErrorCode ? Translator.getNotification(oData.ErrorCode) :
								Translator.getNotification(Enums.Notification.UnknownError));

							if (oData.ErrorMessageAdditional)
							{
								this.submitErrorAdditional(oData.ErrorMessageAdditional);
							}
						}
					}
					else
					{
						this.submitError(Translator.getNotification(Enums.Notification.UnknownError));
						this.submitErrorAdditional('');
					}

				}, this), this.email(), this.password(), this.isNew());

				return true;

			}, function () {
				return !this.submitRequest();
			});

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/Account', 'View/Popup/AddAccount', 'PopupsAddAccountViewModel'], AccountPopupView);
		_.extend(AccountPopupView.prototype, AbstractView.prototype);

		AccountPopupView.prototype.clearPopup = function ()
		{
			this.isNew(true);

			this.email('');
			this.password('');

			this.emailError(false);
			this.passwordError(false);

			this.submitRequest(false);
			this.submitError('');
			this.submitErrorAdditional('');
		};

		AccountPopupView.prototype.onShow = function (oAccount)
		{
			this.clearPopup();
			if (oAccount && oAccount.canBeEdit())
			{
				this.isNew(false);
				this.email(oAccount.email);
			}
		};

		AccountPopupView.prototype.onShowWithDelay = function ()
		{
			this.emailFocus(true);
		};

		module.exports = AccountPopupView;

	}());

/***/ },
/* 63 */
/*!************************************!*\
  !*** ./dev/View/Popup/Contacts.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),
			ko = __webpack_require__(/*! ko */ 1),
			key = __webpack_require__(/*! key */ 18),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Selector = __webpack_require__(/*! Common/Selector */ 100),
			Links = __webpack_require__(/*! Common/Links */ 12),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			SettingsStore = __webpack_require__(/*! Stores/User/Settings */ 27),
			ContactStore = __webpack_require__(/*! Stores/User/Contact */ 52),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			EmailModel = __webpack_require__(/*! Model/Email */ 29),
			ContactModel = __webpack_require__(/*! Model/Contact */ 110),
			ContactPropertyModel = __webpack_require__(/*! Model/ContactProperty */ 111),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function ContactsPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsContacts');

			var
				self = this,
				fFastClearEmptyListHelper = function (aList) {
					if (aList && 0 < aList.length) {
						self.viewProperties.removeAll(aList);
						Utils.delegateRunOnDestroy(aList);
					}
				}
			;

			this.bBackToCompose = false;
			this.sLastComposeFocusedField = '';

			this.allowContactsSync = ContactStore.allowContactsSync;
			this.enableContactsSync = ContactStore.enableContactsSync;
			this.allowExport = !Globals.bMobileDevice;

			this.search = ko.observable('');
			this.contactsCount = ko.observable(0);
			this.contacts = ContactStore.contacts;

			this.currentContact = ko.observable(null);

			this.importUploaderButton = ko.observable(null);

			this.contactsPage = ko.observable(1);
			this.contactsPageCount = ko.computed(function () {
				var iPage = window.Math.ceil(this.contactsCount() / Consts.CONTACTS_PER_PAGE);
				return 0 >= iPage ? 1 : iPage;
			}, this);

			this.contactsPagenator = ko.computed(Utils.computedPagenatorHelper(this.contactsPage, this.contactsPageCount));

			this.emptySelection = ko.observable(true);
			this.viewClearSearch = ko.observable(false);

			this.viewID = ko.observable('');
			this.viewReadOnly = ko.observable(false);
			this.viewProperties = ko.observableArray([]);

			this.viewSaveTrigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.viewPropertiesNames = this.viewProperties.filter(function(oProperty) {
				return -1 < Utils.inArray(oProperty.type(), [
					Enums.ContactPropertyType.FirstName, Enums.ContactPropertyType.LastName
				]);
			});

			this.viewPropertiesOther = this.viewProperties.filter(function(oProperty) {
				return -1 < Utils.inArray(oProperty.type(), [
					Enums.ContactPropertyType.Note
				]);
			});

			this.viewPropertiesOther = ko.computed(function () {

				var aList = _.filter(this.viewProperties(), function (oProperty) {
					return -1 < Utils.inArray(oProperty.type(), [
						Enums.ContactPropertyType.Nick
					]);
				});

				return _.sortBy(aList, function (oProperty) {
					return oProperty.type();
				});

			}, this);

			this.viewPropertiesEmails = this.viewProperties.filter(function(oProperty) {
				return Enums.ContactPropertyType.Email === oProperty.type();
			});

			this.viewPropertiesWeb = this.viewProperties.filter(function(oProperty) {
				return Enums.ContactPropertyType.Web === oProperty.type();
			});

			this.viewHasNonEmptyRequaredProperties = ko.computed(function() {

				var
					aNames = this.viewPropertiesNames(),
					aEmail = this.viewPropertiesEmails(),
					fHelper = function (oProperty) {
						return '' !== Utils.trim(oProperty.value());
					}
				;

				return !!(_.find(aNames, fHelper) || _.find(aEmail, fHelper));
			}, this);

			this.viewPropertiesPhones = this.viewProperties.filter(function(oProperty) {
				return Enums.ContactPropertyType.Phone === oProperty.type();
			});

			this.viewPropertiesEmailsNonEmpty = this.viewPropertiesNames.filter(function(oProperty) {
				return '' !== Utils.trim(oProperty.value());
			});

			this.viewPropertiesEmailsEmptyAndOnFocused = this.viewPropertiesEmails.filter(function(oProperty) {
				var bF = oProperty.focused();
				return '' === Utils.trim(oProperty.value()) && !bF;
			});

			this.viewPropertiesPhonesEmptyAndOnFocused = this.viewPropertiesPhones.filter(function(oProperty) {
				var bF = oProperty.focused();
				return '' === Utils.trim(oProperty.value()) && !bF;
			});

			this.viewPropertiesWebEmptyAndOnFocused = this.viewPropertiesWeb.filter(function(oProperty) {
				var bF = oProperty.focused();
				return '' === Utils.trim(oProperty.value()) && !bF;
			});

			this.viewPropertiesOtherEmptyAndOnFocused = ko.computed(function () {
				return _.filter(this.viewPropertiesOther(), function (oProperty) {
					var bF = oProperty.focused();
					return '' === Utils.trim(oProperty.value()) && !bF;
				});
			}, this);

			this.viewPropertiesEmailsEmptyAndOnFocused.subscribe(function(aList) {
				fFastClearEmptyListHelper(aList);
			});

			this.viewPropertiesPhonesEmptyAndOnFocused.subscribe(function(aList) {
				fFastClearEmptyListHelper(aList);
			});

			this.viewPropertiesWebEmptyAndOnFocused.subscribe(function(aList) {
				fFastClearEmptyListHelper(aList);
			});

			this.viewPropertiesOtherEmptyAndOnFocused.subscribe(function(aList) {
				fFastClearEmptyListHelper(aList);
			});

			this.viewSaving = ko.observable(false);

			this.useCheckboxesInList = SettingsStore.useCheckboxesInList;

			this.search.subscribe(function () {
				this.reloadContactList();
			}, this);

			this.contacts.subscribe(Utils.windowResizeCallback);
			this.viewProperties.subscribe(Utils.windowResizeCallback);

			this.contactsChecked = ko.computed(function () {
				return _.filter(this.contacts(), function (oItem) {
					return oItem.checked();
				});
			}, this);

			this.contactsCheckedOrSelected = ko.computed(function () {

				var
					aChecked = this.contactsChecked(),
					oSelected = this.currentContact()
				;

				return _.union(aChecked, oSelected ? [oSelected] : []);

			}, this);

			this.contactsCheckedOrSelectedUids = ko.computed(function () {
				return _.map(this.contactsCheckedOrSelected(), function (oContact) {
					return oContact.idContact;
				});
			}, this);

			this.selector = new Selector(this.contacts, this.currentContact, null,
				'.e-contact-item .actionHandle', '.e-contact-item.selected', '.e-contact-item .checkboxItem',
					'.e-contact-item.focused');

			this.selector.on('onItemSelect', _.bind(function (oContact) {
				this.populateViewContact(oContact ? oContact : null);
				if (!oContact)
				{
					this.emptySelection(true);
				}
			}, this));

			this.selector.on('onItemGetUid', function (oContact) {
				return oContact ? oContact.generateUid() : '';
			});

			this.newCommand = Utils.createCommand(this, function () {
				this.populateViewContact(null);
				this.currentContact(null);
			});

			this.deleteCommand = Utils.createCommand(this, function () {
				this.deleteSelectedContacts();
				this.emptySelection(true);
			}, function () {
				return 0 < this.contactsCheckedOrSelected().length;
			});

			this.newMessageCommand = Utils.createCommand(this, function () {

				if (!Settings.capa(Enums.Capa.Composer))
				{
					return false;
				}

				var
					aE = [],
					aC = this.contactsCheckedOrSelected(),
					aToEmails = null,
					aCcEmails = null,
					aBccEmails = null
				;

				if (Utils.isNonEmptyArray(aC))
				{
					aE = _.map(aC, function (oItem) {
						if (oItem)
						{
							var
								aData = oItem.getNameAndEmailHelper(),
								oEmail = aData ? new EmailModel(aData[0], aData[1]) : null
							;

							if (oEmail && oEmail.validate())
							{
								return oEmail;
							}
						}

						return null;
					});

					aE = _.compact(aE);
				}

				if (Utils.isNonEmptyArray(aE))
				{
					self.bBackToCompose = false;

					kn.hideScreenPopup(__webpack_require__(/*! View/Popup/Contacts */ 63));

					switch (self.sLastComposeFocusedField)
					{
						default:
						case 'to':
							aToEmails = aE;
							break;
						case 'cc':
							aCcEmails = aE;
							break;
						case 'bcc':
							aBccEmails = aE;
							break;
					}

					self.sLastComposeFocusedField = '';

					_.delay(function () {
						kn.showScreenPopup(__webpack_require__(/*! View/Popup/Compose */ 28),
							[Enums.ComposeType.Empty, null, aToEmails, aCcEmails, aBccEmails]);
					}, 200);
				}

			}, function () {
				return 0 < this.contactsCheckedOrSelected().length;
			});

			this.clearCommand = Utils.createCommand(this, function () {
				this.search('');
			});

			this.saveCommand = Utils.createCommand(this, function () {

				this.viewSaving(true);
				this.viewSaveTrigger(Enums.SaveSettingsStep.Animate);

				var
					sRequestUid = Utils.fakeMd5(),
					aProperties = []
				;

				_.each(this.viewProperties(), function (oItem) {
					if (oItem.type() && '' !== Utils.trim(oItem.value()))
					{
						aProperties.push([oItem.type(), oItem.value(), oItem.typeStr()]);
					}
				});

				Remote.contactSave(function (sResult, oData) {

					var bRes = false;
					self.viewSaving(false);

					if (Enums.StorageResultType.Success === sResult && oData && oData.Result &&
						oData.Result.RequestUid === sRequestUid && 0 < Utils.pInt(oData.Result.ResultID))
					{
						if ('' === self.viewID())
						{
							self.viewID(Utils.pInt(oData.Result.ResultID));
						}

						self.reloadContactList();
						bRes = true;
					}

					_.delay(function () {
						self.viewSaveTrigger(bRes ? Enums.SaveSettingsStep.TrueResult : Enums.SaveSettingsStep.FalseResult);
					}, 300);

					if (bRes)
					{
						self.watchDirty(false);

						_.delay(function () {
							self.viewSaveTrigger(Enums.SaveSettingsStep.Idle);
						}, 1000);
					}

				}, sRequestUid, this.viewID(), aProperties);

			}, function () {
				var
					bV = this.viewHasNonEmptyRequaredProperties(),
					bReadOnly = this.viewReadOnly()
				;
				return !this.viewSaving() && bV && !bReadOnly;
			});

			this.syncCommand = Utils.createCommand(this, function () {

				var self = this;
				__webpack_require__(/*! App/User */ 6).default.contactsSync(function (sResult, oData) {
					if (Enums.StorageResultType.Success !== sResult || !oData || !oData.Result)
					{
						window.alert(Translator.getNotification(
							oData && oData.ErrorCode ? oData.ErrorCode : Enums.Notification.ContactsSyncError));
					}

					self.reloadContactList(true);
				});

			}, function () {
				return !this.contacts.syncing() && !this.contacts.importing();
			});

			this.bDropPageAfterDelete = false;

			this.watchDirty = ko.observable(false);
			this.watchHash = ko.observable(false);

			this.viewHash = ko.computed(function () {
				return '' + _.map(self.viewProperties(), function (oItem) {
					return oItem.value();
				}).join('');
			});

		//	this.saveCommandDebounce = _.debounce(_.bind(this.saveCommand, this), 1000);

			this.viewHash.subscribe(function () {
				if (this.watchHash() && !this.viewReadOnly() && !this.watchDirty())
				{
					this.watchDirty(true);
				}
			}, this);

			this.sDefaultKeyScope = Enums.KeyState.ContactList;

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/Contacts', 'PopupsContactsViewModel'], ContactsPopupView);
		_.extend(ContactsPopupView.prototype, AbstractView.prototype);

		ContactsPopupView.prototype.getPropertyPlaceholder = function (sType)
		{
			var sResult = '';
			switch (sType)
			{
				case Enums.ContactPropertyType.LastName:
					sResult = 'CONTACTS/PLACEHOLDER_ENTER_LAST_NAME';
					break;
				case Enums.ContactPropertyType.FirstName:
					sResult = 'CONTACTS/PLACEHOLDER_ENTER_FIRST_NAME';
					break;
				case Enums.ContactPropertyType.Nick:
					sResult = 'CONTACTS/PLACEHOLDER_ENTER_NICK_NAME';
					break;
			}

			return sResult;
		};

		ContactsPopupView.prototype.addNewProperty = function (sType, sTypeStr)
		{
			this.viewProperties.push(new ContactPropertyModel(sType, sTypeStr || '', '', true, this.getPropertyPlaceholder(sType)));
		};

		ContactsPopupView.prototype.addNewOrFocusProperty = function (sType, sTypeStr)
		{
			var oItem = _.find(this.viewProperties(), function (oItem) {
				return sType === oItem.type();
			});

			if (oItem)
			{
				oItem.focused(true);
			}
			else
			{
				this.addNewProperty(sType, sTypeStr);
			}
		};

		ContactsPopupView.prototype.addNewEmail = function ()
		{
			this.addNewProperty(Enums.ContactPropertyType.Email, 'Home');
		};

		ContactsPopupView.prototype.addNewPhone = function ()
		{
			this.addNewProperty(Enums.ContactPropertyType.Phone, 'Mobile');
		};

		ContactsPopupView.prototype.addNewWeb = function ()
		{
			this.addNewProperty(Enums.ContactPropertyType.Web);
		};

		ContactsPopupView.prototype.addNewNickname = function ()
		{
			this.addNewOrFocusProperty(Enums.ContactPropertyType.Nick);
		};

		ContactsPopupView.prototype.addNewNotes = function ()
		{
			this.addNewOrFocusProperty(Enums.ContactPropertyType.Note);
		};

		ContactsPopupView.prototype.addNewBirthday = function ()
		{
			this.addNewOrFocusProperty(Enums.ContactPropertyType.Birthday);
		};

		ContactsPopupView.prototype.exportVcf = function ()
		{
			__webpack_require__(/*! App/User */ 6).default.download(Links.exportContactsVcf());
		};

		ContactsPopupView.prototype.exportCsv = function ()
		{
			__webpack_require__(/*! App/User */ 6).default.download(Links.exportContactsCsv());
		};

		ContactsPopupView.prototype.initUploader = function ()
		{
			if (this.importUploaderButton())
			{
				var
					oJua = new Jua({
						'action': Links.uploadContacts(),
						'name': 'uploader',
						'queueSize': 1,
						'multipleSizeLimit': 1,
						'disableDragAndDrop': true,
						'disableMultiple': true,
						'disableDocumentDropPrevent': true,
						'clickElement': this.importUploaderButton()
					})
				;

				if (oJua)
				{
					oJua
						.on('onStart', _.bind(function () {
							this.contacts.importing(true);
						}, this))
						.on('onComplete', _.bind(function (sId, bResult, oData) {

							this.contacts.importing(false);
							this.reloadContactList();

							if (!sId || !bResult || !oData || !oData.Result)
							{
								window.alert(Translator.i18n('CONTACTS/ERROR_IMPORT_FILE'));
							}

						}, this))
					;
				}
			}
		};

		ContactsPopupView.prototype.removeCheckedOrSelectedContactsFromList = function ()
		{
			var
				self = this,
				oKoContacts = this.contacts,
				oCurrentContact = this.currentContact(),
				iCount = this.contacts().length,
				aContacts = this.contactsCheckedOrSelected()
			;

			if (0 < aContacts.length)
			{
				_.each(aContacts, function (oContact) {

					if (oCurrentContact && oCurrentContact.idContact === oContact.idContact)
					{
						oCurrentContact = null;
						self.currentContact(null);
					}

					oContact.deleted(true);
					iCount--;
				});

				if (iCount <= 0)
				{
					this.bDropPageAfterDelete = true;
				}

				_.delay(function () {

					_.each(aContacts, function (oContact) {
						oKoContacts.remove(oContact);
						Utils.delegateRunOnDestroy(oContact);
					});

				}, 500);
			}
		};

		ContactsPopupView.prototype.deleteSelectedContacts = function ()
		{
			if (0 < this.contactsCheckedOrSelected().length)
			{
				Remote.contactsDelete(
					_.bind(this.deleteResponse, this),
					this.contactsCheckedOrSelectedUids()
				);

				this.removeCheckedOrSelectedContactsFromList();
			}
		};

		/**
		 * @param {string} sResult
		 * @param {AjaxJsonDefaultResponse} oData
		 */
		ContactsPopupView.prototype.deleteResponse = function (sResult, oData)
		{
			if (500 < (Enums.StorageResultType.Success === sResult && oData && oData.Time ? Utils.pInt(oData.Time) : 0))
			{
				this.reloadContactList(this.bDropPageAfterDelete);
			}
			else
			{
				_.delay((function (self) {
					return function () {
						self.reloadContactList(self.bDropPageAfterDelete);
					};
				}(this)), 500);
			}
		};

		ContactsPopupView.prototype.removeProperty = function (oProp)
		{
			this.viewProperties.remove(oProp);
			Utils.delegateRunOnDestroy(oProp);
		};

		/**
		 * @param {?ContactModel} oContact
		 */
		ContactsPopupView.prototype.populateViewContact = function (oContact)
		{
			var
				sId = '',
				sLastName = '',
				sFirstName = '',
				aList = []
			;

			this.watchHash(false);

			this.emptySelection(false);
			this.viewReadOnly(false);

			if (oContact)
			{
				sId = oContact.idContact;
				if (Utils.isNonEmptyArray(oContact.properties))
				{
					_.each(oContact.properties, function (aProperty) {
						if (aProperty && aProperty[0])
						{
							if (Enums.ContactPropertyType.LastName === aProperty[0])
							{
								sLastName = aProperty[1];
							}
							else if (Enums.ContactPropertyType.FirstName === aProperty[0])
							{
								sFirstName = aProperty[1];
							}
							else
							{
								aList.push(new ContactPropertyModel(aProperty[0], aProperty[2] || '', aProperty[1]));
							}
						}
					});
				}

				this.viewReadOnly(!!oContact.readOnly);
			}

			aList.unshift(new ContactPropertyModel(Enums.ContactPropertyType.LastName, '', sLastName, false,
				this.getPropertyPlaceholder(Enums.ContactPropertyType.LastName)));

			aList.unshift(new ContactPropertyModel(Enums.ContactPropertyType.FirstName, '', sFirstName, !oContact,
				this.getPropertyPlaceholder(Enums.ContactPropertyType.FirstName)));

			this.viewID(sId);

			Utils.delegateRunOnDestroy(this.viewProperties());

			this.viewProperties([]);
			this.viewProperties(aList);

			this.watchDirty(false);
			this.watchHash(true);
		};

		/**
		 * @param {boolean=} bDropPagePosition = false
		 */
		ContactsPopupView.prototype.reloadContactList = function (bDropPagePosition)
		{
			var
				self = this,
				iOffset = (this.contactsPage() - 1) * Consts.CONTACTS_PER_PAGE
			;

			this.bDropPageAfterDelete = false;

			if (Utils.isUnd(bDropPagePosition) ? false : !!bDropPagePosition)
			{
				this.contactsPage(1);
				iOffset = 0;
			}

			this.contacts.loading(true);
			Remote.contacts(function (sResult, oData) {

				var
					iCount = 0,
					aList = []
				;

				if (Enums.StorageResultType.Success === sResult && oData && oData.Result && oData.Result.List)
				{
					if (Utils.isNonEmptyArray(oData.Result.List))
					{
						aList = _.map(oData.Result.List, function (oItem) {
							var oContact = new ContactModel();
							return oContact.parse(oItem) ? oContact : null;
						});

						aList = _.compact(aList);

						iCount = Utils.pInt(oData.Result.Count);
						iCount = 0 < iCount ? iCount : 0;
					}
				}

				self.contactsCount(iCount);

				Utils.delegateRunOnDestroy(self.contacts());
				self.contacts(aList);

				self.contacts.loading(false);
				self.viewClearSearch('' !== self.search());

			}, iOffset, Consts.CONTACTS_PER_PAGE, this.search());
		};

		ContactsPopupView.prototype.onBuild = function (oDom)
		{
			this.oContentVisible = $('.b-list-content', oDom);
			this.oContentScrollable = $('.content', this.oContentVisible);

			this.selector.init(this.oContentVisible, this.oContentScrollable, Enums.KeyState.ContactList);

			var self = this;

			key('delete', Enums.KeyState.ContactList, function () {
				self.deleteCommand();
				return false;
			});

			key('c, w', Enums.KeyState.ContactList, function () {
				self.newMessageCommand();
				return false;
			});

			oDom
				.on('click', '.e-pagenator .e-page', function () {
					var oPage = ko.dataFor(this);
					if (oPage)
					{
						self.contactsPage(Utils.pInt(oPage.value));
						self.reloadContactList();
					}
				})
			;

			this.initUploader();
		};

		ContactsPopupView.prototype.onShow = function (bBackToCompose, sLastComposeFocusedField)
		{
			this.bBackToCompose = Utils.isUnd(bBackToCompose) ? false : !!bBackToCompose;
			this.sLastComposeFocusedField = Utils.isUnd(sLastComposeFocusedField) ? '' : sLastComposeFocusedField;

			kn.routeOff();
			this.reloadContactList(true);
		};

		ContactsPopupView.prototype.onHide = function ()
		{
			kn.routeOn();

			this.currentContact(null);
			this.emptySelection(true);
			this.search('');
			this.contactsCount(0);

			Utils.delegateRunOnDestroy(this.contacts());
			this.contacts([]);

			this.sLastComposeFocusedField = '';

			if (this.bBackToCompose)
			{
				this.bBackToCompose = false;

				if (Settings.capa(Enums.Capa.Composer))
				{
					kn.showScreenPopup(__webpack_require__(/*! View/Popup/Compose */ 28));
				}
			}
		};

		module.exports = ContactsPopupView;

	}());

/***/ },
/* 64 */
/*!************************************!*\
  !*** ./dev/View/Popup/Identity.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function IdentityPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsIdentity');

			var self = this;

			this.id = '';
			this.edit = ko.observable(false);
			this.owner = ko.observable(false);

			this.email = ko.observable('').validateEmail();
			this.email.focused = ko.observable(false);
			this.name = ko.observable('');
			this.name.focused = ko.observable(false);
			this.replyTo = ko.observable('').validateSimpleEmail();
			this.replyTo.focused = ko.observable(false);
			this.bcc = ko.observable('').validateSimpleEmail();
			this.bcc.focused = ko.observable(false);

			this.signature = ko.observable('');
			this.signatureInsertBefore = ko.observable(false);

			this.showBcc = ko.observable(false);
			this.showReplyTo = ko.observable(false);

			this.submitRequest = ko.observable(false);
			this.submitError = ko.observable('');

			this.bcc.subscribe(function (aValue) {
				if (false === self.showBcc() && 0 < aValue.length)
				{
					self.showBcc(true);
				}
			}, this);

			this.replyTo.subscribe(function (aValue) {
				if (false === self.showReplyTo() && 0 < aValue.length)
				{
					self.showReplyTo(true);
				}
			}, this);

			this.addOrEditIdentityCommand = Utils.createCommand(this, function () {

				if (this.signature && this.signature.__fetchEditorValue)
				{
					this.signature.__fetchEditorValue();
				}

				if (!this.email.hasError())
				{
					this.email.hasError('' === Utils.trim(this.email()));
				}

				if (this.email.hasError())
				{
					if (!this.owner())
					{
						this.email.focused(true);
					}

					return false;
				}

				if (this.replyTo.hasError())
				{
					this.replyTo.focused(true);
					return false;
				}

				if (this.bcc.hasError())
				{
					this.bcc.focused(true);
					return false;
				}

				this.submitRequest(true);

				Remote.identityUpdate(_.bind(function (sResult, oData) {

					this.submitRequest(false);
					if (Enums.StorageResultType.Success === sResult && oData)
					{
						if (oData.Result)
						{
							__webpack_require__(/*! App/User */ 6).default.accountsAndIdentities();
							this.cancelCommand();
						}
						else if (oData.ErrorCode)
						{
							this.submitError(Translator.getNotification(oData.ErrorCode));
						}
					}
					else
					{
						this.submitError(Translator.getNotification(Enums.Notification.UnknownError));
					}

				}, this), this.id, this.email(), this.name(), this.replyTo(), this.bcc(),
					this.signature(), this.signatureInsertBefore());

				return true;

			}, function () {
				return !this.submitRequest();
			});

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/Identity', 'PopupsIdentityViewModel'], IdentityPopupView);
		_.extend(IdentityPopupView.prototype, AbstractView.prototype);

		IdentityPopupView.prototype.clearPopup = function ()
		{
			this.id = '';
			this.edit(false);
			this.owner(false);

			this.name('');
			this.email('');
			this.replyTo('');
			this.bcc('');
			this.signature('');
			this.signatureInsertBefore(false);

			this.email.hasError(false);
			this.replyTo.hasError(false);
			this.bcc.hasError(false);

			this.showBcc(false);
			this.showReplyTo(false);

			this.submitRequest(false);
			this.submitError('');
		};

		/**
		 * @param {?IdentityModel} oIdentity
		 */
		IdentityPopupView.prototype.onShow = function (oIdentity)
		{
			this.clearPopup();

			if (oIdentity)
			{
				this.edit(true);

				this.id = oIdentity.id() || '';
				this.name(oIdentity.name());
				this.email(oIdentity.email());
				this.replyTo(oIdentity.replyTo());
				this.bcc(oIdentity.bcc());
				this.signature(oIdentity.signature());
				this.signatureInsertBefore(oIdentity.signatureInsertBefore());

				this.owner(this.id === '');
			}
			else
			{
				this.id = Utils.fakeMd5();
			}
		};

		IdentityPopupView.prototype.onShowWithDelay = function ()
		{
			if (!this.owner() && !Globals.bMobile)
			{
				this.email.focused(true);
			}
		};

		IdentityPopupView.prototype.onHideWithDelay = function ()
		{
			this.clearPopup();
		};

		module.exports = IdentityPopupView;

	}());

/***/ },
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
/* 66 */
/*!******************************!*\
  !*** ./dev/Common/Audio.jsx ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Links__ = __webpack_require__(/*! Common/Links */ 12);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Links___default = __WEBPACK_IMPORTED_MODULE_2_Common_Links__ && __WEBPACK_IMPORTED_MODULE_2_Common_Links__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_Common_Links__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_Common_Links__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_Common_Links___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_Common_Links___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Events__ = __webpack_require__(/*! Common/Events */ 24);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Events___default = __WEBPACK_IMPORTED_MODULE_3_Common_Events__ && __WEBPACK_IMPORTED_MODULE_3_Common_Events__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_Common_Events__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_Common_Events__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3_Common_Events___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3_Common_Events___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







	var Audio = function () {
		function Audio() {
			var _this = this;

			_classCallCheck(this, Audio);

			this.player = null;
			this.notificator = null;
			this.supported = false;
			this.supportedMp3 = false;
			this.supportedOgg = false;
			this.supportedWav = false;
			this.supportedNotification = false;

			this.player = this.createNewObject();

			this.supported = !/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["bMobileDevice"] && !/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Globals__["bSafari"] && !!this.player && !!this.player.play;
			if (this.supported && this.player.canPlayType) {
				this.supportedMp3 = '' !== this.player.canPlayType('audio/mpeg;').replace(/no/, '');
				this.supportedWav = '' !== this.player.canPlayType('audio/wav; codecs="1"').replace(/no/, '');
				this.supportedOgg = '' !== this.player.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, '');
				this.supportedNotification = this.supported && this.supportedMp3;
			}

			if (!this.player || !this.supportedMp3 && !this.supportedOgg && !this.supportedWav) {
				this.supported = false;
				this.supportedMp3 = false;
				this.supportedOgg = false;
				this.supportedWav = false;
				this.supportedNotification = false;
			}

			if (this.supported) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(this.player).on('ended error', function () {
					return _this.stop();
				});

				/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Events___default.a.sub('audio.api.stop', function () {
					return _this.stop();
				});
			}
		}

		Audio.prototype.createNewObject = function createNewObject() {
			var player = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].Audio ? new /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].Audio() : null;
			if (player && player.canPlayType && player.pause && player.play) {
				player.preload = 'none';
				player.loop = false;
				player.autoplay = false;
				player.muted = false;
			}

			return player;
		};

		Audio.prototype.paused = function paused() {
			return this.supported ? !!this.player.paused : true;
		};

		Audio.prototype.stop = function stop() {
			if (this.supported && this.player.pause) {
				this.player.pause();
			}

			/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Events___default.a.pub('audio.stop');
		};

		Audio.prototype.pause = function pause() {
			this.stop();
		};

		Audio.prototype.clearName = function clearName() {
			var name = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
			var ext = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];


			name = /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"].bind()(name);
			if (ext && '.' + ext === name.toLowerCase().substr((ext.length + 1) * -1)) {
				name = /* harmony import */__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"].bind()(name.substr(0, name.length - 4));
			}

			return '' === name ? 'audio' : name;
		};

		Audio.prototype.playMp3 = function playMp3(url, name) {
			if (this.supported && this.supportedMp3) {
				this.player.src = url;
				this.player.play();

				/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Events___default.a.pub('audio.start', [this.clearName(name, 'mp3'), 'mp3']);
			}
		};

		Audio.prototype.playOgg = function playOgg(url, name) {
			if (this.supported && this.supportedOgg) {
				this.player.src = url;
				this.player.play();

				name = this.clearName(name, 'oga');
				name = this.clearName(name, 'ogg');

				/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Events___default.a.pub('audio.start', [name, 'ogg']);
			}
		};

		Audio.prototype.playWav = function playWav(url, name) {
			if (this.supported && this.supportedWav) {
				this.player.src = url;
				this.player.play();

				/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Events___default.a.pub('audio.start', [this.clearName(name, 'wav'), 'wav']);
			}
		};

		Audio.prototype.playNotification = function playNotification() {
			if (this.supported && this.supportedMp3) {
				if (!this.notificator) {
					this.notificator = this.createNewObject();
					this.notificator.src = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Links___default.a.sound('new-mail.mp3');
				}

				if (this.notificator && this.notificator.play) {
					this.notificator.play();
				}
			}
		};

		return Audio;
	}();

	module.exports = new Audio();

/***/ },
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
/* 77 */
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
/* 82 */
/*!*****************************!*\
  !*** external "window.Jua" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = window.Jua;

/***/ },
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
/* 86 */
/*!*********************************!*\
  !*** ./dev/Model/Attachment.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Links = __webpack_require__(/*! Common/Links */ 12),
			Audio = __webpack_require__(/*! Common/Audio */ 66),

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @constructor
		 */
		function AttachmentModel()
		{
			AbstractModel.call(this, 'AttachmentModel');

			this.checked = ko.observable(false);

			this.mimeType = '';
			this.fileName = '';
			this.fileNameExt = '';
			this.fileType = Enums.FileType.Unknown;
			this.estimatedSize = 0;
			this.friendlySize = '';
			this.isInline = false;
			this.isLinked = false;
			this.isThumbnail = false;
			this.cid = '';
			this.cidWithOutTags = '';
			this.contentLocation = '';
			this.download = '';
			this.folder = '';
			this.uid = '';
			this.mimeIndex = '';
			this.framed = false;
		}

		_.extend(AttachmentModel.prototype, AbstractModel.prototype);

		/**
		 * @static
		 * @param {AjaxJsonAttachment} oJsonAttachment
		 * @return {?AttachmentModel}
		 */
		AttachmentModel.newInstanceFromJson = function (oJsonAttachment)
		{
			var oAttachmentModel = new AttachmentModel();
			return oAttachmentModel.initByJson(oJsonAttachment) ? oAttachmentModel : null;
		};

		AttachmentModel.prototype.mimeType = '';
		AttachmentModel.prototype.fileName = '';
		AttachmentModel.prototype.fileType = '';
		AttachmentModel.prototype.fileNameExt = '';
		AttachmentModel.prototype.estimatedSize = 0;
		AttachmentModel.prototype.friendlySize = '';
		AttachmentModel.prototype.isInline = false;
		AttachmentModel.prototype.isLinked = false;
		AttachmentModel.prototype.isThumbnail = false;
		AttachmentModel.prototype.cid = '';
		AttachmentModel.prototype.cidWithOutTags = '';
		AttachmentModel.prototype.contentLocation = '';
		AttachmentModel.prototype.download = '';
		AttachmentModel.prototype.folder = '';
		AttachmentModel.prototype.uid = '';
		AttachmentModel.prototype.mimeIndex = '';
		AttachmentModel.prototype.framed = false;

		/**
		 * @param {AjaxJsonAttachment} oJsonAttachment
		 */
		AttachmentModel.prototype.initByJson = function (oJsonAttachment)
		{
			var bResult = false;
			if (oJsonAttachment && 'Object/Attachment' === oJsonAttachment['@Object'])
			{
				this.mimeType = Utils.trim((oJsonAttachment.MimeType || '').toLowerCase());
				this.fileName = Utils.trim(oJsonAttachment.FileName);
				this.estimatedSize = Utils.pInt(oJsonAttachment.EstimatedSize);
				this.isInline = !!oJsonAttachment.IsInline;
				this.isLinked = !!oJsonAttachment.IsLinked;
				this.isThumbnail = !!oJsonAttachment.IsThumbnail;
				this.cid = oJsonAttachment.CID;
				this.contentLocation = oJsonAttachment.ContentLocation;
				this.download = oJsonAttachment.Download;

				this.folder = oJsonAttachment.Folder;
				this.uid = oJsonAttachment.Uid;
				this.mimeIndex = oJsonAttachment.MimeIndex;
				this.framed = !!oJsonAttachment.Framed;

				this.friendlySize = Utils.friendlySize(this.estimatedSize);
				this.cidWithOutTags = this.cid.replace(/^<+/, '').replace(/>+$/, '');

				this.fileNameExt = Utils.getFileExtension(this.fileName);
				this.fileType = AttachmentModel.staticFileType(this.fileNameExt, this.mimeType);

				bResult = true;
			}

			return bResult;
		};

		/**
		 * @return {boolean}
		 */
		AttachmentModel.prototype.isImage = function ()
		{
			return Enums.FileType.Image === this.fileType;
		};

		/**
		 * @return {boolean}
		 */
		AttachmentModel.prototype.isMp3 = function ()
		{
			return Enums.FileType.Audio === this.fileType &&
				'mp3' === this.fileNameExt;
		};

		/**
		 * @return {boolean}
		 */
		AttachmentModel.prototype.isOgg = function ()
		{
			return Enums.FileType.Audio === this.fileType &&
				('oga' === this.fileNameExt || 'ogg' === this.fileNameExt);
		};

		/**
		 * @return {boolean}
		 */
		AttachmentModel.prototype.isWav = function ()
		{
			return Enums.FileType.Audio === this.fileType &&
				'wav' === this.fileNameExt;
		};

		/**
		 * @return {boolean}
		 */
		AttachmentModel.prototype.hasThumbnail = function ()
		{
			return this.isThumbnail;
		};

		/**
		 * @return {boolean}
		 */
		AttachmentModel.prototype.isText = function ()
		{
			return Enums.FileType.Text === this.fileType ||
				Enums.FileType.Eml === this.fileType ||
				Enums.FileType.Certificate === this.fileType ||
				Enums.FileType.Html === this.fileType ||
				Enums.FileType.Code === this.fileType
			;
		};

		/**
		 * @return {boolean}
		 */
		AttachmentModel.prototype.isPdf = function ()
		{
			return Enums.FileType.Pdf === this.fileType;
		};

		/**
		 * @return {boolean}
		 */
		AttachmentModel.prototype.isFramed = function ()
		{
			return this.framed && (Globals.data.__APP__ && Globals.data.__APP__.googlePreviewSupported()) &&
				!(this.isPdf() && Globals.bAllowPdfPreview) && !this.isText() && !this.isImage();
		};

		/**
		 * @return {boolean}
		 */
		AttachmentModel.prototype.hasPreview = function ()
		{
			return this.isImage() || (this.isPdf() && Globals.bAllowPdfPreview) ||
				this.isText() || this.isFramed();
		};

		/**
		 * @return {boolean}
		 */
		AttachmentModel.prototype.hasPreplay = function ()
		{
			return (Audio.supportedMp3 && this.isMp3()) ||
				(Audio.supportedOgg && this.isOgg()) ||
				(Audio.supportedWav && this.isWav())
			;
		};

		/**
		 * @return {string}
		 */
		AttachmentModel.prototype.linkDownload = function ()
		{
			return Links.attachmentDownload(this.download);
		};

		/**
		 * @return {string}
		 */
		AttachmentModel.prototype.linkPreview = function ()
		{
			return Links.attachmentPreview(this.download);
		};

		/**
		 * @return {string}
		 */
		AttachmentModel.prototype.linkThumbnail = function ()
		{
			return this.hasThumbnail() ? Links.attachmentThumbnailPreview(this.download) : '';
		};

		/**
		 * @return {string}
		 */
		AttachmentModel.prototype.linkThumbnailPreviewStyle = function ()
		{
			var sLink = this.linkThumbnail();
			return '' === sLink ? '' : 'background:url(' + sLink + ')';
		};

		/**
		 * @return {string}
		 */
		AttachmentModel.prototype.linkFramed = function ()
		{
			return Links.attachmentFramed(this.download);
		};

		/**
		 * @return {string}
		 */
		AttachmentModel.prototype.linkPreviewAsPlain = function ()
		{
			return Links.attachmentPreviewAsPlain(this.download);
		};

		/**
		 * @return {string}
		 */
		AttachmentModel.prototype.linkPreviewMain = function ()
		{
			var sResult = '';
			switch (true)
			{
				case this.isImage():
				case this.isPdf() && Globals.bAllowPdfPreview:
					sResult = this.linkPreview();
					break;
				case this.isText():
					sResult = this.linkPreviewAsPlain();
					break;
				case this.isFramed():
					sResult = this.linkFramed();
					break;
			}

			return sResult;
		};

		/**
		 * @return {string}
		 */
		AttachmentModel.prototype.generateTransferDownloadUrl = function ()
		{
			var	sLink = this.linkDownload();
			if ('http' !== sLink.substr(0, 4))
			{
				sLink = window.location.protocol + '//' + window.location.host + window.location.pathname + sLink;
			}

			return this.mimeType + ':' + this.fileName + ':' + sLink;
		};

		/**
		 * @param {AttachmentModel} oAttachment
		 * @param {*} oEvent
		 * @return {boolean}
		 */
		AttachmentModel.prototype.eventDragStart = function (oAttachment, oEvent)
		{
			var	oLocalEvent = oEvent.originalEvent || oEvent;
			if (oAttachment && oLocalEvent && oLocalEvent.dataTransfer && oLocalEvent.dataTransfer.setData)
			{
				oLocalEvent.dataTransfer.setData('DownloadURL', this.generateTransferDownloadUrl());
			}

			return true;
		};

		/**
		 * @param {string} sExt
		 * @param {string} sMimeType
		 * @return {string}
		 */
		AttachmentModel.staticFileType = _.memoize(function (sExt, sMimeType)
		{
			sExt = Utils.trim(sExt).toLowerCase();
			sMimeType = Utils.trim(sMimeType).toLowerCase();

			var
				sResult = Enums.FileType.Unknown,
				aMimeTypeParts = sMimeType.split('/')
			;

			switch (true)
			{
				case 'image' === aMimeTypeParts[0] || -1 < Utils.inArray(sExt, [
					'png', 'jpg', 'jpeg', 'gif', 'bmp'
				]):
					sResult = Enums.FileType.Image;
					break;
				case 'audio' === aMimeTypeParts[0] || -1 < Utils.inArray(sExt, [
					'mp3', 'ogg', 'oga', 'wav'
				]):
					sResult = Enums.FileType.Audio;
					break;
				case 'video' === aMimeTypeParts[0] || -1 < Utils.inArray(sExt, [
					'mkv', 'avi'
				]):
					sResult = Enums.FileType.Video;
					break;
				case -1 < Utils.inArray(sExt, [
					'php', 'js', 'css'
				]):
					sResult = Enums.FileType.Code;
					break;
				case 'eml' === sExt || -1 < Utils.inArray(sMimeType, [
					'message/delivery-status', 'message/rfc822'
				]):
					sResult = Enums.FileType.Eml;
					break;
				case ('text' === aMimeTypeParts[0] && 'html' !== aMimeTypeParts[1]) || -1 < Utils.inArray(sExt, [
					'txt', 'log'
				]):
					sResult = Enums.FileType.Text;
					break;
				case ('text/html' === sMimeType) || -1 < Utils.inArray(sExt, [
					'html'
				]):
					sResult = Enums.FileType.Html;
					break;
				case -1 < Utils.inArray(aMimeTypeParts[1], [
					'zip', '7z', 'tar', 'rar', 'gzip', 'bzip', 'bzip2', 'x-zip', 'x-7z', 'x-rar', 'x-tar', 'x-gzip', 'x-bzip', 'x-bzip2', 'x-zip-compressed', 'x-7z-compressed', 'x-rar-compressed'
				]) || -1 < Utils.inArray(sExt, [
					'zip', '7z', 'tar', 'rar', 'gzip', 'bzip', 'bzip2'
				]):
					sResult = Enums.FileType.Archive;
					break;
				case -1 < Utils.inArray(aMimeTypeParts[1], ['pdf', 'x-pdf']) || -1 < Utils.inArray(sExt, [
					'pdf'
				]):
					sResult = Enums.FileType.Pdf;
					break;
				case -1 < Utils.inArray(sMimeType, [
					'application/pgp-signature', 'application/pgp-keys'
				]) || -1 < Utils.inArray(sExt, [
					'asc', 'pem', 'ppk'
				]):
					sResult = Enums.FileType.Certificate;
					break;
				case -1 < Utils.inArray(sMimeType, ['application/pkcs7-signature']) ||
					-1 < Utils.inArray(sExt, ['p7s']):

					sResult = Enums.FileType.CertificateBin;
					break;
				case -1 < Utils.inArray(aMimeTypeParts[1], [
					'rtf', 'msword', 'vnd.msword', 'vnd.openxmlformats-officedocument.wordprocessingml.document',
					'vnd.openxmlformats-officedocument.wordprocessingml.template',
					'vnd.ms-word.document.macroEnabled.12',
					'vnd.ms-word.template.macroEnabled.12'
				]):
					sResult = Enums.FileType.WordText;
					break;
				case -1 < Utils.inArray(aMimeTypeParts[1], [
					'excel', 'ms-excel', 'vnd.ms-excel',
					'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
					'vnd.openxmlformats-officedocument.spreadsheetml.template',
					'vnd.ms-excel.sheet.macroEnabled.12',
					'vnd.ms-excel.template.macroEnabled.12',
					'vnd.ms-excel.addin.macroEnabled.12',
					'vnd.ms-excel.sheet.binary.macroEnabled.12'
				]):
					sResult = Enums.FileType.Sheet;
					break;
				case -1 < Utils.inArray(aMimeTypeParts[1], [
					'powerpoint', 'ms-powerpoint', 'vnd.ms-powerpoint',
					'vnd.openxmlformats-officedocument.presentationml.presentation',
					'vnd.openxmlformats-officedocument.presentationml.template',
					'vnd.openxmlformats-officedocument.presentationml.slideshow',
					'vnd.ms-powerpoint.addin.macroEnabled.12',
					'vnd.ms-powerpoint.presentation.macroEnabled.12',
					'vnd.ms-powerpoint.template.macroEnabled.12',
					'vnd.ms-powerpoint.slideshow.macroEnabled.12'
				]):
					sResult = Enums.FileType.Presentation;
					break;
			}

			return sResult;
		});

		/**
		 * @param {string} sFileType
		 * @return {string}
		 */
		AttachmentModel.staticIconClass = _.memoize(function (sFileType)
		{
			var
				sText = '',
				sClass = 'icon-file'
			;

			switch (sFileType)
			{
				case Enums.FileType.Text:
				case Enums.FileType.Eml:
				case Enums.FileType.WordText:
					sClass = 'icon-file-text';
					break;
				case Enums.FileType.Html:
				case Enums.FileType.Code:
					sClass = 'icon-file-code';
					break;
				case Enums.FileType.Image:
					sClass = 'icon-file-image';
					break;
				case Enums.FileType.Audio:
					sClass = 'icon-file-music';
					break;
				case Enums.FileType.Video:
					sClass = 'icon-file-movie';
					break;
				case Enums.FileType.Archive:
					sClass = 'icon-file-zip';
					break;
				case Enums.FileType.Certificate:
				case Enums.FileType.CertificateBin:
					sClass = 'icon-file-certificate';
					break;
				case Enums.FileType.Sheet:
					sClass = 'icon-file-excel';
					break;
				case Enums.FileType.Presentation:
					sClass = 'icon-file-chart-graph';
					break;
				case Enums.FileType.Pdf:
					sText = 'pdf';
					sClass = 'icon-none';
					break;
			}

			return [sClass, sText];
		});

		/**
		 * @param {string} sFileType
		 * @return {string}
		 */
		AttachmentModel.staticCombinedIconClass = function (aData)
		{
			var
				sClass = '',
				aTypes = []
			;

			if (Utils.isNonEmptyArray(aData))
			{
				sClass = 'icon-attachment';

				aTypes = _.uniq(_.compact(_.map(aData, function (aItem) {
					return aItem ? AttachmentModel.staticFileType(
						Utils.getFileExtension(aItem[0]), aItem[1]) : '';
				})));

				if (aTypes && 1 === aTypes.length && aTypes[0])
				{
					switch (aTypes[0])
					{
						case Enums.FileType.Text:
						case Enums.FileType.WordText:
							sClass = 'icon-file-text';
							break;
						case Enums.FileType.Html:
						case Enums.FileType.Code:
							sClass = 'icon-file-code';
							break;
						case Enums.FileType.Image:
							sClass = 'icon-file-image';
							break;
						case Enums.FileType.Audio:
							sClass = 'icon-file-music';
							break;
						case Enums.FileType.Video:
							sClass = 'icon-file-movie';
							break;
						case Enums.FileType.Archive:
							sClass = 'icon-file-zip';
							break;
						case Enums.FileType.Certificate:
						case Enums.FileType.CertificateBin:
							sClass = 'icon-file-certificate';
							break;
						case Enums.FileType.Sheet:
							sClass = 'icon-file-excel';
							break;
						case Enums.FileType.Presentation:
							sClass = 'icon-file-chart-graph';
							break;
					}
				}
			}

			return sClass;
		};

		/**
		 * @return {string}
		 */
		AttachmentModel.prototype.iconClass = function ()
		{
			return AttachmentModel.staticIconClass(this.fileType)[0];
		};

		/**
		 * @return {string}
		 */
		AttachmentModel.prototype.iconText = function ()
		{
			return AttachmentModel.staticIconClass(this.fileType)[1];
		};

		module.exports = AttachmentModel;

	}());

/***/ },
/* 87 */
/*!*****************************!*\
  !*** ./dev/Model/Filter.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Cache = __webpack_require__(/*! Common/Cache */ 17),

			FilterConditionModel = __webpack_require__(/*! Model/FilterCondition */ 112),

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @constructor
		 */
		function FilterModel()
		{
			AbstractModel.call(this, 'FilterModel');

			this.enabled = ko.observable(true);

			this.id = '';

			this.name = ko.observable('');
			this.name.error = ko.observable(false);
			this.name.focused = ko.observable(false);

			this.conditions = ko.observableArray([]);
			this.conditionsType = ko.observable(Enums.FilterRulesType.Any);

			// Actions
			this.actionValue = ko.observable('');
			this.actionValue.error = ko.observable(false);

			this.actionValueSecond = ko.observable('');
			this.actionValueThird = ko.observable('');

			this.actionValueFourth = ko.observable('');
			this.actionValueFourth.error = ko.observable(false);

			this.actionMarkAsRead = ko.observable(false);

			this.actionKeep = ko.observable(true);
			this.actionNoStop = ko.observable(false);

			this.actionType = ko.observable(Enums.FiltersAction.MoveTo);

			this.actionType.subscribe(function () {
				this.actionValue('');
				this.actionValue.error(false);
				this.actionValueSecond('');
				this.actionValueThird('');
				this.actionValueFourth('');
				this.actionValueFourth.error(false);
			}, this);

			var fGetRealFolderName = function (sFolderFullNameRaw) {
				var oFolder = Cache.getFolderFromCacheList(sFolderFullNameRaw);
				return oFolder ? oFolder.fullName.replace(
					'.' === oFolder.delimiter ? /\./ : /[\\\/]+/, ' / ') : sFolderFullNameRaw;
			};

			this.nameSub = ko.computed(function () {

				var
					sResult = '',
					sActionValue = this.actionValue()
				;

				switch (this.actionType())
				{
					case Enums.FiltersAction.MoveTo:
						sResult = Translator.i18n('SETTINGS_FILTERS/SUBNAME_MOVE_TO', {
							'FOLDER': fGetRealFolderName(sActionValue)
						});
						break;
					case Enums.FiltersAction.Forward:
						sResult = Translator.i18n('SETTINGS_FILTERS/SUBNAME_FORWARD_TO', {
							'EMAIL': sActionValue
						});
						break;
					case Enums.FiltersAction.Vacation:
						sResult = Translator.i18n('SETTINGS_FILTERS/SUBNAME_VACATION_MESSAGE');
						break;
					case Enums.FiltersAction.Reject:
						sResult = Translator.i18n('SETTINGS_FILTERS/SUBNAME_REJECT');
						break;
					case Enums.FiltersAction.Discard:
						sResult = Translator.i18n('SETTINGS_FILTERS/SUBNAME_DISCARD');
						break;
				}

				return sResult ? '(' + sResult + ')' : '';

			}, this);

			this.actionTemplate = ko.computed(function () {

				var sTemplate = '';
				switch (this.actionType())
				{
					default:
					case Enums.FiltersAction.MoveTo:
						sTemplate = 'SettingsFiltersActionMoveToFolder';
						break;
					case Enums.FiltersAction.Forward:
						sTemplate = 'SettingsFiltersActionForward';
						break;
					case Enums.FiltersAction.Vacation:
						sTemplate = 'SettingsFiltersActionVacation';
						break;
					case Enums.FiltersAction.Reject:
						sTemplate = 'SettingsFiltersActionReject';
						break;
					case Enums.FiltersAction.None:
						sTemplate = 'SettingsFiltersActionNone';
						break;
					case Enums.FiltersAction.Discard:
						sTemplate = 'SettingsFiltersActionDiscard';
						break;
				}

				return sTemplate;

			}, this);

			this.regDisposables(this.conditions.subscribe(Utils.windowResizeCallback));

			this.regDisposables(this.name.subscribe(function (sValue) {
				this.name.error('' === sValue);
			}, this));

			this.regDisposables(this.actionValue.subscribe(function (sValue) {
				this.actionValue.error('' === sValue);
			}, this));

			this.regDisposables([this.actionNoStop, this.actionTemplate]);

			this.deleteAccess = ko.observable(false);
			this.canBeDeleted = ko.observable(true);
		}

		_.extend(FilterModel.prototype, AbstractModel.prototype);

		FilterModel.prototype.generateID = function ()
		{
			this.id = Utils.fakeMd5();
		};

		FilterModel.prototype.verify = function ()
		{
			if ('' === this.name())
			{
				this.name.error(true);
				return false;
			}

			if (0 < this.conditions().length)
			{
				if (_.find(this.conditions(), function (oCond) {
					return oCond && !oCond.verify();
				}))
				{
					return false;
				}
			}

			if ('' === this.actionValue())
			{
				if (-1 < Utils.inArray(this.actionType(), [
					Enums.FiltersAction.MoveTo,
					Enums.FiltersAction.Forward,
					Enums.FiltersAction.Reject,
					Enums.FiltersAction.Vacation
				]))
				{
					this.actionValue.error(true);
					return false;
				}
			}

			if (Enums.FiltersAction.Forward === this.actionType() &&
				-1 === this.actionValue().indexOf('@'))
			{
				this.actionValue.error(true);
				return false;
			}

			if (Enums.FiltersAction.Vacation === this.actionType() &&
				'' !== this.actionValueFourth() && -1 === this.actionValueFourth().indexOf('@')
			)
			{
				this.actionValueFourth.error(true);
				return false;
			}

			this.name.error(false);
			this.actionValue.error(false);

			return true;
		};

		FilterModel.prototype.toJson = function ()
		{
			return {
				'ID': this.id,
				'Enabled': this.enabled() ? '1' : '0',
				'Name': this.name(),
				'ConditionsType': this.conditionsType(),
				'Conditions': _.map(this.conditions(), function (oItem) {
					return oItem.toJson();
				}),

				'ActionValue': this.actionValue(),
				'ActionValueSecond': this.actionValueSecond(),
				'ActionValueThird': this.actionValueThird(),
				'ActionValueFourth': this.actionValueFourth(),
				'ActionType': this.actionType(),

				'Stop': this.actionNoStop() ? '0' : '1',
				'Keep': this.actionKeep() ? '1' : '0',
				'MarkAsRead': this.actionMarkAsRead() ? '1' : '0'
			};
		};

		FilterModel.prototype.addCondition = function ()
		{
			this.conditions.push(new FilterConditionModel());
		};

		FilterModel.prototype.removeCondition = function (oConditionToDelete)
		{
			this.conditions.remove(oConditionToDelete);
			Utils.delegateRunOnDestroy(oConditionToDelete);
		};

		FilterModel.prototype.setRecipients = function ()
		{
			this.actionValueFourth(__webpack_require__(/*! Stores/User/Account */ 30).accountsEmails().join(', '));
		};

		FilterModel.prototype.parse = function (oItem)
		{
			var bResult = false;
			if (oItem && 'Object/Filter' === oItem['@Object'])
			{
				this.id = Utils.pString(oItem['ID']);
				this.name(Utils.pString(oItem['Name']));
				this.enabled(!!oItem['Enabled']);

				this.conditionsType(Utils.pString(oItem['ConditionsType']));

				this.conditions([]);

				if (Utils.isNonEmptyArray(oItem['Conditions']))
				{
					this.conditions(_.compact(_.map(oItem['Conditions'], function (aData) {
						var oFilterCondition = new FilterConditionModel();
						return oFilterCondition && oFilterCondition.parse(aData) ?
							oFilterCondition : null;
					})));
				}

				this.actionType(Utils.pString(oItem['ActionType']));

				this.actionValue(Utils.pString(oItem['ActionValue']));
				this.actionValueSecond(Utils.pString(oItem['ActionValueSecond']));
				this.actionValueThird(Utils.pString(oItem['ActionValueThird']));
				this.actionValueFourth(Utils.pString(oItem['ActionValueFourth']));

				this.actionNoStop(!oItem['Stop']);
				this.actionKeep(!!oItem['Keep']);
				this.actionMarkAsRead(!!oItem['MarkAsRead']);

				bResult = true;
			}

			return bResult;
		};

		FilterModel.prototype.cloneSelf = function ()
		{
			var oClone = new FilterModel();

			oClone.id = this.id;

			oClone.enabled(this.enabled());

			oClone.name(this.name());
			oClone.name.error(this.name.error());

			oClone.conditionsType(this.conditionsType());

			oClone.actionMarkAsRead(this.actionMarkAsRead());

			oClone.actionType(this.actionType());

			oClone.actionValue(this.actionValue());
			oClone.actionValue.error(this.actionValue.error());

			oClone.actionValueSecond(this.actionValueSecond());
			oClone.actionValueThird(this.actionValueThird());
			oClone.actionValueFourth(this.actionValueFourth());

			oClone.actionKeep(this.actionKeep());
			oClone.actionNoStop(this.actionNoStop());

			oClone.conditions(_.map(this.conditions(), function (oCondition) {
				return oCondition.cloneSelf();
			}));

			return oClone;
		};

		module.exports = FilterModel;

	}());

/***/ },
/* 88 */
/*!***************************************!*\
  !*** ./dev/Promises/AbstractBasic.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			Promise = __webpack_require__(/*! Promise */ 47),

			Utils = __webpack_require__(/*! Common/Utils */ 0)
		;

		/**
		* @constructor
		*/
		function AbstractBasicPromises()
		{
			this.oPromisesStack = {};
		}

		AbstractBasicPromises.prototype.func = function (fFunc)
		{
			fFunc();
			return this;
		};

		AbstractBasicPromises.prototype.fastResolve = function (mData)
		{
			return Promise.resolve(mData);
		};

		AbstractBasicPromises.prototype.fastReject = function (mData)
		{
			return Promise.reject(mData);
		};

		AbstractBasicPromises.prototype.setTrigger = function (mTrigger, bValue)
		{
			if (mTrigger)
			{
				_.each(Utils.isArray(mTrigger) ? mTrigger : [mTrigger], function (fTrigger) {
					if (fTrigger)
					{
						fTrigger(!!bValue);
					}
				});
			}
		};

		module.exports = AbstractBasicPromises;

	}());

/***/ },
/* 89 */,
/* 90 */
/*!***********************************!*\
  !*** ./dev/Stores/User/Filter.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1)
		;

		/**
		 * @constructor
		 */
		function FilterUserStore()
		{
			this.capa = ko.observable('');
			this.modules = ko.observable({});

			this.filters = ko.observableArray([]);

			this.filters.loading = ko.observable(false).extend({'throttle': 200});
			this.filters.saving = ko.observable(false).extend({'throttle': 200});

			this.raw = ko.observable('');
		}

		module.exports = new FilterUserStore();

	}());


/***/ },
/* 91 */
/*!**********************************!*\
  !*** ./dev/Stores/User/Quota.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			ko = __webpack_require__(/*! ko */ 1)
		;

		/**
		 * @constructor
		 */
		function QuotaUserStore()
		{
			this.quota = ko.observable(0);
			this.usage = ko.observable(0);

			this.percentage = ko.computed(function () {

				var
					iQuota = this.quota(),
					iUsed = this.usage()
				;

				return 0 < iQuota ? window.Math.ceil((iUsed / iQuota) * 100) : 0;

			}, this);
		}

		/**
		 * @param {number} iQuota
		 * @param {number} iUsage
		 */
		QuotaUserStore.prototype.populateData = function(iQuota, iUsage)
		{
			this.quota(iQuota * 1024);
			this.usage(iUsage * 1024);
		};

		module.exports = new QuotaUserStore();

	}());


/***/ },
/* 92 */
/*!*************************************!*\
  !*** ./dev/Stores/User/Template.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1)

	//		Remote = require('Remote/User/Ajax')
		;

		/**
		 * @constructor
		 */
		function TemplateUserStore()
		{
			this.templates = ko.observableArray([]);
			this.templates.loading = ko.observable(false).extend({'throttle': 100});

			this.templatesNames = ko.observableArray([]).extend({'throttle': 1000});
			this.templatesNames.skipFirst = true;

			this.subscribers();
		}

		TemplateUserStore.prototype.subscribers = function ()
		{
			this.templates.subscribe(function (aList) {
				this.templatesNames(_.compact(_.map(aList, function (oItem) {
					return oItem ? oItem.name : null;
				})));
			}, this);

	//		this.templatesNames.subscribe(function (aList) {
	//			if (this.templatesNames.skipFirst)
	//			{
	//				this.templatesNames.skipFirst = false;
	//			}
	//			else if (aList && 1 < aList.length)
	//			{
	//				Remote.templatesSortOrder(null, aList);
	//			}
	//		}, this);
		};

		module.exports = new TemplateUserStore();

	}());


/***/ },
/* 93 */,
/* 94 */
/*!**********************************!*\
  !*** ./dev/View/Popup/Filter.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			FilterStore = __webpack_require__(/*! Stores/User/Filter */ 90),
			FolderStore = __webpack_require__(/*! Stores/User/Folder */ 21),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function FilterPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsFilter');

			this.isNew = ko.observable(true);

			this.modules = FilterStore.modules;

			this.fTrueCallback = null;
			this.filter = ko.observable(null);

			this.allowMarkAsRead = ko.observable(false);

			this.defautOptionsAfterRender = Utils.defautOptionsAfterRender;
			this.folderSelectList = FolderStore.folderMenuForFilters;
			this.selectedFolderValue = ko.observable('');

			this.selectedFolderValue.subscribe(function() {
				if (this.filter())
				{
					this.filter().actionValue.error(false);
				}
			}, this);

			this.saveFilter = Utils.createCommand(this, function () {

				if (this.filter())
				{
					if (Enums.FiltersAction.MoveTo === this.filter().actionType())
					{
						this.filter().actionValue(this.selectedFolderValue());
					}

					if (!this.filter().verify())
					{
						return false;
					}

					if (this.fTrueCallback)
					{
						this.fTrueCallback(this.filter());
					}

					if (this.modalVisibility())
					{
						Utils.delegateRun(this, 'closeCommand');
					}
				}

				return true;
			});

			this.actionTypeOptions = ko.observableArray([]);
			this.fieldOptions = ko.observableArray([]);
			this.typeOptions = ko.observableArray([]);
			this.typeOptionsSize = ko.observableArray([]);

			Translator.initOnStartOrLangChange(this.populateOptions, this);

			this.modules.subscribe(this.populateOptions, this);

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/Filter', 'PopupsFilterViewModel'], FilterPopupView);
		_.extend(FilterPopupView.prototype, AbstractView.prototype);

		FilterPopupView.prototype.populateOptions = function ()
		{
			this.actionTypeOptions([]);

	//		this.actionTypeOptions.push({'id': Enums.FiltersAction.None,
	//			'name': Translator.i18n('POPUPS_FILTER/SELECT_ACTION_NONE')});

			var oModules = this.modules();
			if (oModules)
			{
				if (oModules.markasread)
				{
					this.allowMarkAsRead(true);
				}

				if (oModules.moveto)
				{
					this.actionTypeOptions.push({'id': Enums.FiltersAction.MoveTo,
						'name': Translator.i18n('POPUPS_FILTER/SELECT_ACTION_MOVE_TO')});
				}

				if (oModules.redirect)
				{
					this.actionTypeOptions.push({'id': Enums.FiltersAction.Forward,
						'name': Translator.i18n('POPUPS_FILTER/SELECT_ACTION_FORWARD_TO')});
				}

				if (oModules.reject)
				{
					this.actionTypeOptions.push({'id': Enums.FiltersAction.Reject,
						'name': Translator.i18n('POPUPS_FILTER/SELECT_ACTION_REJECT')});
				}

				if (oModules.vacation)
				{
					this.actionTypeOptions.push({'id': Enums.FiltersAction.Vacation,
						'name': Translator.i18n('POPUPS_FILTER/SELECT_ACTION_VACATION_MESSAGE')});

				}
			}

			this.actionTypeOptions.push({'id': Enums.FiltersAction.Discard,
				'name': Translator.i18n('POPUPS_FILTER/SELECT_ACTION_DISCARD')});

			this.fieldOptions([
				{'id': Enums.FilterConditionField.From, 'name': Translator.i18n('POPUPS_FILTER/SELECT_FIELD_FROM')},
				{'id': Enums.FilterConditionField.Recipient, 'name': Translator.i18n('POPUPS_FILTER/SELECT_FIELD_RECIPIENTS')},
				{'id': Enums.FilterConditionField.Subject, 'name': Translator.i18n('POPUPS_FILTER/SELECT_FIELD_SUBJECT')},
				{'id': Enums.FilterConditionField.Size, 'name': Translator.i18n('POPUPS_FILTER/SELECT_FIELD_SIZE')},
				{'id': Enums.FilterConditionField.Header, 'name': Translator.i18n('POPUPS_FILTER/SELECT_FIELD_HEADER')}
			]);

			this.typeOptions([
				{'id': Enums.FilterConditionType.Contains, 'name': Translator.i18n('POPUPS_FILTER/SELECT_TYPE_CONTAINS')},
				{'id': Enums.FilterConditionType.NotContains, 'name': Translator.i18n('POPUPS_FILTER/SELECT_TYPE_NOT_CONTAINS')},
				{'id': Enums.FilterConditionType.EqualTo, 'name': Translator.i18n('POPUPS_FILTER/SELECT_TYPE_EQUAL_TO')},
				{'id': Enums.FilterConditionType.NotEqualTo, 'name': Translator.i18n('POPUPS_FILTER/SELECT_TYPE_NOT_EQUAL_TO')}
			]);

			if (oModules && oModules.regex)
			{
				this.typeOptions.push({'id': Enums.FilterConditionType.Regex, 'name': 'Regex'});
			}

			this.typeOptionsSize([
				{'id': Enums.FilterConditionType.Over, 'name': Translator.i18n('POPUPS_FILTER/SELECT_TYPE_OVER')},
				{'id': Enums.FilterConditionType.Under, 'name': Translator.i18n('POPUPS_FILTER/SELECT_TYPE_UNDER')}
			]);
		};


		FilterPopupView.prototype.removeCondition = function (oConditionToDelete)
		{
			if (this.filter())
			{
				this.filter().removeCondition(oConditionToDelete);
			}
		};

		FilterPopupView.prototype.clearPopup = function ()
		{
			this.isNew(true);

			this.fTrueCallback = null;
			this.filter(null);
		};

		FilterPopupView.prototype.onShow = function (oFilter, fTrueCallback, bEdit)
		{
			this.clearPopup();

			this.fTrueCallback = fTrueCallback;
			this.filter(oFilter);

			if (oFilter)
			{
				this.selectedFolderValue(oFilter.actionValue());
			}

			this.isNew(!bEdit);

			if (!bEdit && oFilter)
			{
				oFilter.name.focused(true);
			}
		};

		FilterPopupView.prototype.onShowWithDelay = function ()
		{
			if (this.isNew() && this.filter() && !Globals.bMobile)
			{
				this.filter().name.focused(true);
			}
		};

		module.exports = FilterPopupView;

	}());

/***/ },
/* 95 */
/*!****************************************!*\
  !*** ./dev/View/Popup/FolderCreate.js ***!
  \****************************************/
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

			FolderStore = __webpack_require__(/*! Stores/User/Folder */ 21),

			Promises = __webpack_require__(/*! Promises/User/Ajax */ 40),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function FolderCreateView()
		{
			AbstractView.call(this, 'Popups', 'PopupsFolderCreate');

			this.folderName = ko.observable('');
			this.folderName.focused = ko.observable(false);

			this.selectedParentValue = ko.observable(Consts.UNUSED_OPTION_VALUE);

			this.parentFolderSelectList = ko.computed(function () {

				var
					aTop = [],
					fDisableCallback = null,
					fVisibleCallback = null,
					aList = FolderStore.folderList(),
					fRenameCallback = function (oItem) {
						return oItem ? (oItem.isSystemFolder() ? oItem.name() + ' ' + oItem.manageFolderSystemName() : oItem.name()) : '';
					}
				;

				aTop.push(['', '']);

				if ('' !== FolderStore.namespace)
				{
					fDisableCallback = function (oItem)
					{
						return FolderStore.namespace !== oItem.fullNameRaw.substr(0, FolderStore.namespace.length);
					};
				}

				return Utils.folderListOptionsBuilder([], aList, [], aTop, null, fDisableCallback, fVisibleCallback, fRenameCallback);

			}, this);

			// commands
			this.createFolder = Utils.createCommand(this, function () {

				var
					sParentFolderName = this.selectedParentValue()
				;

				if ('' === sParentFolderName && 1 < FolderStore.namespace.length)
				{
					sParentFolderName = FolderStore.namespace.substr(0, FolderStore.namespace.length - 1);
				}

				__webpack_require__(/*! App/User */ 6).default.foldersPromisesActionHelper(
					Promises.folderCreate(this.folderName(), sParentFolderName, FolderStore.foldersCreating),
					Enums.Notification.CantCreateFolder);

				this.cancelCommand();

			}, function () {
				return this.simpleFolderNameValidation(this.folderName());
			});

			this.defautOptionsAfterRender = Utils.defautOptionsAfterRender;

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/FolderCreate', 'PopupsFolderCreateViewModel'], FolderCreateView);
		_.extend(FolderCreateView.prototype, AbstractView.prototype);

		FolderCreateView.prototype.simpleFolderNameValidation = function (sName)
		{
			return (/^[^\\\/]+$/g).test(Utils.trim(sName));
		};

		FolderCreateView.prototype.clearPopup = function ()
		{
			this.folderName('');
			this.selectedParentValue('');
			this.folderName.focused(false);
		};

		FolderCreateView.prototype.onShow = function ()
		{
			this.clearPopup();
		};

		FolderCreateView.prototype.onShowWithDelay = function ()
		{
			if (!Globals.bMobile)
			{
				this.folderName.focused(true);
			}
		};

		module.exports = FolderCreateView;

	}());

/***/ },
/* 96 */
/*!*************************************************!*\
  !*** ./dev/View/Popup/KeyboardShortcutsHelp.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			key = __webpack_require__(/*! key */ 18),

			Enums = __webpack_require__(/*! Common/Enums */ 3),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function KeyboardShortcutsHelpPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsKeyboardShortcutsHelp');

			this.sDefaultKeyScope = Enums.KeyState.PopupKeyboardShortcutsHelp;

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/KeyboardShortcutsHelp', 'PopupsKeyboardShortcutsHelpViewModel'], KeyboardShortcutsHelpPopupView);
		_.extend(KeyboardShortcutsHelpPopupView.prototype, AbstractView.prototype);

		KeyboardShortcutsHelpPopupView.prototype.onBuild = function (oDom)
		{
			key('tab, shift+tab, left, right', Enums.KeyState.PopupKeyboardShortcutsHelp, _.throttle(_.bind(function (event, handler) {
				if (event && handler)
				{
					var
						$tabs = oDom.find('.nav.nav-tabs > li'),
						bNext = handler && ('tab' === handler.shortcut || 'right' === handler.shortcut),
						iIndex = $tabs.index($tabs.filter('.active'))
					;

					if (!bNext && iIndex > 0)
					{
						iIndex--;
					}
					else if (bNext && iIndex < $tabs.length - 1)
					{
						iIndex++;
					}
					else
					{
						iIndex = bNext ? 0 : $tabs.length - 1;
					}

					$tabs.eq(iIndex).find('a[data-toggle="tab"]').tab('show');
					return false;
				}
			}, this), 100));
		};

		module.exports = KeyboardShortcutsHelpPopupView;

	}());

/***/ },
/* 97 */
/*!************************************!*\
  !*** ./dev/View/Popup/Template.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),
			HtmlEditor = __webpack_require__(/*! Common/HtmlEditor */ 44),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function TemplatePopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsTemplate');

			this.editor = null;
			this.signatureDom = ko.observable(null);

			this.id = ko.observable('');

			this.name = ko.observable('');
			this.name.error = ko.observable(false);
			this.name.focus = ko.observable(false);

			this.body = ko.observable('');
			this.body.loading = ko.observable(false);
			this.body.error = ko.observable(false);

			this.name.subscribe(function () {
				this.name.error(false);
			}, this);

			this.body.subscribe(function () {
				this.body.error(false);
			}, this);

			this.submitRequest = ko.observable(false);
			this.submitError = ko.observable('');

			this.addTemplateCommand = Utils.createCommand(this, function () {

				this.populateBodyFromEditor();

				this.name.error('' === Utils.trim(this.name()));
				this.body.error('' === Utils.trim(this.body()) ||
					':HTML:' === Utils.trim(this.body()));

				if (this.name.error() || this.body.error())
				{
					return false;
				}

				this.submitRequest(true);

				Remote.templateSetup(_.bind(function (sResult, oData) {

					this.submitRequest(false);
					if (Enums.StorageResultType.Success === sResult && oData)
					{
						if (oData.Result)
						{
							__webpack_require__(/*! App/User */ 6).default.templates();
							this.cancelCommand();
						}
						else if (oData.ErrorCode)
						{
							this.submitError(Translator.getNotification(oData.ErrorCode));
						}
					}
					else
					{
						this.submitError(Translator.getNotification(Enums.Notification.UnknownError));
					}

				}, this), this.id(), this.name(), this.body());

				return true;

			}, function () {
				return !this.submitRequest();
			});

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/Template'], TemplatePopupView);
		_.extend(TemplatePopupView.prototype, AbstractView.prototype);

		TemplatePopupView.prototype.clearPopup = function ()
		{
			this.id('');

			this.name('');
			this.name.error(false);

			this.body('');
			this.body.loading(false);
			this.body.error(false);

			this.submitRequest(false);
			this.submitError('');

			if (this.editor)
			{
				this.editor.setPlain('', false);
			}
		};

		TemplatePopupView.prototype.populateBodyFromEditor = function ()
		{
			if (this.editor)
			{
				this.body(this.editor.getDataWithHtmlMark());
			}
		};

		TemplatePopupView.prototype.editorSetBody = function (sBody)
		{
			if (!this.editor && this.signatureDom())
			{
				var self = this;
				this.editor = new HtmlEditor(self.signatureDom(), function () {
					self.populateBodyFromEditor();
				}, function () {
					self.editor.setHtmlOrPlain(sBody);
				});
			}
			else
			{
				this.editor.setHtmlOrPlain(sBody);
			}
		};

		TemplatePopupView.prototype.onShow = function (oTemplate)
		{
			var self = this;

			this.clearPopup();

			if (oTemplate && oTemplate.id)
			{
				this.id(oTemplate.id);
				this.name(oTemplate.name);
				this.body(oTemplate.body);

				if (oTemplate.populated)
				{
					self.editorSetBody(this.body());
				}
				else
				{
					this.body.loading(true);
					self.body.error(false);

					Remote.templateGetById(function (sResult, oData) {

						self.body.loading(false);

						if (Enums.StorageResultType.Success === sResult && oData && oData.Result &&
							'Object/Template' === oData.Result['@Object'] && Utils.isNormal(oData.Result['Body']))
						{
							oTemplate.body = oData.Result['Body'];
							oTemplate.populated = true;

							self.body(oTemplate.body);
							self.body.error(false);
						}
						else
						{
							self.body('');
							self.body.error(true);
						}

						self.editorSetBody(self.body());

					}, this.id());
				}
			}
			else
			{
				self.editorSetBody('');
			}
		};

		TemplatePopupView.prototype.onShowWithDelay = function ()
		{
			this.name.focus(true);
		};

		module.exports = TemplatePopupView;

	}());

/***/ },
/* 98 */
/*!**************************************************!*\
  !*** ./dev/View/Popup/TwoFactorConfiguration.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),
			qr = __webpack_require__(/*! qr */ 181),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function TwoFactorConfigurationPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsTwoFactorConfiguration');

			this.lock = ko.observable(false);

			this.capaTwoFactor = Settings.capa(Enums.Capa.TwoFactor);

			this.processing = ko.observable(false);
			this.clearing = ko.observable(false);
			this.secreting = ko.observable(false);

			this.viewUser = ko.observable('');
			this.twoFactorStatus = ko.observable(false);

			this.twoFactorTested = ko.observable(false);

			this.viewSecret = ko.observable('');
			this.viewBackupCodes = ko.observable('');
			this.viewUrlTitle = ko.observable('');
			this.viewUrl = ko.observable('');

			this.viewEnable_ = ko.observable(false);

			this.viewEnable = ko.computed({
				'owner': this,
				'read': this.viewEnable_,
				'write': function (bValue) {

					var self = this;

					bValue = !!bValue;

					if (bValue && this.twoFactorTested())
					{
						this.viewEnable_(bValue);

						Remote.enableTwoFactor(function (sResult, oData) {
							if (Enums.StorageResultType.Success !== sResult || !oData || !oData.Result)
							{
								self.viewEnable_(false);
							}

						}, true);
					}
					else
					{
						if (!bValue)
						{
							this.viewEnable_(bValue);
						}

						Remote.enableTwoFactor(function (sResult, oData) {
							if (Enums.StorageResultType.Success !== sResult || !oData || !oData.Result)
							{
								self.viewEnable_(false);
							}

						}, false);
					}
				}
			});

			this.viewTwoFactorEnableTooltip = ko.computed(function () {
				Translator.trigger();
				return this.twoFactorTested() || this.viewEnable_() ? '' :
					Translator.i18n('POPUPS_TWO_FACTOR_CFG/TWO_FACTOR_SECRET_TEST_BEFORE_DESC');
			}, this);

			this.viewTwoFactorStatus = ko.computed(function () {
				Translator.trigger();
				return Translator.i18n(
					this.twoFactorStatus() ?
						'POPUPS_TWO_FACTOR_CFG/TWO_FACTOR_SECRET_CONFIGURED_DESC' :
						'POPUPS_TWO_FACTOR_CFG/TWO_FACTOR_SECRET_NOT_CONFIGURED_DESC'
				);
			}, this);

			this.twoFactorAllowedEnable = ko.computed(function () {
				return this.viewEnable() || this.twoFactorTested();
			}, this);

			this.onResult = _.bind(this.onResult, this);
			this.onShowSecretResult = _.bind(this.onShowSecretResult, this);

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/TwoFactorConfiguration', 'TwoFactorConfigurationPopupView'], TwoFactorConfigurationPopupView);
		_.extend(TwoFactorConfigurationPopupView.prototype, AbstractView.prototype);


		TwoFactorConfigurationPopupView.prototype.showSecret = function ()
		{
			this.secreting(true);
			Remote.showTwoFactorSecret(this.onShowSecretResult);
		};

		TwoFactorConfigurationPopupView.prototype.hideSecret = function ()
		{
			this.viewSecret('');
			this.viewBackupCodes('');
			this.viewUrlTitle('');
			this.viewUrl('');
		};

		TwoFactorConfigurationPopupView.prototype.createTwoFactor = function ()
		{
			this.processing(true);
			Remote.createTwoFactor(this.onResult);
		};

		TwoFactorConfigurationPopupView.prototype.logout = function ()
		{
			__webpack_require__(/*! App/User */ 6).default.logout();
		};

		TwoFactorConfigurationPopupView.prototype.testTwoFactor = function ()
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/TwoFactorTest */ 157), [this.twoFactorTested]);
		};

		TwoFactorConfigurationPopupView.prototype.clearTwoFactor = function ()
		{
			this.viewSecret('');
			this.viewBackupCodes('');
			this.viewUrlTitle('');
			this.viewUrl('');

			this.twoFactorTested(false);

			this.clearing(true);
			Remote.clearTwoFactor(this.onResult);
		};

		TwoFactorConfigurationPopupView.prototype.onShow = function (bLock)
		{
			this.lock(!!bLock);

			this.viewSecret('');
			this.viewBackupCodes('');
			this.viewUrlTitle('');
			this.viewUrl('');
		};

		TwoFactorConfigurationPopupView.prototype.onHide = function ()
		{
			if (this.lock())
			{
				window.location.reload();
			}
		};

		TwoFactorConfigurationPopupView.prototype.getQr = function ()
		{
			return 'otpauth://totp/' + window.encodeURIComponent(this.viewUser()) +
				'?secret=' + window.encodeURIComponent(this.viewSecret()) +
				'&issuer=' + window.encodeURIComponent('');
		};

		TwoFactorConfigurationPopupView.prototype.onResult = function (sResult, oData)
		{
			this.processing(false);
			this.clearing(false);

			if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
			{
				this.viewUser(Utils.pString(oData.Result.User));
				this.viewEnable_(!!oData.Result.Enable);
				this.twoFactorStatus(!!oData.Result.IsSet);
				this.twoFactorTested(!!oData.Result.Tested);

				this.viewSecret(Utils.pString(oData.Result.Secret));
				this.viewBackupCodes(Utils.pString(oData.Result.BackupCodes).replace(/[\s]+/g, '  '));

				this.viewUrlTitle(Utils.pString(oData.Result.UrlTitle));
				this.viewUrl(qr.toDataURL({level: 'M', size: 8, value: this.getQr()}));
			}
			else
			{
				this.viewUser('');
				this.viewEnable_(false);
				this.twoFactorStatus(false);
				this.twoFactorTested(false);

				this.viewSecret('');
				this.viewBackupCodes('');
				this.viewUrlTitle('');
				this.viewUrl('');
			}
		};

		TwoFactorConfigurationPopupView.prototype.onShowSecretResult = function (sResult, oData)
		{
			this.secreting(false);

			if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
			{
				this.viewSecret(Utils.pString(oData.Result.Secret));
				this.viewUrlTitle(Utils.pString(oData.Result.UrlTitle));
				this.viewUrl(qr.toDataURL({level: 'M', size: 6, value: this.getQr()}));
			}
			else
			{
				this.viewSecret('');
				this.viewUrlTitle('');
				this.viewUrl('');
			}
		};

		TwoFactorConfigurationPopupView.prototype.onBuild = function ()
		{
			if (this.capaTwoFactor)
			{
				this.processing(true);
				Remote.getTwoFactor(this.onResult);
			}
		};

		module.exports = TwoFactorConfigurationPopupView;

	}());

/***/ },
/* 99 */
/*!*************************************************!*\
  !*** ./dev/View/User/AbstractSystemDropDown.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),
			key = __webpack_require__(/*! key */ 18),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Links = __webpack_require__(/*! Common/Links */ 12),
			Events = __webpack_require__(/*! Common/Events */ 24),

			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			AccountStore = __webpack_require__(/*! Stores/User/Account */ 30),
			MessageStore = __webpack_require__(/*! Stores/User/Message */ 31),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function AbstractSystemDropDownUserView()
		{
			AbstractView.call(this, 'Right', 'SystemDropDown');

			this.logoImg = Utils.trim(Settings.settingsGet('UserLogo'));
			this.logoTitle = Utils.trim(Settings.settingsGet('UserLogoTitle'));

			this.mobile = !!Settings.appSettingsGet('mobile');
			this.mobileDevice = !!Settings.appSettingsGet('mobileDevice');

			this.allowSettings = !!Settings.capa(Enums.Capa.Settings);
			this.allowHelp = !!Settings.capa(Enums.Capa.Help);

			this.currentAudio = AppStore.currentAudio;

			this.accountEmail = AccountStore.email;

			this.accounts = AccountStore.accounts;
			this.accountsUnreadCount = AccountStore.accountsUnreadCount;

			this.accountMenuDropdownTrigger = ko.observable(false);
			this.capaAdditionalAccounts = ko.observable(Settings.capa(Enums.Capa.AdditionalAccounts));

			this.accountClick = _.bind(this.accountClick, this);

			this.accountClick = _.bind(this.accountClick, this);

			Events.sub('audio.stop', function () {
				AppStore.currentAudio('');
			});

			Events.sub('audio.start', function (sName) {
				AppStore.currentAudio(sName);
			});
		}

		_.extend(AbstractSystemDropDownUserView.prototype, AbstractView.prototype);

		AbstractSystemDropDownUserView.prototype.stopPlay = function ()
		{
			Events.pub('audio.api.stop');
		};

		AbstractSystemDropDownUserView.prototype.accountClick = function (oAccount, oEvent)
		{
			if (oAccount && oEvent && !Utils.isUnd(oEvent.which) && 1 === oEvent.which)
			{
				AccountStore.accounts.loading(true);

				_.delay(function () {
					AccountStore.accounts.loading(false);
				}, 1000);
			}

			return true;
		};

		AbstractSystemDropDownUserView.prototype.emailTitle = function ()
		{
			return AccountStore.email();
		};

		AbstractSystemDropDownUserView.prototype.settingsClick = function ()
		{
			if (Settings.capa(Enums.Capa.Settings))
			{
				__webpack_require__(/*! Knoin/Knoin */ 4).setHash(Links.settings());
			}
		};

		AbstractSystemDropDownUserView.prototype.settingsHelp = function ()
		{
			if (Settings.capa(Enums.Capa.Help))
			{
				__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/KeyboardShortcutsHelp */ 96));
			}
		};

		AbstractSystemDropDownUserView.prototype.addAccountClick = function ()
		{
			if (this.capaAdditionalAccounts())
			{
				__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Account */ 62));
			}
		};

		AbstractSystemDropDownUserView.prototype.logoutClick = function ()
		{
			__webpack_require__(/*! App/User */ 6).default.logout();
		};

		AbstractSystemDropDownUserView.prototype.onBuild = function ()
		{
			var self = this;
			key('`', [Enums.KeyState.MessageList, Enums.KeyState.MessageView, Enums.KeyState.Settings], function () {
				if (self.viewModelVisibility())
				{
					MessageStore.messageFullScreenMode(false);

					self.accountMenuDropdownTrigger(true);
				}
			});

			// shortcuts help
			key('shift+/', [Enums.KeyState.MessageList, Enums.KeyState.MessageView, Enums.KeyState.Settings], function () {
				if (self.viewModelVisibility())
				{
					__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/KeyboardShortcutsHelp */ 96));
					return false;
				}
			});
		};

		module.exports = AbstractSystemDropDownUserView;

	}());

/***/ },
/* 100 */
/*!*********************************!*\
  !*** ./dev/Common/Selector.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __WEBPACK_IMPORTED_MODULE_1_ko__ && __WEBPACK_IMPORTED_MODULE_1_ko__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_ko__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_ko__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_ko___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_ko___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






	var Selector = function () {
		/**
	  * @constructor
	  * @param {koProperty} koList
	  * @param {koProperty} koSelectedItem
	  * @param {koProperty} koFocusedItem
	  * @param {string} sItemSelector
	  * @param {string} sItemSelectedSelector
	  * @param {string} sItemCheckedSelector
	  * @param {string} sItemFocusedSelector
	  */

		function Selector(koList, koSelectedItem, koFocusedItem, sItemSelector, sItemSelectedSelector, sItemCheckedSelector, sItemFocusedSelector) {
			var _this = this;

			_classCallCheck(this, Selector);

			this.actionClick = function (item) {
				var event = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


				if (item) {
					var click = true;
					if (event) {
						if (event.shiftKey && !(event.ctrlKey || event.metaKey) && !event.altKey) {
							click = false;
							if ('' === this.sLastUid) {
								this.sLastUid = this.getItemUid(item);
							}

							item.checked(!item.checked());
							this.eventClickFunction(item, event);

							this.focusedItem(item);
						} else if ((event.ctrlKey || event.metaKey) && !event.shiftKey && !event.altKey) {
							click = false;
							this.focusedItem(item);

							if (this.selectedItem() && item !== this.selectedItem()) {
								this.selectedItem().checked(true);
							}

							item.checked(!item.checked());
						}
					}

					if (click) {
						this.selectMessageItem(item);
					}
				}
			};

			this.list = koList;

			this.listChecked = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.computed(function () {
				return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].filter(_this.list(), function (item) {
					return item.checked();
				});
			}, this).extend({ rateLimit: 0 });

			this.isListChecked = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.computed(function () {
				return 0 < _this.listChecked().length;
			});

			this.focusedItem = koFocusedItem || /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(null);
			this.selectedItem = koSelectedItem || /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(null);
			this.selectedItemUseCallback = true;

			this.itemSelectedThrottle = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].debounce(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].bind(this.itemSelected, this), 300);

			this.listChecked.subscribe(function (items) {
				if (0 < items.length) {
					if (null === _this.selectedItem()) {
						if (_this.selectedItem.valueHasMutated) {
							_this.selectedItem.valueHasMutated();
						}
					} else {
						_this.selectedItem(null);
					}
				} else if (_this.autoSelect() && _this.focusedItem()) {
					_this.selectedItem(_this.focusedItem());
				}
			}, this);

			this.selectedItem.subscribe(function (item) {

				if (item) {
					if (_this.isListChecked()) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(_this.listChecked(), function (subItem) {
							subItem.checked(false);
						});
					}

					if (_this.selectedItemUseCallback) {
						_this.itemSelectedThrottle(item);
					}
				} else if (_this.selectedItemUseCallback) {
					_this.itemSelected(null);
				}
			}, this);

			this.selectedItem = this.selectedItem.extend({ toggleSubscribe: [null, function (prev) {
					if (prev) {
						prev.selected(false);
					}
				}, function (next) {
					if (next) {
						next.selected(true);
					}
				}] });

			this.focusedItem = this.focusedItem.extend({ toggleSubscribe: [null, function (prev) {
					if (prev) {
						prev.focused(false);
					}
				}, function (next) {
					if (next) {
						next.focused(true);
					}
				}] });

			this.iSelectNextHelper = 0;
			this.iFocusedNextHelper = 0;
			this.oContentVisible = null;
			this.oContentScrollable = null;

			this.sItemSelector = sItemSelector;
			this.sItemSelectedSelector = sItemSelectedSelector;
			this.sItemCheckedSelector = sItemCheckedSelector;
			this.sItemFocusedSelector = sItemFocusedSelector;

			this.sLastUid = '';
			this.oCallbacks = {};

			this.emptyFunction = function () {};
			this.emptyTrueFunction = function () {
				return true;
			};

			this.focusedItem.subscribe(function (item) {
				if (item) {
					_this.sLastUid = _this.getItemUid(item);
				}
			}, this);

			var aCache = [],
			    aCheckedCache = [],
			    mFocused = null,
			    mSelected = null;

			this.list.subscribe(function (items) {

				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isArray"].bind()(items)) {
					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(items, function (item) {
						if (item) {
							var uid = _this.getItemUid(item);

							aCache.push(uid);
							if (item.checked()) {
								aCheckedCache.push(uid);
							}
							if (null === mFocused && item.focused()) {
								mFocused = uid;
							}
							if (null === mSelected && item.selected()) {
								mSelected = uid;
							}
						}
					});
				}
			}, this, 'beforeChange');

			this.list.subscribe(function (aItems) {

				var oTemp = null,
				    bGetNext = false,
				    aUids = [],
				    mNextFocused = mFocused,
				    bChecked = false,
				    bSelected = false,
				    iLen = 0;

				_this.selectedItemUseCallback = false;

				_this.focusedItem(null);
				_this.selectedItem(null);

				if (/* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isArray"].bind()(aItems)) {
					iLen = aCheckedCache.length;

					/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(aItems, function (oItem) {

						var sUid = _this.getItemUid(oItem);
						aUids.push(sUid);

						if (null !== mFocused && mFocused === sUid) {
							_this.focusedItem(oItem);
							mFocused = null;
						}

						if (0 < iLen && -1 < /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["inArray"].bind()(sUid, aCheckedCache)) {
							bChecked = true;
							oItem.checked(true);
							iLen--;
						}

						if (!bChecked && null !== mSelected && mSelected === sUid) {
							bSelected = true;
							_this.selectedItem(oItem);
							mSelected = null;
						}
					});

					_this.selectedItemUseCallback = true;

					if (!bChecked && !bSelected && _this.autoSelect()) {
						if (_this.focusedItem()) {
							_this.selectedItem(_this.focusedItem());
						} else if (0 < aItems.length) {
							if (null !== mNextFocused) {
								bGetNext = false;
								mNextFocused = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].find(aCache, function (sUid) {
									if (bGetNext && -1 < /* harmony import */__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["inArray"].bind()(sUid, aUids)) {
										return sUid;
									} else if (mNextFocused === sUid) {
										bGetNext = true;
									}
									return false;
								});

								if (mNextFocused) {
									oTemp = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].find(aItems, function (oItem) {
										return mNextFocused === _this.getItemUid(oItem);
									});
								}
							}

							_this.selectedItem(oTemp || null);
							_this.focusedItem(_this.selectedItem());
						}
					}

					if ((0 !== _this.iSelectNextHelper || 0 !== _this.iFocusedNextHelper) && 0 < aItems.length && !_this.focusedItem()) {
						oTemp = null;
						if (0 !== _this.iFocusedNextHelper) {
							oTemp = aItems[-1 === _this.iFocusedNextHelper ? aItems.length - 1 : 0] || null;
						}

						if (!oTemp && 0 !== _this.iSelectNextHelper) {
							oTemp = aItems[-1 === _this.iSelectNextHelper ? aItems.length - 1 : 0] || null;
						}

						if (oTemp) {
							if (0 !== _this.iSelectNextHelper) {
								_this.selectedItem(oTemp || null);
							}

							_this.focusedItem(oTemp || null);

							_this.scrollToFocused();

							/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].delay(function () {
								return _this.scrollToFocused();
							}, 100);
						}

						_this.iSelectNextHelper = 0;
						_this.iFocusedNextHelper = 0;
					}
				}

				aCache = [];
				aCheckedCache = [];
				mFocused = null;
				mSelected = null;
			}, this);
		}

		Selector.prototype.itemSelected = function itemSelected(item) {

			if (this.isListChecked()) {
				if (!item) {
					(this.oCallbacks.onItemSelect || this.emptyFunction)(item || null);
				}
			} else {
				if (item) {
					(this.oCallbacks.onItemSelect || this.emptyFunction)(item);
				}
			}
		};

		/**
	  * @param {boolean} forceSelect
	  */


		Selector.prototype.goDown = function goDown(forceSelect) {
			this.newSelectPosition(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Down, false, forceSelect);
		};

		/**
	  * @param {boolean} forceSelect
	  */


		Selector.prototype.goUp = function goUp(forceSelect) {
			this.newSelectPosition(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Up, false, forceSelect);
		};

		Selector.prototype.unselect = function unselect() {
			this.selectedItem(null);
			this.focusedItem(null);
		};

		Selector.prototype.init = function init(contentVisible, contentScrollable) {
			var _this2 = this;

			var keyScope = arguments.length <= 2 || arguments[2] === undefined ? 'all' : arguments[2];


			this.oContentVisible = contentVisible;
			this.oContentScrollable = contentScrollable;

			if (this.oContentVisible && this.oContentScrollable) {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(this.oContentVisible).on('selectstart', function (event) {
					if (event && event.preventDefault) {
						event.preventDefault();
					}
				}).on('click', this.sItemSelector, function (event) {
					_this2.actionClick(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.dataFor(event.currentTarget), event);
				}).on('click', this.sItemCheckedSelector, function (event) {
					var item = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_ko___default.a.dataFor(event.currentTarget);
					if (item) {
						if (event && event.shiftKey) {
							_this2.actionClick(item, event);
						} else {
							_this2.focusedItem(item);
							item.checked(!item.checked());
						}
					}
				});

				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["d"].bind()('enter', keyScope, function () {
					if (_this2.focusedItem() && !_this2.focusedItem().selected()) {
						_this2.actionClick(_this2.focusedItem());
						return false;
					}

					return true;
				});

				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["d"].bind()('ctrl+up, command+up, ctrl+down, command+down', keyScope, function () {
					return false;
				});

				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["d"].bind()('up, shift+up, down, shift+down, home, end, pageup, pagedown, insert, space', keyScope, function (event, handler) {
					if (event && handler && handler.shortcut) {
						var eventKey = 0;
						switch (handler.shortcut) {
							case 'up':
							case 'shift+up':
								eventKey = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Up;
								break;
							case 'down':
							case 'shift+down':
								eventKey = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Down;
								break;
							case 'insert':
								eventKey = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Insert;
								break;
							case 'space':
								eventKey = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Space;
								break;
							case 'home':
								eventKey = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Home;
								break;
							case 'end':
								eventKey = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].End;
								break;
							case 'pageup':
								eventKey = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].PageUp;
								break;
							case 'pagedown':
								eventKey = /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].PageDown;
								break;
						}

						if (0 < eventKey) {
							_this2.newSelectPosition(eventKey, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["d"].shift);
							return false;
						}
					}
				});
			}
		};

		/**
	  * @return {boolean}
	  */


		Selector.prototype.autoSelect = function autoSelect() {
			return !!(this.oCallbacks.onAutoSelect || this.emptyTrueFunction)();
		};

		/**
	  * @param {boolean} up
	  */


		Selector.prototype.doUpUpOrDownDown = function doUpUpOrDownDown(up) {
			(this.oCallbacks.onUpUpOrDownDown || this.emptyTrueFunction)(!!up);
		};

		/**
	  * @param {Object} oItem
	  * @return {string}
	  */


		Selector.prototype.getItemUid = function getItemUid(item) {

			var uid = '';

			var getItemUidCallback = this.oCallbacks.onItemGetUid || null;
			if (getItemUidCallback && item) {
				uid = getItemUidCallback(item);
			}

			return uid.toString();
		};

		/**
	  * @param {number} iEventKeyCode
	  * @param {boolean} bShiftKey
	  * @param {boolean=} bForceSelect = false
	  */


		Selector.prototype.newSelectPosition = function newSelectPosition(iEventKeyCode, bShiftKey, bForceSelect) {

			var iIndex = 0,
			    iPageStep = 10,
			    bNext = false,
			    bStop = false,
			    oResult = null,
			    aList = this.list(),
			    iListLen = aList ? aList.length : 0,
			    oFocused = this.focusedItem();

			if (0 < iListLen) {
				if (!oFocused) {
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Down === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Insert === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Space === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Home === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].PageUp === iEventKeyCode) {
						oResult = aList[0];
					} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Up === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].End === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].PageDown === iEventKeyCode) {
						oResult = aList[aList.length - 1];
					}
				} else if (oFocused) {
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Down === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Up === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Insert === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Space === iEventKeyCode) {
						/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["c"].each(aList, function (item) {
							if (!bStop) {
								switch (iEventKeyCode) {
									case /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Up:
										if (oFocused === item) {
											bStop = true;
										} else {
											oResult = item;
										}
										break;
									case /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Down:
									case /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Insert:
										if (bNext) {
											oResult = item;
											bStop = true;
										} else if (oFocused === item) {
											bNext = true;
										}
										break;
								}
							}
						});

						if (!oResult && (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Down === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Up === iEventKeyCode)) {
							this.doUpUpOrDownDown(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Up === iEventKeyCode);
						}
					} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Home === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].End === iEventKeyCode) {
						if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Home === iEventKeyCode) {
							oResult = aList[0];
						} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].End === iEventKeyCode) {
							oResult = aList[aList.length - 1];
						}
					} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].PageDown === iEventKeyCode) {
						for (; iIndex < iListLen; iIndex++) {
							if (oFocused === aList[iIndex]) {
								iIndex += iPageStep;
								iIndex = iListLen - 1 < iIndex ? iListLen - 1 : iIndex;
								oResult = aList[iIndex];
								break;
							}
						}
					} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].PageUp === iEventKeyCode) {
						for (iIndex = iListLen; iIndex >= 0; iIndex--) {
							if (oFocused === aList[iIndex]) {
								iIndex -= iPageStep;
								iIndex = 0 > iIndex ? 0 : iIndex;
								oResult = aList[iIndex];
								break;
							}
						}
					}
				}
			}

			if (oResult) {
				this.focusedItem(oResult);

				if (oFocused) {
					if (bShiftKey) {
						if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Up === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Down === iEventKeyCode) {
							oFocused.checked(!oFocused.checked());
						}
					} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Insert === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Space === iEventKeyCode) {
						oFocused.checked(!oFocused.checked());
					}
				}

				if ((this.autoSelect() || !!bForceSelect) && !this.isListChecked() && /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Space !== iEventKeyCode) {
					this.selectedItem(oResult);
				}

				this.scrollToFocused();
			} else if (oFocused) {
				if (bShiftKey && (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Up === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Down === iEventKeyCode)) {
					oFocused.checked(!oFocused.checked());
				} else if (/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Insert === iEventKeyCode || /* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["EventKeyCode"].Space === iEventKeyCode) {
					oFocused.checked(!oFocused.checked());
				}

				this.focusedItem(oFocused);
			}
		};

		/**
	  * @return {boolean}
	  */


		Selector.prototype.scrollToFocused = function scrollToFocused() {

			if (!this.oContentVisible || !this.oContentScrollable) {
				return false;
			}

			var offset = 20,
			    list = this.list(),
			    $focused = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].bind()(this.sItemFocusedSelector, this.oContentScrollable),
			    pos = $focused.position(),
			    visibleHeight = this.oContentVisible.height(),
			    focusedHeight = $focused.outerHeight();

			if (list && list[0] && list[0].focused()) {
				this.oContentScrollable.scrollTop(0);
				return true;
			} else if (pos && (pos.top < 0 || pos.top + focusedHeight > visibleHeight)) {
				this.oContentScrollable.scrollTop(pos.top < 0 ? this.oContentScrollable.scrollTop() + pos.top - offset : this.oContentScrollable.scrollTop() + pos.top - visibleHeight + focusedHeight + offset);

				return true;
			}

			return false;
		};

		/**
	  * @param {boolean=} fast = false
	  * @return {boolean}
	  */


		Selector.prototype.scrollToTop = function scrollToTop() {
			var fast = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];


			if (!this.oContentVisible || !this.oContentScrollable) {
				return false;
			}

			if (fast || 50 > this.oContentScrollable.scrollTop()) {
				this.oContentScrollable.scrollTop(0);
			} else {
				this.oContentScrollable.stop().animate({ scrollTop: 0 }, 200);
			}

			return true;
		};

		Selector.prototype.eventClickFunction = function eventClickFunction(item, event) {

			var index = 0,
			    length = 0,
			    changeRange = false,
			    isInRange = false,
			    list = [],
			    checked = false,
			    listItem = null,
			    lineUid = '';

			var uid = this.getItemUid(item);
			if (event && event.shiftKey) {
				if ('' !== uid && '' !== this.sLastUid && uid !== this.sLastUid) {
					list = this.list();
					checked = item.checked();

					for (index = 0, length = list.length; index < length; index++) {
						listItem = list[index];
						lineUid = this.getItemUid(listItem);

						changeRange = false;
						if (lineUid === this.sLastUid || lineUid === uid) {
							changeRange = true;
						}

						if (changeRange) {
							isInRange = !isInRange;
						}

						if (isInRange || changeRange) {
							listItem.checked(checked);
						}
					}
				}
			}

			this.sLastUid = '' === uid ? '' : uid;
		};

		/**
	  * @param {Object} item
	  * @param {Object=} event
	  */


		Selector.prototype.on = function on(eventName, callback) {
			this.oCallbacks[eventName] = callback;
		};

		Selector.prototype.selectMessageItem = function selectMessageItem(messageItem) {
			this.focusedItem(messageItem);
			this.selectedItem(messageItem);
			this.scrollToFocused();
		};

		return Selector;
	}();


	/* harmony export */ Object.defineProperty(exports, "Selector", {configurable: false, enumerable: true, get: function() { return Selector; }});
	/* harmony export */ Object.defineProperty(exports, "default", {configurable: false, enumerable: true, get: function() { return Selector; }});
	module.exports = Selector;

/***/ },
/* 101 */
/*!********************************!*\
  !*** ./dev/Helper/Message.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Model_Email__ = __webpack_require__(/*! Model/Email */ 29);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Model_Email___default = __WEBPACK_IMPORTED_MODULE_1_Model_Email__ && __WEBPACK_IMPORTED_MODULE_1_Model_Email__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_Model_Email__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_Model_Email__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_Model_Email___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_Model_Email___default });
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




	var MessageHelper = function () {
		function MessageHelper() {
			_classCallCheck(this, MessageHelper);
		}

		/**
	  * @param {Array.<EmailModel>} emails
	  * @param {boolean=} friendlyView = false
	  * @param {boolean=} wrapWithLink = false
	  * @return {string}
	  */


		MessageHelper.prototype.emailArrayToString = function emailArrayToString(emails) {
			var friendlyView = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
			var wrapWithLink = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];


			var result = [],
			    index = 0,
			    len = 0;

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_Common_Utils__["isNonEmptyArray"].bind()(emails)) {
				for (index = 0, len = emails.length; index < len; index++) {
					result.push(emails[index].toLine(friendlyView, wrapWithLink));
				}
			}

			return result.join(', ');
		};

		/**
	  * @param {Array.<EmailModel>} emails
	  * @return {string}
	  */


		MessageHelper.prototype.emailArrayToStringClear = function emailArrayToStringClear(emails) {

			var result = [],
			    index = 0,
			    len = 0;

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_Common_Utils__["isNonEmptyArray"].bind()(emails)) {
				for (index = 0, len = emails.length; index < len; index++) {
					if (emails[index] && emails[index].email && '' !== emails[index].name) {
						result.push(emails[index].email);
					}
				}
			}

			return result.join(', ');
		};

		/**
	  * @param {?Array} json
	  * @return {Array.<EmailModel>}
	  */


		MessageHelper.prototype.emailArrayFromJson = function emailArrayFromJson(json) {

			var index = 0,
			    len = 0,
			    email = null,
			    result = [];

			if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_Common_Utils__["isNonEmptyArray"].bind()(json)) {
				for (index = 0, len = json.length; index < len; index++) {
					email = /* harmony import */__WEBPACK_IMPORTED_MODULE_1_Model_Email___default.a.newInstanceFromJson(json[index]);
					if (email) {
						result.push(email);
					}
				}
			}

			return result;
		};

		/**
	  * @param {Array.<EmailModel>} inputEmails
	  * @param {Object} unic
	  * @param {Array} localEmails
	  */


		MessageHelper.prototype.replyHelper = function replyHelper(inputEmails, unic, localEmails) {

			if (inputEmails && 0 < inputEmails.length) {
				var index = 0;
				var len = inputEmails.length;

				for (; index < len; index++) {
					if (/* harmony import */__WEBPACK_IMPORTED_MODULE_0_Common_Utils__["isUnd"].bind()(unic[inputEmails[index].email])) {
						unic[inputEmails[index].email] = true;
						localEmails.push(inputEmails[index]);
					}
				}
			}
		};

		return MessageHelper;
	}();

	/* harmony default export */ exports["default"] = new MessageHelper();

/***/ },
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */
/*!******************************!*\
  !*** ./dev/Model/Account.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Utils = __webpack_require__(/*! Common/Utils */ 0),

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @constructor
		 *
		 * @param {string} sEmail
		 * @param {boolean=} bCanBeDelete = true
		 * @param {number=} iCount = 0
		 */
		function AccountModel(sEmail, bCanBeDelete, iCount)
		{
			AbstractModel.call(this, 'AccountModel');

			this.email = sEmail;

			this.count = ko.observable(iCount || 0);

			this.deleteAccess = ko.observable(false);
			this.canBeDeleted = ko.observable(Utils.isUnd(bCanBeDelete) ? true : !!bCanBeDelete);
			this.canBeEdit = this.canBeDeleted;
		}

		_.extend(AccountModel.prototype, AbstractModel.prototype);

		/**
		 * @type {string}
		 */
		AccountModel.prototype.email = '';

		/**
		 * @return {string}
		 */
		AccountModel.prototype.changeAccountLink = function ()
		{
			return __webpack_require__(/*! Common/Links */ 12).change(this.email);
		};

		module.exports = AccountModel;

	}());

/***/ },
/* 109 */
/*!****************************************!*\
  !*** ./dev/Model/ComposeAttachment.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Utils = __webpack_require__(/*! Common/Utils */ 0),

			AttachmentModel = __webpack_require__(/*! Model/Attachment */ 86),

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @constructor
		 * @param {string} sId
		 * @param {string} sFileName
		 * @param {?number=} nSize
		 * @param {boolean=} bInline
		 * @param {boolean=} bLinked
		 * @param {string=} sCID
		 * @param {string=} sContentLocation
		 */
		function ComposeAttachmentModel(sId, sFileName, nSize, bInline, bLinked, sCID, sContentLocation)
		{
			AbstractModel.call(this, 'ComposeAttachmentModel');

			this.id = sId;
			this.isInline = Utils.isUnd(bInline) ? false : !!bInline;
			this.isLinked = Utils.isUnd(bLinked) ? false : !!bLinked;
			this.CID = Utils.isUnd(sCID) ? '' : sCID;
			this.contentLocation = Utils.isUnd(sContentLocation) ? '' : sContentLocation;
			this.fromMessage = false;

			this.fileName = ko.observable(sFileName);
			this.size = ko.observable(Utils.isUnd(nSize) ? null : nSize);
			this.tempName = ko.observable('');

			this.progress = ko.observable(0);
			this.error = ko.observable('');
			this.waiting = ko.observable(true);
			this.uploading = ko.observable(false);
			this.enabled = ko.observable(true);
			this.complete = ko.observable(false);

			this.progressText = ko.computed(function () {
				var iP = this.progress();
				return 0 === iP ? '' : '' + (98 < iP ? 100 : iP) + '%';
			}, this);

			this.progressStyle = ko.computed(function () {
				var iP = this.progress();
				return 0 === iP ? '' : 'width:' + (98 < iP ? 100 : iP) + '%';
			}, this);

			this.title = ko.computed(function () {
				var sError = this.error();
				return '' !== sError ? sError : this.fileName();
			}, this);

			this.friendlySize = ko.computed(function () {
				var mSize = this.size();
				return null === mSize ? '' : Utils.friendlySize(this.size());
			}, this);

			this.mimeType = ko.computed(function () {
				return Utils.mimeContentType(this.fileName());
			}, this);

			this.fileExt = ko.computed(function () {
				return Utils.getFileExtension(this.fileName());
			}, this);

			this.regDisposables([this.progressText, this.progressStyle, this.title, this.friendlySize, this.mimeType, this.fileExt]);
		}

		_.extend(ComposeAttachmentModel.prototype, AbstractModel.prototype);

		ComposeAttachmentModel.prototype.id = '';
		ComposeAttachmentModel.prototype.isInline = false;
		ComposeAttachmentModel.prototype.isLinked = false;
		ComposeAttachmentModel.prototype.CID = '';
		ComposeAttachmentModel.prototype.contentLocation = '';
		ComposeAttachmentModel.prototype.fromMessage = false;
		ComposeAttachmentModel.prototype.cancel = Utils.emptyFunction;

		/**
		 * @param {AjaxJsonComposeAttachment} oJsonAttachment
		 * @return {boolean}
		 */
		ComposeAttachmentModel.prototype.initByUploadJson = function (oJsonAttachment)
		{
			var bResult = false;
			if (oJsonAttachment)
			{
				this.fileName(oJsonAttachment.Name);
				this.size(Utils.isUnd(oJsonAttachment.Size) ? 0 : Utils.pInt(oJsonAttachment.Size));
				this.tempName(Utils.isUnd(oJsonAttachment.TempName) ? '' : oJsonAttachment.TempName);
				this.isInline = false;

				bResult = true;
			}

			return bResult;
		};

		/**
		 * @return {string}
		 */
		ComposeAttachmentModel.prototype.iconClass = function ()
		{
			return AttachmentModel.staticIconClass(
				AttachmentModel.staticFileType(this.fileExt(), this.mimeType()))[0];
		};

		/**
		 * @return {string}
		 */
		ComposeAttachmentModel.prototype.iconText = function ()
		{
			return AttachmentModel.staticIconClass(
				AttachmentModel.staticFileType(this.fileExt(), this.mimeType()))[1];
		};

		module.exports = ComposeAttachmentModel;

	}());

/***/ },
/* 110 */
/*!******************************!*\
  !*** ./dev/Model/Contact.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Links = __webpack_require__(/*! Common/Links */ 12),

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @constructor
		 */
		function ContactModel()
		{
			AbstractModel.call(this, 'ContactModel');

			this.idContact = 0;
			this.display = '';
			this.properties = [];
			this.readOnly = false;

			this.focused = ko.observable(false);
			this.selected = ko.observable(false);
			this.checked = ko.observable(false);
			this.deleted = ko.observable(false);
		}

		_.extend(ContactModel.prototype, AbstractModel.prototype);

		/**
		 * @return {Array|null}
		 */
		ContactModel.prototype.getNameAndEmailHelper = function ()
		{
			var
				sName = '',
				sEmail = ''
			;

			if (Utils.isNonEmptyArray(this.properties))
			{
				_.each(this.properties, function (aProperty) {
					if (aProperty)
					{
						if (Enums.ContactPropertyType.FirstName === aProperty[0])
						{
							sName = Utils.trim(aProperty[1] + ' ' + sName);
						}
						else if (Enums.ContactPropertyType.LastName === aProperty[0])
						{
							sName = Utils.trim(sName + ' ' + aProperty[1]);
						}
						else if ('' === sEmail && Enums.ContactPropertyType.Email === aProperty[0])
						{
							sEmail = aProperty[1];
						}
					}
				}, this);
			}

			return '' === sEmail ? null : [sEmail, sName];
		};

		ContactModel.prototype.parse = function (oItem)
		{
			var bResult = false;
			if (oItem && 'Object/Contact' === oItem['@Object'])
			{
				this.idContact = Utils.pInt(oItem['IdContact']);
				this.display = Utils.pString(oItem['Display']);
				this.readOnly = !!oItem['ReadOnly'];

				if (Utils.isNonEmptyArray(oItem['Properties']))
				{
					_.each(oItem['Properties'], function (oProperty) {
						if (oProperty && oProperty['Type'] && Utils.isNormal(oProperty['Value']) && Utils.isNormal(oProperty['TypeStr']))
						{
							this.properties.push([Utils.pInt(oProperty['Type']), Utils.pString(oProperty['Value']), Utils.pString(oProperty['TypeStr'])]);
						}
					}, this);
				}

				bResult = true;
			}

			return bResult;
		};

		/**
		 * @return {string}
		 */
		ContactModel.prototype.srcAttr = function ()
		{
			return Links.emptyContactPic();
		};

		/**
		 * @return {string}
		 */
		ContactModel.prototype.generateUid = function ()
		{
			return '' + this.idContact;
		};

		/**
		 * @return string
		 */
		ContactModel.prototype.lineAsCss = function ()
		{
			var aResult = [];
			if (this.deleted())
			{
				aResult.push('deleted');
			}
			if (this.selected())
			{
				aResult.push('selected');
			}
			if (this.checked())
			{
				aResult.push('checked');
			}
			if (this.focused())
			{
				aResult.push('focused');
			}

			return aResult.join(' ');
		};

		module.exports = ContactModel;

	}());

/***/ },
/* 111 */
/*!**************************************!*\
  !*** ./dev/Model/ContactProperty.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @constructor
		 * @param {number=} iType = Enums.ContactPropertyType.Unknown
		 * @param {string=} sTypeStr = ''
		 * @param {string=} sValue = ''
		 * @param {boolean=} bFocused = false
		 * @param {string=} sPlaceholder = ''
		 */
		function ContactPropertyModel(iType, sTypeStr, sValue, bFocused, sPlaceholder)
		{
			AbstractModel.call(this, 'ContactPropertyModel');

			this.type = ko.observable(Utils.isUnd(iType) ? Enums.ContactPropertyType.Unknown : iType);
			this.typeStr = ko.observable(Utils.isUnd(sTypeStr) ? '' : sTypeStr);
			this.focused = ko.observable(Utils.isUnd(bFocused) ? false : !!bFocused);
			this.value = ko.observable(Utils.pString(sValue));

			this.placeholder = ko.observable(sPlaceholder || '');

			this.placeholderValue = ko.computed(function () {
				var sPlaceholder = this.placeholder();
				return sPlaceholder ? Translator.i18n(sPlaceholder) : '';
			}, this);

			this.largeValue = ko.computed(function () {
				return Enums.ContactPropertyType.Note === this.type();
			}, this);

			this.regDisposables([this.placeholderValue, this.largeValue]);
		}

		_.extend(ContactPropertyModel.prototype, AbstractModel.prototype);

		module.exports = ContactPropertyModel;

	}());

/***/ },
/* 112 */
/*!**************************************!*\
  !*** ./dev/Model/FilterCondition.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @constructor
		 */
		function FilterConditionModel()
		{
			AbstractModel.call(this, 'FilterConditionModel');

			this.field = ko.observable(Enums.FilterConditionField.From);
			this.type = ko.observable(Enums.FilterConditionType.Contains);
			this.value = ko.observable('');
			this.value.error = ko.observable(false);

			this.valueSecond = ko.observable('');
			this.valueSecond.error = ko.observable(false);

			this.template = ko.computed(function () {

				var sTemplate = '';
				switch (this.field())
				{
					case Enums.FilterConditionField.Size:
						sTemplate = 'SettingsFiltersConditionSize';
						break;
					case Enums.FilterConditionField.Header:
						sTemplate = 'SettingsFiltersConditionMore';
						break;
					default:
						sTemplate = 'SettingsFiltersConditionDefault';
						break;
				}

				return sTemplate;

			}, this);

			this.field.subscribe(function () {
				this.value('');
				this.valueSecond('');
			}, this);

			this.regDisposables([this.template]);
		}

		_.extend(FilterConditionModel.prototype, AbstractModel.prototype);

		FilterConditionModel.prototype.verify = function ()
		{
			if ('' === this.value())
			{
				this.value.error(true);
				return false;
			}

			if (Enums.FilterConditionField.Header === this.field() && '' === this.valueSecond())
			{
				this.valueSecond.error(true);
				return false;
			}

			return true;
		};

		FilterConditionModel.prototype.parse = function (oItem)
		{
			if (oItem && oItem['Field'] && oItem['Type'])
			{
				this.field(Utils.pString(oItem['Field']));
				this.type(Utils.pString(oItem['Type']));
				this.value(Utils.pString(oItem['Value']));
				this.valueSecond(Utils.pString(oItem['ValueSecond']));

				return true;
			}

			return false;
		};

		FilterConditionModel.prototype.toJson = function ()
		{
			return {
				'Field': this.field(),
				'Type': this.type(),
				'Value': this.value(),
				'ValueSecond': this.valueSecond()
			};
		};

		FilterConditionModel.prototype.cloneSelf = function ()
		{
			var oClone = new FilterConditionModel();

			oClone.field(this.field());
			oClone.type(this.type());
			oClone.value(this.value());
			oClone.valueSecond(this.valueSecond());

			return oClone;
		};

		module.exports = FilterConditionModel;

	}());

/***/ },
/* 113 */
/*!*****************************!*\
  !*** ./dev/Model/Folder.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Events = __webpack_require__(/*! Common/Events */ 24),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Cache = __webpack_require__(/*! Common/Cache */ 17),

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @constructor
		 */
		function FolderModel()
		{
			AbstractModel.call(this, 'FolderModel');

			this.name = ko.observable('');
			this.fullName = '';
			this.fullNameRaw = '';
			this.fullNameHash = '';
			this.delimiter = '';
			this.namespace = '';
			this.deep = 0;
			this.interval = 0;

			this.selectable = false;
			this.existen = true;

			this.type = ko.observable(Enums.FolderType.User);

			this.focused = ko.observable(false);
			this.selected = ko.observable(false);
			this.edited = ko.observable(false);
			this.collapsed = ko.observable(true);
			this.subScribed = ko.observable(true);
			this.checkable = ko.observable(false);
			this.subFolders = ko.observableArray([]);
			this.deleteAccess = ko.observable(false);
			this.actionBlink = ko.observable(false).extend({'falseTimeout': 1000});

			this.nameForEdit = ko.observable('');

			this.privateMessageCountAll = ko.observable(0);
			this.privateMessageCountUnread = ko.observable(0);

			this.collapsedPrivate = ko.observable(true);
		}

		_.extend(FolderModel.prototype, AbstractModel.prototype);

		/**
		 * @static
		 * @param {AjaxJsonFolder} oJsonFolder
		 * @return {?FolderModel}
		 */
		FolderModel.newInstanceFromJson = function (oJsonFolder)
		{
			var oFolderModel = new FolderModel();
			return oFolderModel.initByJson(oJsonFolder) ? oFolderModel.initComputed() : null;
		};

		/**
		 * @return {FolderModel}
		 */
		FolderModel.prototype.initComputed = function ()
		{
			var sInboxFolderName = Cache.getFolderInboxName();

			this.isInbox = ko.computed(function () {
				return Enums.FolderType.Inbox === this.type();
			}, this);

			this.hasSubScribedSubfolders = ko.computed(function () {
				return !!_.find(this.subFolders(), function (oFolder) {
					return (oFolder.subScribed() || oFolder.hasSubScribedSubfolders()) && !oFolder.isSystemFolder();
				});
			}, this);

			this.canBeEdited = ko.computed(function () {
				return Enums.FolderType.User === this.type() && this.existen && this.selectable;
			}, this);

			this.visible = ko.computed(function () {

				var
					bSubScribed = this.subScribed(),
					bSubFolders = this.hasSubScribedSubfolders()
				;

				return (bSubScribed || (bSubFolders && (!this.existen || !this.selectable)));

			}, this);

			this.isSystemFolder = ko.computed(function () {
				return Enums.FolderType.User !== this.type();
			}, this);

			this.hidden = ko.computed(function () {

				var
					bSystem = this.isSystemFolder(),
					bSubFolders = this.hasSubScribedSubfolders()
				;

				return (bSystem && !bSubFolders) || (!this.selectable && !bSubFolders);

			}, this);

			this.selectableForFolderList = ko.computed(function () {
				return !this.isSystemFolder() && this.selectable;
			}, this);

			this.messageCountAll = ko.computed({
				'read': this.privateMessageCountAll,
				'write': function (iValue) {
					if (Utils.isPosNumeric(iValue, true))
					{
						this.privateMessageCountAll(iValue);
					}
					else
					{
						this.privateMessageCountAll.valueHasMutated();
					}
				},
				'owner': this
			}).extend({'notify': 'always'});

			this.messageCountUnread = ko.computed({
				'read': this.privateMessageCountUnread,
				'write': function (iValue) {
					if (Utils.isPosNumeric(iValue, true))
					{
						this.privateMessageCountUnread(iValue);
					}
					else
					{
						this.privateMessageCountUnread.valueHasMutated();
					}
				},
				'owner': this
			}).extend({'notify': 'always'});

			this.printableUnreadCount = ko.computed(function () {
				var
					iCount = this.messageCountAll(),
					iUnread = this.messageCountUnread(),
					iType = this.type()
				;

				if (0 < iCount)
				{
					if (Enums.FolderType.Draft === iType)
					{
						return '' + iCount;
					}
					else if (0 < iUnread && Enums.FolderType.Trash !== iType && Enums.FolderType.Archive !== iType && Enums.FolderType.SentItems !== iType)
					{
						return '' + iUnread;
					}
				}

				return '';

			}, this);

			this.canBeDeleted = ko.computed(function () {
				var
					bSystem = this.isSystemFolder()
				;
				return !bSystem && 0 === this.subFolders().length && sInboxFolderName !== this.fullNameRaw;
			}, this);

			this.canBeSubScribed = ko.computed(function () {
				return !this.isSystemFolder() && this.selectable && sInboxFolderName !== this.fullNameRaw;
			}, this);

			this.canBeChecked = this.canBeSubScribed;

	//		this.visible.subscribe(function () {
	//			Utils.timeOutAction('folder-list-folder-visibility-change', function () {
	//				Globals.$win.trigger('folder-list-folder-visibility-change');
	//			}, 100);
	//		});

			this.localName = ko.computed(function () {

				Translator.trigger();

				var
					iType = this.type(),
					sName = this.name()
				;

				if (this.isSystemFolder())
				{
					switch (iType)
					{
						case Enums.FolderType.Inbox:
							sName = Translator.i18n('FOLDER_LIST/INBOX_NAME');
							break;
						case Enums.FolderType.SentItems:
							sName = Translator.i18n('FOLDER_LIST/SENT_NAME');
							break;
						case Enums.FolderType.Draft:
							sName = Translator.i18n('FOLDER_LIST/DRAFTS_NAME');
							break;
						case Enums.FolderType.Spam:
							sName = Translator.i18n('FOLDER_LIST/SPAM_NAME');
							break;
						case Enums.FolderType.Trash:
							sName = Translator.i18n('FOLDER_LIST/TRASH_NAME');
							break;
						case Enums.FolderType.Archive:
							sName = Translator.i18n('FOLDER_LIST/ARCHIVE_NAME');
							break;
					}
				}

				return sName;

			}, this);

			this.manageFolderSystemName = ko.computed(function () {

				Translator.trigger();

				var
					sSuffix = '',
					iType = this.type(),
					sName = this.name()
				;

				if (this.isSystemFolder())
				{
					switch (iType)
					{
						case Enums.FolderType.Inbox:
							sSuffix = '(' + Translator.i18n('FOLDER_LIST/INBOX_NAME') + ')';
							break;
						case Enums.FolderType.SentItems:
							sSuffix = '(' + Translator.i18n('FOLDER_LIST/SENT_NAME') + ')';
							break;
						case Enums.FolderType.Draft:
							sSuffix = '(' + Translator.i18n('FOLDER_LIST/DRAFTS_NAME') + ')';
							break;
						case Enums.FolderType.Spam:
							sSuffix = '(' + Translator.i18n('FOLDER_LIST/SPAM_NAME') + ')';
							break;
						case Enums.FolderType.Trash:
							sSuffix = '(' + Translator.i18n('FOLDER_LIST/TRASH_NAME') + ')';
							break;
						case Enums.FolderType.Archive:
							sSuffix = '(' + Translator.i18n('FOLDER_LIST/ARCHIVE_NAME') + ')';
							break;
					}
				}

				if ('' !== sSuffix && '(' + sName + ')' === sSuffix || '(inbox)' === sSuffix.toLowerCase())
				{
					sSuffix = '';
				}

				return sSuffix;

			}, this);

			this.collapsed = ko.computed({
				'read': function () {
					return !this.hidden() && this.collapsedPrivate();
				},
				'write': function (mValue) {
					this.collapsedPrivate(mValue);
				},
				'owner': this
			});

			this.hasUnreadMessages = ko.computed(function () {
				return 0 < this.messageCountUnread() && '' !== this.printableUnreadCount();
			}, this);

			this.hasSubScribedUnreadMessagesSubfolders = ko.computed(function () {
				return !!_.find(this.subFolders(), function (oFolder) {
					return oFolder.hasUnreadMessages() || oFolder.hasSubScribedUnreadMessagesSubfolders();
				});
			}, this);

			// subscribe
			this.name.subscribe(function (sValue) {
				this.nameForEdit(sValue);
			}, this);

			this.edited.subscribe(function (bValue) {
				if (bValue)
				{
					this.nameForEdit(this.name());
				}
			}, this);

			this.messageCountUnread.subscribe(function (iUnread) {
				if (Enums.FolderType.Inbox === this.type())
				{
					Events.pub('mailbox.inbox-unread-count', [iUnread]);
				}
			}, this);

			return this;
		};

		FolderModel.prototype.fullName = '';
		FolderModel.prototype.fullNameRaw = '';
		FolderModel.prototype.fullNameHash = '';
		FolderModel.prototype.delimiter = '';
		FolderModel.prototype.namespace = '';
		FolderModel.prototype.deep = 0;
		FolderModel.prototype.interval = 0;

		/**
		 * @return {string}
		 */
		FolderModel.prototype.collapsedCss = function ()
		{
			return this.hasSubScribedSubfolders() ?
				(this.collapsed() ? 'icon-right-mini e-collapsed-sign' : 'icon-down-mini e-collapsed-sign') : 'icon-none e-collapsed-sign';
		};

		/**
		 * @param {AjaxJsonFolder} oJsonFolder
		 * @return {boolean}
		 */
		FolderModel.prototype.initByJson = function (oJsonFolder)
		{
			var
				bResult = false,
				sInboxFolderName = Cache.getFolderInboxName()
			;

			if (oJsonFolder && 'Object/Folder' === oJsonFolder['@Object'])
			{
				this.name(oJsonFolder.Name);
				this.delimiter = oJsonFolder.Delimiter;
				this.fullName = oJsonFolder.FullName;
				this.fullNameRaw = oJsonFolder.FullNameRaw;
				this.fullNameHash = oJsonFolder.FullNameHash;
				this.deep = oJsonFolder.FullNameRaw.split(this.delimiter).length - 1;
				this.selectable = !!oJsonFolder.IsSelectable;
				this.existen = !!oJsonFolder.IsExists;

				this.subScribed(!!oJsonFolder.IsSubscribed);
				this.checkable(!!oJsonFolder.Checkable);

				this.type(sInboxFolderName === this.fullNameRaw ? Enums.FolderType.Inbox : Enums.FolderType.User);

				bResult = true;
			}

			return bResult;
		};

		/**
		 * @return {string}
		 */
		FolderModel.prototype.printableFullName = function ()
		{
			return this.fullName.split(this.delimiter).join(' / ');
		};

		module.exports = FolderModel;

	}());

/***/ },
/* 114 */
/*!*******************************!*\
  !*** ./dev/Model/Identity.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @param {string} sId
		 * @param {string} sEmail
		 * @constructor
		 */
		function IdentityModel(sId, sEmail)
		{
			AbstractModel.call(this, 'IdentityModel');

			this.id = ko.observable(sId || '');
			this.email = ko.observable(sEmail);
			this.name = ko.observable('');

			this.replyTo = ko.observable('');
			this.bcc = ko.observable('');

			this.signature = ko.observable('');
			this.signatureInsertBefore = ko.observable(false);

			this.deleteAccess = ko.observable(false);
			this.canBeDeleted = ko.computed(function () {
				return '' !== this.id();
			}, this);
		}

		_.extend(IdentityModel.prototype, AbstractModel.prototype);

		IdentityModel.prototype.formattedName = function ()
		{
			var
				sName = this.name(),
				sEmail = this.email()
			;

			return ('' !== sName) ? sName + ' (' + sEmail + ')' : sEmail;
		};

		module.exports = IdentityModel;

	}());

/***/ },
/* 115 */
/*!******************************!*\
  !*** ./dev/Model/Message.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Links = __webpack_require__(/*! Common/Links */ 12),

			AttachmentModel = __webpack_require__(/*! Model/Attachment */ 86),

			MessageHelper = __webpack_require__(/*! Helper/Message */ 101).default,

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @constructor
		 */
		function MessageModel()
		{
			AbstractModel.call(this, 'MessageModel');

			this.folderFullNameRaw = '';
			this.uid = '';
			this.hash = '';
			this.requestHash = '';
			this.subject = ko.observable('');
			this.subjectPrefix = ko.observable('');
			this.subjectSuffix = ko.observable('');
			this.size = ko.observable(0);
			this.dateTimeStampInUTC = ko.observable(0);
			this.priority = ko.observable(Enums.MessagePriority.Normal);

			this.proxy = false;

			this.fromEmailString = ko.observable('');
			this.fromClearEmailString = ko.observable('');
			this.toEmailsString = ko.observable('');
			this.toClearEmailsString = ko.observable('');

			this.senderEmailsString = ko.observable('');
			this.senderClearEmailsString = ko.observable('');

			this.emails = [];

			this.from = [];
			this.to = [];
			this.cc = [];
			this.bcc = [];
			this.replyTo = [];
			this.deliveredTo = [];

			this.newForAnimation = ko.observable(false);

			this.deleted = ko.observable(false);
			this.deletedMark = ko.observable(false);
			this.unseen = ko.observable(false);
			this.flagged = ko.observable(false);
			this.answered = ko.observable(false);
			this.forwarded = ko.observable(false);
			this.isReadReceipt = ko.observable(false);

			this.focused = ko.observable(false);
			this.selected = ko.observable(false);
			this.checked = ko.observable(false);
			this.hasAttachments = ko.observable(false);
			this.attachmentsSpecData = ko.observableArray([]);

			this.attachmentIconClass = ko.computed(function () {
				return AttachmentModel.staticCombinedIconClass(
					this.hasAttachments() ? this.attachmentsSpecData() : []);
			}, this);

			this.body = null;

			this.isHtml = ko.observable(false);
			this.hasImages = ko.observable(false);
			this.attachments = ko.observableArray([]);

			this.isPgpSigned = ko.observable(false);
			this.isPgpEncrypted = ko.observable(false);
			this.pgpSignedVerifyStatus = ko.observable(Enums.SignedVerifyStatus.None);
			this.pgpSignedVerifyUser = ko.observable('');

			this.priority = ko.observable(Enums.MessagePriority.Normal);
			this.readReceipt = ko.observable('');

			this.aDraftInfo = [];
			this.sMessageId = '';
			this.sInReplyTo = '';
			this.sReferences = '';

			this.hasUnseenSubMessage = ko.observable(false);
			this.hasFlaggedSubMessage = ko.observable(false);

			this.threads = ko.observableArray([]);

			this.threadsLen = ko.computed(function () {
				return this.threads().length;
			}, this);

			this.isImportant = ko.computed(function () {
				return Enums.MessagePriority.High === this.priority();
			}, this);

			this.regDisposables([this.attachmentIconClass, this.threadsLen, this.isImportant]);
		}

		_.extend(MessageModel.prototype, AbstractModel.prototype);

		/**
		 * @static
		 * @param {AjaxJsonMessage} oJsonMessage
		 * @return {?MessageModel}
		 */
		MessageModel.newInstanceFromJson = function (oJsonMessage)
		{
			var oMessageModel = new MessageModel();
			return oMessageModel.initByJson(oJsonMessage) ? oMessageModel : null;
		};

		MessageModel.prototype.clear = function ()
		{
			this.folderFullNameRaw = '';
			this.uid = '';
			this.hash = '';
			this.requestHash = '';
			this.subject('');
			this.subjectPrefix('');
			this.subjectSuffix('');
			this.size(0);
			this.dateTimeStampInUTC(0);
			this.priority(Enums.MessagePriority.Normal);

			this.proxy = false;

			this.fromEmailString('');
			this.fromClearEmailString('');
			this.toEmailsString('');
			this.toClearEmailsString('');
			this.senderEmailsString('');
			this.senderClearEmailsString('');

			this.emails = [];

			this.from = [];
			this.to = [];
			this.cc = [];
			this.bcc = [];
			this.replyTo = [];
			this.deliveredTo = [];

			this.newForAnimation(false);

			this.deleted(false);
			this.deletedMark(false);
			this.unseen(false);
			this.flagged(false);
			this.answered(false);
			this.forwarded(false);
			this.isReadReceipt(false);

			this.selected(false);
			this.checked(false);
			this.hasAttachments(false);
			this.attachmentsSpecData([]);

			this.body = null;
			this.isHtml(false);
			this.hasImages(false);
			this.attachments([]);

			this.isPgpSigned(false);
			this.isPgpEncrypted(false);
			this.pgpSignedVerifyStatus(Enums.SignedVerifyStatus.None);
			this.pgpSignedVerifyUser('');

			this.priority(Enums.MessagePriority.Normal);
			this.readReceipt('');
			this.aDraftInfo = [];
			this.sMessageId = '';
			this.sInReplyTo = '';
			this.sReferences = '';

			this.threads([]);

			this.hasUnseenSubMessage(false);
			this.hasFlaggedSubMessage(false);
		};

		/**
		 * @return {Array}
		 */
		MessageModel.prototype.getRecipientsEmails = function ()
		{
			return this.getEmails(['to', 'cc']);
		};

		/**
		 * @param {Array} aProperties
		 * @return {Array}
		 */
		MessageModel.prototype.getEmails = function (aProperties)
		{
			var self = this;
			return _.compact(_.uniq(_.map(_.reduce(aProperties, function (aCarry, sProperty) {
				return aCarry.concat(self[sProperty]);
			}, []), function (oItem) {
				return oItem ? oItem.email : '';
			})));
		};

		/**
		 * @return {string}
		 */
		MessageModel.prototype.friendlySize = function ()
		{
			return Utils.friendlySize(this.size());
		};

		MessageModel.prototype.computeSenderEmail = function ()
		{
			var
				sSent = __webpack_require__(/*! Stores/User/Folder */ 21).sentFolder(),
				sDraft = __webpack_require__(/*! Stores/User/Folder */ 21).draftFolder()
			;

			this.senderEmailsString(this.folderFullNameRaw === sSent || this.folderFullNameRaw === sDraft ?
				this.toEmailsString() : this.fromEmailString());

			this.senderClearEmailsString(this.folderFullNameRaw === sSent || this.folderFullNameRaw === sDraft ?
				this.toClearEmailsString() : this.fromClearEmailString());
		};

		/**
		 * @param {AjaxJsonMessage} oJsonMessage
		 * @return {boolean}
		 */
		MessageModel.prototype.initByJson = function (oJsonMessage)
		{
			var
				bResult = false,
				iPriority = Enums.MessagePriority.Normal
			;

			if (oJsonMessage && 'Object/Message' === oJsonMessage['@Object'])
			{
				iPriority = Utils.pInt(oJsonMessage.Priority);
				this.priority(-1 < Utils.inArray(iPriority, [Enums.MessagePriority.High, Enums.MessagePriority.Low]) ?
					iPriority : Enums.MessagePriority.Normal);

				this.folderFullNameRaw = oJsonMessage.Folder;
				this.uid = oJsonMessage.Uid;
				this.hash = oJsonMessage.Hash;
				this.requestHash = oJsonMessage.RequestHash;

				this.proxy = !!oJsonMessage.ExternalProxy;

				this.size(Utils.pInt(oJsonMessage.Size));

				this.from = MessageHelper.emailArrayFromJson(oJsonMessage.From);
				this.to = MessageHelper.emailArrayFromJson(oJsonMessage.To);
				this.cc = MessageHelper.emailArrayFromJson(oJsonMessage.Cc);
				this.bcc = MessageHelper.emailArrayFromJson(oJsonMessage.Bcc);
				this.replyTo = MessageHelper.emailArrayFromJson(oJsonMessage.ReplyTo);
				this.deliveredTo = MessageHelper.emailArrayFromJson(oJsonMessage.DeliveredTo);

				this.subject(oJsonMessage.Subject);
				if (Utils.isArray(oJsonMessage.SubjectParts))
				{
					this.subjectPrefix(oJsonMessage.SubjectParts[0]);
					this.subjectSuffix(oJsonMessage.SubjectParts[1]);
				}
				else
				{
					this.subjectPrefix('');
					this.subjectSuffix(this.subject());
				}

				this.dateTimeStampInUTC(Utils.pInt(oJsonMessage.DateTimeStampInUTC));
				this.hasAttachments(!!oJsonMessage.HasAttachments);
				this.attachmentsSpecData(Utils.isArray(oJsonMessage.AttachmentsSpecData) ?
					oJsonMessage.AttachmentsSpecData : []);

				this.fromEmailString(MessageHelper.emailArrayToString(this.from, true));
				this.fromClearEmailString(MessageHelper.emailArrayToStringClear(this.from));
				this.toEmailsString(MessageHelper.emailArrayToString(this.to, true));
				this.toClearEmailsString(MessageHelper.emailArrayToStringClear(this.to));

				this.threads(Utils.isArray(oJsonMessage.Threads) ? oJsonMessage.Threads : []);

				this.initFlagsByJson(oJsonMessage);
				this.computeSenderEmail();

				bResult = true;
			}

			return bResult;
		};

		/**
		 * @param {AjaxJsonMessage} oJsonMessage
		 * @return {boolean}
		 */
		MessageModel.prototype.initUpdateByMessageJson = function (oJsonMessage)
		{
			var
				bResult = false,
				iPriority = Enums.MessagePriority.Normal
			;

			if (oJsonMessage && 'Object/Message' === oJsonMessage['@Object'])
			{
				iPriority = Utils.pInt(oJsonMessage.Priority);
				this.priority(-1 < Utils.inArray(iPriority, [Enums.MessagePriority.High, Enums.MessagePriority.Low]) ?
					iPriority : Enums.MessagePriority.Normal);

				this.aDraftInfo = oJsonMessage.DraftInfo;

				this.sMessageId = oJsonMessage.MessageId;
				this.sInReplyTo = oJsonMessage.InReplyTo;
				this.sReferences = oJsonMessage.References;

				this.proxy = !!oJsonMessage.ExternalProxy;

				if (__webpack_require__(/*! Stores/User/Pgp */ 32).capaOpenPGP())
				{
					this.isPgpSigned(!!oJsonMessage.PgpSigned);
					this.isPgpEncrypted(!!oJsonMessage.PgpEncrypted);
				}

				this.hasAttachments(!!oJsonMessage.HasAttachments);
				this.attachmentsSpecData(Utils.isArray(oJsonMessage.AttachmentsSpecData) ?
					oJsonMessage.AttachmentsSpecData : []);

				this.foundedCIDs = Utils.isArray(oJsonMessage.FoundedCIDs) ? oJsonMessage.FoundedCIDs : [];
				this.attachments(this.initAttachmentsFromJson(oJsonMessage.Attachments));

				this.readReceipt(oJsonMessage.ReadReceipt || '');

				this.computeSenderEmail();

				bResult = true;
			}

			return bResult;
		};

		/**
		 * @param {(AjaxJsonAttachment|null)} oJsonAttachments
		 * @return {Array}
		 */
		MessageModel.prototype.initAttachmentsFromJson = function (oJsonAttachments)
		{
			var
				iIndex = 0,
				iLen = 0,
				oAttachmentModel = null,
				aResult = []
			;

			if (oJsonAttachments && 'Collection/AttachmentCollection' === oJsonAttachments['@Object'] &&
				Utils.isNonEmptyArray(oJsonAttachments['@Collection']))
			{
				for (iIndex = 0, iLen = oJsonAttachments['@Collection'].length; iIndex < iLen; iIndex++)
				{
					oAttachmentModel = AttachmentModel.newInstanceFromJson(oJsonAttachments['@Collection'][iIndex]);
					if (oAttachmentModel)
					{
						if ('' !== oAttachmentModel.cidWithOutTags && 0 < this.foundedCIDs.length &&
							0 <= Utils.inArray(oAttachmentModel.cidWithOutTags, this.foundedCIDs))
						{
							oAttachmentModel.isLinked = true;
						}

						aResult.push(oAttachmentModel);
					}
				}
			}

			return aResult;
		};

		/**
		 * @param {AjaxJsonMessage} oJsonMessage
		 * @return {boolean}
		 */
		MessageModel.prototype.initFlagsByJson = function (oJsonMessage)
		{
			var bResult = false;

			if (oJsonMessage && 'Object/Message' === oJsonMessage['@Object'])
			{
				this.unseen(!oJsonMessage.IsSeen);
				this.flagged(!!oJsonMessage.IsFlagged);
				this.answered(!!oJsonMessage.IsAnswered);
				this.forwarded(!!oJsonMessage.IsForwarded);
				this.isReadReceipt(!!oJsonMessage.IsReadReceipt);
				this.deletedMark(!!oJsonMessage.IsDeleted);

				bResult = true;
			}

			return bResult;
		};

		/**
		 * @param {boolean} bFriendlyView
		 * @param {boolean=} bWrapWithLink = false
		 * @return {string}
		 */
		MessageModel.prototype.fromToLine = function (bFriendlyView, bWrapWithLink)
		{
			return MessageHelper.emailArrayToString(this.from, bFriendlyView, bWrapWithLink);
		};

		/**
		 * @return {string}
		 */
		MessageModel.prototype.fromDkimData = function ()
		{
			var aResult = ['none', ''];
			if (Utils.isNonEmptyArray(this.from) && 1 === this.from.length &&
				this.from[0] && this.from[0].dkimStatus)
			{
				aResult = [this.from[0].dkimStatus, this.from[0].dkimValue || ''];
			}

			return aResult;
		};

		/**
		 * @param {boolean} bFriendlyView
		 * @param {boolean=} bWrapWithLink = false
		 * @return {string}
		 */
		MessageModel.prototype.toToLine = function (bFriendlyView, bWrapWithLink)
		{
			return MessageHelper.emailArrayToString(this.to, bFriendlyView, bWrapWithLink);
		};

		/**
		 * @param {boolean} bFriendlyView
		 * @param {boolean=} bWrapWithLink = false
		 * @return {string}
		 */
		MessageModel.prototype.ccToLine = function (bFriendlyView, bWrapWithLink)
		{
			return MessageHelper.emailArrayToString(this.cc, bFriendlyView, bWrapWithLink);
		};

		/**
		 * @param {boolean} bFriendlyView
		 * @param {boolean=} bWrapWithLink = false
		 * @return {string}
		 */
		MessageModel.prototype.bccToLine = function (bFriendlyView, bWrapWithLink)
		{
			return MessageHelper.emailArrayToString(this.bcc, bFriendlyView, bWrapWithLink);
		};

		/**
		 * @param {boolean} bFriendlyView
		 * @param {boolean=} bWrapWithLink = false
		 * @return {string}
		 */
		MessageModel.prototype.replyToToLine = function (bFriendlyView, bWrapWithLink)
		{
			return MessageHelper.emailArrayToString(this.replyTo, bFriendlyView, bWrapWithLink);
		};

		/**
		 * @return string
		 */
		MessageModel.prototype.lineAsCss = function ()
		{
			var aResult = [];
			if (this.deleted())
			{
				aResult.push('deleted');
			}
			if (this.deletedMark())
			{
				aResult.push('deleted-mark');
			}
			if (this.selected())
			{
				aResult.push('selected');
			}
			if (this.checked())
			{
				aResult.push('checked');
			}
			if (this.flagged())
			{
				aResult.push('flagged');
			}
			if (this.unseen())
			{
				aResult.push('unseen');
			}
			if (this.answered())
			{
				aResult.push('answered');
			}
			if (this.forwarded())
			{
				aResult.push('forwarded');
			}
			if (this.focused())
			{
				aResult.push('focused');
			}
			if (this.isImportant())
			{
				aResult.push('important');
			}
			if (this.hasAttachments())
			{
				aResult.push('withAttachments');
			}
			if (this.newForAnimation())
			{
				aResult.push('new');
			}
			if ('' === this.subject())
			{
				aResult.push('emptySubject');
			}
	//		if (1 < this.threadsLen())
	//		{
	//			aResult.push('hasChildrenMessage');
	//		}
			if (this.hasUnseenSubMessage())
			{
				aResult.push('hasUnseenSubMessage');
			}
			if (this.hasFlaggedSubMessage())
			{
				aResult.push('hasFlaggedSubMessage');
			}

			return aResult.join(' ');
		};

		/**
		 * @return {boolean}
		 */
		MessageModel.prototype.hasVisibleAttachments = function ()
		{
			return !!_.find(this.attachments(), function (oAttachment) {
				return !oAttachment.isLinked;
			});
		};

		/**
		 * @param {string} sCid
		 * @return {*}
		 */
		MessageModel.prototype.findAttachmentByCid = function (sCid)
		{
			var
				oResult = null,
				aAttachments = this.attachments()
			;

			if (Utils.isNonEmptyArray(aAttachments))
			{
				sCid = sCid.replace(/^<+/, '').replace(/>+$/, '');
				oResult = _.find(aAttachments, function (oAttachment) {
					return sCid === oAttachment.cidWithOutTags;
				});
			}

			return oResult || null;
		};

		/**
		 * @param {string} sContentLocation
		 * @return {*}
		 */
		MessageModel.prototype.findAttachmentByContentLocation = function (sContentLocation)
		{
			var
				oResult = null,
				aAttachments = this.attachments()
			;

			if (Utils.isNonEmptyArray(aAttachments))
			{
				oResult = _.find(aAttachments, function (oAttachment) {
					return sContentLocation === oAttachment.contentLocation;
				});
			}

			return oResult || null;
		};


		/**
		 * @return {string}
		 */
		MessageModel.prototype.messageId = function ()
		{
			return this.sMessageId;
		};

		/**
		 * @return {string}
		 */
		MessageModel.prototype.inReplyTo = function ()
		{
			return this.sInReplyTo;
		};

		/**
		 * @return {string}
		 */
		MessageModel.prototype.references = function ()
		{
			return this.sReferences;
		};

		/**
		 * @return {string}
		 */
		MessageModel.prototype.fromAsSingleEmail = function ()
		{
			return Utils.isArray(this.from) && this.from[0] ? this.from[0].email : '';
		};

		/**
		 * @return {string}
		 */
		MessageModel.prototype.viewLink = function ()
		{
			return Links.messageViewLink(this.requestHash);
		};

		/**
		 * @return {string}
		 */
		MessageModel.prototype.downloadLink = function ()
		{
			return Links.messageDownloadLink(this.requestHash);
		};

		/**
		 * @param {Object} oExcludeEmails
		 * @param {boolean=} bLast = false
		 * @return {Array}
		 */
		MessageModel.prototype.replyEmails = function (oExcludeEmails, bLast)
		{
			var
				aResult = [],
				oUnic = Utils.isUnd(oExcludeEmails) ? {} : oExcludeEmails
			;

			MessageHelper.replyHelper(this.replyTo, oUnic, aResult);
			if (0 === aResult.length)
			{
				MessageHelper.replyHelper(this.from, oUnic, aResult);
			}

			if (0 === aResult.length && !bLast)
			{
				return this.replyEmails({}, true);
			}

			return aResult;
		};

		/**
		 * @param {Object} oExcludeEmails
		 * @param {boolean=} bLast = false
		 * @return {Array.<Array>}
		 */
		MessageModel.prototype.replyAllEmails = function (oExcludeEmails, bLast)
		{
			var
				aData = [],
				aToResult = [],
				aCcResult = [],
				oUnic = Utils.isUnd(oExcludeEmails) ? {} : oExcludeEmails
			;

			MessageHelper.replyHelper(this.replyTo, oUnic, aToResult);
			if (0 === aToResult.length)
			{
				MessageHelper.replyHelper(this.from, oUnic, aToResult);
			}

			MessageHelper.replyHelper(this.to, oUnic, aToResult);
			MessageHelper.replyHelper(this.cc, oUnic, aCcResult);

			if (0 === aToResult.length && !bLast)
			{
				aData = this.replyAllEmails({}, true);
				return [aData[0], aCcResult];
			}

			return [aToResult, aCcResult];
		};

		/**
		 * @return {string}
		 */
		MessageModel.prototype.textBodyToString = function ()
		{
			return this.body ? this.body.html() : '';
		};

		/**
		 * @return {string}
		 */
		MessageModel.prototype.attachmentsToStringLine = function ()
		{
			var aAttachLines = _.map(this.attachments(), function (oItem) {
				return oItem.fileName + ' (' + oItem.friendlySize + ')';
			});

			return aAttachLines && 0 < aAttachLines.length ? aAttachLines.join(', ') : '';
		};

		/**
		 * @return {Object}
		 */
		MessageModel.prototype.getDataForWindowPopup = function ()
		{
			return {
				'popupFrom': this.fromToLine(false),
				'popupTo': this.toToLine(false),
				'popupCc': this.ccToLine(false),
				'popupBcc': this.bccToLine(false),
				'popupReplyTo': this.replyToToLine(false),
				'popupSubject': this.subject(),
				'popupIsHtml': this.isHtml(),
				'popupDate': __webpack_require__(/*! Common/Momentor */ 25).format(this.dateTimeStampInUTC(), 'FULL'),
				'popupAttachments': this.attachmentsToStringLine(),
				'popupBody': this.textBodyToString()
			};
		};

		/**
		 * @param {boolean=} bPrint = false
		 */
		MessageModel.prototype.viewPopupMessage = function (bPrint)
		{
			Utils.windowPopupKnockout(this.getDataForWindowPopup(), 'PopupsWindowSimpleMessage',
				this.subject(), function (oPopupWin)
			{
				if (oPopupWin && oPopupWin.document && oPopupWin.document.body)
				{
					$('img.lazy', oPopupWin.document.body).each(function (iIndex, oImg) {

						var
							$oImg = $(oImg),
							sOrig = $oImg.data('original'),
							sSrc = $oImg.attr('src')
							;

						if (0 <= iIndex && sOrig && !sSrc)
						{
							$oImg.attr('src', sOrig);
						}
					});

					if (bPrint)
					{
						window.setTimeout(function () {
							oPopupWin.print();
						}, 100);
					}
				}
			});
		};

		MessageModel.prototype.printMessage = function ()
		{
			this.viewPopupMessage(true);
		};

		/**
		 * @return {string}
		 */
		MessageModel.prototype.generateUid = function ()
		{
			return this.folderFullNameRaw + '/' + this.uid;
		};

		/**
		 * @param {MessageModel} oMessage
		 * @return {MessageModel}
		 */
		MessageModel.prototype.populateByMessageListItem = function (oMessage)
		{
			if (oMessage)
			{
				this.folderFullNameRaw = oMessage.folderFullNameRaw;
				this.uid = oMessage.uid;
				this.hash = oMessage.hash;
				this.requestHash = oMessage.requestHash;
				this.subject(oMessage.subject());
			}

			this.subjectPrefix(this.subjectPrefix());
			this.subjectSuffix(this.subjectSuffix());

			if (oMessage)
			{

				this.size(oMessage.size());
				this.dateTimeStampInUTC(oMessage.dateTimeStampInUTC());
				this.priority(oMessage.priority());

				this.proxy = oMessage.proxy;

				this.fromEmailString(oMessage.fromEmailString());
				this.fromClearEmailString(oMessage.fromClearEmailString());
				this.toEmailsString(oMessage.toEmailsString());
				this.toClearEmailsString(oMessage.toClearEmailsString());

				this.emails = oMessage.emails;

				this.from = oMessage.from;
				this.to = oMessage.to;
				this.cc = oMessage.cc;
				this.bcc = oMessage.bcc;
				this.replyTo = oMessage.replyTo;
				this.deliveredTo = oMessage.deliveredTo;

				this.unseen(oMessage.unseen());
				this.flagged(oMessage.flagged());
				this.answered(oMessage.answered());
				this.forwarded(oMessage.forwarded());
				this.isReadReceipt(oMessage.isReadReceipt());
				this.deletedMark(oMessage.deletedMark());

				this.priority(oMessage.priority());

				this.selected(oMessage.selected());
				this.checked(oMessage.checked());
				this.hasAttachments(oMessage.hasAttachments());
				this.attachmentsSpecData(oMessage.attachmentsSpecData());
			}

			this.body = null;

			this.aDraftInfo = [];
			this.sMessageId = '';
			this.sInReplyTo = '';
			this.sReferences = '';

			if (oMessage)
			{
				this.threads(oMessage.threads());
			}

			this.computeSenderEmail();

			return this;
		};

		MessageModel.prototype.showExternalImages = function (bLazy)
		{
			if (this.body && this.body.data('rl-has-images'))
			{
				var sAttr = '';
				bLazy = Utils.isUnd(bLazy) ? false : bLazy;

				this.hasImages(false);
				this.body.data('rl-has-images', false);

				sAttr = this.proxy ? 'data-x-additional-src' : 'data-x-src';
				$('[' + sAttr + ']', this.body).each(function () {
					if (bLazy && $(this).is('img'))
					{
						$(this)
							.addClass('lazy')
							.attr('data-original', $(this).attr(sAttr))
							.removeAttr(sAttr)
							;
					}
					else
					{
						$(this).attr('src', $(this).attr(sAttr)).removeAttr(sAttr);
					}
				});

				sAttr = this.proxy ? 'data-x-additional-style-url' : 'data-x-style-url';
				$('[' + sAttr + ']', this.body).each(function () {
					var sStyle = Utils.trim($(this).attr('style'));
					sStyle = '' === sStyle ? '' : (';' === sStyle.substr(-1) ? sStyle + ' ' : sStyle + '; ');
					$(this).attr('style', sStyle + $(this).attr(sAttr)).removeAttr(sAttr);
				});

				if (bLazy)
				{
					$('img.lazy', this.body).addClass('lazy-inited').lazyload({
						'threshold': 400,
						'effect': 'fadeIn',
						'skip_invisible': false,
						'container': $('.RL-MailMessageView .messageView .messageItem .content')[0]
					});

					Globals.$win.resize();
				}

				Utils.windowResize(500);
			}
		};

		MessageModel.prototype.showInternalImages = function (bLazy)
		{
			if (this.body && !this.body.data('rl-init-internal-images'))
			{
				this.body.data('rl-init-internal-images', true);

				bLazy = Utils.isUnd(bLazy) ? false : bLazy;

				var self = this;

				$('[data-x-src-cid]', this.body).each(function () {

					var oAttachment = self.findAttachmentByCid($(this).attr('data-x-src-cid'));
					if (oAttachment && oAttachment.download)
					{
						if (bLazy && $(this).is('img'))
						{
							$(this)
								.addClass('lazy')
								.attr('data-original', oAttachment.linkPreview());
						}
						else
						{
							$(this).attr('src', oAttachment.linkPreview());
						}
					}
				});

				$('[data-x-src-location]', this.body).each(function () {

					var oAttachment = self.findAttachmentByContentLocation($(this).attr('data-x-src-location'));
					if (!oAttachment)
					{
						oAttachment = self.findAttachmentByCid($(this).attr('data-x-src-location'));
					}

					if (oAttachment && oAttachment.download)
					{
						if (bLazy && $(this).is('img'))
						{
							$(this)
								.addClass('lazy')
								.attr('data-original', oAttachment.linkPreview());
						}
						else
						{
							$(this).attr('src', oAttachment.linkPreview());
						}
					}
				});

				$('[data-x-style-cid]', this.body).each(function () {

					var
						sStyle = '',
						sName = '',
						oAttachment = self.findAttachmentByCid($(this).attr('data-x-style-cid'))
					;

					if (oAttachment && oAttachment.linkPreview)
					{
						sName = $(this).attr('data-x-style-cid-name');
						if ('' !== sName)
						{
							sStyle = Utils.trim($(this).attr('style'));
							sStyle = '' === sStyle ? '' : (';' === sStyle.substr(-1) ? sStyle + ' ' : sStyle + '; ');
							$(this).attr('style', sStyle + sName + ': url(\'' + oAttachment.linkPreview() + '\')');
						}
					}
				});

				if (bLazy)
				{
					(function ($oImg, oContainer) {
						_.delay(function () {
							$oImg.addClass('lazy-inited').lazyload({
								'threshold': 400,
								'effect': 'fadeIn',
								'skip_invisible': false,
								'container': oContainer
							});
						}, 300);
					}($('img.lazy', self.body), $('.RL-MailMessageView .messageView .messageItem .content')[0]));
				}

				Utils.windowResize(500);
			}
		};

		MessageModel.prototype.storeDataInDom = function ()
		{
			if (this.body)
			{
				this.body.data('rl-is-html', !!this.isHtml());
				this.body.data('rl-has-images', !!this.hasImages());
			}
		};

		MessageModel.prototype.fetchDataFromDom = function ()
		{
			if (this.body)
			{
				this.isHtml(!!this.body.data('rl-is-html'));
				this.hasImages(!!this.body.data('rl-has-images'));
			}
		};

		MessageModel.prototype.replacePlaneTextBody = function (sPlain)
		{
			if (this.body)
			{
				this.body.html(sPlain).addClass('b-text-part plain');
			}
		};

		/**
		 * @return {string}
		 */
		MessageModel.prototype.flagHash = function ()
		{
			return [this.deleted(), this.deletedMark(), this.unseen(), this.flagged(), this.answered(), this.forwarded(),
				this.isReadReceipt()].join(',');
		};

		module.exports = MessageModel;

	}());


/***/ },
/* 116 */
/*!*********************************!*\
  !*** ./dev/Model/OpenPgpKey.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Utils = __webpack_require__(/*! Common/Utils */ 0),

			PgpStore = __webpack_require__(/*! Stores/User/Pgp */ 32),

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @param {string} iIndex
		 * @param {string} sGuID
		 * @param {string} sID
		 * @param {array} aIDs
		 * @param {array} aUserIDs
		 * @param {array} aEmails
		 * @param {boolean} bIsPrivate
		 * @param {string} sArmor
		 * @param {string} sUserID
		 * @constructor
		 */
		function OpenPgpKeyModel(iIndex, sGuID, sID, aIDs, aUserIDs, aEmails, bIsPrivate, sArmor, sUserID)
		{
			AbstractModel.call(this, 'OpenPgpKeyModel');

			this.index = iIndex;
			this.id = sID;
			this.ids = Utils.isNonEmptyArray(aIDs) ? aIDs : [sID];
			this.guid = sGuID;
			this.users = aUserIDs;
			this.emails = aEmails;
			this.armor = sArmor;
			this.isPrivate = !!bIsPrivate;

			this.selectUser(sUserID);

			this.deleteAccess = ko.observable(false);
		}

		_.extend(OpenPgpKeyModel.prototype, AbstractModel.prototype);

		OpenPgpKeyModel.prototype.index = 0;
		OpenPgpKeyModel.prototype.id = '';
		OpenPgpKeyModel.prototype.ids = [];
		OpenPgpKeyModel.prototype.guid = '';
		OpenPgpKeyModel.prototype.user = '';
		OpenPgpKeyModel.prototype.users = [];
		OpenPgpKeyModel.prototype.email = '';
		OpenPgpKeyModel.prototype.emails = [];
		OpenPgpKeyModel.prototype.armor = '';
		OpenPgpKeyModel.prototype.isPrivate = false;

		OpenPgpKeyModel.prototype.getNativeKey = function ()
		{
			var oKey = null;
			try
			{
				oKey = PgpStore.openpgp.key.readArmored(this.armor);
				if (oKey && !oKey.err && oKey.keys && oKey.keys[0])
				{
					return oKey;
				}
			}
			catch (e)
			{
				Utils.log(e);
			}

			return null;
		};

		OpenPgpKeyModel.prototype.getNativeKeys = function ()
		{
			var oKey = this.getNativeKey();
			return oKey && oKey.keys ? oKey.keys : null;
		};

		OpenPgpKeyModel.prototype.select = function (sPattern, sProperty)
		{
			if (this[sProperty])
			{
				var index = this[sProperty].indexOf(sPattern);
				if (index !== -1)
				{
					this.user = this.users[index];
					this.email = this.emails[index];
				}
			}
		};

		OpenPgpKeyModel.prototype.selectUser = function (sUser)
		{
			this.select(sUser, 'users');
		};

		OpenPgpKeyModel.prototype.selectEmail = function (sEmail)
		{
			this.select(sEmail, 'emails');
		};

		module.exports = OpenPgpKeyModel;

	}());


/***/ },
/* 117 */
/*!*******************************!*\
  !*** ./dev/Model/Template.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Utils = __webpack_require__(/*! Common/Utils */ 0),

			AbstractModel = __webpack_require__(/*! Knoin/AbstractModel */ 26)
		;

		/**
		 * @constructor
		 *
		 * @param {string} sID
		 * @param {string} sName
		 * @param {string} sBody
		 */
		function TemplateModel(sID, sName, sBody)
		{
			AbstractModel.call(this, 'TemplateModel');

			this.id = sID;
			this.name = sName;
			this.body = sBody;
			this.populated = true;

			this.deleteAccess = ko.observable(false);
		}

		_.extend(TemplateModel.prototype, AbstractModel.prototype);

		/**
		 * @type {string}
		 */
		TemplateModel.prototype.id = '';

		/**
		 * @type {string}
		 */
		TemplateModel.prototype.name = '';

		/**
		 * @type {string}
		 */
		TemplateModel.prototype.body = '';

		/**
		 * @type {boolean}
		 */
		TemplateModel.prototype.populated = true;

		/**
		 * @type {boolean}
		 */
		TemplateModel.prototype.parse = function (oItem)
		{
			var bResult = false;
			if (oItem && 'Object/Template' === oItem['@Object'])
			{
				this.id = Utils.pString(oItem['ID']);
				this.name = Utils.pString(oItem['Name']);
				this.body = Utils.pString(oItem['Body']);
				this.populated = !!oItem['Populated'];

				bResult = true;
			}

			return bResult;
		};

		module.exports = TemplateModel;

	}());

/***/ },
/* 118 */
/*!**************************************!*\
  !*** ./dev/Promises/AbstractAjax.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			$ = __webpack_require__(/*! $ */ 13),
			_ = __webpack_require__(/*! _ */ 2),
			Promise = __webpack_require__(/*! Promise */ 47),

			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Links = __webpack_require__(/*! Common/Links */ 12),
			Plugins = __webpack_require__(/*! Common/Plugins */ 22),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			AbstractBasicPromises = __webpack_require__(/*! Promises/AbstractBasic */ 88)
		;

		/**
		* @constructor
		*/
		function AbstractAjaxPromises()
		{
			AbstractBasicPromises.call(this);

			this.clear();
		}

		_.extend(AbstractAjaxPromises.prototype, AbstractBasicPromises.prototype);

		AbstractAjaxPromises.prototype.oRequests = {};

		AbstractAjaxPromises.prototype.clear = function ()
		{
			this.oRequests = {};
		};

		AbstractAjaxPromises.prototype.abort = function (sAction, bClearOnly)
		{
			if (this.oRequests[sAction])
			{
				if (!bClearOnly && this.oRequests[sAction].abort)
				{
					this.oRequests[sAction].__aborted__ = true;
					this.oRequests[sAction].abort();
				}

				this.oRequests[sAction] = null;
				delete this.oRequests[sAction];
			}

			return this;
		};

		AbstractAjaxPromises.prototype.ajaxRequest = function (sAction, bPost, iTimeOut, oParameters, sAdditionalGetString, fTrigger)
		{
			var self = this;
			return new Promise(function(resolve, reject) {

				var
					oH = null,
					iStart = Utils.microtime()
				;

				iTimeOut = Utils.isNormal(iTimeOut) ? iTimeOut : Consts.DEFAULT_AJAX_TIMEOUT;
				sAdditionalGetString = Utils.isUnd(sAdditionalGetString) ? '' : Utils.pString(sAdditionalGetString);

				if (bPost)
				{
					oParameters['XToken'] = Settings.appSettingsGet('token');
				}

				Plugins.runHook('ajax-default-request', [sAction, oParameters, sAdditionalGetString]);

				self.setTrigger(fTrigger, true);

				oH = $.ajax({
					'type': bPost ? 'POST' : 'GET',
					'url': Links.ajax(sAdditionalGetString),
					'async': true,
					'dataType': 'json',
					'data': bPost ? (oParameters || {}) : {},
					'timeout': iTimeOut,
					'global': true
				}).always(function (oData, sTextStatus) {

					var bCached = false, oErrorData = null, sType = Enums.StorageResultType.Error;
					if (oData && oData['Time'])
					{
						bCached = Utils.pInt(oData['Time']) > Utils.microtime() - iStart;
					}

					// backward capability
					switch (true)
					{
						case 'success' === sTextStatus && oData && oData.Result && sAction === oData.Action:
							sType = Enums.StorageResultType.Success;
							break;
						case 'abort' === sTextStatus && (!oData || !oData.__aborted__):
							sType = Enums.StorageResultType.Abort;
							break;
					}

					Plugins.runHook('ajax-default-response', [sAction,
						Enums.StorageResultType.Success === sType ? oData : null, sType, bCached, oParameters]);

					if ('success' === sTextStatus)
					{
						if (oData && oData.Result && sAction === oData.Action)
						{
							oData.__cached__ = bCached;
							resolve(oData);
						}
						else if (oData && oData.Action)
						{
							oErrorData = oData;
							reject(oData.ErrorCode ? oData.ErrorCode : Enums.Notification.AjaxFalse);
						}
						else
						{
							oErrorData = oData;
							reject(Enums.Notification.AjaxParse);
						}
					}
					else if ('timeout' === sTextStatus)
					{
						oErrorData = oData;
						reject(Enums.Notification.AjaxTimeout);
					}
					else if ('abort' === sTextStatus)
					{
						if (!oData || !oData.__aborted__)
						{
							reject(Enums.Notification.AjaxAbort);
						}
					}
					else
					{
						oErrorData = oData;
						reject(Enums.Notification.AjaxParse);
					}

					if (self.oRequests[sAction])
					{
						self.oRequests[sAction] = null;
						delete self.oRequests[sAction];
					}

					self.setTrigger(fTrigger, false);

					if (oErrorData)
					{
						if (-1 < Utils.inArray(oErrorData.ErrorCode, [
							Enums.Notification.AuthError, Enums.Notification.AccessError,
							Enums.Notification.ConnectionError, Enums.Notification.DomainNotAllowed, Enums.Notification.AccountNotAllowed,
							Enums.Notification.MailServerError,	Enums.Notification.UnknownNotification, Enums.Notification.UnknownError
						]))
						{
							Globals.data.iAjaxErrorCount++;
						}

						if (Enums.Notification.InvalidToken === oErrorData.ErrorCode)
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

						if (oErrorData.ClearAuth || oErrorData.Logout || Consts.AJAX_ERROR_LIMIT < Globals.data.iAjaxErrorCount)
						{
							if (Globals.data.__APP__ && Globals.data.__APP__.clearClientSideToken)
							{
								Globals.data.__APP__.clearClientSideToken();
							}

							if (Globals.data.__APP__ && !oErrorData.ClearAuth && Globals.data.__APP__.loginAndLogoutReload)
							{
								Globals.data.__APP__.loginAndLogoutReload(false, true);
							}
						}
					}

				});

				if (oH)
				{
					if (self.oRequests[sAction])
					{
						self.oRequests[sAction] = null;
						delete self.oRequests[sAction];
					}

					self.oRequests[sAction] = oH;
				}
			});
		};

		AbstractAjaxPromises.prototype.getRequest = function (sAction, fTrigger, sAdditionalGetString, iTimeOut)
		{
			sAdditionalGetString = Utils.isUnd(sAdditionalGetString) ? '' : Utils.pString(sAdditionalGetString);
			sAdditionalGetString = sAction + '/' + sAdditionalGetString;

			return this.ajaxRequest(sAction, false, iTimeOut, null, sAdditionalGetString, fTrigger);
		};

		AbstractAjaxPromises.prototype.postRequest = function (sAction, fTrigger, oParameters, iTimeOut)
		{
			oParameters = oParameters || {};
			oParameters['Action'] = sAction;

			return this.ajaxRequest(sAction, true, iTimeOut, oParameters, '', fTrigger);
		};

		module.exports = AbstractAjaxPromises;

	}());

/***/ },
/* 119 */
/*!****************************************!*\
  !*** ./dev/Promises/User/Populator.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Cache = __webpack_require__(/*! Common/Cache */ 17),

			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			FolderStore = __webpack_require__(/*! Stores/User/Folder */ 21),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			Local = __webpack_require__(/*! Storage/Client */ 46),

			FolderModel = __webpack_require__(/*! Model/Folder */ 113),

			AbstractBasicPromises = __webpack_require__(/*! Promises/AbstractBasic */ 88)
		;

		/**
		 * @constructor
		 */
		function PromisesUserPopulator()
		{
			AbstractBasicPromises.call(this);
		}

		_.extend(PromisesUserPopulator.prototype, AbstractBasicPromises.prototype);

		/**
		 * @param {string} sFullNameHash
		 * @return {boolean}
		 */
		PromisesUserPopulator.prototype.isFolderExpanded = function (sFullNameHash)
		{
			var aExpandedList = Local.get(Enums.ClientSideKeyName.ExpandedFolders);
			return Utils.isArray(aExpandedList) && -1 !== _.indexOf(aExpandedList, sFullNameHash);
		};

		/**
		 * @param {string} sFolderFullNameRaw
		 * @return {string}
		 */
		PromisesUserPopulator.prototype.normalizeFolder = function (sFolderFullNameRaw)
		{
			return ('' === sFolderFullNameRaw || Consts.UNUSED_OPTION_VALUE === sFolderFullNameRaw ||
				null !== Cache.getFolderFromCacheList(sFolderFullNameRaw)) ? sFolderFullNameRaw : '';
		};

		/**
		 * @param {string} sNamespace
		 * @param {Array} aFolders
		 * @return {Array}
		 */
		PromisesUserPopulator.prototype.folderResponseParseRec = function (sNamespace, aFolders)
		{
			var
				self = this,
				iIndex = 0,
				iLen = 0,
				oFolder = null,
				oCacheFolder = null,
				sFolderFullNameRaw = '',
				aSubFolders = [],
				aList = []
			;

			for (iIndex = 0, iLen = aFolders.length; iIndex < iLen; iIndex++)
			{
				oFolder = aFolders[iIndex];
				if (oFolder)
				{
					sFolderFullNameRaw = oFolder.FullNameRaw;

					oCacheFolder = Cache.getFolderFromCacheList(sFolderFullNameRaw);
					if (!oCacheFolder)
					{
						oCacheFolder = FolderModel.newInstanceFromJson(oFolder);
						if (oCacheFolder)
						{
							Cache.setFolderToCacheList(sFolderFullNameRaw, oCacheFolder);
							Cache.setFolderFullNameRaw(oCacheFolder.fullNameHash, sFolderFullNameRaw, oCacheFolder);
						}
					}

					if (oCacheFolder)
					{
						if (!FolderStore.displaySpecSetting())
						{
							oCacheFolder.checkable(true);
						}
						else
						{
							oCacheFolder.checkable(!!oFolder.Checkable);
						}

						oCacheFolder.collapsed(!self.isFolderExpanded(oCacheFolder.fullNameHash));

						if (oFolder.Extended)
						{
							if (oFolder.Extended.Hash)
							{
								Cache.setFolderHash(oCacheFolder.fullNameRaw, oFolder.Extended.Hash);
							}

							if (Utils.isNormal(oFolder.Extended.MessageCount))
							{
								oCacheFolder.messageCountAll(oFolder.Extended.MessageCount);
							}

							if (Utils.isNormal(oFolder.Extended.MessageUnseenCount))
							{
								oCacheFolder.messageCountUnread(oFolder.Extended.MessageUnseenCount);
							}
						}

						aSubFolders = oFolder['SubFolders'];
						if (aSubFolders && 'Collection/FolderCollection' === aSubFolders['@Object'] &&
							aSubFolders['@Collection'] && Utils.isArray(aSubFolders['@Collection']))
						{
							oCacheFolder.subFolders(
								this.folderResponseParseRec(sNamespace, aSubFolders['@Collection']));
						}

						aList.push(oCacheFolder);
					}
				}
			}

			return aList;
		};

		PromisesUserPopulator.prototype.foldersList = function (oData)
		{
			if (oData && 'Collection/FolderCollection' === oData['@Object'] &&
				oData['@Collection'] && Utils.isArray(oData['@Collection']))
			{
				var
					iLimit = Utils.pInt(Settings.appSettingsGet('folderSpecLimit')),
					iC = Utils.pInt(oData['CountRec'])
				;

				iLimit = 100 < iLimit ? 100 : (10 > iLimit ? 10 : iLimit);

				FolderStore.displaySpecSetting(0 >= iC || iLimit < iC);
				FolderStore.folderList(this.folderResponseParseRec(
					Utils.isUnd(oData.Namespace) ? '' : oData.Namespace, oData['@Collection']));
			}
		};

		PromisesUserPopulator.prototype.foldersAdditionalParameters = function (oData)
		{
			if (oData && oData && 'Collection/FolderCollection' === oData['@Object'] &&
				oData['@Collection'] && Utils.isArray(oData['@Collection']))
			{
				if (!Utils.isUnd(oData.Namespace))
				{
					FolderStore.namespace = oData.Namespace;
				}

				AppStore.threadsAllowed(!!Settings.appSettingsGet('useImapThread') && oData.IsThreadsSupported && true);

				FolderStore.folderList.optimized(!!oData.Optimized);

				var bUpdate = false;

				if (oData['SystemFolders'] && '' === '' +
					Settings.settingsGet('SentFolder') +
					Settings.settingsGet('DraftFolder') +
					Settings.settingsGet('SpamFolder') +
					Settings.settingsGet('TrashFolder') +
					Settings.settingsGet('ArchiveFolder') +
					Settings.settingsGet('NullFolder'))
				{
					Settings.settingsSet('SentFolder', oData['SystemFolders'][Enums.ServerFolderType.SENT] || null);
					Settings.settingsSet('DraftFolder', oData['SystemFolders'][Enums.ServerFolderType.DRAFTS] || null);
					Settings.settingsSet('SpamFolder', oData['SystemFolders'][Enums.ServerFolderType.JUNK] || null);
					Settings.settingsSet('TrashFolder', oData['SystemFolders'][Enums.ServerFolderType.TRASH] || null);
					Settings.settingsSet('ArchiveFolder', oData['SystemFolders'][Enums.ServerFolderType.ALL] || null);

					bUpdate = true;
				}

				FolderStore.sentFolder(this.normalizeFolder(Settings.settingsGet('SentFolder')));
				FolderStore.draftFolder(this.normalizeFolder(Settings.settingsGet('DraftFolder')));
				FolderStore.spamFolder(this.normalizeFolder(Settings.settingsGet('SpamFolder')));
				FolderStore.trashFolder(this.normalizeFolder(Settings.settingsGet('TrashFolder')));
				FolderStore.archiveFolder(this.normalizeFolder(Settings.settingsGet('ArchiveFolder')));

				if (bUpdate)
				{
					__webpack_require__(/*! Remote/User/Ajax */ 14).saveSystemFolders(Utils.emptyFunction, {
						'SentFolder': FolderStore.sentFolder(),
						'DraftFolder': FolderStore.draftFolder(),
						'SpamFolder': FolderStore.spamFolder(),
						'TrashFolder': FolderStore.trashFolder(),
						'ArchiveFolder': FolderStore.archiveFolder(),
						'NullFolder': 'NullFolder'
					});
				}

				Local.set(Enums.ClientSideKeyName.FoldersLashHash, oData.FoldersHash);
			}
		};

		module.exports = new PromisesUserPopulator();

	}());

/***/ },
/* 120 */,
/* 121 */,
/* 122 */
/*!**********************************!*\
  !*** ./dev/Screen/User/Login.js ***!
  \**********************************/
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
		function LoginUserScreen()
		{
			AbstractScreen.call(this, 'login', [
				__webpack_require__(/*! View/User/Login */ 160)
			]);
		}

		_.extend(LoginUserScreen.prototype, AbstractScreen.prototype);

		LoginUserScreen.prototype.onShow = function ()
		{
			__webpack_require__(/*! App/User */ 6).default.setWindowTitle('');
		};

		module.exports = LoginUserScreen;

	}());

/***/ },
/* 123 */
/*!************************************!*\
  !*** ./dev/Screen/User/MailBox.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Events = __webpack_require__(/*! Common/Events */ 24),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Cache = __webpack_require__(/*! Common/Cache */ 17),

			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			AccountStore = __webpack_require__(/*! Stores/User/Account */ 30),
			SettingsStore = __webpack_require__(/*! Stores/User/Settings */ 27),
			FolderStore = __webpack_require__(/*! Stores/User/Folder */ 21),
			MessageStore = __webpack_require__(/*! Stores/User/Message */ 31),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			AbstractScreen = __webpack_require__(/*! Knoin/AbstractScreen */ 37)
		;

		/**
		 * @constructor
		 * @extends AbstractScreen
		 */
		function MailBoxUserScreen()
		{
			AbstractScreen.call(this, 'mailbox', [
				__webpack_require__(/*! View/User/MailBox/SystemDropDown */ 164),
				__webpack_require__(/*! View/User/MailBox/FolderList */ 161),
				__webpack_require__(/*! View/User/MailBox/MessageList */ 162),
				__webpack_require__(/*! View/User/MailBox/MessageView */ 163)
			]);

			this.oLastRoute = {};
		}

		_.extend(MailBoxUserScreen.prototype, AbstractScreen.prototype);

		/**
		 * @type {Object}
		 */
		MailBoxUserScreen.prototype.oLastRoute = {};

		MailBoxUserScreen.prototype.updateWindowTitle  = function ()
		{
			var
				sEmail = AccountStore.email(),
				nFoldersInboxUnreadCount = FolderStore.foldersInboxUnreadCount()
			;

			if (Settings.appSettingsGet('listPermanentFiltered'))
			{
				nFoldersInboxUnreadCount = 0;
			}

			__webpack_require__(/*! App/User */ 6).default.setWindowTitle(('' === sEmail ? '' : '' +
				(0 < nFoldersInboxUnreadCount ? '(' + nFoldersInboxUnreadCount + ') ' : ' ') +
					sEmail + ' - ') + Translator.i18n('TITLES/MAILBOX'));
		};

		MailBoxUserScreen.prototype.onShow = function ()
		{
			this.updateWindowTitle();

			AppStore.focusedState(Enums.Focused.None);
			AppStore.focusedState(Enums.Focused.MessageList);

			if (Settings.appSettingsGet('mobile'))
			{
				Globals.leftPanelDisabled(true);
			}

			if (!Settings.capa(Enums.Capa.Folders))
			{
				Globals.leftPanelType(
					Settings.capa(Enums.Capa.Composer) || Settings.capa(Enums.Capa.Contacts) ? 'short' : 'none');
			}
			else
			{
				Globals.leftPanelType('');
			}
		};

		/**
		 * @param {string} sFolderHash
		 * @param {number} iPage
		 * @param {string} sSearch
		 */
		MailBoxUserScreen.prototype.onRoute = function (sFolderHash, iPage, sSearch)
		{
			var
				sThreadUid = sFolderHash.replace(/^(.+)~([\d]+)$/, '$2'),
				oFolder = Cache.getFolderFromCacheList(Cache.getFolderFullNameRaw(
					sFolderHash.replace(/~([\d]+)$/, '')))
			;

			if (oFolder)
			{
				if (sFolderHash === sThreadUid)
				{
					sThreadUid = '';
				}

				FolderStore.currentFolder(oFolder);

				MessageStore.messageListPage(iPage);
				MessageStore.messageListSearch(sSearch);
				MessageStore.messageListThreadUid(sThreadUid);

				__webpack_require__(/*! App/User */ 6).default.reloadMessageList();
			}
		};

		MailBoxUserScreen.prototype.onStart = function ()
		{
			FolderStore.folderList.subscribe(Utils.windowResizeCallback);

			MessageStore.messageList.subscribe(Utils.windowResizeCallback);
			MessageStore.message.subscribe(Utils.windowResizeCallback);

			_.delay(function () {
				SettingsStore.layout.valueHasMutated();
			}, 50);

			Events.sub('mailbox.inbox-unread-count', _.bind(function (iCount) {

				FolderStore.foldersInboxUnreadCount(iCount);

				var sEmail = AccountStore.email();

				_.each(AccountStore.accounts(), function (oItem) {
					if (oItem && sEmail === oItem.email)
					{
						oItem.count(iCount);
					}
				});

				this.updateWindowTitle();

			}, this));
		};

		MailBoxUserScreen.prototype.onBuild = function ()
		{
			if (!Globals.bMobileDevice && !Settings.appSettingsGet('mobile'))
			{
				_.defer(function () {
					__webpack_require__(/*! App/User */ 6).default.initHorizontalLayoutResizer(Enums.ClientSideKeyName.MessageListSize);
				});
			}
		};

		/**
		 * @return {Array}
		 */
		MailBoxUserScreen.prototype.routes = function ()
		{
			var
				sInboxFolderName = Cache.getFolderInboxName(),
				fNormS = function (oRequest, oVals) {
					oVals[0] = Utils.pString(oVals[0]);
					oVals[1] = Utils.pInt(oVals[1]);
					oVals[1] = 0 >= oVals[1] ? 1 : oVals[1];
					oVals[2] = Utils.pString(oVals[2]);

					if ('' === oRequest)
					{
						oVals[0] = sInboxFolderName;
						oVals[1] = 1;
					}

					return [decodeURI(oVals[0]), oVals[1], decodeURI(oVals[2])];
				},
				fNormD = function (oRequest, oVals) {
					oVals[0] = Utils.pString(oVals[0]);
					oVals[1] = Utils.pString(oVals[1]);

					if ('' === oRequest)
					{
						oVals[0] = sInboxFolderName;
					}

					return [decodeURI(oVals[0]), 1, decodeURI(oVals[1])];
				}
			;

			return [
				[/^([a-zA-Z0-9~]+)\/p([1-9][0-9]*)\/(.+)\/?$/, {'normalize_': fNormS}],
				[/^([a-zA-Z0-9~]+)\/p([1-9][0-9]*)$/, {'normalize_': fNormS}],
				[/^([a-zA-Z0-9~]+)\/(.+)\/?$/, {'normalize_': fNormD}],
				[/^([^\/]*)$/,  {'normalize_': fNormS}]
			];
		};

		module.exports = MailBoxUserScreen;

	}());

/***/ },
/* 124 */
/*!*************************************!*\
  !*** ./dev/Screen/User/Settings.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Plugins = __webpack_require__(/*! Common/Plugins */ 22),

			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			AccountStore = __webpack_require__(/*! Stores/User/Account */ 30),
			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),

			AbstractSettingsScreen = __webpack_require__(/*! Screen/AbstractSettings */ 57)
		;

		/**
		 * @constructor
		 * @extends AbstractSettingsScreen
		 */
		function SettingsUserScreen()
		{
			AbstractSettingsScreen.call(this, [
				__webpack_require__(/*! View/User/Settings/SystemDropDown */ 167),
				__webpack_require__(/*! View/User/Settings/Menu */ 165),
				__webpack_require__(/*! View/User/Settings/Pane */ 166)
			]);

			Translator.initOnStartOrLangChange(function () {
				this.sSettingsTitle = Translator.i18n('TITLES/SETTINGS');
			}, this, function () {
				this.setSettingsTitle();
			});
		}

		_.extend(SettingsUserScreen.prototype, AbstractSettingsScreen.prototype);

		/**
		 * @param {Function=} fCallback
		 */
		SettingsUserScreen.prototype.setupSettings = function (fCallback)
		{
			if (!Settings.capa(Enums.Capa.Settings))
			{
				if (fCallback)
				{
					fCallback();
				}

				return false;
			}

			kn.addSettingsViewModel(__webpack_require__(/*! Settings/User/General */ 140),
				'SettingsGeneral', 'SETTINGS_LABELS/LABEL_GENERAL_NAME', 'general', true);

			if (AppStore.contactsIsAllowed())
			{
				kn.addSettingsViewModel(__webpack_require__(/*! Settings/User/Contacts */ 137),
					'SettingsContacts', 'SETTINGS_LABELS/LABEL_CONTACTS_NAME', 'contacts');
			}

			if (Settings.capa(Enums.Capa.AdditionalAccounts) || Settings.capa(Enums.Capa.Identities))
			{
				kn.addSettingsViewModel(__webpack_require__(/*! Settings/User/Accounts */ 135), 'SettingsAccounts',
					Settings.capa(Enums.Capa.AdditionalAccounts) ?
						'SETTINGS_LABELS/LABEL_ACCOUNTS_NAME' : 'SETTINGS_LABELS/LABEL_IDENTITIES_NAME', 'accounts');
			}

			if (Settings.capa(Enums.Capa.Sieve))
			{
				kn.addSettingsViewModel(__webpack_require__(/*! Settings/User/Filters */ 138),
					'SettingsFilters', 'SETTINGS_LABELS/LABEL_FILTERS_NAME', 'filters');
			}

			if (Settings.capa(Enums.Capa.AutoLogout) || Settings.capa(Enums.Capa.TwoFactor))
			{
				kn.addSettingsViewModel(__webpack_require__(/*! Settings/User/Security */ 142),
					'SettingsSecurity', 'SETTINGS_LABELS/LABEL_SECURITY_NAME', 'security');
			}

			if (AccountStore.isRootAccount() && (
				(Settings.settingsGet('AllowGoogleSocial') && Settings.settingsGet('AllowGoogleSocialAuth')) ||
				Settings.settingsGet('AllowFacebookSocial') ||
				Settings.settingsGet('AllowTwitterSocial')))
			{
				kn.addSettingsViewModel(__webpack_require__(/*! Settings/User/Social */ 143),
					'SettingsSocial', 'SETTINGS_LABELS/LABEL_SOCIAL_NAME', 'social');
			}

			if (Settings.settingsGet('ChangePasswordIsAllowed'))
			{
				kn.addSettingsViewModel(__webpack_require__(/*! Settings/User/ChangePassword */ 136),
					'SettingsChangePassword', 'SETTINGS_LABELS/LABEL_CHANGE_PASSWORD_NAME', 'change-password');
			}

			if (Settings.capa(Enums.Capa.Templates))
			{
				kn.addSettingsViewModel(__webpack_require__(/*! Settings/User/Templates */ 144),
					'SettingsTemplates', 'SETTINGS_LABELS/LABEL_TEMPLATES_NAME', 'templates');
			}

			if (Settings.capa(Enums.Capa.Folders))
			{
				kn.addSettingsViewModel(__webpack_require__(/*! Settings/User/Folders */ 139),
					'SettingsFolders', 'SETTINGS_LABELS/LABEL_FOLDERS_NAME', 'folders');
			}

			if (Settings.capa(Enums.Capa.Themes))
			{
				kn.addSettingsViewModel(__webpack_require__(/*! Settings/User/Themes */ 145),
					'SettingsThemes', 'SETTINGS_LABELS/LABEL_THEMES_NAME', 'themes');
			}

			if (Settings.capa(Enums.Capa.OpenPGP))
			{
				kn.addSettingsViewModel(__webpack_require__(/*! Settings/User/OpenPgp */ 141),
					'SettingsOpenPGP', 'SETTINGS_LABELS/LABEL_OPEN_PGP_NAME', 'openpgp');
			}

			Plugins.runSettingsViewModelHooks(false);

			if (fCallback)
			{
				fCallback();
			}

			return true;
		};

		SettingsUserScreen.prototype.onShow = function ()
		{
			this.setSettingsTitle();
			Globals.keyScope(Enums.KeyState.Settings);
			Globals.leftPanelType('');

			if (Settings.appSettingsGet('mobile'))
			{
				Globals.leftPanelDisabled(true);
			}
		};

		SettingsUserScreen.prototype.setSettingsTitle = function ()
		{
			var sEmail = AccountStore.email();
			__webpack_require__(/*! App/User */ 6).default.setWindowTitle(('' === sEmail ? '' : sEmail + ' - ') + this.sSettingsTitle);
		};

		module.exports = SettingsUserScreen;

	}());

/***/ },
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/*!***************************************!*\
  !*** ./dev/Settings/User/Accounts.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Links = __webpack_require__(/*! Common/Links */ 12),

			AccountStore = __webpack_require__(/*! Stores/User/Account */ 30),
			IdentityStore = __webpack_require__(/*! Stores/User/Identity */ 54),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14)
		;

		/**
		 * @constructor
		 */
		function AccountsUserSettings()
		{
			this.allowAdditionalAccount = Settings.capa(Enums.Capa.AdditionalAccounts);
			this.allowIdentities = Settings.capa(Enums.Capa.Identities);

			this.accounts = AccountStore.accounts;
			this.identities = IdentityStore.identities;

			this.accountForDeletion = ko.observable(null).deleteAccessHelper();
			this.identityForDeletion = ko.observable(null).deleteAccessHelper();
		}

		AccountsUserSettings.prototype.scrollableOptions = function (sWrapper)
		{
			return {
				handle: '.drag-handle',
				containment: sWrapper || 'parent',
				axis: 'y'
			};
		};

		AccountsUserSettings.prototype.addNewAccount = function ()
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Account */ 62));
		};

		AccountsUserSettings.prototype.editAccount = function (oAccountItem)
		{
			if (oAccountItem && oAccountItem.canBeEdit())
			{
				__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Account */ 62), [oAccountItem]);
			}
		};

		AccountsUserSettings.prototype.addNewIdentity = function ()
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Identity */ 64));
		};

		AccountsUserSettings.prototype.editIdentity = function (oIdentity)
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Identity */ 64), [oIdentity]);
		};

		/**
		 * @param {AccountModel} oAccountToRemove
		 */
		AccountsUserSettings.prototype.deleteAccount = function (oAccountToRemove)
		{
			if (oAccountToRemove && oAccountToRemove.deleteAccess())
			{
				this.accountForDeletion(null);

				var
					kn = __webpack_require__(/*! Knoin/Knoin */ 4),
					fRemoveAccount = function (oAccount) {
						return oAccountToRemove === oAccount;
					}
				;

				if (oAccountToRemove)
				{
					this.accounts.remove(fRemoveAccount);

					Remote.accountDelete(function (sResult, oData) {

						if (Enums.StorageResultType.Success === sResult && oData &&
							oData.Result && oData.Reload)
						{
							kn.routeOff();
							kn.setHash(Links.root(), true);
							kn.routeOff();

							_.defer(function () {
								window.location.reload();
							});
						}
						else
						{
							__webpack_require__(/*! App/User */ 6).default.accountsAndIdentities();
						}

					}, oAccountToRemove.email);
				}
			}
		};

		/**
		 * @param {IdentityModel} oIdentityToRemove
		 */
		AccountsUserSettings.prototype.deleteIdentity = function (oIdentityToRemove)
		{
			if (oIdentityToRemove && oIdentityToRemove.deleteAccess())
			{
				this.identityForDeletion(null);

				if (oIdentityToRemove)
				{
					IdentityStore.identities.remove(function (oIdentity) {
						return oIdentityToRemove === oIdentity;
					});

					Remote.identityDelete(function () {
						__webpack_require__(/*! App/User */ 6).default.accountsAndIdentities();
					}, oIdentityToRemove.id);
				}
			}
		};

		AccountsUserSettings.prototype.accountsAndIdentitiesAfterMove = function ()
		{
			Remote.accountsAndIdentitiesSortOrder(null,
				AccountStore.accountsEmails.peek(), IdentityStore.identitiesIDS.peek());
		};

		AccountsUserSettings.prototype.onBuild = function (oDom)
		{
			var self = this;

			oDom
				.on('click', '.accounts-list .account-item .e-action', function () {
					var oAccountItem = ko.dataFor(this);
					if (oAccountItem)
					{
						self.editAccount(oAccountItem);
					}
				})
				.on('click', '.identities-list .identity-item .e-action', function () {
					var oIdentityItem = ko.dataFor(this);
					if (oIdentityItem)
					{
						self.editIdentity(oIdentityItem);
					}
				})
			;
		};

		module.exports = AccountsUserSettings;

	}());

/***/ },
/* 136 */
/*!*********************************************!*\
  !*** ./dev/Settings/User/ChangePassword.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14)
		;

		/**
		 * @constructor
		 */
		function ChangePasswordUserSettings()
		{
			this.changeProcess = ko.observable(false);

			this.errorDescription = ko.observable('');
			this.passwordMismatch = ko.observable(false);
			this.passwordUpdateError = ko.observable(false);
			this.passwordUpdateSuccess = ko.observable(false);

			this.currentPassword = ko.observable('');
			this.currentPassword.error = ko.observable(false);
			this.newPassword = ko.observable('');
			this.newPassword2 = ko.observable('');

			this.currentPassword.subscribe(function () {
				this.passwordUpdateError(false);
				this.passwordUpdateSuccess(false);
				this.currentPassword.error(false);
			}, this);

			this.newPassword.subscribe(function () {
				this.passwordUpdateError(false);
				this.passwordUpdateSuccess(false);
				this.passwordMismatch(false);
			}, this);

			this.newPassword2.subscribe(function () {
				this.passwordUpdateError(false);
				this.passwordUpdateSuccess(false);
				this.passwordMismatch(false);
			}, this);

			this.saveNewPasswordCommand = Utils.createCommand(this, function () {

				if (this.newPassword() !== this.newPassword2())
				{
					this.passwordMismatch(true);
					this.errorDescription(Translator.i18n('SETTINGS_CHANGE_PASSWORD/ERROR_PASSWORD_MISMATCH'));
				}
				else
				{
					this.changeProcess(true);

					this.passwordUpdateError(false);
					this.passwordUpdateSuccess(false);
					this.currentPassword.error(false);
					this.passwordMismatch(false);
					this.errorDescription('');

					Remote.changePassword(this.onChangePasswordResponse, this.currentPassword(), this.newPassword());
				}

			}, function () {
				return !this.changeProcess() && '' !== this.currentPassword() &&
					'' !== this.newPassword() && '' !== this.newPassword2();
			});

			this.onChangePasswordResponse = _.bind(this.onChangePasswordResponse, this);
		}

		ChangePasswordUserSettings.prototype.onHide = function ()
		{
			this.changeProcess(false);
			this.currentPassword('');
			this.newPassword('');
			this.newPassword2('');
			this.errorDescription('');
			this.passwordMismatch(false);
			this.currentPassword.error(false);
		};

		ChangePasswordUserSettings.prototype.onChangePasswordResponse = function (sResult, oData)
		{
			this.changeProcess(false);
			this.passwordMismatch(false);
			this.errorDescription('');
			this.currentPassword.error(false);

			if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
			{
				this.currentPassword('');
				this.newPassword('');
				this.newPassword2('');

				this.passwordUpdateSuccess(true);
				this.currentPassword.error(false);

				__webpack_require__(/*! App/User */ 6).default.setClientSideToken(oData.Result);
			}
			else
			{
				if (oData && Enums.Notification.CurrentPasswordIncorrect === oData.ErrorCode)
				{
					this.currentPassword.error(true);
				}

				this.passwordUpdateError(true);
				this.errorDescription(
					Translator.getNotificationFromResponse(oData, Enums.Notification.CouldNotSaveNewPassword));
			}
		};

		module.exports = ChangePasswordUserSettings;

	}());

/***/ },
/* 137 */
/*!***************************************!*\
  !*** ./dev/Settings/User/Contacts.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1),

			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			ContactStore = __webpack_require__(/*! Stores/User/Contact */ 52),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14)
		;

		/**
		 * @constructor
		 */
		function ContactsUserSettings()
		{
			this.contactsAutosave = AppStore.contactsAutosave;

			this.allowContactsSync = ContactStore.allowContactsSync;
			this.enableContactsSync = ContactStore.enableContactsSync;
			this.contactsSyncUrl = ContactStore.contactsSyncUrl;
			this.contactsSyncUser = ContactStore.contactsSyncUser;
			this.contactsSyncPass = ContactStore.contactsSyncPass;

			this.saveTrigger = ko.computed(function () {
				return [
					this.enableContactsSync() ? '1' : '0',
					this.contactsSyncUrl(),
					this.contactsSyncUser(),
					this.contactsSyncPass()
				].join('|');
			}, this).extend({'throttle': 500});
		}

		ContactsUserSettings.prototype.onBuild = function ()
		{
			this.contactsAutosave.subscribe(function (bValue) {
				Remote.saveSettings(null, {
					'ContactsAutosave': bValue ? '1' : '0'
				});
			});

			this.saveTrigger.subscribe(function () {
				Remote.saveContactsSyncData(null,
					this.enableContactsSync(),
					this.contactsSyncUrl(),
					this.contactsSyncUser(),
					this.contactsSyncPass()
				);
			}, this);
		};

		module.exports = ContactsUserSettings;

	}());

/***/ },
/* 138 */
/*!**************************************!*\
  !*** ./dev/Settings/User/Filters.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1),
			_ = __webpack_require__(/*! _ */ 2),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			FilterStore = __webpack_require__(/*! Stores/User/Filter */ 90),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14)
		;

		/**
		 * @constructor
		 */
		function FiltersUserSettings()
		{
			var self = this;

			this.modules = FilterStore.modules;
			this.filters = FilterStore.filters;

			this.inited = ko.observable(false);
			this.serverError = ko.observable(false);
			this.serverErrorDesc = ko.observable('');
			this.haveChanges = ko.observable(false);

			this.saveErrorText = ko.observable('');

			this.filters.subscribe(Utils.windowResizeCallback);

			this.serverError.subscribe(function (bValue) {
				if (!bValue)
				{
					this.serverErrorDesc('');
				}
			}, this);

			this.filterRaw = FilterStore.raw;
			this.filterRaw.capa = FilterStore.capa;
			this.filterRaw.active = ko.observable(false);
			this.filterRaw.allow = ko.observable(false);
			this.filterRaw.error = ko.observable(false);

			this.filterForDeletion = ko.observable(null).extend({'falseTimeout': 3000}).extend(
				{'toggleSubscribeProperty': [this, 'deleteAccess']});

			this.saveChanges = Utils.createCommand(this, function () {

				if (!this.filters.saving())
				{
					if (this.filterRaw.active() && '' === Utils.trim(this.filterRaw()))
					{
						this.filterRaw.error(true);
						return false;
					}

					this.filters.saving(true);
					this.saveErrorText('');

					Remote.filtersSave(function (sResult, oData) {

						self.filters.saving(false);

						if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
						{
							self.haveChanges(false);
							self.updateList();
						}
						else if (oData && oData.ErrorCode)
						{
							self.saveErrorText(oData.ErrorMessageAdditional || Translator.getNotification(oData.ErrorCode));
						}
						else
						{
							self.saveErrorText(Translator.getNotification(Enums.Notification.CantSaveFilters));
						}

					}, this.filters(), this.filterRaw(), this.filterRaw.active());
				}

				return true;

			}, function () {
				return this.haveChanges();
			});

			this.filters.subscribe(function () {
				this.haveChanges(true);
			}, this);

			this.filterRaw.subscribe(function () {
				this.haveChanges(true);
				this.filterRaw.error(false);
			}, this);

			this.haveChanges.subscribe(function () {
				this.saveErrorText('');
			}, this);

			this.filterRaw.active.subscribe(function () {
				this.haveChanges(true);
				this.filterRaw.error(false);
			}, this);
		}

		FiltersUserSettings.prototype.scrollableOptions = function (sWrapper)
		{
			return {
				handle: '.drag-handle',
				containment: sWrapper || 'parent',
				axis: 'y'
			};
		};

		FiltersUserSettings.prototype.updateList = function ()
		{
			var
				self = this,
				FilterModel = __webpack_require__(/*! Model/Filter */ 87)
			;

			if (!this.filters.loading())
			{
				this.filters.loading(true);

				Remote.filtersGet(function (sResult, oData) {

					self.filters.loading(false);
					self.serverError(false);

					if (Enums.StorageResultType.Success === sResult && oData &&
						oData.Result && Utils.isArray(oData.Result.Filters))
					{
						self.inited(true);
						self.serverError(false);

						var aResult = _.compact(_.map(oData.Result.Filters, function (aItem) {
							var oNew = new FilterModel();
							return (oNew && oNew.parse(aItem)) ? oNew : null;
						}));

						self.filters(aResult);

						self.modules(oData.Result.Modules ? oData.Result.Modules : {});

						self.filterRaw(oData.Result.Raw || '');
						self.filterRaw.capa(Utils.isArray(oData.Result.Capa) ? oData.Result.Capa.join(' ') : '');
						self.filterRaw.active(!!oData.Result.RawIsActive);
						self.filterRaw.allow(!!oData.Result.RawIsAllow);
					}
					else
					{
						self.filters([]);
						self.modules({});
						self.filterRaw('');
						self.filterRaw.capa({});

						self.serverError(true);
						self.serverErrorDesc(oData && oData.ErrorCode ? Translator.getNotification(oData.ErrorCode) :
							Translator.getNotification(Enums.Notification.CantGetFilters));
					}

					self.haveChanges(false);
				});
			}
		};

		FiltersUserSettings.prototype.deleteFilter = function (oFilter)
		{
			this.filters.remove(oFilter);
			Utils.delegateRunOnDestroy(oFilter);
		};

		FiltersUserSettings.prototype.addFilter = function ()
		{
			var
				self = this,
				FilterModel = __webpack_require__(/*! Model/Filter */ 87),
				oNew = new FilterModel()
			;

			oNew.generateID();
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(
				__webpack_require__(/*! View/Popup/Filter */ 94), [oNew, function  () {
					self.filters.push(oNew);
					self.filterRaw.active(false);
				}, false]);
		};

		FiltersUserSettings.prototype.editFilter = function (oEdit)
		{
			var
				self = this,
				oCloned = oEdit.cloneSelf()
			;

			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(
				__webpack_require__(/*! View/Popup/Filter */ 94), [oCloned, function  () {

					var
						aFilters = self.filters(),
						iIndex = aFilters.indexOf(oEdit)
					;

					if (-1 < iIndex && aFilters[iIndex])
					{
						Utils.delegateRunOnDestroy(aFilters[iIndex]);
						aFilters[iIndex] = oCloned;

						self.filters(aFilters);
						self.haveChanges(true);
					}

				}, true]);
		};

		FiltersUserSettings.prototype.onBuild = function (oDom)
		{
			var self = this;

			oDom
				.on('click', '.filter-item .e-action', function () {
					var oFilterItem = ko.dataFor(this);
					if (oFilterItem)
					{
						self.editFilter(oFilterItem);
					}
				})
			;
		};

		FiltersUserSettings.prototype.onShow = function ()
		{
			this.updateList();
		};

		module.exports = FiltersUserSettings;

	}());

/***/ },
/* 139 */
/*!**************************************!*\
  !*** ./dev/Settings/User/Folders.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Cache = __webpack_require__(/*! Common/Cache */ 17),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			Local = __webpack_require__(/*! Storage/Client */ 46),

			FolderStore = __webpack_require__(/*! Stores/User/Folder */ 21),

			Promises = __webpack_require__(/*! Promises/User/Ajax */ 40),
			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14)
		;

		/**
		 * @constructor
		 */
		function FoldersUserSettings()
		{
			this.displaySpecSetting = FolderStore.displaySpecSetting;
			this.folderList = FolderStore.folderList;

			this.folderListHelp = ko.observable('').extend({'throttle': 100});

			this.loading = ko.computed(function () {

				var
					bLoading = FolderStore.foldersLoading(),
					bCreating = FolderStore.foldersCreating(),
					bDeleting = FolderStore.foldersDeleting(),
					bRenaming = FolderStore.foldersRenaming()
				;

				return bLoading || bCreating || bDeleting || bRenaming;

			}, this);

			this.folderForDeletion = ko.observable(null).deleteAccessHelper();

			this.folderForEdit = ko.observable(null).extend({'toggleSubscribe': [this,
				function (oPrev) {
					if (oPrev)
					{
						oPrev.edited(false);
					}
				}, function (oNext) {
					if (oNext && oNext.canBeEdited())
					{
						oNext.edited(true);
					}
				}
			]});

			this.useImapSubscribe = !!Settings.appSettingsGet('useImapSubscribe');
		}

		FoldersUserSettings.prototype.folderEditOnEnter = function (oFolder)
		{
			var
				sEditName = oFolder ? Utils.trim(oFolder.nameForEdit()) : ''
			;

			if ('' !== sEditName && oFolder.name() !== sEditName)
			{
				Local.set(Enums.ClientSideKeyName.FoldersLashHash, '');

				__webpack_require__(/*! App/User */ 6).default.foldersPromisesActionHelper(
					Promises.folderRename(oFolder.fullNameRaw, sEditName, FolderStore.foldersRenaming),
					Enums.Notification.CantRenameFolder);

				Cache.removeFolderFromCacheList(oFolder.fullNameRaw);

				oFolder.name(sEditName);
			}

			oFolder.edited(false);
		};

		FoldersUserSettings.prototype.folderEditOnEsc = function (oFolder)
		{
			if (oFolder)
			{
				oFolder.edited(false);
			}
		};

		FoldersUserSettings.prototype.onShow = function ()
		{
			FolderStore.folderList.error('');
		};

		FoldersUserSettings.prototype.onBuild = function (oDom)
		{
			var self = this;
			oDom
				.on('mouseover', '.delete-folder-parent', function () {
					self.folderListHelp(Translator.i18n('SETTINGS_FOLDERS/HELP_DELETE_FOLDER'));
				})
				.on('mouseover', '.subscribe-folder-parent', function () {
					self.folderListHelp(Translator.i18n('SETTINGS_FOLDERS/HELP_SHOW_HIDE_FOLDER'));
				})
				.on('mouseover', '.check-folder-parent', function () {
					self.folderListHelp(Translator.i18n('SETTINGS_FOLDERS/HELP_CHECK_FOR_NEW_MESSAGES'));
				})
				.on('mouseout', '.subscribe-folder-parent, .check-folder-parent, .delete-folder-parent', function () {
					self.folderListHelp('');
				})
			;
		};

		FoldersUserSettings.prototype.createFolder = function ()
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/FolderCreate */ 95));
		};

		FoldersUserSettings.prototype.systemFolder = function ()
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/FolderSystem */ 53));
		};

		FoldersUserSettings.prototype.deleteFolder = function (oFolderToRemove)
		{
			if (oFolderToRemove && oFolderToRemove.canBeDeleted() && oFolderToRemove.deleteAccess() &&
				0 === oFolderToRemove.privateMessageCountAll())
			{
				this.folderForDeletion(null);

				var
					fRemoveFolder = function (oFolder) {

						if (oFolderToRemove === oFolder)
						{
							return true;
						}

						oFolder.subFolders.remove(fRemoveFolder);
						return false;
					}
				;

				if (oFolderToRemove)
				{
					Local.set(Enums.ClientSideKeyName.FoldersLashHash, '');

					FolderStore.folderList.remove(fRemoveFolder);

					__webpack_require__(/*! App/User */ 6).default.foldersPromisesActionHelper(
						Promises.folderDelete(oFolderToRemove.fullNameRaw, FolderStore.foldersDeleting),
						Enums.Notification.CantDeleteFolder);

					Cache.removeFolderFromCacheList(oFolderToRemove.fullNameRaw);
				}
			}
			else if (0 < oFolderToRemove.privateMessageCountAll())
			{
				FolderStore.folderList.error(Translator.getNotification(Enums.Notification.CantDeleteNonEmptyFolder));
			}
		};

		FoldersUserSettings.prototype.subscribeFolder = function (oFolder)
		{
			Local.set(Enums.ClientSideKeyName.FoldersLashHash, '');
			Remote.folderSetSubscribe(Utils.emptyFunction, oFolder.fullNameRaw, true);

			oFolder.subScribed(true);
		};

		FoldersUserSettings.prototype.unSubscribeFolder = function (oFolder)
		{
			Local.set(Enums.ClientSideKeyName.FoldersLashHash, '');
			Remote.folderSetSubscribe(Utils.emptyFunction, oFolder.fullNameRaw, false);

			oFolder.subScribed(false);
		};

		FoldersUserSettings.prototype.checkableTrueFolder = function (oFolder)
		{
			Remote.folderSetCheckable(Utils.emptyFunction, oFolder.fullNameRaw, true);

			oFolder.checkable(true);
		};

		FoldersUserSettings.prototype.checkableFalseFolder = function (oFolder)
		{
			Remote.folderSetCheckable(Utils.emptyFunction, oFolder.fullNameRaw, false);

			oFolder.checkable(false);
		};

		module.exports = FoldersUserSettings;

	}());

/***/ },
/* 140 */
/*!**************************************!*\
  !*** ./dev/Settings/User/General.js ***!
  \**************************************/
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

			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			LanguageStore = __webpack_require__(/*! Stores/Language */ 38),
			SettingsStore = __webpack_require__(/*! Stores/User/Settings */ 27),
			IdentityStore = __webpack_require__(/*! Stores/User/Identity */ 54),
			NotificationStore = __webpack_require__(/*! Stores/User/Notification */ 61),
			MessageStore = __webpack_require__(/*! Stores/User/Message */ 31),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14)
		;

		/**
		 * @constructor
		 */
		function GeneralUserSettings()
		{
			this.language = LanguageStore.language;
			this.languages = LanguageStore.languages;
			this.messagesPerPage = SettingsStore.messagesPerPage;
			this.messagesPerPageArray = Consts.MESSAGES_PER_PAGE_VALUES;

			this.editorDefaultType = SettingsStore.editorDefaultType;
			this.layout = SettingsStore.layout;
			this.usePreviewPane = SettingsStore.usePreviewPane;

			this.soundNotificationIsSupported = NotificationStore.soundNotificationIsSupported;
			this.enableSoundNotification = NotificationStore.enableSoundNotification;

			this.enableDesktopNotification = NotificationStore.enableDesktopNotification;
			this.isDesktopNotificationSupported = NotificationStore.isDesktopNotificationSupported;
			this.isDesktopNotificationDenied = NotificationStore.isDesktopNotificationDenied;

			this.showImages = SettingsStore.showImages;
			this.useCheckboxesInList = SettingsStore.useCheckboxesInList;
			this.threadsAllowed = AppStore.threadsAllowed;
			this.useThreads = SettingsStore.useThreads;
			this.replySameFolder = SettingsStore.replySameFolder;
			this.allowLanguagesOnSettings = AppStore.allowLanguagesOnSettings;

			this.languageFullName = ko.computed(function () {
				return Utils.convertLangName(this.language());
			}, this);

			this.languageTrigger = ko.observable(Enums.SaveSettingsStep.Idle).extend({'throttle': 100});

			this.mppTrigger = ko.observable(Enums.SaveSettingsStep.Idle);
			this.editorDefaultTypeTrigger = ko.observable(Enums.SaveSettingsStep.Idle);
			this.layoutTrigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.isAnimationSupported = Globals.bAnimationSupported;

			this.identities = IdentityStore.identities;

			this.identityMain = ko.computed(function () {
				var aList = this.identities();
				return Utils.isArray(aList) ? _.find(aList, function (oItem) {
					return oItem && '' === oItem.id() ? true : false;
				}) : null;
			}, this);

			this.identityMainDesc = ko.computed(function () {
				var oIdentity = this.identityMain();
				return oIdentity ? oIdentity.formattedName() : '---';
			}, this);

			this.editorDefaultTypes = ko.computed(function () {
				Translator.trigger();
				return [
					{'id': Enums.EditorDefaultType.Html, 'name': Translator.i18n('SETTINGS_GENERAL/LABEL_EDITOR_HTML')},
					{'id': Enums.EditorDefaultType.Plain, 'name': Translator.i18n('SETTINGS_GENERAL/LABEL_EDITOR_PLAIN')},
					{'id': Enums.EditorDefaultType.HtmlForced, 'name': Translator.i18n('SETTINGS_GENERAL/LABEL_EDITOR_HTML_FORCED')},
					{'id': Enums.EditorDefaultType.PlainForced, 'name': Translator.i18n('SETTINGS_GENERAL/LABEL_EDITOR_PLAIN_FORCED')}
				];
			}, this);

			this.layoutTypes = ko.computed(function () {
				Translator.trigger();
				return [
					{'id': Enums.Layout.NoPreview, 'name': Translator.i18n('SETTINGS_GENERAL/LABEL_LAYOUT_NO_SPLIT')},
					{'id': Enums.Layout.SidePreview, 'name': Translator.i18n('SETTINGS_GENERAL/LABEL_LAYOUT_VERTICAL_SPLIT')},
					{'id': Enums.Layout.BottomPreview, 'name': Translator.i18n('SETTINGS_GENERAL/LABEL_LAYOUT_HORIZONTAL_SPLIT')}
				];
			}, this);
		}

		GeneralUserSettings.prototype.editMainIdentity = function ()
		{
			var oIdentity = this.identityMain();
			if (oIdentity)
			{
				__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Identity */ 64), [oIdentity]);
			}
		};

		GeneralUserSettings.prototype.testSoundNotification = function ()
		{
			NotificationStore.playSoundNotification(true);
		};

		GeneralUserSettings.prototype.onBuild = function ()
		{
			var self = this;

			_.delay(function () {

				var
					f0 = Utils.settingsSaveHelperSimpleFunction(self.editorDefaultTypeTrigger, self),
					f1 = Utils.settingsSaveHelperSimpleFunction(self.mppTrigger, self),
					f2 = Utils.settingsSaveHelperSimpleFunction(self.layoutTrigger, self),
					fReloadLanguageHelper = function (iSaveSettingsStep) {
						return function() {
							self.languageTrigger(iSaveSettingsStep);
							_.delay(function () {
								self.languageTrigger(Enums.SaveSettingsStep.Idle);
							}, 1000);
						};
					}
				;

				self.language.subscribe(function (sValue) {

					self.languageTrigger(Enums.SaveSettingsStep.Animate);

					Translator.reload(false, sValue,
						fReloadLanguageHelper(Enums.SaveSettingsStep.TrueResult),
						fReloadLanguageHelper(Enums.SaveSettingsStep.FalseResult));

					Remote.saveSettings(null, {
						'Language': sValue
					});
				});

				self.editorDefaultType.subscribe(function (sValue) {
					Remote.saveSettings(f0, {
						'EditorDefaultType': sValue
					});
				});

				self.messagesPerPage.subscribe(function (iValue) {
					Remote.saveSettings(f1, {
						'MPP': iValue
					});
				});

				self.showImages.subscribe(function (bValue) {
					Remote.saveSettings(null, {
						'ShowImages': bValue ? '1' : '0'
					});
				});

				self.enableDesktopNotification.subscribe(function (bValue) {
					Utils.timeOutAction('SaveDesktopNotifications', function () {
						Remote.saveSettings(null, {
							'DesktopNotifications': bValue ? '1' : '0'
						});
					}, 3000);
				});

				self.enableSoundNotification.subscribe(function (bValue) {
					Utils.timeOutAction('SaveSoundNotification', function () {
						Remote.saveSettings(null, {
							'SoundNotification': bValue ? '1' : '0'
						});
					}, 3000);
				});

				self.replySameFolder.subscribe(function (bValue) {
					Utils.timeOutAction('SaveReplySameFolder', function () {
						Remote.saveSettings(null, {
							'ReplySameFolder': bValue ? '1' : '0'
						});
					}, 3000);
				});

				self.useThreads.subscribe(function (bValue) {

					MessageStore.messageList([]);

					Remote.saveSettings(null, {
						'UseThreads': bValue ? '1' : '0'
					});
				});

				self.layout.subscribe(function (nValue) {

					MessageStore.messageList([]);

					Remote.saveSettings(f2, {
						'Layout': nValue
					});
				});

				self.useCheckboxesInList.subscribe(function (bValue) {
					Remote.saveSettings(null, {
						'UseCheckboxesInList': bValue ? '1' : '0'
					});
				});

			}, 50);
		};

		GeneralUserSettings.prototype.onShow = function ()
		{
			this.enableDesktopNotification.valueHasMutated();
		};

		GeneralUserSettings.prototype.selectLanguage = function ()
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Languages */ 43), [
				this.language, this.languages(), LanguageStore.userLanguage()
			]);
		};

		module.exports = GeneralUserSettings;

	}());

/***/ },
/* 141 */
/*!**************************************!*\
  !*** ./dev/Settings/User/OpenPgp.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),
			window = __webpack_require__(/*! window */ 11),

			Utils = __webpack_require__(/*! Common/Utils */ 0),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),

			PgpStore = __webpack_require__(/*! Stores/User/Pgp */ 32)
		;

		/**
		 * @constructor
		 */
		function OpenPgpUserSettings()
		{
			this.openpgpkeys = PgpStore.openpgpkeys;
			this.openpgpkeysPublic = PgpStore.openpgpkeysPublic;
			this.openpgpkeysPrivate = PgpStore.openpgpkeysPrivate;

			this.openPgpKeyForDeletion = ko.observable(null).deleteAccessHelper();

			this.isHttps = window.document && window.document.location ? 'https:' === window.document.location.protocol : false;
		}

		OpenPgpUserSettings.prototype.addOpenPgpKey = function ()
		{
			kn.showScreenPopup(__webpack_require__(/*! View/Popup/AddOpenPgpKey */ 150));
		};

		OpenPgpUserSettings.prototype.generateOpenPgpKey = function ()
		{
			kn.showScreenPopup(__webpack_require__(/*! View/Popup/NewOpenPgpKey */ 155));
		};

		OpenPgpUserSettings.prototype.viewOpenPgpKey = function (oOpenPgpKey)
		{
			if (oOpenPgpKey)
			{
				kn.showScreenPopup(__webpack_require__(/*! View/Popup/ViewOpenPgpKey */ 158), [oOpenPgpKey]);
			}
		};

		/**
		 * @param {OpenPgpKeyModel} oOpenPgpKeyToRemove
		 */
		OpenPgpUserSettings.prototype.deleteOpenPgpKey = function (oOpenPgpKeyToRemove)
		{
			if (oOpenPgpKeyToRemove && oOpenPgpKeyToRemove.deleteAccess())
			{
				this.openPgpKeyForDeletion(null);

				if (oOpenPgpKeyToRemove && PgpStore.openpgpKeyring)
				{
					var oFindedItem = _.find(PgpStore.openpgpkeys(), function (oOpenPgpKey) {
						return oOpenPgpKeyToRemove === oOpenPgpKey;
					});

					if (oFindedItem)
					{
						PgpStore.openpgpkeys.remove(oFindedItem);
						Utils.delegateRunOnDestroy(oFindedItem);

						PgpStore.openpgpKeyring[oFindedItem.isPrivate ? 'privateKeys' : 'publicKeys']
							.removeForId(oFindedItem.guid);

						PgpStore.openpgpKeyring.store();
					}

					__webpack_require__(/*! App/User */ 6).default.reloadOpenPgpKeys();
				}
			}
		};

		module.exports = OpenPgpUserSettings;

	}());

/***/ },
/* 142 */
/*!***************************************!*\
  !*** ./dev/Settings/User/Security.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			SettinsStore = __webpack_require__(/*! Stores/User/Settings */ 27),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14)
		;

		/**
		 * @constructor
		 */
		function SecurityUserSettings()
		{
			this.capaAutoLogout = Settings.capa(Enums.Capa.AutoLogout);
			this.capaTwoFactor = Settings.capa(Enums.Capa.TwoFactor);

			this.autoLogout = SettinsStore.autoLogout;
			this.autoLogout.trigger = ko.observable(Enums.SaveSettingsStep.Idle);

			this.autoLogoutOptions = ko.computed(function () {
				Translator.trigger();
				return [
					{'id': 0, 'name': Translator.i18n('SETTINGS_SECURITY/AUTOLOGIN_NEVER_OPTION_NAME')},
					{'id': 5, 'name': Translator.i18n('SETTINGS_SECURITY/AUTOLOGIN_MINUTES_OPTION_NAME', {'MINUTES': 5})},
					{'id': 10, 'name': Translator.i18n('SETTINGS_SECURITY/AUTOLOGIN_MINUTES_OPTION_NAME', {'MINUTES': 10})},
					{'id': 30, 'name': Translator.i18n('SETTINGS_SECURITY/AUTOLOGIN_MINUTES_OPTION_NAME', {'MINUTES': 30})},
					{'id': 60, 'name': Translator.i18n('SETTINGS_SECURITY/AUTOLOGIN_MINUTES_OPTION_NAME', {'MINUTES': 60})},
					{'id': 60 * 2, 'name': Translator.i18n('SETTINGS_SECURITY/AUTOLOGIN_HOURS_OPTION_NAME', {'HOURS': 2})},
					{'id': 60 * 5, 'name': Translator.i18n('SETTINGS_SECURITY/AUTOLOGIN_HOURS_OPTION_NAME', {'HOURS': 5})},
					{'id': 60 * 10, 'name': Translator.i18n('SETTINGS_SECURITY/AUTOLOGIN_HOURS_OPTION_NAME', {'HOURS': 10})}
				];
			});
		}

		SecurityUserSettings.prototype.configureTwoFactor = function ()
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/TwoFactorConfiguration */ 98));
		};

		SecurityUserSettings.prototype.onBuild = function ()
		{
			if (this.capaAutoLogout)
			{
				var self = this;

				_.delay(function () {

					var
						f0 = Utils.settingsSaveHelperSimpleFunction(self.autoLogout.trigger, self)
					;

					self.autoLogout.subscribe(function (sValue) {
						Remote.saveSettings(f0, {
							'AutoLogout': Utils.pInt(sValue)
						});
					});

				});
			}
		};

		module.exports = SecurityUserSettings;

	}());

/***/ },
/* 143 */
/*!*************************************!*\
  !*** ./dev/Settings/User/Social.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		/**
		 * @constructor
		 */
		function SocialUserSettings()
		{
			var
				Utils = __webpack_require__(/*! Common/Utils */ 0),
				SocialStore = __webpack_require__(/*! Stores/Social */ 33)
			;

			this.googleEnable = SocialStore.google.enabled;
			this.googleEnableAuth = SocialStore.google.capa.auth;
			this.googleEnableAuthFast = SocialStore.google.capa.authFast;
			this.googleEnableDrive = SocialStore.google.capa.drive;
			this.googleEnablePreview = SocialStore.google.capa.preview;

			this.googleActions = SocialStore.google.loading;
			this.googleLoggined = SocialStore.google.loggined;
			this.googleUserName = SocialStore.google.userName;

			this.facebookEnable = SocialStore.facebook.enabled;

			this.facebookActions = SocialStore.facebook.loading;
			this.facebookLoggined = SocialStore.facebook.loggined;
			this.facebookUserName = SocialStore.facebook.userName;

			this.twitterEnable = SocialStore.twitter.enabled;

			this.twitterActions = SocialStore.twitter.loading;
			this.twitterLoggined = SocialStore.twitter.loggined;
			this.twitterUserName = SocialStore.twitter.userName;

			this.connectGoogle = Utils.createCommand(this, function () {
				if (!this.googleLoggined())
				{
					__webpack_require__(/*! App/User */ 6).default.googleConnect();
				}
			}, function () {
				return !this.googleLoggined() && !this.googleActions();
			});

			this.disconnectGoogle = Utils.createCommand(this, function () {
				__webpack_require__(/*! App/User */ 6).default.googleDisconnect();
			});

			this.connectFacebook = Utils.createCommand(this, function () {
				if (!this.facebookLoggined())
				{
					__webpack_require__(/*! App/User */ 6).default.facebookConnect();
				}
			}, function () {
				return !this.facebookLoggined() && !this.facebookActions();
			});

			this.disconnectFacebook = Utils.createCommand(this, function () {
				__webpack_require__(/*! App/User */ 6).default.facebookDisconnect();
			});

			this.connectTwitter = Utils.createCommand(this, function () {
				if (!this.twitterLoggined())
				{
					__webpack_require__(/*! App/User */ 6).default.twitterConnect();
				}
			}, function () {
				return !this.twitterLoggined() && !this.twitterActions();
			});

			this.disconnectTwitter = Utils.createCommand(this, function () {
				__webpack_require__(/*! App/User */ 6).default.twitterDisconnect();
			});
		}

		module.exports = SocialUserSettings;

	}());

/***/ },
/* 144 */
/*!****************************************!*\
  !*** ./dev/Settings/User/Templates.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			ko = __webpack_require__(/*! ko */ 1),

			Translator = __webpack_require__(/*! Common/Translator */ 5),

			TemplateStore = __webpack_require__(/*! Stores/User/Template */ 92),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14)
		;

		/**
		 * @constructor
		 */
		function TemplatesUserSettings()
		{
			this.templates = TemplateStore.templates;

			this.processText = ko.computed(function () {
				return TemplateStore.templates.loading() ? Translator.i18n('SETTINGS_TEMPLETS/LOADING_PROCESS') : '';
			}, this);

			this.visibility = ko.computed(function () {
				return '' === this.processText() ? 'hidden' : 'visible';
			}, this);

			this.templateForDeletion = ko.observable(null).deleteAccessHelper();
		}

		TemplatesUserSettings.prototype.scrollableOptions = function (sWrapper)
		{
			return {
				handle: '.drag-handle',
				containment: sWrapper || 'parent',
				axis: 'y'
			};
		};

		TemplatesUserSettings.prototype.addNewTemplate = function ()
		{
			__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Template */ 97));
		};

		TemplatesUserSettings.prototype.editTemplate = function (oTemplateItem)
		{
			if (oTemplateItem)
			{
				__webpack_require__(/*! Knoin/Knoin */ 4).showScreenPopup(__webpack_require__(/*! View/Popup/Template */ 97), [oTemplateItem]);
			}
		};

		/**
		 * @param {AccountModel} oTemplateToRemove
		 */
		TemplatesUserSettings.prototype.deleteTemplate = function (oTemplateToRemove)
		{
			if (oTemplateToRemove && oTemplateToRemove.deleteAccess())
			{
				this.templateForDeletion(null);

				var
					self = this,
					fRemoveAccount = function (oAccount) {
						return oTemplateToRemove === oAccount;
					}
				;

				if (oTemplateToRemove)
				{
					this.templates.remove(fRemoveAccount);

					Remote.templateDelete(function () {
						self.reloadTemplates();
					}, oTemplateToRemove.id);
				}
			}
		};

		TemplatesUserSettings.prototype.reloadTemplates = function ()
		{
			__webpack_require__(/*! App/User */ 6).default.templates();
		};

		TemplatesUserSettings.prototype.onBuild = function (oDom)
		{
			var self = this;

			oDom
				.on('click', '.templates-list .template-item .e-action', function () {
					var oTemplateItem = ko.dataFor(this);
					if (oTemplateItem)
					{
						self.editTemplate(oTemplateItem);
					}
				})
			;

			this.reloadTemplates();
		};

		module.exports = TemplatesUserSettings;

	}());

/***/ },
/* 145 */
/*!*************************************!*\
  !*** ./dev/Settings/User/Themes.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),
			ko = __webpack_require__(/*! ko */ 1),

			Jua = __webpack_require__(/*! Jua */ 82),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Links = __webpack_require__(/*! Common/Links */ 12),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			ThemeStore = __webpack_require__(/*! Stores/Theme */ 41),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			
			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14)
		;

		/**
		 * @constructor
		 */
		function ThemesUserSettings()
		{
			this.theme = ThemeStore.theme;
			this.themes = ThemeStore.themes;
			this.themesObjects = ko.observableArray([]);

			this.background = {};
			this.background.name = ThemeStore.themeBackgroundName;
			this.background.hash = ThemeStore.themeBackgroundHash;
			this.background.uploaderButton = ko.observable(null);
			this.background.loading = ko.observable(false);
			this.background.error = ko.observable('');

			this.capaUserBackground = ko.observable(Settings.capa(Enums.Capa.UserBackground));

			this.themeTrigger = ko.observable(Enums.SaveSettingsStep.Idle).extend({'throttle': 100});

			this.iTimer = 0;
			this.oThemeAjaxRequest = null;

			this.theme.subscribe(function (sValue) {

				_.each(this.themesObjects(), function (oTheme) {
					oTheme.selected(sValue === oTheme.name);
				});

				Utils.changeTheme(sValue, this.themeTrigger);

				Remote.saveSettings(null, {
					'Theme': sValue
				});

			}, this);

			this.background.hash.subscribe(function (sValue) {

				var $oBg = $('#rl-bg');
				if (!sValue)
				{
					if ($oBg.data('backstretch'))
					{
						$oBg.backstretch('destroy').attr('style', '');
					}
				}
				else
				{
					$('#rl-bg').attr('style', 'background-image: none !important;').backstretch(
						Links.userBackground(sValue), {
							'fade': 1000, 'centeredX': true, 'centeredY': true
						}).removeAttr('style');
				}

			}, this);
		}

		ThemesUserSettings.prototype.onBuild = function ()
		{
			var sCurrentTheme = this.theme();
			this.themesObjects(_.map(this.themes(), function (sTheme) {
				return {
					'name': sTheme,
					'nameDisplay': Utils.convertThemeName(sTheme),
					'selected': ko.observable(sTheme === sCurrentTheme),
					'themePreviewSrc': Links.themePreviewLink(sTheme)
				};
			}));

			this.initUploader();
		};

		ThemesUserSettings.prototype.onShow = function ()
		{
			this.background.error('');
		};

		ThemesUserSettings.prototype.clearBackground = function ()
		{
			if (this.capaUserBackground())
			{
				var self = this;
				Remote.clearUserBackground(function () {
					self.background.name('');
					self.background.hash('');
				});
			}
		};

		ThemesUserSettings.prototype.initUploader = function ()
		{
			if (this.background.uploaderButton() && this.capaUserBackground())
			{
				var
					oJua = new Jua({
						'action': Links.uploadBackground(),
						'name': 'uploader',
						'queueSize': 1,
						'multipleSizeLimit': 1,
						'disableDragAndDrop': true,
						'disableMultiple': true,
						'clickElement': this.background.uploaderButton()
					})
				;

				oJua
					.on('onStart', _.bind(function () {

						this.background.loading(true);
						this.background.error('');

						return true;

					}, this))
					.on('onComplete', _.bind(function (sId, bResult, oData) {

						this.background.loading(false);

						if (bResult && sId && oData && oData.Result && oData.Result.Name && oData.Result.Hash)
						{
							this.background.name(oData.Result.Name);
							this.background.hash(oData.Result.Hash);
						}
						else
						{
							this.background.name('');
							this.background.hash('');

							var sError = '';
							if (oData.ErrorCode)
							{
								switch (oData.ErrorCode)
								{
									case Enums.UploadErrorCode.FileIsTooBig:
										sError = Translator.i18n('SETTINGS_THEMES/ERROR_FILE_IS_TOO_BIG');
										break;
									case Enums.UploadErrorCode.FileType:
										sError = Translator.i18n('SETTINGS_THEMES/ERROR_FILE_TYPE_ERROR');
										break;
								}
							}

							if (!sError && oData.ErrorMessage)
							{
								sError = oData.ErrorMessage;
							}

							this.background.error(sError || Translator.i18n('SETTINGS_THEMES/ERROR_UNKNOWN'));
						}

						return true;

					}, this))
				;
			}
		};

		module.exports = ThemesUserSettings;

	}());

/***/ },
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
/*!*****************************************!*\
  !*** ./dev/View/Popup/AddOpenPgpKey.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Utils = __webpack_require__(/*! Common/Utils */ 0),

			PgpStore = __webpack_require__(/*! Stores/User/Pgp */ 32),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function AddOpenPgpKeyPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsAddOpenPgpKey');

			this.key = ko.observable('');
			this.key.error = ko.observable(false);
			this.key.focus = ko.observable(false);

			this.key.subscribe(function () {
				this.key.error(false);
			}, this);

			this.addOpenPgpKeyCommand = Utils.createCommand(this, function () {

				var
					iCount = 30,
					aMatch = null,
					sKey = Utils.trim(this.key()),
					oReg = /[\-]{3,6}BEGIN[\s]PGP[\s](PRIVATE|PUBLIC)[\s]KEY[\s]BLOCK[\-]{3,6}[\s\S]+?[\-]{3,6}END[\s]PGP[\s](PRIVATE|PUBLIC)[\s]KEY[\s]BLOCK[\-]{3,6}/gi,
					oOpenpgpKeyring = PgpStore.openpgpKeyring
				;

				if (/[\n]/.test(sKey))
				{
					sKey = sKey.replace(/[\r]+/g, '')
						.replace(/[\n]{2,}/g, '\n\n');
				}

				this.key.error('' === sKey);

				if (!oOpenpgpKeyring || this.key.error())
				{
					return false;
				}

				do
				{
					aMatch = oReg.exec(sKey);
					if (!aMatch || 0 > iCount)
					{
						break;
					}

					if (aMatch[0] && aMatch[1] && aMatch[2] && aMatch[1] === aMatch[2])
					{
						if ('PRIVATE' === aMatch[1])
						{
							oOpenpgpKeyring.privateKeys.importKey(aMatch[0]);
						}
						else if ('PUBLIC' === aMatch[1])
						{
							oOpenpgpKeyring.publicKeys.importKey(aMatch[0]);
						}
					}

					iCount--;
				}
				while (true);

				oOpenpgpKeyring.store();

				__webpack_require__(/*! App/User */ 6).default.reloadOpenPgpKeys();
				Utils.delegateRun(this, 'cancelCommand');

				return true;
			});

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/AddOpenPgpKey', 'PopupsAddOpenPgpKeyViewModel'], AddOpenPgpKeyPopupView);
		_.extend(AddOpenPgpKeyPopupView.prototype, AbstractView.prototype);

		AddOpenPgpKeyPopupView.prototype.clearPopup = function ()
		{
			this.key('');
			this.key.error(false);
		};

		AddOpenPgpKeyPopupView.prototype.onShow = function ()
		{
			this.clearPopup();
		};

		AddOpenPgpKeyPopupView.prototype.onShowWithDelay = function ()
		{
			this.key.focus(true);
		};

		module.exports = AddOpenPgpKeyPopupView;

	}());

/***/ },
/* 151 */
/*!******************************************!*\
  !*** ./dev/View/Popup/AdvancedSearch.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			MessageStore = __webpack_require__(/*! Stores/User/Message */ 31),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function AdvancedSearchPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsAdvancedSearch');

			this.fromFocus = ko.observable(false);

			this.from = ko.observable('');
			this.to = ko.observable('');
			this.subject = ko.observable('');
			this.text = ko.observable('');
			this.selectedDateValue = ko.observable(-1);

			this.hasAttachment = ko.observable(false);
			this.starred = ko.observable(false);
			this.unseen = ko.observable(false);

			this.searchCommand = Utils.createCommand(this, function () {

				var sSearch = this.buildSearchString();
				if ('' !== sSearch)
				{
					MessageStore.mainMessageListSearch(sSearch);
				}

				this.cancelCommand();
			});

			this.selectedDates = ko.computed(function () {
				Translator.trigger();
				return [
					{'id': -1, 'name': Translator.i18n('SEARCH/LABEL_ADV_DATE_ALL')},
					{'id': 3, 'name': Translator.i18n('SEARCH/LABEL_ADV_DATE_3_DAYS')},
					{'id': 7, 'name': Translator.i18n('SEARCH/LABEL_ADV_DATE_7_DAYS')},
					{'id': 30, 'name': Translator.i18n('SEARCH/LABEL_ADV_DATE_MONTH')},
					{'id': 90, 'name': Translator.i18n('SEARCH/LABEL_ADV_DATE_3_MONTHS')},
					{'id': 180, 'name': Translator.i18n('SEARCH/LABEL_ADV_DATE_6_MONTHS')},
					{'id': 365, 'name': Translator.i18n('SEARCH/LABEL_ADV_DATE_YEAR')}
				];
			}, this);

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/AdvancedSearch', 'PopupsAdvancedSearchViewModel'], AdvancedSearchPopupView);
		_.extend(AdvancedSearchPopupView.prototype, AbstractView.prototype);

		AdvancedSearchPopupView.prototype.buildSearchStringValue = function (sValue)
		{
			if (-1 < sValue.indexOf(' '))
			{
				sValue = '"' + sValue + '"';
			}

			return sValue;
		};

		AdvancedSearchPopupView.prototype.buildSearchString = function ()
		{
			var
				aResult = [],
				sFrom = Utils.trim(this.from()),
				sTo = Utils.trim(this.to()),
				sSubject = Utils.trim(this.subject()),
				sText = Utils.trim(this.text()),
				aIs = [],
				aHas = []
			;

			if (sFrom && '' !== sFrom)
			{
				aResult.push('from:' + this.buildSearchStringValue(sFrom));
			}

			if (sTo && '' !== sTo)
			{
				aResult.push('to:' + this.buildSearchStringValue(sTo));
			}

			if (sSubject && '' !== sSubject)
			{
				aResult.push('subject:' + this.buildSearchStringValue(sSubject));
			}

			if (this.hasAttachment())
			{
				aHas.push('attachment');
			}

			if (this.unseen())
			{
				aIs.push('unseen');
			}

			if (this.starred())
			{
				aIs.push('flagged');
			}

			if (0 < aHas.length)
			{
				aResult.push('has:' + aHas.join(','));
			}

			if (0 < aIs.length)
			{
				aResult.push('is:' + aIs.join(','));
			}

			if (-1 < this.selectedDateValue())
			{
				aResult.push('date:' + __webpack_require__(/*! Common/Momentor */ 25).searchSubtractFormatDateHelper(this.selectedDateValue()) + '/');
			}

			if (sText && '' !== sText)
			{
				aResult.push('text:' + this.buildSearchStringValue(sText));
			}

			return Utils.trim(aResult.join(' '));
		};

		AdvancedSearchPopupView.prototype.clearPopup = function ()
		{
			this.from('');
			this.to('');
			this.subject('');
			this.text('');

			this.selectedDateValue(-1);
			this.hasAttachment(false);
			this.starred(false);
			this.unseen(false);

			this.fromFocus(true);
		};

		AdvancedSearchPopupView.prototype.onShow = function ()
		{
			this.clearPopup();
		};

		AdvancedSearchPopupView.prototype.onShowWithDelay = function ()
		{
			this.fromFocus(true);
		};

		module.exports = AdvancedSearchPopupView;

	}());

/***/ },
/* 152 */
/*!******************************************!*\
  !*** ./dev/View/Popup/ComposeOpenPgp.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),
			ko = __webpack_require__(/*! ko */ 1),
			key = __webpack_require__(/*! key */ 18),

			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			PgpStore = __webpack_require__(/*! Stores/User/Pgp */ 32),

			EmailModel = __webpack_require__(/*! Model/Email */ 29),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function ComposeOpenPgpPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsComposeOpenPgp');

			var self = this;

			this.publicKeysOptionsCaption = Translator.i18n('PGP_NOTIFICATIONS/ADD_A_PUBLICK_KEY');
			this.privateKeysOptionsCaption = Translator.i18n('PGP_NOTIFICATIONS/SELECT_A_PRIVATE_KEY');

			this.notification = ko.observable('');

			this.sign = ko.observable(false);
			this.encrypt = ko.observable(false);

			this.password = ko.observable('');
			this.password.focus = ko.observable(false);
			this.buttonFocus = ko.observable(false);

			this.text = ko.observable('');
			this.selectedPrivateKey = ko.observable(null);
			this.selectedPublicKey = ko.observable(null);

			this.signKey = ko.observable(null);
			this.encryptKeys = ko.observableArray([]);

			this.encryptKeysView = ko.computed(function () {
				return _.compact(_.map(this.encryptKeys(), function (oKey) {
					return oKey ? oKey.key : null;
				}));
			}, this);

			this.privateKeysOptions = ko.computed(function () {
				return _.compact(_.flatten(_.map(PgpStore.openpgpkeysPrivate(), function (oKey, iIndex) {
					return self.signKey() && self.signKey().key.id === oKey.id ? null :
						_.map(oKey.users, function (sUser) {
							return {
								'id': oKey.guid,
								'name': '(' + oKey.id.substr(-8).toUpperCase() + ') ' + sUser,
								'key': oKey,
								'class': iIndex % 2 ? 'odd' : 'even'
							};
					});
				}), true));
			});

			this.publicKeysOptions = ko.computed(function () {
				return _.compact(_.flatten(_.map(PgpStore.openpgpkeysPublic(), function (oKey, iIndex) {
					return -1 < Utils.inArray(oKey, self.encryptKeysView()) ? null :
						_.map(oKey.users, function (sUser) {
							return {
								'id': oKey.guid,
								'name': '(' + oKey.id.substr(-8).toUpperCase() + ') ' + sUser,
								'key': oKey,
								'class': iIndex % 2 ? 'odd' : 'even'
							};
					});
				}), true));
			});

			this.submitRequest = ko.observable(false);

			this.resultCallback = null;

			// commands
			this.doCommand = Utils.createCommand(this, function () {

				var
					bResult = true,
					oPrivateKey = null,
					aPrivateKeys = [],
					aPublicKeys = []
				;

				this.submitRequest(true);

				if (bResult && this.sign())
				{
					if (!this.signKey())
					{
						this.notification(Translator.i18n('PGP_NOTIFICATIONS/NO_PRIVATE_KEY_FOUND'));
						bResult = false;
					}
					else if (!this.signKey().key)
					{
						this.notification(Translator.i18n('PGP_NOTIFICATIONS/NO_PRIVATE_KEY_FOUND_FOR', {
							'EMAIL': this.signKey().email
						}));

						bResult = false;
					}

					if (bResult)
					{
						aPrivateKeys = this.signKey().key.getNativeKeys();
						oPrivateKey = aPrivateKeys[0] || null;

						try
						{
							if (oPrivateKey)
							{
								oPrivateKey.decrypt(Utils.pString(this.password()));
							}
						}
						catch (e)
						{
							oPrivateKey = null;
						}

						if (!oPrivateKey)
						{
							this.notification(Translator.i18n('PGP_NOTIFICATIONS/NO_PRIVATE_KEY_FOUND'));
							bResult = false;
						}
					}
				}

				if (bResult && this.encrypt())
				{
					if (0 === this.encryptKeys().length)
					{
						this.notification(Translator.i18n('PGP_NOTIFICATIONS/NO_PUBLIC_KEYS_FOUND'));
						bResult = false;
					}
					else if (this.encryptKeys())
					{
						aPublicKeys = [];

						_.each(this.encryptKeys(), function (oKey) {
							if (oKey && oKey.key)
							{
								aPublicKeys = aPublicKeys.concat(_.compact(_.flatten(oKey.key.getNativeKeys())));
							}
							else if (oKey && oKey.email)
							{
								self.notification(Translator.i18n('PGP_NOTIFICATIONS/NO_PUBLIC_KEYS_FOUND_FOR', {
									'EMAIL': oKey.email
								}));

								bResult = false;
							}
						});

						if (bResult && (0 === aPublicKeys.length || this.encryptKeys().length !== aPublicKeys.length))
						{
							bResult = false;
						}
					}
				}

				if (bResult && self.resultCallback)
				{
					_.delay(function () {

						var oPromise = null;

						try
						{
							if (oPrivateKey && 0 === aPublicKeys.length)
							{
								oPromise = PgpStore.openpgp.sign({
									data: self.text(),
									privateKeys: [oPrivateKey]
								});
							}
							else if (oPrivateKey && 0 < aPublicKeys.length)
							{
								oPromise = PgpStore.openpgp.encrypt({
									data: self.text(),
									publicKeys: aPublicKeys,
									privateKeys: [oPrivateKey]
								});
							}
							else if (!oPrivateKey && 0 < aPublicKeys.length)
							{
								oPromise = PgpStore.openpgp.encrypt({
									data: self.text(),
									publicKeys: aPublicKeys
								});
							}
						}
						catch (e)
						{
							Utils.log(e);

							self.notification(Translator.i18n('PGP_NOTIFICATIONS/PGP_ERROR', {
								'ERROR': '' + e
							}));
						}

						if (oPromise)
						{
							try
							{
								oPromise.then(function (mData) {

									self.resultCallback(mData.data);
									self.cancelCommand();

								})['catch'](function (e) {
									self.notification(Translator.i18n('PGP_NOTIFICATIONS/PGP_ERROR', {
										'ERROR': '' + e
									}));
								});
							}
							catch (e)
							{
								self.notification(Translator.i18n('PGP_NOTIFICATIONS/PGP_ERROR', {
									'ERROR': '' + e
								}));
							}
						}

						self.submitRequest(false);

					}, 10);
				}
				else
				{
					self.submitRequest(false);
				}

				return bResult;

			}, function () {
				return !this.submitRequest() &&	(this.sign() || this.encrypt());
			});

			this.selectCommand = Utils.createCommand(this, function () {

				var
					sKeyId = this.selectedPrivateKey(),
					oKey = null,
					oOption = sKeyId ? _.find(this.privateKeysOptions(), function (oItem) {
						return oItem && sKeyId === oItem.id;
					}) : null
				;

				if (oOption)
				{
					oKey = {
						'empty': !oOption.key,
						'selected': ko.observable(!!oOption.key),
						'users': oOption.key.users,
						'hash': oOption.key.id.substr(-8).toUpperCase(),
						'key': oOption.key
					};

					this.signKey(oKey);
				}
			});

			this.addCommand = Utils.createCommand(this, function () {

				var
					sKeyId = this.selectedPublicKey(),
					aKeys = this.encryptKeys(),
					oOption = sKeyId ? _.find(this.publicKeysOptions(), function (oItem) {
						return oItem && sKeyId === oItem.id;
					}) : null
				;

				if (oOption)
				{
					aKeys.push({
						'empty': !oOption.key,
						'selected': ko.observable(!!oOption.key),
						'removable': ko.observable(!this.sign() || !this.signKey() || this.signKey().key.id !== oOption.key.id),
						'users': oOption.key.users,
						'hash': oOption.key.id.substr(-8).toUpperCase(),
						'key': oOption.key
					});

					this.encryptKeys(aKeys);
				}
			});

			this.updateCommand = Utils.createCommand(this, function () {

				var self = this;

				_.each(this.encryptKeys(), function (oKey) {
					oKey.removable(!self.sign() || !self.signKey() || self.signKey().key.id !== oKey.key.id);
				});

			});

			this.selectedPrivateKey.subscribe(function (sValue) {
				if (sValue)
				{
					this.selectCommand();
					this.updateCommand();
				}
			}, this);

			this.selectedPublicKey.subscribe(function (sValue) {
				if (sValue)
				{
					this.addCommand();
				}
			}, this);

			this.sDefaultKeyScope = Enums.KeyState.PopupComposeOpenPGP;

			this.defautOptionsAfterRender = Utils.defautOptionsAfterRender;

			this.addOptionClass = function (oDomOption, oItem) {

				self.defautOptionsAfterRender(oDomOption, oItem);

				if (oItem && !Utils.isUnd(oItem['class']) && oDomOption)
				{
					$(oDomOption).addClass(oItem['class']);
				}
			};

			this.deletePublickKey = _.bind(this.deletePublickKey, this);

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/ComposeOpenPgp', 'PopupsComposeOpenPgpViewModel'], ComposeOpenPgpPopupView);
		_.extend(ComposeOpenPgpPopupView.prototype, AbstractView.prototype);

		ComposeOpenPgpPopupView.prototype.deletePublickKey = function (oKey)
		{
			this.encryptKeys.remove(oKey);
		};

		ComposeOpenPgpPopupView.prototype.clearPopup = function ()
		{
			this.notification('');

			this.sign(false);
			this.encrypt(false);

			this.password('');
			this.password.focus(false);
			this.buttonFocus(false);

			this.signKey(null);
			this.encryptKeys([]);
			this.text('');

			this.resultCallback = null;
		};

		ComposeOpenPgpPopupView.prototype.onBuild = function ()
		{
			key('tab,shift+tab', Enums.KeyState.PopupComposeOpenPGP, _.bind(function () {

				switch (true)
				{
					case this.password.focus():
						this.buttonFocus(true);
						break;
					case this.buttonFocus():
						this.password.focus(true);
						break;
				}

				return false;

			}, this));
		};

		ComposeOpenPgpPopupView.prototype.onHideWithDelay = function ()
		{
			this.clearPopup();
		};

		ComposeOpenPgpPopupView.prototype.onShowWithDelay = function ()
		{
			if (this.sign())
			{
				this.password.focus(true);
			}
			else
			{
				this.buttonFocus(true);
			}
		};

		ComposeOpenPgpPopupView.prototype.onShow = function (fCallback, sText, oIdentity, sTo, sCc, sBcc)
		{
			this.clearPopup();

			var
				self = this,
				aRec = [],
				sEmail = '',
				aKeys = [],
				oEmail = new EmailModel()
			;

			this.resultCallback = fCallback;

			if ('' !== sTo)
			{
				aRec.push(sTo);
			}

			if ('' !== sCc)
			{
				aRec.push(sCc);
			}

			if ('' !== sBcc)
			{
				aRec.push(sBcc);
			}

			aRec = aRec.join(', ').split(',');
			aRec = _.compact(_.map(aRec, function (sValue) {
				oEmail.clear();
				oEmail.mailsoParse(Utils.trim(sValue));
				return '' === oEmail.email ? false : oEmail.email;
			}));

			if (oIdentity && oIdentity.email())
			{
				sEmail = oIdentity.email();
				aRec.unshift(sEmail);
				aKeys = PgpStore.findAllPrivateKeysByEmailNotNative(sEmail);
				if (aKeys && aKeys[0])
				{
					this.signKey({
						'users': aKeys[0].users || [sEmail],
						'hash': aKeys[0].id.substr(-8).toUpperCase(),
						'key': aKeys[0]
					});
				}
			}

			if (this.signKey())
			{
				this.sign(true);
			}

			if (aRec && 0 < aRec.length)
			{
				this.encryptKeys(_.uniq(_.compact(_.flatten(_.map(aRec, function (sEmail) {
					var aKeys = PgpStore.findAllPublicKeysByEmailNotNative(sEmail);
					return aKeys ? _.map(aKeys, function (oKey) {
						return {
							'empty': !oKey,
							'selected': ko.observable(!!oKey),
							'removable': ko.observable(!self.sign() || !self.signKey() || self.signKey().key.id !== oKey.id),
							'users': oKey ? (oKey.users || [sEmail]) : [sEmail],
							'hash': oKey ? oKey.id.substr(-8).toUpperCase() : '',
							'key': oKey
						};
					}) : [];
				}), true)), function (oEncryptKey) {
					return oEncryptKey.hash;
				}));

				if (0 < this.encryptKeys().length)
				{
					this.encrypt(true);
				}
			}

			this.text(sText);
		};

		module.exports = ComposeOpenPgpPopupView;

	}());


/***/ },
/* 153 */
/*!***************************************!*\
  !*** ./dev/View/Popup/FolderClear.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Cache = __webpack_require__(/*! Common/Cache */ 17),

			MessageStore = __webpack_require__(/*! Stores/User/Message */ 31),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function FolderClearPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsFolderClear');

			this.selectedFolder = ko.observable(null);
			this.clearingProcess = ko.observable(false);
			this.clearingError = ko.observable('');

			this.folderFullNameForClear = ko.computed(function () {
				var oFolder = this.selectedFolder();
				return oFolder ? oFolder.printableFullName() : '';
			}, this);

			this.folderNameForClear = ko.computed(function () {
				var oFolder = this.selectedFolder();
				return oFolder ? oFolder.localName() : '';
			}, this);

			this.dangerDescHtml = ko.computed(function () {
				return Translator.i18n('POPUPS_CLEAR_FOLDER/DANGER_DESC_HTML_1', {
					'FOLDER': this.folderNameForClear()
				});
			}, this);

			this.clearCommand = Utils.createCommand(this, function () {

				var
					self = this,
					oFolderToClear = this.selectedFolder()
				;

				if (oFolderToClear)
				{
					MessageStore.message(null);
					MessageStore.messageList([]);

					this.clearingProcess(true);

					oFolderToClear.messageCountAll(0);
					oFolderToClear.messageCountUnread(0);

					Cache.setFolderHash(oFolderToClear.fullNameRaw, '');

					Remote.folderClear(function (sResult, oData) {

						self.clearingProcess(false);
						if (Enums.StorageResultType.Success === sResult && oData && oData.Result)
						{
							__webpack_require__(/*! App/User */ 6).default.reloadMessageList(true);
							self.cancelCommand();
						}
						else
						{
							if (oData && oData.ErrorCode)
							{
								self.clearingError(Translator.getNotification(oData.ErrorCode));
							}
							else
							{
								self.clearingError(Translator.getNotification(Enums.Notification.MailServerError));
							}
						}
					}, oFolderToClear.fullNameRaw);
				}

			}, function () {

				var
					oFolder = this.selectedFolder(),
					bIsClearing = this.clearingProcess()
				;

				return !bIsClearing && null !== oFolder;

			});

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/FolderClear', 'PopupsFolderClearViewModel'], FolderClearPopupView);
		_.extend(FolderClearPopupView.prototype, AbstractView.prototype);

		FolderClearPopupView.prototype.clearPopup = function ()
		{
			this.clearingProcess(false);
			this.selectedFolder(null);
		};

		FolderClearPopupView.prototype.onShow = function (oFolder)
		{
			this.clearPopup();
			if (oFolder)
			{
				this.selectedFolder(oFolder);
			}
		};

		module.exports = FolderClearPopupView;

	}());


/***/ },
/* 154 */
/*!******************************************!*\
  !*** ./dev/View/Popup/MessageOpenPgp.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),
			key = __webpack_require__(/*! key */ 18),
			$ = __webpack_require__(/*! $ */ 13),

			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Enums = __webpack_require__(/*! Common/Enums */ 3),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function MessageOpenPgpPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsMessageOpenPgp');

			this.notification = ko.observable('');

			this.selectedKey = ko.observable(null);
			this.privateKeys = ko.observableArray([]);

			this.password = ko.observable('');
			this.password.focus = ko.observable(false);
			this.buttonFocus = ko.observable(false);

			this.resultCallback = null;

			this.submitRequest = ko.observable(false);

			// commands
			this.doCommand = Utils.createCommand(this, function () {

				this.submitRequest(true);

	_.delay(_.bind(function() {

				var
					oPrivateKeys = [],
					oPrivateKey = null
				;

				try
				{
					if (this.resultCallback && this.selectedKey())
					{
						oPrivateKeys = this.selectedKey().getNativeKeys();
						oPrivateKey = oPrivateKeys && oPrivateKeys[0] ? oPrivateKeys[0] : null;

						if (oPrivateKey)
						{
							try
							{
								if (!oPrivateKey.decrypt(Utils.pString(this.password())))
								{
									Utils.log('Error: Private key cannot be decrypted');
									oPrivateKey = null;
								}
							}
							catch (e)
							{
								Utils.log(e);
								oPrivateKey = null;
							}
						}
						else
						{
							Utils.log('Error: Private key cannot be found');
						}
					}
				}
				catch (e)
				{
					Utils.log(e);
					oPrivateKey = null;
				}

				this.submitRequest(false);

				this.cancelCommand();
				this.resultCallback(oPrivateKey);

	}, this), 100);

			}, function () {
				return !this.submitRequest();
			});

			this.sDefaultKeyScope = Enums.KeyState.PopupMessageOpenPGP;

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/MessageOpenPgp'], MessageOpenPgpPopupView);
		_.extend(MessageOpenPgpPopupView.prototype, AbstractView.prototype);

		MessageOpenPgpPopupView.prototype.clearPopup = function ()
		{
			this.notification('');

			this.password('');
			this.password.focus(false);
			this.buttonFocus(false);

			this.selectedKey(false);
			this.submitRequest(false);

			this.resultCallback = null;
			this.privateKeys([]);
		};

		MessageOpenPgpPopupView.prototype.onBuild = function (oDom)
		{
			key('tab,shift+tab', Enums.KeyState.PopupMessageOpenPGP, _.bind(function () {

				switch (true)
				{
					case this.password.focus():
						this.buttonFocus(true);
						break;
					case this.buttonFocus():
						this.password.focus(true);
						break;
				}

				return false;

			}, this));

			var self = this;

			oDom
				.on('click', '.key-list__item', function () {

					oDom.find('.key-list__item .key-list__item__radio')
						.addClass('icon-radio-unchecked')
						.removeClass('icon-radio-checked')
					;

					$(this).find('.key-list__item__radio')
						.removeClass('icon-radio-unchecked')
						.addClass('icon-radio-checked')
					;

					self.selectedKey(ko.dataFor(this));

					self.password.focus(true);
				})
			;
		};

		MessageOpenPgpPopupView.prototype.onHideWithDelay = function ()
		{
			this.clearPopup();
		};

		MessageOpenPgpPopupView.prototype.onShowWithDelay = function ()
		{
			this.password.focus(true);
	//		this.buttonFocus(true);
		};

		MessageOpenPgpPopupView.prototype.onShow = function (fCallback, aPrivateKeys)
		{
			this.clearPopup();

			this.resultCallback = fCallback;
			this.privateKeys(aPrivateKeys);

			if (this.viewModelDom)
			{
				this.viewModelDom.find('.key-list__item').first().click();
			}
		};

		module.exports = MessageOpenPgpPopupView;

	}());


/***/ },
/* 155 */
/*!*****************************************!*\
  !*** ./dev/View/Popup/NewOpenPgpKey.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Utils = __webpack_require__(/*! Common/Utils */ 0),

			PgpStore = __webpack_require__(/*! Stores/User/Pgp */ 32),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function NewOpenPgpKeyPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsNewOpenPgpKey');

			this.email = ko.observable('');
			this.email.focus = ko.observable('');
			this.email.error = ko.observable(false);

			this.name = ko.observable('');
			this.password = ko.observable('');
			this.keyBitLength = ko.observable(2048);

			this.submitRequest = ko.observable(false);

			this.email.subscribe(function () {
				this.email.error(false);
			}, this);

			this.generateOpenPgpKeyCommand = Utils.createCommand(this, function () {

				var
					self = this,
					oUserId = {},
					oOpenpgpKeyring = PgpStore.openpgpKeyring
				;

				this.email.error('' === Utils.trim(this.email()));
				if (!oOpenpgpKeyring || this.email.error())
				{
					return false;
				}

				oUserId['email'] = this.email();
				if ('' !== this.name())
				{
					oUserId['name'] = this.name();
				}

				this.submitRequest(true);

				_.delay(function () {

					var mPromise = false;

					try {

						mPromise = PgpStore.openpgp.generateKey({
							'userIds': [oUserId],
							'numBits': Utils.pInt(self.keyBitLength()),
							'passphrase': Utils.trim(self.password())
						});

						mPromise.then(function (mKeyPair) {

							self.submitRequest(false);

							if (mKeyPair && mKeyPair.privateKeyArmored)
							{
								oOpenpgpKeyring.privateKeys.importKey(mKeyPair.privateKeyArmored);
								oOpenpgpKeyring.publicKeys.importKey(mKeyPair.publicKeyArmored);

								oOpenpgpKeyring.store();

								__webpack_require__(/*! App/User */ 6).default.reloadOpenPgpKeys();
								Utils.delegateRun(self, 'cancelCommand');
							}

						})['catch'](function() {
							self.submitRequest(false);
						});
					}
					catch (e)
					{
						Utils.log(e);
						self.submitRequest(false);
					}

				}, 100);

				return true;
			});

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/NewOpenPgpKey', 'PopupsNewOpenPgpKeyViewModel'], NewOpenPgpKeyPopupView);
		_.extend(NewOpenPgpKeyPopupView.prototype, AbstractView.prototype);

		NewOpenPgpKeyPopupView.prototype.clearPopup = function ()
		{
			this.name('');
			this.password('');

			this.email('');
			this.email.error(false);
			this.keyBitLength(2048);
		};

		NewOpenPgpKeyPopupView.prototype.onShow = function ()
		{
			this.clearPopup();
		};

		NewOpenPgpKeyPopupView.prototype.onShowWithDelay = function ()
		{
			this.email.focus(true);
		};

		module.exports = NewOpenPgpKeyPopupView;

	}());

/***/ },
/* 156 */,
/* 157 */
/*!*****************************************!*\
  !*** ./dev/View/Popup/TwoFactorTest.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function TwoFactorTestPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsTwoFactorTest');

			var self = this;

			this.code = ko.observable('');
			this.code.focused = ko.observable(false);
			this.code.status = ko.observable(null);

			this.koTestedTrigger = null;

			this.testing = ko.observable(false);

			// commands
			this.testCode = Utils.createCommand(this, function () {

				this.testing(true);
				Remote.testTwoFactor(function (sResult, oData) {

					self.testing(false);
					self.code.status(Enums.StorageResultType.Success === sResult && oData && oData.Result ? true : false);

					if (self.koTestedTrigger && self.code.status())
					{
						self.koTestedTrigger(true);
					}

				}, this.code());

			}, function () {
				return '' !== this.code() && !this.testing();
			});

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/TwoFactorTest', 'PopupsTwoFactorTestViewModel'], TwoFactorTestPopupView);
		_.extend(TwoFactorTestPopupView.prototype, AbstractView.prototype);

		TwoFactorTestPopupView.prototype.clearPopup = function ()
		{
			this.code('');
			this.code.focused(false);
			this.code.status(null);
			this.testing(false);

			this.koTestedTrigger = null;
		};

		TwoFactorTestPopupView.prototype.onShow = function (koTestedTrigger)
		{
			this.clearPopup();

			this.koTestedTrigger = koTestedTrigger;
		};

		TwoFactorTestPopupView.prototype.onShowWithDelay = function ()
		{
			if (!Globals.bMobile)
			{
				this.code.focused(true);
			}
		};

		module.exports = TwoFactorTestPopupView;

	}());

/***/ },
/* 158 */
/*!******************************************!*\
  !*** ./dev/View/Popup/ViewOpenPgpKey.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),
			key = __webpack_require__(/*! key */ 18),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function ViewOpenPgpKeyPopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsViewOpenPgpKey');

			this.key = ko.observable('');
			this.keyDom = ko.observable(null);

			this.sDefaultKeyScope = Enums.KeyState.PopupViewOpenPGP;

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/ViewOpenPgpKey', 'PopupsViewOpenPgpKeyViewModel'], ViewOpenPgpKeyPopupView);
		_.extend(ViewOpenPgpKeyPopupView.prototype, AbstractView.prototype);

		ViewOpenPgpKeyPopupView.prototype.clearPopup = function ()
		{
			this.key('');
		};

		ViewOpenPgpKeyPopupView.prototype.selectKey = function ()
		{
			var oEl = this.keyDom();
			if (oEl)
			{
				Utils.selectElement(oEl);
			}
		};

		ViewOpenPgpKeyPopupView.prototype.onShow = function (oOpenPgpKey)
		{
			this.clearPopup();

			if (oOpenPgpKey)
			{
				this.key(oOpenPgpKey.armor);
			}
		};

		ViewOpenPgpKeyPopupView.prototype.onBuild = function ()
		{
			key('ctrl+a, command+a', Enums.KeyState.PopupViewOpenPGP, _.bind(function () {
				this.selectKey();
				return false;
			}, this));
		};

		module.exports = ViewOpenPgpKeyPopupView;

	}());

/***/ },
/* 159 */
/*!***************************************!*\
  !*** ./dev/View/Popup/WelcomePage.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Promises = __webpack_require__(/*! Promises/User/Ajax */ 40),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function WelcomePagePopupView()
		{
			AbstractView.call(this, 'Popups', 'PopupsWelcomePage');

			this.welcomePageURL = ko.observable('');

			this.closeFocused = ko.observable(false);

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/Popup/WelcomePage', 'WelcomePagePopupViewModel'], WelcomePagePopupView);
		_.extend(WelcomePagePopupView.prototype, AbstractView.prototype);

		WelcomePagePopupView.prototype.clearPopup = function ()
		{
			this.welcomePageURL('');
			this.closeFocused(false);
		};

		/**
		 * @param {string} sUrl
		 */
		WelcomePagePopupView.prototype.onShow = function (sUrl)
		{
			this.clearPopup();

			this.welcomePageURL(sUrl);
		};

		WelcomePagePopupView.prototype.onShowWithDelay = function ()
		{
			this.closeFocused(true);
		};

		WelcomePagePopupView.prototype.onHide = function ()
		{
			Promises.welcomeClose();
		};

		module.exports = WelcomePagePopupView;

	}());

/***/ },
/* 160 */
/*!********************************!*\
  !*** ./dev/View/User/Login.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			ko = __webpack_require__(/*! ko */ 1),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Links = __webpack_require__(/*! Common/Links */ 12),

			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Plugins = __webpack_require__(/*! Common/Plugins */ 22),

			LanguageStore = __webpack_require__(/*! Stores/Language */ 38),
			AppStore = __webpack_require__(/*! Stores/User/App */ 23),

			Local = __webpack_require__(/*! Storage/Client */ 46),
			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function LoginUserView()
		{
			AbstractView.call(this, 'Center', 'Login');

			this.welcome = ko.observable(!!Settings.settingsGet('UseLoginWelcomePage'));

			this.email = ko.observable('');
			this.password = ko.observable('');
			this.signMe = ko.observable(false);

			this.additionalCode = ko.observable('');
			this.additionalCode.error = ko.observable(false);
			this.additionalCode.errorAnimation = ko.observable(false).extend({'falseTimeout': 500});
			this.additionalCode.focused = ko.observable(false);
			this.additionalCode.visibility = ko.observable(false);
			this.additionalCodeSignMe = ko.observable(false);

			this.logoImg = Utils.trim(Settings.settingsGet('LoginLogo'));
			this.logoPowered = !!Settings.settingsGet('LoginPowered');
			this.loginDescription = Utils.trim(Settings.settingsGet('LoginDescription'));

			this.mobile = !!Settings.appSettingsGet('mobile');
			this.mobileDevice = !!Settings.appSettingsGet('mobileDevice');

			this.forgotPasswordLinkUrl = Settings.appSettingsGet('forgotPasswordLinkUrl');
			this.registrationLinkUrl = Settings.appSettingsGet('registrationLinkUrl');

			this.emailError = ko.observable(false);
			this.passwordError = ko.observable(false);

			this.emailErrorAnimation = ko.observable(false).extend({'falseTimeout': 500});
			this.passwordErrorAnimation = ko.observable(false).extend({'falseTimeout': 500});

			this.formHidden = ko.observable(false);

			this.formError = ko.computed(function () {
				return this.emailErrorAnimation() || this.passwordErrorAnimation() ||
					(this.additionalCode.visibility() && this.additionalCode.errorAnimation());
			}, this);

			this.emailFocus = ko.observable(false);
			this.passwordFocus = ko.observable(false);
			this.submitFocus = ko.observable(false);

			this.email.subscribe(function () {
				this.emailError(false);
				this.additionalCode('');
				this.additionalCode.visibility(false);
			}, this);

			this.password.subscribe(function () {
				this.passwordError(false);
			}, this);

			this.additionalCode.subscribe(function () {
				this.additionalCode.error(false);
			}, this);

			this.additionalCode.visibility.subscribe(function () {
				this.additionalCode.error(false);
			}, this);

			this.emailError.subscribe(function (bV) {
				this.emailErrorAnimation(!!bV);
			}, this);

			this.passwordError.subscribe(function (bV) {
				this.passwordErrorAnimation(!!bV);
			}, this);

			this.additionalCode.error.subscribe(function (bV) {
				this.additionalCode.errorAnimation(!!bV);
			}, this);

			this.submitRequest = ko.observable(false);
			this.submitError = ko.observable('');
			this.submitErrorAddidional = ko.observable('');

			this.submitError.subscribe(function (sValue) {
				if ('' === sValue)
				{
					this.submitErrorAddidional('');
				}
			}, this);

			this.allowLanguagesOnLogin = AppStore.allowLanguagesOnLogin;

			this.langRequest = ko.observable(false);
			this.language = LanguageStore.language;
			this.languages = LanguageStore.languages;

			this.bSendLanguage = false;

			this.languageFullName = ko.computed(function () {
				return Utils.convertLangName(this.language());
			}, this);

			this.signMeType = ko.observable(Enums.LoginSignMeType.Unused);

			this.signMeType.subscribe(function (iValue) {
				this.signMe(Enums.LoginSignMeType.DefaultOn === iValue);
			}, this);

			this.signMeVisibility = ko.computed(function () {
				return Enums.LoginSignMeType.Unused !== this.signMeType();
			}, this);

			this.submitCommand = Utils.createCommand(this, function () {

				Utils.triggerAutocompleteInputChange();

				this.emailError(false);
				this.passwordError(false);

				this.emailError('' === Utils.trim(this.email()));
				this.passwordError('' === Utils.trim(this.password()));

				if (this.additionalCode.visibility())
				{
					this.additionalCode.error(false);
					this.additionalCode.error('' === Utils.trim(this.additionalCode()));
				}

				if (this.emailError() || this.passwordError() ||
					(this.additionalCode.visibility() && this.additionalCode.error()))
				{
					switch (true)
					{
						case this.emailError():
							this.emailFocus(true);
							break;
						case this.passwordError():
							this.passwordFocus(true);
							break;
						case this.additionalCode.visibility() && this.additionalCode.error():
							this.additionalCode.focused(true);
							break;
					}

					return false;
				}

				var
					iPluginResultCode = 0,
					sPluginResultMessage = '',
					fSubmitResult = function (iResultCode, sResultMessage) {
						iPluginResultCode = iResultCode || 0;
						sPluginResultMessage = sResultMessage || '';
					}
				;

				Plugins.runHook('user-login-submit', [fSubmitResult]);
				if (0 < iPluginResultCode)
				{
					this.submitError(Translator.getNotification(iPluginResultCode));
					return false;
				}
				else if ('' !== sPluginResultMessage)
				{
					this.submitError(sPluginResultMessage);
					return false;
				}

				this.submitRequest(true);

				var
					self = this,
					sPassword = this.password(),

					fLoginRequest = _.bind(function (sPassword) {

						Remote.login(_.bind(function (sResult, oData) {

							if (Enums.StorageResultType.Success === sResult && oData && 'Login' === oData.Action)
							{
								if (oData.Result)
								{
									if (oData.TwoFactorAuth)
									{
										this.additionalCode('');
										this.additionalCode.visibility(true);
										this.submitRequest(false);

										_.delay(function(){
											self.additionalCode.focused(true);
										}, 100);
									}
									else if (oData.Admin)
									{
										__webpack_require__(/*! App/User */ 6).default.redirectToAdminPanel();
									}
									else
									{
										__webpack_require__(/*! App/User */ 6).default.loginAndLogoutReload(false);
									}
								}
								else if (oData.ErrorCode)
								{
									this.submitRequest(false);
									if (-1 < Utils.inArray(oData.ErrorCode, [Enums.Notification.InvalidInputArgument]))
									{
										oData.ErrorCode = Enums.Notification.AuthError;
									}

									this.submitError(Translator.getNotificationFromResponse(oData));

									if ('' === this.submitError())
									{
										this.submitError(Translator.getNotification(Enums.Notification.UnknownError));
									}
									else
									{
										if (oData.ErrorMessageAdditional)
										{
											this.submitErrorAddidional(oData.ErrorMessageAdditional);
										}
									}
								}
								else
								{
									this.submitRequest(false);
								}
							}
							else
							{
								this.submitRequest(false);
								this.submitError(Translator.getNotification(Enums.Notification.UnknownError));
							}

						}, this), this.email(), '', sPassword, !!this.signMe(),
							this.bSendLanguage ? this.language() : '',
							this.additionalCode.visibility() ? this.additionalCode() : '',
							this.additionalCode.visibility() ? !!this.additionalCodeSignMe() : false
						);

						Local.set(Enums.ClientSideKeyName.LastSignMe, !!this.signMe() ? '-1-' : '-0-');

					}, this)
				;

				if (Settings.appSettingsGet('rsaPublicKey') && Utils.rsaEncode.supported)
				{
					fLoginRequest(Utils.rsaEncode(sPassword, Settings.appSettingsGet('rsaPublicKey')));
				}
				else
				{
					fLoginRequest(sPassword);
				}

				return true;

			}, function () {
				return !this.submitRequest();
			});

			this.facebookLoginEnabled = ko.observable(false);

			this.facebookCommand = Utils.createCommand(this, function () {

				window.open(Links.socialFacebook(), 'Facebook',
					'left=200,top=100,width=650,height=450,menubar=no,status=no,resizable=yes,scrollbars=yes');

				return true;

			}, function () {
				return !this.submitRequest() && this.facebookLoginEnabled();
			});

			this.googleLoginEnabled = ko.observable(false);
			this.googleFastLoginEnabled = ko.observable(false);

			this.googleCommand = Utils.createCommand(this, function () {

				window.open(Links.socialGoogle(), 'Google',
					'left=200,top=100,width=650,height=500,menubar=no,status=no,resizable=yes,scrollbars=yes');

				return true;

			}, function () {
				return !this.submitRequest() && this.googleLoginEnabled();
			});

			this.googleFastCommand = Utils.createCommand(this, function () {

				window.open(Links.socialGoogle(true), 'Google',
					'left=200,top=100,width=650,height=500,menubar=no,status=no,resizable=yes,scrollbars=yes');

				return true;

			}, function () {
				return !this.submitRequest() && this.googleFastLoginEnabled();
			});

			this.twitterLoginEnabled = ko.observable(false);

			this.twitterCommand = Utils.createCommand(this, function () {

				window.open(Links.socialTwitter(), 'Twitter',
					'left=200,top=100,width=650,height=450,menubar=no,status=no,resizable=yes,scrollbars=yes');

				return true;

			}, function () {
				return !this.submitRequest() && this.twitterLoginEnabled();
			});

			this.socialLoginEnabled = ko.computed(function () {

				var
					bF = this.facebookLoginEnabled(),
					bG = this.googleLoginEnabled(),
					bT = this.twitterLoginEnabled()
				;

				return bF || bG || bT;
			}, this);

			if (Settings.settingsGet('AdditionalLoginError') && !this.submitError())
			{
				this.submitError(Settings.settingsGet('AdditionalLoginError'));
			}

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/User/Login', 'View/App/Login', 'LoginViewModel'], LoginUserView);
		_.extend(LoginUserView.prototype, AbstractView.prototype);

		LoginUserView.prototype.displayMainForm = function ()
		{
			this.welcome(false);
		};

		LoginUserView.prototype.onShow = function ()
		{
			kn.routeOff();
		};

		LoginUserView.prototype.onShowWithDelay = function ()
		{
			if ('' !== this.email() && '' !== this.password())
			{
				this.submitFocus(true);
			}
			else if ('' === this.email())
			{
				this.emailFocus(true);
			}
			else if ('' === this.password())
			{
				this.passwordFocus(true);
			}
			else
			{
				this.emailFocus(true);
			}
		};

		LoginUserView.prototype.onHide = function ()
		{
			this.submitFocus(false);
			this.emailFocus(false);
			this.passwordFocus(false);
		};

		LoginUserView.prototype.onBuild = function ()
		{
			var
				self = this,
				sSignMeLocal = Local.get(Enums.ClientSideKeyName.LastSignMe),
				sSignMe = (Settings.settingsGet('SignMe') || 'unused').toLowerCase(),
				sJsHash = Settings.appSettingsGet('jsHash'),
				fSocial = function (iErrorCode) {
					iErrorCode = Utils.pInt(iErrorCode);
					if (0 === iErrorCode)
					{
						self.submitRequest(true);
						__webpack_require__(/*! App/User */ 6).default.loginAndLogoutReload(false);
					}
					else
					{
						self.submitError(Translator.getNotification(iErrorCode));
					}
				}
			;

			this.facebookLoginEnabled(!!Settings.settingsGet('AllowFacebookSocial'));
			this.twitterLoginEnabled(!!Settings.settingsGet('AllowTwitterSocial'));
			this.googleLoginEnabled(!!Settings.settingsGet('AllowGoogleSocial') &&
				!!Settings.settingsGet('AllowGoogleSocialAuth'));
			this.googleFastLoginEnabled(!!Settings.settingsGet('AllowGoogleSocial') &&
				!!Settings.settingsGet('AllowGoogleSocialAuthFast'));

			switch (sSignMe)
			{
				case Enums.LoginSignMeTypeAsString.DefaultOff:
				case Enums.LoginSignMeTypeAsString.DefaultOn:

					this.signMeType(Enums.LoginSignMeTypeAsString.DefaultOn === sSignMe ?
						Enums.LoginSignMeType.DefaultOn : Enums.LoginSignMeType.DefaultOff);

					switch (sSignMeLocal)
					{
						case '-1-':
							this.signMeType(Enums.LoginSignMeType.DefaultOn);
							break;
						case '-0-':
							this.signMeType(Enums.LoginSignMeType.DefaultOff);
							break;
					}

					break;
				default:
				case Enums.LoginSignMeTypeAsString.Unused:
					this.signMeType(Enums.LoginSignMeType.Unused);
					break;
			}

			this.email(AppStore.devEmail);
			this.password(AppStore.devPassword);

			if (this.googleLoginEnabled() || this.googleFastLoginEnabled())
			{
				window['rl_' + sJsHash + '_google_login_service'] = fSocial;
			}

			if (this.facebookLoginEnabled())
			{
				window['rl_' + sJsHash + '_facebook_login_service'] = fSocial;
			}

			if (this.twitterLoginEnabled())
			{
				window['rl_' + sJsHash + '_twitter_login_service'] = fSocial;
			}

			_.delay(function () {
				LanguageStore.language.subscribe(function (sValue) {

					self.langRequest(true);

					Translator.reload(false, sValue, function() {
						self.langRequest(false);
						self.bSendLanguage = true;
					}, function() {
						self.langRequest(false);
					});

				});
			}, 50);

			Utils.triggerAutocompleteInputChange(true);
		};

		LoginUserView.prototype.submitForm = function ()
		{
			this.submitCommand();
		};

		LoginUserView.prototype.selectLanguage = function ()
		{
			kn.showScreenPopup(__webpack_require__(/*! View/Popup/Languages */ 43), [
				this.language, this.languages(), LanguageStore.userLanguage()
			]);
		};

		LoginUserView.prototype.selectLanguageOnTab = function (bShift)
		{
			if (!bShift)
			{
				var self = this;
				_.delay(function () {
					self.emailFocus(true);
				}, 5);

				return false;
			}

			return true;
		};

		module.exports = LoginUserView;

	}());

/***/ },
/* 161 */
/*!*********************************************!*\
  !*** ./dev/View/User/MailBox/FolderList.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),
			ko = __webpack_require__(/*! ko */ 1),
			key = __webpack_require__(/*! key */ 18),

			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Links = __webpack_require__(/*! Common/Links */ 12),

			Cache = __webpack_require__(/*! Common/Cache */ 17),

			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			SettingsStore = __webpack_require__(/*! Stores/User/Settings */ 27),
			FolderStore = __webpack_require__(/*! Stores/User/Folder */ 21),
			MessageStore = __webpack_require__(/*! Stores/User/Message */ 31),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function FolderListMailBoxUserView()
		{
			AbstractView.call(this, 'Left', 'MailFolderList');

			this.oContentVisible = null;
			this.oContentScrollable = null;

			this.composeInEdit = AppStore.composeInEdit;

			this.messageList = MessageStore.messageList;
			this.folderList = FolderStore.folderList;
			this.folderListSystem = FolderStore.folderListSystem;
			this.foldersChanging = FolderStore.foldersChanging;

			this.foldersListWithSingleInboxRootFolder = FolderStore.foldersListWithSingleInboxRootFolder;

			this.leftPanelDisabled = Globals.leftPanelDisabled;

			this.iDropOverTimer = 0;

			this.allowComposer = !!Settings.capa(Enums.Capa.Composer);
			this.allowContacts = !!AppStore.contactsIsAllowed();
			this.allowFolders = !!Settings.capa(Enums.Capa.Folders);

			this.folderListFocused = ko.computed(function () {
				return Enums.Focused.FolderList === AppStore.focusedState();
			});

			this.isInboxStarred = ko.computed(function () {
				return FolderStore.currentFolder() &&
					FolderStore.currentFolder().isInbox() &&
					-1 < Utils.trim(MessageStore.messageListSearch()).indexOf('is:flagged')
				;
			});

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/User/MailBox/FolderList', 'View/App/MailBox/FolderList', 'MailBoxFolderListViewModel'], FolderListMailBoxUserView);
		_.extend(FolderListMailBoxUserView.prototype, AbstractView.prototype);

		FolderListMailBoxUserView.prototype.onBuild = function (oDom)
		{
			this.oContentVisible = $('.b-content', oDom);
			this.oContentScrollable = $('.content', this.oContentVisible);

			var
				self = this,
				bMobile = Settings.appSettingsGet('mobile'),
				fSelectFolder = function (oEvent, bStarred) {

					if (bMobile)
					{
						Globals.leftPanelDisabled(true);
					}

					oEvent.preventDefault();

					if (bStarred)
					{
						oEvent.stopPropagation();
					}

					var
						oFolder = ko.dataFor(this)
					;

					if (oFolder)
					{
						if (Enums.Layout.NoPreview === SettingsStore.layout())
						{
							MessageStore.message(null);
						}

						if (oFolder.fullNameRaw === FolderStore.currentFolderFullNameRaw())
						{
							Cache.setFolderHash(oFolder.fullNameRaw, '');
						}

						if (bStarred)
						{
							kn.setHash(Links.mailBox(oFolder.fullNameHash, 1, 'is:flagged'));
						}
						else
						{
							kn.setHash(Links.mailBox(oFolder.fullNameHash));
						}
					}
				}
			;

			oDom
				.on('click', '.b-folders .e-item .e-link .e-collapsed-sign', function (oEvent) {

					var
						oFolder = ko.dataFor(this),
						bCollapsed = false
					;

					if (oFolder && oEvent)
					{
						bCollapsed = oFolder.collapsed();
						__webpack_require__(/*! App/User */ 6).default.setExpandedFolder(oFolder.fullNameHash, bCollapsed);

						oFolder.collapsed(!bCollapsed);
						oEvent.preventDefault();
						oEvent.stopPropagation();
					}
				})
				.on('click', '.b-folders .e-item .e-link.selectable .inbox-star-icon', function (oEvent) {
					fSelectFolder.call(this, oEvent, !self.isInboxStarred());
				})
				.on('click', '.b-folders .e-item .e-link.selectable', function (oEvent) {
					fSelectFolder.call(this, oEvent, false);
				})
			;

			key('up, down', Enums.KeyState.FolderList, function (event, handler) {

				var
					iIndex = -1,
					iKeyCode = handler && 'up' === handler.shortcut ? 38 : 40,
					$items = $('.b-folders .e-item .e-link:not(.hidden):visible', oDom)
				;

				if (event && $items.length)
				{
					iIndex = $items.index($items.filter('.focused'));
					if (-1 < iIndex)
					{
						$items.eq(iIndex).removeClass('focused');
					}

					if (iKeyCode === 38 && iIndex > 0)
					{
						iIndex--;
					}
					else if (iKeyCode === 40 && iIndex < $items.length - 1)
					{
						iIndex++;
					}

					$items.eq(iIndex).addClass('focused');
					self.scrollToFocused();
				}

				return false;
			});

			key('enter', Enums.KeyState.FolderList, function () {
				var $items = $('.b-folders .e-item .e-link:not(.hidden).focused', oDom);
				if ($items.length && $items[0])
				{
					AppStore.focusedState(Enums.Focused.MessageList);
					$items.click();
				}

				return false;
			});

			key('space', Enums.KeyState.FolderList, function () {
				var bCollapsed = true, oFolder = null, $items = $('.b-folders .e-item .e-link:not(.hidden).focused', oDom);
				if ($items.length && $items[0])
				{
					oFolder = ko.dataFor($items[0]);
					if (oFolder)
					{
						bCollapsed = oFolder.collapsed();
						__webpack_require__(/*! App/User */ 6).default.setExpandedFolder(oFolder.fullNameHash, bCollapsed);
						oFolder.collapsed(!bCollapsed);
					}
				}

				return false;
			});

			key('esc, tab, shift+tab, right', Enums.KeyState.FolderList, function () {
				AppStore.focusedState(Enums.Focused.MessageList);
				return false;
			});

			AppStore.focusedState.subscribe(function (mValue) {
				$('.b-folders .e-item .e-link.focused', oDom).removeClass('focused');
				if (Enums.Focused.FolderList === mValue)
				{
					$('.b-folders .e-item .e-link.selected', oDom).addClass('focused');
				}
			});
		};

		FolderListMailBoxUserView.prototype.messagesDropOver = function (oFolder)
		{
			window.clearTimeout(this.iDropOverTimer);
			if (oFolder && oFolder.collapsed())
			{
				this.iDropOverTimer = window.setTimeout(function () {
					oFolder.collapsed(false);
					__webpack_require__(/*! App/User */ 6).default.setExpandedFolder(oFolder.fullNameHash, true);
					Utils.windowResize();
				}, 500);
			}
		};

		FolderListMailBoxUserView.prototype.messagesDropOut = function ()
		{
			window.clearTimeout(this.iDropOverTimer);
		};

		FolderListMailBoxUserView.prototype.scrollToFocused = function ()
		{
			if (!this.oContentVisible || !this.oContentScrollable)
			{
				return false;
			}

			var
				iOffset = 20,
				oFocused = $('.e-item .e-link.focused', this.oContentScrollable),
				oPos = oFocused.position(),
				iVisibleHeight = this.oContentVisible.height(),
				iFocusedHeight = oFocused.outerHeight()
			;

			if (oPos && (oPos.top < 0 || oPos.top + iFocusedHeight > iVisibleHeight))
			{
				if (oPos.top < 0)
				{
					this.oContentScrollable.scrollTop(this.oContentScrollable.scrollTop() + oPos.top - iOffset);
				}
				else
				{
					this.oContentScrollable.scrollTop(this.oContentScrollable.scrollTop() + oPos.top - iVisibleHeight + iFocusedHeight + iOffset);
				}

				return true;
			}

			return false;
		};

		/**
		 * @param {FolderModel} oToFolder
		 * @param {{helper:jQuery}} oUi
		 */
		FolderListMailBoxUserView.prototype.messagesDrop = function (oToFolder, oUi)
		{
			if (oToFolder && oUi && oUi.helper)
			{
				var
					sFromFolderFullNameRaw = oUi.helper.data('rl-folder'),
					bCopy = Globals.$html.hasClass('rl-ctrl-key-pressed'),
					aUids = oUi.helper.data('rl-uids')
				;

				if (Utils.isNormal(sFromFolderFullNameRaw) && '' !== sFromFolderFullNameRaw && Utils.isArray(aUids))
				{
					__webpack_require__(/*! App/User */ 6).default.moveMessagesToFolder(sFromFolderFullNameRaw, aUids, oToFolder.fullNameRaw, bCopy);
				}
			}
		};

		FolderListMailBoxUserView.prototype.composeClick = function ()
		{
			if (Settings.capa(Enums.Capa.Composer))
			{
				kn.showScreenPopup(__webpack_require__(/*! View/Popup/Compose */ 28));
			}
		};

		FolderListMailBoxUserView.prototype.createFolder = function ()
		{
			kn.showScreenPopup(__webpack_require__(/*! View/Popup/FolderCreate */ 95));
		};

		FolderListMailBoxUserView.prototype.configureFolders = function ()
		{
			kn.setHash(Links.settings('folders'));
		};

		FolderListMailBoxUserView.prototype.contactsClick = function ()
		{
			if (this.allowContacts)
			{
				kn.showScreenPopup(__webpack_require__(/*! View/Popup/Contacts */ 63));
			}
		};

		module.exports = FolderListMailBoxUserView;

	}());


/***/ },
/* 162 */
/*!**********************************************!*\
  !*** ./dev/View/User/MailBox/MessageList.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),
			ko = __webpack_require__(/*! ko */ 1),
			key = __webpack_require__(/*! key */ 18),
			Jua = __webpack_require__(/*! Jua */ 82),
			ifvisible = __webpack_require__(/*! ifvisible */ 180),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Links = __webpack_require__(/*! Common/Links */ 12),
			Events = __webpack_require__(/*! Common/Events */ 24),
			Selector = __webpack_require__(/*! Common/Selector */ 100),
			Translator = __webpack_require__(/*! Common/Translator */ 5),

			Cache = __webpack_require__(/*! Common/Cache */ 17),

			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			QuotaStore = __webpack_require__(/*! Stores/User/Quota */ 91),
			SettingsStore = __webpack_require__(/*! Stores/User/Settings */ 27),
			FolderStore = __webpack_require__(/*! Stores/User/Folder */ 21),
			MessageStore = __webpack_require__(/*! Stores/User/Message */ 31),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function MessageListMailBoxUserView()
		{
			AbstractView.call(this, 'Right', 'MailMessageList');

			this.sLastUid = null;
			this.bPrefetch = false;
			this.emptySubjectValue = '';

			this.mobile = !!Settings.appSettingsGet('mobile');

			this.allowReload = !!Settings.capa(Enums.Capa.Reload);
			this.allowSearch = !!Settings.capa(Enums.Capa.Search);
			this.allowSearchAdv = !!Settings.capa(Enums.Capa.SearchAdv);
			this.allowComposer = !!Settings.capa(Enums.Capa.Composer);
			this.allowMessageListActions = !!Settings.capa(Enums.Capa.MessageListActions);
			this.allowDangerousActions = !!Settings.capa(Enums.Capa.DangerousActions);
			this.allowFolders = !!Settings.capa(Enums.Capa.Folders);

			this.popupVisibility = Globals.popupVisibility;

			this.message = MessageStore.message;
			this.messageList = MessageStore.messageList;
			this.messageListDisableAutoSelect = MessageStore.messageListDisableAutoSelect;

			this.folderList = FolderStore.folderList;

			this.composeInEdit = AppStore.composeInEdit;
			this.leftPanelDisabled = Globals.leftPanelDisabled;

			this.selectorMessageSelected = MessageStore.selectorMessageSelected;
			this.selectorMessageFocused = MessageStore.selectorMessageFocused;
			this.isMessageSelected = MessageStore.isMessageSelected;
			this.messageListSearch = MessageStore.messageListSearch;
			this.messageListThreadUid = MessageStore.messageListThreadUid;
			this.messageListError = MessageStore.messageListError;
			this.folderMenuForMove = FolderStore.folderMenuForMove;

			this.useCheckboxesInList = SettingsStore.useCheckboxesInList;

			this.mainMessageListSearch = MessageStore.mainMessageListSearch;
			this.messageListEndFolder = MessageStore.messageListEndFolder;
			this.messageListEndThreadUid = MessageStore.messageListEndThreadUid;

			this.messageListChecked = MessageStore.messageListChecked;
			this.messageListCheckedOrSelected = MessageStore.messageListCheckedOrSelected;
			this.messageListCheckedOrSelectedUidsWithSubMails = MessageStore.messageListCheckedOrSelectedUidsWithSubMails;
			this.messageListCompleteLoadingThrottle = MessageStore.messageListCompleteLoadingThrottle;
			this.messageListCompleteLoadingThrottleForAnimation = MessageStore.messageListCompleteLoadingThrottleForAnimation;

			Translator.initOnStartOrLangChange(function () {
				this.emptySubjectValue = Translator.i18n('MESSAGE_LIST/EMPTY_SUBJECT_TEXT');
			}, this);

			this.userQuota = QuotaStore.quota;
			this.userUsageSize = QuotaStore.usage;
			this.userUsageProc = QuotaStore.percentage;

			this.moveDropdownTrigger = ko.observable(false);
			this.moreDropdownTrigger = ko.observable(false);

			// append drag and drop
			this.dragOver = ko.observable(false).extend({'throttle': 1});
			this.dragOverEnter = ko.observable(false).extend({'throttle': 1});
			this.dragOverArea = ko.observable(null);
			this.dragOverBodyArea = ko.observable(null);

			this.messageListItemTemplate = ko.computed(function () {
				return this.mobile || Enums.Layout.SidePreview === SettingsStore.layout() ?
					'MailMessageListItem' : 'MailMessageListItemNoPreviewPane';
			}, this);

			this.messageListSearchDesc = ko.computed(function () {
				var sValue = MessageStore.messageListEndSearch();
				return '' === sValue ? '' : Translator.i18n('MESSAGE_LIST/SEARCH_RESULT_FOR', {'SEARCH': sValue});
			});

			this.messageListPagenator = ko.computed(Utils.computedPagenatorHelper(
				MessageStore.messageListPage, MessageStore.messageListPageCount));

			this.checkAll = ko.computed({
				'read': function () {
					return 0 < MessageStore.messageListChecked().length;
				},

				'write': function (bValue) {
					bValue = !!bValue;
					_.each(MessageStore.messageList(), function (oMessage) {
						oMessage.checked(bValue);
					});
				}
			});

			this.inputMessageListSearchFocus = ko.observable(false);

			this.sLastSearchValue = '';
			this.inputProxyMessageListSearch = ko.computed({
				'read': this.mainMessageListSearch,
				'write': function (sValue) {
					this.sLastSearchValue = sValue;
				},
				'owner': this
			});

			this.isIncompleteChecked = ko.computed(function () {
				var
					iM = MessageStore.messageList().length,
					iC = MessageStore.messageListChecked().length
				;
				return 0 < iM && 0 < iC && iM > iC;
			}, this);

			this.hasMessages = ko.computed(function () {
				return 0 < this.messageList().length;
			}, this);

			this.hasCheckedOrSelectedLines = ko.computed(function () {
				return 0 < this.messageListCheckedOrSelected().length;
			}, this);

			this.isSpamFolder = ko.computed(function () {
				return FolderStore.spamFolder() === this.messageListEndFolder() &&
					'' !== FolderStore.spamFolder();
			}, this);

			this.isSpamDisabled = ko.computed(function () {
				return Consts.UNUSED_OPTION_VALUE === FolderStore.spamFolder();
			}, this);

			this.isTrashFolder = ko.computed(function () {
				return FolderStore.trashFolder() === this.messageListEndFolder() &&
					'' !== FolderStore.trashFolder();
			}, this);

			this.isDraftFolder = ko.computed(function () {
				return FolderStore.draftFolder() === this.messageListEndFolder() &&
					'' !== FolderStore.draftFolder();
			}, this);

			this.isSentFolder = ko.computed(function () {
				return FolderStore.sentFolder() === this.messageListEndFolder() &&
					'' !== FolderStore.sentFolder();
			}, this);

			this.isArchiveFolder = ko.computed(function () {
				return FolderStore.archiveFolder() === this.messageListEndFolder() &&
					'' !== FolderStore.archiveFolder();
			}, this);

			this.isArchiveDisabled = ko.computed(function () {
				return Consts.UNUSED_OPTION_VALUE === FolderStore.archiveFolder();
			}, this);

			this.isArchiveVisible = ko.computed(function () {
				return !this.isArchiveFolder() && !this.isArchiveDisabled() && !this.isDraftFolder();
			}, this);

			this.isSpamVisible = ko.computed(function () {
				return !this.isSpamFolder() && !this.isSpamDisabled() && !this.isDraftFolder() && !this.isSentFolder();
			}, this);

			this.isUnSpamVisible = ko.computed(function () {
				return this.isSpamFolder() && !this.isSpamDisabled() && !this.isDraftFolder() && !this.isSentFolder();
			}, this);

			this.messageListFocused = ko.computed(function () {
				return Enums.Focused.MessageList === AppStore.focusedState();
			});

			this.canBeMoved = this.hasCheckedOrSelectedLines;

			this.clearCommand = Utils.createCommand(this, function () {
				if (Settings.capa(Enums.Capa.DangerousActions))
				{
					kn.showScreenPopup(__webpack_require__(/*! View/Popup/FolderClear */ 153), [FolderStore.currentFolder()]);
				}
			});

			this.multyForwardCommand = Utils.createCommand(this, function () {
				if (Settings.capa(Enums.Capa.Composer))
				{
					kn.showScreenPopup(__webpack_require__(/*! View/Popup/Compose */ 28), [
						Enums.ComposeType.ForwardAsAttachment, MessageStore.messageListCheckedOrSelected()]);
				}
			}, this.canBeMoved);

			this.deleteWithoutMoveCommand = Utils.createCommand(this, function () {
				if (Settings.capa(Enums.Capa.DangerousActions))
				{
					__webpack_require__(/*! App/User */ 6).default.deleteMessagesFromFolder(Enums.FolderType.Trash,
						FolderStore.currentFolderFullNameRaw(),
						MessageStore.messageListCheckedOrSelectedUidsWithSubMails(), false);
				}
			}, this.canBeMoved);

			this.deleteCommand = Utils.createCommand(this, function () {
				__webpack_require__(/*! App/User */ 6).default.deleteMessagesFromFolder(Enums.FolderType.Trash,
					FolderStore.currentFolderFullNameRaw(),
					MessageStore.messageListCheckedOrSelectedUidsWithSubMails(), true);
			}, this.canBeMoved);

			this.archiveCommand = Utils.createCommand(this, function () {
				__webpack_require__(/*! App/User */ 6).default.deleteMessagesFromFolder(Enums.FolderType.Archive,
					FolderStore.currentFolderFullNameRaw(),
					MessageStore.messageListCheckedOrSelectedUidsWithSubMails(), true);
			}, this.canBeMoved);

			this.spamCommand = Utils.createCommand(this, function () {
				__webpack_require__(/*! App/User */ 6).default.deleteMessagesFromFolder(Enums.FolderType.Spam,
					FolderStore.currentFolderFullNameRaw(),
					MessageStore.messageListCheckedOrSelectedUidsWithSubMails(), true);
			}, this.canBeMoved);

			this.notSpamCommand = Utils.createCommand(this, function () {
				__webpack_require__(/*! App/User */ 6).default.deleteMessagesFromFolder(Enums.FolderType.NotSpam,
					FolderStore.currentFolderFullNameRaw(),
					MessageStore.messageListCheckedOrSelectedUidsWithSubMails(), true);
			}, this.canBeMoved);

			this.moveCommand = Utils.createCommand(this, Utils.emptyFunction, this.canBeMoved);

			this.reloadCommand = Utils.createCommand(this, function () {
				if (!MessageStore.messageListCompleteLoadingThrottleForAnimation() && this.allowReload)
				{
					__webpack_require__(/*! App/User */ 6).default.reloadMessageList(false, true);
				}
			});

			this.quotaTooltip = _.bind(this.quotaTooltip, this);

			this.selector = new Selector(this.messageList, this.selectorMessageSelected, this.selectorMessageFocused,
				'.messageListItem .actionHandle', '.messageListItem.selected', '.messageListItem .checkboxMessage',
					'.messageListItem.focused');

			this.selector.on('onItemSelect', _.bind(function (oMessage) {
				MessageStore.selectMessage(oMessage);
			}, this));

			this.selector.on('onItemGetUid', function (oMessage) {
				return oMessage ? oMessage.generateUid() : '';
			});

			this.selector.on('onAutoSelect', _.bind(function () {
				return this.useAutoSelect();
			}, this));

			this.selector.on('onUpUpOrDownDown', _.bind(function (bV) {
				this.goToUpUpOrDownDown(bV);
			}, this));

			Events
				.sub('mailbox.message-list.selector.go-down', function (bSelect) {
					this.selector.goDown(bSelect);
				}, this)
				.sub('mailbox.message-list.selector.go-up', function (bSelect) {
					this.selector.goUp(bSelect);
				}, this)
			;

			Events
				.sub('mailbox.message.show', function (sFolder, sUid) {

					var oMessage = _.find(this.messageList(), function (oItem) {
						return oItem && sFolder === oItem.folderFullNameRaw && sUid === oItem.uid;
					});

					if ('INBOX' === sFolder)
					{
						kn.setHash(Links.mailBox(sFolder, 1));
					}

					if (oMessage)
					{
						this.selector.selectMessageItem(oMessage);
					}
					else
					{
						if ('INBOX' !== sFolder)
						{
							kn.setHash(Links.mailBox(sFolder, 1));
						}

						MessageStore.selectMessageByFolderAndUid(sFolder, sUid);
					}

				}, this)
			;

			MessageStore.messageListEndHash.subscribe(function () {
				this.selector.scrollToTop();
			}, this);

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/User/MailBox/MessageList', 'View/App/MailBox/MessageList', 'MailBoxMessageListViewModel'], MessageListMailBoxUserView);
		_.extend(MessageListMailBoxUserView.prototype, AbstractView.prototype);

		/**
		 * @type {string}
		 */
		MessageListMailBoxUserView.prototype.emptySubjectValue = '';

		MessageListMailBoxUserView.prototype.iGoToUpUpOrDownDownTimeout = 0;

		MessageListMailBoxUserView.prototype.hideLeft = function (oItem, oEvent)
		{
			oEvent.preventDefault();
			oEvent.stopPropagation();

			Globals.leftPanelDisabled(true);
		};

		MessageListMailBoxUserView.prototype.showLeft = function (oItem, oEvent)
		{
			oEvent.preventDefault();
			oEvent.stopPropagation();

			Globals.leftPanelDisabled(false);
		};

		MessageListMailBoxUserView.prototype.composeClick = function ()
		{
			if (Settings.capa(Enums.Capa.Composer))
			{
				kn.showScreenPopup(__webpack_require__(/*! View/Popup/Compose */ 28));
			}
		};

		MessageListMailBoxUserView.prototype.goToUpUpOrDownDown = function (bUp)
		{
			var self = this;

			if (0 < this.messageListChecked().length)
			{
				return false;
			}

			window.clearTimeout(this.iGoToUpUpOrDownDownTimeout);
			this.iGoToUpUpOrDownDownTimeout = window.setTimeout(function () {

				var
					oPrev = null,
					oNext = null,
					oTemp = null,
					oCurrent = null,
					aPages = self.messageListPagenator()
				;

				_.find(aPages, function (oItem) {

					if (oItem)
					{
						if (oCurrent)
						{
							oNext = oItem;
						}

						if (oItem.current)
						{
							oCurrent = oItem;
							oPrev = oTemp;
						}

						if (oNext)
						{
							return true;
						}

						oTemp = oItem;
					}

					return false;
				});

				if (Enums.Layout.NoPreview === SettingsStore.layout() && !self.message())
				{
					self.selector.iFocusedNextHelper = bUp ? -1 : 1;
				}
				else
				{
					self.selector.iSelectNextHelper = bUp ? -1 : 1;
				}

				if (bUp ? oPrev : oNext)
				{
					self.selector.unselect();
					self.gotoPage(bUp ? oPrev : oNext);
				}

			}, 350);
		};

		MessageListMailBoxUserView.prototype.useAutoSelect = function ()
		{
			if (this.messageListDisableAutoSelect())
			{
				return false;
			}

			if (/is:unseen/.test(this.mainMessageListSearch()))
			{
				return false;
			}

			return Enums.Layout.NoPreview !== SettingsStore.layout();
		};

		MessageListMailBoxUserView.prototype.searchEnterAction = function ()
		{
			this.mainMessageListSearch(this.sLastSearchValue);
			this.inputMessageListSearchFocus(false);
		};

		/**
		 * @return {string}
		 */
		MessageListMailBoxUserView.prototype.printableMessageCountForDeletion = function ()
		{
			var iCnt = this.messageListCheckedOrSelectedUidsWithSubMails().length;
			return 1 < iCnt ? ' (' + (100 > iCnt ? iCnt : '99+') + ')' : '';
		};

		MessageListMailBoxUserView.prototype.cancelSearch = function ()
		{
			this.mainMessageListSearch('');
			this.inputMessageListSearchFocus(false);
		};

		MessageListMailBoxUserView.prototype.cancelThreadUid = function ()
		{
			kn.setHash(Links.mailBox(
				FolderStore.currentFolderFullNameHash(),
				MessageStore.messageListPageBeforeThread(),
				MessageStore.messageListSearch()
			));
		};

		/**
		 * @param {string} sToFolderFullNameRaw
		 * @param {boolean} bCopy
		 * @return {boolean}
		 */
		MessageListMailBoxUserView.prototype.moveSelectedMessagesToFolder = function (sToFolderFullNameRaw, bCopy)
		{
			if (this.canBeMoved())
			{
				__webpack_require__(/*! App/User */ 6).default.moveMessagesToFolder(
					FolderStore.currentFolderFullNameRaw(),
					MessageStore.messageListCheckedOrSelectedUidsWithSubMails(), sToFolderFullNameRaw, bCopy);
			}

			return false;
		};

		MessageListMailBoxUserView.prototype.dragAndDronHelper = function (oMessageListItem)
		{
			if (oMessageListItem)
			{
				oMessageListItem.checked(true);
			}

			var
				oEl = Utils.draggablePlace(),
				aUids = MessageStore.messageListCheckedOrSelectedUidsWithSubMails()
			;

			oEl.data('rl-folder', FolderStore.currentFolderFullNameRaw());
			oEl.data('rl-uids', aUids);
			oEl.find('.text').text('' + aUids.length);

			_.defer(function () {
				var aUids = MessageStore.messageListCheckedOrSelectedUidsWithSubMails();

				oEl.data('rl-uids', aUids);
				oEl.find('.text').text('' + aUids.length);
			});

			return oEl;
		};

		/**
		 * @param {string} sFolderFullNameRaw
		 * @param {string|bool} sUid
		 * @param {number} iSetAction
		 * @param {Array=} aMessages = null
		 */
		MessageListMailBoxUserView.prototype.setAction = function (sFolderFullNameRaw, mUid, iSetAction, aMessages)
		{
			__webpack_require__(/*! App/User */ 6).default.messageListAction(sFolderFullNameRaw, mUid, iSetAction, aMessages);
		};

		/**
		 * @param {string} sFolderFullNameRaw
		 * @param {number} iSetAction
		 */
		MessageListMailBoxUserView.prototype.setActionForAll = function (sFolderFullNameRaw, iSetAction)
		{
			var
				oFolder = null,
				aMessages = MessageStore.messageList()
			;

			if ('' !== sFolderFullNameRaw)
			{
				oFolder = Cache.getFolderFromCacheList(sFolderFullNameRaw);

				if (oFolder)
				{
					switch (iSetAction) {
					case Enums.MessageSetAction.SetSeen:
						oFolder = Cache.getFolderFromCacheList(sFolderFullNameRaw);
						if (oFolder)
						{
							_.each(aMessages, function (oMessage) {
								oMessage.unseen(false);
							});

							oFolder.messageCountUnread(0);
							Cache.clearMessageFlagsFromCacheByFolder(sFolderFullNameRaw);
						}

						Remote.messageSetSeenToAll(Utils.emptyFunction, sFolderFullNameRaw, true);
						break;
					case Enums.MessageSetAction.UnsetSeen:
						oFolder = Cache.getFolderFromCacheList(sFolderFullNameRaw);
						if (oFolder)
						{
							_.each(aMessages, function (oMessage) {
								oMessage.unseen(true);
							});

							oFolder.messageCountUnread(oFolder.messageCountAll());
							Cache.clearMessageFlagsFromCacheByFolder(sFolderFullNameRaw);
						}
						Remote.messageSetSeenToAll(Utils.emptyFunction, sFolderFullNameRaw, false);
						break;
					}

					__webpack_require__(/*! App/User */ 6).default.reloadFlagsCurrentMessageListAndMessageFromCache();
				}
			}
		};

		MessageListMailBoxUserView.prototype.listSetSeen = function ()
		{
			this.setAction(FolderStore.currentFolderFullNameRaw(), true,
				Enums.MessageSetAction.SetSeen, MessageStore.messageListCheckedOrSelected());
		};

		MessageListMailBoxUserView.prototype.listSetAllSeen = function ()
		{
			this.setActionForAll(FolderStore.currentFolderFullNameRaw(), Enums.MessageSetAction.SetSeen);
		};

		MessageListMailBoxUserView.prototype.listUnsetSeen = function ()
		{
			this.setAction(FolderStore.currentFolderFullNameRaw(), true,
				Enums.MessageSetAction.UnsetSeen, MessageStore.messageListCheckedOrSelected());
		};

		MessageListMailBoxUserView.prototype.listSetFlags = function ()
		{
			this.setAction(FolderStore.currentFolderFullNameRaw(), true,
				Enums.MessageSetAction.SetFlag, MessageStore.messageListCheckedOrSelected());
		};

		MessageListMailBoxUserView.prototype.listUnsetFlags = function ()
		{
			this.setAction(FolderStore.currentFolderFullNameRaw(), true,
				Enums.MessageSetAction.UnsetFlag, MessageStore.messageListCheckedOrSelected());
		};

		MessageListMailBoxUserView.prototype.flagMessages = function (oCurrentMessage)
		{
			var
				aChecked = this.messageListCheckedOrSelected(),
				aCheckedUids = []
			;

			if (oCurrentMessage)
			{
				if (0 < aChecked.length)
				{
					aCheckedUids = _.map(aChecked, function (oMessage) {
						return oMessage.uid;
					});
				}

				if (0 < aCheckedUids.length && -1 < Utils.inArray(oCurrentMessage.uid, aCheckedUids))
				{
					this.setAction(oCurrentMessage.folderFullNameRaw, true, oCurrentMessage.flagged() ?
						Enums.MessageSetAction.UnsetFlag : Enums.MessageSetAction.SetFlag, aChecked);
				}
				else
				{
					this.setAction(oCurrentMessage.folderFullNameRaw, true, oCurrentMessage.flagged() ?
						Enums.MessageSetAction.UnsetFlag : Enums.MessageSetAction.SetFlag, [oCurrentMessage]);
				}
			}
		};

		MessageListMailBoxUserView.prototype.flagMessagesFast = function (bFlag)
		{
			var
				aChecked = this.messageListCheckedOrSelected(),
				aFlagged = []
			;

			if (0 < aChecked.length)
			{
				aFlagged = _.filter(aChecked, function (oMessage) {
					return oMessage.flagged();
				});

				if (Utils.isUnd(bFlag))
				{
					this.setAction(aChecked[0].folderFullNameRaw, true,
						aChecked.length === aFlagged.length ? Enums.MessageSetAction.UnsetFlag : Enums.MessageSetAction.SetFlag, aChecked);
				}
				else
				{
					this.setAction(aChecked[0].folderFullNameRaw, true,
						!bFlag ? Enums.MessageSetAction.UnsetFlag : Enums.MessageSetAction.SetFlag, aChecked);
				}
			}
		};

		MessageListMailBoxUserView.prototype.seenMessagesFast = function (bSeen)
		{
			var
				aChecked = this.messageListCheckedOrSelected(),
				aUnseen = []
			;

			if (0 < aChecked.length)
			{
				aUnseen = _.filter(aChecked, function (oMessage) {
					return oMessage.unseen();
				});

				if (Utils.isUnd(bSeen))
				{
					this.setAction(aChecked[0].folderFullNameRaw, true,
						0 < aUnseen.length ? Enums.MessageSetAction.SetSeen : Enums.MessageSetAction.UnsetSeen, aChecked);
				}
				else
				{
					this.setAction(aChecked[0].folderFullNameRaw, true,
						bSeen ? Enums.MessageSetAction.SetSeen : Enums.MessageSetAction.UnsetSeen, aChecked);
				}
			}
		};

		MessageListMailBoxUserView.prototype.gotoPage = function (oPage)
		{
			if (oPage)
			{
				kn.setHash(Links.mailBox(
					FolderStore.currentFolderFullNameHash(),
					oPage.value,
					MessageStore.messageListSearch(),
					MessageStore.messageListThreadUid()
				));
			}
		};

		MessageListMailBoxUserView.prototype.gotoThread = function (oMessage)
		{
			if (oMessage && 0 < oMessage.threadsLen())
			{
				MessageStore.messageListPageBeforeThread(MessageStore.messageListPage());

				kn.setHash(Links.mailBox(
					FolderStore.currentFolderFullNameHash(),
					1,
					MessageStore.messageListSearch(),
					oMessage.uid
				));
			}
		};

		MessageListMailBoxUserView.prototype.clearListIsVisible = function ()
		{
			return '' === this.messageListSearchDesc() && '' === this.messageListError() &&
				'' === MessageStore.messageListEndThreadUid() &&
				0 < this.messageList().length && (this.isSpamFolder() || this.isTrashFolder());
		};

		MessageListMailBoxUserView.prototype.onBuild = function (oDom)
		{
			var self = this;

			this.oContentVisible = $('.b-content', oDom);
			this.oContentScrollable = $('.content', this.oContentVisible);

			this.selector.init(this.oContentVisible, this.oContentScrollable, Enums.KeyState.MessageList);

			if (this.mobile)
			{
				oDom
					.on('click', function () {
						Globals.leftPanelDisabled(true);
					})
				;
			}

			oDom
				.on('click', '.messageList .b-message-list-wrapper', function () {
					if (Enums.Focused.MessageView === AppStore.focusedState())
					{
						AppStore.focusedState(Enums.Focused.MessageList);
					}
				})
				.on('click', '.e-pagenator .e-page', function () {
					self.gotoPage(ko.dataFor(this));
				})
				.on('click', '.messageList .checkboxCkeckAll', function () {
					self.checkAll(!self.checkAll());
				})
				.on('click', '.messageList .messageListItem .flagParent', function () {
					self.flagMessages(ko.dataFor(this));
				})
				.on('click', '.messageList .messageListItem .threads-len', function () {
					self.gotoThread(ko.dataFor(this));
				})
				.on('dblclick', '.messageList .messageListItem .actionHandle', function () {
					self.gotoThread(ko.dataFor(this));
				})
			;

			this.initUploaderForAppend();
			this.initShortcuts();

			if (!Globals.bMobileDevice && ifvisible && Settings.capa(Enums.Capa.Prefetch))
			{
				ifvisible.setIdleDuration(10);

				ifvisible.idle(function () {
					self.prefetchNextTick();
				});
			}
		};

		MessageListMailBoxUserView.prototype.initShortcuts = function ()
		{
			var self = this;

			// disable print
			key('ctrl+p, command+p', Enums.KeyState.MessageList, function () {
				return false;
			});

			key('enter', Enums.KeyState.MessageList, function () {
				if (self.message() && self.useAutoSelect())
				{
					Events.pub('mailbox.message-view.toggle-full-screen');
					return false;
				}
			});

			if (Settings.capa(Enums.Capa.MessageListActions))
			{
				// archive (zip)
				key('z', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
					self.archiveCommand();
					return false;
				});

				// delete
				key('delete, shift+delete, shift+3', Enums.KeyState.MessageList, function (event, handler) {
					if (event)
					{
						if (0 < MessageStore.messageListCheckedOrSelected().length)
						{
							if (handler && 'shift+delete' === handler.shortcut)
							{
								self.deleteWithoutMoveCommand();
							}
							else
							{
								self.deleteCommand();
							}
						}

						return false;
					}
				});
			}

			if (Settings.capa(Enums.Capa.Reload))
			{
				// check mail
				key('ctrl+r, command+r', [Enums.KeyState.FolderList, Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
					self.reloadCommand();
					return false;
				});
			}

			// check all
			key('ctrl+a, command+a', Enums.KeyState.MessageList, function () {
				self.checkAll(!(self.checkAll() && !self.isIncompleteChecked()));
				return false;
			});

			if (Settings.capa(Enums.Capa.Composer))
			{
				// write/compose (open compose popup)
				key('w,c', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
					kn.showScreenPopup(__webpack_require__(/*! View/Popup/Compose */ 28));
					return false;
				});
			}

			if (Settings.capa(Enums.Capa.MessageListActions))
			{
				// important - star/flag messages
				key('i', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
					self.flagMessagesFast();
					return false;
				});
			}

			key('t', [Enums.KeyState.MessageList], function () {

				var oMessage = self.selectorMessageSelected();
				if (!oMessage)
				{
					oMessage = self.selectorMessageFocused();
				}

				if (oMessage && 0 < oMessage.threadsLen())
				{
					self.gotoThread(oMessage);
				}

				return false;
			});

			if (Settings.capa(Enums.Capa.MessageListActions))
			{
				// move
				key('m', Enums.KeyState.MessageList, function () {
					self.moveDropdownTrigger(true);
					return false;
				});
			}

			if (Settings.capa(Enums.Capa.MessageListActions))
			{
				// read
				key('q', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
					self.seenMessagesFast(true);
					return false;
				});

				// unread
				key('u', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
					self.seenMessagesFast(false);
					return false;
				});
			}

			if (Settings.capa(Enums.Capa.Composer))
			{
				key('shift+f', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
					self.multyForwardCommand();
					return false;
				});
			}

			if (Settings.capa(Enums.Capa.Search))
			{
				// search input focus
				key('/', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
					self.inputMessageListSearchFocus(true);
					return false;
				});
			}

			// cancel search
			key('esc', Enums.KeyState.MessageList, function () {
				if ('' !== self.messageListSearchDesc())
				{
					self.cancelSearch();
					return false;
				}
				else if ('' !== self.messageListEndThreadUid())
				{
					self.cancelThreadUid();
					return false;
				}
			});

			// change focused state
			key('tab, shift+tab, left, right', Enums.KeyState.MessageList, function (event, handler) {
				if (event && handler && ('shift+tab' === handler.shortcut || 'left' === handler.shortcut))
				{
					AppStore.focusedState(Enums.Focused.FolderList);
				}
				else if (self.message())
				{
					AppStore.focusedState(Enums.Focused.MessageView);
				}

				return false;
			});

			key('ctrl+left, command+left', Enums.KeyState.MessageView, function () {
				return false;
			});

			key('ctrl+right, command+right', Enums.KeyState.MessageView, function () {
				return false;
			});
		};

		MessageListMailBoxUserView.prototype.prefetchNextTick = function ()
		{
			if (ifvisible && !this.bPrefetch && !ifvisible.now() && this.viewModelVisibility())
			{
				var
					self = this,
					oMessage = _.find(this.messageList(), function (oMessage) {
						return oMessage &&
							!Cache.hasRequestedMessage(oMessage.folderFullNameRaw, oMessage.uid);
					})
				;

				if (oMessage)
				{
					this.bPrefetch = true;

					Cache.addRequestedMessage(oMessage.folderFullNameRaw, oMessage.uid);

					Remote.message(function (sResult, oData) {

						var bNext = !!(Enums.StorageResultType.Success === sResult && oData && oData.Result);

						_.delay(function () {
							self.bPrefetch = false;
							if (bNext)
							{
								self.prefetchNextTick();
							}
						}, 1000);

					}, oMessage.folderFullNameRaw, oMessage.uid);
				}
			}
		};

		MessageListMailBoxUserView.prototype.composeClick = function ()
		{
			if (Settings.capa(Enums.Capa.Composer))
			{
				kn.showScreenPopup(__webpack_require__(/*! View/Popup/Compose */ 28));
			}
		};

		MessageListMailBoxUserView.prototype.advancedSearchClick = function ()
		{
			if (Settings.capa(Enums.Capa.SearchAdv))
			{
				kn.showScreenPopup(__webpack_require__(/*! View/Popup/AdvancedSearch */ 151));
			}
		};

		MessageListMailBoxUserView.prototype.quotaTooltip = function ()
		{
			return Translator.i18n('MESSAGE_LIST/QUOTA_SIZE', {
				'SIZE': Utils.friendlySize(this.userUsageSize()),
				'PROC': this.userUsageProc(),
				'LIMIT': Utils.friendlySize(this.userQuota())
			});
		};

		MessageListMailBoxUserView.prototype.initUploaderForAppend = function ()
		{
			if (!Settings.appSettingsGet('allowAppendMessage') || !this.dragOverArea())
			{
				return false;
			}

			var
				oJua = new Jua({
					'action': Links.append(),
					'name': 'AppendFile',
					'queueSize': 1,
					'multipleSizeLimit': 1,
					'hidden': {
						'Folder': function () {
							return FolderStore.currentFolderFullNameRaw();
						}
					},
					'dragAndDropElement': this.dragOverArea(),
					'dragAndDropBodyElement': this.dragOverBodyArea()
				})
			;

			this.dragOver.subscribe(function (bValue) {
				if (bValue)
				{
					this.selector.scrollToTop();
				}
			}, this);

			oJua
				.on('onDragEnter', _.bind(function () {
					this.dragOverEnter(true);
				}, this))
				.on('onDragLeave', _.bind(function () {
					this.dragOverEnter(false);
				}, this))
				.on('onBodyDragEnter', _.bind(function () {
					this.dragOver(true);
				}, this))
				.on('onBodyDragLeave', _.bind(function () {
					this.dragOver(false);
				}, this))
				.on('onSelect', _.bind(function (sUid, oData) {

					if (sUid && oData && 'message/rfc822' === oData['Type'])
					{
						MessageStore.messageListLoading(true);
						return true;
					}

					return false;

				}, this))
				.on('onComplete', _.bind(function () {
					__webpack_require__(/*! App/User */ 6).default.reloadMessageList(true, true);
				}, this))
			;

			return !!oJua;
		};

		module.exports = MessageListMailBoxUserView;

	}());


/***/ },
/* 163 */
/*!**********************************************!*\
  !*** ./dev/View/User/MailBox/MessageView.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			window = __webpack_require__(/*! window */ 11),
			_ = __webpack_require__(/*! _ */ 2),
			$ = __webpack_require__(/*! $ */ 13),
			ko = __webpack_require__(/*! ko */ 1),
			key = __webpack_require__(/*! key */ 18),

			Consts = __webpack_require__(/*! Common/Consts */ 16),
			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Utils = __webpack_require__(/*! Common/Utils */ 0),
			Events = __webpack_require__(/*! Common/Events */ 24),
			Translator = __webpack_require__(/*! Common/Translator */ 5),
			Audio = __webpack_require__(/*! Common/Audio */ 66),
			Links = __webpack_require__(/*! Common/Links */ 12),

			Cache = __webpack_require__(/*! Common/Cache */ 17),

			SocialStore = __webpack_require__(/*! Stores/Social */ 33),
			AppStore = __webpack_require__(/*! Stores/User/App */ 23),
			SettingsStore = __webpack_require__(/*! Stores/User/Settings */ 27),
			AccountStore = __webpack_require__(/*! Stores/User/Account */ 30),
			FolderStore = __webpack_require__(/*! Stores/User/Folder */ 21),
			MessageStore = __webpack_require__(/*! Stores/User/Message */ 31),

			Local = __webpack_require__(/*! Storage/Client */ 46),
			Settings = __webpack_require__(/*! Storage/Settings */ 8),
			Remote = __webpack_require__(/*! Remote/User/Ajax */ 14),

			Promises = __webpack_require__(/*! Promises/User/Ajax */ 40),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function MessageViewMailBoxUserView()
		{
			AbstractView.call(this, 'Right', 'MailMessageView');

			var
				self = this,
				sLastEmail = '',
				createCommandHelper = function (sType) {
					return Utils.createCommand(self, function () {
						this.lastReplyAction(sType);
						this.replyOrforward(sType);
					}, self.canBeRepliedOrForwarded);
				}
			;

			this.oDom = null;
			this.oHeaderDom = null;
			this.oMessageScrollerDom = null;

			this.bodyBackgroundColor = ko.observable('');

			this.pswp = null;

			this.allowComposer = !!Settings.capa(Enums.Capa.Composer);
			this.allowMessageActions = !!Settings.capa(Enums.Capa.MessageActions);
			this.allowMessageListActions = !!Settings.capa(Enums.Capa.MessageListActions);

			this.logoImg = Utils.trim(Settings.settingsGet('UserLogoMessage'));
			this.logoIframe = Utils.trim(Settings.settingsGet('UserIframeMessage'));

			this.mobile = !!Settings.appSettingsGet('mobile');

			this.attachmentsActions = AppStore.attachmentsActions;

			this.message = MessageStore.message;
			this.messageListChecked = MessageStore.messageListChecked;
			this.hasCheckedMessages = MessageStore.hasCheckedMessages;
			this.messageListCheckedOrSelectedUidsWithSubMails = MessageStore.messageListCheckedOrSelectedUidsWithSubMails;
			this.messageLoadingThrottle = MessageStore.messageLoadingThrottle;
			this.messagesBodiesDom = MessageStore.messagesBodiesDom;
			this.useThreads = SettingsStore.useThreads;
			this.replySameFolder = SettingsStore.replySameFolder;
			this.layout = SettingsStore.layout;
			this.usePreviewPane = SettingsStore.usePreviewPane;
			this.isMessageSelected = MessageStore.isMessageSelected;
			this.messageActiveDom = MessageStore.messageActiveDom;
			this.messageError = MessageStore.messageError;

			this.fullScreenMode = MessageStore.messageFullScreenMode;

			this.messageListOfThreadsLoading = ko.observable(false).extend({'rateLimit': 1});

			this.highlightUnselectedAttachments = ko.observable(false).extend({'falseTimeout': 2000});

			this.showAttachmnetControls = ko.observable(false);

			this.allowAttachmnetControls = ko.computed(function () {
				return 0 < this.attachmentsActions().length &&
					Settings.capa(Enums.Capa.AttachmentsActions);
			}, this);

			this.downloadAsZipAllowed = ko.computed(function () {
				return -1 < Utils.inArray('zip', this.attachmentsActions()) &&
					this.allowAttachmnetControls();
			}, this);

			this.downloadAsZipLoading = ko.observable(false);
			this.downloadAsZipError = ko.observable(false).extend({'falseTimeout': 7000});

			this.saveToOwnCloudAllowed = ko.computed(function () {
				return -1 < Utils.inArray('owncloud', this.attachmentsActions()) &&
					this.allowAttachmnetControls();
			}, this);

			this.saveToOwnCloudLoading = ko.observable(false);
			this.saveToOwnCloudSuccess = ko.observable(false).extend({'falseTimeout': 2000});
			this.saveToOwnCloudError = ko.observable(false).extend({'falseTimeout': 7000});

			this.saveToOwnCloudSuccess.subscribe(function (bV) {
				if (bV)
				{
					this.saveToOwnCloudError(false);
				}
			}, this);

			this.saveToOwnCloudError.subscribe(function (bV) {
				if (bV)
				{
					this.saveToOwnCloudSuccess(false);
				}
			}, this);

			this.saveToDropboxAllowed = ko.computed(function () {
				return -1 < Utils.inArray('dropbox', this.attachmentsActions()) &&
					this.allowAttachmnetControls();
			}, this);

			this.saveToDropboxLoading = ko.observable(false);
			this.saveToDropboxSuccess = ko.observable(false).extend({'falseTimeout': 2000});
			this.saveToDropboxError = ko.observable(false).extend({'falseTimeout': 7000});

			this.saveToDropboxSuccess.subscribe(function (bV) {
				if (bV)
				{
					this.saveToDropboxError(false);
				}
			}, this);

			this.saveToDropboxError.subscribe(function (bV) {
				if (bV)
				{
					this.saveToDropboxSuccess(false);
				}
			}, this);

			this.showAttachmnetControls.subscribe(function (bV) {
				if (this.message())
				{
					_.each(this.message().attachments(), function (oItem) {
						if (oItem)
						{
							oItem.checked(!!bV);
						}
					});
				}
			}, this);

			this.lastReplyAction_ = ko.observable('');
			this.lastReplyAction = ko.computed({
				read: this.lastReplyAction_,
				write: function (sValue) {
					sValue = -1 === Utils.inArray(sValue, [
						Enums.ComposeType.Reply, Enums.ComposeType.ReplyAll, Enums.ComposeType.Forward
					]) ? Enums.ComposeType.Reply : sValue;
					this.lastReplyAction_(sValue);
				},
				owner: this
			});

			this.lastReplyAction(Local.get(Enums.ClientSideKeyName.LastReplyAction) || Enums.ComposeType.Reply);
			this.lastReplyAction_.subscribe(function (sValue) {
				Local.set(Enums.ClientSideKeyName.LastReplyAction, sValue);
			});

			this.showFullInfo = ko.observable(false);
			this.moreDropdownTrigger = ko.observable(false);
			this.messageDomFocused = ko.observable(false).extend({'rateLimit': 0});

			this.messageVisibility = ko.computed(function () {
				return !this.messageLoadingThrottle() && !!this.message();
			}, this);

			this.message.subscribe(function (oMessage) {
				if (!oMessage)
				{
					MessageStore.selectorMessageSelected(null);
				}
			}, this);

			this.canBeRepliedOrForwarded = ko.computed(function () {
				var bV = this.messageVisibility();
				return !this.isDraftFolder() && bV;
			}, this);

			// commands
			this.closeMessage = Utils.createCommand(this, function () {
				MessageStore.message(null);
			});

			this.replyCommand = createCommandHelper(Enums.ComposeType.Reply);
			this.replyAllCommand = createCommandHelper(Enums.ComposeType.ReplyAll);
			this.forwardCommand = createCommandHelper(Enums.ComposeType.Forward);
			this.forwardAsAttachmentCommand = createCommandHelper(Enums.ComposeType.ForwardAsAttachment);
			this.editAsNewCommand = createCommandHelper(Enums.ComposeType.EditAsNew);

			this.messageVisibilityCommand = Utils.createCommand(this, Utils.emptyFunction, this.messageVisibility);

			this.messageEditCommand = Utils.createCommand(this, function () {
				this.editMessage();
			}, this.messageVisibility);

			this.deleteCommand = Utils.createCommand(this, function () {
				var oMessage = this.message();
				if (oMessage && this.allowMessageListActions)
				{
					this.message(null);
					__webpack_require__(/*! App/User */ 6).default.deleteMessagesFromFolder(Enums.FolderType.Trash,
						oMessage.folderFullNameRaw, [oMessage.uid], true);
				}
			}, this.messageVisibility);

			this.deleteWithoutMoveCommand = Utils.createCommand(this, function () {
				var oMessage = this.message();
				if (oMessage && this.allowMessageListActions)
				{
					this.message(null);
					__webpack_require__(/*! App/User */ 6).default.deleteMessagesFromFolder(Enums.FolderType.Trash,
						oMessage.folderFullNameRaw, [oMessage.uid], false);
				}
			}, this.messageVisibility);

			this.archiveCommand = Utils.createCommand(this, function () {
				var oMessage = this.message();
				if (oMessage && this.allowMessageListActions)
				{
					this.message(null);
					__webpack_require__(/*! App/User */ 6).default.deleteMessagesFromFolder(Enums.FolderType.Archive,
						oMessage.folderFullNameRaw, [oMessage.uid], true);
				}
			}, this.messageVisibility);

			this.spamCommand = Utils.createCommand(this, function () {
				var oMessage = this.message();
				if (oMessage && this.allowMessageListActions)
				{
					this.message(null);
					__webpack_require__(/*! App/User */ 6).default.deleteMessagesFromFolder(Enums.FolderType.Spam,
						oMessage.folderFullNameRaw, [oMessage.uid], true);
				}
			}, this.messageVisibility);

			this.notSpamCommand = Utils.createCommand(this, function () {
				var oMessage = this.message();
				if (oMessage && this.allowMessageListActions)
				{
					this.message(null);
					__webpack_require__(/*! App/User */ 6).default.deleteMessagesFromFolder(Enums.FolderType.NotSpam,
						oMessage.folderFullNameRaw, [oMessage.uid], true);
				}
			}, this.messageVisibility);

			this.dropboxEnabled = SocialStore.dropbox.enabled;
			this.dropboxApiKey = SocialStore.dropbox.apiKey;

			// viewer

			this.viewBodyTopValue = ko.observable(0);

			this.viewFolder = '';
			this.viewUid = '';
			this.viewHash = '';
			this.viewSubject = ko.observable('');
			this.viewFromShort = ko.observable('');
			this.viewFromDkimData = ko.observable(['none', '']);
			this.viewToShort = ko.observable('');
			this.viewFrom = ko.observable('');
			this.viewTo = ko.observable('');
			this.viewCc = ko.observable('');
			this.viewBcc = ko.observable('');
			this.viewReplyTo = ko.observable('');
			this.viewTimeStamp = ko.observable(0);
			this.viewSize = ko.observable('');
			this.viewLineAsCss = ko.observable('');
			this.viewViewLink = ko.observable('');
			this.viewDownloadLink = ko.observable('');
			this.viewUserPic = ko.observable(Consts.DATA_IMAGE_USER_DOT_PIC);
			this.viewUserPicVisible = ko.observable(false);
			this.viewIsImportant = ko.observable(false);
			this.viewIsFlagged = ko.observable(false);

			this.viewFromDkimStatusIconClass = ko.computed(function () {

				var sResult = 'icon-none iconcolor-display-none';
	//			var sResult = 'icon-warning-alt iconcolor-grey';
				switch (this.viewFromDkimData()[0])
				{
					case 'none':
						break;
					case 'pass':
						sResult = 'icon-ok iconcolor-green';
	//					sResult = 'icon-warning-alt iconcolor-green';
						break;
					default:
						sResult = 'icon-warning-alt iconcolor-red';
						break;
				}

				return sResult;

			}, this);

			this.viewFromDkimStatusTitle = ko.computed(function () {

				var aStatus = this.viewFromDkimData();
				if (Utils.isNonEmptyArray(aStatus))
				{
					if (aStatus[0] && aStatus[1])
					{
						return aStatus[1];
					}
					else if (aStatus[0])
					{
						return 'DKIM: ' + aStatus[0];
					}
				}

				return '';

			}, this);

			this.messageActiveDom.subscribe(function (oDom) {
				this.bodyBackgroundColor(oDom ? this.detectDomBackgroundColor(oDom): '');
			}, this);

			this.message.subscribe(function (oMessage) {

				this.messageActiveDom(null);

				if (oMessage)
				{
					this.showAttachmnetControls(false);

					if (this.viewHash !== oMessage.hash)
					{
						this.scrollMessageToTop();
					}

					this.viewFolder = oMessage.folderFullNameRaw;
					this.viewUid = oMessage.uid;
					this.viewHash = oMessage.hash;
					this.viewSubject(oMessage.subject());
					this.viewFromShort(oMessage.fromToLine(true, true));
					this.viewFromDkimData(oMessage.fromDkimData());
					this.viewToShort(oMessage.toToLine(true, true));
					this.viewFrom(oMessage.fromToLine(false));
					this.viewTo(oMessage.toToLine(false));
					this.viewCc(oMessage.ccToLine(false));
					this.viewBcc(oMessage.bccToLine(false));
					this.viewReplyTo(oMessage.replyToToLine(false));
					this.viewTimeStamp(oMessage.dateTimeStampInUTC());
					this.viewSize(oMessage.friendlySize());
					this.viewLineAsCss(oMessage.lineAsCss());
					this.viewViewLink(oMessage.viewLink());
					this.viewDownloadLink(oMessage.downloadLink());
					this.viewIsImportant(oMessage.isImportant());
					this.viewIsFlagged(oMessage.flagged());

					sLastEmail = oMessage.fromAsSingleEmail();
					Cache.getUserPic(sLastEmail, function (sPic, sEmail) {
						if (sPic !== self.viewUserPic() && sLastEmail === sEmail)
						{
							self.viewUserPicVisible(false);
							self.viewUserPic(Consts.DATA_IMAGE_USER_DOT_PIC);
							if ('' !== sPic)
							{
								self.viewUserPicVisible(true);
								self.viewUserPic(sPic);
							}
						}
					});
				}
				else
				{
					this.viewFolder = '';
					this.viewUid = '';
					this.viewHash = '';

					this.scrollMessageToTop();
				}

			}, this);

			this.message.viewTrigger.subscribe(function () {
				var oMessage = this.message();
				if (oMessage)
				{
					this.viewIsFlagged(oMessage.flagged());
				}
				else
				{
					this.viewIsFlagged(false);
				}
			}, this);

			this.fullScreenMode.subscribe(function (bValue) {
				Globals.$html.toggleClass('rl-message-fullscreen', bValue);
				Utils.windowResize();
			});

			this.messageLoadingThrottle.subscribe(Utils.windowResizeCallback);

			this.messageFocused = ko.computed(function () {
				return Enums.Focused.MessageView === AppStore.focusedState();
			});

			this.messageListAndMessageViewLoading = ko.computed(function () {
				return MessageStore.messageListCompleteLoadingThrottle() || MessageStore.messageLoadingThrottle();
			});

			this.goUpCommand = Utils.createCommand(this, function () {
				Events.pub('mailbox.message-list.selector.go-up', [
					Enums.Layout.NoPreview === this.layout() ? !!this.message() : true
				]);
			}, function () {
				return !this.messageListAndMessageViewLoading();
			});

			this.goDownCommand = Utils.createCommand(this, function () {
				Events.pub('mailbox.message-list.selector.go-down', [
					Enums.Layout.NoPreview === this.layout() ? !!this.message() : true
				]);
			}, function () {
				return !this.messageListAndMessageViewLoading();
			});

			Events.sub('mailbox.message-view.toggle-full-screen', function () {
				this.toggleFullScreen();
			}, this);

			this.attachmentPreview = _.bind(this.attachmentPreview, this);

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/User/MailBox/MessageView', 'View/App/MailBox/MessageView', 'MailBoxMessageViewViewModel'], MessageViewMailBoxUserView);
		_.extend(MessageViewMailBoxUserView.prototype, AbstractView.prototype);

		MessageViewMailBoxUserView.prototype.detectDomBackgroundColor = function (oDom)
		{
			var
				iLimit = 5,
				sResult = '',
				aC = null,
				fFindDom = function (oDom) {
					var aC = oDom ? oDom.children() : null;
					return (aC && 1 === aC.length && aC.is('table,div,center')) ? aC : null;
				},
				fFindColor = function (oDom) {
					var sResult = '';
					if (oDom)
					{
						sResult = oDom.css('background-color') || '';
						if (!oDom.is('table'))
						{
							sResult = 'rgba(0, 0, 0, 0)' === sResult || 'transparent' === sResult ? '' : sResult;
						}
					}

					return sResult;
				}
			;

			if (oDom && 1 === oDom.length)
			{
				aC = oDom;
				while ('' === sResult)
				{
					iLimit--;
					if (0 >= iLimit)
					{
						break;
					}

					aC = fFindDom(aC);
					if (aC)
					{
						sResult = fFindColor(aC);
					}
					else
					{
						break;
					}
				}

				sResult = 'rgba(0, 0, 0, 0)' === sResult || 'transparent' === sResult ? '' : sResult;
			}

			return sResult;
		};

		MessageViewMailBoxUserView.prototype.fullScreen = function ()
		{
			this.fullScreenMode(true);
			Utils.windowResize();
		};

		MessageViewMailBoxUserView.prototype.unFullScreen = function ()
		{
			this.fullScreenMode(false);
			Utils.windowResize();
		};

		MessageViewMailBoxUserView.prototype.toggleFullScreen = function ()
		{
			Utils.removeSelection();

			this.fullScreenMode(!this.fullScreenMode());
			Utils.windowResize();
		};

		/**
		 * @param {string} sType
		 */
		MessageViewMailBoxUserView.prototype.replyOrforward = function (sType)
		{
			if (Settings.capa(Enums.Capa.Composer))
			{
				kn.showScreenPopup(__webpack_require__(/*! View/Popup/Compose */ 28), [sType, MessageStore.message()]);
			}
		};

		MessageViewMailBoxUserView.prototype.checkHeaderHeight = function ()
		{
			if (this.oHeaderDom)
			{
				this.viewBodyTopValue(this.message() ? this.oHeaderDom.height() +
					20 /* padding-(top/bottom): 20px */ + 1 /* borded-bottom: 1px */ : 0);
			}
		};

		/**
		 * @todo
		 * @param {string} sEmail
		 */
	//	MessageViewMailBoxUserView.prototype.displayMailToPopup = function (sMailToUrl)
	//	{
	//		sMailToUrl = sMailToUrl.replace(/\?.+$/, '');
	//
	//		var
	//			sResult = '',
	//			aTo = [],
	//			EmailModel = require('Model/Email'),
	//			fParseEmailLine = function (sLine) {
	//				return sLine ? _.compact(_.map([window.decodeURIComponent(sLine)], function (sItem) {
	//						var oEmailModel = new EmailModel();
	//						oEmailModel.mailsoParse(sItem);
	//						return '' !== oEmailModel.email ? oEmailModel : null;
	//					})) : null;
	//			}
	//		;
	//
	//		aTo = fParseEmailLine(sMailToUrl);
	//		sResult = aTo && aTo[0] ? aTo[0].email : '';
	//
	//		return sResult;
	//	};

		/**
		 * @param {Object} oAttachment
		 * @returns {boolean}
		 */
		MessageViewMailBoxUserView.prototype.attachmentPreview = function (oAttachment)
		{
			if (oAttachment && oAttachment.isImage() && !oAttachment.isLinked && this.message() && this.message().attachments())
			{
				var
					oDiv = $('<div>'),
					iIndex = 0,
					iListIndex = 0,
					aDynamicEl = _.compact(_.map(this.message().attachments(), function (oItem) {
						if (oItem && !oItem.isLinked && oItem.isImage())
						{
							if (oItem === oAttachment)
							{
								iIndex = iListIndex;
							}

							iListIndex++;

							return {
								'src':  oItem.linkPreview(),
								'thumb':  oItem.linkThumbnail(),
								'subHtml': oItem.fileName,
								'downloadUrl':  oItem.linkPreview()
							};
						}

						return null;
					}))
				;

				if (0 < aDynamicEl.length)
				{
					oDiv.on('onBeforeOpen.lg', function () {
						Globals.useKeyboardShortcuts(false);
						Utils.removeInFocus(true);
					});

					oDiv.on('onCloseAfter.lg', function () {
						Globals.useKeyboardShortcuts(true);
					});

					oDiv.lightGallery({
						dynamic: true,
						loadYoutubeThumbnail: false,
						loadVimeoThumbnail: false,
						thumbWidth: 80,
						thumbContHeight: 95,
						showThumbByDefault: false,
						mode: 'lg-lollipop', // 'lg-slide',
						index: iIndex,
						dynamicEl: aDynamicEl
					});
				}

				return false;
			}

			return true;
		};

		MessageViewMailBoxUserView.prototype.onBuild = function (oDom)
		{
			var
				self = this,
				oScript = null,
	//			sErrorMessage = Translator.i18n('PREVIEW_POPUP/IMAGE_ERROR'),
				fCheckHeaderHeight = _.bind(this.checkHeaderHeight, this)
			;

			this.oDom = oDom;

			this.fullScreenMode.subscribe(function (bValue) {
				if (bValue && self.message())
				{
					AppStore.focusedState(Enums.Focused.MessageView);
				}
			}, this);

			this.showAttachmnetControls.subscribe(fCheckHeaderHeight);
			this.fullScreenMode.subscribe(fCheckHeaderHeight);
			this.showFullInfo.subscribe(fCheckHeaderHeight);
			this.message.subscribe(fCheckHeaderHeight);

			Events.sub('window.resize', _.throttle(function () {
				_.delay(fCheckHeaderHeight, 1);
				_.delay(fCheckHeaderHeight, 200);
				_.delay(fCheckHeaderHeight, 500);
			}, 50));

			this.showFullInfo.subscribe(function () {
				Utils.windowResize();
				Utils.windowResize(250);
			});

			if (this.dropboxEnabled() && this.dropboxApiKey() && !window.Dropbox)
			{
				oScript = window.document.createElement('script');
				oScript.type = 'text/javascript';
				oScript.src = 'https://www.dropbox.com/static/api/2/dropins.js';
				$(oScript).attr('id', 'dropboxjs').attr('data-app-key', self.dropboxApiKey());

				window.document.body.appendChild(oScript);
			}

			this.oHeaderDom = $('.messageItemHeader', oDom);
			this.oHeaderDom = this.oHeaderDom[0] ? this.oHeaderDom : null;

			if (this.mobile)
			{
				oDom
					.on('click', function () {
						Globals.leftPanelDisabled(true);
					})
				;
			}

			oDom
				.on('click', 'a', function (oEvent) {
					// setup maito protocol
					return !(!!oEvent && 3 !== oEvent['which'] && Utils.mailToHelper($(this).attr('href'),
						Settings.capa(Enums.Capa.Composer) ? __webpack_require__(/*! View/Popup/Compose */ 28) : null));
				})
	//			.on('mouseover', 'a', _.debounce(function (oEvent) {
	//
	//				if (oEvent)
	//				{
	//					var sMailToUrl = $(this).attr('href');
	//					if (sMailToUrl && 'mailto:' === sMailToUrl.toString().substr(0, 7).toLowerCase())
	//					{
	//						sMailToUrl = sMailToUrl.toString().substr(7);
	//						self.displayMailToPopup(sMailToUrl);
	//					}
	//				}
	//
	//				return true;
	//
	//			}, 1000))
				.on('click', '.attachmentsPlace .attachmentIconParent', function (oEvent) {
					if (oEvent && oEvent.stopPropagation)
					{
						oEvent.stopPropagation();
					}
				})
				.on('click', '.attachmentsPlace .showPreplay', function (oEvent) {
					if (oEvent && oEvent.stopPropagation)
					{
						oEvent.stopPropagation();
					}

					var oAttachment = ko.dataFor(this);
					if (oAttachment && Audio.supported)
					{
						switch (true)
						{
							case Audio.supportedMp3 && oAttachment.isMp3():
								Audio.playMp3(oAttachment.linkDownload(), oAttachment.fileName);
								break;
							case Audio.supportedOgg && oAttachment.isOgg():
								Audio.playOgg(oAttachment.linkDownload(), oAttachment.fileName);
								break;
							case Audio.supportedWav && oAttachment.isWav():
								Audio.playWav(oAttachment.linkDownload(), oAttachment.fileName);
								break;
						}
					}
				})
				.on('click', '.attachmentsPlace .attachmentItem .attachmentNameParent', function () {

					var
						oAttachment = ko.dataFor(this)
					;

					if (oAttachment && oAttachment.download)
					{
						__webpack_require__(/*! App/User */ 6).default.download(oAttachment.linkDownload());
					}
				})
				.on('click', '.messageItemHeader .subjectParent .flagParent', function () {
					var oMessage = self.message();
					if (oMessage)
					{
						__webpack_require__(/*! App/User */ 6).default.messageListAction(oMessage.folderFullNameRaw, oMessage.uid,
							oMessage.flagged() ? Enums.MessageSetAction.UnsetFlag : Enums.MessageSetAction.SetFlag, [oMessage]);
					}
				})
				.on('click', '.thread-list .flagParent', function () {
					var oMessage = ko.dataFor(this);
					if (oMessage && oMessage.folder && oMessage.uid)
					{
						__webpack_require__(/*! App/User */ 6).default.messageListAction(
							oMessage.folder, oMessage.uid,
							oMessage.flagged() ? Enums.MessageSetAction.UnsetFlag : Enums.MessageSetAction.SetFlag, [oMessage]);
					}

					self.threadsDropdownTrigger(true);

					return false;
				})
			;

			AppStore.focusedState.subscribe(function (sValue) {
				if (Enums.Focused.MessageView !== sValue)
				{
					this.scrollMessageToTop();
					this.scrollMessageToLeft();
				}
			}, this);

			Globals.keyScopeReal.subscribe(function (sValue) {
				this.messageDomFocused(Enums.KeyState.MessageView === sValue && !Utils.inFocus());
			}, this);

			this.oMessageScrollerDom = oDom.find('.messageItem .content');
			this.oMessageScrollerDom = this.oMessageScrollerDom && this.oMessageScrollerDom[0] ? this.oMessageScrollerDom : null;

			this.initShortcuts();
		};

		/**
		 * @return {boolean}
		 */
		MessageViewMailBoxUserView.prototype.escShortcuts = function ()
		{
			if (this.viewModelVisibility() && this.message())
			{
				if (this.fullScreenMode())
				{
					this.fullScreenMode(false);

					if (Enums.Layout.NoPreview !== this.layout())
					{
						AppStore.focusedState(Enums.Focused.MessageList);
					}
				}
				else if (Enums.Layout.NoPreview === this.layout())
				{
					this.message(null);
				}
				else
				{
					AppStore.focusedState(Enums.Focused.MessageList);
				}

				return false;
			}
		};

		MessageViewMailBoxUserView.prototype.initShortcuts = function ()
		{
			var
				self = this
			;

			// exit fullscreen, back
			key('esc, backspace', Enums.KeyState.MessageView, _.bind(this.escShortcuts, this));

			// fullscreen
			key('enter', Enums.KeyState.MessageView, function () {
				self.toggleFullScreen();
				return false;
			});

			// reply
			key('r', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
				if (MessageStore.message())
				{
					self.replyCommand();
					return false;
				}
			});

			// replaAll
			key('a', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
				if (MessageStore.message())
				{
					self.replyAllCommand();
					return false;
				}
			});

			// forward
			key('f', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
				if (MessageStore.message())
				{
					self.forwardCommand();
					return false;
				}
			});

			// message information
		//	key('i', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
		//		if (MessageStore.message())
		//		{
		//			self.showFullInfo(!self.showFullInfo());
		//			return false;
		//		}
		//	});

			// toggle message blockquotes
			key('b', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
				if (MessageStore.message() && MessageStore.message().body)
				{
					MessageStore.message().body.find('.rlBlockquoteSwitcher').click();
					return false;
				}
			});

			key('ctrl+up, command+up, ctrl+left, command+left', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
				self.goUpCommand();
				return false;
			});

			key('ctrl+down, command+down, ctrl+right, command+right', [Enums.KeyState.MessageList, Enums.KeyState.MessageView], function () {
				self.goDownCommand();
				return false;
			});

			// print
			key('ctrl+p, command+p', Enums.KeyState.MessageView, function () {
				if (self.message())
				{
					self.message().printMessage();
				}

				return false;
			});

			// delete
			key('delete, shift+delete', Enums.KeyState.MessageView, function (event, handler) {
				if (event)
				{
					if (handler && 'shift+delete' === handler.shortcut)
					{
						self.deleteWithoutMoveCommand();
					}
					else
					{
						self.deleteCommand();
					}

					return false;
				}
			});

			// change focused state
			key('tab, shift+tab, left', Enums.KeyState.MessageView, function (event, handler) {
				if (!self.fullScreenMode() && self.message() && Enums.Layout.NoPreview !== self.layout())
				{
					if (event && handler && 'left' === handler.shortcut)
					{
						if (self.oMessageScrollerDom && 0 < self.oMessageScrollerDom.scrollLeft())
						{
							return true;
						}

						AppStore.focusedState(Enums.Focused.MessageList);
					}
					else
					{
						AppStore.focusedState(Enums.Focused.MessageList);
					}
				}
				else if (self.message() && Enums.Layout.NoPreview === self.layout() && event && handler && 'left' === handler.shortcut)
				{
					return true;
				}

				return false;
			});
		};

		/**
		 * @return {boolean}
		 */
		MessageViewMailBoxUserView.prototype.isDraftFolder = function ()
		{
			return MessageStore.message() && FolderStore.draftFolder() === MessageStore.message().folderFullNameRaw;
		};

		/**
		 * @return {boolean}
		 */
		MessageViewMailBoxUserView.prototype.isSentFolder = function ()
		{
			return MessageStore.message() && FolderStore.sentFolder() === MessageStore.message().folderFullNameRaw;
		};

		/**
		 * @return {boolean}
		 */
		MessageViewMailBoxUserView.prototype.isSpamFolder = function ()
		{
			return MessageStore.message() && FolderStore.spamFolder() === MessageStore.message().folderFullNameRaw;
		};

		/**
		 * @return {boolean}
		 */
		MessageViewMailBoxUserView.prototype.isSpamDisabled = function ()
		{
			return MessageStore.message() && FolderStore.spamFolder() === Consts.UNUSED_OPTION_VALUE;
		};

		/**
		 * @return {boolean}
		 */
		MessageViewMailBoxUserView.prototype.isArchiveFolder = function ()
		{
			return MessageStore.message() && FolderStore.archiveFolder() === MessageStore.message().folderFullNameRaw;
		};

		/**
		 * @return {boolean}
		 */
		MessageViewMailBoxUserView.prototype.isArchiveDisabled = function ()
		{
			return MessageStore.message() && FolderStore.archiveFolder() === Consts.UNUSED_OPTION_VALUE;
		};

		/**
		 * @return {boolean}
		 */
		MessageViewMailBoxUserView.prototype.isDraftOrSentFolder = function ()
		{
			return this.isDraftFolder() || this.isSentFolder();
		};

		MessageViewMailBoxUserView.prototype.composeClick = function ()
		{
			if (Settings.capa(Enums.Capa.Composer))
			{
				kn.showScreenPopup(__webpack_require__(/*! View/Popup/Compose */ 28));
			}
		};

		MessageViewMailBoxUserView.prototype.editMessage = function ()
		{
			if (Settings.capa(Enums.Capa.Composer) && MessageStore.message())
			{
				kn.showScreenPopup(__webpack_require__(/*! View/Popup/Compose */ 28), [Enums.ComposeType.Draft, MessageStore.message()]);
			}
		};

		MessageViewMailBoxUserView.prototype.scrollMessageToTop = function ()
		{
			if (this.oMessageScrollerDom)
			{
				if (50 < this.oMessageScrollerDom.scrollTop())
				{
					this.oMessageScrollerDom
						.scrollTop(50)
						.animate({'scrollTop': 0}, 200)
					;
				}
				else
				{
					this.oMessageScrollerDom.scrollTop(0);
				}

				Utils.windowResize();
			}
		};

		MessageViewMailBoxUserView.prototype.scrollMessageToLeft = function ()
		{
			if (this.oMessageScrollerDom)
			{
				this.oMessageScrollerDom.scrollLeft(0);
				Utils.windowResize();
			}
		};

		MessageViewMailBoxUserView.prototype.getAttachmentsHashes = function ()
		{
			return _.compact(_.map(this.message() ? this.message().attachments() : [], function (oItem) {
				return oItem && !oItem.isLinked && oItem.checked() ? oItem.download : '';
			}));
		};

		MessageViewMailBoxUserView.prototype.downloadAsZip = function ()
		{
			var self = this, aHashes = this.getAttachmentsHashes();
			if (0 < aHashes.length)
			{
				Promises.attachmentsActions('Zip', aHashes, this.downloadAsZipLoading).then(function (oResult) {
					if (oResult && oResult.Result && oResult.Result.Files &&
						oResult.Result.Files[0] && oResult.Result.Files[0].Hash)
					{
						__webpack_require__(/*! App/User */ 6).default.download(
							Links.attachmentDownload(oResult.Result.Files[0].Hash));
					}
					else
					{
						self.downloadAsZipError(true);
					}
				}).catch(function () {
					self.downloadAsZipError(true);
				});
			}
			else
			{
				this.highlightUnselectedAttachments(true);
			}
		};

		MessageViewMailBoxUserView.prototype.saveToOwnCloud = function ()
		{
			var self = this, aHashes = this.getAttachmentsHashes();
			if (0 < aHashes.length)
			{
				Promises.attachmentsActions('OwnCloud', aHashes, this.saveToOwnCloudLoading).then(function (oResult) {
					if (oResult && oResult.Result)
					{
						self.saveToOwnCloudSuccess(true);
					}
					else
					{
						self.saveToOwnCloudError(true);
					}
				}).catch(function () {
					self.saveToOwnCloudError(true);
				});
			}
			else
			{
				this.highlightUnselectedAttachments(true);
			}
		};

		MessageViewMailBoxUserView.prototype.saveToDropbox = function ()
		{
			var self = this, aFiles = [], aHashes = this.getAttachmentsHashes();
			if (0 < aHashes.length)
			{
				if (window.Dropbox)
				{
					Promises.attachmentsActions('Dropbox', aHashes, this.saveToDropboxLoading).then(function (oResult) {
						if (oResult && oResult.Result && oResult.Result.Url && oResult.Result.ShortLife && oResult.Result.Files)
						{
							if (window.Dropbox && Utils.isArray(oResult.Result.Files))
							{
								_.each(oResult.Result.Files, function (oItem) {
									aFiles.push({
										'url': oResult.Result.Url +
											Links.attachmentDownload(oItem.Hash, oResult.Result.ShortLife),
										'filename': oItem.FileName
									});
								});

								window.Dropbox.save({
									'files': aFiles,
									'progress': function () {
										self.saveToDropboxLoading(true);
										self.saveToDropboxError(false);
										self.saveToDropboxSuccess(false);
									},
									'cancel': function () {
										self.saveToDropboxSuccess(false);
										self.saveToDropboxError(false);
										self.saveToDropboxLoading(false);
									},
									'success': function () {
										self.saveToDropboxSuccess(true);
										self.saveToDropboxLoading(false);
									},
									'error': function () {
										self.saveToDropboxError(true);
										self.saveToDropboxLoading(false);
									}
								});
							}
							else
							{
								self.saveToDropboxError(true);
							}
						}
					}).catch(function () {
						self.saveToDropboxError(true);
					});
				}
			}
			else
			{
				this.highlightUnselectedAttachments(true);
			}
		};

		/**
		 * @param {MessageModel} oMessage
		 */
		MessageViewMailBoxUserView.prototype.showImages = function (oMessage)
		{
			if (oMessage && oMessage.showExternalImages)
			{
				oMessage.showExternalImages(true);
			}

			this.checkHeaderHeight();
		};

		/**
		 * @return {string}
		 */
		MessageViewMailBoxUserView.prototype.printableCheckedMessageCount = function ()
		{
			var iCnt = this.messageListCheckedOrSelectedUidsWithSubMails().length;
			return 0 < iCnt ? (100 > iCnt ? iCnt : '99+') : '';
		};

		/**
		 * @param {MessageModel} oMessage
		 */
		MessageViewMailBoxUserView.prototype.readReceipt = function (oMessage)
		{
			if (oMessage && '' !== oMessage.readReceipt())
			{
				Remote.sendReadReceiptMessage(Utils.emptyFunction, oMessage.folderFullNameRaw, oMessage.uid,
					oMessage.readReceipt(),
					Translator.i18n('READ_RECEIPT/SUBJECT', {'SUBJECT': oMessage.subject()}),
					Translator.i18n('READ_RECEIPT/BODY', {'READ-RECEIPT': AccountStore.email()}));

				oMessage.isReadReceipt(true);

				Cache.storeMessageFlagsToCache(oMessage);

				__webpack_require__(/*! App/User */ 6).default.reloadFlagsCurrentMessageListAndMessageFromCache();
			}

			this.checkHeaderHeight();
		};

		module.exports = MessageViewMailBoxUserView;

	}());

/***/ },
/* 164 */
/*!*************************************************!*\
  !*** ./dev/View/User/MailBox/SystemDropDown.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractSystemDropDownViewModel = __webpack_require__(/*! View/User/AbstractSystemDropDown */ 99)
		;

		/**
		 * @constructor
		 * @extends AbstractSystemDropDownViewModel
		 */
		function SystemDropDownMailBoxUserView()
		{
			AbstractSystemDropDownViewModel.call(this);
			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/User/MailBox/SystemDropDown', 'View/App/MailBox/SystemDropDown', 'MailBoxSystemDropDownViewModel'], SystemDropDownMailBoxUserView);
		_.extend(SystemDropDownMailBoxUserView.prototype, AbstractSystemDropDownViewModel.prototype);

		module.exports = SystemDropDownMailBoxUserView;

	}());


/***/ },
/* 165 */
/*!****************************************!*\
  !*** ./dev/View/User/Settings/Menu.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),
			key = __webpack_require__(/*! key */ 18),

			Enums = __webpack_require__(/*! Common/Enums */ 3),
			Globals = __webpack_require__(/*! Common/Globals */ 7),
			Links = __webpack_require__(/*! Common/Links */ 12),

			Cache = __webpack_require__(/*! Common/Cache */ 17),
			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @param {?} oScreen
		 *
		 * @constructor
		 * @extends AbstractView
		 */
		function MenuSettingsUserView(oScreen)
		{
			AbstractView.call(this, 'Left', 'SettingsMenu');

			this.leftPanelDisabled = Globals.leftPanelDisabled;

			this.mobile = Settings.appSettingsGet('mobile');

			this.menu = oScreen.menu;

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/User/Settings/Menu', 'View/App/Settings/Menu', 'SettingsMenuViewModel'], MenuSettingsUserView);
		_.extend(MenuSettingsUserView.prototype, AbstractView.prototype);

		MenuSettingsUserView.prototype.onBuild = function (oDom)
		{
	//		var self = this;
	//		key('esc', Enums.KeyState.Settings, function () {
	//			self.backToMailBoxClick();
	//		});

			if (this.mobile)
			{
				oDom
					.on('click', '.b-settings-menu .e-item.selectable', function () {
						Globals.leftPanelDisabled(true);
					})
				;
			}

			key('up, down', Enums.KeyState.Settings, _.throttle(function (event, handler) {

				var
					sH = '',
					iIndex = -1,
					bUp = handler && 'up' === handler.shortcut,
					$items = $('.b-settings-menu .e-item', oDom)
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

		MenuSettingsUserView.prototype.link = function (sRoute)
		{
			return Links.settings(sRoute);
		};

		MenuSettingsUserView.prototype.backToMailBoxClick = function ()
		{
			kn.setHash(Links.inbox(Cache.getFolderInboxName()));
		};

		module.exports = MenuSettingsUserView;

	}());

/***/ },
/* 166 */
/*!****************************************!*\
  !*** ./dev/View/User/Settings/Pane.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			Globals = __webpack_require__(/*! Common/Globals */ 7),

			Settings = __webpack_require__(/*! Storage/Settings */ 8),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractView = __webpack_require__(/*! Knoin/AbstractView */ 9)
		;

		/**
		 * @constructor
		 * @extends AbstractView
		 */
		function PaneSettingsUserView()
		{
			AbstractView.call(this, 'Right', 'SettingsPane');

			this.mobile = Settings.appSettingsGet('mobile');

			this.leftPanelDisabled = Globals.leftPanelDisabled;

			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/User/Settings/Pane', 'View/App/Settings/Pane', 'SettingsPaneViewModel'], PaneSettingsUserView);
		_.extend(PaneSettingsUserView.prototype, AbstractView.prototype);

		PaneSettingsUserView.prototype.onShow = function ()
		{
			__webpack_require__(/*! Stores/User/Message */ 31).message(null);
		};

		PaneSettingsUserView.prototype.hideLeft = function (oItem, oEvent)
		{
			oEvent.preventDefault();
			oEvent.stopPropagation();

			Globals.leftPanelDisabled(true);
		};

		PaneSettingsUserView.prototype.showLeft = function (oItem, oEvent)
		{
			oEvent.preventDefault();
			oEvent.stopPropagation();

			Globals.leftPanelDisabled(false);
		};

		PaneSettingsUserView.prototype.onBuild = function (oDom)
		{
			if (this.mobile)
			{
				oDom
					.on('click', function () {
						Globals.leftPanelDisabled(true);
					})
				;
			}
		};

		PaneSettingsUserView.prototype.backToMailBoxClick = function ()
		{
			kn.setHash(__webpack_require__(/*! Common/Links */ 12).inbox(
				__webpack_require__(/*! Common/Cache */ 17).getFolderInboxName()));
		};

		module.exports = PaneSettingsUserView;

	}());

/***/ },
/* 167 */
/*!**************************************************!*\
  !*** ./dev/View/User/Settings/SystemDropDown.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	(function () {

		'use strict';

		var
			_ = __webpack_require__(/*! _ */ 2),

			kn = __webpack_require__(/*! Knoin/Knoin */ 4),
			AbstractSystemDropDownUserView = __webpack_require__(/*! View/User/AbstractSystemDropDown */ 99)
		;

		/**
		 * @constructor
		 * @extends AbstractSystemDropDownUserView
		 */
		function SystemDropDownSettingsUserView()
		{
			AbstractSystemDropDownUserView.call(this);
			kn.constructorEnd(this);
		}

		kn.extendAsViewModel(['View/User/Settings/SystemDropDown', 'View/App/Settings/SystemDropDown', 'SettingsSystemDropDownViewModel'], SystemDropDownSettingsUserView);
		_.extend(SystemDropDownSettingsUserView.prototype, AbstractSystemDropDownUserView.prototype);

		module.exports = SystemDropDownSettingsUserView;

	}());

/***/ },
/* 168 */
/*!*******************************!*\
  !*** ./dev/Common/Base64.jsx ***!
  \*******************************/
/***/ function(module, exports) {

	
	// Base64 encode / decode
	// http://www.webtoolkit.info/

	var BASE_64_CHR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	/* jslint bitwise: true */
	/* eslint-disable */
	var Base64 = {

		// public method for urlsafe encoding
		urlsafe_encode: function urlsafe_encode(input) {
			return Base64.encode(input).replace(/[+]/g, '-').replace(/[\/]/g, '_').replace(/[=]/g, '.');
		},

		// public method for encoding
		encode: function encode(input) {

			var output = '',
			    chr1 = void 0,
			    chr2 = void 0,
			    chr3 = void 0,
			    enc1 = void 0,
			    enc2 = void 0,
			    enc3 = void 0,
			    enc4 = void 0,
			    i = 0;

			input = Base64._utf8_encode(input);

			while (i < input.length) {
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);

				enc1 = chr1 >> 2;
				enc2 = (chr1 & 3) << 4 | chr2 >> 4;
				enc3 = (chr2 & 15) << 2 | chr3 >> 6;
				enc4 = chr3 & 63;

				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}

				output = output + BASE_64_CHR.charAt(enc1) + BASE_64_CHR.charAt(enc2) + BASE_64_CHR.charAt(enc3) + BASE_64_CHR.charAt(enc4);
			}

			return output;
		},

		// public method for decoding
		decode: function decode(input) {

			var output = '',
			    chr1 = void 0,
			    chr2 = void 0,
			    chr3 = void 0,
			    enc1 = void 0,
			    enc2 = void 0,
			    enc3 = void 0,
			    enc4 = void 0,
			    i = 0;

			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

			while (i < input.length) {
				enc1 = BASE_64_CHR.indexOf(input.charAt(i++));
				enc2 = BASE_64_CHR.indexOf(input.charAt(i++));
				enc3 = BASE_64_CHR.indexOf(input.charAt(i++));
				enc4 = BASE_64_CHR.indexOf(input.charAt(i++));

				chr1 = enc1 << 2 | enc2 >> 4;
				chr2 = (enc2 & 15) << 4 | enc3 >> 2;
				chr3 = (enc3 & 3) << 6 | enc4;

				output = output + String.fromCharCode(chr1);

				if (enc3 !== 64) {
					output = output + String.fromCharCode(chr2);
				}

				if (enc4 !== 64) {
					output = output + String.fromCharCode(chr3);
				}
			}

			return Base64._utf8_decode(output);
		},

		// private method for UTF-8 encoding
		_utf8_encode: function _utf8_encode(string) {

			string = string.replace(/\r\n/g, "\n");

			var utftext = '',
			    n = 0,
			    l = string.length,
			    c = 0;

			for (; n < l; n++) {

				c = string.charCodeAt(n);

				if (c < 128) {
					utftext += String.fromCharCode(c);
				} else if (c > 127 && c < 2048) {
					utftext += String.fromCharCode(c >> 6 | 192);
					utftext += String.fromCharCode(c & 63 | 128);
				} else {
					utftext += String.fromCharCode(c >> 12 | 224);
					utftext += String.fromCharCode(c >> 6 & 63 | 128);
					utftext += String.fromCharCode(c & 63 | 128);
				}
			}

			return utftext;
		},

		// private method for UTF-8 decoding
		_utf8_decode: function _utf8_decode(utftext) {

			var string = '',
			    i = 0,
			    c = 0,
			    c2 = 0,
			    c3 = 0;

			while (i < utftext.length) {
				c = utftext.charCodeAt(i);

				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				} else if (c > 191 && c < 224) {
					c2 = utftext.charCodeAt(i + 1);
					string += String.fromCharCode((c & 31) << 6 | c2 & 63);
					i += 2;
				} else {
					c2 = utftext.charCodeAt(i + 1);
					c3 = utftext.charCodeAt(i + 2);
					string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
					i += 3;
				}
			}

			return string;
		}
	};

	module.exports = Base64;
	/* jslint bitwise: false */
	/* eslint-enable */

/***/ },
/* 169 */
/*!***************************************************!*\
  !*** ./dev/Common/ClientStorageDriver/Cookie.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Consts__ = __webpack_require__(/*! Common/Consts */ 16);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





	var CookieDriver = function () {
		function CookieDriver() {
			_classCallCheck(this, CookieDriver);
		}

		/**
	  * @param {string} key
	  * @param {*} data
	  * @return {boolean}
	  */

		CookieDriver.prototype.set = function set(key, data) {

			var result = false,
			    storageResult = null;

			try {
				var storageValue = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].cookie(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Consts__["CLIENT_SIDE_STORAGE_INDEX_NAME"]);
				storageResult = null === storageValue ? null : /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["f"].parse(storageValue);
			} catch (e) {
				// eslint-disable-line no-empty
			}

			(storageResult || (storageResult = {}))[key] = data;

			try {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].cookie(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Consts__["CLIENT_SIDE_STORAGE_INDEX_NAME"], /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["f"].stringify(storageResult), {
					expires: 30
				});

				result = true;
			} catch (e) {
				// eslint-disable-line no-empty
			}

			return result;
		};

		/**
	  * @param {string} key
	  * @return {*}
	  */


		CookieDriver.prototype.get = function get(key) {

			var result = null;

			try {
				var storageValue = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["a"].cookie(/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Consts__["CLIENT_SIDE_STORAGE_INDEX_NAME"]),
				    storageResult = null === storageValue ? null : /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["f"].parse(storageValue);

				result = storageResult && !/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(storageResult[key]) ? storageResult[key] : null;
			} catch (e) {
				// eslint-disable-line no-empty
			}

			return result;
		};

		/**
	  * @return {boolean}
	  */


		CookieDriver.supported = function supported() {
			return !!(/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].navigator && /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].navigator.cookieEnabled);
		};

		return CookieDriver;
	}();


	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return CookieDriver; }});/* unused harmony export default */

/***/ },
/* 170 */
/*!*********************************************************!*\
  !*** ./dev/Common/ClientStorageDriver/LocalStorage.jsx ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(/*! common */ 10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Consts__ = __webpack_require__(/*! Common/Consts */ 16);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





	var LocalStorageDriver = function () {
		function LocalStorageDriver() {
			_classCallCheck(this, LocalStorageDriver);
		}

		/**
	  * @param {string} key
	  * @param {*} data
	  * @return {boolean}
	  */

		LocalStorageDriver.prototype.set = function set(key, data) {

			var result = false,
			    storageResult = null;

			try {
				var storageValue = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].localStorage[/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Consts__["CLIENT_SIDE_STORAGE_INDEX_NAME"]] || null;
				storageResult = null === storageValue ? null : /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["f"].parse(storageValue);
			} catch (e) {
				// eslint-disable-line no-empty
			}

			(storageResult || (storageResult = {}))[key] = data;

			try {
				/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].localStorage[/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Consts__["CLIENT_SIDE_STORAGE_INDEX_NAME"]] = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["f"].stringify(storageResult);
				result = true;
			} catch (e) {
				// eslint-disable-line no-empty
			}

			return result;
		};

		/**
	  * @param {string} key
	  * @return {*}
	  */


		LocalStorageDriver.prototype.get = function get(key) {

			var result = null;

			try {
				var storageValue = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].localStorage[/* harmony import */__WEBPACK_IMPORTED_MODULE_2_Common_Consts__["CLIENT_SIDE_STORAGE_INDEX_NAME"]] || null,
				    storageResult = null === storageValue ? null : /* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["f"].parse(storageValue);

				result = storageResult && !/* harmony import */__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"].bind()(storageResult[key]) ? storageResult[key] : null;
			} catch (e) {
				// eslint-disable-line no-empty
			}

			return result;
		};

		/**
	  * @return {boolean}
	  */


		LocalStorageDriver.supported = function supported() {
			return !!/* harmony import */__WEBPACK_IMPORTED_MODULE_0_common__["b"].localStorage;
		};

		return LocalStorageDriver;
	}();


	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return LocalStorageDriver; }});/* unused harmony export default */

/***/ },
/* 171 */,
/* 172 */
/*!*********************!*\
  !*** ./dev/app.jsx ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap__ = __webpack_require__(/*! bootstrap */ 50);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_App_User__ = __webpack_require__(/*! App/User */ 6);




	/* harmony import */__WEBPACK_IMPORTED_MODULE_0_bootstrap__["a"].bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_1_App_User__["default"]);

/***/ },
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */
/*!*********************************!*\
  !*** external "window.Tinycon" ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = window.Tinycon;

/***/ },
/* 180 */
/*!***********************************!*\
  !*** external "window.ifvisible" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = window.ifvisible;

/***/ },
/* 181 */
/*!****************************!*\
  !*** external "window.qr" ***!
  \****************************/
/***/ function(module, exports) {

	module.exports = window.qr;

/***/ }
/******/ ]);
