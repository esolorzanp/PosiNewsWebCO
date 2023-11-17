const sectionListNewsTable = document.querySelector("#list-news__news-table");

const inputCategory = document.getElementById("input-category");
const inputCountry = document.getElementById("input-country");
const inputEditorial = document.getElementById("input-editorial");

const btnSearch = document.querySelector("#btn-search");
const btnCleanFilters = document.querySelector("#btn-clean-filters");

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
    //  console.log(resp);
    renderTable(resp.results);
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
    btnVerMas.innerText = "View more";
    btnVerMas.className = "button button--success";
    document.getElementById(tdCol6.id).appendChild(btnVerMas);
    i++;
  });

  /*
  const trRow = document.createElement("tr");
  tTable.appendChild(tTable);*/
};
