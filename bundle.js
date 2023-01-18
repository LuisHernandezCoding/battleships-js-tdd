/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ocean-big.jpg */ "./src/images/ocean-big.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.cell {\r\n  background-size: contain;\r\n  background-color: rgb(255 255 255 / 63%);\r\n  border: 1px solid rgb(255, 255, 255);\r\n  height: 0;\r\n  padding-bottom: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.cell.has-background-danger {\r\n  background-color: rgba(255, 0, 0, 0.63) !important;\r\n}\r\n\r\n.cell.has-background-success {\r\n  background-color: rgba(30, 255, 0, 0.63) !important;\r\n}\r\n\r\n.cell:hover {\r\n  background-color: rgb(215, 215, 215, 0.5);\r\n  cursor: pointer;\r\n}\r\n\r\n.is-fullheight {\r\n  min-height: 100vh;\r\n}\r\n\r\n.tittle-tag > span {\r\n  font-family: monospace;\r\n  width: 135px;\r\n}\r\n\r\n.has-ocean {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,wBAAwB;EACxB,wCAAwC;EACxC,oCAAoC;EACpC,SAAS;EACT,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,yDAA6C;AAC/C","sourcesContent":[".board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.cell {\r\n  background-size: contain;\r\n  background-color: rgb(255 255 255 / 63%);\r\n  border: 1px solid rgb(255, 255, 255);\r\n  height: 0;\r\n  padding-bottom: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.cell.has-background-danger {\r\n  background-color: rgba(255, 0, 0, 0.63) !important;\r\n}\r\n\r\n.cell.has-background-success {\r\n  background-color: rgba(30, 255, 0, 0.63) !important;\r\n}\r\n\r\n.cell:hover {\r\n  background-color: rgb(215, 215, 215, 0.5);\r\n  cursor: pointer;\r\n}\r\n\r\n.is-fullheight {\r\n  min-height: 100vh;\r\n}\r\n\r\n.tittle-tag > span {\r\n  font-family: monospace;\r\n  width: 135px;\r\n}\r\n\r\n.has-ocean {\r\n  background-image: url(./images/ocean-big.jpg);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/lib/domElements.js":
/*!********************************!*\
  !*** ./src/lib/domElements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDomElements)
/* harmony export */ });
// Get the Actual DOM elements
const board = document.getElementById('player1');
const board2 = document.getElementById('player2');
const playerAction = document.getElementById('playerAction');
const enemyAction = document.getElementById('enemyAction');
const placingShip = document.getElementById('placingShip');
const alert = document.getElementById('alert');
const enemyStatusTag = document.getElementById('status').querySelector('span');

// Get the DOM elements from the player cards
const player1Card = document.getElementById('player1Card');
// Carrier
const player1Carrier = player1Card.querySelector('#carrier');
const player1CarrierQuantity = player1Carrier.querySelector('#quantity');
// Battleship
const player1Battleship = player1Card.querySelector('#battleship');
const player1BattleshipQuantity = player1Battleship.querySelector('#quantity');
// Submarine
const player1Submarine = player1Card.querySelector('#submarine');
const player1SubmarineQuantity = player1Submarine.querySelector('#quantity');
// cruiser
const player1Cruiser = player1Card.querySelector('#cruiser');
const player1CruiserQuantity = player1Cruiser.querySelector('#quantity');
// Destroyer
const player1Destroyer = player1Card.querySelector('#destroyer');
const player1DestroyerQuantity = player1Destroyer.querySelector('#quantity');
// patrol ship
const player1PatrolShip = player1Card.querySelector('#patrolShip');
const player1PatrolShipQuantity = player1PatrolShip.querySelector('#quantity');

// Get the DOM elements from the computer cards
const player2Card = document.getElementById('player2Card');
// Carrier
const player2Carrier = player2Card.querySelector('#carrier');
const player2CarrierQuantity = player2Carrier.querySelector('#quantity');
// Battleship
const player2Battleship = player2Card.querySelector('#battleship');
const player2BattleshipQuantity = player2Battleship.querySelector('#quantity');
// Submarine
const player2Submarine = player2Card.querySelector('#submarine');
const player2SubmarineQuantity = player2Submarine.querySelector('#quantity');
// cruiser
const player2Cruiser = player2Card.querySelector('#cruiser');
const player2CruiserQuantity = player2Cruiser.querySelector('#quantity');
// Destroyer
const player2Destroyer = player2Card.querySelector('#destroyer');
const player2DestroyerQuantity = player2Destroyer.querySelector('#quantity');
// patrol ship
const player2PatrolShip = player2Card.querySelector('#patrolShip');
const player2PatrolShipQuantity = player2PatrolShip.querySelector('#quantity');

const player1CarrierImage = player1Carrier.querySelector('img');
const player1BattleshipImage = player1Battleship.querySelector('img');
const player1SubmarineImage = player1Submarine.querySelector('img');
const player1CruiserImage = player1Cruiser.querySelector('img');
const player1DestroyerImage = player1Destroyer.querySelector('img');
const player1PatrolShipImage = player1PatrolShip.querySelector('img');

const player2CarrierImage = player2Carrier.querySelector('img');
const player2BattleshipImage = player2Battleship.querySelector('img');
const player2SubmarineImage = player2Submarine.querySelector('img');
const player2CruiserImage = player2Cruiser.querySelector('img');
const player2DestroyerImage = player2Destroyer.querySelector('img');
const player2PatrolShipImage = player2PatrolShip.querySelector('img');

function getDomElements() {
  return {
    board,
    board2,
    playerAction,
    enemyAction,
    placingShip,
    alert,
    enemyStatusTag,
    player1Card,
    player1Carrier,
    player1CarrierQuantity,
    player1Battleship,
    player1BattleshipQuantity,
    player1Submarine,
    player1SubmarineQuantity,
    player1Cruiser,
    player1CruiserQuantity,
    player1Destroyer,
    player1DestroyerQuantity,
    player1PatrolShip,
    player1PatrolShipQuantity,
    player2Card,
    player2Carrier,
    player2CarrierQuantity,
    player2Battleship,
    player2BattleshipQuantity,
    player2Submarine,
    player2SubmarineQuantity,
    player2Cruiser,
    player2CruiserQuantity,
    player2Destroyer,
    player2DestroyerQuantity,
    player2PatrolShip,
    player2PatrolShipQuantity,
    player1CarrierImage,
    player1BattleshipImage,
    player1SubmarineImage,
    player1CruiserImage,
    player1DestroyerImage,
    player1PatrolShipImage,
    player2CarrierImage,
    player2BattleshipImage,
    player2SubmarineImage,
    player2CruiserImage,
    player2DestroyerImage,
    player2PatrolShipImage,
  };
}


/***/ }),

/***/ "./src/lib/domManager.js":
/*!*******************************!*\
  !*** ./src/lib/domManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAlert": () => (/* binding */ createAlert),
/* harmony export */   "drawGrid": () => (/* binding */ drawGrid),
/* harmony export */   "populateShipImages": () => (/* binding */ populateShipImages),
/* harmony export */   "showAction": () => (/* binding */ showAction),
/* harmony export */   "startPlacing": () => (/* binding */ startPlacing),
/* harmony export */   "updatePlacingShip": () => (/* binding */ updatePlacingShip)
/* harmony export */ });
/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ "./src/lib/ships.js");
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements.js */ "./src/lib/domElements.js");
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/lib/gameboardFactory.js");




function createAlert(type, message) {
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.innerHTML = `
    <div class="container">
      <div class="notification is-${type}">
        <button class="delete"></button>
        <p class="has-text-weight-bold">${message}</p>
      </div>
    </div>
  `;
  const button = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.querySelector('button');
  button.addEventListener('click', () => {
    button.removeEventListener('click', () => {});
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.innerHTML = '';
  });
}

function drawGrid(type = 'player') {
  const board = type === 'enemy' ? (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2 : (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board;
  board.innerHTML = '';
  for (let i = 0; i < 100; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
    // assign the id to each cell
    cell.setAttribute('id', 'P1');
    // assign the coordinates to each cell
    cell.setAttribute('data-x', i % 10);
    cell.setAttribute('data-y', Math.floor(i / 10));

    // delete any event listener
    cell.removeEventListener('click', () => {});
    cell.removeEventListener('mouseenter', () => {});
    cell.removeEventListener('mouseleave', () => {});
  }
}

function updateGrid(type = 'player', board) {
  const domBoard = type === 'enemy' ? (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2 : (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board;
  const { ships } = board;
  const { missedAttacks } = board;

  if (type === 'player') {
    // show the ships
    ships.forEach((ship) => {
      for (let i = 0; i < ship.length; i += 1) {
        const cell = domBoard.querySelector(`[data-x="${ship.coordinates[i][0]}"][data-y="${ship.coordinates[i][1]}"]`);
        cell.classList.add('ship');
        const images = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getAllShipImages)(ship.name);
        cell.style.backgroundImage = `url(${images[i]})`;
      }
    });
  }

  // update the missed attacks
  missedAttacks.forEach((coord) => {
    const cell = domBoard.querySelector(`[data-x="${coord[0]}"][data-y="${coord[1]}"]`);
    cell.classList.add('has-background-danger');
  });

  // update the hit attacks
  ships.forEach((ship) => {
    ship.hits.forEach((coord) => {
      const cell = domBoard.querySelector(`[data-x="${coord[0]}"][data-y="${coord[1]}"]`);
      cell.classList.add('has-background-success');
      if (type === 'enemy') {
        cell.style.backgroundImage = `url(${(0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getExplosionImage)()})`;
      }
      // if ship is sunk then add the full image
      if (ship.isSunk()) {
        cell.classList.remove('has-background-success');
        cell.classList.add('has-background-success-dark');
        const images = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getAllShipImages)(ship.name);
        const actualShipPart = ship.coordinates
          .findIndex((shipCoord) => shipCoord[0] === coord[0] && shipCoord[1] === coord[1]);
        cell.style.backgroundImage = `url(${images[actualShipPart]})`;
        // rotate to the correct orientation
        const actualOrientation = () => {
          if (ship.coordinates[0][0] === ship.coordinates[1][0]) {
            return 'vertical';
          }
          return 'horizontal';
        };
        if (actualOrientation() === 'vertical') {
          cell.style.transform = 'rotate(90deg)';
        }
      }
    });
  });
}

function populateShipImages(type = 'player') {
  let shipImageElements = [];
  if (type === 'player') {
    shipImageElements = [
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1CarrierImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Carrier').fullImage,
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1BattleshipImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Battleship').fullImage,
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1CruiserImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Cruiser').fullImage,
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1SubmarineImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Submarine').fullImage,
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1DestroyerImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Destroyer').fullImage,
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1PatrolShipImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Patroller').fullImage,
    ];
  } else {
    shipImageElements = [
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2CarrierImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Carrier').fullImage,
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2BattleshipImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Battleship').fullImage,
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2CruiserImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Cruiser').fullImage,
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2SubmarineImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Submarine').fullImage,
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2DestroyerImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Destroyer').fullImage,
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2PatrolShipImage, _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === 'Patroller').fullImage,
    ];
  }
  for (let i = 0; i < shipImageElements.length; i += 2) {
    shipImageElements[i].src = shipImageElements[i + 1];
  }
}

function updateCard(board, type = 'Player') {
  const carrier = board.ships.filter((ship) => ship.name === 'Carrier');
  const battleship = board.ships.filter((ship) => ship.name === 'Battleship');
  const cruiser = board.ships.filter((ship) => ship.name === 'Cruiser');
  const submarine = board.ships.filter((ship) => ship.name === 'Submarine');
  const destroyer = board.ships.filter((ship) => ship.name === 'Destroyer');
  const patroller = board.ships.filter((ship) => ship.name === 'Patroller');

  let ships = [];
  if (type === 'Player') {
    ships = [
      [carrier, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1CarrierQuantity],
      [battleship, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1BattleshipQuantity],
      [cruiser, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1CruiserQuantity],
      [submarine, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1SubmarineQuantity],
      [destroyer, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1DestroyerQuantity],
      [patroller, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1PatrolShipQuantity],
    ];
  } else {
    ships = [
      [carrier, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2CarrierQuantity],
      [battleship, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2BattleshipQuantity],
      [cruiser, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2CruiserQuantity],
      [submarine, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2SubmarineQuantity],
      [destroyer, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2DestroyerQuantity],
      [patroller, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2PatrolShipQuantity],
    ];
  }
  for (let i = 0; i < ships.length; i += 1) {
    if (ships[i][0].length === 0) {
      ships[i][1].innerHTML = '0';
      ships[i][1].classList.remove('has-text-success');
      ships[i][1].classList.add('has-text-danger');
    } else {
      const sunked = ships[i][0][0].isSunk();
      if (sunked) {
        ships[i][1].innerHTML = '0';
        ships[i][1].classList.remove('has-text-success');
        ships[i][1].classList.add('has-text-danger');
      } else {
        ships[i][1].innerHTML = '1';
        ships[i][1].classList.remove('has-text-danger');
        ships[i][1].classList.add('has-text-success');
      }
    }
  }
}

function updatePlacingShip(shipName) {
  if (shipName === 'none') {
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.classList.add('is-hidden');
    return;
  }
  const ship = _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === shipName);
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.classList.remove('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.innerHTML = `
    <img src="${ship.fullImage}" alt="${shipName}" width="${ship.size * 20}">
  `;
}

function showAction(type, message, color = 'green') {
  if (type === 'player') {
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.remove('is-hidden');
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.innerHTML = message;
    if (color === 'green') {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.add('is-success');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.remove('is-warning');
    } else {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.add('is-warning');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.remove('is-success');
    }
  } else if (type === 'enemy') {
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.remove('is-hidden');
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.innerHTML = message;
    if (color === 'green') {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.add('is-success');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.remove('is-warning');
    } else {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.add('is-warning');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.remove('is-success');
    }
  }
}

function checkValidMove(board, cell, orientation, shipLength, shipName) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  const coords = [x, y];
  try {
    (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_2__.boardValidation)(shipName, shipLength, coords, orientation, board.ships);
  } catch (e) {
    return false;
  }
  return true;
}

function setShipImage(board, cell, shipImages, orientation, shipLength, shipName) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  const validMove = checkValidMove(board, cell, orientation, shipLength, shipName);
  for (let i = 0; i < shipLength; i += 1) {
    const cellToChange = orientation === 'horizontal'
      ? document.querySelector(`#P1[data-x="${x + i}"][data-y="${y}"]`)
      : document.querySelector(`#P1[data-x="${x}"][data-y="${y + i}"]`);
    if (cellToChange) {
      if (validMove) {
        cellToChange.style.transform = orientation === 'horizontal' ? 'rotate(0deg)' : 'rotate(90deg)';
        cellToChange.style.backgroundImage = `url(${shipImages[i]})`;
        cellToChange.classList.add('has-background-success');
      } else {
        cellToChange.classList.add('has-background-danger');
      }
    }
  }
}

