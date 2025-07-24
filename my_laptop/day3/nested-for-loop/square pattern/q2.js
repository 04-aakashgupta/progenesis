

//pattern
//1 1 1 1 1
//1 1 1 1 1 
//1 1 0 1 1
//1 1 1 1 1




for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        if(j===3 &&  i===3)
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