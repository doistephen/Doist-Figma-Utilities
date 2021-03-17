import { setFullSize } from "./functions/setFullSize";
import { formatIllo } from "./functions/formatIllo";
import { frameScreenShot } from "./functions/frameScreenshot";
import { hideAnnotations } from "./functions/hideAnnotations";
import { createSlices } from "./functions/createSlices";
import { itemsStretch } from "./functions/autolayout";
import { increaseSpacing, decreaseSpacing } from "./functions/changeSpacing";
import { prependLang, deleteLocalizedPages } from "./functions/prependLang";

//setup UI
if (figma.command === "showUI") {
  figma.showUI(__html__, {
    width: 300,
    height: 310,
  });
  figma.ui.onmessage = (message) => {
    if (message === "fullWidth") {
      setFullSize("horizontal");
    } else if (message === "fullHeight") {
      setFullSize("vertical");
    } else if (message === "fullSize") {
      setFullSize("vertical");
      setFullSize("horizontal");
    } else if (message === "frameScreenshot") {
      frameScreenShot();
    } else if (message === "formatIllo") {
      formatIllo();
    } else if (message === "hideAnnotations") {
      hideAnnotations();
    } else if (message === "iosSlices") {
      createSlices("ios");
    } else if (message === "androidSlices") {
      createSlices("android");
    } else if (message === "webSlices") {
      createSlices("web");
    } else if (message === "langJpg") {
      prependLang("jpg");
    } else if (message === "langPng") {
      prependLang("png");
    } else {
      return;
    }
  };
}

// set up menu commands
if (figma.command === "frameScreenShot") {
  frameScreenShot();
  //   figma.closePlugin();
}

if (figma.command === "hideAnnotations") {
  hideAnnotations();
  figma.closePlugin();
}

if (figma.command === "fullWidth") {
  setFullSize("horizontal");
  figma.closePlugin();
}

if (figma.command === "fullHeight") {
  setFullSize("vertical");
  figma.closePlugin();
}

if (figma.command === "fullSize") {
  setFullSize("vertical");
  setFullSize("horizontal");
  figma.closePlugin();
}

if (figma.command === "formatIllo") {
  formatIllo();
  figma.closePlugin();
}

if (figma.command === "increaseSpacing") {
  increaseSpacing();
}
if (figma.command === "decreaseSpacing") {
  decreaseSpacing();
}

if (figma.command === "itemsStretch") {
  itemsStretch();
}

if (figma.command === "deleteLocalizedPages") {
  deleteLocalizedPages();
}
