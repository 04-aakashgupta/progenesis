var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log("this is my first typescript program");
    };
    return Student;
}());
var s1 = new Student();
s1.display();
