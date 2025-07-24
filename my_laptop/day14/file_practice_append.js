const fs=require('fs');


fs.appendFile('index1.txt',"added new content",(err)=>
{
    if(err) throw err;
    console.log("append operation completed")
})