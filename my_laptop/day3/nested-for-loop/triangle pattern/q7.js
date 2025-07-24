//pattern
//1 1 1 1 1 
//2 2 2 2 
//3 3 3 
//4 4  
//5


for(let i=1;i<=5;i++)
{
    for(let j=5;j>=i;j--)
    {
        process.stdout.write(i+" ");
    }
    console.log("");
    
}