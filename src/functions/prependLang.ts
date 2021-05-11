const langCodes = [
  "ar",
  "cs",
  "da",
  "de",
  "es",
  "fi",
  "fr",
  "it",
  "ja",
  "ko",
  "nb",
  "nl",
  "pl",
  "pt_BR",
  "ru",
  "sv",
  "tr",
  "zh_CN",
  "zh_TW",
];

const prependLang = (format) => {
  //if there is bracketed text at the beginning of page name
  //add that bracketed text to the beginning of every frame name
  //unless the frame already starts with it, then skip
  const pages = figma.root.children;

  pages.forEach((page) => {
    langCodes.forEach((code) => {
      if (page.name.startsWith(`[${code}]`)) {
        const frames = page.children;

        frames.forEach((frame) => {
          frame.exportSettings = [
            {
              format: format.toUpperCase(),
              constraint: { type: "SCALE", value: 2 },
            },
          ];
          frame.name.startsWith(`${code} / `)
            ? (frame.name = frame.name)
            : (frame.name = code + " / " + frame.name);
        });
      }
    });
  });

  figma.closePlugin();
};

const deleteLocalizedPages = function () {
  const pages = figma.root.children;

  pages.forEach((page) => {
    let remove = false;
    langCodes.forEach((code) => {
      if (page.name.startsWith(`[${code}]`) && pages.indexOf(page) !== 0) {
        if (page === figma.currentPage) {
          figma.closePlugin("Can't delete current page");
          return false;
        } else {
          remove = true;
        }
      }
    });
    remove ? page.remove() : figma.closePlugin();
  });
  figma.closePlugin();
};

const moveLocalizedFramesToPage = () => {
  prependLang("png");
  const pages = figma.root.children;

  let nodes = [];
  pages.forEach((page) => {
    langCodes.forEach((code) => {
      if (page.name.startsWith(`[${code}]`) && pages.indexOf(page) !== 0) {
        page.children.forEach((child) => {
          nodes = [...nodes, child];
        });
      }
    });
  });
  const newPage = figma.createPage();
  newPage.name = "Localized Graphics";

  const autoLayoutFrame = figma.createFrame();
  autoLayoutFrame.layoutMode = "HORIZONTAL";
  autoLayoutFrame.counterAxisSizingMode = "AUTO";
  autoLayoutFrame.itemSpacing = 64;
  autoLayoutFrame.fills = [];

  newPage.appendChild(autoLayoutFrame);
  nodes.map((node) => {
    autoLayoutFrame.appendChild(node);
  });

  deleteLocalizedPages();
  figma.closePlugin();
};

export { prependLang, deleteLocalizedPages, moveLocalizedFramesToPage };
