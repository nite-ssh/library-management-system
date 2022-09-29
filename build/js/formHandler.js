import { deleteItem } from "./deleteItem.js";

document
  .querySelector(".action-strip__checkbox")
  .addEventListener("click", (e) => {
    const returnBookDate = document.querySelector("[name='bookReturnDate']");

    if (document.querySelector(".action-strip__checkbox").checked) {
      returnBookDate.setAttribute("readonly", "readonly");
    } else {
      returnBookDate.removeAttribute("readonly");
    }
  });

  document.querySelector("#modal-close").addEventListener

const returnedValues = JSON.parse(window.localStorage.getItem("userValues"));
let userValues = returnedValues ? returnedValues : [];

const dataInsertionHandler = () => {
  document.querySelector(".table__body").innerHTML = "";
  userValues.map((values, index) => {
    return (document.querySelector(".table__body").innerHTML += `
    <tr class="table__body-row" id=${index}>
    <td class="table__body-data">${values.name}</td>
    <td class="table__body-data">${values.book}</td>
    <td class="table__body-data">${values.isbn}</td>
    <td class="table__body-data">${values.contact}</td>
    <td class="table__body-data">${values.dates.bookTakenIn}</td>
    <td class="table__body-data">${values.dates.bookreturnDate}</td>
    <td class="table__body-data">${values.checkbox ? "Not Returned" : "Returned"
      }</td>
    <td class="table__body-data"><i class="icons fa-solid fa-edit" name="editBtn" id="penBtn"></i></td>
    <td class="table__body-data"><i class="icons fa-solid fa-trash" name="trashBtn"></i></td>
  </tr>
    `);
  });
};

dataInsertionHandler();

const submitBtnHandler = () => {
  document
    .querySelector("[name='submitBtn']")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const formValues = {
        name: document.querySelector("#name").value,
        book: document.querySelector("#book").value,
        isbn: document.querySelector("#isbn").value,
        contact: document.querySelector("#contact").value,
        dates: {
          bookTakenIn: document.querySelector("#bookTakenIn").value,
          bookreturnDate: document.querySelector("#bookReturnDate").value,
        },
        checkbox: document.querySelector("#checkbox").checked,
      };

      userValues.push(formValues);

      dataInsertionHandler();
      window.localStorage.setItem("userValues", JSON.stringify(userValues));

      location.reload();
    });
};

submitBtnHandler();

const deleteBtnHandler = () => {

  document.querySelectorAll("[name='trashBtn']").forEach((element, i) => {

    element.addEventListener("click", (event) => {
      event.preventDefault();
      const updatedUserValues = [...userValues];
      updatedUserValues.splice(i, 1)
      window.localStorage.setItem("userValues", JSON.stringify(updatedUserValues));
      dataInsertionHandler();
      location.reload();

    });
  });

};

deleteBtnHandler();

 const formValues = {
        name: document.querySelector("#name").value,
        book: document.querySelector("#book").value,
        isbn: document.querySelector("#isbn").value,
        contact: document.querySelector("#contact").value,
        dates: {
          bookTakenIn: document.querySelector("#bookTakenIn").value,
          bookreturnDate: document.querySelector("#bookReturnDate").value,
        },
        checkbox: document.querySelector("#checkbox").checked,
      };

const penBtnHandler = () => {
  document.querySelectorAll("#penBtn").forEach((element, i) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(".fa-plus").click();

      document.querySelector("#actionTitle").innerHTML = "Edit Info";
      document.querySelector("#editBtn").style.display = "block";
      document.querySelector("#submitBtn").style.display = "none";

      const index = event.target.parentNode.parentNode.getAttribute("id");

      console.log(userValues[index]);
      document.querySelector("#name").value = userValues[index].name;
      document.querySelector("#book").value= userValues[index].book;
      document.querySelector("#isbn").value= userValues[index].isbn;
      document.querySelector("#contact").value= userValues[index].contact;
      document.querySelector("#bookTakenIn").value= userValues[index].dates.bookTakenIn;
      document.querySelector("#bookReturnDate").value= userValues[index].dates.bookreturnDate;
      document.querySelector("#checkbox").checked= userValues[index].checkbox.checked;

      document.querySelector("#indexValue").value = index;


    

    });
  });
}
penBtnHandler();

const editBtnHandler = () => {
  document.querySelector("#editBtn").addEventListener("click", () => {
    const indexedValue = document.querySelector("#indexValue").value;
   

      console.log(userValues[indexedValue]);
      
  })
}
editBtnHandler();

