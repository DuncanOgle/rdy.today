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
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/components/Card/Card.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Card/Card.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    background: #EFF2F7;\n    padding: 10px;\n    color: #3C4858;\n    border-radius: 10px;\n    margin-bottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/Modal/StationSelector/StationSelector.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Modal/StationSelector/StationSelector.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-container {\n    background: rgba(0, 0, 0, 0.8);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    min-height: 100vh;\n    padding: 20px;\n    z-index: 3;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    overflow: hidden;\n    align-items: flex-start;\n}\n\n.modal {\n    background: #FFF;\n    border-radius: 5px;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    flex-direction: column;\n    max-height: 100%;\n    width: 100%;\n    max-width: 300px;\n}\n\n.search {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    width: 100%;\n    font-size: 2rem;\n    padding: 10px 10px;\n    border: 0;\n    border-bottom: 1px solid #ccc;\n    margin: 0;\n}\n\n.stations {\n    overflow: scroll;\n}\n\n.station {\n    border-bottom: 1px solid #ccc;\n    font-size: 1.5rem;\n    padding: 10px 10px;\n    cursor: pointer;\n}\n\n.station:hover {\n    background: #f1f1f1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/RailFromTo/RailFromTo.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/RailFromTo/RailFromTo.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selector {\n    border-bottom: 1px dashed #333;\n    display: inline-block;\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/TubeRow/Tube.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/TubeRow/Tube.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line {\n    padding: 10px;\n}\n\n.line:first-of-type {\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.line:last-of-type {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.northern {\n    background: #000;\n    color: #FFF\n}\n\n.bakerloo {\n    background: #894e24;\n    color: #FFF\n}\n\n.central {\n    background: #dc241f;\n    color: #FFF\n}\n\n.circle {\n    background: #ffce00\n}\n\n.district {\n    background: #007229;\n    color: #FFF\n}\n\n.hammersmith, .hammersmith-city {\n    background: #d799af\n}\n\n.jubilee {\n    background: #6a7278;\n    color: #FFF\n}\n\n.metropolitan {\n    background: #751056;\n    color: #FFF\n}\n\n.piccadilly {\n    background: #0019a8;\n    color: #FFF\n}\n\n.victoria {\n    background: #00a0e2\n}\n\n.waterloo, .waterloo-city {\n    background: #76d0bd\n}\n\n.london-overground {\n    background: #e86a10;\n    color: #FFF\n}\n\n.dlr {\n    background: #00afad\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/WeatherRow/Weather.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/WeatherRow/Weather.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rain {\n    position: relative;\n    z-index: 1;\n    padding: 4px 10px;\n    white-space: nowrap;\n}\n\n.rain:first-of-type::before {\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.rain:last-of-type::before {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.rain::before {\n    background: rgba(51, 122, 183, 0.3);\n    content: '';\n    height: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    border-right: 1px solid rgba(51, 122, 183, 0.5)\n}\n\n.rain-0:before {\n    display: none;\n}\n\n.rain-1:before {\n    width: 1%\n}\n\n.rain-2:before {\n    width: 2%\n}\n\n.rain-3:before {\n    width: 3%\n}\n\n.rain-4:before {\n    width: 4%\n}\n\n.rain-5:before {\n    width: 5%\n}\n\n.rain-6:before {\n    width: 6%\n}\n\n.rain-7:before {\n    width: 7%\n}\n\n.rain-8:before {\n    width: 8%\n}\n\n.rain-9:before {\n    width: 9%\n}\n\n.rain-10:before {\n    width: 10%\n}\n\n.rain-11:before {\n    width: 11%\n}\n\n.rain-12:before {\n    width: 12%\n}\n\n.rain-13:before {\n    width: 13%\n}\n\n.rain-14:before {\n    width: 14%\n}\n\n.rain-15:before {\n    width: 15%\n}\n\n.rain-16:before {\n    width: 16%\n}\n\n.rain-17:before {\n    width: 17%\n}\n\n.rain-18:before {\n    width: 18%\n}\n\n.rain-19:before {\n    width: 19%\n}\n\n.rain-20:before {\n    width: 20%\n}\n\n.rain-21:before {\n    width: 21%\n}\n\n.rain-22:before {\n    width: 22%\n}\n\n.rain-23:before {\n    width: 23%\n}\n\n.rain-24:before {\n    width: 24%\n}\n\n.rain-25:before {\n    width: 25%\n}\n\n.rain-26:before {\n    width: 26%\n}\n\n.rain-27:before {\n    width: 27%\n}\n\n.rain-28:before {\n    width: 28%\n}\n\n.rain-29:before {\n    width: 29%\n}\n\n.rain-30:before {\n    width: 30%\n}\n\n.rain-31:before {\n    width: 31%\n}\n\n.rain-32:before {\n    width: 32%\n}\n\n.rain-33:before {\n    width: 33%\n}\n\n.rain-34:before {\n    width: 34%\n}\n\n.rain-35:before {\n    width: 35%\n}\n\n.rain-36:before {\n    width: 36%\n}\n\n.rain-37:before {\n    width: 37%\n}\n\n.rain-38:before {\n    width: 38%\n}\n\n.rain-39:before {\n    width: 39%\n}\n\n.rain-40:before {\n    width: 40%\n}\n\n.rain-41:before {\n    width: 41%\n}\n\n.rain-42:before {\n    width: 42%\n}\n\n.rain-43:before {\n    width: 43%\n}\n\n.rain-44:before {\n    width: 44%\n}\n\n.rain-45:before {\n    width: 45%\n}\n\n.rain-46:before {\n    width: 46%\n}\n\n.rain-47:before {\n    width: 47%\n}\n\n.rain-48:before {\n    width: 48%\n}\n\n.rain-49:before {\n    width: 49%\n}\n\n.rain-50:before {\n    width: 50%\n}\n\n.rain-51:before {\n    width: 51%\n}\n\n.rain-52:before {\n    width: 52%\n}\n\n.rain-53:before {\n    width: 53%\n}\n\n.rain-54:before {\n    width: 54%\n}\n\n.rain-55:before {\n    width: 55%\n}\n\n.rain-56:before {\n    width: 56%\n}\n\n.rain-57:before {\n    width: 57%\n}\n\n.rain-58:before {\n    width: 58%\n}\n\n.rain-59:before {\n    width: 59%\n}\n\n.rain-60:before {\n    width: 60%\n}\n\n.rain-61:before {\n    width: 61%\n}\n\n.rain-62:before {\n    width: 62%\n}\n\n.rain-63:before {\n    width: 63%\n}\n\n.rain-64:before {\n    width: 64%\n}\n\n.rain-65:before {\n    width: 65%\n}\n\n.rain-66:before {\n    width: 66%\n}\n\n.rain-67:before {\n    width: 67%\n}\n\n.rain-68:before {\n    width: 68%\n}\n\n.rain-69:before {\n    width: 69%\n}\n\n.rain-70:before {\n    width: 70%\n}\n\n.rain-71:before {\n    width: 71%\n}\n\n.rain-72:before {\n    width: 72%\n}\n\n.rain-73:before {\n    width: 73%\n}\n\n.rain-74:before {\n    width: 74%\n}\n\n.rain-75:before {\n    width: 75%\n}\n\n.rain-76:before {\n    width: 76%\n}\n\n.rain-77:before {\n    width: 77%\n}\n\n.rain-78:before {\n    width: 78%\n}\n\n.rain-79:before {\n    width: 79%\n}\n\n.rain-80:before {\n    width: 80%\n}\n\n.rain-81:before {\n    width: 81%\n}\n\n.rain-82:before {\n    width: 82%\n}\n\n.rain-83:before {\n    width: 83%\n}\n\n.rain-84:before {\n    width: 84%\n}\n\n.rain-85:before {\n    width: 85%\n}\n\n.rain-86:before {\n    width: 86%\n}\n\n.rain-87:before {\n    width: 87%\n}\n\n.rain-88:before {\n    width: 88%\n}\n\n.rain-89:before {\n    width: 89%\n}\n\n.rain-90:before {\n    width: 90%\n}\n\n.rain-91:before {\n    width: 91%\n}\n\n.rain-92:before {\n    width: 92%\n}\n\n.rain-93:before {\n    width: 93%\n}\n\n.rain-94:before {\n    width: 94%\n}\n\n.rain-95:before {\n    width: 95%\n}\n\n.rain-96:before {\n    width: 96%\n}\n\n.rain-97:before {\n    width: 97%\n}\n\n.rain-98:before {\n    width: 98%\n}\n\n.rain-99:before {\n    width: 99%\n}\n\n.rain-100:before {\n    width: 100%\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/views/Weather/Weather.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader!./src/views/Weather/Weather.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fade-out::after {\n  content: \"\";\n  background: linear-gradient(to left, rgb(229, 233, 242) 0%, rgba(229, 233, 242, 0) 100%);\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 20px;\n  z-index: 2;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./styles/main.css":
/*!***************************************************!*\
  !*** ./node_modules/css-loader!./styles/main.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  padding-bottom: 10px;\n  font-size: 2.75em;\n}\n\n.title a, .title a:visited {\n  color: #3C4858;\n  text-decoration: none;\n}\n\n.container {\n  background: #FFF;\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 10px;\n}\n\n.hidden {\n  display: none;\n}\n\n.a, a:visited {\n  color: #FF7849;\n}\n\nli {\n  margin-left: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.umd.js":
/*!********************************************!*\
  !*** ./node_modules/mitt/dist/mitt.umd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){ true?module.exports=e():undefined}(this,function(){function n(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}return n});


/***/ }),

