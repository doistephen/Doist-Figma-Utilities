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
/* harmony import */ var _functions_textToSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/textToSkeleton */ "./src/functions/textToSkeleton.ts");
/* harmony import */ var _functions_changeSpacing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/changeSpacing */ "./src/functions/changeSpacing.ts");
/* harmony import */ var _functions_prependLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/prependLang */ "./src/functions/prependLang.ts");









//setup UI
if (figma.command === "showUI") {
    figma.showUI(__html__, {
        width: 300,
        height: 310,
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
        else if (message === "moveLocalizedFramesToPage") {
            (0,_functions_prependLang__WEBPACK_IMPORTED_MODULE_8__.moveLocalizedFramesToPage)();
        }
        else if (message === "deleteLocalizedPages") {
            (0,_functions_prependLang__WEBPACK_IMPORTED_MODULE_8__.deleteLocalizedPages)();
        }
        else if (message === "langJpg") {
            (0,_functions_prependLang__WEBPACK_IMPORTED_MODULE_8__.prependLang)("jpg");
        }
        else if (message === "langPng") {
            (0,_functions_prependLang__WEBPACK_IMPORTED_MODULE_8__.prependLang)("png");
        }
        else if (message === "textToSkeleton") {
            (0,_functions_textToSkeleton__WEBPACK_IMPORTED_MODULE_6__.textToSkeleton)();
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
if (figma.command === "insertSpacing") {
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_7__.insertSpacing)();
}
if (figma.command === "increaseSpacing") {
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_7__.increaseSpacing)();
}
if (figma.command === "decreaseSpacing") {
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_7__.decreaseSpacing)();
}
if (figma.command === "autoLayout") {
    (0,_functions_autolayout__WEBPACK_IMPORTED_MODULE_5__.autoLayout)();
}
if (figma.command === "moveLocalizedFramesToPage") {
    (0,_functions_prependLang__WEBPACK_IMPORTED_MODULE_8__.moveLocalizedFramesToPage)();
}
if (figma.command === "deleteLocalizedPages") {
    (0,_functions_prependLang__WEBPACK_IMPORTED_MODULE_8__.deleteLocalizedPages)();
}
if (figma.command === "textToSkeleton") {
    (0,_functions_textToSkeleton__WEBPACK_IMPORTED_MODULE_6__.textToSkeleton)();
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
    const shapeRotation = shape.rotation;
    //add frame to child's parent
    parent.appendChild(frame);
    //add child to frame
    frame.appendChild(shape);
    // //put frame where child was, put child in 0,0 pos
    frame.relativeTransform = shapePos;
    shape.rotation = 0;
    shape.x = 0;
    shape.y = 0;
    //resize frame to child's size
    frame.resizeWithoutConstraints(shapeWidth, shapeHeight);
    frame.rotation = shapeRotation;
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
/* harmony export */   "autoLayout": () => (/* binding */ autoLayout)
/* harmony export */ });
const autoLayout = function () {
    const frames = figma.currentPage.selection;
    if (frames.length === 0) {
        figma.closePlugin("Select at least one auto layout frame.");
        return false;
    }
    frames.forEach((frame) => {
        if (frame.type === "FRAME" || frame.type === "COMPONENT") {
            if (frame.layoutMode === "VERTICAL") {
                for (let child of frame.children) {
                    child.layoutAlign = "STRETCH";
                    child.layoutGrow = 0;
                    if (frame.parent.type === "FRAME" &&
                        frame.parent.layoutMode !== "NONE") {
                        if (frame.parent.counterAxisSizingMode === "AUTO") {
                            frame.parent.counterAxisSizingMode = "FIXED";
                        }
                        frame.layoutAlign = "STRETCH";
                        frame.layoutGrow = 0;
                    }
                    figma.closePlugin("Children set to fill container");
                }
            }
            else if (frame.layoutMode === "HORIZONTAL") {
                frame.counterAxisAlignItems = "CENTER";
                figma.closePlugin("Children aligned center");
            }
        }
        else {
            figma.closePlugin("Only select autolayout frames.");
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
/* harmony export */   "decreaseSpacing": () => (/* binding */ decreaseSpacing),
/* harmony export */   "insertSpacing": () => (/* binding */ insertSpacing)
/* harmony export */ });
/* harmony import */ var _isPartOfInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPartOfInstance */ "./src/functions/isPartOfInstance.ts");

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
const insertSpacing = function () {
    if (selection && selection.length === 1) {
        const selected = selection[0];
        const parent = selected.parent;
        if ((0,_isPartOfInstance__WEBPACK_IMPORTED_MODULE_0__.default)(selected)) {
            figma.closePlugin("You can't add elements to a component instance.");
            return false;
        }
        const getIndex = function (node) {
            return node.parent.children.map((child) => child.id).indexOf(node.id);
        };
        figma.importComponentByKeyAsync(componentKey).then((response) => {
            const spacing = response.createInstance();
            parent.insertChild(getIndex(selected) + 1, spacing);
            spacing.opacity = 0;
            figma.currentPage.selection = [spacing];
            figma.closePlugin();
        });
    }
    else if (selection.length === 0) {
        figma.importComponentByKeyAsync(componentKey).then((response) => {
            const spacing = response.createInstance();
            figma.currentPage.insertChild(0, spacing);
            spacing.opacity = 0;
            figma.currentPage.selection = [spacing];
            const { x, y } = figma.viewport.center;
            spacing.x = x;
            spacing.y = y;
            figma.closePlugin();
        });
    }
    else {
        figma.closePlugin("Only select one layer at a time, or no layers.");
    }
};
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
                // if (shape.rotation !== 0) {
                //   figma.closePlugin(
                //     "Shapes must not be rotated for this function to work. Sorry!"
                //   );
                //   return false;
                // }
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

/***/ "./src/functions/isPartOfInstance.ts":
/*!*******************************************!*\
  !*** ./src/functions/isPartOfInstance.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPartOfInstance)
/* harmony export */ });
function isPartOfInstance(node) {
    const parent = node.parent;
    if (parent.type === "INSTANCE") {
        return true;
    }
    else if (parent.type === "PAGE") {
        return false;
    }
    else {
        return isPartOfInstance(parent);
    }
}


/***/ }),

/***/ "./src/functions/prependLang.ts":
/*!**************************************!*\
  !*** ./src/functions/prependLang.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prependLang": () => (/* binding */ prependLang),
