//display  Fibonacci serious till 20

let num1=0;
let num2=1;
let num3=null;



console.log(num1,",",num2);
   num3=num1+num2;
   num2=num3;
while(num2<=20)
{
    console.log(num2)
    num3=num1+num2;
    num1=num2;
    num2=num3;

    
}



// 0,1,null
//


//0,1,1

//0,1,1,2,3,5,8