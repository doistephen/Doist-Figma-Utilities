let selection = figma.currentPage.selection;
const componentKey = "8c32c8ca5ef4ba59cac6370fdda69fa90758a003";
const spaces = [
  "4",
  "8",
  "12",
  "16",
  "24",
  "32",
  "48",
  "64",
  "96",
  "128",
  "160",
  "192",
  "240",
];

const changeSpacing = function (direction) {
  if (selection.length === 1) {
    for (let shape of selection) {
      if (
        shape.type === "INSTANCE" &&
        shape.mainComponent.key === componentKey
      ) {
        let textLabel;
        const textWrapper = shape.children[0];
        if (textWrapper.type === "FRAME") {
          textLabel = textWrapper.children[0];
        }
        console.log(textLabel.characters);
        let currSize = textLabel.characters;

        let currIndex = spaces.indexOf(currSize);
        let newSize;

        if (direction === "increase" && currIndex < spaces.length - 1) {
          newSize = spaces[currIndex + 1];
        } else if (direction === "decrease" && currIndex > 0) {
          newSize = spaces[currIndex - 1];
        } else {
          newSize = currSize;
        }

        shape.paddingTop = newSize / 2;
        shape.paddingRight = newSize / 2;
        shape.paddingBottom = newSize / 2;
        shape.paddingLeft = newSize / 2;
        figma
          .loadFontAsync({ family: "Roboto Mono", style: "Regular" })
          .then(() => {
            textLabel.setRangeFontName(0, textLabel.characters.length, {
              family: "Roboto Mono",
              style: "Regular",
            });
            textLabel.characters = newSize;
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  } else {
    figma.closePlugin("Select one instance of the spacing component.");
  }
};

const increaseSpacing = function () {
  changeSpacing("increase");
};

const decreaseSpacing = function () {
  changeSpacing("decrease");
};

export { increaseSpacing, decreaseSpacing };