/***/ "./node_modules/preact/dist/preact.esm.js":
/*!************************************************!*\
  !*** ./node_modules/preact/dist/preact.esm.js ***!
  \************************************************/
/*! exports provided: h, createElement, cloneElement, Component, render, rerender, options, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/** Virtual DOM Node */
function VNode() {}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
var options = {

	/** If `true`, `prop` changes trigger synchronous component updates.
  *	@name syncComponentUpdates
  *	@type Boolean
  *	@default true
  */
	//syncComponentUpdates: true,

	/** Processes all created VNodes.
  *	@param {VNode} vnode	A newly-created VNode to normalize/process
  */
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
	// beforeUnmount(component) { }
};

var stack = [];

var EMPTY_CHILDREN = [];

/**
 * JSX/hyperscript reviver.
 * @see http://jasonformat.com/wtf-is-jsx
 * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *
 * Note: this is exported as both `h()` and `createElement()` for compatibility reasons.
 *
 * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a lightweight representation
 * of the structure of a DOM tree. This structure can be realized by recursively comparing it against
 * the current _actual_ DOM structure, and applying only the differences.
 *
 * `h()`/`createElement()` accepts an element name, a list of attributes/props,
 * and optionally children to append to the element.
 *
 * @example The following DOM tree
 *
 * `<div id="foo" name="bar">Hello!</div>`
 *
 * can be constructed using this function as:
 *
 * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
 *
 * @param {string} nodeName	An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} attributes	Any attributes/props to set on the created element.
 * @param rest			Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 *
 * @public
 */
