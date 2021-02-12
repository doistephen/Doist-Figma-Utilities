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
/* harmony import */ var _functions_createSlices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/createSlices */ "./src/functions/createSlices.ts");
/* harmony import */ var _functions_autolayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/autolayout */ "./src/functions/autolayout.ts");
/* harmony import */ var _functions_changeSpacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/changeSpacing */ "./src/functions/changeSpacing.ts");







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
        else if (message === "iosSlices") {
            (0,_functions_createSlices__WEBPACK_IMPORTED_MODULE_4__.createSlices)("ios");
        }
        else if (message === "androidSlices") {
            (0,_functions_createSlices__WEBPACK_IMPORTED_MODULE_4__.createSlices)("android");
        }
        else if (message === "webSlices") {
            (0,_functions_createSlices__WEBPACK_IMPORTED_MODULE_4__.createSlices)("web");
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
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_6__.increaseSpacing)();
}
if (figma.command === "decreaseSpacing") {
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_6__.decreaseSpacing)();
}
if (figma.command === "itemsStretch") {
    (0,_functions_autolayout__WEBPACK_IMPORTED_MODULE_5__.itemsStretch)();
}


/***/ }),

/***/ "./src/functions/addChildToFrame.ts":
/*!******************************************!*\
  !*** ./src/functions/addChildToFrame.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addChildToFrame": () => (/* binding */ addChildToFrame)
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
/* harmony export */   "itemsStretch": () => (/* binding */ itemsStretch)
/* harmony export */ });
const itemsStretch = function () {
    const frames = figma.currentPage.selection;
    if (frames.length === 0) {
        figma.closePlugin("Select at least one object");
    }
    frames.forEach((frame) => {
        if ((frame.type === "FRAME" && frame.layoutMode === "VERTICAL") ||
            (frame.type === "COMPONENT" && frame.layoutMode === "VERTICAL")) {
            for (let child of frame.children) {
                child.layoutAlign = "STRETCH";
                child.layoutGrow = 0;
            }
            if (frame.parent.type === "FRAME" && frame.parent.layoutMode !== "NONE") {
                if (frame.parent.counterAxisSizingMode === "AUTO") {
                    frame.parent.counterAxisSizingMode = "FIXED";
                }
                frame.layoutAlign = "STRETCH";
                frame.layoutGrow = 0;
            }
            figma.closePlugin("Children set to fill container");
        }
        else {
            figma.closePlugin();
        }
    });
};



/***/ }),

/***/ "./src/functions/changeSpacing.ts":
/*!****************************************!*\
  !*** ./src/functions/changeSpacing.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increaseSpacing": () => (/* binding */ increaseSpacing),
/* harmony export */   "decreaseSpacing": () => (/* binding */ decreaseSpacing)
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
/* harmony export */   "clone": () => (/* binding */ clone)
/* harmony export */ });
//create basic clone function
function clone(val) {
    return JSON.parse(JSON.stringify(val));
}



/***/ }),

/***/ "./src/functions/createSlices.ts":
/*!***************************************!*\
  !*** ./src/functions/createSlices.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSlices": () => (/* binding */ createSlices)
/* harmony export */ });
function pascalCase(input) {
    return (input.match(/[a-zA-Z0-9]+/g) || [])
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join("");
}
const addSliceToFrame = function (frame, platform) {
    //remove current slice if it exists
    const children = frame.children;
    children.forEach((child) => {
        if (child.type === "SLICE") {
            child.remove();
        }
    });
    //create new slice that is the same size as frame
    const slice = figma.createSlice();
    const frameWidth = frame.width;
    const frameHeight = frame.height;
    const iconName = frame.name;
    const componentName = frame.parent.name;
    frame.appendChild(slice);
    slice.x = 0;
    slice.y = 0;
    slice.resize(frameWidth, frameHeight);
    slice.name = formatName(componentName, iconName, platform);
    if (platform === "ios") {
        slice.exportSettings = [{ format: "PDF" }];
    }
    else {
        slice.exportSettings = [{ format: "SVG" }];
    }
};
function formatName(input1, input2, output) {
    const props = Object.fromEntries(input2
        .trim()
        .split(",")
        .map((str) => str.trim().replace(/[\s/]/g, "_").split("=")));
    const size = props.Size;
    delete props.Size;
    const sanitisedInput1 = input1
        .toLowerCase()
        .replace(/[\s/]/g, "_")
        .replace(/__+/, "_");
    const sizeUnit = output === "android" ? "dp" : output === "ios" ? "pt" : "px";
    const rest = Object.values(props)
        .map((s) => s.toLowerCase())
        .filter(Boolean);
    const values = [sanitisedInput1, ...rest, `${size}${sizeUnit}`].join("_");
    return output === "ios" ? pascalCase(values) : values;
}
const createSlices = function (platform) {
    let selection = figma.currentPage.selection;
    if (selection.length === 0) {
        figma.closePlugin("Select at least one object");
    }
    selection.forEach((frame) => {
        if (frame.type === "COMPONENT_SET") {
            const variants = frame.children;
            variants.forEach((variant) => {
                addSliceToFrame(variant, platform);
            });
        }
        else {
            figma.closePlugin("Please only select Component Sets (the purple dotted box around variants)");
        }
    });
};



