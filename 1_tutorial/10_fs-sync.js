// const { readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('./1_tutorial/current/first.txt', 'utf-8');
// const second = readFileSync('./1_tutorial/current/second.txt', 'utf-8');

// console.log(first, second);

// // writeFileSync(
// //   './1_tutorial/current/result-sync.txt',
// //   `here is result: ${first} and ${second}`
// // );

// writeFileSync(
//   './1_tutorial/current/result-sync.txt',
//   `here is result: ${first} and ${second}`,
//   { flag: 'a' }
// );
// // ❯ node app
// // first file txt second file txt

//2]=>synchnization

const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./1_tutorial/current/first.txt', 'utf-8');
const second = readFileSync('./1_tutorial/current/second.txt', 'utf-8');

console.log(first, second);

// writeFileSync(
//   './1_tutorial/current/result-sync.txt',
//   `here is result: ${first} and ${second}`
// );

writeFileSync(
  './1_tutorial/current/result-sync.txt',
  `here is result: ${first} and ${second}`,
  { flag: 'a' }
);
// ❯ node app
// first file txt second file txt

console.log('done with task');
console.log('starting next task');

// ❯ node 1_tutorial/10_fs-sync
// start
// first file txt second file txt
// done with task
// starting next task
