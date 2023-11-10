const users = [];

const onClean = () => {
  document.getElementById("userInput").value = "";
  document.getElementById("passInput").value = "";
};

const onLogin = () => {
  const MIN_FIELD = 8;
  const MAX_FIELD = 99;
  const MAX_LCASE = 1;
  const MAX_UCASE = 1;
  const MAX_NUMBERS = 3;
  let iUser = document.getElementById("userInput").value;
  let iPass = document.getElementById("passInput").value;
  initErrorMessageSection();
  showMessageSuccess("Validando usuario...");
  if (isEmpty(iUser)) {
    showError(`El campo "Username" se encuentra vacio`);
  } else if (iUser.length > MAX_FIELD) {
    showError(
      `El campo "Username" supera los ${MIN_FIELD} caracteres. (Número de caracteres ingresados: ${iUser.length})`
    );
  } else if (isEmpty(iPass)) {
    showError(`El campo "Password" se encuentra vacio`);
  } else if (iPass.length < MIN_FIELD) {
    showError(
      `El campo "Password" debe tener al menos ${MIN_FIELD} caracteres. (Número de caracteres ingresados: ${iPass.length})`
    );
  } else if (iPass.length > MAX_FIELD) {
    showError(
      `El campo "Password" supera los ${MAX_FIELD} caracteres. (Número de caracteres ingresados: ${iPass.length})`
    );
  } else if (!containLowerCase(iPass, MAX_LCASE)) {
    showError(
      `El campo "Password" debe contener al menos ${MAX_LCASE} letra(s) minúscula(s).`
    );
  } else if (!containUpperCase(iPass, MAX_UCASE)) {
    showError(
      `El campo "Password" debe contener al menos ${MAX_UCASE} letra(s) mayúscula(s).`
    );
  } else if (!containNumbers(iPass, MAX_NUMBERS)) {
    showError(
      `El campo "Password" debe contener al menos ${MAX_NUMBERS} número(s).`
    );
  } else {
    existUser(iUser)
      .then((resp) => {
        if (resp) {
          validateUserPass(iUser, iPass)
            .then((resp) => {
              showMessageSuccess("Ingresando a la aplicación...");
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

const existUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!dataBase.users.some((u) => u.user === user)) {
        reject("Usuario no existe");
      } else {
        resolve(true);
      }
    }, 500);
  });
};

const validateUserPass = (user, pass) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const u = dataBase.users.find((u) => u.user === user);
      if (u.password != pass) {
        reject("Contraseña inválida");
      } else {
        resolve(true);
      }
    }, 500);
  });

  /*
  if (!dataBase.users.some((u) => u.user === user)) {
    return false;
  } else {
    const u = dataBase.users.find((u) => u.user === user);
    if (u.password != pass) {
      return false;
    } else {
      return true;
    }
  }
  */
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
  return x === "";
};

const containLowerCase = (x, y) => {
  const carValidos = "abcdefghijklmnopqrstuvwxyz";
  return containCharacters(x, y, carValidos);
};

const containUpperCase = (x, y) => {
  const carValidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return containCharacters(x, y, carValidos);
};

const containNumbers = (x, y) => {
  const carValidos = "1234567890";
  return containCharacters(x, y, carValidos);
};

const containCharacters = (x, y, carValidos) => {
  let j = 0;
  for (let i in x) {
    if (carValidos.includes(x[i])) {
      j++;
      if (j === y) return true;
    }
  }
  return false;
};
