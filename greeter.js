var Student = /** @class */ (function () {
    function Student(firstName, middleInital, lastName) {
        this.firstName = firstName;
        this.middleInital = middleInital;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInital + " " + lastName;
    }
    return Student;
}());
function greeter(student) {
    return "Hello, " + student.fullName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
