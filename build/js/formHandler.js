import { validation } from "./auth.js";

document
  .querySelector(".action-strip__checkbox")
  .addEventListener("click", (e) => {
    const returnBookDate = document.querySelector("[name='bookReturnDate']");

    if (document.querySelector(".action-strip__checkbox").checked) {
      returnBookDate.setAttribute("readonly", "readonly");
    }

    if (!document.querySelector(".action-strip__checkbox").checked) {
      returnBookDate.removeAttribute("readonly");
    }
  });

  const submitBtnHandler= () =>{
    
  const userValues = [];
    document.querySelector(".btn--submit").addEventListener("click", (event)=>{
      event.preventDefault();
      const formValues = {
        name :  document.querySelector("#name").value,
        book :  document.querySelector("#book").value,
        isbn:  document.querySelector("#isbn").value,
        contact:  document.querySelector("#contact").value,
        dates:{
          bookTakenIn: document.querySelector("#bookTakenIn").value,
          bookreturnDate: document.querySelector("#bookReturnDate").value,
        },
        checkbox: document.querySelector("#checkbox").checked
      }


      validation(formValues.name.target.parentNode);

        console.log(document.querySelector("#bookTakenIn").value);

        console.log(formValues);

    })

  }

  submitBtnHandler();

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