// if(document.querySelector(".action-strip__checkbox").value == "on"){
//     document.querySelector("[name='bookReturnDate']").style.display = "none";
// }

// import { validation } from "./auth.js";
// import { deleteItem } from "./deleteItem.js";
// import { editItem } from "./editItem.js";

// let proceed = false;
// let infoData = [];
// let noOfDaysData = [];

// document
//   .querySelector("[name='signOut']")
//   .addEventListener("click", (event) => {
//     location.href = `${location.origin}/library-management-system/build/index.html`;
//   });

// document.getElementById("root").addEventListener("click", (event) => {
//   try {
//     var userCount = document
//       .querySelector(".right-info__wrapper")
//       .parentNode.querySelectorAll(".right-info__wrapper");
//   } catch (e) {
//     return;
//   }

//   if (userCount != null) {
//     document.querySelector(
//       "[name='numberOfUsers']"
//     ).innerHTML = `${userCount.length}`;

//     document.querySelector(
//       "[name='numberOfBooks']"
//     ).innerHTML = `${userCount.length}`;
//   }
// });

// const clearFields = () => {
//   document.querySelectorAll(".action-strip__textfield").forEach((element) => {
//     element.value = "";
//   });

//   document.querySelectorAll(".action-strip__date").forEach((element) => {
//     element.value = "";
//   });
// };

// document.querySelector(".btn--clear").addEventListener("click", (event) => {
//   clearFields();
// });

// const toBeReturnedHandler = () => {
//   const dateSelectedValue = document.querySelector(
//     "[name='bookTakenIn']"
//   ).value;
//   const bookReturnedValue = document.querySelector(
//     "[name='bookReturnDate']"
//   ).value;

//   const dateSelected = new Date(dateSelectedValue);
//   const dateToBeReturned = new Date(bookReturnedValue);
//   const difference = dateToBeReturned.getTime() - dateSelected.getTime();

//   if (difference >= 0) {
//     let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
//     return TotalDays;
//   }
//   return;
// };

// let count = 1;

// function createTableData() {
//   const tr = document.createElement("tr");
//   tr.classList.add("right-info__wrapper");

//   infoData.forEach((element, i) => {
//     const inputValue = tr.appendChild(document.createElement("td"));

//     inputValue.innerHTML = `${element}`;

//     inputValue.classList.add("right-info__table-data");
//     inputValue.classList.add("text-values");

//     if (inputValue.innerHTML[4] == "-") {
//       inputValue.classList.add("date");
//     }
//   });

//   noOfDaysData.forEach((day) => {
//     const noOfDays = tr.appendChild(document.createElement("td"));

//     noOfDays.innerHTML = `${day}`;

//     noOfDays.classList.add("right-info__table-data");
//   });

//   const pen = tr.appendChild(document.createElement("td"));
//   pen.appendChild(document.createElement("p")).classList.add("fas", "fa-pen");

//   const trash = tr.appendChild(document.createElement("td"));
//   trash
//     .appendChild(document.createElement("p"))
//     .classList.add("fa", "fa-trash");

//   document.querySelector(".right-info__table-body").appendChild(tr);

//   clearFields();
//   infoData = [];

//   document.querySelectorAll(".fa-trash").forEach((element) => {
//     element.addEventListener("click", (event) => {
//       deleteItem(event);
//     });
//   });

//   document.querySelectorAll(".fa-pen").forEach((element) => {
//     element.addEventListener("click", (event) => {
//       editItem(event);
//     });
//   });
// }

// export function btnClickHandler(className) {
//   document.querySelector(className).addEventListener("click", (event) => {
//     document.querySelectorAll(".action-strip__textfield").forEach((element) => {
//       if (validation(element)) {
//         proceed = true;
//         infoData.push(element.value);
//         return;
//       } else {
//         proceed = false;
//         return;
//       }
//     });

//     document.querySelectorAll(".action-strip__date").forEach((element) => {
//       if (!element.value) {
//         element.classList.add("warning");
//         return;
//       }

//       if (proceed) {
//         if (element.value) {
//           const tr = document.createElement("tr");
//           infoData.push(element.value);
//           element.classList.remove("warning");
//           return;
//         }
//       }
//     });

//     noOfDaysData.push(`${toBeReturnedHandler()}`);

//     if (proceed == true) {
//       createTableData();
//     }
//     noOfDaysData = [];
//   });
// }

// btnClickHandler(".btn--submit");
