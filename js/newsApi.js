const NUM_X_PAGE = 10;

let totElements = dataBase.news.length;
let pageNro = 1;
let dataNewsQueried = {};

const getAllNews = (filtersNews) => {
  return new Promise((resolve, reject) => {
    console.log("Iniciando promise getAllNews");
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

const getById = (idx) => {
  return dataBase.news.find((e) => e.id == idx);
};

const getIndexofById = (idx) => {
  let x = -1;
  for (let i = 0, s = dataBase.news.length; i < s; i++) {
    if (dataBase.news[i].id === idx) {
      x = i;
      break;
    }
  }
  return x;
};

const set = (x, newsX) => {
  dataBase.news[x].id = newsX.id;
  dataBase.news[x].fuente = newsX.fuente;
  dataBase.news[x].titular = newsX.titular;
  dataBase.news[x].descripcion = newsX.descripcion;
  dataBase.news[x].categoria = newsX.categoria;
  dataBase.news[x].autor = newsX.autor;
  dataBase.news[x].fecha = newsX.fecha;
  dataBase.news[x].img = newsX.img;
  dataBase.news[x].url = newsX.url;
  dataBase.news[x].palabrasClave = newsX.palabrasClave;
  dataBase.news[x].pais = newsX.pais;
  dataBase.news[x].estado = newsX.estado;
  dataBase.news[x].ciudad = newsX.ciudad;
  sessionStorage.setItem("news", JSON.stringify(dataBase.news));
  sessionStorage.setItem("success", JSON.stringify(true));
  return true;
};