/***/ }),

/***/ "./src/functions/formatIllo.ts":
/*!*************************************!*\
  !*** ./src/functions/formatIllo.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatIllo": () => (/* binding */ formatIllo)
/* harmony export */ });
/* harmony import */ var _addChildToFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addChildToFrame */ "./src/functions/addChildToFrame.ts");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./src/functions/clone.ts");


const keys = [
    "78156f8a72740bd0d9ac694b9f76ccc0062d3781",
];
const formatIllo = async function () {
    async function mapStyles() {
        const promises = keys.map(async (style) => {
            return await figma.importStyleByKeyAsync(style);
        });
        return await Promise.all(promises);
    }
    const styles = await mapStyles();
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
};



/***/ }),

/***/ "./src/functions/frameScreenshot.ts":
/*!******************************************!*\
  !*** ./src/functions/frameScreenshot.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frameScreenShot": () => (/* binding */ frameScreenShot)
/* harmony export */ });
/* harmony import */ var _addChildToFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addChildToFrame */ "./src/functions/addChildToFrame.ts");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./src/functions/clone.ts");


const keys = [
    "41ab95be099656c241ec9adc7cf3a0c37ccde992",
    "18b0ca4d3e7369d0df6e720bdfe89ae03fd48e81",
    "d32603c45d4423b2d9ea47bdf93633fd907340e3",
];
const frameScreenShot = async function () {
    let selection = figma.currentPage.selection;
    async function mapStyles() {
        const promises = keys.map(async (style) => {
            return await figma.importStyleByKeyAsync(style);
        });
        return await Promise.all(promises);
    }
    const styles = await mapStyles();
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
};



/***/ }),

