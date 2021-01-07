/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/setFullSize */ "./src/functions/setFullSize.ts");
/* harmony import */ var _functions_formatIllo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/formatIllo */ "./src/functions/formatIllo.ts");
/* harmony import */ var _functions_frameScreenshot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/frameScreenshot */ "./src/functions/frameScreenshot.ts");
/* harmony import */ var _functions_hideAnnotations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/hideAnnotations */ "./src/functions/hideAnnotations.ts");
/* harmony import */ var _functions_changeSpacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/changeSpacing */ "./src/functions/changeSpacing.ts");





//setup UI
if (figma.command === "showUI") {
    figma.showUI(__html__, {
        width: 300,
        height: 300,
    });
    figma.ui.onmessage = (message) => {
        if (message === "fullWidth") {
            (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("horizontal");
        }
        else if (message === "fullHeight") {
            (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("vertical");
        }
        else if (message === "fullSize") {
            (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("vertical");
            (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("horizontal");
        }
        else if (message === "frameScreenshot") {
            (0,_functions_frameScreenshot__WEBPACK_IMPORTED_MODULE_2__.frameScreenShot)();
        }
        else if (message === "formatIllo") {
            (0,_functions_formatIllo__WEBPACK_IMPORTED_MODULE_1__.formatIllo)();
        }
        else if (message === "hideAnnotations") {
            (0,_functions_hideAnnotations__WEBPACK_IMPORTED_MODULE_3__.hideAnnotations)();
        }
        else {
            return;
        }
    };
}
// set up menu commands
if (figma.command === "frameScreenShot") {
    (0,_functions_frameScreenshot__WEBPACK_IMPORTED_MODULE_2__.frameScreenShot)();
    //   figma.closePlugin();
}
if (figma.command === "hideAnnotations") {
    (0,_functions_hideAnnotations__WEBPACK_IMPORTED_MODULE_3__.hideAnnotations)();
    figma.closePlugin();
}
if (figma.command === "fullWidth") {
    (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("horizontal");
    figma.closePlugin();
}
if (figma.command === "fullHeight") {
    (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("vertical");
    figma.closePlugin();
}
if (figma.command === "fullSize") {
    (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("vertical");
    (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("horizontal");
    figma.closePlugin();
}
if (figma.command === "formatIllo") {
    (0,_functions_formatIllo__WEBPACK_IMPORTED_MODULE_1__.formatIllo)();
    figma.closePlugin();
}
if (figma.command === "increaseSpacing") {
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_4__.increaseSpacing)();
    figma.closePlugin();
}
if (figma.command === "decreaseSpacing") {
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_4__.decreaseSpacing)();
    figma.closePlugin();
}


/***/ }),

/***/ "./src/functions/addChildToFrame.ts":
/*!******************************************!*\
  !*** ./src/functions/addChildToFrame.ts ***!
  \******************************************/
/*! namespace exports */
/*! export addChildToFrame [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addChildToFrame": () => /* binding */ addChildToFrame
/* harmony export */ });
const addChildToFrame = function (shape, frame) {
    //create variables
    const parent = shape.parent;
    const shapeWidth = shape.width;
    const shapeHeight = shape.height;
    const shapePos = shape.relativeTransform;
    //add frame to child's parent
    parent.appendChild(frame);
    //add child to frame
    frame.appendChild(shape);
    // //put frame where child was, put child in 0,0 pos
    frame.relativeTransform = shapePos;
    shape.x = 0;
    shape.y = 0;
    //resize frame to child's size
    frame.resizeWithoutConstraints(shapeWidth, shapeHeight);
    shape.constraints = {
        horizontal: "SCALE",
        vertical: "SCALE",
    };
};



/***/ }),

/***/ "./src/functions/changeSpacing.ts":
/*!****************************************!*\
  !*** ./src/functions/changeSpacing.ts ***!
  \****************************************/
