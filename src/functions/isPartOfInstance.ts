export default function isPartOfInstance(node) {
  const parent = node.parent;

  if (parent.type === "INSTANCE") {
    return true;
  } else if (parent.type === "PAGE") {
    return false;
  } else {
    return isPartOfInstance(parent);
  }
}