function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

/**
 *  Copy all properties from `props` onto `obj`.
 *  @param {Object} obj		Object onto which properties should be copied.
 *  @param {Object} props	Object from which to copy properties.
 *  @returns obj
 *  @private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 *
 * @param {Function} callback
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {VNode} vnode		The virutal DOM element to clone
 * @param {Object} props	Attributes/props to add when cloning
 * @param {VNode} rest		Any additional arguments will be used as replacement children.
 */
function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

/**
 * Check if two nodes are equivalent.
 *
 * @param {Node} node			DOM Node to compare
 * @param {VNode} vnode			Virtual DOM node to compare
 * @param {boolean} [hyrdating=false]	If true, ignores component constructors when comparing.
 * @private
 */
function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined;
  }
  if (typeof vnode.nodeName === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  }
  return hydrating || node._componentConstructor === vnode.nodeName;
}

/**
 * Check if an Element has a given nodeName, case-insensitively.
 *
 * @param {Element} node	A DOM Element to inspect the name of.
 * @param {String} nodeName	Unnormalized name to compare against.
 */
function isNamedNode(node, nodeName) {
  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 *
 * @param {VNode} vnode
 * @returns {Object} props
 */
function getNodeProps(vnode) {
  var props = extend({}, vnode.attributes);
  props.children = vnode.children;

  var defaultProps = vnode.nodeName.defaultProps;
  if (defaultProps !== undefined) {
    for (var i in defaultProps) {
      if (props[i] === undefined) {
        props[i] = defaultProps[i];
      }
    }
  }

  return props;
}

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {
		// ignore
	} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		setProperty(node, name, value == null ? '' : value);
		if (value == null || value === false) node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
	try {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},


	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},


	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};


/* harmony default export */ __webpack_exports__["default"] = (preact);
undefined

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/components/Card/Card.css":
/*!**************************************!*\
  !*** ./src/components/Card/Card.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./Card.css */ "./node_modules/css-loader/index.js!./src/components/Card/Card.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Card/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Card/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
__webpack_require__(/*! ./Card.css */ "./src/components/Card/Card.css");
var Card = function (props) { return (preact_1.h("div", { className: "card" }, props.children)); };
exports.default = Card;


/***/ }),

/***/ "./src/components/CardHeader.tsx":
/*!***************************************!*\
  !*** ./src/components/CardHeader.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var styling = {
    marginBottom: '10px'
};
var CardHeader = function (props) { return (preact_1.h("div", { style: Object.assign(styling, props.style) }, props.children)); };
exports.default = CardHeader;


/***/ }),

/***/ "./src/components/CardInner.tsx":
/*!**************************************!*\
  !*** ./src/components/CardInner.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var CardInner = function (props) {
    var styling = Object.assign(props.style || {}, {
        borderRadius: '10px',
        background: '#E5E9F2',
        position: 'relative'
    });
    if (props.withPadding) {
        styling.padding = '10px';
    }
    return (preact_1.h("div", { style: styling, className: props.className }, props.children));
};
exports.default = CardInner;


/***/ }),

/***/ "./src/components/CardLoading.tsx":
/*!****************************************!*\
  !*** ./src/components/CardLoading.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var CardLoading = function () { return (preact_1.h("div", null, "Loading...")); };
exports.default = CardLoading;


/***/ }),

/***/ "./src/components/CardTitle.tsx":
/*!**************************************!*\
  !*** ./src/components/CardTitle.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var styling = {
    fontWeight: 700,
    color: '#3C4858'
};
var CardTitle = function (props) { return (preact_1.h("h2", { style: styling }, props.children)); };
exports.default = CardTitle;


/***/ }),

/***/ "./src/components/Modal/StationSelector/StationSelector.css":
/*!******************************************************************!*\
  !*** ./src/components/Modal/StationSelector/StationSelector.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./StationSelector.css */ "./node_modules/css-loader/index.js!./src/components/Modal/StationSelector/StationSelector.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Modal/StationSelector/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/Modal/StationSelector/index.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