/* harmony export */   "deleteLocalizedPages": () => (/* binding */ deleteLocalizedPages),
/* harmony export */   "moveLocalizedFramesToPage": () => (/* binding */ moveLocalizedFramesToPage)
/* harmony export */ });
const langCodes = [
    "ar",
    "cs",
    "da",
    "de",
    "es",
    "fi",
    "fr",
    "it",
    "ja",
    "ko",
    "nb",
    "nl",
    "pl",
    "pt_BR",
    "ru",
    "sv",
    "tr",
    "zh_CN",
    "zh_TW",
];
const prependLang = (format) => {
    //if there is bracketed text at the beginning of page name
    //add that bracketed text to the beginning of every frame name
    //unless the frame already starts with it, then skip
    const pages = figma.root.children;
    pages.forEach((page) => {
        langCodes.forEach((code) => {
            if (page.name.startsWith(`[${code}]`)) {
                const frames = page.children;
                frames.forEach((frame) => {
                    frame.exportSettings = [
                        {
                            format: format.toUpperCase(),
                            constraint: { type: "SCALE", value: 2 },
                        },
                    ];
                    frame.name.startsWith(`${code} / `)
                        ? (frame.name = frame.name)
                        : (frame.name = code + " / " + frame.name);
                });
            }
        });
    });
    figma.closePlugin();
};
const deleteLocalizedPages = function () {
    const pages = figma.root.children;
    pages.forEach((page) => {
        let remove = false;
        langCodes.forEach((code) => {
            if (page.name.startsWith(`[${code}]`) && pages.indexOf(page) !== 0) {
                if (page === figma.currentPage) {
                    figma.closePlugin("Can't delete current page");
                    return false;
                }
                else {
                    remove = true;
                }
            }
        });
        remove ? page.remove() : figma.closePlugin();
    });
    figma.closePlugin();
};
const moveLocalizedFramesToPage = () => {
    prependLang("png");
    const pages = figma.root.children;
    let nodes = [];
    pages.forEach((page) => {
        langCodes.forEach((code) => {
            if (page.name.startsWith(`[${code}]`) && pages.indexOf(page) !== 0) {
                page.children.forEach((child) => {
                    nodes = [...nodes, child];
                });
            }
        });
    });
    const newPage = figma.createPage();
    newPage.name = "Localized Graphics";
    const autoLayoutFrame = figma.createFrame();
    autoLayoutFrame.layoutMode = "HORIZONTAL";
    autoLayoutFrame.counterAxisSizingMode = "AUTO";
    autoLayoutFrame.itemSpacing = 64;
    autoLayoutFrame.fills = [];
    newPage.appendChild(autoLayoutFrame);
    nodes.map((node) => {
        autoLayoutFrame.appendChild(node);
    });
    deleteLocalizedPages();
    figma.closePlugin();
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



/***/ }),

/***/ "./src/functions/textToSkeleton.ts":
/*!*****************************************!*\
  !*** ./src/functions/textToSkeleton.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textToSkeleton": () => (/* binding */ textToSkeleton)
/* harmony export */ });
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone */ "./src/functions/clone.ts");
/* harmony import */ var _isPartOfInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isPartOfInstance */ "./src/functions/isPartOfInstance.ts");