/***/ "./src/functions/hideAnnotations.ts":
/*!******************************************!*\
  !*** ./src/functions/hideAnnotations.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideAnnotations": () => (/* binding */ hideAnnotations)
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
/* harmony export */   "setFullSize": () => (/* binding */ setFullSize)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/code.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2FkZENoaWxkVG9GcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2F1dG9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9jaGFuZ2VTcGFjaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvY2xvbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVTbGljZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9mb3JtYXRJbGxvLnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvZnJhbWVTY3JlZW5zaG90LnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvaGlkZUFubm90YXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvc2V0RnVsbFNpemUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDRjtBQUNVO0FBQ0E7QUFDTjtBQUNGO0FBQ3VCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkIsWUFBWSxtRUFBVztBQUN2QjtBQUNBO0FBQ0Es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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7VUMxRXZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0RnVsbFNpemUgfSBmcm9tIFwiLi9mdW5jdGlvbnMvc2V0RnVsbFNpemVcIjtcbmltcG9ydCB7IGZvcm1hdElsbG8gfSBmcm9tIFwiLi9mdW5jdGlvbnMvZm9ybWF0SWxsb1wiO1xuaW1wb3J0IHsgZnJhbWVTY3JlZW5TaG90IH0gZnJvbSBcIi4vZnVuY3Rpb25zL2ZyYW1lU2NyZWVuc2hvdFwiO1xuaW1wb3J0IHsgaGlkZUFubm90YXRpb25zIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2hpZGVBbm5vdGF0aW9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2VzIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2NyZWF0ZVNsaWNlc1wiO1xuaW1wb3J0IHsgaXRlbXNTdHJldGNoIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2F1dG9sYXlvdXRcIjtcbmltcG9ydCB7IGluY3JlYXNlU3BhY2luZywgZGVjcmVhc2VTcGFjaW5nIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2NoYW5nZVNwYWNpbmdcIjtcbi8vc2V0dXAgVUlcbmlmIChmaWdtYS5jb21tYW5kID09PSBcInNob3dVSVwiKSB7XG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgIGhlaWdodDogMzAwLFxuICAgIH0pO1xuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBcImZ1bGxXaWR0aFwiKSB7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcImhvcml6b250YWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmdWxsSGVpZ2h0XCIpIHtcbiAgICAgICAgICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmdWxsU2l6ZVwiKSB7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZnJhbWVTY3JlZW5zaG90XCIpIHtcbiAgICAgICAgICAgIGZyYW1lU2NyZWVuU2hvdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZm9ybWF0SWxsb1wiKSB7XG4gICAgICAgICAgICBmb3JtYXRJbGxvKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJoaWRlQW5ub3RhdGlvbnNcIikge1xuICAgICAgICAgICAgaGlkZUFubm90YXRpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJpb3NTbGljZXNcIikge1xuICAgICAgICAgICAgY3JlYXRlU2xpY2VzKFwiaW9zXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiYW5kcm9pZFNsaWNlc1wiKSB7XG4gICAgICAgICAgICBjcmVhdGVTbGljZXMoXCJhbmRyb2lkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwid2ViU2xpY2VzXCIpIHtcbiAgICAgICAgICAgIGNyZWF0ZVNsaWNlcyhcIndlYlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBzZXQgdXAgbWVudSBjb21tYW5kc1xuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnJhbWVTY3JlZW5TaG90XCIpIHtcbiAgICBmcmFtZVNjcmVlblNob3QoKTtcbiAgICAvLyAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJoaWRlQW5ub3RhdGlvbnNcIikge1xuICAgIGhpZGVBbm5vdGF0aW9ucygpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmdWxsV2lkdGhcIikge1xuICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbEhlaWdodFwiKSB7XG4gICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbFNpemVcIikge1xuICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmb3JtYXRJbGxvXCIpIHtcbiAgICBmb3JtYXRJbGxvKCk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImluY3JlYXNlU3BhY2luZ1wiKSB7XG4gICAgaW5jcmVhc2VTcGFjaW5nKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJkZWNyZWFzZVNwYWNpbmdcIikge1xuICAgIGRlY3JlYXNlU3BhY2luZygpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiaXRlbXNTdHJldGNoXCIpIHtcbiAgICBpdGVtc1N0cmV0Y2goKTtcbn1cbiIsImNvbnN0IGFkZENoaWxkVG9GcmFtZSA9IGZ1bmN0aW9uIChzaGFwZSwgZnJhbWUpIHtcbiAgICAvL2NyZWF0ZSB2YXJpYWJsZXNcbiAgICBjb25zdCBwYXJlbnQgPSBzaGFwZS5wYXJlbnQ7XG4gICAgY29uc3Qgc2hhcGVXaWR0aCA9IHNoYXBlLndpZHRoO1xuICAgIGNvbnN0IHNoYXBlSGVpZ2h0ID0gc2hhcGUuaGVpZ2h0O1xuICAgIGNvbnN0IHNoYXBlUG9zID0gc2hhcGUucmVsYXRpdmVUcmFuc2Zvcm07XG4gICAgLy9hZGQgZnJhbWUgdG8gY2hpbGQncyBwYXJlbnRcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgIC8vYWRkIGNoaWxkIHRvIGZyYW1lXG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQoc2hhcGUpO1xuICAgIC8vIC8vcHV0IGZyYW1lIHdoZXJlIGNoaWxkIHdhcywgcHV0IGNoaWxkIGluIDAsMCBwb3NcbiAgICBmcmFtZS5yZWxhdGl2ZVRyYW5zZm9ybSA9IHNoYXBlUG9zO1xuICAgIHNoYXBlLnggPSAwO1xuICAgIHNoYXBlLnkgPSAwO1xuICAgIC8vcmVzaXplIGZyYW1lIHRvIGNoaWxkJ3Mgc2l6ZVxuICAgIGZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyhzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCk7XG4gICAgc2hhcGUuY29uc3RyYWludHMgPSB7XG4gICAgICAgIGhvcml6b250YWw6IFwiU0NBTEVcIixcbiAgICAgICAgdmVydGljYWw6IFwiU0NBTEVcIixcbiAgICB9O1xufTtcbmV4cG9ydCB7IGFkZENoaWxkVG9GcmFtZSB9O1xuIiwiY29uc3QgaXRlbXNTdHJldGNoID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZyYW1lcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBpZiAoZnJhbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdCBhdCBsZWFzdCBvbmUgb2JqZWN0XCIpO1xuICAgIH1cbiAgICBmcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgaWYgKChmcmFtZS50eXBlID09PSBcIkZSQU1FXCIgJiYgZnJhbWUubGF5b3V0TW9kZSA9PT0gXCJWRVJUSUNBTFwiKSB8fFxuICAgICAgICAgICAgKGZyYW1lLnR5cGUgPT09IFwiQ09NUE9ORU5UXCIgJiYgZnJhbWUubGF5b3V0TW9kZSA9PT0gXCJWRVJUSUNBTFwiKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgZnJhbWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dEdyb3cgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZyYW1lLnBhcmVudC50eXBlID09PSBcIkZSQU1FXCIgJiYgZnJhbWUucGFyZW50LmxheW91dE1vZGUgIT09IFwiTk9ORVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLnBhcmVudC5jb3VudGVyQXhpc1NpemluZ01vZGUgPT09IFwiQVVUT1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnBhcmVudC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyYW1lLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgICAgICAgICAgZnJhbWUubGF5b3V0R3JvdyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIkNoaWxkcmVuIHNldCB0byBmaWxsIGNvbnRhaW5lclwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgeyBpdGVtc1N0cmV0Y2ggfTtcbiIsImxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG5jb25zdCBjb21wb25lbnRLZXkgPSBcIjhjMzJjOGNhNWVmNGJhNTljYWM2MzcwZmRkYTY5ZmE5MDc1OGEwMDNcIjtcbmNvbnN0IHNwYWNlcyA9IFtcbiAgICBcIjRcIixcbiAgICBcIjhcIixcbiAgICBcIjEyXCIsXG4gICAgXCIxNlwiLFxuICAgIFwiMjRcIixcbiAgICBcIjMyXCIsXG4gICAgXCI0OFwiLFxuICAgIFwiNjRcIixcbiAgICBcIjk2XCIsXG4gICAgXCIxMjhcIixcbiAgICBcIjE2MFwiLFxuICAgIFwiMTkyXCIsXG4gICAgXCIyNDBcIixcbl07XG5jb25zdCBjaGFuZ2VTcGFjaW5nID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICBsZXQgbmV3U2l6ZTtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiAmJiBzaGFwZS5tYWluQ29tcG9uZW50LmtleSA9PT0gY29tcG9uZW50S2V5KSB7XG4gICAgICAgICAgICBsZXQgdGV4dExhYmVsO1xuICAgICAgICAgICAgY29uc3QgdGV4dFdyYXBwZXIgPSBzaGFwZS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGlmICh0ZXh0V3JhcHBlci50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgICAgICB0ZXh0TGFiZWwgPSB0ZXh0V3JhcHBlci5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRMYWJlbC5jaGFyYWN0ZXJzKTtcbiAgICAgICAgICAgIGxldCBjdXJyU2l6ZSA9IHRleHRMYWJlbC5jaGFyYWN0ZXJzO1xuICAgICAgICAgICAgbGV0IGN1cnJJbmRleCA9IHNwYWNlcy5pbmRleE9mKGN1cnJTaXplKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaW5jcmVhc2VcIiAmJiBjdXJySW5kZXggPCBzcGFjZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzcGFjZXNbY3VyckluZGV4ICsgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiZGVjcmVhc2VcIiAmJiBjdXJySW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNwYWNlc1tjdXJySW5kZXggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1NpemUgPSBjdXJyU2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdUb3AgPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdSaWdodCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgc2hhcGUucGFkZGluZ0JvdHRvbSA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgc2hhcGUucGFkZGluZ0xlZnQgPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgIHNoYXBlLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgc2hhcGUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICBzaGFwZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgc2hhcGUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgICAgIGZpZ21hXG4gICAgICAgICAgICAgICAgLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRleHRMYWJlbC5zZXRSYW5nZUZvbnROYW1lKDAsIHRleHRMYWJlbC5jaGFyYWN0ZXJzLmxlbmd0aCwge1xuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6IFwiUm9ib3RvIE1vbm9cIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiUmVndWxhclwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRleHRMYWJlbC5jaGFyYWN0ZXJzID0gbmV3U2l6ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbmNvbnN0IGluY3JlYXNlU3BhY2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjaGFuZ2VTcGFjaW5nKFwiaW5jcmVhc2VcIik7XG59O1xuY29uc3QgZGVjcmVhc2VTcGFjaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5nZVNwYWNpbmcoXCJkZWNyZWFzZVwiKTtcbn07XG5leHBvcnQgeyBpbmNyZWFzZVNwYWNpbmcsIGRlY3JlYXNlU3BhY2luZyB9O1xuIiwiLy9jcmVhdGUgYmFzaWMgY2xvbmUgZnVuY3Rpb25cbmZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufVxuZXhwb3J0IHsgY2xvbmUgfTtcbiIsImZ1bmN0aW9uIHBhc2NhbENhc2UoaW5wdXQpIHtcbiAgICByZXR1cm4gKGlucHV0Lm1hdGNoKC9bYS16QS1aMC05XSsvZykgfHwgW10pXG4gICAgICAgIC5tYXAoKHcpID0+IGAke3cuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHt3LnNsaWNlKDEpfWApXG4gICAgICAgIC5qb2luKFwiXCIpO1xufVxuY29uc3QgYWRkU2xpY2VUb0ZyYW1lID0gZnVuY3Rpb24gKGZyYW1lLCBwbGF0Zm9ybSkge1xuICAgIC8vcmVtb3ZlIGN1cnJlbnQgc2xpY2UgaWYgaXQgZXhpc3RzXG4gICAgY29uc3QgY2hpbGRyZW4gPSBmcmFtZS5jaGlsZHJlbjtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJTTElDRVwiKSB7XG4gICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vY3JlYXRlIG5ldyBzbGljZSB0aGF0IGlzIHRoZSBzYW1lIHNpemUgYXMgZnJhbWVcbiAgICBjb25zdCBzbGljZSA9IGZpZ21hLmNyZWF0ZVNsaWNlKCk7XG4gICAgY29uc3QgZnJhbWVXaWR0aCA9IGZyYW1lLndpZHRoO1xuICAgIGNvbnN0IGZyYW1lSGVpZ2h0ID0gZnJhbWUuaGVpZ2h0O1xuICAgIGNvbnN0IGljb25OYW1lID0gZnJhbWUubmFtZTtcbiAgICBjb25zdCBjb21wb25lbnROYW1lID0gZnJhbWUucGFyZW50Lm5hbWU7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQoc2xpY2UpO1xuICAgIHNsaWNlLnggPSAwO1xuICAgIHNsaWNlLnkgPSAwO1xuICAgIHNsaWNlLnJlc2l6ZShmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCk7XG4gICAgc2xpY2UubmFtZSA9IGZvcm1hdE5hbWUoY29tcG9uZW50TmFtZSwgaWNvbk5hbWUsIHBsYXRmb3JtKTtcbiAgICBpZiAocGxhdGZvcm0gPT09IFwiaW9zXCIpIHtcbiAgICAgICAgc2xpY2UuZXhwb3J0U2V0dGluZ3MgPSBbeyBmb3JtYXQ6IFwiUERGXCIgfV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzbGljZS5leHBvcnRTZXR0aW5ncyA9IFt7IGZvcm1hdDogXCJTVkdcIiB9XTtcbiAgICB9XG59O1xuZnVuY3Rpb24gZm9ybWF0TmFtZShpbnB1dDEsIGlucHV0Miwgb3V0cHV0KSB7XG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoaW5wdXQyXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgICAubWFwKChzdHIpID0+IHN0ci50cmltKCkucmVwbGFjZSgvW1xccy9dL2csIFwiX1wiKS5zcGxpdChcIj1cIikpKTtcbiAgICBjb25zdCBzaXplID0gcHJvcHMuU2l6ZTtcbiAgICBkZWxldGUgcHJvcHMuU2l6ZTtcbiAgICBjb25zdCBzYW5pdGlzZWRJbnB1dDEgPSBpbnB1dDFcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1tcXHMvXS9nLCBcIl9cIilcbiAgICAgICAgLnJlcGxhY2UoL19fKy8sIFwiX1wiKTtcbiAgICBjb25zdCBzaXplVW5pdCA9IG91dHB1dCA9PT0gXCJhbmRyb2lkXCIgPyBcImRwXCIgOiBvdXRwdXQgPT09IFwiaW9zXCIgPyBcInB0XCIgOiBcInB4XCI7XG4gICAgY29uc3QgcmVzdCA9IE9iamVjdC52YWx1ZXMocHJvcHMpXG4gICAgICAgIC5tYXAoKHMpID0+IHMudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBbc2FuaXRpc2VkSW5wdXQxLCAuLi5yZXN0LCBgJHtzaXplfSR7c2l6ZVVuaXR9YF0uam9pbihcIl9cIik7XG4gICAgcmV0dXJuIG91dHB1dCA9PT0gXCJpb3NcIiA/IHBhc2NhbENhc2UodmFsdWVzKSA6IHZhbHVlcztcbn1cbmNvbnN0IGNyZWF0ZVNsaWNlcyA9IGZ1bmN0aW9uIChwbGF0Zm9ybSkge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3QgYXQgbGVhc3Qgb25lIG9iamVjdFwiKTtcbiAgICB9XG4gICAgc2VsZWN0aW9uLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgIGlmIChmcmFtZS50eXBlID09PSBcIkNPTVBPTkVOVF9TRVRcIikge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFudHMgPSBmcmFtZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIHZhcmlhbnRzLmZvckVhY2goKHZhcmlhbnQpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRTbGljZVRvRnJhbWUodmFyaWFudCwgcGxhdGZvcm0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlBsZWFzZSBvbmx5IHNlbGVjdCBDb21wb25lbnQgU2V0cyAodGhlIHB1cnBsZSBkb3R0ZWQgYm94IGFyb3VuZCB2YXJpYW50cylcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgeyBjcmVhdGVTbGljZXMgfTtcbiIsImltcG9ydCB7IGFkZENoaWxkVG9GcmFtZSB9IGZyb20gXCIuL2FkZENoaWxkVG9GcmFtZVwiO1xuaW1wb3J0IHsgY2xvbmUgfSBmcm9tIFwiLi9jbG9uZVwiO1xuY29uc3Qga2V5cyA9IFtcbiAgICBcIjc4MTU2ZjhhNzI3NDBiZDBkOWFjNjk0YjlmNzZjY2MwMDYyZDM3ODFcIixcbl07XG5jb25zdCBmb3JtYXRJbGxvID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGFzeW5jIGZ1bmN0aW9uIG1hcFN0eWxlcygpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBrZXlzLm1hcChhc3luYyAoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoc3R5bGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVzID0gYXdhaXQgbWFwU3R5bGVzKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIpIHtcbiAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS50eXBlID09PSBcIklNQUdFXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0uc2NhbGVNb2RlICE9IFwiQ1JPUFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxzID0gY2xvbmUoc2hhcGUuZmlsbHMpO1xuICAgICAgICAgICAgICAgICAgICBmaWxsc1swXS5zY2FsZU1vZGUgPSBcIkNST1BcIjtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuZmlsbHMgPSBmaWxscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9tYWtlIG5ldyBmcmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSBmcmFtZSBmaWxsc1xuICAgICAgICAgICAgICAgIGxldCBmcmFtZUZpbGxzID0gY2xvbmUoZnJhbWUuZmlsbHMpO1xuICAgICAgICAgICAgICAgIGZyYW1lRmlsbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmcmFtZS5maWxscyA9IGZyYW1lRmlsbHM7XG4gICAgICAgICAgICAgICAgYWRkQ2hpbGRUb0ZyYW1lKHNoYXBlLCBmcmFtZSk7XG4gICAgICAgICAgICAgICAgLy9kdXBsaWNhdGUgY2hpbGRcbiAgICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGUgPSBzaGFwZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGR1cGxpY2F0ZSk7XG4gICAgICAgICAgICAgICAgLy9yZW5hbWUgbGF5ZXIgYW5kIHRpbnRcbiAgICAgICAgICAgICAgICBzaGFwZS5uYW1lID0gXCJJbWFnZVwiO1xuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZS5uYW1lID0gXCJUaW50XCI7XG4gICAgICAgICAgICAgICAgLy9DaGFuZ2UgdGludCBjb2xvciB0byBibGFja1xuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZS5maWxsU3R5bGVJZCA9IHN0eWxlc1swXS5pZDtcbiAgICAgICAgICAgICAgICAvL0NyZWF0ZSBNYXNrIHdpdGggdHdvIGxheWVyc1xuICAgICAgICAgICAgICAgIHNoYXBlLmlzTWFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy9jbGVhciBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiT25seSBzZWxlY3Qgbm9kZXMgd2l0aCBzaW5nbGUgaW1hZ2UgZmlsbHMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJPbmx5IHNlbGVjdCBub2RlcyB3aXRoIHNpbmdsZSBpbWFnZSBmaWxsc1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgeyBmb3JtYXRJbGxvIH07XG4iLCJpbXBvcnQgeyBhZGRDaGlsZFRvRnJhbWUgfSBmcm9tIFwiLi9hZGRDaGlsZFRvRnJhbWVcIjtcbmltcG9ydCB7IGNsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmNvbnN0IGtleXMgPSBbXG4gICAgXCI0MWFiOTViZTA5OTY1NmMyNDFlYzlhZGM3Y2YzYTBjMzdjY2RlOTkyXCIsXG4gICAgXCIxOGIwY2E0ZDNlNzM2OWQwZGY2ZTcyMGJkZmU4OWFlMDNmZDQ4ZTgxXCIsXG4gICAgXCJkMzI2MDNjNDVkNDQyM2IyZDllYTQ3YmRmOTM2MzNmZDkwNzM0MGUzXCIsXG5dO1xuY29uc3QgZnJhbWVTY3JlZW5TaG90ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgYXN5bmMgZnVuY3Rpb24gbWFwU3R5bGVzKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IGtleXMubWFwKGFzeW5jIChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhzdHlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZXMgPSBhd2FpdCBtYXBTdHlsZXMoKTtcbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIpIHtcbiAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS50eXBlID09PSBcIklNQUdFXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0uc2NhbGVNb2RlICE9IFwiQ1JPUFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxzID0gY2xvbmUoc2hhcGUuZmlsbHMpO1xuICAgICAgICAgICAgICAgICAgICBmaWxsc1swXS5zY2FsZU1vZGUgPSBcIkNST1BcIjtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuZmlsbHMgPSBmaWxscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9tYWtlIG5ldyBmcmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICBhZGRDaGlsZFRvRnJhbWUoc2hhcGUsIGZyYW1lKTtcbiAgICAgICAgICAgICAgICBmcmFtZS5jb3JuZXJSYWRpdXMgPSA0O1xuICAgICAgICAgICAgICAgIGZyYW1lLnN0cm9rZVdlaWdodCA9IDE7XG4gICAgICAgICAgICAgICAgZnJhbWUuc3Ryb2tlU3R5bGVJZCA9IHN0eWxlc1sxXS5pZDtcbiAgICAgICAgICAgICAgICBmcmFtZS5maWxsU3R5bGVJZCA9IHN0eWxlc1swXS5pZDtcbiAgICAgICAgICAgICAgICBmcmFtZS5lZmZlY3RTdHlsZUlkID0gc3R5bGVzWzJdLmlkO1xuICAgICAgICAgICAgICAgIGZyYW1lLm5hbWUgPSBzaGFwZS5uYW1lO1xuICAgICAgICAgICAgICAgIHNoYXBlLm5hbWUgPSBcIlNjcmVlbnNob3RcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBjbG9uZShzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGlvblswXSA9IGZyYW1lO1xuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbjtcbiAgICAgICAgICAgICAgICBmcmFtZS5jb25zdHJhaW5Qcm9wb3J0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk1ha2Ugc3VyZSB5b3VyIHJlY3RhbmdsZSBoYXMgb25seSBhbiBpbWFnZSBmaWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09IFwiRlJBTUVcIiB8fCBzaGFwZS50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgICAgIHNoYXBlLmNvcm5lclJhZGl1cyA9IDQ7XG4gICAgICAgICAgICBzaGFwZS5zdHJva2VXZWlnaHQgPSAxO1xuICAgICAgICAgICAgc2hhcGUuc3Ryb2tlU3R5bGVJZCA9IHN0eWxlc1sxXS5pZDtcbiAgICAgICAgICAgIHNoYXBlLmZpbGxTdHlsZUlkID0gc3R5bGVzWzBdLmlkO1xuICAgICAgICAgICAgc2hhcGUuZWZmZWN0U3R5bGVJZCA9IHN0eWxlc1syXS5pZDtcbiAgICAgICAgICAgIHNoYXBlLmNsaXBzQ29udGVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdCBvbmx5IGZyYW1lcyBvciByZWN0YW5nbGVzIHdpdGggaW1hZ2UgZmlsbHNcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG5leHBvcnQgeyBmcmFtZVNjcmVlblNob3QgfTtcbiIsImNvbnN0IGhpZGVBbm5vdGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBub2RlID0gZmlnbWEuY3VycmVudFBhZ2U7XG4gICAgY29uc3Qgbm9kZXMgPSBub2RlLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUubmFtZSA9PT0gXCIkQW5ub3RhdGlvblwiKTtcbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBub2RlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgeyBoaWRlQW5ub3RhdGlvbnMgfTtcbiIsImNvbnN0IHNldEZ1bGxTaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbikge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIkZSQU1FXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiQ09NUE9ORU5UXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJWRUNUT1JcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJTVEFSXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiTElORVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIkVMTElQU0VcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJQT0xZR09OXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiVEVYVFwiKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBzaGFwZS5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAoKHBhcmVudCAmJiBwYXJlbnQudHlwZSA9PT0gXCJGUkFNRVwiKSB8fCBwYXJlbnQudHlwZSA9PT0gXCJDT01QT05FTlRcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gcGFyZW50LndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEhlaWdodCA9IHBhcmVudC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVIZWlnaHQgPSBzaGFwZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVXaWR0aCA9IHNoYXBlLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gc2hhcGVXaWR0aCAvIHNoYXBlSGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vc2V0IHJvdGF0aW9uIHRvIDBcbiAgICAgICAgICAgICAgICBzaGFwZS5yb3RhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgLy9yZXNpemUgdGhlIHNoYXBlXG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tYWludGFpbnMgdGhlIGFzcGVjdCByYXRpbyB3aGVuIHRoZSBjb25zdHJhaW4gcHJvcG9ydGlvbnMgc2V0dGluZyBpcyBhcHBsaWVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFwZS5jb25zdHJhaW5Qcm9wb3J0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUucmVzaXplKHBhcmVudFdpZHRoLCBwYXJlbnRXaWR0aCAvIGFzcGVjdFJhdGlvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShwYXJlbnRXaWR0aCwgc2hhcGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpbWVuc2lvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWFpbnRhaW5zIHRoZSBhc3BlY3QgcmF0aW8gd2hlbiB0aGUgY29uc3RyYWluIHByb3BvcnRpb25zIHNldHRpbmcgaXMgYXBwbGllZFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcGUuY29uc3RyYWluUHJvcG9ydGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShwYXJlbnRIZWlnaHQgKiBhc3BlY3RSYXRpbywgcGFyZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShzaGFwZVdpZHRoLCBwYXJlbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBzaGFwZSBwb3NpdGlvbiB0byBvcmlnaW5cbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS54ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGltZW5zaW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUueSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vZmluZCBjdXJyZW50IGNvbnN0cmFpbnRzXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZlcnRpY2FsQ29udHJhaW50ID0gc2hhcGUuY29uc3RyYWludHMudmVydGljYWw7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEhvcml6b250YWxDb250cmFpbnQgPSBzaGFwZS5jb25zdHJhaW50cy5ob3Jpem9udGFsO1xuICAgICAgICAgICAgICAgIC8vc2V0IGNvbnN0cmFpbnRzXG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBjdXJyZW50VmVydGljYWxDb250cmFpbnQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpbWVuc2lvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogY3VycmVudEhvcml6b250YWxDb250cmFpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJTVFJFVENIXCIsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3Rpb24gbXVzdCBiZSBuZXN0ZWQgaW4gYSBmcmFtZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlBsZWFzZSBzZWxlY3Qgc29tZXRoaW5nIHRoYXQgY2FuIGJlIHJlc2l6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IHNldEZ1bGxTaXplIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvZGUudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9