__webpack_require__(/*! ./StationSelector.css */ "./src/components/Modal/StationSelector/StationSelector.css");
var CardLoading_1 = __webpack_require__(/*! ../../../components/CardLoading */ "./src/components/CardLoading.tsx");
var RailService_1 = __webpack_require__(/*! ../../../services/RailService */ "./src/services/RailService.ts");
var QueryString_1 = __webpack_require__(/*! ../../../services/QueryString */ "./src/services/QueryString.ts");
var PubSub_1 = __webpack_require__(/*! ../../../services/PubSub */ "./src/services/PubSub.ts");
var Constants_1 = __webpack_require__(/*! ../../../services/Constants */ "./src/services/Constants.ts");
var GeoService_1 = __webpack_require__(/*! ../../../services/GeoService */ "./src/services/GeoService.ts");
var StationSelector = (function (_super) {
    __extends(StationSelector, _super);
    function StationSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            stationsList: [],
            filterString: '',
            stationToChange: props.data.stationToChange
        };
        _this.onSearch = _this.onSearch.bind(_this);
        _this.onStationSelect = _this.onStationSelect.bind(_this);
        _this.closeModal = _this.closeModal.bind(_this);
        _this.escapeListener = _this.escapeListener.bind(_this);
        _this.getStationsList = _this.getStationsList.bind(_this);
        return _this;
    }
    StationSelector.prototype.componentDidMount = function () {
        var _this = this;
        GeoService_1.default.getGeoPosition()
            .then(function (coords) {
            _this.getStationsList(coords.lat + "," + coords.lon);
        })
            .catch(function () {
            _this.getStationsList();
        });
        window.addEventListener('keyup', this.escapeListener);
        document.getElementById('search').focus();
    };
    StationSelector.prototype.componentWillUnmount = function () {
        window.removeEventListener('keyup', this.escapeListener);
    };
    StationSelector.prototype.onSearch = function (event) {
        this.setState({
            filterString: event.target.value
        });
    };
    StationSelector.prototype.onStationSelect = function (stationCode) {
        QueryString_1.default.addOrUpdateQueryString(this.state.stationToChange, stationCode);
        PubSub_1.default.publish(Constants_1.default.STATION_SELECT);
        this.closeModal();
    };
    StationSelector.prototype.getStationsList = function (coords) {
        var _this = this;
        RailService_1.default.getStationsList(coords)
            .then(function (response) {
            _this.setState({
                stationsList: response.data
            });
        });
    };
    StationSelector.prototype.escapeListener = function (event) {
        if (event.key === 'Escape') {
            this.closeModal();
        }
    };
    StationSelector.prototype.closeModal = function (event) {
        if (!event || event.target.id === 'modal') {
            PubSub_1.default.publish(Constants_1.default.STATION_SELECT_CLOSE);
        }
    };
    StationSelector.prototype.render = function () {
        var _this = this;
        var filtered = RailService_1.default.filterStationsList(this.state.filterString);
        var data = [];
        if (filtered) {
            data = Object.keys(filtered).map(function (stationCode) { return ({
                code: stationCode,
                title: filtered[stationCode].title || filtered[stationCode]
            }); });
        }
        return (preact_1.h("div", { className: "modal-container", onClick: this.closeModal, id: "modal" },
            preact_1.h("div", { className: "modal" },
                preact_1.h("input", { type: "text", className: "search", onKeyUp: this.onSearch, id: "search", value: this.state.filterString, placeholder: "Search for a station" }),
                !data.length &&
                    preact_1.h("div", { className: "station" },
                        preact_1.h(CardLoading_1.default, null)),
                !!data.length &&
                    preact_1.h("div", { className: "stations" }, data.map(function (element) { return (preact_1.h("div", { className: "station", onClick: function () { return _this.onStationSelect(element.code); } }, element.title)); })))));
    };
    return StationSelector;
}(preact_1.Component));
exports.default = StationSelector;


/***/ }),

/***/ "./src/components/Modal/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Modal/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var StationSelector_1 = __webpack_require__(/*! ./StationSelector */ "./src/components/Modal/StationSelector/index.tsx");
var PubSub_1 = __webpack_require__(/*! ../../services/PubSub */ "./src/services/PubSub.ts");
var Constants_1 = __webpack_require__(/*! ../../services/Constants */ "./src/services/Constants.ts");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            modals: []
        };
        _this.removeModal = _this.removeModal.bind(_this);
        _this.lockScrolling = _this.lockScrolling.bind(_this);
        _this.unlockScrolling = _this.unlockScrolling.bind(_this);
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        var _this = this;
        PubSub_1.default.subscribe(Constants_1.default.STATION_SELECT_OPEN, function (data) {
            var newModals = _this.state.modals;
            newModals.push(preact_1.h(StationSelector_1.default, { key: "stationSelector", data: data }));
            _this.setState({
                modals: newModals
            });
        });
        PubSub_1.default.subscribe(Constants_1.default.STATION_SELECT, function () { return _this.removeModal('stationSelector'); });
        PubSub_1.default.subscribe(Constants_1.default.STATION_SELECT_CLOSE, function () { return _this.removeModal('stationSelector'); });
    };
    Modal.prototype.removeModal = function (modalKey) {
        var newModals = this.state.modals.filter(function (element) { return element.key !== modalKey; });
        if (!newModals.length) {
            this.unlockScrolling();
        }
        this.setState({
            modals: newModals
        });
    };
    Modal.prototype.lockScrolling = function () {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    };
    Modal.prototype.unlockScrolling = function () {
        document.getElementsByTagName('body')[0].style.overflow = '';
    };
    Modal.prototype.render = function () {
        if (this.state.modals.length) {
            this.lockScrolling();
        }
        return (preact_1.h("div", null, this.state.modals));
    };
    return Modal;
}(preact_1.Component));
exports.default = Modal;


/***/ }),

/***/ "./src/components/RailFromTo/RailFromTo.css":
/*!**************************************************!*\
  !*** ./src/components/RailFromTo/RailFromTo.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./RailFromTo.css */ "./node_modules/css-loader/index.js!./src/components/RailFromTo/RailFromTo.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/RailFromTo/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/RailFromTo/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var Constants_1 = __webpack_require__(/*! ../../services/Constants */ "./src/services/Constants.ts");
