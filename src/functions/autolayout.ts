const itemsStretch = function () {
  const frames = figma.currentPage.selection;
  if (frames.length === 0) {
    figma.closePlugin("Select at least one object");
  }
  frames.forEach((frame) => {
    if (
      (frame.type === "FRAME" && frame.layoutMode === "VERTICAL") ||
      (frame.type === "COMPONENT" && frame.layoutMode === "VERTICAL")
    ) {
      for (let child of frame.children) {
        child.layoutAlign = "STRETCH";
        child.layoutGrow = 0;
      }
      if (frame.parent.type === "FRAME" && frame.parent.layoutMode !== "NONE") {
        if (frame.parent.counterAxisSizingMode === "AUTO") {
          frame.parent.counterAxisSizingMode = "FIXED";
        }
        frame.layoutAlign = "STRETCH";
        frame.layoutGrow = 0;
      }
      figma.closePlugin("Children set to fill container");
    } else {
      figma.closePlugin();
    }
  });
};

export { itemsStretch };
