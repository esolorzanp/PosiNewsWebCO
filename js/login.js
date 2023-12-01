const MIN_FIELD = 8;
const MAX_FIELD = 99;
const MIN_LCASE = 1;
const MIN_UCASE = 1;
const MIN_NUMBERS = 2;

const users = [];
const userInput = document.querySelector("#userInput");
const passInput = document.querySelector("#passInput");
const loginButton = document.querySelectorAll(".button");

let fieldUserIsValidated = false;
let fieldPassIsValidated = false;

userInput.addEventListener("change", (e) => {
  let x = e.target.value;
  validateUserInput(x);
});

passInput.addEventListener("change", (e) => {
  let x = e.target.value;
  validatePassInput(x);
});

loginButton[0].addEventListener("click", () => {
  onLogin();
});

loginButton[1].addEventListener("click", () => {
  onClean();
});

const onClean = () => {
  document.getElementById("userInput").value = "";
  document.getElementById("passInput").value = "";
  document.getElementById("login__message").innerHTML = "";
  /*
  document.getElementById("userInput").value =
    "esolorzanop@estudiantes.uniajc.edu.co";
  document.getElementById("passInput").value = "Solo2023";
  */
  fieldUserIsValidated = true;
  fieldPassIsValidated = true;
};

const onLogin = () => {
  let iUser = document.getElementById("userInput").value;
  let iPass = document.getElementById("passInput").value;
  initErrorMessageSection();
  showMessageSuccess("Validando usuario...");

  if (isEmpty(iUser)) {
    showError(`* El campo "Username" se encuentra vacio\n`);
  }
  if (isEmpty(iPass)) {
    showError(`* El campo "Password" se encuentra vacio`);
  }
  if (!fieldUserIsValidated || !fieldPassIsValidated) {
    showError(
      `* Los campos de "Username" y "Password" no cumplen los requerimientos mínimos.`
    );
  } else {
    existUser(iUser)
      .then((resp) => {
        if (resp) {
          validateUserPass(iUser, iPass)
            .then((resp) => {
              showMessageSuccess("Ingresando a la aplicación...");
              redirectPage().then((resp) => {
                window.location.href = resp;
              });
            })
            .catch((error) => {
              showError(error);
            });
        }
      })
      .catch((error) => {
        showError(error);
      });
  }
};

const redirectPage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("pages/listNews.html");
    }, 2000);
  });
};

const validateUserInput = (x) => {
  let b = true;
  const emailRegEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  initErrorMessageSection();
  if (x.length > MAX_FIELD) {
    showError(
      `* El campo "Username" supera los ${MAX_FIELD} caracteres. (Número de caracteres ingresados: ${x.length})`
    );
    b = false;
  }
  if (!emailRegEX.test(x)) {
    showError(
      `* El campo "Username" no corresponde a un correo electrónico o email`
    );
    b = false;
  }
  fieldUserIsValidated = b;
};

const validatePassInput = (x) => {
  let b = true;
  const lowerLettersRegEx = /[a-z]/g;
  const upperLettersRegEx = /[A-Z]/g;
  const numbersRegEx = /[0-9]/g;
  const numLowerLetters = !lowerLettersRegEx.test(x)
    ? 0
    : x.match(lowerLettersRegEx).length;
  const numUpperLetters = !upperLettersRegEx.test(x)
    ? 0
    : x.match(upperLettersRegEx).length;
  const numNumbers = !numbersRegEx.test(x) ? 0 : x.match(numbersRegEx).length;
  initErrorMessageSection();
  if (x.length < MIN_FIELD) {
    showError(
      `* El campo "Password" debe tener al menos ${MIN_FIELD} caracteres. (Número de caracteres ingresados: ${x.length})`
    );
    b = false;
  }
  if (x.length > MAX_FIELD) {
    showError(
      `* El campo "Password" supera los ${MAX_FIELD} caracteres. (Número de caracteres ingresados: ${x.length})`
    );
    b = false;
  }
  if (numLowerLetters < MIN_LCASE) {
    showError(
      `* El campo "Password" debe contener al menos ${MIN_LCASE} letra(s) minúscula(s).`
    );
    b = false;
  }
  if (numUpperLetters < MIN_UCASE) {
    showError(
      `* El campo "Password" debe contener al menos ${MIN_UCASE} letra(s) mayúscula(s).`
    );
    b = false;
  }
  if (numNumbers < MIN_NUMBERS) {
    showError(
      `* El campo "Password" debe contener al menos ${MIN_NUMBERS} número(s).`
    );
    b = false;
  }
  fieldPassIsValidated = b;
};

const initErrorMessageSection = () => {
  document.getElementById("login__message").innerHTML = "";
};

const showError = (x) => {
  //initErrorMessageSection();
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
  return x === "";
};