function textToSkeleton() {
    let selection = figma.currentPage.selection;
    let newSelection = [];
    selection.forEach((node) => {
        if ((0,_isPartOfInstance__WEBPACK_IMPORTED_MODULE_1__.default)(node)) {
            return;
        }
        if (node.type !== "TEXT") {
            return;
        }
        else {
            const width = node.width;
            const height = node.height;
            const position = node.relativeTransform;
            let fontSize = 12;
            let visualSize;
            if (node.fontSize !== figma.mixed) {
                visualSize = fontSize;
            }
            else {
                figma.closePlugin("Only select text nodes with one font size applied.");
            }
            const frame = createSkeletonShape(width, height, visualSize);
            const parent = node.parent;
            parent.appendChild(frame);
            frame.relativeTransform = position;
            node.remove();
            newSelection = [...newSelection, frame];
        }
        figma.currentPage.selection = newSelection;
        figma.closePlugin();
    });
}
function createSkeletonShape(width, height, visualSize) {
    const frame = figma.createFrame();
    frame.name = "Skeleton Text";
    frame.fills = [];
    frame.resize(width, height);
    const rectangle = figma.createRectangle();
    frame.appendChild(rectangle);
    let fills = (0,_clone__WEBPACK_IMPORTED_MODULE_0__.clone)(rectangle.fills);
    fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 }, opacity: 0.1 }];
    rectangle.fills = fills;
    rectangle.cornerRadius = 2;
    rectangle.name = "Shape";
    const rectangleHeight = Math.ceil(visualSize * 0.85);
    rectangle.resize(width, rectangleHeight);
    frame.layoutMode = "HORIZONTAL";
    frame.primaryAxisAlignItems = "CENTER";
    frame.counterAxisAlignItems = "CENTER";
    return frame;
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvZnVuY3Rpb25zL2FkZENoaWxkVG9GcmFtZS50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvZnVuY3Rpb25zL2F1dG9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy9jaGFuZ2VTcGFjaW5nLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvY2xvbmUudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVTbGljZXMudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy9mb3JtYXRJbGxvLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvZnJhbWVTY3JlZW5zaG90LnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvaGlkZUFubm90YXRpb25zLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvaXNQYXJ0T2ZJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvZnVuY3Rpb25zL3ByZXBlbmRMYW5nLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvc2V0RnVsbFNpemUudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy90ZXh0VG9Ta2VsZXRvbi50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ0Y7QUFDVTtBQUNBO0FBQ047QUFDSjtBQUNRO0FBQ2lDO0FBQ1c7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QixZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLDJFQUFlO0FBQzNCO0FBQ0E7QUFDQSxZQUFZLGlFQUFVO0FBQ3RCO0FBQ0E7QUFDQSxZQUFZLDJFQUFlO0FBQzNCO0FBQ0E7QUFDQSxZQUFZLHFFQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLHFFQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLHFFQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGlGQUF5QjtBQUNyQztBQUNBO0FBQ0EsWUFBWSw0RUFBb0I7QUFDaEM7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyRUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVTO0FBQ2tCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFLO0FBQ3JCLGNBQWMsd0JBQXdCLG1CQUFtQixnQkFBZ0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7Ozs7Ozs7VUN0RDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0RnVsbFNpemUgfSBmcm9tIFwiLi9mdW5jdGlvbnMvc2V0RnVsbFNpemVcIjtcbmltcG9ydCB7IGZvcm1hdElsbG8gfSBmcm9tIFwiLi9mdW5jdGlvbnMvZm9ybWF0SWxsb1wiO1xuaW1wb3J0IHsgZnJhbWVTY3JlZW5TaG90IH0gZnJvbSBcIi4vZnVuY3Rpb25zL2ZyYW1lU2NyZWVuc2hvdFwiO1xuaW1wb3J0IHsgaGlkZUFubm90YXRpb25zIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2hpZGVBbm5vdGF0aW9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2VzIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2NyZWF0ZVNsaWNlc1wiO1xuaW1wb3J0IHsgYXV0b0xheW91dCB9IGZyb20gXCIuL2Z1bmN0aW9ucy9hdXRvbGF5b3V0XCI7XG5pbXBvcnQgeyB0ZXh0VG9Ta2VsZXRvbiB9IGZyb20gXCIuL2Z1bmN0aW9ucy90ZXh0VG9Ta2VsZXRvblwiO1xuaW1wb3J0IHsgaW5jcmVhc2VTcGFjaW5nLCBkZWNyZWFzZVNwYWNpbmcsIGluc2VydFNwYWNpbmcsIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2NoYW5nZVNwYWNpbmdcIjtcbmltcG9ydCB7IHByZXBlbmRMYW5nLCBkZWxldGVMb2NhbGl6ZWRQYWdlcywgbW92ZUxvY2FsaXplZEZyYW1lc1RvUGFnZSwgfSBmcm9tIFwiLi9mdW5jdGlvbnMvcHJlcGVuZExhbmdcIjtcbi8vc2V0dXAgVUlcbmlmIChmaWdtYS5jb21tYW5kID09PSBcInNob3dVSVwiKSB7XG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgIGhlaWdodDogMzEwLFxuICAgIH0pO1xuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBcImZ1bGxXaWR0aFwiKSB7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcImhvcml6b250YWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmdWxsSGVpZ2h0XCIpIHtcbiAgICAgICAgICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmdWxsU2l6ZVwiKSB7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZnJhbWVTY3JlZW5zaG90XCIpIHtcbiAgICAgICAgICAgIGZyYW1lU2NyZWVuU2hvdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZm9ybWF0SWxsb1wiKSB7XG4gICAgICAgICAgICBmb3JtYXRJbGxvKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJoaWRlQW5ub3RhdGlvbnNcIikge1xuICAgICAgICAgICAgaGlkZUFubm90YXRpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJpb3NTbGljZXNcIikge1xuICAgICAgICAgICAgY3JlYXRlU2xpY2VzKFwiaW9zXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiYW5kcm9pZFNsaWNlc1wiKSB7XG4gICAgICAgICAgICBjcmVhdGVTbGljZXMoXCJhbmRyb2lkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwid2ViU2xpY2VzXCIpIHtcbiAgICAgICAgICAgIGNyZWF0ZVNsaWNlcyhcIndlYlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcIm1vdmVMb2NhbGl6ZWRGcmFtZXNUb1BhZ2VcIikge1xuICAgICAgICAgICAgbW92ZUxvY2FsaXplZEZyYW1lc1RvUGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZGVsZXRlTG9jYWxpemVkUGFnZXNcIikge1xuICAgICAgICAgICAgZGVsZXRlTG9jYWxpemVkUGFnZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImxhbmdKcGdcIikge1xuICAgICAgICAgICAgcHJlcGVuZExhbmcoXCJqcGdcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJsYW5nUG5nXCIpIHtcbiAgICAgICAgICAgIHByZXBlbmRMYW5nKFwicG5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwidGV4dFRvU2tlbGV0b25cIikge1xuICAgICAgICAgICAgdGV4dFRvU2tlbGV0b24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBzZXQgdXAgbWVudSBjb21tYW5kc1xuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnJhbWVTY3JlZW5TaG90XCIpIHtcbiAgICBmcmFtZVNjcmVlblNob3QoKTtcbiAgICAvLyAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJoaWRlQW5ub3RhdGlvbnNcIikge1xuICAgIGhpZGVBbm5vdGF0aW9ucygpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmdWxsV2lkdGhcIikge1xuICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbEhlaWdodFwiKSB7XG4gICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbFNpemVcIikge1xuICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmb3JtYXRJbGxvXCIpIHtcbiAgICBmb3JtYXRJbGxvKCk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImluc2VydFNwYWNpbmdcIikge1xuICAgIGluc2VydFNwYWNpbmcoKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImluY3JlYXNlU3BhY2luZ1wiKSB7XG4gICAgaW5jcmVhc2VTcGFjaW5nKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJkZWNyZWFzZVNwYWNpbmdcIikge1xuICAgIGRlY3JlYXNlU3BhY2luZygpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiYXV0b0xheW91dFwiKSB7XG4gICAgYXV0b0xheW91dCgpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwibW92ZUxvY2FsaXplZEZyYW1lc1RvUGFnZVwiKSB7XG4gICAgbW92ZUxvY2FsaXplZEZyYW1lc1RvUGFnZSgpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZGVsZXRlTG9jYWxpemVkUGFnZXNcIikge1xuICAgIGRlbGV0ZUxvY2FsaXplZFBhZ2VzKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJ0ZXh0VG9Ta2VsZXRvblwiKSB7XG4gICAgdGV4dFRvU2tlbGV0b24oKTtcbn1cbiIsImNvbnN0IGFkZENoaWxkVG9GcmFtZSA9IGZ1bmN0aW9uIChzaGFwZSwgZnJhbWUpIHtcbiAgICAvL2NyZWF0ZSB2YXJpYWJsZXNcbiAgICBjb25zdCBwYXJlbnQgPSBzaGFwZS5wYXJlbnQ7XG4gICAgY29uc3Qgc2hhcGVXaWR0aCA9IHNoYXBlLndpZHRoO1xuICAgIGNvbnN0IHNoYXBlSGVpZ2h0ID0gc2hhcGUuaGVpZ2h0O1xuICAgIGNvbnN0IHNoYXBlUG9zID0gc2hhcGUucmVsYXRpdmVUcmFuc2Zvcm07XG4gICAgY29uc3Qgc2hhcGVSb3RhdGlvbiA9IHNoYXBlLnJvdGF0aW9uO1xuICAgIC8vYWRkIGZyYW1lIHRvIGNoaWxkJ3MgcGFyZW50XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICAvL2FkZCBjaGlsZCB0byBmcmFtZVxuICAgIGZyYW1lLmFwcGVuZENoaWxkKHNoYXBlKTtcbiAgICAvLyAvL3B1dCBmcmFtZSB3aGVyZSBjaGlsZCB3YXMsIHB1dCBjaGlsZCBpbiAwLDAgcG9zXG4gICAgZnJhbWUucmVsYXRpdmVUcmFuc2Zvcm0gPSBzaGFwZVBvcztcbiAgICBzaGFwZS5yb3RhdGlvbiA9IDA7XG4gICAgc2hhcGUueCA9IDA7XG4gICAgc2hhcGUueSA9IDA7XG4gICAgLy9yZXNpemUgZnJhbWUgdG8gY2hpbGQncyBzaXplXG4gICAgZnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKHNoYXBlV2lkdGgsIHNoYXBlSGVpZ2h0KTtcbiAgICBmcmFtZS5yb3RhdGlvbiA9IHNoYXBlUm90YXRpb247XG4gICAgc2hhcGUuY29uc3RyYWludHMgPSB7XG4gICAgICAgIGhvcml6b250YWw6IFwiU0NBTEVcIixcbiAgICAgICAgdmVydGljYWw6IFwiU0NBTEVcIixcbiAgICB9O1xufTtcbmV4cG9ydCB7IGFkZENoaWxkVG9GcmFtZSB9O1xuIiwiY29uc3QgYXV0b0xheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmcmFtZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgaWYgKGZyYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3QgYXQgbGVhc3Qgb25lIGF1dG8gbGF5b3V0IGZyYW1lLlwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgaWYgKGZyYW1lLnR5cGUgPT09IFwiRlJBTUVcIiB8fCBmcmFtZS50eXBlID09PSBcIkNPTVBPTkVOVFwiKSB7XG4gICAgICAgICAgICBpZiAoZnJhbWUubGF5b3V0TW9kZSA9PT0gXCJWRVJUSUNBTFwiKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgZnJhbWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0R3JvdyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmFtZS5wYXJlbnQudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZS5wYXJlbnQubGF5b3V0TW9kZSAhPT0gXCJOT05FXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFtZS5wYXJlbnQuY291bnRlckF4aXNTaXppbmdNb2RlID09PSBcIkFVVE9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLnBhcmVudC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZS5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUubGF5b3V0R3JvdyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJDaGlsZHJlbiBzZXQgdG8gZmlsbCBjb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZnJhbWUubGF5b3V0TW9kZSA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgICAgICAgICAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiQ2hpbGRyZW4gYWxpZ25lZCBjZW50ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk9ubHkgc2VsZWN0IGF1dG9sYXlvdXQgZnJhbWVzLlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydCB7IGF1dG9MYXlvdXQgfTtcbiIsImltcG9ydCBpc1BhcnRPZkluc3RhbmNlIGZyb20gXCIuL2lzUGFydE9mSW5zdGFuY2VcIjtcbmxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG5jb25zdCBjb21wb25lbnRLZXkgPSBcIjhjMzJjOGNhNWVmNGJhNTljYWM2MzcwZmRkYTY5ZmE5MDc1OGEwMDNcIjtcbmNvbnN0IHNwYWNlcyA9IFtcbiAgICBcIjRcIixcbiAgICBcIjhcIixcbiAgICBcIjEyXCIsXG4gICAgXCIxNlwiLFxuICAgIFwiMjRcIixcbiAgICBcIjMyXCIsXG4gICAgXCI0OFwiLFxuICAgIFwiNjRcIixcbiAgICBcIjk2XCIsXG4gICAgXCIxMjhcIixcbiAgICBcIjE2MFwiLFxuICAgIFwiMTkyXCIsXG4gICAgXCIyNDBcIixcbl07XG5jb25zdCBpbnNlcnRTcGFjaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGlvblswXTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gc2VsZWN0ZWQucGFyZW50O1xuICAgICAgICBpZiAoaXNQYXJ0T2ZJbnN0YW5jZShzZWxlY3RlZCkpIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiWW91IGNhbid0IGFkZCBlbGVtZW50cyB0byBhIGNvbXBvbmVudCBpbnN0YW5jZS5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2V0SW5kZXggPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUucGFyZW50LmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLmlkKS5pbmRleE9mKG5vZGUuaWQpO1xuICAgICAgICB9O1xuICAgICAgICBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKGNvbXBvbmVudEtleSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNpbmcgPSByZXNwb25zZS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgcGFyZW50Lmluc2VydENoaWxkKGdldEluZGV4KHNlbGVjdGVkKSArIDEsIHNwYWNpbmcpO1xuICAgICAgICAgICAgc3BhY2luZy5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtzcGFjaW5nXTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoY29tcG9uZW50S2V5KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2luZyA9IHJlc3BvbnNlLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5pbnNlcnRDaGlsZCgwLCBzcGFjaW5nKTtcbiAgICAgICAgICAgIHNwYWNpbmcub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbc3BhY2luZ107XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlcjtcbiAgICAgICAgICAgIHNwYWNpbmcueCA9IHg7XG4gICAgICAgICAgICBzcGFjaW5nLnkgPSB5O1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk9ubHkgc2VsZWN0IG9uZSBsYXllciBhdCBhIHRpbWUsIG9yIG5vIGxheWVycy5cIik7XG4gICAgfVxufTtcbmNvbnN0IGNoYW5nZVNwYWNpbmcgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgIGxldCBuZXdTaXplO1xuICAgICAgICBpZiAoc2hhcGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiICYmIHNoYXBlLm1haW5Db21wb25lbnQua2V5ID09PSBjb21wb25lbnRLZXkpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0TGFiZWw7XG4gICAgICAgICAgICBjb25zdCB0ZXh0V3JhcHBlciA9IHNoYXBlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgaWYgKHRleHRXcmFwcGVyLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgIHRleHRMYWJlbCA9IHRleHRXcmFwcGVyLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dExhYmVsLmNoYXJhY3RlcnMpO1xuICAgICAgICAgICAgbGV0IGN1cnJTaXplID0gdGV4dExhYmVsLmNoYXJhY3RlcnM7XG4gICAgICAgICAgICBsZXQgY3VyckluZGV4ID0gc3BhY2VzLmluZGV4T2YoY3VyclNpemUpO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJpbmNyZWFzZVwiICYmIGN1cnJJbmRleCA8IHNwYWNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNwYWNlc1tjdXJySW5kZXggKyAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkZWNyZWFzZVwiICYmIGN1cnJJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdTaXplID0gc3BhY2VzW2N1cnJJbmRleCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U2l6ZSA9IGN1cnJTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hhcGUucGFkZGluZ1RvcCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgc2hhcGUucGFkZGluZ1JpZ2h0ID0gbmV3U2l6ZSAvIDI7XG4gICAgICAgICAgICBzaGFwZS5wYWRkaW5nQm90dG9tID0gbmV3U2l6ZSAvIDI7XG4gICAgICAgICAgICBzaGFwZS5wYWRkaW5nTGVmdCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgc2hhcGUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICBzaGFwZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIHNoYXBlLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgICAgICAgICBzaGFwZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgZmlnbWFcbiAgICAgICAgICAgICAgICAubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGV4dExhYmVsLnNldFJhbmdlRm9udE5hbWUoMCwgdGV4dExhYmVsLmNoYXJhY3RlcnMubGVuZ3RoLCB7XG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogXCJSb2JvdG8gTW9ub1wiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJSZWd1bGFyXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGV4dExhYmVsLmNoYXJhY3RlcnMgPSBuZXdTaXplO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuY29uc3QgaW5jcmVhc2VTcGFjaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5nZVNwYWNpbmcoXCJpbmNyZWFzZVwiKTtcbn07XG5jb25zdCBkZWNyZWFzZVNwYWNpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2hhbmdlU3BhY2luZyhcImRlY3JlYXNlXCIpO1xufTtcbmV4cG9ydCB7IGluY3JlYXNlU3BhY2luZywgZGVjcmVhc2VTcGFjaW5nLCBpbnNlcnRTcGFjaW5nIH07XG4iLCIvL2NyZWF0ZSBiYXNpYyBjbG9uZSBmdW5jdGlvblxuZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG5leHBvcnQgeyBjbG9uZSB9O1xuIiwiZnVuY3Rpb24gcGFzY2FsQ2FzZShpbnB1dCkge1xuICAgIHJldHVybiAoaW5wdXQubWF0Y2goL1thLXpBLVowLTldKy9nKSB8fCBbXSlcbiAgICAgICAgLm1hcCgodykgPT4gYCR7dy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3cuc2xpY2UoMSl9YClcbiAgICAgICAgLmpvaW4oXCJcIik7XG59XG5jb25zdCBhZGRTbGljZVRvRnJhbWUgPSBmdW5jdGlvbiAoZnJhbWUsIHBsYXRmb3JtKSB7XG4gICAgLy9yZW1vdmUgY3VycmVudCBzbGljZSBpZiBpdCBleGlzdHNcbiAgICBjb25zdCBjaGlsZHJlbiA9IGZyYW1lLmNoaWxkcmVuO1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIlNMSUNFXCIpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9jcmVhdGUgbmV3IHNsaWNlIHRoYXQgaXMgdGhlIHNhbWUgc2l6ZSBhcyBmcmFtZVxuICAgIGNvbnN0IHNsaWNlID0gZmlnbWEuY3JlYXRlU2xpY2UoKTtcbiAgICBjb25zdCBmcmFtZVdpZHRoID0gZnJhbWUud2lkdGg7XG4gICAgY29uc3QgZnJhbWVIZWlnaHQgPSBmcmFtZS5oZWlnaHQ7XG4gICAgY29uc3QgaWNvbk5hbWUgPSBmcmFtZS5uYW1lO1xuICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBmcmFtZS5wYXJlbnQubmFtZTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZChzbGljZSk7XG4gICAgc2xpY2UueCA9IDA7XG4gICAgc2xpY2UueSA9IDA7XG4gICAgc2xpY2UucmVzaXplKGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0KTtcbiAgICBzbGljZS5uYW1lID0gZm9ybWF0TmFtZShjb21wb25lbnROYW1lLCBpY29uTmFtZSwgcGxhdGZvcm0pO1xuICAgIGlmIChwbGF0Zm9ybSA9PT0gXCJpb3NcIikge1xuICAgICAgICBzbGljZS5leHBvcnRTZXR0aW5ncyA9IFt7IGZvcm1hdDogXCJQREZcIiB9XTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNsaWNlLmV4cG9ydFNldHRpbmdzID0gW3sgZm9ybWF0OiBcIlNWR1wiIH1dO1xuICAgIH1cbn07XG5mdW5jdGlvbiBmb3JtYXROYW1lKGlucHV0MSwgaW5wdXQyLCBvdXRwdXQpIHtcbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5mcm9tRW50cmllcyhpbnB1dDJcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoXCIsXCIpXG4gICAgICAgIC5tYXAoKHN0cikgPT4gc3RyLnRyaW0oKS5yZXBsYWNlKC9bXFxzL10vZywgXCJfXCIpLnNwbGl0KFwiPVwiKSkpO1xuICAgIGNvbnN0IHNpemUgPSBwcm9wcy5TaXplO1xuICAgIGRlbGV0ZSBwcm9wcy5TaXplO1xuICAgIGNvbnN0IHNhbml0aXNlZElucHV0MSA9IGlucHV0MVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW1xccy9dL2csIFwiX1wiKVxuICAgICAgICAucmVwbGFjZSgvX18rLywgXCJfXCIpO1xuICAgIGNvbnN0IHNpemVVbml0ID0gb3V0cHV0ID09PSBcImFuZHJvaWRcIiA/IFwiZHBcIiA6IG91dHB1dCA9PT0gXCJpb3NcIiA/IFwicHRcIiA6IFwicHhcIjtcbiAgICBjb25zdCByZXN0ID0gT2JqZWN0LnZhbHVlcyhwcm9wcylcbiAgICAgICAgLm1hcCgocykgPT4gcy50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtzYW5pdGlzZWRJbnB1dDEsIC4uLnJlc3QsIGAke3NpemV9JHtzaXplVW5pdH1gXS5qb2luKFwiX1wiKTtcbiAgICByZXR1cm4gb3V0cHV0ID09PSBcImlvc1wiID8gcGFzY2FsQ2FzZSh2YWx1ZXMpIDogdmFsdWVzO1xufVxuY29uc3QgY3JlYXRlU2xpY2VzID0gZnVuY3Rpb24gKHBsYXRmb3JtKSB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdCBhdCBsZWFzdCBvbmUgb2JqZWN0XCIpO1xuICAgIH1cbiAgICBzZWxlY3Rpb24uZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgaWYgKGZyYW1lLnR5cGUgPT09IFwiQ09NUE9ORU5UX1NFVFwiKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYW50cyA9IGZyYW1lLmNoaWxkcmVuO1xuICAgICAgICAgICAgdmFyaWFudHMuZm9yRWFjaCgodmFyaWFudCkgPT4ge1xuICAgICAgICAgICAgICAgIGFkZFNsaWNlVG9GcmFtZSh2YXJpYW50LCBwbGF0Zm9ybSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiUGxlYXNlIG9ubHkgc2VsZWN0IENvbXBvbmVudCBTZXRzICh0aGUgcHVycGxlIGRvdHRlZCBib3ggYXJvdW5kIHZhcmlhbnRzKVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydCB7IGNyZWF0ZVNsaWNlcyB9O1xuIiwiaW1wb3J0IHsgYWRkQ2hpbGRUb0ZyYW1lIH0gZnJvbSBcIi4vYWRkQ2hpbGRUb0ZyYW1lXCI7XG5pbXBvcnQgeyBjbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5jb25zdCBrZXlzID0gW1xuICAgIFwiNzgxNTZmOGE3Mjc0MGJkMGQ5YWM2OTRiOWY3NmNjYzAwNjJkMzc4MVwiLFxuXTtcbmNvbnN0IGZvcm1hdElsbG8gPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgYXN5bmMgZnVuY3Rpb24gbWFwU3R5bGVzKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IGtleXMubWFwKGFzeW5jIChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhzdHlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZXMgPSBhd2FpdCBtYXBTdHlsZXMoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2hhcGUudHlwZSA9PT0gXCJSRUNUQU5HTEVcIikge1xuICAgICAgICAgICAgaWYgKHNoYXBlLmZpbGxzWzBdLnR5cGUgPT09IFwiSU1BR0VcIikge1xuICAgICAgICAgICAgICAgIC8vIGlmIChzaGFwZS5yb3RhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vICAgZmlnbWEuY2xvc2VQbHVnaW4oXG4gICAgICAgICAgICAgICAgLy8gICAgIFwiU2hhcGVzIG11c3Qgbm90IGJlIHJvdGF0ZWQgZm9yIHRoaXMgZnVuY3Rpb24gdG8gd29yay4gU29ycnkhXCJcbiAgICAgICAgICAgICAgICAvLyAgICk7XG4gICAgICAgICAgICAgICAgLy8gICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS5zY2FsZU1vZGUgIT0gXCJDUk9QXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsbHMgPSBjbG9uZShzaGFwZS5maWxscyk7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxzWzBdLnNjYWxlTW9kZSA9IFwiQ1JPUFwiO1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5maWxscyA9IGZpbGxzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL21ha2UgbmV3IGZyYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGZyYW1lIGZpbGxzXG4gICAgICAgICAgICAgICAgbGV0IGZyYW1lRmlsbHMgPSBjbG9uZShmcmFtZS5maWxscyk7XG4gICAgICAgICAgICAgICAgZnJhbWVGaWxscyA9IFtdO1xuICAgICAgICAgICAgICAgIGZyYW1lLmZpbGxzID0gZnJhbWVGaWxscztcbiAgICAgICAgICAgICAgICBhZGRDaGlsZFRvRnJhbWUoc2hhcGUsIGZyYW1lKTtcbiAgICAgICAgICAgICAgICAvL2R1cGxpY2F0ZSBjaGlsZFxuICAgICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZSA9IHNoYXBlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZHVwbGljYXRlKTtcbiAgICAgICAgICAgICAgICAvL3JlbmFtZSBsYXllciBhbmQgdGludFxuICAgICAgICAgICAgICAgIHNoYXBlLm5hbWUgPSBcIkltYWdlXCI7XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlLm5hbWUgPSBcIlRpbnRcIjtcbiAgICAgICAgICAgICAgICAvL0NoYW5nZSB0aW50IGNvbG9yIHRvIGJsYWNrXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlLmZpbGxTdHlsZUlkID0gc3R5bGVzWzBdLmlkO1xuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIE1hc2sgd2l0aCB0d28gbGF5ZXJzXG4gICAgICAgICAgICAgICAgc2hhcGUuaXNNYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvL2NsZWFyIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJPbmx5IHNlbGVjdCBub2RlcyB3aXRoIHNpbmdsZSBpbWFnZSBmaWxscy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk9ubHkgc2VsZWN0IG5vZGVzIHdpdGggc2luZ2xlIGltYWdlIGZpbGxzXCIpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IGZvcm1hdElsbG8gfTtcbiIsImltcG9ydCB7IGFkZENoaWxkVG9GcmFtZSB9IGZyb20gXCIuL2FkZENoaWxkVG9GcmFtZVwiO1xuaW1wb3J0IHsgY2xvbmUgfSBmcm9tIFwiLi9jbG9uZVwiO1xuY29uc3Qga2V5cyA9IFtcbiAgICBcIjQxYWI5NWJlMDk5NjU2YzI0MWVjOWFkYzdjZjNhMGMzN2NjZGU5OTJcIixcbiAgICBcIjE4YjBjYTRkM2U3MzY5ZDBkZjZlNzIwYmRmZTg5YWUwM2ZkNDhlODFcIixcbiAgICBcImQzMjYwM2M0NWQ0NDIzYjJkOWVhNDdiZGY5MzYzM2ZkOTA3MzQwZTNcIixcbl07XG5jb25zdCBmcmFtZVNjcmVlblNob3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBhc3luYyBmdW5jdGlvbiBtYXBTdHlsZXMoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0ga2V5cy5tYXAoYXN5bmMgKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKHN0eWxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlcyA9IGF3YWl0IG1hcFN0eWxlcygpO1xuICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2hhcGUudHlwZSA9PT0gXCJSRUNUQU5HTEVcIikge1xuICAgICAgICAgICAgaWYgKHNoYXBlLmZpbGxzWzBdLnR5cGUgPT09IFwiSU1BR0VcIikge1xuICAgICAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS5zY2FsZU1vZGUgIT0gXCJDUk9QXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsbHMgPSBjbG9uZShzaGFwZS5maWxscyk7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxzWzBdLnNjYWxlTW9kZSA9IFwiQ1JPUFwiO1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5maWxscyA9IGZpbGxzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL21ha2UgbmV3IGZyYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgIGFkZENoaWxkVG9GcmFtZShzaGFwZSwgZnJhbWUpO1xuICAgICAgICAgICAgICAgIGZyYW1lLmNvcm5lclJhZGl1cyA9IDQ7XG4gICAgICAgICAgICAgICAgZnJhbWUuc3Ryb2tlV2VpZ2h0ID0gMTtcbiAgICAgICAgICAgICAgICBmcmFtZS5zdHJva2VTdHlsZUlkID0gc3R5bGVzWzFdLmlkO1xuICAgICAgICAgICAgICAgIGZyYW1lLmZpbGxTdHlsZUlkID0gc3R5bGVzWzBdLmlkO1xuICAgICAgICAgICAgICAgIGZyYW1lLmVmZmVjdFN0eWxlSWQgPSBzdHlsZXNbMl0uaWQ7XG4gICAgICAgICAgICAgICAgZnJhbWUubmFtZSA9IHNoYXBlLm5hbWU7XG4gICAgICAgICAgICAgICAgc2hhcGUubmFtZSA9IFwiU2NyZWVuc2hvdFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IGNsb25lKHNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0aW9uWzBdID0gZnJhbWU7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uO1xuICAgICAgICAgICAgICAgIGZyYW1lLmNvbnN0cmFpblByb3BvcnRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiTWFrZSBzdXJlIHlvdXIgcmVjdGFuZ2xlIGhhcyBvbmx5IGFuIGltYWdlIGZpbGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gXCJGUkFNRVwiIHx8IHNoYXBlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIikge1xuICAgICAgICAgICAgc2hhcGUuY29ybmVyUmFkaXVzID0gNDtcbiAgICAgICAgICAgIHNoYXBlLnN0cm9rZVdlaWdodCA9IDE7XG4gICAgICAgICAgICBzaGFwZS5zdHJva2VTdHlsZUlkID0gc3R5bGVzWzFdLmlkO1xuICAgICAgICAgICAgc2hhcGUuZmlsbFN0eWxlSWQgPSBzdHlsZXNbMF0uaWQ7XG4gICAgICAgICAgICBzaGFwZS5lZmZlY3RTdHlsZUlkID0gc3R5bGVzWzJdLmlkO1xuICAgICAgICAgICAgc2hhcGUuY2xpcHNDb250ZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IG9ubHkgZnJhbWVzIG9yIHJlY3RhbmdsZXMgd2l0aCBpbWFnZSBmaWxsc1wiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbmV4cG9ydCB7IGZyYW1lU2NyZWVuU2hvdCB9O1xuIiwiY29uc3QgaGlkZUFubm90YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5vZGUgPSBmaWdtYS5jdXJyZW50UGFnZTtcbiAgICBjb25zdCBub2RlcyA9IG5vZGUuZmluZEFsbCgobm9kZSkgPT4gbm9kZS5uYW1lID09PSBcIiRBbm5vdGF0aW9uXCIpO1xuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudmlzaWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG5vZGUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydCB7IGhpZGVBbm5vdGF0aW9ucyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQYXJ0T2ZJbnN0YW5jZShub2RlKSB7XG4gICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgaWYgKHBhcmVudC50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcmVudC50eXBlID09PSBcIlBBR0VcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gaXNQYXJ0T2ZJbnN0YW5jZShwYXJlbnQpO1xuICAgIH1cbn1cbiIsImNvbnN0IGxhbmdDb2RlcyA9IFtcbiAgICBcImFyXCIsXG4gICAgXCJjc1wiLFxuICAgIFwiZGFcIixcbiAgICBcImRlXCIsXG4gICAgXCJlc1wiLFxuICAgIFwiZmlcIixcbiAgICBcImZyXCIsXG4gICAgXCJpdFwiLFxuICAgIFwiamFcIixcbiAgICBcImtvXCIsXG4gICAgXCJuYlwiLFxuICAgIFwibmxcIixcbiAgICBcInBsXCIsXG4gICAgXCJwdF9CUlwiLFxuICAgIFwicnVcIixcbiAgICBcInN2XCIsXG4gICAgXCJ0clwiLFxuICAgIFwiemhfQ05cIixcbiAgICBcInpoX1RXXCIsXG5dO1xuY29uc3QgcHJlcGVuZExhbmcgPSAoZm9ybWF0KSA9PiB7XG4gICAgLy9pZiB0aGVyZSBpcyBicmFja2V0ZWQgdGV4dCBhdCB0aGUgYmVnaW5uaW5nIG9mIHBhZ2UgbmFtZVxuICAgIC8vYWRkIHRoYXQgYnJhY2tldGVkIHRleHQgdG8gdGhlIGJlZ2lubmluZyBvZiBldmVyeSBmcmFtZSBuYW1lXG4gICAgLy91bmxlc3MgdGhlIGZyYW1lIGFscmVhZHkgc3RhcnRzIHdpdGggaXQsIHRoZW4gc2tpcFxuICAgIGNvbnN0IHBhZ2VzID0gZmlnbWEucm9vdC5jaGlsZHJlbjtcbiAgICBwYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgIGxhbmdDb2Rlcy5mb3JFYWNoKChjb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZS5uYW1lLnN0YXJ0c1dpdGgoYFske2NvZGV9XWApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWVzID0gcGFnZS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBmcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuZXhwb3J0U2V0dGluZ3MgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXQudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50OiB7IHR5cGU6IFwiU0NBTEVcIiwgdmFsdWU6IDIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLm5hbWUuc3RhcnRzV2l0aChgJHtjb2RlfSAvIGApXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChmcmFtZS5uYW1lID0gZnJhbWUubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGZyYW1lLm5hbWUgPSBjb2RlICsgXCIgLyBcIiArIGZyYW1lLm5hbWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbmNvbnN0IGRlbGV0ZUxvY2FsaXplZFBhZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHBhZ2VzID0gZmlnbWEucm9vdC5jaGlsZHJlbjtcbiAgICBwYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgIGxldCByZW1vdmUgPSBmYWxzZTtcbiAgICAgICAgbGFuZ0NvZGVzLmZvckVhY2goKGNvZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLm5hbWUuc3RhcnRzV2l0aChgWyR7Y29kZX1dYCkgJiYgcGFnZXMuaW5kZXhPZihwYWdlKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwYWdlID09PSBmaWdtYS5jdXJyZW50UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIkNhbid0IGRlbGV0ZSBjdXJyZW50IHBhZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlID8gcGFnZS5yZW1vdmUoKSA6IGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfSk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG5jb25zdCBtb3ZlTG9jYWxpemVkRnJhbWVzVG9QYWdlID0gKCkgPT4ge1xuICAgIHByZXBlbmRMYW5nKFwicG5nXCIpO1xuICAgIGNvbnN0IHBhZ2VzID0gZmlnbWEucm9vdC5jaGlsZHJlbjtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBwYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgIGxhbmdDb2Rlcy5mb3JFYWNoKChjb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZS5uYW1lLnN0YXJ0c1dpdGgoYFske2NvZGV9XWApICYmIHBhZ2VzLmluZGV4T2YocGFnZSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICBwYWdlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gWy4uLm5vZGVzLCBjaGlsZF07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IG5ld1BhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XG4gICAgbmV3UGFnZS5uYW1lID0gXCJMb2NhbGl6ZWQgR3JhcGhpY3NcIjtcbiAgICBjb25zdCBhdXRvTGF5b3V0RnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGF1dG9MYXlvdXRGcmFtZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgYXV0b0xheW91dEZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGF1dG9MYXlvdXRGcmFtZS5pdGVtU3BhY2luZyA9IDY0O1xuICAgIGF1dG9MYXlvdXRGcmFtZS5maWxscyA9IFtdO1xuICAgIG5ld1BhZ2UuYXBwZW5kQ2hpbGQoYXV0b0xheW91dEZyYW1lKTtcbiAgICBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgYXV0b0xheW91dEZyYW1lLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICAgIGRlbGV0ZUxvY2FsaXplZFBhZ2VzKCk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG5leHBvcnQgeyBwcmVwZW5kTGFuZywgZGVsZXRlTG9jYWxpemVkUGFnZXMsIG1vdmVMb2NhbGl6ZWRGcmFtZXNUb1BhZ2UgfTtcbiIsImNvbnN0IHNldEZ1bGxTaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbikge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIkZSQU1FXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiQ09NUE9ORU5UXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJWRUNUT1JcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJTVEFSXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiTElORVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIkVMTElQU0VcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJQT0xZR09OXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiVEVYVFwiKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBzaGFwZS5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAoKHBhcmVudCAmJiBwYXJlbnQudHlwZSA9PT0gXCJGUkFNRVwiKSB8fCBwYXJlbnQudHlwZSA9PT0gXCJDT01QT05FTlRcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gcGFyZW50LndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEhlaWdodCA9IHBhcmVudC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVIZWlnaHQgPSBzaGFwZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVXaWR0aCA9IHNoYXBlLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gc2hhcGVXaWR0aCAvIHNoYXBlSGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vc2V0IHJvdGF0aW9uIHRvIDBcbiAgICAgICAgICAgICAgICBzaGFwZS5yb3RhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgLy9yZXNpemUgdGhlIHNoYXBlXG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tYWludGFpbnMgdGhlIGFzcGVjdCByYXRpbyB3aGVuIHRoZSBjb25zdHJhaW4gcHJvcG9ydGlvbnMgc2V0dGluZyBpcyBhcHBsaWVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFwZS5jb25zdHJhaW5Qcm9wb3J0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUucmVzaXplKHBhcmVudFdpZHRoLCBwYXJlbnRXaWR0aCAvIGFzcGVjdFJhdGlvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShwYXJlbnRXaWR0aCwgc2hhcGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpbWVuc2lvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWFpbnRhaW5zIHRoZSBhc3BlY3QgcmF0aW8gd2hlbiB0aGUgY29uc3RyYWluIHByb3BvcnRpb25zIHNldHRpbmcgaXMgYXBwbGllZFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcGUuY29uc3RyYWluUHJvcG9ydGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShwYXJlbnRIZWlnaHQgKiBhc3BlY3RSYXRpbywgcGFyZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShzaGFwZVdpZHRoLCBwYXJlbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBzaGFwZSBwb3NpdGlvbiB0byBvcmlnaW5cbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS54ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGltZW5zaW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUueSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vZmluZCBjdXJyZW50IGNvbnN0cmFpbnRzXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZlcnRpY2FsQ29udHJhaW50ID0gc2hhcGUuY29uc3RyYWludHMudmVydGljYWw7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEhvcml6b250YWxDb250cmFpbnQgPSBzaGFwZS5jb25zdHJhaW50cy5ob3Jpem9udGFsO1xuICAgICAgICAgICAgICAgIC8vc2V0IGNvbnN0cmFpbnRzXG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBjdXJyZW50VmVydGljYWxDb250cmFpbnQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpbWVuc2lvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogY3VycmVudEhvcml6b250YWxDb250cmFpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJTVFJFVENIXCIsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3Rpb24gbXVzdCBiZSBuZXN0ZWQgaW4gYSBmcmFtZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlBsZWFzZSBzZWxlY3Qgc29tZXRoaW5nIHRoYXQgY2FuIGJlIHJlc2l6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IHNldEZ1bGxTaXplIH07XG4iLCJpbXBvcnQgeyBjbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5pbXBvcnQgaXNQYXJ0T2ZJbnN0YW5jZSBmcm9tIFwiLi9pc1BhcnRPZkluc3RhbmNlXCI7XG5mdW5jdGlvbiB0ZXh0VG9Ta2VsZXRvbigpIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGxldCBuZXdTZWxlY3Rpb24gPSBbXTtcbiAgICBzZWxlY3Rpb24uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBpZiAoaXNQYXJ0T2ZJbnN0YW5jZShub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnR5cGUgIT09IFwiVEVYVFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IG5vZGUud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBub2RlLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbm9kZS5yZWxhdGl2ZVRyYW5zZm9ybTtcbiAgICAgICAgICAgIGxldCBmb250U2l6ZSA9IDEyO1xuICAgICAgICAgICAgbGV0IHZpc3VhbFNpemU7XG4gICAgICAgICAgICBpZiAobm9kZS5mb250U2l6ZSAhPT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgICAgICAgICAgICB2aXN1YWxTaXplID0gZm9udFNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk9ubHkgc2VsZWN0IHRleHQgbm9kZXMgd2l0aCBvbmUgZm9udCBzaXplIGFwcGxpZWQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBjcmVhdGVTa2VsZXRvblNoYXBlKHdpZHRoLCBoZWlnaHQsIHZpc3VhbFNpemUpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgICAgICAgICAgZnJhbWUucmVsYXRpdmVUcmFuc2Zvcm0gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBbLi4ubmV3U2VsZWN0aW9uLCBmcmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uO1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlU2tlbGV0b25TaGFwZSh3aWR0aCwgaGVpZ2h0LCB2aXN1YWxTaXplKSB7XG4gICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGZyYW1lLm5hbWUgPSBcIlNrZWxldG9uIFRleHRcIjtcbiAgICBmcmFtZS5maWxscyA9IFtdO1xuICAgIGZyYW1lLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCByZWN0YW5nbGUgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZChyZWN0YW5nbGUpO1xuICAgIGxldCBmaWxscyA9IGNsb25lKHJlY3RhbmdsZS5maWxscyk7XG4gICAgZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSwgb3BhY2l0eTogMC4xIH1dO1xuICAgIHJlY3RhbmdsZS5maWxscyA9IGZpbGxzO1xuICAgIHJlY3RhbmdsZS5jb3JuZXJSYWRpdXMgPSAyO1xuICAgIHJlY3RhbmdsZS5uYW1lID0gXCJTaGFwZVwiO1xuICAgIGNvbnN0IHJlY3RhbmdsZUhlaWdodCA9IE1hdGguY2VpbCh2aXN1YWxTaXplICogMC44NSk7XG4gICAgcmVjdGFuZ2xlLnJlc2l6ZSh3aWR0aCwgcmVjdGFuZ2xlSGVpZ2h0KTtcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgZnJhbWUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgIHJldHVybiBmcmFtZTtcbn1cbmV4cG9ydCB7IHRleHRUb1NrZWxldG9uIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvZGUudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9