import { btnClickHandler } from "./addItem.js";

export function editItem(event) {
  document.querySelector(".btn--edit").style.display = "block";
  document.querySelector(".btn--submit").style.display = "none";
  document.querySelector(".action-strip__title").innerHTML = "Edit Info";
  const target = event.target.parentNode.parentNode;

  if (target.parentNode == null) {
    return;
  }
  const textValues = [];

  target.querySelectorAll(".text-values").forEach((element) => {
    textValues.push(element.innerHTML);

    for (let i = 0; i <= 3; i++) {
      document.querySelectorAll(".action-strip__textfield")[i].value =
        textValues[i];
    }

    document.querySelectorAll(".action-strip__date")[0].value = textValues[4];
    document.querySelectorAll(".action-strip__date")[1].value = textValues[5];
  });

  document.querySelector(".btn--edit").addEventListener("click", (event) => {
    target.parentNode.removeChild(target);
    btnClickHandler(".btn--edit");

    document.querySelector(".action-strip__title").innerHTML = "Add Info";
    document.querySelector(".btn--submit").style.display = "block";
    document.querySelector(".btn--edit").style.display = "none";

    console.log(target.parentNode);
  });
}
