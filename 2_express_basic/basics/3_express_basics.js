const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('user hit the resource');
  res.send('Home page');
  // res.end();
});
app.get('/about', (req, res) => {
  res.send('About page');
  // res.end();
});
app.all('*', (req, res) => {
  res.status(404).send('<h1>Not fount</h1>');
});
app.listen(5000, () => {
  console.log('server is listening 5000..');
});
