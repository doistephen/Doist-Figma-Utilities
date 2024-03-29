const addChildToFrame = function (shape, frame) {
  //create variables
  const parent = shape.parent;
  const shapeWidth = shape.width;
  const shapeHeight = shape.height;
  const shapePos = shape.relativeTransform;
  const shapeRotation = shape.rotation;
  //add frame to child's parent
  parent.appendChild(frame);

  //add child to frame
  frame.appendChild(shape);

  // //put frame where child was, put child in 0,0 pos
  frame.relativeTransform = shapePos;
  shape.rotation = 0;
  shape.x = 0;
  shape.y = 0;
  //resize frame to child's size
  frame.resizeWithoutConstraints(shapeWidth, shapeHeight);
  frame.rotation = shapeRotation;
  shape.constraints = {
    horizontal: "SCALE",
    vertical: "SCALE",
  };
};

export { addChildToFrame };
