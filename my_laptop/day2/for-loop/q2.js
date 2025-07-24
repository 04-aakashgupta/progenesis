//display  Fibonacci serious till 20

let num1=0;
let num2=1;
let num3=null;

console.log(num1);
console.log(num2);
num3=num1+num2;
num1=num2;
num2=num3;

for(let i=3;i<=20;i++)
{
    console.log(num2);
    num3=num2+num1;
    num1=num2;
    num2=num3;
    
}