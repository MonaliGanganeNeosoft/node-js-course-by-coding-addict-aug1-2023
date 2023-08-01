const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  // res.json([{ name: 'moni' }, { name: 'piyu' }]);
  // res.json(products);

  res.send(`<h1>Home page</h1><a href="/api-pro" >products</a>`);
});

app.get('/api-pro', (req, res) => {
  // res.json(products);
  const newPro = products.map((pro) => {
    const { id, name } = pro;
    return { id, name };
  });
  res.json(newPro);
});

// app.get('/api-pro/1', (req, res) => {
//   // res.json(products);
//   const singlepro = products.find((pro) => pro.id === 1);
//   res.json(singlepro);
// });

app.get('/api-pro/:proId', (req, res) => {
  // res.json(products);
  // console.log(req);
  // console.log(req.params);
  const { proId } = req.params;
  const singlepro = products.find((pro) => pro.id === Number(proId));
  if (!singlepro) {
    res.status(404).send('not found');
  }
  res.json(singlepro);
});
app.listen(4000, () => {
  console.log('5000... on');
});