var PubSub_1 = __webpack_require__(/*! ../../services/PubSub */ "./src/services/PubSub.ts");
var QueryString_1 = __webpack_require__(/*! ../../services/QueryString */ "./src/services/QueryString.ts");
__webpack_require__(/*! ./RailFromTo.css */ "./src/components/RailFromTo/RailFromTo.css");
var RailFromTo = (function (_super) {
    __extends(RailFromTo, _super);
    function RailFromTo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            from: props.data.fromName,
            to: props.data.toName
        };
        _this.showStationSelector = _this.showStationSelector.bind(_this);
        _this.switchDirection = _this.switchDirection.bind(_this);
        return _this;
    }
    RailFromTo.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            from: nextProps.data.fromName,
            to: nextProps.data.toName
        });
    };
    RailFromTo.prototype.showStationSelector = function (station) {
        PubSub_1.default.publish(Constants_1.default.STATION_SELECT_OPEN, { stationToChange: station });
    };
    RailFromTo.prototype.switchDirection = function () {
        QueryString_1.default.addOrUpdateQueryString('from', this.props.data.to);
        QueryString_1.default.addOrUpdateQueryString('to', this.props.data.from);
        PubSub_1.default.publish(Constants_1.default.STATION_SELECT);
    };
    RailFromTo.prototype.render = function () {
        var _this = this;
        return (preact_1.h("div", null,
            preact_1.h("span", { className: "selector", onClick: function () { return _this.showStationSelector('from'); } }, this.state.from),
            preact_1.h("span", { onClick: this.switchDirection }, " \u2192 "),
            preact_1.h("span", { className: "selector", onClick: function () { return _this.showStationSelector('to'); } }, this.state.to)));
    };
    return RailFromTo;
}(preact_1.Component));
exports.default = RailFromTo;


/***/ }),

/***/ "./src/components/RailMessages.tsx":
/*!*****************************************!*\
  !*** ./src/components/RailMessages.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var CardInner_1 = __webpack_require__(/*! ./CardInner */ "./src/components/CardInner.tsx");
var styling = {
    marginBottom: '10px'
};
var RailMessages = function (props) {
    if (!props.messages.length) {
        return null;
    }
    return (preact_1.h(CardInner_1.default, { style: styling, withPadding: true }, props.messages.map(function (row) { return (preact_1.h("ul", null,
        preact_1.h("li", { dangerouslySetInnerHTML: { __html: row } }))); })));
};
exports.default = RailMessages;


/***/ }),

/***/ "./src/components/RailRow.tsx":
/*!************************************!*\
  !*** ./src/components/RailRow.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var styling = {
    padding: '5px 5px'
};
function getStatus(row) {
    return row.cancelReason ? 'Cancelled' : row.etd;
}
function getStatusText(row) {
    var toReturn = '';
    if (row.cancelReason || row.delayReason) {
        toReturn = "<br><small>" + (row.cancelReason || row.delayReason) + "</small>";
    }
    return toReturn;
}
var RailRow = function (props) {
    var row = props.row;
    var key = "" + row.std + row.etd + row.platform + row.from + row.to;
    var platform = row.platform ? " / Platform " + row.platform : '';
    var departureTime = row.std;
    var trainStatus = getStatus(row);
    return (preact_1.h("p", { key: key, style: styling },
        departureTime,
        " (",
        trainStatus,
        ") ",
        platform,
        preact_1.h("span", { dangerouslySetInnerHTML: { __html: getStatusText(row) } })));
};
exports.default = RailRow;


/***/ }),

/***/ "./src/components/TubeRow/Tube.css":
/*!*****************************************!*\
  !*** ./src/components/TubeRow/Tube.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./Tube.css */ "./node_modules/css-loader/index.js!./src/components/TubeRow/Tube.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/TubeRow/index.tsx":
/*!******************************************!*\
  !*** ./src/components/TubeRow/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
__webpack_require__(/*! ./Tube.css */ "./src/components/TubeRow/Tube.css");
var WeatherRow = function (props) {
    var row = props.row;
    return (preact_1.h("p", { key: row.line, className: "line " + row.line }, row.disruption));
};
exports.default = WeatherRow;


/***/ }),

/***/ "./src/components/WeatherRow/Weather.css":
/*!***********************************************!*\
  !*** ./src/components/WeatherRow/Weather.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./Weather.css */ "./node_modules/css-loader/index.js!./src/components/WeatherRow/Weather.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/WeatherRow/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/WeatherRow/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
__webpack_require__(/*! ./Weather.css */ "./src/components/WeatherRow/Weather.css");
var WeatherRow = function (props) {
    var row = props.row;
    var hourOfWeather = "" + (row.hour < 10 ? '0' : '') + row.hour + ":00 ";
    return (preact_1.h("p", { key: hourOfWeather, className: "rain rain-" + row.pop },
        hourOfWeather,
        "- \u2600\uFE0F ",
        row.feelsLike,
        "\u00B0 / \uD83D\uDCA6 ",
        row.pop,
        "% / \uD83D\uDCA8 ",
        row.windSpeed,
        "mph / ",
        row.condition));
};
exports.default = WeatherRow;


/***/ }),

