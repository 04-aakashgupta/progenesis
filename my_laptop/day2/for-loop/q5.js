//reverse number



let num=123;
let digit=null;
let rev=0;

for(;num>0;)
{
    digit=num%10;
    num=parseInt(num/10);
    rev=rev*10+digit;
}

console.log("num reverse number is",rev)