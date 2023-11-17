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
      //cantReg: 0,
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
    newsArray.push(e);
  });

  for (let i = 0; i < CANT_X_PAGE; i++) {
    let x = dataNewsArray.info.page * CANT_X_PAGE + i;
    dataNewsArray.results.push(newsArray[x]);
  }
  //dataNewsArray.info.cantReg = newsArray.length //dataNewsArray.results.length;
  dataNewsArray.info.totRecordsQueried = newsArray.length;
  dataNewsArray.info.totPages =
    Math.floor(dataNewsArray.info.totRecordsQueried / CANT_X_PAGE) +
    (dataNewsArray.info.totRecordsQueried % CANT_X_PAGE > 0 ? 1 : 0);

  return dataNewsArray;
};
