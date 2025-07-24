// print this serious 1,4,3,6,5,8,7,10,9,12,11,14,13,16,15,18,17,20


for(let i=1;i<=20;)
{

    console.log(i);
    if(i%2!==0)
    {
        i=i+3;
    }
    else
    {

        if(i==20)
        {
            break;
        }
        i--;
    }
}