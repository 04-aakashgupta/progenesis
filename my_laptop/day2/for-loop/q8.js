//assign a number and prime number or not
let num = 19;

for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {

        console.log("this is not a prime number")
        break;

    }

    else if (i === parseInt(num / 2)) {

        console.log("this is a prime number")
    }

}