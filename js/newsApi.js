const NUM_X_PAGE = 10;

let totElements = dataBase.news.length;
let pageNro = 1;
let dataNewsQueried = {};

const getAllNews = (filtersNews) => {
  //  console.log(filtersNews);
  return new Promise((resolve, reject) => {
    console.log("Iniciando promise getAllNews(");
    setTimeout(() => {
      dataNewsQueried = queryNewsByFilters(filtersNews);
      resolve(dataNewsQueried);
    }, 500);
  });
};

const gettotPages = (cantReg) => {
  return cantReg / NUM_X_PAGE;
};

const queryNewsByFilters = (filtersNews) => {
  const newsArray = [];
  const dataNewsArray = {
    info: {
      totPages: 0,
      totRecordsQueried: 0,
      page: 0,
      filters: {
        category: "",
        country: "",
        editorial: "",
      },
    },
    results: [],
  };
  dataBase.news.map((e) => {
    b = false;
    console.log(e);
    let sCategoria = e.categoria != "" ? e.categoria.toLowerCase() : "";
    let sCountry = e.pais != "" ? e.pais.toLowerCase() : "";
    let sFuente = e.fuente != "" ? e.fuente.toLowerCase() : "";
    let fCategory =
      filtersNews.category != "" ? filtersNews.category.toLowerCase() : "";
    let fCountry =
      filtersNews.country != "" ? filtersNews.country.toLowerCase() : "";
    let fFuente =
      filtersNews.fuente != "" ? filtersNews.fuente.toLowerCase() : "";
    if (fCategory === "" && fCountry === "" && fFuente === "") {
      b = true;
    } else if (
      sCategoria.includes(fCategory) &&
      sCountry.includes(fCountry) &&
      sFuente.includes(fFuente)
    ) {
      b = true;
    }
    if (b) newsArray.push(e);
  });
  const j = filtersNews.page * NUM_X_PAGE;
  const s = newsArray.length;
  const k = j + NUM_X_PAGE < s ? j + NUM_X_PAGE : s;
  for (let i = j; i < k; i++) {
    let x = dataNewsArray.info.page * NUM_X_PAGE + i;
    dataNewsArray.results.push(newsArray[x]);
  }
  dataNewsArray.info.page = filtersNews.page;
  dataNewsArray.info.totRecordsQueried = newsArray.length;
  dataNewsArray.info.totPages =
    Math.floor(dataNewsArray.info.totRecordsQueried / NUM_X_PAGE) +
    (dataNewsArray.info.totRecordsQueried % NUM_X_PAGE > 0 ? 1 : 0);
  return dataNewsArray;
};
