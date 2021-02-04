/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/setFullSize */ "./src/functions/setFullSize.ts");
/* harmony import */ var _functions_formatIllo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/formatIllo */ "./src/functions/formatIllo.ts");
/* harmony import */ var _functions_frameScreenshot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/frameScreenshot */ "./src/functions/frameScreenshot.ts");
/* harmony import */ var _functions_hideAnnotations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/hideAnnotations */ "./src/functions/hideAnnotations.ts");
/* harmony import */ var _functions_autolayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/autolayout */ "./src/functions/autolayout.ts");
/* harmony import */ var _functions_changeSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/changeSpacing */ "./src/functions/changeSpacing.ts");






//setup UI
if (figma.command === "showUI") {
    figma.showUI(__html__, {
        width: 300,
        height: 225,
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
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_5__.increaseSpacing)();
}
if (figma.command === "decreaseSpacing") {
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_5__.decreaseSpacing)();
}
if (figma.command === "itemsStretch") {
    (0,_functions_autolayout__WEBPACK_IMPORTED_MODULE_4__.itemsStretch)();
}
if (figma.command === "justifyBetween") {
    (0,_functions_autolayout__WEBPACK_IMPORTED_MODULE_4__.justifyBetween)();
}


/***/ }),

/***/ "./src/functions/addChildToFrame.ts":
/*!******************************************!*\
  !*** ./src/functions/addChildToFrame.ts ***!
  \******************************************/
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

/***/ "./src/functions/autolayout.ts":
/*!*************************************!*\
  !*** ./src/functions/autolayout.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemsStretch": () => /* binding */ itemsStretch,
/* harmony export */   "justifyBetween": () => /* binding */ justifyBetween
/* harmony export */ });
const itemsStretch = function () {
    let selection = figma.currentPage.selection;
    if (selection.length === 0) {
        figma.closePlugin("Select at least one autolayout frame");
    }
    for (let shape of selection) {
        if (shape.type === "FRAME") {
            if (shape.layoutMode !== "NONE") {
                const children = shape.children;
                for (let child of children) {
                    child.layoutAlign = "STRETCH";
                }
            }
            else {
                figma.closePlugin("Select autolayout frames only.");
            }
        }
        else {
            figma.closePlugin("Select autolayout frames only.");
        }
    }
    figma.closePlugin("Items set to stretch");
};
const justifyBetween = function () {
    let result = "";
    let selection = figma.currentPage.selection;
    if (selection.length === 0) {
        figma.closePlugin("Select at least one autolayout frame");
    }
    for (let shape of selection) {
        if (shape.type === "FRAME") {
            if (shape.layoutMode !== "NONE") {
                if (shape.primaryAxisAlignItems === "SPACE_BETWEEN") {
                    shape.primaryAxisAlignItems = "MIN";
                    result = "start";
                }
                else {
                    shape.primaryAxisAlignItems = "SPACE_BETWEEN";
                    result = "space-between";
                }
            }
            else {
                figma.closePlugin("Select autolayout frames only.");
            }
        }
        else {
            figma.closePlugin("Select autolayout frames only.");
        }
    }
    figma.closePlugin(`Items justified ${result}`);
};



/***/ }),

