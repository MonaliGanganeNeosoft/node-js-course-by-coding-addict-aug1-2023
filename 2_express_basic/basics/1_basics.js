// console.log('hii');

// const http = require('http');
// const server = http.createServer((req, res) => {
//   // console.log('user hit the server');
//   // res.end('hello');
//   console.log(req.method); //get
//   console.log(req.url); //=>/
//   res.writeHead(200, { 'content-type': 'text/html' });
//   res.write('<h1>Home page</h1>');
//   res.end();
// });
// server.listen(5000, () => {});

//->2]url

console.log('hii');

const http = require('http');
const { readFileSync } = require('fs');

//->gel all files

const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {
  // console.log('user hit the server');
  // res.end('hello');
  // console.log(req.method); //get
  // console.log(req.url); //=>/
  const url = req.url;
  if (url == '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page</h1>');
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>not found</h1>');
    res.end();
  }
});
server.listen(5000, () => {});
