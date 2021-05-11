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

          if (
            frame.parent.type === "FRAME" &&
            frame.parent.layoutMode !== "NONE"
          ) {
            if (frame.parent.counterAxisSizingMode === "AUTO") {
              frame.parent.counterAxisSizingMode = "FIXED";
            }
            frame.layoutAlign = "STRETCH";
            frame.layoutGrow = 0;
          }
          figma.closePlugin("Children set to fill container");
        }
      } else if (frame.layoutMode === "HORIZONTAL") {
        frame.counterAxisAlignItems = "CENTER";
        figma.closePlugin("Children aligned center");
      }
    } else {
      figma.closePlugin("Only select autolayout frames.");
    }
  });
};

export { autoLayout };
