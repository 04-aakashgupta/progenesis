var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.sum = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.sub = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.prototype.mul = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.prototype.div = function (num1, num2) {
        return num1 / num2;
    };
    Calculator.prototype.display = function (num1, num2) {
        console.log("Sum of num1 and num2 is ".concat(this.sum(num1, num2)));
        console.log("Sub of num1 and num2 is ".concat(this.sub(num1, num2)));
        console.log("Multiplication of num1 and num2 is ".concat(this.mul(num1, num2)));
        console.log("Division of num1 and num2 is ".concat(this.div(num1, num2)));
    };
    return Calculator;
}());
var c1 = new Calculator();
c1.display(20, 10);
