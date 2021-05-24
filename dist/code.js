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
            parent.appendChild(frame);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvZnVuY3Rpb25zL2FkZENoaWxkVG9GcmFtZS50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvZnVuY3Rpb25zL2F1dG9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy9jaGFuZ2VTcGFjaW5nLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvY2xvbmUudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVTbGljZXMudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy9mb3JtYXRJbGxvLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvZnJhbWVTY3JlZW5zaG90LnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvaGlkZUFubm90YXRpb25zLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvaXNQYXJ0T2ZJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvLi9zcmMvZnVuY3Rpb25zL3ByZXBlbmRMYW5nLnRzIiwid2VicGFjazovL2RvaXN0LWZpZ21hLXV0aWxpdGllcy8uL3NyYy9mdW5jdGlvbnMvc2V0RnVsbFNpemUudHMiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzLy4vc3JjL2Z1bmN0aW9ucy90ZXh0VG9Ta2VsZXRvbi50cyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9pc3QtZmlnbWEtdXRpbGl0aWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb2lzdC1maWdtYS11dGlsaXRpZXMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ0Y7QUFDVTtBQUNBO0FBQ047QUFDSjtBQUNRO0FBQ2lDO0FBQ1c7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QixZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLDJFQUFlO0FBQzNCO0FBQ0E7QUFDQSxZQUFZLGlFQUFVO0FBQ3RCO0FBQ0E7QUFDQSxZQUFZLDJFQUFlO0FBQzNCO0FBQ0E7QUFDQSxZQUFZLHFFQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLHFFQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLHFFQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGlGQUF5QjtBQUNyQztBQUNBO0FBQ0EsWUFBWSw0RUFBb0I7QUFDaEM7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyRUFB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bSBcIi4vZnVuY3Rpb25zL3NldEZ1bGxTaXplXCI7XG5pbXBvcnQgeyBmb3JtYXRJbGxvIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2Zvcm1hdElsbG9cIjtcbmltcG9ydCB7IGZyYW1lU2NyZWVuU2hvdCB9IGZyb20gXCIuL2Z1bmN0aW9ucy9mcmFtZVNjcmVlbnNob3RcIjtcbmltcG9ydCB7IGhpZGVBbm5vdGF0aW9ucyB9IGZyb20gXCIuL2Z1bmN0aW9ucy9oaWRlQW5ub3RhdGlvbnNcIjtcbmltcG9ydCB7IGNyZWF0ZVNsaWNlcyB9IGZyb20gXCIuL2Z1bmN0aW9ucy9jcmVhdGVTbGljZXNcIjtcbmltcG9ydCB7IGF1dG9MYXlvdXQgfSBmcm9tIFwiLi9mdW5jdGlvbnMvYXV0b2xheW91dFwiO1xuaW1wb3J0IHsgdGV4dFRvU2tlbGV0b24gfSBmcm9tIFwiLi9mdW5jdGlvbnMvdGV4dFRvU2tlbGV0b25cIjtcbmltcG9ydCB7IGluY3JlYXNlU3BhY2luZywgZGVjcmVhc2VTcGFjaW5nLCBpbnNlcnRTcGFjaW5nLCB9IGZyb20gXCIuL2Z1bmN0aW9ucy9jaGFuZ2VTcGFjaW5nXCI7XG5pbXBvcnQgeyBwcmVwZW5kTGFuZywgZGVsZXRlTG9jYWxpemVkUGFnZXMsIG1vdmVMb2NhbGl6ZWRGcmFtZXNUb1BhZ2UsIH0gZnJvbSBcIi4vZnVuY3Rpb25zL3ByZXBlbmRMYW5nXCI7XG4vL3NldHVwIFVJXG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJzaG93VUlcIikge1xuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICBoZWlnaHQ6IDMxMCxcbiAgICB9KTtcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gXCJmdWxsV2lkdGhcIikge1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZnVsbEhlaWdodFwiKSB7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcInZlcnRpY2FsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZnVsbFNpemVcIikge1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImZyYW1lU2NyZWVuc2hvdFwiKSB7XG4gICAgICAgICAgICBmcmFtZVNjcmVlblNob3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImZvcm1hdElsbG9cIikge1xuICAgICAgICAgICAgZm9ybWF0SWxsbygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiaGlkZUFubm90YXRpb25zXCIpIHtcbiAgICAgICAgICAgIGhpZGVBbm5vdGF0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiaW9zU2xpY2VzXCIpIHtcbiAgICAgICAgICAgIGNyZWF0ZVNsaWNlcyhcImlvc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImFuZHJvaWRTbGljZXNcIikge1xuICAgICAgICAgICAgY3JlYXRlU2xpY2VzKFwiYW5kcm9pZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcIndlYlNsaWNlc1wiKSB7XG4gICAgICAgICAgICBjcmVhdGVTbGljZXMoXCJ3ZWJcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJtb3ZlTG9jYWxpemVkRnJhbWVzVG9QYWdlXCIpIHtcbiAgICAgICAgICAgIG1vdmVMb2NhbGl6ZWRGcmFtZXNUb1BhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcImRlbGV0ZUxvY2FsaXplZFBhZ2VzXCIpIHtcbiAgICAgICAgICAgIGRlbGV0ZUxvY2FsaXplZFBhZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJsYW5nSnBnXCIpIHtcbiAgICAgICAgICAgIHByZXBlbmRMYW5nKFwianBnXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwibGFuZ1BuZ1wiKSB7XG4gICAgICAgICAgICBwcmVwZW5kTGFuZyhcInBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlID09PSBcInRleHRUb1NrZWxldG9uXCIpIHtcbiAgICAgICAgICAgIHRleHRUb1NrZWxldG9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8gc2V0IHVwIG1lbnUgY29tbWFuZHNcbmlmIChmaWdtYS5jb21tYW5kID09PSBcImZyYW1lU2NyZWVuU2hvdFwiKSB7XG4gICAgZnJhbWVTY3JlZW5TaG90KCk7XG4gICAgLy8gICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiaGlkZUFubm90YXRpb25zXCIpIHtcbiAgICBoaWRlQW5ub3RhdGlvbnMoKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbFdpZHRoXCIpIHtcbiAgICBzZXRGdWxsU2l6ZShcImhvcml6b250YWxcIik7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImZ1bGxIZWlnaHRcIikge1xuICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImZ1bGxTaXplXCIpIHtcbiAgICBzZXRGdWxsU2l6ZShcInZlcnRpY2FsXCIpO1xuICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZm9ybWF0SWxsb1wiKSB7XG4gICAgZm9ybWF0SWxsbygpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJpbnNlcnRTcGFjaW5nXCIpIHtcbiAgICBpbnNlcnRTcGFjaW5nKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJpbmNyZWFzZVNwYWNpbmdcIikge1xuICAgIGluY3JlYXNlU3BhY2luZygpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZGVjcmVhc2VTcGFjaW5nXCIpIHtcbiAgICBkZWNyZWFzZVNwYWNpbmcoKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImF1dG9MYXlvdXRcIikge1xuICAgIGF1dG9MYXlvdXQoKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcIm1vdmVMb2NhbGl6ZWRGcmFtZXNUb1BhZ2VcIikge1xuICAgIG1vdmVMb2NhbGl6ZWRGcmFtZXNUb1BhZ2UoKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImRlbGV0ZUxvY2FsaXplZFBhZ2VzXCIpIHtcbiAgICBkZWxldGVMb2NhbGl6ZWRQYWdlcygpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwidGV4dFRvU2tlbGV0b25cIikge1xuICAgIHRleHRUb1NrZWxldG9uKCk7XG59XG4iLCJjb25zdCBhZGRDaGlsZFRvRnJhbWUgPSBmdW5jdGlvbiAoc2hhcGUsIGZyYW1lKSB7XG4gICAgLy9jcmVhdGUgdmFyaWFibGVzXG4gICAgY29uc3QgcGFyZW50ID0gc2hhcGUucGFyZW50O1xuICAgIGNvbnN0IHNoYXBlV2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICBjb25zdCBzaGFwZUhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICBjb25zdCBzaGFwZVBvcyA9IHNoYXBlLnJlbGF0aXZlVHJhbnNmb3JtO1xuICAgIGNvbnN0IHNoYXBlUm90YXRpb24gPSBzaGFwZS5yb3RhdGlvbjtcbiAgICAvL2FkZCBmcmFtZSB0byBjaGlsZCdzIHBhcmVudFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgLy9hZGQgY2hpbGQgdG8gZnJhbWVcbiAgICBmcmFtZS5hcHBlbmRDaGlsZChzaGFwZSk7XG4gICAgLy8gLy9wdXQgZnJhbWUgd2hlcmUgY2hpbGQgd2FzLCBwdXQgY2hpbGQgaW4gMCwwIHBvc1xuICAgIGZyYW1lLnJlbGF0aXZlVHJhbnNmb3JtID0gc2hhcGVQb3M7XG4gICAgc2hhcGUucm90YXRpb24gPSAwO1xuICAgIHNoYXBlLnggPSAwO1xuICAgIHNoYXBlLnkgPSAwO1xuICAgIC8vcmVzaXplIGZyYW1lIHRvIGNoaWxkJ3Mgc2l6ZVxuICAgIGZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyhzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCk7XG4gICAgZnJhbWUucm90YXRpb24gPSBzaGFwZVJvdGF0aW9uO1xuICAgIHNoYXBlLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICBob3Jpem9udGFsOiBcIlNDQUxFXCIsXG4gICAgICAgIHZlcnRpY2FsOiBcIlNDQUxFXCIsXG4gICAgfTtcbn07XG5leHBvcnQgeyBhZGRDaGlsZFRvRnJhbWUgfTtcbiIsImNvbnN0IGF1dG9MYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZnJhbWVzID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGlmIChmcmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBhdXRvIGxheW91dCBmcmFtZS5cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgIGlmIChmcmFtZS50eXBlID09PSBcIkZSQU1FXCIgfHwgZnJhbWUudHlwZSA9PT0gXCJDT01QT05FTlRcIikge1xuICAgICAgICAgICAgaWYgKGZyYW1lLmxheW91dE1vZGUgPT09IFwiVkVSVElDQUxcIikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGZyYW1lLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dEdyb3cgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWUucGFyZW50LnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUucGFyZW50LmxheW91dE1vZGUgIT09IFwiTk9ORVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWUucGFyZW50LmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9PT0gXCJBVVRPXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZS5wYXJlbnQuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLmxheW91dEdyb3cgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiQ2hpbGRyZW4gc2V0IHRvIGZpbGwgY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZyYW1lLmxheW91dE1vZGUgPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICAgICAgICAgICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIkNoaWxkcmVuIGFsaWduZWQgY2VudGVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJPbmx5IHNlbGVjdCBhdXRvbGF5b3V0IGZyYW1lcy5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgeyBhdXRvTGF5b3V0IH07XG4iLCJpbXBvcnQgaXNQYXJ0T2ZJbnN0YW5jZSBmcm9tIFwiLi9pc1BhcnRPZkluc3RhbmNlXCI7XG5sZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuY29uc3QgY29tcG9uZW50S2V5ID0gXCI4YzMyYzhjYTVlZjRiYTU5Y2FjNjM3MGZkZGE2OWZhOTA3NThhMDAzXCI7XG5jb25zdCBzcGFjZXMgPSBbXG4gICAgXCI0XCIsXG4gICAgXCI4XCIsXG4gICAgXCIxMlwiLFxuICAgIFwiMTZcIixcbiAgICBcIjI0XCIsXG4gICAgXCIzMlwiLFxuICAgIFwiNDhcIixcbiAgICBcIjY0XCIsXG4gICAgXCI5NlwiLFxuICAgIFwiMTI4XCIsXG4gICAgXCIxNjBcIixcbiAgICBcIjE5MlwiLFxuICAgIFwiMjQwXCIsXG5dO1xuY29uc3QgaW5zZXJ0U3BhY2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3Rpb25bMF07XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHNlbGVjdGVkLnBhcmVudDtcbiAgICAgICAgaWYgKGlzUGFydE9mSW5zdGFuY2Uoc2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIllvdSBjYW4ndCBhZGQgZWxlbWVudHMgdG8gYSBjb21wb25lbnQgaW5zdGFuY2UuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdldEluZGV4ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnBhcmVudC5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC5pZCkuaW5kZXhPZihub2RlLmlkKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhjb21wb25lbnRLZXkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGFjaW5nID0gcmVzcG9uc2UuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRDaGlsZChnZXRJbmRleChzZWxlY3RlZCkgKyAxLCBzcGFjaW5nKTtcbiAgICAgICAgICAgIHNwYWNpbmcub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbc3BhY2luZ107XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKGNvbXBvbmVudEtleSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNpbmcgPSByZXNwb25zZS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuaW5zZXJ0Q2hpbGQoMCwgc3BhY2luZyk7XG4gICAgICAgICAgICBzcGFjaW5nLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW3NwYWNpbmddO1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBmaWdtYS52aWV3cG9ydC5jZW50ZXI7XG4gICAgICAgICAgICBzcGFjaW5nLnggPSB4O1xuICAgICAgICAgICAgc3BhY2luZy55ID0geTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJPbmx5IHNlbGVjdCBvbmUgbGF5ZXIgYXQgYSB0aW1lLCBvciBubyBsYXllcnMuXCIpO1xuICAgIH1cbn07XG5jb25zdCBjaGFuZ2VTcGFjaW5nID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICBsZXQgbmV3U2l6ZTtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiAmJiBzaGFwZS5tYWluQ29tcG9uZW50LmtleSA9PT0gY29tcG9uZW50S2V5KSB7XG4gICAgICAgICAgICBsZXQgdGV4dExhYmVsO1xuICAgICAgICAgICAgY29uc3QgdGV4dFdyYXBwZXIgPSBzaGFwZS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGlmICh0ZXh0V3JhcHBlci50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgICAgICB0ZXh0TGFiZWwgPSB0ZXh0V3JhcHBlci5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRMYWJlbC5jaGFyYWN0ZXJzKTtcbiAgICAgICAgICAgIGxldCBjdXJyU2l6ZSA9IHRleHRMYWJlbC5jaGFyYWN0ZXJzO1xuICAgICAgICAgICAgbGV0IGN1cnJJbmRleCA9IHNwYWNlcy5pbmRleE9mKGN1cnJTaXplKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaW5jcmVhc2VcIiAmJiBjdXJySW5kZXggPCBzcGFjZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzcGFjZXNbY3VyckluZGV4ICsgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiZGVjcmVhc2VcIiAmJiBjdXJySW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNwYWNlc1tjdXJySW5kZXggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1NpemUgPSBjdXJyU2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdUb3AgPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgIHNoYXBlLnBhZGRpbmdSaWdodCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgc2hhcGUucGFkZGluZ0JvdHRvbSA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgc2hhcGUucGFkZGluZ0xlZnQgPSBuZXdTaXplIC8gMjtcbiAgICAgICAgICAgIHNoYXBlLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgc2hhcGUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICBzaGFwZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgc2hhcGUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgICAgIGZpZ21hXG4gICAgICAgICAgICAgICAgLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRleHRMYWJlbC5zZXRSYW5nZUZvbnROYW1lKDAsIHRleHRMYWJlbC5jaGFyYWN0ZXJzLmxlbmd0aCwge1xuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6IFwiUm9ib3RvIE1vbm9cIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiUmVndWxhclwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRleHRMYWJlbC5jaGFyYWN0ZXJzID0gbmV3U2l6ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbmNvbnN0IGluY3JlYXNlU3BhY2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjaGFuZ2VTcGFjaW5nKFwiaW5jcmVhc2VcIik7XG59O1xuY29uc3QgZGVjcmVhc2VTcGFjaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5nZVNwYWNpbmcoXCJkZWNyZWFzZVwiKTtcbn07XG5leHBvcnQgeyBpbmNyZWFzZVNwYWNpbmcsIGRlY3JlYXNlU3BhY2luZywgaW5zZXJ0U3BhY2luZyB9O1xuIiwiLy9jcmVhdGUgYmFzaWMgY2xvbmUgZnVuY3Rpb25cbmZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufVxuZXhwb3J0IHsgY2xvbmUgfTtcbiIsImZ1bmN0aW9uIHBhc2NhbENhc2UoaW5wdXQpIHtcbiAgICByZXR1cm4gKGlucHV0Lm1hdGNoKC9bYS16QS1aMC05XSsvZykgfHwgW10pXG4gICAgICAgIC5tYXAoKHcpID0+IGAke3cuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHt3LnNsaWNlKDEpfWApXG4gICAgICAgIC5qb2luKFwiXCIpO1xufVxuY29uc3QgYWRkU2xpY2VUb0ZyYW1lID0gZnVuY3Rpb24gKGZyYW1lLCBwbGF0Zm9ybSkge1xuICAgIC8vcmVtb3ZlIGN1cnJlbnQgc2xpY2UgaWYgaXQgZXhpc3RzXG4gICAgY29uc3QgY2hpbGRyZW4gPSBmcmFtZS5jaGlsZHJlbjtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJTTElDRVwiKSB7XG4gICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vY3JlYXRlIG5ldyBzbGljZSB0aGF0IGlzIHRoZSBzYW1lIHNpemUgYXMgZnJhbWVcbiAgICBjb25zdCBzbGljZSA9IGZpZ21hLmNyZWF0ZVNsaWNlKCk7XG4gICAgY29uc3QgZnJhbWVXaWR0aCA9IGZyYW1lLndpZHRoO1xuICAgIGNvbnN0IGZyYW1lSGVpZ2h0ID0gZnJhbWUuaGVpZ2h0O1xuICAgIGNvbnN0IGljb25OYW1lID0gZnJhbWUubmFtZTtcbiAgICBjb25zdCBjb21wb25lbnROYW1lID0gZnJhbWUucGFyZW50Lm5hbWU7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQoc2xpY2UpO1xuICAgIHNsaWNlLnggPSAwO1xuICAgIHNsaWNlLnkgPSAwO1xuICAgIHNsaWNlLnJlc2l6ZShmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCk7XG4gICAgc2xpY2UubmFtZSA9IGZvcm1hdE5hbWUoY29tcG9uZW50TmFtZSwgaWNvbk5hbWUsIHBsYXRmb3JtKTtcbiAgICBpZiAocGxhdGZvcm0gPT09IFwiaW9zXCIpIHtcbiAgICAgICAgc2xpY2UuZXhwb3J0U2V0dGluZ3MgPSBbeyBmb3JtYXQ6IFwiUERGXCIgfV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzbGljZS5leHBvcnRTZXR0aW5ncyA9IFt7IGZvcm1hdDogXCJTVkdcIiB9XTtcbiAgICB9XG59O1xuZnVuY3Rpb24gZm9ybWF0TmFtZShpbnB1dDEsIGlucHV0Miwgb3V0cHV0KSB7XG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoaW5wdXQyXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgICAubWFwKChzdHIpID0+IHN0ci50cmltKCkucmVwbGFjZSgvW1xccy9dL2csIFwiX1wiKS5zcGxpdChcIj1cIikpKTtcbiAgICBjb25zdCBzaXplID0gcHJvcHMuU2l6ZTtcbiAgICBkZWxldGUgcHJvcHMuU2l6ZTtcbiAgICBjb25zdCBzYW5pdGlzZWRJbnB1dDEgPSBpbnB1dDFcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1tcXHMvXS9nLCBcIl9cIilcbiAgICAgICAgLnJlcGxhY2UoL19fKy8sIFwiX1wiKTtcbiAgICBjb25zdCBzaXplVW5pdCA9IG91dHB1dCA9PT0gXCJhbmRyb2lkXCIgPyBcImRwXCIgOiBvdXRwdXQgPT09IFwiaW9zXCIgPyBcInB0XCIgOiBcInB4XCI7XG4gICAgY29uc3QgcmVzdCA9IE9iamVjdC52YWx1ZXMocHJvcHMpXG4gICAgICAgIC5tYXAoKHMpID0+IHMudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBbc2FuaXRpc2VkSW5wdXQxLCAuLi5yZXN0LCBgJHtzaXplfSR7c2l6ZVVuaXR9YF0uam9pbihcIl9cIik7XG4gICAgcmV0dXJuIG91dHB1dCA9PT0gXCJpb3NcIiA/IHBhc2NhbENhc2UodmFsdWVzKSA6IHZhbHVlcztcbn1cbmNvbnN0IGNyZWF0ZVNsaWNlcyA9IGZ1bmN0aW9uIChwbGF0Zm9ybSkge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3QgYXQgbGVhc3Qgb25lIG9iamVjdFwiKTtcbiAgICB9XG4gICAgc2VsZWN0aW9uLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgIGlmIChmcmFtZS50eXBlID09PSBcIkNPTVBPTkVOVF9TRVRcIikge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFudHMgPSBmcmFtZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIHZhcmlhbnRzLmZvckVhY2goKHZhcmlhbnQpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRTbGljZVRvRnJhbWUodmFyaWFudCwgcGxhdGZvcm0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlBsZWFzZSBvbmx5IHNlbGVjdCBDb21wb25lbnQgU2V0cyAodGhlIHB1cnBsZSBkb3R0ZWQgYm94IGFyb3VuZCB2YXJpYW50cylcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgeyBjcmVhdGVTbGljZXMgfTtcbiIsImltcG9ydCB7IGFkZENoaWxkVG9GcmFtZSB9IGZyb20gXCIuL2FkZENoaWxkVG9GcmFtZVwiO1xuaW1wb3J0IHsgY2xvbmUgfSBmcm9tIFwiLi9jbG9uZVwiO1xuY29uc3Qga2V5cyA9IFtcbiAgICBcIjc4MTU2ZjhhNzI3NDBiZDBkOWFjNjk0YjlmNzZjY2MwMDYyZDM3ODFcIixcbl07XG5jb25zdCBmb3JtYXRJbGxvID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGFzeW5jIGZ1bmN0aW9uIG1hcFN0eWxlcygpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBrZXlzLm1hcChhc3luYyAoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoc3R5bGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVzID0gYXdhaXQgbWFwU3R5bGVzKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIpIHtcbiAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS50eXBlID09PSBcIklNQUdFXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiAoc2hhcGUucm90YXRpb24gIT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyAgIGZpZ21hLmNsb3NlUGx1Z2luKFxuICAgICAgICAgICAgICAgIC8vICAgICBcIlNoYXBlcyBtdXN0IG5vdCBiZSByb3RhdGVkIGZvciB0aGlzIGZ1bmN0aW9uIHRvIHdvcmsuIFNvcnJ5IVwiXG4gICAgICAgICAgICAgICAgLy8gICApO1xuICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0uc2NhbGVNb2RlICE9IFwiQ1JPUFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxzID0gY2xvbmUoc2hhcGUuZmlsbHMpO1xuICAgICAgICAgICAgICAgICAgICBmaWxsc1swXS5zY2FsZU1vZGUgPSBcIkNST1BcIjtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuZmlsbHMgPSBmaWxscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9tYWtlIG5ldyBmcmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSBmcmFtZSBmaWxsc1xuICAgICAgICAgICAgICAgIGxldCBmcmFtZUZpbGxzID0gY2xvbmUoZnJhbWUuZmlsbHMpO1xuICAgICAgICAgICAgICAgIGZyYW1lRmlsbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmcmFtZS5maWxscyA9IGZyYW1lRmlsbHM7XG4gICAgICAgICAgICAgICAgYWRkQ2hpbGRUb0ZyYW1lKHNoYXBlLCBmcmFtZSk7XG4gICAgICAgICAgICAgICAgLy9kdXBsaWNhdGUgY2hpbGRcbiAgICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGUgPSBzaGFwZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGR1cGxpY2F0ZSk7XG4gICAgICAgICAgICAgICAgLy9yZW5hbWUgbGF5ZXIgYW5kIHRpbnRcbiAgICAgICAgICAgICAgICBzaGFwZS5uYW1lID0gXCJJbWFnZVwiO1xuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZS5uYW1lID0gXCJUaW50XCI7XG4gICAgICAgICAgICAgICAgLy9DaGFuZ2UgdGludCBjb2xvciB0byBibGFja1xuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZS5maWxsU3R5bGVJZCA9IHN0eWxlc1swXS5pZDtcbiAgICAgICAgICAgICAgICAvL0NyZWF0ZSBNYXNrIHdpdGggdHdvIGxheWVyc1xuICAgICAgICAgICAgICAgIHNoYXBlLmlzTWFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy9jbGVhciBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiT25seSBzZWxlY3Qgbm9kZXMgd2l0aCBzaW5nbGUgaW1hZ2UgZmlsbHMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJPbmx5IHNlbGVjdCBub2RlcyB3aXRoIHNpbmdsZSBpbWFnZSBmaWxsc1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgeyBmb3JtYXRJbGxvIH07XG4iLCJpbXBvcnQgeyBhZGRDaGlsZFRvRnJhbWUgfSBmcm9tIFwiLi9hZGRDaGlsZFRvRnJhbWVcIjtcbmltcG9ydCB7IGNsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmNvbnN0IGtleXMgPSBbXG4gICAgXCI0MWFiOTViZTA5OTY1NmMyNDFlYzlhZGM3Y2YzYTBjMzdjY2RlOTkyXCIsXG4gICAgXCIxOGIwY2E0ZDNlNzM2OWQwZGY2ZTcyMGJkZmU4OWFlMDNmZDQ4ZTgxXCIsXG4gICAgXCJkMzI2MDNjNDVkNDQyM2IyZDllYTQ3YmRmOTM2MzNmZDkwNzM0MGUzXCIsXG5dO1xuY29uc3QgZnJhbWVTY3JlZW5TaG90ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgYXN5bmMgZnVuY3Rpb24gbWFwU3R5bGVzKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IGtleXMubWFwKGFzeW5jIChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhzdHlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZXMgPSBhd2FpdCBtYXBTdHlsZXMoKTtcbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIpIHtcbiAgICAgICAgICAgIGlmIChzaGFwZS5maWxsc1swXS50eXBlID09PSBcIklNQUdFXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0uc2NhbGVNb2RlICE9IFwiQ1JPUFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxzID0gY2xvbmUoc2hhcGUuZmlsbHMpO1xuICAgICAgICAgICAgICAgICAgICBmaWxsc1swXS5zY2FsZU1vZGUgPSBcIkNST1BcIjtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuZmlsbHMgPSBmaWxscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9tYWtlIG5ldyBmcmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICBhZGRDaGlsZFRvRnJhbWUoc2hhcGUsIGZyYW1lKTtcbiAgICAgICAgICAgICAgICBmcmFtZS5jb3JuZXJSYWRpdXMgPSA0O1xuICAgICAgICAgICAgICAgIGZyYW1lLnN0cm9rZVdlaWdodCA9IDE7XG4gICAgICAgICAgICAgICAgZnJhbWUuc3Ryb2tlU3R5bGVJZCA9IHN0eWxlc1sxXS5pZDtcbiAgICAgICAgICAgICAgICBmcmFtZS5maWxsU3R5bGVJZCA9IHN0eWxlc1swXS5pZDtcbiAgICAgICAgICAgICAgICBmcmFtZS5lZmZlY3RTdHlsZUlkID0gc3R5bGVzWzJdLmlkO1xuICAgICAgICAgICAgICAgIGZyYW1lLm5hbWUgPSBzaGFwZS5uYW1lO1xuICAgICAgICAgICAgICAgIHNoYXBlLm5hbWUgPSBcIlNjcmVlbnNob3RcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBjbG9uZShzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGlvblswXSA9IGZyYW1lO1xuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbjtcbiAgICAgICAgICAgICAgICBmcmFtZS5jb25zdHJhaW5Qcm9wb3J0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk1ha2Ugc3VyZSB5b3VyIHJlY3RhbmdsZSBoYXMgb25seSBhbiBpbWFnZSBmaWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09IFwiRlJBTUVcIiB8fCBzaGFwZS50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgICAgIHNoYXBlLmNvcm5lclJhZGl1cyA9IDQ7XG4gICAgICAgICAgICBzaGFwZS5zdHJva2VXZWlnaHQgPSAxO1xuICAgICAgICAgICAgc2hhcGUuc3Ryb2tlU3R5bGVJZCA9IHN0eWxlc1sxXS5pZDtcbiAgICAgICAgICAgIHNoYXBlLmZpbGxTdHlsZUlkID0gc3R5bGVzWzBdLmlkO1xuICAgICAgICAgICAgc2hhcGUuZWZmZWN0U3R5bGVJZCA9IHN0eWxlc1syXS5pZDtcbiAgICAgICAgICAgIHNoYXBlLmNsaXBzQ29udGVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdCBvbmx5IGZyYW1lcyBvciByZWN0YW5nbGVzIHdpdGggaW1hZ2UgZmlsbHNcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG5leHBvcnQgeyBmcmFtZVNjcmVlblNob3QgfTtcbiIsImNvbnN0IGhpZGVBbm5vdGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBub2RlID0gZmlnbWEuY3VycmVudFBhZ2U7XG4gICAgY29uc3Qgbm9kZXMgPSBub2RlLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUubmFtZSA9PT0gXCIkQW5ub3RhdGlvblwiKTtcbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBub2RlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgeyBoaWRlQW5ub3RhdGlvbnMgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGFydE9mSW5zdGFuY2Uobm9kZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgIGlmIChwYXJlbnQudHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gXCJQQUdFXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlzUGFydE9mSW5zdGFuY2UocGFyZW50KTtcbiAgICB9XG59XG4iLCJjb25zdCBsYW5nQ29kZXMgPSBbXG4gICAgXCJhclwiLFxuICAgIFwiY3NcIixcbiAgICBcImRhXCIsXG4gICAgXCJkZVwiLFxuICAgIFwiZXNcIixcbiAgICBcImZpXCIsXG4gICAgXCJmclwiLFxuICAgIFwiaXRcIixcbiAgICBcImphXCIsXG4gICAgXCJrb1wiLFxuICAgIFwibmJcIixcbiAgICBcIm5sXCIsXG4gICAgXCJwbFwiLFxuICAgIFwicHRfQlJcIixcbiAgICBcInJ1XCIsXG4gICAgXCJzdlwiLFxuICAgIFwidHJcIixcbiAgICBcInpoX0NOXCIsXG4gICAgXCJ6aF9UV1wiLFxuXTtcbmNvbnN0IHByZXBlbmRMYW5nID0gKGZvcm1hdCkgPT4ge1xuICAgIC8vaWYgdGhlcmUgaXMgYnJhY2tldGVkIHRleHQgYXQgdGhlIGJlZ2lubmluZyBvZiBwYWdlIG5hbWVcbiAgICAvL2FkZCB0aGF0IGJyYWNrZXRlZCB0ZXh0IHRvIHRoZSBiZWdpbm5pbmcgb2YgZXZlcnkgZnJhbWUgbmFtZVxuICAgIC8vdW5sZXNzIHRoZSBmcmFtZSBhbHJlYWR5IHN0YXJ0cyB3aXRoIGl0LCB0aGVuIHNraXBcbiAgICBjb25zdCBwYWdlcyA9IGZpZ21hLnJvb3QuY2hpbGRyZW47XG4gICAgcGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgICAgICBsYW5nQ29kZXMuZm9yRWFjaCgoY29kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhZ2UubmFtZS5zdGFydHNXaXRoKGBbJHtjb2RlfV1gKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lcyA9IHBhZ2UuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgZnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmV4cG9ydFNldHRpbmdzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0LnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludDogeyB0eXBlOiBcIlNDQUxFXCIsIHZhbHVlOiAyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5uYW1lLnN0YXJ0c1dpdGgoYCR7Y29kZX0gLyBgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoZnJhbWUubmFtZSA9IGZyYW1lLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChmcmFtZS5uYW1lID0gY29kZSArIFwiIC8gXCIgKyBmcmFtZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG5jb25zdCBkZWxldGVMb2NhbGl6ZWRQYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwYWdlcyA9IGZpZ21hLnJvb3QuY2hpbGRyZW47XG4gICAgcGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgICAgICBsZXQgcmVtb3ZlID0gZmFsc2U7XG4gICAgICAgIGxhbmdDb2Rlcy5mb3JFYWNoKChjb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZS5uYW1lLnN0YXJ0c1dpdGgoYFske2NvZGV9XWApICYmIHBhZ2VzLmluZGV4T2YocGFnZSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocGFnZSA9PT0gZmlnbWEuY3VycmVudFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJDYW4ndCBkZWxldGUgY3VycmVudCBwYWdlXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZSA/IHBhZ2UucmVtb3ZlKCkgOiBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgIH0pO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuY29uc3QgbW92ZUxvY2FsaXplZEZyYW1lc1RvUGFnZSA9ICgpID0+IHtcbiAgICBwcmVwZW5kTGFuZyhcInBuZ1wiKTtcbiAgICBjb25zdCBwYWdlcyA9IGZpZ21hLnJvb3QuY2hpbGRyZW47XG4gICAgLy9wdXQgYWxsIG5vZGVzIGludG8gYW4gYXJyYXkgb2YgcGFnZXMsIGVhY2ggYW4gYXJyYXkgaXRzZWxmIGNvbnRhaW5pbmcgdGhlIGdyYXBoaWNzIGZyb20gdGhhdCBwYWdlXG4gICAgbGV0IGFsbE5vZGVzID0gW107XG4gICAgcGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgICAgICBsYW5nQ29kZXMuZm9yRWFjaCgoY29kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhZ2UubmFtZS5zdGFydHNXaXRoKGBbJHtjb2RlfV1gKSAmJiBwYWdlcy5pbmRleE9mKHBhZ2UpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZyYW1lcyA9IFtdO1xuICAgICAgICAgICAgICAgIHBhZ2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVzID0gWy4uLmZyYW1lcywgY2hpbGRdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFsbE5vZGVzID0gWy4uLmFsbE5vZGVzLCBmcmFtZXNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvL3JlY29uZmlndXJlIHRoZSBhcnJheXMgdG8gYmUgb3JnYW5pemVkIGJ5IGdyYXBoaWMsIHJhdGhlciB0aGFuIGJ5IHBhZ2UuXG4gICAgY29uc3Qgc2xpY2VkID0gYWxsTm9kZXMucmVkdWNlKChyZXN1bHRzLCBjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbGxlY3Rpb24uZm9yRWFjaCgoZywgaSkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0c1tpXSA9IHJlc3VsdHNbaV0gfHwgW107XG4gICAgICAgICAgICByZXN1bHRzW2ldLnB1c2goZyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgbmV3UGFnZSA9IGZpZ21hLmNyZWF0ZVBhZ2UoKTtcbiAgICBuZXdQYWdlLm5hbWUgPSBcIkxvY2FsaXplZCBHcmFwaGljc1wiO1xuICAgIGNvbnN0IG1haW5MYXlvdXRGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgbWFpbkxheW91dEZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgbWFpbkxheW91dEZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIG1haW5MYXlvdXRGcmFtZS5pdGVtU3BhY2luZyA9IDk2O1xuICAgIG1haW5MYXlvdXRGcmFtZS5maWxscyA9IFtdO1xuICAgIG1haW5MYXlvdXRGcmFtZS5uYW1lID0gXCJHcmFwaGljc1wiO1xuICAgIHNsaWNlZC5mb3JFYWNoKChhcnIpID0+IHtcbiAgICAgICAgY29uc3QgYXV0b0xheW91dEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgYXV0b0xheW91dEZyYW1lLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgYXV0b0xheW91dEZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBhdXRvTGF5b3V0RnJhbWUuaXRlbVNwYWNpbmcgPSA2NDtcbiAgICAgICAgYXV0b0xheW91dEZyYW1lLmZpbGxzID0gW107XG4gICAgICAgIGNvbnN0IGNoaWxkTmFtZSA9IGFyclswXS5uYW1lO1xuICAgICAgICBhdXRvTGF5b3V0RnJhbWUubmFtZSA9IGNoaWxkTmFtZS5zdWJzdHIoY2hpbGROYW1lLmluZGV4T2YoXCIvXCIpICsgMSkudHJpbSgpO1xuICAgICAgICBuZXdQYWdlLmFwcGVuZENoaWxkKGF1dG9MYXlvdXRGcmFtZSk7XG4gICAgICAgIGFyci5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGF1dG9MYXlvdXRGcmFtZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1haW5MYXlvdXRGcmFtZS5hcHBlbmRDaGlsZChhdXRvTGF5b3V0RnJhbWUpO1xuICAgIH0pO1xuICAgIG5ld1BhZ2UuYXBwZW5kQ2hpbGQobWFpbkxheW91dEZyYW1lKTtcbiAgICBmaWdtYS5jdXJyZW50UGFnZSA9IG5ld1BhZ2U7XG4gICAgZGVsZXRlTG9jYWxpemVkUGFnZXMoKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbmV4cG9ydCB7IHByZXBlbmRMYW5nLCBkZWxldGVMb2NhbGl6ZWRQYWdlcywgbW92ZUxvY2FsaXplZEZyYW1lc1RvUGFnZSB9O1xuIiwiY29uc3Qgc2V0RnVsbFNpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uKSB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiRlJBTUVcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJDT01QT05FTlRcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlZFQ1RPUlwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlNUQVJcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJMSU5FXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiRUxMSVBTRVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlBPTFlHT05cIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJSRUNUQU5HTEVcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJURVhUXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHNoYXBlLnBhcmVudDtcbiAgICAgICAgICAgIGlmICgocGFyZW50ICYmIHBhcmVudC50eXBlID09PSBcIkZSQU1FXCIpIHx8IHBhcmVudC50eXBlID09PSBcIkNPTVBPTkVOVFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50V2lkdGggPSBwYXJlbnQud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50SGVpZ2h0ID0gcGFyZW50LmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZUhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZVdpZHRoID0gc2hhcGUud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBzaGFwZVdpZHRoIC8gc2hhcGVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLy9zZXQgcm90YXRpb24gdG8gMFxuICAgICAgICAgICAgICAgIHNoYXBlLnJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAvL3Jlc2l6ZSB0aGUgc2hhcGVcbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgICAvL21haW50YWlucyB0aGUgYXNwZWN0IHJhdGlvIHdoZW4gdGhlIGNvbnN0cmFpbiBwcm9wb3J0aW9ucyBzZXR0aW5nIGlzIGFwcGxpZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXBlLmNvbnN0cmFpblByb3BvcnRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5yZXNpemUocGFyZW50V2lkdGgsIHBhcmVudFdpZHRoIC8gYXNwZWN0UmF0aW8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUucmVzaXplKHBhcmVudFdpZHRoLCBzaGFwZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGltZW5zaW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tYWludGFpbnMgdGhlIGFzcGVjdCByYXRpbyB3aGVuIHRoZSBjb25zdHJhaW4gcHJvcG9ydGlvbnMgc2V0dGluZyBpcyBhcHBsaWVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFwZS5jb25zdHJhaW5Qcm9wb3J0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUucmVzaXplKHBhcmVudEhlaWdodCAqIGFzcGVjdFJhdGlvLCBwYXJlbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUucmVzaXplKHNoYXBlV2lkdGgsIHBhcmVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zZXQgdGhlIHNoYXBlIHBvc2l0aW9uIHRvIG9yaWdpblxuICAgICAgICAgICAgICAgIGlmIChkaW1lbnNpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLnggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkaW1lbnNpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS55ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9maW5kIGN1cnJlbnQgY29uc3RyYWludHNcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmVydGljYWxDb250cmFpbnQgPSBzaGFwZS5jb25zdHJhaW50cy52ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SG9yaXpvbnRhbENvbnRyYWludCA9IHNoYXBlLmNvbnN0cmFpbnRzLmhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgLy9zZXQgY29uc3RyYWludHNcbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5jb25zdHJhaW50cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwiU1RSRVRDSFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6IGN1cnJlbnRWZXJ0aWNhbENvbnRyYWludCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGltZW5zaW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBjdXJyZW50SG9yaXpvbnRhbENvbnRyYWludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcIlNUUkVUQ0hcIixcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdGlvbiBtdXN0IGJlIG5lc3RlZCBpbiBhIGZyYW1lLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiUGxlYXNlIHNlbGVjdCBzb21ldGhpbmcgdGhhdCBjYW4gYmUgcmVzaXplZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHsgc2V0RnVsbFNpemUgfTtcbiIsImltcG9ydCB7IGNsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmltcG9ydCBpc1BhcnRPZkluc3RhbmNlIGZyb20gXCIuL2lzUGFydE9mSW5zdGFuY2VcIjtcbmZ1bmN0aW9uIHRleHRUb1NrZWxldG9uKCkge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgbGV0IG5ld1NlbGVjdGlvbiA9IFtdO1xuICAgIHNlbGVjdGlvbi5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGlmIChpc1BhcnRPZkluc3RhbmNlKG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUudHlwZSAhPT0gXCJURVhUXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gbm9kZS53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IG5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSBub2RlLmNvbnN0cmFpbnRzO1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBub2RlLnJlbGF0aXZlVHJhbnNmb3JtO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBub2RlLmZpbGxzO1xuICAgICAgICAgICAgbGV0IGZvbnRTaXplID0gMTI7XG4gICAgICAgICAgICBsZXQgdmlzdWFsU2l6ZTtcbiAgICAgICAgICAgIGlmIChub2RlLmZvbnRTaXplICE9PSBmaWdtYS5taXhlZCkge1xuICAgICAgICAgICAgICAgIHZpc3VhbFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiT25seSBzZWxlY3QgdGV4dCBub2RlcyB3aXRoIG9uZSBmb250IHNpemUgYXBwbGllZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IGNyZWF0ZVNrZWxldG9uU2hhcGUod2lkdGgsIGhlaWdodCwgdmlzdWFsU2l6ZSwgY29sb3IpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgICAgICAgICAgZnJhbWUucmVsYXRpdmVUcmFuc2Zvcm0gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIGZyYW1lLmNvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XG4gICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gWy4uLm5ld1NlbGVjdGlvbiwgZnJhbWVdO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbjtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNrZWxldG9uU2hhcGUod2lkdGgsIGhlaWdodCwgdmlzdWFsU2l6ZSwgY29sb3IpIHtcbiAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubmFtZSA9IFwiU2tlbGV0b24gVGV4dFwiO1xuICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgZnJhbWUucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IHJlY3RhbmdsZSA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKHJlY3RhbmdsZSk7XG4gICAgbGV0IGZpbGxzID0gY2xvbmUocmVjdGFuZ2xlLmZpbGxzKTtcbiAgICAvLyAgIGZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDAuMSB9XTtcbiAgICByZWN0YW5nbGUuZmlsbHMgPSBjb2xvcjtcbiAgICByZWN0YW5nbGUub3BhY2l0eSA9IDAuMTtcbiAgICByZWN0YW5nbGUuY29ybmVyUmFkaXVzID0gMjtcbiAgICByZWN0YW5nbGUubmFtZSA9IFwiU2hhcGVcIjtcbiAgICBjb25zdCByZWN0YW5nbGVIZWlnaHQgPSBNYXRoLmNlaWwodmlzdWFsU2l6ZSAqIDAuODUpO1xuICAgIHJlY3RhbmdsZS5yZXNpemUod2lkdGgsIHJlY3RhbmdsZUhlaWdodCk7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgIGZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICByZXR1cm4gZnJhbWU7XG59XG5leHBvcnQgeyB0ZXh0VG9Ta2VsZXRvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb2RlLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==