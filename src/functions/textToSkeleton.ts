import { clone } from "./clone";
import isPartOfInstance from "./isPartOfInstance";

function textToSkeleton() {
  let selection = figma.currentPage.selection;
  let newSelection = [];
  selection.forEach((node) => {
    if (isPartOfInstance(node)) {
      return;
    }
    if (node.type !== "TEXT") {
      return;
    } else {
      const width = node.width;
      const height = node.height;
      const constraints = node.constraints;
      const position = node.relativeTransform;
      const color = node.fills;
      const id = node.id;
      const siblings = node.parent.children;
      let siblingIds = [];
      siblings.map((node) => {
        siblingIds.push(node.id);
      });
      const index = siblingIds.indexOf(id);

      let fontSize = 12;
      let visualSize;
      if (node.fontSize !== figma.mixed) {
        visualSize = fontSize;
      } else {
        figma.closePlugin("Only select text nodes with one font size applied.");
      }

      const frame = createSkeletonShape(width, height, visualSize, color);

      const parent = node.parent;
      parent.insertChild(index, frame);
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
  let fills = clone(rectangle.fills);
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

export { textToSkeleton };
