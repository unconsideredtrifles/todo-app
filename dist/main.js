/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.projectMenu  {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    width: 20%;

    border-right: 1px solid #bcbcbc;
    padding-top: 5rem;
    padding-left: 2.5rem;
    box-shadow: 5px 0px 7px 2px rgba(0, 0, 0, 0.10);
    background-color: #fff;

    transform: translateX(-100%);
    transition: 0.4s;
}

.showProjectMenu {
    transform: translateX(0);
}

.projectMenuHeader {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0 0 0.6rem 0.4rem;
}

.projectMenuHeaderText {
    font-size: 1.5rem;
}

.projectMenuHeaderBtn {
    border: none;

    background-color: transparent;
    font-size: 2.5rem;
    cursor: pointer;
}

.projectMenuSeparator {
    width: 90%;
    border-bottom: 1px solid #afafaf;
    margin-bottom: 1.5rem;
}

.projectMenuList {
    list-style-type: none;
}

.projectItem {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0.5rem 0 0.5rem 0.4rem;
    cursor: pointer;
}

.projectItem:hover {
    background-color: #d6d6d6;
}

.projectIcon {
    width: 1.8rem;
    fill: #5c5cff;
}

.projectItemText {
    font-size: 1.2rem;    
    flex-basis: 25%;
}

.projectItemText[contenteditable=true]:focus-visible {
    width: 20ch;
    outline: 1px solid #000;
    padding: 0.25rem;
    
    background-color: #fff;
    font-size: inherit;
    font-family: monospace, monospace;
}

.projectBtns {
    display: flex;
    gap: 1rem;
}

.projectEditBtn {
    width: 1.8rem;
    fill: #5c5cff;
}

.projectDelBtn {
    width: 1.8rem;
    fill: #df5757;
}

.activeProjectItem, .activeProjectItem:hover {
    background-color: #8484ff;
}

.activeProjectIcon {
    fill: #fff;
}
`, "",{"version":3,"sources":["webpack://./src/ui/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,SAAS;IACT,WAAW;IACX,UAAU;;IAEV,+BAA+B;IAC/B,iBAAiB;IACjB,oBAAoB;IACpB,+CAA+C;IAC/C,sBAAsB;;IAEtB,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;;IAET,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;;IAEZ,6BAA6B;IAC7B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;;IAET,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,gBAAgB;;IAEhB,sBAAsB;IACtB,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;AACd","sourcesContent":[".projectMenu  {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 99;\n    width: 20%;\n\n    border-right: 1px solid #bcbcbc;\n    padding-top: 5rem;\n    padding-left: 2.5rem;\n    box-shadow: 5px 0px 7px 2px rgba(0, 0, 0, 0.10);\n    background-color: #fff;\n\n    transform: translateX(-100%);\n    transition: 0.4s;\n}\n\n.showProjectMenu {\n    transform: translateX(0);\n}\n\n.projectMenuHeader {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n\n    padding: 0 0 0.6rem 0.4rem;\n}\n\n.projectMenuHeaderText {\n    font-size: 1.5rem;\n}\n\n.projectMenuHeaderBtn {\n    border: none;\n\n    background-color: transparent;\n    font-size: 2.5rem;\n    cursor: pointer;\n}\n\n.projectMenuSeparator {\n    width: 90%;\n    border-bottom: 1px solid #afafaf;\n    margin-bottom: 1.5rem;\n}\n\n.projectMenuList {\n    list-style-type: none;\n}\n\n.projectItem {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n\n    padding: 0.5rem 0 0.5rem 0.4rem;\n    cursor: pointer;\n}\n\n.projectItem:hover {\n    background-color: #d6d6d6;\n}\n\n.projectIcon {\n    width: 1.8rem;\n    fill: #5c5cff;\n}\n\n.projectItemText {\n    font-size: 1.2rem;    \n    flex-basis: 25%;\n}\n\n.projectItemText[contenteditable=true]:focus-visible {\n    width: 20ch;\n    outline: 1px solid #000;\n    padding: 0.25rem;\n    \n    background-color: #fff;\n    font-size: inherit;\n    font-family: monospace, monospace;\n}\n\n.projectBtns {\n    display: flex;\n    gap: 1rem;\n}\n\n.projectEditBtn {\n    width: 1.8rem;\n    fill: #5c5cff;\n}\n\n.projectDelBtn {\n    width: 1.8rem;\n    fill: #df5757;\n}\n\n.activeProjectItem, .activeProjectItem:hover {\n    background-color: #8484ff;\n}\n\n.activeProjectIcon {\n    fill: #fff;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/ui/style.css":
/*!**************************!*\
  !*** ./src/ui/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/crud/todo-crud.js":
/*!*******************************!*\
  !*** ./src/crud/todo-crud.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteToDo: () => (/* binding */ deleteToDo),
/* harmony export */   editToDoDate: () => (/* binding */ editToDoDate),
/* harmony export */   editToDoPriority: () => (/* binding */ editToDoPriority),
/* harmony export */   makeDescriptionEditable: () => (/* binding */ makeDescriptionEditable),
/* harmony export */   makeTitleEditable: () => (/* binding */ makeTitleEditable)
/* harmony export */ });
/* harmony import */ var _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todos/todo.js */ "./src/todos/todo.js");



function makeContentEditable(e, elementToEdit, toDoID, toDoProp, maxTextLen) {
    let uneditedContent = elementToEdit.textContent;
    elementToEdit.setAttribute("contenteditable", "true");

    elementToEdit.addEventListener("blur", e => {
        e.target.textContent = uneditedContent;
        e.target.removeAttribute("contenteditable");
    });
    elementToEdit.addEventListener("keydown", e => {
        if((!e.ctrlKey) && (!["Enter", "Escape", "Backspace"].includes(e.key)) 
            && e.target.textContent.length >= maxTextLen) {
            e.preventDefault();
            return;
        }

        if(e.key === "Enter") {
            let toDoToEdit = _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.activeProject.getToDo(toDoID);
            toDoToEdit[toDoProp] = e.target.textContent;
            e.target.removeAttribute("contenteditable");
        } else if (e.key === "Escape") {
            e.target.textContent = uneditedContent;
            e.target.removeAttribute("contenteditable");
        }
    })
    elementToEdit.focus();
}


function makeTitleEditable(e) {
    let toDoTopRow = this.parentElement.parentElement;
    let toDoTitle = toDoTopRow.children[0].children[1];
    let toDoID = +toDoTopRow.parentElement.dataset.id;

    makeContentEditable(e, toDoTitle, toDoID, "title", 30);
}

function makeDescriptionEditable(e) {
    let toDoDescription = this.parentElement.children[0]
    let toDo = this.parentElement.parentElement.parentElement
    let toDoID = +toDo.dataset.id;

    makeContentEditable(e, toDoDescription, toDoID, "description", 100);
}

function getToDoToEdit(element) {
    let currentToDoEl = element.parentElement;
    for(let i = 0; i < 2; i++) {
        currentToDoEl = currentToDoEl.parentElement;
    }
    let toDoID = +currentToDoEl.dataset.id;
    return _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.activeProject.getToDo(toDoID);
}


function editToDoDate(e) {
    let toDoToEdit = getToDoToEdit(this);
    toDoToEdit.dueDate = e.target.value;
}


function editToDoPriority(e) {
    let toDoToEdit = getToDoToEdit(this);
    this.classList.remove(toDoToEdit.priority + "Priority");
    toDoToEdit.rotatePriority();

    let newClassName = toDoToEdit.priority + "Priority";
    this.classList.add(newClassName);
    let hoverText = this.getElementsByTagName("title")[0];
    hoverText.textContent = toDoToEdit.priority + " priority";
}


function deleteToDo(e) {
    let toDoToEdit = getToDoToEdit(this);
    _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.activeProject.removeToDo(toDoToEdit.toDoID);

    let currentToDoEl = this.parentElement;
    for(let i = 0; i < 2; i++) {
        currentToDoEl = currentToDoEl.parentElement;
    }
    
    let separatorToRemove = currentToDoEl.nextElementSibling;
    currentToDoEl.parentElement.removeChild(separatorToRemove);
    currentToDoEl.parentElement.removeChild(currentToDoEl);
}




/***/ }),

/***/ "./src/dates/date.js":
/*!***************************!*\
  !*** ./src/dates/date.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateValidator: () => (/* binding */ DateValidator),
/* harmony export */   ToDoDate: () => (/* binding */ ToDoDate)
/* harmony export */ });
/* harmony import */ var _misc_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/util.js */ "./src/misc/util.js");
/* harmony import */ var _errors_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/error.js */ "./src/errors/error.js");



class ToDoDate {
    #date;

    constructor(dateStr) {
        let dateArgs = ToDoDate.convertToDateArgs(dateStr);
        this.#date = new Date(...dateArgs);
    }

    getDateStr() {
        let year = this.#date.getFullYear();
        let month = (this.#date.getMonth() + 1).toString();
        let day = (this.#date.getDate()).toString();

        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }

    static convertToDateArgs(dateStr) {
        /* this transforms dateStr into an array compatible
         * for arguments in Date constructor (with spread syntax)
         * for example, "2021-1-18" becomes [2021, 1, 18]
         */
        let dateArr = convertToDateArr(dateStr);
        dateArr[1]--; /* months start from 0 (not 1) */
        return dateArr;
    }
}


function convertToDateArr(dateStr) {
    /* convert date string into an array of numbers.
     * "2021-1-18" becomes [2021, 1, 18];
     */
    let dateArr = dateStr.split("-");
    return dateArr.map(Number);
}


class DateValidator {
    #dateArr; 

    constructor(dateStr) {
        this.#dateArr = convertToDateArr(dateStr);
    }

    validate() {
        if (!(0,_misc_util_js__WEBPACK_IMPORTED_MODULE_0__.isDirectInstanceOf)(this.#dateArr, Array) || this.#dateArr.length != 3) {
            return false;
        }

        let ifAllNumbers = this.#dateArr.every(eachNum => !isNaN(eachNum));

        if (!ifAllNumbers) {
            (0,_errors_error_js__WEBPACK_IMPORTED_MODULE_1__.throwError)("number");
        }

        let month = this.#dateArr[1];
        let day = this.#dateArr[2];

        let ifValidDay = day >= 1 && day <= DateValidator.getDaysInAMonth(day);
        if(!ifValidDay) {
            (0,_errors_error_js__WEBPACK_IMPORTED_MODULE_1__.throwError)("day");
        }

        let ifValidMonth = month >= 1 && month <= 12;
        if(!ifValidMonth) {
            (0,_errors_error_js__WEBPACK_IMPORTED_MODULE_1__.throwError)("month");
        }
    }

    static getDaysInAMonth(month) {
        let monthsWith30Days = [4, 6, 7, 9, 11];
        if (monthsWith30Days.includes(month)) {
            return 30;
        }
        return 31;
    }
}



/***/ }),

/***/ "./src/errors/error.js":
/*!*****************************!*\
  !*** ./src/errors/error.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throwError: () => (/* binding */ throwError)
/* harmony export */ });
function throwError(errorType) {
    let errors = {
        number: new NumberError(),
        day: new DayError(),
        month: new MonthError(),
    };

    let errorToThrow = errors[errorType];
    errorToThrow.throw();
}


class NumberError {
    constructor(errorMessage) {
        if(errorMessage === undefined) {
            this.errorMessage = "it must be a valid number";
            return;
        }
        this.errorMessage = errorMessage;
    }

    throw() {
        throw new TypeError(this.errorMessage);
    }
}


class DayError {
    constructor(errorMessage) {
        if(errorMessage === undefined) {
            this.errorMessage = "Day should be in a range from 1 to 31";
            return;
        }
        this.errorMessage = errorMessage;
    }

    throw() {
        throw new RangeError(this.errorMessage);
    }
}


class MonthError {
    constructor(errorMessage) {
        if(errorMessage === undefined) {
            this.errorMessage = "Month should be in a range from 1 to 12";
            return;
        }
        this.errorMessage = errorMessage;
    }

    throw() {
        throw new RangeError(this.errorMessage);
    }
}



/***/ }),

/***/ "./src/misc/util.js":
/*!**************************!*\
  !*** ./src/misc/util.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMTree: () => (/* binding */ DOMTree),
/* harmony export */   getPrototype: () => (/* binding */ getPrototype),
/* harmony export */   isDirectInstanceOf: () => (/* binding */ isDirectInstanceOf)
/* harmony export */ });
function isDirectInstanceOf(instance, constructor) {
    let instancePrototype = Object.getPrototypeOf(instance);
    return instancePrototype === constructor.prototype;
}

function getPrototype(obj) {
    return Object.getPrototypeOf(obj);
}

class DOMTree {
    #rootElement;

    constructor(parent, rootElement) {
        this.#rootElement = this.initElement(rootElement);
        parent.appendChild(this.#rootElement);
    }

    addElements(elements) {
        elements.forEach(eachElement => {
            let element = this.initElement(eachElement)
            this.#rootElement.appendChild(element);
        });
    }

    initElement(elementObj) {
        let element = document.createElement(elementObj.name);
        for(let eachClass of elementObj.classes) {
            element.classList.add(eachClass);
        }
        element.textContent = elementObj.content;
        if("listener" in elementObj) {
            element.addEventListener(...elementObj.listener);
        }
        return element;
    }

    getRootElement() {
        return this.#rootElement;
    }

    addChild(child) {
        this.#rootElement.appendChild(child);
    }

};



/***/ }),

/***/ "./src/todos/todo.js":
/*!***************************!*\
  !*** ./src/todos/todo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ToDo: () => (/* binding */ ToDo),
/* harmony export */   projectTracker: () => (/* binding */ projectTracker)
/* harmony export */ });
/* harmony import */ var _dates_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dates/date.js */ "./src/dates/date.js");



class ProjectTracker {
    #allProjects;
    #currentProject;

    constructor(allProjects = []) {
        this.#allProjects = allProjects;
    }

    getAllProjects() {
        return this.#allProjects;
    }

    addProject(project) {
        if(this.isDuplicateProject(project)) {
            return;
        }
        this.#allProjects.push(project);
        ToDoSaver.saveProject(project);

        if(this.#allProjects.length === 1) {
            this.#currentProject = project;
            localStorage.setItem("activeProject", project.name);
        }
    }

    renameProject(currentName, newName) {
        let proj = this.#allProjects.find(eachProject => {
            return eachProject.name === currentName;
        });
        if(proj) {
            if(this.activeProject && this.activeProject.name === currentName) {
                localStorage.setItem("activeProject", newName);
            }
            proj.name = newName;
            proj.getAllToDos().forEach(eachToDo => {
                eachToDo.parentProjectName =  proj.name;
            });

            let projStorage = localStorage.getItem(currentName);
            let projInfo = JSON.parse(projStorage);
            projInfo.name = newName;
            localStorage.setItem(newName, JSON.stringify(projInfo));

            localStorage.removeItem(currentName);
        } else {
            throw new Error(`Can't rename Project '${currentName}' ` +
                            `since it doesn't exist`);
        }
    }

    removeProject(projectName) {
        let idx2Delete = this.#allProjects.findIndex(eachProject => 
            eachProject.name === projectName
        );
        this.#allProjects.splice(idx2Delete, 1);
        localStorage.removeItem(projectName);

        if(this.activeProject && projectName === this.activeProject.name) {
            if(this.#allProjects.length === 1) {
                this.#currentProject = this.#allProjects[0];
                localStorage.setItem("activeProject", this.#currentProject.name);
            } else {
                this.#currentProject = undefined;
                localStorage.setItem("activeProject", "");
            }
        }
    }

    get activeProject() {
        return this.#currentProject;
    }

    set activeProject(projectName) {
        if(projectName === undefined) {
            this.#currentProject = undefined;
            return;
        }

        localStorage.setItem("activeProject", projectName);
        for(let eachProject of this.#allProjects) {
            if(eachProject.name === projectName) {
                this.#currentProject = eachProject;
                break;
            }
        }
    }

    isDuplicateProject(project) {
        return this.#allProjects.some(eachProject => 
            eachProject.name === project.name
        );
    }
}


