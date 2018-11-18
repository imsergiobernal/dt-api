const cheerio = require('cheerio');
const rp = require('request-promise-native');

const osmosis = require('osmosis');

exports.getHeadlines = () => {
  return new Promise((resolve, reject) => {
    rp({
      uri: 'https://elpais.com',
      transform: body => cheerio.load(body),
    })
      .then(($) => {
        const hrefs = [];
        $('#bloque_actualidad_cuerpo .articulo-titulo > a').each((i, elem) => {
          if (i <= 4) hrefs[i] = $(elem).attr('href');
        });
        return hrefs;
      })
      .then((hrefs) => {
        return Promise.all(hrefs.map((href) => {
          return new Promise((resolve, reject) => {
            rp({
              uri: href,
              transform: body => cheerio.load(body),
            })
              .then(($) => {
                const article = {};
                article.title = $('#articulo-titulo').text();
                article.body = $('#cuerpo_noticia').text();
                article.image = `https:${$('#articulo_contenedor img').attr('src')}`;
                article.source = href;
                article.publisher = 'elpais';
                return resolve(article);
              })
              .catch((err) => { reject(err); });
          });
        }));
      })
      .then(result => resolve(result))
      .catch(err => reject(err));
  });
};


// This was code that I've been testing, just relevant for the interview.
/* exports.externalFeedsUrls = () => {
  const elPais = new Promise((resolve, reject) => {
    osmosis
      .get('https://elpais.com')
      .set({
        hrefs: ['#bloque_actualidad_cuerpo .articulos .articulo-titulo > a@href'],
      })
      .data((data) => {
        if (data.hrefs.length > 5) {
          data.hrefs.splice(4, data.hrefs.length - 5);
        }
        resolve(data.hrefs);
      })
      .error(err => reject(err));
  });

  const elMundo = new Promise((resolve, reject) => {
    osmosis
      .get('https://elmundo.es')
      .set({
        hrefs: ['section [itemprop="headline"] > a@href, section .mod-related a@href'],
      })
      .data((data) => {
        const hrefs = {};
        if (data.hrefs.length > 5) {
          data.hrefs.splice(4, data.hrefs.length - 5);
        }
        hrefs.elmundo = data.hrefs;
        resolve(hrefs);
      })
      .error(err => reject(err));
  });

  return Promise.all([elPais, elMundo]);
};

exports.elPaisUrls = () => {
  return new Promise((resolve, reject) => {
    osmosis
      .get('https://elpais.com')
      .set({
        hrefs: ['#bloque_actualidad_cuerpo .articulos .articulo-titulo > a@href'],
      })
      .data((data) => {
        const hrefs = {};
        if (data.hrefs.length > 5) {
          data.hrefs.splice(4, data.hrefs.length - 5);
        }
        hrefs.elpais = data.hrefs;
        resolve(hrefs);
      })
      .error(err => reject(err));
  });
};

exports.elMundoUrls = () => {
  return new Promise((resolve, reject) => { 
    osmosis
      .get('https://elmundo.es')
      .set({
        hrefs: ['section [itemprop="headline"] > a@href, section .mod-related a@href'],
      })
      .data((data) => {
        const hrefs = {};
        if (data.hrefs.length > 5) {
          data.hrefs.splice(4, data.hrefs.length - 5);
        }
        hrefs.elmundo = data.hrefs;
        resolve(hrefs);
      })
      .catch(err => reject(err));
  });
};

exports.getElpaisFeed = async (urls) => {
  const articles = {};
  urls.elpais.forEach(async (url) => {
    osmosis
      .get(url)
      .set({
        title: '#articulo-titulo',
        body: '#cuerpo_noticia',
        image: '#articulo_contenedor img@src',
        source: 'author',
        publisher: 'author',
      })
      .data((data) => { articles.elpais = data; })
      .log((data) => { console.log(data); })
      .done()
      .catch(err => console.log(err));
  });
  return articles;
};

exports.getElmundoFeed = async (urls) => {
  const articles = {};
  urls.elmundo.forEach(async (url) => {
    osmosis
      .get(url)
      .set({
        title: '#articulo-titulo',
        body: '#cuerpo_noticia',
        image: '#articulo_contenedor img@src',
        source: 'author',
        publisher: 'author',
      })
      .data((data) => { articles.elpais = data; })
      .log((data) => { console.log(data); })
      .done()
      .catch(err => console.log(err));
  });
  return articles;
};
 */