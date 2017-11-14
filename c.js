const data = require('./data');
const getNews = require('./d');

const items = data.split('<item>');
items.shift();

console.log(items.map(item => getNews(item)));