class Project {
    constructor(name = "default", toDoArr = []) {
        this.name = name;
        this.toDoArr = toDoArr;
    }

    addToDo(toDo) {
        if(this.isDuplicateToDo(toDo)) {
            throw new Error("Don't try to add a duplicate todo");
        }
        this.toDoArr.push(toDo);

        let toDoSaver = new ToDoSaver(toDo, this.name);
        toDoSaver.addToDo();
        toDoSaver.save();
        toDo.parentProjectName = this.name;
    }

    isDuplicateToDo(toDo) {
        return this.toDoArr.some(eachToDo => {
            let titleEquality = eachToDo.title === toDo.title;
            let descrEquality = eachToDo.description === toDo.description;
            let priorityEquality = eachToDo.priority === toDo.priority;
            let dueDateEquality = eachToDo.dueDate === toDo.dueDate;

            return (titleEquality && descrEquality && 
                priorityEquality && dueDateEquality);
        })
    }

    getToDo(toDoID) {
        return this.toDoArr.find(eachToDo => {
            return eachToDo.toDoID === toDoID;
        });
    }

    getAllToDos() {
        return this.toDoArr;
    }

    toggleFinish(toDoID) {
        let todo = this.getToDo(toDoID);
        if(todo.finished) {
            todo.finished = false;
        } else {
            todo.finished = true;
        }

        let toDoSaver = new ToDoSaver(todo, this.name);
        toDoSaver.updateToDo();
        toDoSaver.save();
    }

    removeToDo(toDoID) {
        let idx2Delete = this.toDoArr.findIndex(
            eachToDo => eachToDo.toDoID === toDoID
        );
        this.toDoArr.splice(idx2Delete, 1);

        let toDoSaver = new ToDoSaver({}, this.name);
        toDoSaver.removeToDo(idx2Delete);
        toDoSaver.save();
    }
}


class ToDo {
    static priorities = ["low", "medium", "high"];
    static nextToDoID = 0;
    #title;
    #description;
    #priority;
    #dueDate;
    #finished
    #parentProjectName;

    constructor(title, description, priority, dueDate) {
        this.toDoID = ToDo.nextToDoID++;
        this.#title = title;
        this.#description = description;
        this.#priority = priority;
        ToDo.validateDate(dueDate);
        this.#dueDate = new _dates_date_js__WEBPACK_IMPORTED_MODULE_0__.ToDoDate(dueDate);
        this.#finished = false;
    }

    get parentProjectName() {
        return this.#parentProjectName;
    }

    set parentProjectName(projectName) {
        this.#parentProjectName = projectName;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        let toDoSaver = new ToDoSaver(this, this.#parentProjectName);
        toDoSaver.updateToDo("title", value);
        toDoSaver.save();

        this.#title = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        let toDoSaver = new ToDoSaver(this, this.#parentProjectName);
        toDoSaver.updateToDo("description", value);
        toDoSaver.save();
        this.#description = value;
    }

    get priority() {
        return this.#priority;
    }

    set priority(value) {
        if(!ToDo.priorities.includes(value)) {
            throw new Error("priority must be one of low, medium and high");
            return;
        }
        let toDoSaver = new ToDoSaver(this, this.#parentProjectName);
        toDoSaver.updateToDo("priority", value);
        toDoSaver.save();

        this.#priority = value;
    }

    rotatePriority() {
        let priorityIdx = ToDo.priorities.indexOf(this.priority);
        priorityIdx++
        if(priorityIdx >= ToDo.priorities.length) {
            priorityIdx = 0;
        }
        this.priority = ToDo.priorities[priorityIdx];
    }

    get dueDate() {
        return this.#dueDate.getDateStr();
    }

    set dueDate(dueDate) {
        ToDo.validateDate(dueDate);
        let toDoDate = new _dates_date_js__WEBPACK_IMPORTED_MODULE_0__.ToDoDate(dueDate);

        let toDoSaver = new ToDoSaver(this, this.#parentProjectName);
        toDoSaver.updateToDo("dueDate", toDoDate.getDateStr());
        toDoSaver.save();

        this.#dueDate = toDoDate;
    }

    static validateDate(dueDate) {
        let dateValidator = new _dates_date_js__WEBPACK_IMPORTED_MODULE_0__.DateValidator(dueDate);
        return dateValidator.validate();
    }

    get finished() {
        return this.#finished;
    }

    set finished(value) {
        let toDoSaver = new ToDoSaver(this, this.#parentProjectName);
        toDoSaver.updateToDo("finished", value);
        toDoSaver.save();

        this.#finished = value;
    }
}


class ToDoSaver {
    constructor(toDoObj, projectName) {
        this.toDoInfo = {
            title: toDoObj.title,
            description: toDoObj.description,
            priority: toDoObj.priority,
            dueDate: toDoObj.dueDate,
            finished: toDoObj.finished
        };
        this.projectInfo = ToDoSaver.getProjectInfo(projectName);
    }

    static getProjectInfo(projectName) {
        return JSON.parse(localStorage.getItem(projectName));
    }

    getToDoIdx() {
        return this.projectInfo.toDoArr.findIndex(eachToDo => {
            return (
                eachToDo.title === this.toDoInfo.title &&
                eachToDo.description === this.toDoInfo.description &&
                eachToDo.priority === this.toDoInfo.priority &&
                eachToDo.dueDate === this.toDoInfo.dueDate
            )
        });

    }

    addToDo() {
        this.projectInfo.toDoArr.push(this.toDoInfo);
    }

    removeToDo(idxToRemove) {
        this.projectInfo.toDoArr.splice(idxToRemove, 1);
    }

    updateToDo(prop, value) {
        let idxToUpdate = this.getToDoIdx();
        this.toDoInfo[prop] = value;
        this.projectInfo.toDoArr[idxToUpdate] = this.toDoInfo;
    }

    save() {
        localStorage.setItem(this.projectInfo.name, JSON.stringify(this.projectInfo));
    }

    static saveProject(project) {
        let projectInfo = {};
        projectInfo.name = project.name;
        projectInfo.toDoArr = project.toDoArr.map(eachToDo => {
            let toDoSaver = new ToDoSaver(eachToDo);
            return toDoSaver.toDoInfo;
        });
        localStorage.setItem(projectInfo.name, JSON.stringify(projectInfo));
    }

    static openProject(projectName) {
        let projectInfo = ToDoSaver.getProjectInfo(projectName);
        let toDos = projectInfo.toDoArr.map(eachToDo => {
            let toDo = new ToDo(
                eachToDo.title,
                eachToDo.description,
                eachToDo.priority,
                eachToDo.dueDate
            );
            toDo.parentProjectName = projectInfo.name;
            toDo.finished = eachToDo.finished
            return toDo;
        });
        return new Project(projectInfo.name, toDos);
    }

    static checkIfValidProject(projectName) {
        let projectInfo = ToDoSaver.getProjectInfo(projectName);
        let objProps = Object.keys(projectInfo).sort();
        let lengthCheck = (objProps.length === 2);
        let propsCheck = (objProps[0] === "name" && objProps[1] === "toDoArr");

        return (lengthCheck && propsCheck);
    }
}


let projectTracker = new ProjectTracker();
let activeProjectName;
for(let eachKey in localStorage) {
    if(localStorage.hasOwnProperty(eachKey)) {
        if(eachKey === "activeProject") {
            activeProjectName = localStorage.getItem(eachKey);
            if(!activeProjectName) {
                activeProjectName = undefined;
            }
        } else {
            if(!ToDoSaver.checkIfValidProject(eachKey)) {
                continue;
            }
            let project = ToDoSaver.openProject(eachKey);
            projectTracker.addProject(project);
        }
     }
}

if(activeProjectName) {
    projectTracker.activeProject = activeProjectName;
} else if (projectTracker.getAllProjects().length === 0) {
    projectTracker.addProject(new Project("default"));
}



/***/ }),

/***/ "./src/ui/project-ui.js":
/*!******************************!*\
  !*** ./src/ui/project-ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todos/todo.js */ "./src/todos/todo.js");
/* harmony import */ var _misc_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/util.js */ "./src/misc/util.js");
/* harmony import */ var _todo_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-ui.js */ "./src/ui/todo-ui.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/ui/style.css");






function getProjectIcon()  {
    let projectIconTemplate = document.getElementById("projectIconTemplate");
    let iconTemplateNode = projectIconTemplate.content.cloneNode(true);
    return iconTemplateNode.querySelector(".projectIcon");
}


function getProjectBtns() {
    let projectIconTemplate = document.getElementById("projectIconTemplate");
    let iconTemplateNode = projectIconTemplate.content.cloneNode(true);

    let projectBtns = iconTemplateNode.querySelector(".projectBtns");
    let editBtn = projectBtns.getElementsByClassName("projectEditBtn")[0];
    let delBtn = projectBtns.getElementsByClassName("projectDelBtn")[0];

    editBtn.addEventListener("click", function(e) {
        let projectItem = this.parentElement.parentElement;

        let className = "projectItemText";
        let projectItemText = projectItem.getElementsByClassName(className)[0];

        projectItemText.setAttribute("contenteditable", true);

        let projectRenamer = new ProjectRenamer(projectItemText);
        projectItemText.addEventListener("keydown", projectRenamer);
        projectItemText.focus();

        e.stopPropagation();
    });

    delBtn.addEventListener("click", function(e) {
        let projectItem = this.parentElement.parentElement;
        let itemText = projectItem.getElementsByClassName("projectItemText")[0];
        _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.removeProject(itemText.textContent);

        let itemList = projectItem.parentElement;
        itemList.removeChild(projectItem);
        _todo_ui_js__WEBPACK_IMPORTED_MODULE_2__.toDoUI.loadToDoItems();

        let totalProjects = _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.getAllProjects().length;
        if(totalProjects === 1) {
            setActiveProjectDirect(itemList.children[0]);
        }

        e.stopPropagation();
    });

    return [
        projectBtns,
        editBtn,
        delBtn,
    ];
}


function limitInput(e) {
    if(!(e.ctrlKey) && !(["Backspace", "Enter"].includes(e.key))
            && e.target.textContent.length >= 20) {
        e.preventDefault();
    }
}


class ProjectRenamer {
    constructor(projectNameEl) {
        this.projectNameEl = projectNameEl;
        this.exitRenameCallback = this.exitRenaming.bind(this);
        this.projectNameEl.addEventListener("blur", this.exitRenameCallback, {once: true});

        this.oldName = this.projectNameEl.textContent;
    }

    handleEvent(e) {
        limitInput(e);
        if(e.key === "Escape") {
            this.exitRenaming();
            return;
        }

        if(e.key === "Enter") {
            e.target.removeEventListener("blur", this.exitRenameCallback);
            e.target.removeEventListener("keydown", this);
            this.projectNameEl.removeAttribute("contenteditable");
            _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.renameProject(this.oldName, e.target.textContent);

            _todo_ui_js__WEBPACK_IMPORTED_MODULE_2__.toDoUI.updateToDoProjectTitle();
        }
    }

    exitRenaming() {
        this.projectNameEl.removeEventListener("keydown", this);
        this.projectNameEl.textContent = this.oldName;
        this.projectNameEl.removeAttribute("contenteditable");
    }
}


