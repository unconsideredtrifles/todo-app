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
    elementToEdit.setAttribute("contenteditable", "true");
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
            let project = ToDoSaver.openProject(eachKey);
            projectTracker.addProject(project);
        }
     }
}

if(activeProjectName) {
    projectTracker.activeProject = activeProjectName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGlFQUFrQjtBQUMvQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsWUFBWSw0REFBVTtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDREQUFVO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDREQUFVO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekMwQjs7O0FBRzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YscURBQXFELFlBQVk7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0RBQVE7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixnQ0FBZ0MsZ0RBQUk7QUFDcEM7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0Esd0JBQXdCLDBEQUFjO0FBQ3RDOztBQUVBOztBQUlFOzs7Ozs7O1VDak5GO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWkvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpL3N0eWxlLmNzcz83NmY3Iiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY3J1ZC90b2RvLWNydWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZGF0ZXMvZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9lcnJvcnMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbWlzYy91dGlsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG9zL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWkvcHJvamVjdC11aS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS90b2RvLXVpLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvamVjdE1lbnUgIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIHdpZHRoOiAyMCU7XG5cbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmNiY2JjO1xuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIGJveC1zaGFkb3c6IDVweCAwcHggN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zaG93UHJvamVjdE1lbnUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLnByb2plY3RNZW51SGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgcGFkZGluZzogMCAwIDAuNnJlbSAwLjRyZW07XG59XG5cbi5wcm9qZWN0TWVudUhlYWRlclRleHQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucHJvamVjdE1lbnVIZWFkZXJCdG4ge1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3RNZW51U2VwYXJhdG9yIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWZhZmFmO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnByb2plY3RNZW51TGlzdCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ucHJvamVjdEl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMC40cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3RJdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2O1xufVxuXG4ucHJvamVjdEljb24ge1xuICAgIHdpZHRoOiAxLjhyZW07XG4gICAgZmlsbDogIzVjNWNmZjtcbn1cblxuLnByb2plY3RJdGVtVGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07ICAgIFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcbn1cblxuLnByb2plY3RJdGVtVGV4dFtjb250ZW50ZWRpdGFibGU9dHJ1ZV06Zm9jdXMtdmlzaWJsZSB7XG4gICAgd2lkdGg6IDIwY2g7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG59XG5cbi5wcm9qZWN0QnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5wcm9qZWN0RWRpdEJ0biB7XG4gICAgd2lkdGg6IDEuOHJlbTtcbiAgICBmaWxsOiAjNWM1Y2ZmO1xufVxuXG4ucHJvamVjdERlbEJ0biB7XG4gICAgd2lkdGg6IDEuOHJlbTtcbiAgICBmaWxsOiAjZGY1NzU3O1xufVxuXG4uYWN0aXZlUHJvamVjdEl0ZW0sIC5hY3RpdmVQcm9qZWN0SXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0ODRmZjtcbn1cblxuLmFjdGl2ZVByb2plY3RJY29uIHtcbiAgICBmaWxsOiAjZmZmO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVOztJQUVWLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLCtDQUErQztJQUMvQyxzQkFBc0I7O0lBRXRCLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7O0lBRVQsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTs7SUFFWiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7SUFFVCwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7SUFFaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvamVjdE1lbnUgIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIHdpZHRoOiAyMCU7XFxuXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiY2JjYmM7XFxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zaG93UHJvamVjdE1lbnUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcblxcbi5wcm9qZWN0TWVudUhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgcGFkZGluZzogMCAwIDAuNnJlbSAwLjRyZW07XFxufVxcblxcbi5wcm9qZWN0TWVudUhlYWRlclRleHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnByb2plY3RNZW51SGVhZGVyQnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RNZW51U2VwYXJhdG9yIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZmFmYWY7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLnByb2plY3RNZW51TGlzdCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMC40cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0SXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY7XFxufVxcblxcbi5wcm9qZWN0SWNvbiB7XFxuICAgIHdpZHRoOiAxLjhyZW07XFxuICAgIGZpbGw6ICM1YzVjZmY7XFxufVxcblxcbi5wcm9qZWN0SXRlbVRleHQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTsgICAgXFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcXG59XFxuXFxuLnByb2plY3RJdGVtVGV4dFtjb250ZW50ZWRpdGFibGU9dHJ1ZV06Zm9jdXMtdmlzaWJsZSB7XFxuICAgIHdpZHRoOiAyMGNoO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgIzAwMDtcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbn1cXG5cXG4ucHJvamVjdEJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0RWRpdEJ0biB7XFxuICAgIHdpZHRoOiAxLjhyZW07XFxuICAgIGZpbGw6ICM1YzVjZmY7XFxufVxcblxcbi5wcm9qZWN0RGVsQnRuIHtcXG4gICAgd2lkdGg6IDEuOHJlbTtcXG4gICAgZmlsbDogI2RmNTc1NztcXG59XFxuXFxuLmFjdGl2ZVByb2plY3RJdGVtLCAuYWN0aXZlUHJvamVjdEl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4NGZmO1xcbn1cXG5cXG4uYWN0aXZlUHJvamVjdEljb24ge1xcbiAgICBmaWxsOiAjZmZmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdFRyYWNrZXIgfSBmcm9tIFwiLi4vdG9kb3MvdG9kby5qc1wiO1xuXG5cbmZ1bmN0aW9uIG1ha2VDb250ZW50RWRpdGFibGUoZSwgZWxlbWVudFRvRWRpdCwgdG9Eb0lELCB0b0RvUHJvcCwgbWF4VGV4dExlbikge1xuICAgIGVsZW1lbnRUb0VkaXQuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICBlbGVtZW50VG9FZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgICBpZigoIWUuY3RybEtleSkgJiYgKCFbXCJFbnRlclwiLCBcIkVzY2FwZVwiLCBcIkJhY2tzcGFjZVwiXS5pbmNsdWRlcyhlLmtleSkpIFxuICAgICAgICAgICAgJiYgZS50YXJnZXQudGV4dENvbnRlbnQubGVuZ3RoID49IG1heFRleHRMZW4pIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIGxldCB0b0RvVG9FZGl0ID0gcHJvamVjdFRyYWNrZXIuYWN0aXZlUHJvamVjdC5nZXRUb0RvKHRvRG9JRCk7XG4gICAgICAgICAgICB0b0RvVG9FZGl0W3RvRG9Qcm9wXSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgZS50YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIik7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGVsZW1lbnRUb0VkaXQuZm9jdXMoKTtcbn1cblxuXG5mdW5jdGlvbiBtYWtlVGl0bGVFZGl0YWJsZShlKSB7XG4gICAgbGV0IHRvRG9Ub3BSb3cgPSB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgdG9Eb1RpdGxlID0gdG9Eb1RvcFJvdy5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcbiAgICBsZXQgdG9Eb0lEID0gK3RvRG9Ub3BSb3cucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkO1xuXG4gICAgbWFrZUNvbnRlbnRFZGl0YWJsZShlLCB0b0RvVGl0bGUsIHRvRG9JRCwgXCJ0aXRsZVwiLCAzMCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VEZXNjcmlwdGlvbkVkaXRhYmxlKGUpIHtcbiAgICBsZXQgdG9Eb0Rlc2NyaXB0aW9uID0gdGhpcy5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdXG4gICAgbGV0IHRvRG8gPSB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgbGV0IHRvRG9JRCA9ICt0b0RvLmRhdGFzZXQuaWQ7XG5cbiAgICBtYWtlQ29udGVudEVkaXRhYmxlKGUsIHRvRG9EZXNjcmlwdGlvbiwgdG9Eb0lELCBcImRlc2NyaXB0aW9uXCIsIDEwMCk7XG59XG5cbmZ1bmN0aW9uIGdldFRvRG9Ub0VkaXQoZWxlbWVudCkge1xuICAgIGxldCBjdXJyZW50VG9Eb0VsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgY3VycmVudFRvRG9FbCA9IGN1cnJlbnRUb0RvRWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgbGV0IHRvRG9JRCA9ICtjdXJyZW50VG9Eb0VsLmRhdGFzZXQuaWQ7XG4gICAgcmV0dXJuIHByb2plY3RUcmFja2VyLmFjdGl2ZVByb2plY3QuZ2V0VG9Ebyh0b0RvSUQpO1xufVxuXG5cbmZ1bmN0aW9uIGVkaXRUb0RvRGF0ZShlKSB7XG4gICAgbGV0IHRvRG9Ub0VkaXQgPSBnZXRUb0RvVG9FZGl0KHRoaXMpO1xuICAgIHRvRG9Ub0VkaXQuZHVlRGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xufVxuXG5cbmZ1bmN0aW9uIGVkaXRUb0RvUHJpb3JpdHkoZSkge1xuICAgIGxldCB0b0RvVG9FZGl0ID0gZ2V0VG9Eb1RvRWRpdCh0aGlzKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUodG9Eb1RvRWRpdC5wcmlvcml0eSArIFwiUHJpb3JpdHlcIik7XG4gICAgdG9Eb1RvRWRpdC5yb3RhdGVQcmlvcml0eSgpO1xuXG4gICAgbGV0IG5ld0NsYXNzTmFtZSA9IHRvRG9Ub0VkaXQucHJpb3JpdHkgKyBcIlByaW9yaXR5XCI7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzTmFtZSk7XG4gICAgbGV0IGhvdmVyVGV4dCA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKVswXTtcbiAgICBob3ZlclRleHQudGV4dENvbnRlbnQgPSB0b0RvVG9FZGl0LnByaW9yaXR5ICsgXCIgcHJpb3JpdHlcIjtcbn1cblxuXG5mdW5jdGlvbiBkZWxldGVUb0RvKGUpIHtcbiAgICBsZXQgdG9Eb1RvRWRpdCA9IGdldFRvRG9Ub0VkaXQodGhpcyk7XG4gICAgcHJvamVjdFRyYWNrZXIuYWN0aXZlUHJvamVjdC5yZW1vdmVUb0RvKHRvRG9Ub0VkaXQudG9Eb0lEKTtcblxuICAgIGxldCBjdXJyZW50VG9Eb0VsID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgY3VycmVudFRvRG9FbCA9IGN1cnJlbnRUb0RvRWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgXG4gICAgbGV0IHNlcGFyYXRvclRvUmVtb3ZlID0gY3VycmVudFRvRG9FbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY3VycmVudFRvRG9FbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHNlcGFyYXRvclRvUmVtb3ZlKTtcbiAgICBjdXJyZW50VG9Eb0VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY3VycmVudFRvRG9FbCk7XG59XG5cblxuZXhwb3J0IHtcbiAgICBtYWtlVGl0bGVFZGl0YWJsZSxcbiAgICBtYWtlRGVzY3JpcHRpb25FZGl0YWJsZSxcbiAgICBlZGl0VG9Eb1ByaW9yaXR5LFxuICAgIGVkaXRUb0RvRGF0ZSxcbiAgICBkZWxldGVUb0RvLFxufTsiLCJpbXBvcnQgeyBpc0RpcmVjdEluc3RhbmNlT2YsIGdldFByb3RvdHlwZX0gZnJvbSBcIi4uL21pc2MvdXRpbC5qc1wiO1xuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3IuanNcIjtcblxuY2xhc3MgVG9Eb0RhdGUge1xuICAgICNkYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0ZVN0cikge1xuICAgICAgICBsZXQgZGF0ZUFyZ3MgPSBUb0RvRGF0ZS5jb252ZXJ0VG9EYXRlQXJncyhkYXRlU3RyKTtcbiAgICAgICAgdGhpcy4jZGF0ZSA9IG5ldyBEYXRlKC4uLmRhdGVBcmdzKTtcbiAgICB9XG5cbiAgICBnZXREYXRlU3RyKCkge1xuICAgICAgICBsZXQgeWVhciA9IHRoaXMuI2RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IG1vbnRoID0gKHRoaXMuI2RhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBkYXkgPSAodGhpcy4jZGF0ZS5nZXREYXRlKCkpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGgucGFkU3RhcnQoMiwgXCIwXCIpfS0ke2RheS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udmVydFRvRGF0ZUFyZ3MoZGF0ZVN0cikge1xuICAgICAgICAvKiB0aGlzIHRyYW5zZm9ybXMgZGF0ZVN0ciBpbnRvIGFuIGFycmF5IGNvbXBhdGlibGVcbiAgICAgICAgICogZm9yIGFyZ3VtZW50cyBpbiBEYXRlIGNvbnN0cnVjdG9yICh3aXRoIHNwcmVhZCBzeW50YXgpXG4gICAgICAgICAqIGZvciBleGFtcGxlLCBcIjIwMjEtMS0xOFwiIGJlY29tZXMgWzIwMjEsIDEsIDE4XVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGRhdGVBcnIgPSBjb252ZXJ0VG9EYXRlQXJyKGRhdGVTdHIpO1xuICAgICAgICBkYXRlQXJyWzFdLS07IC8qIG1vbnRocyBzdGFydCBmcm9tIDAgKG5vdCAxKSAqL1xuICAgICAgICByZXR1cm4gZGF0ZUFycjtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gY29udmVydFRvRGF0ZUFycihkYXRlU3RyKSB7XG4gICAgLyogY29udmVydCBkYXRlIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIG51bWJlcnMuXG4gICAgICogXCIyMDIxLTEtMThcIiBiZWNvbWVzIFsyMDIxLCAxLCAxOF07XG4gICAgICovXG4gICAgbGV0IGRhdGVBcnIgPSBkYXRlU3RyLnNwbGl0KFwiLVwiKTtcbiAgICByZXR1cm4gZGF0ZUFyci5tYXAoTnVtYmVyKTtcbn1cblxuXG5jbGFzcyBEYXRlVmFsaWRhdG9yIHtcbiAgICAjZGF0ZUFycjsgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRlU3RyKSB7XG4gICAgICAgIHRoaXMuI2RhdGVBcnIgPSBjb252ZXJ0VG9EYXRlQXJyKGRhdGVTdHIpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICBpZiAoIWlzRGlyZWN0SW5zdGFuY2VPZih0aGlzLiNkYXRlQXJyLCBBcnJheSkgfHwgdGhpcy4jZGF0ZUFyci5sZW5ndGggIT0gMykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlmQWxsTnVtYmVycyA9IHRoaXMuI2RhdGVBcnIuZXZlcnkoZWFjaE51bSA9PiAhaXNOYU4oZWFjaE51bSkpO1xuXG4gICAgICAgIGlmICghaWZBbGxOdW1iZXJzKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwibnVtYmVyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1vbnRoID0gdGhpcy4jZGF0ZUFyclsxXTtcbiAgICAgICAgbGV0IGRheSA9IHRoaXMuI2RhdGVBcnJbMl07XG5cbiAgICAgICAgbGV0IGlmVmFsaWREYXkgPSBkYXkgPj0gMSAmJiBkYXkgPD0gRGF0ZVZhbGlkYXRvci5nZXREYXlzSW5BTW9udGgoZGF5KTtcbiAgICAgICAgaWYoIWlmVmFsaWREYXkpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoXCJkYXlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWZWYWxpZE1vbnRoID0gbW9udGggPj0gMSAmJiBtb250aCA8PSAxMjtcbiAgICAgICAgaWYoIWlmVmFsaWRNb250aCkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihcIm1vbnRoXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERheXNJbkFNb250aChtb250aCkge1xuICAgICAgICBsZXQgbW9udGhzV2l0aDMwRGF5cyA9IFs0LCA2LCA3LCA5LCAxMV07XG4gICAgICAgIGlmIChtb250aHNXaXRoMzBEYXlzLmluY2x1ZGVzKG1vbnRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAzMTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgVG9Eb0RhdGUsXG4gICAgRGF0ZVZhbGlkYXRvcixcbn07IiwiZnVuY3Rpb24gdGhyb3dFcnJvcihlcnJvclR5cGUpIHtcbiAgICBsZXQgZXJyb3JzID0ge1xuICAgICAgICBudW1iZXI6IG5ldyBOdW1iZXJFcnJvcigpLFxuICAgICAgICBkYXk6IG5ldyBEYXlFcnJvcigpLFxuICAgICAgICBtb250aDogbmV3IE1vbnRoRXJyb3IoKSxcbiAgICB9O1xuXG4gICAgbGV0IGVycm9yVG9UaHJvdyA9IGVycm9yc1tlcnJvclR5cGVdO1xuICAgIGVycm9yVG9UaHJvdy50aHJvdygpO1xufVxuXG5cbmNsYXNzIE51bWJlckVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgaWYoZXJyb3JNZXNzYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJpdCBtdXN0IGJlIGEgdmFsaWQgbnVtYmVyXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICAgfVxuXG4gICAgdGhyb3coKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IodGhpcy5lcnJvck1lc3NhZ2UpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBEYXlFcnJvciB7XG4gICAgY29uc3RydWN0b3IoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGlmKGVycm9yTWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiRGF5IHNob3VsZCBiZSBpbiBhIHJhbmdlIGZyb20gMSB0byAzMVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuICAgIH1cblxuICAgIHRocm93KCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcih0aGlzLmVycm9yTWVzc2FnZSk7XG4gICAgfVxufVxuXG5cbmNsYXNzIE1vbnRoRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGVycm9yTWVzc2FnZSkge1xuICAgICAgICBpZihlcnJvck1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIk1vbnRoIHNob3VsZCBiZSBpbiBhIHJhbmdlIGZyb20gMSB0byAxMlwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuICAgIH1cblxuICAgIHRocm93KCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcih0aGlzLmVycm9yTWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIHRocm93RXJyb3IsXG59OyIsImZ1bmN0aW9uIGlzRGlyZWN0SW5zdGFuY2VPZihpbnN0YW5jZSwgY29uc3RydWN0b3IpIHtcbiAgICBsZXQgaW5zdGFuY2VQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UpO1xuICAgIHJldHVybiBpbnN0YW5jZVByb3RvdHlwZSA9PT0gY29uc3RydWN0b3IucHJvdG90eXBlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm90b3R5cGUob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xufVxuXG5jbGFzcyBET01UcmVlIHtcbiAgICAjcm9vdEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHJvb3RFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuI3Jvb3RFbGVtZW50ID0gdGhpcy5pbml0RWxlbWVudChyb290RWxlbWVudCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiNyb290RWxlbWVudCk7XG4gICAgfVxuXG4gICAgYWRkRWxlbWVudHMoZWxlbWVudHMpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlYWNoRWxlbWVudCA9PiB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuaW5pdEVsZW1lbnQoZWFjaEVsZW1lbnQpXG4gICAgICAgICAgICB0aGlzLiNyb290RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEVsZW1lbnQoZWxlbWVudE9iaikge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE9iai5uYW1lKTtcbiAgICAgICAgZm9yKGxldCBlYWNoQ2xhc3Mgb2YgZWxlbWVudE9iai5jbGFzc2VzKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZWFjaENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudE9iai5jb250ZW50O1xuICAgICAgICBpZihcImxpc3RlbmVyXCIgaW4gZWxlbWVudE9iaikge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKC4uLmVsZW1lbnRPYmoubGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGdldFJvb3RFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcm9vdEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgYWRkQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdGhpcy4jcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cblxufTtcblxuZXhwb3J0IHtcbiAgICBpc0RpcmVjdEluc3RhbmNlT2YsXG4gICAgZ2V0UHJvdG90eXBlLFxuICAgIERPTVRyZWUsXG59OyIsImltcG9ydCB7XG4gICAgVG9Eb0RhdGUsIFxuICAgIERhdGVWYWxpZGF0b3IsXG59IGZyb20gXCIuLi9kYXRlcy9kYXRlLmpzXCI7XG5cblxuY2xhc3MgUHJvamVjdFRyYWNrZXIge1xuICAgICNhbGxQcm9qZWN0cztcbiAgICAjY3VycmVudFByb2plY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihhbGxQcm9qZWN0cyA9IFtdKSB7XG4gICAgICAgIHRoaXMuI2FsbFByb2plY3RzID0gYWxsUHJvamVjdHM7XG4gICAgfVxuXG4gICAgZ2V0QWxsUHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNhbGxQcm9qZWN0cztcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgaWYodGhpcy5pc0R1cGxpY2F0ZVByb2plY3QocHJvamVjdCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICBUb0RvU2F2ZXIuc2F2ZVByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgaWYodGhpcy4jYWxsUHJvamVjdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjdGl2ZVByb2plY3RcIiwgcHJvamVjdC5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmFtZVByb2plY3QoY3VycmVudE5hbWUsIG5ld05hbWUpIHtcbiAgICAgICAgbGV0IHByb2ogPSB0aGlzLiNhbGxQcm9qZWN0cy5maW5kKGVhY2hQcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlYWNoUHJvamVjdC5uYW1lID09PSBjdXJyZW50TmFtZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHByb2opIHtcbiAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlUHJvamVjdCAmJiB0aGlzLmFjdGl2ZVByb2plY3QubmFtZSA9PT0gY3VycmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjdGl2ZVByb2plY3RcIiwgbmV3TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAgICAgcHJvai5nZXRBbGxUb0RvcygpLmZvckVhY2goZWFjaFRvRG8gPT4ge1xuICAgICAgICAgICAgICAgIGVhY2hUb0RvLnBhcmVudFByb2plY3ROYW1lID0gIHByb2oubmFtZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgcHJvalN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50TmFtZSk7XG4gICAgICAgICAgICBsZXQgcHJvakluZm8gPSBKU09OLnBhcnNlKHByb2pTdG9yYWdlKTtcbiAgICAgICAgICAgIHByb2pJbmZvLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3TmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvakluZm8pKTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oY3VycmVudE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCByZW5hbWUgUHJvamVjdCAnJHtjdXJyZW50TmFtZX0nIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzaW5jZSBpdCBkb2Vzbid0IGV4aXN0YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBpZHgyRGVsZXRlID0gdGhpcy4jYWxsUHJvamVjdHMuZmluZEluZGV4KGVhY2hQcm9qZWN0ID0+IFxuICAgICAgICAgICAgZWFjaFByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy4jYWxsUHJvamVjdHMuc3BsaWNlKGlkeDJEZWxldGUsIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgaWYodGhpcy5hY3RpdmVQcm9qZWN0ICYmIHByb2plY3ROYW1lID09PSB0aGlzLmFjdGl2ZVByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgaWYodGhpcy4jYWxsUHJvamVjdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3QgPSB0aGlzLiNhbGxQcm9qZWN0c1swXTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjdGl2ZVByb2plY3RcIiwgdGhpcy4jY3VycmVudFByb2plY3QubmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZlUHJvamVjdFwiLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBhY3RpdmVQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3VycmVudFByb2plY3Q7XG4gICAgfVxuXG4gICAgc2V0IGFjdGl2ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgaWYocHJvamVjdE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjdGl2ZVByb2plY3RcIiwgcHJvamVjdE5hbWUpO1xuICAgICAgICBmb3IobGV0IGVhY2hQcm9qZWN0IG9mIHRoaXMuI2FsbFByb2plY3RzKSB7XG4gICAgICAgICAgICBpZihlYWNoUHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gZWFjaFByb2plY3Q7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0R1cGxpY2F0ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jYWxsUHJvamVjdHMuc29tZShlYWNoUHJvamVjdCA9PiBcbiAgICAgICAgICAgIGVhY2hQcm9qZWN0Lm5hbWUgPT09IHByb2plY3QubmFtZVxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gXCJkZWZhdWx0XCIsIHRvRG9BcnIgPSBbXSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRvRG9BcnIgPSB0b0RvQXJyO1xuICAgIH1cblxuICAgIGFkZFRvRG8odG9Ebykge1xuICAgICAgICBpZih0aGlzLmlzRHVwbGljYXRlVG9Ebyh0b0RvKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9uJ3QgdHJ5IHRvIGFkZCBhIGR1cGxpY2F0ZSB0b2RvXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9Eb0Fyci5wdXNoKHRvRG8pO1xuXG4gICAgICAgIGxldCB0b0RvU2F2ZXIgPSBuZXcgVG9Eb1NhdmVyKHRvRG8sIHRoaXMubmFtZSk7XG4gICAgICAgIHRvRG9TYXZlci5hZGRUb0RvKCk7XG4gICAgICAgIHRvRG9TYXZlci5zYXZlKCk7XG4gICAgICAgIHRvRG8ucGFyZW50UHJvamVjdE5hbWUgPSB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgaXNEdXBsaWNhdGVUb0RvKHRvRG8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0Fyci5zb21lKGVhY2hUb0RvID0+IHtcbiAgICAgICAgICAgIGxldCB0aXRsZUVxdWFsaXR5ID0gZWFjaFRvRG8udGl0bGUgPT09IHRvRG8udGl0bGU7XG4gICAgICAgICAgICBsZXQgZGVzY3JFcXVhbGl0eSA9IGVhY2hUb0RvLmRlc2NyaXB0aW9uID09PSB0b0RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5RXF1YWxpdHkgPSBlYWNoVG9Eby5wcmlvcml0eSA9PT0gdG9Eby5wcmlvcml0eTtcbiAgICAgICAgICAgIGxldCBkdWVEYXRlRXF1YWxpdHkgPSBlYWNoVG9Eby5kdWVEYXRlID09PSB0b0RvLmR1ZURhdGU7XG5cbiAgICAgICAgICAgIHJldHVybiAodGl0bGVFcXVhbGl0eSAmJiBkZXNjckVxdWFsaXR5ICYmIFxuICAgICAgICAgICAgICAgIHByaW9yaXR5RXF1YWxpdHkgJiYgZHVlRGF0ZUVxdWFsaXR5KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRUb0RvKHRvRG9JRCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0RvQXJyLmZpbmQoZWFjaFRvRG8gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVhY2hUb0RvLnRvRG9JRCA9PT0gdG9Eb0lEO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBbGxUb0RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0FycjtcbiAgICB9XG5cbiAgICB0b2dnbGVGaW5pc2godG9Eb0lEKSB7XG4gICAgICAgIGxldCB0b2RvID0gdGhpcy5nZXRUb0RvKHRvRG9JRCk7XG4gICAgICAgIGlmKHRvZG8uZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRvZG8uZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZG8uZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRvRG9TYXZlciA9IG5ldyBUb0RvU2F2ZXIodG9kbywgdGhpcy5uYW1lKTtcbiAgICAgICAgdG9Eb1NhdmVyLnVwZGF0ZVRvRG8oKTtcbiAgICAgICAgdG9Eb1NhdmVyLnNhdmUoKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb0RvKHRvRG9JRCkge1xuICAgICAgICBsZXQgaWR4MkRlbGV0ZSA9IHRoaXMudG9Eb0Fyci5maW5kSW5kZXgoXG4gICAgICAgICAgICBlYWNoVG9EbyA9PiBlYWNoVG9Eby50b0RvSUQgPT09IHRvRG9JRFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnRvRG9BcnIuc3BsaWNlKGlkeDJEZWxldGUsIDEpO1xuXG4gICAgICAgIGxldCB0b0RvU2F2ZXIgPSBuZXcgVG9Eb1NhdmVyKHt9LCB0aGlzLm5hbWUpO1xuICAgICAgICB0b0RvU2F2ZXIucmVtb3ZlVG9EbyhpZHgyRGVsZXRlKTtcbiAgICAgICAgdG9Eb1NhdmVyLnNhdmUoKTtcbiAgICB9XG59XG5cblxuY2xhc3MgVG9EbyB7XG4gICAgc3RhdGljIHByaW9yaXRpZXMgPSBbXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdO1xuICAgIHN0YXRpYyBuZXh0VG9Eb0lEID0gMDtcbiAgICAjdGl0bGU7XG4gICAgI2Rlc2NyaXB0aW9uO1xuICAgICNwcmlvcml0eTtcbiAgICAjZHVlRGF0ZTtcbiAgICAjZmluaXNoZWRcbiAgICAjcGFyZW50UHJvamVjdE5hbWU7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMudG9Eb0lEID0gVG9Eby5uZXh0VG9Eb0lEKys7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIFRvRG8udmFsaWRhdGVEYXRlKGR1ZURhdGUpO1xuICAgICAgICB0aGlzLiNkdWVEYXRlID0gbmV3IFRvRG9EYXRlKGR1ZURhdGUpO1xuICAgICAgICB0aGlzLiNmaW5pc2hlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBwYXJlbnRQcm9qZWN0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BhcmVudFByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIHNldCBwYXJlbnRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkge1xuICAgICAgICB0aGlzLiNwYXJlbnRQcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgICBsZXQgdG9Eb1NhdmVyID0gbmV3IFRvRG9TYXZlcih0aGlzLCB0aGlzLiNwYXJlbnRQcm9qZWN0TmFtZSk7XG4gICAgICAgIHRvRG9TYXZlci51cGRhdGVUb0RvKFwidGl0bGVcIiwgdmFsdWUpO1xuICAgICAgICB0b0RvU2F2ZXIuc2F2ZSgpO1xuXG4gICAgICAgIHRoaXMuI3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgIGxldCB0b0RvU2F2ZXIgPSBuZXcgVG9Eb1NhdmVyKHRoaXMsIHRoaXMuI3BhcmVudFByb2plY3ROYW1lKTtcbiAgICAgICAgdG9Eb1NhdmVyLnVwZGF0ZVRvRG8oXCJkZXNjcmlwdGlvblwiLCB2YWx1ZSk7XG4gICAgICAgIHRvRG9TYXZlci5zYXZlKCk7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICAgIGlmKCFUb0RvLnByaW9yaXRpZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcmlvcml0eSBtdXN0IGJlIG9uZSBvZiBsb3csIG1lZGl1bSBhbmQgaGlnaFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9Eb1NhdmVyID0gbmV3IFRvRG9TYXZlcih0aGlzLCB0aGlzLiNwYXJlbnRQcm9qZWN0TmFtZSk7XG4gICAgICAgIHRvRG9TYXZlci51cGRhdGVUb0RvKFwicHJpb3JpdHlcIiwgdmFsdWUpO1xuICAgICAgICB0b0RvU2F2ZXIuc2F2ZSgpO1xuXG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcm90YXRlUHJpb3JpdHkoKSB7XG4gICAgICAgIGxldCBwcmlvcml0eUlkeCA9IFRvRG8ucHJpb3JpdGllcy5pbmRleE9mKHRoaXMucHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eUlkeCsrXG4gICAgICAgIGlmKHByaW9yaXR5SWR4ID49IFRvRG8ucHJpb3JpdGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHByaW9yaXR5SWR4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gVG9Eby5wcmlvcml0aWVzW3ByaW9yaXR5SWR4XTtcbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2R1ZURhdGUuZ2V0RGF0ZVN0cigpO1xuICAgIH1cblxuICAgIHNldCBkdWVEYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgVG9Eby52YWxpZGF0ZURhdGUoZHVlRGF0ZSk7XG4gICAgICAgIGxldCB0b0RvRGF0ZSA9IG5ldyBUb0RvRGF0ZShkdWVEYXRlKTtcblxuICAgICAgICBsZXQgdG9Eb1NhdmVyID0gbmV3IFRvRG9TYXZlcih0aGlzLCB0aGlzLiNwYXJlbnRQcm9qZWN0TmFtZSk7XG4gICAgICAgIHRvRG9TYXZlci51cGRhdGVUb0RvKFwiZHVlRGF0ZVwiLCB0b0RvRGF0ZS5nZXREYXRlU3RyKCkpO1xuICAgICAgICB0b0RvU2F2ZXIuc2F2ZSgpO1xuXG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSB0b0RvRGF0ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdmFsaWRhdGVEYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgbGV0IGRhdGVWYWxpZGF0b3IgPSBuZXcgRGF0ZVZhbGlkYXRvcihkdWVEYXRlKTtcbiAgICAgICAgcmV0dXJuIGRhdGVWYWxpZGF0b3IudmFsaWRhdGUoKTtcbiAgICB9XG5cbiAgICBnZXQgZmluaXNoZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNmaW5pc2hlZDtcbiAgICB9XG5cbiAgICBzZXQgZmluaXNoZWQodmFsdWUpIHtcbiAgICAgICAgbGV0IHRvRG9TYXZlciA9IG5ldyBUb0RvU2F2ZXIodGhpcywgdGhpcy4jcGFyZW50UHJvamVjdE5hbWUpO1xuICAgICAgICB0b0RvU2F2ZXIudXBkYXRlVG9EbyhcImZpbmlzaGVkXCIsIHZhbHVlKTtcbiAgICAgICAgdG9Eb1NhdmVyLnNhdmUoKTtcblxuICAgICAgICB0aGlzLiNmaW5pc2hlZCA9IHZhbHVlO1xuICAgIH1cbn1cblxuXG5jbGFzcyBUb0RvU2F2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHRvRG9PYmosIHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMudG9Eb0luZm8gPSB7XG4gICAgICAgICAgICB0aXRsZTogdG9Eb09iai50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0b0RvT2JqLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHJpb3JpdHk6IHRvRG9PYmoucHJpb3JpdHksXG4gICAgICAgICAgICBkdWVEYXRlOiB0b0RvT2JqLmR1ZURhdGUsXG4gICAgICAgICAgICBmaW5pc2hlZDogdG9Eb09iai5maW5pc2hlZFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb2plY3RJbmZvID0gVG9Eb1NhdmVyLmdldFByb2plY3RJbmZvKHByb2plY3ROYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UHJvamVjdEluZm8ocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKTtcbiAgICB9XG5cbiAgICBnZXRUb0RvSWR4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0SW5mby50b0RvQXJyLmZpbmRJbmRleChlYWNoVG9EbyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGVhY2hUb0RvLnRpdGxlID09PSB0aGlzLnRvRG9JbmZvLnRpdGxlICYmXG4gICAgICAgICAgICAgICAgZWFjaFRvRG8uZGVzY3JpcHRpb24gPT09IHRoaXMudG9Eb0luZm8uZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICAgICAgICBlYWNoVG9Eby5wcmlvcml0eSA9PT0gdGhpcy50b0RvSW5mby5wcmlvcml0eSAmJlxuICAgICAgICAgICAgICAgIGVhY2hUb0RvLmR1ZURhdGUgPT09IHRoaXMudG9Eb0luZm8uZHVlRGF0ZVxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGFkZFRvRG8oKSB7XG4gICAgICAgIHRoaXMucHJvamVjdEluZm8udG9Eb0Fyci5wdXNoKHRoaXMudG9Eb0luZm8pO1xuICAgIH1cblxuICAgIHJlbW92ZVRvRG8oaWR4VG9SZW1vdmUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0SW5mby50b0RvQXJyLnNwbGljZShpZHhUb1JlbW92ZSwgMSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVG9Ebyhwcm9wLCB2YWx1ZSkge1xuICAgICAgICBsZXQgaWR4VG9VcGRhdGUgPSB0aGlzLmdldFRvRG9JZHgoKTtcbiAgICAgICAgdGhpcy50b0RvSW5mb1twcm9wXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnByb2plY3RJbmZvLnRvRG9BcnJbaWR4VG9VcGRhdGVdID0gdGhpcy50b0RvSW5mbztcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnByb2plY3RJbmZvLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdEluZm8pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2F2ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBsZXQgcHJvamVjdEluZm8gPSB7fTtcbiAgICAgICAgcHJvamVjdEluZm8ubmFtZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdEluZm8udG9Eb0FyciA9IHByb2plY3QudG9Eb0Fyci5tYXAoZWFjaFRvRG8gPT4ge1xuICAgICAgICAgICAgbGV0IHRvRG9TYXZlciA9IG5ldyBUb0RvU2F2ZXIoZWFjaFRvRG8pO1xuICAgICAgICAgICAgcmV0dXJuIHRvRG9TYXZlci50b0RvSW5mbztcbiAgICAgICAgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RJbmZvLm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3RJbmZvKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIG9wZW5Qcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SW5mbyA9IFRvRG9TYXZlci5nZXRQcm9qZWN0SW5mbyhwcm9qZWN0TmFtZSk7XG4gICAgICAgIGxldCB0b0RvcyA9IHByb2plY3RJbmZvLnRvRG9BcnIubWFwKGVhY2hUb0RvID0+IHtcbiAgICAgICAgICAgIGxldCB0b0RvID0gbmV3IFRvRG8oXG4gICAgICAgICAgICAgICAgZWFjaFRvRG8udGl0bGUsXG4gICAgICAgICAgICAgICAgZWFjaFRvRG8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZWFjaFRvRG8ucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgZWFjaFRvRG8uZHVlRGF0ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvRG8ucGFyZW50UHJvamVjdE5hbWUgPSBwcm9qZWN0SW5mby5uYW1lO1xuICAgICAgICAgICAgdG9Eby5maW5pc2hlZCA9IGVhY2hUb0RvLmZpbmlzaGVkXG4gICAgICAgICAgICByZXR1cm4gdG9EbztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdChwcm9qZWN0SW5mby5uYW1lLCB0b0Rvcyk7XG4gICAgfVxufVxuXG5cbmxldCBwcm9qZWN0VHJhY2tlciA9IG5ldyBQcm9qZWN0VHJhY2tlcigpO1xubGV0IGFjdGl2ZVByb2plY3ROYW1lO1xuZm9yKGxldCBlYWNoS2V5IGluIGxvY2FsU3RvcmFnZSkge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShlYWNoS2V5KSkge1xuICAgICAgICBpZihlYWNoS2V5ID09PSBcImFjdGl2ZVByb2plY3RcIikge1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShlYWNoS2V5KTtcbiAgICAgICAgICAgIGlmKCFhY3RpdmVQcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVByb2plY3ROYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBUb0RvU2F2ZXIub3BlblByb2plY3QoZWFjaEtleSk7XG4gICAgICAgICAgICBwcm9qZWN0VHJhY2tlci5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9XG4gICAgIH1cbn1cblxuaWYoYWN0aXZlUHJvamVjdE5hbWUpIHtcbiAgICBwcm9qZWN0VHJhY2tlci5hY3RpdmVQcm9qZWN0ID0gYWN0aXZlUHJvamVjdE5hbWU7XG59XG5cbmV4cG9ydCB7XG4gICAgVG9EbyxcbiAgICBQcm9qZWN0LFxuICAgIHByb2plY3RUcmFja2VyLFxufTsiLCJpbXBvcnQgeyBwcm9qZWN0VHJhY2tlciwgUHJvamVjdH0gZnJvbSBcIi4uL3RvZG9zL3RvZG8uanNcIjtcbmltcG9ydCB7IERPTVRyZWUgfSBmcm9tIFwiLi4vbWlzYy91dGlsLmpzXCI7XG5pbXBvcnQgeyB0b0RvVUkgfSBmcm9tIFwiLi90b2RvLXVpLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5cbmZ1bmN0aW9uIGdldFByb2plY3RJY29uKCkgIHtcbiAgICBsZXQgcHJvamVjdEljb25UZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEljb25UZW1wbGF0ZVwiKTtcbiAgICBsZXQgaWNvblRlbXBsYXRlTm9kZSA9IHByb2plY3RJY29uVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIGljb25UZW1wbGF0ZU5vZGUucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0SWNvblwiKTtcbn1cblxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0QnRucygpIHtcbiAgICBsZXQgcHJvamVjdEljb25UZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEljb25UZW1wbGF0ZVwiKTtcbiAgICBsZXQgaWNvblRlbXBsYXRlTm9kZSA9IHByb2plY3RJY29uVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICBsZXQgcHJvamVjdEJ0bnMgPSBpY29uVGVtcGxhdGVOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEJ0bnNcIik7XG4gICAgbGV0IGVkaXRCdG4gPSBwcm9qZWN0QnRucy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEVkaXRCdG5cIilbMF07XG4gICAgbGV0IGRlbEJ0biA9IHByb2plY3RCdG5zLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0RGVsQnRuXCIpWzBdO1xuXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBsZXQgcHJvamVjdEl0ZW0gPSB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJwcm9qZWN0SXRlbVRleHRcIjtcbiAgICAgICAgbGV0IHByb2plY3RJdGVtVGV4dCA9IHByb2plY3RJdGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcblxuICAgICAgICBwcm9qZWN0SXRlbVRleHQuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0UmVuYW1lciA9IG5ldyBQcm9qZWN0UmVuYW1lcihwcm9qZWN0SXRlbVRleHQpO1xuICAgICAgICBwcm9qZWN0SXRlbVRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcHJvamVjdFJlbmFtZXIpO1xuICAgICAgICBwcm9qZWN0SXRlbVRleHQuZm9jdXMoKTtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SXRlbSA9IHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsZXQgaXRlbVRleHQgPSBwcm9qZWN0SXRlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEl0ZW1UZXh0XCIpWzBdO1xuICAgICAgICBwcm9qZWN0VHJhY2tlci5yZW1vdmVQcm9qZWN0KGl0ZW1UZXh0LnRleHRDb250ZW50KTtcblxuICAgICAgICBsZXQgaXRlbUxpc3QgPSBwcm9qZWN0SXRlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpdGVtTGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0SXRlbSk7XG4gICAgICAgIHRvRG9VSS5sb2FkVG9Eb0l0ZW1zKCk7XG5cbiAgICAgICAgbGV0IHRvdGFsUHJvamVjdHMgPSBwcm9qZWN0VHJhY2tlci5nZXRBbGxQcm9qZWN0cygpLmxlbmd0aDtcbiAgICAgICAgaWYodG90YWxQcm9qZWN0cyA9PT0gMSkge1xuICAgICAgICAgICAgc2V0QWN0aXZlUHJvamVjdERpcmVjdChpdGVtTGlzdC5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgcHJvamVjdEJ0bnMsXG4gICAgICAgIGVkaXRCdG4sXG4gICAgICAgIGRlbEJ0bixcbiAgICBdO1xufVxuXG5cbmZ1bmN0aW9uIGxpbWl0SW5wdXQoZSkge1xuICAgIGlmKCEoZS5jdHJsS2V5KSAmJiAhKFtcIkJhY2tzcGFjZVwiLCBcIkVudGVyXCJdLmluY2x1ZGVzKGUua2V5KSlcbiAgICAgICAgICAgICYmIGUudGFyZ2V0LnRleHRDb250ZW50Lmxlbmd0aCA+PSAyMCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuXG5cbmNsYXNzIFByb2plY3RSZW5hbWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZUVsKSB7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWVFbCA9IHByb2plY3ROYW1lRWw7XG4gICAgICAgIHRoaXMuZXhpdFJlbmFtZUNhbGxiYWNrID0gdGhpcy5leGl0UmVuYW1pbmcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuZXhpdFJlbmFtZUNhbGxiYWNrLCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICAgIHRoaXMub2xkTmFtZSA9IHRoaXMucHJvamVjdE5hbWVFbC50ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgICBoYW5kbGVFdmVudChlKSB7XG4gICAgICAgIGxpbWl0SW5wdXQoZSk7XG4gICAgICAgIGlmKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmV4aXRSZW5hbWluZygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5leGl0UmVuYW1lQ2FsbGJhY2spO1xuICAgICAgICAgICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnByb2plY3ROYW1lRWwucmVtb3ZlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpO1xuICAgICAgICAgICAgcHJvamVjdFRyYWNrZXIucmVuYW1lUHJvamVjdCh0aGlzLm9sZE5hbWUsIGUudGFyZ2V0LnRleHRDb250ZW50KTtcblxuICAgICAgICAgICAgdG9Eb1VJLnVwZGF0ZVRvRG9Qcm9qZWN0VGl0bGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4aXRSZW5hbWluZygpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lRWwudGV4dENvbnRlbnQgPSB0aGlzLm9sZE5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWVFbC5yZW1vdmVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIik7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3RJdGVtKGUpIHtcbiAgICBsaW1pdElucHV0KGUpO1xuICAgIGlmKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGUudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYWRkUHJvamVjdEl0ZW0pO1xuICAgICAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCBjYW5jZWxOYW1lQWRkQm94KTtcbiAgICAgICAgZS50YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpO1xuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG4gICAgICAgIGxldCBwcm9qZWN0VG9BZGQgPSBuZXcgUHJvamVjdCh0aGlzLnRleHRDb250ZW50KTtcbiAgICAgICAgcHJvamVjdFRyYWNrZXIuYWRkUHJvamVjdChwcm9qZWN0VG9BZGQpO1xuXG4gICAgICAgIGxldCB0b3RhbFByb2plY3RzID0gcHJvamVjdFRyYWNrZXIuZ2V0QWxsUHJvamVjdHMoKS5sZW5ndGg7XG4gICAgICAgIGlmKHRvdGFsUHJvamVjdHMgPT09IDEpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVByb2plY3REaXJlY3QodGhpcy5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cblxuZnVuY3Rpb24gY2FuY2VsTmFtZUFkZEJveChlKSB7XG4gICAgbGV0IG1lbnVMaXN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCBtZW51TGlzdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIG1lbnVMaXN0LnJlbW92ZUNoaWxkKG1lbnVMaXN0SXRlbSk7XG59XG5cblxuZnVuY3Rpb24gaW5pdFByb2plY3RJdGVtKCkge1xuICAgIGxldCBwcm9qZWN0SXRlbSA9IG5ldyBET01UcmVlKG1lbnVJdGVtTGlzdC5nZXRSb290RWxlbWVudCgpLCB7XG4gICAgICAgIG5hbWU6IFwibGlcIixcbiAgICAgICAgY2xhc3NlczogW1wicHJvamVjdEl0ZW1cIl0sXG4gICAgICAgIGxpc3RlbmVyOiBbXCJjbGlja1wiLCBzZXRBY3RpdmVQcm9qZWN0XSxcbiAgICB9KTtcbiAgICBwcm9qZWN0SXRlbS5nZXRSb290RWxlbWVudCgpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2Q4ZDhkOFwiO1xuICAgIHByb2plY3RJdGVtLmFkZENoaWxkKGdldFByb2plY3RJY29uKCkpO1xuXG4gICAgbGV0IHByb2plY3ROYW1lQWRkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdE5hbWVBZGRCb3guY2xhc3NMaXN0LmFkZChcInByb2plY3RJdGVtVGV4dFwiKTtcbiAgICBwcm9qZWN0TmFtZUFkZEJveC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgIHByb2plY3ROYW1lQWRkQm94LnNldEF0dHJpYnV0ZShcInNwZWxsY2hlY2tcIiwgXCJmYWxzZVwiKTtcbiAgICBwcm9qZWN0TmFtZUFkZEJveC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBhZGRQcm9qZWN0SXRlbSk7XG4gICAgcHJvamVjdE5hbWVBZGRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgY2FuY2VsTmFtZUFkZEJveCk7XG4gICAgcHJvamVjdEl0ZW0uYWRkQ2hpbGQocHJvamVjdE5hbWVBZGRCb3gpO1xuICAgIHByb2plY3RJdGVtLmFkZENoaWxkKGdldFByb2plY3RCdG5zKClbMF0pO1xuXG4gICAgcHJvamVjdE5hbWVBZGRCb3guZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdERpcmVjdCh0YXJnZXRFbGVtZW50KSB7XG4gICAgc2V0QWN0aXZlUHJvamVjdC5jYWxsKHRhcmdldEVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KGUpIHtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0SXRlbVRleHRcIilbMF07XG4gICAgbGV0IHByb2plY3RJdGVtTGlzdCA9IHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFjdGl2ZUl0ZW0gPSBwcm9qZWN0SXRlbUxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVByb2plY3RJdGVtXCIpWzBdO1xuICAgIGlmKGFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgbGV0IGFjdGl2ZUljb25zID0gYWN0aXZlSXRlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlUHJvamVjdEljb25cIik7XG4gICAgICAgIGFjdGl2ZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVByb2plY3RJdGVtXCIpO1xuICAgICAgICBBcnJheS5mcm9tKGFjdGl2ZUljb25zKS5mb3JFYWNoKGVhY2hJY29uID0+IHtcbiAgICAgICAgICAgIGVhY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVQcm9qZWN0SWNvblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RJY29uID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEljb25cIilbMF07XG4gICAgbGV0IGVkaXRCdG4gPSB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0RWRpdEJ0blwiKVswXTtcbiAgICBsZXQgZGVsQnRuID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdERlbEJ0blwiKVswXTtcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUHJvamVjdEljb25cIik7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUHJvamVjdEljb25cIik7XG4gICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0SWNvblwiKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0SXRlbVwiKTtcblxuICAgIHByb2plY3RUcmFja2VyLmFjdGl2ZVByb2plY3QgPSBwcm9qZWN0TmFtZS50ZXh0Q29udGVudDtcbiAgICB0b0RvVUkubG9hZFRvRG9JdGVtcygpO1xufVxuXG5cbmxldCBwcm9qZWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0TWVudS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE1lbnVcIik7XG5cbmxldCBtZW51SGVhZGVyID0gbmV3IERPTVRyZWUocHJvamVjdE1lbnUsIHtcbiAgICBuYW1lOiBcImRpdlwiLFxuICAgIGNsYXNzZXM6IFtcInByb2plY3RNZW51SGVhZGVyXCJdLFxufSk7XG5cbm1lbnVIZWFkZXIuYWRkRWxlbWVudHMoW1xuICAgIHsgXG4gICAgICAgIG5hbWU6IFwiYnV0dG9uXCIsIFxuICAgICAgICBjbGFzc2VzOiBbXCJwcm9qZWN0TWVudUhlYWRlckJ0blwiXSxcbiAgICAgICAgY29udGVudDogXCIrXCIsXG4gICAgICAgIGxpc3RlbmVyOiBbXCJjbGlja1wiLCBpbml0UHJvamVjdEl0ZW1dLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImRpdlwiLFxuICAgICAgICBjbGFzc2VzOiBbXCJwcm9qZWN0TWVudUhlYWRlclRleHRcIl0sXG4gICAgICAgIGNvbnRlbnQ6IFwiUHJvamVjdHNcIixcbiAgICB9XG5dKTtcblxubGV0IG1lbnVTZXBhcmF0b3IgPSBuZXcgRE9NVHJlZShwcm9qZWN0TWVudSwge1xuICAgIG5hbWU6IFwiZGl2XCIsXG4gICAgY2xhc3NlczogW1wicHJvamVjdE1lbnVTZXBhcmF0b3JcIl0sXG59KTtcblxubGV0IG1lbnVJdGVtTGlzdCA9IG5ldyBET01UcmVlKHByb2plY3RNZW51LCB7XG4gICAgbmFtZTogXCJ1bFwiLFxuICAgIGNsYXNzZXM6IFtcInByb2plY3RNZW51TGlzdFwiXSxcbn0pO1xuXG5cbmxldCBhbGxQcm9qZWN0cyA9IHByb2plY3RUcmFja2VyLmdldEFsbFByb2plY3RzKCk7XG5hbGxQcm9qZWN0cy5mb3JFYWNoKGVhY2hQcm9qZWN0ID0+IHtcbiAgICBsZXQgYWN0aXZlUHJvamVjdFByZXNlbmNlO1xuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdFRyYWNrZXIuYWN0aXZlUHJvamVjdFxuICAgIGlmKGFjdGl2ZVByb2plY3QgJiYgYWN0aXZlUHJvamVjdC5uYW1lID09PSBlYWNoUHJvamVjdC5uYW1lKSB7XG4gICAgICAgIGFjdGl2ZVByb2plY3RQcmVzZW5jZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlUHJvamVjdFByZXNlbmNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IG1lbnVJdGVtQ2xhc3NlcyA9IFtcInByb2plY3RJdGVtXCJdO1xuICAgIGlmKGFjdGl2ZVByb2plY3RQcmVzZW5jZSkge1xuICAgICAgICBtZW51SXRlbUNsYXNzZXMucHVzaChcImFjdGl2ZVByb2plY3RJdGVtXCIpO1xuICAgIH1cbiAgICBsZXQgbWVudUl0ZW0gPSBuZXcgRE9NVHJlZShtZW51SXRlbUxpc3QuZ2V0Um9vdEVsZW1lbnQoKSwge1xuICAgICAgICBuYW1lOiBcImxpXCIsXG4gICAgICAgIGNsYXNzZXM6IG1lbnVJdGVtQ2xhc3NlcyxcbiAgICAgICAgbGlzdGVuZXI6IFtcImNsaWNrXCIsIHNldEFjdGl2ZVByb2plY3RdLFxuICAgIH0pO1xuXG4gICAgbGV0IHByb2plY3RJY29uID0gZ2V0UHJvamVjdEljb24oKTtcbiAgICBpZihhY3RpdmVQcm9qZWN0UHJlc2VuY2UpIHtcbiAgICAgICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RJY29uXCIpO1xuICAgIH1cbiAgICBtZW51SXRlbS5hZGRDaGlsZChwcm9qZWN0SWNvbik7XG5cbiAgICBtZW51SXRlbS5hZGRFbGVtZW50cyhbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic3BhblwiLFxuICAgICAgICAgICAgY2xhc3NlczogW1wicHJvamVjdEl0ZW1UZXh0XCJdLFxuICAgICAgICAgICAgY29udGVudDogZWFjaFByb2plY3QubmFtZSxcbiAgICAgICAgfVxuICAgIF0pO1xuXG4gICAgbGV0IFtwcm9qZWN0QnRucywgZWRpdEJ0biwgZGVsQnRuXSA9IGdldFByb2plY3RCdG5zKCk7XG4gICAgaWYoYWN0aXZlUHJvamVjdFByZXNlbmNlKSB7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RJY29uXCIpO1xuICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RJY29uXCIpO1xuICAgIH1cbiAgICBtZW51SXRlbS5hZGRDaGlsZChwcm9qZWN0QnRucyk7XG59KTtcblxuXG5sZXQgaGFtYnVyZ2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXJcIik7XG5sZXQgb3Blbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5JY29uXCIpO1xubGV0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VJY29uXCIpO1xuXG5oYW1idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGlmKHByb2plY3RNZW51LmNsYXNzTGlzdC5jb250YWlucyhcInNob3dQcm9qZWN0TWVudVwiKSkge1xuICAgICAgICBvcGVuSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICB9XG4gICAgcHJvamVjdE1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dQcm9qZWN0TWVudVwiKTtcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2plY3RNZW51KTsiLCJpbXBvcnQgeyBwcm9qZWN0VHJhY2tlciwgVG9EbyB9IGZyb20gXCIuLi90b2Rvcy90b2RvLmpzXCI7XG5pbXBvcnQge1xuICAgIG1ha2VUaXRsZUVkaXRhYmxlLFxuICAgIG1ha2VEZXNjcmlwdGlvbkVkaXRhYmxlLFxuICAgIGVkaXRUb0RvUHJpb3JpdHksXG4gICAgZWRpdFRvRG9EYXRlLFxuICAgIGRlbGV0ZVRvRG8sXG59IGZyb20gXCIuLi9jcnVkL3RvZG8tY3J1ZC5qc1wiO1xuaW1wb3J0IHsgRE9NVHJlZSB9IGZyb20gXCIuLi9taXNjL3V0aWwuanNcIjtcblxuXG5mdW5jdGlvbiBhZGRTdHJpa2VkT3V0Q2xhc3Nlcyh0b0RvRWwpIHtcbiAgICAgICAgdG9Eb0VsLmNsYXNzTGlzdC50b2dnbGUoXCJmaW5pc2hlZFRvRG9cIik7XG4gICAgICAgIGxldCB0b0RvVG9wID0gdG9Eb0VsLmNoaWxkcmVuWzBdO1xuICAgICAgICB0b0RvVG9wLmNsYXNzTGlzdC50b2dnbGUoXCJzdHJpa2VkT3V0VGl0bGVcIik7XG5cbiAgICAgICAgbGV0IGRlc2NyID0gdG9Eb0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b0RvRGVzY3JpcHRpb25cIilbMF07XG4gICAgICAgIGRlc2NyLmNsYXNzTGlzdC50b2dnbGUoXCJzdHJpa2VkT3V0RGVzY3JpcHRpb25cIik7XG5cbiAgICAgICAgbGV0IGRhdGUgPSB0b0RvRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImR1ZURhdGVcIilbMF07XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LnRvZ2dsZShcInN0cmlrZWRPdXREYXRlXCIpO1xufVxuXG5cbmZ1bmN0aW9uIG1hcmtUb0RvQXNGaW5pc2hlZChlKSB7XG4gICAgICAgIGxldCB0b0RvVG9wID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsZXQgdG9Eb0VsID0gdG9Eb1RvcC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBhZGRTdHJpa2VkT3V0Q2xhc3Nlcyh0b0RvRWwpO1xuXG4gICAgICAgIGxldCB0b0RvSUQgPSArdG9Eb0VsLmRhdGFzZXQuaWQ7XG4gICAgICAgIGxldCB0b2RvID0gVG9Eb1VJLmFjdGl2ZVByb2plY3QudG9nZ2xlRmluaXNoKHRvRG9JRCk7XG59XG5cblxuZnVuY3Rpb24gdG9nZ2xlQ29sbGFwc2VFeHBhbmQoZSkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlQnRuUm90YXRlXCIpO1xuICAgIGxldCBjdXJyZW50VG9EbyA9IHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IG1vcmVJbmZvID0gY3VycmVudFRvRG8uY2hpbGRyZW5bMV07XG4gICAgbW9yZUluZm8uY2xhc3NMaXN0LnRvZ2dsZShcInRvRG9FeHBhbmRcIik7XG59XG5cblxuZnVuY3Rpb24gZGlzcGxheVRvRG8odG9kbykge1xuICAgIGxldCB0b0RvUm93ID0gdG9Eb1VJLml0ZW1UZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblxuICAgIGxldCB0b0RvUm93RWwgPSB0b0RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIudG9Eb1Jvd1wiKTtcbiAgICB0b0RvUm93RWwuZGF0YXNldC5pZCA9IHRvZG8udG9Eb0lEO1xuXG4gICAgbGV0IHRvRG9DaGVja0J0biA9IHRvRG9Sb3dFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9Eb0NoZWNrYm94XCIpWzBdO1xuICAgIHRvRG9DaGVja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFya1RvRG9Bc0ZpbmlzaGVkKTtcblxuICAgIGlmKHRvZG8uZmluaXNoZWQpIHtcbiAgICAgICAgdG9Eb0NoZWNrQnRuLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICBhZGRTdHJpa2VkT3V0Q2xhc3Nlcyh0b0RvUm93RWwpO1xuICAgIH1cblxuICAgIGxldCB0b0RvVGl0bGUgPSB0b0RvUm93RWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvRG9UaXRsZVwiKVswXTtcbiAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuXG4gICAgbGV0IG1vcmVJbmZvID0gdG9Eb1Jvd0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b0RvTW9yZUluZm9cIilbMF07XG4gICAgbGV0IHRvRG9EZXNjcmlwdGlvbiA9IG1vcmVJbmZvLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b0RvRGVzY3JpcHRpb25cIilbMF07XG4gICAgbGV0IHRvRG9EYXRlID0gbW9yZUluZm8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvRG9EYXRlXCIpWzBdO1xuICAgIHRvRG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9Eb0RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVkaXRUb0RvRGF0ZSk7XG4gICAgdG9Eb0RhdGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdG9kby5kdWVEYXRlKTtcblxuICAgIGxldCB0aXRsZUVkaXRvciA9IHRvRG9Sb3dFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGl0bGVFZGl0QnRuXCIpWzBdO1xuICAgIHRpdGxlRWRpdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYWtlVGl0bGVFZGl0YWJsZSk7XG5cbiAgICBsZXQgcHJpb3JpdHlFZGl0b3IgPSB0b0RvUm93RWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvRG9JY29uXCIpWzFdO1xuICAgIHByaW9yaXR5RWRpdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VG9Eb1ByaW9yaXR5KTtcbiAgICBwcmlvcml0eUVkaXRvci5jbGFzc0xpc3QuYWRkKHRvZG8ucHJpb3JpdHkgKyBcIlByaW9yaXR5XCIpO1xuICAgIGxldCBwcmlvcml0eUhvdmVyVGV4dCA9IHByaW9yaXR5RWRpdG9yLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIilbMF07XG4gICAgcHJpb3JpdHlIb3ZlclRleHQudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5ICsgXCIgcHJpb3JpdHlcIjtcblxuICAgIGxldCBkZWxldGVCdG4gPSB0b0RvUm93RWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZUJ0blwiKVswXTtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvRG8pO1xuXG4gICAgbGV0IGRlc2NyRWRpdG9yID0gdG9Eb1Jvd0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZXNjcmlwdGlvbkVkaXRCdG5cIilbMF07XG4gICAgZGVzY3JFZGl0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1ha2VEZXNjcmlwdGlvbkVkaXRhYmxlKTtcblxuICAgIGxldCBjb2xsYXBzZUJ0biA9IHRvRG9Sb3dFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29sbGFwc2VCdG5cIilbMF07XG4gICAgY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUNvbGxhcHNlRXhwYW5kKTtcbiAgICB0b0RvVUkuY29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9Sb3cpO1xuXG4gICAgbGV0IHNlcGFyYXRvciA9IG5ldyBET01UcmVlKHRvRG9VSS5jb250YWluZXIsIHtcbiAgICAgICAgbmFtZTogXCJkaXZcIixcbiAgICAgICAgY2xhc3NlczogW1widG9Eb1NlcGFyYXRvclwiXSxcbiAgICB9KTtcbn1cblxuXG5jbGFzcyBUb0RvVUkge1xuICAgIHN0YXRpYyBhY3RpdmVQcm9qZWN0O1xuXG4gICAgY29uc3RydWN0b3IodHJhY2tlcikge1xuICAgICAgICB0aGlzLnByb2plY3RUcmFja2VyID0gdHJhY2tlcjtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlXCIpO1xuICAgICAgICB0aGlzLiNpbml0Q29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgI2luaXRDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvRGlzcGxheVwiKTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvRG9Sb3dUZW1wbGF0ZVwiKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUb0RvUHJvamVjdFRpdGxlKCkge1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlVGV4dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0VGl0bGVUZXh0XCIpO1xuICAgICAgICBpZihUb0RvVUkuYWN0aXZlUHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RUaXRsZUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcblxuICAgICAgICBpZih0aGlzLnByb2plY3RUaXRsZUVsLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpKSAge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdFRpdGxlVGV4dEVsLnRleHRDb250ZW50ID0gVG9Eb1VJLmFjdGl2ZVByb2plY3QubmFtZTtcbiAgICB9XG5cbiAgICBsb2FkVG9Eb0l0ZW1zKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgVG9Eb1VJLmFjdGl2ZVByb2plY3QgPSB0aGlzLnByb2plY3RUcmFja2VyLmFjdGl2ZVByb2plY3Q7XG4gICAgICAgIHRoaXMudXBkYXRlVG9Eb1Byb2plY3RUaXRsZSgpO1xuICAgICAgICBpZihUb0RvVUkuYWN0aXZlUHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWxsVG9Eb3MgPSBUb0RvVUkuYWN0aXZlUHJvamVjdC5nZXRBbGxUb0RvcygpO1xuICAgICAgICBhbGxUb0Rvcy5mb3JFYWNoKGRpc3BsYXlUb0RvKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRGlhbG9nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvRG9BZGRlckRpYWxvZ1wiKTtcbiAgICAgICAgdGhpcy4jcmVnaXN0ZXJPcGVuQnRuKCk7XG4gICAgICAgIHRoaXMuI3JlZ2lzdGVyQ2xvc2VCdG4oKTtcbiAgICAgICAgdGhpcy4jcmVnaXN0ZXJTdWJtaXRCdG4oKTtcbiAgICB9XG5cbiAgICAjY2hlY2tBY3RpdmVQcm9qZWN0UHJlc2VuY2UoKSB7XG4gICAgICAgIHJldHVybiBUb0RvVUkuYWN0aXZlUHJvamVjdCAhPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgI3JlZ2lzdGVyT3BlbkJ0bigpIHtcbiAgICAgICAgbGV0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvRG9CdG5cIik7XG4gICAgICAgIGFkZFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgaWYoIXRoaXMuI2NoZWNrQWN0aXZlUHJvamVjdFByZXNlbmNlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2NsZWFuVXBMZWZ0b3ZlcklucHV0KCk7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ0NvbnRhaW5lci5zaG93TW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgI2NsZWFuVXBMZWZ0b3ZlcklucHV0KCkge1xuICAgICAgICBsZXQgYWxsSW5wdXRzID0gQXJyYXkuZnJvbSh0aGlzLmRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpO1xuICAgICAgICBsZXQgdGV4dEFyZWFJbnB1dCA9IHRoaXMuZGlhbG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgYWxsSW5wdXRzLnB1c2godGV4dEFyZWFJbnB1dCk7XG4gICAgICAgIGFsbElucHV0cy5mb3JFYWNoKGVhY2hJbnB1dCA9PiB7XG4gICAgICAgICAgICBlYWNoSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgI3JlZ2lzdGVyQ2xvc2VCdG4oKSB7XG4gICAgICAgIGxldCBkaWFsb2dDbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nQ2xvc2VCdG5cIik7XG4gICAgICAgIGRpYWxvZ0Nsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNyZWdpc3RlclN1Ym1pdEJ0bigpIHtcbiAgICAgICAgbGV0IHN1Ym1pdFRvRG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvRG9TdWJtaXRJbnB1dFwiKTtcbiAgICAgICAgc3VibWl0VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCB0b0RvSW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvRG9JbnB1dFwiKTtcbiAgICAgICAgICAgIGxldCB0b0RvQXJncyA9IEFycmF5LmZyb20odG9Eb0lucHV0cykubWFwKGVhY2hJbnB1dCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVhY2hJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgdG9Eb1RvQWRkID0gbmV3IFRvRG8oLi4udG9Eb0FyZ3MpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBUb0RvVUkuYWN0aXZlUHJvamVjdC5hZGRUb0RvKHRvRG9Ub0FkZCk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBpZihlLm1lc3NhZ2UgPT0gXCJEb24ndCB0cnkgdG8gYWRkIGEgZHVwbGljYXRlIHRvZG9cIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwbGF5VG9Ebyh0b0RvVG9BZGQpO1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbmxldCB0b0RvVUkgPSBuZXcgVG9Eb1VJKHByb2plY3RUcmFja2VyKTtcbmxldCBkaWFsb2cgPSBuZXcgRGlhbG9nKCk7XG5cbnRvRG9VSS5sb2FkVG9Eb0l0ZW1zKCk7XG5cbmV4cG9ydCB7XG4gICAgdG9Eb1VJLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vdWkvdG9kby11aS5qc1wiO1xuaW1wb3J0IFwiLi91aS9wcm9qZWN0LXVpLmpzXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9