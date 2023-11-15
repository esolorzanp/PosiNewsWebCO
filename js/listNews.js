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
    console.log(resp);
  });
});

btnCleanFilters.addEventListener("click", () => {
  inputCategory.innerHTML = "";
  inputCountry.innerHTML = "";
  inputEditorial.innerHTML = "";
  sectionListNewsTable.innerHTML = "";
});
