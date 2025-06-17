// Variables store information. 
// You can use let, const, or var.
// var is function-scoped, not block-scoped.
// let and const block-scoped

// 1. Primitive Data Types
    // Number	Numeric values (integers, floats)
    // String	Textual data
    // Boolean	Logical value: true or false
    // Undefined	A variable declared but not assigned
    // Null	Intentionally empty

var userName = "Alice";  // string type 
let age = 45;  // number type
let isStudent = false; // boolean type
let noData;    // undefinded type
let firstName = null;  // null type / object type

let lightMode = "white";
const darkMode = "black";


console.log('====================================');
console.log(userName);
console.log(age);
console.log(String(age));
console.log(isStudent);
console.log(noData);
console.log(firstName);
console.log('====================================');
console.log(typeof userName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof noData);
console.log(typeof firstName);

// Non-Primitive (Reference) Type
    // Object type : Collection of key-value pairs
    // Array : Collection of similar or non similar data
    // function : Object Referance type

let person = { 
    name:'David Voigt', 
    age: 30, 
    gender: "male" , 
    isMaried: true
}  // object literal

console.log(person);
console.log(person.name);

let employee = new Object({
    name:'John Snow',
    salary: 232409,
    dept: 'Development'
});  // object with new keyword

console.log(employee);
console.log(employee.dept);

let names = ['John', 'David', 'William', 'Rina','Steven']; // array of string
console.log(names);
console.log(names[2]);
