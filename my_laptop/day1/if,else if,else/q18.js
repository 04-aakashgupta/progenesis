//Q18:Assign month number and year and display
//  number of days in a month?

const year=2028;

const month=2;
const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];





if((year%4===0) && (year%100!==0 || year%400==0))
{

    if(month===2)
    {
        console.log("28 days")
    }

    else
    {
        console.log(daysInMonth[month-1]);
    }
    
}

else 

{
    console.log(daysInMonth[month-1]);
}


