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
  const registerValueGetter = JSON.parse(localStorage.getItem("registerValues"));



  if (validation(name) && validation(password)) {
    const valueReturner = registerValueGetter.every((values) => {
      
      if (
        name.value === values.name &&
        password.value === values.password
      ) {

        return true;
      } else {
        alert("Wrong Credentials");
      }
    });

    if (valueReturner) {
      location.href = `${location.origin}/build/pages/dashboard.html`
    }
  }else{
    alert("Empty Credentials");
    return;
  }

}

const registerValues = [];

const register = (name, email, password) => {
  if (
    validation(name) &&
    validation(email) &&
    validation(password) 
  ) {

    registerValues.push(
      {
        name: name.value,
        email: email.value,
        password: password.value,
      }
    );

    window.localStorage.setItem("registerValues", JSON.stringify(registerValues));

    alert("Signed In Successfully!");
  } else {
    alert("Please Fill all the textfield");
  }
};

if (location.href === `${location.origin}/build/pages/signup.html`) {
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

if (location.href === `${location.origin}/build/pages/signin.html`) {
  document.querySelector("[name='loginBtn']").addEventListener("click", (e) => {
    e.preventDefault();
    const name= document.querySelector("[name='loginName']");
    const password = document.querySelector("[name='loginPassword']");

    login(name, password);

    name.value = "";
    password.value = "";
  });
}
