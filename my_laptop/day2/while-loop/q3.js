// print this serious 1,4,3,6,5,8,7,10,9,12,11,14,13,16,15,18,17,20


let i=1;
let add=true;

while(i<=20)
{

 console.log(i);
    if(add)
    {
        i=i+3;
      add=false;
       
    }

    else
    {
         i--;
  
          add=true;

    }

    console.log(",");

}