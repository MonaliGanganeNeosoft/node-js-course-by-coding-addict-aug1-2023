// const { readFile, writeFile } = require('fs');

// // readFile('./1_tutorial/current/first.txt', (err, result) => {
// //   if (err) {
// //     console.log(err);
// //     return;
// //   }
// //   console.log(result);
// //   //   ~/projects/node-jkpegw
// //   // ❯ node app
// //   // <Buffer 66 69 72 73 74 20 66 69 6c 65 20 74 78 74>
// // });

// //->2]utf8

// // readFile('./1_tutorial/current/first.txt', 'utf8', (err, result) => {
// //   if (err) {
// //     console.log(err);
// //     return;
// //   }
// //   console.log(result);

// //   //   node app
// //   // first file txt
// // });

// //=>callback

// readFile('./1_tutorial/current/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile('./1_tutorial/current/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       './1_tutorial/current/result-sync.txt',
//       `here is result : ${first} and ${second} **`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         } else {
//           console.log(result);
//         }
//       }
//     );
//   });
// });

//->2]async
const { readFile, writeFile } = require('fs');

// readFile('./1_tutorial/current/first.txt', (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   //   ~/projects/node-jkpegw
//   // ❯ node app
//   // <Buffer 66 69 72 73 74 20 66 69 6c 65 20 74 78 74>
// });

//->2]utf8

// readFile('./1_tutorial/current/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);

//   //   node app
//   // first file txt
// });

//=>callback

console.log('start');
readFile('./1_tutorial/current/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./1_tutorial/current/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './1_tutorial/current/result-sync.txt',
      `here is result : ${first} and ${second} **`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log('done with this task');
        }
      }
    );
  });
});

console.log('staring next task');

// ~/projects/node-jkpegw
// ❯ node 1_tutorial/11_fs-async.js
// start
// staring next task
// done with this task
