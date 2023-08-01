const { writeFileSync } = require('fs');

for (let i = 0; i < 10; i++) {
  writeFileSync('./1_tutorial/current/big.txt', `Hello world ${i} \n`, {
    flag: 'a',
  });
}
