import { setFullSize } from "./functions/setFullSize";
import { formatIllo } from "./functions/formatIllo";
import { frameScreenShot } from "./functions/frameScreenshot";
import { hideAnnotations } from "./functions/hideAnnotations";
import { increaseSpacing, decreaseSpacing } from "./functions/changeSpacing";

//setup UI
if (figma.command === "showUI") {
  figma.showUI(__html__, {
    width: 300,
    height: 300,
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
  //   figma.closePlugin();
}
if (figma.command === "decreaseSpacing") {
  decreaseSpacing();
  //   figma.closePlugin();
}
