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
    figma.closePlugin();
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
// const componentKey = "8c32c8ca5ef4ba59cac6370fdda69fa90758a003";
const componentKey = "76e4f999c6adf721b494ca2cd2c9d6e92c65fe54";
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


const formatIllo = function () {
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
                duplicate.fillStyleId =
                    "S:78156f8a72740bd0d9ac694b9f76ccc0062d3781,762:8";
                //Create Mask with two layers
                shape.isMask = true;
                //Lock the illustration layer
                shape.locked = true;
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


const frameScreenShot = function () {
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
                (0,_addChildToFrame__WEBPACK_IMPORTED_MODULE_0__.addChildToFrame)(shape, frame);
                frame.strokeWeight = 1;
                frame.fills = [];
                frame.strokeStyleId =
                    "S:18b0ca4d3e7369d0df6e720bdfe89ae03fd48e81,1077:2";
                frame.cornerRadius = 4;
                frame.effectStyleId =
                    "S:d32603c45d4423b2d9ea47bdf93633fd907340e3,659:1";
                frame.name = shape.name;
                shape.name = "Screenshot";
                const newSelection = (0,_clone__WEBPACK_IMPORTED_MODULE_1__.clone)(selection);
                newSelection[0] = frame;
                figma.currentPage.selection = newSelection;
                frame.constrainProportions = true;
            }
            else {
                figma.closePlugin("Select only rectangles with image fills");
            }
        }
        else {
            figma.closePlugin("Select only rectangles with image fills");
        }
    }
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
                //set rotation to 0
                shape.rotation = 0;
                //resize the shape
                if (dimension === "horizontal") {
                    shape.resize(parentWidth, shapeHeight);
                }
                else if (dimension === "vertical") {
                    shape.resize(shapeWidth, parentHeight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2FkZENoaWxkVG9GcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2NoYW5nZVNwYWNpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9jbG9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2Zvcm1hdElsbG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9mcmFtZVNjcmVlbnNob3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9oaWRlQW5ub3RhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9zZXRGdWxsU2l6ZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDRjtBQUNVO0FBQ0E7QUFDZTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksMkVBQWU7QUFDM0I7QUFDQTtBQUNBLFlBQVksaUVBQVU7QUFDdEI7QUFDQTtBQUNBLFlBQVksMkVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQVc7QUFDZixJQUFJLG1FQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLElBQUkseUVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBZTtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckIzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywwQ0FBMEM7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ptQztBQUNwQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNkNBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZDQUFLO0FBQ3RDO0FBQ0E7QUFDQSxnQkFBZ0IsaUVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDOEI7QUFDcEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZDQUFLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDZDQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ozQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qjs7Ozs7OztVQzdEdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXRGdWxsU2l6ZSB9IGZyb20gXCIuL2Z1bmN0aW9ucy9zZXRGdWxsU2l6ZVwiO1xuaW1wb3J0IHsgZm9ybWF0SWxsbyB9IGZyb20gXCIuL2Z1bmN0aW9ucy9mb3JtYXRJbGxvXCI7XG5pbXBvcnQgeyBmcmFtZVNjcmVlblNob3QgfSBmcm9tIFwiLi9mdW5jdGlvbnMvZnJhbWVTY3JlZW5zaG90XCI7XG5pbXBvcnQgeyBoaWRlQW5ub3RhdGlvbnMgfSBmcm9tIFwiLi9mdW5jdGlvbnMvaGlkZUFubm90YXRpb25zXCI7XG5pbXBvcnQgeyBpbmNyZWFzZVNwYWNpbmcsIGRlY3JlYXNlU3BhY2luZyB9IGZyb20gXCIuL2Z1bmN0aW9ucy9jaGFuZ2VTcGFjaW5nXCI7XG4vL3NldHVwIFVJXG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJzaG93VUlcIikge1xuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICB9KTtcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gXCJmdWxsV2lkdGhcIikge1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZnVsbEhlaWdodFwiKSB7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcInZlcnRpY2FsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZnVsbFNpemVcIikge1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImZyYW1lU2NyZWVuc2hvdFwiKSB7XG4gICAgICAgICAgICBmcmFtZVNjcmVlblNob3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImZvcm1hdElsbG9cIikge1xuICAgICAgICAgICAgZm9ybWF0SWxsbygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiaGlkZUFubm90YXRpb25zXCIpIHtcbiAgICAgICAgICAgIGhpZGVBbm5vdGF0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIHNldCB1cCBtZW51IGNvbW1hbmRzXG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmcmFtZVNjcmVlblNob3RcIikge1xuICAgIGZyYW1lU2NyZWVuU2hvdCgpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJoaWRlQW5ub3RhdGlvbnNcIikge1xuICAgIGhpZGVBbm5vdGF0aW9ucygpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmdWxsV2lkdGhcIikge1xuICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbEhlaWdodFwiKSB7XG4gICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbFNpemVcIikge1xuICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmb3JtYXRJbGxvXCIpIHtcbiAgICBmb3JtYXRJbGxvKCk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImluY3JlYXNlU3BhY2luZ1wiKSB7XG4gICAgaW5jcmVhc2VTcGFjaW5nKCk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImRlY3JlYXNlU3BhY2luZ1wiKSB7XG4gICAgZGVjcmVhc2VTcGFjaW5nKCk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbiIsImNvbnN0IGFkZENoaWxkVG9GcmFtZSA9IGZ1bmN0aW9uIChzaGFwZSwgZnJhbWUpIHtcbiAgICAvL2NyZWF0ZSB2YXJpYWJsZXNcbiAgICBjb25zdCBwYXJlbnQgPSBzaGFwZS5wYXJlbnQ7XG4gICAgY29uc3Qgc2hhcGVXaWR0aCA9IHNoYXBlLndpZHRoO1xuICAgIGNvbnN0IHNoYXBlSGVpZ2h0ID0gc2hhcGUuaGVpZ2h0O1xuICAgIGNvbnN0IHNoYXBlUG9zID0gc2hhcGUucmVsYXRpdmVUcmFuc2Zvcm07XG4gICAgLy9hZGQgZnJhbWUgdG8gY2hpbGQncyBwYXJlbnRcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgIC8vYWRkIGNoaWxkIHRvIGZyYW1lXG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQoc2hhcGUpO1xuICAgIC8vIC8vcHV0IGZyYW1lIHdoZXJlIGNoaWxkIHdhcywgcHV0IGNoaWxkIGluIDAsMCBwb3NcbiAgICBmcmFtZS5yZWxhdGl2ZVRyYW5zZm9ybSA9IHNoYXBlUG9zO1xuICAgIHNoYXBlLnggPSAwO1xuICAgIHNoYXBlLnkgPSAwO1xuICAgIC8vcmVzaXplIGZyYW1lIHRvIGNoaWxkJ3Mgc2l6ZVxuICAgIGZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyhzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCk7XG4gICAgc2hhcGUuY29uc3RyYWludHMgPSB7XG4gICAgICAgIGhvcml6b250YWw6IFwiU0NBTEVcIixcbiAgICAgICAgdmVydGljYWw6IFwiU0NBTEVcIixcbiAgICB9O1xufTtcbmV4cG9ydCB7IGFkZENoaWxkVG9GcmFtZSB9O1xuIiwibGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbi8vIGNvbnN0IGNvbXBvbmVudEtleSA9IFwiOGMzMmM4Y2E1ZWY0YmE1OWNhYzYzNzBmZGRhNjlmYTkwNzU4YTAwM1wiO1xuY29uc3QgY29tcG9uZW50S2V5ID0gXCI3NmU0Zjk5OWM2YWRmNzIxYjQ5NGNhMmNkMmM5ZDZlOTJjNjVmZTU0XCI7XG5jb25zdCBzcGFjZXMgPSBbXG4gICAgXCI0XCIsXG4gICAgXCI4XCIsXG4gICAgXCIxMlwiLFxuICAgIFwiMTZcIixcbiAgICBcIjI0XCIsXG4gICAgXCIzMlwiLFxuICAgIFwiNDhcIixcbiAgICBcIjY0XCIsXG4gICAgXCI5NlwiLFxuICAgIFwiMTI4XCIsXG4gICAgXCIxNjBcIixcbiAgICBcIjE5MlwiLFxuICAgIFwiMjQwXCIsXG5dO1xuY29uc3QgY2hhbmdlU3BhY2luZyA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIklOU1RBTkNFXCIgJiZcbiAgICAgICAgICAgICAgICBzaGFwZS5tYWluQ29tcG9uZW50LmtleSA9PT0gY29tcG9uZW50S2V5KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRleHRMYWJlbDtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0V3JhcHBlciA9IHNoYXBlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0V3JhcHBlci50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dExhYmVsID0gdGV4dFdyYXBwZXIuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRMYWJlbC5jaGFyYWN0ZXJzKTtcbiAgICAgICAgICAgICAgICBsZXQgY3VyclNpemUgPSB0ZXh0TGFiZWwuY2hhcmFjdGVycztcbiAgICAgICAgICAgICAgICBsZXQgY3VyckluZGV4ID0gc3BhY2VzLmluZGV4T2YoY3VyclNpemUpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdTaXplO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaW5jcmVhc2VcIiAmJiBjdXJySW5kZXggPCBzcGFjZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gc3BhY2VzW2N1cnJJbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiZGVjcmVhc2VcIiAmJiBjdXJySW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzcGFjZXNbY3VyckluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gY3VyclNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdUb3AgPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgICAgICBzaGFwZS5wYWRkaW5nUmlnaHQgPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgICAgICBzaGFwZS5wYWRkaW5nQm90dG9tID0gbmV3U2l6ZSAvIDI7XG4gICAgICAgICAgICAgICAgc2hhcGUucGFkZGluZ0xlZnQgPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgICAgICBmaWdtYVxuICAgICAgICAgICAgICAgICAgICAubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0TGFiZWwuc2V0UmFuZ2VGb250TmFtZSgwLCB0ZXh0TGFiZWwuY2hhcmFjdGVycy5sZW5ndGgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbWlseTogXCJSb2JvdG8gTW9ub1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiUmVndWxhclwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dExhYmVsLmNoYXJhY3RlcnMgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3Qgb25lIGluc3RhbmNlIG9mIHRoZSBzcGFjaW5nIGNvbXBvbmVudC5cIik7XG4gICAgfVxufTtcbmNvbnN0IGluY3JlYXNlU3BhY2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjaGFuZ2VTcGFjaW5nKFwiaW5jcmVhc2VcIik7XG59O1xuY29uc3QgZGVjcmVhc2VTcGFjaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5nZVNwYWNpbmcoXCJkZWNyZWFzZVwiKTtcbn07XG5leHBvcnQgeyBpbmNyZWFzZVNwYWNpbmcsIGRlY3JlYXNlU3BhY2luZyB9O1xuIiwiLy9jcmVhdGUgYmFzaWMgY2xvbmUgZnVuY3Rpb25cbmZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufVxuZXhwb3J0IHsgY2xvbmUgfTtcbiIsImltcG9ydCB7IGFkZENoaWxkVG9GcmFtZSB9IGZyb20gXCIuL2FkZENoaWxkVG9GcmFtZVwiO1xuaW1wb3J0IHsgY2xvbmUgfSBmcm9tIFwiLi9jbG9uZVwiO1xuY29uc3QgZm9ybWF0SWxsbyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2hhcGUudHlwZSA9PT0gXCJSRUNUQU5HTEVcIikge1xuICAgICAgICAgICAgaWYgKHNoYXBlLmZpbGxzWzBdLnR5cGUgPT09IFwiSU1BR0VcIikge1xuICAgICAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS5zY2FsZU1vZGUgIT0gXCJDUk9QXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsbHMgPSBjbG9uZShzaGFwZS5maWxscyk7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxzWzBdLnNjYWxlTW9kZSA9IFwiQ1JPUFwiO1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5maWxscyA9IGZpbGxzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL21ha2UgbmV3IGZyYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGZyYW1lIGZpbGxzXG4gICAgICAgICAgICAgICAgbGV0IGZyYW1lRmlsbHMgPSBjbG9uZShmcmFtZS5maWxscyk7XG4gICAgICAgICAgICAgICAgZnJhbWVGaWxscyA9IFtdO1xuICAgICAgICAgICAgICAgIGZyYW1lLmZpbGxzID0gZnJhbWVGaWxscztcbiAgICAgICAgICAgICAgICBhZGRDaGlsZFRvRnJhbWUoc2hhcGUsIGZyYW1lKTtcbiAgICAgICAgICAgICAgICAvL2R1cGxpY2F0ZSBjaGlsZFxuICAgICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZSA9IHNoYXBlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZHVwbGljYXRlKTtcbiAgICAgICAgICAgICAgICAvL3JlbmFtZSBsYXllciBhbmQgdGludFxuICAgICAgICAgICAgICAgIHNoYXBlLm5hbWUgPSBcIkltYWdlXCI7XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlLm5hbWUgPSBcIlRpbnRcIjtcbiAgICAgICAgICAgICAgICAvL0NoYW5nZSB0aW50IGNvbG9yIHRvIGJsYWNrXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlLmZpbGxTdHlsZUlkID1cbiAgICAgICAgICAgICAgICAgICAgXCJTOjc4MTU2ZjhhNzI3NDBiZDBkOWFjNjk0YjlmNzZjY2MwMDYyZDM3ODEsNzYyOjhcIjtcbiAgICAgICAgICAgICAgICAvL0NyZWF0ZSBNYXNrIHdpdGggdHdvIGxheWVyc1xuICAgICAgICAgICAgICAgIHNoYXBlLmlzTWFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy9Mb2NrIHRoZSBpbGx1c3RyYXRpb24gbGF5ZXJcbiAgICAgICAgICAgICAgICBzaGFwZS5sb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk9ubHkgc2VsZWN0IG5vZGVzIHdpdGggc2luZ2xlIGltYWdlIGZpbGxzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiT25seSBzZWxlY3Qgbm9kZXMgd2l0aCBzaW5nbGUgaW1hZ2UgZmlsbHNcIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHsgZm9ybWF0SWxsbyB9O1xuIiwiaW1wb3J0IHsgYWRkQ2hpbGRUb0ZyYW1lIH0gZnJvbSBcIi4vYWRkQ2hpbGRUb0ZyYW1lXCI7XG5pbXBvcnQgeyBjbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5jb25zdCBmcmFtZVNjcmVlblNob3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIpIHtcbiAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS50eXBlID09PSBcIklNQUdFXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0uc2NhbGVNb2RlICE9IFwiQ1JPUFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxzID0gY2xvbmUoc2hhcGUuZmlsbHMpO1xuICAgICAgICAgICAgICAgICAgICBmaWxsc1swXS5zY2FsZU1vZGUgPSBcIkNST1BcIjtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuZmlsbHMgPSBmaWxscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9tYWtlIG5ldyBmcmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICBhZGRDaGlsZFRvRnJhbWUoc2hhcGUsIGZyYW1lKTtcbiAgICAgICAgICAgICAgICBmcmFtZS5zdHJva2VXZWlnaHQgPSAxO1xuICAgICAgICAgICAgICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgICAgICAgICAgICAgZnJhbWUuc3Ryb2tlU3R5bGVJZCA9XG4gICAgICAgICAgICAgICAgICAgIFwiUzoxOGIwY2E0ZDNlNzM2OWQwZGY2ZTcyMGJkZmU4OWFlMDNmZDQ4ZTgxLDEwNzc6MlwiO1xuICAgICAgICAgICAgICAgIGZyYW1lLmNvcm5lclJhZGl1cyA9IDQ7XG4gICAgICAgICAgICAgICAgZnJhbWUuZWZmZWN0U3R5bGVJZCA9XG4gICAgICAgICAgICAgICAgICAgIFwiUzpkMzI2MDNjNDVkNDQyM2IyZDllYTQ3YmRmOTM2MzNmZDkwNzM0MGUzLDY1OToxXCI7XG4gICAgICAgICAgICAgICAgZnJhbWUubmFtZSA9IHNoYXBlLm5hbWU7XG4gICAgICAgICAgICAgICAgc2hhcGUubmFtZSA9IFwiU2NyZWVuc2hvdFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IGNsb25lKHNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0aW9uWzBdID0gZnJhbWU7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uO1xuICAgICAgICAgICAgICAgIGZyYW1lLmNvbnN0cmFpblByb3BvcnRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IG9ubHkgcmVjdGFuZ2xlcyB3aXRoIGltYWdlIGZpbGxzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3Qgb25seSByZWN0YW5nbGVzIHdpdGggaW1hZ2UgZmlsbHNcIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHsgZnJhbWVTY3JlZW5TaG90IH07XG4iLCJjb25zdCBoaWRlQW5ub3RhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xuICAgIGNvbnN0IG5vZGVzID0gbm9kZS5maW5kQWxsKChub2RlKSA9PiBub2RlLm5hbWUgPT09IFwiJEFubm90YXRpb25cIik7XG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS52aXNpYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgaGlkZUFubm90YXRpb25zIH07XG4iLCJjb25zdCBzZXRGdWxsU2l6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24pIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2hhcGUudHlwZSA9PT0gXCJGUkFNRVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIkNPTVBPTkVOVFwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIklOU1RBTkNFXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiVkVDVE9SXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiU1RBUlwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIkxJTkVcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJFTExJUFNFXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiUE9MWUdPTlwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlRFWFRcIikge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gc2hhcGUucGFyZW50O1xuICAgICAgICAgICAgaWYgKChwYXJlbnQgJiYgcGFyZW50LnR5cGUgPT09IFwiRlJBTUVcIikgfHwgcGFyZW50LnR5cGUgPT09IFwiQ09NUE9ORU5UXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IHBhcmVudC53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRIZWlnaHQgPSBwYXJlbnQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlSGVpZ2h0ID0gc2hhcGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlV2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICAgICAgICAgICAgICAvL3NldCByb3RhdGlvbiB0byAwXG4gICAgICAgICAgICAgICAgc2hhcGUucm90YXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIC8vcmVzaXplIHRoZSBzaGFwZVxuICAgICAgICAgICAgICAgIGlmIChkaW1lbnNpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShwYXJlbnRXaWR0aCwgc2hhcGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkaW1lbnNpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5yZXNpemUoc2hhcGVXaWR0aCwgcGFyZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zZXQgdGhlIHNoYXBlIHBvc2l0aW9uIHRvIG9yaWdpblxuICAgICAgICAgICAgICAgIGlmIChkaW1lbnNpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLnggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkaW1lbnNpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS55ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9maW5kIGN1cnJlbnQgY29uc3RyYWludHNcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmVydGljYWxDb250cmFpbnQgPSBzaGFwZS5jb25zdHJhaW50cy52ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SG9yaXpvbnRhbENvbnRyYWludCA9IHNoYXBlLmNvbnN0cmFpbnRzLmhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgLy9zZXQgY29uc3RyYWludHNcbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5jb25zdHJhaW50cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwiU1RSRVRDSFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6IGN1cnJlbnRWZXJ0aWNhbENvbnRyYWludCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGltZW5zaW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBjdXJyZW50SG9yaXpvbnRhbENvbnRyYWludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcIlNUUkVUQ0hcIixcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdGlvbiBtdXN0IGJlIG5lc3RlZCBpbiBhIGZyYW1lLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiUGxlYXNlIHNlbGVjdCBzb21ldGhpbmcgdGhhdCBjYW4gYmUgcmVzaXplZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHsgc2V0RnVsbFNpemUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvZGUudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9