function removeShipImage(cell, orientation, shipLength) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  for (let i = 0; i < shipLength; i += 1) {
    const cellToChange = orientation === 'horizontal'
      ? document.querySelector(`#P1[data-x="${x + i}"][data-y="${y}"]`)
      : document.querySelector(`#P1[data-x="${x}"][data-y="${y + i}"]`);
    if (cellToChange) {
      if (!cellToChange.classList.contains('ship')) {
        cellToChange.style.backgroundImage = '';
      }
      cellToChange.classList.remove('has-background-success');
      cellToChange.classList.remove('has-background-danger');
    }
  }
}

function tryPlaceShip(cell, orientation, shipName, shipLength, board) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  const validMove = checkValidMove(board, cell, orientation, shipLength, shipName);
  if (validMove) {
    board.placeShip(shipName, shipLength, [x, y], orientation);
    updateCard(board);
    updateGrid('player', board);
    return true;
  }
  return false;
}

function stopPlacing() {
  const cells = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board.querySelectorAll('.cell');

  cells.forEach((cell) => {
    if (!cell.classList.contains('ship')) {
      cell.style.backgroundImage = '';
    }
    cell.classList.remove('has-background-success');
    cell.classList.remove('has-background-danger');
    cell.replaceWith(cell.cloneNode(true));
  });
}

function createResetButton() {
  const resetButton = document.createElement('button');
  resetButton.classList.add('button', 'is-danger', 'is-large', 'is-fullwidth');
  resetButton.innerHTML = 'Reset Game';
  resetButton.addEventListener('click', () => {
    window.location.reload();
  });
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.appendChild(resetButton);
}

function endGame(winner) {
  createAlert('success', `${winner}`);
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.add('is-hidden');
  createResetButton();
}

function startAttacking(gameInstance) {
  const cells = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2.querySelectorAll('.cell');
  cells.forEach((cell) => {
    if (!cell.classList.contains('hit') && !cell.classList.contains('miss')) {
      cell.addEventListener('click', () => {
        const x = parseInt(cell.getAttribute('data-x'), 10);
        const y = parseInt(cell.getAttribute('data-y'), 10);
        try {
          const attack = gameInstance.playerAttack(x, y);
          if (attack === 'hit') {
            cell.classList.add('hit');
            createAlert('success', 'You hit a ship!, keep going!');
          } else if (attack === 'doubleMiss') {
            cell.classList.add('miss');
            createAlert('none', 'You missed! also the computer missed!');
          } else if (attack === 'missAndHit') {
            cell.classList.add('miss');
            createAlert('danger', 'You missed! the computer hit a ship!');
          }
          updateGrid('enemy', gameInstance.computerBoard);
          updateGrid('player', gameInstance.playerBoard);
          updateCard(gameInstance.computerBoard, 'enemy');
          updateCard(gameInstance.playerBoard);
          if (gameInstance.gameEnd()) {
            endGame(gameInstance.gameEnd());
            gameInstance.resetGame();
          }
        } catch (e) {
          createAlert('warning', e.message);
        }
      });
    }
    cell.addEventListener('mouseenter', () => {});
    cell.addEventListener('mouseleave', () => {});
  });
}

let placing = true;

function startPlacing(gameInstance, orientation, shipName) {
  updateCard(gameInstance.computerBoard, 'enemy');

  const cells = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board.querySelectorAll('.cell');
  const shipImages = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getAllShipImages)(shipName);
  const shipLength = shipImages.length;

  const shipTypes = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer', 'Patroller'];
  const nextShip = shipTypes.indexOf(shipName) + 1;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'r' && placing) {
      stopPlacing();
      startPlacing(gameInstance, orientation === 'horizontal' ? 'vertical' : 'horizontal', shipName);
    }
  });

  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => setShipImage(gameInstance.playerBoard, cell, shipImages, orientation, shipLength, shipName));
    cell.addEventListener('mouseleave', () => removeShipImage(cell, orientation, shipLength));
    cell.addEventListener('click', () => {
      const placed = tryPlaceShip(cell, orientation, shipName, shipLength,
        gameInstance.playerBoard);
      if (placed) {
        stopPlacing();
        if (nextShip < shipTypes.length) {
          updatePlacingShip(shipTypes[nextShip]);
          startPlacing(gameInstance, 'horizontal', shipTypes[nextShip]);
        } else {
          placing = false;
          updatePlacingShip('none');
          createAlert('success', 'All ships placed, placing computer ships');
          showAction('player', 'Waiting for computer', 'alert');
          showAction('enemy', 'Placing ships');
          // wait 3 second before placing computer ships (simulates thinking)
          setTimeout(() => {
            gameInstance.randomPlaceShips(gameInstance.computerBoard);
            updateCard(gameInstance.computerBoard, 'enemy');
            gameInstance.startGame();
            createAlert('success', 'All ships placed, Attack!');
            showAction('player', 'Attack the enemy!');
            showAction('enemy', 'Waiting for attack', 'alert');
            startAttacking(gameInstance);
          }, 3000);
        }
      }
    });
  });
}


/***/ }),

/***/ "./src/lib/game.js":
/*!*************************!*\
  !*** ./src/lib/game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/lib/gameboardFactory.js");
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory.js */ "./src/lib/shipFactory.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const game = {
    // properties
    actualPlayer: 1,
    gameStarted: false,
    playerBoard: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)(),
    computerBoard: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)(),
    // methods
    changePlayer() {
      this.actualPlayer = this.actualPlayer === 1 ? 2 : 1;
    },
    randomPlaceShips(board) {
      const ships = [
        { name: 'Carrier', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(5) },
        { name: 'Battleship', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(4) },
        { name: 'Cruiser', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(3) },
        { name: 'Submarine', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(3) },
        { name: 'Destroyer', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2) },
        { name: 'Patroller', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2) },
      ];
      ships.forEach((ship) => {
        let coordinates = [];
        let orientation = '';
        let validShip = false;
        while (!validShip) {
          coordinates = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
          ];
          orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
          try {
            board.placeShip(ship.name, ship.value.length, coordinates, orientation);
            validShip = true;
          } catch (error) {
            validShip = false;
          }
        }
      });
    },
    startGame() {
      if (this.playerBoard.ships.length >= 6 && this.computerBoard.ships.length >= 6) {
        this.gameStarted = true;
      } else {
        throw new Error('You need to place all the ships');
      }
    },
    checkValidAttack(x, y) {
      const coords = [x, y];
      // check if the game is started
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      // check if the coordinates are valid
      if (x < 0 || x > 9 || y < 0 || y > 9) {
        throw new Error('Coordinates are not valid');
      }

      // check if the coordinates are already hit
      const misses = this.computerBoard.missedAttacks;
      const missed = misses.some((miss) => miss[0] === coords[0] && miss[1] === coords[1]);

      const hits = this.computerBoard.ships.map((ship) => ship.hits);
      const hitted = hits.some((hit) => hit.some((hitCoords) => hitCoords[0] === coords[0]
        && hitCoords[1] === coords[1]));
      if (missed || hitted) {
        throw new Error('You already attacked this coordinates');
      }
      return true;
    },
    playerAttack(x, y) {
      if (this.checkValidAttack(x, y)) {
        this.computerBoard.receiveAttack([x, y]);
        // Check if the attack hit a ship
        if (this.computerBoard.ships.some((ship) => ship.hits.some((hit) => hit[0] === x
          && hit[1] === y))) {
          return 'hit';
        }
        this.changePlayer();
        const cpuAttack = this.computerAttack();
        this.changePlayer();
        if (cpuAttack === 'miss') {
          return 'doubleMiss';
        }
      }
      return 'missAndHit';
    },
    computerAttack(hits = 0) {
      // check if the game is started
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      const coordinates = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      // check if the coordinates are already hit (using .missedAttacks)
      if (this.playerBoard.missedAttacks
        .some((missedAttack) => missedAttack[0] === coordinates[0]
        && missedAttack[1] === coordinates[1])) {
        this.computerAttack();
      } else {
        this.playerBoard.receiveAttack(coordinates);
        // Check if the attack hit a ship
        if (this.playerBoard.ships.some((ship) => ship.hits.some((hit) => hit[0] === coordinates[0]
          && hit[1] === coordinates[1]))) {
          this.computerAttack(hits + 1);
          return 'hit';
        }
        this.changePlayer();
      }
      if (hits === 0) {
        return 'miss';
      }
      return hits;
    },
    gameEnd() {
      // check if the game is started
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      if (this.playerBoard.allShipsSunk()) {
        return 'Computer wins';
      }
      if (this.computerBoard.allShipsSunk()) {
        return 'Player wins';
      }
      return false;
    },
    resetGame() {
      this.actualPlayer = 1;
      this.gameStarted = false;
      this.playerBoard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)();
      this.computerBoard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)();
    },
  };
  return game;
});


/***/ }),

/***/ "./src/lib/gameboardFactory.js":
/*!*************************************!*\
  !*** ./src/lib/gameboardFactory.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardValidation": () => (/* binding */ boardValidation),
/* harmony export */   "gameboardFactory": () => (/* binding */ gameboardFactory)
/* harmony export */ });
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/lib/shipFactory.js");


// function to get the coordinates of a ship
function getShipCoordinates(coordinates, length, orientation) {
  const [x, y] = coordinates;
  const shipCoordinates = [];
  for (let i = 0; i < length; i += 1) {
    if (orientation === 'horizontal') {
      shipCoordinates.push([x + i, y]);
    } else if (orientation === 'vertical') {
      shipCoordinates.push([x, y + i]);
    }
  }
  return shipCoordinates;
}

