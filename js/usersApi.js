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
  };
  