const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  // res.json([{ name: 'moni' }, { name: 'piyu' }]);
  res.json(products);
});

app.listen(5000, () => {
  console.log('5000... on');
});
