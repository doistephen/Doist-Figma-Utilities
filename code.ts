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

//create basic clone function
function clone(val) {
  return JSON.parse(JSON.stringify(val));
}
//set up functions
const setFullSize = function (dimension) {
  let selection = figma.currentPage.selection;
  for (let shape of selection) {
    if (
      shape.type === "FRAME" ||
      shape.type === "COMPONENT" ||
      shape.type === "INSTANCE" ||
      shape.type === "VECTOR" ||
      shape.type === "STAR" ||
      shape.type === "LINE" ||
      shape.type === "ELLIPSE" ||
      shape.type === "POLYGON" ||
      shape.type === "RECTANGLE" ||
      shape.type === "TEXT"
    ) {
      const parent = shape.parent;
      if (parent && parent.type === "FRAME") {
        const parentWidth = parent.width;
        const parentHeight = parent.height;
        const shapeHeight = shape.height;
        const shapeWidth = shape.width;

        //set rotation to 0
        shape.rotation = 0;

        //resize the shape
        if (dimension === "horizontal") {
          shape.resize(parentWidth, shapeHeight);
        } else if (dimension === "vertical") {
          shape.resize(shapeWidth, parentHeight);
        }

        //set the shape position to origin
        if (dimension === "horizontal") {
          shape.x = 0;
        } else if (dimension === "vertical") {
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
        } else if (dimension === "vertical") {
          shape.constraints = {
            horizontal: currentHorizontalContraint,
            vertical: "STRETCH",
          };
        }
      } else {
        figma.closePlugin("Selection must be nested in a frame.");
      }
    } else {
      figma.closePlugin("Please select something that can be resized.");
    }
  }
};

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

const frameScreenShot = function () {
  let selection = figma.currentPage.selection;
  for (let shape of selection) {
    if (shape.type === "RECTANGLE") {
      if (shape.fills[0].type === "IMAGE") {
        if (shape.fills[0].scaleMode != "CROP") {
          const fills = clone(shape.fills);
          fills[0].scaleMode = "CROP";
          shape.fills = fills;
        }

        //make new frame
        const frame = figma.createFrame();

        addChildToFrame(shape, frame);

        frame.strokeWeight = 1;
        frame.fills = [];

        frame.strokeStyleId =
          "S:18b0ca4d3e7369d0df6e720bdfe89ae03fd48e81,1077:2";

        frame.cornerRadius = 4;
        frame.effectStyleId =
          "S:d32603c45d4423b2d9ea47bdf93633fd907340e3,659:1";

        frame.name = shape.name;
        shape.name = "Screenshot";

        const newSelection = clone(selection);
        newSelection[0] = frame;
        figma.currentPage.selection = newSelection;

        frame.constrainProportions = true;
      } else {
        figma.closePlugin("Select only rectangles with image fills");
      }
    } else {
      figma.closePlugin("Select only rectangles with image fills");
    }
  }
};

const formatIllo = function () {
  let selection = figma.currentPage.selection;

  for (let shape of selection) {
    if (shape.type === "RECTANGLE") {
      if (shape.fills[0].type === "IMAGE") {
        if (shape.fills[0].scaleMode != "CROP") {
          const fills = clone(shape.fills);
          fills[0].scaleMode = "CROP";
          shape.fills = fills;
        }

        //make new frame
        const frame = figma.createFrame();

        //remove frame fills
        let frameFills = clone(frame.fills);
        frameFills = [];
        frame.fills = frameFills;

        addChildToFrame(shape, frame);

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
      } else {
        figma.closePlugin("Only select nodes with single image fills.");
      }
    } else {
      figma.closePlugin("Only select nodes with single image fills");
    }
  }
};

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