// function to get the ship that was hit
function getHitShip(coordinates, ships) {
  const [x, y] = coordinates;
  let shipHit = null;
  ships.forEach((ship) => {
    ship.coordinates.forEach((shipCoordinate) => {
      if (shipCoordinate[0] === x && shipCoordinate[1] === y) {
        shipHit = ship;
      }
    });
  });
  return shipHit;
}

function validateName(name) {
  // Carrier, Battleship, Cruiser, Submarine, Destroyer, Patroller
  if (name !== 'Carrier' && name !== 'Battleship' && name !== 'Cruiser'
  && name !== 'Submarine' && name !== 'Destroyer' && name !== 'Patroller') {
    throw new Error('Ship name must be Carrier, Battleship, Cruiser, Submarine, Destroyer or Patroller');
  }
}

function validateShipLength(length) {
  if (length < 1 || length > 5) {
    throw new Error('Ship length must be between 1 and 5');
  }
}

function validateOrientation(orientation) {
  if (orientation !== 'horizontal' && orientation !== 'vertical') {
    throw new Error('Ship orientation must be horizontal or vertical');
  }
}

function validateCoordinates(coordinates) {
  if (!Array.isArray(coordinates)) {
    throw new Error('Ship coordinates must be an array');
  }
  if (coordinates.length !== 2) {
    throw new Error('Ship coordinates must be an array of two numbers');
  }
  coordinates.forEach((coordinate) => {
    if (typeof coordinate !== 'number') {
      throw new Error('Ship coordinates must be an array of two numbers');
    }
    if (coordinate < 0 || coordinate > 9) {
      throw new Error('Ship coordinates must be between 0 and 9');
    }
  });
}

function validateOverlap(coordinates, length, orientation, ships) {
  const shipCoordinates = getShipCoordinates(coordinates, length, orientation);
  ships.forEach((ship) => {
    shipCoordinates.forEach((shipCoordinate) => {
      ship.coordinates.forEach((shipCoordinate2) => {
        if (shipCoordinate[0] === shipCoordinate2[0] && shipCoordinate[1] === shipCoordinate2[1]) {
          throw new Error('Ships cannot overlap');
        }
      });
    });
  });
}

function boardValidation(name, length, coordinates, orientation, ships) {
  validateName(name);
  validateShipLength(length);
  validateOrientation(orientation);
  validateCoordinates(coordinates);
  validateOverlap(coordinates, length, orientation, ships);
  return true;
}

// gameboard factory function
function gameboardFactory() {
  const gameboard = {
    ships: [],
    missedAttacks: [],
    placeShip(name, length, coordinates, orientation) {
      // validate ship
      if (boardValidation(name, length, coordinates, orientation, this.ships) === false) {
        return;
      }

      // create ship
      const ship = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
      ship.name = name;
      ship.coordinates = getShipCoordinates(coordinates, length, orientation);

      // check if ship is off the board
      const shipOffBoard = ship.coordinates.some((shipCoordinate) => {
        const [x, y] = shipCoordinate;
        return x < 0 || x > 9 || y < 0 || y > 9;
      });
      if (shipOffBoard) {
        throw new Error('Ships cannot be placed off the board');
      }

      this.ships.push(ship);
    },
    receiveAttack(coordinates) {
      const shipHit = getHitShip(coordinates, this.ships);
      if (shipHit) {
        shipHit.hit(coordinates);
      } else {
        this.missedAttacks.push(coordinates);
      }
    },
    allShipsSunk() {
      return this.ships.every((ship) => ship.isSunk());
    },
  };
  return gameboard;
}

/***/ }),

/***/ "./src/lib/shipFactory.js":
/*!********************************!*\
  !*** ./src/lib/shipFactory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipFactory)
/* harmony export */ });
function shipFactory(length) {
  const ship = {
    length,
    hits: [],
    hit(position) {
      this.hits.push(position);
    },
    isSunk() {
      return this.hits.length === this.length;
    },
  };
  return ship;
}


/***/ }),

/***/ "./src/lib/ships.js":
/*!**************************!*\
  !*** ./src/lib/ships.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllShipImages": () => (/* binding */ getAllShipImages),
/* harmony export */   "getExplosionImage": () => (/* binding */ getExplosionImage),
/* harmony export */   "ships": () => (/* binding */ ships)
/* harmony export */ });
/* harmony import */ var _images_battleships_20_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/battleships-20.png */ "./src/images/battleships-20.png");
/* harmony import */ var _images_battleships_01_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/battleships-01.png */ "./src/images/battleships-01.png");
/* harmony import */ var _images_battleships_02_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/battleships-02.png */ "./src/images/battleships-02.png");
/* harmony import */ var _images_battleships_03_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/battleships-03.png */ "./src/images/battleships-03.png");
/* harmony import */ var _images_battleships_04_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/battleships-04.png */ "./src/images/battleships-04.png");
/* harmony import */ var _images_battleships_05_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/battleships-05.png */ "./src/images/battleships-05.png");
/* harmony import */ var _images_battleships_21_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/battleships-21.png */ "./src/images/battleships-21.png");
/* harmony import */ var _images_battleships_06_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/battleships-06.png */ "./src/images/battleships-06.png");
/* harmony import */ var _images_battleships_07_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/battleships-07.png */ "./src/images/battleships-07.png");
/* harmony import */ var _images_battleships_08_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/battleships-08.png */ "./src/images/battleships-08.png");
/* harmony import */ var _images_battleships_09_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/battleships-09.png */ "./src/images/battleships-09.png");
/* harmony import */ var _images_battleships_22_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/battleships-22.png */ "./src/images/battleships-22.png");
/* harmony import */ var _images_battleships_10_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/battleships-10.png */ "./src/images/battleships-10.png");
/* harmony import */ var _images_battleships_11_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/battleships-11.png */ "./src/images/battleships-11.png");
/* harmony import */ var _images_battleships_12_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/battleships-12.png */ "./src/images/battleships-12.png");
/* harmony import */ var _images_battleships_23_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/battleships-23.png */ "./src/images/battleships-23.png");
/* harmony import */ var _images_battleships_13_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/battleships-13.png */ "./src/images/battleships-13.png");
/* harmony import */ var _images_battleships_14_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../images/battleships-14.png */ "./src/images/battleships-14.png");
/* harmony import */ var _images_battleships_15_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../images/battleships-15.png */ "./src/images/battleships-15.png");
/* harmony import */ var _images_battleships_24_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../images/battleships-24.png */ "./src/images/battleships-24.png");
/* harmony import */ var _images_battleships_18_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../images/battleships-18.png */ "./src/images/battleships-18.png");
/* harmony import */ var _images_battleships_19_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../images/battleships-19.png */ "./src/images/battleships-19.png");
/* harmony import */ var _images_battleships_25_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../images/battleships-25.png */ "./src/images/battleships-25.png");
/* harmony import */ var _images_battleships_16_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../images/battleships-16.png */ "./src/images/battleships-16.png");
/* harmony import */ var _images_battleships_17_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../images/battleships-17.png */ "./src/images/battleships-17.png");
/* harmony import */ var _images_explosion_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../images/explosion.png */ "./src/images/explosion.png");
// Get the images from webpack

































const carrierShip = {
  name: 'Carrier',
  size: 5,
  fullImage: _images_battleships_20_png__WEBPACK_IMPORTED_MODULE_0__,
  images: [_images_battleships_01_png__WEBPACK_IMPORTED_MODULE_1__, _images_battleships_02_png__WEBPACK_IMPORTED_MODULE_2__, _images_battleships_03_png__WEBPACK_IMPORTED_MODULE_3__, _images_battleships_04_png__WEBPACK_IMPORTED_MODULE_4__, _images_battleships_05_png__WEBPACK_IMPORTED_MODULE_5__],
};

const battleshipShip = {
  name: 'Battleship',
  size: 4,
  fullImage: _images_battleships_21_png__WEBPACK_IMPORTED_MODULE_6__,
  images: [_images_battleships_06_png__WEBPACK_IMPORTED_MODULE_7__, _images_battleships_07_png__WEBPACK_IMPORTED_MODULE_8__, _images_battleships_08_png__WEBPACK_IMPORTED_MODULE_9__, _images_battleships_09_png__WEBPACK_IMPORTED_MODULE_10__],
};

const cruiserShip = {
  name: 'Cruiser',
  size: 3,
  fullImage: _images_battleships_22_png__WEBPACK_IMPORTED_MODULE_11__,
  images: [_images_battleships_10_png__WEBPACK_IMPORTED_MODULE_12__, _images_battleships_11_png__WEBPACK_IMPORTED_MODULE_13__, _images_battleships_12_png__WEBPACK_IMPORTED_MODULE_14__],
};

const submarineShip = {
  name: 'Submarine',
  size: 3,
  fullImage: _images_battleships_23_png__WEBPACK_IMPORTED_MODULE_15__,
  images: [_images_battleships_13_png__WEBPACK_IMPORTED_MODULE_16__, _images_battleships_14_png__WEBPACK_IMPORTED_MODULE_17__, _images_battleships_15_png__WEBPACK_IMPORTED_MODULE_18__],
};

const destroyerShip = {
  name: 'Destroyer',
  size: 2,
  fullImage: _images_battleships_24_png__WEBPACK_IMPORTED_MODULE_19__,
  images: [_images_battleships_18_png__WEBPACK_IMPORTED_MODULE_20__, _images_battleships_19_png__WEBPACK_IMPORTED_MODULE_21__],
};

const patrollerShip = {
  name: 'Patroller',
  size: 2,
  fullImage: _images_battleships_25_png__WEBPACK_IMPORTED_MODULE_22__,
  images: [_images_battleships_16_png__WEBPACK_IMPORTED_MODULE_23__, _images_battleships_17_png__WEBPACK_IMPORTED_MODULE_24__],
};

const ships = [
  carrierShip,
  battleshipShip,
  cruiserShip,
  submarineShip,
  destroyerShip,
  patrollerShip,
];

function getAllShipImages(shipName) {
  const ship = ships.find((ship) => ship.name === shipName);
  return ship.images;
}

function getExplosionImage() {
  return _images_explosion_png__WEBPACK_IMPORTED_MODULE_25__;
}

/***/ }),

/***/ "./src/images/battleships-01.png":
/*!***************************************!*\
  !*** ./src/images/battleships-01.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7721bcf9f14a302a6c3d.png";

/***/ }),

/***/ "./src/images/battleships-02.png":
/*!***************************************!*\
  !*** ./src/images/battleships-02.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ba56bcf416a342e4623.png";

/***/ }),

/***/ "./src/images/battleships-03.png":
/*!***************************************!*\
  !*** ./src/images/battleships-03.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44fb91cc259ed888ee36.png";

/***/ }),

/***/ "./src/images/battleships-04.png":
/*!***************************************!*\
  !*** ./src/images/battleships-04.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "438446f7a8bb39fed6e8.png";

/***/ }),

/***/ "./src/images/battleships-05.png":
/*!***************************************!*\
  !*** ./src/images/battleships-05.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d707a17f43a5e2dbcfc4.png";

/***/ }),

/***/ "./src/images/battleships-06.png":
/*!***************************************!*\
  !*** ./src/images/battleships-06.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b46cd682fbdd5eab7be.png";

/***/ }),

/***/ "./src/images/battleships-07.png":
/*!***************************************!*\
  !*** ./src/images/battleships-07.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a92ff40bfe9fedbe2d08.png";

/***/ }),

/***/ "./src/images/battleships-08.png":
/*!***************************************!*\
  !*** ./src/images/battleships-08.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b1d10465f414f502384.png";

/***/ }),

/***/ "./src/images/battleships-09.png":
/*!***************************************!*\
  !*** ./src/images/battleships-09.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f404535521e9ea56a621.png";

/***/ }),

/***/ "./src/images/battleships-10.png":
/*!***************************************!*\
  !*** ./src/images/battleships-10.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5e3b9e5ef72e1d13d10.png";

/***/ }),

/***/ "./src/images/battleships-11.png":
/*!***************************************!*\
  !*** ./src/images/battleships-11.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee2d9a5f8793edd1142e.png";

/***/ }),

/***/ "./src/images/battleships-12.png":
/*!***************************************!*\
  !*** ./src/images/battleships-12.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f929c17f501065c471cf.png";

/***/ }),