/***/ "./src/components/WeatherViewMore.tsx":
/*!********************************************!*\
  !*** ./src/components/WeatherViewMore.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var WeatherViewMore = function (props) {
    var styling = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        display: ''
    };
    if (!props.isVisible) {
        styling.display = 'none';
    }
    return (preact_1.h("a", { href: "", onClick: props.onClick, style: styling }, "Further ahead >"));
};
exports.default = WeatherViewMore;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
__webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
var Weather_1 = __webpack_require__(/*! ./views/Weather */ "./src/views/Weather/index.tsx");
var Tube_1 = __webpack_require__(/*! ./views/Tube */ "./src/views/Tube/index.tsx");
var Rail_1 = __webpack_require__(/*! ./views/Rail */ "./src/views/Rail/index.tsx");
var Modal_1 = __webpack_require__(/*! ./components/Modal */ "./src/components/Modal/index.tsx");
var Root = function () { return (preact_1.h("div", { className: "container" },
    preact_1.h(Modal_1.default, null),
    preact_1.h("h1", { className: "title" },
        preact_1.h("a", { href: "/" }, "Rdy.Today")),
    preact_1.h(Weather_1.default, null),
    preact_1.h("br", null),
    preact_1.h(Rail_1.default, null),
    preact_1.h("br", null),
    preact_1.h(Tube_1.default, null))); };
preact_1.render(preact_1.h(Root, null), document.getElementById('main'), document.getElementById('main').lastChild);


/***/ }),

/***/ "./src/services/Constants.ts":
/*!***********************************!*\
  !*** ./src/services/Constants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    STATION_SELECT_OPEN: 'Open station select',
    STATION_SELECT_CLOSE: 'Close station select',
    STATION_SELECT: 'Station selected'
};


/***/ }),

/***/ "./src/services/GeoService.ts":
/*!************************************!*\
  !*** ./src/services/GeoService.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function positionToObject(position) {
    return {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };
}
function getGeoPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation
            .getCurrentPosition(function (position) {
            resolve(positionToObject(position));
        }, reject);
    });
}
exports.default = {
    positionToObject: positionToObject,
    getGeoPosition: getGeoPosition
};


/***/ }),

/***/ "./src/services/PubSub.ts":
/*!********************************!*\
  !*** ./src/services/PubSub.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mitt = __webpack_require__(/*! mitt/dist/mitt.umd */ "./node_modules/mitt/dist/mitt.umd.js");
var emitter = new Mitt();
exports.default = {
    subscribe: emitter.on,
    publish: emitter.emit
};


/***/ }),

/***/ "./src/services/QueryString.ts":
/*!*************************************!*\
  !*** ./src/services/QueryString.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function parse() {
    var data = {};
    if (!window.location.search) {
        return data;
    }
    window.location.search
        .substring(1)
        .split('&')
        .forEach(function (element) {
        var queryStringParameter = element.split('=');
        data[queryStringParameter[0]] = queryStringParameter[1];
    });
    return data;
}
function addOrUpdateQueryString(key, value) {
    var parsed = parse();
    parsed[key] = value;
    var encoded = Object.entries(parsed).map(function (_a) {
        var k = _a[0], v = _a[1];
        return k + "=" + v;
    }).join('&');
    window.history.pushState({ path: "?" + encoded }, '', "?" + encoded);
}
exports.default = {
    parse: parse,
    addOrUpdateQueryString: addOrUpdateQueryString
};


/***/ }),

/***/ "./src/services/RailService.ts":
/*!*************************************!*\
  !*** ./src/services/RailService.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var STATIONS = {};
function getRailData(from, to, coords) {
    if (from === void 0) { from = 'LEW'; }
    if (to === void 0) { to = 'CHX'; }
    if (coords === void 0) { coords = ''; }
    var newCoords = coords ? "/" + coords : '';
    return new Promise(function (resolve, reject) {
        fetch("/api/rail/" + from + "/" + to + newCoords)
            .then(function (response) { return response.json(); })
            .then(function (response) { return resolve(response); })
            .catch(reject);
    });
}
function getStationsList(coords) {
    if (coords === void 0) { coords = ''; }
    var newCoords = coords ? "/" + coords : '';
    return new Promise(function (resolve, reject) {
        if (!!Object.keys(STATIONS).length) {
            return resolve({ data: STATIONS });
        }
        return fetch("/api/rail/stations" + newCoords)
            .then(function (response) { return response.json(); })
            .then(function (response) {
            STATIONS = response.data;
            resolve(response);
        })
            .catch(reject);
    });
}
function filterStationsList(filterString) {
    if (filterString === '' || filterString.length < 2) {
        return STATIONS;
    }
    var foundEntries = {};
    Object.keys(STATIONS)
        .map(function (key) { return ({ key: key, value: STATIONS[key] }); })
        .forEach(function (element) {
        if (!foundEntries[element.key]) {
            foundEntries[element.key] = {
                value: element.value,
                score: 0
            };
        }
        foundEntries[element.key].score += determineScore(element, filterString);
    });
    var newee = Object.keys(foundEntries).map(function (elem) { return ({
        key: elem,
        value: foundEntries[elem].value,
        score: foundEntries[elem].score,
    }); });
    var toReturn = {};
    newee
        .filter(function (element) { return !!element.score; })
        .sort(sortFunction)
        .forEach(function (element) {
        toReturn[element.key] = element.value;
    });
    return toReturn;
}
function determineScore(element, filterString) {
    var searchString = filterString.toLowerCase();
    var value = element.value.toLowerCase();
    if (element.key.toLowerCase().includes(searchString)) {
        return 5;
    }
    if (value === searchString) {
        return 2.5;
    }
    if (value.startsWith(searchString)) {
        return 1.5;
    }
    if (value.includes(searchString)) {
        return 1;
    }
}
function sortFunction(a, b) {
    if (a.score < b.score) {
        return 1;
    }
    if (a.score > b.score) {
        return -1;
    }
    return 0;
}
exports.default = {
    getRailData: getRailData,
    getStationsList: getStationsList,
    filterStationsList: filterStationsList
};


/***/ }),