/*! namespace exports */
/*! export decreaseSpacing [provided] [no usage info] [missing usage info prevents renaming] */
/*! export increaseSpacing [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increaseSpacing": () => /* binding */ increaseSpacing,
/* harmony export */   "decreaseSpacing": () => /* binding */ decreaseSpacing
/* harmony export */ });
let selection = figma.currentPage.selection;
const componentKey = "8c32c8ca5ef4ba59cac6370fdda69fa90758a003";
const spaces = [
    "4",
    "8",
    "12",
    "16",
    "24",
    "32",
    "48",
    "64",
    "96",
    "128",
    "160",
    "192",
    "240",
];
const changeSpacing = function (direction) {
    if (selection.length === 1) {
        for (let shape of selection) {
            if (shape.type === "INSTANCE" &&
                shape.mainComponent.key === componentKey) {
                let textLabel;
                const textWrapper = shape.children[0];
                if (textWrapper.type === "FRAME") {
                    textLabel = textWrapper.children[0];
                }
                console.log(textLabel.characters);
                let currSize = textLabel.characters;
                let currIndex = spaces.indexOf(currSize);
                let newSize;
                if (direction === "increase" && currIndex < spaces.length - 1) {
                    newSize = spaces[currIndex + 1];
                }
                else if (direction === "decrease" && currIndex > 0) {
                    newSize = spaces[currIndex - 1];
                }
                else {
                    newSize = currSize;
                }
                shape.paddingTop = newSize / 2;
                shape.paddingRight = newSize / 2;
                shape.paddingBottom = newSize / 2;
                shape.paddingLeft = newSize / 2;
                figma
                    .loadFontAsync({ family: "Roboto Mono", style: "Regular" })
                    .then(() => {
                    textLabel.setRangeFontName(0, textLabel.characters.length, {
                        family: "Roboto Mono",
                        style: "Regular",
                    });
                    textLabel.characters = newSize;
                })
                    .catch((err) => {
                    console.error(err);
                });
            }
        }
    }
    else {
        figma.closePlugin("Select one instance of the spacing component.");
    }
};
const increaseSpacing = function () {
    changeSpacing("increase");
};
const decreaseSpacing = function () {
    changeSpacing("decrease");
};



/***/ }),

/***/ "./src/functions/clone.ts":
/*!********************************!*\
  !*** ./src/functions/clone.ts ***!
  \********************************/
/*! namespace exports */
/*! export clone [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clone": () => /* binding */ clone
/* harmony export */ });
//create basic clone function
function clone(val) {
    return JSON.parse(JSON.stringify(val));
}



/***/ }),

/***/ "./src/functions/formatIllo.ts":
/*!*************************************!*\
  !*** ./src/functions/formatIllo.ts ***!
  \*************************************/
/*! namespace exports */
/*! export formatIllo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatIllo": () => /* binding */ formatIllo
/* harmony export */ });
/* harmony import */ var _addChildToFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addChildToFrame */ "./src/functions/addChildToFrame.ts");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./src/functions/clone.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const keys = [
    "78156f8a72740bd0d9ac694b9f76ccc0062d3781",
];
const formatIllo = function () {
    return __awaiter(this, void 0, void 0, function* () {
        function mapStyles() {
            return __awaiter(this, void 0, void 0, function* () {
                const promises = keys.map((style) => __awaiter(this, void 0, void 0, function* () {
                    return yield figma.importStyleByKeyAsync(style);
                }));
                return yield Promise.all(promises);
            });
        }
        const styles = yield mapStyles();
        let selection = figma.currentPage.selection;
        for (let shape of selection) {
            if (shape.type === "RECTANGLE") {
                if (shape.fills[0].type === "IMAGE") {
                    if (shape.fills[0].scaleMode != "CROP") {
                        const fills = (0,_clone__WEBPACK_IMPORTED_MODULE_1__.clone)(shape.fills);
                        fills[0].scaleMode = "CROP";
                        shape.fills = fills;
                    }
                    //make new frame
                    const frame = figma.createFrame();
                    //remove frame fills
                    let frameFills = (0,_clone__WEBPACK_IMPORTED_MODULE_1__.clone)(frame.fills);
                    frameFills = [];
                    frame.fills = frameFills;
                    (0,_addChildToFrame__WEBPACK_IMPORTED_MODULE_0__.addChildToFrame)(shape, frame);
                    //duplicate child
                    const duplicate = shape.clone();
                    frame.appendChild(duplicate);
                    //rename layer and tint
                    shape.name = "Image";
                    duplicate.name = "Tint";
                    //Change tint color to black
                    duplicate.fillStyleId = styles[0].id;
                    //Create Mask with two layers
                    shape.isMask = true;
                    //clear selection
                    figma.currentPage.selection = [];
                }
                else {
                    figma.closePlugin("Only select nodes with single image fills.");
                }
            }
            else {
                figma.closePlugin("Only select nodes with single image fills");
            }
        }
    });
};



