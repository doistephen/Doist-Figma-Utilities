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
      if ((parent && parent.type === "FRAME") || parent.type === "COMPONENT") {
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

export { setFullSize };