function addProjectItem(e) {
    limitInput(e);
    if(e.key === "Escape") {
        e.target.removeAttribute("contenteditable");
        return;
    }

    if(e.key === "Enter") {
        e.target.removeEventListener("keydown", addProjectItem);
        e.target.removeEventListener("blur", cancelNameAddBox);
        e.target.removeAttribute("contenteditable");
        e.target.parentElement.style.backgroundColor = "";
        let projectToAdd = new _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.Project(this.textContent);
        _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.addProject(projectToAdd);

        let totalProjects = _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.getAllProjects().length;
        if(totalProjects === 1) {
            setActiveProjectDirect(this.parentElement);
        }
    } 
}


function cancelNameAddBox(e) {
    let menuList = e.target.parentElement.parentElement;
    let menuListItem = e.target.parentElement;
    menuList.removeChild(menuListItem);
}


function initProjectItem() {
    let projectItem = new _misc_util_js__WEBPACK_IMPORTED_MODULE_1__.DOMTree(menuItemList.getRootElement(), {
        name: "li",
        classes: ["projectItem"],
        listener: ["click", setActiveProject],
    });
    projectItem.getRootElement().style.backgroundColor = "#d8d8d8";
    projectItem.addChild(getProjectIcon());

    let projectNameAddBox = document.createElement("span");
    projectNameAddBox.classList.add("projectItemText");
    projectNameAddBox.setAttribute("contenteditable", "true");
    projectNameAddBox.setAttribute("spellcheck", "false");
    projectNameAddBox.addEventListener("keydown", addProjectItem);
    projectNameAddBox.addEventListener("blur", cancelNameAddBox);
    projectItem.addChild(projectNameAddBox);
    projectItem.addChild(getProjectBtns()[0]);

    projectNameAddBox.focus();
}

function setActiveProjectDirect(targetElement) {
    setActiveProject.call(targetElement);
}

function setActiveProject(e) {
    let projectName = this.getElementsByClassName("projectItemText")[0];
    let projectItemList = this.parentElement.parentElement;

    let activeItem = projectItemList.getElementsByClassName("activeProjectItem")[0];
    if(activeItem) {
        let activeIcons = activeItem.getElementsByClassName("activeProjectIcon");
        activeItem.classList.remove("activeProjectItem");
        Array.from(activeIcons).forEach(eachIcon => {
            eachIcon.classList.remove("activeProjectIcon");
        });
    }

    let projectIcon = this.getElementsByClassName("projectIcon")[0];
    let editBtn = this.getElementsByClassName("projectEditBtn")[0];
    let delBtn = this.getElementsByClassName("projectDelBtn")[0];
    projectIcon.classList.add("activeProjectIcon");
    editBtn.classList.add("activeProjectIcon");
    delBtn.classList.add("activeProjectIcon");
    this.classList.add("activeProjectItem");

    _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.activeProject = projectName.textContent;
    _todo_ui_js__WEBPACK_IMPORTED_MODULE_2__.toDoUI.loadToDoItems();
}


let projectMenu = document.createElement("div");
projectMenu.classList.add("projectMenu");

let menuHeader = new _misc_util_js__WEBPACK_IMPORTED_MODULE_1__.DOMTree(projectMenu, {
    name: "div",
    classes: ["projectMenuHeader"],
});

menuHeader.addElements([
    { 
        name: "button", 
        classes: ["projectMenuHeaderBtn"],
        content: "+",
        listener: ["click", initProjectItem],
    },
    {
        name: "div",
        classes: ["projectMenuHeaderText"],
        content: "Projects",
    }
]);

let menuSeparator = new _misc_util_js__WEBPACK_IMPORTED_MODULE_1__.DOMTree(projectMenu, {
    name: "div",
    classes: ["projectMenuSeparator"],
});

let menuItemList = new _misc_util_js__WEBPACK_IMPORTED_MODULE_1__.DOMTree(projectMenu, {
    name: "ul",
    classes: ["projectMenuList"],
});


let allProjects = _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.getAllProjects();
allProjects.forEach(eachProject => {
    let activeProjectPresence;
    let activeProject = _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.activeProject
    if(activeProject && activeProject.name === eachProject.name) {
        activeProjectPresence = true;
    } else {
        activeProjectPresence = false;
    }

    let menuItemClasses = ["projectItem"];
    if(activeProjectPresence) {
        menuItemClasses.push("activeProjectItem");
    }
    let menuItem = new _misc_util_js__WEBPACK_IMPORTED_MODULE_1__.DOMTree(menuItemList.getRootElement(), {
        name: "li",
        classes: menuItemClasses,
        listener: ["click", setActiveProject],
    });

    let projectIcon = getProjectIcon();
    if(activeProjectPresence) {
        projectIcon.classList.add("activeProjectIcon");
    }
    menuItem.addChild(projectIcon);

    menuItem.addElements([
        {
            name: "span",
            classes: ["projectItemText"],
            content: eachProject.name,
        }
    ]);

    let [projectBtns, editBtn, delBtn] = getProjectBtns();
    if(activeProjectPresence) {
        editBtn.classList.add("activeProjectIcon");
        delBtn.classList.add("activeProjectIcon");
    }
    menuItem.addChild(projectBtns);
});


let hamburgerBtn = document.getElementById("hamburger");
let openIcon = document.getElementById("openIcon");
let closeIcon = document.getElementById("closeIcon");

hamburgerBtn.addEventListener("click", e => {
    if(projectMenu.classList.contains("showProjectMenu")) {
        openIcon.style.display = "inline";
        closeIcon.style.display = "none";
    } else {
        openIcon.style.display = "none";
        closeIcon.style.display = "inline";
    }
    projectMenu.classList.toggle("showProjectMenu");
});

document.body.appendChild(projectMenu);

/***/ }),

/***/ "./src/ui/todo-ui.js":
/*!***************************!*\
  !*** ./src/ui/todo-ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toDoUI: () => (/* binding */ toDoUI)
/* harmony export */ });
/* harmony import */ var _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todos/todo.js */ "./src/todos/todo.js");
/* harmony import */ var _crud_todo_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crud/todo-crud.js */ "./src/crud/todo-crud.js");
/* harmony import */ var _misc_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc/util.js */ "./src/misc/util.js");





function addStrikedOutClasses(toDoEl) {
        toDoEl.classList.toggle("finishedToDo");
        let toDoTop = toDoEl.children[0];
        toDoTop.classList.toggle("strikedOutTitle");

        let descr = toDoEl.getElementsByClassName("toDoDescription")[0];
        descr.classList.toggle("strikedOutDescription");

        let date = toDoEl.getElementsByClassName("dueDate")[0];
        date.classList.toggle("strikedOutDate");
}


function markToDoAsFinished(e) {
        let toDoTop = e.target.parentElement.parentElement;
        let toDoEl = toDoTop.parentElement;
        addStrikedOutClasses(toDoEl);

        let toDoID = +toDoEl.dataset.id;
        let todo = ToDoUI.activeProject.toggleFinish(toDoID);
}


function toggleCollapseExpand(e) {
    this.classList.toggle("collapseBtnRotate");
    let currentToDo = this.parentElement.parentElement.parentElement;
    let moreInfo = currentToDo.children[1];
    moreInfo.classList.toggle("toDoExpand");
}


function displayToDo(todo) {
    let toDoRow = toDoUI.itemTemplate.content.cloneNode(true);

    let toDoRowEl = toDoRow.querySelector(".toDoRow");
    toDoRowEl.dataset.id = todo.toDoID;

    let toDoCheckBtn = toDoRowEl.getElementsByClassName("toDoCheckbox")[0];
    toDoCheckBtn.addEventListener("click", markToDoAsFinished);

    if(todo.finished) {
        toDoCheckBtn.setAttribute("checked", "true");
        addStrikedOutClasses(toDoRowEl);
    }

    let toDoTitle = toDoRowEl.getElementsByClassName("toDoTitle")[0];
    toDoTitle.textContent = todo.title;

    let moreInfo = toDoRowEl.getElementsByClassName("toDoMoreInfo")[0];
    let toDoDescription = moreInfo.getElementsByClassName("toDoDescription")[0];
    let toDoDate = moreInfo.getElementsByClassName("toDoDate")[0];
    toDoDescription.textContent = todo.description;
    toDoDate.addEventListener("input", _crud_todo_crud_js__WEBPACK_IMPORTED_MODULE_1__.editToDoDate);
    toDoDate.setAttribute("value", todo.dueDate);

    let titleEditor = toDoRowEl.getElementsByClassName("titleEditBtn")[0];
    titleEditor.addEventListener("click", _crud_todo_crud_js__WEBPACK_IMPORTED_MODULE_1__.makeTitleEditable);

    let priorityEditor = toDoRowEl.getElementsByClassName("toDoIcon")[1];
    priorityEditor.addEventListener("click", _crud_todo_crud_js__WEBPACK_IMPORTED_MODULE_1__.editToDoPriority);
    priorityEditor.classList.add(todo.priority + "Priority");
    let priorityHoverText = priorityEditor.getElementsByTagName("title")[0];
    priorityHoverText.textContent = todo.priority + " priority";

    let deleteBtn = toDoRowEl.getElementsByClassName("deleteBtn")[0];
    deleteBtn.addEventListener("click", _crud_todo_crud_js__WEBPACK_IMPORTED_MODULE_1__.deleteToDo);

    let descrEditor = toDoRowEl.getElementsByClassName("descriptionEditBtn")[0];
    descrEditor.addEventListener("click", _crud_todo_crud_js__WEBPACK_IMPORTED_MODULE_1__.makeDescriptionEditable);

    let collapseBtn = toDoRowEl.getElementsByClassName("collapseBtn")[0];
    collapseBtn.addEventListener("click", toggleCollapseExpand);
    toDoUI.container.appendChild(toDoRow);

    let separator = new _misc_util_js__WEBPACK_IMPORTED_MODULE_2__.DOMTree(toDoUI.container, {
        name: "div",
        classes: ["toDoSeparator"],
    });
}


class ToDoUI {
    static activeProject;

    constructor(tracker) {
        this.projectTracker = tracker;
        this.projectTitleEl = document.getElementById("projectTitle");
        this.#initContainer();
    }

    #initContainer() {
        this.container = document.getElementById("toDoDisplay");
        this.itemTemplate = document.getElementById("toDoRowTemplate");
    }

    updateToDoProjectTitle() {
        let projectTitleTextEl = document.getElementById("projectTitleText");
        if(ToDoUI.activeProject === undefined) {
            this.projectTitleEl.style.display = "none";
            return;
        } 

        if(this.projectTitleEl.style.getPropertyValue("display"))  {
            this.projectTitleEl.style.removeProperty("display");
        }
        projectTitleTextEl.textContent = ToDoUI.activeProject.name;
    }

    loadToDoItems() {
        this.container.textContent = "";

        ToDoUI.activeProject = this.projectTracker.activeProject;
        this.updateToDoProjectTitle();
        if(ToDoUI.activeProject === undefined) {
            return;
        }

        let allToDos = ToDoUI.activeProject.getAllToDos();
        allToDos.forEach(displayToDo);
    }
}


class Dialog {
    constructor() {
        this.dialogContainer = document.getElementById("toDoAdderDialog");
        this.#registerOpenBtn();
        this.#registerCloseBtn();
        this.#registerSubmitBtn();
    }

    #checkActiveProjectPresence() {
        return ToDoUI.activeProject != undefined;
    }

    #registerOpenBtn() {
        let addToDoBtn = document.getElementById("addToDoBtn");
        addToDoBtn.addEventListener("click", e => {
            if(!this.#checkActiveProjectPresence()) {
                return;
            }

            this.#cleanUpLeftoverInput();
            this.dialogContainer.showModal();
        });
    }

    #cleanUpLeftoverInput() {
        let allInputs = Array.from(this.dialogContainer.querySelectorAll("input"));
        let textAreaInput = this.dialogContainer.querySelector("textarea");
        allInputs.push(textAreaInput);
        allInputs.forEach(eachInput => {
            eachInput.value = "";
        });
    }
    
    #registerCloseBtn() {
        let dialogCloseBtn = document.getElementById("dialogCloseBtn");
        dialogCloseBtn.addEventListener("click", e => {
            e.preventDefault();
            this.dialogContainer.close();
        });
    }

    #registerSubmitBtn() {
        let submitToDoBtn = document.getElementById("toDoSubmitInput");
        submitToDoBtn.addEventListener("click", e => {
            e.preventDefault();

            let toDoInputs = document.getElementsByClassName("toDoInput");
            let toDoArgs = Array.from(toDoInputs).map(eachInput => {
                return eachInput.value;
            });

            let toDoToAdd = new _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(...toDoArgs);
            try {
                ToDoUI.activeProject.addToDo(toDoToAdd);
            } catch(e) {
                if(e.message == "Don't try to add a duplicate todo") {
                    this.dialogContainer.close();
                    return;
                }
            }

            displayToDo(toDoToAdd);
            this.dialogContainer.close();
        });
    }
}


let toDoUI = new ToDoUI(_todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker);
let dialog = new Dialog();

