import { addChildToFrame } from "./addChildToFrame";
import { clone } from "./clone";

const keys = [
  "78156f8a72740bd0d9ac694b9f76ccc0062d3781", //black
];

const formatIllo = async function () {
  async function mapStyles() {
    const promises = keys.map(async (style) => {
      return await figma.importStyleByKeyAsync(style);
    });
    return await Promise.all(promises);
  }

  const styles = await mapStyles();
  let selection = figma.currentPage.selection;

  for (let shape of selection) {
    if (shape.type === "RECTANGLE") {
      if (shape.fills[0].type === "IMAGE") {
        // if (shape.rotation !== 0) {
        //   figma.closePlugin(
        //     "Shapes must not be rotated for this function to work. Sorry!"
        //   );
        //   return false;
        // }

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
        duplicate.fillStyleId = styles[0].id;

        //Create Mask with two layers
        shape.isMask = true;

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

export { formatIllo };
