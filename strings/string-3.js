// String methods
let str = "Hello, JavaScript learning!";
console.log("Original String:", str);

// Convert to Uppercase
let upperStr = str.toUpperCase();
console.log(upperStr); // HELLO, JAVASCRIPT LEARNING!

let lowerStr = str.toLowerCase();
console.log(lowerStr); // hello, javascript learning!

// clean up string
let str2 = "   Hello, JavaScript learning!    ";
let cleanedStr = str2.trim();
console.log(cleanedStr); // Hello, JavaScript learning!

// Check if a text exists in a string
let searchText = "JavaScript";
let containsText = str.includes(searchText);
console.log(`Does the string contain "${searchText}"?`, containsText); // true

// Find the index of a substring
let indexOfText = str.indexOf(searchText);
console.log(`Index of "${searchText}":`, indexOfText); // 7

// Replace a substring
let newStr = str.replace("JavaScript", "JS");
console.log(newStr); // Hello, JS learning!

// Split a string into an array
let wordsArray = str.split(" ");
console.log(wordsArray); // [ 'Hello,', 'JavaScript', 'learning!' ]

// Join an array into a string
let joinedStr = wordsArray.join(" ");
console.log(joinedStr); // Hello, JavaScript learning!

// Check if a string starts with a specific substring
let startsWithHello = str.startsWith("Hello");
console.log(`Does the string start with "Hello"?`, startsWithHello); // true

// Check if a string ends with a specific substring
let endsWithLearning = str.endsWith("learning!");
console.log(`Does the string end with "learning!"?`, endsWithLearning); // true