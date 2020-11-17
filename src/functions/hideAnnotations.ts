const hideAnnotations = function () {
  const node = figma.currentPage;
  const nodes = node.findAll((node) => node.name === "$Annotation");
  nodes.forEach((node) => {
    if (node.visible === false) {
      node.visible = true;
    } else {
      node.visible = false;
    }
  });
};

export { hideAnnotations };