toDoUI.loadToDoItems();




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
/* harmony import */ var _ui_todo_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/todo-ui.js */ "./src/ui/todo-ui.js");
/* harmony import */ var _ui_project_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/project-ui.js */ "./src/ui/project-ui.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGlFQUFrQjtBQUMvQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsWUFBWSw0REFBVTtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDREQUFVO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDREQUFVO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekMwQjs7O0FBRzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YscURBQXFELFlBQVk7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0RBQVE7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIsZ0NBQWdDLGdEQUFJO0FBQ3BDO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBLHdCQUF3QiwwREFBYztBQUN0Qzs7QUFFQTs7QUFJRTs7Ozs7OztVQ2pORjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS9zdHlsZS5jc3M/NzZmNyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NydWQvdG9kby1jcnVkLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2RhdGVzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZXJyb3JzL2Vycm9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21pc2MvdXRpbC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2Rvcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpL3Byb2plY3QtdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWkvdG9kby11aS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnByb2plY3RNZW51ICB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiA5OTtcbiAgICB3aWR0aDogMjAlO1xuXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JjYmNiYztcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDdweCAycHggcmdiYSgwLCAwLCAwLCAwLjEwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2hvd1Byb2plY3RNZW51IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5wcm9qZWN0TWVudUhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcblxuICAgIHBhZGRpbmc6IDAgMCAwLjZyZW0gMC40cmVtO1xufVxuXG4ucHJvamVjdE1lbnVIZWFkZXJUZXh0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnByb2plY3RNZW51SGVhZGVyQnRuIHtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0TWVudVNlcGFyYXRvciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5wcm9qZWN0TWVudUxpc3Qge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnByb2plY3RJdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDAuNHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0SXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbn1cblxuLnByb2plY3RJY29uIHtcbiAgICB3aWR0aDogMS44cmVtO1xuICAgIGZpbGw6ICM1YzVjZmY7XG59XG5cbi5wcm9qZWN0SXRlbVRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtOyAgICBcbiAgICBmbGV4LWJhc2lzOiAyNSU7XG59XG5cbi5wcm9qZWN0SXRlbVRleHRbY29udGVudGVkaXRhYmxlPXRydWVdOmZvY3VzLXZpc2libGUge1xuICAgIHdpZHRoOiAyMGNoO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xufVxuXG4ucHJvamVjdEJ0bnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ucHJvamVjdEVkaXRCdG4ge1xuICAgIHdpZHRoOiAxLjhyZW07XG4gICAgZmlsbDogIzVjNWNmZjtcbn1cblxuLnByb2plY3REZWxCdG4ge1xuICAgIHdpZHRoOiAxLjhyZW07XG4gICAgZmlsbDogI2RmNTc1Nztcbn1cblxuLmFjdGl2ZVByb2plY3RJdGVtLCAuYWN0aXZlUHJvamVjdEl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NDg0ZmY7XG59XG5cbi5hY3RpdmVQcm9qZWN0SWNvbiB7XG4gICAgZmlsbDogI2ZmZjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTs7SUFFViwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwrQ0FBK0M7SUFDL0Msc0JBQXNCOztJQUV0Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7O0lBRVosNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7O0lBRVQsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0I7O0lBRWhCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2plY3RNZW51ICB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICB3aWR0aDogMjAlO1xcblxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmNiY2JjO1xcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDVweCAwcHggN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2hvd1Byb2plY3RNZW51IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG5cXG4ucHJvamVjdE1lbnVIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIHBhZGRpbmc6IDAgMCAwLjZyZW0gMC40cmVtO1xcbn1cXG5cXG4ucHJvamVjdE1lbnVIZWFkZXJUZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5wcm9qZWN0TWVudUhlYWRlckJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0TWVudVNlcGFyYXRvciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWZhZmFmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5wcm9qZWN0TWVudUxpc3Qge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDAuNHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2O1xcbn1cXG5cXG4ucHJvamVjdEljb24ge1xcbiAgICB3aWR0aDogMS44cmVtO1xcbiAgICBmaWxsOiAjNWM1Y2ZmO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW1UZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07ICAgIFxcbiAgICBmbGV4LWJhc2lzOiAyNSU7XFxufVxcblxcbi5wcm9qZWN0SXRlbVRleHRbY29udGVudGVkaXRhYmxlPXRydWVdOmZvY3VzLXZpc2libGUge1xcbiAgICB3aWR0aDogMjBjaDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICMwMDA7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnByb2plY3RCdG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdEVkaXRCdG4ge1xcbiAgICB3aWR0aDogMS44cmVtO1xcbiAgICBmaWxsOiAjNWM1Y2ZmO1xcbn1cXG5cXG4ucHJvamVjdERlbEJ0biB7XFxuICAgIHdpZHRoOiAxLjhyZW07XFxuICAgIGZpbGw6ICNkZjU3NTc7XFxufVxcblxcbi5hY3RpdmVQcm9qZWN0SXRlbSwgLmFjdGl2ZVByb2plY3RJdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0ODRmZjtcXG59XFxuXFxuLmFjdGl2ZVByb2plY3RJY29uIHtcXG4gICAgZmlsbDogI2ZmZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RUcmFja2VyIH0gZnJvbSBcIi4uL3RvZG9zL3RvZG8uanNcIjtcblxuXG5mdW5jdGlvbiBtYWtlQ29udGVudEVkaXRhYmxlKGUsIGVsZW1lbnRUb0VkaXQsIHRvRG9JRCwgdG9Eb1Byb3AsIG1heFRleHRMZW4pIHtcbiAgICBsZXQgdW5lZGl0ZWRDb250ZW50ID0gZWxlbWVudFRvRWRpdC50ZXh0Q29udGVudDtcbiAgICBlbGVtZW50VG9FZGl0LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG5cbiAgICBlbGVtZW50VG9FZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGUgPT4ge1xuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IHVuZWRpdGVkQ29udGVudDtcbiAgICAgICAgZS50YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpO1xuICAgIH0pO1xuICAgIGVsZW1lbnRUb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgICAgIGlmKCghZS5jdHJsS2V5KSAmJiAoIVtcIkVudGVyXCIsIFwiRXNjYXBlXCIsIFwiQmFja3NwYWNlXCJdLmluY2x1ZGVzKGUua2V5KSkgXG4gICAgICAgICAgICAmJiBlLnRhcmdldC50ZXh0Q29udGVudC5sZW5ndGggPj0gbWF4VGV4dExlbikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgbGV0IHRvRG9Ub0VkaXQgPSBwcm9qZWN0VHJhY2tlci5hY3RpdmVQcm9qZWN0LmdldFRvRG8odG9Eb0lEKTtcbiAgICAgICAgICAgIHRvRG9Ub0VkaXRbdG9Eb1Byb3BdID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBlLnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gdW5lZGl0ZWRDb250ZW50O1xuICAgICAgICAgICAgZS50YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBlbGVtZW50VG9FZGl0LmZvY3VzKCk7XG59XG5cblxuZnVuY3Rpb24gbWFrZVRpdGxlRWRpdGFibGUoZSkge1xuICAgIGxldCB0b0RvVG9wUm93ID0gdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHRvRG9UaXRsZSA9IHRvRG9Ub3BSb3cuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV07XG4gICAgbGV0IHRvRG9JRCA9ICt0b0RvVG9wUm93LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZDtcblxuICAgIG1ha2VDb250ZW50RWRpdGFibGUoZSwgdG9Eb1RpdGxlLCB0b0RvSUQsIFwidGl0bGVcIiwgMzApO1xufVxuXG5mdW5jdGlvbiBtYWtlRGVzY3JpcHRpb25FZGl0YWJsZShlKSB7XG4gICAgbGV0IHRvRG9EZXNjcmlwdGlvbiA9IHRoaXMucGFyZW50RWxlbWVudC5jaGlsZHJlblswXVxuICAgIGxldCB0b0RvID0gdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgIGxldCB0b0RvSUQgPSArdG9Eby5kYXRhc2V0LmlkO1xuXG4gICAgbWFrZUNvbnRlbnRFZGl0YWJsZShlLCB0b0RvRGVzY3JpcHRpb24sIHRvRG9JRCwgXCJkZXNjcmlwdGlvblwiLCAxMDApO1xufVxuXG5mdW5jdGlvbiBnZXRUb0RvVG9FZGl0KGVsZW1lbnQpIHtcbiAgICBsZXQgY3VycmVudFRvRG9FbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRUb0RvRWwgPSBjdXJyZW50VG9Eb0VsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGxldCB0b0RvSUQgPSArY3VycmVudFRvRG9FbC5kYXRhc2V0LmlkO1xuICAgIHJldHVybiBwcm9qZWN0VHJhY2tlci5hY3RpdmVQcm9qZWN0LmdldFRvRG8odG9Eb0lEKTtcbn1cblxuXG5mdW5jdGlvbiBlZGl0VG9Eb0RhdGUoZSkge1xuICAgIGxldCB0b0RvVG9FZGl0ID0gZ2V0VG9Eb1RvRWRpdCh0aGlzKTtcbiAgICB0b0RvVG9FZGl0LmR1ZURhdGUgPSBlLnRhcmdldC52YWx1ZTtcbn1cblxuXG5mdW5jdGlvbiBlZGl0VG9Eb1ByaW9yaXR5KGUpIHtcbiAgICBsZXQgdG9Eb1RvRWRpdCA9IGdldFRvRG9Ub0VkaXQodGhpcyk7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKHRvRG9Ub0VkaXQucHJpb3JpdHkgKyBcIlByaW9yaXR5XCIpO1xuICAgIHRvRG9Ub0VkaXQucm90YXRlUHJpb3JpdHkoKTtcblxuICAgIGxldCBuZXdDbGFzc05hbWUgPSB0b0RvVG9FZGl0LnByaW9yaXR5ICsgXCJQcmlvcml0eVwiO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChuZXdDbGFzc05hbWUpO1xuICAgIGxldCBob3ZlclRleHQgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIilbMF07XG4gICAgaG92ZXJUZXh0LnRleHRDb250ZW50ID0gdG9Eb1RvRWRpdC5wcmlvcml0eSArIFwiIHByaW9yaXR5XCI7XG59XG5cblxuZnVuY3Rpb24gZGVsZXRlVG9EbyhlKSB7XG4gICAgbGV0IHRvRG9Ub0VkaXQgPSBnZXRUb0RvVG9FZGl0KHRoaXMpO1xuICAgIHByb2plY3RUcmFja2VyLmFjdGl2ZVByb2plY3QucmVtb3ZlVG9Ebyh0b0RvVG9FZGl0LnRvRG9JRCk7XG5cbiAgICBsZXQgY3VycmVudFRvRG9FbCA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRUb0RvRWwgPSBjdXJyZW50VG9Eb0VsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIFxuICAgIGxldCBzZXBhcmF0b3JUb1JlbW92ZSA9IGN1cnJlbnRUb0RvRWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGN1cnJlbnRUb0RvRWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzZXBhcmF0b3JUb1JlbW92ZSk7XG4gICAgY3VycmVudFRvRG9FbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGN1cnJlbnRUb0RvRWwpO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgbWFrZVRpdGxlRWRpdGFibGUsXG4gICAgbWFrZURlc2NyaXB0aW9uRWRpdGFibGUsXG4gICAgZWRpdFRvRG9Qcmlvcml0eSxcbiAgICBlZGl0VG9Eb0RhdGUsXG4gICAgZGVsZXRlVG9Ebyxcbn07IiwiaW1wb3J0IHsgaXNEaXJlY3RJbnN0YW5jZU9mLCBnZXRQcm90b3R5cGV9IGZyb20gXCIuLi9taXNjL3V0aWwuanNcIjtcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLmpzXCI7XG5cbmNsYXNzIFRvRG9EYXRlIHtcbiAgICAjZGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGVTdHIpIHtcbiAgICAgICAgbGV0IGRhdGVBcmdzID0gVG9Eb0RhdGUuY29udmVydFRvRGF0ZUFyZ3MoZGF0ZVN0cik7XG4gICAgICAgIHRoaXMuI2RhdGUgPSBuZXcgRGF0ZSguLi5kYXRlQXJncyk7XG4gICAgfVxuXG4gICAgZ2V0RGF0ZVN0cigpIHtcbiAgICAgICAgbGV0IHllYXIgPSB0aGlzLiNkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCBtb250aCA9ICh0aGlzLiNkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICBsZXQgZGF5ID0gKHRoaXMuI2RhdGUuZ2V0RGF0ZSgpKS50b1N0cmluZygpO1xuXG4gICAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRoLnBhZFN0YXJ0KDIsIFwiMFwiKX0tJHtkYXkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnZlcnRUb0RhdGVBcmdzKGRhdGVTdHIpIHtcbiAgICAgICAgLyogdGhpcyB0cmFuc2Zvcm1zIGRhdGVTdHIgaW50byBhbiBhcnJheSBjb21wYXRpYmxlXG4gICAgICAgICAqIGZvciBhcmd1bWVudHMgaW4gRGF0ZSBjb25zdHJ1Y3RvciAod2l0aCBzcHJlYWQgc3ludGF4KVxuICAgICAgICAgKiBmb3IgZXhhbXBsZSwgXCIyMDIxLTEtMThcIiBiZWNvbWVzIFsyMDIxLCAxLCAxOF1cbiAgICAgICAgICovXG4gICAgICAgIGxldCBkYXRlQXJyID0gY29udmVydFRvRGF0ZUFycihkYXRlU3RyKTtcbiAgICAgICAgZGF0ZUFyclsxXS0tOyAvKiBtb250aHMgc3RhcnQgZnJvbSAwIChub3QgMSkgKi9cbiAgICAgICAgcmV0dXJuIGRhdGVBcnI7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0RhdGVBcnIoZGF0ZVN0cikge1xuICAgIC8qIGNvbnZlcnQgZGF0ZSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBudW1iZXJzLlxuICAgICAqIFwiMjAyMS0xLTE4XCIgYmVjb21lcyBbMjAyMSwgMSwgMThdO1xuICAgICAqL1xuICAgIGxldCBkYXRlQXJyID0gZGF0ZVN0ci5zcGxpdChcIi1cIik7XG4gICAgcmV0dXJuIGRhdGVBcnIubWFwKE51bWJlcik7XG59XG5cblxuY2xhc3MgRGF0ZVZhbGlkYXRvciB7XG4gICAgI2RhdGVBcnI7IFxuXG4gICAgY29uc3RydWN0b3IoZGF0ZVN0cikge1xuICAgICAgICB0aGlzLiNkYXRlQXJyID0gY29udmVydFRvRGF0ZUFycihkYXRlU3RyKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgaWYgKCFpc0RpcmVjdEluc3RhbmNlT2YodGhpcy4jZGF0ZUFyciwgQXJyYXkpIHx8IHRoaXMuI2RhdGVBcnIubGVuZ3RoICE9IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZkFsbE51bWJlcnMgPSB0aGlzLiNkYXRlQXJyLmV2ZXJ5KGVhY2hOdW0gPT4gIWlzTmFOKGVhY2hOdW0pKTtcblxuICAgICAgICBpZiAoIWlmQWxsTnVtYmVycykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihcIm51bWJlclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb250aCA9IHRoaXMuI2RhdGVBcnJbMV07XG4gICAgICAgIGxldCBkYXkgPSB0aGlzLiNkYXRlQXJyWzJdO1xuXG4gICAgICAgIGxldCBpZlZhbGlkRGF5ID0gZGF5ID49IDEgJiYgZGF5IDw9IERhdGVWYWxpZGF0b3IuZ2V0RGF5c0luQU1vbnRoKGRheSk7XG4gICAgICAgIGlmKCFpZlZhbGlkRGF5KSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwiZGF5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlmVmFsaWRNb250aCA9IG1vbnRoID49IDEgJiYgbW9udGggPD0gMTI7XG4gICAgICAgIGlmKCFpZlZhbGlkTW9udGgpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoXCJtb250aFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXREYXlzSW5BTW9udGgobW9udGgpIHtcbiAgICAgICAgbGV0IG1vbnRoc1dpdGgzMERheXMgPSBbNCwgNiwgNywgOSwgMTFdO1xuICAgICAgICBpZiAobW9udGhzV2l0aDMwRGF5cy5pbmNsdWRlcyhtb250aCkpIHtcbiAgICAgICAgICAgIHJldHVybiAzMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMzE7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFRvRG9EYXRlLFxuICAgIERhdGVWYWxpZGF0b3IsXG59OyIsImZ1bmN0aW9uIHRocm93RXJyb3IoZXJyb3JUeXBlKSB7XG4gICAgbGV0IGVycm9ycyA9IHtcbiAgICAgICAgbnVtYmVyOiBuZXcgTnVtYmVyRXJyb3IoKSxcbiAgICAgICAgZGF5OiBuZXcgRGF5RXJyb3IoKSxcbiAgICAgICAgbW9udGg6IG5ldyBNb250aEVycm9yKCksXG4gICAgfTtcblxuICAgIGxldCBlcnJvclRvVGhyb3cgPSBlcnJvcnNbZXJyb3JUeXBlXTtcbiAgICBlcnJvclRvVGhyb3cudGhyb3coKTtcbn1cblxuXG5jbGFzcyBOdW1iZXJFcnJvciB7XG4gICAgY29uc3RydWN0b3IoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGlmKGVycm9yTWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiaXQgbXVzdCBiZSBhIHZhbGlkIG51bWJlclwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuICAgIH1cblxuICAgIHRocm93KCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHRoaXMuZXJyb3JNZXNzYWdlKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRGF5RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGVycm9yTWVzc2FnZSkge1xuICAgICAgICBpZihlcnJvck1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIkRheSBzaG91bGQgYmUgaW4gYSByYW5nZSBmcm9tIDEgdG8gMzFcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZTtcbiAgICB9XG5cbiAgICB0aHJvdygpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IodGhpcy5lcnJvck1lc3NhZ2UpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBNb250aEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgaWYoZXJyb3JNZXNzYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJNb250aCBzaG91bGQgYmUgaW4gYSByYW5nZSBmcm9tIDEgdG8gMTJcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZTtcbiAgICB9XG5cbiAgICB0aHJvdygpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IodGhpcy5lcnJvck1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICB0aHJvd0Vycm9yLFxufTsiLCJmdW5jdGlvbiBpc0RpcmVjdEluc3RhbmNlT2YoaW5zdGFuY2UsIGNvbnN0cnVjdG9yKSB7XG4gICAgbGV0IGluc3RhbmNlUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlKTtcbiAgICByZXR1cm4gaW5zdGFuY2VQcm90b3R5cGUgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvdG90eXBlKG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbn1cblxuY2xhc3MgRE9NVHJlZSB7XG4gICAgI3Jvb3RFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50LCByb290RWxlbWVudCkge1xuICAgICAgICB0aGlzLiNyb290RWxlbWVudCA9IHRoaXMuaW5pdEVsZW1lbnQocm9vdEVsZW1lbnQpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4jcm9vdEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGFkZEVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWFjaEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmluaXRFbGVtZW50KGVhY2hFbGVtZW50KVxuICAgICAgICAgICAgdGhpcy4jcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRFbGVtZW50KGVsZW1lbnRPYmopIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRPYmoubmFtZSk7XG4gICAgICAgIGZvcihsZXQgZWFjaENsYXNzIG9mIGVsZW1lbnRPYmouY2xhc3Nlcykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVhY2hDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRPYmouY29udGVudDtcbiAgICAgICAgaWYoXCJsaXN0ZW5lclwiIGluIGVsZW1lbnRPYmopIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciguLi5lbGVtZW50T2JqLmxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXRSb290RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Jvb3RFbGVtZW50O1xuICAgIH1cblxuICAgIGFkZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuI3Jvb3RFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCB7XG4gICAgaXNEaXJlY3RJbnN0YW5jZU9mLFxuICAgIGdldFByb3RvdHlwZSxcbiAgICBET01UcmVlLFxufTsiLCJpbXBvcnQge1xuICAgIFRvRG9EYXRlLCBcbiAgICBEYXRlVmFsaWRhdG9yLFxufSBmcm9tIFwiLi4vZGF0ZXMvZGF0ZS5qc1wiO1xuXG5cbmNsYXNzIFByb2plY3RUcmFja2VyIHtcbiAgICAjYWxsUHJvamVjdHM7XG4gICAgI2N1cnJlbnRQcm9qZWN0O1xuXG4gICAgY29uc3RydWN0b3IoYWxsUHJvamVjdHMgPSBbXSkge1xuICAgICAgICB0aGlzLiNhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzO1xuICAgIH1cblxuICAgIGdldEFsbFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jYWxsUHJvamVjdHM7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGlmKHRoaXMuaXNEdXBsaWNhdGVQcm9qZWN0KHByb2plY3QpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgVG9Eb1NhdmVyLnNhdmVQcm9qZWN0KHByb2plY3QpO1xuXG4gICAgICAgIGlmKHRoaXMuI2FsbFByb2plY3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVQcm9qZWN0XCIsIHByb2plY3QubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5hbWVQcm9qZWN0KGN1cnJlbnROYW1lLCBuZXdOYW1lKSB7XG4gICAgICAgIGxldCBwcm9qID0gdGhpcy4jYWxsUHJvamVjdHMuZmluZChlYWNoUHJvamVjdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWFjaFByb2plY3QubmFtZSA9PT0gY3VycmVudE5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihwcm9qKSB7XG4gICAgICAgICAgICBpZih0aGlzLmFjdGl2ZVByb2plY3QgJiYgdGhpcy5hY3RpdmVQcm9qZWN0Lm5hbWUgPT09IGN1cnJlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVQcm9qZWN0XCIsIG5ld05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvai5uYW1lID0gbmV3TmFtZTtcbiAgICAgICAgICAgIHByb2ouZ2V0QWxsVG9Eb3MoKS5mb3JFYWNoKGVhY2hUb0RvID0+IHtcbiAgICAgICAgICAgICAgICBlYWNoVG9Eby5wYXJlbnRQcm9qZWN0TmFtZSA9ICBwcm9qLm5hbWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHByb2pTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudE5hbWUpO1xuICAgICAgICAgICAgbGV0IHByb2pJbmZvID0gSlNPTi5wYXJzZShwcm9qU3RvcmFnZSk7XG4gICAgICAgICAgICBwcm9qSW5mby5uYW1lID0gbmV3TmFtZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld05hbWUsIEpTT04uc3RyaW5naWZ5KHByb2pJbmZvKSk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGN1cnJlbnROYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgcmVuYW1lIFByb2plY3QgJyR7Y3VycmVudE5hbWV9JyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc2luY2UgaXQgZG9lc24ndCBleGlzdGApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBsZXQgaWR4MkRlbGV0ZSA9IHRoaXMuI2FsbFByb2plY3RzLmZpbmRJbmRleChlYWNoUHJvamVjdCA9PiBcbiAgICAgICAgICAgIGVhY2hQcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuI2FsbFByb2plY3RzLnNwbGljZShpZHgyRGVsZXRlLCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdE5hbWUpO1xuXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlUHJvamVjdCAmJiBwcm9qZWN0TmFtZSA9PT0gdGhpcy5hY3RpdmVQcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuI2FsbFByb2plY3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gdGhpcy4jYWxsUHJvamVjdHNbMF07XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVQcm9qZWN0XCIsIHRoaXMuI2N1cnJlbnRQcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjdGl2ZVByb2plY3RcIiwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgYWN0aXZlUHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0O1xuICAgIH1cblxuICAgIHNldCBhY3RpdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGlmKHByb2plY3ROYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVQcm9qZWN0XCIsIHByb2plY3ROYW1lKTtcbiAgICAgICAgZm9yKGxldCBlYWNoUHJvamVjdCBvZiB0aGlzLiNhbGxQcm9qZWN0cykge1xuICAgICAgICAgICAgaWYoZWFjaFByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdCA9IGVhY2hQcm9qZWN0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNEdXBsaWNhdGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2FsbFByb2plY3RzLnNvbWUoZWFjaFByb2plY3QgPT4gXG4gICAgICAgICAgICBlYWNoUHJvamVjdC5uYW1lID09PSBwcm9qZWN0Lm5hbWVcbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSA9IFwiZGVmYXVsdFwiLCB0b0RvQXJyID0gW10pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50b0RvQXJyID0gdG9Eb0FycjtcbiAgICB9XG5cbiAgICBhZGRUb0RvKHRvRG8pIHtcbiAgICAgICAgaWYodGhpcy5pc0R1cGxpY2F0ZVRvRG8odG9EbykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvbid0IHRyeSB0byBhZGQgYSBkdXBsaWNhdGUgdG9kb1wiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvRG9BcnIucHVzaCh0b0RvKTtcblxuICAgICAgICBsZXQgdG9Eb1NhdmVyID0gbmV3IFRvRG9TYXZlcih0b0RvLCB0aGlzLm5hbWUpO1xuICAgICAgICB0b0RvU2F2ZXIuYWRkVG9EbygpO1xuICAgICAgICB0b0RvU2F2ZXIuc2F2ZSgpO1xuICAgICAgICB0b0RvLnBhcmVudFByb2plY3ROYW1lID0gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGlzRHVwbGljYXRlVG9Ebyh0b0RvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9BcnIuc29tZShlYWNoVG9EbyA9PiB7XG4gICAgICAgICAgICBsZXQgdGl0bGVFcXVhbGl0eSA9IGVhY2hUb0RvLnRpdGxlID09PSB0b0RvLnRpdGxlO1xuICAgICAgICAgICAgbGV0IGRlc2NyRXF1YWxpdHkgPSBlYWNoVG9Eby5kZXNjcmlwdGlvbiA9PT0gdG9Eby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eUVxdWFsaXR5ID0gZWFjaFRvRG8ucHJpb3JpdHkgPT09IHRvRG8ucHJpb3JpdHk7XG4gICAgICAgICAgICBsZXQgZHVlRGF0ZUVxdWFsaXR5ID0gZWFjaFRvRG8uZHVlRGF0ZSA9PT0gdG9Eby5kdWVEYXRlO1xuXG4gICAgICAgICAgICByZXR1cm4gKHRpdGxlRXF1YWxpdHkgJiYgZGVzY3JFcXVhbGl0eSAmJiBcbiAgICAgICAgICAgICAgICBwcmlvcml0eUVxdWFsaXR5ICYmIGR1ZURhdGVFcXVhbGl0eSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0VG9Ebyh0b0RvSUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0Fyci5maW5kKGVhY2hUb0RvID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlYWNoVG9Eby50b0RvSUQgPT09IHRvRG9JRDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QWxsVG9Eb3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9BcnI7XG4gICAgfVxuXG4gICAgdG9nZ2xlRmluaXNoKHRvRG9JRCkge1xuICAgICAgICBsZXQgdG9kbyA9IHRoaXMuZ2V0VG9Ebyh0b0RvSUQpO1xuICAgICAgICBpZih0b2RvLmZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0b2RvLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b0RvU2F2ZXIgPSBuZXcgVG9Eb1NhdmVyKHRvZG8sIHRoaXMubmFtZSk7XG4gICAgICAgIHRvRG9TYXZlci51cGRhdGVUb0RvKCk7XG4gICAgICAgIHRvRG9TYXZlci5zYXZlKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9Ebyh0b0RvSUQpIHtcbiAgICAgICAgbGV0IGlkeDJEZWxldGUgPSB0aGlzLnRvRG9BcnIuZmluZEluZGV4KFxuICAgICAgICAgICAgZWFjaFRvRG8gPT4gZWFjaFRvRG8udG9Eb0lEID09PSB0b0RvSURcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50b0RvQXJyLnNwbGljZShpZHgyRGVsZXRlLCAxKTtcblxuICAgICAgICBsZXQgdG9Eb1NhdmVyID0gbmV3IFRvRG9TYXZlcih7fSwgdGhpcy5uYW1lKTtcbiAgICAgICAgdG9Eb1NhdmVyLnJlbW92ZVRvRG8oaWR4MkRlbGV0ZSk7XG4gICAgICAgIHRvRG9TYXZlci5zYXZlKCk7XG4gICAgfVxufVxuXG5cbmNsYXNzIFRvRG8ge1xuICAgIHN0YXRpYyBwcmlvcml0aWVzID0gW1wibG93XCIsIFwibWVkaXVtXCIsIFwiaGlnaFwiXTtcbiAgICBzdGF0aWMgbmV4dFRvRG9JRCA9IDA7XG4gICAgI3RpdGxlO1xuICAgICNkZXNjcmlwdGlvbjtcbiAgICAjcHJpb3JpdHk7XG4gICAgI2R1ZURhdGU7XG4gICAgI2ZpbmlzaGVkXG4gICAgI3BhcmVudFByb2plY3ROYW1lO1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLnRvRG9JRCA9IFRvRG8ubmV4dFRvRG9JRCsrO1xuICAgICAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICBUb0RvLnZhbGlkYXRlRGF0ZShkdWVEYXRlKTtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IG5ldyBUb0RvRGF0ZShkdWVEYXRlKTtcbiAgICAgICAgdGhpcy4jZmluaXNoZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgcGFyZW50UHJvamVjdE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwYXJlbnRQcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBzZXQgcGFyZW50UHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy4jcGFyZW50UHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgbGV0IHRvRG9TYXZlciA9IG5ldyBUb0RvU2F2ZXIodGhpcywgdGhpcy4jcGFyZW50UHJvamVjdE5hbWUpO1xuICAgICAgICB0b0RvU2F2ZXIudXBkYXRlVG9EbyhcInRpdGxlXCIsIHZhbHVlKTtcbiAgICAgICAgdG9Eb1NhdmVyLnNhdmUoKTtcblxuICAgICAgICB0aGlzLiN0aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICBsZXQgdG9Eb1NhdmVyID0gbmV3IFRvRG9TYXZlcih0aGlzLCB0aGlzLiNwYXJlbnRQcm9qZWN0TmFtZSk7XG4gICAgICAgIHRvRG9TYXZlci51cGRhdGVUb0RvKFwiZGVzY3JpcHRpb25cIiwgdmFsdWUpO1xuICAgICAgICB0b0RvU2F2ZXIuc2F2ZSgpO1xuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3ByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgICAgICBpZighVG9Eby5wcmlvcml0aWVzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJpb3JpdHkgbXVzdCBiZSBvbmUgb2YgbG93LCBtZWRpdW0gYW5kIGhpZ2hcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvRG9TYXZlciA9IG5ldyBUb0RvU2F2ZXIodGhpcywgdGhpcy4jcGFyZW50UHJvamVjdE5hbWUpO1xuICAgICAgICB0b0RvU2F2ZXIudXBkYXRlVG9EbyhcInByaW9yaXR5XCIsIHZhbHVlKTtcbiAgICAgICAgdG9Eb1NhdmVyLnNhdmUoKTtcblxuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJvdGF0ZVByaW9yaXR5KCkge1xuICAgICAgICBsZXQgcHJpb3JpdHlJZHggPSBUb0RvLnByaW9yaXRpZXMuaW5kZXhPZih0aGlzLnByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlJZHgrK1xuICAgICAgICBpZihwcmlvcml0eUlkeCA+PSBUb0RvLnByaW9yaXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwcmlvcml0eUlkeCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IFRvRG8ucHJpb3JpdGllc1twcmlvcml0eUlkeF07XG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlLmdldERhdGVTdHIoKTtcbiAgICB9XG5cbiAgICBzZXQgZHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIFRvRG8udmFsaWRhdGVEYXRlKGR1ZURhdGUpO1xuICAgICAgICBsZXQgdG9Eb0RhdGUgPSBuZXcgVG9Eb0RhdGUoZHVlRGF0ZSk7XG5cbiAgICAgICAgbGV0IHRvRG9TYXZlciA9IG5ldyBUb0RvU2F2ZXIodGhpcywgdGhpcy4jcGFyZW50UHJvamVjdE5hbWUpO1xuICAgICAgICB0b0RvU2F2ZXIudXBkYXRlVG9EbyhcImR1ZURhdGVcIiwgdG9Eb0RhdGUuZ2V0RGF0ZVN0cigpKTtcbiAgICAgICAgdG9Eb1NhdmVyLnNhdmUoKTtcblxuICAgICAgICB0aGlzLiNkdWVEYXRlID0gdG9Eb0RhdGU7XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlRGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIGxldCBkYXRlVmFsaWRhdG9yID0gbmV3IERhdGVWYWxpZGF0b3IoZHVlRGF0ZSk7XG4gICAgICAgIHJldHVybiBkYXRlVmFsaWRhdG9yLnZhbGlkYXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGZpbmlzaGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZmluaXNoZWQ7XG4gICAgfVxuXG4gICAgc2V0IGZpbmlzaGVkKHZhbHVlKSB7XG4gICAgICAgIGxldCB0b0RvU2F2ZXIgPSBuZXcgVG9Eb1NhdmVyKHRoaXMsIHRoaXMuI3BhcmVudFByb2plY3ROYW1lKTtcbiAgICAgICAgdG9Eb1NhdmVyLnVwZGF0ZVRvRG8oXCJmaW5pc2hlZFwiLCB2YWx1ZSk7XG4gICAgICAgIHRvRG9TYXZlci5zYXZlKCk7XG5cbiAgICAgICAgdGhpcy4jZmluaXNoZWQgPSB2YWx1ZTtcbiAgICB9XG59XG5cblxuY2xhc3MgVG9Eb1NhdmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0b0RvT2JqLCBwcm9qZWN0TmFtZSkge1xuICAgICAgICB0aGlzLnRvRG9JbmZvID0ge1xuICAgICAgICAgICAgdGl0bGU6IHRvRG9PYmoudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdG9Eb09iai5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaW9yaXR5OiB0b0RvT2JqLnByaW9yaXR5LFxuICAgICAgICAgICAgZHVlRGF0ZTogdG9Eb09iai5kdWVEYXRlLFxuICAgICAgICAgICAgZmluaXNoZWQ6IHRvRG9PYmouZmluaXNoZWRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wcm9qZWN0SW5mbyA9IFRvRG9TYXZlci5nZXRQcm9qZWN0SW5mbyhwcm9qZWN0TmFtZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFByb2plY3RJbmZvKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSk7XG4gICAgfVxuXG4gICAgZ2V0VG9Eb0lkeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdEluZm8udG9Eb0Fyci5maW5kSW5kZXgoZWFjaFRvRG8gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBlYWNoVG9Eby50aXRsZSA9PT0gdGhpcy50b0RvSW5mby50aXRsZSAmJlxuICAgICAgICAgICAgICAgIGVhY2hUb0RvLmRlc2NyaXB0aW9uID09PSB0aGlzLnRvRG9JbmZvLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgICAgICAgZWFjaFRvRG8ucHJpb3JpdHkgPT09IHRoaXMudG9Eb0luZm8ucHJpb3JpdHkgJiZcbiAgICAgICAgICAgICAgICBlYWNoVG9Eby5kdWVEYXRlID09PSB0aGlzLnRvRG9JbmZvLmR1ZURhdGVcbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBhZGRUb0RvKCkge1xuICAgICAgICB0aGlzLnByb2plY3RJbmZvLnRvRG9BcnIucHVzaCh0aGlzLnRvRG9JbmZvKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb0RvKGlkeFRvUmVtb3ZlKSB7XG4gICAgICAgIHRoaXMucHJvamVjdEluZm8udG9Eb0Fyci5zcGxpY2UoaWR4VG9SZW1vdmUsIDEpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRvRG8ocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgbGV0IGlkeFRvVXBkYXRlID0gdGhpcy5nZXRUb0RvSWR4KCk7XG4gICAgICAgIHRoaXMudG9Eb0luZm9bcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0SW5mby50b0RvQXJyW2lkeFRvVXBkYXRlXSA9IHRoaXMudG9Eb0luZm87XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcm9qZWN0SW5mby5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RJbmZvKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNhdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgbGV0IHByb2plY3RJbmZvID0ge307XG4gICAgICAgIHByb2plY3RJbmZvLm5hbWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2plY3RJbmZvLnRvRG9BcnIgPSBwcm9qZWN0LnRvRG9BcnIubWFwKGVhY2hUb0RvID0+IHtcbiAgICAgICAgICAgIGxldCB0b0RvU2F2ZXIgPSBuZXcgVG9Eb1NhdmVyKGVhY2hUb0RvKTtcbiAgICAgICAgICAgIHJldHVybiB0b0RvU2F2ZXIudG9Eb0luZm87XG4gICAgICAgIH0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0SW5mby5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0SW5mbykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBsZXQgcHJvamVjdEluZm8gPSBUb0RvU2F2ZXIuZ2V0UHJvamVjdEluZm8ocHJvamVjdE5hbWUpO1xuICAgICAgICBsZXQgdG9Eb3MgPSBwcm9qZWN0SW5mby50b0RvQXJyLm1hcChlYWNoVG9EbyA9PiB7XG4gICAgICAgICAgICBsZXQgdG9EbyA9IG5ldyBUb0RvKFxuICAgICAgICAgICAgICAgIGVhY2hUb0RvLnRpdGxlLFxuICAgICAgICAgICAgICAgIGVhY2hUb0RvLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGVhY2hUb0RvLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgIGVhY2hUb0RvLmR1ZURhdGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b0RvLnBhcmVudFByb2plY3ROYW1lID0gcHJvamVjdEluZm8ubmFtZTtcbiAgICAgICAgICAgIHRvRG8uZmluaXNoZWQgPSBlYWNoVG9Eby5maW5pc2hlZFxuICAgICAgICAgICAgcmV0dXJuIHRvRG87XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb2plY3QocHJvamVjdEluZm8ubmFtZSwgdG9Eb3MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjaGVja0lmVmFsaWRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SW5mbyA9IFRvRG9TYXZlci5nZXRQcm9qZWN0SW5mbyhwcm9qZWN0TmFtZSk7XG4gICAgICAgIGxldCBvYmpQcm9wcyA9IE9iamVjdC5rZXlzKHByb2plY3RJbmZvKS5zb3J0KCk7XG4gICAgICAgIGxldCBsZW5ndGhDaGVjayA9IChvYmpQcm9wcy5sZW5ndGggPT09IDIpO1xuICAgICAgICBsZXQgcHJvcHNDaGVjayA9IChvYmpQcm9wc1swXSA9PT0gXCJuYW1lXCIgJiYgb2JqUHJvcHNbMV0gPT09IFwidG9Eb0FyclwiKTtcblxuICAgICAgICByZXR1cm4gKGxlbmd0aENoZWNrICYmIHByb3BzQ2hlY2spO1xuICAgIH1cbn1cblxuXG5sZXQgcHJvamVjdFRyYWNrZXIgPSBuZXcgUHJvamVjdFRyYWNrZXIoKTtcbmxldCBhY3RpdmVQcm9qZWN0TmFtZTtcbmZvcihsZXQgZWFjaEtleSBpbiBsb2NhbFN0b3JhZ2UpIHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoZWFjaEtleSkpIHtcbiAgICAgICAgaWYoZWFjaEtleSA9PT0gXCJhY3RpdmVQcm9qZWN0XCIpIHtcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3ROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZWFjaEtleSk7XG4gICAgICAgICAgICBpZighYWN0aXZlUHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVQcm9qZWN0TmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKCFUb0RvU2F2ZXIuY2hlY2tJZlZhbGlkUHJvamVjdChlYWNoS2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBUb0RvU2F2ZXIub3BlblByb2plY3QoZWFjaEtleSk7XG4gICAgICAgICAgICBwcm9qZWN0VHJhY2tlci5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9XG4gICAgIH1cbn1cblxuaWYoYWN0aXZlUHJvamVjdE5hbWUpIHtcbiAgICBwcm9qZWN0VHJhY2tlci5hY3RpdmVQcm9qZWN0ID0gYWN0aXZlUHJvamVjdE5hbWU7XG59IGVsc2UgaWYgKHByb2plY3RUcmFja2VyLmdldEFsbFByb2plY3RzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgcHJvamVjdFRyYWNrZXIuYWRkUHJvamVjdChuZXcgUHJvamVjdChcImRlZmF1bHRcIikpO1xufVxuXG5leHBvcnQge1xuICAgIFRvRG8sXG4gICAgUHJvamVjdCxcbiAgICBwcm9qZWN0VHJhY2tlcixcbn07IiwiaW1wb3J0IHsgcHJvamVjdFRyYWNrZXIsIFByb2plY3R9IGZyb20gXCIuLi90b2Rvcy90b2RvLmpzXCI7XG5pbXBvcnQgeyBET01UcmVlIH0gZnJvbSBcIi4uL21pc2MvdXRpbC5qc1wiO1xuaW1wb3J0IHsgdG9Eb1VJIH0gZnJvbSBcIi4vdG9kby11aS5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SWNvbigpICB7XG4gICAgbGV0IHByb2plY3RJY29uVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RJY29uVGVtcGxhdGVcIik7XG4gICAgbGV0IGljb25UZW1wbGF0ZU5vZGUgPSBwcm9qZWN0SWNvblRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIHJldHVybiBpY29uVGVtcGxhdGVOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEljb25cIik7XG59XG5cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEJ0bnMoKSB7XG4gICAgbGV0IHByb2plY3RJY29uVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RJY29uVGVtcGxhdGVcIik7XG4gICAgbGV0IGljb25UZW1wbGF0ZU5vZGUgPSBwcm9qZWN0SWNvblRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgbGV0IHByb2plY3RCdG5zID0gaWNvblRlbXBsYXRlTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RCdG5zXCIpO1xuICAgIGxldCBlZGl0QnRuID0gcHJvamVjdEJ0bnMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RFZGl0QnRuXCIpWzBdO1xuICAgIGxldCBkZWxCdG4gPSBwcm9qZWN0QnRucy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdERlbEJ0blwiKVswXTtcblxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgbGV0IHByb2plY3RJdGVtID0gdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwicHJvamVjdEl0ZW1UZXh0XCI7XG4gICAgICAgIGxldCBwcm9qZWN0SXRlbVRleHQgPSBwcm9qZWN0SXRlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XG5cbiAgICAgICAgcHJvamVjdEl0ZW1UZXh0LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcblxuICAgICAgICBsZXQgcHJvamVjdFJlbmFtZXIgPSBuZXcgUHJvamVjdFJlbmFtZXIocHJvamVjdEl0ZW1UZXh0KTtcbiAgICAgICAgcHJvamVjdEl0ZW1UZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHByb2plY3RSZW5hbWVyKTtcbiAgICAgICAgcHJvamVjdEl0ZW1UZXh0LmZvY3VzKCk7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBsZXQgcHJvamVjdEl0ZW0gPSB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IGl0ZW1UZXh0ID0gcHJvamVjdEl0ZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RJdGVtVGV4dFwiKVswXTtcbiAgICAgICAgcHJvamVjdFRyYWNrZXIucmVtb3ZlUHJvamVjdChpdGVtVGV4dC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgbGV0IGl0ZW1MaXN0ID0gcHJvamVjdEl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgaXRlbUxpc3QucmVtb3ZlQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgICAgICB0b0RvVUkubG9hZFRvRG9JdGVtcygpO1xuXG4gICAgICAgIGxldCB0b3RhbFByb2plY3RzID0gcHJvamVjdFRyYWNrZXIuZ2V0QWxsUHJvamVjdHMoKS5sZW5ndGg7XG4gICAgICAgIGlmKHRvdGFsUHJvamVjdHMgPT09IDEpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVByb2plY3REaXJlY3QoaXRlbUxpc3QuY2hpbGRyZW5bMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIHByb2plY3RCdG5zLFxuICAgICAgICBlZGl0QnRuLFxuICAgICAgICBkZWxCdG4sXG4gICAgXTtcbn1cblxuXG5mdW5jdGlvbiBsaW1pdElucHV0KGUpIHtcbiAgICBpZighKGUuY3RybEtleSkgJiYgIShbXCJCYWNrc3BhY2VcIiwgXCJFbnRlclwiXS5pbmNsdWRlcyhlLmtleSkpXG4gICAgICAgICAgICAmJiBlLnRhcmdldC50ZXh0Q29udGVudC5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBQcm9qZWN0UmVuYW1lciB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWVFbCkge1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lRWwgPSBwcm9qZWN0TmFtZUVsO1xuICAgICAgICB0aGlzLmV4aXRSZW5hbWVDYWxsYmFjayA9IHRoaXMuZXhpdFJlbmFtaW5nLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWVFbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLmV4aXRSZW5hbWVDYWxsYmFjaywge29uY2U6IHRydWV9KTtcblxuICAgICAgICB0aGlzLm9sZE5hbWUgPSB0aGlzLnByb2plY3ROYW1lRWwudGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICBsaW1pdElucHV0KGUpO1xuICAgICAgICBpZihlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgdGhpcy5leGl0UmVuYW1pbmcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuZXhpdFJlbmFtZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TmFtZUVsLnJlbW92ZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKTtcbiAgICAgICAgICAgIHByb2plY3RUcmFja2VyLnJlbmFtZVByb2plY3QodGhpcy5vbGROYW1lLCBlLnRhcmdldC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgICAgIHRvRG9VSS51cGRhdGVUb0RvUHJvamVjdFRpdGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGl0UmVuYW1pbmcoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWVFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZUVsLnRleHRDb250ZW50ID0gdGhpcy5vbGROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lRWwucmVtb3ZlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0SXRlbShlKSB7XG4gICAgbGltaXRJbnB1dChlKTtcbiAgICBpZihlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBlLnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGFkZFByb2plY3RJdGVtKTtcbiAgICAgICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgY2FuY2VsTmFtZUFkZEJveCk7XG4gICAgICAgIGUudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICBsZXQgcHJvamVjdFRvQWRkID0gbmV3IFByb2plY3QodGhpcy50ZXh0Q29udGVudCk7XG4gICAgICAgIHByb2plY3RUcmFja2VyLmFkZFByb2plY3QocHJvamVjdFRvQWRkKTtcblxuICAgICAgICBsZXQgdG90YWxQcm9qZWN0cyA9IHByb2plY3RUcmFja2VyLmdldEFsbFByb2plY3RzKCkubGVuZ3RoO1xuICAgICAgICBpZih0b3RhbFByb2plY3RzID09PSAxKSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVQcm9qZWN0RGlyZWN0KHRoaXMucGFyZW50RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG5cbmZ1bmN0aW9uIGNhbmNlbE5hbWVBZGRCb3goZSkge1xuICAgIGxldCBtZW51TGlzdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgbWVudUxpc3RJdGVtID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBtZW51TGlzdC5yZW1vdmVDaGlsZChtZW51TGlzdEl0ZW0pO1xufVxuXG5cbmZ1bmN0aW9uIGluaXRQcm9qZWN0SXRlbSgpIHtcbiAgICBsZXQgcHJvamVjdEl0ZW0gPSBuZXcgRE9NVHJlZShtZW51SXRlbUxpc3QuZ2V0Um9vdEVsZW1lbnQoKSwge1xuICAgICAgICBuYW1lOiBcImxpXCIsXG4gICAgICAgIGNsYXNzZXM6IFtcInByb2plY3RJdGVtXCJdLFxuICAgICAgICBsaXN0ZW5lcjogW1wiY2xpY2tcIiwgc2V0QWN0aXZlUHJvamVjdF0sXG4gICAgfSk7XG4gICAgcHJvamVjdEl0ZW0uZ2V0Um9vdEVsZW1lbnQoKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNkOGQ4ZDhcIjtcbiAgICBwcm9qZWN0SXRlbS5hZGRDaGlsZChnZXRQcm9qZWN0SWNvbigpKTtcblxuICAgIGxldCBwcm9qZWN0TmFtZUFkZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3ROYW1lQWRkQm94LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SXRlbVRleHRcIik7XG4gICAgcHJvamVjdE5hbWVBZGRCb3guc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICBwcm9qZWN0TmFtZUFkZEJveC5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIFwiZmFsc2VcIik7XG4gICAgcHJvamVjdE5hbWVBZGRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYWRkUHJvamVjdEl0ZW0pO1xuICAgIHByb2plY3ROYW1lQWRkQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGNhbmNlbE5hbWVBZGRCb3gpO1xuICAgIHByb2plY3RJdGVtLmFkZENoaWxkKHByb2plY3ROYW1lQWRkQm94KTtcbiAgICBwcm9qZWN0SXRlbS5hZGRDaGlsZChnZXRQcm9qZWN0QnRucygpWzBdKTtcblxuICAgIHByb2plY3ROYW1lQWRkQm94LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3REaXJlY3QodGFyZ2V0RWxlbWVudCkge1xuICAgIHNldEFjdGl2ZVByb2plY3QuY2FsbCh0YXJnZXRFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChlKSB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEl0ZW1UZXh0XCIpWzBdO1xuICAgIGxldCBwcm9qZWN0SXRlbUxpc3QgPSB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhY3RpdmVJdGVtID0gcHJvamVjdEl0ZW1MaXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVQcm9qZWN0SXRlbVwiKVswXTtcbiAgICBpZihhY3RpdmVJdGVtKSB7XG4gICAgICAgIGxldCBhY3RpdmVJY29ucyA9IGFjdGl2ZUl0ZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVByb2plY3RJY29uXCIpO1xuICAgICAgICBhY3RpdmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVQcm9qZWN0SXRlbVwiKTtcbiAgICAgICAgQXJyYXkuZnJvbShhY3RpdmVJY29ucykuZm9yRWFjaChlYWNoSWNvbiA9PiB7XG4gICAgICAgICAgICBlYWNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlUHJvamVjdEljb25cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBwcm9qZWN0SWNvbiA9IHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RJY29uXCIpWzBdO1xuICAgIGxldCBlZGl0QnRuID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEVkaXRCdG5cIilbMF07XG4gICAgbGV0IGRlbEJ0biA9IHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3REZWxCdG5cIilbMF07XG4gICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RJY29uXCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RJY29uXCIpO1xuICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUHJvamVjdEljb25cIik7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUHJvamVjdEl0ZW1cIik7XG5cbiAgICBwcm9qZWN0VHJhY2tlci5hY3RpdmVQcm9qZWN0ID0gcHJvamVjdE5hbWUudGV4dENvbnRlbnQ7XG4gICAgdG9Eb1VJLmxvYWRUb0RvSXRlbXMoKTtcbn1cblxuXG5sZXQgcHJvamVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdE1lbnUuY2xhc3NMaXN0LmFkZChcInByb2plY3RNZW51XCIpO1xuXG5sZXQgbWVudUhlYWRlciA9IG5ldyBET01UcmVlKHByb2plY3RNZW51LCB7XG4gICAgbmFtZTogXCJkaXZcIixcbiAgICBjbGFzc2VzOiBbXCJwcm9qZWN0TWVudUhlYWRlclwiXSxcbn0pO1xuXG5tZW51SGVhZGVyLmFkZEVsZW1lbnRzKFtcbiAgICB7IFxuICAgICAgICBuYW1lOiBcImJ1dHRvblwiLCBcbiAgICAgICAgY2xhc3NlczogW1wicHJvamVjdE1lbnVIZWFkZXJCdG5cIl0sXG4gICAgICAgIGNvbnRlbnQ6IFwiK1wiLFxuICAgICAgICBsaXN0ZW5lcjogW1wiY2xpY2tcIiwgaW5pdFByb2plY3RJdGVtXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJkaXZcIixcbiAgICAgICAgY2xhc3NlczogW1wicHJvamVjdE1lbnVIZWFkZXJUZXh0XCJdLFxuICAgICAgICBjb250ZW50OiBcIlByb2plY3RzXCIsXG4gICAgfVxuXSk7XG5cbmxldCBtZW51U2VwYXJhdG9yID0gbmV3IERPTVRyZWUocHJvamVjdE1lbnUsIHtcbiAgICBuYW1lOiBcImRpdlwiLFxuICAgIGNsYXNzZXM6IFtcInByb2plY3RNZW51U2VwYXJhdG9yXCJdLFxufSk7XG5cbmxldCBtZW51SXRlbUxpc3QgPSBuZXcgRE9NVHJlZShwcm9qZWN0TWVudSwge1xuICAgIG5hbWU6IFwidWxcIixcbiAgICBjbGFzc2VzOiBbXCJwcm9qZWN0TWVudUxpc3RcIl0sXG59KTtcblxuXG5sZXQgYWxsUHJvamVjdHMgPSBwcm9qZWN0VHJhY2tlci5nZXRBbGxQcm9qZWN0cygpO1xuYWxsUHJvamVjdHMuZm9yRWFjaChlYWNoUHJvamVjdCA9PiB7XG4gICAgbGV0IGFjdGl2ZVByb2plY3RQcmVzZW5jZTtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHByb2plY3RUcmFja2VyLmFjdGl2ZVByb2plY3RcbiAgICBpZihhY3RpdmVQcm9qZWN0ICYmIGFjdGl2ZVByb2plY3QubmFtZSA9PT0gZWFjaFByb2plY3QubmFtZSkge1xuICAgICAgICBhY3RpdmVQcm9qZWN0UHJlc2VuY2UgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZVByb2plY3RQcmVzZW5jZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBtZW51SXRlbUNsYXNzZXMgPSBbXCJwcm9qZWN0SXRlbVwiXTtcbiAgICBpZihhY3RpdmVQcm9qZWN0UHJlc2VuY2UpIHtcbiAgICAgICAgbWVudUl0ZW1DbGFzc2VzLnB1c2goXCJhY3RpdmVQcm9qZWN0SXRlbVwiKTtcbiAgICB9XG4gICAgbGV0IG1lbnVJdGVtID0gbmV3IERPTVRyZWUobWVudUl0ZW1MaXN0LmdldFJvb3RFbGVtZW50KCksIHtcbiAgICAgICAgbmFtZTogXCJsaVwiLFxuICAgICAgICBjbGFzc2VzOiBtZW51SXRlbUNsYXNzZXMsXG4gICAgICAgIGxpc3RlbmVyOiBbXCJjbGlja1wiLCBzZXRBY3RpdmVQcm9qZWN0XSxcbiAgICB9KTtcblxuICAgIGxldCBwcm9qZWN0SWNvbiA9IGdldFByb2plY3RJY29uKCk7XG4gICAgaWYoYWN0aXZlUHJvamVjdFByZXNlbmNlKSB7XG4gICAgICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0SWNvblwiKTtcbiAgICB9XG4gICAgbWVudUl0ZW0uYWRkQ2hpbGQocHJvamVjdEljb24pO1xuXG4gICAgbWVudUl0ZW0uYWRkRWxlbWVudHMoW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNwYW5cIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcInByb2plY3RJdGVtVGV4dFwiXSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGVhY2hQcm9qZWN0Lm5hbWUsXG4gICAgICAgIH1cbiAgICBdKTtcblxuICAgIGxldCBbcHJvamVjdEJ0bnMsIGVkaXRCdG4sIGRlbEJ0bl0gPSBnZXRQcm9qZWN0QnRucygpO1xuICAgIGlmKGFjdGl2ZVByb2plY3RQcmVzZW5jZSkge1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0SWNvblwiKTtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0SWNvblwiKTtcbiAgICB9XG4gICAgbWVudUl0ZW0uYWRkQ2hpbGQocHJvamVjdEJ0bnMpO1xufSk7XG5cblxubGV0IGhhbWJ1cmdlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyXCIpO1xubGV0IG9wZW5JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuSWNvblwiKTtcbmxldCBjbG9zZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlSWNvblwiKTtcblxuaGFtYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBpZihwcm9qZWN0TWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93UHJvamVjdE1lbnVcIikpIHtcbiAgICAgICAgb3Blbkljb24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3Blbkljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjbG9zZUljb24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgfVxuICAgIHByb2plY3RNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93UHJvamVjdE1lbnVcIik7XG59KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0TWVudSk7IiwiaW1wb3J0IHsgcHJvamVjdFRyYWNrZXIsIFRvRG8gfSBmcm9tIFwiLi4vdG9kb3MvdG9kby5qc1wiO1xuaW1wb3J0IHtcbiAgICBtYWtlVGl0bGVFZGl0YWJsZSxcbiAgICBtYWtlRGVzY3JpcHRpb25FZGl0YWJsZSxcbiAgICBlZGl0VG9Eb1ByaW9yaXR5LFxuICAgIGVkaXRUb0RvRGF0ZSxcbiAgICBkZWxldGVUb0RvLFxufSBmcm9tIFwiLi4vY3J1ZC90b2RvLWNydWQuanNcIjtcbmltcG9ydCB7IERPTVRyZWUgfSBmcm9tIFwiLi4vbWlzYy91dGlsLmpzXCI7XG5cblxuZnVuY3Rpb24gYWRkU3RyaWtlZE91dENsYXNzZXModG9Eb0VsKSB7XG4gICAgICAgIHRvRG9FbC5jbGFzc0xpc3QudG9nZ2xlKFwiZmluaXNoZWRUb0RvXCIpO1xuICAgICAgICBsZXQgdG9Eb1RvcCA9IHRvRG9FbC5jaGlsZHJlblswXTtcbiAgICAgICAgdG9Eb1RvcC5jbGFzc0xpc3QudG9nZ2xlKFwic3RyaWtlZE91dFRpdGxlXCIpO1xuXG4gICAgICAgIGxldCBkZXNjciA9IHRvRG9FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9Eb0Rlc2NyaXB0aW9uXCIpWzBdO1xuICAgICAgICBkZXNjci5jbGFzc0xpc3QudG9nZ2xlKFwic3RyaWtlZE91dERlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIGxldCBkYXRlID0gdG9Eb0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkdWVEYXRlXCIpWzBdO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC50b2dnbGUoXCJzdHJpa2VkT3V0RGF0ZVwiKTtcbn1cblxuXG5mdW5jdGlvbiBtYXJrVG9Eb0FzRmluaXNoZWQoZSkge1xuICAgICAgICBsZXQgdG9Eb1RvcCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IHRvRG9FbCA9IHRvRG9Ub3AucGFyZW50RWxlbWVudDtcbiAgICAgICAgYWRkU3RyaWtlZE91dENsYXNzZXModG9Eb0VsKTtcblxuICAgICAgICBsZXQgdG9Eb0lEID0gK3RvRG9FbC5kYXRhc2V0LmlkO1xuICAgICAgICBsZXQgdG9kbyA9IFRvRG9VSS5hY3RpdmVQcm9qZWN0LnRvZ2dsZUZpbmlzaCh0b0RvSUQpO1xufVxuXG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbGxhcHNlRXhwYW5kKGUpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZUJ0blJvdGF0ZVwiKTtcbiAgICBsZXQgY3VycmVudFRvRG8gPSB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCBtb3JlSW5mbyA9IGN1cnJlbnRUb0RvLmNoaWxkcmVuWzFdO1xuICAgIG1vcmVJbmZvLmNsYXNzTGlzdC50b2dnbGUoXCJ0b0RvRXhwYW5kXCIpO1xufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0RvKHRvZG8pIHtcbiAgICBsZXQgdG9Eb1JvdyA9IHRvRG9VSS5pdGVtVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICBsZXQgdG9Eb1Jvd0VsID0gdG9Eb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLnRvRG9Sb3dcIik7XG4gICAgdG9Eb1Jvd0VsLmRhdGFzZXQuaWQgPSB0b2RvLnRvRG9JRDtcblxuICAgIGxldCB0b0RvQ2hlY2tCdG4gPSB0b0RvUm93RWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvRG9DaGVja2JveFwiKVswXTtcbiAgICB0b0RvQ2hlY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1hcmtUb0RvQXNGaW5pc2hlZCk7XG5cbiAgICBpZih0b2RvLmZpbmlzaGVkKSB7XG4gICAgICAgIHRvRG9DaGVja0J0bi5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgYWRkU3RyaWtlZE91dENsYXNzZXModG9Eb1Jvd0VsKTtcbiAgICB9XG5cbiAgICBsZXQgdG9Eb1RpdGxlID0gdG9Eb1Jvd0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b0RvVGl0bGVcIilbMF07XG4gICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgIGxldCBtb3JlSW5mbyA9IHRvRG9Sb3dFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9Eb01vcmVJbmZvXCIpWzBdO1xuICAgIGxldCB0b0RvRGVzY3JpcHRpb24gPSBtb3JlSW5mby5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9Eb0Rlc2NyaXB0aW9uXCIpWzBdO1xuICAgIGxldCB0b0RvRGF0ZSA9IG1vcmVJbmZvLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b0RvRGF0ZVwiKVswXTtcbiAgICB0b0RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIHRvRG9EYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlZGl0VG9Eb0RhdGUpO1xuICAgIHRvRG9EYXRlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRvZG8uZHVlRGF0ZSk7XG5cbiAgICBsZXQgdGl0bGVFZGl0b3IgPSB0b0RvUm93RWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlRWRpdEJ0blwiKVswXTtcbiAgICB0aXRsZUVkaXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFrZVRpdGxlRWRpdGFibGUpO1xuXG4gICAgbGV0IHByaW9yaXR5RWRpdG9yID0gdG9Eb1Jvd0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b0RvSWNvblwiKVsxXTtcbiAgICBwcmlvcml0eUVkaXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRvRG9Qcmlvcml0eSk7XG4gICAgcHJpb3JpdHlFZGl0b3IuY2xhc3NMaXN0LmFkZCh0b2RvLnByaW9yaXR5ICsgXCJQcmlvcml0eVwiKTtcbiAgICBsZXQgcHJpb3JpdHlIb3ZlclRleHQgPSBwcmlvcml0eUVkaXRvci5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRpdGxlXCIpWzBdO1xuICAgIHByaW9yaXR5SG92ZXJUZXh0LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eSArIFwiIHByaW9yaXR5XCI7XG5cbiAgICBsZXQgZGVsZXRlQnRuID0gdG9Eb1Jvd0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGVCdG5cIilbMF07XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb0RvKTtcblxuICAgIGxldCBkZXNjckVkaXRvciA9IHRvRG9Sb3dFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVzY3JpcHRpb25FZGl0QnRuXCIpWzBdO1xuICAgIGRlc2NyRWRpdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYWtlRGVzY3JpcHRpb25FZGl0YWJsZSk7XG5cbiAgICBsZXQgY29sbGFwc2VCdG4gPSB0b0RvUm93RWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbGxhcHNlQnRuXCIpWzBdO1xuICAgIGNvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDb2xsYXBzZUV4cGFuZCk7XG4gICAgdG9Eb1VJLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvUm93KTtcblxuICAgIGxldCBzZXBhcmF0b3IgPSBuZXcgRE9NVHJlZSh0b0RvVUkuY29udGFpbmVyLCB7XG4gICAgICAgIG5hbWU6IFwiZGl2XCIsXG4gICAgICAgIGNsYXNzZXM6IFtcInRvRG9TZXBhcmF0b3JcIl0sXG4gICAgfSk7XG59XG5cblxuY2xhc3MgVG9Eb1VJIHtcbiAgICBzdGF0aWMgYWN0aXZlUHJvamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHRyYWNrZXIpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0VHJhY2tlciA9IHRyYWNrZXI7XG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RUaXRsZVwiKTtcbiAgICAgICAgdGhpcy4jaW5pdENvbnRhaW5lcigpO1xuICAgIH1cblxuICAgICNpbml0Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9Eb0Rpc3BsYXlcIik7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvUm93VGVtcGxhdGVcIik7XG4gICAgfVxuXG4gICAgdXBkYXRlVG9Eb1Byb2plY3RUaXRsZSgpIHtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZVRleHRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlVGV4dFwiKTtcbiAgICAgICAgaWYoVG9Eb1VJLmFjdGl2ZVByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYodGhpcy5wcm9qZWN0VGl0bGVFbC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSkgIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdFRpdGxlRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RUaXRsZVRleHRFbC50ZXh0Q29udGVudCA9IFRvRG9VSS5hY3RpdmVQcm9qZWN0Lm5hbWU7XG4gICAgfVxuXG4gICAgbG9hZFRvRG9JdGVtcygpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgIFRvRG9VSS5hY3RpdmVQcm9qZWN0ID0gdGhpcy5wcm9qZWN0VHJhY2tlci5hY3RpdmVQcm9qZWN0O1xuICAgICAgICB0aGlzLnVwZGF0ZVRvRG9Qcm9qZWN0VGl0bGUoKTtcbiAgICAgICAgaWYoVG9Eb1VJLmFjdGl2ZVByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFsbFRvRG9zID0gVG9Eb1VJLmFjdGl2ZVByb2plY3QuZ2V0QWxsVG9Eb3MoKTtcbiAgICAgICAgYWxsVG9Eb3MuZm9yRWFjaChkaXNwbGF5VG9Ebyk7XG4gICAgfVxufVxuXG5cbmNsYXNzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvQWRkZXJEaWFsb2dcIik7XG4gICAgICAgIHRoaXMuI3JlZ2lzdGVyT3BlbkJ0bigpO1xuICAgICAgICB0aGlzLiNyZWdpc3RlckNsb3NlQnRuKCk7XG4gICAgICAgIHRoaXMuI3JlZ2lzdGVyU3VibWl0QnRuKCk7XG4gICAgfVxuXG4gICAgI2NoZWNrQWN0aXZlUHJvamVjdFByZXNlbmNlKCkge1xuICAgICAgICByZXR1cm4gVG9Eb1VJLmFjdGl2ZVByb2plY3QgIT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgICNyZWdpc3Rlck9wZW5CdG4oKSB7XG4gICAgICAgIGxldCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb0RvQnRuXCIpO1xuICAgICAgICBhZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGlmKCF0aGlzLiNjaGVja0FjdGl2ZVByb2plY3RQcmVzZW5jZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNjbGVhblVwTGVmdG92ZXJJbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dDb250YWluZXIuc2hvd01vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNjbGVhblVwTGVmdG92ZXJJbnB1dCgpIHtcbiAgICAgICAgbGV0IGFsbElucHV0cyA9IEFycmF5LmZyb20odGhpcy5kaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbiAgICAgICAgbGV0IHRleHRBcmVhSW5wdXQgPSB0aGlzLmRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIik7XG4gICAgICAgIGFsbElucHV0cy5wdXNoKHRleHRBcmVhSW5wdXQpO1xuICAgICAgICBhbGxJbnB1dHMuZm9yRWFjaChlYWNoSW5wdXQgPT4ge1xuICAgICAgICAgICAgZWFjaElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgICNyZWdpc3RlckNsb3NlQnRuKCkge1xuICAgICAgICBsZXQgZGlhbG9nQ2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ0Nsb3NlQnRuXCIpO1xuICAgICAgICBkaWFsb2dDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAjcmVnaXN0ZXJTdWJtaXRCdG4oKSB7XG4gICAgICAgIGxldCBzdWJtaXRUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvU3VibWl0SW5wdXRcIik7XG4gICAgICAgIHN1Ym1pdFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgdG9Eb0lucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b0RvSW5wdXRcIik7XG4gICAgICAgICAgICBsZXQgdG9Eb0FyZ3MgPSBBcnJheS5mcm9tKHRvRG9JbnB1dHMpLm1hcChlYWNoSW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlYWNoSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHRvRG9Ub0FkZCA9IG5ldyBUb0RvKC4uLnRvRG9BcmdzKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgVG9Eb1VJLmFjdGl2ZVByb2plY3QuYWRkVG9Ebyh0b0RvVG9BZGQpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgaWYoZS5tZXNzYWdlID09IFwiRG9uJ3QgdHJ5IHRvIGFkZCBhIGR1cGxpY2F0ZSB0b2RvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGlzcGxheVRvRG8odG9Eb1RvQWRkKTtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5sZXQgdG9Eb1VJID0gbmV3IFRvRG9VSShwcm9qZWN0VHJhY2tlcik7XG5sZXQgZGlhbG9nID0gbmV3IERpYWxvZygpO1xuXG50b0RvVUkubG9hZFRvRG9JdGVtcygpO1xuXG5leHBvcnQge1xuICAgIHRvRG9VSSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3VpL3RvZG8tdWkuanNcIjtcbmltcG9ydCBcIi4vdWkvcHJvamVjdC11aS5qc1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==