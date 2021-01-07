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
    //   figma.closePlugin();
}
if (figma.command === "decreaseSpacing") {
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_4__.decreaseSpacing)();
    //   figma.closePlugin();
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
    let newSize;
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
    }
    else {
        figma.closePlugin("Select one instance of the spacing component.");
    }
    figma.closePlugin(newSize + "px");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2FkZENoaWxkVG9GcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2NoYW5nZVNwYWNpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9jbG9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2Zvcm1hdElsbG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9mcmFtZVNjcmVlbnNob3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9oaWRlQW5ub3RhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9zZXRGdWxsU2l6ZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDRjtBQUNVO0FBQ0E7QUFDZTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksMkVBQWU7QUFDM0I7QUFDQTtBQUNBLFlBQVksaUVBQVU7QUFDdEI7QUFDQTtBQUNBLFlBQVksMkVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0RnVsbFNpemUgfSBmcm9tIFwiLi9mdW5jdGlvbnMvc2V0RnVsbFNpemVcIjtcbmltcG9ydCB7IGZvcm1hdElsbG8gfSBmcm9tIFwiLi9mdW5jdGlvbnMvZm9ybWF0SWxsb1wiO1xuaW1wb3J0IHsgZnJhbWVTY3JlZW5TaG90IH0gZnJvbSBcIi4vZnVuY3Rpb25zL2ZyYW1lU2NyZWVuc2hvdFwiO1xuaW1wb3J0IHsgaGlkZUFubm90YXRpb25zIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2hpZGVBbm5vdGF0aW9uc1wiO1xuaW1wb3J0IHsgaW5jcmVhc2VTcGFjaW5nLCBkZWNyZWFzZVNwYWNpbmcgfSBmcm9tIFwiLi9mdW5jdGlvbnMvY2hhbmdlU3BhY2luZ1wiO1xuLy9zZXR1cCBVSVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwic2hvd1VJXCIpIHtcbiAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHtcbiAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgfSk7XG4gICAgZmlnbWEudWkub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IFwiZnVsbFdpZHRoXCIpIHtcbiAgICAgICAgICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImZ1bGxIZWlnaHRcIikge1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImZ1bGxTaXplXCIpIHtcbiAgICAgICAgICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcImhvcml6b250YWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmcmFtZVNjcmVlbnNob3RcIikge1xuICAgICAgICAgICAgZnJhbWVTY3JlZW5TaG90KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmb3JtYXRJbGxvXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdElsbG8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImhpZGVBbm5vdGF0aW9uc1wiKSB7XG4gICAgICAgICAgICBoaWRlQW5ub3RhdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBzZXQgdXAgbWVudSBjb21tYW5kc1xuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnJhbWVTY3JlZW5TaG90XCIpIHtcbiAgICBmcmFtZVNjcmVlblNob3QoKTtcbiAgICAvLyAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJoaWRlQW5ub3RhdGlvbnNcIikge1xuICAgIGhpZGVBbm5vdGF0aW9ucygpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmdWxsV2lkdGhcIikge1xuICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbEhlaWdodFwiKSB7XG4gICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbFNpemVcIikge1xuICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmb3JtYXRJbGxvXCIpIHtcbiAgICBmb3JtYXRJbGxvKCk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImluY3JlYXNlU3BhY2luZ1wiKSB7XG4gICAgaW5jcmVhc2VTcGFjaW5nKCk7XG4gICAgLy8gICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZGVjcmVhc2VTcGFjaW5nXCIpIHtcbiAgICBkZWNyZWFzZVNwYWNpbmcoKTtcbiAgICAvLyAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG4iLCJjb25zdCBhZGRDaGlsZFRvRnJhbWUgPSBmdW5jdGlvbiAoc2hhcGUsIGZyYW1lKSB7XG4gICAgLy9jcmVhdGUgdmFyaWFibGVzXG4gICAgY29uc3QgcGFyZW50ID0gc2hhcGUucGFyZW50O1xuICAgIGNvbnN0IHNoYXBlV2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICBjb25zdCBzaGFwZUhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICBjb25zdCBzaGFwZVBvcyA9IHNoYXBlLnJlbGF0aXZlVHJhbnNmb3JtO1xuICAgIC8vYWRkIGZyYW1lIHRvIGNoaWxkJ3MgcGFyZW50XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICAvL2FkZCBjaGlsZCB0byBmcmFtZVxuICAgIGZyYW1lLmFwcGVuZENoaWxkKHNoYXBlKTtcbiAgICAvLyAvL3B1dCBmcmFtZSB3aGVyZSBjaGlsZCB3YXMsIHB1dCBjaGlsZCBpbiAwLDAgcG9zXG4gICAgZnJhbWUucmVsYXRpdmVUcmFuc2Zvcm0gPSBzaGFwZVBvcztcbiAgICBzaGFwZS54ID0gMDtcbiAgICBzaGFwZS55ID0gMDtcbiAgICAvL3Jlc2l6ZSBmcmFtZSB0byBjaGlsZCdzIHNpemVcbiAgICBmcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQpO1xuICAgIHNoYXBlLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICBob3Jpem9udGFsOiBcIlNDQUxFXCIsXG4gICAgICAgIHZlcnRpY2FsOiBcIlNDQUxFXCIsXG4gICAgfTtcbn07XG5leHBvcnQgeyBhZGRDaGlsZFRvRnJhbWUgfTtcbiIsImxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG5jb25zdCBjb21wb25lbnRLZXkgPSBcIjhjMzJjOGNhNWVmNGJhNTljYWM2MzcwZmRkYTY5ZmE5MDc1OGEwMDNcIjtcbmNvbnN0IHNwYWNlcyA9IFtcbiAgICBcIjRcIixcbiAgICBcIjhcIixcbiAgICBcIjEyXCIsXG4gICAgXCIxNlwiLFxuICAgIFwiMjRcIixcbiAgICBcIjMyXCIsXG4gICAgXCI0OFwiLFxuICAgIFwiNjRcIixcbiAgICBcIjk2XCIsXG4gICAgXCIxMjhcIixcbiAgICBcIjE2MFwiLFxuICAgIFwiMTkyXCIsXG4gICAgXCIyNDBcIixcbl07XG5jb25zdCBjaGFuZ2VTcGFjaW5nID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgIGxldCBuZXdTaXplO1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiAmJlxuICAgICAgICAgICAgICAgIHNoYXBlLm1haW5Db21wb25lbnQua2V5ID09PSBjb21wb25lbnRLZXkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dExhYmVsO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRXcmFwcGVyID0gc2hhcGUuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgaWYgKHRleHRXcmFwcGVyLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0TGFiZWwgPSB0ZXh0V3JhcHBlci5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGV4dExhYmVsLmNoYXJhY3RlcnMpO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyU2l6ZSA9IHRleHRMYWJlbC5jaGFyYWN0ZXJzO1xuICAgICAgICAgICAgICAgIGxldCBjdXJySW5kZXggPSBzcGFjZXMuaW5kZXhPZihjdXJyU2l6ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJpbmNyZWFzZVwiICYmIGN1cnJJbmRleCA8IHNwYWNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzcGFjZXNbY3VyckluZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkZWNyZWFzZVwiICYmIGN1cnJJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNwYWNlc1tjdXJySW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBjdXJyU2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hhcGUucGFkZGluZ1RvcCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdSaWdodCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdCb3R0b20gPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgICAgICBzaGFwZS5wYWRkaW5nTGVmdCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIHNoYXBlLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgICAgIHNoYXBlLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgICAgIHNoYXBlLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgICAgICAgICAgICAgc2hhcGUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgICAgICAgICBmaWdtYVxuICAgICAgICAgICAgICAgICAgICAubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0TGFiZWwuc2V0UmFuZ2VGb250TmFtZSgwLCB0ZXh0TGFiZWwuY2hhcmFjdGVycy5sZW5ndGgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbWlseTogXCJSb2JvdG8gTW9ub1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiUmVndWxhclwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dExhYmVsLmNoYXJhY3RlcnMgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3Qgb25lIGluc3RhbmNlIG9mIHRoZSBzcGFjaW5nIGNvbXBvbmVudC5cIik7XG4gICAgfVxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKG5ld1NpemUgKyBcInB4XCIpO1xufTtcbmNvbnN0IGluY3JlYXNlU3BhY2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjaGFuZ2VTcGFjaW5nKFwiaW5jcmVhc2VcIik7XG59O1xuY29uc3QgZGVjcmVhc2VTcGFjaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5nZVNwYWNpbmcoXCJkZWNyZWFzZVwiKTtcbn07XG5leHBvcnQgeyBpbmNyZWFzZVNwYWNpbmcsIGRlY3JlYXNlU3BhY2luZyB9O1xuIiwiLy9jcmVhdGUgYmFzaWMgY2xvbmUgZnVuY3Rpb25cbmZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufVxuZXhwb3J0IHsgY2xvbmUgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgYWRkQ2hpbGRUb0ZyYW1lIH0gZnJvbSBcIi4vYWRkQ2hpbGRUb0ZyYW1lXCI7XG5pbXBvcnQgeyBjbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5jb25zdCBrZXlzID0gW1xuICAgIFwiNzgxNTZmOGE3Mjc0MGJkMGQ5YWM2OTRiOWY3NmNjYzAwNjJkMzc4MVwiLFxuXTtcbmNvbnN0IGZvcm1hdElsbG8gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgZnVuY3Rpb24gbWFwU3R5bGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IGtleXMubWFwKChzdHlsZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKHN0eWxlKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHlpZWxkIG1hcFN0eWxlcygpO1xuICAgICAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoYXBlLmZpbGxzWzBdLnR5cGUgPT09IFwiSU1BR0VcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0uc2NhbGVNb2RlICE9IFwiQ1JPUFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxscyA9IGNsb25lKHNoYXBlLmZpbGxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxzWzBdLnNjYWxlTW9kZSA9IFwiQ1JPUFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUuZmlsbHMgPSBmaWxscztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL21ha2UgbmV3IGZyYW1lXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9yZW1vdmUgZnJhbWUgZmlsbHNcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZyYW1lRmlsbHMgPSBjbG9uZShmcmFtZS5maWxscyk7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lRmlsbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuZmlsbHMgPSBmcmFtZUZpbGxzO1xuICAgICAgICAgICAgICAgICAgICBhZGRDaGlsZFRvRnJhbWUoc2hhcGUsIGZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgLy9kdXBsaWNhdGUgY2hpbGRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlID0gc2hhcGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZHVwbGljYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgLy9yZW5hbWUgbGF5ZXIgYW5kIHRpbnRcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUubmFtZSA9IFwiSW1hZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgZHVwbGljYXRlLm5hbWUgPSBcIlRpbnRcIjtcbiAgICAgICAgICAgICAgICAgICAgLy9DaGFuZ2UgdGludCBjb2xvciB0byBibGFja1xuICAgICAgICAgICAgICAgICAgICBkdXBsaWNhdGUuZmlsbFN0eWxlSWQgPSBzdHlsZXNbMF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIC8vQ3JlYXRlIE1hc2sgd2l0aCB0d28gbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLmlzTWFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJPbmx5IHNlbGVjdCBub2RlcyB3aXRoIHNpbmdsZSBpbWFnZSBmaWxscy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJPbmx5IHNlbGVjdCBub2RlcyB3aXRoIHNpbmdsZSBpbWFnZSBmaWxsc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydCB7IGZvcm1hdElsbG8gfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgYWRkQ2hpbGRUb0ZyYW1lIH0gZnJvbSBcIi4vYWRkQ2hpbGRUb0ZyYW1lXCI7XG5pbXBvcnQgeyBjbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5jb25zdCBrZXlzID0gW1xuICAgIFwiNDFhYjk1YmUwOTk2NTZjMjQxZWM5YWRjN2NmM2EwYzM3Y2NkZTk5MlwiLFxuICAgIFwiMThiMGNhNGQzZTczNjlkMGRmNmU3MjBiZGZlODlhZTAzZmQ0OGU4MVwiLFxuICAgIFwiZDMyNjAzYzQ1ZDQ0MjNiMmQ5ZWE0N2JkZjkzNjMzZmQ5MDczNDBlM1wiLFxuXTtcbmNvbnN0IGZyYW1lU2NyZWVuU2hvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBmdW5jdGlvbiBtYXBTdHlsZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0ga2V5cy5tYXAoKHN0eWxlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoc3R5bGUpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGVzID0geWllbGQgbWFwU3R5bGVzKCk7XG4gICAgICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0udHlwZSA9PT0gXCJJTUFHRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS5zY2FsZU1vZGUgIT0gXCJDUk9QXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxzID0gY2xvbmUoc2hhcGUuZmlsbHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbHNbMF0uc2NhbGVNb2RlID0gXCJDUk9QXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5maWxscyA9IGZpbGxzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBuZXcgZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRDaGlsZFRvRnJhbWUoc2hhcGUsIGZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuY29ybmVyUmFkaXVzID0gNDtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuc3Ryb2tlV2VpZ2h0ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuc3Ryb2tlU3R5bGVJZCA9IHN0eWxlc1sxXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuZmlsbFN0eWxlSWQgPSBzdHlsZXNbMF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmVmZmVjdFN0eWxlSWQgPSBzdHlsZXNbMl0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLm5hbWUgPSBzaGFwZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5uYW1lID0gXCJTY3JlZW5zaG90XCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IGNsb25lKHNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NlbGVjdGlvblswXSA9IGZyYW1lO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmNvbnN0cmFpblByb3BvcnRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiTWFrZSBzdXJlIHlvdXIgcmVjdGFuZ2xlIGhhcyBvbmx5IGFuIGltYWdlIGZpbGxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gXCJGUkFNRVwiIHx8IHNoYXBlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIikge1xuICAgICAgICAgICAgICAgIHNoYXBlLmNvcm5lclJhZGl1cyA9IDQ7XG4gICAgICAgICAgICAgICAgc2hhcGUuc3Ryb2tlV2VpZ2h0ID0gMTtcbiAgICAgICAgICAgICAgICBzaGFwZS5zdHJva2VTdHlsZUlkID0gc3R5bGVzWzFdLmlkO1xuICAgICAgICAgICAgICAgIHNoYXBlLmZpbGxTdHlsZUlkID0gc3R5bGVzWzBdLmlkO1xuICAgICAgICAgICAgICAgIHNoYXBlLmVmZmVjdFN0eWxlSWQgPSBzdHlsZXNbMl0uaWQ7XG4gICAgICAgICAgICAgICAgc2hhcGUuY2xpcHNDb250ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IG9ubHkgZnJhbWVzIG9yIHJlY3RhbmdsZXMgd2l0aCBpbWFnZSBmaWxsc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IGZyYW1lU2NyZWVuU2hvdCB9O1xuIiwiY29uc3QgaGlkZUFubm90YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5vZGUgPSBmaWdtYS5jdXJyZW50UGFnZTtcbiAgICBjb25zdCBub2RlcyA9IG5vZGUuZmluZEFsbCgobm9kZSkgPT4gbm9kZS5uYW1lID09PSBcIiRBbm5vdGF0aW9uXCIpO1xuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudmlzaWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG5vZGUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydCB7IGhpZGVBbm5vdGF0aW9ucyB9O1xuIiwiY29uc3Qgc2V0RnVsbFNpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uKSB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiRlJBTUVcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJDT01QT05FTlRcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlZFQ1RPUlwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlNUQVJcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJMSU5FXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiRUxMSVBTRVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlBPTFlHT05cIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJSRUNUQU5HTEVcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJURVhUXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHNoYXBlLnBhcmVudDtcbiAgICAgICAgICAgIGlmICgocGFyZW50ICYmIHBhcmVudC50eXBlID09PSBcIkZSQU1FXCIpIHx8IHBhcmVudC50eXBlID09PSBcIkNPTVBPTkVOVFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50V2lkdGggPSBwYXJlbnQud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50SGVpZ2h0ID0gcGFyZW50LmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZUhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZVdpZHRoID0gc2hhcGUud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBzaGFwZVdpZHRoIC8gc2hhcGVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLy9zZXQgcm90YXRpb24gdG8gMFxuICAgICAgICAgICAgICAgIHNoYXBlLnJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAvL3Jlc2l6ZSB0aGUgc2hhcGVcbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgICAvL21haW50YWlucyB0aGUgYXNwZWN0IHJhdGlvIHdoZW4gdGhlIGNvbnN0cmFpbiBwcm9wb3J0aW9ucyBzZXR0aW5nIGlzIGFwcGxpZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXBlLmNvbnN0cmFpblByb3BvcnRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5yZXNpemUocGFyZW50V2lkdGgsIHBhcmVudFdpZHRoIC8gYXNwZWN0UmF0aW8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUucmVzaXplKHBhcmVudFdpZHRoLCBzaGFwZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGltZW5zaW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tYWludGFpbnMgdGhlIGFzcGVjdCByYXRpbyB3aGVuIHRoZSBjb25zdHJhaW4gcHJvcG9ydGlvbnMgc2V0dGluZyBpcyBhcHBsaWVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFwZS5jb25zdHJhaW5Qcm9wb3J0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUucmVzaXplKHBhcmVudEhlaWdodCAqIGFzcGVjdFJhdGlvLCBwYXJlbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUucmVzaXplKHNoYXBlV2lkdGgsIHBhcmVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zZXQgdGhlIHNoYXBlIHBvc2l0aW9uIHRvIG9yaWdpblxuICAgICAgICAgICAgICAgIGlmIChkaW1lbnNpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLnggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkaW1lbnNpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS55ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9maW5kIGN1cnJlbnQgY29uc3RyYWludHNcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmVydGljYWxDb250cmFpbnQgPSBzaGFwZS5jb25zdHJhaW50cy52ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SG9yaXpvbnRhbENvbnRyYWludCA9IHNoYXBlLmNvbnN0cmFpbnRzLmhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgLy9zZXQgY29uc3RyYWludHNcbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5jb25zdHJhaW50cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwiU1RSRVRDSFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6IGN1cnJlbnRWZXJ0aWNhbENvbnRyYWludCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGltZW5zaW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBjdXJyZW50SG9yaXpvbnRhbENvbnRyYWludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcIlNUUkVUQ0hcIixcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdGlvbiBtdXN0IGJlIG5lc3RlZCBpbiBhIGZyYW1lLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiUGxlYXNlIHNlbGVjdCBzb21ldGhpbmcgdGhhdCBjYW4gYmUgcmVzaXplZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHsgc2V0RnVsbFNpemUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvZGUudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9