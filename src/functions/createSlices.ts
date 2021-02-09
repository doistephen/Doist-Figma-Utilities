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
  } else {
    slice.exportSettings = [{ format: "SVG" }];
  }
};

function formatName(input1, input2, output) {
  const { Size = "", ...rest } = Object.fromEntries(
    input2
      .trim()
      .split(",")
      .map((str) => str.trim().split("="))
  );
  const sanitisedName = input1
    .toLowerCase()
    .replace(/[\s/]/g, "_")
    .replace(/__+/, "_");
  const sizeUnit = output === "android" ? "dp" : output === "ios" ? "pt" : "px";
  const props = Object.values(rest)
    .map((s) => s.toLowerCase())
    .filter(Boolean);
  const values = [sanitisedName, ...props, `${Size}${sizeUnit}`].join("_");

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
    } else {
      figma.closePlugin(
        "Please only select Component Sets (the purple dotted box around variants)"
      );
    }
  });
};

export { createSlices };
