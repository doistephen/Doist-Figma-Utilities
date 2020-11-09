import { setFullSize } from "./functions/setFullSize";
import { formatIllo } from "./functions/formatIllo";
import { frameScreenShot } from "./functions/frameScreenshot";

//setup UI
if (figma.command === "showUI") {
  figma.showUI(__html__);
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
    } else {
      return;
    }
  };
}
//set up functions

// set up menu commands
if (figma.command === "frameScreenShot") {
  frameScreenShot();
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

if (figma.command === "formatIllo") {
  formatIllo();
  figma.closePlugin();
}