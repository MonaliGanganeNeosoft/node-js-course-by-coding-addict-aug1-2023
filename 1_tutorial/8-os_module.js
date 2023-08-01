// ***build in modules
// //os,path,fs,http

const os = require('os');

// console.log(os);

//1]info user currect user

const user = os.userInfo();
// console.log(user);

// ❯ node app.js
// {
//   uid: 1,
//   guid: 1,
//   username: 'blitz',
//   homedir: '/home',
//   shell: '/bin/jsh'
// }

//=>2]method returens the system uptime in seconds
console.log(`The Sysytem Uptime is ${os.uptime()} seconds`);

// ❯ node app
// The Sysytem Uptime is 9317 seconds

// const currentOs = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem=os.freeMem()
// };

// console.log(currentOs,"check")

console.log(os.type()); //Linux

console.log(os.release()); //5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36

console.log(os.totalmem());
console.log(os.freemem());
