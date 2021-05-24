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
    //put all nodes into an array of pages, each an array itself containing the graphics from that page
    let allNodes = [];
    pages.forEach((page) => {
        langCodes.forEach((code) => {
            if (page.name.startsWith(`[${code}]`) && pages.indexOf(page) !== 0) {
                let frames = [];
                page.children.forEach((child) => {
                    frames = [...frames, child];
                });
                allNodes = [...allNodes, frames];
            }
        });
    });
    //reconfigure the arrays to be organized by graphic, rather than by page.
    const sliced = allNodes.reduce((results, collection) => {
        collection.forEach((g, i) => {
            results[i] = results[i] || [];
            results[i].push(g);
        });
        return results;
    }, []);
    const newPage = figma.createPage();
    newPage.name = "Localized Graphics";
    const mainLayoutFrame = figma.createFrame();
    mainLayoutFrame.layoutMode = "VERTICAL";
    mainLayoutFrame.counterAxisSizingMode = "AUTO";
    mainLayoutFrame.itemSpacing = 96;
    mainLayoutFrame.fills = [];
    mainLayoutFrame.name = "Graphics";
    sliced.forEach((arr) => {
        const autoLayoutFrame = figma.createFrame();
        autoLayoutFrame.layoutMode = "HORIZONTAL";
        autoLayoutFrame.counterAxisSizingMode = "AUTO";
        autoLayoutFrame.itemSpacing = 64;
        autoLayoutFrame.fills = [];
        const childName = arr[0].name;
        autoLayoutFrame.name = childName.substr(childName.indexOf("/") + 1).trim();
        newPage.appendChild(autoLayoutFrame);
        arr.map((node) => {
            autoLayoutFrame.appendChild(node);
        });
        mainLayoutFrame.appendChild(autoLayoutFrame);
    });
    newPage.appendChild(mainLayoutFrame);
    figma.currentPage = newPage;
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
            const constraints = node.constraints;
            const position = node.relativeTransform;
            const color = node.fills;
            const id = node.id;
            const siblings = node.parent.children;
            let siblingIds = [];
            siblings.map((node) => {
                siblingIds.push(node.id);
            });
            const index = siblingIds.indexOf(id);
            let fontSize = 12;
            let visualSize;
            if (node.fontSize !== figma.mixed) {
                visualSize = fontSize;
            }
            else {
                figma.closePlugin("Only select text nodes with one font size applied.");
            }
            const frame = createSkeletonShape(width, height, visualSize, color);
            const parent = node.parent;
            parent.insertChild(index, frame);
            frame.relativeTransform = position;
            frame.constraints = constraints;
            node.remove();
            newSelection = [...newSelection, frame];
        }
        figma.currentPage.selection = newSelection;
        figma.closePlugin();
    });
}
function createSkeletonShape(width, height, visualSize, color) {
    const frame = figma.createFrame();
    frame.name = "Skeleton Text";
    frame.fills = [];
    frame.resize(width, height);
    const rectangle = figma.createRectangle();
    frame.appendChild(rectangle);
    let fills = (0,_clone__WEBPACK_IMPORTED_MODULE_0__.clone)(rectangle.fills);
    //   fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 }, opacity: 0.1 }];
    rectangle.fills = color;
    rectangle.opacity = 0.1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvZnVuY3Rpb25zL2FkZENoaWxkVG9GcmFtZS50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvZnVuY3Rpb25zL2F1dG9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy9jaGFuZ2VTcGFjaW5nLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvY2xvbmUudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVTbGljZXMudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy9mb3JtYXRJbGxvLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvZnJhbWVTY3JlZW5zaG90LnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvaGlkZUFubm90YXRpb25zLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvaXNQYXJ0T2ZJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvZnVuY3Rpb25zL3ByZXBlbmRMYW5nLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvc2V0RnVsbFNpemUudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy90ZXh0VG9Ta2VsZXRvbi50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ0Y7QUFDVTtBQUNBO0FBQ047QUFDSjtBQUNRO0FBQ2lDO0FBQ1c7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QixZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLDJFQUFlO0FBQzNCO0FBQ0E7QUFDQSxZQUFZLGlFQUFVO0FBQ3RCO0FBQ0E7QUFDQSxZQUFZLDJFQUFlO0FBQzNCO0FBQ0E7QUFDQSxZQUFZLHFFQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLHFFQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLHFFQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGlGQUF5QjtBQUNyQztBQUNBO0FBQ0EsWUFBWSw0RUFBb0I7QUFDaEM7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyRUFB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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXRGdWxsU2l6ZSB9IGZyb20gXCIuL2Z1bmN0aW9ucy9zZXRGdWxsU2l6ZVwiO1xuaW1wb3J0IHsgZm9ybWF0SWxsbyB9IGZyb20gXCIuL2Z1bmN0aW9ucy9mb3JtYXRJbGxvXCI7XG5pbXBvcnQgeyBmcmFtZVNjcmVlblNob3QgfSBmcm9tIFwiLi9mdW5jdGlvbnMvZnJhbWVTY3JlZW5zaG90XCI7XG5pbXBvcnQgeyBoaWRlQW5ub3RhdGlvbnMgfSBmcm9tIFwiLi9mdW5jdGlvbnMvaGlkZUFubm90YXRpb25zXCI7XG5pbXBvcnQgeyBjcmVhdGVTbGljZXMgfSBmcm9tIFwiLi9mdW5jdGlvbnMvY3JlYXRlU2xpY2VzXCI7XG5pbXBvcnQgeyBhdXRvTGF5b3V0IH0gZnJvbSBcIi4vZnVuY3Rpb25zL2F1dG9sYXlvdXRcIjtcbmltcG9ydCB7IHRleHRUb1NrZWxldG9uIH0gZnJvbSBcIi4vZnVuY3Rpb25zL3RleHRUb1NrZWxldG9uXCI7XG5pbXBvcnQgeyBpbmNyZWFzZVNwYWNpbmcsIGRlY3JlYXNlU3BhY2luZywgaW5zZXJ0U3BhY2luZywgfSBmcm9tIFwiLi9mdW5jdGlvbnMvY2hhbmdlU3BhY2luZ1wiO1xuaW1wb3J0IHsgcHJlcGVuZExhbmcsIGRlbGV0ZUxvY2FsaXplZFBhZ2VzLCBtb3ZlTG9jYWxpemVkRnJhbWVzVG9QYWdlLCB9IGZyb20gXCIuL2Z1bmN0aW9ucy9wcmVwZW5kTGFuZ1wiO1xuLy9zZXR1cCBVSVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwic2hvd1VJXCIpIHtcbiAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHtcbiAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgaGVpZ2h0OiAzMTAsXG4gICAgfSk7XG4gICAgZmlnbWEudWkub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IFwiZnVsbFdpZHRoXCIpIHtcbiAgICAgICAgICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImZ1bGxIZWlnaHRcIikge1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImZ1bGxTaXplXCIpIHtcbiAgICAgICAgICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcImhvcml6b250YWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmcmFtZVNjcmVlbnNob3RcIikge1xuICAgICAgICAgICAgZnJhbWVTY3JlZW5TaG90KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmb3JtYXRJbGxvXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdElsbG8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImhpZGVBbm5vdGF0aW9uc1wiKSB7XG4gICAgICAgICAgICBoaWRlQW5ub3RhdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImlvc1NsaWNlc1wiKSB7XG4gICAgICAgICAgICBjcmVhdGVTbGljZXMoXCJpb3NcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJhbmRyb2lkU2xpY2VzXCIpIHtcbiAgICAgICAgICAgIGNyZWF0ZVNsaWNlcyhcImFuZHJvaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJ3ZWJTbGljZXNcIikge1xuICAgICAgICAgICAgY3JlYXRlU2xpY2VzKFwid2ViXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwibW92ZUxvY2FsaXplZEZyYW1lc1RvUGFnZVwiKSB7XG4gICAgICAgICAgICBtb3ZlTG9jYWxpemVkRnJhbWVzVG9QYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJkZWxldGVMb2NhbGl6ZWRQYWdlc1wiKSB7XG4gICAgICAgICAgICBkZWxldGVMb2NhbGl6ZWRQYWdlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwibGFuZ0pwZ1wiKSB7XG4gICAgICAgICAgICBwcmVwZW5kTGFuZyhcImpwZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImxhbmdQbmdcIikge1xuICAgICAgICAgICAgcHJlcGVuZExhbmcoXCJwbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJ0ZXh0VG9Ta2VsZXRvblwiKSB7XG4gICAgICAgICAgICB0ZXh0VG9Ta2VsZXRvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIHNldCB1cCBtZW51IGNvbW1hbmRzXG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmcmFtZVNjcmVlblNob3RcIikge1xuICAgIGZyYW1lU2NyZWVuU2hvdCgpO1xuICAgIC8vICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImhpZGVBbm5vdGF0aW9uc1wiKSB7XG4gICAgaGlkZUFubm90YXRpb25zKCk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImZ1bGxXaWR0aFwiKSB7XG4gICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmdWxsSGVpZ2h0XCIpIHtcbiAgICBzZXRGdWxsU2l6ZShcInZlcnRpY2FsXCIpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmdWxsU2l6ZVwiKSB7XG4gICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICBzZXRGdWxsU2l6ZShcImhvcml6b250YWxcIik7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImZvcm1hdElsbG9cIikge1xuICAgIGZvcm1hdElsbG8oKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiaW5zZXJ0U3BhY2luZ1wiKSB7XG4gICAgaW5zZXJ0U3BhY2luZygpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiaW5jcmVhc2VTcGFjaW5nXCIpIHtcbiAgICBpbmNyZWFzZVNwYWNpbmcoKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImRlY3JlYXNlU3BhY2luZ1wiKSB7XG4gICAgZGVjcmVhc2VTcGFjaW5nKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJhdXRvTGF5b3V0XCIpIHtcbiAgICBhdXRvTGF5b3V0KCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJtb3ZlTG9jYWxpemVkRnJhbWVzVG9QYWdlXCIpIHtcbiAgICBtb3ZlTG9jYWxpemVkRnJhbWVzVG9QYWdlKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJkZWxldGVMb2NhbGl6ZWRQYWdlc1wiKSB7XG4gICAgZGVsZXRlTG9jYWxpemVkUGFnZXMoKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcInRleHRUb1NrZWxldG9uXCIpIHtcbiAgICB0ZXh0VG9Ta2VsZXRvbigpO1xufVxuIiwiY29uc3QgYWRkQ2hpbGRUb0ZyYW1lID0gZnVuY3Rpb24gKHNoYXBlLCBmcmFtZSkge1xuICAgIC8vY3JlYXRlIHZhcmlhYmxlc1xuICAgIGNvbnN0IHBhcmVudCA9IHNoYXBlLnBhcmVudDtcbiAgICBjb25zdCBzaGFwZVdpZHRoID0gc2hhcGUud2lkdGg7XG4gICAgY29uc3Qgc2hhcGVIZWlnaHQgPSBzaGFwZS5oZWlnaHQ7XG4gICAgY29uc3Qgc2hhcGVQb3MgPSBzaGFwZS5yZWxhdGl2ZVRyYW5zZm9ybTtcbiAgICBjb25zdCBzaGFwZVJvdGF0aW9uID0gc2hhcGUucm90YXRpb247XG4gICAgLy9hZGQgZnJhbWUgdG8gY2hpbGQncyBwYXJlbnRcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgIC8vYWRkIGNoaWxkIHRvIGZyYW1lXG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQoc2hhcGUpO1xuICAgIC8vIC8vcHV0IGZyYW1lIHdoZXJlIGNoaWxkIHdhcywgcHV0IGNoaWxkIGluIDAsMCBwb3NcbiAgICBmcmFtZS5yZWxhdGl2ZVRyYW5zZm9ybSA9IHNoYXBlUG9zO1xuICAgIHNoYXBlLnJvdGF0aW9uID0gMDtcbiAgICBzaGFwZS54ID0gMDtcbiAgICBzaGFwZS55ID0gMDtcbiAgICAvL3Jlc2l6ZSBmcmFtZSB0byBjaGlsZCdzIHNpemVcbiAgICBmcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQpO1xuICAgIGZyYW1lLnJvdGF0aW9uID0gc2hhcGVSb3RhdGlvbjtcbiAgICBzaGFwZS5jb25zdHJhaW50cyA9IHtcbiAgICAgICAgaG9yaXpvbnRhbDogXCJTQ0FMRVwiLFxuICAgICAgICB2ZXJ0aWNhbDogXCJTQ0FMRVwiLFxuICAgIH07XG59O1xuZXhwb3J0IHsgYWRkQ2hpbGRUb0ZyYW1lIH07XG4iLCJjb25zdCBhdXRvTGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZyYW1lcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBpZiAoZnJhbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdCBhdCBsZWFzdCBvbmUgYXV0byBsYXlvdXQgZnJhbWUuXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBpZiAoZnJhbWUudHlwZSA9PT0gXCJGUkFNRVwiIHx8IGZyYW1lLnR5cGUgPT09IFwiQ09NUE9ORU5UXCIpIHtcbiAgICAgICAgICAgIGlmIChmcmFtZS5sYXlvdXRNb2RlID09PSBcIlZFUlRJQ0FMXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBmcmFtZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5sYXlvdXRHcm93ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyYW1lLnBhcmVudC50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLnBhcmVudC5sYXlvdXRNb2RlICE9PSBcIk5PTkVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYW1lLnBhcmVudC5jb3VudGVyQXhpc1NpemluZ01vZGUgPT09IFwiQVVUT1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUucGFyZW50LmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZS5sYXlvdXRHcm93ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIkNoaWxkcmVuIHNldCB0byBmaWxsIGNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmcmFtZS5sYXlvdXRNb2RlID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgICAgICAgICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJDaGlsZHJlbiBhbGlnbmVkIGNlbnRlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiT25seSBzZWxlY3QgYXV0b2xheW91dCBmcmFtZXMuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgYXV0b0xheW91dCB9O1xuIiwiaW1wb3J0IGlzUGFydE9mSW5zdGFuY2UgZnJvbSBcIi4vaXNQYXJ0T2ZJbnN0YW5jZVwiO1xubGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbmNvbnN0IGNvbXBvbmVudEtleSA9IFwiOGMzMmM4Y2E1ZWY0YmE1OWNhYzYzNzBmZGRhNjlmYTkwNzU4YTAwM1wiO1xuY29uc3Qgc3BhY2VzID0gW1xuICAgIFwiNFwiLFxuICAgIFwiOFwiLFxuICAgIFwiMTJcIixcbiAgICBcIjE2XCIsXG4gICAgXCIyNFwiLFxuICAgIFwiMzJcIixcbiAgICBcIjQ4XCIsXG4gICAgXCI2NFwiLFxuICAgIFwiOTZcIixcbiAgICBcIjEyOFwiLFxuICAgIFwiMTYwXCIsXG4gICAgXCIxOTJcIixcbiAgICBcIjI0MFwiLFxuXTtcbmNvbnN0IGluc2VydFNwYWNpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0aW9uWzBdO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBzZWxlY3RlZC5wYXJlbnQ7XG4gICAgICAgIGlmIChpc1BhcnRPZkluc3RhbmNlKHNlbGVjdGVkKSkge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJZb3UgY2FuJ3QgYWRkIGVsZW1lbnRzIHRvIGEgY29tcG9uZW50IGluc3RhbmNlLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXRJbmRleCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnQuY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQuaWQpLmluZGV4T2Yobm9kZS5pZCk7XG4gICAgICAgIH07XG4gICAgICAgIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoY29tcG9uZW50S2V5KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2luZyA9IHJlc3BvbnNlLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0Q2hpbGQoZ2V0SW5kZXgoc2VsZWN0ZWQpICsgMSwgc3BhY2luZyk7XG4gICAgICAgICAgICBzcGFjaW5nLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW3NwYWNpbmddO1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhjb21wb25lbnRLZXkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGFjaW5nID0gcmVzcG9uc2UuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmluc2VydENoaWxkKDAsIHNwYWNpbmcpO1xuICAgICAgICAgICAgc3BhY2luZy5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtzcGFjaW5nXTtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZmlnbWEudmlld3BvcnQuY2VudGVyO1xuICAgICAgICAgICAgc3BhY2luZy54ID0geDtcbiAgICAgICAgICAgIHNwYWNpbmcueSA9IHk7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiT25seSBzZWxlY3Qgb25lIGxheWVyIGF0IGEgdGltZSwgb3Igbm8gbGF5ZXJzLlwiKTtcbiAgICB9XG59O1xuY29uc3QgY2hhbmdlU3BhY2luZyA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgbGV0IG5ld1NpemU7XG4gICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIklOU1RBTkNFXCIgJiYgc2hhcGUubWFpbkNvbXBvbmVudC5rZXkgPT09IGNvbXBvbmVudEtleSkge1xuICAgICAgICAgICAgbGV0IHRleHRMYWJlbDtcbiAgICAgICAgICAgIGNvbnN0IHRleHRXcmFwcGVyID0gc2hhcGUuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBpZiAodGV4dFdyYXBwZXIudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgdGV4dExhYmVsID0gdGV4dFdyYXBwZXIuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0TGFiZWwuY2hhcmFjdGVycyk7XG4gICAgICAgICAgICBsZXQgY3VyclNpemUgPSB0ZXh0TGFiZWwuY2hhcmFjdGVycztcbiAgICAgICAgICAgIGxldCBjdXJySW5kZXggPSBzcGFjZXMuaW5kZXhPZihjdXJyU2l6ZSk7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImluY3JlYXNlXCIgJiYgY3VyckluZGV4IDwgc3BhY2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBuZXdTaXplID0gc3BhY2VzW2N1cnJJbmRleCArIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRlY3JlYXNlXCIgJiYgY3VyckluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzcGFjZXNbY3VyckluZGV4IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdTaXplID0gY3VyclNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGFwZS5wYWRkaW5nVG9wID0gbmV3U2l6ZSAvIDI7XG4gICAgICAgICAgICBzaGFwZS5wYWRkaW5nUmlnaHQgPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdCb3R0b20gPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdMZWZ0ID0gbmV3U2l6ZSAvIDI7XG4gICAgICAgICAgICBzaGFwZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIHNoYXBlLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgc2hhcGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgICAgIHNoYXBlLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgICAgICAgICBmaWdtYVxuICAgICAgICAgICAgICAgIC5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90byBNb25vXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0ZXh0TGFiZWwuc2V0UmFuZ2VGb250TmFtZSgwLCB0ZXh0TGFiZWwuY2hhcmFjdGVycy5sZW5ndGgsIHtcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiBcIlJvYm90byBNb25vXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIlJlZ3VsYXJcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0ZXh0TGFiZWwuY2hhcmFjdGVycyA9IG5ld1NpemU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG5jb25zdCBpbmNyZWFzZVNwYWNpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2hhbmdlU3BhY2luZyhcImluY3JlYXNlXCIpO1xufTtcbmNvbnN0IGRlY3JlYXNlU3BhY2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjaGFuZ2VTcGFjaW5nKFwiZGVjcmVhc2VcIik7XG59O1xuZXhwb3J0IHsgaW5jcmVhc2VTcGFjaW5nLCBkZWNyZWFzZVNwYWNpbmcsIGluc2VydFNwYWNpbmcgfTtcbiIsIi8vY3JlYXRlIGJhc2ljIGNsb25lIGZ1bmN0aW9uXG5mdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbn1cbmV4cG9ydCB7IGNsb25lIH07XG4iLCJmdW5jdGlvbiBwYXNjYWxDYXNlKGlucHV0KSB7XG4gICAgcmV0dXJuIChpbnB1dC5tYXRjaCgvW2EtekEtWjAtOV0rL2cpIHx8IFtdKVxuICAgICAgICAubWFwKCh3KSA9PiBgJHt3LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7dy5zbGljZSgxKX1gKVxuICAgICAgICAuam9pbihcIlwiKTtcbn1cbmNvbnN0IGFkZFNsaWNlVG9GcmFtZSA9IGZ1bmN0aW9uIChmcmFtZSwgcGxhdGZvcm0pIHtcbiAgICAvL3JlbW92ZSBjdXJyZW50IHNsaWNlIGlmIGl0IGV4aXN0c1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZnJhbWUuY2hpbGRyZW47XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiU0xJQ0VcIikge1xuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2NyZWF0ZSBuZXcgc2xpY2UgdGhhdCBpcyB0aGUgc2FtZSBzaXplIGFzIGZyYW1lXG4gICAgY29uc3Qgc2xpY2UgPSBmaWdtYS5jcmVhdGVTbGljZSgpO1xuICAgIGNvbnN0IGZyYW1lV2lkdGggPSBmcmFtZS53aWR0aDtcbiAgICBjb25zdCBmcmFtZUhlaWdodCA9IGZyYW1lLmhlaWdodDtcbiAgICBjb25zdCBpY29uTmFtZSA9IGZyYW1lLm5hbWU7XG4gICAgY29uc3QgY29tcG9uZW50TmFtZSA9IGZyYW1lLnBhcmVudC5uYW1lO1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKHNsaWNlKTtcbiAgICBzbGljZS54ID0gMDtcbiAgICBzbGljZS55ID0gMDtcbiAgICBzbGljZS5yZXNpemUoZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQpO1xuICAgIHNsaWNlLm5hbWUgPSBmb3JtYXROYW1lKGNvbXBvbmVudE5hbWUsIGljb25OYW1lLCBwbGF0Zm9ybSk7XG4gICAgaWYgKHBsYXRmb3JtID09PSBcImlvc1wiKSB7XG4gICAgICAgIHNsaWNlLmV4cG9ydFNldHRpbmdzID0gW3sgZm9ybWF0OiBcIlBERlwiIH1dO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2xpY2UuZXhwb3J0U2V0dGluZ3MgPSBbeyBmb3JtYXQ6IFwiU1ZHXCIgfV07XG4gICAgfVxufTtcbmZ1bmN0aW9uIGZvcm1hdE5hbWUoaW5wdXQxLCBpbnB1dDIsIG91dHB1dCkge1xuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKGlucHV0MlxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdChcIixcIilcbiAgICAgICAgLm1hcCgoc3RyKSA9PiBzdHIudHJpbSgpLnJlcGxhY2UoL1tcXHMvXS9nLCBcIl9cIikuc3BsaXQoXCI9XCIpKSk7XG4gICAgY29uc3Qgc2l6ZSA9IHByb3BzLlNpemU7XG4gICAgZGVsZXRlIHByb3BzLlNpemU7XG4gICAgY29uc3Qgc2FuaXRpc2VkSW5wdXQxID0gaW5wdXQxXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXFxzL10vZywgXCJfXCIpXG4gICAgICAgIC5yZXBsYWNlKC9fXysvLCBcIl9cIik7XG4gICAgY29uc3Qgc2l6ZVVuaXQgPSBvdXRwdXQgPT09IFwiYW5kcm9pZFwiID8gXCJkcFwiIDogb3V0cHV0ID09PSBcImlvc1wiID8gXCJwdFwiIDogXCJweFwiO1xuICAgIGNvbnN0IHJlc3QgPSBPYmplY3QudmFsdWVzKHByb3BzKVxuICAgICAgICAubWFwKChzKSA9PiBzLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgY29uc3QgdmFsdWVzID0gW3Nhbml0aXNlZElucHV0MSwgLi4ucmVzdCwgYCR7c2l6ZX0ke3NpemVVbml0fWBdLmpvaW4oXCJfXCIpO1xuICAgIHJldHVybiBvdXRwdXQgPT09IFwiaW9zXCIgPyBwYXNjYWxDYXNlKHZhbHVlcykgOiB2YWx1ZXM7XG59XG5jb25zdCBjcmVhdGVTbGljZXMgPSBmdW5jdGlvbiAocGxhdGZvcm0pIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBvYmplY3RcIik7XG4gICAgfVxuICAgIHNlbGVjdGlvbi5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBpZiAoZnJhbWUudHlwZSA9PT0gXCJDT01QT05FTlRfU0VUXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRzID0gZnJhbWUuY2hpbGRyZW47XG4gICAgICAgICAgICB2YXJpYW50cy5mb3JFYWNoKCh2YXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkU2xpY2VUb0ZyYW1lKHZhcmlhbnQsIHBsYXRmb3JtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJQbGVhc2Ugb25seSBzZWxlY3QgQ29tcG9uZW50IFNldHMgKHRoZSBwdXJwbGUgZG90dGVkIGJveCBhcm91bmQgdmFyaWFudHMpXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgY3JlYXRlU2xpY2VzIH07XG4iLCJpbXBvcnQgeyBhZGRDaGlsZFRvRnJhbWUgfSBmcm9tIFwiLi9hZGRDaGlsZFRvRnJhbWVcIjtcbmltcG9ydCB7IGNsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmNvbnN0IGtleXMgPSBbXG4gICAgXCI3ODE1NmY4YTcyNzQwYmQwZDlhYzY5NGI5Zjc2Y2NjMDA2MmQzNzgxXCIsXG5dO1xuY29uc3QgZm9ybWF0SWxsbyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBhc3luYyBmdW5jdGlvbiBtYXBTdHlsZXMoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0ga2V5cy5tYXAoYXN5bmMgKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKHN0eWxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlcyA9IGF3YWl0IG1hcFN0eWxlcygpO1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiKSB7XG4gICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0udHlwZSA9PT0gXCJJTUFHRVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHNoYXBlLnJvdGF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICBmaWdtYS5jbG9zZVBsdWdpbihcbiAgICAgICAgICAgICAgICAvLyAgICAgXCJTaGFwZXMgbXVzdCBub3QgYmUgcm90YXRlZCBmb3IgdGhpcyBmdW5jdGlvbiB0byB3b3JrLiBTb3JyeSFcIlxuICAgICAgICAgICAgICAgIC8vICAgKTtcbiAgICAgICAgICAgICAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHNoYXBlLmZpbGxzWzBdLnNjYWxlTW9kZSAhPSBcIkNST1BcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxscyA9IGNsb25lKHNoYXBlLmZpbGxzKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsbHNbMF0uc2NhbGVNb2RlID0gXCJDUk9QXCI7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLmZpbGxzID0gZmlsbHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vbWFrZSBuZXcgZnJhbWVcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgZnJhbWUgZmlsbHNcbiAgICAgICAgICAgICAgICBsZXQgZnJhbWVGaWxscyA9IGNsb25lKGZyYW1lLmZpbGxzKTtcbiAgICAgICAgICAgICAgICBmcmFtZUZpbGxzID0gW107XG4gICAgICAgICAgICAgICAgZnJhbWUuZmlsbHMgPSBmcmFtZUZpbGxzO1xuICAgICAgICAgICAgICAgIGFkZENoaWxkVG9GcmFtZShzaGFwZSwgZnJhbWUpO1xuICAgICAgICAgICAgICAgIC8vZHVwbGljYXRlIGNoaWxkXG4gICAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlID0gc2hhcGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChkdXBsaWNhdGUpO1xuICAgICAgICAgICAgICAgIC8vcmVuYW1lIGxheWVyIGFuZCB0aW50XG4gICAgICAgICAgICAgICAgc2hhcGUubmFtZSA9IFwiSW1hZ2VcIjtcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGUubmFtZSA9IFwiVGludFwiO1xuICAgICAgICAgICAgICAgIC8vQ2hhbmdlIHRpbnQgY29sb3IgdG8gYmxhY2tcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGUuZmlsbFN0eWxlSWQgPSBzdHlsZXNbMF0uaWQ7XG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgTWFzayB3aXRoIHR3byBsYXllcnNcbiAgICAgICAgICAgICAgICBzaGFwZS5pc01hc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk9ubHkgc2VsZWN0IG5vZGVzIHdpdGggc2luZ2xlIGltYWdlIGZpbGxzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiT25seSBzZWxlY3Qgbm9kZXMgd2l0aCBzaW5nbGUgaW1hZ2UgZmlsbHNcIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHsgZm9ybWF0SWxsbyB9O1xuIiwiaW1wb3J0IHsgYWRkQ2hpbGRUb0ZyYW1lIH0gZnJvbSBcIi4vYWRkQ2hpbGRUb0ZyYW1lXCI7XG5pbXBvcnQgeyBjbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5jb25zdCBrZXlzID0gW1xuICAgIFwiNDFhYjk1YmUwOTk2NTZjMjQxZWM5YWRjN2NmM2EwYzM3Y2NkZTk5MlwiLFxuICAgIFwiMThiMGNhNGQzZTczNjlkMGRmNmU3MjBiZGZlODlhZTAzZmQ0OGU4MVwiLFxuICAgIFwiZDMyNjAzYzQ1ZDQ0MjNiMmQ5ZWE0N2JkZjkzNjMzZmQ5MDczNDBlM1wiLFxuXTtcbmNvbnN0IGZyYW1lU2NyZWVuU2hvdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGFzeW5jIGZ1bmN0aW9uIG1hcFN0eWxlcygpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBrZXlzLm1hcChhc3luYyAoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoc3R5bGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVzID0gYXdhaXQgbWFwU3R5bGVzKCk7XG4gICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiKSB7XG4gICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0udHlwZSA9PT0gXCJJTUFHRVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoYXBlLmZpbGxzWzBdLnNjYWxlTW9kZSAhPSBcIkNST1BcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxscyA9IGNsb25lKHNoYXBlLmZpbGxzKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsbHNbMF0uc2NhbGVNb2RlID0gXCJDUk9QXCI7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLmZpbGxzID0gZmlsbHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vbWFrZSBuZXcgZnJhbWVcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgYWRkQ2hpbGRUb0ZyYW1lKHNoYXBlLCBmcmFtZSk7XG4gICAgICAgICAgICAgICAgZnJhbWUuY29ybmVyUmFkaXVzID0gNDtcbiAgICAgICAgICAgICAgICBmcmFtZS5zdHJva2VXZWlnaHQgPSAxO1xuICAgICAgICAgICAgICAgIGZyYW1lLnN0cm9rZVN0eWxlSWQgPSBzdHlsZXNbMV0uaWQ7XG4gICAgICAgICAgICAgICAgZnJhbWUuZmlsbFN0eWxlSWQgPSBzdHlsZXNbMF0uaWQ7XG4gICAgICAgICAgICAgICAgZnJhbWUuZWZmZWN0U3R5bGVJZCA9IHN0eWxlc1syXS5pZDtcbiAgICAgICAgICAgICAgICBmcmFtZS5uYW1lID0gc2hhcGUubmFtZTtcbiAgICAgICAgICAgICAgICBzaGFwZS5uYW1lID0gXCJTY3JlZW5zaG90XCI7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gY2xvbmUoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3Rpb25bMF0gPSBmcmFtZTtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgZnJhbWUuY29uc3RyYWluUHJvcG9ydGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJNYWtlIHN1cmUgeW91ciByZWN0YW5nbGUgaGFzIG9ubHkgYW4gaW1hZ2UgZmlsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGFwZS50eXBlID09PSBcIkZSQU1FXCIgfHwgc2hhcGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgICAgICAgICBzaGFwZS5jb3JuZXJSYWRpdXMgPSA0O1xuICAgICAgICAgICAgc2hhcGUuc3Ryb2tlV2VpZ2h0ID0gMTtcbiAgICAgICAgICAgIHNoYXBlLnN0cm9rZVN0eWxlSWQgPSBzdHlsZXNbMV0uaWQ7XG4gICAgICAgICAgICBzaGFwZS5maWxsU3R5bGVJZCA9IHN0eWxlc1swXS5pZDtcbiAgICAgICAgICAgIHNoYXBlLmVmZmVjdFN0eWxlSWQgPSBzdHlsZXNbMl0uaWQ7XG4gICAgICAgICAgICBzaGFwZS5jbGlwc0NvbnRlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3Qgb25seSBmcmFtZXMgb3IgcmVjdGFuZ2xlcyB3aXRoIGltYWdlIGZpbGxzXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuZXhwb3J0IHsgZnJhbWVTY3JlZW5TaG90IH07XG4iLCJjb25zdCBoaWRlQW5ub3RhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xuICAgIGNvbnN0IG5vZGVzID0gbm9kZS5maW5kQWxsKChub2RlKSA9PiBub2RlLm5hbWUgPT09IFwiJEFubm90YXRpb25cIik7XG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS52aXNpYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgaGlkZUFubm90YXRpb25zIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1BhcnRPZkluc3RhbmNlKG5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICBpZiAocGFyZW50LnR5cGUgPT09IFwiSU5TVEFOQ0VcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFyZW50LnR5cGUgPT09IFwiUEFHRVwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBpc1BhcnRPZkluc3RhbmNlKHBhcmVudCk7XG4gICAgfVxufVxuIiwiY29uc3QgbGFuZ0NvZGVzID0gW1xuICAgIFwiYXJcIixcbiAgICBcImNzXCIsXG4gICAgXCJkYVwiLFxuICAgIFwiZGVcIixcbiAgICBcImVzXCIsXG4gICAgXCJmaVwiLFxuICAgIFwiZnJcIixcbiAgICBcIml0XCIsXG4gICAgXCJqYVwiLFxuICAgIFwia29cIixcbiAgICBcIm5iXCIsXG4gICAgXCJubFwiLFxuICAgIFwicGxcIixcbiAgICBcInB0X0JSXCIsXG4gICAgXCJydVwiLFxuICAgIFwic3ZcIixcbiAgICBcInRyXCIsXG4gICAgXCJ6aF9DTlwiLFxuICAgIFwiemhfVFdcIixcbl07XG5jb25zdCBwcmVwZW5kTGFuZyA9IChmb3JtYXQpID0+IHtcbiAgICAvL2lmIHRoZXJlIGlzIGJyYWNrZXRlZCB0ZXh0IGF0IHRoZSBiZWdpbm5pbmcgb2YgcGFnZSBuYW1lXG4gICAgLy9hZGQgdGhhdCBicmFja2V0ZWQgdGV4dCB0byB0aGUgYmVnaW5uaW5nIG9mIGV2ZXJ5IGZyYW1lIG5hbWVcbiAgICAvL3VubGVzcyB0aGUgZnJhbWUgYWxyZWFkeSBzdGFydHMgd2l0aCBpdCwgdGhlbiBza2lwXG4gICAgY29uc3QgcGFnZXMgPSBmaWdtYS5yb290LmNoaWxkcmVuO1xuICAgIHBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICAgICAgbGFuZ0NvZGVzLmZvckVhY2goKGNvZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLm5hbWUuc3RhcnRzV2l0aChgWyR7Y29kZX1dYCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFtZXMgPSBwYWdlLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5leHBvcnRTZXR0aW5ncyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJTQ0FMRVwiLCB2YWx1ZTogMiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUubmFtZS5zdGFydHNXaXRoKGAke2NvZGV9IC8gYClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKGZyYW1lLm5hbWUgPSBmcmFtZS5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoZnJhbWUubmFtZSA9IGNvZGUgKyBcIiAvIFwiICsgZnJhbWUubmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuY29uc3QgZGVsZXRlTG9jYWxpemVkUGFnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcGFnZXMgPSBmaWdtYS5yb290LmNoaWxkcmVuO1xuICAgIHBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICAgICAgbGV0IHJlbW92ZSA9IGZhbHNlO1xuICAgICAgICBsYW5nQ29kZXMuZm9yRWFjaCgoY29kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhZ2UubmFtZS5zdGFydHNXaXRoKGBbJHtjb2RlfV1gKSAmJiBwYWdlcy5pbmRleE9mKHBhZ2UpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UgPT09IGZpZ21hLmN1cnJlbnRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiQ2FuJ3QgZGVsZXRlIGN1cnJlbnQgcGFnZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmUgPyBwYWdlLnJlbW92ZSgpIDogZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9KTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbmNvbnN0IG1vdmVMb2NhbGl6ZWRGcmFtZXNUb1BhZ2UgPSAoKSA9PiB7XG4gICAgcHJlcGVuZExhbmcoXCJwbmdcIik7XG4gICAgY29uc3QgcGFnZXMgPSBmaWdtYS5yb290LmNoaWxkcmVuO1xuICAgIC8vcHV0IGFsbCBub2RlcyBpbnRvIGFuIGFycmF5IG9mIHBhZ2VzLCBlYWNoIGFuIGFycmF5IGl0c2VsZiBjb250YWluaW5nIHRoZSBncmFwaGljcyBmcm9tIHRoYXQgcGFnZVxuICAgIGxldCBhbGxOb2RlcyA9IFtdO1xuICAgIHBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICAgICAgbGFuZ0NvZGVzLmZvckVhY2goKGNvZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLm5hbWUuc3RhcnRzV2l0aChgWyR7Y29kZX1dYCkgJiYgcGFnZXMuaW5kZXhPZihwYWdlKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBmcmFtZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBwYWdlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lcyA9IFsuLi5mcmFtZXMsIGNoaWxkXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhbGxOb2RlcyA9IFsuLi5hbGxOb2RlcywgZnJhbWVzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy9yZWNvbmZpZ3VyZSB0aGUgYXJyYXlzIHRvIGJlIG9yZ2FuaXplZCBieSBncmFwaGljLCByYXRoZXIgdGhhbiBieSBwYWdlLlxuICAgIGNvbnN0IHNsaWNlZCA9IGFsbE5vZGVzLnJlZHVjZSgocmVzdWx0cywgY29sbGVjdGlvbikgPT4ge1xuICAgICAgICBjb2xsZWN0aW9uLmZvckVhY2goKGcsIGkpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdHNbaV0gPSByZXN1bHRzW2ldIHx8IFtdO1xuICAgICAgICAgICAgcmVzdWx0c1tpXS5wdXNoKGcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG5ld1BhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XG4gICAgbmV3UGFnZS5uYW1lID0gXCJMb2NhbGl6ZWQgR3JhcGhpY3NcIjtcbiAgICBjb25zdCBtYWluTGF5b3V0RnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIG1haW5MYXlvdXRGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIG1haW5MYXlvdXRGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBtYWluTGF5b3V0RnJhbWUuaXRlbVNwYWNpbmcgPSA5NjtcbiAgICBtYWluTGF5b3V0RnJhbWUuZmlsbHMgPSBbXTtcbiAgICBtYWluTGF5b3V0RnJhbWUubmFtZSA9IFwiR3JhcGhpY3NcIjtcbiAgICBzbGljZWQuZm9yRWFjaCgoYXJyKSA9PiB7XG4gICAgICAgIGNvbnN0IGF1dG9MYXlvdXRGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGF1dG9MYXlvdXRGcmFtZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIGF1dG9MYXlvdXRGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgYXV0b0xheW91dEZyYW1lLml0ZW1TcGFjaW5nID0gNjQ7XG4gICAgICAgIGF1dG9MYXlvdXRGcmFtZS5maWxscyA9IFtdO1xuICAgICAgICBjb25zdCBjaGlsZE5hbWUgPSBhcnJbMF0ubmFtZTtcbiAgICAgICAgYXV0b0xheW91dEZyYW1lLm5hbWUgPSBjaGlsZE5hbWUuc3Vic3RyKGNoaWxkTmFtZS5pbmRleE9mKFwiL1wiKSArIDEpLnRyaW0oKTtcbiAgICAgICAgbmV3UGFnZS5hcHBlbmRDaGlsZChhdXRvTGF5b3V0RnJhbWUpO1xuICAgICAgICBhcnIubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgICBhdXRvTGF5b3V0RnJhbWUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBtYWluTGF5b3V0RnJhbWUuYXBwZW5kQ2hpbGQoYXV0b0xheW91dEZyYW1lKTtcbiAgICB9KTtcbiAgICBuZXdQYWdlLmFwcGVuZENoaWxkKG1haW5MYXlvdXRGcmFtZSk7XG4gICAgZmlnbWEuY3VycmVudFBhZ2UgPSBuZXdQYWdlO1xuICAgIGRlbGV0ZUxvY2FsaXplZFBhZ2VzKCk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG5leHBvcnQgeyBwcmVwZW5kTGFuZywgZGVsZXRlTG9jYWxpemVkUGFnZXMsIG1vdmVMb2NhbGl6ZWRGcmFtZXNUb1BhZ2UgfTtcbiIsImNvbnN0IHNldEZ1bGxTaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbikge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIkZSQU1FXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiQ09NUE9ORU5UXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJWRUNUT1JcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJTVEFSXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiTElORVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIkVMTElQU0VcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJQT0xZR09OXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiVEVYVFwiKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBzaGFwZS5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAoKHBhcmVudCAmJiBwYXJlbnQudHlwZSA9PT0gXCJGUkFNRVwiKSB8fCBwYXJlbnQudHlwZSA9PT0gXCJDT01QT05FTlRcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gcGFyZW50LndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEhlaWdodCA9IHBhcmVudC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVIZWlnaHQgPSBzaGFwZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVXaWR0aCA9IHNoYXBlLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gc2hhcGVXaWR0aCAvIHNoYXBlSGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vc2V0IHJvdGF0aW9uIHRvIDBcbiAgICAgICAgICAgICAgICBzaGFwZS5yb3RhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgLy9yZXNpemUgdGhlIHNoYXBlXG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tYWludGFpbnMgdGhlIGFzcGVjdCByYXRpbyB3aGVuIHRoZSBjb25zdHJhaW4gcHJvcG9ydGlvbnMgc2V0dGluZyBpcyBhcHBsaWVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFwZS5jb25zdHJhaW5Qcm9wb3J0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUucmVzaXplKHBhcmVudFdpZHRoLCBwYXJlbnRXaWR0aCAvIGFzcGVjdFJhdGlvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShwYXJlbnRXaWR0aCwgc2hhcGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpbWVuc2lvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWFpbnRhaW5zIHRoZSBhc3BlY3QgcmF0aW8gd2hlbiB0aGUgY29uc3RyYWluIHByb3BvcnRpb25zIHNldHRpbmcgaXMgYXBwbGllZFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcGUuY29uc3RyYWluUHJvcG9ydGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShwYXJlbnRIZWlnaHQgKiBhc3BlY3RSYXRpbywgcGFyZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShzaGFwZVdpZHRoLCBwYXJlbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBzaGFwZSBwb3NpdGlvbiB0byBvcmlnaW5cbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS54ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGltZW5zaW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUueSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vZmluZCBjdXJyZW50IGNvbnN0cmFpbnRzXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZlcnRpY2FsQ29udHJhaW50ID0gc2hhcGUuY29uc3RyYWludHMudmVydGljYWw7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEhvcml6b250YWxDb250cmFpbnQgPSBzaGFwZS5jb25zdHJhaW50cy5ob3Jpem9udGFsO1xuICAgICAgICAgICAgICAgIC8vc2V0IGNvbnN0cmFpbnRzXG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBjdXJyZW50VmVydGljYWxDb250cmFpbnQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpbWVuc2lvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogY3VycmVudEhvcml6b250YWxDb250cmFpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJTVFJFVENIXCIsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3Rpb24gbXVzdCBiZSBuZXN0ZWQgaW4gYSBmcmFtZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlBsZWFzZSBzZWxlY3Qgc29tZXRoaW5nIHRoYXQgY2FuIGJlIHJlc2l6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IHNldEZ1bGxTaXplIH07XG4iLCJpbXBvcnQgeyBjbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5pbXBvcnQgaXNQYXJ0T2ZJbnN0YW5jZSBmcm9tIFwiLi9pc1BhcnRPZkluc3RhbmNlXCI7XG5mdW5jdGlvbiB0ZXh0VG9Ta2VsZXRvbigpIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGxldCBuZXdTZWxlY3Rpb24gPSBbXTtcbiAgICBzZWxlY3Rpb24uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBpZiAoaXNQYXJ0T2ZJbnN0YW5jZShub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnR5cGUgIT09IFwiVEVYVFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IG5vZGUud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBub2RlLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cmFpbnRzID0gbm9kZS5jb25zdHJhaW50cztcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbm9kZS5yZWxhdGl2ZVRyYW5zZm9ybTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbm9kZS5maWxscztcbiAgICAgICAgICAgIGNvbnN0IGlkID0gbm9kZS5pZDtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzID0gbm9kZS5wYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICBsZXQgc2libGluZ0lkcyA9IFtdO1xuICAgICAgICAgICAgc2libGluZ3MubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2libGluZ0lkcy5wdXNoKG5vZGUuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHNpYmxpbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgICAgICBsZXQgZm9udFNpemUgPSAxMjtcbiAgICAgICAgICAgIGxldCB2aXN1YWxTaXplO1xuICAgICAgICAgICAgaWYgKG5vZGUuZm9udFNpemUgIT09IGZpZ21hLm1peGVkKSB7XG4gICAgICAgICAgICAgICAgdmlzdWFsU2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJPbmx5IHNlbGVjdCB0ZXh0IG5vZGVzIHdpdGggb25lIGZvbnQgc2l6ZSBhcHBsaWVkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gY3JlYXRlU2tlbGV0b25TaGFwZSh3aWR0aCwgaGVpZ2h0LCB2aXN1YWxTaXplLCBjb2xvcik7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRDaGlsZChpbmRleCwgZnJhbWUpO1xuICAgICAgICAgICAgZnJhbWUucmVsYXRpdmVUcmFuc2Zvcm0gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIGZyYW1lLmNvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XG4gICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gWy4uLm5ld1NlbGVjdGlvbiwgZnJhbWVdO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbjtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNrZWxldG9uU2hhcGUod2lkdGgsIGhlaWdodCwgdmlzdWFsU2l6ZSwgY29sb3IpIHtcbiAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubmFtZSA9IFwiU2tlbGV0b24gVGV4dFwiO1xuICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgZnJhbWUucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IHJlY3RhbmdsZSA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKHJlY3RhbmdsZSk7XG4gICAgbGV0IGZpbGxzID0gY2xvbmUocmVjdGFuZ2xlLmZpbGxzKTtcbiAgICAvLyAgIGZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDAuMSB9XTtcbiAgICByZWN0YW5nbGUuZmlsbHMgPSBjb2xvcjtcbiAgICByZWN0YW5nbGUub3BhY2l0eSA9IDAuMTtcbiAgICByZWN0YW5nbGUuY29ybmVyUmFkaXVzID0gMjtcbiAgICByZWN0YW5nbGUubmFtZSA9IFwiU2hhcGVcIjtcbiAgICBjb25zdCByZWN0YW5nbGVIZWlnaHQgPSBNYXRoLmNlaWwodmlzdWFsU2l6ZSAqIDAuODUpO1xuICAgIHJlY3RhbmdsZS5yZXNpemUod2lkdGgsIHJlY3RhbmdsZUhlaWdodCk7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgIGZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICByZXR1cm4gZnJhbWU7XG59XG5leHBvcnQgeyB0ZXh0VG9Ta2VsZXRvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb2RlLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==