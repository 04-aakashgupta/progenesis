//assign a number and checkit palimdrome /*
// numberor not

let num=121;
let num_copy=num;
let digit=null;
let rev=0;

for(;num>0;)
{
    digit=num%10;
    num=parseInt(num/10);
    rev=rev*10+digit
}

num_copy===rev?console.log("num is palimdrome number"):console.log("num is not palimdrome number")