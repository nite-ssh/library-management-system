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

const login = (name, password) => {
  if (validation(name) == true && validation(password) == true) {
    if (
      name.value == localStorage.getItem("name") &&
      password.value == localStorage.getItem("password")
    ) {
      location.href = "../pages/dashboard.html";
    }else{
      alert("Wrong Credentials");
    }
    return;
  }
  alert("Empty Credentials");
  return;
}


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

if (location.href == `${location.origin}/build/pages/signup.html`) {
  document.querySelector("[name='signupBtn']").addEventListener("click", (e) => {
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

if (location.href == `${location.origin}/build/pages/signin.html`) {
  document.querySelector("[name='loginBtn']").addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("[name='loginName']");
    const password = document.querySelector("[name='loginPassword']");



    login(email, password);


  });
}
