import { addChildToFrame } from "./addChildToFrame";
import { clone } from "./clone";

const keys = [
  "41ab95be099656c241ec9adc7cf3a0c37ccde992", //white
  "18b0ca4d3e7369d0df6e720bdfe89ae03fd48e81", //black04
  "d32603c45d4423b2d9ea47bdf93633fd907340e3", //shadowLg
];

const frameScreenShot = async function () {
  let selection = figma.currentPage.selection;
  async function mapStyles() {
    const promises = keys.map(async (style) => {
      return await figma.importStyleByKeyAsync(style);
    });
    return await Promise.all(promises);
  }
  const styles = await mapStyles();
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

        frame.cornerRadius = 4;
        frame.strokeWeight = 1;
        frame.strokeStyleId = styles[1].id;
        frame.fillStyleId = styles[0].id;
        frame.effectStyleId = styles[2].id;

        frame.name = shape.name;
        shape.name = "Screenshot";

        const newSelection = clone(selection);
        newSelection[0] = frame;
        figma.currentPage.selection = newSelection;

        frame.constrainProportions = true;
      } else {
        figma.closePlugin("Make sure your rectangle has only an image fill");
      }
    } else if (shape.type === "FRAME" || shape.type === "INSTANCE") {
      shape.cornerRadius = 4;
      shape.strokeWeight = 1;
      shape.strokeStyleId = styles[1].id;
      shape.fillStyleId = styles[0].id;
      shape.effectStyleId = styles[2].id;
      shape.clipsContent = true;
    } else {
      figma.closePlugin("Select only frames or rectangles with image fills");
    }
  }
  figma.closePlugin();
};

export { frameScreenShot };
