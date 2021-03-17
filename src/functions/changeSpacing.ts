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

function isPartOfInstance(node) {
  const parent = node.parent;

  if (parent.type === "INSTANCE") {
    return true;
  } else if (parent.type === "PAGE") {
    return false;
  } else {
    return isPartOfInstance(parent);
  }
}

const insertSpacing = function () {
  if (selection && selection.length === 1) {
    const selected = selection[0];
    const parent = selected.parent;

    if (isPartOfInstance(selected)) {
      figma.closePlugin("You can't add elements to a component instance.");
      return false;
    }
    const getIndex = function (node) {
      return node.parent.children.map((child) => child.id).indexOf(node.id);
    };

    figma.importComponentByKeyAsync(componentKey).then((response) => {
      const spacing = response.createInstance();
      parent.insertChild(getIndex(selected) + 1, spacing);
      spacing.opacity = 0;
      figma.currentPage.selection = [spacing];
    });
    figma.closePlugin();
  }
};

const changeSpacing = function (direction) {
  for (let shape of selection) {
    let newSize;
    if (shape.type === "INSTANCE" && shape.mainComponent.key === componentKey) {
      let textLabel;
      const textWrapper = shape.children[0];
      if (textWrapper.type === "FRAME") {
        textLabel = textWrapper.children[0];
      }
      console.log(textLabel.characters);
      let currSize = textLabel.characters;

      let currIndex = spaces.indexOf(currSize);

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
      shape.primaryAxisSizingMode = "AUTO";
      shape.counterAxisSizingMode = "AUTO";
      shape.primaryAxisAlignItems = "CENTER";
      shape.counterAxisAlignItems = "CENTER";
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
  figma.closePlugin();
};

const increaseSpacing = function () {
  changeSpacing("increase");
};

const decreaseSpacing = function () {
  changeSpacing("decrease");
};

export { increaseSpacing, decreaseSpacing, insertSpacing };
