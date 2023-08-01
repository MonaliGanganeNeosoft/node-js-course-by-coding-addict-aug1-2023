const express = require('express');
const path = require('path');
const app = express();

app.use(express);

app.get('/', (req, res) => {
  res.send('hello ok');
  // res.sendFile(path.resolve(__dirname, './index.html'));
});
app.all('*', (req, res) => {
  res.status(404), send('not found');
});
app.listen(5000, () => {
  console.log('5000 ..');
});
