// A class is like a blueprint create object
// parent class
class Person {
   
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    showMessage() {
        console.log(`Hello, I am ${this.name} and I am ${this.age} year's old.`);
    }
}

// child class
class Employee extends Person {
     constructor(name,age, role) {
        super(name, age); // call base class constructor
        this.role = role;
     }

     work() {
        console.log(`${this.name} is working as a ${this.role}`);
     }

    static pay() {
        console.log("Sample pay method...");
    }
}



// const person1 = new Person("Jorge Hill", 30);
// person1.showMessage();

// const person2 = new Person("Brad Hill", 40);
// person2.showMessage();

const employee = new Employee("John Snow", 45, "Software Developer");

employee.showMessage();

employee.work();

Employee.pay();