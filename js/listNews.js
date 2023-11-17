const sectionListNewsTable = document.querySelector("#list-news__news-table");

const inputCategory = document.getElementById("input-category");
const inputCountry = document.getElementById("input-country");
const inputEditorial = document.getElementById("input-editorial");

const btnSearch = document.querySelector("#btn-search");
const btnCleanFilters = document.querySelector("#btn-clean-filters");

/*
How to Bind Event Listeners to Dynamically-Created Elements in JavaScript
https://typeofnan.dev/how-to-bind-event-listeners-on-dynamically-created-elements-in-javascript/
*/
const btn = document.querySelectorAll(".btn");
console.log(`btn = ${btn}`);
for (let i = 0, s = btn.length; i < s; i++) {
  btn[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      //console.log(`click boton${i} ${e.target.id}`);
      let btnId = e.target.id;
      let r = -1;
      switch (btnId) {
        case "btn0":
          r = 0;
          break;
        case "btn1":
          r = 1;
          break;
        case "btn2":
          r = 2;
          break;
        case "btn3":
          r = 3;
          break;
        case "btn4":
          r = 4;
          break;
        case "btn5":
          r = 5;
          break;
        case "btn6":
          r = 6;
          break;
        case "btn7":
          r = 7;
          break;
        case "btn8":
          r = 8;
          break;
        case "btn9":
          r = 9;
          break;
      }
      if (r > -1) {
        console.log(dataResults[r].id);
        redirectNewsDetail(dataResults[r].id).then((resp) => {
          window.location.href= resp;
        });
      }
    }
  });
}

/***
 * Get Parameters from URL with JavaScript: Tips and Best Practices
 * https://makitweb.com/get-parameters-from-url-with-javascript/
 */
const redirectNewsDetail = (x) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //resolve(`../pages/newsDetail.html`);
      resolve(`../pages/newsDetail.html?A1="${x}"`);
    }, 1500);
  });
};

let dataResults = [];
btnSearch.addEventListener("click", () => {
  const pCargando = document.createElement("p");
  pCargando.className = "cargando cargando--success";
  pCargando.innerHTML = "Loading news data ...";
  sectionListNewsTable.innerHTML = "";
  sectionListNewsTable.appendChild(pCargando);
  const filtersNews = {};
  filtersNews.category = inputCategory.value;
  filtersNews.country = inputCountry.value;
  filtersNews.editorial = inputEditorial.value;
  getAllNews(filtersNews).then((resp) => {
    console.log("respuesta promise getAllNews");
    //console.log(resp);
    dataResults = resp.results;
    renderTable(dataResults);
  });
});

btnCleanFilters.addEventListener("click", () => {
  inputCategory.innerHTML = "";
  inputCountry.innerHTML = "";
  inputEditorial.innerHTML = "";
  sectionListNewsTable.innerHTML = "";
});

const renderTable = (data) => {
  const sectionTable = document.getElementById("list-news__news-table");

  console.log(data);

  let tTable = document.createElement("table");
  tTable.id = "table";
  tTable.className = "table";
  sectionTable.innerHTML = "";
  sectionTable.appendChild(tTable);

  let thRow = document.createElement("tr");
  thRow.id = "thRow";
  document.getElementById(tTable.id).appendChild(thRow);

  let thCol1 = document.createElement("th");
  thCol1.innerHTML = "Fecha";
  document.getElementById(thRow.id).appendChild(thCol1);
  let thCol2 = document.createElement("th");
  thCol2.innerHTML = "Titular";
  document.getElementById(thRow.id).appendChild(thCol2);
  let thCol3 = document.createElement("th");
  thCol3.innerHTML = "Fuente";
  document.getElementById(thRow.id).appendChild(thCol3);
  let thCol4 = document.createElement("th");
  thCol4.innerHTML = "Categoría";
  document.getElementById(thRow.id).appendChild(thCol4);
  let thCol5 = document.createElement("th");
  thCol5.innerHTML = "Ciudad";
  document.getElementById(thRow.id).appendChild(thCol5);
  let thCol6 = document.createElement("th");
  thCol6.innerHTML = "";
  //thCol6.style.width = "200px";
  document.getElementById(thRow.id).appendChild(thCol6);

  let i = 0;
  data.map((e) => {
    let trRow = document.createElement("tr");
    trRow.id = `trRow${i}`;
    document.getElementById(tTable.id).appendChild(trRow);

    let tdCol1 = document.createElement("td");
    tdCol1.innerHTML = e.fecha;
    document.getElementById(trRow.id).appendChild(tdCol1);
    let tdCol2 = document.createElement("td");
    tdCol2.innerHTML = e.titular;
    document.getElementById(trRow.id).appendChild(tdCol2);
    let tdCol3 = document.createElement("td");
    tdCol3.innerHTML = e.fuente;
    document.getElementById(trRow.id).appendChild(tdCol3);
    let tdCol4 = document.createElement("td");
    tdCol4.innerHTML = e.categoria;
    document.getElementById(trRow.id).appendChild(tdCol4);
    let tdCol5 = document.createElement("td");
    tdCol5.innerHTML = e.ciudad;
    document.getElementById(trRow.id).appendChild(tdCol5);
    let tdCol6 = document.createElement("td");
    tdCol6.id = `tdCol6${i}`;
    document.getElementById(trRow.id).appendChild(tdCol6);
    let btnVerMas = document.createElement("button");
    btnVerMas.id = `btn${i}`;
    btnVerMas.innerText = "View more";
    btnVerMas.className = "button button--success btn";
    document.getElementById(tdCol6.id).appendChild(btnVerMas);
    i++;
  });

  /*
  const trRow = document.createElement("tr");
  tTable.appendChild(tTable);*/
};
