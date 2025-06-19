// Destructuring assignment
const array = [1, 2, 3];

// manually extracting values from the array
const firts = array[0];
const seconds = array[1];
const thirds = array[2];
console.log(firts, seconds, thirds); // Output: 1 2 3

// using destructuring assignment to extract values from the array
const [first, second, third] = array;
console.log(first, second, third); // Output: 1 2 3

// List of cities
const cities = ['New York', 'Los Angeles', 'Chicago'];
const [city1, city2, city3] = cities;
console.log(city1);
console.log(city2);
console.log(city3);

// Extract values from an object using destructuring
const person = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland'
};
// const name = person.name;
// const age = person.age;
// const city = person.city;
// console.log(name, age, city); // Output: Alice 30 Wonderland

// Using destructuring assignment to extract values from an object
const {name,age,city} = person;
console.log(name, age, city); // Output: Alice 30 Wonderland


// Destructuring  arrays with large arrays
const largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Extracting the first three elements and the rest of the array
const [firstElement, secondElement, thirdElement, ...restOfArray] = largeArray
console.log(firstElement); // Output: 1
console.log(secondElement); // Output: 2
console.log(thirdElement); // Output: 3
console.log(restOfArray); // Output: [4, 5, 6, 7, 8, 9, 10]

let  a = 10;
let  b = 20;
let c = 30;
// Swapping values using destructuring assignment
[a, b, c] = [b, c, a];

console.log(a); // Output: 20
console.log(b); // Output: 30
console.log(c); // Output: 10




