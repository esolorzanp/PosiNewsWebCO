const inputs = document.querySelectorAll(".field__input");
const buttons = document.querySelectorAll(".button");

const readParamNewId = () => {
  const pageUrl = window.location.search;
  const urlParams = new URLSearchParams(pageUrl);
  const paramId = "n1";
  let newId = -1;
  if (urlParams.has(paramId)) {
    newId = urlParams.get(paramId);
  }

  return dataBase.news.find((e) => e.id == newId);
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
};
const onReturn = () => {
  //console.log("dentro onReturn...");
  window.location.href = "../pages/listNews.html";
};

const newReaded = readParamNewId();

inputs.forEach((e) => {
  console.log("recorre inputs...");
  const id = e.id;
  const inp = document.getElementById(id);
  const imgNew = document.getElementById("imgNewDetail");
  imgNew.src = newReaded.img;
  switch (id) {
    case "inpId":
      inp.value = newReaded.id;
      break;
    case "inpFuente":
      inp.value = newReaded.fuente;
      break;
    case "inpTitular":
      inp.value = newReaded.titular;
      break;
    case "inpDescripcion":
      inp.value = newReaded.descripcion;
      break;
    case "inpAutor":
      inp.value = newReaded.autor;
      break;
    case "inpFecha":
      inp.value = newReaded.fecha;
      break;
    case "inpCategoria":
      inp.value = newReaded.categoria;
      break;
    case "inpUrl":
      inp.value = newReaded.url;
      break;
    case "inpPais":
      inp.value = newReaded.pais;
      break;
    case "inpEstado":
      inp.value = newReaded.estado;
      break;
    case "inpCiudad":
      inp.value = newReaded.ciudad;
      break;
  }
});

console.log(inputs);
//console.log(buttons);
//console.log(newReaded);
