export function deleteItem(e) {
  const target = e.target.parentNode.parentNode;
  if (target.parentNode == null) {
    return;
  }
  target.parentNode.removeChild(target);
}