/***/ }),

/***/ "./src/functions/frameScreenshot.ts":
/*!******************************************!*\
  !*** ./src/functions/frameScreenshot.ts ***!
  \******************************************/
/*! namespace exports */
/*! export frameScreenShot [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frameScreenShot": () => /* binding */ frameScreenShot
/* harmony export */ });
/* harmony import */ var _addChildToFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addChildToFrame */ "./src/functions/addChildToFrame.ts");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./src/functions/clone.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const keys = [
    "41ab95be099656c241ec9adc7cf3a0c37ccde992",
    "18b0ca4d3e7369d0df6e720bdfe89ae03fd48e81",
    "d32603c45d4423b2d9ea47bdf93633fd907340e3",
];
const frameScreenShot = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let selection = figma.currentPage.selection;
        function mapStyles() {
            return __awaiter(this, void 0, void 0, function* () {
                const promises = keys.map((style) => __awaiter(this, void 0, void 0, function* () {
                    return yield figma.importStyleByKeyAsync(style);
                }));
                return yield Promise.all(promises);
            });
        }
        const styles = yield mapStyles();
        for (let shape of selection) {
            if (shape.type === "RECTANGLE") {
                if (shape.fills[0].type === "IMAGE") {
                    if (shape.fills[0].scaleMode != "CROP") {
                        const fills = (0,_clone__WEBPACK_IMPORTED_MODULE_1__.clone)(shape.fills);
                        fills[0].scaleMode = "CROP";
                        shape.fills = fills;
                    }
                    //make new frame
                    const frame = figma.createFrame();
                    (0,_addChildToFrame__WEBPACK_IMPORTED_MODULE_0__.addChildToFrame)(shape, frame);
                    frame.cornerRadius = 4;
                    frame.strokeWeight = 1;
                    frame.strokeStyleId = styles[1].id;
                    frame.fillStyleId = styles[0].id;
                    frame.effectStyleId = styles[2].id;
                    frame.name = shape.name;
                    shape.name = "Screenshot";
                    const newSelection = (0,_clone__WEBPACK_IMPORTED_MODULE_1__.clone)(selection);
                    newSelection[0] = frame;
                    figma.currentPage.selection = newSelection;
                    frame.constrainProportions = true;
                }
                else {
                    figma.closePlugin("Make sure your rectangle has only an image fill");
                }
            }
            else if (shape.type === "FRAME" || shape.type === "INSTANCE") {
                shape.cornerRadius = 4;
                shape.strokeWeight = 1;
                shape.strokeStyleId = styles[1].id;
                shape.fillStyleId = styles[0].id;
                shape.effectStyleId = styles[2].id;
                shape.clipsContent = true;
            }
            else {
                figma.closePlugin("Select only frames or rectangles with image fills");
            }
        }
        figma.closePlugin();
    });
};



/***/ }),

/***/ "./src/functions/hideAnnotations.ts":
/*!******************************************!*\
  !*** ./src/functions/hideAnnotations.ts ***!
  \******************************************/
/*! namespace exports */
/*! export hideAnnotations [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideAnnotations": () => /* binding */ hideAnnotations
/* harmony export */ });
const hideAnnotations = function () {
    const node = figma.currentPage;
    const nodes = node.findAll((node) => node.name === "$Annotation");
    nodes.forEach((node) => {
        if (node.visible === false) {
            node.visible = true;
        }
        else {
            node.visible = false;
        }
    });
};



/***/ }),

/***/ "./src/functions/setFullSize.ts":
/*!**************************************!*\
  !*** ./src/functions/setFullSize.ts ***!
  \**************************************/