/***/ "./src/images/battleships-13.png":
/*!***************************************!*\
  !*** ./src/images/battleships-13.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b691738ba56fa5eeb53.png";

/***/ }),

/***/ "./src/images/battleships-14.png":
/*!***************************************!*\
  !*** ./src/images/battleships-14.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cf24b0100916bb24012.png";

/***/ }),

/***/ "./src/images/battleships-15.png":
/*!***************************************!*\
  !*** ./src/images/battleships-15.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a183d4c423401a4cfdd7.png";

/***/ }),

/***/ "./src/images/battleships-16.png":
/*!***************************************!*\
  !*** ./src/images/battleships-16.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42ba1dbefe6a5a49a9a9.png";

/***/ }),

/***/ "./src/images/battleships-17.png":
/*!***************************************!*\
  !*** ./src/images/battleships-17.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f5d20943ea6d44d14e3.png";

/***/ }),

/***/ "./src/images/battleships-18.png":
/*!***************************************!*\
  !*** ./src/images/battleships-18.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62acd97b99a914a64550.png";

/***/ }),

/***/ "./src/images/battleships-19.png":
/*!***************************************!*\
  !*** ./src/images/battleships-19.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "412b777d13c13b80ced8.png";

/***/ }),

/***/ "./src/images/battleships-20.png":
/*!***************************************!*\
  !*** ./src/images/battleships-20.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb7b14db3ddba53ed3c6.png";

/***/ }),

/***/ "./src/images/battleships-21.png":
/*!***************************************!*\
  !*** ./src/images/battleships-21.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab9ef8e5ad220ca8deaa.png";

/***/ }),

/***/ "./src/images/battleships-22.png":
/*!***************************************!*\
  !*** ./src/images/battleships-22.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca3f260b6d94271d2244.png";

/***/ }),

/***/ "./src/images/battleships-23.png":
/*!***************************************!*\
  !*** ./src/images/battleships-23.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbf26bcca6ecdaee0920.png";

/***/ }),

/***/ "./src/images/battleships-24.png":
/*!***************************************!*\
  !*** ./src/images/battleships-24.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2988bea1285960970dc1.png";

/***/ }),

/***/ "./src/images/battleships-25.png":
/*!***************************************!*\
  !*** ./src/images/battleships-25.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d8705665ba98c4a32fd.png";

/***/ }),

/***/ "./src/images/explosion.png":
/*!**********************************!*\
  !*** ./src/images/explosion.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d11ed8a7bd03b4f1e3.png";

/***/ }),

/***/ "./src/images/ocean-big.jpg":
/*!**********************************!*\
  !*** ./src/images/ocean-big.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe31e58f5ac6a8faeff2.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _lib_domManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/domManager.js */ "./src/lib/domManager.js");
/* harmony import */ var _lib_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/game.js */ "./src/lib/game.js");




