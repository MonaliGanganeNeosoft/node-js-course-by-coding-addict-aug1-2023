const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    const text = fs.readFileSync('./1_tutorial/current/big.txt', 'utf8');
    // res.end(text);

    const fileStream = fs.createReadStream(
      './1_tutorial/current/big.txt',
      'utf8'
    );
    fileStream.on('open', () => {
      fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);
