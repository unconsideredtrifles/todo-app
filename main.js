/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        let isoDateStr = this.#date.toISOString();
        let isoDatePart = isoDateStr.split("T")[0];
        let isoDatePartArr = isoDatePart.split("-");
        isoDatePartArr.reverse();
        isoDatePartArr[0] = isoDatePartArr[0].padStart(2, "0");
        isoDatePartArr[1] = isoDatePartArr[1].padStart(2, "0");
        return isoDatePartArr.join("/");
    }

    static convertToDateArgs(dateStr) {
        /* this transforms dateStr into an array compatible
         * for arguments in Date constructor (with spread syntax)
         * for example, "18/1/2021" becomes [2021, 1, 18]
         */
        let dateArr = convertToDateArr(dateStr);
        dateArr.reverse();
        dateArr[1]--; /* months start from 0 (not 1) */
        return dateArr;
    }
}


function convertToDateArr(dateStr) {
    /* convert date string into an array of numbers.
     * "18/01/2021" becomes [18, 1, 2021];
     */
    let dateArr = dateStr.split("/");
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

        let day = this.#dateArr[0];
        let month = this.#dateArr[1];

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
    }

    removeProject(projectName) {
        let idx2Delete = this.#allProjects.findIndex(eachProject => 
            eachProject.name === projectName
        );
        this.#allProjects.splice(idx2Delete, 1);
    }

    isDuplicateProject(project) {
        return this.#allProjects.some(eachProject => 
            eachProject.name === project.name
        );
    }
}

let projectTracker = new ProjectTracker();


class Project {
    #toDoArr;

    constructor(name = "default", toDoArr = []) {
        this.name = name;
        this.#toDoArr = toDoArr;
    }

    addToDo(toDo) {
        if(this.isDuplicateToDo(toDo)) {
            return;
        }
        this.#toDoArr.push(toDo);
    }

    isDuplicateToDo(toDo) {
        return this.#toDoArr.some(eachToDo => {
            let titleEquality = eachToDo.title === toDo.title;
            let descrEquality = eachToDo.description === toDo.description;
            let priorityEquality = eachToDo.priority === toDo.priority;
            let dueDateEquality = eachToDo.dueDate === toDo.dueDate;

            return (titleEquality && descrEquality && 
                priorityEquality && dueDateEquality);
        })
    }

    getAllToDos() {
        return this.#toDoArr;
    }

    removeToDo(toDoID) {
        let idx2Delete = this.#toDoArr.findIndex(
            eachToDo => eachToDo.toDoID === toDoID
        );
        this.#toDoArr.splice(idx2Delete, 1);
    }
}


class ToDo {
    static nextToDoID = 0;
    #dueDate;

    constructor(title, description, priority, dueDate, parentTodo = null, childTodo = null) {
        this.toDoID = ToDo.nextToDoID++;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;

        this.parentTodo = parentTodo;
        this.childTodo = childTodo;

    }

    get dueDate() {
        return this.#dueDate.getDateStr();
    }

    set dueDate(dueDate) {
        let dateValidator = new _dates_date_js__WEBPACK_IMPORTED_MODULE_0__.DateValidator(dueDate);
        let status = dateValidator.validate();

        this.#dueDate = new _dates_date_js__WEBPACK_IMPORTED_MODULE_0__.ToDoDate(dueDate);
    }
}



/***/ }),

/***/ "./src/todos/todo-data.json":
/*!**********************************!*\
  !*** ./src/todos/todo-data.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"todos":[["Run Grocery","Run Grocery at tomorrow","high","06/11/2023"],["Take the trash out","Take the trash out next Sunday","medium","12/11/2023"],["Go to the phone repair store","Go to the phone repair store to see if my phone is done fixing","medium","8/11/2023"],["Eat the pack of waffle","Eat the pack of waffle in the fridge before getting expired","low","6/11/2023"]]}');

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos/todo.js */ "./src/todos/todo.js");
/* harmony import */ var _todos_todo_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos/todo-data.json */ "./src/todos/todo-data.json");



let defaultProject = new _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.Project();
let workProject = new _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.Project("work");

