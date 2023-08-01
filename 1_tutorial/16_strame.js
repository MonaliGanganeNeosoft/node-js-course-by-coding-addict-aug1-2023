// const { createReadStream } = require('fs');

// const streme = createReadStream('./1_tutorial/current/big.txt');
// streme.on('data', (result) => {
//   console.log(result);
// });
// // [nodemon] starting `node app.js`
// // <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 20 30 20 0a 48 65 6c 6c 6f 20 77 6f 72 6c 64 20 31 20 0a

//->2]error

const { createReadStream } = require('fs');

const streme = createReadStream('./1_tutorial/current/big.txt', {
  highWaterMark: 90000,
  encoding: 'utf8',
});
streme.on('data', (result) => {
  console.log(result);
});
// [nodemon] starting `node app.js`
// <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 20 30 20 0a 48 65 6c 6c 6f 20 77 6f 72 6c 64 20 31 20 0a

streme.on('error', (err) => {
  console.log(err);
});
