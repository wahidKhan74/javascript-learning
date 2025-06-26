//  A function constructor is a special type of function used to create objects with the new keyword 
// — similar to how classes work in other languages.

function Person(name, age, gender) {

    // properties
    this.name = name;
    this.age = age;
    this.gender = gender;

    // function
    this.showAge = function() {
        return this.age;
    };

    this.show = function() {
        console.log(`
            The person details are :
            Name : ${this.name}
            Age : ${this.age}
            Gender: ${this.gender}
        `);
    }

}

// create objects
const person1 = new Person("Alex", 45, "male");
console.log(person1);

console.log(`
    The person details are :
    Name : ${person1.name}
    Age : ${person1.age}
    Gender: ${person1.gender}
`);

const person2 = new Person("Meena", 26, "female");
person2.show();