const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req);
  // res.write('Welcome to home page');
  // res.end();
  if (req.url === '/') {
    res.end('welcom to home page');
  } else if (req.url === '/about') {
    res.end('about page');
  } else {
    res.end(
      `<h1>Ooops!</h1> <p>not fount</p> <a href="/">back to home page</a>`
    );
  }
});

server.listen(5000);
