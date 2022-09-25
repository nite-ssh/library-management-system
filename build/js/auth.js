export const validation = (selectedElement) => {
  if (selectedElement.value.length === 0) {
    selectedElement.classList.add("warning");
    return false;
  }

  if (selectedElement.value.length >= 0) {
    selectedElement.classList.remove("warning");
    return true;
  }
};

const login = (email, password) => {
  if (validation(email) == true && validation(password) == true) {
    if (
      email.value == localStorage.getItem("email") &&
      password.value == localStorage.getItem("password")
    ) {
      if (location.href == `${location.origin}/library-management-system/build/pages/signin.html`) {
        document
          .querySelector(".signin-left__btn")
          .addEventListener("click", (e) => {
            location.href = "../pages/dashboard.html";
          });
      }
      return;
    }
    alert("Wrong Credentials");
    return;
  }
};

const register = (name, email, password) => {
  if (
    validation(name) == true &&
    validation(email) == true &&
    validation(password) == true
  ) {
    window.localStorage.setItem("name", name.value);
    window.localStorage.setItem("email", email.value);
    window.localStorage.setItem("password", password.value);

    alert("Signed In Successfully!");
  } else {
    alert("Please Fill all the textfield");
  }
};

if (location.href == `${location.origin}/library-management-system/build/pages/signup.html`) {
  document.querySelector(".signup-left__btn").addEventListener("click", (e) => {
    e.preventDefault();
    //selectors
    const name = document.querySelector("[name='registerName']");
    const email = document.querySelector("[name='registerEmail']");
    const password = document.querySelector("[name='registerPassword']");

    register(name, email, password);

    name.value = "";
    email.value = "";
    password.value = "";
  });
}

if (location.href == `${location.origin}/library-management-system/build/pages/signin.html`) {
  document.querySelector(".signin-left__btn").addEventListener("click", (e) => {
    const email = document.querySelector("[name='loginEmail']");
    const password = document.querySelector("[name='loginPassword']");
    e.preventDefault();
    login(email, password);
  });
}