for(let eachToDoArg of _todos_todo_data_json__WEBPACK_IMPORTED_MODULE_1__.todos) {
    let eachToDo = new _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(...eachToDoArg);
    defaultProject.addToDo(eachToDo);
}

_todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.addProject(defaultProject);
_todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.addProject(workProject);

let allProjects = _todos_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectTracker.getAllProjects();
let projectList = document.createElement("ul");

allProjects.forEach(eachProject => {
    let projectItem = document.createElement("li");
    projectItem.textContent = eachProject.name;
    projectList.appendChild(projectItem);
});

document.body.appendChild(projectList);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNsQjs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGlFQUFrQjtBQUMvQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsWUFBWSw0REFBVTtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDREQUFVO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDREQUFVO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMEI7OztBQUcxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyx5REFBYTtBQUM3Qzs7QUFFQSw0QkFBNEIsb0RBQVE7QUFDcEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0dBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdFO0FBQ2xCOztBQUU5Qyx5QkFBeUIsbURBQU87QUFDaEMsc0JBQXNCLG1EQUFPOztBQUU3Qix1QkFBdUIsd0RBQWM7QUFDckMsdUJBQXVCLGdEQUFJO0FBQzNCO0FBQ0E7O0FBRUEsMERBQWM7QUFDZCwwREFBYzs7QUFFZCxrQkFBa0IsMERBQWM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZGF0ZXMvZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9lcnJvcnMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbWlzYy91dGlsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG9zL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0RpcmVjdEluc3RhbmNlT2YsIGdldFByb3RvdHlwZX0gZnJvbSBcIi4uL21pc2MvdXRpbC5qc1wiO1xuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3IuanNcIjtcblxuY2xhc3MgVG9Eb0RhdGUge1xuICAgICNkYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0ZVN0cikge1xuICAgICAgICBsZXQgZGF0ZUFyZ3MgPSBUb0RvRGF0ZS5jb252ZXJ0VG9EYXRlQXJncyhkYXRlU3RyKTtcbiAgICAgICAgdGhpcy4jZGF0ZSA9IG5ldyBEYXRlKC4uLmRhdGVBcmdzKTtcbiAgICB9XG5cbiAgICBnZXREYXRlU3RyKCkge1xuICAgICAgICBsZXQgaXNvRGF0ZVN0ciA9IHRoaXMuI2RhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgbGV0IGlzb0RhdGVQYXJ0ID0gaXNvRGF0ZVN0ci5zcGxpdChcIlRcIilbMF07XG4gICAgICAgIGxldCBpc29EYXRlUGFydEFyciA9IGlzb0RhdGVQYXJ0LnNwbGl0KFwiLVwiKTtcbiAgICAgICAgaXNvRGF0ZVBhcnRBcnIucmV2ZXJzZSgpO1xuICAgICAgICBpc29EYXRlUGFydEFyclswXSA9IGlzb0RhdGVQYXJ0QXJyWzBdLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgICAgaXNvRGF0ZVBhcnRBcnJbMV0gPSBpc29EYXRlUGFydEFyclsxXS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICAgIHJldHVybiBpc29EYXRlUGFydEFyci5qb2luKFwiL1wiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udmVydFRvRGF0ZUFyZ3MoZGF0ZVN0cikge1xuICAgICAgICAvKiB0aGlzIHRyYW5zZm9ybXMgZGF0ZVN0ciBpbnRvIGFuIGFycmF5IGNvbXBhdGlibGVcbiAgICAgICAgICogZm9yIGFyZ3VtZW50cyBpbiBEYXRlIGNvbnN0cnVjdG9yICh3aXRoIHNwcmVhZCBzeW50YXgpXG4gICAgICAgICAqIGZvciBleGFtcGxlLCBcIjE4LzEvMjAyMVwiIGJlY29tZXMgWzIwMjEsIDEsIDE4XVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGRhdGVBcnIgPSBjb252ZXJ0VG9EYXRlQXJyKGRhdGVTdHIpO1xuICAgICAgICBkYXRlQXJyLnJldmVyc2UoKTtcbiAgICAgICAgZGF0ZUFyclsxXS0tOyAvKiBtb250aHMgc3RhcnQgZnJvbSAwIChub3QgMSkgKi9cbiAgICAgICAgcmV0dXJuIGRhdGVBcnI7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0RhdGVBcnIoZGF0ZVN0cikge1xuICAgIC8qIGNvbnZlcnQgZGF0ZSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBudW1iZXJzLlxuICAgICAqIFwiMTgvMDEvMjAyMVwiIGJlY29tZXMgWzE4LCAxLCAyMDIxXTtcbiAgICAgKi9cbiAgICBsZXQgZGF0ZUFyciA9IGRhdGVTdHIuc3BsaXQoXCIvXCIpO1xuICAgIHJldHVybiBkYXRlQXJyLm1hcChOdW1iZXIpO1xufVxuXG5cbmNsYXNzIERhdGVWYWxpZGF0b3Ige1xuICAgICNkYXRlQXJyOyBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGVTdHIpIHtcbiAgICAgICAgdGhpcy4jZGF0ZUFyciA9IGNvbnZlcnRUb0RhdGVBcnIoZGF0ZVN0cik7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIGlmICghaXNEaXJlY3RJbnN0YW5jZU9mKHRoaXMuI2RhdGVBcnIsIEFycmF5KSB8fCB0aGlzLiNkYXRlQXJyLmxlbmd0aCAhPSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWZBbGxOdW1iZXJzID0gdGhpcy4jZGF0ZUFyci5ldmVyeShlYWNoTnVtID0+ICFpc05hTihlYWNoTnVtKSk7XG5cbiAgICAgICAgaWYgKCFpZkFsbE51bWJlcnMpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoXCJudW1iZXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF5ID0gdGhpcy4jZGF0ZUFyclswXTtcbiAgICAgICAgbGV0IG1vbnRoID0gdGhpcy4jZGF0ZUFyclsxXTtcblxuICAgICAgICBsZXQgaWZWYWxpZERheSA9IGRheSA+PSAxICYmIGRheSA8PSBEYXRlVmFsaWRhdG9yLmdldERheXNJbkFNb250aChkYXkpO1xuICAgICAgICBpZighaWZWYWxpZERheSkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihcImRheVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZlZhbGlkTW9udGggPSBtb250aCA+PSAxICYmIG1vbnRoIDw9IDEyO1xuICAgICAgICBpZighaWZWYWxpZE1vbnRoKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwibW9udGhcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGF5c0luQU1vbnRoKG1vbnRoKSB7XG4gICAgICAgIGxldCBtb250aHNXaXRoMzBEYXlzID0gWzQsIDYsIDcsIDksIDExXTtcbiAgICAgICAgaWYgKG1vbnRoc1dpdGgzMERheXMuaW5jbHVkZXMobW9udGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDMxO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBUb0RvRGF0ZSxcbiAgICBEYXRlVmFsaWRhdG9yLFxufTsiLCJmdW5jdGlvbiB0aHJvd0Vycm9yKGVycm9yVHlwZSkge1xuICAgIGxldCBlcnJvcnMgPSB7XG4gICAgICAgIG51bWJlcjogbmV3IE51bWJlckVycm9yKCksXG4gICAgICAgIGRheTogbmV3IERheUVycm9yKCksXG4gICAgICAgIG1vbnRoOiBuZXcgTW9udGhFcnJvcigpLFxuICAgIH07XG5cbiAgICBsZXQgZXJyb3JUb1Rocm93ID0gZXJyb3JzW2Vycm9yVHlwZV07XG4gICAgZXJyb3JUb1Rocm93LnRocm93KCk7XG59XG5cblxuY2xhc3MgTnVtYmVyRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGVycm9yTWVzc2FnZSkge1xuICAgICAgICBpZihlcnJvck1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIml0IG11c3QgYmUgYSB2YWxpZCBudW1iZXJcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZTtcbiAgICB9XG5cbiAgICB0aHJvdygpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcih0aGlzLmVycm9yTWVzc2FnZSk7XG4gICAgfVxufVxuXG5cbmNsYXNzIERheUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgaWYoZXJyb3JNZXNzYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJEYXkgc2hvdWxkIGJlIGluIGEgcmFuZ2UgZnJvbSAxIHRvIDMxXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICAgfVxuXG4gICAgdGhyb3coKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKHRoaXMuZXJyb3JNZXNzYWdlKTtcbiAgICB9XG59XG5cblxuY2xhc3MgTW9udGhFcnJvciB7XG4gICAgY29uc3RydWN0b3IoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGlmKGVycm9yTWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiTW9udGggc2hvdWxkIGJlIGluIGEgcmFuZ2UgZnJvbSAxIHRvIDEyXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICAgfVxuXG4gICAgdGhyb3coKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKHRoaXMuZXJyb3JNZXNzYWdlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgdGhyb3dFcnJvcixcbn07IiwiZnVuY3Rpb24gaXNEaXJlY3RJbnN0YW5jZU9mKGluc3RhbmNlLCBjb25zdHJ1Y3Rvcikge1xuICAgIGxldCBpbnN0YW5jZVByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZSk7XG4gICAgcmV0dXJuIGluc3RhbmNlUHJvdG90eXBlID09PSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG59XG5cbmZ1bmN0aW9uIGdldFByb3RvdHlwZShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG59XG5cbmV4cG9ydCB7XG4gICAgaXNEaXJlY3RJbnN0YW5jZU9mLFxuICAgIGdldFByb3RvdHlwZSxcbn07IiwiaW1wb3J0IHtcbiAgICBUb0RvRGF0ZSwgXG4gICAgRGF0ZVZhbGlkYXRvcixcbn0gZnJvbSBcIi4uL2RhdGVzL2RhdGUuanNcIjtcblxuXG5jbGFzcyBQcm9qZWN0VHJhY2tlciB7XG4gICAgI2FsbFByb2plY3RzO1xuXG4gICAgY29uc3RydWN0b3IoYWxsUHJvamVjdHMgPSBbXSkge1xuICAgICAgICB0aGlzLiNhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzO1xuICAgIH1cblxuICAgIGdldEFsbFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jYWxsUHJvamVjdHM7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGlmKHRoaXMuaXNEdXBsaWNhdGVQcm9qZWN0KHByb2plY3QpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBpZHgyRGVsZXRlID0gdGhpcy4jYWxsUHJvamVjdHMuZmluZEluZGV4KGVhY2hQcm9qZWN0ID0+IFxuICAgICAgICAgICAgZWFjaFByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy4jYWxsUHJvamVjdHMuc3BsaWNlKGlkeDJEZWxldGUsIDEpO1xuICAgIH1cblxuICAgIGlzRHVwbGljYXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNhbGxQcm9qZWN0cy5zb21lKGVhY2hQcm9qZWN0ID0+IFxuICAgICAgICAgICAgZWFjaFByb2plY3QubmFtZSA9PT0gcHJvamVjdC5uYW1lXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5sZXQgcHJvamVjdFRyYWNrZXIgPSBuZXcgUHJvamVjdFRyYWNrZXIoKTtcblxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICAjdG9Eb0FycjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcImRlZmF1bHRcIiwgdG9Eb0FyciA9IFtdKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuI3RvRG9BcnIgPSB0b0RvQXJyO1xuICAgIH1cblxuICAgIGFkZFRvRG8odG9Ebykge1xuICAgICAgICBpZih0aGlzLmlzRHVwbGljYXRlVG9Ebyh0b0RvKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI3RvRG9BcnIucHVzaCh0b0RvKTtcbiAgICB9XG5cbiAgICBpc0R1cGxpY2F0ZVRvRG8odG9Ebykge1xuICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0Fyci5zb21lKGVhY2hUb0RvID0+IHtcbiAgICAgICAgICAgIGxldCB0aXRsZUVxdWFsaXR5ID0gZWFjaFRvRG8udGl0bGUgPT09IHRvRG8udGl0bGU7XG4gICAgICAgICAgICBsZXQgZGVzY3JFcXVhbGl0eSA9IGVhY2hUb0RvLmRlc2NyaXB0aW9uID09PSB0b0RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5RXF1YWxpdHkgPSBlYWNoVG9Eby5wcmlvcml0eSA9PT0gdG9Eby5wcmlvcml0eTtcbiAgICAgICAgICAgIGxldCBkdWVEYXRlRXF1YWxpdHkgPSBlYWNoVG9Eby5kdWVEYXRlID09PSB0b0RvLmR1ZURhdGU7XG5cbiAgICAgICAgICAgIHJldHVybiAodGl0bGVFcXVhbGl0eSAmJiBkZXNjckVxdWFsaXR5ICYmIFxuICAgICAgICAgICAgICAgIHByaW9yaXR5RXF1YWxpdHkgJiYgZHVlRGF0ZUVxdWFsaXR5KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRBbGxUb0RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9BcnI7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9Ebyh0b0RvSUQpIHtcbiAgICAgICAgbGV0IGlkeDJEZWxldGUgPSB0aGlzLiN0b0RvQXJyLmZpbmRJbmRleChcbiAgICAgICAgICAgIGVhY2hUb0RvID0+IGVhY2hUb0RvLnRvRG9JRCA9PT0gdG9Eb0lEXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuI3RvRG9BcnIuc3BsaWNlKGlkeDJEZWxldGUsIDEpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBUb0RvIHtcbiAgICBzdGF0aWMgbmV4dFRvRG9JRCA9IDA7XG4gICAgI2R1ZURhdGU7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBwYXJlbnRUb2RvID0gbnVsbCwgY2hpbGRUb2RvID0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvRG9JRCA9IFRvRG8ubmV4dFRvRG9JRCsrO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXG4gICAgICAgIHRoaXMucGFyZW50VG9kbyA9IHBhcmVudFRvZG87XG4gICAgICAgIHRoaXMuY2hpbGRUb2RvID0gY2hpbGRUb2RvO1xuXG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlLmdldERhdGVTdHIoKTtcbiAgICB9XG5cbiAgICBzZXQgZHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIGxldCBkYXRlVmFsaWRhdG9yID0gbmV3IERhdGVWYWxpZGF0b3IoZHVlRGF0ZSk7XG4gICAgICAgIGxldCBzdGF0dXMgPSBkYXRlVmFsaWRhdG9yLnZhbGlkYXRlKCk7XG5cbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IG5ldyBUb0RvRGF0ZShkdWVEYXRlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgVG9EbyxcbiAgICBQcm9qZWN0LFxuICAgIHByb2plY3RUcmFja2VyLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHByb2plY3RUcmFja2VyLCBQcm9qZWN0LCBUb0RvIH0gZnJvbSBcIi4vdG9kb3MvdG9kby5qc1wiO1xuaW1wb3J0IHRvRG9EYXRhIGZyb20gXCIuL3RvZG9zL3RvZG8tZGF0YS5qc29uXCI7XG5cbmxldCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XG5sZXQgd29ya1Byb2plY3QgPSBuZXcgUHJvamVjdChcIndvcmtcIik7XG5cbmZvcihsZXQgZWFjaFRvRG9Bcmcgb2YgdG9Eb0RhdGEudG9kb3MpIHtcbiAgICBsZXQgZWFjaFRvRG8gPSBuZXcgVG9EbyguLi5lYWNoVG9Eb0FyZyk7XG4gICAgZGVmYXVsdFByb2plY3QuYWRkVG9EbyhlYWNoVG9Ebyk7XG59XG5cbnByb2plY3RUcmFja2VyLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xucHJvamVjdFRyYWNrZXIuYWRkUHJvamVjdCh3b3JrUHJvamVjdCk7XG5cbmxldCBhbGxQcm9qZWN0cyA9IHByb2plY3RUcmFja2VyLmdldEFsbFByb2plY3RzKCk7XG5sZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbmFsbFByb2plY3RzLmZvckVhY2goZWFjaFByb2plY3QgPT4ge1xuICAgIGxldCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IGVhY2hQcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xufSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=