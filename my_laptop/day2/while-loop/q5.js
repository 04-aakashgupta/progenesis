

let reverse=null;
let digit=null;
let sum=0;
let num=123;

while(num!==0)//num!==0)
{

    digit=num%10;
    num=parseInt(num/10);
    sum=sum*10+digit;
  

}


console.log(sum)