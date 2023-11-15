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

const getCantPages = (cantReg) => {
  return cantReg / CANT_X_PAGE;
};

const queryNewsByFilters = (filtersNews) => {
  newsArray = [];
  dataNewsArray = {};
  dataBase.news.map((n) => {
    newsArray.push(n);
  });
  let length = newsArray.length;
  let cantPages =
    Math.floor(length / CANT_X_PAGE) + (length % CANT_X_PAGE > 0 ? 1 : 0);
  dataNewsArray.length = length;
  dataNewsArray.cantPages = cantPages;
  dataNewsArray.page = [];
  for (let i = 0; i < cantPages; i++) {
    //dataNewsArray.page[i].new = {};
    for (let j = 0; j < CANT_X_PAGE; j++) {
      let x = i * CANT_X_PAGE;
      let c = "" + i;
      console.log(`i=${i} - j=${j}`);
      console.log(newsArray[x + j]);
      dataNewsArray.page[i].new = newsArray[x + j];
    }
  }
  return dataNewsArray;
};

/**
 * Cantidad por página = 10
 * Total elementos = 50
 * nro paginas = 50 / 10 = 5 + (50 % 10 > 0 ? 1 : 0)
 *
 * Total elementos = 12
 * nro paginas = 12 / 10 = 1 + (12 % 10 > 0 ? 1 : 0)
 *
 */
