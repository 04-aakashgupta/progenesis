const fs=require('fs');
const fs1=require('readline');

const data=fs1.createInterface(
    {
        input:process.stdin,
        output:process.stdout

    }
);


data.question("enter the value?",function(p1)
{
    const data1=p1;
    fs.writeFile('index3.txt',data1,'wx',(err,data)=>
        {
        if (err) throw err;
        console.log("write operation completed");
    });
data.close();
})