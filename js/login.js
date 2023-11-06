const onClean = () => {
  document.getElementById("userInput").value = "";
  document.getElementById("passInput").value = "";
};

const onLogin = () => {
  const MAX_FIELD = 20;
  let user = document.getElementById("userInput").value;
  let pass = document.getElementById("passInput").value;
  initErrorMessageSection();
  showMessageSuccess("Validando usuario...");
  setTimeout(() => {
    if (isEmpty(user)) {
      showError("El campo user name se encuentra vacio");
    } else if (user.length > MAX_FIELD) {
      showError("El campo user name supera el maximo de caracteres");
    } else if (isEmpty(pass)) {
      showError("El campo password se encuentra vacio");
    } else if (pass.length > MAX_FIELD) {
      showError("El campo password supera el maximo de caracteres");
    } else if (!validateUserPass(user, pass)) {
      showError("Usuario o password incorrecto");
    } else {
      showMessageSuccess("Ingresando a la aplicación...");
    }
  }, 1500);
};

const validateUserPass = (user, pass) => {
  if (user === "edwin" && pass === "123456") {
    return true;
  } else {
    return false;
  }
};

const initErrorMessageSection = () => {
  document.getElementById("login__message").innerHTML = "";
};

const showError = (x) => {
  initErrorMessageSection();
  let pError = document.createElement("p");
  pError.className = "login__message--error";
  pError.innerHTML = x;
  document.getElementById("login__message").appendChild(pError);
};

const showMessageSuccess = (x) => {
  initErrorMessageSection();
  let pMens = document.createElement("p");
  pMens.className = "login__message--success";
  pMens.innerHTML = x;
  document.getElementById("login__message").appendChild(pMens);
};

const isEmpty = (x) => {
  if (x === "") {
    return true;
  }
  return false;
};
