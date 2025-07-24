//pattern traingle 
// 1 
// 0 1
// 0 1 0
// 0 1 0 1
// 0 1 0 1 0



for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
       if(j===1 && i===1)
       {
        process.stdout.write("1 ")
       }
       else if(j%2===0)
       {
        process.stdout.write("1 ")
       }
       else
       {
        process.stdout.write("0 ")
       }
    }

    console.log("")
}