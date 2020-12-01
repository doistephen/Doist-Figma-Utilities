let selection = figma.currentPage.selection;
// const componentKey = "8c32c8ca5ef4ba59cac6370fdda69fa90758a003";
const componentKey = "76e4f999c6adf721b494ca2cd2c9d6e92c65fe54";
const spaces = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 192, 240];
const changeSpacing = function (direction) {
    console.log("hello");
    if (selection.length === 1) {
        for (let shape of selection) {
            if (shape.type === "INSTANCE" &&
                shape.mainComponent.key === componentKey) {
                let currSize = shape.width;
                let currIndex = spaces.indexOf(currSize);
                let newSize;
                if (direction === "increase" && currIndex < spaces.length - 1) {
                    newSize = spaces[currIndex + 1];
                }
                else if (direction === "decrease" && currIndex > 0) {
                    newSize = spaces[currIndex - 1];
                }
                else {
                    newSize = currSize;
                }
                shape.resize(newSize, newSize);
                shape.itemSpacing = newSize;
                //   if (innerFrame.type === "FRAME") {
                //     const labelWrapper = innerFrame.children[1];
                //     innerFrame.itemSpacing = newGap;
                //     //change the text of the label
                //     if (labelWrapper.type === "FRAME") {
                //       const label = labelWrapper.children[0];
                //       if (label.type === "TEXT") {
                //         figma
                //           .loadFontAsync({ family: "Roboto Mono", style: "Regular" })
                //           .then(() => {
                //             label.characters = `${newSize}`;
                //           })
                //           .catch((err) => {
                //             console.error(err);
                //           });
                //       }
            }
        }
    }
    else {
        figma.closePlugin("Select one instance of the spacing component.");
    }
};
// const changeSpacing = function (direction) {
//   console.log("hello");
//   if (selection.length === 1) {
//     for (let shape of selection) {
//       if (
//         shape.type === "INSTANCE" &&
//         shape.mainComponent.key === componentKey
//       ) {
//         let currSize = shape.itemSpacing * 2;
//         let currIndex = spaces.indexOf(currSize);
//         let newSize;
//         if (direction === "increase" && currIndex < spaces.length - 1) {
//           newSize = spaces[currIndex + 1];
//         } else if (direction === "decrease" && currIndex > 0) {
//           newSize = spaces[currIndex - 1];
//         } else {
//           newSize = currSize;
//         }
//         const innerFrame = shape.children[1];
//         let newGap = newSize / 2;
//         shape.resize(newSize, newSize);
//         shape.itemSpacing = newGap;
//         if (innerFrame.type === "FRAME") {
//           const labelWrapper = innerFrame.children[1];
//           innerFrame.itemSpacing = newGap;
//           //change the text of the label
//           if (labelWrapper.type === "FRAME") {
//             const label = labelWrapper.children[0];
//             if (label.type === "TEXT") {
//               figma
//                 .loadFontAsync({ family: "Roboto Mono", style: "Regular" })
//                 .then(() => {
//                   label.characters = `${newSize}`;
//                 })
//                 .catch((err) => {
//                   console.error(err);
//                 });
//             }
//           }
//         }
//       } else {
//         figma.closePlugin("Select one instance of the spacing component.");
//       }
//     }
//   } else {
//     figma.closePlugin("Only select one spacer at a time.");
//   }
// };
const increaseSpacing = function () {
    changeSpacing("increase");
};
const decreaseSpacing = function () {
    changeSpacing("decrease");
};
export { increaseSpacing, decreaseSpacing };
