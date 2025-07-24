//Q2:Accept a year and check it is leap year or not?

const year=2000;


year%4===0 && (year%100!==0 || year%400===0)?console.log("this is leap year"):console.log("this is not leap year");
