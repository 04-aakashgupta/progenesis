//assign a number and check this number is armstrong or not

let num=153;
let num_copy=num;
let digit=null;
let arm=0;

for(;num>0;)
{
    digit=num%10;
    num=parseInt(num/10);
    arm=arm+(digit**3);
}

arm===num_copy?console.log("num is armstrong number"):console.log("num is not armstrong number")