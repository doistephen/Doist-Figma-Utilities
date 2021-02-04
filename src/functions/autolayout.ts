const itemsStretch = function () {
  let selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.closePlugin("Select at least one autolayout frame");
  }
  for (let shape of selection) {
    if (shape.type === "FRAME") {
      if (shape.layoutMode !== "NONE") {
        const children = shape.children;
        for (let child of children) {
          child.layoutAlign = "STRETCH";
        }
      } else {
        figma.closePlugin("Select autolayout frames only.");
      }
    } else {
      figma.closePlugin("Select autolayout frames only.");
    }
  }
  figma.closePlugin("Items set to stretch");
};

const justifyBetween = function () {
  let result = "";
  let selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.closePlugin("Select at least one autolayout frame");
  }
  for (let shape of selection) {
    if (shape.type === "FRAME") {
      if (shape.layoutMode !== "NONE") {
        if (shape.primaryAxisAlignItems === "SPACE_BETWEEN") {
          shape.primaryAxisAlignItems = "MIN";
          result = "start";
        } else {
          shape.primaryAxisAlignItems = "SPACE_BETWEEN";
          result = "space-between";
        }
      } else {
        figma.closePlugin("Select autolayout frames only.");
      }
    } else {
      figma.closePlugin("Select autolayout frames only.");
    }
  }
  figma.closePlugin(`Items justified ${result}`);
};

export { itemsStretch, justifyBetween };
