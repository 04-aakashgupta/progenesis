const fs=require('fs')
console.log('Reading file synchronously start...');
const data=fs.readFileSync('index.txt','utf-8')
console.log(data);
console.log('Reading file synchronously end...');
