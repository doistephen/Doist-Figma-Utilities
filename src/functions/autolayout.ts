function biggestNumberInArray(arr) {
  const max = Math.max(...arr);
  return max;
}
function returnTopObject(arr) {
  const min = arr.indexOf(Math.min(...arr));
  console.log(arr);

  return min;
}

const getChildrenHeights = function (children) {
  console.log(returnTopObject(children));
  //find difference between bottom of first and top of second
  //   const firstChildTop = children[0].y;
  //   const firstChildBottom = firstChildTop + children[0].height;
  //   const secondChildTop = children[1].y;
  //   const secondChildBottom = secondChildTop + children[1].height;
  //   const gap =
  //     secondChildBottom < firstChildTop
  //       ? firstChildTop - secondChildBottom
  //       : secondChildTop - firstChildBottom;
  //   return gap;
};

const itemsStretch = function () {
  let children = figma.currentPage.selection;
  if (children.length === 0) {
    figma.closePlugin("Select at least one object");
  }

  //get the parent of the first child
  const parent = children[0].parent;
  let secondParent;
  if (children.length > 1) {
    secondParent = children[1].parent;
  }
  //get the relative location of the first child
  const shapePos = children[0].relativeTransform;

  const frame = figma.createFrame();

  //add the new frame to the parent
  parent.appendChild(frame);
  //set the position of new frame to first child's pos
  frame.relativeTransform = shapePos;
  //set the width of new frame to widest child
  const widths = [];
  children.forEach((child) => {
    widths.push(child.width);
  });
  const yValues = [];
  children.forEach((child) => {
    yValues.push(child.y);
  });
  const maxWidth = biggestNumberInArray(widths);
  frame.resizeWithoutConstraints(maxWidth, 100);

  //remove frame fill
  frame.fills = [];
  //add children to frame
  if (parent === secondParent) {
    children
      .slice()
      .reverse()
      .forEach((child) => {
        frame.appendChild(child);
      });
  } else {
    children.forEach((child) => {
      frame.appendChild(child);
    });
  }

  //apply autolayout
  getChildrenHeights(yValues);
  frame.layoutMode = "VERTICAL";
  for (let child of children) {
    child.layoutAlign = "STRETCH";
    child.layoutGrow = 0;
  }

  figma.currentPage.selection = [frame];
  figma.closePlugin();
};
const itemsCenter = function () {
  let children = figma.currentPage.selection;
  if (children.length === 0) {
    figma.closePlugin("Select at least one object");
  }

  //get the parent of the first child
  const parent = children[0].parent;
  let secondParent;
  if (children.length > 1) {
    secondParent = children[1].parent;
  }
  //get the relative location of the first child
  const shapePos = children[0].relativeTransform;

  const frame = figma.createFrame();

  //add the new frame to the parent
  parent.appendChild(frame);
  //set the position of new frame to first child's pos
  frame.relativeTransform = shapePos;
  //set the width of new frame to widest child
  const heights = [];
  children.forEach((child) => {
    heights.push(child.height);
  });
  const maxHeight = biggestNumberInArray(heights);
  frame.resizeWithoutConstraints(100, maxHeight);
  //remove frame fill
  frame.fills = [];

  //add children to frame
  if (parent !== secondParent) {
    children
      .slice()
      .reverse()
      .forEach((child) => {
        frame.appendChild(child);
      });
  } else {
    children.forEach((child) => {
      frame.appendChild(child);
    });
  }

  //apply autolayout
  frame.layoutMode = "HORIZONTAL";

  for (let child of children) {
    child.layoutAlign = "CENTER";
    child.layoutGrow = 0;
  }

  figma.currentPage.selection = [frame];
  figma.closePlugin();
};

// const itemsStretch = function () {
//   let selection = figma.currentPage.selection;
//   if (selection.length === 0) {
//     figma.closePlugin("Select at least one autolayout frame");
//   }
//   for (let shape of selection) {
//     if (shape.type === "FRAME") {
//       if (shape.layoutMode !== "NONE") {
//         const children = shape.children;
//         for (let child of children) {
//           child.layoutAlign = "STRETCH";
//         }
//       } else {
//         figma.closePlugin("Select autolayout frames only.");
//       }
//     } else {
//       figma.closePlugin("Select autolayout frames only.");
//     }
//   }
//   figma.closePlugin("Items set to stretch");
// };

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

export { itemsStretch, justifyBetween, itemsCenter };
