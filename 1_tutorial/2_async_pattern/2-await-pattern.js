// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);

// ❯ node app.js
// [ 1, 2, 3, 4 ]

const { readFile, writeFile } = require('fs').promises;
const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// readFile('./1_tutorial/current/first.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(data); //first file txt
//   }
// });

const start = async () => {
  try {
    // const first = await readFilePromise(
    //   './1_tutorial/current/first.txt',
    //   'utf8'
    // );
    // const second = await readFilePromise(
    //   './1_tutorial/current/second.txt',
    //   'utf8'
    // );
    // await writeFilePromise(
    //   './1_tutorial/current/result-sync.txt',
    //   `this is awsome ${first} and ${second}`
    // );

    const first = await readFile('./1_tutorial/current/first.txt', 'utf8');
    const second = await readFile('./1_tutorial/current/second.txt', 'utf8');
    await writeFile(
      './1_tutorial/current/result-sync.txt',
      `this is awsome ${first} and ${second} **`,
      { flag: 'a' }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText('./1_tutorial/current/first.txt')
//   .then((res) => {
//     console.log(res, 'ok');
//   })
//   .catch((err) => console.log(err));

// const getText = (path) => {
//   return new Promise((res, rej) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//         rej(err);
//       } else {
//         console.log(data, 'data'); //first file txt
//         res(data);
//       }
//     });
//   });
// };
