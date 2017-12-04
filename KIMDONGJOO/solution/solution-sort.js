const Sort = require('../class/Sort');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let idx = 0;
let arr = [];

rl.question('count : ', (count) => {
  rl.setPrompt('> ');
  rl.on('line', (line) => {
    idx++;
    arr.push(parseInt(line));
    if(idx >= count) {
      Sort.sort(arr);
      console.log('=== sorted ===');
      arr.forEach(el => console.log(el));
      rl.close();
    }
  });
});
