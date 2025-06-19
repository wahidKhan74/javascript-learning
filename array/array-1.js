// Arrays is collection of data. 
// It is a data structure that can hold multiple values in a single variable of same or different types.
// Arrays are zero-indexed, meaning the first element is at index 0 and the last element is at index length - 1.

let numbers = [10, 20, 30, 40, 50]; // array of numbers
console.log(numbers);
console.log(numbers[0]); // Accessing the first element
console.log(numbers[numbers.length-1]); // Accessing the last element
console.log(numbers.length); // Getting the length of the array

let mixedArray = [10, "Hello", true, null, { name: "Alice" }, [1, 2, 3]]; // array of mixed types
console.log(mixedArray);
console.log(mixedArray[1]); // Accessing the second element (string)
console.log(mixedArray[4].name); // Accessing a property of an object in the array
console.log(mixedArray[5][2]); // Accessing an element of a nested array

let emptyArray = []; // Empty array
let emptyArray2 = new Array(); // Another way to create an empty array
console.log(emptyArray); // Output: []
console.log(emptyArray2); // Output: []

// Adding elements to an array
emptyArray.push(60); // Adding an element to the end
emptyArray.push(70); // Adding another element
console.log(emptyArray); // Output: [ 60, 70 ]

// Adding elements at start of an array
emptyArray.unshift(50); // Adding an element to the start
emptyArray.unshift(40); // Adding another element at the start
console.log(emptyArray); // Output: [ 40, 50, 60, 70 ]

// Removing elements from an array
let removedElement = emptyArray.pop(); // Removing the last element
console.log("removedElement : ", removedElement); // Output: 70
console.log("emptyArray : ", emptyArray); // Output: [ 40, 50, 60 ]

// Removing the first element
removedElement = emptyArray.shift(); // Removing the first element
console.log("removedElement : ", removedElement); // Output: 40
console.log("emptyArray : ", emptyArray); // Output: [ 50, 60 ]


let numbers2 = [1, 2, 3, 4, 5]; // Another array of numbers
let numbers3 = [6, 7, 8, 9, 10]; // Yet another array of numbers
// Concatenating two arrays
let concatenatedArray = numbers2.concat(numbers3); // Merging two arrays
console.log("Concatenated Array: ", concatenatedArray); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Slicing an array
let slicedArray = concatenatedArray.slice(2, 5); // Extracting a portion
console.log("Sliced Array: ", slicedArray); // Output: [ 3, 4, 5 ]


// Mapping an array
let doubles = concatenatedArray.map(function(num) {
    return num * 2; // Doubling each element
});
console.log("Doubled Array: ", doubles); // Output: [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

// Reducing an array
let totalSum = concatenatedArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; // Summing all elements
}, 0);
console.log("Total Sum: ", totalSum); // Output: 55


// Joining an array into a string
let joinedString = concatenatedArray.join(", "); // Joining elements with a comma
console.log("Joined String: ", joinedString); // Output: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"