/*! namespace exports */
/*! export setFullSize [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFullSize": () => /* binding */ setFullSize
/* harmony export */ });
const setFullSize = function (dimension) {
    let selection = figma.currentPage.selection;
    for (let shape of selection) {
        if (shape.type === "FRAME" ||
            shape.type === "COMPONENT" ||
            shape.type === "INSTANCE" ||
            shape.type === "VECTOR" ||
            shape.type === "STAR" ||
            shape.type === "LINE" ||
            shape.type === "ELLIPSE" ||
            shape.type === "POLYGON" ||
            shape.type === "RECTANGLE" ||
            shape.type === "TEXT") {
            const parent = shape.parent;
            if ((parent && parent.type === "FRAME") || parent.type === "COMPONENT") {
                const parentWidth = parent.width;
                const parentHeight = parent.height;
                const shapeHeight = shape.height;
                const shapeWidth = shape.width;
                const aspectRatio = shapeWidth / shapeHeight;
                //set rotation to 0
                shape.rotation = 0;
                //resize the shape
                if (dimension === "horizontal") {
                    //maintains the aspect ratio when the constrain proportions setting is applied
                    if (shape.constrainProportions) {
                        shape.resize(parentWidth, parentWidth / aspectRatio);
                    }
                    else {
                        shape.resize(parentWidth, shapeHeight);
                    }
                }
                else if (dimension === "vertical") {
                    //maintains the aspect ratio when the constrain proportions setting is applied
                    if (shape.constrainProportions) {
                        shape.resize(parentHeight * aspectRatio, parentHeight);
                    }
                    else {
                        shape.resize(shapeWidth, parentHeight);
                    }
                }
                //set the shape position to origin
                if (dimension === "horizontal") {
                    shape.x = 0;
                }
                else if (dimension === "vertical") {
                    shape.y = 0;
                }
                //find current constraints
                const currentVerticalContraint = shape.constraints.vertical;
                const currentHorizontalContraint = shape.constraints.horizontal;
                //set constraints
                if (dimension === "horizontal") {
                    shape.constraints = {
                        horizontal: "STRETCH",
                        vertical: currentVerticalContraint,
                    };
                }
                else if (dimension === "vertical") {
                    shape.constraints = {
                        horizontal: currentHorizontalContraint,
                        vertical: "STRETCH",
                    };
                }
            }
            else {
                figma.closePlugin("Selection must be nested in a frame.");
            }
        }
        else {
            figma.closePlugin("Please select something that can be resized.");
        }
    }
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/code.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2FkZENoaWxkVG9GcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2NoYW5nZVNwYWNpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9jbG9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2Zvcm1hdElsbG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9mcmFtZVNjcmVlbnNob3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9oaWRlQW5ub3RhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9zZXRGdWxsU2l6ZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDRjtBQUNVO0FBQ0E7QUFDZTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksMkVBQWU7QUFDM0I7QUFDQTtBQUNBLFlBQVksaUVBQVU7QUFDdEI7QUFDQTtBQUNBLFlBQVksMkVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldEZ1bGxTaXplIH0gZnJvbSBcIi4vZnVuY3Rpb25zL3NldEZ1bGxTaXplXCI7XG5pbXBvcnQgeyBmb3JtYXRJbGxvIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2Zvcm1hdElsbG9cIjtcbmltcG9ydCB7IGZyYW1lU2NyZWVuU2hvdCB9IGZyb20gXCIuL2Z1bmN0aW9ucy9mcmFtZVNjcmVlbnNob3RcIjtcbmltcG9ydCB7IGhpZGVBbm5vdGF0aW9ucyB9IGZyb20gXCIuL2Z1bmN0aW9ucy9oaWRlQW5ub3RhdGlvbnNcIjtcbmltcG9ydCB7IGluY3JlYXNlU3BhY2luZywgZGVjcmVhc2VTcGFjaW5nIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2NoYW5nZVNwYWNpbmdcIjtcbi8vc2V0dXAgVUlcbmlmIChmaWdtYS5jb21tYW5kID09PSBcInNob3dVSVwiKSB7XG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgIGhlaWdodDogMzAwLFxuICAgIH0pO1xuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBcImZ1bGxXaWR0aFwiKSB7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcImhvcml6b250YWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmdWxsSGVpZ2h0XCIpIHtcbiAgICAgICAgICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmdWxsU2l6ZVwiKSB7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZnJhbWVTY3JlZW5zaG90XCIpIHtcbiAgICAgICAgICAgIGZyYW1lU2NyZWVuU2hvdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZm9ybWF0SWxsb1wiKSB7XG4gICAgICAgICAgICBmb3JtYXRJbGxvKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJoaWRlQW5ub3RhdGlvbnNcIikge1xuICAgICAgICAgICAgaGlkZUFubm90YXRpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8gc2V0IHVwIG1lbnUgY29tbWFuZHNcbmlmIChmaWdtYS5jb21tYW5kID09PSBcImZyYW1lU2NyZWVuU2hvdFwiKSB7XG4gICAgZnJhbWVTY3JlZW5TaG90KCk7XG4gICAgLy8gICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiaGlkZUFubm90YXRpb25zXCIpIHtcbiAgICBoaWRlQW5ub3RhdGlvbnMoKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbFdpZHRoXCIpIHtcbiAgICBzZXRGdWxsU2l6ZShcImhvcml6b250YWxcIik7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImZ1bGxIZWlnaHRcIikge1xuICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImZ1bGxTaXplXCIpIHtcbiAgICBzZXRGdWxsU2l6ZShcInZlcnRpY2FsXCIpO1xuICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZm9ybWF0SWxsb1wiKSB7XG4gICAgZm9ybWF0SWxsbygpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJpbmNyZWFzZVNwYWNpbmdcIikge1xuICAgIGluY3JlYXNlU3BhY2luZygpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJkZWNyZWFzZVNwYWNpbmdcIikge1xuICAgIGRlY3JlYXNlU3BhY2luZygpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG4iLCJjb25zdCBhZGRDaGlsZFRvRnJhbWUgPSBmdW5jdGlvbiAoc2hhcGUsIGZyYW1lKSB7XG4gICAgLy9jcmVhdGUgdmFyaWFibGVzXG4gICAgY29uc3QgcGFyZW50ID0gc2hhcGUucGFyZW50O1xuICAgIGNvbnN0IHNoYXBlV2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICBjb25zdCBzaGFwZUhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICBjb25zdCBzaGFwZVBvcyA9IHNoYXBlLnJlbGF0aXZlVHJhbnNmb3JtO1xuICAgIC8vYWRkIGZyYW1lIHRvIGNoaWxkJ3MgcGFyZW50XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICAvL2FkZCBjaGlsZCB0byBmcmFtZVxuICAgIGZyYW1lLmFwcGVuZENoaWxkKHNoYXBlKTtcbiAgICAvLyAvL3B1dCBmcmFtZSB3aGVyZSBjaGlsZCB3YXMsIHB1dCBjaGlsZCBpbiAwLDAgcG9zXG4gICAgZnJhbWUucmVsYXRpdmVUcmFuc2Zvcm0gPSBzaGFwZVBvcztcbiAgICBzaGFwZS54ID0gMDtcbiAgICBzaGFwZS55ID0gMDtcbiAgICAvL3Jlc2l6ZSBmcmFtZSB0byBjaGlsZCdzIHNpemVcbiAgICBmcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQpO1xuICAgIHNoYXBlLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICBob3Jpem9udGFsOiBcIlNDQUxFXCIsXG4gICAgICAgIHZlcnRpY2FsOiBcIlNDQUxFXCIsXG4gICAgfTtcbn07XG5leHBvcnQgeyBhZGRDaGlsZFRvRnJhbWUgfTtcbiIsImxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG5jb25zdCBjb21wb25lbnRLZXkgPSBcIjhjMzJjOGNhNWVmNGJhNTljYWM2MzcwZmRkYTY5ZmE5MDc1OGEwMDNcIjtcbmNvbnN0IHNwYWNlcyA9IFtcbiAgICBcIjRcIixcbiAgICBcIjhcIixcbiAgICBcIjEyXCIsXG4gICAgXCIxNlwiLFxuICAgIFwiMjRcIixcbiAgICBcIjMyXCIsXG4gICAgXCI0OFwiLFxuICAgIFwiNjRcIixcbiAgICBcIjk2XCIsXG4gICAgXCIxMjhcIixcbiAgICBcIjE2MFwiLFxuICAgIFwiMTkyXCIsXG4gICAgXCIyNDBcIixcbl07XG5jb25zdCBjaGFuZ2VTcGFjaW5nID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiAmJlxuICAgICAgICAgICAgICAgIHNoYXBlLm1haW5Db21wb25lbnQua2V5ID09PSBjb21wb25lbnRLZXkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dExhYmVsO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRXcmFwcGVyID0gc2hhcGUuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgaWYgKHRleHRXcmFwcGVyLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0TGFiZWwgPSB0ZXh0V3JhcHBlci5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGV4dExhYmVsLmNoYXJhY3RlcnMpO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyU2l6ZSA9IHRleHRMYWJlbC5jaGFyYWN0ZXJzO1xuICAgICAgICAgICAgICAgIGxldCBjdXJySW5kZXggPSBzcGFjZXMuaW5kZXhPZihjdXJyU2l6ZSk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJpbmNyZWFzZVwiICYmIGN1cnJJbmRleCA8IHNwYWNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzcGFjZXNbY3VyckluZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkZWNyZWFzZVwiICYmIGN1cnJJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNwYWNlc1tjdXJySW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBjdXJyU2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hhcGUucGFkZGluZ1RvcCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdSaWdodCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdCb3R0b20gPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgICAgICBzaGFwZS5wYWRkaW5nTGVmdCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIGZpZ21hXG4gICAgICAgICAgICAgICAgICAgIC5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90byBNb25vXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRMYWJlbC5zZXRSYW5nZUZvbnROYW1lKDAsIHRleHRMYWJlbC5jaGFyYWN0ZXJzLmxlbmd0aCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiBcIlJvYm90byBNb25vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJSZWd1bGFyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0TGFiZWwuY2hhcmFjdGVycyA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdCBvbmUgaW5zdGFuY2Ugb2YgdGhlIHNwYWNpbmcgY29tcG9uZW50LlwiKTtcbiAgICB9XG59O1xuY29uc3QgaW5jcmVhc2VTcGFjaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5nZVNwYWNpbmcoXCJpbmNyZWFzZVwiKTtcbn07XG5jb25zdCBkZWNyZWFzZVNwYWNpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2hhbmdlU3BhY2luZyhcImRlY3JlYXNlXCIpO1xufTtcbmV4cG9ydCB7IGluY3JlYXNlU3BhY2luZywgZGVjcmVhc2VTcGFjaW5nIH07XG4iLCIvL2NyZWF0ZSBiYXNpYyBjbG9uZSBmdW5jdGlvblxuZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG5leHBvcnQgeyBjbG9uZSB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBhZGRDaGlsZFRvRnJhbWUgfSBmcm9tIFwiLi9hZGRDaGlsZFRvRnJhbWVcIjtcbmltcG9ydCB7IGNsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmNvbnN0IGtleXMgPSBbXG4gICAgXCI3ODE1NmY4YTcyNzQwYmQwZDlhYzY5NGI5Zjc2Y2NjMDA2MmQzNzgxXCIsXG5dO1xuY29uc3QgZm9ybWF0SWxsbyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBmdW5jdGlvbiBtYXBTdHlsZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0ga2V5cy5tYXAoKHN0eWxlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoc3R5bGUpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGVzID0geWllbGQgbWFwU3R5bGVzKCk7XG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0udHlwZSA9PT0gXCJJTUFHRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS5zY2FsZU1vZGUgIT0gXCJDUk9QXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxzID0gY2xvbmUoc2hhcGUuZmlsbHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbHNbMF0uc2NhbGVNb2RlID0gXCJDUk9QXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5maWxscyA9IGZpbGxzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBuZXcgZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICAvL3JlbW92ZSBmcmFtZSBmaWxsc1xuICAgICAgICAgICAgICAgICAgICBsZXQgZnJhbWVGaWxscyA9IGNsb25lKGZyYW1lLmZpbGxzKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVGaWxscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5maWxscyA9IGZyYW1lRmlsbHM7XG4gICAgICAgICAgICAgICAgICAgIGFkZENoaWxkVG9GcmFtZShzaGFwZSwgZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAvL2R1cGxpY2F0ZSBjaGlsZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGUgPSBzaGFwZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChkdXBsaWNhdGUpO1xuICAgICAgICAgICAgICAgICAgICAvL3JlbmFtZSBsYXllciBhbmQgdGludFxuICAgICAgICAgICAgICAgICAgICBzaGFwZS5uYW1lID0gXCJJbWFnZVwiO1xuICAgICAgICAgICAgICAgICAgICBkdXBsaWNhdGUubmFtZSA9IFwiVGludFwiO1xuICAgICAgICAgICAgICAgICAgICAvL0NoYW5nZSB0aW50IGNvbG9yIHRvIGJsYWNrXG4gICAgICAgICAgICAgICAgICAgIGR1cGxpY2F0ZS5maWxsU3R5bGVJZCA9IHN0eWxlc1swXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgLy9DcmVhdGUgTWFzayB3aXRoIHR3byBsYXllcnNcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuaXNNYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy9jbGVhciBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk9ubHkgc2VsZWN0IG5vZGVzIHdpdGggc2luZ2xlIGltYWdlIGZpbGxzLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk9ubHkgc2VsZWN0IG5vZGVzIHdpdGggc2luZ2xlIGltYWdlIGZpbGxzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgZm9ybWF0SWxsbyB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBhZGRDaGlsZFRvRnJhbWUgfSBmcm9tIFwiLi9hZGRDaGlsZFRvRnJhbWVcIjtcbmltcG9ydCB7IGNsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmNvbnN0IGtleXMgPSBbXG4gICAgXCI0MWFiOTViZTA5OTY1NmMyNDFlYzlhZGM3Y2YzYTBjMzdjY2RlOTkyXCIsXG4gICAgXCIxOGIwY2E0ZDNlNzM2OWQwZGY2ZTcyMGJkZmU4OWFlMDNmZDQ4ZTgxXCIsXG4gICAgXCJkMzI2MDNjNDVkNDQyM2IyZDllYTQ3YmRmOTM2MzNmZDkwNzM0MGUzXCIsXG5dO1xuY29uc3QgZnJhbWVTY3JlZW5TaG90ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGZ1bmN0aW9uIG1hcFN0eWxlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBrZXlzLm1hcCgoc3R5bGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhzdHlsZSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHlsZXMgPSB5aWVsZCBtYXBTdHlsZXMoKTtcbiAgICAgICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoc2hhcGUudHlwZSA9PT0gXCJSRUNUQU5HTEVcIikge1xuICAgICAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS50eXBlID09PSBcIklNQUdFXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXBlLmZpbGxzWzBdLnNjYWxlTW9kZSAhPSBcIkNST1BcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsbHMgPSBjbG9uZShzaGFwZS5maWxscyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsc1swXS5zY2FsZU1vZGUgPSBcIkNST1BcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLmZpbGxzID0gZmlsbHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9tYWtlIG5ldyBmcmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZENoaWxkVG9GcmFtZShzaGFwZSwgZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5jb3JuZXJSYWRpdXMgPSA0O1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5zdHJva2VXZWlnaHQgPSAxO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5zdHJva2VTdHlsZUlkID0gc3R5bGVzWzFdLmlkO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5maWxsU3R5bGVJZCA9IHN0eWxlc1swXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuZWZmZWN0U3R5bGVJZCA9IHN0eWxlc1syXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUubmFtZSA9IHNoYXBlLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLm5hbWUgPSBcIlNjcmVlbnNob3RcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gY2xvbmUoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2VsZWN0aW9uWzBdID0gZnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuY29uc3RyYWluUHJvcG9ydGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJNYWtlIHN1cmUgeW91ciByZWN0YW5nbGUgaGFzIG9ubHkgYW4gaW1hZ2UgZmlsbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzaGFwZS50eXBlID09PSBcIkZSQU1FXCIgfHwgc2hhcGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgICAgICAgICAgICAgc2hhcGUuY29ybmVyUmFkaXVzID0gNDtcbiAgICAgICAgICAgICAgICBzaGFwZS5zdHJva2VXZWlnaHQgPSAxO1xuICAgICAgICAgICAgICAgIHNoYXBlLnN0cm9rZVN0eWxlSWQgPSBzdHlsZXNbMV0uaWQ7XG4gICAgICAgICAgICAgICAgc2hhcGUuZmlsbFN0eWxlSWQgPSBzdHlsZXNbMF0uaWQ7XG4gICAgICAgICAgICAgICAgc2hhcGUuZWZmZWN0U3R5bGVJZCA9IHN0eWxlc1syXS5pZDtcbiAgICAgICAgICAgICAgICBzaGFwZS5jbGlwc0NvbnRlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3Qgb25seSBmcmFtZXMgb3IgcmVjdGFuZ2xlcyB3aXRoIGltYWdlIGZpbGxzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgZnJhbWVTY3JlZW5TaG90IH07XG4iLCJjb25zdCBoaWRlQW5ub3RhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xuICAgIGNvbnN0IG5vZGVzID0gbm9kZS5maW5kQWxsKChub2RlKSA9PiBub2RlLm5hbWUgPT09IFwiJEFubm90YXRpb25cIik7XG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS52aXNpYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgaGlkZUFubm90YXRpb25zIH07XG4iLCJjb25zdCBzZXRGdWxsU2l6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24pIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2hhcGUudHlwZSA9PT0gXCJGUkFNRVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIkNPTVBPTkVOVFwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIklOU1RBTkNFXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiVkVDVE9SXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiU1RBUlwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIkxJTkVcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJFTExJUFNFXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiUE9MWUdPTlwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlRFWFRcIikge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gc2hhcGUucGFyZW50O1xuICAgICAgICAgICAgaWYgKChwYXJlbnQgJiYgcGFyZW50LnR5cGUgPT09IFwiRlJBTUVcIikgfHwgcGFyZW50LnR5cGUgPT09IFwiQ09NUE9ORU5UXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IHBhcmVudC53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRIZWlnaHQgPSBwYXJlbnQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlSGVpZ2h0ID0gc2hhcGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlV2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHNoYXBlV2lkdGggLyBzaGFwZUhlaWdodDtcbiAgICAgICAgICAgICAgICAvL3NldCByb3RhdGlvbiB0byAwXG4gICAgICAgICAgICAgICAgc2hhcGUucm90YXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIC8vcmVzaXplIHRoZSBzaGFwZVxuICAgICAgICAgICAgICAgIGlmIChkaW1lbnNpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWFpbnRhaW5zIHRoZSBhc3BlY3QgcmF0aW8gd2hlbiB0aGUgY29uc3RyYWluIHByb3BvcnRpb25zIHNldHRpbmcgaXMgYXBwbGllZFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcGUuY29uc3RyYWluUHJvcG9ydGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShwYXJlbnRXaWR0aCwgcGFyZW50V2lkdGggLyBhc3BlY3RSYXRpbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5yZXNpemUocGFyZW50V2lkdGgsIHNoYXBlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkaW1lbnNpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICAvL21haW50YWlucyB0aGUgYXNwZWN0IHJhdGlvIHdoZW4gdGhlIGNvbnN0cmFpbiBwcm9wb3J0aW9ucyBzZXR0aW5nIGlzIGFwcGxpZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXBlLmNvbnN0cmFpblByb3BvcnRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5yZXNpemUocGFyZW50SGVpZ2h0ICogYXNwZWN0UmF0aW8sIHBhcmVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5yZXNpemUoc2hhcGVXaWR0aCwgcGFyZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3NldCB0aGUgc2hhcGUgcG9zaXRpb24gdG8gb3JpZ2luXG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUueCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpbWVuc2lvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLnkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2ZpbmQgY3VycmVudCBjb25zdHJhaW50c1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWZXJ0aWNhbENvbnRyYWludCA9IHNoYXBlLmNvbnN0cmFpbnRzLnZlcnRpY2FsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIb3Jpem9udGFsQ29udHJhaW50ID0gc2hhcGUuY29uc3RyYWludHMuaG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICAvL3NldCBjb25zdHJhaW50c1xuICAgICAgICAgICAgICAgIGlmIChkaW1lbnNpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJTVFJFVENIXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogY3VycmVudFZlcnRpY2FsQ29udHJhaW50LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkaW1lbnNpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5jb25zdHJhaW50cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IGN1cnJlbnRIb3Jpem9udGFsQ29udHJhaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6IFwiU1RSRVRDSFwiLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0aW9uIG11c3QgYmUgbmVzdGVkIGluIGEgZnJhbWUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJQbGVhc2Ugc2VsZWN0IHNvbWV0aGluZyB0aGF0IGNhbiBiZSByZXNpemVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgeyBzZXRGdWxsU2l6ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29kZS50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=