/***/ "./src/functions/changeSpacing.ts":
/*!****************************************!*\
  !*** ./src/functions/changeSpacing.ts ***!
  \****************************************/
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
    for (let shape of selection) {
        let newSize;
        if (shape.type === "INSTANCE" && shape.mainComponent.key === componentKey) {
            let textLabel;
            const textWrapper = shape.children[0];
            if (textWrapper.type === "FRAME") {
                textLabel = textWrapper.children[0];
            }
            console.log(textLabel.characters);
            let currSize = textLabel.characters;
            let currIndex = spaces.indexOf(currSize);
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
            shape.primaryAxisSizingMode = "AUTO";
            shape.counterAxisSizingMode = "AUTO";
            shape.primaryAxisAlignItems = "CENTER";
            shape.counterAxisAlignItems = "CENTER";
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
    figma.closePlugin();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2FkZENoaWxkVG9GcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2F1dG9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9jaGFuZ2VTcGFjaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvY2xvbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9mb3JtYXRJbGxvLnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvZnJhbWVTY3JlZW5zaG90LnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvaGlkZUFubm90YXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvc2V0RnVsbFNpemUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNGO0FBQ1U7QUFDQTtBQUNRO0FBQ087QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QixZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLDJFQUFlO0FBQzNCO0FBQ0E7QUFDQSxZQUFZLGlFQUFVO0FBQ3RCO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7VUMxRXZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0RnVsbFNpemUgfSBmcm9tIFwiLi9mdW5jdGlvbnMvc2V0RnVsbFNpemVcIjtcbmltcG9ydCB7IGZvcm1hdElsbG8gfSBmcm9tIFwiLi9mdW5jdGlvbnMvZm9ybWF0SWxsb1wiO1xuaW1wb3J0IHsgZnJhbWVTY3JlZW5TaG90IH0gZnJvbSBcIi4vZnVuY3Rpb25zL2ZyYW1lU2NyZWVuc2hvdFwiO1xuaW1wb3J0IHsgaGlkZUFubm90YXRpb25zIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2hpZGVBbm5vdGF0aW9uc1wiO1xuaW1wb3J0IHsgaXRlbXNTdHJldGNoLCBqdXN0aWZ5QmV0d2VlbiB9IGZyb20gXCIuL2Z1bmN0aW9ucy9hdXRvbGF5b3V0XCI7XG5pbXBvcnQgeyBpbmNyZWFzZVNwYWNpbmcsIGRlY3JlYXNlU3BhY2luZyB9IGZyb20gXCIuL2Z1bmN0aW9ucy9jaGFuZ2VTcGFjaW5nXCI7XG4vL3NldHVwIFVJXG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJzaG93VUlcIikge1xuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICBoZWlnaHQ6IDIyNSxcbiAgICB9KTtcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gXCJmdWxsV2lkdGhcIikge1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZnVsbEhlaWdodFwiKSB7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcInZlcnRpY2FsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZnVsbFNpemVcIikge1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImZyYW1lU2NyZWVuc2hvdFwiKSB7XG4gICAgICAgICAgICBmcmFtZVNjcmVlblNob3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImZvcm1hdElsbG9cIikge1xuICAgICAgICAgICAgZm9ybWF0SWxsbygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiaGlkZUFubm90YXRpb25zXCIpIHtcbiAgICAgICAgICAgIGhpZGVBbm5vdGF0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIHNldCB1cCBtZW51IGNvbW1hbmRzXG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmcmFtZVNjcmVlblNob3RcIikge1xuICAgIGZyYW1lU2NyZWVuU2hvdCgpO1xuICAgIC8vICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImhpZGVBbm5vdGF0aW9uc1wiKSB7XG4gICAgaGlkZUFubm90YXRpb25zKCk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImZ1bGxXaWR0aFwiKSB7XG4gICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmdWxsSGVpZ2h0XCIpIHtcbiAgICBzZXRGdWxsU2l6ZShcInZlcnRpY2FsXCIpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmdWxsU2l6ZVwiKSB7XG4gICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICBzZXRGdWxsU2l6ZShcImhvcml6b250YWxcIik7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImZvcm1hdElsbG9cIikge1xuICAgIGZvcm1hdElsbG8oKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiaW5jcmVhc2VTcGFjaW5nXCIpIHtcbiAgICBpbmNyZWFzZVNwYWNpbmcoKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImRlY3JlYXNlU3BhY2luZ1wiKSB7XG4gICAgZGVjcmVhc2VTcGFjaW5nKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJpdGVtc1N0cmV0Y2hcIikge1xuICAgIGl0ZW1zU3RyZXRjaCgpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwianVzdGlmeUJldHdlZW5cIikge1xuICAgIGp1c3RpZnlCZXR3ZWVuKCk7XG59XG4iLCJjb25zdCBhZGRDaGlsZFRvRnJhbWUgPSBmdW5jdGlvbiAoc2hhcGUsIGZyYW1lKSB7XG4gICAgLy9jcmVhdGUgdmFyaWFibGVzXG4gICAgY29uc3QgcGFyZW50ID0gc2hhcGUucGFyZW50O1xuICAgIGNvbnN0IHNoYXBlV2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICBjb25zdCBzaGFwZUhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICBjb25zdCBzaGFwZVBvcyA9IHNoYXBlLnJlbGF0aXZlVHJhbnNmb3JtO1xuICAgIC8vYWRkIGZyYW1lIHRvIGNoaWxkJ3MgcGFyZW50XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICAvL2FkZCBjaGlsZCB0byBmcmFtZVxuICAgIGZyYW1lLmFwcGVuZENoaWxkKHNoYXBlKTtcbiAgICAvLyAvL3B1dCBmcmFtZSB3aGVyZSBjaGlsZCB3YXMsIHB1dCBjaGlsZCBpbiAwLDAgcG9zXG4gICAgZnJhbWUucmVsYXRpdmVUcmFuc2Zvcm0gPSBzaGFwZVBvcztcbiAgICBzaGFwZS54ID0gMDtcbiAgICBzaGFwZS55ID0gMDtcbiAgICAvL3Jlc2l6ZSBmcmFtZSB0byBjaGlsZCdzIHNpemVcbiAgICBmcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQpO1xuICAgIHNoYXBlLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICBob3Jpem9udGFsOiBcIlNDQUxFXCIsXG4gICAgICAgIHZlcnRpY2FsOiBcIlNDQUxFXCIsXG4gICAgfTtcbn07XG5leHBvcnQgeyBhZGRDaGlsZFRvRnJhbWUgfTtcbiIsImNvbnN0IGl0ZW1zU3RyZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBhdXRvbGF5b3V0IGZyYW1lXCIpO1xuICAgIH1cbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgaWYgKHNoYXBlLmxheW91dE1vZGUgIT09IFwiTk9ORVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzaGFwZS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF1dG9sYXlvdXQgZnJhbWVzIG9ubHkuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3QgYXV0b2xheW91dCBmcmFtZXMgb25seS5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJJdGVtcyBzZXQgdG8gc3RyZXRjaFwiKTtcbn07XG5jb25zdCBqdXN0aWZ5QmV0d2VlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBhdXRvbGF5b3V0IGZyYW1lXCIpO1xuICAgIH1cbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgaWYgKHNoYXBlLmxheW91dE1vZGUgIT09IFwiTk9ORVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoYXBlLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9PT0gXCJTUEFDRV9CRVRXRUVOXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJNSU5cIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJzdGFydFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJTUEFDRV9CRVRXRUVOXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwic3BhY2UtYmV0d2VlblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF1dG9sYXlvdXQgZnJhbWVzIG9ubHkuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3QgYXV0b2xheW91dCBmcmFtZXMgb25seS5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oYEl0ZW1zIGp1c3RpZmllZCAke3Jlc3VsdH1gKTtcbn07XG5leHBvcnQgeyBpdGVtc1N0cmV0Y2gsIGp1c3RpZnlCZXR3ZWVuIH07XG4iLCJsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuY29uc3QgY29tcG9uZW50S2V5ID0gXCI4YzMyYzhjYTVlZjRiYTU5Y2FjNjM3MGZkZGE2OWZhOTA3NThhMDAzXCI7XG5jb25zdCBzcGFjZXMgPSBbXG4gICAgXCI0XCIsXG4gICAgXCI4XCIsXG4gICAgXCIxMlwiLFxuICAgIFwiMTZcIixcbiAgICBcIjI0XCIsXG4gICAgXCIzMlwiLFxuICAgIFwiNDhcIixcbiAgICBcIjY0XCIsXG4gICAgXCI5NlwiLFxuICAgIFwiMTI4XCIsXG4gICAgXCIxNjBcIixcbiAgICBcIjE5MlwiLFxuICAgIFwiMjQwXCIsXG5dO1xuY29uc3QgY2hhbmdlU3BhY2luZyA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgbGV0IG5ld1NpemU7XG4gICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIklOU1RBTkNFXCIgJiYgc2hhcGUubWFpbkNvbXBvbmVudC5rZXkgPT09IGNvbXBvbmVudEtleSkge1xuICAgICAgICAgICAgbGV0IHRleHRMYWJlbDtcbiAgICAgICAgICAgIGNvbnN0IHRleHRXcmFwcGVyID0gc2hhcGUuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBpZiAodGV4dFdyYXBwZXIudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgdGV4dExhYmVsID0gdGV4dFdyYXBwZXIuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0TGFiZWwuY2hhcmFjdGVycyk7XG4gICAgICAgICAgICBsZXQgY3VyclNpemUgPSB0ZXh0TGFiZWwuY2hhcmFjdGVycztcbiAgICAgICAgICAgIGxldCBjdXJySW5kZXggPSBzcGFjZXMuaW5kZXhPZihjdXJyU2l6ZSk7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImluY3JlYXNlXCIgJiYgY3VyckluZGV4IDwgc3BhY2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBuZXdTaXplID0gc3BhY2VzW2N1cnJJbmRleCArIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRlY3JlYXNlXCIgJiYgY3VyckluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzcGFjZXNbY3VyckluZGV4IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdTaXplID0gY3VyclNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGFwZS5wYWRkaW5nVG9wID0gbmV3U2l6ZSAvIDI7XG4gICAgICAgICAgICBzaGFwZS5wYWRkaW5nUmlnaHQgPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdCb3R0b20gPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdMZWZ0ID0gbmV3U2l6ZSAvIDI7XG4gICAgICAgICAgICBzaGFwZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIHNoYXBlLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgc2hhcGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgICAgIHNoYXBlLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgICAgICAgICBmaWdtYVxuICAgICAgICAgICAgICAgIC5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90byBNb25vXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0ZXh0TGFiZWwuc2V0UmFuZ2VGb250TmFtZSgwLCB0ZXh0TGFiZWwuY2hhcmFjdGVycy5sZW5ndGgsIHtcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiBcIlJvYm90byBNb25vXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIlJlZ3VsYXJcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0ZXh0TGFiZWwuY2hhcmFjdGVycyA9IG5ld1NpemU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG5jb25zdCBpbmNyZWFzZVNwYWNpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2hhbmdlU3BhY2luZyhcImluY3JlYXNlXCIpO1xufTtcbmNvbnN0IGRlY3JlYXNlU3BhY2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjaGFuZ2VTcGFjaW5nKFwiZGVjcmVhc2VcIik7XG59O1xuZXhwb3J0IHsgaW5jcmVhc2VTcGFjaW5nLCBkZWNyZWFzZVNwYWNpbmcgfTtcbiIsIi8vY3JlYXRlIGJhc2ljIGNsb25lIGZ1bmN0aW9uXG5mdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbn1cbmV4cG9ydCB7IGNsb25lIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGFkZENoaWxkVG9GcmFtZSB9IGZyb20gXCIuL2FkZENoaWxkVG9GcmFtZVwiO1xuaW1wb3J0IHsgY2xvbmUgfSBmcm9tIFwiLi9jbG9uZVwiO1xuY29uc3Qga2V5cyA9IFtcbiAgICBcIjc4MTU2ZjhhNzI3NDBiZDBkOWFjNjk0YjlmNzZjY2MwMDYyZDM3ODFcIixcbl07XG5jb25zdCBmb3JtYXRJbGxvID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIG1hcFN0eWxlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBrZXlzLm1hcCgoc3R5bGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhzdHlsZSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHlsZXMgPSB5aWVsZCBtYXBTdHlsZXMoKTtcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoc2hhcGUudHlwZSA9PT0gXCJSRUNUQU5HTEVcIikge1xuICAgICAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS50eXBlID09PSBcIklNQUdFXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXBlLmZpbGxzWzBdLnNjYWxlTW9kZSAhPSBcIkNST1BcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsbHMgPSBjbG9uZShzaGFwZS5maWxscyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsc1swXS5zY2FsZU1vZGUgPSBcIkNST1BcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLmZpbGxzID0gZmlsbHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9tYWtlIG5ldyBmcmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGZyYW1lIGZpbGxzXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcmFtZUZpbGxzID0gY2xvbmUoZnJhbWUuZmlsbHMpO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZUZpbGxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmZpbGxzID0gZnJhbWVGaWxscztcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2hpbGRUb0ZyYW1lKHNoYXBlLCBmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vZHVwbGljYXRlIGNoaWxkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZSA9IHNoYXBlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGR1cGxpY2F0ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vcmVuYW1lIGxheWVyIGFuZCB0aW50XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLm5hbWUgPSBcIkltYWdlXCI7XG4gICAgICAgICAgICAgICAgICAgIGR1cGxpY2F0ZS5uYW1lID0gXCJUaW50XCI7XG4gICAgICAgICAgICAgICAgICAgIC8vQ2hhbmdlIHRpbnQgY29sb3IgdG8gYmxhY2tcbiAgICAgICAgICAgICAgICAgICAgZHVwbGljYXRlLmZpbGxTdHlsZUlkID0gc3R5bGVzWzBdLmlkO1xuICAgICAgICAgICAgICAgICAgICAvL0NyZWF0ZSBNYXNrIHdpdGggdHdvIGxheWVyc1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5pc01hc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvL2NsZWFyIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiT25seSBzZWxlY3Qgbm9kZXMgd2l0aCBzaW5nbGUgaW1hZ2UgZmlsbHMuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiT25seSBzZWxlY3Qgbm9kZXMgd2l0aCBzaW5nbGUgaW1hZ2UgZmlsbHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgeyBmb3JtYXRJbGxvIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGFkZENoaWxkVG9GcmFtZSB9IGZyb20gXCIuL2FkZENoaWxkVG9GcmFtZVwiO1xuaW1wb3J0IHsgY2xvbmUgfSBmcm9tIFwiLi9jbG9uZVwiO1xuY29uc3Qga2V5cyA9IFtcbiAgICBcIjQxYWI5NWJlMDk5NjU2YzI0MWVjOWFkYzdjZjNhMGMzN2NjZGU5OTJcIixcbiAgICBcIjE4YjBjYTRkM2U3MzY5ZDBkZjZlNzIwYmRmZTg5YWUwM2ZkNDhlODFcIixcbiAgICBcImQzMjYwM2M0NWQ0NDIzYjJkOWVhNDdiZGY5MzYzM2ZkOTA3MzQwZTNcIixcbl07XG5jb25zdCBmcmFtZVNjcmVlblNob3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgZnVuY3Rpb24gbWFwU3R5bGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IGtleXMubWFwKChzdHlsZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKHN0eWxlKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHlpZWxkIG1hcFN0eWxlcygpO1xuICAgICAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoYXBlLmZpbGxzWzBdLnR5cGUgPT09IFwiSU1BR0VcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0uc2NhbGVNb2RlICE9IFwiQ1JPUFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxscyA9IGNsb25lKHNoYXBlLmZpbGxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxzWzBdLnNjYWxlTW9kZSA9IFwiQ1JPUFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUuZmlsbHMgPSBmaWxscztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL21ha2UgbmV3IGZyYW1lXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2hpbGRUb0ZyYW1lKHNoYXBlLCBmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmNvcm5lclJhZGl1cyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnN0cm9rZVdlaWdodCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnN0cm9rZVN0eWxlSWQgPSBzdHlsZXNbMV0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmZpbGxTdHlsZUlkID0gc3R5bGVzWzBdLmlkO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5lZmZlY3RTdHlsZUlkID0gc3R5bGVzWzJdLmlkO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5uYW1lID0gc2hhcGUubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUubmFtZSA9IFwiU2NyZWVuc2hvdFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBjbG9uZShzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBuZXdTZWxlY3Rpb25bMF0gPSBmcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5jb25zdHJhaW5Qcm9wb3J0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk1ha2Ugc3VyZSB5b3VyIHJlY3RhbmdsZSBoYXMgb25seSBhbiBpbWFnZSBmaWxsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09IFwiRlJBTUVcIiB8fCBzaGFwZS50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgICAgICAgICBzaGFwZS5jb3JuZXJSYWRpdXMgPSA0O1xuICAgICAgICAgICAgICAgIHNoYXBlLnN0cm9rZVdlaWdodCA9IDE7XG4gICAgICAgICAgICAgICAgc2hhcGUuc3Ryb2tlU3R5bGVJZCA9IHN0eWxlc1sxXS5pZDtcbiAgICAgICAgICAgICAgICBzaGFwZS5maWxsU3R5bGVJZCA9IHN0eWxlc1swXS5pZDtcbiAgICAgICAgICAgICAgICBzaGFwZS5lZmZlY3RTdHlsZUlkID0gc3R5bGVzWzJdLmlkO1xuICAgICAgICAgICAgICAgIHNoYXBlLmNsaXBzQ29udGVudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdCBvbmx5IGZyYW1lcyBvciByZWN0YW5nbGVzIHdpdGggaW1hZ2UgZmlsbHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9KTtcbn07XG5leHBvcnQgeyBmcmFtZVNjcmVlblNob3QgfTtcbiIsImNvbnN0IGhpZGVBbm5vdGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBub2RlID0gZmlnbWEuY3VycmVudFBhZ2U7XG4gICAgY29uc3Qgbm9kZXMgPSBub2RlLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUubmFtZSA9PT0gXCIkQW5ub3RhdGlvblwiKTtcbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBub2RlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgeyBoaWRlQW5ub3RhdGlvbnMgfTtcbiIsImNvbnN0IHNldEZ1bGxTaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbikge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIkZSQU1FXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiQ09NUE9ORU5UXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJWRUNUT1JcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJTVEFSXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiTElORVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIkVMTElQU0VcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJQT0xZR09OXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiVEVYVFwiKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBzaGFwZS5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAoKHBhcmVudCAmJiBwYXJlbnQudHlwZSA9PT0gXCJGUkFNRVwiKSB8fCBwYXJlbnQudHlwZSA9PT0gXCJDT01QT05FTlRcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gcGFyZW50LndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEhlaWdodCA9IHBhcmVudC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVIZWlnaHQgPSBzaGFwZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVXaWR0aCA9IHNoYXBlLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gc2hhcGVXaWR0aCAvIHNoYXBlSGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vc2V0IHJvdGF0aW9uIHRvIDBcbiAgICAgICAgICAgICAgICBzaGFwZS5yb3RhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgLy9yZXNpemUgdGhlIHNoYXBlXG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tYWludGFpbnMgdGhlIGFzcGVjdCByYXRpbyB3aGVuIHRoZSBjb25zdHJhaW4gcHJvcG9ydGlvbnMgc2V0dGluZyBpcyBhcHBsaWVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFwZS5jb25zdHJhaW5Qcm9wb3J0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUucmVzaXplKHBhcmVudFdpZHRoLCBwYXJlbnRXaWR0aCAvIGFzcGVjdFJhdGlvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShwYXJlbnRXaWR0aCwgc2hhcGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpbWVuc2lvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWFpbnRhaW5zIHRoZSBhc3BlY3QgcmF0aW8gd2hlbiB0aGUgY29uc3RyYWluIHByb3BvcnRpb25zIHNldHRpbmcgaXMgYXBwbGllZFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcGUuY29uc3RyYWluUHJvcG9ydGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShwYXJlbnRIZWlnaHQgKiBhc3BlY3RSYXRpbywgcGFyZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShzaGFwZVdpZHRoLCBwYXJlbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBzaGFwZSBwb3NpdGlvbiB0byBvcmlnaW5cbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS54ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGltZW5zaW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUueSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vZmluZCBjdXJyZW50IGNvbnN0cmFpbnRzXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZlcnRpY2FsQ29udHJhaW50ID0gc2hhcGUuY29uc3RyYWludHMudmVydGljYWw7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEhvcml6b250YWxDb250cmFpbnQgPSBzaGFwZS5jb25zdHJhaW50cy5ob3Jpem9udGFsO1xuICAgICAgICAgICAgICAgIC8vc2V0IGNvbnN0cmFpbnRzXG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBjdXJyZW50VmVydGljYWxDb250cmFpbnQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpbWVuc2lvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogY3VycmVudEhvcml6b250YWxDb250cmFpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJTVFJFVENIXCIsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3Rpb24gbXVzdCBiZSBuZXN0ZWQgaW4gYSBmcmFtZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlBsZWFzZSBzZWxlY3Qgc29tZXRoaW5nIHRoYXQgY2FuIGJlIHJlc2l6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IHNldEZ1bGxTaXplIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb2RlLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==