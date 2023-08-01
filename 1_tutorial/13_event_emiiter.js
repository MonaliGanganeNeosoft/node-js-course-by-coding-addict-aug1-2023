const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('res', (name, id) => {
  console.log(`data recieved with ${name} and ${id}`);
});
customEmitter.on('res', () => {
  console.log(`some other logic here`);
});
customEmitter.emit('res', 'moni', 23);
