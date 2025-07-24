const fs=require('fs');



fs.unlink('index4.txt',(err,data)=>{
    if(err) throw err;
    console.log("file deleted");
})