/***/ "./src/services/TubeService.ts":
/*!*************************************!*\
  !*** ./src/services/TubeService.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getTubeData() {
    return new Promise(function (resolve, reject) {
        fetch('/api/tube')
            .then(function (response) { return response.json(); })
            .then(function (response) { return resolve(response); })
            .catch(reject);
    });
}
exports.default = {
    getTubeData: getTubeData
};


/***/ }),

/***/ "./src/services/WeatherService.ts":
/*!****************************************!*\
  !*** ./src/services/WeatherService.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getWeatherData(coords) {
    return new Promise(function (resolve, reject) {
        fetch("/api/weather" + (coords ? "/" + coords : ''))
            .then(function (response) { return response.json(); })
            .then(function (response) { return resolve(response); })
            .catch(reject);
    });
}
exports.default = {
    getWeatherData: getWeatherData
};


/***/ }),

/***/ "./src/views/Rail/index.tsx":
/*!**********************************!*\
  !*** ./src/views/Rail/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var RailService_1 = __webpack_require__(/*! ../../services/RailService */ "./src/services/RailService.ts");
var GeoService_1 = __webpack_require__(/*! ../../services/GeoService */ "./src/services/GeoService.ts");
var QueryString_1 = __webpack_require__(/*! ../../services/QueryString */ "./src/services/QueryString.ts");
var RailMessages_1 = __webpack_require__(/*! ../../components/RailMessages */ "./src/components/RailMessages.tsx");
var Card_1 = __webpack_require__(/*! ../../components/Card */ "./src/components/Card/index.tsx");
var CardHeader_1 = __webpack_require__(/*! ../../components/CardHeader */ "./src/components/CardHeader.tsx");
var CardTitle_1 = __webpack_require__(/*! ../../components/CardTitle */ "./src/components/CardTitle.tsx");
var CardLoading_1 = __webpack_require__(/*! ../../components/CardLoading */ "./src/components/CardLoading.tsx");
var RailFromTo_1 = __webpack_require__(/*! ../../components/RailFromTo */ "./src/components/RailFromTo/index.tsx");
var CardInner_1 = __webpack_require__(/*! ../../components/CardInner */ "./src/components/CardInner.tsx");
var RailRow_1 = __webpack_require__(/*! ../../components/RailRow */ "./src/components/RailRow.tsx");
var PubSub_1 = __webpack_require__(/*! ../../services/PubSub */ "./src/services/PubSub.ts");
var Constants_1 = __webpack_require__(/*! ../../services/Constants */ "./src/services/Constants.ts");
var Rail = (function (_super) {
    __extends(Rail, _super);
    function Rail(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            rail: null,
            limit: 6
        };
        _this.getGeoRailData = _this.getGeoRailData.bind(_this);
        _this.getRailData = _this.getRailData.bind(_this);
        return _this;
    }
    Rail.prototype.componentDidMount = function () {
        PubSub_1.default.subscribe(Constants_1.default.STATION_SELECT, this.getGeoRailData);
        this.getGeoRailData();
    };
    Rail.prototype.getGeoRailData = function () {
        var _this = this;
        var overrides = QueryString_1.default.parse();
        var from = overrides.from || 'LEW';
        var to = overrides.to || 'CHX';
        if (overrides.from && overrides.to) {
            this.getRailData(from, to, undefined);
        }
        else {
            GeoService_1.default.getGeoPosition()
                .then(function (coords) {
                _this.getRailData(from, to, coords.lat + "," + coords.lon);
            })
                .catch(function () {
                _this.getRailData(from, to, undefined);
            });
        }
    };
    Rail.prototype.getRailData = function (to, from, coords) {
        var _this = this;
        this.setState({
            rail: null
        });
        RailService_1.default.getRailData(to, from, coords)
            .then(function (data) {
            _this.setState({
                rail: data.data
            });
        });
    };
    Rail.prototype.renderRailTimes = function () {
        var railRows = this.state.rail.times.slice(0, this.state.limit);
        var hasItems = !!railRows.length;
        return (preact_1.h(CardInner_1.default, { withPadding: true },
            !hasItems &&
                preact_1.h("div", null, "No trains found for this journey"),
            railRows.map(function (row) { return preact_1.h(RailRow_1.default, { row: row }); })));
    };
    Rail.prototype.render = function () {
        var hasData = !!this.state.rail;
        var shouldShowMessages = hasData && this.state.rail.messages.length > 0;
        var metadata = this.state.rail && this.state.rail.meta;
        return (preact_1.h(Card_1.default, null,
            preact_1.h(CardHeader_1.default, null,
                preact_1.h(CardTitle_1.default, null,
                    !hasData && 'Rail',
                    hasData &&
                        preact_1.h(RailFromTo_1.default, { data: metadata }))),
            !hasData && preact_1.h(CardLoading_1.default, null),
            (hasData && shouldShowMessages) &&
                preact_1.h(RailMessages_1.default, { messages: this.state.rail.messages }),
            hasData && this.renderRailTimes()));
    };
    return Rail;
}(preact_1.Component));
exports.default = Rail;


/***/ }),