const gameInstance = (0,_lib_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

// draw the boards
(0,_lib_domManager_js__WEBPACK_IMPORTED_MODULE_1__.drawGrid)();
(0,_lib_domManager_js__WEBPACK_IMPORTED_MODULE_1__.drawGrid)('enemy');

// Show action to the player
(0,_lib_domManager_js__WEBPACK_IMPORTED_MODULE_1__.showAction)('player', 'Place your ships');
(0,_lib_domManager_js__WEBPACK_IMPORTED_MODULE_1__.showAction)('enemy', 'Waiting For Ships', 'alert');

(0,_lib_domManager_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacingShip)('Carrier');

// Show the alert
(0,_lib_domManager_js__WEBPACK_IMPORTED_MODULE_1__.createAlert)('success', 'Game started, place your ships (Press R to rotate)');

// populate the ships
(0,_lib_domManager_js__WEBPACK_IMPORTED_MODULE_1__.populateShipImages)();
(0,_lib_domManager_js__WEBPACK_IMPORTED_MODULE_1__.populateShipImages)('enemy');

(0,_lib_domManager_js__WEBPACK_IMPORTED_MODULE_1__.startPlacing)(gameInstance, 'horizontal', 'Carrier');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7VUM1RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQVFRO0FBQ0k7O0FBRWpDLHFCQUFxQix3REFBSTs7QUFFekI7QUFDQSw0REFBUTtBQUNSLDREQUFROztBQUVSO0FBQ0EsOERBQVU7QUFDViw4REFBVTs7QUFFVixxRUFBaUI7O0FBRWpCO0FBQ0EsK0RBQVc7O0FBRVg7QUFDQSxzRUFBa0I7QUFDbEIsc0VBQWtCOztBQUVsQixnRUFBWSx3QyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL3NyYy9saWIvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vc3JjL2xpYi9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL3NyYy9saWIvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvLi9zcmMvbGliL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vc3JjL2xpYi9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvLi9zcmMvbGliL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9vY2Vhbi1iaWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA2MyUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuaGFzLWJhY2tncm91bmQtZGFuZ2VyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYzKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5oYXMtYmFja2dyb3VuZC1zdWNjZXNzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDI1NSwgMCwgMC42MykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGw6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjE1LCAyMTUsIDAuNSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pcy1mdWxsaGVpZ2h0IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0dGxlLXRhZyA+IHNwYW4ge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIHdpZHRoOiAxMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcy1vY2VhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsd0NBQXdDO0VBQ3hDLG9DQUFvQztFQUNwQyxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlEQUE2QztBQUMvQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDYzJSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5oYXMtYmFja2dyb3VuZC1kYW5nZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjMpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMjU1LCAwLCAwLjYzKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSwgMC41KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlzLWZ1bGxoZWlnaHQge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi50aXR0bGUtdGFnID4gc3BhbiB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgd2lkdGg6IDEzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFzLW9jZWFuIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9vY2Vhbi1iaWcuanBnKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEdldCB0aGUgQWN0dWFsIERPTSBlbGVtZW50c1xuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMScpO1xuY29uc3QgYm9hcmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjInKTtcbmNvbnN0IHBsYXllckFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJBY3Rpb24nKTtcbmNvbnN0IGVuZW15QWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZW15QWN0aW9uJyk7XG5jb25zdCBwbGFjaW5nU2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjaW5nU2hpcCcpO1xuY29uc3QgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQnKTtcbmNvbnN0IGVuZW15U3RhdHVzVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblxuLy8gR2V0IHRoZSBET00gZWxlbWVudHMgZnJvbSB0aGUgcGxheWVyIGNhcmRzXG5jb25zdCBwbGF5ZXIxQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxQ2FyZCcpO1xuLy8gQ2FycmllclxuY29uc3QgcGxheWVyMUNhcnJpZXIgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjY2FycmllcicpO1xuY29uc3QgcGxheWVyMUNhcnJpZXJRdWFudGl0eSA9IHBsYXllcjFDYXJyaWVyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gQmF0dGxlc2hpcFxuY29uc3QgcGxheWVyMUJhdHRsZXNoaXAgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjYmF0dGxlc2hpcCcpO1xuY29uc3QgcGxheWVyMUJhdHRsZXNoaXBRdWFudGl0eSA9IHBsYXllcjFCYXR0bGVzaGlwLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gU3VibWFyaW5lXG5jb25zdCBwbGF5ZXIxU3VibWFyaW5lID0gcGxheWVyMUNhcmQucXVlcnlTZWxlY3RvcignI3N1Ym1hcmluZScpO1xuY29uc3QgcGxheWVyMVN1Ym1hcmluZVF1YW50aXR5ID0gcGxheWVyMVN1Ym1hcmluZS5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIGNydWlzZXJcbmNvbnN0IHBsYXllcjFDcnVpc2VyID0gcGxheWVyMUNhcmQucXVlcnlTZWxlY3RvcignI2NydWlzZXInKTtcbmNvbnN0IHBsYXllcjFDcnVpc2VyUXVhbnRpdHkgPSBwbGF5ZXIxQ3J1aXNlci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIERlc3Ryb3llclxuY29uc3QgcGxheWVyMURlc3Ryb3llciA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNkZXN0cm95ZXInKTtcbmNvbnN0IHBsYXllcjFEZXN0cm95ZXJRdWFudGl0eSA9IHBsYXllcjFEZXN0cm95ZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBwYXRyb2wgc2hpcFxuY29uc3QgcGxheWVyMVBhdHJvbFNoaXAgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjcGF0cm9sU2hpcCcpO1xuY29uc3QgcGxheWVyMVBhdHJvbFNoaXBRdWFudGl0eSA9IHBsYXllcjFQYXRyb2xTaGlwLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuXG4vLyBHZXQgdGhlIERPTSBlbGVtZW50cyBmcm9tIHRoZSBjb21wdXRlciBjYXJkc1xuY29uc3QgcGxheWVyMkNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMkNhcmQnKTtcbi8vIENhcnJpZXJcbmNvbnN0IHBsYXllcjJDYXJyaWVyID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI2NhcnJpZXInKTtcbmNvbnN0IHBsYXllcjJDYXJyaWVyUXVhbnRpdHkgPSBwbGF5ZXIyQ2Fycmllci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIEJhdHRsZXNoaXBcbmNvbnN0IHBsYXllcjJCYXR0bGVzaGlwID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI2JhdHRsZXNoaXAnKTtcbmNvbnN0IHBsYXllcjJCYXR0bGVzaGlwUXVhbnRpdHkgPSBwbGF5ZXIyQmF0dGxlc2hpcC5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIFN1Ym1hcmluZVxuY29uc3QgcGxheWVyMlN1Ym1hcmluZSA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNzdWJtYXJpbmUnKTtcbmNvbnN0IHBsYXllcjJTdWJtYXJpbmVRdWFudGl0eSA9IHBsYXllcjJTdWJtYXJpbmUucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBjcnVpc2VyXG5jb25zdCBwbGF5ZXIyQ3J1aXNlciA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNjcnVpc2VyJyk7XG5jb25zdCBwbGF5ZXIyQ3J1aXNlclF1YW50aXR5ID0gcGxheWVyMkNydWlzZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBEZXN0cm95ZXJcbmNvbnN0IHBsYXllcjJEZXN0cm95ZXIgPSBwbGF5ZXIyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjZGVzdHJveWVyJyk7XG5jb25zdCBwbGF5ZXIyRGVzdHJveWVyUXVhbnRpdHkgPSBwbGF5ZXIyRGVzdHJveWVyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gcGF0cm9sIHNoaXBcbmNvbnN0IHBsYXllcjJQYXRyb2xTaGlwID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI3BhdHJvbFNoaXAnKTtcbmNvbnN0IHBsYXllcjJQYXRyb2xTaGlwUXVhbnRpdHkgPSBwbGF5ZXIyUGF0cm9sU2hpcC5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcblxuY29uc3QgcGxheWVyMUNhcnJpZXJJbWFnZSA9IHBsYXllcjFDYXJyaWVyLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuY29uc3QgcGxheWVyMUJhdHRsZXNoaXBJbWFnZSA9IHBsYXllcjFCYXR0bGVzaGlwLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuY29uc3QgcGxheWVyMVN1Ym1hcmluZUltYWdlID0gcGxheWVyMVN1Ym1hcmluZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbmNvbnN0IHBsYXllcjFDcnVpc2VySW1hZ2UgPSBwbGF5ZXIxQ3J1aXNlci5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbmNvbnN0IHBsYXllcjFEZXN0cm95ZXJJbWFnZSA9IHBsYXllcjFEZXN0cm95ZXIucXVlcnlTZWxlY3RvcignaW1nJyk7XG5jb25zdCBwbGF5ZXIxUGF0cm9sU2hpcEltYWdlID0gcGxheWVyMVBhdHJvbFNoaXAucXVlcnlTZWxlY3RvcignaW1nJyk7XG5cbmNvbnN0IHBsYXllcjJDYXJyaWVySW1hZ2UgPSBwbGF5ZXIyQ2Fycmllci5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbmNvbnN0IHBsYXllcjJCYXR0bGVzaGlwSW1hZ2UgPSBwbGF5ZXIyQmF0dGxlc2hpcC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbmNvbnN0IHBsYXllcjJTdWJtYXJpbmVJbWFnZSA9IHBsYXllcjJTdWJtYXJpbmUucXVlcnlTZWxlY3RvcignaW1nJyk7XG5jb25zdCBwbGF5ZXIyQ3J1aXNlckltYWdlID0gcGxheWVyMkNydWlzZXIucXVlcnlTZWxlY3RvcignaW1nJyk7XG5jb25zdCBwbGF5ZXIyRGVzdHJveWVySW1hZ2UgPSBwbGF5ZXIyRGVzdHJveWVyLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuY29uc3QgcGxheWVyMlBhdHJvbFNoaXBJbWFnZSA9IHBsYXllcjJQYXRyb2xTaGlwLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb21FbGVtZW50cygpIHtcbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBib2FyZDIsXG4gICAgcGxheWVyQWN0aW9uLFxuICAgIGVuZW15QWN0aW9uLFxuICAgIHBsYWNpbmdTaGlwLFxuICAgIGFsZXJ0LFxuICAgIGVuZW15U3RhdHVzVGFnLFxuICAgIHBsYXllcjFDYXJkLFxuICAgIHBsYXllcjFDYXJyaWVyLFxuICAgIHBsYXllcjFDYXJyaWVyUXVhbnRpdHksXG4gICAgcGxheWVyMUJhdHRsZXNoaXAsXG4gICAgcGxheWVyMUJhdHRsZXNoaXBRdWFudGl0eSxcbiAgICBwbGF5ZXIxU3VibWFyaW5lLFxuICAgIHBsYXllcjFTdWJtYXJpbmVRdWFudGl0eSxcbiAgICBwbGF5ZXIxQ3J1aXNlcixcbiAgICBwbGF5ZXIxQ3J1aXNlclF1YW50aXR5LFxuICAgIHBsYXllcjFEZXN0cm95ZXIsXG4gICAgcGxheWVyMURlc3Ryb3llclF1YW50aXR5LFxuICAgIHBsYXllcjFQYXRyb2xTaGlwLFxuICAgIHBsYXllcjFQYXRyb2xTaGlwUXVhbnRpdHksXG4gICAgcGxheWVyMkNhcmQsXG4gICAgcGxheWVyMkNhcnJpZXIsXG4gICAgcGxheWVyMkNhcnJpZXJRdWFudGl0eSxcbiAgICBwbGF5ZXIyQmF0dGxlc2hpcCxcbiAgICBwbGF5ZXIyQmF0dGxlc2hpcFF1YW50aXR5LFxuICAgIHBsYXllcjJTdWJtYXJpbmUsXG4gICAgcGxheWVyMlN1Ym1hcmluZVF1YW50aXR5LFxuICAgIHBsYXllcjJDcnVpc2VyLFxuICAgIHBsYXllcjJDcnVpc2VyUXVhbnRpdHksXG4gICAgcGxheWVyMkRlc3Ryb3llcixcbiAgICBwbGF5ZXIyRGVzdHJveWVyUXVhbnRpdHksXG4gICAgcGxheWVyMlBhdHJvbFNoaXAsXG4gICAgcGxheWVyMlBhdHJvbFNoaXBRdWFudGl0eSxcbiAgICBwbGF5ZXIxQ2FycmllckltYWdlLFxuICAgIHBsYXllcjFCYXR0bGVzaGlwSW1hZ2UsXG4gICAgcGxheWVyMVN1Ym1hcmluZUltYWdlLFxuICAgIHBsYXllcjFDcnVpc2VySW1hZ2UsXG4gICAgcGxheWVyMURlc3Ryb3llckltYWdlLFxuICAgIHBsYXllcjFQYXRyb2xTaGlwSW1hZ2UsXG4gICAgcGxheWVyMkNhcnJpZXJJbWFnZSxcbiAgICBwbGF5ZXIyQmF0dGxlc2hpcEltYWdlLFxuICAgIHBsYXllcjJTdWJtYXJpbmVJbWFnZSxcbiAgICBwbGF5ZXIyQ3J1aXNlckltYWdlLFxuICAgIHBsYXllcjJEZXN0cm95ZXJJbWFnZSxcbiAgICBwbGF5ZXIyUGF0cm9sU2hpcEltYWdlLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgc2hpcHMsIGdldEFsbFNoaXBJbWFnZXMsIGdldEV4cGxvc2lvbkltYWdlIH0gZnJvbSAnLi9zaGlwcy5qcyc7XG5pbXBvcnQgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cy5qcyc7XG5pbXBvcnQgeyBib2FyZFZhbGlkYXRpb24gfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnkuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWxlcnQodHlwZSwgbWVzc2FnZSkge1xuICBkb21FbGVtZW50cygpLmFsZXJ0LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm90aWZpY2F0aW9uIGlzLSR7dHlwZX1cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPjwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzcz1cImhhcy10ZXh0LXdlaWdodC1ib2xkXCI+JHttZXNzYWdlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICBjb25zdCBidXR0b24gPSBkb21FbGVtZW50cygpLmFsZXJ0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xuICAgIGRvbUVsZW1lbnRzKCkuYWxlcnQuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dyaWQodHlwZSA9ICdwbGF5ZXInKSB7XG4gIGNvbnN0IGJvYXJkID0gdHlwZSA9PT0gJ2VuZW15JyA/IGRvbUVsZW1lbnRzKCkuYm9hcmQyIDogZG9tRWxlbWVudHMoKS5ib2FyZDtcbiAgYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgLy8gYXNzaWduIHRoZSBpZCB0byBlYWNoIGNlbGxcbiAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCAnUDEnKTtcbiAgICAvLyBhc3NpZ24gdGhlIGNvb3JkaW5hdGVzIHRvIGVhY2ggY2VsbFxuICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBpICUgMTApO1xuICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBNYXRoLmZsb29yKGkgLyAxMCkpO1xuXG4gICAgLy8gZGVsZXRlIGFueSBldmVudCBsaXN0ZW5lclxuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge30pO1xuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHt9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVHcmlkKHR5cGUgPSAncGxheWVyJywgYm9hcmQpIHtcbiAgY29uc3QgZG9tQm9hcmQgPSB0eXBlID09PSAnZW5lbXknID8gZG9tRWxlbWVudHMoKS5ib2FyZDIgOiBkb21FbGVtZW50cygpLmJvYXJkO1xuICBjb25zdCB7IHNoaXBzIH0gPSBib2FyZDtcbiAgY29uc3QgeyBtaXNzZWRBdHRhY2tzIH0gPSBib2FyZDtcblxuICBpZiAodHlwZSA9PT0gJ3BsYXllcicpIHtcbiAgICAvLyBzaG93IHRoZSBzaGlwc1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7c2hpcC5jb29yZGluYXRlc1tpXVswXX1cIl1bZGF0YS15PVwiJHtzaGlwLmNvb3JkaW5hdGVzW2ldWzFdfVwiXWApO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gZ2V0QWxsU2hpcEltYWdlcyhzaGlwLm5hbWUpO1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZXNbaV19KWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyB1cGRhdGUgdGhlIG1pc3NlZCBhdHRhY2tzXG4gIG1pc3NlZEF0dGFja3MuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICBjb25zdCBjZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7Y29vcmRbMF19XCJdW2RhdGEteT1cIiR7Y29vcmRbMV19XCJdYCk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInKTtcbiAgfSk7XG5cbiAgLy8gdXBkYXRlIHRoZSBoaXQgYXR0YWNrc1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5oaXRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBjZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7Y29vcmRbMF19XCJdW2RhdGEteT1cIiR7Y29vcmRbMV19XCJdYCk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICAgIGlmICh0eXBlID09PSAnZW5lbXknKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2dldEV4cGxvc2lvbkltYWdlKCl9KWA7XG4gICAgICB9XG4gICAgICAvLyBpZiBzaGlwIGlzIHN1bmsgdGhlbiBhZGQgdGhlIGZ1bGwgaW1hZ2VcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWJhY2tncm91bmQtc3VjY2VzcycpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MtZGFyaycpO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBnZXRBbGxTaGlwSW1hZ2VzKHNoaXAubmFtZSk7XG4gICAgICAgIGNvbnN0IGFjdHVhbFNoaXBQYXJ0ID0gc2hpcC5jb29yZGluYXRlc1xuICAgICAgICAgIC5maW5kSW5kZXgoKHNoaXBDb29yZCkgPT4gc2hpcENvb3JkWzBdID09PSBjb29yZFswXSAmJiBzaGlwQ29vcmRbMV0gPT09IGNvb3JkWzFdKTtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VzW2FjdHVhbFNoaXBQYXJ0XX0pYDtcbiAgICAgICAgLy8gcm90YXRlIHRvIHRoZSBjb3JyZWN0IG9yaWVudGF0aW9uXG4gICAgICAgIGNvbnN0IGFjdHVhbE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChzaGlwLmNvb3JkaW5hdGVzWzBdWzBdID09PSBzaGlwLmNvb3JkaW5hdGVzWzFdWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFjdHVhbE9yaWVudGF0aW9uKCkgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBjZWxsLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlU2hpcEltYWdlcyh0eXBlID0gJ3BsYXllcicpIHtcbiAgbGV0IHNoaXBJbWFnZUVsZW1lbnRzID0gW107XG4gIGlmICh0eXBlID09PSAncGxheWVyJykge1xuICAgIHNoaXBJbWFnZUVsZW1lbnRzID0gW1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXIxQ2FycmllckltYWdlLCBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdDYXJyaWVyJykuZnVsbEltYWdlLFxuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXIxQmF0dGxlc2hpcEltYWdlLCBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdCYXR0bGVzaGlwJykuZnVsbEltYWdlLFxuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXIxQ3J1aXNlckltYWdlLCBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdDcnVpc2VyJykuZnVsbEltYWdlLFxuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXIxU3VibWFyaW5lSW1hZ2UsIHNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ1N1Ym1hcmluZScpLmZ1bGxJbWFnZSxcbiAgICAgIGRvbUVsZW1lbnRzKCkucGxheWVyMURlc3Ryb3llckltYWdlLCBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdEZXN0cm95ZXInKS5mdWxsSW1hZ2UsXG4gICAgICBkb21FbGVtZW50cygpLnBsYXllcjFQYXRyb2xTaGlwSW1hZ2UsIHNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ1BhdHJvbGxlcicpLmZ1bGxJbWFnZSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIHNoaXBJbWFnZUVsZW1lbnRzID0gW1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXIyQ2FycmllckltYWdlLCBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdDYXJyaWVyJykuZnVsbEltYWdlLFxuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXIyQmF0dGxlc2hpcEltYWdlLCBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdCYXR0bGVzaGlwJykuZnVsbEltYWdlLFxuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXIyQ3J1aXNlckltYWdlLCBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdDcnVpc2VyJykuZnVsbEltYWdlLFxuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXIyU3VibWFyaW5lSW1hZ2UsIHNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ1N1Ym1hcmluZScpLmZ1bGxJbWFnZSxcbiAgICAgIGRvbUVsZW1lbnRzKCkucGxheWVyMkRlc3Ryb3llckltYWdlLCBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdEZXN0cm95ZXInKS5mdWxsSW1hZ2UsXG4gICAgICBkb21FbGVtZW50cygpLnBsYXllcjJQYXRyb2xTaGlwSW1hZ2UsIHNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ1BhdHJvbGxlcicpLmZ1bGxJbWFnZSxcbiAgICBdO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEltYWdlRWxlbWVudHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBzaGlwSW1hZ2VFbGVtZW50c1tpXS5zcmMgPSBzaGlwSW1hZ2VFbGVtZW50c1tpICsgMV07XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2FyZChib2FyZCwgdHlwZSA9ICdQbGF5ZXInKSB7XG4gIGNvbnN0IGNhcnJpZXIgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ0NhcnJpZXInKTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnQmF0dGxlc2hpcCcpO1xuICBjb25zdCBjcnVpc2VyID0gYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdDcnVpc2VyJyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnU3VibWFyaW5lJyk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnRGVzdHJveWVyJyk7XG4gIGNvbnN0IHBhdHJvbGxlciA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnUGF0cm9sbGVyJyk7XG5cbiAgbGV0IHNoaXBzID0gW107XG4gIGlmICh0eXBlID09PSAnUGxheWVyJykge1xuICAgIHNoaXBzID0gW1xuICAgICAgW2NhcnJpZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMUNhcnJpZXJRdWFudGl0eV0sXG4gICAgICBbYmF0dGxlc2hpcCwgZG9tRWxlbWVudHMoKS5wbGF5ZXIxQmF0dGxlc2hpcFF1YW50aXR5XSxcbiAgICAgIFtjcnVpc2VyLCBkb21FbGVtZW50cygpLnBsYXllcjFDcnVpc2VyUXVhbnRpdHldLFxuICAgICAgW3N1Ym1hcmluZSwgZG9tRWxlbWVudHMoKS5wbGF5ZXIxU3VibWFyaW5lUXVhbnRpdHldLFxuICAgICAgW2Rlc3Ryb3llciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIxRGVzdHJveWVyUXVhbnRpdHldLFxuICAgICAgW3BhdHJvbGxlciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIxUGF0cm9sU2hpcFF1YW50aXR5XSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIHNoaXBzID0gW1xuICAgICAgW2NhcnJpZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMkNhcnJpZXJRdWFudGl0eV0sXG4gICAgICBbYmF0dGxlc2hpcCwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyQmF0dGxlc2hpcFF1YW50aXR5XSxcbiAgICAgIFtjcnVpc2VyLCBkb21FbGVtZW50cygpLnBsYXllcjJDcnVpc2VyUXVhbnRpdHldLFxuICAgICAgW3N1Ym1hcmluZSwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyU3VibWFyaW5lUXVhbnRpdHldLFxuICAgICAgW2Rlc3Ryb3llciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyRGVzdHJveWVyUXVhbnRpdHldLFxuICAgICAgW3BhdHJvbGxlciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyUGF0cm9sU2hpcFF1YW50aXR5XSxcbiAgICBdO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoc2hpcHNbaV1bMF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBzaGlwc1tpXVsxXS5pbm5lckhUTUwgPSAnMCc7XG4gICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtdGV4dC1zdWNjZXNzJyk7XG4gICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QuYWRkKCdoYXMtdGV4dC1kYW5nZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3Vua2VkID0gc2hpcHNbaV1bMF1bMF0uaXNTdW5rKCk7XG4gICAgICBpZiAoc3Vua2VkKSB7XG4gICAgICAgIHNoaXBzW2ldWzFdLmlubmVySFRNTCA9ICcwJztcbiAgICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXRleHQtc3VjY2VzcycpO1xuICAgICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QuYWRkKCdoYXMtdGV4dC1kYW5nZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBzW2ldWzFdLmlubmVySFRNTCA9ICcxJztcbiAgICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXRleHQtZGFuZ2VyJyk7XG4gICAgICAgIHNoaXBzW2ldWzFdLmNsYXNzTGlzdC5hZGQoJ2hhcy10ZXh0LXN1Y2Nlc3MnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYWNpbmdTaGlwKHNoaXBOYW1lKSB7XG4gIGlmIChzaGlwTmFtZSA9PT0gJ25vbmUnKSB7XG4gICAgZG9tRWxlbWVudHMoKS5wbGFjaW5nU2hpcC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgc2hpcCA9IHNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gc2hpcE5hbWUpO1xuICBkb21FbGVtZW50cygpLnBsYWNpbmdTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICBkb21FbGVtZW50cygpLnBsYWNpbmdTaGlwLmlubmVySFRNTCA9IGBcbiAgICA8aW1nIHNyYz1cIiR7c2hpcC5mdWxsSW1hZ2V9XCIgYWx0PVwiJHtzaGlwTmFtZX1cIiB3aWR0aD1cIiR7c2hpcC5zaXplICogMjB9XCI+XG4gIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWN0aW9uKHR5cGUsIG1lc3NhZ2UsIGNvbG9yID0gJ2dyZWVuJykge1xuICBpZiAodHlwZSA9PT0gJ3BsYXllcicpIHtcbiAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICAgIGlmIChjb2xvciA9PT0gJ2dyZWVuJykge1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtd2FybmluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy13YXJuaW5nJyk7XG4gICAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdWNjZXNzJyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdlbmVteScpIHtcbiAgICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgICBpZiAoY29sb3IgPT09ICdncmVlbicpIHtcbiAgICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgICAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy13YXJuaW5nJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpO1xuICAgICAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdWNjZXNzJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRNb3ZlKGJvYXJkLCBjZWxsLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGNvbnN0IGNvb3JkcyA9IFt4LCB5XTtcbiAgdHJ5IHtcbiAgICBib2FyZFZhbGlkYXRpb24oc2hpcE5hbWUsIHNoaXBMZW5ndGgsIGNvb3Jkcywgb3JpZW50YXRpb24sIGJvYXJkLnNoaXBzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2V0U2hpcEltYWdlKGJvYXJkLCBjZWxsLCBzaGlwSW1hZ2VzLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGNvbnN0IHZhbGlkTW92ZSA9IGNoZWNrVmFsaWRNb3ZlKGJvYXJkLCBjZWxsLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNlbGxUb0NoYW5nZSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1AxW2RhdGEteD1cIiR7eCArIGl9XCJdW2RhdGEteT1cIiR7eX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjUDFbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3kgKyBpfVwiXWApO1xuICAgIGlmIChjZWxsVG9DaGFuZ2UpIHtcbiAgICAgIGlmICh2YWxpZE1vdmUpIHtcbiAgICAgICAgY2VsbFRvQ2hhbmdlLnN0eWxlLnRyYW5zZm9ybSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgY2VsbFRvQ2hhbmdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzaGlwSW1hZ2VzW2ldfSlgO1xuICAgICAgICBjZWxsVG9DaGFuZ2UuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtc3VjY2VzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLWRhbmdlcicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlwSW1hZ2UoY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2VsbFRvQ2hhbmdlID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjUDFbZGF0YS14PVwiJHt4ICsgaX1cIl1bZGF0YS15PVwiJHt5fVwiXWApXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNQMVtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSArIGl9XCJdYCk7XG4gICAgaWYgKGNlbGxUb0NoYW5nZSkge1xuICAgICAgaWYgKCFjZWxsVG9DaGFuZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgICAgY2VsbFRvQ2hhbmdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgfVxuICAgICAgY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICAgIGNlbGxUb0NoYW5nZS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGxhY2VTaGlwKGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTmFtZSwgc2hpcExlbmd0aCwgYm9hcmQpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGNvbnN0IHZhbGlkTW92ZSA9IGNoZWNrVmFsaWRNb3ZlKGJvYXJkLCBjZWxsLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpO1xuICBpZiAodmFsaWRNb3ZlKSB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBbeCwgeV0sIG9yaWVudGF0aW9uKTtcbiAgICB1cGRhdGVDYXJkKGJvYXJkKTtcbiAgICB1cGRhdGVHcmlkKCdwbGF5ZXInLCBib2FyZCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzdG9wUGxhY2luZygpIHtcbiAgY29uc3QgY2VsbHMgPSBkb21FbGVtZW50cygpLmJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG5cbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmICghY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkge1xuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICB9XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJyk7XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInKTtcbiAgICBjZWxsLnJlcGxhY2VXaXRoKGNlbGwuY2xvbmVOb2RlKHRydWUpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlc2V0QnV0dG9uKCkge1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtZGFuZ2VyJywgJ2lzLWxhcmdlJywgJ2lzLWZ1bGx3aWR0aCcpO1xuICByZXNldEJ1dHRvbi5pbm5lckhUTUwgPSAnUmVzZXQgR2FtZSc7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG4gIGRvbUVsZW1lbnRzKCkuYWxlcnQuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICBjcmVhdGVBbGVydCgnc3VjY2VzcycsIGAke3dpbm5lcn1gKTtcbiAgZG9tRWxlbWVudHMoKS5ib2FyZC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgZG9tRWxlbWVudHMoKS5ib2FyZDIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gIGRvbUVsZW1lbnRzKCkucGxhY2luZ1NoaXAuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gIGRvbUVsZW1lbnRzKCkucGxheWVyQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICBjcmVhdGVSZXNldEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBzdGFydEF0dGFja2luZyhnYW1lSW5zdGFuY2UpIHtcbiAgY29uc3QgY2VsbHMgPSBkb21FbGVtZW50cygpLmJvYXJkMi5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgJiYgIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgICAgICAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGF0dGFjayA9IGdhbWVJbnN0YW5jZS5wbGF5ZXJBdHRhY2soeCwgeSk7XG4gICAgICAgICAgaWYgKGF0dGFjayA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnc3VjY2VzcycsICdZb3UgaGl0IGEgc2hpcCEsIGtlZXAgZ29pbmchJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2sgPT09ICdkb3VibGVNaXNzJykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnbm9uZScsICdZb3UgbWlzc2VkISBhbHNvIHRoZSBjb21wdXRlciBtaXNzZWQhJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2sgPT09ICdtaXNzQW5kSGl0Jykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnZGFuZ2VyJywgJ1lvdSBtaXNzZWQhIHRoZSBjb21wdXRlciBoaXQgYSBzaGlwIScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVHcmlkKCdlbmVteScsIGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkKTtcbiAgICAgICAgICB1cGRhdGVHcmlkKCdwbGF5ZXInLCBnYW1lSW5zdGFuY2UucGxheWVyQm9hcmQpO1xuICAgICAgICAgIHVwZGF0ZUNhcmQoZ2FtZUluc3RhbmNlLmNvbXB1dGVyQm9hcmQsICdlbmVteScpO1xuICAgICAgICAgIHVwZGF0ZUNhcmQoZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkKTtcbiAgICAgICAgICBpZiAoZ2FtZUluc3RhbmNlLmdhbWVFbmQoKSkge1xuICAgICAgICAgICAgZW5kR2FtZShnYW1lSW5zdGFuY2UuZ2FtZUVuZCgpKTtcbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5yZXNldEdhbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjcmVhdGVBbGVydCgnd2FybmluZycsIGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7fSk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge30pO1xuICB9KTtcbn1cblxubGV0IHBsYWNpbmcgPSB0cnVlO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQbGFjaW5nKGdhbWVJbnN0YW5jZSwgb3JpZW50YXRpb24sIHNoaXBOYW1lKSB7XG4gIHVwZGF0ZUNhcmQoZ2FtZUluc3RhbmNlLmNvbXB1dGVyQm9hcmQsICdlbmVteScpO1xuXG4gIGNvbnN0IGNlbGxzID0gZG9tRWxlbWVudHMoKS5ib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICBjb25zdCBzaGlwSW1hZ2VzID0gZ2V0QWxsU2hpcEltYWdlcyhzaGlwTmFtZSk7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwSW1hZ2VzLmxlbmd0aDtcblxuICBjb25zdCBzaGlwVHlwZXMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdDcnVpc2VyJywgJ1N1Ym1hcmluZScsICdEZXN0cm95ZXInLCAnUGF0cm9sbGVyJ107XG4gIGNvbnN0IG5leHRTaGlwID0gc2hpcFR5cGVzLmluZGV4T2Yoc2hpcE5hbWUpICsgMTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdyJyAmJiBwbGFjaW5nKSB7XG4gICAgICBzdG9wUGxhY2luZygpO1xuICAgICAgc3RhcnRQbGFjaW5nKGdhbWVJbnN0YW5jZSwgb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcsIHNoaXBOYW1lKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiBzZXRTaGlwSW1hZ2UoZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkLCBjZWxsLCBzaGlwSW1hZ2VzLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiByZW1vdmVTaGlwSW1hZ2UoY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcGxhY2VkID0gdHJ5UGxhY2VTaGlwKGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTmFtZSwgc2hpcExlbmd0aCxcbiAgICAgICAgZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkKTtcbiAgICAgIGlmIChwbGFjZWQpIHtcbiAgICAgICAgc3RvcFBsYWNpbmcoKTtcbiAgICAgICAgaWYgKG5leHRTaGlwIDwgc2hpcFR5cGVzLmxlbmd0aCkge1xuICAgICAgICAgIHVwZGF0ZVBsYWNpbmdTaGlwKHNoaXBUeXBlc1tuZXh0U2hpcF0pO1xuICAgICAgICAgIHN0YXJ0UGxhY2luZyhnYW1lSW5zdGFuY2UsICdob3Jpem9udGFsJywgc2hpcFR5cGVzW25leHRTaGlwXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxhY2luZyA9IGZhbHNlO1xuICAgICAgICAgIHVwZGF0ZVBsYWNpbmdTaGlwKCdub25lJyk7XG4gICAgICAgICAgY3JlYXRlQWxlcnQoJ3N1Y2Nlc3MnLCAnQWxsIHNoaXBzIHBsYWNlZCwgcGxhY2luZyBjb21wdXRlciBzaGlwcycpO1xuICAgICAgICAgIHNob3dBY3Rpb24oJ3BsYXllcicsICdXYWl0aW5nIGZvciBjb21wdXRlcicsICdhbGVydCcpO1xuICAgICAgICAgIHNob3dBY3Rpb24oJ2VuZW15JywgJ1BsYWNpbmcgc2hpcHMnKTtcbiAgICAgICAgICAvLyB3YWl0IDMgc2Vjb25kIGJlZm9yZSBwbGFjaW5nIGNvbXB1dGVyIHNoaXBzIChzaW11bGF0ZXMgdGhpbmtpbmcpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UucmFuZG9tUGxhY2VTaGlwcyhnYW1lSW5zdGFuY2UuY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgICAgICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkLCAnZW5lbXknKTtcbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KCdzdWNjZXNzJywgJ0FsbCBzaGlwcyBwbGFjZWQsIEF0dGFjayEnKTtcbiAgICAgICAgICAgIHNob3dBY3Rpb24oJ3BsYXllcicsICdBdHRhY2sgdGhlIGVuZW15IScpO1xuICAgICAgICAgICAgc2hvd0FjdGlvbignZW5lbXknLCAnV2FpdGluZyBmb3IgYXR0YWNrJywgJ2FsZXJ0Jyk7XG4gICAgICAgICAgICBzdGFydEF0dGFja2luZyhnYW1lSW5zdGFuY2UpO1xuICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gJy4vZ2FtZWJvYXJkRmFjdG9yeS5qcyc7XG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSAnLi9zaGlwRmFjdG9yeS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IHtcbiAgICAvLyBwcm9wZXJ0aWVzXG4gICAgYWN0dWFsUGxheWVyOiAxLFxuICAgIGdhbWVTdGFydGVkOiBmYWxzZSxcbiAgICBwbGF5ZXJCb2FyZDogZ2FtZWJvYXJkRmFjdG9yeSgpLFxuICAgIGNvbXB1dGVyQm9hcmQ6IGdhbWVib2FyZEZhY3RvcnkoKSxcbiAgICAvLyBtZXRob2RzXG4gICAgY2hhbmdlUGxheWVyKCkge1xuICAgICAgdGhpcy5hY3R1YWxQbGF5ZXIgPSB0aGlzLmFjdHVhbFBsYXllciA9PT0gMSA/IDIgOiAxO1xuICAgIH0sXG4gICAgcmFuZG9tUGxhY2VTaGlwcyhib2FyZCkge1xuICAgICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgIHsgbmFtZTogJ0NhcnJpZXInLCB2YWx1ZTogc2hpcEZhY3RvcnkoNSkgfSxcbiAgICAgICAgeyBuYW1lOiAnQmF0dGxlc2hpcCcsIHZhbHVlOiBzaGlwRmFjdG9yeSg0KSB9LFxuICAgICAgICB7IG5hbWU6ICdDcnVpc2VyJywgdmFsdWU6IHNoaXBGYWN0b3J5KDMpIH0sXG4gICAgICAgIHsgbmFtZTogJ1N1Ym1hcmluZScsIHZhbHVlOiBzaGlwRmFjdG9yeSgzKSB9LFxuICAgICAgICB7IG5hbWU6ICdEZXN0cm95ZXInLCB2YWx1ZTogc2hpcEZhY3RvcnkoMikgfSxcbiAgICAgICAgeyBuYW1lOiAnUGF0cm9sbGVyJywgdmFsdWU6IHNoaXBGYWN0b3J5KDIpIH0sXG4gICAgICBdO1xuICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gJyc7XG4gICAgICAgIGxldCB2YWxpZFNoaXAgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCF2YWxpZFNoaXApIHtcbiAgICAgICAgICBjb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICBdO1xuICAgICAgICAgIG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwLm5hbWUsIHNoaXAudmFsdWUubGVuZ3RoLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgdmFsaWRTaGlwID0gdHJ1ZTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdmFsaWRTaGlwID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLnNoaXBzLmxlbmd0aCA+PSA2ICYmIHRoaXMuY29tcHV0ZXJCb2FyZC5zaGlwcy5sZW5ndGggPj0gNikge1xuICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gcGxhY2UgYWxsIHRoZSBzaGlwcycpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tWYWxpZEF0dGFjayh4LCB5KSB7XG4gICAgICBjb25zdCBjb29yZHMgPSBbeCwgeV07XG4gICAgICAvLyBjaGVjayBpZiB0aGUgZ2FtZSBpcyBzdGFydGVkXG4gICAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzdGFydCB0aGUgZ2FtZScpO1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgaWYgdGhlIGNvb3JkaW5hdGVzIGFyZSB2YWxpZFxuICAgICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29vcmRpbmF0ZXMgYXJlIG5vdCB2YWxpZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiB0aGUgY29vcmRpbmF0ZXMgYXJlIGFscmVhZHkgaGl0XG4gICAgICBjb25zdCBtaXNzZXMgPSB0aGlzLmNvbXB1dGVyQm9hcmQubWlzc2VkQXR0YWNrcztcbiAgICAgIGNvbnN0IG1pc3NlZCA9IG1pc3Nlcy5zb21lKChtaXNzKSA9PiBtaXNzWzBdID09PSBjb29yZHNbMF0gJiYgbWlzc1sxXSA9PT0gY29vcmRzWzFdKTtcblxuICAgICAgY29uc3QgaGl0cyA9IHRoaXMuY29tcHV0ZXJCb2FyZC5zaGlwcy5tYXAoKHNoaXApID0+IHNoaXAuaGl0cyk7XG4gICAgICBjb25zdCBoaXR0ZWQgPSBoaXRzLnNvbWUoKGhpdCkgPT4gaGl0LnNvbWUoKGhpdENvb3JkcykgPT4gaGl0Q29vcmRzWzBdID09PSBjb29yZHNbMF1cbiAgICAgICAgJiYgaGl0Q29vcmRzWzFdID09PSBjb29yZHNbMV0pKTtcbiAgICAgIGlmIChtaXNzZWQgfHwgaGl0dGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGFscmVhZHkgYXR0YWNrZWQgdGhpcyBjb29yZGluYXRlcycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBwbGF5ZXJBdHRhY2soeCwgeSkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tWYWxpZEF0dGFjayh4LCB5KSkge1xuICAgICAgICB0aGlzLmNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayhbeCwgeV0pO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgYXR0YWNrIGhpdCBhIHNoaXBcbiAgICAgICAgaWYgKHRoaXMuY29tcHV0ZXJCb2FyZC5zaGlwcy5zb21lKChzaGlwKSA9PiBzaGlwLmhpdHMuc29tZSgoaGl0KSA9PiBoaXRbMF0gPT09IHhcbiAgICAgICAgICAmJiBoaXRbMV0gPT09IHkpKSkge1xuICAgICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZVBsYXllcigpO1xuICAgICAgICBjb25zdCBjcHVBdHRhY2sgPSB0aGlzLmNvbXB1dGVyQXR0YWNrKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKCk7XG4gICAgICAgIGlmIChjcHVBdHRhY2sgPT09ICdtaXNzJykge1xuICAgICAgICAgIHJldHVybiAnZG91YmxlTWlzcyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAnbWlzc0FuZEhpdCc7XG4gICAgfSxcbiAgICBjb21wdXRlckF0dGFjayhoaXRzID0gMCkge1xuICAgICAgLy8gY2hlY2sgaWYgdGhlIGdhbWUgaXMgc3RhcnRlZFxuICAgICAgaWYgKCF0aGlzLmdhbWVTdGFydGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3RhcnQgdGhlIGdhbWUnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgIF07XG4gICAgICAvLyBjaGVjayBpZiB0aGUgY29vcmRpbmF0ZXMgYXJlIGFscmVhZHkgaGl0ICh1c2luZyAubWlzc2VkQXR0YWNrcylcbiAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLm1pc3NlZEF0dGFja3NcbiAgICAgICAgLnNvbWUoKG1pc3NlZEF0dGFjaykgPT4gbWlzc2VkQXR0YWNrWzBdID09PSBjb29yZGluYXRlc1swXVxuICAgICAgICAmJiBtaXNzZWRBdHRhY2tbMV0gPT09IGNvb3JkaW5hdGVzWzFdKSkge1xuICAgICAgICB0aGlzLmNvbXB1dGVyQXR0YWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgYXR0YWNrIGhpdCBhIHNoaXBcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQm9hcmQuc2hpcHMuc29tZSgoc2hpcCkgPT4gc2hpcC5oaXRzLnNvbWUoKGhpdCkgPT4gaGl0WzBdID09PSBjb29yZGluYXRlc1swXVxuICAgICAgICAgICYmIGhpdFsxXSA9PT0gY29vcmRpbmF0ZXNbMV0pKSkge1xuICAgICAgICAgIHRoaXMuY29tcHV0ZXJBdHRhY2soaGl0cyArIDEpO1xuICAgICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZVBsYXllcigpO1xuICAgICAgfVxuICAgICAgaWYgKGhpdHMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBoaXRzO1xuICAgIH0sXG4gICAgZ2FtZUVuZCgpIHtcbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBnYW1lIGlzIHN0YXJ0ZWRcbiAgICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHN0YXJ0IHRoZSBnYW1lJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gJ0NvbXB1dGVyIHdpbnMnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29tcHV0ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gJ1BsYXllciB3aW5zJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgIHRoaXMuYWN0dWFsUGxheWVyID0gMTtcbiAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucGxheWVyQm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gICAgICB0aGlzLmNvbXB1dGVyQm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGdhbWU7XG59O1xuIiwiaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gJy4vc2hpcEZhY3RvcnkuanMnO1xuXG4vLyBmdW5jdGlvbiB0byBnZXQgdGhlIGNvb3JkaW5hdGVzIG9mIGEgc2hpcFxuZnVuY3Rpb24gZ2V0U2hpcENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbeCArIGksIHldKTtcbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbeCwgeSArIGldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNoaXBDb29yZGluYXRlcztcbn1cblxuLy8gZnVuY3Rpb24gdG8gZ2V0IHRoZSBzaGlwIHRoYXQgd2FzIGhpdFxuZnVuY3Rpb24gZ2V0SGl0U2hpcChjb29yZGluYXRlcywgc2hpcHMpIHtcbiAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXM7XG4gIGxldCBzaGlwSGl0ID0gbnVsbDtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGUpID0+IHtcbiAgICAgIGlmIChzaGlwQ29vcmRpbmF0ZVswXSA9PT0geCAmJiBzaGlwQ29vcmRpbmF0ZVsxXSA9PT0geSkge1xuICAgICAgICBzaGlwSGl0ID0gc2hpcDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBzaGlwSGl0O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU5hbWUobmFtZSkge1xuICAvLyBDYXJyaWVyLCBCYXR0bGVzaGlwLCBDcnVpc2VyLCBTdWJtYXJpbmUsIERlc3Ryb3llciwgUGF0cm9sbGVyXG4gIGlmIChuYW1lICE9PSAnQ2FycmllcicgJiYgbmFtZSAhPT0gJ0JhdHRsZXNoaXAnICYmIG5hbWUgIT09ICdDcnVpc2VyJ1xuICAmJiBuYW1lICE9PSAnU3VibWFyaW5lJyAmJiBuYW1lICE9PSAnRGVzdHJveWVyJyAmJiBuYW1lICE9PSAnUGF0cm9sbGVyJykge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBuYW1lIG11c3QgYmUgQ2FycmllciwgQmF0dGxlc2hpcCwgQ3J1aXNlciwgU3VibWFyaW5lLCBEZXN0cm95ZXIgb3IgUGF0cm9sbGVyJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTaGlwTGVuZ3RoKGxlbmd0aCkge1xuICBpZiAobGVuZ3RoIDwgMSB8fCBsZW5ndGggPiA1KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGxlbmd0aCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlT3JpZW50YXRpb24ob3JpZW50YXRpb24pIHtcbiAgaWYgKG9yaWVudGF0aW9uICE9PSAnaG9yaXpvbnRhbCcgJiYgb3JpZW50YXRpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgb3JpZW50YXRpb24gbXVzdCBiZSBob3Jpem9udGFsIG9yIHZlcnRpY2FsJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoY29vcmRpbmF0ZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGNvb3JkaW5hdGVzIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgfVxuICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoICE9PSAyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGNvb3JkaW5hdGVzIG11c3QgYmUgYW4gYXJyYXkgb2YgdHdvIG51bWJlcnMnKTtcbiAgfVxuICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjb29yZGluYXRlICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGNvb3JkaW5hdGVzIG11c3QgYmUgYW4gYXJyYXkgb2YgdHdvIG51bWJlcnMnKTtcbiAgICB9XG4gICAgaWYgKGNvb3JkaW5hdGUgPCAwIHx8IGNvb3JkaW5hdGUgPiA5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgY29vcmRpbmF0ZXMgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDknKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU92ZXJsYXAoY29vcmRpbmF0ZXMsIGxlbmd0aCwgb3JpZW50YXRpb24sIHNoaXBzKSB7XG4gIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IGdldFNoaXBDb29yZGluYXRlcyhjb29yZGluYXRlcywgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGUpID0+IHtcbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGUyKSA9PiB7XG4gICAgICAgIGlmIChzaGlwQ29vcmRpbmF0ZVswXSA9PT0gc2hpcENvb3JkaW5hdGUyWzBdICYmIHNoaXBDb29yZGluYXRlWzFdID09PSBzaGlwQ29vcmRpbmF0ZTJbMV0pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXBzIGNhbm5vdCBvdmVybGFwJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvYXJkVmFsaWRhdGlvbihuYW1lLCBsZW5ndGgsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbiwgc2hpcHMpIHtcbiAgdmFsaWRhdGVOYW1lKG5hbWUpO1xuICB2YWxpZGF0ZVNoaXBMZW5ndGgobGVuZ3RoKTtcbiAgdmFsaWRhdGVPcmllbnRhdGlvbihvcmllbnRhdGlvbik7XG4gIHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpO1xuICB2YWxpZGF0ZU92ZXJsYXAoY29vcmRpbmF0ZXMsIGxlbmd0aCwgb3JpZW50YXRpb24sIHNoaXBzKTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIGdhbWVib2FyZCBmYWN0b3J5IGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gZ2FtZWJvYXJkRmFjdG9yeSgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0ge1xuICAgIHNoaXBzOiBbXSxcbiAgICBtaXNzZWRBdHRhY2tzOiBbXSxcbiAgICBwbGFjZVNoaXAobmFtZSwgbGVuZ3RoLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pIHtcbiAgICAgIC8vIHZhbGlkYXRlIHNoaXBcbiAgICAgIGlmIChib2FyZFZhbGlkYXRpb24obmFtZSwgbGVuZ3RoLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHRoaXMuc2hpcHMpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGNyZWF0ZSBzaGlwXG4gICAgICBjb25zdCBzaGlwID0gc2hpcEZhY3RvcnkobGVuZ3RoKTtcbiAgICAgIHNoaXAubmFtZSA9IG5hbWU7XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzID0gZ2V0U2hpcENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcblxuICAgICAgLy8gY2hlY2sgaWYgc2hpcCBpcyBvZmYgdGhlIGJvYXJkXG4gICAgICBjb25zdCBzaGlwT2ZmQm9hcmQgPSBzaGlwLmNvb3JkaW5hdGVzLnNvbWUoKHNoaXBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHNoaXBDb29yZGluYXRlO1xuICAgICAgICByZXR1cm4geCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDk7XG4gICAgICB9KTtcbiAgICAgIGlmIChzaGlwT2ZmQm9hcmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwcyBjYW5ub3QgYmUgcGxhY2VkIG9mZiB0aGUgYm9hcmQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgY29uc3Qgc2hpcEhpdCA9IGdldEhpdFNoaXAoY29vcmRpbmF0ZXMsIHRoaXMuc2hpcHMpO1xuICAgICAgaWYgKHNoaXBIaXQpIHtcbiAgICAgICAgc2hpcEhpdC5oaXQoY29vcmRpbmF0ZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBnYW1lYm9hcmQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcEZhY3RvcnkobGVuZ3RoKSB7XG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgbGVuZ3RoLFxuICAgIGhpdHM6IFtdLFxuICAgIGhpdChwb3NpdGlvbikge1xuICAgICAgdGhpcy5oaXRzLnB1c2gocG9zaXRpb24pO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGl0cy5sZW5ndGggPT09IHRoaXMubGVuZ3RoO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBzaGlwO1xufVxuIiwiLy8gR2V0IHRoZSBpbWFnZXMgZnJvbSB3ZWJwYWNrXG5pbXBvcnQgY2FycmllciBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjAucG5nJztcbmltcG9ydCBjYXJyaWVyMSBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDEucG5nJztcbmltcG9ydCBjYXJyaWVyMiBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDIucG5nJztcbmltcG9ydCBjYXJyaWVyMyBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDMucG5nJztcbmltcG9ydCBjYXJyaWVyNCBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDQucG5nJztcbmltcG9ydCBjYXJyaWVyNSBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDUucG5nJztcblxuaW1wb3J0IGJhdHRsZXNoaXAgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTIxLnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcDEgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA2LnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcDIgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA3LnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcDMgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA4LnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcDQgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA5LnBuZyc7XG5cbmltcG9ydCBjcnVpc2VyIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0yMi5wbmcnO1xuaW1wb3J0IGNydWlzZXIxIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0xMC5wbmcnO1xuaW1wb3J0IGNydWlzZXIyIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0xMS5wbmcnO1xuaW1wb3J0IGNydWlzZXIzIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0xMi5wbmcnO1xuXG5pbXBvcnQgc3VibWFyaW5lIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0yMy5wbmcnO1xuaW1wb3J0IHN1Ym1hcmluZTEgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTEzLnBuZyc7XG5pbXBvcnQgc3VibWFyaW5lMiBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTQucG5nJztcbmltcG9ydCBzdWJtYXJpbmUzIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0xNS5wbmcnO1xuXG5pbXBvcnQgZGVzdHJveWVyIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0yNC5wbmcnO1xuaW1wb3J0IGRlc3Ryb3llcjEgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTE4LnBuZyc7XG5pbXBvcnQgZGVzdHJveWVyMiBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTkucG5nJztcblxuaW1wb3J0IHBhdHJvbGxlciBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjUucG5nJztcbmltcG9ydCBwYXRyb2xsZXIxIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0xNi5wbmcnO1xuaW1wb3J0IHBhdHJvbGxlcjIgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTE3LnBuZyc7XG5cbmltcG9ydCBleHBsb3Npb24gZnJvbSAnLi4vaW1hZ2VzL2V4cGxvc2lvbi5wbmcnO1xuXG5jb25zdCBjYXJyaWVyU2hpcCA9IHtcbiAgbmFtZTogJ0NhcnJpZXInLFxuICBzaXplOiA1LFxuICBmdWxsSW1hZ2U6IGNhcnJpZXIsXG4gIGltYWdlczogW2NhcnJpZXIxLCBjYXJyaWVyMiwgY2FycmllcjMsIGNhcnJpZXI0LCBjYXJyaWVyNV0sXG59O1xuXG5jb25zdCBiYXR0bGVzaGlwU2hpcCA9IHtcbiAgbmFtZTogJ0JhdHRsZXNoaXAnLFxuICBzaXplOiA0LFxuICBmdWxsSW1hZ2U6IGJhdHRsZXNoaXAsXG4gIGltYWdlczogW2JhdHRsZXNoaXAxLCBiYXR0bGVzaGlwMiwgYmF0dGxlc2hpcDMsIGJhdHRsZXNoaXA0XSxcbn07XG5cbmNvbnN0IGNydWlzZXJTaGlwID0ge1xuICBuYW1lOiAnQ3J1aXNlcicsXG4gIHNpemU6IDMsXG4gIGZ1bGxJbWFnZTogY3J1aXNlcixcbiAgaW1hZ2VzOiBbY3J1aXNlcjEsIGNydWlzZXIyLCBjcnVpc2VyM10sXG59O1xuXG5jb25zdCBzdWJtYXJpbmVTaGlwID0ge1xuICBuYW1lOiAnU3VibWFyaW5lJyxcbiAgc2l6ZTogMyxcbiAgZnVsbEltYWdlOiBzdWJtYXJpbmUsXG4gIGltYWdlczogW3N1Ym1hcmluZTEsIHN1Ym1hcmluZTIsIHN1Ym1hcmluZTNdLFxufTtcblxuY29uc3QgZGVzdHJveWVyU2hpcCA9IHtcbiAgbmFtZTogJ0Rlc3Ryb3llcicsXG4gIHNpemU6IDIsXG4gIGZ1bGxJbWFnZTogZGVzdHJveWVyLFxuICBpbWFnZXM6IFtkZXN0cm95ZXIxLCBkZXN0cm95ZXIyXSxcbn07XG5cbmNvbnN0IHBhdHJvbGxlclNoaXAgPSB7XG4gIG5hbWU6ICdQYXRyb2xsZXInLFxuICBzaXplOiAyLFxuICBmdWxsSW1hZ2U6IHBhdHJvbGxlcixcbiAgaW1hZ2VzOiBbcGF0cm9sbGVyMSwgcGF0cm9sbGVyMl0sXG59O1xuXG5leHBvcnQgY29uc3Qgc2hpcHMgPSBbXG4gIGNhcnJpZXJTaGlwLFxuICBiYXR0bGVzaGlwU2hpcCxcbiAgY3J1aXNlclNoaXAsXG4gIHN1Ym1hcmluZVNoaXAsXG4gIGRlc3Ryb3llclNoaXAsXG4gIHBhdHJvbGxlclNoaXAsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsU2hpcEltYWdlcyhzaGlwTmFtZSkge1xuICBjb25zdCBzaGlwID0gc2hpcHMuZmluZCgoc2hpcCkgPT4gc2hpcC5uYW1lID09PSBzaGlwTmFtZSk7XG4gIHJldHVybiBzaGlwLmltYWdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cGxvc2lvbkltYWdlKCkge1xuICByZXR1cm4gZXhwbG9zaW9uO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gIGRyYXdHcmlkLFxuICBzaG93QWN0aW9uLFxuICB1cGRhdGVQbGFjaW5nU2hpcCxcbiAgY3JlYXRlQWxlcnQsXG4gIHN0YXJ0UGxhY2luZyxcbiAgcG9wdWxhdGVTaGlwSW1hZ2VzLFxufSBmcm9tICcuL2xpYi9kb21NYW5hZ2VyLmpzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vbGliL2dhbWUuanMnO1xuXG5jb25zdCBnYW1lSW5zdGFuY2UgPSBnYW1lKCk7XG5cbi8vIGRyYXcgdGhlIGJvYXJkc1xuZHJhd0dyaWQoKTtcbmRyYXdHcmlkKCdlbmVteScpO1xuXG4vLyBTaG93IGFjdGlvbiB0byB0aGUgcGxheWVyXG5zaG93QWN0aW9uKCdwbGF5ZXInLCAnUGxhY2UgeW91ciBzaGlwcycpO1xuc2hvd0FjdGlvbignZW5lbXknLCAnV2FpdGluZyBGb3IgU2hpcHMnLCAnYWxlcnQnKTtcblxudXBkYXRlUGxhY2luZ1NoaXAoJ0NhcnJpZXInKTtcblxuLy8gU2hvdyB0aGUgYWxlcnRcbmNyZWF0ZUFsZXJ0KCdzdWNjZXNzJywgJ0dhbWUgc3RhcnRlZCwgcGxhY2UgeW91ciBzaGlwcyAoUHJlc3MgUiB0byByb3RhdGUpJyk7XG5cbi8vIHBvcHVsYXRlIHRoZSBzaGlwc1xucG9wdWxhdGVTaGlwSW1hZ2VzKCk7XG5wb3B1bGF0ZVNoaXBJbWFnZXMoJ2VuZW15Jyk7XG5cbnN0YXJ0UGxhY2luZyhnYW1lSW5zdGFuY2UsICdob3Jpem9udGFsJywgJ0NhcnJpZXInKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=