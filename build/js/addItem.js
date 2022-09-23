import { validation } from "./auth.js";

let proceed = false;
let infoData = [];

const clearFields = () => {
  document.querySelectorAll(".action-strip__textfield").forEach((element) => {
    element.value = "";
  });

  document.querySelectorAll(".action-strip__date").forEach((element) => {
    element.value = "";
  });
};

document.querySelector(".btn--clear").addEventListener("click", (event) => {
  clearFields();
});

const toBeReturnedHandler = () => {};

let count = 1;

function createTableData() {
  const tr = document.createElement("tr");

  const serial = tr.appendChild(document.createElement("td"));
  serial.innerHTML = `${count}`;
  count++;

  serial.classList.add("right-info__table-data");

  infoData.forEach((element, i) => {
    const firstName = tr.appendChild(document.createElement("td"));

    firstName.innerHTML = `${element}`;

    firstName.classList.add("right-info__table-data");
  });
  const pen = tr.appendChild(document.createElement("td"));
  pen.classList.add("fas");
  pen.classList.add("fa-pen");

  const trash = tr.appendChild(document.createElement("td"));
  trash.classList.add("fas");
  trash.classList.add("fa-trash");

  console.log(tr);

  document.querySelector(".right-info__table-body").appendChild(tr);
  clearFields();
  infoData = [];
}

document.querySelector(".btn--submit").addEventListener("click", (event) => {
  document.querySelectorAll(".action-strip__textfield").forEach((element) => {
    if (validation(element)) {
      proceed = true;
      infoData.push(element.value);
      return;
    } else {
      return;
    }
  });

  document.querySelectorAll(".action-strip__date").forEach((element) => {
    if (!element.value) {
      element.classList.add("warning");
      return;
    }

    if (element.value) {
      if (proceed) {
        const tr = document.createElement("tr");
        infoData.push(element.value);

        element.classList.remove("warning");

        return;
      }
      return;
    }
  });

  createTableData();
});
