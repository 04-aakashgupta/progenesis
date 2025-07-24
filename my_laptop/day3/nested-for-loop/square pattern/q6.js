//pattern 
//0 0 0 0 0
//0 1 1 1 0
//0 1 1 1 0
//0 1 1 1 0
//0 0 0 0 0


for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        if((i===1 || i===5 || j===1  || j===5))
        {
            process.stdout.write("0 ");
        }
         else
        {
            process.stdout.write("1 ");
        }
    }

    console.log("");
}