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

(0,_lib_domManager_js__WEBPACK_IMPORTED_MODULE_1__.startPlacing)(gameInstance, 'horizontal', 'Carrier');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVqQyxxQkFBcUIsd0RBQUk7O0FBRXpCO0FBQ0EsNERBQVE7QUFDUiw0REFBUTs7QUFFUjtBQUNBLDhEQUFVO0FBQ1YsOERBQVU7O0FBRVYscUVBQWlCOztBQUVqQjtBQUNBLCtEQUFXOztBQUVYLGdFQUFZLHdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vc3JjL2xpYi9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvLi9zcmMvbGliL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkLy4vc3JjL2xpYi9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL3NyYy9saWIvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvLi9zcmMvbGliL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC8uL3NyYy9saWIvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzLWpzLXRkZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMtanMtdGRkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy1qcy10ZGQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL29jZWFuLWJpZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDYzJSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5oYXMtYmFja2dyb3VuZC1kYW5nZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjMpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMjU1LCAwLCAwLjYzKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSwgMC41KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlzLWZ1bGxoZWlnaHQge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi50aXR0bGUtdGFnID4gc3BhbiB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgd2lkdGg6IDEzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFzLW9jZWFuIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix3Q0FBd0M7RUFDeEMsb0NBQW9DO0VBQ3BDLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseURBQTZDO0FBQy9DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNjMlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhhcy1iYWNrZ3JvdW5kLWRhbmdlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42MykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuaGFzLWJhY2tncm91bmQtc3VjY2VzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAyNTUsIDAsIDAuNjMpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxNSwgMjE1LCAwLjUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXMtZnVsbGhlaWdodCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdHRsZS10YWcgPiBzcGFuIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICB3aWR0aDogMTM1cHg7XFxyXFxufVxcclxcblxcclxcbi5oYXMtb2NlYW4ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL29jZWFuLWJpZy5qcGcpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gR2V0IHRoZSBBY3R1YWwgRE9NIGVsZW1lbnRzXG5jb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxJyk7XG5jb25zdCBib2FyZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMicpO1xuY29uc3QgcGxheWVyQWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckFjdGlvbicpO1xuY29uc3QgZW5lbXlBY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5lbXlBY3Rpb24nKTtcbmNvbnN0IHBsYWNpbmdTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNpbmdTaGlwJyk7XG5jb25zdCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydCcpO1xuY29uc3QgZW5lbXlTdGF0dXNUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJykucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuXG4vLyBHZXQgdGhlIERPTSBlbGVtZW50cyBmcm9tIHRoZSBwbGF5ZXIgY2FyZHNcbmNvbnN0IHBsYXllcjFDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjFDYXJkJyk7XG4vLyBDYXJyaWVyXG5jb25zdCBwbGF5ZXIxQ2FycmllciA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNjYXJyaWVyJyk7XG5jb25zdCBwbGF5ZXIxQ2FycmllclF1YW50aXR5ID0gcGxheWVyMUNhcnJpZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBCYXR0bGVzaGlwXG5jb25zdCBwbGF5ZXIxQmF0dGxlc2hpcCA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJyk7XG5jb25zdCBwbGF5ZXIxQmF0dGxlc2hpcFF1YW50aXR5ID0gcGxheWVyMUJhdHRsZXNoaXAucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBTdWJtYXJpbmVcbmNvbnN0IHBsYXllcjFTdWJtYXJpbmUgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG5jb25zdCBwbGF5ZXIxU3VibWFyaW5lUXVhbnRpdHkgPSBwbGF5ZXIxU3VibWFyaW5lLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gY3J1aXNlclxuY29uc3QgcGxheWVyMUNydWlzZXIgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjY3J1aXNlcicpO1xuY29uc3QgcGxheWVyMUNydWlzZXJRdWFudGl0eSA9IHBsYXllcjFDcnVpc2VyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gRGVzdHJveWVyXG5jb25zdCBwbGF5ZXIxRGVzdHJveWVyID0gcGxheWVyMUNhcmQucXVlcnlTZWxlY3RvcignI2Rlc3Ryb3llcicpO1xuY29uc3QgcGxheWVyMURlc3Ryb3llclF1YW50aXR5ID0gcGxheWVyMURlc3Ryb3llci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIHBhdHJvbCBzaGlwXG5jb25zdCBwbGF5ZXIxUGF0cm9sU2hpcCA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNwYXRyb2xTaGlwJyk7XG5jb25zdCBwbGF5ZXIxUGF0cm9sU2hpcFF1YW50aXR5ID0gcGxheWVyMVBhdHJvbFNoaXAucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG5cbi8vIEdldCB0aGUgRE9NIGVsZW1lbnRzIGZyb20gdGhlIGNvbXB1dGVyIGNhcmRzXG5jb25zdCBwbGF5ZXIyQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyQ2FyZCcpO1xuLy8gQ2FycmllclxuY29uc3QgcGxheWVyMkNhcnJpZXIgPSBwbGF5ZXIyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjY2FycmllcicpO1xuY29uc3QgcGxheWVyMkNhcnJpZXJRdWFudGl0eSA9IHBsYXllcjJDYXJyaWVyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gQmF0dGxlc2hpcFxuY29uc3QgcGxheWVyMkJhdHRsZXNoaXAgPSBwbGF5ZXIyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjYmF0dGxlc2hpcCcpO1xuY29uc3QgcGxheWVyMkJhdHRsZXNoaXBRdWFudGl0eSA9IHBsYXllcjJCYXR0bGVzaGlwLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gU3VibWFyaW5lXG5jb25zdCBwbGF5ZXIyU3VibWFyaW5lID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI3N1Ym1hcmluZScpO1xuY29uc3QgcGxheWVyMlN1Ym1hcmluZVF1YW50aXR5ID0gcGxheWVyMlN1Ym1hcmluZS5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIGNydWlzZXJcbmNvbnN0IHBsYXllcjJDcnVpc2VyID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI2NydWlzZXInKTtcbmNvbnN0IHBsYXllcjJDcnVpc2VyUXVhbnRpdHkgPSBwbGF5ZXIyQ3J1aXNlci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIERlc3Ryb3llclxuY29uc3QgcGxheWVyMkRlc3Ryb3llciA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNkZXN0cm95ZXInKTtcbmNvbnN0IHBsYXllcjJEZXN0cm95ZXJRdWFudGl0eSA9IHBsYXllcjJEZXN0cm95ZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBwYXRyb2wgc2hpcFxuY29uc3QgcGxheWVyMlBhdHJvbFNoaXAgPSBwbGF5ZXIyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjcGF0cm9sU2hpcCcpO1xuY29uc3QgcGxheWVyMlBhdHJvbFNoaXBRdWFudGl0eSA9IHBsYXllcjJQYXRyb2xTaGlwLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb21FbGVtZW50cygpIHtcbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBib2FyZDIsXG4gICAgcGxheWVyQWN0aW9uLFxuICAgIGVuZW15QWN0aW9uLFxuICAgIHBsYWNpbmdTaGlwLFxuICAgIGFsZXJ0LFxuICAgIGVuZW15U3RhdHVzVGFnLFxuICAgIHBsYXllcjFDYXJkLFxuICAgIHBsYXllcjFDYXJyaWVyLFxuICAgIHBsYXllcjFDYXJyaWVyUXVhbnRpdHksXG4gICAgcGxheWVyMUJhdHRsZXNoaXAsXG4gICAgcGxheWVyMUJhdHRsZXNoaXBRdWFudGl0eSxcbiAgICBwbGF5ZXIxU3VibWFyaW5lLFxuICAgIHBsYXllcjFTdWJtYXJpbmVRdWFudGl0eSxcbiAgICBwbGF5ZXIxQ3J1aXNlcixcbiAgICBwbGF5ZXIxQ3J1aXNlclF1YW50aXR5LFxuICAgIHBsYXllcjFEZXN0cm95ZXIsXG4gICAgcGxheWVyMURlc3Ryb3llclF1YW50aXR5LFxuICAgIHBsYXllcjFQYXRyb2xTaGlwLFxuICAgIHBsYXllcjFQYXRyb2xTaGlwUXVhbnRpdHksXG4gICAgcGxheWVyMkNhcmQsXG4gICAgcGxheWVyMkNhcnJpZXIsXG4gICAgcGxheWVyMkNhcnJpZXJRdWFudGl0eSxcbiAgICBwbGF5ZXIyQmF0dGxlc2hpcCxcbiAgICBwbGF5ZXIyQmF0dGxlc2hpcFF1YW50aXR5LFxuICAgIHBsYXllcjJTdWJtYXJpbmUsXG4gICAgcGxheWVyMlN1Ym1hcmluZVF1YW50aXR5LFxuICAgIHBsYXllcjJDcnVpc2VyLFxuICAgIHBsYXllcjJDcnVpc2VyUXVhbnRpdHksXG4gICAgcGxheWVyMkRlc3Ryb3llcixcbiAgICBwbGF5ZXIyRGVzdHJveWVyUXVhbnRpdHksXG4gICAgcGxheWVyMlBhdHJvbFNoaXAsXG4gICAgcGxheWVyMlBhdHJvbFNoaXBRdWFudGl0eSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IHNoaXBzLCBnZXRBbGxTaGlwSW1hZ2VzLCBnZXRFeHBsb3Npb25JbWFnZSB9IGZyb20gJy4vc2hpcHMuanMnO1xuaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMuanMnO1xuaW1wb3J0IHsgYm9hcmRWYWxpZGF0aW9uIH0gZnJvbSAnLi9nYW1lYm9hcmRGYWN0b3J5LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KHR5cGUsIG1lc3NhZ2UpIHtcbiAgZG9tRWxlbWVudHMoKS5hbGVydC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbiBpcy0ke3R5cGV9XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj48L2J1dHRvbj5cbiAgICAgICAgPHAgY2xhc3M9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPiR7bWVzc2FnZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgY29uc3QgYnV0dG9uID0gZG9tRWxlbWVudHMoKS5hbGVydC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt9KTtcbiAgICBkb21FbGVtZW50cygpLmFsZXJ0LmlubmVySFRNTCA9ICcnO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdHcmlkKHR5cGUgPSAncGxheWVyJykge1xuICBjb25zdCBib2FyZCA9IHR5cGUgPT09ICdlbmVteScgPyBkb21FbGVtZW50cygpLmJvYXJkMiA6IGRvbUVsZW1lbnRzKCkuYm9hcmQ7XG4gIGJvYXJkLmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIC8vIGFzc2lnbiB0aGUgaWQgdG8gZWFjaCBjZWxsXG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1AxJyk7XG4gICAgLy8gYXNzaWduIHRoZSBjb29yZGluYXRlcyB0byBlYWNoIGNlbGxcbiAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgaSAlIDEwKTtcbiAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgTWF0aC5mbG9vcihpIC8gMTApKTtcblxuICAgIC8vIGRlbGV0ZSBhbnkgZXZlbnQgbGlzdGVuZXJcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHt9KTtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7fSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlR3JpZCh0eXBlID0gJ3BsYXllcicsIGJvYXJkKSB7XG4gIGNvbnN0IGRvbUJvYXJkID0gdHlwZSA9PT0gJ2VuZW15JyA/IGRvbUVsZW1lbnRzKCkuYm9hcmQyIDogZG9tRWxlbWVudHMoKS5ib2FyZDtcbiAgY29uc3QgeyBzaGlwcyB9ID0gYm9hcmQ7XG4gIGNvbnN0IHsgbWlzc2VkQXR0YWNrcyB9ID0gYm9hcmQ7XG5cbiAgaWYgKHR5cGUgPT09ICdwbGF5ZXInKSB7XG4gICAgLy8gc2hvdyB0aGUgc2hpcHNcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvbUJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3NoaXAuY29vcmRpbmF0ZXNbaV1bMF19XCJdW2RhdGEteT1cIiR7c2hpcC5jb29yZGluYXRlc1tpXVsxXX1cIl1gKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IGdldEFsbFNoaXBJbWFnZXMoc2hpcC5uYW1lKTtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VzW2ldfSlgO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gdXBkYXRlIHRoZSBtaXNzZWQgYXR0YWNrc1xuICBtaXNzZWRBdHRhY2tzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvbUJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2Nvb3JkWzBdfVwiXVtkYXRhLXk9XCIke2Nvb3JkWzFdfVwiXWApO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtZGFuZ2VyJyk7XG4gIH0pO1xuXG4gIC8vIHVwZGF0ZSB0aGUgaGl0IGF0dGFja3NcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAuaGl0cy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgY29uc3QgY2VsbCA9IGRvbUJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2Nvb3JkWzBdfVwiXVtkYXRhLXk9XCIke2Nvb3JkWzFdfVwiXWApO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJyk7XG4gICAgICBpZiAodHlwZSA9PT0gJ2VuZW15Jykge1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtnZXRFeHBsb3Npb25JbWFnZSgpfSlgO1xuICAgICAgfVxuICAgICAgLy8gaWYgc2hpcCBpcyBzdW5rIHRoZW4gYWRkIHRoZSBmdWxsIGltYWdlXG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzLWRhcmsnKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gZ2V0QWxsU2hpcEltYWdlcyhzaGlwLm5hbWUpO1xuICAgICAgICBjb25zdCBhY3R1YWxTaGlwUGFydCA9IHNoaXAuY29vcmRpbmF0ZXNcbiAgICAgICAgICAuZmluZEluZGV4KChzaGlwQ29vcmQpID0+IHNoaXBDb29yZFswXSA9PT0gY29vcmRbMF0gJiYgc2hpcENvb3JkWzFdID09PSBjb29yZFsxXSk7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlc1thY3R1YWxTaGlwUGFydF19KWA7XG4gICAgICAgIC8vIHJvdGF0ZSB0byB0aGUgY29ycmVjdCBvcmllbnRhdGlvblxuICAgICAgICBjb25zdCBhY3R1YWxPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoc2hpcC5jb29yZGluYXRlc1swXVswXSA9PT0gc2hpcC5jb29yZGluYXRlc1sxXVswXSkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChhY3R1YWxPcmllbnRhdGlvbigpID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhcmQoYm9hcmQsIHR5cGUgPSAnUGxheWVyJykge1xuICBjb25zdCBjYXJyaWVyID0gYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdDYXJyaWVyJyk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ0JhdHRsZXNoaXAnKTtcbiAgY29uc3QgY3J1aXNlciA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnQ3J1aXNlcicpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ1N1Ym1hcmluZScpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ0Rlc3Ryb3llcicpO1xuICBjb25zdCBwYXRyb2xsZXIgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ1BhdHJvbGxlcicpO1xuXG4gIGxldCBzaGlwcyA9IFtdO1xuICBpZiAodHlwZSA9PT0gJ1BsYXllcicpIHtcbiAgICBzaGlwcyA9IFtcbiAgICAgIFtjYXJyaWVyLCBkb21FbGVtZW50cygpLnBsYXllcjFDYXJyaWVyUXVhbnRpdHldLFxuICAgICAgW2JhdHRsZXNoaXAsIGRvbUVsZW1lbnRzKCkucGxheWVyMUJhdHRsZXNoaXBRdWFudGl0eV0sXG4gICAgICBbY3J1aXNlciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIxQ3J1aXNlclF1YW50aXR5XSxcbiAgICAgIFtzdWJtYXJpbmUsIGRvbUVsZW1lbnRzKCkucGxheWVyMVN1Ym1hcmluZVF1YW50aXR5XSxcbiAgICAgIFtkZXN0cm95ZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMURlc3Ryb3llclF1YW50aXR5XSxcbiAgICAgIFtwYXRyb2xsZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMVBhdHJvbFNoaXBRdWFudGl0eV0sXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICBzaGlwcyA9IFtcbiAgICAgIFtjYXJyaWVyLCBkb21FbGVtZW50cygpLnBsYXllcjJDYXJyaWVyUXVhbnRpdHldLFxuICAgICAgW2JhdHRsZXNoaXAsIGRvbUVsZW1lbnRzKCkucGxheWVyMkJhdHRsZXNoaXBRdWFudGl0eV0sXG4gICAgICBbY3J1aXNlciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyQ3J1aXNlclF1YW50aXR5XSxcbiAgICAgIFtzdWJtYXJpbmUsIGRvbUVsZW1lbnRzKCkucGxheWVyMlN1Ym1hcmluZVF1YW50aXR5XSxcbiAgICAgIFtkZXN0cm95ZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMkRlc3Ryb3llclF1YW50aXR5XSxcbiAgICAgIFtwYXRyb2xsZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMlBhdHJvbFNoaXBRdWFudGl0eV0sXG4gICAgXTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHNoaXBzW2ldWzBdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2hpcHNbaV1bMV0uaW5uZXJIVE1MID0gJzAnO1xuICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXRleHQtc3VjY2VzcycpO1xuICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LmFkZCgnaGFzLXRleHQtZGFuZ2VyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1bmtlZCA9IHNoaXBzW2ldWzBdWzBdLmlzU3VuaygpO1xuICAgICAgaWYgKHN1bmtlZCkge1xuICAgICAgICBzaGlwc1tpXVsxXS5pbm5lckhUTUwgPSAnMCc7XG4gICAgICAgIHNoaXBzW2ldWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy10ZXh0LXN1Y2Nlc3MnKTtcbiAgICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LmFkZCgnaGFzLXRleHQtZGFuZ2VyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwc1tpXVsxXS5pbm5lckhUTUwgPSAnMSc7XG4gICAgICAgIHNoaXBzW2ldWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy10ZXh0LWRhbmdlcicpO1xuICAgICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QuYWRkKCdoYXMtdGV4dC1zdWNjZXNzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQbGFjaW5nU2hpcChzaGlwTmFtZSkge1xuICBpZiAoc2hpcE5hbWUgPT09ICdub25lJykge1xuICAgIGRvbUVsZW1lbnRzKCkucGxhY2luZ1NoaXAuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHNoaXAgPSBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09IHNoaXBOYW1lKTtcbiAgZG9tRWxlbWVudHMoKS5wbGFjaW5nU2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgZG9tRWxlbWVudHMoKS5wbGFjaW5nU2hpcC5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBzcmM9XCIke3NoaXAuZnVsbEltYWdlfVwiIGFsdD1cIiR7c2hpcE5hbWV9XCIgd2lkdGg9XCIke3NoaXAuc2l6ZSAqIDIwfVwiPlxuICBgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FjdGlvbih0eXBlLCBtZXNzYWdlLCBjb2xvciA9ICdncmVlbicpIHtcbiAgaWYgKHR5cGUgPT09ICdwbGF5ZXInKSB7XG4gICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgICBpZiAoY29sb3IgPT09ICdncmVlbicpIHtcbiAgICAgIGRvbUVsZW1lbnRzKCkucGxheWVyQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgIGRvbUVsZW1lbnRzKCkucGxheWVyQWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXdhcm5pbmcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpO1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VjY2VzcycpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnZW5lbXknKSB7XG4gICAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gICAgaWYgKGNvbG9yID09PSAnZ3JlZW4nKSB7XG4gICAgICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtd2FybmluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLXdhcm5pbmcnKTtcbiAgICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VjY2VzcycpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkTW92ZShib2FyZCwgY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgsIHNoaXBOYW1lKSB7XG4gIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuICBjb25zdCBjb29yZHMgPSBbeCwgeV07XG4gIHRyeSB7XG4gICAgYm9hcmRWYWxpZGF0aW9uKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBjb29yZHMsIG9yaWVudGF0aW9uLCBib2FyZC5zaGlwcyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHNldFNoaXBJbWFnZShib2FyZCwgY2VsbCwgc2hpcEltYWdlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgsIHNoaXBOYW1lKSB7XG4gIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuICBjb25zdCB2YWxpZE1vdmUgPSBjaGVja1ZhbGlkTW92ZShib2FyZCwgY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgsIHNoaXBOYW1lKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjZWxsVG9DaGFuZ2UgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNQMVtkYXRhLXg9XCIke3ggKyBpfVwiXVtkYXRhLXk9XCIke3l9XCJdYClcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1AxW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5ICsgaX1cIl1gKTtcbiAgICBpZiAoY2VsbFRvQ2hhbmdlKSB7XG4gICAgICBpZiAodmFsaWRNb3ZlKSB7XG4gICAgICAgIGNlbGxUb0NoYW5nZS5zdHlsZS50cmFuc2Zvcm0gPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIGNlbGxUb0NoYW5nZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c2hpcEltYWdlc1tpXX0pYDtcbiAgICAgICAgY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGxUb0NoYW5nZS5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2hpcEltYWdlKGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoKSB7XG4gIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNlbGxUb0NoYW5nZSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1AxW2RhdGEteD1cIiR7eCArIGl9XCJdW2RhdGEteT1cIiR7eX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjUDFbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3kgKyBpfVwiXWApO1xuICAgIGlmIChjZWxsVG9DaGFuZ2UpIHtcbiAgICAgIGlmICghY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKSB7XG4gICAgICAgIGNlbGxUb0NoYW5nZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgIH1cbiAgICAgIGNlbGxUb0NoYW5nZS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJyk7XG4gICAgICBjZWxsVG9DaGFuZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWJhY2tncm91bmQtZGFuZ2VyJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBsYWNlU2hpcChjZWxsLCBvcmllbnRhdGlvbiwgc2hpcE5hbWUsIHNoaXBMZW5ndGgsIGJvYXJkKSB7XG4gIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuICBjb25zdCB2YWxpZE1vdmUgPSBjaGVja1ZhbGlkTW92ZShib2FyZCwgY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgsIHNoaXBOYW1lKTtcbiAgaWYgKHZhbGlkTW92ZSkge1xuICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwTmFtZSwgc2hpcExlbmd0aCwgW3gsIHldLCBvcmllbnRhdGlvbik7XG4gICAgdXBkYXRlQ2FyZChib2FyZCk7XG4gICAgdXBkYXRlR3JpZCgncGxheWVyJywgYm9hcmQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc3RvcFBsYWNpbmcoKSB7XG4gIGNvbnN0IGNlbGxzID0gZG9tRWxlbWVudHMoKS5ib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuXG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgfVxuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWJhY2tncm91bmQtc3VjY2VzcycpO1xuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWJhY2tncm91bmQtZGFuZ2VyJyk7XG4gICAgY2VsbC5yZXBsYWNlV2l0aChjZWxsLmNsb25lTm9kZSh0cnVlKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXNldEJ1dHRvbigpIHtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2lzLWRhbmdlcicsICdpcy1sYXJnZScsICdpcy1mdWxsd2lkdGgnKTtcbiAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gJ1Jlc2V0IEdhbWUnO1xuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuICBkb21FbGVtZW50cygpLmFsZXJ0LmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpIHtcbiAgY3JlYXRlQWxlcnQoJ3N1Y2Nlc3MnLCBgJHt3aW5uZXJ9YCk7XG4gIGRvbUVsZW1lbnRzKCkuYm9hcmQuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gIGRvbUVsZW1lbnRzKCkuYm9hcmQyLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICBkb21FbGVtZW50cygpLnBsYWNpbmdTaGlwLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgY3JlYXRlUmVzZXRCdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRBdHRhY2tpbmcoZ2FtZUluc3RhbmNlKSB7XG4gIGNvbnN0IGNlbGxzID0gZG9tRWxlbWVudHMoKS5ib2FyZDIucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmICghY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpICYmICFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IHkgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15JyksIDEwKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBhdHRhY2sgPSBnYW1lSW5zdGFuY2UucGxheWVyQXR0YWNrKHgsIHkpO1xuICAgICAgICAgIGlmIChhdHRhY2sgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgY3JlYXRlQWxlcnQoJ3N1Y2Nlc3MnLCAnWW91IGhpdCBhIHNoaXAhLCBrZWVwIGdvaW5nIScpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrID09PSAnZG91YmxlTWlzcycpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgY3JlYXRlQWxlcnQoJ25vbmUnLCAnWW91IG1pc3NlZCEgYWxzbyB0aGUgY29tcHV0ZXIgbWlzc2VkIScpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrID09PSAnbWlzc0FuZEhpdCcpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgY3JlYXRlQWxlcnQoJ2RhbmdlcicsICdZb3UgbWlzc2VkISB0aGUgY29tcHV0ZXIgaGl0IGEgc2hpcCEnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXBkYXRlR3JpZCgnZW5lbXknLCBnYW1lSW5zdGFuY2UuY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgICAgdXBkYXRlR3JpZCgncGxheWVyJywgZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkKTtcbiAgICAgICAgICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkLCAnZW5lbXknKTtcbiAgICAgICAgICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5wbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgaWYgKGdhbWVJbnN0YW5jZS5nYW1lRW5kKCkpIHtcbiAgICAgICAgICAgIGVuZEdhbWUoZ2FtZUluc3RhbmNlLmdhbWVFbmQoKSk7XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UucmVzZXRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY3JlYXRlQWxlcnQoJ3dhcm5pbmcnLCBlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge30pO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHt9KTtcbiAgfSk7XG59XG5cbmxldCBwbGFjaW5nID0gdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UGxhY2luZyhnYW1lSW5zdGFuY2UsIG9yaWVudGF0aW9uLCBzaGlwTmFtZSkge1xuICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkLCAnZW5lbXknKTtcblxuICBjb25zdCBjZWxscyA9IGRvbUVsZW1lbnRzKCkuYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgY29uc3Qgc2hpcEltYWdlcyA9IGdldEFsbFNoaXBJbWFnZXMoc2hpcE5hbWUpO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcEltYWdlcy5sZW5ndGg7XG5cbiAgY29uc3Qgc2hpcFR5cGVzID0gWydDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnQ3J1aXNlcicsICdTdWJtYXJpbmUnLCAnRGVzdHJveWVyJywgJ1BhdHJvbGxlciddO1xuICBjb25zdCBuZXh0U2hpcCA9IHNoaXBUeXBlcy5pbmRleE9mKHNoaXBOYW1lKSArIDE7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAncicgJiYgcGxhY2luZykge1xuICAgICAgc3RvcFBsYWNpbmcoKTtcbiAgICAgIHN0YXJ0UGxhY2luZyhnYW1lSW5zdGFuY2UsIG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLCBzaGlwTmFtZSk7XG4gICAgfVxuICB9KTtcblxuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gc2V0U2hpcEltYWdlKGdhbWVJbnN0YW5jZS5wbGF5ZXJCb2FyZCwgY2VsbCwgc2hpcEltYWdlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgsIHNoaXBOYW1lKSk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gcmVtb3ZlU2hpcEltYWdlKGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoKSk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlZCA9IHRyeVBsYWNlU2hpcChjZWxsLCBvcmllbnRhdGlvbiwgc2hpcE5hbWUsIHNoaXBMZW5ndGgsXG4gICAgICAgIGdhbWVJbnN0YW5jZS5wbGF5ZXJCb2FyZCk7XG4gICAgICBpZiAocGxhY2VkKSB7XG4gICAgICAgIHN0b3BQbGFjaW5nKCk7XG4gICAgICAgIGlmIChuZXh0U2hpcCA8IHNoaXBUeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICB1cGRhdGVQbGFjaW5nU2hpcChzaGlwVHlwZXNbbmV4dFNoaXBdKTtcbiAgICAgICAgICBzdGFydFBsYWNpbmcoZ2FtZUluc3RhbmNlLCAnaG9yaXpvbnRhbCcsIHNoaXBUeXBlc1tuZXh0U2hpcF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgICB1cGRhdGVQbGFjaW5nU2hpcCgnbm9uZScpO1xuICAgICAgICAgIGNyZWF0ZUFsZXJ0KCdzdWNjZXNzJywgJ0FsbCBzaGlwcyBwbGFjZWQsIHBsYWNpbmcgY29tcHV0ZXIgc2hpcHMnKTtcbiAgICAgICAgICBzaG93QWN0aW9uKCdwbGF5ZXInLCAnV2FpdGluZyBmb3IgY29tcHV0ZXInLCAnYWxlcnQnKTtcbiAgICAgICAgICBzaG93QWN0aW9uKCdlbmVteScsICdQbGFjaW5nIHNoaXBzJyk7XG4gICAgICAgICAgLy8gd2FpdCAzIHNlY29uZCBiZWZvcmUgcGxhY2luZyBjb21wdXRlciBzaGlwcyAoc2ltdWxhdGVzIHRoaW5raW5nKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZUluc3RhbmNlLnJhbmRvbVBsYWNlU2hpcHMoZ2FtZUluc3RhbmNlLmNvbXB1dGVyQm9hcmQpO1xuICAgICAgICAgICAgdXBkYXRlQ2FyZChnYW1lSW5zdGFuY2UuY29tcHV0ZXJCb2FyZCwgJ2VuZW15Jyk7XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2Uuc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnc3VjY2VzcycsICdBbGwgc2hpcHMgcGxhY2VkLCBBdHRhY2shJyk7XG4gICAgICAgICAgICBzaG93QWN0aW9uKCdwbGF5ZXInLCAnQXR0YWNrIHRoZSBlbmVteSEnKTtcbiAgICAgICAgICAgIHNob3dBY3Rpb24oJ2VuZW15JywgJ1dhaXRpbmcgZm9yIGF0dGFjaycsICdhbGVydCcpO1xuICAgICAgICAgICAgc3RhcnRBdHRhY2tpbmcoZ2FtZUluc3RhbmNlKTtcbiAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnkuanMnO1xuaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gJy4vc2hpcEZhY3RvcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSB7XG4gICAgLy8gcHJvcGVydGllc1xuICAgIGFjdHVhbFBsYXllcjogMSxcbiAgICBnYW1lU3RhcnRlZDogZmFsc2UsXG4gICAgcGxheWVyQm9hcmQ6IGdhbWVib2FyZEZhY3RvcnkoKSxcbiAgICBjb21wdXRlckJvYXJkOiBnYW1lYm9hcmRGYWN0b3J5KCksXG4gICAgLy8gbWV0aG9kc1xuICAgIGNoYW5nZVBsYXllcigpIHtcbiAgICAgIHRoaXMuYWN0dWFsUGxheWVyID0gdGhpcy5hY3R1YWxQbGF5ZXIgPT09IDEgPyAyIDogMTtcbiAgICB9LFxuICAgIHJhbmRvbVBsYWNlU2hpcHMoYm9hcmQpIHtcbiAgICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgICB7IG5hbWU6ICdDYXJyaWVyJywgdmFsdWU6IHNoaXBGYWN0b3J5KDUpIH0sXG4gICAgICAgIHsgbmFtZTogJ0JhdHRsZXNoaXAnLCB2YWx1ZTogc2hpcEZhY3RvcnkoNCkgfSxcbiAgICAgICAgeyBuYW1lOiAnQ3J1aXNlcicsIHZhbHVlOiBzaGlwRmFjdG9yeSgzKSB9LFxuICAgICAgICB7IG5hbWU6ICdTdWJtYXJpbmUnLCB2YWx1ZTogc2hpcEZhY3RvcnkoMykgfSxcbiAgICAgICAgeyBuYW1lOiAnRGVzdHJveWVyJywgdmFsdWU6IHNoaXBGYWN0b3J5KDIpIH0sXG4gICAgICAgIHsgbmFtZTogJ1BhdHJvbGxlcicsIHZhbHVlOiBzaGlwRmFjdG9yeSgyKSB9LFxuICAgICAgXTtcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9ICcnO1xuICAgICAgICBsZXQgdmFsaWRTaGlwID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghdmFsaWRTaGlwKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgXTtcbiAgICAgICAgICBvcmllbnRhdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcC5uYW1lLCBzaGlwLnZhbHVlLmxlbmd0aCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIHZhbGlkU2hpcCA9IHRydWU7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhbGlkU2hpcCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXJCb2FyZC5zaGlwcy5sZW5ndGggPj0gNiAmJiB0aGlzLmNvbXB1dGVyQm9hcmQuc2hpcHMubGVuZ3RoID49IDYpIHtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHBsYWNlIGFsbCB0aGUgc2hpcHMnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrVmFsaWRBdHRhY2soeCwgeSkge1xuICAgICAgY29uc3QgY29vcmRzID0gW3gsIHldO1xuICAgICAgLy8gY2hlY2sgaWYgdGhlIGdhbWUgaXMgc3RhcnRlZFxuICAgICAgaWYgKCF0aGlzLmdhbWVTdGFydGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3RhcnQgdGhlIGdhbWUnKTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBjb29yZGluYXRlcyBhcmUgdmFsaWRcbiAgICAgIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb3JkaW5hdGVzIGFyZSBub3QgdmFsaWQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgdGhlIGNvb3JkaW5hdGVzIGFyZSBhbHJlYWR5IGhpdFxuICAgICAgY29uc3QgbWlzc2VzID0gdGhpcy5jb21wdXRlckJvYXJkLm1pc3NlZEF0dGFja3M7XG4gICAgICBjb25zdCBtaXNzZWQgPSBtaXNzZXMuc29tZSgobWlzcykgPT4gbWlzc1swXSA9PT0gY29vcmRzWzBdICYmIG1pc3NbMV0gPT09IGNvb3Jkc1sxXSk7XG5cbiAgICAgIGNvbnN0IGhpdHMgPSB0aGlzLmNvbXB1dGVyQm9hcmQuc2hpcHMubWFwKChzaGlwKSA9PiBzaGlwLmhpdHMpO1xuICAgICAgY29uc3QgaGl0dGVkID0gaGl0cy5zb21lKChoaXQpID0+IGhpdC5zb21lKChoaXRDb29yZHMpID0+IGhpdENvb3Jkc1swXSA9PT0gY29vcmRzWzBdXG4gICAgICAgICYmIGhpdENvb3Jkc1sxXSA9PT0gY29vcmRzWzFdKSk7XG4gICAgICBpZiAobWlzc2VkIHx8IGhpdHRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBhbHJlYWR5IGF0dGFja2VkIHRoaXMgY29vcmRpbmF0ZXMnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcGxheWVyQXR0YWNrKHgsIHkpIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrVmFsaWRBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGF0dGFjayBoaXQgYSBzaGlwXG4gICAgICAgIGlmICh0aGlzLmNvbXB1dGVyQm9hcmQuc2hpcHMuc29tZSgoc2hpcCkgPT4gc2hpcC5oaXRzLnNvbWUoKGhpdCkgPT4gaGl0WzBdID09PSB4XG4gICAgICAgICAgJiYgaGl0WzFdID09PSB5KSkpIHtcbiAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoKTtcbiAgICAgICAgY29uc3QgY3B1QXR0YWNrID0gdGhpcy5jb21wdXRlckF0dGFjaygpO1xuICAgICAgICB0aGlzLmNoYW5nZVBsYXllcigpO1xuICAgICAgICBpZiAoY3B1QXR0YWNrID09PSAnbWlzcycpIHtcbiAgICAgICAgICByZXR1cm4gJ2RvdWJsZU1pc3MnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJ21pc3NBbmRIaXQnO1xuICAgIH0sXG4gICAgY29tcHV0ZXJBdHRhY2soaGl0cyA9IDApIHtcbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBnYW1lIGlzIHN0YXJ0ZWRcbiAgICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHN0YXJ0IHRoZSBnYW1lJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICBdO1xuICAgICAgLy8gY2hlY2sgaWYgdGhlIGNvb3JkaW5hdGVzIGFyZSBhbHJlYWR5IGhpdCAodXNpbmcgLm1pc3NlZEF0dGFja3MpXG4gICAgICBpZiAodGhpcy5wbGF5ZXJCb2FyZC5taXNzZWRBdHRhY2tzXG4gICAgICAgIC5zb21lKChtaXNzZWRBdHRhY2spID0+IG1pc3NlZEF0dGFja1swXSA9PT0gY29vcmRpbmF0ZXNbMF1cbiAgICAgICAgJiYgbWlzc2VkQXR0YWNrWzFdID09PSBjb29yZGluYXRlc1sxXSkpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlckF0dGFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGF0dGFjayBoaXQgYSBzaGlwXG4gICAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLnNoaXBzLnNvbWUoKHNoaXApID0+IHNoaXAuaGl0cy5zb21lKChoaXQpID0+IGhpdFswXSA9PT0gY29vcmRpbmF0ZXNbMF1cbiAgICAgICAgICAmJiBoaXRbMV0gPT09IGNvb3JkaW5hdGVzWzFdKSkpIHtcbiAgICAgICAgICB0aGlzLmNvbXB1dGVyQXR0YWNrKGhpdHMgKyAxKTtcbiAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoKTtcbiAgICAgIH1cbiAgICAgIGlmIChoaXRzID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGl0cztcbiAgICB9LFxuICAgIGdhbWVFbmQoKSB7XG4gICAgICAvLyBjaGVjayBpZiB0aGUgZ2FtZSBpcyBzdGFydGVkXG4gICAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzdGFydCB0aGUgZ2FtZScpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuICdDb21wdXRlciB3aW5zJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbXB1dGVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuICdQbGF5ZXIgd2lucyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICByZXNldEdhbWUoKSB7XG4gICAgICB0aGlzLmFjdHVhbFBsYXllciA9IDE7XG4gICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnBsYXllckJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuICAgICAgdGhpcy5jb21wdXRlckJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBnYW1lO1xufTtcbiIsImltcG9ydCBzaGlwRmFjdG9yeSBmcm9tICcuL3NoaXBGYWN0b3J5LmpzJztcblxuLy8gZnVuY3Rpb24gdG8gZ2V0IHRoZSBjb29yZGluYXRlcyBvZiBhIHNoaXBcbmZ1bmN0aW9uIGdldFNoaXBDb29yZGluYXRlcyhjb29yZGluYXRlcywgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3gsIHkgKyBpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzaGlwQ29vcmRpbmF0ZXM7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGdldCB0aGUgc2hpcCB0aGF0IHdhcyBoaXRcbmZ1bmN0aW9uIGdldEhpdFNoaXAoY29vcmRpbmF0ZXMsIHNoaXBzKSB7XG4gIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuICBsZXQgc2hpcEhpdCA9IG51bGw7XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBDb29yZGluYXRlKSA9PiB7XG4gICAgICBpZiAoc2hpcENvb3JkaW5hdGVbMF0gPT09IHggJiYgc2hpcENvb3JkaW5hdGVbMV0gPT09IHkpIHtcbiAgICAgICAgc2hpcEhpdCA9IHNoaXA7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc2hpcEhpdDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lKG5hbWUpIHtcbiAgLy8gQ2FycmllciwgQmF0dGxlc2hpcCwgQ3J1aXNlciwgU3VibWFyaW5lLCBEZXN0cm95ZXIsIFBhdHJvbGxlclxuICBpZiAobmFtZSAhPT0gJ0NhcnJpZXInICYmIG5hbWUgIT09ICdCYXR0bGVzaGlwJyAmJiBuYW1lICE9PSAnQ3J1aXNlcidcbiAgJiYgbmFtZSAhPT0gJ1N1Ym1hcmluZScgJiYgbmFtZSAhPT0gJ0Rlc3Ryb3llcicgJiYgbmFtZSAhPT0gJ1BhdHJvbGxlcicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgbmFtZSBtdXN0IGJlIENhcnJpZXIsIEJhdHRsZXNoaXAsIENydWlzZXIsIFN1Ym1hcmluZSwgRGVzdHJveWVyIG9yIFBhdHJvbGxlcicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2hpcExlbmd0aChsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA8IDEgfHwgbGVuZ3RoID4gNSkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBsZW5ndGggbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIGlmIChvcmllbnRhdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG9yaWVudGF0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIG9yaWVudGF0aW9uIG11c3QgYmUgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGNvb3JkaW5hdGVzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBjb29yZGluYXRlcyBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gIH1cbiAgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCAhPT0gMikge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBjb29yZGluYXRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR3byBudW1iZXJzJyk7XG4gIH1cbiAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgY29vcmRpbmF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBjb29yZGluYXRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR3byBudW1iZXJzJyk7XG4gICAgfVxuICAgIGlmIChjb29yZGluYXRlIDwgMCB8fCBjb29yZGluYXRlID4gOSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGNvb3JkaW5hdGVzIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA5Jyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVPdmVybGFwKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uLCBzaGlwcykge1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBnZXRTaGlwQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBDb29yZGluYXRlKSA9PiB7XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBDb29yZGluYXRlMikgPT4ge1xuICAgICAgICBpZiAoc2hpcENvb3JkaW5hdGVbMF0gPT09IHNoaXBDb29yZGluYXRlMlswXSAmJiBzaGlwQ29vcmRpbmF0ZVsxXSA9PT0gc2hpcENvb3JkaW5hdGUyWzFdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwcyBjYW5ub3Qgb3ZlcmxhcCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib2FyZFZhbGlkYXRpb24obmFtZSwgbGVuZ3RoLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHNoaXBzKSB7XG4gIHZhbGlkYXRlTmFtZShuYW1lKTtcbiAgdmFsaWRhdGVTaGlwTGVuZ3RoKGxlbmd0aCk7XG4gIHZhbGlkYXRlT3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuICB2YWxpZGF0ZUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgdmFsaWRhdGVPdmVybGFwKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uLCBzaGlwcyk7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBnYW1lYm9hcmQgZmFjdG9yeSBmdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVib2FyZEZhY3RvcnkoKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IHtcbiAgICBzaGlwczogW10sXG4gICAgbWlzc2VkQXR0YWNrczogW10sXG4gICAgcGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgICAvLyB2YWxpZGF0ZSBzaGlwXG4gICAgICBpZiAoYm9hcmRWYWxpZGF0aW9uKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uLCB0aGlzLnNoaXBzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBjcmVhdGUgc2hpcFxuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBGYWN0b3J5KGxlbmd0aCk7XG4gICAgICBzaGlwLm5hbWUgPSBuYW1lO1xuICAgICAgc2hpcC5jb29yZGluYXRlcyA9IGdldFNoaXBDb29yZGluYXRlcyhjb29yZGluYXRlcywgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG5cbiAgICAgIC8vIGNoZWNrIGlmIHNoaXAgaXMgb2ZmIHRoZSBib2FyZFxuICAgICAgY29uc3Qgc2hpcE9mZkJvYXJkID0gc2hpcC5jb29yZGluYXRlcy5zb21lKChzaGlwQ29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBzaGlwQ29vcmRpbmF0ZTtcbiAgICAgICAgcmV0dXJuIHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5O1xuICAgICAgfSk7XG4gICAgICBpZiAoc2hpcE9mZkJvYXJkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcHMgY2Fubm90IGJlIHBsYWNlZCBvZmYgdGhlIGJvYXJkJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IHNoaXBIaXQgPSBnZXRIaXRTaGlwKGNvb3JkaW5hdGVzLCB0aGlzLnNoaXBzKTtcbiAgICAgIGlmIChzaGlwSGl0KSB7XG4gICAgICAgIHNoaXBIaXQuaGl0KGNvb3JkaW5hdGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9LFxuICB9O1xuICByZXR1cm4gZ2FtZWJvYXJkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXBGYWN0b3J5KGxlbmd0aCkge1xuICBjb25zdCBzaGlwID0ge1xuICAgIGxlbmd0aCxcbiAgICBoaXRzOiBbXSxcbiAgICBoaXQocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaGl0cy5wdXNoKHBvc2l0aW9uKTtcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIHJldHVybiB0aGlzLmhpdHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aDtcbiAgICB9LFxuICB9O1xuICByZXR1cm4gc2hpcDtcbn1cbiIsIi8vIEdldCB0aGUgaW1hZ2VzIGZyb20gd2VicGFja1xuaW1wb3J0IGNhcnJpZXIgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTIwLnBuZyc7XG5pbXBvcnQgY2FycmllcjEgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTAxLnBuZyc7XG5pbXBvcnQgY2FycmllcjIgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTAyLnBuZyc7XG5pbXBvcnQgY2FycmllcjMgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTAzLnBuZyc7XG5pbXBvcnQgY2FycmllcjQgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA0LnBuZyc7XG5pbXBvcnQgY2FycmllcjUgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA1LnBuZyc7XG5cbmltcG9ydCBiYXR0bGVzaGlwIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0yMS5wbmcnO1xuaW1wb3J0IGJhdHRsZXNoaXAxIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0wNi5wbmcnO1xuaW1wb3J0IGJhdHRsZXNoaXAyIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0wNy5wbmcnO1xuaW1wb3J0IGJhdHRsZXNoaXAzIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0wOC5wbmcnO1xuaW1wb3J0IGJhdHRsZXNoaXA0IGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0wOS5wbmcnO1xuXG5pbXBvcnQgY3J1aXNlciBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjIucG5nJztcbmltcG9ydCBjcnVpc2VyMSBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTAucG5nJztcbmltcG9ydCBjcnVpc2VyMiBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTEucG5nJztcbmltcG9ydCBjcnVpc2VyMyBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTIucG5nJztcblxuaW1wb3J0IHN1Ym1hcmluZSBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjMucG5nJztcbmltcG9ydCBzdWJtYXJpbmUxIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0xMy5wbmcnO1xuaW1wb3J0IHN1Ym1hcmluZTIgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTE0LnBuZyc7XG5pbXBvcnQgc3VibWFyaW5lMyBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTUucG5nJztcblxuaW1wb3J0IGRlc3Ryb3llciBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjQucG5nJztcbmltcG9ydCBkZXN0cm95ZXIxIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0xOC5wbmcnO1xuaW1wb3J0IGRlc3Ryb3llcjIgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTE5LnBuZyc7XG5cbmltcG9ydCBwYXRyb2xsZXIgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXBzLTI1LnBuZyc7XG5pbXBvcnQgcGF0cm9sbGVyMSBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTYucG5nJztcbmltcG9ydCBwYXRyb2xsZXIyIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwcy0xNy5wbmcnO1xuXG5pbXBvcnQgZXhwbG9zaW9uIGZyb20gJy4uL2ltYWdlcy9leHBsb3Npb24ucG5nJztcblxuY29uc3QgY2FycmllclNoaXAgPSB7XG4gIG5hbWU6ICdDYXJyaWVyJyxcbiAgc2l6ZTogNSxcbiAgZnVsbEltYWdlOiBjYXJyaWVyLFxuICBpbWFnZXM6IFtjYXJyaWVyMSwgY2FycmllcjIsIGNhcnJpZXIzLCBjYXJyaWVyNCwgY2FycmllcjVdLFxufTtcblxuY29uc3QgYmF0dGxlc2hpcFNoaXAgPSB7XG4gIG5hbWU6ICdCYXR0bGVzaGlwJyxcbiAgc2l6ZTogNCxcbiAgZnVsbEltYWdlOiBiYXR0bGVzaGlwLFxuICBpbWFnZXM6IFtiYXR0bGVzaGlwMSwgYmF0dGxlc2hpcDIsIGJhdHRsZXNoaXAzLCBiYXR0bGVzaGlwNF0sXG59O1xuXG5jb25zdCBjcnVpc2VyU2hpcCA9IHtcbiAgbmFtZTogJ0NydWlzZXInLFxuICBzaXplOiAzLFxuICBmdWxsSW1hZ2U6IGNydWlzZXIsXG4gIGltYWdlczogW2NydWlzZXIxLCBjcnVpc2VyMiwgY3J1aXNlcjNdLFxufTtcblxuY29uc3Qgc3VibWFyaW5lU2hpcCA9IHtcbiAgbmFtZTogJ1N1Ym1hcmluZScsXG4gIHNpemU6IDMsXG4gIGZ1bGxJbWFnZTogc3VibWFyaW5lLFxuICBpbWFnZXM6IFtzdWJtYXJpbmUxLCBzdWJtYXJpbmUyLCBzdWJtYXJpbmUzXSxcbn07XG5cbmNvbnN0IGRlc3Ryb3llclNoaXAgPSB7XG4gIG5hbWU6ICdEZXN0cm95ZXInLFxuICBzaXplOiAyLFxuICBmdWxsSW1hZ2U6IGRlc3Ryb3llcixcbiAgaW1hZ2VzOiBbZGVzdHJveWVyMSwgZGVzdHJveWVyMl0sXG59O1xuXG5jb25zdCBwYXRyb2xsZXJTaGlwID0ge1xuICBuYW1lOiAnUGF0cm9sbGVyJyxcbiAgc2l6ZTogMixcbiAgZnVsbEltYWdlOiBwYXRyb2xsZXIsXG4gIGltYWdlczogW3BhdHJvbGxlcjEsIHBhdHJvbGxlcjJdLFxufTtcblxuZXhwb3J0IGNvbnN0IHNoaXBzID0gW1xuICBjYXJyaWVyU2hpcCxcbiAgYmF0dGxlc2hpcFNoaXAsXG4gIGNydWlzZXJTaGlwLFxuICBzdWJtYXJpbmVTaGlwLFxuICBkZXN0cm95ZXJTaGlwLFxuICBwYXRyb2xsZXJTaGlwLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFNoaXBJbWFnZXMoc2hpcE5hbWUpIHtcbiAgY29uc3Qgc2hpcCA9IHNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gc2hpcE5hbWUpO1xuICByZXR1cm4gc2hpcC5pbWFnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHBsb3Npb25JbWFnZSgpIHtcbiAgcmV0dXJuIGV4cGxvc2lvbjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBkcmF3R3JpZCxcbiAgc2hvd0FjdGlvbixcbiAgdXBkYXRlUGxhY2luZ1NoaXAsXG4gIGNyZWF0ZUFsZXJ0LFxuICBzdGFydFBsYWNpbmcsXG59IGZyb20gJy4vbGliL2RvbU1hbmFnZXIuanMnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi9saWIvZ2FtZS5qcyc7XG5cbmNvbnN0IGdhbWVJbnN0YW5jZSA9IGdhbWUoKTtcblxuLy8gZHJhdyB0aGUgYm9hcmRzXG5kcmF3R3JpZCgpO1xuZHJhd0dyaWQoJ2VuZW15Jyk7XG5cbi8vIFNob3cgYWN0aW9uIHRvIHRoZSBwbGF5ZXJcbnNob3dBY3Rpb24oJ3BsYXllcicsICdQbGFjZSB5b3VyIHNoaXBzJyk7XG5zaG93QWN0aW9uKCdlbmVteScsICdXYWl0aW5nIEZvciBTaGlwcycsICdhbGVydCcpO1xuXG51cGRhdGVQbGFjaW5nU2hpcCgnQ2FycmllcicpO1xuXG4vLyBTaG93IHRoZSBhbGVydFxuY3JlYXRlQWxlcnQoJ3N1Y2Nlc3MnLCAnR2FtZSBzdGFydGVkLCBwbGFjZSB5b3VyIHNoaXBzIChQcmVzcyBSIHRvIHJvdGF0ZSknKTtcblxuc3RhcnRQbGFjaW5nKGdhbWVJbnN0YW5jZSwgJ2hvcml6b250YWwnLCAnQ2FycmllcicpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==