let obj = new Object(
    {
        name: "John"
    }
);
console.log(obj);

function Person(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    // Every instance gets its own copy of the greeting function.
    this.greeting = function() {
        console.log(`My name is ${this.name}`)
    }
}

let personObj1 = new Person("John Snow", 20, "male");
// instance level property
personObj1.email = "john@gmail.com"
console.log(personObj1);
personObj1.greeting();

// using prototype
// All instances share the same getLanguage function from the prototype.
Person.prototype.language = "English";
Person.prototype.getLanguage = function() {
    console.log(`My language is ${this.language}`);
}


let personObj2 = new Person("Mike Snow", 60, "male");
console.log(personObj2);
personObj2.greeting();