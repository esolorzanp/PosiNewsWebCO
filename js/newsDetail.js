const inputs = document.querySelectorAll(".field__input");
const buttons = document.querySelectorAll(".button");

if (sessionStorage.news !== undefined) {
  console.log("recupera news desde newDetail...");
  const newSt = JSON.parse(sessionStorage.getItem("news"));
  dataBase.news = newSt.map((n) => {
    const newT = {};
    newT.id = Number.parseInt(n.id);
    newT.fuente = n.fuente;
    newT.titular = n.titular;
    newT.descripcion = n.descripcion;
    newT.categoria = n.categoria;
    newT.autor = n.autor;
    newT.fecha = n.fecha;
    newT.img = n.img;
    newT.url = n.url;
    newT.palabrasClave = n.palabrasClave;
    newT.pais = n.pais;
    newT.estado = n.estado;
    newT.ciudad = n.ciudad;
    return newT;
  });
  console.log(dataBase.news);
}

const readParamNewId = () => {
  const pageUrl = window.location.search;
  const urlParams = new URLSearchParams(pageUrl);
  const paramId = "n1";
  let newId = -1;
  if (urlParams.has(paramId)) {
    newId = urlParams.get(paramId);
  }

  return getById(newId);
};

buttons.forEach((b) => {
  //console.log("dentro del buttons.forEach...");
  b.addEventListener("click", () => {
    //console.log("dentro del listener...");
    switch (b.id) {
      case "idUpdate":
        onUpdate();
        break;
      case "idReturn":
        onReturn();
        break;
    }
  });
});

const onUpdate = () => {
  console.log("dentro onUpdate...");
  const ind = getIndexofById(newsReaded.id);
  inputs.forEach((e) => {
    const id = e.id;
    const inp = document.getElementById(id);
    switch (id) {
      case "inpId":
        newsReaded.id = inp.value;
        break;
      case "inpFuente":
        newsReaded.fuente = inp.value;
        break;
      case "inpTitular":
        newsReaded.titular = inp.value;
        break;
      case "inpDescripcion":
        newsReaded.descripcion = inp.value;
        break;
      case "inpAutor":
        newsReaded.autor = inp.value;
        break;
      case "inpFecha":
        newsReaded.fecha = inp.value;
        break;
      case "inpCategoria":
        newsReaded.categoria = inp.value;
        break;
      case "inpUrl":
        newsReaded.url = inp.value;
        break;
      case "inpPais":
        newsReaded.pais = inp.value;
        break;
      case "inpEstado":
        newsReaded.estado = inp.value;
        break;
      case "inpCiudad":
        newsReaded.ciudad = inp.value;
        break;
    }
  });
  if (set(ind, newsReaded)) {
    renderMessageConfirm();
    //console.log(dataBase.news[ind]);
  }
};

const onReturn = () => {
  //console.log("dentro onReturn...");
  window.location.href = "../pages/listNews.html";
};

const newsReaded = readParamNewId();

inputs.forEach((e) => {
  //console.log("recorre inputs...");
  const id = e.id;
  const inp = document.getElementById(id);
  const imgNew = document.getElementById("imgNewDetail");
  imgNew.src = newsReaded.img;
  switch (id) {
    case "inpId":
      inp.value = newsReaded.id;
      break;
    case "inpFuente":
      inp.value = newsReaded.fuente;
      break;
    case "inpTitular":
      inp.value = newsReaded.titular;
      break;
    case "inpDescripcion":
      inp.value = newsReaded.descripcion;
      break;
    case "inpAutor":
      inp.value = newsReaded.autor;
      break;
    case "inpFecha":
      inp.value = newsReaded.fecha;
      break;
    case "inpCategoria":
      inp.value = newsReaded.categoria;
      break;
    case "inpUrl":
      inp.value = newsReaded.url;
      break;
    case "inpPais":
      inp.value = newsReaded.pais;
      break;
    case "inpEstado":
      inp.value = newsReaded.estado;
      break;
    case "inpCiudad":
      inp.value = newsReaded.ciudad;
      break;
  }
});

renderMessageError = () => {};

renderMessageConfirm = () => {
  let pShowMessages = document.getElementById("show-messages");
  let pMessage = document.createElement("p");
  pMessage.className = "message message__text message__text--success";
  pMessage.innerHTML = "Registro actualizado correctamente";
  pShowMessages.appendChild(pMessage);
  setTimeout(() => {
    pShowMessages.innerHTML = "";
  }, 2000);
};

//console.log(JSON.parse(sessionStorage.news));
//console.log(JSON.parse(sessionStorage.success));
//console.log(inputs);
//console.log(buttons);
//console.log(newsReaded);
