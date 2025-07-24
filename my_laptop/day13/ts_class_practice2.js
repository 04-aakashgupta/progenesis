var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    Student.prototype.showData = function () {
        console.log("name=" + this.name + ",age=" + this.age);
    };
    return Student;
}());
var s1 = new Student("aakash", 21);
s1.showData();
