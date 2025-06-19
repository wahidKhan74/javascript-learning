// Spread Operator Example
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // Output: apple banana cherry

// Using the spread operator to copy the array :: // Creating a shallow copy of the array
const copyFruits = [...fruits];
console.log(copyFruits); // Output: apple banana cherry

// Using the spread operator to combine arrays  :: // Merging two arrays into one
const moreFruits = ['orange', 'grape'];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits); // Output: apple banana cherry orange grape

// Using the spread operator to pass array elements as function arguments 
// :: // Spreading the elements of the array as individual arguments
function printFruits(...args) {
    console.log('Fruits:', ...args);
}
printFruits(...allFruits); // Output: Fruits:apple banana cherry orange grape

// Using the spread operator to create a new array with additional elements 
// :: // Adding new elements to the beginning and end of the array
const newFruits = ['kiwi', ...fruits, 'mango'];
console.log(newFruits); // Output: kiwi apple banana cherry mango


// Using the spread operator to create a new object with additional properties 
// :: // Creating a new object by spreading properties from an existing object and adding new properties
const fruitDetails = { type: 'tropical', color: 'yellow' };
const newFruitDetails = { ...fruitDetails, name: 'banana', taste: 'sweet' };
console.log(newFruitDetails); // Output: { type: 'tropical', color: 'yellow', name: 'banana', taste: 'sweet' }


// Using the spread to convert a string into an array of characters
const str = 'hello';
const charArray = [...str];
console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']