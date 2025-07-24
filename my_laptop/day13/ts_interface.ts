interface CalculatorInterface {
     sum(num1: number, num2: number): number;
     sub(num1: number, num2: number): number;
     mul(num1: number, num2: number): number;
     div(num1: number, num2: number): number;

}


class Calculator implements CalculatorInterface {

     sum(num1: number, num2: number): number {
        return num1 + num2;
    }

     sub(num1: number, num2: number): number {
        return num1 - num2;
    }

     mul(num1: number, num2: number): number {
        return num1 * num2;
    }
     div(num1: number, num2: number): number {
        return num1 / num2;
    }

    public display(num1: number, num2: number): void {
        console.log(`Sum of num1 and num2 is ${this.sum(num1, num2)}`);
        console.log(`Sub of num1 and num2 is ${this.sub(num1, num2)}`)

        console.log(`Multiplication of num1 and num2 is ${this.mul(num1, num2)}`)

        console.log(`Division of num1 and num2 is ${this.div(num1, num2)}`)

    }

}

let c1 = new Calculator();

c1.display(20, 10);