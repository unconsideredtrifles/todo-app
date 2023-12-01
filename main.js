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

    static checkIfValidProject(projectInfo) {
        let lengthCheck = (projectInfo.length === 2);
        let objProps = Object.keys(projectInfo).sort();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGlFQUFrQjtBQUMvQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsWUFBWSw0REFBVTtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDREQUFVO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDREQUFVO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekMwQjs7O0FBRzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YscURBQXFELFlBQVk7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0RBQVE7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViLGdDQUFnQyxnREFBSTtBQUNwQztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQSx3QkFBd0IsMERBQWM7QUFDdEM7O0FBRUE7O0FBSUU7Ozs7Ozs7VUNqTkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWkvc3R5bGUuY3NzPzc2ZjciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jcnVkL3RvZG8tY3J1ZC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kYXRlcy9kYXRlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2Vycm9ycy9lcnJvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9taXNjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kb3MvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS9wcm9qZWN0LXVpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpL3RvZG8tdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9qZWN0TWVudSAge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogOTk7XG4gICAgd2lkdGg6IDIwJTtcblxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiY2JjYmM7XG4gICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNob3dQcm9qZWN0TWVudSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4ucHJvamVjdE1lbnVIZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICBwYWRkaW5nOiAwIDAgMC42cmVtIDAuNHJlbTtcbn1cblxuLnByb2plY3RNZW51SGVhZGVyVGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5wcm9qZWN0TWVudUhlYWRlckJ0biB7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdE1lbnVTZXBhcmF0b3Ige1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZmFmYWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4ucHJvamVjdE1lbnVMaXN0IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5wcm9qZWN0SXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcblxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAwLjRyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdEl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY7XG59XG5cbi5wcm9qZWN0SWNvbiB7XG4gICAgd2lkdGg6IDEuOHJlbTtcbiAgICBmaWxsOiAjNWM1Y2ZmO1xufVxuXG4ucHJvamVjdEl0ZW1UZXh0IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTsgICAgXG4gICAgZmxleC1iYXNpczogMjUlO1xufVxuXG4ucHJvamVjdEl0ZW1UZXh0W2NvbnRlbnRlZGl0YWJsZT10cnVlXTpmb2N1cy12aXNpYmxlIHtcbiAgICB3aWR0aDogMjBjaDtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgIzAwMDtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbn1cblxuLnByb2plY3RCdG5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnByb2plY3RFZGl0QnRuIHtcbiAgICB3aWR0aDogMS44cmVtO1xuICAgIGZpbGw6ICM1YzVjZmY7XG59XG5cbi5wcm9qZWN0RGVsQnRuIHtcbiAgICB3aWR0aDogMS44cmVtO1xuICAgIGZpbGw6ICNkZjU3NTc7XG59XG5cbi5hY3RpdmVQcm9qZWN0SXRlbSwgLmFjdGl2ZVByb2plY3RJdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4NGZmO1xufVxuXG4uYWN0aXZlUHJvamVjdEljb24ge1xuICAgIGZpbGw6ICNmZmY7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7O0lBRVYsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsK0NBQStDO0lBQy9DLHNCQUFzQjs7SUFFdEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7SUFFVCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZOztJQUVaLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0JBQWdCOztJQUVoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0TWVudSAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgd2lkdGg6IDIwJTtcXG5cXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JjYmNiYztcXG4gICAgcGFkZGluZy10b3A6IDVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDdweCAycHggcmdiYSgwLCAwLCAwLCAwLjEwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNob3dQcm9qZWN0TWVudSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuXFxuLnByb2plY3RNZW51SGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbiAgICBwYWRkaW5nOiAwIDAgMC42cmVtIDAuNHJlbTtcXG59XFxuXFxuLnByb2plY3RNZW51SGVhZGVyVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdE1lbnVIZWFkZXJCdG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdE1lbnVTZXBhcmF0b3Ige1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdE1lbnVMaXN0IHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAwLjRyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RJdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcXG59XFxuXFxuLnByb2plY3RJY29uIHtcXG4gICAgd2lkdGg6IDEuOHJlbTtcXG4gICAgZmlsbDogIzVjNWNmZjtcXG59XFxuXFxuLnByb2plY3RJdGVtVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtOyAgICBcXG4gICAgZmxleC1iYXNpczogMjUlO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW1UZXh0W2NvbnRlbnRlZGl0YWJsZT10cnVlXTpmb2N1cy12aXNpYmxlIHtcXG4gICAgd2lkdGg6IDIwY2g7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxufVxcblxcbi5wcm9qZWN0QnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RFZGl0QnRuIHtcXG4gICAgd2lkdGg6IDEuOHJlbTtcXG4gICAgZmlsbDogIzVjNWNmZjtcXG59XFxuXFxuLnByb2plY3REZWxCdG4ge1xcbiAgICB3aWR0aDogMS44cmVtO1xcbiAgICBmaWxsOiAjZGY1NzU3O1xcbn1cXG5cXG4uYWN0aXZlUHJvamVjdEl0ZW0sIC5hY3RpdmVQcm9qZWN0SXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NDg0ZmY7XFxufVxcblxcbi5hY3RpdmVQcm9qZWN0SWNvbiB7XFxuICAgIGZpbGw6ICNmZmY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0VHJhY2tlciB9IGZyb20gXCIuLi90b2Rvcy90b2RvLmpzXCI7XG5cblxuZnVuY3Rpb24gbWFrZUNvbnRlbnRFZGl0YWJsZShlLCBlbGVtZW50VG9FZGl0LCB0b0RvSUQsIHRvRG9Qcm9wLCBtYXhUZXh0TGVuKSB7XG4gICAgZWxlbWVudFRvRWRpdC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgIGVsZW1lbnRUb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgICAgIGlmKCghZS5jdHJsS2V5KSAmJiAoIVtcIkVudGVyXCIsIFwiRXNjYXBlXCIsIFwiQmFja3NwYWNlXCJdLmluY2x1ZGVzKGUua2V5KSkgXG4gICAgICAgICAgICAmJiBlLnRhcmdldC50ZXh0Q29udGVudC5sZW5ndGggPj0gbWF4VGV4dExlbikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgbGV0IHRvRG9Ub0VkaXQgPSBwcm9qZWN0VHJhY2tlci5hY3RpdmVQcm9qZWN0LmdldFRvRG8odG9Eb0lEKTtcbiAgICAgICAgICAgIHRvRG9Ub0VkaXRbdG9Eb1Byb3BdID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBlLnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgZWxlbWVudFRvRWRpdC5mb2N1cygpO1xufVxuXG5cbmZ1bmN0aW9uIG1ha2VUaXRsZUVkaXRhYmxlKGUpIHtcbiAgICBsZXQgdG9Eb1RvcFJvdyA9IHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCB0b0RvVGl0bGUgPSB0b0RvVG9wUm93LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuICAgIGxldCB0b0RvSUQgPSArdG9Eb1RvcFJvdy5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQ7XG5cbiAgICBtYWtlQ29udGVudEVkaXRhYmxlKGUsIHRvRG9UaXRsZSwgdG9Eb0lELCBcInRpdGxlXCIsIDMwKTtcbn1cblxuZnVuY3Rpb24gbWFrZURlc2NyaXB0aW9uRWRpdGFibGUoZSkge1xuICAgIGxldCB0b0RvRGVzY3JpcHRpb24gPSB0aGlzLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF1cbiAgICBsZXQgdG9EbyA9IHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICBsZXQgdG9Eb0lEID0gK3RvRG8uZGF0YXNldC5pZDtcblxuICAgIG1ha2VDb250ZW50RWRpdGFibGUoZSwgdG9Eb0Rlc2NyaXB0aW9uLCB0b0RvSUQsIFwiZGVzY3JpcHRpb25cIiwgMTAwKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9Eb1RvRWRpdChlbGVtZW50KSB7XG4gICAgbGV0IGN1cnJlbnRUb0RvRWwgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBjdXJyZW50VG9Eb0VsID0gY3VycmVudFRvRG9FbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICBsZXQgdG9Eb0lEID0gK2N1cnJlbnRUb0RvRWwuZGF0YXNldC5pZDtcbiAgICByZXR1cm4gcHJvamVjdFRyYWNrZXIuYWN0aXZlUHJvamVjdC5nZXRUb0RvKHRvRG9JRCk7XG59XG5cblxuZnVuY3Rpb24gZWRpdFRvRG9EYXRlKGUpIHtcbiAgICBsZXQgdG9Eb1RvRWRpdCA9IGdldFRvRG9Ub0VkaXQodGhpcyk7XG4gICAgdG9Eb1RvRWRpdC5kdWVEYXRlID0gZS50YXJnZXQudmFsdWU7XG59XG5cblxuZnVuY3Rpb24gZWRpdFRvRG9Qcmlvcml0eShlKSB7XG4gICAgbGV0IHRvRG9Ub0VkaXQgPSBnZXRUb0RvVG9FZGl0KHRoaXMpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSh0b0RvVG9FZGl0LnByaW9yaXR5ICsgXCJQcmlvcml0eVwiKTtcbiAgICB0b0RvVG9FZGl0LnJvdGF0ZVByaW9yaXR5KCk7XG5cbiAgICBsZXQgbmV3Q2xhc3NOYW1lID0gdG9Eb1RvRWRpdC5wcmlvcml0eSArIFwiUHJpb3JpdHlcIjtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3NOYW1lKTtcbiAgICBsZXQgaG92ZXJUZXh0ID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRpdGxlXCIpWzBdO1xuICAgIGhvdmVyVGV4dC50ZXh0Q29udGVudCA9IHRvRG9Ub0VkaXQucHJpb3JpdHkgKyBcIiBwcmlvcml0eVwiO1xufVxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVRvRG8oZSkge1xuICAgIGxldCB0b0RvVG9FZGl0ID0gZ2V0VG9Eb1RvRWRpdCh0aGlzKTtcbiAgICBwcm9qZWN0VHJhY2tlci5hY3RpdmVQcm9qZWN0LnJlbW92ZVRvRG8odG9Eb1RvRWRpdC50b0RvSUQpO1xuXG4gICAgbGV0IGN1cnJlbnRUb0RvRWwgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBjdXJyZW50VG9Eb0VsID0gY3VycmVudFRvRG9FbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICBcbiAgICBsZXQgc2VwYXJhdG9yVG9SZW1vdmUgPSBjdXJyZW50VG9Eb0VsLm5leHRFbGVtZW50U2libGluZztcbiAgICBjdXJyZW50VG9Eb0VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2VwYXJhdG9yVG9SZW1vdmUpO1xuICAgIGN1cnJlbnRUb0RvRWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjdXJyZW50VG9Eb0VsKTtcbn1cblxuXG5leHBvcnQge1xuICAgIG1ha2VUaXRsZUVkaXRhYmxlLFxuICAgIG1ha2VEZXNjcmlwdGlvbkVkaXRhYmxlLFxuICAgIGVkaXRUb0RvUHJpb3JpdHksXG4gICAgZWRpdFRvRG9EYXRlLFxuICAgIGRlbGV0ZVRvRG8sXG59OyIsImltcG9ydCB7IGlzRGlyZWN0SW5zdGFuY2VPZiwgZ2V0UHJvdG90eXBlfSBmcm9tIFwiLi4vbWlzYy91dGlsLmpzXCI7XG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5qc1wiO1xuXG5jbGFzcyBUb0RvRGF0ZSB7XG4gICAgI2RhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRlU3RyKSB7XG4gICAgICAgIGxldCBkYXRlQXJncyA9IFRvRG9EYXRlLmNvbnZlcnRUb0RhdGVBcmdzKGRhdGVTdHIpO1xuICAgICAgICB0aGlzLiNkYXRlID0gbmV3IERhdGUoLi4uZGF0ZUFyZ3MpO1xuICAgIH1cblxuICAgIGdldERhdGVTdHIoKSB7XG4gICAgICAgIGxldCB5ZWFyID0gdGhpcy4jZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgbW9udGggPSAodGhpcy4jZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGRheSA9ICh0aGlzLiNkYXRlLmdldERhdGUoKSkudG9TdHJpbmcoKTtcblxuICAgICAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aC5wYWRTdGFydCgyLCBcIjBcIil9LSR7ZGF5LnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb252ZXJ0VG9EYXRlQXJncyhkYXRlU3RyKSB7XG4gICAgICAgIC8qIHRoaXMgdHJhbnNmb3JtcyBkYXRlU3RyIGludG8gYW4gYXJyYXkgY29tcGF0aWJsZVxuICAgICAgICAgKiBmb3IgYXJndW1lbnRzIGluIERhdGUgY29uc3RydWN0b3IgKHdpdGggc3ByZWFkIHN5bnRheClcbiAgICAgICAgICogZm9yIGV4YW1wbGUsIFwiMjAyMS0xLTE4XCIgYmVjb21lcyBbMjAyMSwgMSwgMThdXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgZGF0ZUFyciA9IGNvbnZlcnRUb0RhdGVBcnIoZGF0ZVN0cik7XG4gICAgICAgIGRhdGVBcnJbMV0tLTsgLyogbW9udGhzIHN0YXJ0IGZyb20gMCAobm90IDEpICovXG4gICAgICAgIHJldHVybiBkYXRlQXJyO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBjb252ZXJ0VG9EYXRlQXJyKGRhdGVTdHIpIHtcbiAgICAvKiBjb252ZXJ0IGRhdGUgc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgbnVtYmVycy5cbiAgICAgKiBcIjIwMjEtMS0xOFwiIGJlY29tZXMgWzIwMjEsIDEsIDE4XTtcbiAgICAgKi9cbiAgICBsZXQgZGF0ZUFyciA9IGRhdGVTdHIuc3BsaXQoXCItXCIpO1xuICAgIHJldHVybiBkYXRlQXJyLm1hcChOdW1iZXIpO1xufVxuXG5cbmNsYXNzIERhdGVWYWxpZGF0b3Ige1xuICAgICNkYXRlQXJyOyBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGVTdHIpIHtcbiAgICAgICAgdGhpcy4jZGF0ZUFyciA9IGNvbnZlcnRUb0RhdGVBcnIoZGF0ZVN0cik7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIGlmICghaXNEaXJlY3RJbnN0YW5jZU9mKHRoaXMuI2RhdGVBcnIsIEFycmF5KSB8fCB0aGlzLiNkYXRlQXJyLmxlbmd0aCAhPSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWZBbGxOdW1iZXJzID0gdGhpcy4jZGF0ZUFyci5ldmVyeShlYWNoTnVtID0+ICFpc05hTihlYWNoTnVtKSk7XG5cbiAgICAgICAgaWYgKCFpZkFsbE51bWJlcnMpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoXCJudW1iZXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbW9udGggPSB0aGlzLiNkYXRlQXJyWzFdO1xuICAgICAgICBsZXQgZGF5ID0gdGhpcy4jZGF0ZUFyclsyXTtcblxuICAgICAgICBsZXQgaWZWYWxpZERheSA9IGRheSA+PSAxICYmIGRheSA8PSBEYXRlVmFsaWRhdG9yLmdldERheXNJbkFNb250aChkYXkpO1xuICAgICAgICBpZighaWZWYWxpZERheSkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihcImRheVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZlZhbGlkTW9udGggPSBtb250aCA+PSAxICYmIG1vbnRoIDw9IDEyO1xuICAgICAgICBpZighaWZWYWxpZE1vbnRoKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwibW9udGhcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGF5c0luQU1vbnRoKG1vbnRoKSB7XG4gICAgICAgIGxldCBtb250aHNXaXRoMzBEYXlzID0gWzQsIDYsIDcsIDksIDExXTtcbiAgICAgICAgaWYgKG1vbnRoc1dpdGgzMERheXMuaW5jbHVkZXMobW9udGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDMxO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBUb0RvRGF0ZSxcbiAgICBEYXRlVmFsaWRhdG9yLFxufTsiLCJmdW5jdGlvbiB0aHJvd0Vycm9yKGVycm9yVHlwZSkge1xuICAgIGxldCBlcnJvcnMgPSB7XG4gICAgICAgIG51bWJlcjogbmV3IE51bWJlckVycm9yKCksXG4gICAgICAgIGRheTogbmV3IERheUVycm9yKCksXG4gICAgICAgIG1vbnRoOiBuZXcgTW9udGhFcnJvcigpLFxuICAgIH07XG5cbiAgICBsZXQgZXJyb3JUb1Rocm93ID0gZXJyb3JzW2Vycm9yVHlwZV07XG4gICAgZXJyb3JUb1Rocm93LnRocm93KCk7XG59XG5cblxuY2xhc3MgTnVtYmVyRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGVycm9yTWVzc2FnZSkge1xuICAgICAgICBpZihlcnJvck1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIml0IG11c3QgYmUgYSB2YWxpZCBudW1iZXJcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZTtcbiAgICB9XG5cbiAgICB0aHJvdygpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcih0aGlzLmVycm9yTWVzc2FnZSk7XG4gICAgfVxufVxuXG5cbmNsYXNzIERheUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgaWYoZXJyb3JNZXNzYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJEYXkgc2hvdWxkIGJlIGluIGEgcmFuZ2UgZnJvbSAxIHRvIDMxXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICAgfVxuXG4gICAgdGhyb3coKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKHRoaXMuZXJyb3JNZXNzYWdlKTtcbiAgICB9XG59XG5cblxuY2xhc3MgTW9udGhFcnJvciB7XG4gICAgY29uc3RydWN0b3IoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGlmKGVycm9yTWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiTW9udGggc2hvdWxkIGJlIGluIGEgcmFuZ2UgZnJvbSAxIHRvIDEyXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICAgfVxuXG4gICAgdGhyb3coKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKHRoaXMuZXJyb3JNZXNzYWdlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgdGhyb3dFcnJvcixcbn07IiwiZnVuY3Rpb24gaXNEaXJlY3RJbnN0YW5jZU9mKGluc3RhbmNlLCBjb25zdHJ1Y3Rvcikge1xuICAgIGxldCBpbnN0YW5jZVByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZSk7XG4gICAgcmV0dXJuIGluc3RhbmNlUHJvdG90eXBlID09PSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG59XG5cbmZ1bmN0aW9uIGdldFByb3RvdHlwZShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG59XG5cbmNsYXNzIERPTVRyZWUge1xuICAgICNyb290RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4jcm9vdEVsZW1lbnQgPSB0aGlzLmluaXRFbGVtZW50KHJvb3RFbGVtZW50KTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuI3Jvb3RFbGVtZW50KTtcbiAgICB9XG5cbiAgICBhZGRFbGVtZW50cyhlbGVtZW50cykge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVhY2hFbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5pbml0RWxlbWVudChlYWNoRWxlbWVudClcbiAgICAgICAgICAgIHRoaXMuI3Jvb3RFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0RWxlbWVudChlbGVtZW50T2JqKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50T2JqLm5hbWUpO1xuICAgICAgICBmb3IobGV0IGVhY2hDbGFzcyBvZiBlbGVtZW50T2JqLmNsYXNzZXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChlYWNoQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50T2JqLmNvbnRlbnQ7XG4gICAgICAgIGlmKFwibGlzdGVuZXJcIiBpbiBlbGVtZW50T2JqKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoLi4uZWxlbWVudE9iai5saXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0Um9vdEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNyb290RWxlbWVudDtcbiAgICB9XG5cbiAgICBhZGRDaGlsZChjaGlsZCkge1xuICAgICAgICB0aGlzLiNyb290RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxuXG59O1xuXG5leHBvcnQge1xuICAgIGlzRGlyZWN0SW5zdGFuY2VPZixcbiAgICBnZXRQcm90b3R5cGUsXG4gICAgRE9NVHJlZSxcbn07IiwiaW1wb3J0IHtcbiAgICBUb0RvRGF0ZSwgXG4gICAgRGF0ZVZhbGlkYXRvcixcbn0gZnJvbSBcIi4uL2RhdGVzL2RhdGUuanNcIjtcblxuXG5jbGFzcyBQcm9qZWN0VHJhY2tlciB7XG4gICAgI2FsbFByb2plY3RzO1xuICAgICNjdXJyZW50UHJvamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKGFsbFByb2plY3RzID0gW10pIHtcbiAgICAgICAgdGhpcy4jYWxsUHJvamVjdHMgPSBhbGxQcm9qZWN0cztcbiAgICB9XG5cbiAgICBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2FsbFByb2plY3RzO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICBpZih0aGlzLmlzRHVwbGljYXRlUHJvamVjdChwcm9qZWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI2FsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIFRvRG9TYXZlci5zYXZlUHJvamVjdChwcm9qZWN0KTtcblxuICAgICAgICBpZih0aGlzLiNhbGxQcm9qZWN0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZlUHJvamVjdFwiLCBwcm9qZWN0Lm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuYW1lUHJvamVjdChjdXJyZW50TmFtZSwgbmV3TmFtZSkge1xuICAgICAgICBsZXQgcHJvaiA9IHRoaXMuI2FsbFByb2plY3RzLmZpbmQoZWFjaFByb2plY3QgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVhY2hQcm9qZWN0Lm5hbWUgPT09IGN1cnJlbnROYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYocHJvaikge1xuICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVQcm9qZWN0ICYmIHRoaXMuYWN0aXZlUHJvamVjdC5uYW1lID09PSBjdXJyZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZlUHJvamVjdFwiLCBuZXdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2oubmFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgICBwcm9qLmdldEFsbFRvRG9zKCkuZm9yRWFjaChlYWNoVG9EbyA9PiB7XG4gICAgICAgICAgICAgICAgZWFjaFRvRG8ucGFyZW50UHJvamVjdE5hbWUgPSAgcHJvai5uYW1lO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBwcm9qU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnROYW1lKTtcbiAgICAgICAgICAgIGxldCBwcm9qSW5mbyA9IEpTT04ucGFyc2UocHJvalN0b3JhZ2UpO1xuICAgICAgICAgICAgcHJvakluZm8ubmFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdOYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qSW5mbykpO1xuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShjdXJyZW50TmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHJlbmFtZSBQcm9qZWN0ICcke2N1cnJlbnROYW1lfScgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHNpbmNlIGl0IGRvZXNuJ3QgZXhpc3RgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbGV0IGlkeDJEZWxldGUgPSB0aGlzLiNhbGxQcm9qZWN0cy5maW5kSW5kZXgoZWFjaFByb2plY3QgPT4gXG4gICAgICAgICAgICBlYWNoUHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLiNhbGxQcm9qZWN0cy5zcGxpY2UoaWR4MkRlbGV0ZSwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3ROYW1lKTtcblxuICAgICAgICBpZih0aGlzLmFjdGl2ZVByb2plY3QgJiYgcHJvamVjdE5hbWUgPT09IHRoaXMuYWN0aXZlUHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICBpZih0aGlzLiNhbGxQcm9qZWN0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdCA9IHRoaXMuI2FsbFByb2plY3RzWzBdO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZlUHJvamVjdFwiLCB0aGlzLiNjdXJyZW50UHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVQcm9qZWN0XCIsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGFjdGl2ZVByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJyZW50UHJvamVjdDtcbiAgICB9XG5cbiAgICBzZXQgYWN0aXZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBpZihwcm9qZWN0TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZlUHJvamVjdFwiLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIGZvcihsZXQgZWFjaFByb2plY3Qgb2YgdGhpcy4jYWxsUHJvamVjdHMpIHtcbiAgICAgICAgICAgIGlmKGVhY2hQcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3QgPSBlYWNoUHJvamVjdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRHVwbGljYXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNhbGxQcm9qZWN0cy5zb21lKGVhY2hQcm9qZWN0ID0+IFxuICAgICAgICAgICAgZWFjaFByb2plY3QubmFtZSA9PT0gcHJvamVjdC5uYW1lXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcImRlZmF1bHRcIiwgdG9Eb0FyciA9IFtdKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9Eb0FyciA9IHRvRG9BcnI7XG4gICAgfVxuXG4gICAgYWRkVG9Ebyh0b0RvKSB7XG4gICAgICAgIGlmKHRoaXMuaXNEdXBsaWNhdGVUb0RvKHRvRG8pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb24ndCB0cnkgdG8gYWRkIGEgZHVwbGljYXRlIHRvZG9cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b0RvQXJyLnB1c2godG9Ebyk7XG5cbiAgICAgICAgbGV0IHRvRG9TYXZlciA9IG5ldyBUb0RvU2F2ZXIodG9EbywgdGhpcy5uYW1lKTtcbiAgICAgICAgdG9Eb1NhdmVyLmFkZFRvRG8oKTtcbiAgICAgICAgdG9Eb1NhdmVyLnNhdmUoKTtcbiAgICAgICAgdG9Eby5wYXJlbnRQcm9qZWN0TmFtZSA9IHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBpc0R1cGxpY2F0ZVRvRG8odG9Ebykge1xuICAgICAgICByZXR1cm4gdGhpcy50b0RvQXJyLnNvbWUoZWFjaFRvRG8gPT4ge1xuICAgICAgICAgICAgbGV0IHRpdGxlRXF1YWxpdHkgPSBlYWNoVG9Eby50aXRsZSA9PT0gdG9Eby50aXRsZTtcbiAgICAgICAgICAgIGxldCBkZXNjckVxdWFsaXR5ID0gZWFjaFRvRG8uZGVzY3JpcHRpb24gPT09IHRvRG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlFcXVhbGl0eSA9IGVhY2hUb0RvLnByaW9yaXR5ID09PSB0b0RvLnByaW9yaXR5O1xuICAgICAgICAgICAgbGV0IGR1ZURhdGVFcXVhbGl0eSA9IGVhY2hUb0RvLmR1ZURhdGUgPT09IHRvRG8uZHVlRGF0ZTtcblxuICAgICAgICAgICAgcmV0dXJuICh0aXRsZUVxdWFsaXR5ICYmIGRlc2NyRXF1YWxpdHkgJiYgXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlFcXVhbGl0eSAmJiBkdWVEYXRlRXF1YWxpdHkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldFRvRG8odG9Eb0lEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9BcnIuZmluZChlYWNoVG9EbyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWFjaFRvRG8udG9Eb0lEID09PSB0b0RvSUQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEFsbFRvRG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0RvQXJyO1xuICAgIH1cblxuICAgIHRvZ2dsZUZpbmlzaCh0b0RvSUQpIHtcbiAgICAgICAgbGV0IHRvZG8gPSB0aGlzLmdldFRvRG8odG9Eb0lEKTtcbiAgICAgICAgaWYodG9kby5maW5pc2hlZCkge1xuICAgICAgICAgICAgdG9kby5maW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kby5maW5pc2hlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9Eb1NhdmVyID0gbmV3IFRvRG9TYXZlcih0b2RvLCB0aGlzLm5hbWUpO1xuICAgICAgICB0b0RvU2F2ZXIudXBkYXRlVG9EbygpO1xuICAgICAgICB0b0RvU2F2ZXIuc2F2ZSgpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvRG8odG9Eb0lEKSB7XG4gICAgICAgIGxldCBpZHgyRGVsZXRlID0gdGhpcy50b0RvQXJyLmZpbmRJbmRleChcbiAgICAgICAgICAgIGVhY2hUb0RvID0+IGVhY2hUb0RvLnRvRG9JRCA9PT0gdG9Eb0lEXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudG9Eb0Fyci5zcGxpY2UoaWR4MkRlbGV0ZSwgMSk7XG5cbiAgICAgICAgbGV0IHRvRG9TYXZlciA9IG5ldyBUb0RvU2F2ZXIoe30sIHRoaXMubmFtZSk7XG4gICAgICAgIHRvRG9TYXZlci5yZW1vdmVUb0RvKGlkeDJEZWxldGUpO1xuICAgICAgICB0b0RvU2F2ZXIuc2F2ZSgpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBUb0RvIHtcbiAgICBzdGF0aWMgcHJpb3JpdGllcyA9IFtcImxvd1wiLCBcIm1lZGl1bVwiLCBcImhpZ2hcIl07XG4gICAgc3RhdGljIG5leHRUb0RvSUQgPSAwO1xuICAgICN0aXRsZTtcbiAgICAjZGVzY3JpcHRpb247XG4gICAgI3ByaW9yaXR5O1xuICAgICNkdWVEYXRlO1xuICAgICNmaW5pc2hlZFxuICAgICNwYXJlbnRQcm9qZWN0TmFtZTtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy50b0RvSUQgPSBUb0RvLm5leHRUb0RvSUQrKztcbiAgICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgVG9Eby52YWxpZGF0ZURhdGUoZHVlRGF0ZSk7XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBuZXcgVG9Eb0RhdGUoZHVlRGF0ZSk7XG4gICAgICAgIHRoaXMuI2ZpbmlzaGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHBhcmVudFByb2plY3ROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcGFyZW50UHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgc2V0IHBhcmVudFByb2plY3ROYW1lKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMuI3BhcmVudFByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICAgIGxldCB0b0RvU2F2ZXIgPSBuZXcgVG9Eb1NhdmVyKHRoaXMsIHRoaXMuI3BhcmVudFByb2plY3ROYW1lKTtcbiAgICAgICAgdG9Eb1NhdmVyLnVwZGF0ZVRvRG8oXCJ0aXRsZVwiLCB2YWx1ZSk7XG4gICAgICAgIHRvRG9TYXZlci5zYXZlKCk7XG5cbiAgICAgICAgdGhpcy4jdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgbGV0IHRvRG9TYXZlciA9IG5ldyBUb0RvU2F2ZXIodGhpcywgdGhpcy4jcGFyZW50UHJvamVjdE5hbWUpO1xuICAgICAgICB0b0RvU2F2ZXIudXBkYXRlVG9EbyhcImRlc2NyaXB0aW9uXCIsIHZhbHVlKTtcbiAgICAgICAgdG9Eb1NhdmVyLnNhdmUoKTtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICAgICAgaWYoIVRvRG8ucHJpb3JpdGllcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByaW9yaXR5IG11c3QgYmUgb25lIG9mIGxvdywgbWVkaXVtIGFuZCBoaWdoXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b0RvU2F2ZXIgPSBuZXcgVG9Eb1NhdmVyKHRoaXMsIHRoaXMuI3BhcmVudFByb2plY3ROYW1lKTtcbiAgICAgICAgdG9Eb1NhdmVyLnVwZGF0ZVRvRG8oXCJwcmlvcml0eVwiLCB2YWx1ZSk7XG4gICAgICAgIHRvRG9TYXZlci5zYXZlKCk7XG5cbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByb3RhdGVQcmlvcml0eSgpIHtcbiAgICAgICAgbGV0IHByaW9yaXR5SWR4ID0gVG9Eby5wcmlvcml0aWVzLmluZGV4T2YodGhpcy5wcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5SWR4KytcbiAgICAgICAgaWYocHJpb3JpdHlJZHggPj0gVG9Eby5wcmlvcml0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJpb3JpdHlJZHggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBUb0RvLnByaW9yaXRpZXNbcHJpb3JpdHlJZHhdO1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZHVlRGF0ZS5nZXREYXRlU3RyKCk7XG4gICAgfVxuXG4gICAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xuICAgICAgICBUb0RvLnZhbGlkYXRlRGF0ZShkdWVEYXRlKTtcbiAgICAgICAgbGV0IHRvRG9EYXRlID0gbmV3IFRvRG9EYXRlKGR1ZURhdGUpO1xuXG4gICAgICAgIGxldCB0b0RvU2F2ZXIgPSBuZXcgVG9Eb1NhdmVyKHRoaXMsIHRoaXMuI3BhcmVudFByb2plY3ROYW1lKTtcbiAgICAgICAgdG9Eb1NhdmVyLnVwZGF0ZVRvRG8oXCJkdWVEYXRlXCIsIHRvRG9EYXRlLmdldERhdGVTdHIoKSk7XG4gICAgICAgIHRvRG9TYXZlci5zYXZlKCk7XG5cbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IHRvRG9EYXRlO1xuICAgIH1cblxuICAgIHN0YXRpYyB2YWxpZGF0ZURhdGUoZHVlRGF0ZSkge1xuICAgICAgICBsZXQgZGF0ZVZhbGlkYXRvciA9IG5ldyBEYXRlVmFsaWRhdG9yKGR1ZURhdGUpO1xuICAgICAgICByZXR1cm4gZGF0ZVZhbGlkYXRvci52YWxpZGF0ZSgpO1xuICAgIH1cblxuICAgIGdldCBmaW5pc2hlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2ZpbmlzaGVkO1xuICAgIH1cblxuICAgIHNldCBmaW5pc2hlZCh2YWx1ZSkge1xuICAgICAgICBsZXQgdG9Eb1NhdmVyID0gbmV3IFRvRG9TYXZlcih0aGlzLCB0aGlzLiNwYXJlbnRQcm9qZWN0TmFtZSk7XG4gICAgICAgIHRvRG9TYXZlci51cGRhdGVUb0RvKFwiZmluaXNoZWRcIiwgdmFsdWUpO1xuICAgICAgICB0b0RvU2F2ZXIuc2F2ZSgpO1xuXG4gICAgICAgIHRoaXMuI2ZpbmlzaGVkID0gdmFsdWU7XG4gICAgfVxufVxuXG5cbmNsYXNzIFRvRG9TYXZlciB7XG4gICAgY29uc3RydWN0b3IodG9Eb09iaiwgcHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy50b0RvSW5mbyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB0b0RvT2JqLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRvRG9PYmouZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmlvcml0eTogdG9Eb09iai5wcmlvcml0eSxcbiAgICAgICAgICAgIGR1ZURhdGU6IHRvRG9PYmouZHVlRGF0ZSxcbiAgICAgICAgICAgIGZpbmlzaGVkOiB0b0RvT2JqLmZpbmlzaGVkXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHJvamVjdEluZm8gPSBUb0RvU2F2ZXIuZ2V0UHJvamVjdEluZm8ocHJvamVjdE5hbWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQcm9qZWN0SW5mbyhwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSkpO1xuICAgIH1cblxuICAgIGdldFRvRG9JZHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RJbmZvLnRvRG9BcnIuZmluZEluZGV4KGVhY2hUb0RvID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZWFjaFRvRG8udGl0bGUgPT09IHRoaXMudG9Eb0luZm8udGl0bGUgJiZcbiAgICAgICAgICAgICAgICBlYWNoVG9Eby5kZXNjcmlwdGlvbiA9PT0gdGhpcy50b0RvSW5mby5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgICAgICAgIGVhY2hUb0RvLnByaW9yaXR5ID09PSB0aGlzLnRvRG9JbmZvLnByaW9yaXR5ICYmXG4gICAgICAgICAgICAgICAgZWFjaFRvRG8uZHVlRGF0ZSA9PT0gdGhpcy50b0RvSW5mby5kdWVEYXRlXG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgYWRkVG9EbygpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0SW5mby50b0RvQXJyLnB1c2godGhpcy50b0RvSW5mbyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9EbyhpZHhUb1JlbW92ZSkge1xuICAgICAgICB0aGlzLnByb2plY3RJbmZvLnRvRG9BcnIuc3BsaWNlKGlkeFRvUmVtb3ZlLCAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUb0RvKHByb3AsIHZhbHVlKSB7XG4gICAgICAgIGxldCBpZHhUb1VwZGF0ZSA9IHRoaXMuZ2V0VG9Eb0lkeCgpO1xuICAgICAgICB0aGlzLnRvRG9JbmZvW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIHRoaXMucHJvamVjdEluZm8udG9Eb0FycltpZHhUb1VwZGF0ZV0gPSB0aGlzLnRvRG9JbmZvO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMucHJvamVjdEluZm8ubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0SW5mbykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGxldCBwcm9qZWN0SW5mbyA9IHt9O1xuICAgICAgICBwcm9qZWN0SW5mby5uYW1lID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0SW5mby50b0RvQXJyID0gcHJvamVjdC50b0RvQXJyLm1hcChlYWNoVG9EbyA9PiB7XG4gICAgICAgICAgICBsZXQgdG9Eb1NhdmVyID0gbmV3IFRvRG9TYXZlcihlYWNoVG9Ebyk7XG4gICAgICAgICAgICByZXR1cm4gdG9Eb1NhdmVyLnRvRG9JbmZvO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdEluZm8ubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEluZm8pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb3BlblByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbGV0IHByb2plY3RJbmZvID0gVG9Eb1NhdmVyLmdldFByb2plY3RJbmZvKHByb2plY3ROYW1lKTtcbiAgICAgICAgbGV0IHRvRG9zID0gcHJvamVjdEluZm8udG9Eb0Fyci5tYXAoZWFjaFRvRG8gPT4ge1xuICAgICAgICAgICAgbGV0IHRvRG8gPSBuZXcgVG9EbyhcbiAgICAgICAgICAgICAgICBlYWNoVG9Eby50aXRsZSxcbiAgICAgICAgICAgICAgICBlYWNoVG9Eby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBlYWNoVG9Eby5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICBlYWNoVG9Eby5kdWVEYXRlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG9Eby5wYXJlbnRQcm9qZWN0TmFtZSA9IHByb2plY3RJbmZvLm5hbWU7XG4gICAgICAgICAgICB0b0RvLmZpbmlzaGVkID0gZWFjaFRvRG8uZmluaXNoZWRcbiAgICAgICAgICAgIHJldHVybiB0b0RvO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KHByb2plY3RJbmZvLm5hbWUsIHRvRG9zKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tJZlZhbGlkUHJvamVjdChwcm9qZWN0SW5mbykge1xuICAgICAgICBsZXQgbGVuZ3RoQ2hlY2sgPSAocHJvamVjdEluZm8ubGVuZ3RoID09PSAyKTtcbiAgICAgICAgbGV0IG9ialByb3BzID0gT2JqZWN0LmtleXMocHJvamVjdEluZm8pLnNvcnQoKTtcbiAgICAgICAgbGV0IHByb3BzQ2hlY2sgPSAob2JqUHJvcHNbMF0gPT09IFwibmFtZVwiICYmIG9ialByb3BzWzFdID09PSBcInRvRG9BcnJcIik7XG5cbiAgICAgICAgcmV0dXJuIChsZW5ndGhDaGVjayAmJiBwcm9wc0NoZWNrKTtcbiAgICB9XG59XG5cblxubGV0IHByb2plY3RUcmFja2VyID0gbmV3IFByb2plY3RUcmFja2VyKCk7XG5sZXQgYWN0aXZlUHJvamVjdE5hbWU7XG5mb3IobGV0IGVhY2hLZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KGVhY2hLZXkpKSB7XG4gICAgICAgIGlmKGVhY2hLZXkgPT09IFwiYWN0aXZlUHJvamVjdFwiKSB7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGVhY2hLZXkpO1xuICAgICAgICAgICAgaWYoIWFjdGl2ZVByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlUHJvamVjdE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZighVG9Eb1NhdmVyLmNoZWNrSWZWYWxpZFByb2plY3QoZWFjaEtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gVG9Eb1NhdmVyLm9wZW5Qcm9qZWN0KGVhY2hLZXkpO1xuICAgICAgICAgICAgcHJvamVjdFRyYWNrZXIuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICB9XG59XG5cbmlmKGFjdGl2ZVByb2plY3ROYW1lKSB7XG4gICAgcHJvamVjdFRyYWNrZXIuYWN0aXZlUHJvamVjdCA9IGFjdGl2ZVByb2plY3ROYW1lO1xufVxuXG5leHBvcnQge1xuICAgIFRvRG8sXG4gICAgUHJvamVjdCxcbiAgICBwcm9qZWN0VHJhY2tlcixcbn07IiwiaW1wb3J0IHsgcHJvamVjdFRyYWNrZXIsIFByb2plY3R9IGZyb20gXCIuLi90b2Rvcy90b2RvLmpzXCI7XG5pbXBvcnQgeyBET01UcmVlIH0gZnJvbSBcIi4uL21pc2MvdXRpbC5qc1wiO1xuaW1wb3J0IHsgdG9Eb1VJIH0gZnJvbSBcIi4vdG9kby11aS5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SWNvbigpICB7XG4gICAgbGV0IHByb2plY3RJY29uVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RJY29uVGVtcGxhdGVcIik7XG4gICAgbGV0IGljb25UZW1wbGF0ZU5vZGUgPSBwcm9qZWN0SWNvblRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIHJldHVybiBpY29uVGVtcGxhdGVOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEljb25cIik7XG59XG5cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEJ0bnMoKSB7XG4gICAgbGV0IHByb2plY3RJY29uVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RJY29uVGVtcGxhdGVcIik7XG4gICAgbGV0IGljb25UZW1wbGF0ZU5vZGUgPSBwcm9qZWN0SWNvblRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgbGV0IHByb2plY3RCdG5zID0gaWNvblRlbXBsYXRlTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RCdG5zXCIpO1xuICAgIGxldCBlZGl0QnRuID0gcHJvamVjdEJ0bnMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RFZGl0QnRuXCIpWzBdO1xuICAgIGxldCBkZWxCdG4gPSBwcm9qZWN0QnRucy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdERlbEJ0blwiKVswXTtcblxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgbGV0IHByb2plY3RJdGVtID0gdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwicHJvamVjdEl0ZW1UZXh0XCI7XG4gICAgICAgIGxldCBwcm9qZWN0SXRlbVRleHQgPSBwcm9qZWN0SXRlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XG5cbiAgICAgICAgcHJvamVjdEl0ZW1UZXh0LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcblxuICAgICAgICBsZXQgcHJvamVjdFJlbmFtZXIgPSBuZXcgUHJvamVjdFJlbmFtZXIocHJvamVjdEl0ZW1UZXh0KTtcbiAgICAgICAgcHJvamVjdEl0ZW1UZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHByb2plY3RSZW5hbWVyKTtcbiAgICAgICAgcHJvamVjdEl0ZW1UZXh0LmZvY3VzKCk7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBsZXQgcHJvamVjdEl0ZW0gPSB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IGl0ZW1UZXh0ID0gcHJvamVjdEl0ZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RJdGVtVGV4dFwiKVswXTtcbiAgICAgICAgcHJvamVjdFRyYWNrZXIucmVtb3ZlUHJvamVjdChpdGVtVGV4dC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgbGV0IGl0ZW1MaXN0ID0gcHJvamVjdEl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgaXRlbUxpc3QucmVtb3ZlQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgICAgICB0b0RvVUkubG9hZFRvRG9JdGVtcygpO1xuXG4gICAgICAgIGxldCB0b3RhbFByb2plY3RzID0gcHJvamVjdFRyYWNrZXIuZ2V0QWxsUHJvamVjdHMoKS5sZW5ndGg7XG4gICAgICAgIGlmKHRvdGFsUHJvamVjdHMgPT09IDEpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVByb2plY3REaXJlY3QoaXRlbUxpc3QuY2hpbGRyZW5bMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIHByb2plY3RCdG5zLFxuICAgICAgICBlZGl0QnRuLFxuICAgICAgICBkZWxCdG4sXG4gICAgXTtcbn1cblxuXG5mdW5jdGlvbiBsaW1pdElucHV0KGUpIHtcbiAgICBpZighKGUuY3RybEtleSkgJiYgIShbXCJCYWNrc3BhY2VcIiwgXCJFbnRlclwiXS5pbmNsdWRlcyhlLmtleSkpXG4gICAgICAgICAgICAmJiBlLnRhcmdldC50ZXh0Q29udGVudC5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBQcm9qZWN0UmVuYW1lciB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWVFbCkge1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lRWwgPSBwcm9qZWN0TmFtZUVsO1xuICAgICAgICB0aGlzLmV4aXRSZW5hbWVDYWxsYmFjayA9IHRoaXMuZXhpdFJlbmFtaW5nLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWVFbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLmV4aXRSZW5hbWVDYWxsYmFjaywge29uY2U6IHRydWV9KTtcblxuICAgICAgICB0aGlzLm9sZE5hbWUgPSB0aGlzLnByb2plY3ROYW1lRWwudGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICBsaW1pdElucHV0KGUpO1xuICAgICAgICBpZihlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgdGhpcy5leGl0UmVuYW1pbmcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuZXhpdFJlbmFtZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TmFtZUVsLnJlbW92ZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKTtcbiAgICAgICAgICAgIHByb2plY3RUcmFja2VyLnJlbmFtZVByb2plY3QodGhpcy5vbGROYW1lLCBlLnRhcmdldC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgICAgIHRvRG9VSS51cGRhdGVUb0RvUHJvamVjdFRpdGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGl0UmVuYW1pbmcoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWVFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZUVsLnRleHRDb250ZW50ID0gdGhpcy5vbGROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lRWwucmVtb3ZlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0SXRlbShlKSB7XG4gICAgbGltaXRJbnB1dChlKTtcbiAgICBpZihlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBlLnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGFkZFByb2plY3RJdGVtKTtcbiAgICAgICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgY2FuY2VsTmFtZUFkZEJveCk7XG4gICAgICAgIGUudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICBsZXQgcHJvamVjdFRvQWRkID0gbmV3IFByb2plY3QodGhpcy50ZXh0Q29udGVudCk7XG4gICAgICAgIHByb2plY3RUcmFja2VyLmFkZFByb2plY3QocHJvamVjdFRvQWRkKTtcblxuICAgICAgICBsZXQgdG90YWxQcm9qZWN0cyA9IHByb2plY3RUcmFja2VyLmdldEFsbFByb2plY3RzKCkubGVuZ3RoO1xuICAgICAgICBpZih0b3RhbFByb2plY3RzID09PSAxKSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVQcm9qZWN0RGlyZWN0KHRoaXMucGFyZW50RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG5cbmZ1bmN0aW9uIGNhbmNlbE5hbWVBZGRCb3goZSkge1xuICAgIGxldCBtZW51TGlzdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgbWVudUxpc3RJdGVtID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBtZW51TGlzdC5yZW1vdmVDaGlsZChtZW51TGlzdEl0ZW0pO1xufVxuXG5cbmZ1bmN0aW9uIGluaXRQcm9qZWN0SXRlbSgpIHtcbiAgICBsZXQgcHJvamVjdEl0ZW0gPSBuZXcgRE9NVHJlZShtZW51SXRlbUxpc3QuZ2V0Um9vdEVsZW1lbnQoKSwge1xuICAgICAgICBuYW1lOiBcImxpXCIsXG4gICAgICAgIGNsYXNzZXM6IFtcInByb2plY3RJdGVtXCJdLFxuICAgICAgICBsaXN0ZW5lcjogW1wiY2xpY2tcIiwgc2V0QWN0aXZlUHJvamVjdF0sXG4gICAgfSk7XG4gICAgcHJvamVjdEl0ZW0uZ2V0Um9vdEVsZW1lbnQoKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNkOGQ4ZDhcIjtcbiAgICBwcm9qZWN0SXRlbS5hZGRDaGlsZChnZXRQcm9qZWN0SWNvbigpKTtcblxuICAgIGxldCBwcm9qZWN0TmFtZUFkZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3ROYW1lQWRkQm94LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SXRlbVRleHRcIik7XG4gICAgcHJvamVjdE5hbWVBZGRCb3guc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICBwcm9qZWN0TmFtZUFkZEJveC5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIFwiZmFsc2VcIik7XG4gICAgcHJvamVjdE5hbWVBZGRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYWRkUHJvamVjdEl0ZW0pO1xuICAgIHByb2plY3ROYW1lQWRkQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGNhbmNlbE5hbWVBZGRCb3gpO1xuICAgIHByb2plY3RJdGVtLmFkZENoaWxkKHByb2plY3ROYW1lQWRkQm94KTtcbiAgICBwcm9qZWN0SXRlbS5hZGRDaGlsZChnZXRQcm9qZWN0QnRucygpWzBdKTtcblxuICAgIHByb2plY3ROYW1lQWRkQm94LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3REaXJlY3QodGFyZ2V0RWxlbWVudCkge1xuICAgIHNldEFjdGl2ZVByb2plY3QuY2FsbCh0YXJnZXRFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChlKSB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEl0ZW1UZXh0XCIpWzBdO1xuICAgIGxldCBwcm9qZWN0SXRlbUxpc3QgPSB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhY3RpdmVJdGVtID0gcHJvamVjdEl0ZW1MaXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVQcm9qZWN0SXRlbVwiKVswXTtcbiAgICBpZihhY3RpdmVJdGVtKSB7XG4gICAgICAgIGxldCBhY3RpdmVJY29ucyA9IGFjdGl2ZUl0ZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVByb2plY3RJY29uXCIpO1xuICAgICAgICBhY3RpdmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVQcm9qZWN0SXRlbVwiKTtcbiAgICAgICAgQXJyYXkuZnJvbShhY3RpdmVJY29ucykuZm9yRWFjaChlYWNoSWNvbiA9PiB7XG4gICAgICAgICAgICBlYWNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlUHJvamVjdEljb25cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBwcm9qZWN0SWNvbiA9IHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RJY29uXCIpWzBdO1xuICAgIGxldCBlZGl0QnRuID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEVkaXRCdG5cIilbMF07XG4gICAgbGV0IGRlbEJ0biA9IHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3REZWxCdG5cIilbMF07XG4gICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RJY29uXCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RJY29uXCIpO1xuICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUHJvamVjdEljb25cIik7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUHJvamVjdEl0ZW1cIik7XG5cbiAgICBwcm9qZWN0VHJhY2tlci5hY3RpdmVQcm9qZWN0ID0gcHJvamVjdE5hbWUudGV4dENvbnRlbnQ7XG4gICAgdG9Eb1VJLmxvYWRUb0RvSXRlbXMoKTtcbn1cblxuXG5sZXQgcHJvamVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdE1lbnUuY2xhc3NMaXN0LmFkZChcInByb2plY3RNZW51XCIpO1xuXG5sZXQgbWVudUhlYWRlciA9IG5ldyBET01UcmVlKHByb2plY3RNZW51LCB7XG4gICAgbmFtZTogXCJkaXZcIixcbiAgICBjbGFzc2VzOiBbXCJwcm9qZWN0TWVudUhlYWRlclwiXSxcbn0pO1xuXG5tZW51SGVhZGVyLmFkZEVsZW1lbnRzKFtcbiAgICB7IFxuICAgICAgICBuYW1lOiBcImJ1dHRvblwiLCBcbiAgICAgICAgY2xhc3NlczogW1wicHJvamVjdE1lbnVIZWFkZXJCdG5cIl0sXG4gICAgICAgIGNvbnRlbnQ6IFwiK1wiLFxuICAgICAgICBsaXN0ZW5lcjogW1wiY2xpY2tcIiwgaW5pdFByb2plY3RJdGVtXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJkaXZcIixcbiAgICAgICAgY2xhc3NlczogW1wicHJvamVjdE1lbnVIZWFkZXJUZXh0XCJdLFxuICAgICAgICBjb250ZW50OiBcIlByb2plY3RzXCIsXG4gICAgfVxuXSk7XG5cbmxldCBtZW51U2VwYXJhdG9yID0gbmV3IERPTVRyZWUocHJvamVjdE1lbnUsIHtcbiAgICBuYW1lOiBcImRpdlwiLFxuICAgIGNsYXNzZXM6IFtcInByb2plY3RNZW51U2VwYXJhdG9yXCJdLFxufSk7XG5cbmxldCBtZW51SXRlbUxpc3QgPSBuZXcgRE9NVHJlZShwcm9qZWN0TWVudSwge1xuICAgIG5hbWU6IFwidWxcIixcbiAgICBjbGFzc2VzOiBbXCJwcm9qZWN0TWVudUxpc3RcIl0sXG59KTtcblxuXG5sZXQgYWxsUHJvamVjdHMgPSBwcm9qZWN0VHJhY2tlci5nZXRBbGxQcm9qZWN0cygpO1xuYWxsUHJvamVjdHMuZm9yRWFjaChlYWNoUHJvamVjdCA9PiB7XG4gICAgbGV0IGFjdGl2ZVByb2plY3RQcmVzZW5jZTtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHByb2plY3RUcmFja2VyLmFjdGl2ZVByb2plY3RcbiAgICBpZihhY3RpdmVQcm9qZWN0ICYmIGFjdGl2ZVByb2plY3QubmFtZSA9PT0gZWFjaFByb2plY3QubmFtZSkge1xuICAgICAgICBhY3RpdmVQcm9qZWN0UHJlc2VuY2UgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZVByb2plY3RQcmVzZW5jZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBtZW51SXRlbUNsYXNzZXMgPSBbXCJwcm9qZWN0SXRlbVwiXTtcbiAgICBpZihhY3RpdmVQcm9qZWN0UHJlc2VuY2UpIHtcbiAgICAgICAgbWVudUl0ZW1DbGFzc2VzLnB1c2goXCJhY3RpdmVQcm9qZWN0SXRlbVwiKTtcbiAgICB9XG4gICAgbGV0IG1lbnVJdGVtID0gbmV3IERPTVRyZWUobWVudUl0ZW1MaXN0LmdldFJvb3RFbGVtZW50KCksIHtcbiAgICAgICAgbmFtZTogXCJsaVwiLFxuICAgICAgICBjbGFzc2VzOiBtZW51SXRlbUNsYXNzZXMsXG4gICAgICAgIGxpc3RlbmVyOiBbXCJjbGlja1wiLCBzZXRBY3RpdmVQcm9qZWN0XSxcbiAgICB9KTtcblxuICAgIGxldCBwcm9qZWN0SWNvbiA9IGdldFByb2plY3RJY29uKCk7XG4gICAgaWYoYWN0aXZlUHJvamVjdFByZXNlbmNlKSB7XG4gICAgICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0SWNvblwiKTtcbiAgICB9XG4gICAgbWVudUl0ZW0uYWRkQ2hpbGQocHJvamVjdEljb24pO1xuXG4gICAgbWVudUl0ZW0uYWRkRWxlbWVudHMoW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNwYW5cIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcInByb2plY3RJdGVtVGV4dFwiXSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGVhY2hQcm9qZWN0Lm5hbWUsXG4gICAgICAgIH1cbiAgICBdKTtcblxuICAgIGxldCBbcHJvamVjdEJ0bnMsIGVkaXRCdG4sIGRlbEJ0bl0gPSBnZXRQcm9qZWN0QnRucygpO1xuICAgIGlmKGFjdGl2ZVByb2plY3RQcmVzZW5jZSkge1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0SWNvblwiKTtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0SWNvblwiKTtcbiAgICB9XG4gICAgbWVudUl0ZW0uYWRkQ2hpbGQocHJvamVjdEJ0bnMpO1xufSk7XG5cblxubGV0IGhhbWJ1cmdlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyXCIpO1xubGV0IG9wZW5JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuSWNvblwiKTtcbmxldCBjbG9zZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlSWNvblwiKTtcblxuaGFtYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBpZihwcm9qZWN0TWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93UHJvamVjdE1lbnVcIikpIHtcbiAgICAgICAgb3Blbkljb24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3Blbkljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjbG9zZUljb24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgfVxuICAgIHByb2plY3RNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93UHJvamVjdE1lbnVcIik7XG59KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0TWVudSk7IiwiaW1wb3J0IHsgcHJvamVjdFRyYWNrZXIsIFRvRG8gfSBmcm9tIFwiLi4vdG9kb3MvdG9kby5qc1wiO1xuaW1wb3J0IHtcbiAgICBtYWtlVGl0bGVFZGl0YWJsZSxcbiAgICBtYWtlRGVzY3JpcHRpb25FZGl0YWJsZSxcbiAgICBlZGl0VG9Eb1ByaW9yaXR5LFxuICAgIGVkaXRUb0RvRGF0ZSxcbiAgICBkZWxldGVUb0RvLFxufSBmcm9tIFwiLi4vY3J1ZC90b2RvLWNydWQuanNcIjtcbmltcG9ydCB7IERPTVRyZWUgfSBmcm9tIFwiLi4vbWlzYy91dGlsLmpzXCI7XG5cblxuZnVuY3Rpb24gYWRkU3RyaWtlZE91dENsYXNzZXModG9Eb0VsKSB7XG4gICAgICAgIHRvRG9FbC5jbGFzc0xpc3QudG9nZ2xlKFwiZmluaXNoZWRUb0RvXCIpO1xuICAgICAgICBsZXQgdG9Eb1RvcCA9IHRvRG9FbC5jaGlsZHJlblswXTtcbiAgICAgICAgdG9Eb1RvcC5jbGFzc0xpc3QudG9nZ2xlKFwic3RyaWtlZE91dFRpdGxlXCIpO1xuXG4gICAgICAgIGxldCBkZXNjciA9IHRvRG9FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9Eb0Rlc2NyaXB0aW9uXCIpWzBdO1xuICAgICAgICBkZXNjci5jbGFzc0xpc3QudG9nZ2xlKFwic3RyaWtlZE91dERlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIGxldCBkYXRlID0gdG9Eb0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkdWVEYXRlXCIpWzBdO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC50b2dnbGUoXCJzdHJpa2VkT3V0RGF0ZVwiKTtcbn1cblxuXG5mdW5jdGlvbiBtYXJrVG9Eb0FzRmluaXNoZWQoZSkge1xuICAgICAgICBsZXQgdG9Eb1RvcCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IHRvRG9FbCA9IHRvRG9Ub3AucGFyZW50RWxlbWVudDtcbiAgICAgICAgYWRkU3RyaWtlZE91dENsYXNzZXModG9Eb0VsKTtcblxuICAgICAgICBsZXQgdG9Eb0lEID0gK3RvRG9FbC5kYXRhc2V0LmlkO1xuICAgICAgICBsZXQgdG9kbyA9IFRvRG9VSS5hY3RpdmVQcm9qZWN0LnRvZ2dsZUZpbmlzaCh0b0RvSUQpO1xufVxuXG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbGxhcHNlRXhwYW5kKGUpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZUJ0blJvdGF0ZVwiKTtcbiAgICBsZXQgY3VycmVudFRvRG8gPSB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCBtb3JlSW5mbyA9IGN1cnJlbnRUb0RvLmNoaWxkcmVuWzFdO1xuICAgIG1vcmVJbmZvLmNsYXNzTGlzdC50b2dnbGUoXCJ0b0RvRXhwYW5kXCIpO1xufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0RvKHRvZG8pIHtcbiAgICBsZXQgdG9Eb1JvdyA9IHRvRG9VSS5pdGVtVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICBsZXQgdG9Eb1Jvd0VsID0gdG9Eb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLnRvRG9Sb3dcIik7XG4gICAgdG9Eb1Jvd0VsLmRhdGFzZXQuaWQgPSB0b2RvLnRvRG9JRDtcblxuICAgIGxldCB0b0RvQ2hlY2tCdG4gPSB0b0RvUm93RWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvRG9DaGVja2JveFwiKVswXTtcbiAgICB0b0RvQ2hlY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1hcmtUb0RvQXNGaW5pc2hlZCk7XG5cbiAgICBpZih0b2RvLmZpbmlzaGVkKSB7XG4gICAgICAgIHRvRG9DaGVja0J0bi5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgYWRkU3RyaWtlZE91dENsYXNzZXModG9Eb1Jvd0VsKTtcbiAgICB9XG5cbiAgICBsZXQgdG9Eb1RpdGxlID0gdG9Eb1Jvd0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b0RvVGl0bGVcIilbMF07XG4gICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgIGxldCBtb3JlSW5mbyA9IHRvRG9Sb3dFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9Eb01vcmVJbmZvXCIpWzBdO1xuICAgIGxldCB0b0RvRGVzY3JpcHRpb24gPSBtb3JlSW5mby5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9Eb0Rlc2NyaXB0aW9uXCIpWzBdO1xuICAgIGxldCB0b0RvRGF0ZSA9IG1vcmVJbmZvLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b0RvRGF0ZVwiKVswXTtcbiAgICB0b0RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIHRvRG9EYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlZGl0VG9Eb0RhdGUpO1xuICAgIHRvRG9EYXRlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRvZG8uZHVlRGF0ZSk7XG5cbiAgICBsZXQgdGl0bGVFZGl0b3IgPSB0b0RvUm93RWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlRWRpdEJ0blwiKVswXTtcbiAgICB0aXRsZUVkaXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFrZVRpdGxlRWRpdGFibGUpO1xuXG4gICAgbGV0IHByaW9yaXR5RWRpdG9yID0gdG9Eb1Jvd0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b0RvSWNvblwiKVsxXTtcbiAgICBwcmlvcml0eUVkaXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRvRG9Qcmlvcml0eSk7XG4gICAgcHJpb3JpdHlFZGl0b3IuY2xhc3NMaXN0LmFkZCh0b2RvLnByaW9yaXR5ICsgXCJQcmlvcml0eVwiKTtcbiAgICBsZXQgcHJpb3JpdHlIb3ZlclRleHQgPSBwcmlvcml0eUVkaXRvci5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRpdGxlXCIpWzBdO1xuICAgIHByaW9yaXR5SG92ZXJUZXh0LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eSArIFwiIHByaW9yaXR5XCI7XG5cbiAgICBsZXQgZGVsZXRlQnRuID0gdG9Eb1Jvd0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGVCdG5cIilbMF07XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb0RvKTtcblxuICAgIGxldCBkZXNjckVkaXRvciA9IHRvRG9Sb3dFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVzY3JpcHRpb25FZGl0QnRuXCIpWzBdO1xuICAgIGRlc2NyRWRpdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYWtlRGVzY3JpcHRpb25FZGl0YWJsZSk7XG5cbiAgICBsZXQgY29sbGFwc2VCdG4gPSB0b0RvUm93RWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbGxhcHNlQnRuXCIpWzBdO1xuICAgIGNvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDb2xsYXBzZUV4cGFuZCk7XG4gICAgdG9Eb1VJLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvUm93KTtcblxuICAgIGxldCBzZXBhcmF0b3IgPSBuZXcgRE9NVHJlZSh0b0RvVUkuY29udGFpbmVyLCB7XG4gICAgICAgIG5hbWU6IFwiZGl2XCIsXG4gICAgICAgIGNsYXNzZXM6IFtcInRvRG9TZXBhcmF0b3JcIl0sXG4gICAgfSk7XG59XG5cblxuY2xhc3MgVG9Eb1VJIHtcbiAgICBzdGF0aWMgYWN0aXZlUHJvamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHRyYWNrZXIpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0VHJhY2tlciA9IHRyYWNrZXI7XG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RUaXRsZVwiKTtcbiAgICAgICAgdGhpcy4jaW5pdENvbnRhaW5lcigpO1xuICAgIH1cblxuICAgICNpbml0Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9Eb0Rpc3BsYXlcIik7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvUm93VGVtcGxhdGVcIik7XG4gICAgfVxuXG4gICAgdXBkYXRlVG9Eb1Byb2plY3RUaXRsZSgpIHtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZVRleHRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlVGV4dFwiKTtcbiAgICAgICAgaWYoVG9Eb1VJLmFjdGl2ZVByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYodGhpcy5wcm9qZWN0VGl0bGVFbC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSkgIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdFRpdGxlRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RUaXRsZVRleHRFbC50ZXh0Q29udGVudCA9IFRvRG9VSS5hY3RpdmVQcm9qZWN0Lm5hbWU7XG4gICAgfVxuXG4gICAgbG9hZFRvRG9JdGVtcygpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgIFRvRG9VSS5hY3RpdmVQcm9qZWN0ID0gdGhpcy5wcm9qZWN0VHJhY2tlci5hY3RpdmVQcm9qZWN0O1xuICAgICAgICB0aGlzLnVwZGF0ZVRvRG9Qcm9qZWN0VGl0bGUoKTtcbiAgICAgICAgaWYoVG9Eb1VJLmFjdGl2ZVByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFsbFRvRG9zID0gVG9Eb1VJLmFjdGl2ZVByb2plY3QuZ2V0QWxsVG9Eb3MoKTtcbiAgICAgICAgYWxsVG9Eb3MuZm9yRWFjaChkaXNwbGF5VG9Ebyk7XG4gICAgfVxufVxuXG5cbmNsYXNzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvQWRkZXJEaWFsb2dcIik7XG4gICAgICAgIHRoaXMuI3JlZ2lzdGVyT3BlbkJ0bigpO1xuICAgICAgICB0aGlzLiNyZWdpc3RlckNsb3NlQnRuKCk7XG4gICAgICAgIHRoaXMuI3JlZ2lzdGVyU3VibWl0QnRuKCk7XG4gICAgfVxuXG4gICAgI2NoZWNrQWN0aXZlUHJvamVjdFByZXNlbmNlKCkge1xuICAgICAgICByZXR1cm4gVG9Eb1VJLmFjdGl2ZVByb2plY3QgIT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgICNyZWdpc3Rlck9wZW5CdG4oKSB7XG4gICAgICAgIGxldCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb0RvQnRuXCIpO1xuICAgICAgICBhZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGlmKCF0aGlzLiNjaGVja0FjdGl2ZVByb2plY3RQcmVzZW5jZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNjbGVhblVwTGVmdG92ZXJJbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dDb250YWluZXIuc2hvd01vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNjbGVhblVwTGVmdG92ZXJJbnB1dCgpIHtcbiAgICAgICAgbGV0IGFsbElucHV0cyA9IEFycmF5LmZyb20odGhpcy5kaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbiAgICAgICAgbGV0IHRleHRBcmVhSW5wdXQgPSB0aGlzLmRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIik7XG4gICAgICAgIGFsbElucHV0cy5wdXNoKHRleHRBcmVhSW5wdXQpO1xuICAgICAgICBhbGxJbnB1dHMuZm9yRWFjaChlYWNoSW5wdXQgPT4ge1xuICAgICAgICAgICAgZWFjaElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgICNyZWdpc3RlckNsb3NlQnRuKCkge1xuICAgICAgICBsZXQgZGlhbG9nQ2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ0Nsb3NlQnRuXCIpO1xuICAgICAgICBkaWFsb2dDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAjcmVnaXN0ZXJTdWJtaXRCdG4oKSB7XG4gICAgICAgIGxldCBzdWJtaXRUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvU3VibWl0SW5wdXRcIik7XG4gICAgICAgIHN1Ym1pdFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgdG9Eb0lucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b0RvSW5wdXRcIik7XG4gICAgICAgICAgICBsZXQgdG9Eb0FyZ3MgPSBBcnJheS5mcm9tKHRvRG9JbnB1dHMpLm1hcChlYWNoSW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlYWNoSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHRvRG9Ub0FkZCA9IG5ldyBUb0RvKC4uLnRvRG9BcmdzKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgVG9Eb1VJLmFjdGl2ZVByb2plY3QuYWRkVG9Ebyh0b0RvVG9BZGQpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgaWYoZS5tZXNzYWdlID09IFwiRG9uJ3QgdHJ5IHRvIGFkZCBhIGR1cGxpY2F0ZSB0b2RvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGlzcGxheVRvRG8odG9Eb1RvQWRkKTtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5sZXQgdG9Eb1VJID0gbmV3IFRvRG9VSShwcm9qZWN0VHJhY2tlcik7XG5sZXQgZGlhbG9nID0gbmV3IERpYWxvZygpO1xuXG50b0RvVUkubG9hZFRvRG9JdGVtcygpO1xuXG5leHBvcnQge1xuICAgIHRvRG9VSSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3VpL3RvZG8tdWkuanNcIjtcbmltcG9ydCBcIi4vdWkvcHJvamVjdC11aS5qc1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==