const readline = require('readline');
const Sort = require('./SortNum-Class');
let sort = null;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('please count:: ', (count) => {
  let cnt = 0; 
  let arr = []; 
  sort = new Sort();
  rl.on('line', (num) => {
    cnt++;
    arr.push(num);
    if(cnt >= count) {
      sort.sort(arr);
      rl.close();
      console.log('=== sorted ===');
      arr.forEach(el => console.log(el));
    }
  })
});
