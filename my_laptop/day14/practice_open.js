const fs=require('fs');


fs.open('index4.txt','r',(error,data)=>
{

    if(error) throw error;
    let buffer=new Buffer(10);
    fs.read(data,buffer,0,buffer.length,4,(err,bytes)=>
    {
        if(err) throw err;
        if(bytes>0)
        {
            console.log(buffer.slice(0,bytes).toString());
        }

        fs.close(data,function(err){
            if(err) throw err;

        })
    })
    

})