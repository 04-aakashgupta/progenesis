//assign a number and checkit palimdrome /*
// numberor not

let digit=null;
let sum=0;
let num=111;
let num_copy=num;

while(num!==0)
{
    digit=num%10;
    num=parseInt(num/10);


    sum=sum*10+digit;

}



(sum===num_copy)?console.log("it is a palimdrome number"):console.log("it is not a palimdrome number");
console.log(sum," ",num_copy)