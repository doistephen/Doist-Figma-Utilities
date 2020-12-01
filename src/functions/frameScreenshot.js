import { addChildToFrame } from "./addChildToFrame";
import { clone } from "./clone";
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
            }
            else {
                figma.closePlugin("Select only rectangles with image fills");
            }
        }
        else {
            figma.closePlugin("Select only rectangles with image fills");
        }
    }
};
export { frameScreenShot };
