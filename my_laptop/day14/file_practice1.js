const fs=require('fs');

console.log('Reading file...');
fs.readFile('index.txt', 'utf8', (err, data) => {
    if(err) throw err
    console.log(data);

})


console.log('File read operation completed.');