/***/ "./src/views/Tube/index.tsx":
/*!**********************************!*\
  !*** ./src/views/Tube/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var TubeService_1 = __webpack_require__(/*! ../../services/TubeService */ "./src/services/TubeService.ts");
var Card_1 = __webpack_require__(/*! ../../components/Card */ "./src/components/Card/index.tsx");
var CardHeader_1 = __webpack_require__(/*! ../../components/CardHeader */ "./src/components/CardHeader.tsx");
var CardTitle_1 = __webpack_require__(/*! ../../components/CardTitle */ "./src/components/CardTitle.tsx");
var CardLoading_1 = __webpack_require__(/*! ../../components/CardLoading */ "./src/components/CardLoading.tsx");
var CardInner_1 = __webpack_require__(/*! ../../components/CardInner */ "./src/components/CardInner.tsx");
var TubeRow_1 = __webpack_require__(/*! ../../components/TubeRow */ "./src/components/TubeRow/index.tsx");
var Tube = (function (_super) {
    __extends(Tube, _super);
    function Tube(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            tube: null
        };
        return _this;
    }
    Tube.prototype.componentDidMount = function () {
        var _this = this;
        TubeService_1.default.getTubeData()
            .then(function (response) {
            _this.setState({
                tube: response.data
            });
        });
    };
    Tube.prototype.render = function () {
        var hasData = !!this.state.tube;
        return (preact_1.h(Card_1.default, null,
            preact_1.h(CardHeader_1.default, null,
                preact_1.h(CardTitle_1.default, null, "Tube")),
            !hasData &&
                preact_1.h(CardLoading_1.default, null),
            hasData &&
                preact_1.h(CardInner_1.default, null, this.state.tube.map(function (row) { return preact_1.h(TubeRow_1.default, { row: row }); }))));
    };
    return Tube;
}(preact_1.Component));
exports.default = Tube;


/***/ }),

/***/ "./src/views/Weather/Weather.css":
/*!***************************************!*\
  !*** ./src/views/Weather/Weather.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./Weather.css */ "./node_modules/css-loader/index.js!./src/views/Weather/Weather.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/Weather/index.tsx":
/*!*************************************!*\
  !*** ./src/views/Weather/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
__webpack_require__(/*! ./Weather.css */ "./src/views/Weather/Weather.css");
var WeatherService_1 = __webpack_require__(/*! ../../services/WeatherService */ "./src/services/WeatherService.ts");
var GeoService_1 = __webpack_require__(/*! ../../services/GeoService */ "./src/services/GeoService.ts");
var Card_1 = __webpack_require__(/*! ../../components/Card */ "./src/components/Card/index.tsx");
var CardHeader_1 = __webpack_require__(/*! ../../components/CardHeader */ "./src/components/CardHeader.tsx");
var CardTitle_1 = __webpack_require__(/*! ../../components/CardTitle */ "./src/components/CardTitle.tsx");
var CardLoading_1 = __webpack_require__(/*! ../../components/CardLoading */ "./src/components/CardLoading.tsx");
var WeatherRow_1 = __webpack_require__(/*! ../../components/WeatherRow */ "./src/components/WeatherRow/index.tsx");
var CardInner_1 = __webpack_require__(/*! ../../components/CardInner */ "./src/components/CardInner.tsx");
var WeatherViewMore_1 = __webpack_require__(/*! ../../components/WeatherViewMore */ "./src/components/WeatherViewMore.tsx");
var Weather = (function (_super) {
    __extends(Weather, _super);
    function Weather(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            weather: null,
            limit: 12
        };
        _this.increaseLimit = _this.increaseLimit.bind(_this);
        return _this;
    }
    Weather.prototype.componentDidMount = function () {
        var _this = this;
        GeoService_1.default.getGeoPosition()
            .then(function (coords) {
            _this.getWeatherData(coords.lat + "," + coords.lon);
        })
            .catch(function () {
            _this.getWeatherData();
        });
    };
    Weather.prototype.getWeatherData = function (coords) {
        var _this = this;
        WeatherService_1.default.getWeatherData(coords)
            .then(function (response) {
            _this.setState({
                weather: response.data
            });
        });
    };
    Weather.prototype.increaseLimit = function (event) {
        event.preventDefault();
        this.setState({
            limit: 24
        });
    };
    Weather.prototype.render = function () {
        var hasData = !!this.state.weather;
        var shouldShowViewMore = this.state.limit !== 24;
        var weatherRows = hasData && this.state.weather.slice(0, this.state.limit);
        return (preact_1.h(Card_1.default, null,
            preact_1.h(CardHeader_1.default, { style: { position: 'relative' } },
                preact_1.h(CardTitle_1.default, null, "Weather"),
                hasData &&
                    preact_1.h(WeatherViewMore_1.default, { onClick: this.increaseLimit, isVisible: shouldShowViewMore })),
            hasData &&
                preact_1.h(CardInner_1.default, { className: "fade-out" },
                    preact_1.h("div", { style: { overflowX: 'scroll' } }, weatherRows.map(function (row) { return preact_1.h(WeatherRow_1.default, { row: row }); }))),
            !hasData &&
                preact_1.h(CardLoading_1.default, null)));
    };
    return Weather;
}(preact_1.Component));
exports.default = Weather;


/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./main.css */ "./node_modules/css-loader/index.js!./styles/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.tsx */"./src/index.tsx");


/***/ })

/******/ });
//# sourceMappingURL=index_t.js.map