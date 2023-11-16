const CANT_X_PAGE = 10;

let totElements = dataBase.news.length;
let pageNro = 1;
let dataNewsQueried = {};

const getAllNews = (filtersNews) => {
  console.log(filtersNews);
  return new Promise((resolve, reject) => {
    console.log("Iniciando promise getAllNews(");
    setTimeout(() => {
      dataNewsQueried = queryNewsByFilters(filtersNews);
      resolve(dataNewsQueried);
    }, 500);
  });
};

const gettotPages = (cantReg) => {
  return cantReg / CANT_X_PAGE;
};

const queryNewsByFilters = (filtersNews) => {
  const newsArray = [];
  const dataNewsArray = {
    info: {
      cantReg: 0,
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

  for (let e in dataBase.news) {
    newsArray.push(e);
  }
  for (let i = 0; i < CANT_X_PAGE; i++) {
    let x = dataNewsArray.info.page * CANT_X_PAGE + i;
    dataNewsArray.results.push(newsArray[x]);
  }
  dataNewsArray.info.cantReg = dataNewsArray.results.length;
  dataNewsArray.info.totRecordsQueried = newsArray.length;
  dataNewsArray.info.totPages =
    Math.floor(dataNewsArray.info.totRecordsQueried / CANT_X_PAGE) +
    (dataNewsArray.info.totRecordsQueried % CANT_X_PAGE > 0 ? 1 : 0);
  console.log(dataNewsArray.info.cantReg);
  //dataNewsArray.info.cantReg = dataNewsArray.results.length;
  //dataNewsArray.info.totPages;

  console.log(dataNewsArray);
  /*
  dataBase.news.map((n) => {
    newsArray.push(n);
  });
  let cantReg = newsArray.length;
  let totPages =
    Math.floor(cantReg / CANT_X_PAGE) + (cantReg % CANT_X_PAGE > 0 ? 1 : 0);
  dataNewsArray.cantReg = cantReg;
  dataNewsArray.totPages = totPages;
  dataNewsArray.page = [];

  for (let i = 0; i < totPages; i++) {
    const news = [];
    const noti = {};
    noti.new = {};
    for (let j = 0; j < CANT_X_PAGE; j++) {
      let pg = `page$[i]`;
      let x = i * CANT_X_PAGE + j;
      if (x === cantReg) {
        break;
      } else {
        newsArray[x].map((k) => {
          console.log(k);
        });
        noti.new = newsArray[x];
        //news.new.push(newsArray[x]);
      }
    }
    console.log(noti);
    dataNewsArray.page.push(noti);
  }
  */
  return dataNewsArray;
};

/**
 * Cantidad por página = 10
 * Total elementos = 50
 * nro paginas = 50 / 10 = 5 + (50 % 10 > 0 ? 1 : 0)
 * filters: {category: "", editorial:"", country:""}
 *
 * Total elementos = 12
 * nro paginas = 12 / 10 = 1 + (12 % 10 > 0 ? 1 : 0)
 *
 */
