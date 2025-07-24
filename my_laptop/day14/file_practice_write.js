const fs=require('fs');


fs.writeFile('index1.txt',"Welcome user",{flag:'wx'},(err)=>
{
    if(err) throw err;
    console.log("write operation completed")
})
