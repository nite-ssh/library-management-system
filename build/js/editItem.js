export function editItem(event) {
  document.querySelector(".btn--edit").style.display = "block";
  document.querySelector(".btn--submit").style.display = "none";
  document.querySelector(".action-strip__title").innerHTML = "Edit Info";
  const target = event.target.parentNode.parentNode;
  if (target.parentNode == null) {
    return;
  }
}
