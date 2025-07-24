//Assign value from user and check it is alphabet 
// or digit or special character?
const value="1a";

    const hasAlphabet=/[a-zA-Z]/;
    const hasDigit=/[0-9]/;
    const hasSpecialCharacter=/[^a-zA-Z0-9]/;



if((hasAlphabet || hasDigit) && (hasSpecialCharacter ||  hasAlphabet) && (hasDigit || hasSpecialCharacter  ))
{

    console.log("value is mixed ");
}

else if(hasDigit.test(value))
{
    console.log("this value is a digit")
}



else if(hasAlphabet.test(value))
{
    console.log("this value is a character");

}

else
{
    console.log("value is a special charater")
}