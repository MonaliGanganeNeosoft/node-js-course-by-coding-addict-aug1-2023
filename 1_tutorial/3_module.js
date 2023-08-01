// //CommonJs,every file is module (by default)
// //Modules=>encapsulated code (only share minimum)
// const kajal = 'kajal';
// const piyu = 'piyu';
// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// };

// sayHi('moni');
// sayHi(kajal);
// sayHi(piyu);

//CommonJs,every file is module (by default)
//Modules=>encapsulated code (only share minimum)

const names = require('./1_tutorial/4_names');
const sayHi = require('./1_tutorial/5_utils');
console.log(names);
const data = require('./1_tutorial/6-alternative-flavor');
console.log(data);

require('./1_tutorial/7-mind-grenade');
// ❯ node app.js
// { kajal: 'kajal', piyu: 'piyu' }

// sayHi('moni');
// sayHi(names.kajal);
// sayHi(names.piyu);

// Hello there moni
// Hello there kajal
// Hello there piyu

//->>>>
// ❯ node app.js
// { kajal: 'kajal', piyu: 'piyu' }
// { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
// Hello there moni
// Hello there kajal
// Hello there piyu

// ❯ node app.js
// { kajal: 'kajal', piyu: 'piyu' }
// { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
// the sum is :15
